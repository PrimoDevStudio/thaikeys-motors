<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 font-sans transition-colors duration-300">

<!-- Hero Section -->
    <section class="relative py-10 lg:py-15 overflow-hidden">
      <!-- Image Background -->
      <div class="absolute inset-0 z-0">
        <NuxtImg 
          src="/assets/placeholder/thaikeys-motor-hero-2.webp"
          alt="Thailand property background"
          class="w-full h-full object-cover object-bottom"
          fetchpriority="high"
          preload
        />
        <div class="absolute inset-0 bg-black/80"></div>
      </div>
      <!-- Hero Content -->
      <div class="relative z-10 max-w-7xl mx-auto px-3 lg:px-4">
        <div class="flex items-center justify-center min-h-[85vh]">
          <div class="text-center max-w-7xl w-full">
            <!-- Main Headline -->
            <h1 class="text-4xl lg:text-6xl font-black text-white mb-6 leading-tight tracking-tight">
              <span class="bg-gradient-to-r from-brand-red-light to-brand-red-dark bg-clip-text text-transparent">
                Unlocking
              </span>
              <span class="text-white font-extrabold"> Thailand's</span>
              <br>
              <span class="text-white font-extrabold">Vehicle Market</span>
            </h1>

            <!-- Subtitle -->
            <h2 class="text-base lg:text-2xl font-normal text-white/90 mb-10 leading-relaxed max-w-4xl mx-auto">
              {{ $t('hero.subtitle') }}
            </h2>

            <!-- Simplified Search Layout -->
            <div class="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-xl shadow-xl p-4 lg:p-6 max-w-7xl mx-auto mb-10 border border-gray-200/50 dark:border-gray-700/50 transition-colors duration-300">
              <!-- Vehicle Type Tabs - Dropdown on Mobile, Tabs on Desktop -->
              <div class="mb-6">
                <!-- Mobile Dropdown -->
                <div class="lg:hidden relative">
                  <select
                    v-model="activeTab"
                    class="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-brand-navy dark:text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-red-light text-base font-semibold transition-colors duration-300 appearance-none cursor-pointer"
                  >
                    <option v-for="tab in searchTabs" :key="tab.id" :value="tab.id">
                      {{ tab.label }}
                    </option>
                  </select>
                  <!-- Dropdown Arrow -->
                  <svg class="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-gray-500 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                  </svg>
                </div>

                <!-- Desktop Tabs -->
                <div class="hidden lg:flex justify-center gap-1">
                  <button 
                    v-for="tab in searchTabs" 
                    :key="tab.id"
                    @click="activeTab = tab.id"
                    :class="[
                      'relative px-4 lg:px-6 py-2 text-base font-semibold transition-all duration-300 vehicle-tab',
                      activeTab === tab.id 
                        ? 'text-brand-red-light dark:text-brand-red-light' 
                        : 'text-brand-navy dark:text-white hover:text-brand-navy dark:hover:text-white'
                    ]"
                  >
                    {{ tab.label }}
                  </button>
                </div>
              </div>

              <!-- Search Input + Filters + Button (Single Row on Desktop, Stacked on Mobile) -->
              <div class="flex flex-col lg:flex-row gap-3 items-stretch">
                <!-- Search Input -->
                <div class="flex-1 relative">
                  <svg class="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <input 
                    v-model="searchQuery"
                    type="text" 
                    placeholder="Enter Make, Model and Variant"
                    class="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-brand-navy dark:text-white placeholder-brand-navy dark:placeholder-white rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-red-light focus:border-brand-red-light text-base transition-colors duration-300"
                  >
                </div>

                <!-- Filters Button -->
                <button class="flex items-center justify-center gap-2 px-6 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg text-base font-medium transition-colors duration-300 whitespace-nowrap">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"/>
                  </svg>
                  Filters
                </button>

                <!-- Search Button -->
                <button 
                  @click="handleSearch"
                  class="bg-brand-red-light text-white px-8 py-3 rounded-lg font-semibold hover:bg-brand-red-dark transition-colors text-base whitespace-nowrap"
                >
                  Search {{ searchStats }} vehicles
                </button>
              </div>
            </div>

            <!-- Social Proof Stats -->
            <div class="grid grid-cols-3 gap-1 lg:gap-8 max-w-2xl mx-auto">
              <div class="text-center">
                <div class="text-4xl lg:text-5xl font-bold text-white mb-2">50K+</div>
                <div class="text-base lg:text-base font-medium text-white/80">Vehicles</div>
              </div>
              <div class="text-center">
                <div class="text-4xl lg:text-5xl font-bold text-white mb-2">50%</div>
                <div class="text-base lg:text-base font-medium text-white/80">Lower Fees</div>
              </div>
              <div class="text-center">
                <div class="text-4xl lg:text-5xl font-bold text-white mb-2">300+</div>
                <div class="text-base lg:text-base font-medium text-white/80">Verified Dealers</div>
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
          </div>
          <button
            class="mt-4 lg:mt-0 text-brand-navy dark:text-brand-red-light hover:text-brand-navy dark:hover:text-white font-medium transition-colors duration-300"
          >
            {{ $t('buttons.view_all') }} →
          </button>
        </div>
            <FeaturedVehiclesCarousel />
      </div>
    </section>

    <!-- Interactive Budget Calculator Section -->
    <section class="py-14 md:py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-3 lg:px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl lg:text-5xl font-bold text-brand-navy dark:text-white mb-6">
            {{ $t('sections.bts_search_title_1') }}
            <span class="bg-gradient-to-r from-brand-red-light to-brand-red-dark bg-clip-text text-transparent">
                {{ $t('sections.bts_search_title_2') }}
            </span>
          </h2>
          <p class="text-base lg:text-xl text-brand-navy dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            {{ $t('sections.bts_search_subtitle') }}
          </p>
        </div>
          <BudgetCalculator />
      </div>
    </section>



    <!-- Category Collections -->
    <section class="py-14 md:py-24 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-3 lg:px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl lg:text-4xl font-bold text-brand-navy dark:text-white mb-4">
            Find Your Perfect Ride
          </h2>
          <p class="text-lg text-brand-navy dark:text-gray-300">
            Browse our complete vehicle categories
          </p>
        </div>
            <CuratedVehiclesCarousel />
      </div>
    </section>

    <!-- News & Insights Section -->
    <section class="py-14 md:py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-3 lg:px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-5xl font-bold text-brand-navy dark:text-white mb-6">
            Automotive
            <span class="bg-gradient-to-r from-brand-red-light to-brand-red-dark bg-clip-text text-transparent">
              News & Advice
            </span>
          </h2>
          <p class="text-base lg:text-xl text-brand-navy dark:text-gray-300 max-w-5xl mx-auto leading-relaxed">
            Stay updated with the latest vehicle news and advice from our automotive experts
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
                  src="/assets/placeholder/Honda-PCX-160-2025-featured-article.webp"
                  alt="Featured article"
                  class="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  sizes="sm:100vw lg:66vw"
                />
                <div class="absolute inset-0 bg-black/10"></div>
                <div class="absolute top-6 left-6">
                  <span
                    class="bg-brand-red-light text-white px-3 py-1 rounded-full text-base font-bold"
                    >Reviewed</span
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
                    <span>Oct 15, 2025</span>
                  </span>
                  <span>•</span>
                  <span class="flex items-center space-x-1">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                    <span>Reviews</span>
                  </span>
                </div>

                <h3
                  class="text-3xl lg:text-4xl font-bold text-brand-navy dark:text-white mb-6 transition-colors duration-300"
                >
                  2025 Honda PCX 160: The Perfect Urban Commuter for Bangkok Traffic
                </h3>
                <p
                  class="text-brand-navy dark:text-gray-300 text-lg leading-relaxed flex-1"
                >
                  We spent two weeks testing Honda's latest PCX 160 through Bangkok's notorious traffic. Find out why this scooter is becoming Thailand's most popular choice for daily commuting with its improved fuel efficiency and smart features.
                </p>

                <!-- Featured Article - Author and Button Section -->
                <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-auto pt-6">
                  <div class="flex items-center space-x-3">
                    <div
                      class="w-10 h-10 bg-brand-red-light rounded-full flex items-center justify-center flex-shrink-0"
                    >
                      <span class="text-white font-bold text-base">PT</span>
                    </div>
                    <div>
                      <p class="font-semibold text-brand-navy dark:text-white leading-tight">
                        Pongsakorn Thai
                      </p>
                      <p class="text-base text-brand-navy dark:text-gray-300 leading-tight">
                        Motorcycle Editor
                      </p>
                    </div>
                  </div>
                  <button
                    class="w-full sm:w-auto bg-brand-red-light text-white px-6 py-2 rounded-lg font-semibold hover:bg-brand-red-dark transition-colors duration-300 h-10"
                  >
                    Read Review
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
                  src="/assets/placeholder/first-time-motorcycle-buyers-guide.webp"
                  alt="Tips article"
                  class="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  sizes="sm:100vw lg:33vw"
                />
                <div class="absolute inset-0 bg-black/10"></div>
                <div class="absolute top-4 left-4">
                  <span
                    class="bg-white text-brand-navy px-2 py-1 rounded text-xs font-medium"
                    >🔧 Guides</span
                  >
                </div>
              </div>
              <div class="p-6 flex flex-col flex-1">
                <div
                  class="flex items-center space-x-2 text-brand-navy dark:text-gray-300 text-base mb-3"
                >
                  <span>Oct 12, 2025</span>
                  <span>•</span>
                  <span>Buying Guide</span>
                </div>
                <h3
                  class="text-xl font-semibold text-brand-navy dark:text-white mb-4 transition-colors duration-300 flex-1"
                >
                  First-Time Bike Buyer's Guide: Everything You Need to Know
                </h3>
                <!-- Side Article Button -->
                <button
                  class="w-full sm:w-auto bg-brand-red-light text-white px-6 py-2 rounded-lg font-semibold hover:bg-brand-red-dark transition-colors duration-300 mt-auto h-10"
                >
                  Read Guide
                </button>
              </div>
            </article>

            <article
              class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 flex flex-col flex-1"
            >
              <div class="relative h-[11.5rem] overflow-hidden flex-shrink-0">
                <NuxtImg
                  src="/assets/placeholder/ev-surge.webp"
                  alt="Market trends article"
                  class="w-full h-full object-cover object-bottom transform group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  sizes="sm:100vw lg:33vw"
                />
                <div class="absolute inset-0 bg-black/10"></div>
                <div class="absolute top-4 left-4">
                  <span
                    class="bg-white text-brand-navy px-2 py-1 rounded text-xs font-medium"
                    >📊 Market</span
                  >
                </div>
              </div>
              <div class="p-6 flex flex-col flex-1">
                <div
                  class="flex items-center space-x-2 text-brand-navy dark:text-gray-300 text-base mb-3"
                >
                  <span>Oct 10, 2025</span>
                  <span>•</span>
                  <span>Trends</span>
                </div>
                <h3
                  class="text-xl font-semibold text-brand-navy dark:text-white mb-4 transition-colors duration-300 flex-1"
                >
                  Electric Vehicles Surge: Thailand's EV Market Grows 150% in 2025
                </h3>
                <!-- Side Article Button -->
                <button
                  class="w-full sm:w-auto bg-brand-red-light text-white px-6 py-2 rounded-lg font-semibold hover:bg-brand-red-dark transition-colors duration-300 mt-auto h-10"
                >
                  Read More
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
            Watch Before <span class="bg-gradient-to-r from-brand-red-light to-brand-red-dark bg-clip-text text-transparent">You Buy</span>
          </h2>
          <p class="text-base lg:text-xl text-brand-navy dark:text-gray-300 max-w-5xl mx-auto leading-relaxed">Expert reviews to help you decide</p>
        </div>
        <Reviews />
      </div>

    </section>

    <!-- Newsletter Signup Section -->
    <section class="py-14 md:py-24 bg-gray-900 text-white relative overflow-hidden">
      <!-- Background Image -->
      <div class="absolute inset-0">
        <NuxtImg 
          src="/assets/placeholder/thaikeys-motor-hero.webp" 
          alt="" 
          class="w-full h-full object-cover object-bottom"
          loading="lazy"
        />
        <!-- Dark radial overlay, bigger center -->
        <div class="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_farthest-corner,_rgba(0,0,0,0.8)_25%,_rgba(0,0,0,0)_100%)]"></div>
      </div>

      <!-- Optional: Keep some decorative elements -->
      <div class="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl transform translate-x-32 -translate-y-32"></div>
      <div class="absolute bottom-0 left-0 w-80 h-80 bg-brand-red-light/10 rounded-full blur-3xl transform -translate-x-24 translate-y-24"></div>
      
      <div class="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <h2 class="text-4xl lg:text-6xl font-bold leading-tight">
          Never Miss a
        </h2>
        <h2 class="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
          <span class="bg-gradient-to-r from-brand-red-light to-brand-red-dark bg-clip-text text-transparent">
            Great Deal
          </span>
        </h2>
        <p class="text-base lg:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
          Get new listings, price drops, and expert vehicle advice delivered straight to your inbox every week.
        </p>
        
        <!-- Newsletter Form -->
        <form class="max-w-2xl mx-auto mb-10">
          <div class="flex flex-col sm:flex-row gap-4 mb-4">
            <!-- Name Input -->
            <div class="flex-1">
              <input 
                type="text" 
                placeholder="Enter your name"
                class="w-full px-6 py-4 rounded-xl bg-white/15 backdrop-blur-sm border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-brand-red-light focus:border-transparent transition-all duration-300"
                required
              >
            </div>
            
            <!-- Email Input -->
            <div class="flex-1">
              <input 
                type="email" 
                placeholder="Enter your email address"
                class="w-full px-6 py-4 rounded-xl bg-white/15 backdrop-blur-sm border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-brand-red-light focus:border-transparent transition-all duration-300"
                required
              >
            </div>
            
            <!-- Subscribe Button -->
            <button 
              type="submit"
              class="bg-brand-red-light text-white px-8 py-4 rounded-xl font-bold hover:bg-brand-red-dark transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap"
            >
              Subscribe
            </button>
          </div>
        </form>

        <!-- Newsletter Benefits -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div class="text-center group">
            <div class="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-2 transition-all duration-300">
              <svg class="w-8 h-8 text-brand-red-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 class="text-lg font-bold text-brand-red-light mb-1">Price Drops</h3>
            <p class="text-base text-white/80">Never miss a deal alert</p>
          </div>
          
          <div class="text-center group">
            <div class="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-2 transition-all duration-300">
              <svg class="w-8 h-8 text-brand-red-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 class="text-lg font-bold text-brand-red-light mb-1">Buying Tips</h3>
            <p class="text-base text-white/80">Expert advice weekly</p>
          </div>
          
          <div class="text-center group">
            <div class="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-2 transition-all duration-300">
              <svg class="w-8 h-8 text-brand-red-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
              </svg>
            </div>
            <h3 class="text-lg font-bold text-brand-red-light mb-1">New Listings</h3>
            <p class="text-base text-white/80">Fresh inventory alerts</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// Meta tags
useHead({
  title: 'ThaiKeys Motors - Unlocking Thailand\'s Vehicle Market',
  meta: [
    {
      name: 'description',
      content: 'ThaiKeys Motors: Thailand\'s most comprehensive vehicle marketplace with unified search, trusted verification, and integrated financing solutions. Cars, motorcycles, commercial vehicles, and marine - all in one place.'
    },
    {
      property: 'og:title',
      content: 'ThaiKeys Motors - Thailand\'s Complete Vehicle Marketplace'
    },
    {
      property: 'og:description',
      content: 'From motorcycles to marine vessels - Thailand\'s first unified vehicle marketplace with financing, verification, and rent-to-own solutions.'
    },
    {
      property: 'og:type',
      content: 'website'
    },
    {
      name: 'keywords',
      content: 'Thailand cars, motorcycles Thailand, boats Thailand, vehicle marketplace, buy cars Bangkok, rent motorcycles Thailand, marine vessels, commercial vehicles'
    }
  ]
})

// Reactive data
const searchQuery = ref('')
const activeTab = ref('cars')

const searchTabs = [
  { id: 'cars', label: 'Cars' },
  { id: 'motorcycles', label: 'Motorcycles' },
  { id: 'commercial', label: 'Commercial' },
  { id: 'marine', label: 'Marine' }
]

// Dynamic vehicle count based on active tab
const searchStats = computed(() => {
  const stats = {
    cars: '90,466',
    motorcycles: '45,230',
    commercial: '12,890',
    marine: '8,450'
  }
  return stats[activeTab.value] || '0'
})

// Methods
const handleSearch = () => {
  if (searchQuery.value.trim()) {
    console.log('Searching for:', searchQuery.value, 'Type:', activeTab.value)
    // TODO: Navigate to search results page
    // navigateTo(`/search?type=${activeTab.value}&q=${searchQuery.value}`)
  }
}
</script>

<style scoped>

.vehicle-tab {
  position: relative;
}

.vehicle-tab::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  @apply bg-brand-red-light;
  transition: all 0.3s ease;
  transform: translateX(-50%);
}

.vehicle-tab:hover::after {
  width: 100%;
}

/* Active state - shows underline */
.vehicle-tab.text-brand-red-light::after {
  width: 100%;
}

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
  @apply bg-brand-red-light;
  transition: all 0.3s ease;
  transform: translateX(-50%);
}

.property-tab:hover::after {
  width: 100%;
}

/* Active state - shows underline */
.property-tab.text-brand-red-light::after {
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