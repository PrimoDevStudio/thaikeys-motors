<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 font-sans transition-colors duration-300">

    <!-- Hero Section for Landlords -->
    <section class="relative pt-16 pb-24 overflow-hidden">
      <!-- Background with overlay -->
      <div class="absolute inset-0 z-0">
        <div class="absolute inset-0 bg-gradient-to-br from-green-700 via-emerald-800 to-teal-900"></div>
        <div class="absolute inset-0 bg-black/20"></div>
      </div>

      <!-- Hero Content -->
      <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div class="flex items-center justify-center min-h-[80vh]">
          <div class="text-center max-w-6xl w-full">
            <!-- Main Headline -->
            <h1 class="text-5xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
              <span class="inline-block bg-brand-turqoise-light text-brand-navy px-4 py-2 rounded-xl font-bold mb-4">
                {{ $t('landlords.hero.title_part1') }}
              </span>
              <br>
              <span class="text-white">{{ $t('landlords.hero.title_part2') }}</span>
            </h1>
            
            <!-- Subtitle -->
            <p class="text-xl lg:text-2xl text-white/90 mb-12 leading-relaxed mx-auto">
              {{ $t('landlords.hero.subtitle') }}
            </p>

            <!-- CTA Buttons -->
            <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <button class="bg-brand-turqoise-light text-brand-navy px-8 py-4 rounded-xl font-semibold hover:bg-teal-300 transition-all duration-300 text-lg shadow-lg hover:shadow-xl">
                {{ $t('landlords.hero.list_property') }}
              </button>
              <button class="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-green-800 transition-all duration-300 text-lg">
                {{ $t('landlords.hero.calculate_earnings') }}
              </button>
            </div>

            <!-- Key Stats -->
            <div class="grid grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div class="text-center">
                <div class="text-4xl lg:text-5xl font-bold text-brand-turqoise-light mb-2">8.15-12.5%</div>
                <div class="text-sm lg:text-base font-medium text-white/80">{{ $t('landlords.stats.commission') }}</div>
              </div>
              <div class="text-center">
                <div class="text-4xl lg:text-5xl font-bold text-brand-turqoise-light mb-2">24h</div>
                <div class="text-sm lg:text-base font-medium text-white/80">{{ $t('landlords.stats.live_time') }}</div>
              </div>
              <div class="text-center">
                <div class="text-4xl lg:text-5xl font-bold text-brand-turqoise-light mb-2">90%</div>
                <div class="text-sm lg:text-base font-medium text-white/80">{{ $t('landlords.stats.success_rate') }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Cost Calculator Section -->
    <section class="py-24 bg-gradient-to-br from-blue-50 to-teal-50 dark:from-blue-900/20 dark:to-teal-900/20 transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-4xl lg:text-5xl font-bold text-brand-navy dark:text-white mb-6">
            Calculate Your Real Savings
          </h2>
          <p class="text-xl text-brand-navy dark:text-gray-300 max-w-3xl mx-auto">
            See exactly how much you save with our commission model vs traditional agents over your lease period.
          </p>
        </div>

        <!-- Calculator Interface - Similar to Homepage -->
        <div class="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
          
          <!-- Monthly Rent Input -->
          <div class="mb-8">
            <label class="block text-lg font-semibold text-brand-navy dark:text-white mb-4 text-center">
              Enter Your Monthly Rent
            </label>
            <div class="max-w-md mx-auto">
              <div class="relative">
                <span class="absolute left-4 top-1/2 transform -translate-y-1/2 text-xl font-bold text-brand-navy dark:text-gray-300">฿</span>
                <input 
                  v-model="formattedRent" 
                  @input="handleRentInput"
                  type="text" 
                  class="w-full pl-12 pr-4 py-4 text-xl font-bold border-2 border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-brand-turqoise-light focus:border-brand-turqoise-light bg-white dark:bg-gray-700 text-brand-navy dark:text-white text-center"
                  placeholder="10,000"
                >
              </div>
            </div>
          </div>

          <!-- Lease Length Tabs - Like Homepage -->
          <div class="mb-8">
            <div class="flex justify-center mb-6">
              <div class="bg-gray-100 dark:bg-gray-700 p-1 rounded-xl inline-flex">
                <button 
                  @click="leaseLength = 'short'"
                  :class="[
                    'px-6 py-3 rounded-lg font-semibold transition-all duration-300',
                    leaseLength === 'short' 
                      ? 'bg-brand-turqoise-light text-brand-navy shadow-md' 
                      : 'text-gray-600 dark:text-gray-300 hover:text-brand-navy dark:hover:text-white'
                  ]"
                >
                  1-3 Months
                </button>
                <button 
                  @click="leaseLength = 'medium'"
                  :class="[
                    'px-6 py-3 rounded-lg font-semibold transition-all duration-300',
                    leaseLength === 'medium' 
                      ? 'bg-brand-turqoise-light text-brand-navy shadow-md' 
                      : 'text-gray-600 dark:text-gray-300 hover:text-brand-navy dark:hover:text-white'
                  ]"
                >
                  3-6 Months
                </button>
                <button 
                  @click="leaseLength = 'long'"
                  :class="[
                    'px-6 py-3 rounded-lg font-semibold transition-all duration-300',
                    leaseLength === 'long' 
                      ? 'bg-brand-turqoise-light text-brand-navy shadow-md' 
                      : 'text-gray-600 dark:text-gray-300 hover:text-brand-navy dark:hover:text-white'
                  ]"
                >
                  1+ Years
                </button>
              </div>
            </div>

            <!-- Commission Rate Info -->
            <div class="text-center">
              <div class="inline-flex items-center bg-brand-turqoise-light/10 dark:bg-brand-turqoise-light/20 px-4 py-2 rounded-full">
                <svg class="w-5 h-5 text-brand-turqoise-light mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
                </svg>
                <span class="text-sm font-medium text-brand-navy dark:text-white">
                  {{ currentCommissionInfo }}
                </span>
              </div>
            </div>
          </div>

          <!-- Cost Comparison Cards -->
          <div class="grid md:grid-cols-3 gap-6 mb-8">
            
            <!-- Traditional Agent -->
            <div class="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border-2 border-red-200 dark:border-red-800">
              <div class="text-center">
                <div class="w-12 h-12 bg-red-100 dark:bg-red-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg class="w-6 h-6 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 class="text-lg font-bold text-red-700 dark:text-red-400 mb-2">Traditional Agent</h3>
                <div class="text-3xl font-bold text-red-700 dark:text-red-400 mb-1">฿{{ traditionalCost.toLocaleString() }}</div>
                <div class="text-xs text-red-600 dark:text-red-300 mb-4">{{ traditionalCostText }}</div>
                <div class="text-sm text-red-700 dark:text-red-300">
                  <div class="font-semibold">Total Cost</div>
                  <div class="text-2xl font-bold">฿{{ traditionalTotalCost.toLocaleString() }}</div>
                </div>
              </div>
            </div>

            <!-- Our Agent -->
            <div class="bg-gradient-to-br from-brand-turqoise-light to-teal-400 p-6 rounded-xl border-2 border-brand-turqoise-light shadow-xl transform scale-105">
              <div class="text-center">
                <div class="w-12 h-12 bg-brand-navy rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div class="inline-block bg-brand-navy text-white px-3 py-1 rounded-full text-xs font-semibold mb-2">
                  Save money and get the best service
                </div>
                <h3 class="text-lg font-bold text-brand-navy mb-2">Our Agent</h3>
                <div class="text-3xl font-bold text-brand-navy mb-1">฿{{ ourAgentMonthlyCost.toLocaleString() }}</div>
                <div class="text-xs text-brand-navy/80 mb-4">{{ displayCommissionRate }}% per month</div>
                <div class="text-sm text-brand-navy">
                  <div class="font-semibold">Total Cost ({{ leaseDuration }} months)</div>
                  <div class="text-2xl font-bold">฿{{ ourAgentTotalCost.toLocaleString() }}</div>
                </div>
              </div>
            </div>

            <!-- DIY Option -->
            <div class="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-200 dark:border-green-800">
              <div class="text-center">
                <div class="w-12 h-12 bg-green-100 dark:bg-green-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg class="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 class="text-lg font-bold text-green-700 dark:text-green-400 mb-2">DIY Platform</h3>
                <div class="text-3xl font-bold text-green-700 dark:text-green-400 mb-1">฿1000</div>
                <div class="text-xs text-green-600 dark:text-green-300 mb-4">one-time platform fee</div>
                <div class="text-sm text-green-700 dark:text-green-300">
                  <div class="font-semibold">Total Cost</div>
                  <div class="text-2xl font-bold">฿1000</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Savings Summary -->
          <div class="grid md:grid-cols-2 gap-6">
            <!-- Savings with Our Agent -->
            <div class="bg-gradient-to-r from-emerald-500 to-teal-600 p-6 rounded-xl text-white text-center">
              <div class="text-lg font-semibold mb-2">Save with Our Agent</div>
              <div class="text-3xl font-bold mb-1">฿{{ savingsWithAgent.toLocaleString() }}</div>
              <div class="text-sm opacity-90">{{ savingsPercentage }}% saved vs traditional agent + the best service</div>
            </div>

            <!-- Savings with DIY -->
            <div class="bg-gradient-to-r from-green-500 to-emerald-600 p-6 rounded-xl text-white text-center">
              <div class="text-lg font-semibold mb-2">Save with DIY</div>
              <div class="text-3xl font-bold mb-1">฿{{ savingsWithDIY.toLocaleString() }}</div>
              <div class="text-sm opacity-90">vs traditional agent</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Three-Way Cost Comparison Section -->
    <section class="py-24 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl lg:text-5xl font-bold text-brand-navy dark:text-white mb-6">
            {{ $t('landlords.costs.title') }}
          </h2>
          <p class="text-xl text-brand-navy dark:text-gray-300 max-w-4xl mx-auto">
            {{ $t('landlords.costs.subtitle') }}
          </p>
        </div>

        <div class="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <!-- Traditional Agent (The Bad Option) -->
          <div class="bg-red-50 dark:bg-red-900/20 p-8 rounded-2xl border-2 border-red-200 dark:border-red-800">
            <div class="text-center mb-8">
              <h3 class="text-2xl font-bold text-red-700 dark:text-red-400 mb-4">{{ $t('landlords.costs.traditional.title') }}</h3>
              <div class="text-5xl font-bold text-red-700 dark:text-red-400 mb-2">฿{{ displayTraditionalCost.toLocaleString() }}</div>
              <div class="text-red-600 dark:text-red-300 text-sm">{{ traditionalCostText }}</div>
              <div class="inline-block bg-red-600 text-white px-3 py-1 rounded-full text-xs font-semibold mt-2">
                {{ $t('landlords.costs.traditional.warning') }}
              </div>
            </div>
            
            <div class="space-y-3 mb-8">
              <div class="flex items-start text-red-700 dark:text-red-300">
                <svg class="w-5 h-5 text-red-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
                <span class="text-sm">฿{{ displayTraditionalCost.toLocaleString() }} upfront expense less cashflow</span>
              </div>
              <div class="flex items-start text-red-700 dark:text-red-300">
                <svg class="w-5 h-5 text-red-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
                <span class="text-sm">{{ $t('landlords.costs.traditional.point2') }}</span>
              </div>
              <div class="flex items-start text-red-700 dark:text-red-300">
                <svg class="w-5 h-5 text-red-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
                <span class="text-sm">{{ $t('landlords.costs.traditional.point3') }}</span>
              </div>
              <div class="flex items-start text-red-700 dark:text-red-300">
                <svg class="w-5 h-5 text-red-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
                <span class="text-sm">{{ $t('landlords.costs.traditional.point4') }}</span>
              </div>
              <div class="flex items-start text-red-700 dark:text-red-300">
                <svg class="w-5 h-5 text-red-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
                <span class="text-sm">{{ $t('landlords.costs.traditional.point5') }}</span>
              </div>
            </div>
          </div>

          <!-- thaikeys.co.th Professional Agent (The Smart Choice) -->
          <div class="bg-gradient-to-br from-brand-turqoise-light to-teal-400 p-8 rounded-2xl border-2 border-brand-turqoise-light shadow-xl transform scale-105">
            <div class="text-center mb-8">
              <div class="inline-block bg-brand-navy text-white px-3 py-1 rounded-full text-sm font-semibold mb-4">
                {{ $t('landlords.costs.professional.badge') }}
              </div>
              <h3 class="text-2xl font-bold text-brand-navy mb-4">{{ $t('landlords.costs.professional.title') }}</h3>
              <div class="text-5xl font-bold text-brand-navy mb-1">฿{{ displayOurAgentCost.toLocaleString() }}</div>
              <div class="text-brand-navy/80 text-sm">{{ $t('landlords.costs.professional.subtitle') }}</div>
              <div class="text-xs text-brand-navy/70 mt-1">{{ displayCommissionText }}</div>
            </div>
            
            <div class="space-y-3 mb-8">
              <div class="flex items-start text-brand-navy">
                <svg class="w-5 h-5 text-brand-navy mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span class="text-sm font-medium">{{ $t('landlords.costs.professional.point1') }}</span>
              </div>
              <div class="flex items-start text-brand-navy">
                <svg class="w-5 h-5 text-brand-navy mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span class="text-sm font-medium">{{ $t('landlords.costs.professional.point2') }}</span>
              </div>
              <div class="flex items-start text-brand-navy">
                <svg class="w-5 h-5 text-brand-navy mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span class="text-sm font-medium">{{ $t('landlords.costs.professional.point3') }}</span>
              </div>
              <div class="flex items-start text-brand-navy">
                <svg class="w-5 h-5 text-brand-navy mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span class="text-sm font-medium">{{ $t('landlords.costs.professional.point4') }}</span>
              </div>
              <div class="flex items-start text-brand-navy">
                <svg class="w-5 h-5 text-brand-navy mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span class="text-sm font-medium">{{ $t('landlords.costs.professional.point5') }}</span>
              </div>
            </div>
            <button class="w-full bg-brand-navy text-white py-3 px-6 rounded-xl font-semibold hover:bg-brand-navy/90 transition-all duration-300">
              {{ $t('landlords.costs.professional.cta') }}
            </button>
          </div>

          <!-- DIY Self-List (The Budget Option) -->
          <div class="bg-gray-50 dark:bg-gray-700 p-8 rounded-2xl border-2 border-gray-200 dark:border-gray-600">
            <div class="text-center mb-8">
              <h3 class="text-2xl font-bold text-brand-navy dark:text-white mb-4">{{ $t('landlords.costs.diy.title') }}</h3>
              <div class="text-5xl font-bold text-brand-navy dark:text-white mb-2">฿{{ displayDiyCost.toLocaleString() }}</div>
              <div class="text-gray-600 dark:text-gray-400 text-sm">{{ $t('landlords.costs.diy.subtitle') }}</div>
              <div class="inline-block bg-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold mt-2">
                {{ $t('landlords.costs.diy.savings') }}
              </div>
            </div>
            
            <div class="space-y-3 mb-8">
              <div class="flex items-start text-brand-navy dark:text-gray-300">
                <svg class="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span class="text-sm">{{ $t('landlords.costs.diy.point1') }}</span>
              </div>
              <div class="flex items-start text-brand-navy dark:text-gray-300">
                <svg class="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span class="text-sm">{{ $t('landlords.costs.diy.point2') }}</span>
              </div>
              <div class="flex items-start text-gray-500 dark:text-gray-400">
                <svg class="w-5 h-5 text-gray-400 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
                <span class="text-sm">{{ $t('landlords.costs.diy.limitation1') }}</span>
              </div>
              <div class="flex items-start text-gray-500 dark:text-gray-400">
                <svg class="w-5 h-5 text-gray-400 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
                <span class="text-sm">{{ $t('landlords.costs.diy.limitation2') }}</span>
              </div>
            </div>
            <button class="w-full border-2 border-brand-turqoise-light text-brand-turqoise-light py-3 px-6 rounded-xl font-semibold hover:bg-brand-turqoise-light hover:text-brand-navy transition-all duration-300">
              {{ $t('landlords.costs.diy.cta') }}
            </button>
          </div>
        </div>

        <!-- Comparison Summary -->
        <div class="mt-16 bg-gradient-to-r from-blue-50 to-teal-50 dark:from-blue-900/20 dark:to-teal-900/20 rounded-2xl p-8 border border-blue-200 dark:border-blue-800">
          <div class="text-center">
            <h3 class="text-2xl font-bold text-brand-navy dark:text-white mb-4">{{ $t('landlords.comparison.title') }}</h3>
            <div class="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div class="text-center">
                <div class="text-3xl font-bold text-red-600 mb-2">฿{{ displayTraditionalCost.toLocaleString() }}</div>
                <div class="text-sm text-brand-navy dark:text-gray-300">{{ $t('landlords.comparison.traditional_label') }}</div>
              </div>
              <div class="text-center">
                <div class="text-3xl font-bold text-brand-turqoise-light mb-2">฿{{ displayOurAgentCost.toLocaleString() }}</div>
                <div class="text-sm text-brand-navy dark:text-gray-300">{{ $t('landlords.comparison.professional_label') }}</div>
              </div>
              <div class="text-center">
                <div class="text-3xl font-bold text-green-600 mb-2">฿{{ displayDiyCost.toLocaleString() }}</div>
                <div class="text-sm text-brand-navy dark:text-gray-300">{{ $t('landlords.comparison.diy_label') }}</div>
              </div>
            </div>
            <p class="text-brand-navy dark:text-gray-300 mt-6 max-w-3xl mx-auto">
              {{ $t('landlords.comparison.description') }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- DIY Tools & Features -->
    <section class="py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl lg:text-5xl font-bold text-brand-navy dark:text-white mb-6">
            {{ $t('landlords.tools.title') }}
          </h2>
          <p class="text-xl text-brand-navy dark:text-gray-300 max-w-3xl mx-auto">
            {{ $t('landlords.tools.subtitle') }}
          </p>
        </div>

        <div class="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <!-- Feature List -->
          <div class="space-y-8">
            <!-- Professional Listings -->
            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-brand-turqoise-light rounded-xl flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-brand-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-semibold text-brand-navy dark:text-white mb-2">{{ $t('landlords.tools.professional_listings.title') }}</h3>
                <p class="text-brand-navy dark:text-gray-300">{{ $t('landlords.tools.professional_listings.description') }}</p>
              </div>
            </div>

            <!-- Smart Pricing -->
            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-brand-turqoise-light rounded-xl flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-brand-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-semibold text-brand-navy dark:text-white mb-2">{{ $t('landlords.tools.smart_pricing.title') }}</h3>
                <p class="text-brand-navy dark:text-gray-300">{{ $t('landlords.tools.smart_pricing.description') }}</p>
              </div>
            </div>

            <!-- Tenant Screening -->
            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-brand-turqoise-light rounded-xl flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-brand-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-semibold text-brand-navy dark:text-white mb-2">{{ $t('landlords.tools.tenant_screening.title') }}</h3>
                <p class="text-brand-navy dark:text-gray-300">{{ $t('landlords.tools.tenant_screening.description') }}</p>
              </div>
            </div>

            <!-- Digital Contracts -->
            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-brand-turqoise-light rounded-xl flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-brand-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-semibold text-brand-navy dark:text-white mb-2">{{ $t('landlords.tools.digital_contracts.title') }}</h3>
                <p class="text-brand-navy dark:text-gray-300">{{ $t('landlords.tools.digital_contracts.description') }}</p>
              </div>
            </div>
          </div>

          <!-- Dashboard Preview -->
          <div class="relative">
            <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-100 dark:border-gray-700">
              <div class="bg-gray-50 dark:bg-gray-700 px-6 py-4 border-b border-gray-100 dark:border-gray-600 rounded-t-xl">
                <h3 class="font-semibold text-brand-navy dark:text-white">{{ $t('landlords.dashboard.title') }}</h3>
              </div>
              
              <div class="p-6">
                <div class="grid grid-cols-2 gap-4 mb-6">
                  <div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-xl border border-green-200 dark:border-green-800">
                    <div class="text-2xl font-bold text-green-700 dark:text-green-400">3</div>
                    <div class="text-sm font-medium text-green-600 dark:text-green-300 mt-1">{{ $t('landlords.dashboard.active_listings') }}</div>
                  </div>
                  <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border border-blue-200 dark:border-blue-800">
                    <div class="text-2xl font-bold text-blue-700 dark:text-blue-400">47</div>
                    <div class="text-sm font-medium text-blue-600 dark:text-blue-300 mt-1">{{ $t('landlords.dashboard.inquiries') }}</div>
                  </div>
                </div>
                
                <div class="space-y-3">
                  <div class="flex items-center space-x-3 p-3 bg-teal-50 dark:bg-teal-900/20 rounded-xl border border-teal-100 dark:border-teal-800">
                    <div class="w-10 h-10 bg-brand-turqoise-light rounded-full flex items-center justify-center">
                      <span class="text-sm font-bold text-brand-navy">!</span>
                    </div>
                    <div class="flex-1">
                      <div class="font-medium text-brand-navy dark:text-white">{{ $t('landlords.dashboard.new_inquiry') }}</div>
                      <div class="text-sm text-brand-navy dark:text-gray-400">{{ $t('landlords.dashboard.inquiry_1') }}</div>
                    </div>
                  </div>
                  
                  <div class="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-xl">
                    <div class="w-10 h-10 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center">
                      <span class="text-sm font-bold text-brand-navy dark:text-gray-300">📊</span>
                    </div>
                    <div class="flex-1">
                      <div class="font-medium text-brand-navy dark:text-white">{{ $t('landlords.dashboard.price_suggestion') }}</div>
                      <div class="text-sm text-brand-navy dark:text-gray-400">{{ $t('landlords.dashboard.suggestion_1') }}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Additional Features Grid -->
        <div class="grid md:grid-cols-3 gap-8">
          <!-- Payment Collection -->
          <div class="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div class="w-16 h-16 bg-brand-turqoise-light rounded-full flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-brand-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-brand-navy dark:text-white mb-4">{{ $t('landlords.features.payment_collection.title') }}</h3>
            <p class="text-brand-navy dark:text-gray-300">{{ $t('landlords.features.payment_collection.description') }}</p>
          </div>

          <!-- Property Management -->
          <div class="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div class="w-16 h-16 bg-brand-turqoise-light rounded-full flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-brand-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-brand-navy dark:text-white mb-4">{{ $t('landlords.features.property_management.title') }}</h3>
            <p class="text-brand-navy dark:text-gray-300">{{ $t('landlords.features.property_management.description') }}</p>
          </div>

          <!-- Market Insights -->
          <div class="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div class="w-16 h-16 bg-brand-turqoise-light rounded-full flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-brand-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-brand-navy dark:text-white mb-4">{{ $t('landlords.features.market_insights.title') }}</h3>
            <p class="text-brand-navy dark:text-gray-300">{{ $t('landlords.features.market_insights.description') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Success Stories -->
    <section class="py-24 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl lg:text-5xl font-bold text-brand-navy dark:text-white mb-6">
            {{ $t('landlords.testimonials.title') }}
          </h2>
          <p class="text-xl text-brand-navy dark:text-gray-300 max-w-3xl mx-auto">
            {{ $t('landlords.testimonials.subtitle') }}
          </p>
        </div>

        <div class="grid lg:grid-cols-3 gap-8">
          <!-- Testimonial 1 -->
          <div class="bg-gray-50 dark:bg-gray-700 p-8 rounded-2xl">
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 bg-brand-turqoise-light rounded-full flex items-center justify-center mr-4">
                <span class="text-brand-navy font-bold">SK</span>
              </div>
              <div>
                <h4 class="font-semibold text-brand-navy dark:text-white">{{ $t('landlords.testimonials.testimonial1.name') }}</h4>
                <p class="text-sm text-brand-navy dark:text-gray-400">{{ $t('landlords.testimonials.testimonial1.role') }}</p>
              </div>
            </div>
            <p class="text-brand-navy dark:text-gray-300 italic">
              "{{ $t('landlords.testimonials.testimonial1.quote') }}"
            </p>
          </div>

          <!-- Testimonial 2 -->
          <div class="bg-gray-50 dark:bg-gray-700 p-8 rounded-2xl">
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 bg-brand-turqoise-light rounded-full flex items-center justify-center mr-4">
                <span class="text-brand-navy font-bold">MR</span>
              </div>
              <div>
                <h4 class="font-semibold text-brand-navy dark:text-white">{{ $t('landlords.testimonials.testimonial2.name') }}</h4>
                <p class="text-sm text-brand-navy dark:text-gray-400">{{ $t('landlords.testimonials.testimonial2.role') }}</p>
              </div>
            </div>
            <p class="text-brand-navy dark:text-gray-300 italic">
              "{{ $t('landlords.testimonials.testimonial2.quote') }}"
            </p>
          </div>

          <!-- Testimonial 3 -->
          <div class="bg-gray-50 dark:bg-gray-700 p-8 rounded-2xl">
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 bg-brand-turqoise-light rounded-full flex items-center justify-center mr-4">
                <span class="text-brand-navy font-bold">AT</span>
              </div>
              <div>
                <h4 class="font-semibold text-brand-navy dark:text-white">{{ $t('landlords.testimonials.testimonial3.name') }}</h4>
                <p class="text-sm text-brand-navy dark:text-gray-400">{{ $t('landlords.testimonials.testimonial3.role') }}</p>
              </div>
            </div>
            <p class="text-brand-navy dark:text-gray-300 italic">
              "{{ $t('landlords.testimonials.testimonial3.quote') }}"
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div class="max-w-4xl mx-auto px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl lg:text-5xl font-bold text-brand-navy dark:text-white mb-6">
            {{ $t('landlords.faq.title') }}
          </h2>
          <p class="text-xl text-brand-navy dark:text-gray-300">
            {{ $t('landlords.faq.subtitle') }}
          </p>
        </div>

        <div class="space-y-6">
          <div class="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
            <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-3">{{ $t('landlords.faq.q1.question') }}</h3>
            <p class="text-brand-navy dark:text-gray-300">{{ $t('landlords.faq.q1.answer') }}</p>
          </div>
          
          <div class="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
            <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-3">{{ $t('landlords.faq.q2.question') }}</h3>
            <p class="text-brand-navy dark:text-gray-300">{{ $t('landlords.faq.q2.answer') }}</p>
          </div>
          
          <div class="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
            <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-3">{{ $t('landlords.faq.q3.question') }}</h3>
            <p class="text-brand-navy dark:text-gray-300">{{ $t('landlords.faq.q3.answer') }}</p>
          </div>
          
          <div class="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
            <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-3">{{ $t('landlords.faq.q4.question') }}</h3>
            <p class="text-brand-navy dark:text-gray-300">{{ $t('landlords.faq.q4.answer') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Final CTA -->
    <section class="py-24 bg-brand-navy dark:bg-gray-900 text-white transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 class="text-4xl lg:text-5xl font-bold mb-6">
          {{ $t('landlords.final_cta.title') }}
        </h2>
        <p class="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
          {{ $t('landlords.final_cta.subtitle') }}
        </p>
        
        <div class="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button class="bg-brand-turqoise-light text-brand-navy px-8 py-4 rounded-xl font-semibold hover:bg-teal-300 transition-all duration-300 text-lg shadow-lg hover:shadow-xl">
            {{ $t('landlords.final_cta.primary') }}
          </button>
          <button class="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-brand-navy transition-all duration-300 text-lg">
            {{ $t('landlords.final_cta.secondary') }}
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Meta tags
useHead({
  title: 'Landlords - Rent Without Agent Fees',
  meta: [
    {
      name: 'description',
      content: 'Skip expensive agent fees! List your property directly on Thailand\'s most advanced platform. Professional tools, digital contracts, and payment processing - all for a fraction of traditional costs.'
    }
  ]
})

// Reactive data for calculator
const monthlyRent = ref(10000)
const leaseLength = ref('medium')

// Commission rates (CORRECTED)
const commissionRates = {
  short: 0.1250,  // 12.5%
  medium: 0.116, // 10%
  long: 0.0815    // 7.5%
}

// Lease duration in months (MAX for each category)
const leaseDurations = {
  short: 3,    // 1-3 months MAX
  medium: 6,   // 3-6 months MAX  
  long: 12     // 1+ year
}

// Add this to your script setup section
const formattedRent = ref('10,000')

// Format number with commas
const formatNumber = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

// Handle input formatting
const handleRentInput = (event) => {
  const value = event.target.value
  // Remove all non-digit characters
  const numbers = value.replace(/[^\d]/g, '')
  
  if (numbers) {
    monthlyRent.value = parseInt(numbers)
    formattedRent.value = formatNumber(numbers)
  } else {
    monthlyRent.value = 0
    formattedRent.value = ''
  }
}

// Update formatted value when monthlyRent changes
watch(monthlyRent, (newValue) => {
  if (newValue && newValue !== parseInt(formattedRent.value.replace(/,/g, ''))) {
    formattedRent.value = formatNumber(newValue.toString())
  }
})

// Computed values
const currentCommissionRate = computed(() => commissionRates[leaseLength.value])
const leaseDuration = computed(() => leaseDurations[leaseLength.value])

const currentCommissionInfo = computed(() => {
  const rate = +(currentCommissionRate.value * 100).toFixed(2)
  const period = leaseLength.value === 'short' ? '1-3 months' : 
                 leaseLength.value === 'medium' ? '3-6 months' : '1+ years'
  return `${rate}% commission • ${period}`
})

// Traditional computed values
const traditionalCostText = computed(() => {
  if (leaseLength.value === 'short') {
    return '0.5 months upfront'
  } else if (leaseLength.value === 'medium') {
    return '1 month upfront'
  } else {
    return '1.5 months upfront'
  }
})

// Cost calculations (FIXED for Thai market rates)
const traditionalCost = computed(() => {
  // Traditional agents: 0.5 month for short-term, 1 month for medium-term, 1.5 months for long-term
  if (leaseLength.value === 'short') {
    return Math.round(monthlyRent.value * 0.5) // 0.5 month for 1-3 months
  } else if (leaseLength.value === 'medium') {
    return monthlyRent.value // 1 month for 3-6 months
  } else {
    return Math.round(monthlyRent.value * 1.5) // 1.5 months for 1+ years
  }
})

const traditionalTotalCost = computed(() => traditionalCost.value) // One-time upfront only

const ourAgentMonthlyCost = computed(() => Math.round(monthlyRent.value * currentCommissionRate.value))
const ourAgentTotalCost = computed(() => Math.round(ourAgentMonthlyCost.value * leaseDuration.value))

const diyCost = 1000

// Savings calculations (CORRECTED)
const savingsWithAgent = computed(() => traditionalTotalCost.value - ourAgentTotalCost.value)
const savingsWithDIY = computed(() => traditionalTotalCost.value - diyCost)
const savingsPercentage = computed(() => {
  if (traditionalTotalCost.value === 0) return 0
  return Math.round((savingsWithAgent.value / traditionalTotalCost.value) * 100)
})

// Display values for comparison cards - fixed with .toFixed(2)
const displayTraditionalCost = computed(() => traditionalCost.value)
const displayOurAgentCost = computed(() => ourAgentMonthlyCost.value)
const displayDiyCost = computed(() => diyCost)

const displayCommissionText = computed(() => {
  const rate = +(currentCommissionRate.value * 100).toFixed(2)
  return `${rate}% monthly commission - ${leaseLength.value === 'short' ? '1-3 months' : leaseLength.value === 'medium' ? '3-6 months' : '1+ years'}`
})

// Add display commission rate for template usage
const displayCommissionRate = computed(() => +(currentCommissionRate.value * 100).toFixed(2))
</script>