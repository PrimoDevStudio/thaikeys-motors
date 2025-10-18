<template>
  <!-- Interactive BTS Feature Section -->
  <section class="bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
    <div class="max-w-7xl mx-auto px-3 lg:px-4">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center">
        <!-- Dynamic Content Area (LEFT on mobile, RIGHT on desktop) -->
        <div class="lg:col-span-7 order-1 lg:order-2">
          <div class="relative">
            <div class="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl border-2 border-gray-100 dark:border-gray-700 overflow-hidden">
              <div class="bg-gray-50 dark:bg-gray-700 px-6 py-4 border-b border-gray-100 dark:border-gray-600">
                <div class="flex items-center space-x-3">
                  <div class="flex items-center space-x-2">
                    <div class="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div class="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div class="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <span class="text-base font-medium text-brand-navy dark:text-gray-300">{{ dynamicContent.browserTitle }}</span>
                </div>
              </div>

              <!-- Dynamic Content with Transitions -->
              <transition name="fade" mode="out-in">
                <div :key="activeFeature" class="h-[16rem] lg:h-[29rem] bg-cover bg-center bg-no-repeat relative p-8" :style="{ backgroundImage: `url('${dynamicContent.backgroundImage}')` }">
                  <div class="absolute inset-0 bg-black/10 dark:bg-black/10"></div>
                  
                  <div class="relative z-10">
                    <div 
                      v-for="(station, index) in dynamicContent.stations" 
                      :key="station.name"
                      :class="station.classes"
                      :style="{ animationDelay: `${index * 0.2}s` }"
                    >
                      {{ station.name }}
                    </div>
                    
                    <div 
                      v-for="(price, index) in dynamicContent.prices" 
                      :key="price.amount"
                      :class="price.classes"
                      :style="{ animationDelay: `${index * 0.3}s` }"
                    >
                      {{ price.amount }}
                    </div>
                    
                    <div 
                      v-for="(dot, index) in dynamicContent.dots" 
                      :key="index"
                      :class="dot.classes"
                      :style="{ animationDelay: `${index * 0.5}s` }"
                    ></div>
                  </div>
                </div>
              </transition>
              
              <!-- Property Card -->
              <div class="p-5 space-y-4 bg-white dark:bg-gray-800">
                <transition name="slide-up" mode="out-in">
                  <div :key="activeFeature" :class="[
                    'flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 rounded-xl border-2',
                    isFeatureActive('visualize') ? 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800' : '',
                    isFeatureActive('discover') ? 'bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800' : '',
                    isFeatureActive('research') ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800' : '',
                    isFeatureActive('alerts') ? 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800' : ''
                  ]">
                    <div class="flex items-center justify-between w-full sm:w-auto">
                      <div :class="[
                        'w-16 h-16 rounded-lg flex items-center justify-center flex-shrink-0',
                        isFeatureActive('visualize') ? 'bg-gradient-to-br from-blue-100 to-blue-300 dark:from-blue-700 dark:to-blue-600' : '',
                        isFeatureActive('discover') ? 'bg-gradient-to-br from-purple-100 to-purple-300 dark:from-purple-700 dark:to-purple-600' : '',
                        isFeatureActive('research') ? 'bg-gradient-to-br from-green-100 to-green-300 dark:from-green-700 dark:to-green-600' : '',
                        isFeatureActive('alerts') ? 'bg-gradient-to-br from-red-100 to-red-300 dark:from-red-700 dark:to-red-600' : ''
                      ]">
                        <span class="text-2xl">{{ dynamicContent.propertyIcon }}</span>
                      </div>
                      <div class="sm:hidden">
                        <span :class="[
                          'inline-block px-2 py-1 rounded-full text-xs font-medium',
                          isFeatureActive('visualize') ? 'bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400' : '',
                          isFeatureActive('discover') ? 'bg-purple-100 dark:bg-purple-900/20 text-purple-700 dark:text-purple-400' : '',
                          isFeatureActive('research') ? 'bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400' : '',
                          isFeatureActive('alerts') ? 'bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-400' : ''
                        ]">
                          {{ dynamicContent.badge }}
                        </span>
                      </div>
                    </div>
                    
                    <div class="flex-1 w-full sm:w-auto">
                      <h3 class="text-xl font-semibold text-brand-navy dark:text-white">{{ dynamicContent.propertyTitle }}</h3>
                      <p class="text-base text-brand-navy dark:text-gray-300 mt-1">{{ dynamicContent.propertyDetails }}</p>
                      <p class="font-bold text-brand-navy dark:text-white mt-2">{{ dynamicContent.propertyPrice }}</p>
                    </div>
                    
                    <div class="hidden sm:block text-right">
                      <span :class="[
                        'inline-block px-2 py-1 rounded-full text-xs font-medium',
                        isFeatureActive('visualize') ? 'bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400' : '',
                        isFeatureActive('discover') ? 'bg-purple-100 dark:bg-purple-900/20 text-purple-700 dark:text-purple-400' : '',
                        isFeatureActive('research') ? 'bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400' : '',
                        isFeatureActive('alerts') ? 'bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-400' : ''
                      ]">
                        {{ dynamicContent.badge }}
                      </span>
                    </div>
                  </div>
                </transition>
              </div>
            </div>
          </div>

          <!-- Mobile Horizontal Slider -->
          <div class="lg:hidden mt-6 relative">
            <Swiper
              :modules="[SwiperNavigation]"
              :slides-per-view="1"
              :space-between="16"
              :loop="true"
              :navigation="{
                nextEl: '.swiper-button-next-mobile',
                prevEl: '.swiper-button-prev-mobile',
              }"
              @slideChange="onSlideChange"
              class="relative"
            >
              <SwiperSlide>
                <div 
                  :class="[
                    'w-full flex items-start space-x-4 p-5 rounded-2xl border-2 transition-all duration-300',
                    isFeatureActive('visualize')
                      ? 'bg-blue-50 dark:bg-blue-900/20 border-blue-400 dark:border-blue-600 shadow-lg'
                      : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700'
                  ]"
                >
                  <div 
                    :class="[
                      'w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300',
                      isFeatureActive('visualize') ? 'bg-gradient-to-br from-blue-500 to-blue-600 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                    ]"
                  >
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div class="flex-1">
                    <h3 :class="['text-xl font-semibold mb-2', isFeatureActive('visualize') ? 'text-blue-700 dark:text-white' : 'text-gray-700 dark:text-gray-300']">
                      Visualize Your Commute
                    </h3>
                    <p :class="['text-base', isFeatureActive('visualize') ? 'text-blue-600 dark:text-gray-200' : 'text-gray-600 dark:text-gray-400']">
                      See accurate walking times to every transit station. No more misleading "5-minute walk" estimates.
                    </p>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div 
                  :class="[
                    'w-full flex items-start space-x-4 p-5 rounded-2xl border-2 transition-all duration-300',
                    isFeatureActive('discover')
                      ? 'bg-purple-50 dark:bg-purple-900/20 border-purple-400 dark:border-purple-600 shadow-lg'
                      : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700'
                  ]"
                >
                  <div 
                    :class="[
                      'w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300',
                      isFeatureActive('discover') ? 'bg-gradient-to-br from-purple-500 to-purple-600 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                    ]"
                  >
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <div class="flex-1">
                    <h3 :class="['text-xl font-semibold mb-2', isFeatureActive('discover') ? 'text-purple-700 dark:text-white' : 'text-gray-700 dark:text-gray-300']">
                      Discover Hidden Gems
                    </h3>
                    <p :class="['text-base', isFeatureActive('discover') ? 'text-purple-600 dark:text-gray-200' : 'text-gray-600 dark:text-gray-400']">
                      Find incredible properties in overlooked areas with perfect transit connections and amazing value.
                    </p>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div 
                  :class="[
                    'w-full flex items-start space-x-4 p-5 rounded-2xl border-2 transition-all duration-300',
                    isFeatureActive('research')
                      ? 'bg-green-50 dark:bg-green-900/20 border-brand-green-light dark:border-brand-green-dark shadow-lg'
                      : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700'
                  ]"
                >
                  <div 
                    :class="[
                      'w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300',
                      isFeatureActive('research') ? 'bg-gradient-to-br from-brand-green-light to-brand-green-dark text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                    ]"
                  >
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div class="flex-1">
                    <h3 :class="['text-xl font-semibold mb-2', isFeatureActive('research') ? 'text-brand-green-dark dark:text-white' : 'text-gray-700 dark:text-gray-300']">
                      Save Hours of Research
                    </h3>
                    <p :class="['text-base', isFeatureActive('research') ? 'text-brand-green-dark/80 dark:text-gray-200' : 'text-gray-600 dark:text-gray-400']">
                      Skip the Google Maps rabbit hole. We've mapped every property's transit access for you.
                    </p>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div 
                  :class="[
                    'w-full flex items-start space-x-4 p-5 rounded-2xl border-2 transition-all duration-300',
                    isFeatureActive('alerts')
                      ? 'bg-red-50 dark:bg-red-900/20 border-brand-red-light dark:border-brand-red-dark shadow-lg'
                      : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700'
                  ]"
                >
                  <div 
                    :class="[
                      'w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300',
                      isFeatureActive('alerts') ? 'bg-gradient-to-br from-brand-red-light to-brand-red-dark text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                    ]"
                  >
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-5 5v-5z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 9h3v3H9z" />
                    </svg>
                  </div>
                  <div class="flex-1">
                    <h3 :class="['text-xl font-semibold mb-2', isFeatureActive('alerts') ? 'text-brand-red-dark dark:text-white' : 'text-gray-700 dark:text-gray-300']">
                      Smart Price Alerts
                    </h3>
                    <p :class="['text-base', isFeatureActive('alerts') ? 'text-brand-red-dark/80 dark:text-gray-200' : 'text-gray-600 dark:text-gray-400']">
                      Get instant notifications when your perfect property hits the market at the right price.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>

            <!-- Mobile Navigation Arrows -->
            <div class="flex justify-center gap-4 mt-4">
              <button 
                class="swiper-button-prev-mobile w-10 h-10 bg-brand-navy dark:bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-brand-turqoise-light dark:hover:bg-brand-turqoise-light transition-colors duration-300"
                type="button"
                aria-label="Previous slide"
              >
                <svg class="w-5 h-5 text-white dark:text-brand-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                class="swiper-button-next-mobile w-10 h-10 bg-brand-navy dark:bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-brand-turqoise-light dark:hover:bg-brand-turqoise-light transition-colors duration-300"
                type="button"
                aria-label="Next slide"
              >
                <svg class="w-5 h-5 text-white dark:text-brand-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        <!-- Desktop Vertical Slider -->
        <div class="hidden lg:block lg:col-span-5 order-2 lg:order-1">
          <div class="relative">
            <div class="space-y-4">
              <!-- Tab 1: Visualize Commute (Blue theme) -->
              <div
                @click="activeFeatureIndex = 0"
                :class="[
                  'w-full flex items-start space-x-4 p-5 rounded-2xl border-2 transition-all duration-300 cursor-pointer',
                  isFeatureActive('visualize')
                    ? 'bg-blue-50 dark:bg-blue-900/20 border-blue-400 dark:border-blue-600 shadow-lg'
                    : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 hover:bg-blue-50/40'
                ]"
              >
                <div 
                  :class="[
                    'w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300',
                    isFeatureActive('visualize')
                      ? 'bg-gradient-to-br from-blue-500 to-blue-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                  ]"
                >
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div class="flex-1">
                  <h3 :class="['text-xl font-semibold mb-2', isFeatureActive('visualize') ? 'text-blue-700 dark:text-white' : 'text-gray-700 dark:text-gray-300']">
                    Visualize Your Commute
                  </h3>
                  <p :class="['text-base', isFeatureActive('visualize') ? 'text-blue-600 dark:text-gray-200' : 'text-gray-600 dark:text-gray-400']">
                    See accurate walking times to every transit station. No more misleading "5-minute walk" estimates.
                  </p>
                </div>
              </div>

              <!-- Tab 2: Discover Hidden Gems (Purple theme) -->
              <div
                @click="activeFeatureIndex = 1"
                :class="[
                  'w-full flex items-start space-x-4 p-5 rounded-2xl border-2 transition-all duration-300 cursor-pointer',
                  isFeatureActive('discover')
                    ? 'bg-purple-50 dark:bg-purple-900/20 border-purple-400 dark:border-purple-600 shadow-lg'
                    : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-600 hover:bg-purple-50/40'
                ]"
              >
                <div 
                  :class="[
                    'w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300',
                    isFeatureActive('discover')
                      ? 'bg-gradient-to-br from-purple-500 to-purple-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                  ]"
                >
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <div class="flex-1">
                  <h3 :class="['text-xl font-semibold mb-2', isFeatureActive('discover') ? 'text-purple-700 dark:text-white' : 'text-gray-700 dark:text-gray-300']">
                    Discover Hidden Gems
                  </h3>
                  <p :class="['text-base', isFeatureActive('discover') ? 'text-purple-600 dark:text-gray-200' : 'text-gray-600 dark:text-gray-400']">
                    Find incredible properties in overlooked areas with perfect transit connections and amazing value.
                  </p>
                </div>
              </div>

              <!-- Tab 3: Save Time (Green theme) -->
              <div
                @click="activeFeatureIndex = 2"
                :class="[
                  'w-full flex items-start space-x-4 p-5 rounded-2xl border-2 transition-all duration-300 cursor-pointer',
                  isFeatureActive('research')
                    ? 'bg-green-50 dark:bg-green-900/20 border-brand-green-light dark:border-brand-green-dark shadow-lg'
                    : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:border-brand-green-light dark:hover:border-brand-green-dark hover:bg-green-50/40'
                ]"
              >
                <div 
                  :class="[
                    'w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300',
                    isFeatureActive('research')
                      ? 'bg-gradient-to-br from-brand-green-light to-brand-green-dark text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                  ]"
                >
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div class="flex-1">
                  <h3 :class="['text-xl font-semibold mb-2', isFeatureActive('research') ? 'text-brand-green-dark dark:text-white' : 'text-gray-700 dark:text-gray-300']">
                    Save Hours of Research
                  </h3>
                  <p :class="['text-base', isFeatureActive('research') ? 'text-brand-green-dark/80 dark:text-gray-200' : 'text-gray-600 dark:text-gray-400']">
                    Skip the Google Maps rabbit hole. We've mapped every property's transit access for you.
                  </p>
                </div>
              </div>

              <!-- Tab 4: Smart Alerts (Red theme) -->
              <div
                @click="activeFeatureIndex = 3"
                :class="[
                  'w-full flex items-start space-x-4 p-5 rounded-2xl border-2 transition-all duration-300 cursor-pointer',
                  isFeatureActive('alerts')
                    ? 'bg-red-50 dark:bg-red-900/20 border-brand-red-light dark:border-brand-red-dark shadow-lg'
                    : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:border-brand-red-light dark:hover:border-brand-red-dark hover:bg-red-50/40'
                ]"
              >
                <div 
                  :class="[
                    'w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300',
                    isFeatureActive('alerts')
                      ? 'bg-gradient-to-br from-brand-red-light to-brand-red-dark text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                  ]"
                >
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-5 5v-5z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 9h3v3H9z" />
                  </svg>
                </div>
                <div class="flex-1">
                  <h3 :class="['text-xl font-semibold mb-2', isFeatureActive('alerts') ? 'text-brand-red-dark dark:text-white' : 'text-gray-700 dark:text-gray-300']">
                    Smart Price Alerts
                  </h3>
                  <p :class="['text-base', isFeatureActive('alerts') ? 'text-brand-red-dark/80 dark:text-gray-200' : 'text-gray-600 dark:text-gray-400']">
                    Get instant notifications when your perfect property hits the market at the right price.
                  </p>
                </div>
              </div>
            </div>

            <!-- Desktop Navigation - Now positioned to scroll through the 4 items -->
            <div class="flex flex-col gap-2 mt-4">
              <button 
                @click="activeFeatureIndex = (activeFeatureIndex - 1 + features.length) % features.length"
                class="w-full py-3 bg-brand-navy dark:bg-gray-800 rounded-lg shadow-lg flex items-center justify-center hover:bg-brand-turqoise-light dark:hover:bg-brand-turqoise-light border-2 border-gray-200 dark:border-gray-700 hover:border-brand-turqoise-light/50 transition-colors duration-300"
                type="button"
                aria-label="Previous feature"
              >
                <svg class="w-6 h-6 text-white dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
                </svg>
              </button>
              <button 
                @click="activeFeatureIndex = (activeFeatureIndex + 1) % features.length"
                class="w-full py-3 bg-brand-navy dark:bg-gray-800 rounded-lg shadow-lg flex items-center justify-center hover:bg-brand-turqoise-light dark:hover:bg-brand-turqoise-light border-2 border-gray-200 dark:border-gray-700 hover:border-brand-turqoise-light/50 transition-colors duration-300"
                type="button"
                aria-label="Next feature"
              >
                <svg class="w-6 h-6 text-white dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'

const SwiperNavigation = Navigation

const features = ['visualize', 'discover', 'research', 'alerts']
const activeFeatureIndex = ref(0)

const activeFeature = computed(() => features[activeFeatureIndex.value])

const onSlideChange = (swiper) => {
  activeFeatureIndex.value = swiper.realIndex
}

// Helper function to check if a feature is active
const isFeatureActive = (feature) => {
  return activeFeature.value === feature
}

// Dynamic content based on active feature
const dynamicContent = computed(() => {
  const content = {
    visualize: {
      browserTitle: 'Visualize Your Commute',
      backgroundImage: '/assets/placeholder/map_placeholder.webp',
      stations: [
        { name: 'Siam BTS', classes: 'absolute top-24 left-16 bg-brand-turqoise-light text-brand-navy px-3 py-1 rounded-full text-xs font-semibold shadow-md animate-pulse' },
        { name: 'Chit Lom BTS', classes: 'absolute top-24 right-12 bg-brand-turqoise-light text-brand-navy px-3 py-1 rounded-full text-xs font-semibold shadow-md animate-pulse' },
        { name: 'Asok BTS', classes: 'absolute top-16 right-8 bg-brand-turqoise-light text-brand-navy px-3 py-1 rounded-full text-xs font-semibold shadow-md animate-pulse' }
      ],
      prices: [
        { amount: '5 min walk', classes: 'absolute top-8 left-8 bg-green-100/90 text-green-700 px-3 py-1 rounded-full text-xs font-medium shadow-lg border border-green-200 animate-fadeIn' },
        { amount: '3 min walk', classes: 'absolute top-8 right-20 bg-green-100/90 text-green-700 px-3 py-1 rounded-full text-xs font-medium shadow-lg border border-green-200 animate-fadeIn' },
        { amount: '7 min walk', classes: 'absolute top-36 left-8 bg-yellow-100/90 text-yellow-700 px-3 py-1 rounded-full text-xs font-medium shadow-lg border border-yellow-200 animate-fadeIn' },
        { amount: '4 min walk', classes: 'absolute top-32 right-16 bg-green-100/90 text-green-700 px-3 py-1 rounded-full text-xs font-medium shadow-lg border border-green-200 animate-fadeIn' }
      ],
      dots: [
        { classes: 'absolute top-28 left-20 w-3 h-3 bg-brand-turqoise-light rounded-full border-2 border-white shadow-lg animate-bounce' },
        { classes: 'absolute top-28 right-16 w-3 h-3 bg-brand-turqoise-light rounded-full border-2 border-white shadow-lg animate-bounce' }
      ],
      propertyIcon: '⏱️',
      propertyTitle: 'Modern Condo Near Asok',
      propertyDetails: '2 bed • 2 bath • 3 min walk to BTS',
      propertyPrice: '฿28,000/month',
      badge: 'Perfect Commute'
    },
    discover: {
      browserTitle: 'Discover Hidden Gems',
      backgroundImage: '/assets/placeholder/map_placeholder.webp',
      stations: [
        { name: 'Bang Wa BTS', classes: 'absolute top-20 left-12 bg-purple-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-md animate-pulse' },
        { name: 'Lat Phrao BTS', classes: 'absolute top-16 right-12 bg-purple-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-md animate-pulse' }
      ],
      prices: [
        { amount: '฿18,000/month', classes: 'absolute top-32 left-8 bg-blue-100/90 text-blue-700 px-3 py-1 rounded-full text-xs font-medium shadow-lg border border-blue-200 animate-fadeIn' },
        { amount: '฿22,000/month', classes: 'absolute bottom-32 right-8 bg-blue-100/90 text-blue-700 px-3 py-1 rounded-full text-xs font-medium shadow-lg border border-blue-200 animate-fadeIn' },
        { amount: '฿16,000/month', classes: 'absolute top-28 right-24 bg-blue-100/90 text-blue-700 px-3 py-1 rounded-full text-xs font-medium shadow-lg border border-blue-200 animate-fadeIn' }
      ],
      dots: [
        { classes: 'absolute top-24 left-16 w-3 h-3 bg-purple-500 rounded-full border-2 border-white shadow-lg animate-bounce' },
        { classes: 'absolute bottom-24 right-20 w-3 h-3 bg-purple-500 rounded-full border-2 border-white shadow-lg animate-bounce' }
      ],
      propertyIcon: '💎',
      propertyTitle: 'Hidden Gem in Bang Wa',
      propertyDetails: '1 bed • 1 bath • 2 min walk to BTS',
      propertyPrice: '฿18,000/month',
      badge: 'Great Value'
    },
    research: {
      browserTitle: 'Save Hours of Research',
      backgroundImage: '/assets/placeholder/map_placeholder.webp',
      stations: [
        { name: 'All Lines', classes: 'absolute top-20 left-20 bg-emerald-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-md animate-pulse' }
      ],
      prices: [
        { amount: 'Analyzed', classes: 'absolute top-12 left-12 bg-emerald-100/90 text-emerald-700 px-3 py-1 rounded-full text-xs font-medium shadow-lg border border-emerald-200 animate-fadeIn' },
        { amount: 'Researched', classes: 'absolute top-16 right-16 bg-emerald-100/90 text-emerald-700 px-3 py-1 rounded-full text-xs font-medium shadow-lg border border-emerald-200 animate-fadeIn' }
      ],
      dots: [
        { classes: 'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-emerald-500 rounded-full border-2 border-white shadow-lg animate-ping' }
      ],
      propertyIcon: '🔍',
      propertyTitle: 'Research Complete',
      propertyDetails: 'All transport options • Walking times • Connections',
      propertyPrice: 'Ready to view',
      badge: 'Time Saved'
    },
    alerts: {
      browserTitle: 'Smart Price Alerts',
      backgroundImage: '/assets/placeholder/map_placeholder.webp',
      stations: [
        { name: 'Alert Zone', classes: 'absolute top-20 left-16 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-md animate-pulse' }
      ],
      prices: [
        { amount: 'New!', classes: 'absolute top-8 left-8 bg-red-100/90 text-red-700 px-3 py-1 rounded-full text-xs font-medium shadow-lg border border-red-200 animate-bounce' },
        { amount: 'Price Drop!', classes: 'absolute top-32 right-12 bg-red-100/90 text-red-700 px-3 py-1 rounded-full text-xs font-medium shadow-lg border border-red-200 animate-bounce' }
      ],
      dots: [
        { classes: 'absolute top-24 left-20 w-3 h-3 bg-orange-500 rounded-full border-2 border-white shadow-lg animate-bounce' },
        { classes: 'absolute top-36 right-16 w-3 h-3 bg-red-500 rounded-full border-2 border-white shadow-lg animate-bounce' }
      ],
      propertyIcon: '🔔',
      propertyTitle: 'New Alert: Perfect Match!',
      propertyDetails: '2 bed • Near Asok • Under budget',
      propertyPrice: '฿24,000/month',
      badge: 'Just Listed'
    }
  }
  
  return content[activeFeature.value]
})
</script>

<style scoped>
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