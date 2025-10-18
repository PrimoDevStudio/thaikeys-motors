<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 font-sans transition-colors duration-300">

    <!-- Property Header -->
    <section class="pt-8 pb-1 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <!-- Breadcrumb -->
        <div class="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400 mb-6">
          <a href="#" class="hover:text-gray-700 dark:hover:text-gray-300">{{ $t('breadcrumb.home') }}</a>
          <span>›</span>
          <a href="#" class="hover:text-gray-700 dark:hover:text-gray-300">{{ $t('breadcrumb.bangkok_rentals') }}</a>
          <span>›</span>
          <a href="#" class="hover:text-gray-700 dark:hover:text-gray-300">{{ $t('breadcrumb.sukhumvit') }}</a>
          <span>›</span>
          <span class="text-gray-900 dark:text-white">{{ propertyTitle }}</span>
        </div>

        <!-- Property Title & Key Info -->
        <div class="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-8">
          <div class="flex-1">
            <div class="flex items-center space-x-3 mb-4">
              <span class="bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-400 px-3 py-1 rounded-full text-sm font-semibold">
                {{ $t('property.status.available_now') }}
              </span>
              <span class="bg-brand-turqoise-light text-brand-navy px-3 py-1 rounded-full text-sm font-semibold">
                {{ $t('property.status.verified') }}
              </span>
            </div>
            
            <h1 class="text-4xl lg:text-5xl font-bold text-brand-navy dark:text-white mb-4 leading-tight">
              {{ propertyTitle }}
            </h1>
            
            <div class="flex items-center space-x-6 text-gray-600 dark:text-gray-400 mb-6">
              <div class="flex items-center space-x-2">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                <span>{{ propertyLocation }}</span>
              </div>
              <div class="flex items-center space-x-2">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                <span>{{ $t('property.bts_walk_time', { minutes: 2, station: 'Asok BTS' }) }}</span>
              </div>
            </div>

            <div class="flex items-center space-x-8 text-lg">
              <div class="flex items-center space-x-2">
                <svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M5 21V7a2 2 0 012-2h10a2 2 0 012 2v14M9 7h6"/>
                </svg>
                <span class="font-semibold text-brand-navy dark:text-white">{{ $t('property.details.bedrooms', { count: propertyBedrooms }) }}</span>
              </div>
              <div class="flex items-center space-x-2">
                <svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
                <span class="font-semibold text-brand-navy dark:text-white">{{ $t('property.details.bathrooms', { count: propertyBathrooms }) }}</span>
              </div>
              <div class="flex items-center space-x-2">
                <svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V6a2 2 0 012-2h2M4 16v2a2 2 0 002 2h2m8-16h2a2 2 0 012 2v2m-4 12h2a2 2 0 002-2v-2"/>
                </svg>
                <span class="font-semibold text-brand-navy dark:text-white">{{ $t('property.details.area', { sqm: propertyArea }) }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Photo Gallery -->
    <section class="pb-12 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-5 gap-4 h-96 md:h-[500px]">
          <!-- Main Image -->
          <div class="md:col-span-4 bg-cover bg-center bg-no-repeat rounded-2xl relative overflow-hidden group cursor-pointer" style="background-image: url('/assets/placeholder/prop_sample_1.webp');">
            <div class="absolute bottom-4 left-4 text-white">
              <span class="bg-black/50 backdrop-blur-sm px-3 py-2 rounded-lg text-sm font-medium">
                {{ $t('gallery.photo_count', { current: 1, total: 24 }) }}
              </span>
            </div>
            <div class="absolute top-4 right-4">
              <button class="bg-black/50 backdrop-blur-sm px-3 py-2 rounded-lg text-sm font-medium text-white">
                <svg class="w-5 h-5 inline mr-2 mb-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                </svg>
                {{ $t('gallery.view_all_photos') }}
              </button>
            </div>
          </div>
          
          <!-- Contact/Schedule Section -->
          <div class="bg-white dark:bg-gray-700 border-2 border-gray-200 dark:border-gray-600 rounded-2xl p-4 shadow-xl">
            <div class="text-center mb-6 mt-10">
              <div class="text-4xl font-bold text-brand-navy dark:text-white mb-2">{{ formattedPrice }}</div>
              <div class="text-sm text-gray-500 dark:text-gray-400">{{ formattedUSDPrice }}</div>
              <div class="text-lg text-gray-600 dark:text-white">{{ $t('property.pricing.per_month') }}</div>
            </div>
            
            <div class="space-y-4">
              <button class="w-full bg-brand-turqoise-light text-brand-navy py-4 rounded-xl font-semibold hover:bg-teal-300 transition-all duration-200 text-lg shadow-lg hover:shadow-xl">
                {{ $t('property.actions.schedule_viewing') }}
              </button>
              <button class="w-full border-2 border-brand-navy dark:border-white text-brand-navy dark:text-white py-4 rounded-xl font-semibold hover:bg-brand-navy hover:text-white dark:hover:bg-white dark:hover:text-brand-navy transition-all duration-200">
                {{ $t('property.actions.contact_agent') }}
              </button>
              <button class="w-full flex items-center justify-center space-x-2 text-gray-600 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white py-3 transition-colors">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
                <span class="font-medium">{{ $t('property.actions.save_favorites') }}</span>
              </button>
            </div>

            <div class="border-t border-gray-200 dark:border-gray-600 mt-6 pt-6">
              <div class="text-sm text-gray-500 dark:text-gray-400 text-center">
                {{ $t('property.id_label') }}: <span class="font-mono text-brand-navy dark:text-white">{{ propertyId }}</span>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Horizontal Thumbnail Row -->
        <div class="grid grid-cols-5 gap-4 h-[13rem] mt-4">
          <div class="bg-cover bg-center bg-no-repeat rounded-xl relative overflow-hidden cursor-pointer group" style="background-image: url('/assets/placeholder/prop_sample_2.webp');">
            <div class="absolute inset-0 group-hover:bg-black/30 transition-colors"></div>
          </div>
          <div class="bg-cover bg-center bg-no-repeat rounded-xl relative overflow-hidden cursor-pointer group" style="background-image: url('/assets/placeholder/prop_sample_3.webp');">
            <div class="absolute inset-0 group-hover:bg-black/30 transition-colors"></div>
          </div>
          <div class="bg-cover bg-center bg-no-repeat rounded-xl relative overflow-hidden cursor-pointer group" style="background-image: url('/assets/placeholder/prop_sample_4.webp');">
            <div class="absolute inset-0 group-hover:bg-black/30 transition-colors"></div>
          </div>
          <div class="bg-cover bg-center bg-no-repeat rounded-xl relative overflow-hidden cursor-pointer group" style="background-image: url('/assets/placeholder/prop_sample_5.webp');">
            <div class="absolute inset-0 group-hover:bg-black/30 transition-colors"></div>
          </div>
          <div class="bg-cover bg-center bg-no-repeat rounded-xl relative overflow-hidden cursor-pointer group" style="background-image: url('/assets/placeholder/prop_sample_6.webp');">
            <div class="absolute inset-0 group-hover:bg-black/30 transition-colors"></div>
              <div class="absolute inset-0 flex items-center justify-center">
              <span class="bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-lg font-semibold text-sm">+18</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <section class="py-12 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="grid lg:grid-cols-3 gap-6">
          <!-- Left Column - Main Content -->
          <div class="lg:col-span-2 space-y-6">
            
            <!-- Description -->
            <div class="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <h2 class="text-2xl font-bold text-brand-navy dark:text-white mb-6">{{ $t('property.sections.description') }}</h2>
              <div class="prose prose-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                <!-- This content would come from Supabase -->
                <p class="mb-6">
                  {{ propertyDescription }}
                </p>
              </div>
            </div>

            <!-- Key Features -->
            <div class="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <h2 class="text-2xl font-bold text-brand-navy dark:text-white mb-8">{{ $t('property.sections.key_features') }}</h2>
              
              <!-- Features Grid -->
              <div class="grid md:grid-cols-2 gap-8">
                <div class="space-y-6">
                  <!-- Comfort Features -->
                  <div>
                    <h4 class="text-lg font-semibold text-brand-navy dark:text-white mb-4 flex items-center">
                      <div class="w-2 h-6 bg-brand-turqoise-light rounded mr-3"></div>
                      Comfort & Convenience
                    </h4>
                    <div class="space-y-3">
                      <div class="flex items-center space-x-3" v-for="feature in leftFeatures" :key="feature">
                        <div class="w-8 h-8 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center">
                          <svg class="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                          </svg>
                        </div>
                        <span class="text-brand-navy dark:text-white font-medium">{{ $t(`property.features.${feature}`) }}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="space-y-6">
                  <!-- Security & Tech Features -->
                  <div>
                    <h4 class="text-lg font-semibold text-brand-navy dark:text-white mb-4 flex items-center">
                      <div class="w-2 h-6 bg-emerald-500 rounded mr-3"></div>
                      Security & Technology
                    </h4>
                    <div class="space-y-3">
                      <div class="flex items-center space-x-3" v-for="feature in rightFeatures" :key="feature">
                        <div class="w-8 h-8 bg-emerald-100 dark:bg-emerald-900/20 rounded-lg flex items-center justify-center">
                          <svg class="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                          </svg>
                        </div>
                        <span class="text-brand-navy dark:text-white font-medium">{{ $t(`property.features.${feature}`) }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- Bottom Stats Bar -->
              <div class="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                <div class="grid grid-cols-3 gap-6 text-center">
                  <div>
                    <div class="text-2xl font-bold text-brand-navy dark:text-white">2 min</div>
                    <div class="text-sm text-gray-600 dark:text-gray-400">Walk to BTS</div>
                  </div>
                  <div>
                    <div class="text-2xl font-bold text-brand-navy dark:text-white">75 sqm</div>
                    <div class="text-sm text-gray-600 dark:text-gray-400">Living Space</div>
                  </div>
                  <div>
                    <div class="text-2xl font-bold text-brand-navy dark:text-white">35th</div>
                    <div class="text-sm text-gray-600 dark:text-gray-400">Floor Level</div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Building Amenities -->
            <div class="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <h2 class="text-2xl font-bold text-brand-navy dark:text-white mb-6">{{ $t('property.sections.building_amenities') }}</h2>
              <div class="grid md:grid-cols-3 gap-6">
                <div class="text-center p-6 bg-gray-50 dark:bg-gray-700 rounded-xl" v-for="amenity in amenities" :key="amenity.key">
                  <div class="w-12 h-12 bg-brand-turqoise-light rounded-xl flex items-center justify-center mx-auto mb-4">
                    <svg class="w-6 h-6 text-brand-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="amenity.iconPath" />
                    </svg>
                  </div>
                  <h3 class="text-xl font-semibold text-brand-navy dark:text-white mb-2">{{ $t(`property.amenities.${amenity.key}.title`) }}</h3>
                  <p class="text-sm text-gray-600 dark:text-gray-400">{{ $t(`property.amenities.${amenity.key}.description`) }}</p>
                </div>
              </div>
            </div>

            <!-- Location & Transport -->
            <div class="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <h2 class="text-2xl font-bold text-brand-navy dark:text-white mb-6">{{ $t('property.sections.location_transport') }}</h2>
              
              <!-- BTS Info -->
              <div class="bg-gradient-to-r from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-800/20 rounded-xl p-6 mb-8 border border-yellow-200 dark:border-yellow-800">
                <div class="flex items-center space-x-4">
                  <div class="w-16 h-16 bg-brand-turqoise-light rounded-xl flex items-center justify-center">
                    <svg class="w-8 h-8 text-brand-navy" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-xl font-bold text-brand-navy dark:text-white mb-2">{{ btsStationName }}</h3>
                    <p class="text-gray-700 dark:text-gray-300 font-medium">{{ $t('property.bts.walk_info', { minutes: btsWalkTime }) }}</p>
                    <p class="text-gray-600 dark:text-gray-400 text-sm mt-1">{{ $t('property.bts.access_info') }}</p>
                  </div>
                </div>
              </div>

              <!-- Nearby Places -->
              <div class="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 class="font-semibold text-brand-navy dark:text-white mb-4">{{ $t('property.nearby.shopping_dining') }}</h4>
                  <div class="space-y-3">
                    <div class="flex justify-between items-center" v-for="place in nearbyPlaces.shopping" :key="place.name">
                      <span class="text-gray-700 dark:text-gray-300">{{ place.name }}</span>
                      <span class="text-sm text-gray-500 dark:text-gray-400">{{ place.distance }}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 class="font-semibold text-brand-navy dark:text-white mb-4">{{ $t('property.nearby.business_education') }}</h4>
                  <div class="space-y-3">
                    <div class="flex justify-between items-center" v-for="place in nearbyPlaces.business" :key="place.name">
                      <span class="text-gray-700 dark:text-gray-300">{{ place.name }}</span>
                      <span class="text-sm text-gray-500 dark:text-gray-400">{{ place.distance }}</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Interactive Map Placeholder -->
              <div class="mt-8 h-[25.5rem] bg-cover bg-center bg-no-repeat rounded-xl relative" style="background-image: url('/assets/placeholder/prop_single_placeholder.webp');">
                <div class="absolute inset-0 bg-black/20 rounded-xl"></div>
                <div class="absolute inset-0 flex items-center justify-center">
                  <div class="text-center">
                    <svg class="w-12 h-12 text-white mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                    <p class="text-white font-medium">{{ $t('property.map.title') }}</p>
                    <p class="text-sm text-white/80 mt-1">{{ $t('property.map.subtitle') }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Column - Sidebar -->
          <div class="space-y-6">
            
          <!-- Agent Info -->
            <div class="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
              <h3 class="text-xl font-bold text-brand-navy dark:text-white mb-6">{{ $t('property.agent.title') }}</h3>
              <div class="flex items-center space-x-4 mb-6">
                <div class="w-16 h-16 bg-cover bg-center bg-no-repeat rounded-full" style="background-image: url('/assets/placeholder/agent_placeholder.png');"></div>
                <div>
                  <h4 class="font-semibold text-brand-navy dark:text-white text-lg">{{ agentData.name }}</h4>
                  <p class="text-gray-600 dark:text-gray-400">{{ $t('property.agent.role') }}</p>
                  <div class="flex items-center space-x-1 mt-1">
                    <svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                    <span class="text-sm text-gray-600 dark:text-gray-400">{{ $t('property.agent.rating', { rating: agentData.rating, reviews: agentData.reviews }) }}</span>
                  </div>
                </div>
              </div>
              
              <div class="space-y-3 mb-6">
                <div class="flex items-center text-sm text-gray-600 dark:text-gray-400">
                  <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                  <span>{{ agentData.phone }}</span>
                </div>
                <div class="flex items-center text-sm text-gray-600 dark:text-gray-400">
                  <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  <span>{{ agentData.email }}</span>
                </div>
                <div class="flex items-center text-sm text-gray-600 dark:text-gray-400">
                  <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                  </svg>
                  <span>{{ agentData.line }}</span>
                </div>
              </div>
              
              <div class="space-y-3">
                <button class="w-full bg-brand-turqoise-light text-brand-navy py-3 rounded-xl font-semibold hover:bg-teal-300 transition-colors">
                  {{ $t('property.agent.call') }}
                </button>
                <button class="w-full border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 py-3 rounded-xl font-semibold hover:border-gray-400 dark:hover:border-gray-500 transition-colors">
                  {{ $t('property.agent.message') }}
                </button>
                <button class="w-full border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 py-3 rounded-xl font-semibold hover:border-gray-400 dark:hover:border-gray-500 transition-colors">
                  {{ $t('property.actions.schedule_viewing') }}
                </button>
              </div>
            </div>

            <!-- Payment Options -->
            <div class="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
              <h3 class="text-xl font-bold text-brand-navy dark:text-white mb-6">{{ $t('property.payment.title') }}</h3>
              <div class="space-y-4">
                <div class="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-xl border border-yellow-200 dark:border-yellow-800">
                  <div class="flex items-center space-x-3">
                    <div class="w-10 h-10 bg-brand-turqoise-light rounded-lg flex items-center justify-center">
                      <svg class="w-5 h-5 text-brand-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                      </svg>
                    </div>
                    <div>
                      <h4 class="text-xl font-semibold text-brand-navy dark:text-white">{{ $t('property.payment.promptpay.title') }}</h4>
                      <p class="text-xs text-gray-600 dark:text-gray-400">{{ $t('property.payment.promptpay.description') }}</p>
                    </div>
                  </div>
                </div>
                
                <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border border-blue-200 dark:border-blue-800">
                  <div class="flex items-center space-x-3">
                    <div class="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                      <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/>
                      </svg>
                    </div>
                    <div>
                      <h4 class="text-xl font-semibold text-brand-navy dark:text-white">{{ $t('property.payment.cards.title') }}</h4>
                      <p class="text-xs text-gray-600 dark:text-gray-400">{{ $t('property.payment.cards.description') }}</p>
                    </div>
                  </div>
                </div>
                
                <div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-xl border border-green-200 dark:border-green-800">
                  <div class="flex items-center space-x-3">
                    <div class="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                      <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"/>
                      </svg>
                    </div>
                    <div>
                      <h4 class="text-xl font-semibold text-brand-navy dark:text-white">{{ $t('property.payment.transfer.title') }}</h4>
                      <p class="text-xs text-gray-600 dark:text-gray-400">{{ $t('property.payment.transfer.description') }}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="mt-4 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <p class="text-sm text-gray-600 dark:text-gray-100 text-center">
                  <span class="font-semibold">{{ $t('property.payment.deposit') }}:</span> {{ formattedDeposit }} • 
                  <span class="font-semibold">{{ $t('property.payment.key_money') }}:</span> {{ $t('property.payment.none') }}
                </p>
              </div>
            </div>

            <!-- Similar Properties -->
            <div class="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
              <h3 class="text-xl font-bold text-brand-navy dark:text-white mb-6">{{ $t('property.similar.title') }}</h3>
              <div class="space-y-4">   
                <div class="flex space-x-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors cursor-pointer" v-for="similar in similarProperties" :key="similar.id">
                  <div class="w-20 h-20 bg-cover bg-center bg-no-repeat rounded-lg flex-shrink-0" :style="{ backgroundImage: `url('${similar.image}')` }"></div>
                  <div class="flex-1">
                    <h4 class="font-semibold text-brand-navy dark:text-white text-sm mb-1">{{ similar.title }}</h4>
                    <p class="text-xs text-gray-600 dark:text-gray-400 mb-2">{{ similar.bts_info }} • {{ similar.area }}</p>
                    <p class="font-bold text-brand-navy dark:text-white">{{ similar.price }}</p>
                  </div>
                </div>
              </div>
              <button class="w-full mt-4 text-brand-turqoise-light hover:text-teal-500 font-medium py-2 transition-colors">
                {{ $t('property.similar.view_more') }} →
              </button>
            </div>

            <!-- Quick Actions -->
            <div class="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
              <h3 class="text-xl font-bold text-brand-navy dark:text-white mb-6">{{ $t('property.quick_actions.title') }}</h3>
              <div class="space-y-3">
                  <button class="w-full flex items-center justify-center space-x-2 bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300 py-3 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                  <span class="font-medium">{{ $t('property.quick_actions.save') }}</span>
                </button>

                <button class="w-full flex items-center justify-center space-x-2 bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300 py-3 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"/>
                  </svg>
                  <span class="font-medium">{{ $t('property.quick_actions.share') }}</span>
                </button>
                
                <button class="w-full flex items-center justify-center space-x-2 bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300 py-3 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/>
                  </svg>
                  <span class="font-medium">{{ $t('property.quick_actions.print') }}</span>
                </button>
                
                <button class="w-full flex items-center justify-center space-x-2 bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300 py-3 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <span class="font-medium">{{ $t('property.quick_actions.compare') }}</span>
                </button>
              </div>
            </div>

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
  title: 'Luxury 2BR Condo Near Asok BTS - ThaiKeys',
  meta: [
    {
      name: 'description',
      content: 'Stunning 2-bedroom luxury condo just 2 minutes from Asok BTS station. Fully furnished with city views, premium amenities, and flexible payment options. ฿45,000/month.'
    }
  ]
})

// Property data (would come from Supabase/API)
const propertyTitle = ref('Luxury 2BR Condo Near Asok BTS')
const propertyLocation = ref('Sukhumvit 21, Asok, Bangkok')
const propertyBedrooms = ref(2)
const propertyBathrooms = ref(2)
const propertyArea = ref(75)
const propertyPrice = ref(45000)
const propertyDeposit = ref(90000)
const propertyId = ref('#PT4829')
const propertyDescription = ref('Discover luxury living in this stunning 2-bedroom condo located just steps away from Asok BTS station. This modern residence offers an unparalleled urban lifestyle with premium finishes and breathtaking city views. The open-plan layout features floor-to-ceiling windows that flood the space with natural light, showcasing the high-end materials and thoughtful design. The gourmet kitchen boasts premium appliances and sleek countertops, perfect for both everyday living and entertaining.')

// BTS data
const btsStationName = ref('Asok BTS Station')
const btsWalkTime = ref(2)

// Agent data (would come from Supabase)
const agentData = ref({
  name: 'Sarah Wilson',
  rating: 4.8,
  reviews: 127,
  phone: '+66 2 123 4567',
  email: 'sarah@thaikeys.co.th',
  line: '@sarahproperty'
})

// Features data
const leftFeatures = ref(['fully_furnished', 'air_conditioning', 'balcony_view', 'high_speed_wifi'])
const rightFeatures = ref(['washing_machine', 'kitchen_appliances', 'security_24_7', 'parking_space'])

// Amenities data with SVG icon paths
const amenities = ref([
  { 
    key: 'swimming_pool', 
    iconPath: 'M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z'
  },
  { 
    key: 'fitness_center', 
    iconPath: 'M13 10V3L4 14h7v7l9-11h-7z'
  },
  { 
    key: 'concierge', 
    iconPath: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'
  },
  { 
    key: 'business_center', 
    iconPath: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z'
  },
  { 
    key: 'security', 
    iconPath: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
  },
  { 
    key: 'parking', 
    iconPath: 'M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2v0a2 2 0 01-2-2v-2a2 2 0 00-2-2H8z'
  }
])

// Nearby places data
const nearbyPlaces = ref({
  shopping: [
    { name: 'Terminal 21', distance: '3 min walk' },
    { name: 'Exchange Tower', distance: '5 min walk' },
    { name: 'Nana Plaza', distance: '8 min walk' },
    { name: 'EmQuartier', distance: '2 BTS stops' }
  ],
  business: [
    { name: 'Queen Sirikit Convention Center', distance: '1 BTS stop' },
    { name: 'Benchasiri Park', distance: '1 BTS stop' },
    { name: 'NIST International School', distance: '3 BTS stops' },
    { name: 'Bumrungrad Hospital', distance: '2 BTS stops' }
  ]
})

// Similar properties data
const similarProperties = ref([
  {
    id: 1,
    title: 'Modern Condo Near BTS',
    bts_info: '3 min to Asok',
    area: 'Sukhumvit',
    price: '฿25,000/month',
    image: '/assets/placeholder/prop_sample_2.webp'
  },
  {
    id: 2,
    title: 'Luxury Apartment',
    bts_info: '5 min to Phrom Phong',
    area: 'Thonglor',
    price: '฿35,000/month',
    image: '/assets/placeholder/prop_sample_3.webp'
  },
  {
    id: 3,
    title: 'Cozy Studio',
    bts_info: '2 min to Nana',
    area: 'Sukhumvit',
    price: '฿18,000/month',
    image: '/assets/placeholder/prop_sample_4.webp'
  },
    {
    id: 4,
    title: 'Modern Studio',
    bts_info: '5 min to Sathorn',
    area: 'Sukhumvit',
    price: '฿33,000/month',
    image: '/assets/placeholder/prop_sample_5.webp'
  },
    {
    id: 5,
    title: '3 Bedroom Duplex',
    bts_info: '5 min to Sathorn',
    area: 'Sukhumvit',
    price: '฿42,000/month',
    image: '/assets/placeholder/prop_sample_6.webp'
  },
      {
    id: 6,
    title: '2 Bedroom House',
    bts_info: '5 min to Sathorn',
    area: 'Sukhumvit',
    price: '฿24,000/month',
    image: '/assets/placeholder/sample_1.webp'
  }
])

// Computed properties for formatting
const formattedPrice = computed(() => `฿${propertyPrice.value.toLocaleString()}`)
const formattedUSDPrice = computed(() => `≈$${Math.round(propertyPrice.value / 35.5).toLocaleString()}/month`)
const formattedDeposit = computed(() => `฿${propertyDeposit.value.toLocaleString()}`)
</script>