<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 font-sans transition-colors duration-300">

<!-- Hero Section -->
    <section class="relative py-10 lg:py-20 overflow-hidden">
      <!-- Image Background -->
      <div class="absolute inset-0 z-0">
        <NuxtImg 
          src="/assets/placeholder/thaikeys-hero-bg-5.webp"
          alt="Thailand property background"
          class="w-full h-full object-cover object-bottom"
          fetchpriority="high"
          preload
        />
        <div class="absolute inset-0 bg-black/50"></div>
      </div>
      <!-- Hero Content -->
      <div class="relative z-10 max-w-7xl mx-auto px-3 lg:px-4">
        <div class="flex items-center justify-center min-h-[85vh]">
          <div class="text-center max-w-7xl w-full">
            <!-- Main Headline -->
            <h1 class="text-4xl lg:text-6xl font-black text-white mb-6 leading-tight tracking-tight">
              <span class="bg-gradient-to-r from-brand-turqoise-light to-brand-turqoise-dark bg-clip-text text-transparent">
                Unlocking
              </span>
              <span class="text-white font-extrabold"> Thailand's</span>
              <br>
              <span class="text-white font-extrabold">Property Market</span>
            </h1>

            <!-- Subtitle -->
            <h2 class="text-base lg:text-2xl font-normal text-white/90 mb-10 leading-relaxed max-w-4xl mx-auto">
              {{ $t('hero.subtitle') }}
            </h2>

            <!-- Compact Two-Row Search Layout with Dark Mode -->
            <div class="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-xl shadow-xl p-4 lg:p-6 max-w-7xl mx-auto mb-10 border border-gray-200/50 dark:border-gray-700/50 transition-colors duration-300">
              <!-- Search Type Toggle -->
              <div class="flex justify-center mb-4">
                <div class="bg-gray-100 dark:bg-gray-700 p-1 rounded-lg flex transition-colors duration-300">
                  <button 
                    @click="activeSearchTab = 'simple'"
                    :class="[
                      'px-3 lg:px-4 py-2 text-base font-semibold rounded-md transition-all duration-200',
                      activeSearchTab === 'simple' 
                        ? 'bg-white dark:bg-gray-800 text-brand-navy dark:text-white shadow-sm' 
                        : 'text-brand-navy dark:text-gray-300 hover:text-brand-navy dark:hover:text-white'
                    ]"
                  >
                    Search Properties
                  </button>
                  <button 
                    @click="activeSearchTab = 'smart'"
                    :class="[
                      'px-3 lg:px-4 py-2 text-base font-semibold rounded-md transition-all duration-200',
                      activeSearchTab === 'smart' 
                        ? 'bg-white dark:bg-gray-800 text-brand-navy dark:text-white shadow-sm' 
                        : 'text-brand-navy dark:text-gray-300 hover:text-brand-navy dark:hover:text-white'
                    ]"
                  >
                    Smart AI Search
                  </button>
                </div>
              </div>

              <!-- Basic Search Tab -->
              <div v-if="activeSearchTab === 'simple'">
                <!-- Property Type Tabs with Animated Underlines -->
                <div class="flex justify-center gap-1 mb-6">
                  <button 
                    v-for="tab in searchTabs" 
                    :key="tab.id"
                    @click="activeTab = tab.id"
                    :class="[
                      'relative px-1.5 lg:px-4 py-2 text-base font-semibold transition-all duration-300 property-tab',
                      activeTab === tab.id 
                        ? 'text-brand-turqoise-light dark:text-brand-turqoise-light' 
                        : 'text-gray-600 dark:text-gray-300 hover:text-brand-navy dark:hover:text-white'
                    ]"
                  >
                    {{ $t(`tabs.${tab.id}`) }}
                  </button>
                </div>

                <!-- DESKTOP LAYOUT (Original) -->
                <div class="hidden lg:block">
                  <!-- ROW 1: Search Input + Map/Search Buttons -->
                  <div class="flex gap-2 items-center mb-3">
                    <!-- Search Input -->
                    <div class="flex-1 relative">
                      <svg class="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                      <input 
                        v-model="searchQuery"
                        type="text" 
                        placeholder="Search by location, landmark, or transit station..."
                        class="w-full pl-10 pr-4 py-2.5 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-brand-navy dark:text-white placeholder-gray-400 dark:placeholder-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-brand-turqoise-light focus:border-brand-turqoise-light text-base transition-colors duration-300"
                      >
                    </div>

                    <!-- Map Button -->
                    <button class="flex items-center gap-2 px-4 py-2.5 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg text-base font-medium transition-colors duration-300">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      </svg>
                      Map
                    </button>

                    <!-- Search Button -->
                    <button class="bg-brand-turqoise-light text-brand-navy px-6 py-2.5 rounded-lg font-semibold hover:bg-teal-300 transition-colors text-base">
                      Search
                    </button>
                  </div>

                  <!-- ROW 2: Filter Dropdowns -->
                  <div class="flex gap-2 items-center pb-2">
                    <div class="flex-1 relative">
                      <select aria-label="Property Type" class="w-full pl-3 pr-8 py-2.5 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-brand-navy dark:text-white rounded-lg focus:outline-none focus:ring-1 focus:ring-brand-turqoise-light text-base transition-colors duration-300 appearance-none">
                        <option>Property Type</option>
                        <option>Condo</option>
                        <option>House</option>
                        <option>Villa</option>
                      </select>
                      <svg class="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-gray-500 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                      </svg>
                    </div>

                    <div class="flex-1 relative">
                      <select aria-label="Minimum Price" class="w-full pl-3 pr-8 py-2.5 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-brand-navy dark:text-white rounded-lg focus:outline-none focus:ring-1 focus:ring-brand-turqoise-light text-base transition-colors duration-300 appearance-none">
                        <option>Min Price</option>
                        <option>฿10,000</option>
                        <option>฿20,000</option>
                        <option>฿50,000+</option>
                      </select>
                      <svg class="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-gray-500 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                      </svg>
                    </div>

                    <div class="flex-1 relative">
                      <select aria-label="Maximum Price" class="w-full pl-3 pr-8 py-2.5 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-brand-navy dark:text-white rounded-lg focus:outline-none focus:ring-1 focus:ring-brand-turqoise-light text-base transition-colors duration-300 appearance-none">
                        <option>Max Price</option>
                        <option>฿50,000</option>
                        <option>฿100,000</option>
                        <option>No Max</option>
                      </select>
                      <svg class="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-gray-500 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                      </svg>
                    </div>

                    <div class="flex-1 relative">
                      <select aria-label="Bedrooms" class="w-full pl-3 pr-8 py-2.5 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-brand-navy dark:text-white rounded-lg focus:outline-none focus:ring-1 focus:ring-brand-turqoise-light text-base transition-colors duration-300 appearance-none">
                        <option>Bedrooms</option>
                        <option>Studio</option>
                        <option>1+</option>
                        <option>2+</option>
                        <option>3+</option>
                      </select>
                      <svg class="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-gray-500 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                      </svg>
                    </div>

                    <!-- More Filters Button -->
                    <button class="px-4 py-2.5 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg text-base font-medium transition-colors duration-300 whitespace-nowrap">
                      More Filters +
                    </button>
                  </div>
                </div>

                <!-- MOBILE LAYOUT (Stacked like blue example) -->
                <div class="lg:hidden">
                  <!-- Search Input -->
                  <div class="mb-3">
                    <div class="relative">
                      <svg class="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                      <input 
                        v-model="searchQuery"
                        type="text" 
                        placeholder="Search City, Suburb or Web Ref..."
                        class="w-full pl-10 pr-4 py-2.5 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-brand-navy dark:text-white placeholder-gray-400 dark:placeholder-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-brand-turqoise-light focus:border-brand-turqoise-light text-base transition-colors duration-300"
                      >
                    </div>
                  </div>

                  <!-- Property Type -->
                  <div class="mb-3">
                    <div class="relative">
                      <select aria-label="Property Type" class="w-full pl-3 pr-8 py-2.5 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-brand-navy dark:text-white rounded-lg focus:outline-none focus:ring-1 focus:ring-brand-turqoise-light text-base transition-colors duration-300 appearance-none">
                        <option>Property Type</option>
                        <option>Condo</option>
                        <option>House</option>
                        <option>Villa</option>
                      </select>
                      <svg class="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-gray-500 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                      </svg>
                    </div>
                  </div>

                  <!-- Min Price & Max Price (2 columns) -->
                  <div class="grid grid-cols-2 gap-2 mb-3">
                    <div class="relative">
                      <select aria-label="Minimum Price" class="w-full pl-3 pr-8 py-2.5 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-brand-navy dark:text-white rounded-lg focus:outline-none focus:ring-1 focus:ring-brand-turqoise-light text-base transition-colors duration-300 appearance-none">
                        <option>Min Price</option>
                        <option>฿10,000</option>
                        <option>฿20,000</option>
                        <option>฿50,000+</option>
                      </select>
                      <svg class="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-gray-500 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                      </svg>
                    </div>

                    <div class="relative">
                      <select aria-label="Maximum Price" class="w-full pl-3 pr-8 py-2.5 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-brand-navy dark:text-white rounded-lg focus:outline-none focus:ring-1 focus:ring-brand-turqoise-light text-base transition-colors duration-300 appearance-none">
                        <option>Max Price</option>
                        <option>฿50,000</option>
                        <option>฿100,000</option>
                        <option>No Max</option>
                      </select>
                      <svg class="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-gray-500 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                      </svg>
                    </div>
                  </div>

                  <!-- Bedrooms & Bathrooms (2 columns) -->
                  <div class="grid grid-cols-2 gap-2 mb-3">
                    <div class="relative">
                      <select aria-label="Bedrooms" class="w-full pl-3 pr-8 py-2.5 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-brand-navy dark:text-white rounded-lg focus:outline-none focus:ring-1 focus:ring-brand-turqoise-light text-base transition-colors duration-300 appearance-none">
                        <option>Bedrooms</option>
                        <option>Studio</option>
                        <option>1+</option>
                        <option>2+</option>
                        <option>3+</option>
                      </select>
                      <svg class="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-gray-500 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                      </svg>
                    </div>

                    <div class="relative">
                      <select aria-label="Bathrooms" class="w-full pl-3 pr-8 py-2.5 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-brand-navy dark:text-white rounded-lg focus:outline-none focus:ring-1 focus:ring-brand-turqoise-light text-base transition-colors duration-300 appearance-none">
                        <option>Bathrooms</option>
                        <option>1+</option>
                        <option>2+</option>
                        <option>3+</option>
                      </select>
                      <svg class="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-gray-500 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                      </svg>
                    </div>
                  </div>

                  <!-- More Filters Button -->
                  <div class="mb-3">
                    <button class="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg text-base font-medium transition-colors duration-300">
                      More Filters +
                    </button>
                  </div>

                  <!-- Search Button -->
                  <div>
                    <button class="w-full bg-brand-turqoise-light text-brand-navy px-6 py-2.5 rounded-lg font-semibold hover:bg-teal-300 transition-colors text-base">
                      Search
                    </button>
                  </div>
                </div>
              </div>

              <!-- Smart AI Search Tab -->
              <div v-else-if="activeSearchTab === 'smart'">
                <div class="text-center mb-4">
                  <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-1">AI-Powered Smart Search</h3>
                </div>

                <!-- Smart Search Form -->
                <div class="flex flex-col gap-2 items-start">
                  <div class="w-full mb-[3px]">
                  <textarea
                    v-model="smartSearchQuery"
                    placeholder="Describe what you're looking for and let AI find your perfect property - e.g., Looking for a 1-bedroom near Silom, good for digital nomads, with WiFi and coworking spaces nearby..."
                    class="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-brand-navy dark:text-white placeholder-gray-400 dark:placeholder-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-brand-turqoise-light focus:border-brand-turqoise-light text-base resize-none transition-colors duration-300
                          h-[142px] lg:h-[70px]"
                  ></textarea>
                  </div>
                  
                  <!-- Smart Search Button -->
                  <button 
                    @click="handleSmartSearch"
                    class="w-full bg-brand-turqoise-light text-brand-navy px-6 py-2.5 rounded-lg font-semibold hover:bg-teal-300 transition-colors text-base flex items-center justify-center gap-2 whitespace-nowrap"
                  >
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7"/>
                    </svg>
                    AI Search
                  </button>
                </div>
              </div>
            </div>
            
            <!-- Social Proof Stats -->
            <div class="grid grid-cols-3 gap-1 lg:gap-8 max-w-2xl mx-auto">
              <div class="text-center">
                <div class="text-4xl lg:text-5xl font-bold text-white mb-2">500K+</div>
                <div class="text-base lg:text-base font-medium text-white/80">{{ $t('stats.properties') }}</div>
              </div>
              <div class="text-center">
                <div class="text-4xl lg:text-5xl font-bold text-white mb-2">50%</div>
                <div class="text-base lg:text-base font-medium text-white/80">Lower Fees</div>
              </div>
              <div class="text-center">
                <div class="text-4xl lg:text-5xl font-bold text-white mb-2">300+</div>
                <div class="text-base lg:text-base font-medium text-white/80">{{ $t('stats.bts_stations') }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Properties -->
    <section class="py-14 md:py-24 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-3 lg:px-4">
        <div class="flex flex-col lg:flex-row justify-between items-center mb-12 text-center lg:text-left">
          <div>
            <h2 class="text-3xl lg:text-4xl font-bold text-brand-navy dark:text-white mb-4">
              {{ $t('sections.featured_properties') }}
            </h2>
            <p class="text-base lg:text-lg text-brand-navy dark:text-gray-300">
              {{ $t('sections.featured_properties_subtitle') }}
            </p>
          </div>
          <button
            class="mt-4 lg:mt-0 text-brand-navy dark:text-brand-turqoise-light hover:text-brand-navy dark:hover:text-white font-medium transition-colors duration-300"
          >
            {{ $t('buttons.view_all') }} →
          </button>
        </div>
            <FeaturedPropertiesCarousel />
      </div>
    </section>

    <!-- Interactive BTS Feature Section -->
    <section class="py-14 md:py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-3 lg:px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl lg:text-5xl font-bold text-brand-navy dark:text-white mb-6">
            {{ $t('sections.bts_search_title_1') }}
            <span class="bg-gradient-to-r from-brand-turqoise-light to-brand-turqoise-dark bg-clip-text text-transparent">
                {{ $t('sections.bts_search_title_2') }}
            </span>
          </h2>
          <p class="text-base lg:text-xl text-brand-navy dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            {{ $t('sections.bts_search_subtitle') }}
          </p>
        </div>
          <BTSinteractiveSlider />
      </div>
    </section>



    <!-- Persona-Based Property Collections -->
    <section class="py-14 md:py-24 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-3 lg:px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl lg:text-4xl font-bold text-brand-navy dark:text-white mb-4">
            Popular Property Collections
          </h2>
          <p class="text-lg text-brand-navy dark:text-gray-300">
            Curated selections based on lifestyle and needs
          </p>
        </div>
            <CuratedCarousel />
      </div>
    </section>



    <!-- News & Insights Section -->
    <section class="py-14 md:py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-3 lg:px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-5xl font-bold text-brand-navy dark:text-white mb-6">
            {{ $t('sections.insights_title_1') }}
            <span class="bg-gradient-to-r from-brand-turqoise-light to-brand-turqoise-dark bg-clip-text text-transparent">
                {{ $t('sections.insights_title_2') }}
            </span>
          </h2>
          <p class="text-base lg:text-xl text-brand-navy dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {{ $t('sections.insights_subtitle') }}
          </p>
        </div>

        <div class="grid lg:grid-cols-12 gap-6">
          <!-- Featured Article -->
          <div class="lg:col-span-8">
            <article
              class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300 h-full flex flex-col"
            >
              <div class="relative h-[20rem] lg:h-[25rem] overflow-hidden">
                <NuxtImg
                  src="/assets/placeholder/sample_8.webp"
                  alt="Featured article"
                  class="w-full h-full object-cover object-bottom transform group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  sizes="sm:100vw lg:66vw"
                />
                <div class="absolute inset-0 bg-black/10"></div>
                <div class="absolute top-6 left-6">
                  <span
                    class="bg-brand-turqoise-light text-brand-navy px-3 py-1 rounded-full text-base font-bold"
                    >{{ $t('common.featured') }}</span
                  >
                </div>
              </div>
              <div class="p-6 flex flex-col flex-1">
                <!-- Meta Info - Date and Category Only -->
                <div
                  class="flex items-center space-x-3 text-brand-navy dark:text-gray-300 text-base mb-4"
                >
                  <span class="flex items-center space-x-1">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <span>{{ $t('article.date') }}</span>
                  </span>
                  <span>•</span>
                  <span class="flex items-center space-x-1">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                    <span>{{ $t('article.category') }}</span>
                  </span>
                </div>

                <h3
                  class="text-3xl lg:text-4xl font-bold text-brand-navy dark:text-white mb-6 transition-colors duration-300"
                >
                  {{ $t('article.title') }}
                </h3>
                <p
                  class="text-brand-navy dark:text-gray-300 text-lg leading-relaxed flex-1"
                >
                  {{ $t('article.excerpt') }}
                </p>

                <!-- Featured Article - Author and Button Section -->
                <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-auto pt-6">
                  <div class="flex items-center space-x-3">
                    <div
                      class="w-10 h-10 bg-brand-turqoise-light rounded-full flex items-center justify-center flex-shrink-0"
                    >
                      <span class="text-brand-navy font-bold text-base">SC</span>
                    </div>
                    <div>
                      <p class="font-semibold text-brand-navy dark:text-white leading-tight">
                        {{ $t('article.author') }}
                      </p>
                      <p class="text-base text-brand-navy dark:text-gray-300 leading-tight">
                        {{ $t('article.author_title') }}
                      </p>
                    </div>
                  </div>
                  <button
                    class="w-full sm:w-auto bg-brand-turqoise-light text-brand-navy px-6 py-2 rounded-lg font-semibold hover:bg-teal-300 transition-colors duration-300 h-10"
                  >
                    {{ $t('buttons.read_more') }}
                  </button>
                </div>
              </div>
            </article>
          </div>

          <!-- Side Articles -->
          <div class="lg:col-span-4 flex flex-col gap-6">
            <article
              class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 flex flex-col flex-1"
            >
              <div class="relative h-[11.5rem] overflow-hidden flex-shrink-0">
                <NuxtImg
                  src="/assets/placeholder/sample_9.webp"
                  alt="Tips article"
                  class="w-full h-full object-cover object-bottom transform group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  sizes="sm:100vw lg:33vw"
                />
                <div class="absolute inset-0 bg-black/10"></div>
                <div class="absolute top-4 left-4">
                  <span
                    class="bg-white text-brand-navy px-2 py-1 rounded text-xs font-medium"
                    >💡 {{ $t('article.tips') }}</span
                  >
                </div>
              </div>
              <div class="p-6 flex flex-col flex-1">
                <div
                  class="flex items-center space-x-2 text-brand-navy dark:text-gray-300 text-base mb-3"
                >
                  <span>{{ $t('article.date_2') }}</span>
                  <span>•</span>
                  <span>{{ $t('article.tips') }}</span>
                </div>
                <h3
                  class="text-xl font-semibold text-brand-navy dark:text-white mb-4 transition-colors duration-300 flex-1"
                >
                  {{ $t('article.tips_title') }}
                </h3>
                <!-- Side Article Button -->
                <button
                  class="w-full sm:w-auto bg-brand-turqoise-light text-brand-navy px-6 py-2 rounded-lg font-semibold hover:bg-teal-300 transition-colors duration-300 mt-auto h-10"
                >
                  {{ $t('buttons.read_more') }}
                </button>
              </div>
            </article>

            <article
              class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 flex flex-col flex-1"
            >
              <div class="relative h-[11.5rem] overflow-hidden flex-shrink-0">
                <NuxtImg
                  src="/assets/placeholder/sample_10.webp"
                  alt="Investment article"
                  class="w-full h-full object-cover object-bottom transform group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  sizes="sm:100vw lg:33vw"
                />
                <div class="absolute inset-0 bg-black/10"></div>
                <div class="absolute top-4 left-4">
                  <span
                    class="bg-white text-brand-navy px-2 py-1 rounded text-xs font-medium"
                    >💰 {{ $t('article.investment') }}</span
                  >
                </div>
              </div>
              <div class="p-6 flex flex-col flex-1">
                <div
                  class="flex items-center space-x-2 text-brand-navy dark:text-gray-300 text-base mb-3"
                >
                  <span>{{ $t('article.date_3') }}</span>
                  <span>•</span>
                  <span>{{ $t('article.investment') }}</span>
                </div>
                <h3
                  class="text-xl font-semibold text-brand-navy dark:text-white mb-4 transition-colors duration-300 flex-1"
                >
                  {{ $t('article.investment_title') }}
                </h3>
                <!-- Side Article Button -->
                <button
                  class="w-full sm:w-auto bg-brand-turqoise-light text-brand-navy px-6 py-2 rounded-lg font-semibold hover:bg-teal-300 transition-colors duration-300 mt-auto h-10"
                >
                  {{ $t('buttons.read_more') }}
                </button>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>

    <section class="py-14 md:py-24 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div class="max-w-xs lg:max-w-7xl mx-auto px-3 lg:px-4">
        <!-- Stats Header -->
        <div class="text-center mb-10">
          <h2 class="text-3xl lg:text-5xl font-bold text-brand-navy dark:text-white mb-8">
            Join Thailand's <span class="bg-gradient-to-r from-brand-turqoise-light to-brand-turqoise-dark bg-clip-text text-transparent">Fastest Growing</span><br/>
            Property Platform
          </h2>
        </div>

        <!-- Animated Stats -->
         <AnimatedStats />

        <!-- User Type Cards -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 justify-items-center lg:justify-items-stretch">
          <!-- Agents & Agencies -->
          <div class="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 w-full max-w-sm lg:max-w-none text-center">
            <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg mx-auto">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-brand-navy dark:text-white mb-4">Agents & Agencies</h3>
            <div class="space-y-3 mb-6">
              <div class="flex items-center justify-center gap-2 text-base">
                <div class="w-2 h-2 bg-brand-green-light rounded-full"></div>
                <span class="text-gray-700 dark:text-gray-300">Modern CRM Dashboard</span>
              </div>
              <div class="flex items-center justify-center gap-2 text-base">
                <div class="w-2 h-2 bg-brand-green-light rounded-full"></div>
                <span class="text-gray-700 dark:text-gray-300">Unlimited Listings</span>
              </div>
              <div class="flex items-center justify-center gap-2 text-base">
                <div class="w-2 h-2 bg-brand-green-light rounded-full"></div>
                <span class="text-gray-700 dark:text-gray-300">50% Lower Fees</span>
              </div>
            </div>
            <button class="w-full bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-300">
              View Agent Plans
            </button>
          </div>

          <!-- Developers -->
          <div class="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-600 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 w-full max-w-sm lg:max-w-none text-center">
            <div class="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg mx-auto">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-brand-navy dark:text-white mb-4">Developers</h3>
            <div class="space-y-3 mb-6">
              <div class="flex items-center justify-center gap-2 text-base">
                <div class="w-2 h-2 bg-brand-green-light rounded-full"></div>
                <span class="text-gray-700 dark:text-gray-300">Project Showcases</span>
              </div>
              <div class="flex items-center justify-center gap-2 text-base">
                <div class="w-2 h-2 bg-brand-green-light rounded-full"></div>
                <span class="text-gray-700 dark:text-gray-300">Pre-sales Management</span>
              </div>
              <div class="flex items-center justify-center gap-2 text-base">
                <div class="w-2 h-2 bg-brand-green-light rounded-full"></div>
                <span class="text-gray-700 dark:text-gray-300">Featured Agents</span>
              </div>
            </div>
            <button class="w-full bg-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-purple-700 transition-colors duration-300">
              Developer Solutions
            </button>
          </div>

          <!-- Private Rentals -->
          <div class="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 hover:border-brand-green-light dark:hover:border-brand-green-dark transition-all duration-300 hover:shadow-xl hover:-translate-y-1 w-full max-w-sm lg:max-w-none text-center">
            <div class="w-16 h-16 bg-gradient-to-br from-brand-green-light to-brand-green-dark rounded-2xl flex items-center justify-center mb-6 shadow-lg mx-auto">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-brand-navy dark:text-white mb-4">Private Rentals</h3>
            <div class="space-y-3 mb-6">
              <div class="flex items-center justify-center gap-2 text-base">
                <div class="w-2 h-2 bg-brand-green-light rounded-full"></div>
                <span class="text-gray-700 dark:text-gray-300">Skip Agent Fees</span>
              </div>
              <div class="flex items-center justify-center gap-2 text-base">
                <div class="w-2 h-2 bg-brand-green-light rounded-full"></div>
                <span class="text-gray-700 dark:text-gray-300">Professional Tools</span>
              </div>
              <div class="flex items-center justify-center gap-2 text-base">
                <div class="w-2 h-2 bg-brand-green-light rounded-full"></div>
                <span class="text-gray-700 dark:text-gray-300">Digital Contracts</span>
              </div>
            </div>
            <button class="w-full bg-brand-green-light text-white px-6 py-3 rounded-xl font-semibold hover:bg-brand-green-dark transition-colors duration-300">
              List Property
            </button>
          </div>

          <!-- Private Sellers -->
          <div class="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 hover:border-brand-red-light dark:hover:border-brand-red-dark transition-all duration-300 hover:shadow-xl hover:-translate-y-1 w-full max-w-sm lg:max-w-none text-center">
            <div class="w-16 h-16 bg-gradient-to-br from-brand-red-light to-brand-red-dark rounded-2xl flex items-center justify-center mb-6 shadow-lg mx-auto">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-brand-navy dark:text-white mb-4">Private Sellers</h3>
            <div class="space-y-3 mb-6">
              <div class="flex items-center justify-center gap-2 text-base">
                <div class="w-2 h-2 bg-brand-green-light rounded-full"></div>
                <span class="text-gray-700 dark:text-gray-300">Direct to Buyers</span>
              </div>
              <div class="flex items-center justify-center gap-2 text-base">
                <div class="w-2 h-2 bg-brand-green-light rounded-full"></div>
                <span class="text-gray-700 dark:text-gray-300">Marketing Tools</span>
              </div>
              <div class="flex items-center justify-center gap-2 text-base">
                <div class="w-2 h-2 bg-brand-green-light rounded-full"></div>
                <span class="text-gray-700 dark:text-gray-300">Legal Support</span>
              </div>
            </div>
            <button class="w-full bg-brand-red-light text-white px-6 py-3 rounded-xl font-semibold hover:bg-brand-red-dark transition-colors duration-300">
              Sell Property
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Newsletter Signup Section -->
    <section class="py-14 md:py-24 bg-gray-900 text-white relative overflow-hidden">
      <!-- Background Image -->
      <div class="absolute inset-0">
        <NuxtImg 
          src="/assets/placeholder/thaikeys-home-cta.webp" 
          alt="" 
          class="w-full h-full object-cover"
          loading="lazy"
        />
        <!-- Dark radial overlay, bigger center -->
        <div class="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_farthest-corner,_rgba(0,0,0,0.6)_75%,_rgba(0,0,0,0)_100%)]"></div>
      </div>

      <!-- Optional: Keep some decorative elements -->
      <div class="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl transform translate-x-32 -translate-y-32"></div>
      <div class="absolute bottom-0 left-0 w-80 h-80 bg-brand-turqoise-light/10 rounded-full blur-3xl transform -translate-x-24 translate-y-24"></div>
      
      <div class="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <h2 class="text-4xl lg:text-6xl font-bold leading-tight">
          Stay Ahead of the
        </h2>
        <h2 class="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
        <span class="bg-gradient-to-r from-brand-turqoise-light to-brand-turqoise-dark bg-clip-text text-transparent">
          Property Market
        </span>
        </h2>
        <p class="text-base lg:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
          Get exclusive market insights, industry trends, and expert tips delivered straight to your inbox every week.
        </p>
        
        <!-- Newsletter Form -->
        <form class="max-w-2xl mx-auto mb-10">
          <div class="flex flex-col sm:flex-row gap-4 mb-4">
            <!-- Name Input -->
            <div class="flex-1">
              <input 
                type="text" 
                placeholder="Enter your name"
                class="w-full px-6 py-4 rounded-xl bg-white/15 backdrop-blur-sm border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-brand-turqoise-light focus:border-transparent transition-all duration-300"
                required
              >
            </div>
            
            <!-- Email Input -->
            <div class="flex-1">
              <input 
                type="email" 
                placeholder="Enter your email address"
                class="w-full px-6 py-4 rounded-xl bg-white/15 backdrop-blur-sm border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-brand-turqoise-light focus:border-transparent transition-all duration-300"
                required
              >
            </div>
            
            <!-- Subscribe Button -->
            <button 
              type="submit"
              class="bg-brand-turqoise-light text-brand-navy px-8 py-4 rounded-xl font-bold hover:bg-teal-300 transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap"
            >
              Subscribe
            </button>
          </div>
        </form>

        <!-- Newsletter Benefits -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div class="text-center group">
            <div class="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-2 transition-all duration-300">
              <svg class="w-8 h-8 text-brand-turqoise-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
              </svg>
            </div>
            <h3 class="text-lg font-bold text-brand-turqoise-ligh mb-1">Market Data</h3>
            <p class="text-base text-white/80">Latest trends and analytics</p>
          </div>
          
          <div class="text-center group">
            <div class="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-2 transition-all duration-300">
              <svg class="w-8 h-8 text-brand-turqoise-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
              </svg>
            </div>
            <h3 class="text-lg font-bold text-brand-turqoise-light mb-1">Expert Tips</h3>
            <p class="text-base text-white/80">Professional insights weekly</p>
          </div>
          
          <div class="text-center group">
            <div class="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-2 transition-all duration-300">
              <svg class="w-8 h-8 text-brand-turqoise-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h3 class="text-lg font-bold text-brand-turqoise-light mb-1">First Access</h3>
            <p class="text-base text-white/80">Exclusive opportunities</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Meta tags
useHead({
  title: 'thaikeys.co.th - Unlocking Thailand\'s Property Market',
  meta: [
    {
      name: 'description',
      content: 'thaikeys.co.th: Thailand\'s most advanced property platform with integrated transport mapping, professional agents, and modern payment solutions.'
    }
  ]
})

// Reactive data
const searchQuery = ref('')
const smartSearchQuery = ref('')
const activeTab = ref('rent')
const activeSearchTab = ref('simple')

const searchTabs = [
  { id: 'rent', label: 'Rent' },
  { id: 'buy', label: 'Buy' },
  { id: 'developments', label: 'Developments' },
  { id: 'commercial', label: 'Commercial' }
]

// Methods
const handleSearch = () => {
  if (searchQuery.value.trim()) {
    console.log('Searching for:', searchQuery.value, 'Type:', activeTab.value)
    // TODO: Navigate to search results
  }
}

const handleSmartSearch = () => {
  if (smartSearchQuery.value.trim()) {
    console.log('Smart AI search for:', smartSearchQuery.value)
    // TODO: Connect to AI search API and navigate to results
  }
}
</script>

<style scoped>
.property-tab {
  position: relative;
}

.property-tab::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  @apply bg-brand-turqoise-light;
  transition: all 0.3s ease;
  transform: translateX(-50%);
}

.property-tab:hover::after {
  width: 100%;
}

/* Active state - shows underline */
.property-tab.text-brand-turqoise-light::after {
  width: 100%;
}

/* Transition animations */
.fade-enter-active, .fade-leave-active {
  transition: all 0.5s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

.slide-up-enter-active, .slide-up-leave-active {
  transition: all 0.3s ease;
}
.slide-up-enter-from, .slide-up-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

/* Custom animations */
@keyframes fadeIn {
  from { opacity: 0; transform: scale(0.9); }
  to { opacity: 1; transform: scale(1); }
}

.animate-fadeIn {
  animation: fadeIn 0.5s ease-out;
}
</style>