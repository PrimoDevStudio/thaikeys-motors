<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 font-sans transition-colors duration-300">

    <!-- Hero Section for Renters -->
    <section class="relative pt-16 pb-24 overflow-hidden">
      <!-- Background with overlay -->
      <div class="absolute inset-0 z-0">
        <NuxtImg 
        src="/assets/placeholder/thaikeys-rent-hero.webp"
        alt="Thailand rental property background"
        class="w-full h-full object-cover"
        fetchpriority="high"
        preload
        />
        <div class="absolute inset-0 bg-black/60"></div>
      </div>

      <!-- Hero Content -->
      <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div class="flex items-center justify-center min-h-[80vh]">
          <div class="text-center max-w-6xl w-full">
            <!-- Main Headline -->
            <h1 class="text-4xl lg:text-6xl font-black text-white mb-6 leading-tight tracking-tight">
              <span class="bg-gradient-to-r from-brand-red-light to-brand-red-dark bg-clip-text text-transparent">
                Rent Smart
              </span>
              <br>
              <span class="text-white">Live Better in Thailand</span>
            </h1>
            
            <!-- Subtitle -->
            <p class="text-xl lg:text-2xl text-white/90 mb-12 leading-relaxed mx-auto">
              Find verified rentals with transparent pricing, digital payments, and transit station proximity mapping
            </p>

            <!-- CTA Buttons -->
            <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <button class="bg-brand-red-light text-brand-navy px-8 py-4 rounded-xl font-semibold hover:bg-teal-300 transition-all duration-300 text-lg shadow-lg hover:shadow-xl">
                Find Rental Properties
              </button>
              <button class="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-800 transition-all duration-300 text-lg">
                Calculate Affordability
              </button>
            </div>

            <!-- Key Stats -->
            <div class="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div class="text-center">
                <div class="text-4xl lg:text-5xl font-bold text-brand-red-light mb-2">150K+</div>
                <div class="text-sm lg:text-base font-medium text-white/80">Available Rentals</div>
              </div>
              <div class="text-center">
                <div class="text-4xl lg:text-5xl font-bold text-brand-red-light mb-2">24h</div>
                <div class="text-sm lg:text-base font-medium text-white/80">Average Response</div>
              </div>
              <div class="text-center">
                <div class="text-4xl lg:text-5xl font-bold text-brand-red-light mb-2">97%</div>
                <div class="text-sm lg:text-base font-medium text-white/80">Tenant Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Rental Budget Calculator -->
    <section class="py-24 bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20 transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-4xl lg:text-5xl font-bold text-brand-navy dark:text-white mb-6">
            Rental Affordability Calculator
          </h2>
          <p class="text-xl text-brand-navy dark:text-gray-300 max-w-3xl mx-auto">
            Calculate your total rental costs including deposits, fees, and monthly expenses
          </p>
        </div>

        <!-- Calculator Interface -->
        <div class="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl max-w-4xl mx-auto">
          
          <!-- Monthly Income Input -->
          <div class="mb-8">
            <label class="block text-lg font-semibold text-brand-navy dark:text-white mb-4 text-center">
              Your Monthly Income
            </label>
            <div class="max-w-md mx-auto">
              <div class="relative">
                <span class="absolute left-4 top-1/2 transform -translate-y-1/2 text-lg font-bold text-brand-navy dark:text-gray-300">₿</span>
                <input 
                  v-model="monthlyIncome" 
                  type="text" 
                  class="w-full pl-12 pr-4 py-3 text-lg border-2 border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-brand-red-light focus:border-brand-red-light bg-white dark:bg-gray-700 text-brand-navy dark:text-white text-center"
                  placeholder="80,000"
                >
              </div>
            </div>
          </div>

          <!-- Recommended Budget -->
          <div class="grid md:grid-cols-3 gap-6 mb-8">
            <div class="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-800 text-center">
              <h3 class="font-semibold text-green-700 dark:text-green-400 mb-2">Conservative (25%)</h3>
              <div class="text-2xl font-bold text-green-700 dark:text-green-400">₿{{ conservativeBudget.toLocaleString() }}</div>
              <p class="text-sm text-green-600 dark:text-green-300 mt-1">Safe monthly rent</p>
            </div>
            <div class="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border-2 border-brand-red-light text-center">
              <h3 class="font-semibold text-brand-red-light mb-2">Recommended (30%)</h3>
              <div class="text-2xl font-bold text-brand-red-light">₿{{ recommendedBudget.toLocaleString() }}</div>
              <p class="text-sm text-blue-600 dark:text-blue-300 mt-1">Balanced budget</p>
            </div>
            <div class="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl border border-orange-200 dark:border-orange-800 text-center">
              <h3 class="font-semibold text-orange-700 dark:text-orange-400 mb-2">Maximum (35%)</h3>
              <div class="text-2xl font-bold text-orange-700 dark:text-orange-400">₿{{ maximumBudget.toLocaleString() }}</div>
              <p class="text-sm text-orange-600 dark:text-orange-300 mt-1">Stretch budget</p>
            </div>
          </div>

          <!-- Total Move-in Costs -->
          <div class="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
            <h3 class="text-xl font-bold text-brand-navy dark:text-white mb-4 text-center">Total Move-in Costs</h3>
            <div class="space-y-4">
              <div class="flex justify-between items-center">
                <span class="text-brand-navy dark:text-gray-300">First Month Rent</span>
                <span class="font-semibold text-brand-navy dark:text-white">₿{{ recommendedBudget.toLocaleString() }}</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-brand-navy dark:text-gray-300">Security Deposit (2 months)</span>
                <span class="font-semibold text-brand-navy dark:text-white">₿{{ (recommendedBudget * 2).toLocaleString() }}</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-brand-navy dark:text-gray-300">Agent Commission (1 month)</span>
                <span class="font-semibold text-brand-navy dark:text-white">₿{{ recommendedBudget.toLocaleString() }}</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-brand-navy dark:text-gray-300">Utility Deposits</span>
                <span class="font-semibold text-brand-navy dark:text-white">₿5,000</span>
              </div>
              <div class="border-t border-gray-300 dark:border-gray-600 pt-4">
                <div class="flex justify-between items-center">
                  <span class="text-lg font-bold text-brand-navy dark:text-white">Total Move-in Cost</span>
                  <span class="text-2xl font-bold text-brand-red-light">₿{{ totalMoveInCost.toLocaleString() }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Rental Types Section -->
    <section class="py-24 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl lg:text-5xl font-bold text-brand-navy dark:text-white mb-6">
            Rental Property Types
          </h2>
          <p class="text-xl text-brand-navy dark:text-gray-300 max-w-3xl mx-auto">
            From budget-friendly studios to luxury penthouses, find the perfect rental for your lifestyle
          </p>
        </div>

        <div class="grid lg:grid-cols-4 gap-6">
          <!-- Studio -->
          <div class="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-2xl border border-blue-200 dark:border-blue-800">
            <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-xl flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
              </svg>
            </div>
            <h3 class="text-lg font-bold text-brand-navy dark:text-white mb-2">Studio</h3>
            <p class="text-sm text-brand-navy dark:text-gray-300 mb-4">Compact living with efficiency and affordability</p>
            <div class="text-center">
              <div class="text-lg font-bold text-brand-navy dark:text-white">₿8K - ₿25K</div>
              <div class="text-xs text-brand-navy dark:text-gray-400">per month</div>
            </div>
          </div>

          <!-- 1 Bedroom -->
          <div class="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-2xl border border-green-200 dark:border-green-800">
            <div class="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-xl flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2zm0 0V9a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V7z" />
              </svg>
            </div>
            <h3 class="text-lg font-bold text-brand-navy dark:text-white mb-2">1 Bedroom</h3>
            <p class="text-sm text-brand-navy dark:text-gray-300 mb-4">Perfect for singles or couples</p>
            <div class="text-center">
              <div class="text-lg font-bold text-brand-navy dark:text-white">₿15K - ₿45K</div>
              <div class="text-xs text-brand-navy dark:text-gray-400">per month</div>
            </div>
          </div>

          <!-- 2+ Bedrooms -->
          <div class="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-2xl border border-purple-200 dark:border-purple-800">
            <div class="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-xl flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 class="text-lg font-bold text-brand-navy dark:text-white mb-2">2+ Bedrooms</h3>
            <p class="text-sm text-brand-navy dark:text-gray-300 mb-4">Family homes and shared living</p>
            <div class="text-center">
              <div class="text-lg font-bold text-brand-navy dark:text-white">₿25K - ₿80K</div>
              <div class="text-xs text-brand-navy dark:text-gray-400">per month</div>
            </div>
          </div>

          <!-- Luxury -->
          <div class="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 p-6 rounded-2xl border border-yellow-200 dark:border-yellow-800">
            <div class="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/20 rounded-xl flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-yellow-600 dark:text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <h3 class="text-lg font-bold text-brand-navy dark:text-white mb-2">Luxury</h3>
            <p class="text-sm text-brand-navy dark:text-gray-300 mb-4">Premium amenities and prime locations</p>
            <div class="text-center">
              <div class="text-lg font-bold text-brand-navy dark:text-white">₿50K - ₿200K+</div>
              <div class="text-xs text-brand-navy dark:text-gray-400">per month</div>
            </div>
          </div>
        </div>

        <!-- Rental Cost Breakdown -->
        <div class="mt-12 bg-white dark:bg-gray-800 rounded-xl p-6 max-w-2xl mx-auto">
          <h3 class="text-xl font-bold text-brand-navy dark:text-white mb-4 text-center">Recommended Monthly Budget</h3>
          <div class="space-y-4">
            <div class="flex justify-between items-center">
              <span class="text-brand-navy dark:text-gray-300">Monthly Rent (30% of income)</span>
              <span class="font-semibold text-brand-navy dark:text-white">₿{{ recommendedRent.toLocaleString() }}</span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-brand-navy dark:text-gray-300">Utilities (electric, water, internet)</span>
              <span class="font-semibold text-brand-navy dark:text-white">₿3,000 - ₿8,000</span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-brand-navy dark:text-gray-300">Transportation</span>
              <span class="font-semibold text-brand-navy dark:text-white">₿2,000 - ₿5,000</span>
            </div>
            <div class="border-t border-gray-300 dark:border-gray-600 pt-4">
              <div class="flex justify-between items-center">
                <span class="text-lg font-bold text-brand-navy dark:text-white">Total Monthly Living Cost</span>
                <span class="text-xl font-bold text-brand-red-light">₿{{ totalMonthlyCost.toLocaleString() }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Renter Services Section -->
    <section class="py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl lg:text-5xl font-bold text-brand-navy dark:text-white mb-6">
            Complete Renter Support
          </h2>
          <p class="text-xl text-brand-navy dark:text-gray-300 max-w-3xl mx-auto">
            From property search to move-in, we make renting in Thailand simple and transparent
          </p>
        </div>

        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <!-- Services List -->
          <div class="space-y-8">
            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-brand-red-light rounded-xl flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-brand-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-semibold text-brand-navy dark:text-white mb-2">BTS Commute Mapping</h3>
                <p class="text-brand-navy dark:text-gray-300">Visualize your daily commute with integrated BTS mapping and travel time calculations to your workplace.</p>
              </div>
            </div>

            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-brand-red-light rounded-xl flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-brand-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-semibold text-brand-navy dark:text-white mb-2">Digital Lease Processing</h3>
                <p class="text-brand-navy dark:text-gray-300">Secure digital contracts, deposits, and payments with transparent fees and instant confirmations.</p>
              </div>
            </div>

            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-brand-red-light rounded-xl flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-brand-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v6a2 2 0 002 2h2m0 0h2m0 0h2a2 2 0 002-2V7a2 2 0 00-2-2h-2m0 0V5a2 2 0 00-2-2H9a2 2 0 00-2 2v0z" />
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-semibold text-brand-navy dark:text-white mb-2">Property Verification</h3>
                <p class="text-brand-navy dark:text-gray-300">All photos verified, prices confirmed, and availability updated in real-time to avoid disappointment.</p>
              </div>
            </div>

            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-brand-red-light rounded-xl flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-brand-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-semibold text-brand-navy dark:text-white mb-2">24/7 Support</h3>
                <p class="text-brand-navy dark:text-gray-300">Round-the-clock assistance for viewings, applications, and rental process questions.</p>
              </div>
            </div>
          </div>

            <!-- Rental Process Visual -->
            <div class="relative">
            <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden">
                <div class="bg-gray-50 dark:bg-gray-700 px-6 py-4 border-b border-gray-100 dark:border-gray-600">
                <h3 class="font-semibold text-brand-navy dark:text-white">Rental Application Status</h3>
                </div>
                
                <div class="p-6">
                <div class="space-y-4">
                    <div class="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-xl border border-gray-200 dark:border-gray-600">
                    <div class="w-10 h-10 bg-gray-500 rounded-full flex items-center justify-center">
                        <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                    </div>
                    <div class="flex-1">
                        <div class="font-medium text-brand-navy dark:text-white">Property Inquiry Made</div>
                        <div class="text-sm text-brand-navy dark:text-gray-400">Park Origin Thonglor - 1BR/1BA</div>
                    </div>
                    </div>

                    <div class="flex items-center space-x-4 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
                    <div class="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center">
                        <span class="text-sm font-bold text-white">!</span>
                    </div>
                    <div class="flex-1">
                        <div class="font-medium text-brand-navy dark:text-white">Viewing Scheduled</div>
                        <div class="text-sm text-brand-navy dark:text-gray-400">Tomorrow 2:00 PM - Altitude Forest</div>
                    </div>
                    </div>

                    <div class="flex items-center space-x-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
                    <div class="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                        <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <div class="flex-1">
                        <div class="font-medium text-brand-navy dark:text-white">Application Pending Review</div>
                        <div class="text-sm text-brand-navy dark:text-gray-400">The Lofts Silom - Studio</div>
                    </div>
                    </div>

                    <div class="flex items-center space-x-4 p-4 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-200 dark:border-green-800">
                    <div class="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                        <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    <div class="flex-1">
                        <div class="font-medium text-brand-navy dark:text-white">Application Approved</div>
                        <div class="text-sm text-brand-navy dark:text-gray-400">Sansiri Ekkamai - 2BR/2BA</div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
      </div>
    </section>

    <!-- Rental Benefits Section -->
    <section class="py-24 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl lg:text-5xl font-bold text-brand-navy dark:text-white mb-6">
            Why Rent Through ThaiKeys
          </h2>
          <p class="text-xl text-brand-navy dark:text-gray-300 max-w-3xl mx-auto">
            Modern rental experience with transparency, security, and convenience
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="w-16 h-16 bg-brand-red-light rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-brand-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-brand-navy dark:text-white mb-3">Secure Deposits</h3>
            <p class="text-brand-navy dark:text-gray-300">Digital escrow protection for security deposits with transparent fee structure and quick refund processing.</p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 bg-brand-red-light rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-brand-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-brand-navy dark:text-white mb-3">Verified Properties</h3>
            <p class="text-brand-navy dark:text-gray-300">All listings verified for authenticity, accurate photos, and current availability to eliminate rental scams.</p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 bg-brand-red-light rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-brand-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-brand-navy dark:text-white mb-3">Instant Applications</h3>
            <p class="text-brand-navy dark:text-gray-300">Submit rental applications instantly with digital document upload and automated landlord notifications.</p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 bg-brand-red-light rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-brand-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-brand-navy dark:text-white mb-3">Direct Communication</h3>
            <p class="text-brand-navy dark:text-gray-300">Chat directly with landlords and agents through our platform with translation support available.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Rental Tips Section -->
    <section class="py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl lg:text-5xl font-bold text-brand-navy dark:text-white mb-6">
            Rental Tips for Thailand
          </h2>
          <p class="text-xl text-brand-navy dark:text-gray-300 max-w-3xl mx-auto">
            Essential advice for finding and securing the perfect rental property
          </p>
        </div>

        <div class="grid lg:grid-cols-2 gap-8">
          <div class="space-y-6">
            <div class="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
              <h3 class="text-xl font-bold text-brand-navy dark:text-white mb-3">Best Time to Search</h3>
              <p class="text-brand-navy dark:text-gray-300">Peak rental season is November-March when expats arrive. Start searching 30-60 days before your move date for the best selection and pricing.</p>
            </div>

            <div class="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
              <h3 class="text-xl font-bold text-brand-navy dark:text-white mb-3">Negotiation Strategy</h3>
              <p class="text-brand-navy dark:text-gray-300">Annual leases often have 10-20% negotiation room. Longer-term commitments (2+ years) can secure better rates and terms.</p>
            </div>

            <div class="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
              <h3 class="text-xl font-bold text-brand-navy dark:text-white mb-3">Location Priorities</h3>
              <p class="text-brand-navy dark:text-gray-300">Proximity to BTS stations can save 30-60 minutes daily. Properties within 500m of stations command premium but offer lifestyle benefits.</p>
            </div>
          </div>

          <div class="space-y-6">
            <div class="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
              <h3 class="text-xl font-bold text-brand-navy dark:text-white mb-3">Required Documents</h3>
              <p class="text-brand-navy dark:text-gray-300">Prepare passport, visa, work permit (if applicable), bank statements, and employment letter. Digital copies speed up applications.</p>
            </div>

            <div class="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
              <h3 class="text-xl font-bold text-brand-navy dark:text-white mb-3">Hidden Costs to Avoid</h3>
              <p class="text-brand-navy dark:text-gray-300">Watch for maintenance fees, parking charges, and utility caps. Our verified listings include all fees upfront to prevent surprises.</p>
            </div>

            <div class="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
              <h3 class="text-xl font-bold text-brand-navy dark:text-white mb-3">Move-in Inspection</h3>
              <p class="text-brand-navy dark:text-gray-300">Document existing damage with photos before signing. Most issues discovered later become tenant responsibility.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-24 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div class="max-w-4xl mx-auto px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl lg:text-5xl font-bold text-brand-navy dark:text-white mb-6">
            Renter FAQ
          </h2>
          <p class="text-xl text-brand-navy dark:text-gray-300">
            Common questions about renting property in Thailand
          </p>
        </div>

        <div class="space-y-6">
          <div class="bg-gray-50 dark:bg-gray-700 rounded-2xl p-6 shadow-lg">
            <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-3">How much deposit is typically required?</h3>
            <p class="text-brand-navy dark:text-gray-300">Most rentals require 2-3 months rent as security deposit, plus first month's rent upfront. Some landlords accept 1 month deposit for qualified tenants with good references.</p>
          </div>

          <div class="bg-gray-50 dark:bg-gray-700 rounded-2xl p-6 shadow-lg">
            <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-3">Are utilities included in rent?</h3>
            <p class="text-brand-navy dark:text-gray-300">Usually no. Expect ₿2,000-8,000 monthly for utilities depending on property size and usage. Some serviced apartments include utilities in the rent price.</p>
          </div>

          <div class="bg-gray-50 dark:bg-gray-700 rounded-2xl p-6 shadow-lg">
            <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-3">Can I negotiate rent prices?</h3>
            <p class="text-brand-navy dark:text-gray-300">Yes, especially for annual leases or during low season (April-October). Offering longer lease terms or upfront payments can help secure better rates.</p>
          </div>

          <div class="bg-gray-50 dark:bg-gray-700 rounded-2xl p-6 shadow-lg">
            <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-3">What about internet and cable TV?</h3>
            <p class="text-brand-navy dark:text-gray-300">Most properties have internet infrastructure but tenants arrange their own service contracts. Budget ₿800-2,000 monthly for high-speed internet and cable TV packages.</p>
          </div>

          <div class="bg-gray-50 dark:bg-gray-700 rounded-2xl p-6 shadow-lg">
            <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-3">How do I get my deposit back?</h3>
            <p class="text-brand-navy dark:text-gray-300">Deposits are returned after lease termination and property inspection. Our digital escrow system ensures secure deposit handling and transparent refund processing within 7 days.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Final CTA -->
    <section class="py-24 bg-brand-navy dark:bg-gray-900 text-white transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 class="text-4xl lg:text-5xl font-bold mb-6">
          Start Your Rental Search Today
        </h2>
        <p class="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
          Join thousands of satisfied tenants who found their perfect home through our platform
        </p>
        
        <div class="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button class="bg-brand-red-light text-brand-navy px-8 py-4 rounded-xl font-semibold hover:bg-teal-300 transition-all duration-300 text-lg shadow-lg hover:shadow-xl">
            Browse Rental Properties
          </button>
          <button class="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-brand-navy transition-all duration-300 text-lg">
            Get Rental Guide
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// Meta tags
useHead({
  title: 'Rent Property in Thailand - Verified Listings & Secure Payments',
  meta: [
    {
      name: 'description',
      content: 'Find verified rental properties in Thailand with transparent pricing, digital payments, and BTS proximity mapping. Secure deposits and instant applications.'
    }
  ]
})

// Reactive data for rental calculator
const monthlyIncome = ref('80,000')

// Helper function to parse income string to number
const parseIncome = (incomeStr) => {
  if (!incomeStr) return 0
  return parseInt(incomeStr.replace(/[^\d]/g, '')) || 0
}

// Computed rental budgets
const incomeValue = computed(() => parseIncome(monthlyIncome.value))

const conservativeBudget = computed(() => Math.round(incomeValue.value * 0.25))
const recommendedBudget = computed(() => Math.round(incomeValue.value * 0.30))
const maximumBudget = computed(() => Math.round(incomeValue.value * 0.35))

// Rental cost calculations
const recommendedRent = computed(() => recommendedBudget.value)
const totalMonthlyCost = computed(() => {
  return recommendedRent.value + 5500 // rent + average utilities/transport
})

const totalMoveInCost = computed(() => {
  return recommendedRent.value + (recommendedRent.value * 2) + recommendedRent.value + 5000 // first month + 2 month deposit + commission + utilities
})
</script>
