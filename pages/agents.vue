<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 font-sans transition-colors duration-300">

    <!-- Hero Section for Agents -->
    <section class="relative pt-16 pb-24 overflow-hidden">
      <!-- Background with overlay -->
      <div class="absolute inset-0 z-0">
        <NuxtImg 
        src="/assets/placeholder/thaikeys-agency-hero.webp"
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
                {{ $t('agents.hero.title_part1') }}
              </span>
              <br>
              <span class="text-white">{{ $t('agents.hero.title_part2') }}</span>
            </h1>
            
            <!-- Subtitle -->
            <p class="text-xl lg:text-2xl text-white/90 mb-12 leading-relaxed max-w-4xl mx-auto">
              {{ $t('agents.hero.subtitle') }}
            </p>

            <!-- CTA Buttons -->
            <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <button class="bg-brand-turqoise-light text-brand-navy px-8 py-4 rounded-xl font-semibold hover:bg-teal-300 transition-all duration-300 text-lg shadow-lg hover:shadow-xl">
                {{ $t('agents.hero.join_now') }}
              </button>
              <button class="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-brand-navy transition-all duration-300 text-lg">
                {{ $t('agents.hero.learn_more') }}
              </button>
            </div>

            <!-- Key Stats -->
            <div class="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div class="text-center">
                <div class="text-4xl lg:text-5xl font-bold text-brand-turqoise-light mb-2">50%</div>
                <div class="text-sm lg:text-base font-medium text-white/80">{{ $t('agents.stats.cheaper') }}</div>
              </div>
              <div class="text-center">
                <div class="text-4xl lg:text-5xl font-bold text-brand-turqoise-light mb-2">2x</div>
                <div class="text-sm lg:text-base font-medium text-white/80">{{ $t('agents.stats.faster') }}</div>
              </div>
              <div class="text-center">
                <div class="text-4xl lg:text-5xl font-bold text-brand-turqoise-light mb-2">100%</div>
                <div class="text-sm lg:text-base font-medium text-white/80">{{ $t('agents.stats.modern') }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Problems with Current Platforms -->
    <section class="py-24 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl lg:text-5xl font-bold text-brand-navy dark:text-white mb-6">
            {{ $t('agents.problems.title') }}
          </h2>
          <p class="text-xl text-brand-navy dark:text-gray-300 max-w-3xl mx-auto">
            {{ $t('agents.problems.subtitle') }}
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Problem 1 -->
          <div class="bg-red-50 dark:bg-red-900/20 p-8 rounded-2xl border border-red-200 dark:border-red-800">
            <div class="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-brand-navy dark:text-white mb-4">{{ $t('agents.problems.expensive.title') }}</h3>
            <p class="text-brand-navy dark:text-gray-300">{{ $t('agents.problems.expensive.description') }}</p>
          </div>

          <!-- Problem 2 -->
          <div class="bg-orange-50 dark:bg-orange-900/20 p-8 rounded-2xl border border-orange-200 dark:border-orange-800">
            <div class="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-brand-navy dark:text-white mb-4">{{ $t('agents.problems.outdated.title') }}</h3>
            <p class="text-brand-navy dark:text-gray-300">{{ $t('agents.problems.outdated.description') }}</p>
          </div>

          <!-- Problem 3 -->
          <div class="bg-yellow-50 dark:bg-yellow-900/20 p-8 rounded-2xl border border-yellow-200 dark:border-yellow-800">
            <div class="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29.82-5.657 2.172" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-brand-navy dark:text-white mb-4">{{ $t('agents.problems.no_support.title') }}</h3>
            <p class="text-brand-navy dark:text-gray-300">{{ $t('agents.problems.no_support.description') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Solution Features -->
    <section class="py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl lg:text-5xl font-bold text-brand-navy dark:text-white mb-6">
            {{ $t('agents.solution.title') }}
          </h2>
          <p class="text-xl text-brand-navy dark:text-gray-300 max-w-3xl mx-auto">
            {{ $t('agents.solution.subtitle') }}
          </p>
        </div>

        <!-- Feature Grid -->
        <div class="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <!-- BTS Integration Feature -->
          <div>
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 bg-brand-turqoise-light rounded-xl flex items-center justify-center mr-4">
                <svg class="w-6 h-6 text-brand-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-brand-navy dark:text-white">{{ $t('agents.features.bts.title') }}</h3>
            </div>
            <p class="text-lg text-brand-navy dark:text-gray-300 mb-6">
              {{ $t('agents.features.bts.description') }}
            </p>
            <ul class="space-y-3">
              <li class="flex items-center text-brand-navy dark:text-gray-300">
                <svg class="w-5 h-5 text-brand-turqoise-light mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                {{ $t('agents.features.bts.benefit1') }}
              </li>
              <li class="flex items-center text-brand-navy dark:text-gray-300">
                <svg class="w-5 h-5 text-brand-turqoise-light mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                {{ $t('agents.features.bts.benefit2') }}
              </li>
              <li class="flex items-center text-brand-navy dark:text-gray-300">
                <svg class="w-5 h-5 text-brand-turqoise-light mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                {{ $t('agents.features.bts.benefit3') }}
              </li>
            </ul>
          </div>
          
          <!-- Feature Visual -->
          <div class="relative">
            <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-100 dark:border-gray-700">
              <div class="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-8 relative h-56">
                <div class="absolute top-4 left-4 bg-brand-turqoise-light text-brand-navy px-3 py-1 rounded-full text-sm font-semibold">
                  Asok BTS
                </div>
                <div class="absolute top-4 right-4 bg-white dark:bg-gray-700 text-brand-navy dark:text-white px-3 py-1 rounded-full text-sm">
                  ฿25,000/month
                </div>
                <div class="absolute bottom-4 left-4 bg-brand-turqoise-light text-brand-navy px-3 py-1 rounded-full text-sm font-semibold">
                  Phrom Phong BTS
                </div>
                <div class="absolute bottom-4 right-4 bg-white dark:bg-gray-700 text-brand-navy dark:text-white px-3 py-1 rounded-full text-sm">
                  ฿32,000/month
                </div>
                
                <!-- Property pins -->
                <div class="absolute top-8 left-8 w-3 h-3 bg-brand-turqoise-light rounded-full border-2 border-white shadow-lg"></div>
                <div class="absolute top-12 right-12 w-3 h-3 bg-brand-turqoise-light rounded-full border-2 border-white shadow-lg"></div>
                <div class="absolute bottom-12 left-12 w-3 h-3 bg-brand-turqoise-light rounded-full border-2 border-white shadow-lg"></div>
                <div class="absolute bottom-16 right-16 w-3 h-3 bg-brand-turqoise-light rounded-full border-2 border-white shadow-lg"></div>
                
                <!-- BTS lines -->
                <div class="absolute top-1/2 left-0 right-0 h-1 bg-green-500/30 transform -translate-y-1/2"></div>
                <div class="absolute top-0 bottom-0 left-1/2 w-1 bg-blue-500/30 transform -translate-x-1/2"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- More Features Grid -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Professional Tools -->
          <div class="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div class="w-16 h-16 bg-brand-turqoise-light rounded-full flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-brand-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-brand-navy dark:text-white mb-4">{{ $t('agents.features.tools.title') }}</h3>
            <p class="text-brand-navy dark:text-gray-300">{{ $t('agents.features.tools.description') }}</p>
          </div>

          <!-- Payment Integration -->
          <div class="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div class="w-16 h-16 bg-brand-turqoise-light rounded-full flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-brand-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-brand-navy dark:text-white mb-4">{{ $t('agents.features.payments.title') }}</h3>
            <p class="text-brand-navy dark:text-gray-300">{{ $t('agents.features.payments.description') }}</p>
          </div>

          <!-- Analytics -->
          <div class="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div class="w-16 h-16 bg-brand-turqoise-light rounded-full flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-brand-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-brand-navy dark:text-white mb-4">{{ $t('agents.features.analytics.title') }}</h3>
            <p class="text-brand-navy dark:text-gray-300">{{ $t('agents.features.analytics.description') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing Comparison -->
    <section class="py-24 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl lg:text-5xl font-bold text-brand-navy dark:text-white mb-6">
            {{ $t('agents.pricing.title') }}
          </h2>
          <p class="text-xl text-brand-navy dark:text-gray-300 max-w-3xl mx-auto">
            {{ $t('agents.pricing.subtitle') }}
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <!-- Competitor Pricing -->
          <div class="bg-gray-100 dark:bg-gray-700 p-8 rounded-2xl border-2 border-gray-200 dark:border-gray-600">
            <div class="text-center mb-6">
              <h3 class="text-2xl font-bold text-gray-600 dark:text-gray-400 mb-2">{{ $t('agents.pricing.competitor.title') }}</h3>
              <div class="text-4xl font-bold text-gray-600 dark:text-gray-400 mb-2">฿25,200</div>
              <div class="text-gray-500 dark:text-gray-400">{{ $t('agents.pricing.competitor.period') }}</div>
            </div>
            <ul class="space-y-3 mb-8">
              <li class="flex items-center text-gray-600 dark:text-gray-400">
                <svg class="w-5 h-5 text-red-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
                {{ $t('agents.pricing.competitor.feature1') }}
              </li>
              <li class="flex items-center text-gray-600 dark:text-gray-400">
                <svg class="w-5 h-5 text-red-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
                {{ $t('agents.pricing.competitor.feature2') }}
              </li>
              <li class="flex items-center text-gray-600 dark:text-gray-400">
                <svg class="w-5 h-5 text-red-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
                {{ $t('agents.pricing.competitor.feature3') }}
              </li>
            </ul>
          </div>

          <!-- Our Pricing -->
          <div class="bg-gradient-to-br from-brand-turqoise-light to-teal-400 p-8 rounded-2xl border-2 border-brand-turqoise-light shadow-xl">
            <div class="text-center mb-6">
              <h3 class="text-2xl font-bold text-brand-navy mb-2">{{ $t('agents.pricing.our.title') }}</h3>
              <div class="text-4xl font-bold text-brand-navy mb-2">฿12,500</div>
              <div class="text-brand-navy/80">{{ $t('agents.pricing.our.period') }}</div>
              <div class="inline-block bg-brand-navy text-white px-3 py-1 rounded-full text-sm font-semibold mt-2">
                {{ $t('agents.pricing.our.savings') }}
              </div>
            </div>
            <ul class="space-y-3 mb-8">
              <li class="flex items-center text-brand-navy">
                <svg class="w-5 h-5 text-brand-navy mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                {{ $t('agents.pricing.our.feature1') }}
              </li>
              <li class="flex items-center text-brand-navy">
                <svg class="w-5 h-5 text-brand-navy mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                {{ $t('agents.pricing.our.feature2') }}
              </li>
              <li class="flex items-center text-brand-navy">
                <svg class="w-5 h-5 text-brand-navy mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                {{ $t('agents.pricing.our.feature3') }}
              </li>
              <li class="flex items-center text-brand-navy">
                <svg class="w-5 h-5 text-brand-navy mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                {{ $t('agents.pricing.our.feature4') }}
              </li>
            </ul>
            <button class="w-full bg-brand-navy text-white py-4 px-6 rounded-xl font-semibold hover:bg-brand-navy/90 transition-all duration-300 text-lg">
              {{ $t('agents.pricing.our.cta') }}
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Join Our Network CTA -->
    <section class="py-24 bg-brand-navy dark:bg-gray-800 text-white transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 class="text-4xl lg:text-5xl font-bold mb-6">
          {{ $t('agents.cta.title') }}
        </h2>
        <p class="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
          {{ $t('agents.cta.subtitle') }}
        </p>
        
        <div class="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <button class="bg-brand-turqoise-light text-brand-navy px-8 py-4 rounded-xl font-semibold hover:bg-teal-300 transition-all duration-300 text-lg shadow-lg hover:shadow-xl">
            {{ $t('agents.cta.primary') }}
          </button>
          <button class="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-brand-navy transition-all duration-300 text-lg">
            {{ $t('agents.cta.secondary') }}
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
            <h3 class="text-lg font-semibold mb-2">{{ $t('agents.contact.phone.title') }}</h3>
            <p class="text-gray-300">{{ $t('agents.contact.phone.number') }}</p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 bg-brand-turqoise-light rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-brand-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 class="text-lg font-semibold mb-2">{{ $t('agents.contact.email.title') }}</h3>
            <p class="text-gray-300">{{ $t('agents.contact.email.address') }}</p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 bg-brand-turqoise-light rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-brand-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h3 class="text-lg font-semibold mb-2">{{ $t('agents.contact.line.title') }}</h3>
            <p class="text-gray-300">{{ $t('agents.contact.line.id') }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Meta tags
useHead({
  title: 'Agents - Join Thailand\'s Most Advanced Property Platform',
  meta: [
    {
      name: 'description',
      content: 'Join Thailand\'s most advanced property platform. 50% cheaper than competitors with unlimited listings, BTS integration, and modern tools that actually work.'
    }
  ]
})
</script>