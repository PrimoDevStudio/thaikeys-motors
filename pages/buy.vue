<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 font-sans transition-colors duration-300">

    <!-- Hero Section for Buyers -->
    <section class="relative pt-16 pb-24 overflow-hidden">
      <!-- Background with overlay -->
      <div class="absolute inset-0 z-0">
        <NuxtImg 
        src="/assets/placeholder/thaikeys-buy-hero.webp"
        alt="Thailand rental property background"
        class="w-full h-full object-cover object-top"
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
                Find Your Dream
              </span>
              <br>
              <span class="text-white">Property in Thailand</span>
            </h1>
            
            <!-- Subtitle -->
            <p class="text-xl lg:text-2xl text-white/90 mb-12 leading-relaxed mx-auto">
              Advanced search tools, verified properties, and expert guidance for confident property purchases
            </p>

            <!-- CTA Buttons -->
            <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <button class="bg-brand-red-light text-brand-navy px-8 py-4 rounded-xl font-semibold hover:bg-teal-300 transition-all duration-300 text-lg shadow-lg hover:shadow-xl">
                Start Property Search
              </button>
              <button class="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-800 transition-all duration-300 text-lg">
                Get Buyer's Guide
              </button>
            </div>

            <!-- Key Stats -->
            <div class="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div class="text-center">
                <div class="text-4xl lg:text-5xl font-bold text-brand-red-light mb-2">500K+</div>
                <div class="text-sm lg:text-base font-medium text-white/80">Verified Properties</div>
              </div>
              <div class="text-center">
                <div class="text-4xl lg:text-5xl font-bold text-brand-red-light mb-2">95%</div>
                <div class="text-sm lg:text-base font-medium text-white/80">Purchase Success Rate</div>
              </div>
              <div class="text-center">
                <div class="text-4xl lg:text-5xl font-bold text-brand-red-light mb-2">24h</div>
                <div class="text-sm lg:text-base font-medium text-white/80">Response Time</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Budget Calculator Section -->
    <section class="py-24 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-4xl lg:text-5xl font-bold text-brand-navy dark:text-white mb-6">
            Property Budget Calculator
          </h2>
          <p class="text-xl text-brand-navy dark:text-gray-300 max-w-3xl mx-auto">
            Calculate your total property purchase budget including taxes, fees, and additional costs
          </p>
        </div>

        <!-- Calculator Interface -->
        <div class="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl max-w-4xl mx-auto">
          
          <!-- Budget Input -->
          <div class="mb-8">
            <label class="block text-lg font-semibold text-brand-navy dark:text-white mb-4 text-center">
              Your Budget Range
            </label>
            <div class="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
              <div class="relative">
                <span class="absolute left-4 top-1/2 transform -translate-y-1/2 text-lg font-bold text-brand-navy dark:text-gray-300">₿</span>
                <input 
                  v-model="minBudget" 
                  type="text" 
                  class="w-full pl-12 pr-4 py-3 text-lg border-2 border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-brand-red-light focus:border-brand-red-light bg-white dark:bg-gray-700 text-brand-navy dark:text-white text-center"
                  placeholder="Min budget"
                >
              </div>
              <div class="relative">
                <span class="absolute left-4 top-1/2 transform -translate-y-1/2 text-lg font-bold text-brand-navy dark:text-gray-300">₿</span>
                <input 
                  v-model="maxBudget" 
                  type="text" 
                  class="w-full pl-12 pr-4 py-3 text-lg border-2 border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-brand-red-light focus:border-brand-red-light bg-white dark:bg-gray-700 text-brand-navy dark:text-white text-center"
                  placeholder="Max budget"
                >
              </div>
            </div>
          </div>

          <!-- Property Type Selection -->
          <div class="mb-8">
            <label class="block text-lg font-semibold text-brand-navy dark:text-white mb-4 text-center">
              Property Type
            </label>
            <div class="flex justify-center mb-6">
              <div class="bg-gray-100 dark:bg-gray-700 p-1 rounded-xl inline-flex">
                <button 
                  @click="propertyType = 'condo'"
                  :class="[
                    'px-6 py-3 rounded-lg font-semibold transition-all duration-300',
                    propertyType === 'condo' 
                      ? 'bg-brand-red-light text-brand-navy shadow-md' 
                      : 'text-gray-600 dark:text-gray-300 hover:text-brand-navy dark:hover:text-white'
                  ]"
                >
                  Condominium
                </button>
                <button 
                  @click="propertyType = 'house'"
                  :class="[
                    'px-6 py-3 rounded-lg font-semibold transition-all duration-300',
                    propertyType === 'house' 
                      ? 'bg-brand-red-light text-brand-navy shadow-md' 
                      : 'text-gray-600 dark:text-gray-300 hover:text-brand-navy dark:hover:text-white'
                  ]"
                >
                  House
                </button>
                <button 
                  @click="propertyType = 'villa'"
                  :class="[
                    'px-6 py-3 rounded-lg font-semibold transition-all duration-300',
                    propertyType === 'villa' 
                      ? 'bg-brand-red-light text-brand-navy shadow-md' 
                      : 'text-gray-600 dark:text-gray-300 hover:text-brand-navy dark:hover:text-white'
                  ]"
                >
                  Villa
                </button>
              </div>
            </div>
          </div>

          <!-- Total Cost Breakdown -->
          <div class="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
            <h3 class="text-xl font-bold text-brand-navy dark:text-white mb-4 text-center">Total Purchase Costs</h3>
            <div class="space-y-4">
              <div class="flex justify-between items-center">
                <span class="text-brand-navy dark:text-gray-300">Property Price</span>
                <span class="font-semibold text-brand-navy dark:text-white">₿{{ maxBudget || '0' }}</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-brand-navy dark:text-gray-300">Transfer Fee (2%)</span>
                <span class="font-semibold text-brand-navy dark:text-white">₿{{ transferFee.toLocaleString() }}</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-brand-navy dark:text-gray-300">Legal Fees</span>
                <span class="font-semibold text-brand-navy dark:text-white">₿{{ legalFees.toLocaleString() }}</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-brand-navy dark:text-gray-300">Property Inspection</span>
                <span class="font-semibold text-brand-navy dark:text-white">₿{{ inspectionFees.toLocaleString() }}</span>
              </div>
              <div class="border-t border-gray-300 dark:border-gray-600 pt-4">
                <div class="flex justify-between items-center">
                  <span class="text-lg font-bold text-brand-navy dark:text-white">Total Budget Needed</span>
                  <span class="text-2xl font-bold text-brand-red-light">₿{{ totalCost.toLocaleString() }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Property Types Section -->
    <section class="py-24 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl lg:text-5xl font-bold text-brand-navy dark:text-white mb-6">
            Property Types Available
          </h2>
          <p class="text-xl text-brand-navy dark:text-gray-300 max-w-3xl mx-auto">
            From affordable condos to luxury villas, find the perfect property type for your lifestyle and budget
          </p>
        </div>

        <div class="grid lg:grid-cols-3 gap-8">
          <!-- Condominiums -->
          <div class="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-8 rounded-2xl border border-blue-200 dark:border-blue-800">
            <div class="w-16 h-16 bg-blue-100 dark:bg-blue-900/20 rounded-xl flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-brand-navy dark:text-white mb-4">Condominiums</h3>
            <p class="text-brand-navy dark:text-gray-300 mb-6">Modern living with amenities, security, and maintenance included. Perfect for city living and investment.</p>
            <div class="space-y-2 mb-6">
              <div class="flex items-center space-x-2">
                <svg class="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span class="text-sm text-brand-navy dark:text-gray-300">Foreigners can own</span>
              </div>
              <div class="flex items-center space-x-2">
                <svg class="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span class="text-sm text-brand-navy dark:text-gray-300">Amenities included</span>
              </div>
              <div class="flex items-center space-x-2">
                <svg class="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span class="text-sm text-brand-navy dark:text-gray-300">Low maintenance</span>
              </div>
            </div>
            <div class="text-center">
              <div class="text-lg font-bold text-brand-navy dark:text-white">₿1.5M - ₿25M</div>
              <div class="text-sm text-brand-navy dark:text-gray-400">Typical price range</div>
            </div>
          </div>

          <!-- Houses -->
          <div class="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-8 rounded-2xl border border-green-200 dark:border-green-800">
            <div class="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-xl flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-brand-navy dark:text-white mb-4">Houses</h3>
            <p class="text-brand-navy dark:text-gray-300 mb-6">Standalone homes with private space, gardens, and parking. Ideal for families and long-term residents.</p>
            <div class="space-y-2 mb-6">
              <div class="flex items-center space-x-2">
                <svg class="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span class="text-sm text-brand-navy dark:text-gray-300">Private garden/parking</span>
              </div>
              <div class="flex items-center space-x-2">
                <svg class="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span class="text-sm text-brand-navy dark:text-gray-300">More space</span>
              </div>
              <div class="flex items-center space-x-2">
                <svg class="w-4 h-4 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
                </svg>
                <span class="text-sm text-brand-navy dark:text-gray-300">Land ownership restrictions apply</span>
              </div>
            </div>
            <div class="text-center">
              <div class="text-lg font-bold text-brand-navy dark:text-white">₿3M - ₿50M</div>
              <div class="text-sm text-brand-navy dark:text-gray-400">Typical price range</div>
            </div>
          </div>

          <!-- Villas -->
          <div class="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-8 rounded-2xl border border-purple-200 dark:border-purple-800">
            <div class="w-16 h-16 bg-purple-100 dark:bg-purple-900/20 rounded-xl flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-brand-navy dark:text-white mb-4">Luxury Villas</h3>
            <p class="text-brand-navy dark:text-gray-300 mb-6">Premium properties with pools, extensive grounds, and luxury finishes. The ultimate in private living.</p>
            <div class="space-y-2 mb-6">
              <div class="flex items-center space-x-2">
                <svg class="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span class="text-sm text-brand-navy dark:text-gray-300">Private pools & gardens</span>
              </div>
              <div class="flex items-center space-x-2">
                <svg class="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span class="text-sm text-brand-navy dark:text-gray-300">Luxury finishes</span>
              </div>
              <div class="flex items-center space-x-2">
                <svg class="w-4 h-4 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
                </svg>
                <span class="text-sm text-brand-navy dark:text-gray-300">Complex ownership structures</span>
              </div>
            </div>
            <div class="text-center">
              <div class="text-lg font-bold text-brand-navy dark:text-white">₿8M - ₿100M+</div>
              <div class="text-sm text-brand-navy dark:text-gray-400">Typical price range</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Buyer Services Section -->
    <section class="py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl lg:text-5xl font-bold text-brand-navy dark:text-white mb-6">
            Complete Buyer Services
          </h2>
          <p class="text-xl text-brand-navy dark:text-gray-300 max-w-3xl mx-auto">
            From property search to closing, we provide comprehensive support throughout your purchase journey
          </p>
        </div>

        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <!-- Services List -->
          <div class="space-y-8">
            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-brand-red-light rounded-xl flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-brand-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-semibold text-brand-navy dark:text-white mb-2">Smart Property Matching</h3>
                <p class="text-brand-navy dark:text-gray-300">AI-powered search that learns your preferences and finds properties that match your lifestyle and budget.</p>
              </div>
            </div>

            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-brand-red-light rounded-xl flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-brand-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-semibold text-brand-navy dark:text-white mb-2">Property Verification</h3>
                <p class="text-brand-navy dark:text-gray-300">All properties verified for legal compliance, accurate pricing, and authentic photos before listing.</p>
              </div>
            </div>

            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-brand-red-light rounded-xl flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-brand-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-semibold text-brand-navy dark:text-white mb-2">Expert Negotiation</h3>
                <p class="text-brand-navy dark:text-gray-300">Professional agents help negotiate the best price and terms while protecting your interests throughout the process.</p>
              </div>
            </div>

            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-brand-red-light rounded-xl flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-brand-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-semibold text-brand-navy dark:text-white mb-2">Legal Assistance</h3>
                <p class="text-brand-navy dark:text-gray-300">Connected network of property lawyers to handle contracts, due diligence, and ownership transfers.</p>
              </div>
            </div>
          </div>

          <!-- Feature Preview -->
          <div class="relative">
            <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden">
              <div class="bg-gray-50 dark:bg-gray-700 px-6 py-4 border-b border-gray-100 dark:border-gray-600">
                <h3 class="font-semibold text-brand-navy dark:text-white">Property Match Dashboard</h3>
              </div>
              
              <div class="p-6">
                <div class="space-y-4">
                  <div class="flex items-center space-x-4 p-4 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-200 dark:border-green-800">
                    <div class="w-16 h-16 bg-gradient-to-br from-green-100 to-green-300 dark:from-green-700 dark:to-green-600 rounded-lg flex items-center justify-center">
                      <span class="text-2xl">🏢</span>
                    </div>
                    <div class="flex-1">
                      <h4 class="font-semibold text-brand-navy dark:text-white">Perfect Match Found</h4>
                      <p class="text-sm text-brand-navy dark:text-gray-400 mt-1">3 bed • 2 bath • Near BTS Thonglor</p>
                      <p class="font-bold text-brand-navy dark:text-white mt-2">₿8,500,000</p>
                    </div>
                    <div class="text-right">
                      <span class="inline-block bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400 px-2 py-1 rounded-full text-xs font-medium">
                        98% Match
                      </span>
                    </div>
                  </div>

                  <div class="flex items-center space-x-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
                    <div class="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-300 dark:from-blue-700 dark:to-blue-600 rounded-lg flex items-center justify-center">
                      <span class="text-2xl">🏠</span>
                    </div>
                    <div class="flex-1">
                      <h4 class="font-semibold text-brand-navy dark:text-white">New Listing Alert</h4>
                      <p class="text-sm text-brand-navy dark:text-gray-400 mt-1">2 bed • Garden • Sukhumvit Area</p>
                      <p class="font-bold text-brand-navy dark:text-white mt-2">₿6,200,000</p>
                    </div>
                    <div class="text-right">
                      <span class="inline-block bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 px-2 py-1 rounded-full text-xs font-medium">
                        Just Listed
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Foreign Buyer Guide Section -->
    <section class="py-24 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl lg:text-5xl font-bold text-brand-navy dark:text-white mb-6">
            Foreign Buyer's Guide
          </h2>
          <p class="text-xl text-brand-navy dark:text-gray-300 max-w-3xl mx-auto">
            Essential information for international buyers purchasing property in Thailand
          </p>
        </div>

        <div class="grid lg:grid-cols-2 gap-12">
          <!-- What You Can Own -->
          <div class="bg-green-50 dark:bg-green-900/10 p-8 rounded-2xl border border-green-200 dark:border-green-800">
            <h3 class="text-2xl font-bold text-green-700 dark:text-green-400 mb-6">What Foreigners Can Own</h3>
            <div class="space-y-4">
              <div class="flex items-start space-x-3">
                <svg class="w-5 h-5 text-green-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <div>
                  <h4 class="font-semibold text-brand-navy dark:text-white">Condominium Units</h4>
                  <p class="text-sm text-brand-navy dark:text-gray-300">Direct freehold ownership up to 49% of building units</p>
                </div>
              </div>
              <div class="flex items-start space-x-3">
                <svg class="w-5 h-5 text-green-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <div>
                  <h4 class="font-semibold text-brand-navy dark:text-white">Leasehold Properties</h4>
                  <p class="text-sm text-brand-navy dark:text-gray-300">30-year renewable leases for houses and villas</p>
                </div>
              </div>
              <div class="flex items-start space-x-3">
                <svg class="w-5 h-5 text-green-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <div>
                  <h4 class="font-semibold text-brand-navy dark:text-white">Company Ownership</h4>
                  <p class="text-sm text-brand-navy dark:text-gray-300">Thai company structures for land and house ownership</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Restrictions -->
          <div class="bg-orange-50 dark:bg-orange-900/10 p-8 rounded-2xl border border-orange-200 dark:border-orange-800">
            <h3 class="text-2xl font-bold text-orange-700 dark:text-orange-400 mb-6">Important Restrictions</h3>
            <div class="space-y-4">
              <div class="flex items-start space-x-3">
                <svg class="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
                </svg>
                <div>
                  <h4 class="font-semibold text-brand-navy dark:text-white">Land Ownership</h4>
                  <p class="text-sm text-brand-navy dark:text-gray-300">Foreigners cannot directly own land in Thailand</p>
                </div>
              </div>
              <div class="flex items-start space-x-3">
                <svg class="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
                </svg>
                <div>
                  <h4 class="font-semibold text-brand-navy dark:text-white">Mortgage Financing</h4>
                  <p class="text-sm text-brand-navy dark:text-gray-300">Limited mortgage options for foreign buyers</p>
                </div>
              </div>
              <div class="flex items-start space-x-3">
                <svg class="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
                </svg>
                <div>
                  <h4 class="font-semibold text-brand-navy dark:text-white">Transfer Requirements</h4>
                  <p class="text-sm text-brand-navy dark:text-gray-300">Must show foreign currency source for purchase funds</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Legal Process Steps -->
        <div class="mt-16">
          <h3 class="text-2xl font-bold text-brand-navy dark:text-white mb-8 text-center">Purchase Process for Foreign Buyers</h3>
          <div class="grid md:grid-cols-5 gap-6">
            <div class="text-center">
              <div class="w-12 h-12 bg-brand-red-light rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-lg font-bold text-brand-navy">1</span>
              </div>
              <h4 class="font-semibold text-brand-navy dark:text-white mb-2">Property Search</h4>
              <p class="text-sm text-brand-navy dark:text-gray-300">Find and verify eligible properties</p>
            </div>
            <div class="text-center">
              <div class="w-12 h-12 bg-brand-red-light rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-lg font-bold text-brand-navy">2</span>
              </div>
              <h4 class="font-semibold text-brand-navy dark:text-white mb-2">Legal Review</h4>
              <p class="text-sm text-brand-navy dark:text-gray-300">Due diligence and title verification</p>
            </div>
            <div class="text-center">
              <div class="w-12 h-12 bg-brand-red-light rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-lg font-bold text-brand-navy">3</span>
              </div>
              <h4 class="font-semibold text-brand-navy dark:text-white mb-2">Fund Transfer</h4>
              <p class="text-sm text-brand-navy dark:text-gray-300">Foreign currency documentation</p>
            </div>
            <div class="text-center">
              <div class="w-12 h-12 bg-brand-red-light rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-lg font-bold text-brand-navy">4</span>
              </div>
              <h4 class="font-semibold text-brand-navy dark:text-white mb-2">Contract Signing</h4>
              <p class="text-sm text-brand-navy dark:text-gray-300">Purchase agreement execution</p>
            </div>
            <div class="text-center">
              <div class="w-12 h-12 bg-brand-red-light rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-lg font-bold text-brand-navy">5</span>
              </div>
              <h4 class="font-semibold text-brand-navy dark:text-white mb-2">Title Transfer</h4>
              <p class="text-sm text-brand-navy dark:text-gray-300">Official ownership registration</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Popular Areas Section -->
    <section class="py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl lg:text-5xl font-bold text-brand-navy dark:text-white mb-6">
            Popular Areas for Buyers
          </h2>
          <p class="text-xl text-brand-navy dark:text-gray-300 max-w-3xl mx-auto">
            Discover the most sought-after neighborhoods for property investment and living
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
            <div class="h-48 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-800 dark:to-blue-700 relative">
              <div class="absolute inset-0 bg-black/20"></div>
              <div class="absolute bottom-4 left-4 text-white">
                <span class="text-sm font-medium bg-brand-red-light text-brand-navy px-2 py-1 rounded">Prime Location</span>
              </div>
            </div>
            <div class="p-6">
              <h3 class="font-semibold text-brand-navy dark:text-white mb-2">Sukhumvit</h3>
              <p class="text-sm text-brand-navy dark:text-gray-400 mb-3">Central Bangkok</p>
              <p class="text-lg font-bold text-brand-navy dark:text-white">₿3M - ₿25M</p>
              <p class="text-sm text-brand-navy dark:text-gray-400 mt-1">2,450+ properties</p>
            </div>
          </div>

          <div class="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
            <div class="h-48 bg-gradient-to-br from-green-100 to-green-200 dark:from-green-800 dark:to-green-700 relative">
              <div class="absolute inset-0 bg-black/20"></div>
              <div class="absolute bottom-4 left-4 text-white">
                <span class="text-sm font-medium bg-brand-navy text-white px-2 py-1 rounded">Trendy</span>
              </div>
            </div>
            <div class="p-6">
              <h3 class="font-semibold text-brand-navy dark:text-white mb-2">Thonglor</h3>
              <p class="text-sm text-brand-navy dark:text-gray-400 mb-3">Premium District</p>
              <p class="text-lg font-bold text-brand-navy dark:text-white">₿8M - ₿50M</p>
              <p class="text-sm text-brand-navy dark:text-gray-400 mt-1">890+ properties</p>
            </div>
          </div>

          <div class="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
            <div class="h-48 bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-800 dark:to-purple-700 relative">
              <div class="absolute inset-0 bg-black/20"></div>
              <div class="absolute bottom-4 left-4 text-white">
                <span class="text-sm font-medium bg-brand-red-light text-brand-navy px-2 py-1 rounded">Beach Life</span>
              </div>
            </div>
            <div class="p-6">
              <h3 class="font-semibold text-brand-navy dark:text-white mb-2">Phuket</h3>
              <p class="text-sm text-brand-navy dark:text-gray-400 mb-3">Island Paradise</p>
              <p class="text-lg font-bold text-brand-navy dark:text-white">₿4M - ₿80M</p>
              <p class="text-sm text-brand-navy dark:text-gray-400 mt-1">1,200+ properties</p>
            </div>
          </div>

          <div class="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
            <div class="h-48 bg-gradient-to-br from-orange-100 to-orange-200 dark:from-orange-800 dark:to-orange-700 relative">
              <div class="absolute inset-0 bg-black/20"></div>
              <div class="absolute bottom-4 left-4 text-white">
                <span class="text-sm font-medium bg-brand-navy text-white px-2 py-1 rounded">Cultural Hub</span>
              </div>
            </div>
            <div class="p-6">
              <h3 class="font-semibold text-brand-navy dark:text-white mb-2">Chiang Mai</h3>
              <p class="text-sm text-brand-navy dark:text-gray-400 mb-3">Northern Thailand</p>
              <p class="text-lg font-bold text-brand-navy dark:text-white">₿2M - ₿15M</p>
              <p class="text-sm text-brand-navy dark:text-gray-400 mt-1">680+ properties</p>
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
            Buyer FAQ
          </h2>
          <p class="text-xl text-brand-navy dark:text-gray-300">
            Common questions about buying property in Thailand
          </p>
        </div>

        <div class="space-y-6">
          <div class="bg-gray-50 dark:bg-gray-700 rounded-2xl p-6 shadow-lg">
            <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-3">Can foreigners get mortgages in Thailand?</h3>
            <p class="text-brand-navy dark:text-gray-300">Foreign buyers can obtain mortgages from some Thai banks, typically requiring 30-50% down payment. Requirements include work permit, income verification, and minimum salary thresholds. International banks may also provide financing options.</p>
          </div>

          <div class="bg-gray-50 dark:bg-gray-700 rounded-2xl p-6 shadow-lg">
            <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-3">What are the total costs beyond the purchase price?</h3>
            <p class="text-brand-navy dark:text-gray-300">Expect additional costs of 4-6% of property value including: transfer fee (2%), legal fees (₿30,000-100,000), property inspection, and potential renovation costs. Our calculator provides detailed breakdowns.</p>
          </div>

          <div class="bg-gray-50 dark:bg-gray-700 rounded-2xl p-6 shadow-lg">
            <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-3">How long does the buying process take?</h3>
            <p class="text-brand-navy dark:text-gray-300">Typically 30-60 days from offer acceptance to title transfer. This includes due diligence, contract preparation, fund transfers, and legal registration. Cash purchases can be faster than financed purchases.</p>
          </div>

          <div class="bg-gray-50 dark:bg-gray-700 rounded-2xl p-6 shadow-lg">
            <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-3">Are property prices negotiable?</h3>
            <p class="text-brand-navy dark:text-gray-300">Yes, most property prices are negotiable, especially for resale properties. New developments may have less flexibility. Our agents provide market analysis to help you make competitive offers while avoiding overpaying.</p>
          </div>

          <div class="bg-gray-50 dark:bg-gray-700 rounded-2xl p-6 shadow-lg">
            <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-3">What happens if I want to sell later?</h3>
            <p class="text-brand-navy dark:text-gray-300">Foreign-owned condos can be freely sold to other foreigners or Thai nationals. Our platform provides selling services with competitive commission rates and digital payment processing for seamless transactions.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Final CTA -->
    <section class="py-24 bg-brand-navy dark:bg-gray-900 text-white transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 class="text-4xl lg:text-5xl font-bold mb-6">
          Ready to Find Your Perfect Property?
        </h2>
        <p class="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
          Start your property search today with Thailand's most advanced platform and expert guidance
        </p>
        
        <div class="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button class="bg-brand-red-light text-brand-navy px-8 py-4 rounded-xl font-semibold hover:bg-teal-300 transition-all duration-300 text-lg shadow-lg hover:shadow-xl">
            Start Property Search
          </button>
          <button class="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-brand-navy transition-all duration-300 text-lg">
            Download Buyer's Guide
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
  title: 'Buy Property in Thailand - Expert Guidance & Tools',
  meta: [
    {
      name: 'description',
      content: 'Find your perfect property in Thailand with expert guidance, budget calculators, and comprehensive buyer services. Foreign buyer specialists available.'
    }
  ]
})

// Reactive data for budget calculator
const minBudget = ref('3,000,000')
const maxBudget = ref('8,000,000')
const propertyType = ref('condo')

// Helper function to parse budget string to number
const parseBudget = (budgetStr) => {
  if (!budgetStr) return 0
  return parseInt(budgetStr.replace(/[^\d]/g, '')) || 0
}

// Computed costs based on max budget
const maxBudgetValue = computed(() => parseBudget(maxBudget.value))

const transferFee = computed(() => Math.round(maxBudgetValue.value * 0.02)) // 2%
const legalFees = computed(() => {
  if (maxBudgetValue.value < 5000000) return 30000
  if (maxBudgetValue.value < 15000000) return 60000
  return 100000
})
const inspectionFees = computed(() => {
  if (propertyType.value === 'condo') return 5000
  if (propertyType.value === 'house') return 15000
  return 25000 // villa
})

const totalCost = computed(() => {
  return maxBudgetValue.value + transferFee.value + legalFees.value + inspectionFees.value
})
</script>