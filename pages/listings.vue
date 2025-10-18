<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 font-sans transition-colors duration-300">

    <div class="h-screen bg-gray-50 dark:bg-gray-900 font-sans flex overflow-hidden">
      <!-- Left Sidebar Navigation -->
      <aside class="w-16 bg-brand-navy dark:bg-gray-800 flex flex-col items-center py-6 space-y-6 flex-shrink-0 transition-colors duration-300">
        <!-- Logo -->
        <div class="w-8 h-8 bg-brand-red-light rounded-lg flex items-center justify-center">
          <svg class="w-5 h-5 text-brand-navy" fill="currentColor" viewBox="0 0 24 24">
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
          </svg>
        </div>
        
        <!-- Navigation Icons -->
        <div class="space-y-4">
          <button class="w-10 h-10 bg-brand-red-light rounded-lg flex items-center justify-center">
            <svg class="w-5 h-5 text-brand-navy" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
            </svg>
          </button>
          <button class="w-10 h-10 bg-gray-700 dark:bg-gray-600 rounded-lg flex items-center justify-center hover:bg-gray-600 dark:hover:bg-gray-500 transition-colors">
            <svg class="w-5 h-5 text-gray-300 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
          </button>
          <button class="w-10 h-10 bg-gray-700 dark:bg-gray-600 rounded-lg flex items-center justify-center hover:bg-gray-600 dark:hover:bg-gray-500 transition-colors">
            <svg class="w-5 h-5 text-gray-300 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
            </svg>
          </button>
          <button class="w-10 h-10 bg-gray-700 dark:bg-gray-600 rounded-lg flex items-center justify-center hover:bg-gray-600 dark:hover:bg-gray-500 transition-colors">
            <svg class="w-5 h-5 text-gray-300 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
            </svg>
          </button>
          <button class="w-10 h-10 bg-gray-700 dark:bg-gray-600 rounded-lg flex items-center justify-center hover:bg-gray-600 dark:hover:bg-gray-500 transition-colors">
            <svg class="w-5 h-5 text-gray-300 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
            </svg>
          </button>
        </div>
      </aside>

      <!-- Main Content Area -->
      <div class="flex-1 flex h-full">
        <!-- Map Section - 25% width -->
        <div class="w-1/4 flex flex-col flex-shrink-0 relative">
          <!-- Top Bar -->
          <div class="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-4 transition-colors duration-300">
            <div class="flex items-center justify-between">
              <div>
                <h1 class="text-lg font-semibold text-brand-navy dark:text-white">{{ $t('listings.bangkok_properties') }}</h1>
                <span class="text-sm text-brand-navy dark:text-gray-400">{{ $t('listings.properties_found', { count: filteredProperties.length }) }}</span>
              </div>
              <button 
                @click="toggleFullscreen" 
                class="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                :title="$t('listings.expand_map')"
              >
                <svg class="w-4 h-4 text-brand-navy dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-5h-4m4 0v4m0-4l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"/>
                </svg>
              </button>
            </div>
          </div>

          <!-- Full Height Map Container -->
          <div class="flex-1 bg-cover bg-center bg-no-repeat relative overflow-hidden transition-colors duration-300" style="background-image: url('/assets/placeholder/map_placeholder_lg.webp');">
            <div class="absolute inset-0 bg-black/10 dark:bg-black/10"></div>
            <div class="relative z-10 h-full">
              <!-- BTS Station Labels -->
              <div class="absolute top-6 left-6 bg-brand-red-light text-brand-navy px-3 py-1 rounded-full text-sm font-semibold shadow-md">
                {{ $t('listings.asok_bts') }}
              </div>
              <div class="absolute top-6 right-6 bg-brand-red-light text-brand-navy px-3 py-1 rounded-full text-sm font-semibold shadow-md">
                {{ $t('listings.phrom_phong_bts') }}
              </div>
              <div class="absolute bottom-20 left-6 bg-brand-red-light text-brand-navy px-3 py-1 rounded-full text-sm font-semibold shadow-md">
                {{ $t('listings.thonglor_bts') }}
              </div>
              <div class="absolute bottom-6 right-6 bg-brand-red-light text-brand-navy px-3 py-1 rounded-full text-sm font-semibold shadow-md">
                {{ $t('listings.ekkamai_bts') }}
              </div>

              <!-- Property Pins -->
              <div 
                v-for="(property, index) in mapProperties" 
                :key="property.id"
                :style="{ 
                  top: property.mapPosition.top, 
                  left: property.mapPosition.left 
                }"
                class="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer z-10"
                @click="selectProperty(property)"
                @mouseenter="hoveredProperty = property.id"
                @mouseleave="hoveredProperty = null"
              >
                <!-- Property Pin -->
                <div 
                  :class="[
                    'w-12 h-12 rounded-full border-2 border-white shadow-lg flex items-center justify-center font-bold text-white text-xs transition-all duration-200',
                    selectedProperty?.id === property.id ? 'bg-brand-red-light text-brand-navy scale-110' : 
                    hoveredProperty === property.id ? 'bg-brand-navy scale-105' : 'bg-blue-500'
                  ]"
                >
                  {{ formatPrice(property.price) }}
                </div>
                
                <!-- Property Preview Card -->
                <div 
                  v-if="hoveredProperty === property.id"
                  class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-56 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-100 dark:border-gray-700 p-3 z-30 transition-colors duration-300"
                >
                  <div class="h-24 bg-cover bg-center bg-no-repeat rounded mb-2" :style="{ backgroundImage: `url('${property.image}')` }"></div>
                  <h3 class="font-semibold text-brand-navy dark:text-white text-sm mb-1">{{ property.title }}</h3>
                  <p class="text-xs text-brand-navy dark:text-gray-400 mb-1">{{ property.location }}</p>
                  <div class="flex items-center justify-between">
                    <span class="font-bold text-brand-navy dark:text-white text-sm">{{ property.price }}</span>
                    <span class="text-xs text-brand-navy dark:text-gray-400">{{ property.specs }}</span>
                  </div>
                </div>
              </div>

              <!-- Map Controls -->
              <div class="absolute bottom-4 left-4 flex flex-col space-y-2">
                <button class="w-10 h-10 bg-white dark:bg-gray-800 rounded-lg shadow border border-gray-200 dark:border-gray-700 flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  <svg class="w-5 h-5 text-brand-navy dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                  </svg>
                </button>
                <button class="w-10 h-10 bg-white dark:bg-gray-800 rounded-lg shadow border border-gray-200 dark:border-gray-700 flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  <svg class="w-5 h-5 text-brand-navy dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <!-- Property Listings Sidebar - Takes remaining 75% -->
        <div class="flex-1 bg-white dark:bg-gray-800 border-l border-gray-200 dark:border-gray-700 flex flex-col h-full transition-colors duration-300">
          <!-- Header with title and search -->
          <div class="p-4 border-b border-gray-200 dark:border-gray-700 flex-shrink-0">
            <div class="flex items-center justify-between mb-4">
              <h2 class="text-xl font-semibold text-brand-navy dark:text-white">{{ $t('listings.properties') }}</h2>
              <div class="flex items-center space-x-2">
                <button class="p-2 text-brand-navy dark:text-gray-400 hover:text-brand-red-light dark:hover:text-brand-red-light transition-colors">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"/>
                  </svg>
                </button>
                <button class="p-2 text-brand-navy dark:text-gray-400 hover:text-brand-red-light dark:hover:text-brand-red-light transition-colors">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"/>
                  </svg>
                </button>
              </div>
            </div>
            
            <!-- Search Bar -->
            <div class="relative mb-3">
              <input 
                v-model="searchQuery"
                type="text" 
                :placeholder="$t('listings.search_placeholder')"
                class="w-full px-4 py-3 pr-10 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-red-light focus:border-transparent bg-white dark:bg-gray-700 text-brand-navy dark:text-white transition-colors duration-300"
              >
              <svg class="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
              </svg>
            </div>

            <!-- Quick Filters -->
            <div class="flex items-center space-x-2">
              <button 
                v-for="filter in quickFilters" 
                :key="filter.id"
                @click="toggleFilter(filter.id)"
                :class="[
                  'px-3 py-1 rounded-full text-sm font-medium transition-colors',
                  activeFilters.includes(filter.id) 
                    ? 'bg-brand-red-light text-brand-navy' 
                    : 'bg-gray-100 dark:bg-gray-700 text-brand-navy dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                ]"
              >
                {{ $t(`listings.filters.${filter.id}`) }}
              </button>
            </div>
          </div>

          <!-- Scrollable Property List - 2 Columns -->
          <div class="flex-1 overflow-y-auto">
            <div class="p-4 grid grid-cols-2 gap-4">
              <div 
                v-for="property in filteredProperties" 
                :key="property.id"
                @click="selectProperty(property)"
                :class="[
                  'bg-white dark:bg-gray-800 rounded-xl border transition-all duration-200 cursor-pointer hover:shadow-lg',
                  selectedProperty?.id === property.id 
                    ? 'border-brand-red-light shadow-lg' 
                    : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                ]"
              >
                <!-- Property Image -->
                <div class="h-[15rem] bg-cover bg-center bg-no-repeat rounded-t-xl relative overflow-hidden" :style="{ backgroundImage: `url('${property.image}')` }">
                  <div class="absolute top-3 left-3">
                    <span class="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">{{ $t('listings.available') }}</span>
                  </div>
                  <div class="absolute top-3 right-3">
                    <button class="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                      <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                      </svg>
                    </button>
                  </div>
                  <div class="absolute bottom-3 left-3">
                    <span class="bg-brand-red-light text-brand-navy px-2 py-1 rounded-full text-xs font-semibold">
                      {{ property.btsDistance }}
                    </span>
                  </div>
                </div>

                <!-- Property Details -->
                <div class="p-4">
                  <h3 class="font-semibold text-brand-navy dark:text-white mb-2 text-lg">{{ property.title }}</h3>
                  <p class="text-sm text-brand-navy dark:text-gray-400 mb-3 flex items-center">
                    <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                    {{ property.location }}
                  </p>
                  
                  <div class="flex items-center justify-between mb-4">
                    <div>
                      <span class="text-2xl font-bold text-brand-navy dark:text-white">{{ property.price }}</span>
                      <span class="text-sm text-brand-navy dark:text-gray-400">/{{ $t('common.month') }}</span>
                    </div>
                    <div class="text-sm text-brand-navy dark:text-gray-400">{{ property.specs }}</div>
                  </div>

                  <div class="flex items-center space-x-4 text-sm text-brand-navy dark:text-gray-400 mb-4">
                    <div class="flex items-center">
                      <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M5 21V7a2 2 0 012-2h10a2 2 0 012 2v14M9 7h6"/>
                      </svg>
                      <span>{{ property.bedrooms }} {{ $t('common.bed') }}</span>
                    </div>
                    <div class="flex items-center">
                      <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                      </svg>
                      <span>{{ property.bathrooms }} {{ $t('common.bath') }}</span>
                    </div>
                    <div class="flex items-center">
                      <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V6a2 2 0 012-2h2M4 16v2a2 2 0 002 2h2m8-16h2a2 2 0 012 2v2m-4 12h2a2 2 0 002-2v-2"/>
                      </svg>
                      <span>{{ property.size }} {{ $t('listings.sqm') }}</span>
                    </div>
                  </div>

                  <div class="flex items-center justify-between">
                    <div class="flex items-center space-x-2">
                      <div class="w-8 h-8 bg-cover bg-center bg-no-repeat rounded-full" style="background-image: url('/assets/placeholder/agent_placeholder.png');"></div>
                      <div>
                        <p class="text-sm font-medium text-brand-navy dark:text-white">{{ property.agent.name }}</p>
                        <p class="text-xs text-brand-navy dark:text-gray-400">{{ property.agent.title }}</p>
                      </div>
                    </div>
                    <div class="flex items-center justify-right gap-4">
                    <button class="bg-brand-red-light text-brand-navy px-4 py-2 rounded-lg font-semibold hover:bg-teal-300 transition-colors text-sm">
                      {{ $t('listings.mapview') }}
                    </button>
                    <button class="bg-brand-red-light text-brand-navy px-4 py-2 rounded-lg font-semibold hover:bg-teal-300 transition-colors text-sm">
                      {{ $t('listings.contact') }}
                    </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Fullscreen Map Overlay -->
      <div 
        v-if="isFullscreen"
        class="fixed inset-0 bg-white dark:bg-gray-900 z-50 flex flex-col transition-colors duration-300"
      >
        <!-- Fullscreen Map Header -->
        <div class="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-4 flex items-center justify-between flex-shrink-0 transition-colors duration-300">
          <h1 class="text-xl font-semibold text-brand-navy dark:text-white">{{ $t('listings.map_view_title') }}</h1>
          <button 
            @click="closeFullscreen"
            class="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
          >
            <svg class="w-5 h-5 text-brand-navy dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>

        <!-- Fullscreen Map -->
        <div class="flex-1 bg-cover bg-center bg-no-repeat relative transition-colors duration-300" style="background-image: url('/assets/placeholder/map_placeholder_lg.webp');">
          <div class="absolute inset-0 bg-black/10 dark:bg-black/20"></div>
          <div class="relative z-10">
            <!-- BTS Station Labels - Fullscreen -->
            <div class="absolute top-20 left-32 bg-brand-red-light text-brand-navy px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
              {{ $t('listings.asok_bts') }}
            </div>
            <div class="absolute top-32 right-48 bg-brand-red-light text-brand-navy px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
              {{ $t('listings.phrom_phong_bts') }}
            </div>
            <div class="absolute bottom-40 left-48 bg-brand-red-light text-brand-navy px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
              {{ $t('listings.thonglor_bts') }}
            </div>
            <div class="absolute bottom-20 right-64 bg-brand-red-light text-brand-navy px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
              {{ $t('listings.ekkamai_bts') }}
            </div>

            <!-- Property Pins - Fullscreen -->
            <div 
              v-for="(property, index) in mapProperties" 
              :key="`fs-${property.id}`"
              :style="{ 
                top: property.mapPosition.top, 
                left: property.mapPosition.left 
              }"
              class="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer z-10"
              @click="selectProperty(property)"
              @mouseenter="hoveredProperty = property.id"
              @mouseleave="hoveredProperty = null"
            >
              <div 
                :class="[
                  'w-14 h-14 rounded-full border-3 border-white shadow-lg flex items-center justify-center font-bold text-white text-sm transition-all duration-200',
                  selectedProperty?.id === property.id ? 'bg-brand-red-light text-brand-navy scale-125' : 
                  hoveredProperty === property.id ? 'bg-brand-navy scale-110' : 'bg-blue-500'
                ]"
              >
                {{ formatPrice(property.price) }}
              </div>
              
              <!-- Property Preview Card - Fullscreen -->
              <div 
                v-if="hoveredProperty === property.id"
                class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-72 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 p-4 z-30 transition-colors duration-300"
              >
                <div class="h-32 bg-cover bg-center bg-no-repeat rounded-lg mb-3" :style="{ backgroundImage: `url('${property.image}')` }"></div>
                <h3 class="font-semibold text-brand-navy dark:text-white mb-1 text-lg">{{ property.title }}</h3>
                <p class="text-sm text-brand-navy dark:text-gray-400 mb-2">{{ property.location }}</p>
                <div class="flex items-center justify-between">
                  <span class="font-bold text-brand-navy dark:text-white text-xl">{{ property.price }}</span>
                  <span class="text-sm text-brand-navy dark:text-gray-400">{{ property.specs }}</span>
                </div>
              </div>
            </div>

            <!-- Map Controls - Fullscreen -->
            <div class="absolute bottom-6 left-6 flex flex-col space-y-2">
              <button class="w-12 h-12 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                <svg class="w-6 h-6 text-brand-navy dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                </svg>
              </button>
              <button class="w-12 h-12 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                <svg class="w-6 h-6 text-brand-navy dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// Meta tags
useHead({
  title: 'Property Listings - Bangkok | ThaiKeys',
  meta: [
    {
      name: 'description',
      content: 'Browse Bangkok property listings with interactive map view. Find apartments and condos near BTS stations with professional agents and modern search tools.'
    }
  ]
})

// Reactive data
const searchQuery = ref('')
const selectedProperty = ref(null)
const hoveredProperty = ref(null)
const isFullscreen = ref(false)
const activeFilters = ref([])

// Quick filters with localization keys
const quickFilters = ref([
  { id: 'bts', label: 'Near BTS' },
  { id: 'furnished', label: 'Furnished' },
  { id: 'luxury', label: 'Luxury' },
  { id: 'new', label: 'New' }
])

// Demo properties data
const properties = ref([
  {
    id: 1,
    title: 'Luxury 2BR Condo Near Asok',
    location: 'Sukhumvit 21, Asok, Bangkok',
    price: '฿45,000',
    bedrooms: 2,
    bathrooms: 2,
    size: 75,
    specs: '2 bed • 2 bath • 75 sqm',
    btsDistance: '2 min to Asok BTS',
    image: '/assets/placeholder/sample_1.webp',
    agent: {
      name: 'Sarah Wilson',
      title: 'Senior Consultant'
    },
    mapPosition: { top: '25%', left: '30%' },
    tags: ['bts', 'luxury']
  },
  {
    id: 2,
    title: 'Modern Studio Phrom Phong',
    location: 'Sukhumvit 39, Phrom Phong, Bangkok',
    price: '฿28,000',
    bedrooms: 1,
    bathrooms: 1,
    size: 45,
    specs: '1 bed • 1 bath • 45 sqm',
    btsDistance: '1 min to Phrom Phong BTS',
    image: '/assets/placeholder/sample_2.webp',
    agent: {
      name: 'Michael Chen',
      title: 'Property Consultant'
    },
    mapPosition: { top: '35%', left: '65%' },
    tags: ['bts', 'furnished']
  },
  {
    id: 3,
    title: 'Spacious 3BR House Thonglor',
    location: 'Thonglor 25, Bangkok',
    price: '฿85,000',
    bedrooms: 3,
    bathrooms: 3,
    size: 120,
    specs: '3 bed • 3 bath • 120 sqm',
    btsDistance: '5 min to Thonglor BTS',
    image: '/assets/placeholder/sample_3.webp',
    agent: {
      name: 'Amanda Rodriguez',
      title: 'Senior Consultant'
    },
    mapPosition: { top: '65%', left: '25%' },
    tags: ['luxury', 'new']
  },
  {
    id: 4,
    title: 'Contemporary 1BR Ekkamai',
    location: 'Sukhumvit 63, Ekkamai, Bangkok',
    price: '฿32,000',
    bedrooms: 1,
    bathrooms: 1,
    size: 50,
    specs: '1 bed • 1 bath • 50 sqm',
    btsDistance: '3 min to Ekkamai BTS',
    image: '/assets/placeholder/sample_4.webp',
    agent: {
      name: 'David Park',
      title: 'Property Consultant'
    },
    mapPosition: { top: '75%', left: '70%' },
    tags: ['bts', 'furnished']
  },
  {
    id: 5,
    title: 'Penthouse with City View',
    location: 'Sukhumvit 11, Nana, Bangkok',
    price: '฿120,000',
    bedrooms: 3,
    bathrooms: 3,
    size: 150,
    specs: '3 bed • 3 bath • 150 sqm',
    btsDistance: '4 min to Nana BTS',
    image: '/assets/placeholder/sample_5.webp',
    agent: {
      name: 'Lisa Thompson',
      title: 'Luxury Specialist'
    },
    mapPosition: { top: '45%', left: '40%' },
    tags: ['luxury', 'new']
  },
  {
    id: 6,
    title: 'Cozy Studio Near BTS',
    location: 'Sukhumvit 24, Phrom Phong, Bangkok',
    price: '฿22,000',
    bedrooms: 1,
    bathrooms: 1,
    size: 35,
    specs: '1 bed • 1 bath • 35 sqm',
    btsDistance: '2 min to Phrom Phong BTS',
    image: '/assets/placeholder/sample_6.webp',
    agent: {
      name: 'James Kim',
      title: 'Property Consultant'
    },
    mapPosition: { top: '55%', left: '55%' },
    tags: ['bts', 'furnished']
  }
])

// Computed properties
const filteredProperties = computed(() => {
  let filtered = properties.value

  // Filter by search query
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(property => 
      property.title.toLowerCase().includes(query) ||
      property.location.toLowerCase().includes(query) ||
      property.btsDistance.toLowerCase().includes(query)
    )
  }

  // Filter by active filters
  if (activeFilters.value.length > 0) {
    filtered = filtered.filter(property =>
      activeFilters.value.some(filter => property.tags.includes(filter))
    )
  }

  return filtered
})

const mapProperties = computed(() => {
  return filteredProperties.value
})

// Methods
const selectProperty = (property) => {
  selectedProperty.value = property
}

const toggleFilter = (filterId) => {
  const index = activeFilters.value.indexOf(filterId)
  if (index > -1) {
    activeFilters.value.splice(index, 1)
  } else {
    activeFilters.value.push(filterId)
  }
}

const toggleFullscreen = () => {
  isFullscreen.value = true
}

const closeFullscreen = () => {
  isFullscreen.value = false
}

const formatPrice = (price) => {
  // Convert ฿45,000 to 45K format for map pins
  return price.replace(',000', 'K')
}
</script>

<style scoped>
/* Custom scrollbar for property list */
.overflow-y-auto::-webkit-scrollbar {
  width: 6px;
}

.overflow-y-auto::-webkit-scrollbar-track {
  @apply bg-gray-100 dark:bg-gray-800;
}

.overflow-y-auto::-webkit-scrollbar-thumb {
  @apply bg-gray-300 dark:bg-gray-600 rounded;
}

.overflow-y-auto::-webkit-scrollbar-thumb:hover {
  @apply bg-gray-400 dark:bg-gray-500;
}
</style>