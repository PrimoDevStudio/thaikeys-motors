<template>
  <!-- Budget Calculator Section -->
  <section class="bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
    <div class="max-w-7xl mx-auto px-3 lg:px-4">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-6 items-stretch">
        
        <!-- LEFT SIDE - Image & Text in White Box -->
        <div class="order-2 lg:order-1">
          <div class="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl border-2 border-gray-100 dark:border-gray-700 p-6 lg:p-8 h-full flex flex-col justify-center">
            
            <!-- Vehicle Image -->
            <div class="relative max-w-2xl mx-auto flex-1 flex items-center">
              <transition name="fade" mode="out-in">
                <div :key="vehicleImage" class="relative w-full">
                  <NuxtImg
                    :src="vehicleImage"
                    :alt="vehicleType"
                    class="w-full h-auto object-contain transform hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              </transition>
            </div>
            
            <!-- Value my vehicle link -->
            <button 
              @click="showTradeIn = !showTradeIn"
              class="text-brand-red-light hover:text-brand-red-dark font-medium mt-6 flex items-center gap-2 transition-colors duration-300 mx-auto lg:mx-0"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              Value my vehicle
            </button>
          </div>
        </div>

        <!-- RIGHT SIDE - Calculator -->
        <div class="order-1 lg:order-2">
          <div class="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl border-2 border-gray-100 dark:border-gray-700 p-6 lg:p-8 h-full">
            
            <!-- Estimated Buying Power -->
            <div class="mb-8 text-center">
              <div class="flex items-center justify-center gap-2 mb-2">
                <span class="bg-brand-red-dark text-white px-3 py-1 rounded-full text-xs font-bold">
                  New
                </span>
                <span class="text-sm text-brand-navy dark:text-gray-300 font-medium">
                  Estimated buying power
                </span>
                <button class="text-gray-400 hover:text-brand-navy dark:hover:text-white transition-colors">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </button>
              </div>
              <div class="text-5xl lg:text-6xl font-bold text-brand-navy dark:text-white">
                ฿{{ estimatedBuyingPower.toLocaleString() }}
              </div>
              <p class="text-sm text-gray-500 dark:text-gray-400 mt-2">
                Based on {{ interestRate }}% interest
              </p>
            </div>

            <!-- Monthly Budget -->
            <div class="mb-6">
              <label class="block text-sm font-medium text-brand-navy dark:text-gray-300 mb-3">
                Monthly budget
              </label>
              <div class="relative">
                <input
                  v-model.number="monthlyBudget"
                  type="number"
                  class="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-brand-navy dark:text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-red-light focus:border-brand-red-light text-lg font-semibold transition-colors duration-300"
                  placeholder="฿0"
                />
                <button class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-brand-navy dark:hover:text-white transition-colors">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </button>
              </div>
              <!-- Slider -->
              <input
                v-model.number="monthlyBudget"
                type="range"
                min="1000"
                max="50000"
                step="500"
                class="w-full mt-4 h-2 bg-gray-200 dark:bg-gray-600 rounded-lg appearance-none cursor-pointer accent-brand-red-light"
              />
              <div class="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-2">
                <span>฿1,000</span>
                <span>฿50,000</span>
              </div>
            </div>

            <!-- Loan Term & Deposit Amount Row -->
            <div class="grid grid-cols-2 gap-4 mb-6">
              <!-- Loan Term -->
              <div>
                <label class="block text-sm font-medium text-brand-navy dark:text-gray-300 mb-2">
                  Loan term
                </label>
                <select
                  v-model.number="loanTerm"
                  class="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-brand-navy dark:text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-red-light text-base font-medium transition-colors duration-300 appearance-none cursor-pointer"
                >
                  <option :value="12">12 months</option>
                  <option :value="24">24 months</option>
                  <option :value="36">36 months</option>
                  <option :value="48">48 months</option>
                  <option :value="60">60 months</option>
                  <option :value="72">72 months</option>
                </select>
              </div>

              <!-- Deposit Amount -->
              <div>
                <label class="block text-sm font-medium text-brand-navy dark:text-gray-300 mb-2">
                  Deposit amount
                </label>
                <input
                  v-model.number="depositAmount"
                  type="number"
                  class="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-brand-navy dark:text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-red-light text-base font-medium transition-colors duration-300"
                  placeholder="฿0"
                />
              </div>
            </div>

            <!-- Trade-in Amount (Conditional) -->
            <transition name="slide-down">
              <div v-if="showTradeIn" class="mb-6">
                <label class="block text-sm font-medium text-brand-navy dark:text-gray-300 mb-2">
                  Trade-in amount
                </label>
                <input
                  v-model.number="tradeInAmount"
                  type="number"
                  class="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-brand-navy dark:text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-red-light text-base font-medium transition-colors duration-300"
                  placeholder="฿0"
                />
              </div>
            </transition>

            <!-- Interest Rate -->
            <div class="mb-8">
              <div class="flex items-center justify-between mb-2">
                <label class="block text-sm font-medium text-brand-navy dark:text-gray-300">
                  Interest rate
                </label>
                <select
                  v-model="creditScore"
                  class="px-3 py-1 border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-brand-red-light dark:text-brand-red-light rounded-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand-red-light transition-colors duration-300 appearance-none cursor-pointer"
                >
                  <option value="excellent">Excellent credit</option>
                  <option value="good">Good credit</option>
                  <option value="fair">Fair credit</option>
                  <option value="poor">Poor credit</option>
                </select>
              </div>
              <div class="text-2xl font-bold text-brand-navy dark:text-white">
                {{ interestRate }}%
              </div>
            </div>

            <!-- CTA Button -->
            <button
              @click="handleSeeMatches"
              class="w-full bg-brand-red-light text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-brand-red-dark transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              See your matches
            </button>
            
            <!-- Fine Print -->
            <p class="text-xs text-gray-500 dark:text-gray-400 text-center mt-4">
              Rates and terms are estimates. Final approval subject to credit check.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, watch } from 'vue'

// Reactive data
const monthlyBudget = ref(1000)
const loanTerm = ref(72)
const depositAmount = ref(35000)
const tradeInAmount = ref(0)
const showTradeIn = ref(false)
const creditScore = ref('good')

// Interest rates based on credit score
const interestRates = {
  excellent: 8.5,
  good: 10.5,
  fair: 13.5,
  poor: 16.5
}

// Computed interest rate
const interestRate = computed(() => interestRates[creditScore.value])

// Calculate estimated buying power
const estimatedBuyingPower = computed(() => {
  const monthlyRate = interestRate.value / 100 / 12
  const numPayments = loanTerm.value
  
  // Loan amount formula: PV = PMT × [(1 - (1 + r)^-n) / r]
  const loanAmount = monthlyBudget.value * ((1 - Math.pow(1 + monthlyRate, -numPayments)) / monthlyRate)
  
  // Total buying power = loan amount + deposit + trade-in
  const totalBuyingPower = loanAmount + depositAmount.value + tradeInAmount.value
  
  return Math.round(totalBuyingPower)
})

// Dynamic vehicle image based on budget
const vehicleImage = computed(() => {
  const power = estimatedBuyingPower.value
  
  if (power < 100000) {
    return '/assets/placeholder/Honda-Wave-125i.webp'
  } else if (power < 500000) {
    return '/assets/placeholder/car-budget-low.webp'
  } else if (power < 1000000) {
    return '/assets/placeholder/car-budget-mid.webp'
  } else {
    return '/assets/placeholder/car-budget-high.webp'
  }
})

// Vehicle type label
const vehicleType = computed(() => {
  const power = estimatedBuyingPower.value
  
  if (power < 100000) return 'Motorcycle'
  if (power < 500000) return 'Economy Car'
  if (power < 1000000) return 'Mid-Range Car'
  return 'Premium Car'
})

// Handle see matches button
const handleSeeMatches = () => {
  console.log('Search params:', {
    monthlyBudget: monthlyBudget.value,
    loanTerm: loanTerm.value,
    depositAmount: depositAmount.value,
    tradeInAmount: tradeInAmount.value,
    interestRate: interestRate.value,
    estimatedBuyingPower: estimatedBuyingPower.value
  })
  
  // TODO: Navigate to search results with filters
  // navigateTo(`/search?maxPrice=${estimatedBuyingPower.value}&monthlyBudget=${monthlyBudget.value}`)
}
</script>

<style scoped>
/* Fade transition for image changes */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

/* Slide down transition for trade-in */
.slide-down-enter-active, .slide-down-leave-active {
  transition: all 0.3s ease;
}
.slide-down-enter-from, .slide-down-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Custom range slider styling */
input[type="range"]::-webkit-slider-thumb {
  appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #EF4444;
  cursor: pointer;
  border: 3px solid white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
}

input[type="range"]::-moz-range-thumb {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #EF4444;
  cursor: pointer;
  border: 3px solid white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
}

/* Custom select arrow */
select {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236B7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 0.75rem center;
  background-size: 1.25rem;
  padding-right: 2.5rem;
}
</style>