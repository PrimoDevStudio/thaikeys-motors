<template>
  <!-- Browse by Category Section -->
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
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }"
          class="!pb-16"
        >
          <!-- Cars Card -->
          <SwiperSlide>
            <div class="bg-white dark:bg-gray-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl dark:shadow-2xl transition-all duration-300 group cursor-pointer h-full">
              <div class="h-[20rem] relative overflow-hidden">
                <NuxtImg
                  src="/assets/placeholder/category-cars.webp"
                  alt="Cars"
                  class="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  sizes="sm:100vw md:50vw lg:33vw"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div class="absolute top-4 left-4 bg-white/20 backdrop-blur-sm rounded-lg p-2">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div class="absolute bottom-0 left-0 right-0 p-6">
                  <h3 class="text-3xl font-bold text-white mb-2">
                    Cars
                  </h3>
                  <p class="text-white/90 text-base font-medium">
                    15,240 vehicles available
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <!-- Motorcycles Card -->
          <SwiperSlide>
            <div class="bg-white dark:bg-gray-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl dark:shadow-2xl transition-all duration-300 group cursor-pointer h-full">
              <div class="h-[20rem] relative overflow-hidden">
                <NuxtImg
                  src="/assets/placeholder/category-motorcycles.webp"
                  alt="Motorcycles"
                  class="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  sizes="sm:100vw md:50vw lg:33vw"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div class="absolute top-4 left-4 bg-white/20 backdrop-blur-sm rounded-lg p-2">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div class="absolute bottom-0 left-0 right-0 p-6">
                  <h3 class="text-3xl font-bold text-white mb-2">
                    Motorcycles
                  </h3>
                  <p class="text-white/90 text-base font-medium">
                    28,450 vehicles available
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <!-- Commercial Card -->
          <SwiperSlide>
            <div class="bg-white dark:bg-gray-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl dark:shadow-2xl transition-all duration-300 group cursor-pointer h-full">
              <div class="h-[20rem] relative overflow-hidden">
                <NuxtImg
                  src="/assets/placeholder/category-commercial.webp"
                  alt="Commercial"
                  class="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  sizes="sm:100vw md:50vw lg:33vw"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div class="absolute top-4 left-4 bg-white/20 backdrop-blur-sm rounded-lg p-2">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div class="absolute bottom-0 left-0 right-0 p-6">
                  <h3 class="text-3xl font-bold text-white mb-2">
                    Commercial
                  </h3>
                  <p class="text-white/90 text-base font-medium">
                    4,890 vehicles available
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <!-- Marine Card -->
          <SwiperSlide>
            <div class="bg-white dark:bg-gray-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl dark:shadow-2xl transition-all duration-300 group cursor-pointer h-full">
              <div class="h-[20rem] relative overflow-hidden">
                <NuxtImg
                  src="/assets/placeholder/category-marine.webp"
                  alt="Marine"
                  class="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  sizes="sm:100vw md:50vw lg:33vw"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div class="absolute top-4 left-4 bg-white/20 backdrop-blur-sm rounded-lg p-2">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <div class="absolute bottom-0 left-0 right-0 p-6">
                  <h3 class="text-3xl font-bold text-white mb-2">
                    Marine
                  </h3>
                  <p class="text-white/90 text-base font-medium">
                    1,240 vehicles available
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <!-- Rent To Own Card -->
          <SwiperSlide>
            <div class="bg-white dark:bg-gray-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl dark:shadow-2xl transition-all duration-300 group cursor-pointer h-full">
              <div class="h-[20rem] relative overflow-hidden">
                <NuxtImg
                  src="/assets/placeholder/category-rent-to-own.webp"
                  alt="Rent To Own"
                  class="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  sizes="sm:100vw md:50vw lg:33vw"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div class="absolute top-4 left-4 bg-white/20 backdrop-blur-sm rounded-lg p-2">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div class="absolute top-4 right-4">
                  <span class="bg-brand-red-light text-white px-3 py-1 rounded-full text-sm font-bold">
                    Featured
                  </span>
                </div>
                <div class="absolute bottom-0 left-0 right-0 p-6">
                  <h3 class="text-3xl font-bold text-white mb-2">
                    Rent To Own
                  </h3>
                  <p class="text-white/90 text-base font-medium">
                    3,680 vehicles available
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>

        </Swiper>

        <!-- Custom Navigation Arrows -->
        <button 
          class="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 md:w-12 md:h-12 flex bg-brand-navy dark:bg-white rounded-full shadow-lg items-center justify-center hover:bg-brand-red-light dark:hover:bg-brand-red-light transition-colors duration-300 -ml-[8px] lg:-ml-6"
          type="button"
          aria-label="Previous slide"
        >
          <svg class="w-6 h-6 text-white dark:text-brand-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button 
          class="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 md:w-12 md:h-12 flex bg-brand-navy dark:bg-white rounded-full shadow-lg items-center justify-center hover:bg-brand-red-light dark:hover:bg-brand-red-light transition-colors duration-300 -mr-[8px] lg:-mr-6"
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
  @apply bg-brand-red-light opacity-100;
}
</style>