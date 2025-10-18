<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 font-sans transition-colors duration-300">

    <!-- Hero Section for Expats -->
    <section class="relative pt-16 pb-24 overflow-hidden">
      <!-- Background with overlay -->
      <div class="absolute inset-0 z-0">
        <NuxtImg 
        src="/assets/placeholder/thaikeys-expat-hero.webp"
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
                Expat Life
              </span>
              <br>
              <span class="text-white">Made Simple in Thailand</span>
            </h1>
            
            <!-- Subtitle -->
            <p class="text-xl lg:text-2xl text-white/90 mb-12 leading-relaxed mx-auto">
              Complete guides, community insights, and essential resources for living, working, and thriving in Thailand
            </p>

            <!-- CTA Buttons -->
            <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <button class="bg-brand-red-light text-brand-navy px-8 py-4 rounded-xl font-semibold hover:bg-teal-300 transition-all duration-300 text-lg shadow-lg hover:shadow-xl">
                Browse Area Guides
              </button>
              <button class="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-orange-800 transition-all duration-300 text-lg">
                Download Expat Checklist
              </button>
            </div>

            <!-- Key Stats -->
            <div class="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div class="text-center">
                <div class="text-4xl lg:text-5xl font-bold text-brand-red-light mb-2">50+</div>
                <div class="text-sm lg:text-base font-medium text-white/80">Area Guides</div>
              </div>
              <div class="text-center">
                <div class="text-4xl lg:text-5xl font-bold text-brand-red-light mb-2">200+</div>
                <div class="text-sm lg:text-base font-medium text-white/80">Local Services</div>
              </div>
              <div class="text-center">
                <div class="text-4xl lg:text-5xl font-bold text-brand-red-light mb-2">24/7</div>
                <div class="text-sm lg:text-base font-medium text-white/80">Community Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Popular Area Guides Section -->
    <section class="py-24 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl lg:text-5xl font-bold text-brand-navy dark:text-white mb-6">
            Popular Expat Areas
          </h2>
          <p class="text-xl text-brand-navy dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive guides to Thailand's most expat-friendly neighborhoods
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Sukhumvit Guide -->
          <div class="bg-white dark:bg-gray-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer">
            <div class="h-48 bg-gradient-to-br from-blue-500 to-indigo-600 relative">
              <div class="absolute inset-0 bg-black/20"></div>
              <div class="absolute bottom-4 left-4 text-white">
                <span class="text-sm font-medium bg-brand-red-light text-brand-navy px-2 py-1 rounded">Most Popular</span>
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-brand-navy dark:text-white mb-3">Sukhumvit Corridor</h3>
              <p class="text-brand-navy dark:text-gray-300 mb-4">International dining, shopping, and entertainment hub with excellent BTS connectivity.</p>
              <div class="space-y-2 mb-4">
                <div class="flex items-center text-sm text-brand-navy dark:text-gray-400">
                  <span class="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  International schools nearby
                </div>
                <div class="flex items-center text-sm text-brand-navy dark:text-gray-400">
                  <span class="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  English-speaking services
                </div>
                <div class="flex items-center text-sm text-brand-navy dark:text-gray-400">
                  <span class="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  High expat density
                </div>
              </div>
              <div class="text-brand-navy dark:text-gray-300 text-sm">
                <strong>Rent range:</strong> ₿25,000 - ₿80,000/month
              </div>
            </div>
          </div>

          <!-- Sathorn Guide -->
          <div class="bg-white dark:bg-gray-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer">
            <div class="h-48 bg-gradient-to-br from-emerald-500 to-teal-600 relative">
              <div class="absolute inset-0 bg-black/20"></div>
              <div class="absolute bottom-4 left-4 text-white">
                <span class="text-sm font-medium bg-brand-navy text-white px-2 py-1 rounded">Business Hub</span>
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-brand-navy dark:text-white mb-3">Sathorn District</h3>
              <p class="text-brand-navy dark:text-gray-300 mb-4">Financial district with luxury condos, upscale dining, and riverside living options.</p>
              <div class="space-y-2 mb-4">
                <div class="flex items-center text-sm text-brand-navy dark:text-gray-400">
                  <span class="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Walking distance to offices
                </div>
                <div class="flex items-center text-sm text-brand-navy dark:text-gray-400">
                  <span class="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Luxury amenities
                </div>
                <div class="flex items-center text-sm text-brand-navy dark:text-gray-400">
                  <span class="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                  Higher cost of living
                </div>
              </div>
              <div class="text-brand-navy dark:text-gray-300 text-sm">
                <strong>Rent range:</strong> ₿35,000 - ₿120,000/month
              </div>
            </div>
          </div>

          <!-- Thonglor Guide -->
          <div class="bg-white dark:bg-gray-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer">
            <div class="h-48 bg-gradient-to-br from-purple-500 to-pink-600 relative">
              <div class="absolute inset-0 bg-black/20"></div>
              <div class="absolute bottom-4 left-4 text-white">
                <span class="text-sm font-medium bg-brand-red-light text-brand-navy px-2 py-1 rounded">Trendy</span>
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-brand-navy dark:text-white mb-3">Thonglor/Ekkamai</h3>
              <p class="text-brand-navy dark:text-gray-300 mb-4">Hip neighborhood with craft cocktails, boutique shopping, and modern condos.</p>
              <div class="space-y-2 mb-4">
                <div class="flex items-center text-sm text-brand-navy dark:text-gray-400">
                  <span class="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Vibrant nightlife
                </div>
                <div class="flex items-center text-sm text-brand-navy dark:text-gray-400">
                  <span class="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Artisanal food scene
                </div>
                <div class="flex items-center text-sm text-brand-navy dark:text-gray-400">
                  <span class="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Young professional crowd
                </div>
              </div>
              <div class="text-brand-navy dark:text-gray-300 text-sm">
                <strong>Rent range:</strong> ₿30,000 - ₿100,000/month
              </div>
            </div>
          </div>

          <!-- Silom Guide -->
          <div class="bg-white dark:bg-gray-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer">
            <div class="h-48 bg-gradient-to-br from-red-500 to-rose-600 relative">
              <div class="absolute inset-0 bg-black/20"></div>
              <div class="absolute bottom-4 left-4 text-white">
                <span class="text-sm font-medium bg-brand-navy text-white px-2 py-1 rounded">Central</span>
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-brand-navy dark:text-white mb-3">Silom/Suriwong</h3>
              <p class="text-brand-navy dark:text-gray-300 mb-4">Central business district with diverse housing options and easy transport access.</p>
              <div class="space-y-2 mb-4">
                <div class="flex items-center text-sm text-brand-navy dark:text-gray-400">
                  <span class="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Multiple BTS/MRT lines
                </div>
                <div class="flex items-center text-sm text-brand-navy dark:text-gray-400">
                  <span class="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Diverse price range
                </div>
                <div class="flex items-center text-sm text-brand-navy dark:text-gray-400">
                  <span class="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                  Can be crowded
                </div>
              </div>
              <div class="text-brand-navy dark:text-gray-300 text-sm">
                <strong>Rent range:</strong> ₿20,000 - ₿70,000/month
              </div>
            </div>
          </div>

          <!-- Ari Guide -->
          <div class="bg-white dark:bg-gray-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer">
            <div class="h-48 bg-gradient-to-br from-green-500 to-lime-600 relative">
              <div class="absolute inset-0 bg-black/20"></div>
              <div class="absolute bottom-4 left-4 text-white">
                <span class="text-sm font-medium bg-brand-red-light text-brand-navy px-2 py-1 rounded">Local Vibe</span>
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-brand-navy dark:text-white mb-3">Ari District</h3>
              <p class="text-brand-navy dark:text-gray-300 mb-4">Authentic local neighborhood with great cafes, markets, and affordable living.</p>
              <div class="space-y-2 mb-4">
                <div class="flex items-center text-sm text-brand-navy dark:text-gray-400">
                  <span class="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Authentic Thai experience
                </div>
                <div class="flex items-center text-sm text-brand-navy dark:text-gray-400">
                  <span class="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Great local food
                </div>
                <div class="flex items-center text-sm text-brand-navy dark:text-gray-400">
                  <span class="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                  Limited English services
                </div>
              </div>
              <div class="text-brand-navy dark:text-gray-300 text-sm">
                <strong>Rent range:</strong> ₿15,000 - ₿45,000/month
              </div>
            </div>
          </div>

          <!-- Phra Khanong Guide -->
          <div class="bg-white dark:bg-gray-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer">
            <div class="h-48 bg-gradient-to-br from-cyan-500 to-blue-600 relative">
              <div class="absolute inset-0 bg-black/20"></div>
              <div class="absolute bottom-4 left-4 text-white">
                <span class="text-sm font-medium bg-brand-navy text-white px-2 py-1 rounded">Up & Coming</span>
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-brand-navy dark:text-white mb-3">Phra Khanong</h3>
              <p class="text-brand-navy dark:text-gray-300 mb-4">Emerging area with new developments, creative spaces, and good value for money.</p>
              <div class="space-y-2 mb-4">
                <div class="flex items-center text-sm text-brand-navy dark:text-gray-400">
                  <span class="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Great value properties
                </div>
                <div class="flex items-center text-sm text-brand-navy dark:text-gray-400">
                  <span class="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Creative community
                </div>
                <div class="flex items-center text-sm text-brand-navy dark:text-gray-400">
                  <span class="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                  Still developing
                </div>
              </div>
              <div class="text-brand-navy dark:text-gray-300 text-sm">
                <strong>Rent range:</strong> ₿18,000 - ₿55,000/month
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Essential Services Section -->
    <section class="py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl lg:text-5xl font-bold text-brand-navy dark:text-white mb-6">
            Essential Services Directory
          </h2>
          <p class="text-xl text-brand-navy dark:text-gray-300 max-w-3xl mx-auto">
            Curated list of expat-friendly services with English support
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <!-- Healthcare -->
          <div class="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div class="w-16 h-16 bg-red-100 dark:bg-red-900/20 rounded-xl flex items-center justify-center mb-4">
              <svg class="w-8 h-8 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 class="text-lg font-bold text-brand-navy dark:text-white mb-2">Healthcare</h3>
            <p class="text-sm text-brand-navy dark:text-gray-300 mb-4">International hospitals, clinics, and dental care with English-speaking staff.</p>
            <div class="space-y-2 text-xs text-brand-navy dark:text-gray-400">
              <div>• Bumrungrad International</div>
              <div>• Bangkok Hospital</div>
              <div>• Samitivej Hospital</div>
            </div>
          </div>

          <!-- Banking -->
          <div class="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div class="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-xl flex items-center justify-center mb-4">
              <svg class="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
            </div>
            <h3 class="text-lg font-bold text-brand-navy dark:text-white mb-2">Banking</h3>
            <p class="text-sm text-brand-navy dark:text-gray-300 mb-4">Expat-friendly banks and financial services with English support.</p>
            <div class="space-y-2 text-xs text-brand-navy dark:text-gray-400">
              <div>• Bangkok Bank (expat branches)</div>
              <div>• Kasikorn Bank</div>
              <div>• SCB International</div>
            </div>
          </div>

          <!-- Education -->
          <div class="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div class="w-16 h-16 bg-blue-100 dark:bg-blue-900/20 rounded-xl flex items-center justify-center mb-4">
              <svg class="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 class="text-lg font-bold text-brand-navy dark:text-white mb-2">Education</h3>
            <p class="text-sm text-brand-navy dark:text-gray-300 mb-4">International schools, universities, and language learning centers.</p>
            <div class="space-y-2 text-xs text-brand-navy dark:text-gray-400">
              <div>• NIST International School</div>
              <div>• Bangkok Prep</div>
              <div>• Thammasat University</div>
            </div>
          </div>

          <!-- Legal Services -->
          <div class="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div class="w-16 h-16 bg-purple-100 dark:bg-purple-900/20 rounded-xl flex items-center justify-center mb-4">
              <svg class="w-8 h-8 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 class="text-lg font-bold text-brand-navy dark:text-white mb-2">Legal Services</h3>
            <p class="text-sm text-brand-navy dark:text-gray-300 mb-4">Visa assistance, property law, and general legal support for expats.</p>
            <div class="space-y-2 text-xs text-brand-navy dark:text-gray-400">
              <div>• Tilleke & Gibbins</div>
              <div>• Siam Legal International</div>
              <div>• Thai Visa Centre</div>
            </div>
          </div>
        </div>

        <!-- More Services -->
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          <!-- Transportation -->
          <div class="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div class="w-16 h-16 bg-yellow-100 dark:bg-yellow-900/20 rounded-xl flex items-center justify-center mb-4">
              <svg class="w-8 h-8 text-yellow-600 dark:text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
              </svg>
            </div>
            <h3 class="text-lg font-bold text-brand-navy dark:text-white mb-2">Transportation</h3>
            <p class="text-sm text-brand-navy dark:text-gray-300 mb-4">Getting around Bangkok and Thailand efficiently and safely.</p>
            <div class="space-y-2 text-xs text-brand-navy dark:text-gray-400">
              <div>• BTS/MRT system guide</div>
              <div>• Grab vs taxi tips</div>
              <div>• Motorbike taxi areas</div>
            </div>
          </div>

          <!-- Shopping -->
          <div class="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div class="w-16 h-16 bg-pink-100 dark:bg-pink-900/20 rounded-xl flex items-center justify-center mb-4">
              <svg class="w-8 h-8 text-pink-600 dark:text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
            <h3 class="text-lg font-bold text-brand-navy dark:text-white mb-2">Shopping</h3>
            <p class="text-sm text-brand-navy dark:text-gray-300 mb-4">Where to find international products, groceries, and everyday essentials.</p>
            <div class="space-y-2 text-xs text-brand-navy dark:text-gray-400">
              <div>• Tops Market (imported goods)</div>
              <div>• Villa Market</div>
              <div>• Central Department stores</div>
            </div>
          </div>

          <!-- Utilities & Internet -->
          <div class="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div class="w-16 h-16 bg-indigo-100 dark:bg-indigo-900/20 rounded-xl flex items-center justify-center mb-4">
              <svg class="w-8 h-8 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
              </svg>
            </div>
            <h3 class="text-lg font-bold text-brand-navy dark:text-white mb-2">Utilities & Internet</h3>
            <p class="text-sm text-brand-navy dark:text-gray-300 mb-4">Setting up essential services in your new home.</p>
            <div class="space-y-2 text-xs text-brand-navy dark:text-gray-400">
              <div>• AIS Fiber (high-speed internet)</div>
              <div>• MEA/PEA (electricity)</div>
              <div>• True Move (mobile/internet)</div>
            </div>
          </div>

          <!-- Recreation -->
          <div class="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div class="w-16 h-16 bg-teal-100 dark:bg-teal-900/20 rounded-xl flex items-center justify-center mb-4">
              <svg class="w-8 h-8 text-teal-600 dark:text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.01M15 10h1.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="text-lg font-bold text-brand-navy dark:text-white mb-2">Recreation</h3>
            <p class="text-sm text-brand-navy dark:text-gray-300 mb-4">Fitness, sports, and leisure activities for expats.</p>
            <div class="space-y-2 text-xs text-brand-navy dark:text-gray-400">
              <div>• Fitness First (gym chain)</div>
              <div>• Bangkok Golf Club</div>
              <div>• Expat sports leagues</div>
            </div>
          </div>
        </div>
      </div>
    </section>

        <!-- Living Costs Breakdown -->
    <section class="py-24 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl lg:text-5xl font-bold text-brand-navy dark:text-white mb-6">
            Cost of Living Guide
          </h2>
          <p class="text-xl text-brand-navy dark:text-gray-300 max-w-3xl mx-auto">
            Realistic monthly budgets for different expat lifestyles in Bangkok
          </p>
        </div>

        <div class="grid lg:grid-cols-3 gap-8">
          <!-- Budget Living -->
          <div class="bg-gray-50 dark:bg-gray-700 p-8 rounded-2xl">
            <h3 class="text-2xl font-bold text-brand-navy dark:text-white mb-6">Budget Living</h3>
            <div class="space-y-4 mb-8">
              <div class="flex justify-between items-center">
                <span class="text-brand-navy dark:text-gray-300">Studio/1BR rent</span>
                <span class="font-semibold text-brand-navy dark:text-white">₿15,000 - ₿25,000</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-brand-navy dark:text-gray-300">Utilities</span>
                <span class="font-semibold text-brand-navy dark:text-white">₿3,000 - ₿5,000</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-brand-navy dark:text-gray-300">Food (local + some international)</span>
                <span class="font-semibold text-brand-navy dark:text-white">₿8,000 - ₿12,000</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-brand-navy dark:text-gray-300">Transportation</span>
                <span class="font-semibold text-brand-navy dark:text-white">₿2,000 - ₿4,000</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-brand-navy dark:text-gray-300">Entertainment</span>
                <span class="font-semibold text-brand-navy dark:text-white">₿3,000 - ₿5,000</span>
              </div>
              <div class="border-t border-gray-300 dark:border-gray-600 pt-4">
                <div class="flex justify-between items-center">
                  <span class="text-lg font-bold text-brand-navy dark:text-white">Total Monthly</span>
                  <span class="text-2xl font-bold text-green-600">₿31,000 - ₿51,000</span>
                </div>
              </div>
            </div>
            <p class="text-sm text-brand-navy dark:text-gray-300">Perfect for digital nomads, students, or those wanting to experience local Thai lifestyle.</p>
          </div>

          <!-- Comfortable Living -->
          <div class="bg-gradient-to-br from-brand-red-light to-indigo-400 p-8 rounded-2xl text-brand-navy border-2 border-brand-red-light">
            <div class="text-center mb-6">
              <div class="inline-block bg-brand-navy text-white px-3 py-1 rounded-full text-sm font-semibold mb-4">
                Most Popular
              </div>
            </div>
            <h3 class="text-2xl font-bold mb-6">Comfortable Living</h3>
            <div class="space-y-4 mb-8">
              <div class="flex justify-between items-center">
                <span>1-2BR rent (nice area)</span>
                <span class="font-semibold">₿30,000 - ₿50,000</span>
              </div>
              <div class="flex justify-between items-center">
                <span>Utilities</span>
                <span class="font-semibold">₿4,000 - ₿7,000</span>
              </div>
              <div class="flex justify-between items-center">
                <span>Food (mix of local & international)</span>
                <span class="font-semibold">₿15,000 - ₿20,000</span>
              </div>
              <div class="flex justify-between items-center">
                <span>Transportation</span>
                <span class="font-semibold">₿3,000 - ₿6,000</span>
              </div>
              <div class="flex justify-between items-center">
                <span>Entertainment & dining</span>
                <span class="font-semibold">₿8,000 - ₿12,000</span>
              </div>
              <div class="flex justify-between items-center">
                <span>Healthcare & misc</span>
                <span class="font-semibold">₿5,000 - ₿8,000</span>
              </div>
              <div class="border-t border-brand-navy/30 pt-4">
                <div class="flex justify-between items-center">
                  <span class="text-lg font-bold">Total Monthly</span>
                  <span class="text-2xl font-bold">₿65,000 - ₿103,000</span>
                </div>
              </div>
            </div>
            <p class="text-sm">Ideal for working professionals who want comfort and convenience with some luxury.</p>
          </div>

          <!-- Luxury Living -->
          <div class="bg-gray-50 dark:bg-gray-700 p-8 rounded-2xl">
            <h3 class="text-2xl font-bold text-brand-navy dark:text-white mb-6">Luxury Living</h3>
            <div class="space-y-4 mb-8">
              <div class="flex justify-between items-center">
                <span class="text-brand-navy dark:text-gray-300">Premium 2-3BR</span>
                <span class="font-semibold text-brand-navy dark:text-white">₿60,000 - ₿120,000</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-brand-navy dark:text-gray-300">Utilities</span>
                <span class="font-semibold text-brand-navy dark:text-white">₿6,000 - ₿12,000</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-brand-navy dark:text-gray-300">Fine dining & international food</span>
                <span class="font-semibold text-brand-navy dark:text-white">₿25,000 - ₿40,000</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-brand-navy dark:text-gray-300">Private transport</span>
                <span class="font-semibold text-brand-navy dark:text-white">₿8,000 - ₿15,000</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-brand-navy dark:text-gray-300">Premium entertainment</span>
                <span class="font-semibold text-brand-navy dark:text-white">₿15,000 - ₿25,000</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-brand-navy dark:text-gray-300">Services & lifestyle</span>
                <span class="font-semibold text-brand-navy dark:text-white">₿10,000 - ₿20,000</span>
              </div>
              <div class="border-t border-gray-300 dark:border-gray-600 pt-4">
                <div class="flex justify-between items-center">
                  <span class="text-lg font-bold text-brand-navy dark:text-white">Total Monthly</span>
                  <span class="text-2xl font-bold text-purple-600">₿124,000 - ₿232,000</span>
                </div>
              </div>
            </div>
            <p class="text-sm text-brand-navy dark:text-gray-300">For executives and high earners who want the best Thailand has to offer.</p>
          </div>
        </div>
      </div>
    </section>

        <!-- Visa & Legal Information -->
    <section class="py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl lg:text-5xl font-bold text-brand-navy dark:text-white mb-6">
            Visa & Legal Guide
          </h2>
          <p class="text-xl text-brand-navy dark:text-gray-300 max-w-3xl mx-auto">
            Essential information for legal residence and work in Thailand
          </p>
        </div>

        <div class="grid lg:grid-cols-2 gap-12">
          <!-- Common Visa Types -->
          <div>
            <h3 class="text-2xl font-bold text-brand-navy dark:text-white mb-6">Common Visa Types</h3>
            <div class="space-y-6">
              <div class="bg-white dark:bg-gray-800 p-6 rounded-xl">
                <h4 class="text-xl font-semibold text-brand-navy dark:text-white mb-3">Tourist Visa</h4>
                <p class="text-brand-navy dark:text-gray-300 mb-3">60 days, extendable for 30 days. Perfect for exploring before committing to long-term stay.</p>
                <div class="text-sm text-brand-navy dark:text-gray-400">
                  <strong>Best for:</strong> Short-term visitors, property hunting trips
                </div>
              </div>

              <div class="bg-white dark:bg-gray-800 p-6 rounded-xl">
                <h4 class="text-xl font-semibold text-brand-navy dark:text-white mb-3">Non-Immigrant B (Work)</h4>
                <p class="text-brand-navy dark:text-gray-300 mb-3">For employment in Thailand. Requires job offer and work permit application.</p>
                <div class="text-sm text-brand-navy dark:text-gray-400">
                  <strong>Best for:</strong> Employed professionals, teachers, business owners
                </div>
              </div>

              <div class="bg-white dark:bg-gray-800 p-6 rounded-xl">
                <h4 class="text-xl font-semibold text-brand-navy dark:text-white mb-3">Non-Immigrant O (Retirement)</h4>
                <p class="text-brand-navy dark:text-gray-300 mb-3">For those 50+ with ₿800,000 in Thai bank or ₿65,000 monthly income.</p>
                <div class="text-sm text-brand-navy dark:text-gray-400">
                  <strong>Best for:</strong> Retirees, long-term residents 50+
                </div>
              </div>

              <div class="bg-white dark:bg-gray-800 p-6 rounded-xl">
                <h4 class="text-xl font-semibold text-brand-navy dark:text-white mb-3">Elite Visa</h4>
                <p class="text-brand-navy dark:text-gray-300 mb-3">5-20 year visas for ₿600,000-₿2,000,000. No work permit required for some categories.</p>
                <div class="text-sm text-brand-navy dark:text-gray-400">
                  <strong>Best for:</strong> High net worth individuals, frequent visitors
                </div>
              </div>
            </div>
          </div>

          <!-- Important Legal Considerations -->
          <div>
            <h3 class="text-2xl font-bold text-brand-navy dark:text-white mb-6">Legal Considerations</h3>
            <div class="space-y-6">
              <div class="bg-white dark:bg-gray-800 p-6 rounded-xl">
                <h4 class="text-xl font-semibold text-brand-navy dark:text-white mb-3">90-Day Reporting</h4>
                <p class="text-brand-navy dark:text-gray-300">Required for all long-term visa holders. Can be done online or at immigration office.</p>
              </div>

              <div class="bg-white dark:bg-gray-800 p-6 rounded-xl">
                <h4 class="text-xl font-semibold text-brand-navy dark:text-white mb-3">Tax Obligations</h4>
                <p class="text-brand-navy dark:text-gray-300">Residents (180+ days/year) may be liable for Thai income tax. Consult tax professional.</p>
              </div>

              <div class="bg-white dark:bg-gray-800 p-6 rounded-xl">
                <h4 class="text-xl font-semibold text-brand-navy dark:text-white mb-3">Healthcare Requirements</h4>
                <p class="text-brand-navy dark:text-gray-300">Some visas require health insurance. International coverage recommended for all expats.</p>
              </div>

              <div class="bg-white dark:bg-gray-800 p-6 rounded-xl">
                <h4 class="text-xl font-semibold text-brand-navy dark:text-white mb-3">Banking Restrictions</h4>
                <p class="text-brand-navy dark:text-gray-300">Tourist visa holders may face challenges opening bank accounts. Work permit holders have easier access.</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Important Disclaimer -->
        <div class="mt-12 bg-yellow-50 dark:bg-yellow-900/10 border border-yellow-200 dark:border-yellow-800 rounded-xl p-6">
          <div class="text-center">
            <svg class="w-8 h-8 text-yellow-600 dark:text-yellow-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.996-.833-2.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
            <h4 class="text-lg font-semibold text-yellow-800 dark:text-yellow-400 mb-3">Legal Disclaimer</h4>
            <p class="text-yellow-700 dark:text-yellow-300 text-sm max-w-3xl mx-auto">
              Visa and immigration laws change frequently. This information is for general guidance only. 
              Always consult with qualified immigration lawyers or the Thai Embassy/Consulate for current requirements and personalized advice.
            </p>
          </div>
        </div>
      </div>
    </section>

        <!-- FAQ Section -->
    <section class="py-24 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div class="max-w-4xl mx-auto px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl lg:text-5xl font-bold text-brand-navy dark:text-white mb-6">
            Expat FAQ
          </h2>
          <p class="text-xl text-brand-navy dark:text-gray-300">
            Answers to the most common questions from expats in Thailand
          </p>
        </div>

        <div class="space-y-6">
          <div class="bg-gray-50 dark:bg-gray-700 rounded-2xl p-6">
            <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-3">How much money should I bring when moving to Thailand?</h3>
            <p class="text-brand-navy dark:text-gray-300">Plan for 3-6 months of living expenses plus move-in costs (deposits, furniture). Minimum ₿200,000-₿400,000 for comfortable transition, depending on lifestyle.</p>
          </div>

          <div class="bg-gray-50 dark:bg-gray-700 rounded-2xl p-6">
            <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-3">Is it safe to live in Bangkok as an expat?</h3>
            <p class="text-brand-navy dark:text-gray-300">Bangkok is generally very safe for expats. Violent crime is rare, but watch for petty theft and scams targeting tourists. Expat areas like Sukhumvit and Silom have good police presence.</p>
          </div>

          <div class="bg-gray-50 dark:bg-gray-700 rounded-2xl p-6">
            <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-3">Do I need to speak Thai to live comfortably?</h3>
            <p class="text-brand-navy dark:text-gray-300">Not essential in expat areas where English is widely spoken, but learning basic Thai greatly improves daily life and shows respect for local culture. Many services offer English support.</p>
          </div>

          <div class="bg-gray-50 dark:bg-gray-700 rounded-2xl p-6">
            <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-3">What's the best way to find expat communities?</h3>
            <p class="text-brand-navy dark:text-gray-300">Facebook groups, co-working spaces, international chambers of commerce, sports clubs, and volunteer organizations. Many condos in expat areas naturally form communities.</p>
          </div>

          <div class="bg-gray-50 dark:bg-gray-700 rounded-2xl p-6">
            <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-3">How do I deal with the language barrier for important services?</h3>
            <p class="text-brand-navy dark:text-gray-300">Use expat-recommended service providers, bring a Thai-speaking friend for important appointments, or hire translation services. Many hospitals and banks have English-speaking staff.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Final CTA -->
    <section class="py-24 bg-brand-navy dark:bg-gray-900 text-white transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 class="text-4xl lg:text-5xl font-bold mb-6">
          Ready to Start Your Thailand Journey?
        </h2>
        <p class="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
          Get personalized area recommendations and connect with expat-friendly services
        </p>
        
        <div class="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button class="bg-brand-red-light text-brand-navy px-8 py-4 rounded-xl font-semibold hover:bg-teal-300 transition-all duration-300 text-lg shadow-lg hover:shadow-xl">
            Find Properties in Expat Areas
          </button>
          <button class="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-brand-navy transition-all duration-300 text-lg">
            Download Complete Guide
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Meta tags
useHead({
  title: 'Expat Guide Thailand - Complete Living Guide for Foreigners',
  meta: [
    {
      name: 'description',
      content: 'Complete expat guide for living in Thailand. Area guides, cost of living, visa information, and essential services directory for foreigners in Bangkok.'
    }
  ]
})
</script>
