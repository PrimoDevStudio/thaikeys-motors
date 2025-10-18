<template>
  <!-- Persona-Based Property Collections -->
  <section class="bg-white dark:bg-gray-800 transition-colors duration-300">
    <div class="max-w-7xl mx-auto px-3 lg:px-4">
      <!-- Swiper Carousel -->
      <div class="relative">
        <Swiper
          :modules="[SwiperNavigation, SwiperPagination]"
          :slides-per-view="1"
          :space-between="20"
          :centered-slides="false"
          :grab-cursor="true"
          :loop="true"
          :pagination="{
            clickable: true,
            dynamicBullets: true,
          }"
          :navigation="{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }"
          :breakpoints="{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
              centeredSlides: false,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
              centeredSlides: true,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
              centeredSlides: true,
            },
          }"
          class="!pb-16"
        >
          <!-- Digital Nomad Card -->
          <SwiperSlide>
            <div class="bg-white dark:bg-gray-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer h-full">
              <div class="h-[20rem] relative overflow-hidden">
                <NuxtImg
                  src="/assets/placeholder/sample_5.webp"
                  alt="Digital Nomad Favorites"
                  class="w-full h-full object-cover object-bottom transform group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  sizes="sm:100vw md:50vw lg:33vw"
                />
                <div class="absolute top-4 left-4 bg-white/20 backdrop-blur-sm rounded-lg p-2">
                  <svg class="w-6 h-6 text-brand-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div class="absolute top-4 right-4 bg-brand-turqoise-light text-brand-navy px-3 py-1 rounded-full text-base font-semibold">
                  2470 Properties
                </div>
              </div>
              <div class="p-6">
                <h3 class="text-xl font-bold text-brand-navy dark:text-white mb-3">
                  Digital Nomad Favorites
                </h3>
                <p class="text-brand-navy dark:text-gray-300 mb-4 leading-relaxed min-h-[4.5rem]">
                  High-speed WiFi, co-working spaces nearby, flexible lease terms, and modern amenities for remote work.
                </p>
                <div class="flex flex-wrap gap-2">
                  <span class="bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 px-2 py-1 rounded-full text-xs font-medium">Fast WiFi</span>
                  <span class="bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 px-2 py-1 rounded-full text-xs font-medium">Co-working</span>
                  <span class="bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 px-2 py-1 rounded-full text-xs font-medium">Short-term OK</span>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <!-- Family-Friendly Card -->
          <SwiperSlide>
            <div class="bg-white dark:bg-gray-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer h-full">
              <div class="h-[20rem] relative overflow-hidden">
                <NuxtImg
                  src="/assets/placeholder/sample_6.webp"
                  alt="Family-Friendly Homes"
                  class="w-full h-full object-cover object-bottom transform group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  sizes="sm:100vw md:50vw lg:33vw"
                />
                <div class="absolute top-4 left-4 bg-white/20 backdrop-blur-sm rounded-lg p-2">
                  <svg class="w-6 h-6 text-brand-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div class="absolute top-4 right-4 bg-brand-turqoise-light text-brand-navy px-3 py-1 rounded-full text-base font-semibold">
                  1560 Properties
                </div>
              </div>
              <div class="p-6">
                <h3 class="text-xl font-bold text-brand-navy dark:text-white mb-3">
                  Family-Friendly Homes
                </h3>
                <p class="text-brand-navy dark:text-gray-300 mb-4 leading-relaxed min-h-[4.5rem]">
                  Near international schools, playgrounds, quiet neighborhoods, and family-oriented amenities.
                </p>
                <div class="flex flex-wrap gap-2">
                  <span class="bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400 px-2 py-1 rounded-full text-xs font-medium">Schools Nearby</span>
                  <span class="bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400 px-2 py-1 rounded-full text-xs font-medium">Playground</span>
                  <span class="bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400 px-2 py-1 rounded-full text-xs font-medium">Safe Area</span>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <!-- Luxury Living Card -->
          <SwiperSlide>
            <div class="bg-white dark:bg-gray-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer h-full">
              <div class="h-[20rem] relative overflow-hidden">
                <NuxtImg
                  src="/assets/placeholder/sample_7.webp"
                  alt="Luxury Living"
                  class="w-full h-full object-cover object-bottom transform group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  sizes="sm:100vw md:50vw lg:33vw"
                />
                <div class="absolute top-4 left-4 bg-white/20 backdrop-blur-sm rounded-lg p-2">
                  <svg class="w-6 h-6 text-brand-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <div class="absolute top-4 right-4 bg-brand-turqoise-light text-brand-navy px-3 py-1 rounded-full text-base font-semibold">
                  8900 Properties
                </div>
              </div>
              <div class="p-6">
                <h3 class="text-xl font-bold text-brand-navy dark:text-white mb-3">
                  Luxury Living
                </h3>
                <p class="text-brand-navy dark:text-gray-300 mb-4 leading-relaxed min-h-[4.5rem]">
                  Premium amenities, concierge services, high-floor units with stunning views, and exclusive facilities.
                </p>
                <div class="flex flex-wrap gap-2">
                  <span class="bg-purple-100 dark:bg-purple-900/20 text-purple-700 dark:text-purple-400 px-2 py-1 rounded-full text-xs font-medium">Concierge</span>
                  <span class="bg-purple-100 dark:bg-purple-900/20 text-purple-700 dark:text-purple-400 px-2 py-1 rounded-full text-xs font-medium">High Floor</span>
                  <span class="bg-purple-100 dark:bg-purple-900/20 text-purple-700 dark:text-purple-400 px-2 py-1 rounded-full text-xs font-medium">Premium</span>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <!-- Pet Friendly Card -->
          <SwiperSlide>
            <div class="bg-white dark:bg-gray-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer h-full">
              <div class="h-[20rem] relative overflow-hidden">
                <NuxtImg
                  src="/assets/placeholder/sample_12.webp"
                  alt="Pet Friendly"
                  class="w-full h-full object-[20%_50%] object-cover lg:object-left transform group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  sizes="sm:100vw md:50vw lg:33vw"
                />
                <div class="absolute top-4 left-4 bg-white/20 backdrop-blur-sm rounded-lg p-2">
                  <svg class="w-6 h-6 text-brand-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div class="absolute top-4 right-4 bg-brand-turqoise-light text-brand-navy px-3 py-1 rounded-full text-base font-semibold">
                  3200 Properties
                </div>
              </div>
              <div class="p-6">
                <h3 class="text-xl font-bold text-brand-navy dark:text-white mb-3">
                  Pet Friendly
                </h3>
                <p class="text-brand-navy dark:text-gray-300 mb-4 leading-relaxed min-h-[4.5rem]">
                  Pet-friendly properties with nearby parks, pet facilities, and welcoming landlords for your furry friends.
                </p>
                <div class="flex flex-wrap gap-2">
                  <span class="bg-orange-100 dark:bg-orange-900/20 text-orange-700 dark:text-orange-400 px-2 py-1 rounded-full text-xs font-medium">Pets OK</span>
                  <span class="bg-orange-100 dark:bg-orange-900/20 text-orange-700 dark:text-orange-400 px-2 py-1 rounded-full text-xs font-medium">Parks Nearby</span>
                  <span class="bg-orange-100 dark:bg-orange-900/20 text-orange-700 dark:text-orange-400 px-2 py-1 rounded-full text-xs font-medium">Pet Facilities</span>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <!-- Budget Friendly Card -->
          <SwiperSlide>
            <div class="bg-white dark:bg-gray-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer h-full">
              <div class="h-[20rem] relative overflow-hidden">
                <NuxtImg
                  src="/assets/placeholder/sample_13.webp"
                  alt="Budget Friendly"
                  class="w-full h-full object-cover object-bottom transform group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  sizes="sm:100vw md:50vw lg:33vw"
                />
                <div class="absolute top-4 left-4 bg-white/20 backdrop-blur-sm rounded-lg p-2">
                  <svg class="w-6 h-6 text-brand-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div class="absolute top-4 right-4 bg-brand-turqoise-light text-brand-navy px-3 py-1 rounded-full text-base font-semibold">
                  5400 Properties
                </div>
              </div>
              <div class="p-6">
                <h3 class="text-xl font-bold text-brand-navy dark:text-white mb-3">
                  Budget Friendly
                </h3>
                <p class="text-brand-navy dark:text-gray-300 mb-4 leading-relaxed min-h-[4.5rem]">
                  Affordable options without compromising quality. Great value properties perfect for tight budgets.
                </p>
                <div class="flex flex-wrap gap-2">
                  <span class="bg-emerald-100 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 px-2 py-1 rounded-full text-xs font-medium">Affordable</span>
                  <span class="bg-emerald-100 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 px-2 py-1 rounded-full text-xs font-medium">Great Value</span>
                  <span class="bg-emerald-100 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 px-2 py-1 rounded-full text-xs font-medium">Quality</span>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <!-- Short Term Card -->
          <SwiperSlide>
            <div class="bg-white dark:bg-gray-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer h-full">
              <div class="h-[20rem] relative overflow-hidden">
                <NuxtImg
                  src="/assets/placeholder/sample_14.webp"
                  alt="Short Term Rentals"
                  class="w-full h-full object-cover object-bottom transform group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  sizes="sm:100vw md:50vw lg:33vw"
                />
                <div class="absolute top-4 left-4 bg-white/20 backdrop-blur-sm rounded-lg p-2">
                  <svg class="w-6 h-6 text-brand-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div class="absolute top-4 right-4 bg-brand-turqoise-light text-brand-navy px-3 py-1 rounded-full text-base font-semibold">
                  1890 Properties
                </div>
              </div>
              <div class="p-6">
                <h3 class="text-xl font-bold text-brand-navy dark:text-white mb-3">
                  Short Term Rentals
                </h3>
                <p class="text-brand-navy dark:text-gray-300 mb-4 leading-relaxed min-h-[4.5rem]">
                  Flexible short-term leases from 1-6 months. Fully furnished and ready to move in immediately.
                </p>
                <div class="flex flex-wrap gap-2">
                  <span class="bg-pink-100 dark:bg-pink-900/20 text-pink-700 dark:text-pink-400 px-2 py-1 rounded-full text-xs font-medium">Flexible</span>
                  <span class="bg-pink-100 dark:bg-pink-900/20 text-pink-700 dark:text-pink-400 px-2 py-1 rounded-full text-xs font-medium">Furnished</span>
                  <span class="bg-pink-100 dark:bg-pink-900/20 text-pink-700 dark:text-pink-400 px-2 py-1 rounded-full text-xs font-medium">Move-in Ready</span>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <!-- Investment Properties Card -->
          <SwiperSlide>
            <div class="bg-white dark:bg-gray-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer h-full">
              <div class="h-[20rem] relative overflow-hidden">
                <NuxtImg
                  src="/assets/placeholder/sample_15.webp"
                  alt="Investment Properties"
                  class="w-full h-full object-cover object-bottom transform group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  sizes="sm:100vw md:50vw lg:33vw"
                />
                <div class="absolute top-4 left-4 bg-white/20 backdrop-blur-sm rounded-lg p-2">
                  <svg class="w-6 h-6 text-brand-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div class="absolute top-4 right-4 bg-brand-turqoise-light text-brand-navy px-3 py-1 rounded-full text-base font-semibold">
                  4200 Properties
                </div>
              </div>
              <div class="p-6">
                <h3 class="text-xl font-bold text-brand-navy dark:text-white mb-3">
                  Investment Properties
                </h3>
                <p class="text-brand-navy dark:text-gray-300 mb-4 leading-relaxed min-h-[4.5rem]">
                  High-yield properties in prime locations. Perfect for investors seeking strong rental returns.
                </p>
                <div class="flex flex-wrap gap-2">
                  <span class="bg-amber-100 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400 px-2 py-1 rounded-full text-xs font-medium">High Yield</span>
                  <span class="bg-amber-100 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400 px-2 py-1 rounded-full text-xs font-medium">Prime Location</span>
                  <span class="bg-amber-100 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400 px-2 py-1 rounded-full text-xs font-medium">ROI Focused</span>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <!-- Beach Properties Card -->
          <SwiperSlide>
            <div class="bg-white dark:bg-gray-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer h-full">
              <div class="h-[20rem] relative overflow-hidden">
                <NuxtImg
                  src="/assets/placeholder/sample_11.webp"
                  alt="Beach Properties"
                  class="w-full h-full object-cover object-bottom transform group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  sizes="sm:100vw md:50vw lg:33vw"
                />
                <div class="absolute top-4 left-4 bg-white/20 backdrop-blur-sm rounded-lg p-2">
                  <svg class="w-6 h-6 text-brand-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <div class="absolute top-4 right-4 bg-brand-turqoise-light text-brand-navy px-3 py-1 rounded-full text-base font-semibold">
                  2150 Properties
                </div>
              </div>
              <div class="p-6">
                <h3 class="text-xl font-bold text-brand-navy dark:text-white mb-3">
                  Beach Properties
                </h3>
                <p class="text-brand-navy dark:text-gray-300 mb-4 leading-relaxed min-h-[4.5rem]">
                  Stunning beachfront and near-beach properties. Perfect for vacation homes, rental income, or seaside living.
                </p>
                <div class="flex flex-wrap gap-2">
                  <span class="bg-cyan-100 dark:bg-cyan-900/20 text-cyan-700 dark:text-cyan-400 px-2 py-1 rounded-full text-xs font-medium">Ocean View</span>
                  <span class="bg-cyan-100 dark:bg-cyan-900/20 text-cyan-700 dark:text-cyan-400 px-2 py-1 rounded-full text-xs font-medium">Beach Access</span>
                  <span class="bg-cyan-100 dark:bg-cyan-900/20 text-cyan-700 dark:text-cyan-400 px-2 py-1 rounded-full text-xs font-medium">Resort Living</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        <!-- Custom Navigation Arrows -->
        <button 
          class="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 md:w-12 md:h-12 flex bg-brand-navy dark:bg-white rounded-full shadow-lg items-center justify-center hover:bg-brand-turqoise-light dark:hover:bg-brand-turqoise-light transition-colors duration-300 -ml-[8px] lg:-ml-6"
          type="button"
          aria-label="Previous slide"
        >
          <svg class="w-6 h-6 text-white dark:text-brand-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button 
          class="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 md:w-12 md:h-12 flex bg-brand-navy dark:bg-white rounded-full shadow-lg items-center justify-center hover:bg-brand-turqoise-light dark:hover:bg-brand-turqoise-light transition-colors duration-300 -mr-[8px] lg:-mr-6"
          type="button"
          aria-label="Next slide"
        >
          <svg class="w-6 h-6 text-white dark:text-brand-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const SwiperNavigation = Navigation
const SwiperPagination = Pagination
</script>

<style>
/* Custom pagination styles */
.swiper-pagination-bullet {
  @apply bg-brand-navy dark:bg-white opacity-50;
}

.swiper-pagination-bullet-active {
  @apply bg-brand-turqoise-light opacity-100;
}
</style>