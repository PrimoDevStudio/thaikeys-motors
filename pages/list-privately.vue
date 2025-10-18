<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 font-sans transition-colors duration-300">

    <!-- Hero Section for Private Listings -->
    <section class="relative pt-16 pb-24 overflow-hidden">
      <!-- Background with overlay -->
      <div class="absolute inset-0 z-0">
        <NuxtImg 
        src="/assets/placeholder/thaikeys-list-privately-hero.webp"
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
              <span class="bg-gradient-to-r from-brand-turqoise-light to-brand-turqoise-dark bg-clip-text text-transparent">
                Skip Agent Fees
              </span>
              <br>
              <span class="text-white">List Privately</span>
            </h1>
            
            <!-- Subtitle -->
            <p class="text-xl lg:text-2xl text-white/90 mb-12 leading-relaxed mx-auto">
              Whether you're renting out or selling your property, get professional tools and reach thousands of buyers without paying expensive agent commissions
            </p>

            <!-- Property Type Selection -->
            <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <button 
                @click="selectedType = 'rental'"
                :class="[
                  'px-8 py-4 rounded-xl font-semibold transition-all duration-300 text-lg shadow-lg hover:shadow-xl',
                  selectedType === 'rental' 
                    ? 'bg-brand-turqoise-light text-brand-navy' 
                    : 'border-2 border-white text-white hover:bg-white hover:text-indigo-800'
                ]"
              >
                List for Rent
              </button>
              <button 
                @click="selectedType = 'sale'"
                :class="[
                  'px-8 py-4 rounded-xl font-semibold transition-all duration-300 text-lg shadow-lg hover:shadow-xl',
                  selectedType === 'sale' 
                    ? 'bg-brand-turqoise-light text-brand-navy' 
                    : 'border-2 border-white text-white hover:bg-white hover:text-indigo-800'
                ]"
              >
                List for Sale
              </button>
            </div>

            <!-- Dynamic Key Stats -->
            <div class="grid grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div class="text-center">
                <div class="text-4xl lg:text-5xl font-bold text-brand-turqoise-light mb-2">
                  {{ selectedType === 'rental' ? '₿1,000' : '₿3,000' }}
                </div>
                <div class="text-sm lg:text-base font-medium text-white/80">
                  {{ selectedType === 'rental' ? 'One-time Fee' : 'Total Cost' }}
                </div>
              </div>
              <div class="text-center">
                <div class="text-4xl lg:text-5xl font-bold text-brand-turqoise-light mb-2">24h</div>
                <div class="text-sm lg:text-base font-medium text-white/80">Go Live Time</div>
              </div>
              <div class="text-center">
                <div class="text-4xl lg:text-5xl font-bold text-brand-turqoise-light mb-2">
                  {{ selectedType === 'rental' ? '95%' : '87%' }}
                </div>
                <div class="text-sm lg:text-base font-medium text-white/80">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Dynamic Calculator Section -->
    <section class="py-24 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-4xl lg:text-5xl font-bold text-brand-navy dark:text-white mb-6">
            Calculate Your Savings
          </h2>
          <p class="text-xl text-brand-navy dark:text-gray-300 max-w-3xl mx-auto">
            {{ selectedType === 'rental' 
              ? 'See how much you save vs traditional rental agents over your lease period' 
              : 'Compare our flat fee vs traditional sales agent commissions'
            }}
          </p>
        </div>

        <div class="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
          <!-- Property Type Tabs -->
          <div class="flex justify-center mb-8">
            <div class="bg-gray-100 dark:bg-gray-700 p-1 rounded-xl inline-flex">
              <button 
                @click="selectedType = 'rental'"
                :class="[
                  'px-6 py-3 rounded-lg font-semibold transition-all duration-300',
                  selectedType === 'rental' 
                    ? 'bg-brand-turqoise-light text-brand-navy shadow-md' 
                    : 'text-gray-600 dark:text-gray-300 hover:text-brand-navy dark:hover:text-white'
                ]"
              >
                Rental Property
              </button>
              <button 
                @click="selectedType = 'sale'"
                :class="[
                  'px-6 py-3 rounded-lg font-semibold transition-all duration-300',
                  selectedType === 'sale' 
                    ? 'bg-brand-turqoise-light text-brand-navy shadow-md' 
                    : 'text-gray-600 dark:text-gray-300 hover:text-brand-navy dark:hover:text-white'
                ]"
              >
                Sale Property
              </button>
            </div>
          </div>

          <!-- Dynamic Input Section -->
          <div class="mb-8">
            <label class="block text-lg font-semibold text-brand-navy dark:text-white mb-4 text-center">
              {{ selectedType === 'rental' ? 'Enter Monthly Rent' : 'Enter Sale Price' }}
            </label>
            <div class="max-w-md mx-auto">
              <div class="relative">
                <span class="absolute left-4 top-1/2 transform -translate-y-1/2 text-xl font-bold text-brand-navy dark:text-gray-300">฿</span>
                <input 
                  v-model="formattedValue" 
                  @input="handleValueInput"
                  type="text" 
                  class="w-full pl-12 pr-4 py-4 text-xl font-bold border-2 border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-brand-turqoise-light focus:border-brand-turqoise-light bg-white dark:bg-gray-700 text-brand-navy dark:text-white text-center"
                  :placeholder="selectedType === 'rental' ? '25,000' : '8,500,000'"
                >
              </div>
            </div>
          </div>

          <!-- Rental-specific Lease Length Options -->
          <div v-if="selectedType === 'rental'" class="mb-8">
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
                  6-12 Months
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
          </div>

          <!-- Cost Comparison Cards -->
          <div class="grid md:grid-cols-2 gap-6 mb-8">
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
                </div>
              </div>
            </div>

            <!-- Our Platform -->
            <div class="bg-gradient-to-br from-brand-turqoise-light to-purple-400 p-6 rounded-xl border-2 border-brand-turqoise-light shadow-xl transform scale-105">
              <div class="text-center">
                <div class="w-12 h-12 bg-brand-navy rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div class="inline-block bg-brand-navy text-white px-3 py-1 rounded-full text-xs font-semibold mb-2">
                  Professional tools included
                </div>
                <h3 class="text-lg font-bold text-brand-navy mb-2">ThaiKeys Platform</h3>
                <div class="text-3xl font-bold text-brand-navy mb-1">฿{{ ourPlatformCost.toLocaleString() }}</div>
                <div class="text-xs text-brand-navy/80 mb-4">{{ ourPlatformCostText }}</div>
                <div class="text-sm text-brand-navy">
                  <div class="font-semibold">Total Cost</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Savings Summary -->
          <div class="bg-gradient-to-r from-green-500 to-emerald-600 p-6 rounded-xl text-white text-center">
            <div class="text-lg font-semibold mb-2">Your Savings</div>
            <div class="text-4xl font-bold mb-2">฿{{ totalSavings.toLocaleString() }}</div>
            <div class="text-sm opacity-90">{{ savingsPercentage }}% saved vs traditional agents</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Cost Comparison Section -->
    <section class="py-24 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl lg:text-5xl font-bold text-brand-navy dark:text-white mb-6">
            Why Choose Private Listings?
          </h2>
          <p class="text-xl text-brand-navy dark:text-gray-300 max-w-4xl mx-auto">
            Compare the costs and benefits of listing privately versus using traditional agents
          </p>
        </div>

        <div class="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <!-- Traditional Agents -->
          <div class="bg-red-50 dark:bg-red-900/20 p-8 rounded-2xl border-2 border-red-200 dark:border-red-800">
            <div class="text-center mb-8">
              <h3 class="text-2xl font-bold text-red-700 dark:text-red-400 mb-4">Traditional Agents</h3>
              <div class="text-5xl font-bold text-red-700 dark:text-red-400 mb-2">
                {{ selectedType === 'rental' ? '1-1.5 months' : '3-4%' }}
              </div>
              <div class="text-red-600 dark:text-red-300 text-sm">
                {{ selectedType === 'rental' ? 'upfront commission' : 'of sale price' }}
              </div>
              <div class="inline-block bg-red-600 text-white px-3 py-1 rounded-full text-xs font-semibold mt-2">
                Expensive & Limited Service
              </div>
            </div>
            
            <div class="space-y-3 mb-8">
              <div class="flex items-start text-red-700 dark:text-red-300">
                <svg class="w-5 h-5 text-red-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
                <span class="text-sm">High upfront costs impact cash flow</span>
              </div>
              <div class="flex items-start text-red-700 dark:text-red-300">
                <svg class="w-5 h-5 text-red-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
                <span class="text-sm">Limited control over pricing and marketing</span>
              </div>
              <div class="flex items-start text-red-700 dark:text-red-300">
                <svg class="w-5 h-5 text-red-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
                <span class="text-sm">Agents disappear after getting paid</span>
              </div>
              <div class="flex items-start text-red-700 dark:text-red-300">
                <svg class="w-5 h-5 text-red-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
                <span class="text-sm">No transparency in marketing reach</span>
              </div>
              <div class="flex items-start text-red-700 dark:text-red-300">
                <svg class="w-5 h-5 text-red-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
                <span class="text-sm">Commission regardless of final price</span>
              </div>
            </div>
          </div>

          <!-- ThaiKeys Private Listing -->
          <div class="bg-gradient-to-br from-brand-turqoise-light to-purple-400 p-8 rounded-2xl border-2 border-brand-turqoise-light shadow-xl transform scale-105">
            <div class="text-center mb-8">
              <div class="inline-block bg-brand-navy text-white px-3 py-1 rounded-full text-sm font-semibold mb-4">
                Professional Tools & Maximum Savings
              </div>
              <h3 class="text-2xl font-bold text-brand-navy mb-4">ThaiKeys Private Listing</h3>
              <div class="text-5xl font-bold text-brand-navy mb-1">
                {{ selectedType === 'rental' ? '฿1,000' : '฿3,000' }}
              </div>
              <div class="text-brand-navy/80 text-sm">
                {{ selectedType === 'rental' ? 'one-time platform fee' : 'total listing cost' }}
              </div>
            </div>
            
            <div class="space-y-3 mb-8">
              <div class="flex items-start text-brand-navy">
                <svg class="w-5 h-5 text-brand-navy mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span class="text-sm font-medium">Save thousands in commission fees</span>
              </div>
              <div class="flex items-start text-brand-navy">
                <svg class="w-5 h-5 text-brand-navy mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span class="text-sm font-medium">Complete control over pricing and marketing</span>
              </div>
              <div class="flex items-start text-brand-navy">
                <svg class="w-5 h-5 text-brand-navy mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span class="text-sm font-medium">Professional listing tools and templates</span>
              </div>
              <div class="flex items-start text-brand-navy">
                <svg class="w-5 h-5 text-brand-navy mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span class="text-sm font-medium">Digital contracts and payment processing</span>
              </div>
              <div class="flex items-start text-brand-navy">
                <svg class="w-5 h-5 text-brand-navy mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span class="text-sm font-medium">Direct communication with interested buyers</span>
              </div>
            </div>
            <button class="w-full bg-brand-navy text-white py-3 px-6 rounded-xl font-semibold hover:bg-brand-navy/90 transition-all duration-300">
              Start Listing Now
            </button>
          </div>
        </div>

        <!-- Bottom Stats -->
        <div class="mt-16 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl p-8 border border-green-200 dark:border-green-800">
          <div class="text-center">
            <h3 class="text-2xl font-bold text-brand-navy dark:text-white mb-6">Private Listing Success Rate</h3>
            <div class="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div class="text-center">
                <div class="text-4xl font-bold text-green-600 mb-2">₿2.8M+</div>
                <div class="text-sm text-brand-navy dark:text-gray-300">Total Commissions Saved</div>
              </div>
              <div class="text-center">
                <div class="text-4xl font-bold text-blue-600 mb-2">18 days</div>
                <div class="text-sm text-brand-navy dark:text-gray-300">Average Time to Rent/Sell</div>
              </div>
              <div class="text-center">
                <div class="text-4xl font-bold text-purple-600 mb-2">89%</div>
                <div class="text-sm text-brand-navy dark:text-gray-300">Success Rate Within 30 Days</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- DIY Tools & Features Section -->
    <section class="py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl lg:text-5xl font-bold text-brand-navy dark:text-white mb-6">
            Professional Tools for Private Listings
          </h2>
          <p class="text-xl text-brand-navy dark:text-gray-300 max-w-3xl mx-auto">
            Everything you need to list, manage, and close deals on your property - without paying agent commissions
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
                <h3 class="text-xl font-semibold text-brand-navy dark:text-white mb-2">Professional Property Listings</h3>
                <p class="text-brand-navy dark:text-gray-300">Create stunning property listings with professional templates, photo optimization, and detailed descriptions that attract buyers.</p>
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
                <h3 class="text-xl font-semibold text-brand-navy dark:text-white mb-2">Market Intelligence & Pricing</h3>
                <p class="text-brand-navy dark:text-gray-300">Get data-driven pricing recommendations based on similar properties in your area and current market conditions.</p>
              </div>
            </div>

            <!-- Buyer/Tenant Management -->
            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-brand-turqoise-light rounded-xl flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-brand-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-semibold text-brand-navy dark:text-white mb-2">Direct Communication System</h3>
                <p class="text-brand-navy dark:text-gray-300">Manage all inquiries, schedule viewings, and communicate directly with interested buyers or tenants through our built-in messaging system.</p>
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
                <h3 class="text-xl font-semibold text-brand-navy dark:text-white mb-2">Legal Documents & E-Signatures</h3>
                <p class="text-brand-navy dark:text-gray-300">Access professionally drafted lease agreements and sale contracts with digital signature capabilities for quick, legal transactions.</p>
              </div>
            </div>
          </div>

          <!-- Dashboard Preview -->
          <div class="relative">
            <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-100 dark:border-gray-700">
              <div class="bg-gray-50 dark:bg-gray-700 px-6 py-4 border-b border-gray-100 dark:border-gray-600 rounded-t-xl">
                <h3 class="font-semibold text-brand-navy dark:text-white">Property Management Dashboard</h3>
              </div>
              
              <div class="p-6">
                <div class="grid grid-cols-2 gap-4 mb-6">
                  <div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-xl border border-green-200 dark:border-green-800">
                    <div class="text-2xl font-bold text-green-700 dark:text-green-400">2</div>
                    <div class="text-sm font-medium text-green-600 dark:text-green-300 mt-1">Active Listings</div>
                  </div>
                  <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border border-blue-200 dark:border-blue-800">
                    <div class="text-2xl font-bold text-blue-700 dark:text-blue-400">31</div>
                    <div class="text-sm font-medium text-blue-600 dark:text-blue-300 mt-1">Total Inquiries</div>
                  </div>
                </div>
                
                <div class="space-y-3">
                  <div class="flex items-center space-x-3 p-3 bg-purple-50 dark:bg-purple-900/20 rounded-xl border border-purple-100 dark:border-purple-800">
                    <div class="w-10 h-10 bg-brand-turqoise-light rounded-full flex items-center justify-center">
                      <span class="text-sm font-bold text-brand-navy">!</span>
                    </div>
                    <div class="flex-1">
                      <div class="font-medium text-brand-navy dark:text-white">New Viewing Request</div>
                      <div class="text-sm text-brand-navy dark:text-gray-400">Sarah wants to view your Sukhumvit condo</div>
                    </div>
                  </div>
                  
                  <div class="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-xl">
                    <div class="w-10 h-10 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center">
                      <span class="text-sm font-bold text-brand-navy dark:text-gray-300">📊</span>
                    </div>
                    <div class="flex-1">
                      <div class="font-medium text-brand-navy dark:text-white">Market Update</div>
                      <div class="text-sm text-brand-navy dark:text-gray-400">Similar properties increased 3% this month</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Additional Features Grid -->
        <div class="grid md:grid-cols-3 gap-8">
          <!-- Payment Processing -->
          <div class="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div class="w-16 h-16 bg-brand-turqoise-light rounded-full flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-brand-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-brand-navy dark:text-white mb-4">Secure Payment Processing</h3>
            <p class="text-brand-navy dark:text-gray-300">Handle deposits, rent payments, and sale transactions securely through our integrated payment system with multiple Thai payment options.</p>
          </div>

          <!-- Marketing Analytics -->
          <div class="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div class="w-16 h-16 bg-brand-turqoise-light rounded-full flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-brand-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-brand-navy dark:text-white mb-4">Marketing Analytics</h3>
            <p class="text-brand-navy dark:text-gray-300">Track views, inquiries, and engagement on your listings. See which photos perform best and optimize your marketing strategy.</p>
          </div>

          <!-- BTS Integration -->
          <div class="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div class="w-16 h-16 bg-brand-turqoise-light rounded-full flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-brand-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-brand-navy dark:text-white mb-4">BTS/MRT Integration</h3>
            <p class="text-brand-navy dark:text-gray-300">Highlight transport connections and walking distances to stations - a key selling point for Bangkok properties that increases inquiries.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Success Stories Section -->
    <section class="py-24 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl lg:text-5xl font-bold text-brand-navy dark:text-white mb-6">
            Success Stories
          </h2>
          <p class="text-xl text-brand-navy dark:text-gray-300 max-w-3xl mx-auto">
            Real property owners who saved thousands by listing privately
          </p>
        </div>

        <div class="grid lg:grid-cols-3 gap-8 mb-16">
          <!-- Rental Success Story -->
          <div class="bg-gray-50 dark:bg-gray-700 p-8 rounded-2xl">
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 bg-brand-turqoise-light rounded-full flex items-center justify-center mr-4">
                <span class="text-brand-navy font-bold">SK</span>
              </div>
              <div>
                <h4 class="font-semibold text-brand-navy dark:text-white">Sarah Kim</h4>
                <p class="text-sm text-brand-navy dark:text-gray-400">Condo Owner, Sukhumvit</p>
              </div>
            </div>
            <p class="text-brand-navy dark:text-gray-300 italic mb-4">
              "Saved ฿25,000 in agent fees! Listed my 1-bedroom condo myself and found a great tenant in just 2 weeks using the platform's tools."
            </p>
            <div class="flex items-center text-sm text-green-600 font-semibold">
              <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              Saved ฿25,000 vs traditional agent
            </div>
          </div>

          <!-- Sale Success Story -->
          <div class="bg-gray-50 dark:bg-gray-700 p-8 rounded-2xl">
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 bg-brand-turqoise-light rounded-full flex items-center justify-center mr-4">
                <span class="text-brand-navy font-bold">MR</span>
              </div>
              <div>
                <h4 class="font-semibold text-brand-navy dark:text-white">Mark Reynolds</h4>
                <p class="text-sm text-brand-navy dark:text-gray-400">Townhouse Owner, Thonglor</p>
              </div>
            </div>
            <p class="text-brand-navy dark:text-gray-300 italic mb-4">
              "Sold my townhouse for ฿12.5M and kept an extra ฿375,000 by not using agents. The digital contracts made everything smooth and legal."
            </p>
            <div class="flex items-center text-sm text-green-600 font-semibold">
              <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              Saved ฿375,000 in commission
            </div>
          </div>

          <!-- Multiple Properties Story -->
          <div class="bg-gray-50 dark:bg-gray-700 p-8 rounded-2xl">
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 bg-brand-turqoise-light rounded-full flex items-center justify-center mr-4">
                <span class="text-brand-navy font-bold">AT</span>
              </div>
              <div>
                <h4 class="font-semibold text-brand-navy dark:text-white">Anna Thompson</h4>
                <p class="text-sm text-brand-navy dark:text-gray-400">Property Investor</p>
              </div>
            </div>
            <p class="text-brand-navy dark:text-gray-300 italic mb-4">
              "Managing 5 rental properties through the platform. The tenant screening and payment processing features save me hours each month."
            </p>
            <div class="flex items-center text-sm text-green-600 font-semibold">
              <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              Manages 5 properties with ease
            </div>
          </div>
        </div>

        <!-- Statistics Row -->
        <div class="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-2xl p-8 border border-emerald-200 dark:border-emerald-800">
          <h3 class="text-2xl font-bold text-brand-navy dark:text-white text-center mb-8">Platform Success Metrics</h3>
          <div class="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div class="text-4xl font-bold text-emerald-600 mb-2">{{ selectedType === 'rental' ? '156' : '94' }}</div>
              <div class="text-sm text-brand-navy dark:text-gray-300">Successful {{ selectedType === 'rental' ? 'Rentals' : 'Sales' }}</div>
            </div>
            <div>
              <div class="text-4xl font-bold text-blue-600 mb-2">฿4.2M</div>
              <div class="text-sm text-brand-navy dark:text-gray-300">Total Commissions Saved</div>
            </div>
            <div>
              <div class="text-4xl font-bold text-purple-600 mb-2">91%</div>
              <div class="text-sm text-brand-navy dark:text-gray-300">Success Rate</div>
            </div>
            <div>
              <div class="text-4xl font-bold text-teal-600 mb-2">15 days</div>
              <div class="text-sm text-brand-navy dark:text-gray-300">Average Time to Close</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div class="max-w-4xl mx-auto px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl lg:text-5xl font-bold text-brand-navy dark:text-white mb-6">
            Frequently Asked Questions
          </h2>
          <p class="text-xl text-brand-navy dark:text-gray-300">
            Everything you need to know about private property listings
          </p>
        </div>

        <div class="space-y-6">
          <!-- Dynamic FAQ based on property type -->
          <div class="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
            <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-3">
              {{ selectedType === 'rental' 
                ? 'How much does it cost to list my rental property?' 
                : 'What are the fees for listing my property for sale?' 
              }}
            </h3>
            <p class="text-brand-navy dark:text-gray-300">
              {{ selectedType === 'rental'
                ? 'Just ฿1,000 one-time fee to list your rental property with full access to professional tools, tenant screening, digital contracts, and payment processing. No hidden fees or commissions.'
                : 'Only ฿3,000 total cost to list your property for sale. This includes professional listing tools, market analytics, legal document templates, and buyer communication system. No percentage commissions.'
              }}
            </p>
          </div>
          
          <div class="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
            <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-3">
              {{ selectedType === 'rental'
                ? 'What if my tenant stops paying rent?'
                : 'What legal protection do I have as a private seller?'
              }}
            </h3>
            <p class="text-brand-navy dark:text-gray-300">
              {{ selectedType === 'rental'
                ? 'Our platform includes legally-binding digital lease agreements and connects you with trusted legal services for tenant disputes. We also offer payment tracking and late payment notifications to help prevent issues.'
                : 'All our sale contract templates are prepared by qualified Thai lawyers and include standard legal protections. We also provide access to legal consultation services for complex transactions.'
              }}
            </p>
          </div>
          
          <div class="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
            <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-3">
              How do I handle viewings and inquiries?
            </h3>
            <p class="text-brand-navy dark:text-gray-300">
              Our built-in messaging system lets you communicate directly with interested parties. You can schedule viewings, answer questions, and negotiate terms all through the platform. We also provide viewing safety guidelines and verification tools.
            </p>
          </div>
          
          <div class="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
            <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-3">
              Can I edit my listing after it's published?
            </h3>
            <p class="text-brand-navy dark:text-gray-300">
              Absolutely! You have complete control over your listing. Update photos, change the price, modify descriptions, or pause the listing anytime through your dashboard. Changes go live immediately.
            </p>
          </div>

          <div class="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
            <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-3">
              What payment methods do you accept?
            </h3>
            <p class="text-brand-navy dark:text-gray-300">
              We accept all major payment methods including credit cards, bank transfers, PromptPay, and cash payments through 7-Eleven. For property transactions, we also facilitate secure deposit handling through our trusted partner banks.
            </p>
          </div>

          <div class="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
            <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-3">
              How do I know if my pricing is competitive?
            </h3>
            <p class="text-brand-navy dark:text-gray-300">
              Our platform provides real-time market data showing similar properties in your area, recent transaction prices, and pricing trends. You'll get automated suggestions to help optimize your listing price for faster results.
            </p>
          </div>

          <div class="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
            <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-3">
              What support do I get as a private lister?
            </h3>
            <p class="text-brand-navy dark:text-gray-300">
              Full customer support via chat, email, and phone in both Thai and English. Plus access to our knowledge base with guides on pricing, legal requirements, photography tips, and negotiation strategies.
            </p>
          </div>
        </div>

        <!-- Contact Support -->
        <div class="mt-12 text-center bg-gradient-to-r from-brand-turqoise-light/10 to-purple-500/10 rounded-2xl p-8">
          <h3 class="text-xl font-semibold text-brand-navy dark:text-white mb-4">
            Still have questions?
          </h3>
          <p class="text-brand-navy dark:text-gray-300 mb-6">
            Our support team is here to help you succeed with your private listing
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <button class="bg-brand-turqoise-light text-brand-navy px-6 py-3 rounded-xl font-semibold hover:bg-teal-300 transition-all duration-300">
              Chat with Support
            </button>
            <button class="border-2 border-brand-turqoise-light text-brand-turqoise-light dark:text-brand-turqoise-light px-6 py-3 rounded-xl font-semibold hover:bg-brand-turqoise-light hover:text-brand-navy transition-all duration-300">
              Browse Help Center
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Final CTA Section -->
    <section class="py-24 bg-brand-navy dark:bg-gray-900 text-white transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 class="text-4xl lg:text-5xl font-bold mb-6">
          Ready to List Your Property?
        </h2>
        <p class="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
          {{ selectedType === 'rental' 
            ? 'Join thousands of landlords who have saved money and found great tenants by listing privately' 
            : 'Take control of your property sale and keep more money in your pocket'
          }}
        </p>
        
        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
          <button class="bg-brand-turqoise-light text-brand-navy px-8 py-4 rounded-xl font-semibold hover:bg-teal-300 transition-all duration-300 text-lg shadow-lg hover:shadow-xl">
            {{ selectedType === 'rental' ? 'List My Rental Property' : 'List My Property for Sale' }}
          </button>
          <button class="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-brand-navy transition-all duration-300 text-lg">
            Learn More About Tools
          </button>
        </div>

        <!-- Trust Indicators -->
        <div class="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-gray-400">
          <div class="flex items-center">
            <svg class="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
            No hidden fees
          </div>
          <div class="flex items-center">
            <svg class="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
            Legal document templates
          </div>
          <div class="flex items-center">
            <svg class="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
            24/7 customer support
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Meta tags
useHead({
  title: 'Private Listings - List Your Property Without Agent Fees | ThaiKeys',
  meta: [
    {
      name: 'description',
      content: 'Skip expensive agent fees! List your rental or sale property privately with professional tools, legal templates, and secure payment processing. Save thousands on commissions.'
    }
  ]
})

// Reactive data
const selectedType = ref('rental') // 'rental' or 'sale'
const monthlyRent = ref(25000)
const salePrice = ref(8500000)
const leaseLength = ref('medium') // 'short', 'medium', 'long'

// Formatted input values
const formattedValue = ref('25,000')

// Format number with commas
const formatNumber = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

// Handle dynamic input formatting
const handleValueInput = (event) => {
  const value = event.target.value
  const numbers = value.replace(/[^\d]/g, '')
  
  if (numbers) {
    if (selectedType.value === 'rental') {
      monthlyRent.value = parseInt(numbers)
    } else {
      salePrice.value = parseInt(numbers)
    }
    formattedValue.value = formatNumber(numbers)
  } else {
    if (selectedType.value === 'rental') {
      monthlyRent.value = 0
    } else {
      salePrice.value = 0
    }
    formattedValue.value = ''
  }
}

// Watch for property type changes to update input
watch(selectedType, (newType) => {
  if (newType === 'rental') {
    formattedValue.value = formatNumber(monthlyRent.value.toString())
  } else {
    formattedValue.value = formatNumber(salePrice.value.toString())
  }
})

// Cost calculations
const traditionalCost = computed(() => {
  if (selectedType.value === 'rental') {
    // Traditional rental agents: 0.5-1.5 months based on lease length
    if (leaseLength.value === 'short') {
      return Math.round(monthlyRent.value * 0.5)
    } else if (leaseLength.value === 'medium') {
      return monthlyRent.value
    } else {
      return Math.round(monthlyRent.value * 1.5)
    }
  } else {
    // Traditional sales agents: 3% of sale price
    return Math.round(salePrice.value * 0.03)
  }
})

const traditionalCostText = computed(() => {
  if (selectedType.value === 'rental') {
    if (leaseLength.value === 'short') {
      return '0.5 months upfront'
    } else if (leaseLength.value === 'medium') {
      return '1 month upfront'
    } else {
      return '1.5 months upfront'
    }
  } else {
    return '3% commission'
  }
})

const ourPlatformCost = computed(() => {
  return selectedType.value === 'rental' ? 1000 : 3000
})

const ourPlatformCostText = computed(() => {
  return selectedType.value === 'rental' ? 'one-time fee' : 'total listing cost'
})

const totalSavings = computed(() => {
  return traditionalCost.value - ourPlatformCost.value
})

const savingsPercentage = computed(() => {
  if (traditionalCost.value === 0) return 0
  return Math.round((totalSavings.value / traditionalCost.value) * 100)
})
</script>

<style scoped>
/* Smooth property type transitions */
.property-type-transition {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Enhanced calculator input styling */
.calculator-input:focus {
  transform: translateY(-1px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

/* Comparison card hover effects */
.comparison-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.comparison-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

/* Dashboard preview animations */
.dashboard-notification {
  animation: slideInRight 0.5s ease-out;
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Success metrics counter animation */
.metric-number {
  transition: all 0.3s ease;
}

.metric-number:hover {
  transform: scale(1.05);
}

/* FAQ accordion smooth transitions */
.faq-item {
  transition: all 0.3s ease;
}

.faq-item:hover {
  transform: translateX(4px);
}

/* Trust indicator pulse */
.trust-indicator {
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.8;
  }
}

/* Mobile responsiveness helpers */
@media (max-width: 640px) {
  .hero-stats {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .comparison-cards {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
}
</style>
