<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 font-sans transition-colors duration-300">
    
    <!-- Hero Section for Developers -->
    <section class="relative pt-16 pb-24 overflow-hidden">
      <!-- Background with overlay -->
      <div class="absolute inset-0 z-0">
        <NuxtImg 
        src="/assets/placeholder/thaikeys-developers-hero.webp"
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
                {{ $t('developers.hero.title_part1') }}
              </span>
              <br>
              <span class="text-white">{{ $t('developers.hero.title_part2') }}</span>
            </h1>
            
            <!-- Subtitle -->
            <p class="text-xl lg:text-2xl text-white/90 mb-12 leading-relaxed mx-auto">
              {{ $t('developers.hero.subtitle') }}
            </p>

            <!-- CTA Buttons -->
            <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <button class="bg-brand-turqoise-light text-brand-navy px-8 py-4 rounded-xl font-semibold hover:bg-teal-300 transition-all duration-300 text-lg shadow-lg hover:shadow-xl">
                {{ $t('developers.hero.list_project') }}
              </button>
              <button class="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-purple-800 transition-all duration-300 text-lg">
                {{ $t('developers.hero.view_portfolio') }}
              </button>
            </div>

            <!-- Key Stats -->
            <div class="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div class="text-center">
                <div class="text-4xl lg:text-5xl font-bold text-brand-turqoise-light mb-2">300+</div>
                <div class="text-sm lg:text-base font-medium text-white/80">{{ $t('developers.stats.projects') }}</div>
              </div>
              <div class="text-center">
                <div class="text-4xl lg:text-5xl font-bold text-brand-turqoise-light mb-2">85%</div>
                <div class="text-sm lg:text-base font-medium text-white/80">{{ $t('developers.stats.pre_sold') }}</div>
              </div>
              <div class="text-center">
                <div class="text-4xl lg:text-5xl font-bold text-brand-turqoise-light mb-2">₿50B+</div>
                <div class="text-sm lg:text-base font-medium text-white/80">{{ $t('developers.stats.value_sold') }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Project Types Section -->
    <section class="py-24 bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl lg:text-5xl font-bold text-brand-navy dark:text-white mb-6">
            Development Project Types
          </h2>
          <p class="text-xl text-brand-navy dark:text-gray-300 max-w-3xl mx-auto">
            From luxury condominiums to mixed-use developments, showcase your projects to Thailand's most engaged property buyers
          </p>
        </div>

        <div class="grid lg:grid-cols-3 gap-8">
          <!-- Condominium Developments -->
          <div class="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100 dark:border-purple-800">
            <div class="w-16 h-16 bg-purple-100 dark:bg-purple-900/20 rounded-xl flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-brand-navy dark:text-white mb-4">Luxury Condominiums</h3>
            <p class="text-brand-navy dark:text-gray-300 mb-6">High-rise and mid-rise developments with premium amenities and prime locations.</p>
            <div class="space-y-2 mb-6">
              <div class="flex items-center space-x-2">
                <svg class="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span class="text-sm text-brand-navy dark:text-gray-300">Pre-sales management</span>
              </div>
              <div class="flex items-center space-x-2">
                <svg class="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span class="text-sm text-brand-navy dark:text-gray-300">Unit reservation system</span>
              </div>
              <div class="flex items-center space-x-2">
                <svg class="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span class="text-sm text-brand-navy dark:text-gray-300">Progress updates</span>
              </div>
            </div>
            <div class="text-center">
              <div class="text-lg font-bold text-brand-navy dark:text-white">₿5M - ₿100M+</div>
              <div class="text-sm text-brand-navy dark:text-gray-400">Typical project value</div>
            </div>
          </div>

          <!-- Mixed-Use Developments -->
          <div class="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-indigo-100 dark:border-indigo-800">
            <div class="w-16 h-16 bg-indigo-100 dark:bg-indigo-900/20 rounded-xl flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-brand-navy dark:text-white mb-4">Mixed-Use Projects</h3>
            <p class="text-brand-navy dark:text-gray-300 mb-6">Integrated developments combining residential, commercial, and retail spaces.</p>
            <div class="space-y-2 mb-6">
              <div class="flex items-center space-x-2">
                <svg class="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span class="text-sm text-brand-navy dark:text-gray-300">Multi-phase management</span>
              </div>
              <div class="flex items-center space-x-2">
                <svg class="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span class="text-sm text-brand-navy dark:text-gray-300">Commercial leasing tools</span>
              </div>
              <div class="flex items-center space-x-2">
                <svg class="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span class="text-sm text-brand-navy dark:text-gray-300">Investment analytics</span>
              </div>
            </div>
            <div class="text-center">
              <div class="text-lg font-bold text-brand-navy dark:text-white">₿20M - ₿500M+</div>
              <div class="text-sm text-brand-navy dark:text-gray-400">Typical project value</div>
            </div>
          </div>

          <!-- Villa Communities -->
          <div class="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100 dark:border-blue-800">
            <div class="w-16 h-16 bg-blue-100 dark:bg-blue-900/20 rounded-xl flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-brand-navy dark:text-white mb-4">Villa Communities</h3>
            <p class="text-brand-navy dark:text-gray-300 mb-6">Exclusive residential developments with private villas and community amenities.</p>
            <div class="space-y-2 mb-6">
              <div class="flex items-center space-x-2">
                <svg class="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span class="text-sm text-brand-navy dark:text-gray-300">Plot customization</span>
              </div>
              <div class="flex items-center space-x-2">
                <svg class="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span class="text-sm text-brand-navy dark:text-gray-300">Construction tracking</span>
              </div>
              <div class="flex items-center space-x-2">
                <svg class="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span class="text-sm text-brand-navy dark:text-gray-300">Community management</span>
              </div>
            </div>
            <div class="text-center">
              <div class="text-lg font-bold text-brand-navy dark:text-white">₿15M - ₿200M+</div>
              <div class="text-sm text-brand-navy dark:text-gray-400">Typical project value</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Developer Platform Features -->
    <section class="py-24 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl lg:text-5xl font-bold text-brand-navy dark:text-white mb-6">
            Complete Development Platform
          </h2>
          <p class="text-xl text-brand-navy dark:text-gray-300 max-w-3xl mx-auto">
            Manage your entire development lifecycle from pre-launch marketing to handover with our integrated platform
          </p>
        </div>

        <!-- Pre-Launch Marketing Feature -->
        <div class="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 bg-brand-turqoise-light rounded-xl flex items-center justify-center mr-4">
                <svg class="w-6 h-6 text-brand-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-brand-navy dark:text-white">Pre-Launch Marketing</h3>
            </div>
            <p class="text-lg text-brand-navy dark:text-gray-300 mb-6">
              Build anticipation and capture qualified leads before your project breaks ground with comprehensive pre-launch campaigns.
            </p>
            <ul class="space-y-3">
              <li class="flex items-center text-brand-navy dark:text-gray-300">
                <svg class="w-5 h-5 text-brand-turqoise-light mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                Interest registration and lead nurturing campaigns
              </li>
              <li class="flex items-center text-brand-navy dark:text-gray-300">
                <svg class="w-5 h-5 text-brand-turqoise-light mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                Architectural renderings and virtual showrooms
              </li>
              <li class="flex items-center text-brand-navy dark:text-gray-300">
                <svg class="w-5 h-5 text-brand-turqoise-light mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                Early bird pricing and exclusive access management
              </li>
            </ul>
          </div>
          
          <!-- Marketing Visual -->
          <div class="relative">
            <div class="bg-gradient-to-br from-purple-50 to-indigo-100 dark:from-purple-900/20 dark:to-indigo-900/20 rounded-2xl p-8 border border-purple-200 dark:border-purple-800">
              <div class="text-center mb-6">
                <div class="inline-block bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  Pre-Launch Phase
                </div>
                <h4 class="text-xl font-bold text-brand-navy dark:text-white mb-2">Luxury Residences Sukhumvit</h4>
                <p class="text-brand-navy dark:text-gray-400">Coming Q3 2025</p>
              </div>
              
              <div class="space-y-4">
                <div class="bg-white dark:bg-gray-700 p-4 rounded-xl border border-purple-100 dark:border-purple-700">
                  <div class="flex justify-between items-center">
                    <span class="font-semibold text-brand-navy dark:text-white">Interest Registered</span>
                    <span class="text-purple-600 dark:text-purple-400 font-bold">1,247 leads</span>
                  </div>
                  <div class="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2 mt-2">
                    <div class="bg-purple-600 h-2 rounded-full" style="width: 78%"></div>
                  </div>
                </div>
                
                <div class="bg-white dark:bg-gray-700 p-4 rounded-xl border border-purple-100 dark:border-purple-700">
                  <div class="flex justify-between items-center">
                    <span class="font-semibold text-brand-navy dark:text-white">Units Reserved</span>
                    <span class="text-green-600 dark:text-green-400 font-bold">156 / 200</span>
                  </div>
                  <div class="text-sm text-brand-navy dark:text-gray-400 mt-1">78% pre-sold</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Additional Features Grid -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Unit Management -->
          <div class="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
            <div class="w-16 h-16 bg-brand-turqoise-light rounded-full flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-brand-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-brand-navy dark:text-white mb-4">Unit Inventory Management</h3>
            <p class="text-brand-navy dark:text-gray-300">Real-time unit availability, pricing tiers, and reservation system with automated updates.</p>
          </div>

          <!-- Payment Tracking -->
          <div class="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
            <div class="w-16 h-16 bg-brand-turqoise-light rounded-full flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-brand-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-brand-navy dark:text-white mb-4">Payment Schedule Tracking</h3>
            <p class="text-brand-navy dark:text-gray-300">Automated payment reminders, milestone-based collections, and financial reporting.</p>
          </div>

          <!-- Construction Updates -->
          <div class="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
            <div class="w-16 h-16 bg-brand-turqoise-light rounded-full flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-brand-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-brand-navy dark:text-white mb-4">Progress Communications</h3>
            <p class="text-brand-navy dark:text-gray-300">Automated buyer updates with photos, timelines, and milestone notifications.</p>
          </div>
        </div>
      </div>
    </section>
    <!-- Agent Partnership Program -->
    <section class="py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl lg:text-5xl font-bold text-brand-navy dark:text-white mb-6">
            Featured Agent Program
          </h2>
          <p class="text-xl text-brand-navy dark:text-gray-300 max-w-3xl mx-auto">
            Partner with Thailand's top real estate agents to maximize your project's reach and sales velocity
          </p>
        </div>

        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <!-- Program Benefits -->
          <div class="space-y-8">
            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-brand-turqoise-light rounded-xl flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-brand-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-semibold text-brand-navy dark:text-white mb-2">Curated Agent Network</h3>
                <p class="text-brand-navy dark:text-gray-300">Access to verified agents with proven track records in your project's price range and location.</p>
              </div>
            </div>

            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-brand-turqoise-light rounded-xl flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-brand-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-semibold text-brand-navy dark:text-white mb-2">Performance Analytics</h3>
                <p class="text-brand-navy dark:text-gray-300">Track agent performance, lead quality, and conversion rates to optimize your sales team.</p>
              </div>
            </div>

            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-brand-turqoise-light rounded-xl flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-brand-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-semibold text-brand-navy dark:text-white mb-2">Flexible Commission Structure</h3>
                <p class="text-brand-navy dark:text-gray-300">Competitive commission rates with performance incentives to motivate your sales team.</p>
              </div>
            </div>

            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-brand-turqoise-light rounded-xl flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-brand-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-semibold text-brand-navy dark:text-white mb-2">Training & Materials</h3>
                <p class="text-brand-navy dark:text-gray-300">Comprehensive project training and sales materials to ensure agents can effectively sell your units.</p>
              </div>
            </div>
          </div>

          <!-- Agent Dashboard Preview -->
          <div class="relative">
            <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden">
              <div class="bg-gray-50 dark:bg-gray-700 px-6 py-4 border-b border-gray-100 dark:border-gray-600">
                <h3 class="font-semibold text-brand-navy dark:text-white">Featured Agent Performance</h3>
              </div>
              
              <div class="p-6">
                <div class="grid grid-cols-2 gap-4 mb-6">
                  <div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-xl border border-green-200 dark:border-green-800">
                    <div class="text-2xl font-bold text-green-700 dark:text-green-400">12</div>
                    <div class="text-sm font-medium text-green-600 dark:text-green-300 mt-1">Units Sold This Month</div>
                  </div>
                  <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border border-blue-200 dark:border-blue-800">
                    <div class="text-2xl font-bold text-blue-700 dark:text-blue-400">₿48M</div>
                    <div class="text-sm font-medium text-blue-600 dark:text-blue-300 mt-1">Sales Value</div>
                  </div>
                </div>
                
                <div class="space-y-3">
                  <div class="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-xl">
                    <div class="w-10 h-10 bg-brand-turqoise-light rounded-full flex items-center justify-center">
                      <span class="text-sm font-bold text-brand-navy">AK</span>
                    </div>
                    <div class="flex-1">
                      <div class="font-medium text-brand-navy dark:text-white">Agent Apinya K.</div>
                      <div class="text-sm text-brand-navy dark:text-gray-400">8 units sold • Top performer</div>
                    </div>
                    <div class="text-right">
                      <div class="text-sm font-bold text-green-600 dark:text-green-400">₿32M</div>
                    </div>
                  </div>
                  
                  <div class="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-xl">
                    <div class="w-10 h-10 bg-brand-turqoise-light rounded-full flex items-center justify-center">
                      <span class="text-sm font-bold text-brand-navy">SP</span>
                    </div>
                    <div class="flex-1">
                      <div class="font-medium text-brand-navy dark:text-white">Agent Somchai P.</div>
                      <div class="text-sm text-brand-navy dark:text-gray-400">4 units sold • Rising star</div>
                    </div>
                    <div class="text-right">
                      <div class="text-sm font-bold text-blue-600 dark:text-blue-400">₿16M</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Success Stories -->
    <section class="py-24 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl lg:text-5xl font-bold text-brand-navy dark:text-white mb-6">
            Developer Success Stories
          </h2>
          <p class="text-xl text-brand-navy dark:text-gray-300 max-w-3xl mx-auto">
            See how leading developers are achieving faster sales and higher profits with our platform
          </p>
        </div>

        <div class="grid lg:grid-cols-3 gap-8 mb-16">
          <!-- Success Story 1 -->
          <div class="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-8 rounded-2xl border border-green-200 dark:border-green-800">
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mr-4">
                <span class="text-green-700 dark:text-green-400 font-bold text-lg">SP</span>
              </div>
              <div>
                <h4 class="font-semibold text-brand-navy dark:text-white">Sansiri Public Company</h4>
                <p class="text-sm text-brand-navy dark:text-gray-400">Premium Condominium Developer</p>
              </div>
            </div>
            <div class="mb-4">
              <div class="text-3xl font-bold text-green-700 dark:text-green-400 mb-2">92%</div>
              <div class="text-sm font-medium text-green-600 dark:text-green-300">Pre-sold in 6 months</div>
            </div>
            <p class="text-brand-navy dark:text-gray-300 italic text-sm">
              "The pre-launch marketing tools helped us achieve 92% pre-sales before construction even started. The ROI was exceptional."
            </p>
          </div>

          <!-- Success Story 2 -->
          <div class="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-8 rounded-2xl border border-blue-200 dark:border-blue-800">
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center mr-4">
                <span class="text-blue-700 dark:text-blue-400 font-bold text-lg">AP</span>
              </div>
              <div>
                <h4 class="font-semibold text-brand-navy dark:text-white">AP Thailand</h4>
                <p class="text-sm text-brand-navy dark:text-gray-400">Mixed-Use Development</p>
              </div>
            </div>
            <div class="mb-4">
              <div class="text-3xl font-bold text-blue-700 dark:text-blue-400 mb-2">45%</div>
              <div class="text-sm font-medium text-blue-600 dark:text-blue-300">Faster sales velocity</div>
            </div>
            <p class="text-brand-navy dark:text-gray-300 italic text-sm">
              "Our sales team efficiency improved dramatically with the integrated CRM and agent management tools."
            </p>
          </div>

          <!-- Success Story 3 -->
          <div class="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-8 rounded-2xl border border-purple-200 dark:border-purple-800">
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center mr-4">
                <span class="text-purple-700 dark:text-purple-400 font-bold text-lg">LH</span>
              </div>
              <div>
                <h4 class="font-semibold text-brand-navy dark:text-white">LH Financial Group</h4>
                <p class="text-sm text-brand-navy dark:text-gray-400">Luxury Villa Community</p>
              </div>
            </div>
            <div class="mb-4">
              <div class="text-3xl font-bold text-purple-700 dark:text-purple-400 mb-2">₿2.1B</div>
              <div class="text-sm font-medium text-purple-600 dark:text-purple-300">Total project value sold</div>
            </div>
            <p class="text-brand-navy dark:text-gray-300 italic text-sm">
              "The payment tracking and buyer communication tools streamlined our entire sales process significantly."
            </p>
          </div>
        </div>

        <!-- Key Benefits Summary -->
        <div class="bg-gradient-to-r from-brand-turqoise-light/10 to-indigo-100/50 dark:from-brand-turqoise-light/20 dark:to-indigo-900/20 rounded-2xl p-8 border border-brand-turqoise-light/20 dark:border-brand-turqoise-light/30">
          <div class="text-center mb-8">
            <h3 class="text-2xl font-bold text-brand-navy dark:text-white mb-4">Average Developer Results</h3>
            <p class="text-brand-navy dark:text-gray-300">Based on 50+ completed projects over the past 2 years</p>
          </div>
          
          <div class="grid md:grid-cols-4 gap-6">
            <div class="text-center">
              <div class="text-3xl font-bold text-brand-turqoise-light mb-2">78%</div>
              <div class="text-sm text-brand-navy dark:text-gray-300">Average Pre-Sale Rate</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-brand-turqoise-light mb-2">6 months</div>
              <div class="text-sm text-brand-navy dark:text-gray-300">Faster Project Completion</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-brand-turqoise-light mb-2">35%</div>
              <div class="text-sm text-brand-navy dark:text-gray-300">Higher Profit Margins</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-brand-turqoise-light mb-2">98%</div>
              <div class="text-sm text-brand-navy dark:text-gray-300">Buyer Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Pricing & Packages -->
    <section class="py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl lg:text-5xl font-bold text-brand-navy dark:text-white mb-6">
            Developer Packages
          </h2>
          <p class="text-xl text-brand-navy dark:text-gray-300 max-w-3xl mx-auto">
            Choose the perfect package for your development project size and marketing needs
          </p>
        </div>

        <div class="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <!-- Starter Package -->
          <div class="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
            <div class="text-center mb-8">
              <h3 class="text-2xl font-bold text-brand-navy dark:text-white mb-4">Starter</h3>
              <div class="text-4xl font-bold text-brand-navy dark:text-white mb-2">₿25,000</div>
              <div class="text-gray-600 dark:text-gray-400 text-sm">per project setup</div>
              <div class="inline-block bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-3 py-1 rounded-full text-xs font-semibold mt-2">
                Up to 50 units
              </div>
            </div>
            
            <div class="space-y-3 mb-8">
              <div class="flex items-start text-brand-navy dark:text-gray-300">
                <svg class="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span class="text-sm">Project listing and management</span>
              </div>
              <div class="flex items-start text-brand-navy dark:text-gray-300">
                <svg class="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span class="text-sm">Basic unit inventory system</span>
              </div>
              <div class="flex items-start text-brand-navy dark:text-gray-300">
                <svg class="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span class="text-sm">Lead capture and management</span>
              </div>
              <div class="flex items-start text-brand-navy dark:text-gray-300">
                <svg class="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span class="text-sm">Basic reporting dashboard</span>
              </div>
              <div class="flex items-start text-gray-500 dark:text-gray-400">
                <svg class="w-5 h-5 text-gray-400 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
                <span class="text-sm">Featured agent access</span>
              </div>
              <div class="flex items-start text-gray-500 dark:text-gray-400">
                <svg class="w-5 h-5 text-gray-400 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
                <span class="text-sm">Advanced marketing tools</span>
              </div>
            </div>
            <button class="w-full border-2 border-brand-turqoise-light text-brand-turqoise-light py-3 px-6 rounded-xl font-semibold hover:bg-brand-turqoise-light hover:text-brand-navy transition-all duration-300">
              Get Started
            </button>
          </div>

          <!-- Professional Package (Featured) -->
          <div class="bg-gradient-to-br from-brand-turqoise-light to-indigo-400 p-8 rounded-2xl shadow-xl transform scale-105 border-2 border-brand-turqoise-light">
            <div class="text-center mb-8">
              <div class="inline-block bg-brand-navy text-white px-3 py-1 rounded-full text-sm font-semibold mb-4">
                Most Popular
              </div>
              <h3 class="text-2xl font-bold text-brand-navy mb-4">Professional</h3>
              <div class="text-4xl font-bold text-brand-navy mb-2">₿75,000</div>
              <div class="text-brand-navy/80 text-sm">per project setup</div>
              <div class="inline-block bg-brand-navy text-white px-3 py-1 rounded-full text-xs font-semibold mt-2">
                Up to 200 units
              </div>
            </div>
            
            <div class="space-y-3 mb-8">
              <div class="flex items-start text-brand-navy">
                <svg class="w-5 h-5 text-brand-navy mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span class="text-sm font-medium">Everything in Starter, plus:</span>
              </div>
              <div class="flex items-start text-brand-navy">
                <svg class="w-5 h-5 text-brand-navy mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span class="text-sm font-medium">Featured agent network access</span>
              </div>
              <div class="flex items-start text-brand-navy">
                <svg class="w-5 h-5 text-brand-navy mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span class="text-sm font-medium">Pre-launch marketing campaigns</span>
              </div>
              <div class="flex items-start text-brand-navy">
                <svg class="w-5 h-5 text-brand-navy mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span class="text-sm font-medium">Advanced payment tracking</span>
              </div>
              <div class="flex items-start text-brand-navy">
                <svg class="w-5 h-5 text-brand-navy mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span class="text-sm font-medium">Construction progress updates</span>
              </div>
              <div class="flex items-start text-brand-navy">
                <svg class="w-5 h-5 text-brand-navy mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span class="text-sm font-medium">Dedicated account manager</span>
              </div>
            </div>
            <button class="w-full bg-brand-navy text-white py-3 px-6 rounded-xl font-semibold hover:bg-brand-navy/90 transition-all duration-300">
              Choose Professional
            </button>
          </div>

          <!-- Enterprise Package -->
          <div class="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
            <div class="text-center mb-8">
              <h3 class="text-2xl font-bold text-brand-navy dark:text-white mb-4">Enterprise</h3>
              <div class="text-4xl font-bold text-brand-navy dark:text-white mb-2">Custom</div>
              <div class="text-gray-600 dark:text-gray-400 text-sm">tailored pricing</div>
              <div class="inline-block bg-purple-100 dark:bg-purple-900/20 text-purple-700 dark:text-purple-400 px-3 py-1 rounded-full text-xs font-semibold mt-2">
                500+ units
              </div>
            </div>
            
            <div class="space-y-3 mb-8">
              <div class="flex items-start text-brand-navy dark:text-gray-300">
                <svg class="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span class="text-sm">Everything in Professional, plus:</span>
              </div>
              <div class="flex items-start text-brand-navy dark:text-gray-300">
                <svg class="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span class="text-sm">Multi-project portfolio management</span>
              </div>
              <div class="flex items-start text-brand-navy dark:text-gray-300">
                <svg class="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span class="text-sm">Custom integrations & API access</span>
              </div>
              <div class="flex items-start text-brand-navy dark:text-gray-300">
                <svg class="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span class="text-sm">Priority support & training</span>
              </div>
              <div class="flex items-start text-brand-navy dark:text-gray-300">
                <svg class="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span class="text-sm">White-label solutions</span>
              </div>
              <div class="flex items-start text-brand-navy dark:text-gray-300">
                <svg class="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span class="text-sm">Advanced analytics & reporting</span>
              </div>
            </div>
            <button class="w-full border-2 border-brand-turqoise-light text-brand-turqoise-light py-3 px-6 rounded-xl font-semibold hover:bg-brand-turqoise-light hover:text-brand-navy transition-all duration-300">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>
    <!-- FAQ Section -->
    <section class="py-24 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div class="max-w-4xl mx-auto px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl lg:text-5xl font-bold text-brand-navy dark:text-white mb-6">
            Developer FAQ
          </h2>
          <p class="text-xl text-brand-navy dark:text-gray-300">
            Common questions about our developer platform and services
          </p>
        </div>

        <div class="space-y-6">
          <div class="bg-gray-50 dark:bg-gray-700 rounded-2xl p-6 shadow-lg">
            <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-3">How quickly can we launch our project on the platform?</h3>
            <p class="text-brand-navy dark:text-gray-300">Project setup typically takes 5-7 business days after documentation review. This includes project verification, unit inventory setup, and marketing material preparation. Our team works closely with you to ensure a smooth launch.</p>
          </div>

          <div class="bg-gray-50 dark:bg-gray-700 rounded-2xl p-6 shadow-lg">
            <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-3">What commission rates do featured agents charge?</h3>
            <p class="text-brand-navy dark:text-gray-300">Commission rates vary by project value and location, typically ranging from 2-5% of unit sale price. Our platform allows you to set commission structures and incentive programs to motivate your sales team effectively.</p>
          </div>

          <div class="bg-gray-50 dark:bg-gray-700 rounded-2xl p-6 shadow-lg">
            <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-3">Can we manage multiple projects simultaneously?</h3>
            <p class="text-brand-navy dark:text-gray-300">Yes, our Professional and Enterprise packages support multiple project management. You can track performance across your entire portfolio, share agents between projects, and access consolidated reporting.</p>
          </div>

          <div class="bg-gray-50 dark:bg-gray-700 rounded-2xl p-6 shadow-lg">
            <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-3">How do payment tracking and collections work?</h3>
            <p class="text-brand-navy dark:text-gray-300">Our system automatically tracks payment schedules based on your construction milestones, sends automated reminders to buyers, and provides real-time payment status updates. Integration with Thai banking systems ensures seamless transactions.</p>
          </div>

          <div class="bg-gray-50 dark:bg-gray-700 rounded-2xl p-6 shadow-lg">
            <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-3">What kind of marketing support is included?</h3>
            <p class="text-brand-navy dark:text-gray-300">Professional and Enterprise packages include pre-launch campaigns, social media promotion, featured placement on our platform, and access to our buyer database. We also provide marketing materials and campaign performance analytics.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Final CTA -->
    <section class="py-24 bg-brand-navy dark:bg-gray-900 text-white transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 class="text-4xl lg:text-5xl font-bold mb-6">
          Ready to Transform Your Development Business?
        </h2>
        <p class="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
          Join Thailand's leading developers who are achieving faster sales, higher profits, and happier buyers with our integrated platform
        </p>
        
        <div class="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <button class="bg-brand-turqoise-light text-brand-navy px-8 py-4 rounded-xl font-semibold hover:bg-teal-300 transition-all duration-300 text-lg shadow-lg hover:shadow-xl">
            Start Your Project
          </button>
          <button class="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-brand-navy transition-all duration-300 text-lg">
            Schedule Demo
          </button>
        </div>

        <!-- Contact Info -->
        <div class="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div class="text-center">
            <div class="w-16 h-16 bg-brand-turqoise-light rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-brand-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 class="text-lg font-semibold mb-2">Developer Hotline</h3>
            <p class="text-gray-300">+66 2 123 4567</p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 bg-brand-turqoise-light rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-brand-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 class="text-lg font-semibold mb-2">Developer Relations</h3>
            <p class="text-gray-300">developers@thaikeys.co.th</p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 bg-brand-turqoise-light rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-brand-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 class="text-lg font-semibold mb-2">Visit Our Office</h3>
            <p class="text-gray-300">Central World, Bangkok</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Meta tags
useHead({
  title: 'Developers - Thailand\'s Premier Development Platform',
  meta: [
    {
      name: 'description',
      content: 'Launch your development project on Thailand\'s most advanced platform. Pre-launch marketing, agent networks, payment tracking, and buyer management tools for faster sales and higher profits.'
    }
  ]
})

// Import i18n composables properly for Nuxt 4
const { t: $t } = useI18n()
const localePath = useLocalePath()

// Reactive data for any interactive elements (if needed in future)
const selectedPackage = ref('professional')
const showContactForm = ref(false)

// Sample project data for demonstrations
const sampleProjects = ref([
  {
    id: 1,
    name: 'Luxury Residences Sukhumvit',
    type: 'Condominium',
    units: 200,
    sold: 156,
    value: '₿2.1B',
    status: 'pre-launch'
  },
  {
    id: 2,
    name: 'Villa Community Phuket',
    type: 'Villa Development',
    units: 50,
    sold: 38,
    value: '₿850M',
    status: 'construction'
  }
])

// Package selection handler
const selectPackage = (packageName) => {
  selectedPackage.value = packageName
  console.log('Selected package:', packageName)
}

// Contact form handler
const toggleContactForm = () => {
  showContactForm.value = !showContactForm.value
}

// Calculate percentage sold
const calculateSoldPercentage = (sold, total) => {
  return Math.round((sold / total) * 100)
}

// Format currency for display
const formatCurrency = (amount) => {
  return new Intl.NumberFormat('th-TH', {
    style: 'currency',
    currency: 'THB',
    minimumFractionDigits: 0
  }).format(amount)
}

// Sample analytics data
const analyticsData = ref({
  totalProjects: 300,
  averagePreSold: 78,
  averageCompletion: 6,
  profitIncrease: 35,
  satisfaction: 98
})
</script>

<style scoped>
/* Custom animations for developer-specific elements */
@keyframes slideInFromLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInFromRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Project card animations */
.project-card {
  animation: fadeInUp 0.6s ease-out;
}

.project-card:nth-child(2) {
  animation-delay: 0.2s;
}

.project-card:nth-child(3) {
  animation-delay: 0.4s;
}

/* Feature highlight animations */
.feature-highlight {
  transition: all 0.3s ease;
}

.feature-highlight:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

/* Package card special styling */
.package-card {
  transition: all 0.3s ease;
  position: relative;
}

.package-card:hover {
  transform: translateY(-10px);
}

.package-card.featured {
  position: relative;
  z-index: 10;
}

.package-card.featured::before {
  content: '';
  position: absolute;
  inset: -2px;
  background: linear-gradient(45deg, #3B82F6, #8B5CF6, #06B6D4);
  border-radius: 18px;
  z-index: -1;
  opacity: 0.7;
}

/* Progress bar animations */
.progress-bar {
  position: relative;
  overflow: hidden;
}

.progress-bar::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.4),
    transparent
  );
  animation: shimmer 2s infinite;
}

@keyframes shimmer {
  0% {
    left: -100%;
  }
  100% {
    left: 100%;
  }
}

/* Stats counter animation */
.stats-number {
  animation: countUp 2s ease-out;
}

@keyframes countUp {
  from {
    opacity: 0;
    transform: scale(0.5);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* Success story cards */
.success-story {
  position: relative;
  overflow: hidden;
}

.success-story::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #3B82F6, transparent);
  transition: left 0.5s ease;
}

.success-story:hover::before {
  left: 100%;
}

/* Contact section styling */
.contact-info {
  transition: all 0.3s ease;
}

.contact-info:hover {
  transform: translateY(-5px);
}

.contact-info .icon-bg {
  transition: all 0.3s ease;
}

.contact-info:hover .icon-bg {
  background: linear-gradient(135deg, #3B82F6, #8B5CF6);
  transform: rotate(5deg);
}

/* FAQ section animations */
.faq-item {
  transition: all 0.3s ease;
}

.faq-item:hover {
  transform: translateX(10px);
  background: linear-gradient(135deg, #F8FAFC, #F1F5F9);
}

.dark .faq-item:hover {
  background: linear-gradient(135deg, #374151, #4B5563);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .package-card.featured {
    transform: none;
    margin: 0;
  }
  
  .feature-highlight:hover {
    transform: none;
  }
  
  .project-card {
    animation: none;
  }
}

/* Print styles */
@media print {
  .bg-gradient-to-br,
  .bg-gradient-to-r {
    background: #ffffff !important;
  }
  
  .text-white {
    color: #000000 !important;
  }
  
  .shadow-xl,
  .shadow-lg {
    box-shadow: none !important;
  }
}
</style>