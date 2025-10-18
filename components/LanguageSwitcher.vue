<template>
  <div class="relative">
    <button
      @click="switchLanguage(currentLocale === 'en' ? 'th' : 'en')"
      class="flex items-center justify-center w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 group focus:outline-none"
      :title="`Switch to ${currentLocale === 'en' ? 'Thai' : 'English'}`"
    >
      <!-- English Icon -->
      <span
        v-if="currentLocale === 'en'"
        class="text-sm font-bold text-gray-600 dark:text-gray-300 group-hover:text-brand-red-light transition-colors duration-300"
      >
        EN
      </span>
      
      <!-- Thai Icon -->
      <span
        v-else
        class="text-sm font-bold text-gray-600 dark:text-gray-300 group-hover:text-brand-red-light transition-colors duration-300"
      >
        ไทย
      </span>
    </button>
  </div>
</template>

<script setup>
import { computed } from 'vue'

// Import i18n composables properly for Nuxt 4
const { locale } = useI18n()
const switchLocalePath = useSwitchLocalePath()

// Get current locale
const currentLocale = computed(() => locale.value)

// Switch language function
const switchLanguage = async (newLocale) => {
  if (newLocale !== currentLocale.value) {
    try {
      // Set cookie to prevent future browser detection overrides
      const cookie = useCookie('i18n_redirected', {
        default: () => 'manual',
        maxAge: 60 * 60 * 24 * 365 // 1 year
      })
      cookie.value = 'manual'
      
      // Get the current route in the new locale
      const newPath = switchLocalePath(newLocale)
      
      // Navigate to the same page but in the new locale
      await navigateTo(newPath)
      
      console.log('Language switched to:', newLocale, 'Path:', newPath)
    } catch (error) {
      console.error('Error switching language:', error)
    }
  }
}
</script>