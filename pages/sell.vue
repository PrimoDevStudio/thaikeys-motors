<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 font-sans transition-colors duration-300">

    <!-- Hero Section for Sellers -->
    <section class="relative pt-16 pb-24 overflow-hidden">
      <!-- Background with overlay -->
      <div class="absolute inset-0 z-0">
        <NuxtImg 
        src="/assets/placeholder/thaikeys-sell-hero.webp"
        alt="Thailand rental property background"
        class="w-full h-full object-cover object-[85%_50%]"
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
                Let Agents
              </span>
              <br>
              <span class="text-white">Come to You</span>
            </h1>
            
            <!-- Subtitle -->
            <p class="text-xl lg:text-2xl text-white/90 mb-12 leading-relaxed mx-auto">
              Upload your property details once and let verified agents in your area compete to market your property
            </p>

            <!-- CTA Buttons -->
            <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <button class="bg-brand-turqoise-light text-brand-navy px-8 py-4 rounded-xl font-semibold hover:bg-teal-300 transition-all duration-300 text-lg shadow-lg hover:shadow-xl">
                Get Agent Proposals
              </button>
              <button class="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-800 transition-all duration-300 text-lg">
                List Privately Instead
              </button>
            </div>

            <!-- Key Stats -->
            <div class="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div class="text-center">
                <div class="text-4xl lg:text-5xl font-bold text-brand-turqoise-light mb-2">500+</div>
                <div class="text-sm lg:text-base font-medium text-white/80">Verified Agents</div>
              </div>
              <div class="text-center">
                <div class="text-4xl lg:text-5xl font-bold text-brand-turqoise-light mb-2">24h</div>
                <div class="text-sm lg:text-base font-medium text-white/80">Average Response</div>
              </div>
              <div class="text-center">
                <div class="text-4xl lg:text-5xl font-bold text-brand-turqoise-light mb-2">95%</div>
                <div class="text-sm lg:text-base font-medium text-white/80">Get Multiple Offers</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- How It Works Section -->
    <section class="py-24 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl lg:text-5xl font-bold text-brand-navy dark:text-white mb-6">
            How It Works
          </h2>
          <p class="text-xl text-brand-navy dark:text-gray-300 max-w-3xl mx-auto">
            No more cold calling agents or wondering if you're getting the best deal. Let the market come to you.
          </p>
        </div>

        <div class="grid lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <!-- Step 1 -->
          <div class="text-center">
            <div class="relative mb-8">
              <div class="w-20 h-20 bg-brand-turqoise-light rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span class="text-2xl font-bold text-brand-navy">1</span>
              </div>
              <div class="absolute top-10 left-full w-full h-0.5 bg-gray-300 dark:bg-gray-600 hidden lg:block transform -translate-y-1/2"></div>
            </div>
            <h3 class="text-xl font-bold text-brand-navy dark:text-white mb-4">Upload Property Details</h3>
            <p class="text-brand-navy dark:text-gray-300">Add basic information about your property, photos, and your selling preferences in just 5 minutes.</p>
          </div>

          <!-- Step 2 -->
          <div class="text-center">
            <div class="relative mb-8">
              <div class="w-20 h-20 bg-brand-turqoise-light rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span class="text-2xl font-bold text-brand-navy">2</span>
              </div>
              <div class="absolute top-10 left-full w-full h-0.5 bg-gray-300 dark:bg-gray-600 hidden lg:block transform -translate-y-1/2"></div>
            </div>
            <h3 class="text-xl font-bold text-brand-navy dark:text-white mb-4">Agents Get Notified</h3>
            <p class="text-brand-navy dark:text-gray-300">Verified agents in your area receive instant notifications about your property listing request.</p>
          </div>

          <!-- Step 3 -->
          <div class="text-center">
            <div class="relative mb-8">
              <div class="w-20 h-20 bg-brand-turqoise-light rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span class="text-2xl font-bold text-brand-navy">3</span>
              </div>
              <div class="absolute top-10 left-full w-full h-0.5 bg-gray-300 dark:bg-gray-600 hidden lg:block transform -translate-y-1/2"></div>
            </div>
            <h3 class="text-xl font-bold text-brand-navy dark:text-white mb-4">Review Proposals</h3>
            <p class="text-brand-navy dark:text-gray-300">Interested agents contact you with their marketing plans, commission rates, and track records.</p>
          </div>

          <!-- Step 4 -->
          <div class="text-center">
            <div class="relative mb-8">
              <div class="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
            <h3 class="text-xl font-bold text-brand-navy dark:text-white mb-4">Choose Your Agent</h3>
            <p class="text-brand-navy dark:text-gray-300">Select the agent that best fits your needs and start marketing your property immediately.</p>
          </div>
        </div>

        <!-- CTA -->
        <div class="text-center mt-16">
          <button class="bg-brand-turqoise-light text-brand-navy px-8 py-4 rounded-xl font-semibold hover:bg-teal-300 transition-all duration-300 text-lg shadow-lg hover:shadow-xl">
            Start Getting Agent Proposals
          </button>
        </div>
      </div>
    </section>

    <!-- Property Upload Form Section -->
    <section class="py-24 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 transition-colors duration-300">
      <div class="max-w-4xl mx-auto px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-4xl lg:text-5xl font-bold text-brand-navy dark:text-white mb-6">
            Get Started in 5 Minutes
          </h2>
          <p class="text-xl text-brand-navy dark:text-gray-300">
            Tell us about your property and we'll connect you with interested agents in your area
          </p>
        </div>

        <!-- Upload Form -->
        <div class="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
          <!-- Property Type -->
          <div class="mb-8">
            <label class="block text-lg font-semibold text-brand-navy dark:text-white mb-4">
              Property Type
            </label>
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <button class="p-4 border-2 border-gray-300 dark:border-gray-600 rounded-xl hover:border-brand-turqoise-light hover:bg-brand-turqoise-light/10 transition-all duration-300 text-center">
                <div class="w-8 h-8 mx-auto mb-2">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" class="w-full h-full text-brand-turqoise-light">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <span class="text-sm font-medium text-brand-navy dark:text-white">House</span>
              </button>
              <button class="p-4 border-2 border-brand-turqoise-light bg-brand-turqoise-light/10 rounded-xl text-center">
                <div class="w-8 h-8 mx-auto mb-2">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" class="w-full h-full text-brand-turqoise-light">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <span class="text-sm font-medium text-brand-turqoise-light">Condo</span>
              </button>
              <button class="p-4 border-2 border-gray-300 dark:border-gray-600 rounded-xl hover:border-brand-turqoise-light hover:bg-brand-turqoise-light/10 transition-all duration-300 text-center">
                <div class="w-8 h-8 mx-auto mb-2">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" class="w-full h-full text-brand-turqoise-light">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                  </svg>
                </div>
                <span class="text-sm font-medium text-brand-navy dark:text-white">Townhouse</span>
              </button>
              <button class="p-4 border-2 border-gray-300 dark:border-gray-600 rounded-xl hover:border-brand-turqoise-light hover:bg-brand-turqoise-light/10 transition-all duration-300 text-center">
                <div class="w-8 h-8 mx-auto mb-2">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" class="w-full h-full text-brand-turqoise-light">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <span class="text-sm font-medium text-brand-navy dark:text-white">Land</span>
              </button>
            </div>
          </div>

          <!-- Location -->
          <div class="mb-8">
            <label class="block text-lg font-semibold text-brand-navy dark:text-white mb-4">
              Property Location
            </label>
            <div class="grid lg:grid-cols-2 gap-4">
              <div>
                <input 
                  type="text" 
                  placeholder="District (e.g., Sukhumvit, Silom)"
                  class="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-brand-turqoise-light focus:border-brand-turqoise-light bg-white dark:bg-gray-700 text-brand-navy dark:text-white"
                >
              </div>
              <div>
                <input 
                  type="text" 
                  placeholder="Nearest BTS/MRT Station"
                  class="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-brand-turqoise-light focus:border-brand-turqoise-light bg-white dark:bg-gray-700 text-brand-navy dark:text-white"
                >
              </div>
            </div>
          </div>

          <!-- Property Details -->
          <div class="mb-8">
            <label class="block text-lg font-semibold text-brand-navy dark:text-white mb-4">
              Property Details
            </label>
            <div class="grid lg:grid-cols-3 gap-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Bedrooms</label>
                <select class="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-brand-turqoise-light focus:border-brand-turqoise-light bg-white dark:bg-gray-700 text-brand-navy dark:text-white">
                  <option>Studio</option>
                  <option>1</option>
                  <option selected>2</option>
                  <option>3</option>
                  <option>4+</option>
                </select>
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Bathrooms</label>
                <select class="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-brand-turqoise-light focus:border-brand-turqoise-light bg-white dark:bg-gray-700 text-brand-navy dark:text-white">
                  <option>1</option>
                  <option selected>2</option>
                  <option>3</option>
                  <option>4+</option>
                </select>
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Size (sqm)</label>
                <input 
                  type="number" 
                  placeholder="85"
                  class="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-brand-turqoise-light focus:border-brand-turqoise-light bg-white dark:bg-gray-700 text-brand-navy dark:text-white"
                >
              </div>
            </div>
          </div>

          <!-- Expected Price -->
          <div class="mb-8">
            <label class="block text-lg font-semibold text-brand-navy dark:text-white mb-4">
              Expected Sale Price
            </label>
            <div class="relative max-w-md">
              <span class="absolute left-4 top-1/2 transform -translate-y-1/2 text-xl font-bold text-brand-navy dark:text-gray-300">฿</span>
              <input 
                type="text" 
                placeholder="8,500,000"
                class="w-full pl-12 pr-4 py-4 text-xl font-bold border-2 border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-brand-turqoise-light focus:border-brand-turqoise-light bg-white dark:bg-gray-700 text-brand-navy dark:text-white"
              >
            </div>
          </div>

          <!-- Photo Upload -->
          <div class="mb-8">
            <label class="block text-lg font-semibold text-brand-navy dark:text-white mb-4">
              Property Photos
            </label>
            <div class="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-xl p-8 text-center hover:border-brand-turqoise-light transition-colors duration-300">
              <div class="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <p class="text-brand-navy dark:text-gray-300 mb-2">Upload photos of your property</p>
              <p class="text-sm text-gray-500 dark:text-gray-400 mb-4">Max 10 photos, JPG or PNG</p>
              <button class="bg-brand-turqoise-light text-brand-navy px-6 py-2 rounded-lg font-semibold hover:bg-teal-300 transition-colors">
                Choose Photos
              </button>
            </div>
          </div>

          <!-- Contact Information -->
          <div class="mb-8">
            <label class="block text-lg font-semibold text-brand-navy dark:text-white mb-4">
              Your Contact Information
            </label>
            <div class="grid lg:grid-cols-2 gap-4">
              <div>
                <input 
                  type="text" 
                  placeholder="Your Name"
                  class="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-brand-turqoise-light focus:border-brand-turqoise-light bg-white dark:bg-gray-700 text-brand-navy dark:text-white"
                >
              </div>
              <div>
                <input 
                  type="tel" 
                  placeholder="Phone Number"
                  class="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-brand-turqoise-light focus:border-brand-turqoise-light bg-white dark:bg-gray-700 text-brand-navy dark:text-white"
                >
              </div>
            </div>
          </div>

          <!-- Submit Button -->
          <div class="text-center">
            <button class="bg-gradient-to-r from-brand-turqoise-light to-teal-400 text-brand-navy px-12 py-4 rounded-xl font-bold text-xl hover:from-teal-400 hover:to-brand-turqoise-light transition-all duration-300 shadow-lg hover:shadow-xl">
              Get Agent Proposals
            </button>
            <p class="text-sm text-gray-500 dark:text-gray-400 mt-4">
              Free to submit • No obligations • Agents contact you within 24 hours
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Our Agents Section -->
    <section class="py-24 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl lg:text-5xl font-bold text-brand-navy dark:text-white mb-6">
            Why Our Agents Are Different
          </h2>
          <p class="text-xl text-brand-navy dark:text-gray-300 max-w-4xl mx-auto">
            Unlike traditional agents, our network is verified, performance-tracked, and committed to transparent pricing
          </p>
        </div>

        <div class="grid lg:grid-cols-3 gap-8 mb-16">
          <!-- Verified & Professional -->
          <div class="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-8 rounded-2xl border border-blue-200 dark:border-blue-800">
            <div class="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-brand-navy dark:text-white mb-4">Verified & Professional</h3>
            <p class="text-brand-navy dark:text-gray-300 mb-4">
              All agents undergo background checks, license verification, and performance reviews before joining our network.
            </p>
            <ul class="space-y-2 text-sm text-brand-navy dark:text-gray-300">
              <li class="flex items-center">
                <svg class="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                Licensed real estate professionals
              </li>
              <li class="flex items-center">
                <svg class="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                English language proficiency
              </li>
              <li class="flex items-center">
                <svg class="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                Professional conduct standards
              </li>
            </ul>
          </div>

          <!-- Performance Tracked -->
          <div class="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 p-8 rounded-2xl border border-purple-200 dark:border-purple-800">
            <div class="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-brand-navy dark:text-white mb-4">Performance Tracked</h3>
            <p class="text-brand-navy dark:text-gray-300 mb-4">
              Every agent's performance is monitored and rated based on actual results, not just promises.
            </p>
            <ul class="space-y-2 text-sm text-brand-navy dark:text-gray-300">
              <li class="flex items-center">
                <svg class="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                Average days on market
              </li>
              <li class="flex items-center">
                <svg class="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                Sale price vs asking price
              </li>
              <li class="flex items-center">
                <svg class="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                Client satisfaction scores
              </li>
            </ul>
          </div>

          <!-- Fair Pricing -->
          <div class="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 p-8 rounded-2xl border border-green-200 dark:border-green-800">
            <div class="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-brand-navy dark:text-white mb-4">Transparent Pricing</h3>
            <p class="text-brand-navy dark:text-gray-300 mb-4">
              No hidden fees or surprise charges. All commission rates are disclosed upfront so you can compare fairly.
            </p>
            <ul class="space-y-2 text-sm text-brand-navy dark:text-gray-300">
              <li class="flex items-center">
                <svg class="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                Lower than traditional rates
              </li>
              <li class="flex items-center">
                <svg class="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                No upfront marketing fees
              </li>
              <li class="flex items-center">
                <svg class="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                Only pay when you sell
              </li>
            </ul>
          </div>
        </div>

        <!-- Agent Comparison -->
        <div class="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 rounded-2xl p-8">
          <div class="text-center mb-8">
            <h3 class="text-3xl font-bold text-brand-navy dark:text-white mb-4">Traditional Agents vs Our Network</h3>
            <p class="text-brand-navy dark:text-gray-300">See the difference for yourself</p>
          </div>

          <div class="grid lg:grid-cols-2 gap-8">
            <!-- Traditional Agents -->
            <div class="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-200 dark:border-red-800">
              <h4 class="text-xl font-bold text-red-700 dark:text-red-400 mb-4 text-center">Traditional Agents</h4>
              <div class="space-y-3">
                <div class="flex items-center text-red-600 dark:text-red-300">
                  <svg class="w-5 h-5 text-red-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                  <span class="text-sm">You hunt for agents</span>
                </div>
                <div class="flex items-center text-red-600 dark:text-red-300">
                  <svg class="w-5 h-5 text-red-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                  <span class="text-sm">3-4% commission rates</span>
                </div>
                <div class="flex items-center text-red-600 dark:text-red-300">
                  <svg class="w-5 h-5 text-red-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                  <span class="text-sm">No performance tracking</span>
                </div>
                <div class="flex items-center text-red-600 dark:text-red-300">
                  <svg class="w-5 h-5 text-red-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                  <span class="text-sm">Limited marketing reach</span>
                </div>
              </div>
            </div>

            <!-- Our Network -->
            <div class="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-800">
              <h4 class="text-xl font-bold text-green-700 dark:text-green-400 mb-4 text-center">Our Agent Network</h4>
              <div class="space-y-3">
                <div class="flex items-center text-green-600 dark:text-green-300">
                  <svg class="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <span class="text-sm">Agents compete for your business</span>
                </div>
                <div class="flex items-center text-green-600 dark:text-green-300">
                  <svg class="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <span class="text-sm">2-2.5% competitive rates</span>
                </div>
                <div class="flex items-center text-green-600 dark:text-green-300">
                  <svg class="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <span class="text-sm">Real performance metrics</span>
                </div>
                <div class="flex items-center text-green-600 dark:text-green-300">
                  <svg class="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <span class="text-sm">Premium platform exposure</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Success Stories Section -->
    <section class="py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl lg:text-5xl font-bold text-brand-navy dark:text-white mb-6">
            Real Results from Real Property Owners
          </h2>
          <p class="text-xl text-brand-navy dark:text-gray-300 max-w-3xl mx-auto">
            See how our agent-matching service has helped property owners get better deals and faster sales
          </p>
        </div>

        <!-- Success Stories Grid -->
        <div class="grid lg:grid-cols-3 gap-8 mb-16">
          <!-- Success Story 1 -->
          <div class="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
            <div class="flex items-center mb-6">
              <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full flex items-center justify-center mr-4">
                <span class="text-white font-bold text-lg">SK</span>
              </div>
              <div>
                <h4 class="font-bold text-brand-navy dark:text-white">Somchai Kittisak</h4>
                <p class="text-sm text-gray-600 dark:text-gray-400">Sold Sukhumvit Condo</p>
                <div class="flex items-center mt-1">
                  <div class="flex text-yellow-400">
                    <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                    <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                    <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                    <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                    <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  </div>
                  <span class="text-xs text-gray-500 dark:text-gray-400 ml-1">5.0</span>
                </div>
              </div>
            </div>
            
            <p class="text-brand-navy dark:text-gray-300 italic mb-6">
              "I received 4 agent proposals within 6 hours! The competition between agents meant I got a 2.2% commission rate instead of the usual 3%. Saved over ฿80,000 and sold in just 3 weeks."
            </p>

            <div class="grid grid-cols-2 gap-4 text-center">
              <div class="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                <div class="text-lg font-bold text-green-600 dark:text-green-400">฿80,000</div>
                <div class="text-xs text-green-700 dark:text-green-300">Commission Saved</div>
              </div>
              <div class="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                <div class="text-lg font-bold text-blue-600 dark:text-blue-400">21 days</div>
                <div class="text-xs text-blue-700 dark:text-blue-300">Time to Sell</div>
              </div>
            </div>
          </div>

          <!-- Success Story 2 -->
          <div class="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
            <div class="flex items-center mb-6">
              <div class="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-4">
                <span class="text-white font-bold text-lg">MW</span>
              </div>
              <div>
                <h4 class="font-bold text-brand-navy dark:text-white">Michael Wong</h4>
                <p class="text-sm text-gray-600 dark:text-gray-400">Sold Sathorn Townhouse</p>
                <div class="flex items-center mt-1">
                  <div class="flex text-yellow-400">
                    <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                    <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                    <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                    <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                    <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  </div>
                  <span class="text-xs text-gray-500 dark:text-gray-400 ml-1">5.0</span>
                </div>
              </div>
            </div>
            
            <p class="text-brand-navy dark:text-gray-300 italic mb-6">
              "As an expat, I was worried about finding a trustworthy agent. ThaiKeys connected me with 3 English-speaking agents with proven track records. The whole process was transparent and professional."
            </p>

            <div class="grid grid-cols-2 gap-4 text-center">
              <div class="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                <div class="text-lg font-bold text-green-600 dark:text-green-400">฿165,000</div>
                <div class="text-xs text-green-700 dark:text-green-300">Commission Saved</div>
              </div>
              <div class="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                <div class="text-lg font-bold text-blue-600 dark:text-blue-400">28 days</div>
                <div class="text-xs text-blue-700 dark:text-blue-300">Time to Sell</div>
              </div>
            </div>
          </div>

          <!-- Success Story 3 -->
          <div class="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
            <div class="flex items-center mb-6">
              <div class="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mr-4">
                <span class="text-white font-bold text-lg">NP</span>
              </div>
              <div>
                <h4 class="font-bold text-brand-navy dark:text-white">Niran Pattana</h4>
                <p class="text-sm text-gray-600 dark:text-gray-400">Sold Thonglor House</p>
                <div class="flex items-center mt-1">
                  <div class="flex text-yellow-400">
                    <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                    <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                    <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                    <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                    <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  </div>
                  <span class="text-xs text-gray-500 dark:text-gray-400 ml-1">5.0</span>
                </div>
              </div>
            </div>
            
            <p class="text-brand-navy dark:text-gray-300 italic mb-6">
              "The agent I chose had sold 15 similar properties in my area with an average of 98% of asking price. I knew exactly what to expect. Sold for asking price in just 2 weeks!"
            </p>

            <div class="grid grid-cols-2 gap-4 text-center">
              <div class="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                <div class="text-lg font-bold text-green-600 dark:text-green-400">฿320,000</div>
                <div class="text-xs text-green-700 dark:text-green-300">Commission Saved</div>
              </div>
              <div class="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                <div class="text-lg font-bold text-blue-600 dark:text-blue-400">14 days</div>
                <div class="text-xs text-blue-700 dark:text-blue-300">Time to Sell</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Overall Stats -->
        <div class="bg-gradient-to-r from-brand-turqoise-light to-teal-400 rounded-2xl p-8 text-center text-white">
          <h3 class="text-2xl font-bold mb-6">Platform Results So Far</h3>
          <div class="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div>
              <div class="text-4xl font-bold mb-2">฿45M+</div>
              <div class="text-sm opacity-90">Total Commission Saved</div>
            </div>
            <div>
              <div class="text-4xl font-bold mb-2">23 days</div>
              <div class="text-sm opacity-90">Average Time to Sell</div>
            </div>
            <div>
              <div class="text-4xl font-bold mb-2">96%</div>
              <div class="text-sm opacity-90">Seller Satisfaction Rate</div>
            </div>
            <div>
              <div class="text-4xl font-bold mb-2">2.3%</div>
              <div class="text-sm opacity-90">Average Commission Rate</div>
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
            Frequently Asked Questions
          </h2>
          <p class="text-xl text-brand-navy dark:text-gray-300">
            Everything you need to know about our agent-matching service
          </p>
        </div>

        <div class="space-y-6">
          <div class="bg-gray-50 dark:bg-gray-700 rounded-2xl p-6">
            <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-3">
              How many agent proposals will I receive?
            </h3>
            <p class="text-brand-navy dark:text-gray-300">
              Most property owners receive 3-6 proposals from interested agents within 24-48 hours. The number depends on your location, property type, and current agent availability in your area.
            </p>
          </div>
          
          <div class="bg-gray-50 dark:bg-gray-700 rounded-2xl p-6">
            <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-3">
              Is there any cost to submit my property request?
            </h3>
            <p class="text-brand-navy dark:text-gray-300">
              No, submitting your property details and receiving agent proposals is completely free. You only pay commission when your property successfully sells, and only to the agent you choose to work with.
            </p>
          </div>
          
          <div class="bg-gray-50 dark:bg-gray-700 rounded-2xl p-6">
            <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-3">
              How are your agents different from traditional agents?
            </h3>
            <p class="text-brand-navy dark:text-gray-300">
              All agents in our network are verified, performance-tracked, and offer competitive commission rates. They compete for your business rather than you having to hunt for them, which typically results in better service and lower fees.
            </p>
          </div>
          
          <div class="bg-gray-50 dark:bg-gray-700 rounded-2xl p-6">
            <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-3">
              What if I'm not satisfied with the agents who contact me?
            </h3>
            <p class="text-brand-navy dark:text-gray-300">
              You're under no obligation to work with any agent who contacts you. If you're not satisfied with the initial proposals, we can help connect you with additional agents or you can choose to list your property privately on our platform.
            </p>
          </div>
          
          <div class="bg-gray-50 dark:bg-gray-700 rounded-2xl p-6">
            <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-3">
              Can I still list my property privately instead?
            </h3>
            <p class="text-brand-navy dark:text-gray-300">
              Absolutely! Our platform also offers DIY listing tools for property owners who prefer to sell privately. You can switch between agent-assisted and private listing at any time.
            </p>
          </div>
          
          <div class="bg-gray-50 dark:bg-gray-700 rounded-2xl p-6">
            <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-3">
              How do I know which agent to choose?
            </h3>
            <p class="text-brand-navy dark:text-gray-300">
              Each agent proposal includes their track record, average selling time, commission rate, and marketing plan. You can also view their performance metrics, client reviews, and previous sales in your area to make an informed decision.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Final CTA Section -->
    <section class="py-24 bg-gradient-to-br from-blue-700 via-indigo-800 to-purple-900 text-white">
      <div class="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 class="text-4xl lg:text-5xl font-bold mb-6">
          Ready to Get Started?
        </h2>
        <p class="text-xl text-white/90 mb-12 max-w-3xl mx-auto">
          Stop hunting for agents and let them compete for your business. Upload your property details and start receiving proposals in just 5 minutes.
        </p>
        
        <div class="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
          <button class="bg-brand-turqoise-light text-brand-navy px-12 py-4 rounded-xl font-bold text-xl hover:bg-teal-300 transition-all duration-300 shadow-lg hover:shadow-xl">
            Get Agent Proposals Now
          </button>
          <button class="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-800 transition-all duration-300 text-lg">
            List Privately Instead
          </button>
        </div>

        <!-- Trust Indicators -->
        <div class="grid grid-cols-3 gap-8 max-w-2xl mx-auto opacity-80">
          <div class="text-center">
            <div class="text-2xl font-bold text-brand-turqoise-light mb-1">Free</div>
            <div class="text-sm">No upfront costs</div>
          </div>
          <div class="text-center">
            <div class="text-2xl font-bold text-brand-turqoise-light mb-1">24hr</div>
            <div class="text-sm">Response time</div>
          </div>
          <div class="text-center">
            <div class="text-2xl font-bold text-brand-turqoise-light mb-1">500+</div>
            <div class="text-sm">Verified agents</div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Meta tags
useHead({
  title: 'Sell Property in Thailand - Let Agents Come to You | ThaiKeys',
  meta: [
    {
      name: 'description',
      content: 'Stop hunting for agents! Upload your property details and let verified agents compete for your business. Get multiple proposals, lower commission rates, and faster sales in Thailand.'
    }
  ]
})

// You can add any reactive data or methods needed for the form here
const selectedPropertyType = ref('condo')
const propertyDetails = ref({
  type: 'condo',
  district: '',
  nearestStation: '',
  bedrooms: '2',
  bathrooms: '2',
  size: '',
  expectedPrice: '',
  ownerName: '',
  phone: ''
})

const handlePropertySubmission = () => {
  // Handle form submission logic here
  console.log('Property submission:', propertyDetails.value)
  // You would typically send this data to your backend API
}
</script>

<style scoped>
/* Add any custom styles if needed */
</style>