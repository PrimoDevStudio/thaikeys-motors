<template>
  <div class="relative">
    <button
      @click="toggleDropdown"
      class="flex items-center justify-center w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 group focus:outline-none"
      :title="`Current: ${currentCurrencyInfo.name} (${currentCurrencyInfo.symbol})`"
    >
      <!-- Current Currency Symbol -->
      <span class="text-lg font-bold text-gray-600 dark:text-gray-300 group-hover:text-brand-red-light transition-colors duration-300">
        {{ currentCurrencyInfo.symbol }}
      </span>
    </button>

    <!-- Currency Dropdown -->
    <div
      v-if="showDropdown"
      class="absolute top-12 right-0 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 min-w-[120px] z-50 p-1 space-y-1"
    >
      <button
        v-for="currency in currencies"
        :key="currency.code"
        @click="setCurrency(currency.code)"
        class="w-full px-3 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 flex items-center justify-between rounded-lg"
        :class="{ 
          'text-brand-red-light font-medium bg-blue-50 dark:bg-gray-700': currentCurrency === currency.code,
          'text-gray-700 dark:text-gray-200': currentCurrency !== currency.code
        }"
      >
        <span>{{ currency.code }}</span>
        <span class="font-bold">{{ currency.symbol }}</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

// Available currencies as requested
const currencies = [
  { code: 'THB', symbol: '฿', name: 'Thai Baht' },
  { code: 'USD', symbol: '$', name: 'US Dollar' },
  { code: 'GBP', symbol: '£', name: 'British Pound' },
  { code: 'EUR', symbol: '€', name: 'Euro' },
  { code: 'JPY', symbol: '¥', name: 'Japanese Yen' },
  { code: 'AUD', symbol: 'A$', name: 'Australian Dollar' },
]

// Reactive state
const currentCurrency = ref('THB') // Default to THB for Thailand
const showDropdown = ref(false)

// Toggle dropdown visibility
const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value
}

// Set specific currency
const setCurrency = (currencyCode) => {
  if (currentCurrency.value !== currencyCode) {
    currentCurrency.value = currencyCode
    saveCurrency(currencyCode)
    showDropdown.value = false
    
    console.log('Currency switched to:', currencyCode)
  }
}

// Save currency preference
const saveCurrency = (currency) => {
  if (process.client) {
    localStorage.setItem('preferred_currency', currency)
    
    // Create a cookie for server-side access (useful for Nuxt)
    const cookie = useCookie('preferred_currency', {
      default: () => 'THB',
      maxAge: 60 * 60 * 24 * 365 // 1 year
    })
    cookie.value = currency
    
    // Emit event for other components to listen to
    window.dispatchEvent(new CustomEvent('currency-changed', { 
      detail: { 
        currency,
        currencyInfo: getCurrentCurrencyInfo(currency)
      } 
    }))
  }
}

// Get saved currency preference
const getSavedCurrency = () => {
  if (process.client) {
    return localStorage.getItem('preferred_currency') || 'THB'
  }
  return 'THB'
}

// Get currency info by code
const getCurrentCurrencyInfo = (code) => {
  return currencies.find(c => c.code === code) || currencies[0]
}

// Close dropdown when clicking outside
const handleClickOutside = (event) => {
  if (!event.target.closest('.relative')) {
    showDropdown.value = false
  }
}

// Initialize currency on mount
onMounted(() => {
  if (process.client) {
    currentCurrency.value = getSavedCurrency()
    document.addEventListener('click', handleClickOutside)
    
    // Optional: Listen for currency changes from other components
    window.addEventListener('currency-request', (event) => {
      if (event.detail && event.detail.currency) {
        setCurrency(event.detail.currency)
      }
    })
  }
})

// Cleanup
onBeforeUnmount(() => {
  if (process.client) {
    document.removeEventListener('click', handleClickOutside)
  }
})

// Computed current currency info
const currentCurrencyInfo = computed(() => {
  return getCurrentCurrencyInfo(currentCurrency.value)
})

// Export for parent components to use
defineExpose({
  currentCurrency,
  currentCurrencyInfo,
  setCurrency
})
</script>