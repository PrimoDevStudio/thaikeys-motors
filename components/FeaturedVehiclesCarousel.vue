<template>
  <!-- Featured Vehicles Carousel -->
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
            nextEl: '.swiper-button-next-featured',
            prevEl: '.swiper-button-prev-featured',
          }"
          :breakpoints="{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }"
          class="!pb-16"
        >
          <!-- Card 1 - Honda PCX 160 -->
          <SwiperSlide>
            <div class="bg-white dark:bg-gray-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl dark:shadow-2xl transition-all duration-300 group h-full">
              <div class="h-48 relative overflow-hidden">
                <NuxtImg
                  src="/assets/placeholder/2023-honda-pcx-160.webp"
                  alt="Honda PCX 160"
                  class="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  sizes="sm:100vw md:33vw lg:25vw"
                />
                <div class="absolute top-4 left-4">
                  <span class="text-sm font-medium bg-brand-red-light text-white px-2 py-1 rounded">
                    Featured
                  </span>
                </div>
              </div>
              <div class="p-6">
                <h3 class="text-xl font-semibold text-brand-navy dark:text-white mb-2 min-h-[3.5rem] line-clamp-2">
                  Honda PCX 160
                </h3>
                <p class="text-sm text-brand-navy dark:text-gray-200 mb-1">
                  2023 • 5,200 km • Phuket
                </p>
                <p class="text-sm text-gray-500 dark:text-gray-300 mb-3">
                  Automatic • 160cc
                </p>
                <p class="text-lg font-bold text-brand-navy dark:text-white">
                  ฿68,000
                </p>
              </div>
            </div>
          </SwiperSlide>

          <!-- Card 2 - Toyota Fortuner -->
          <SwiperSlide>
            <div class="bg-white dark:bg-gray-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl dark:shadow-2xl transition-all duration-300 group h-full">
              <div class="h-48 relative overflow-hidden">
                <NuxtImg
                  src="/assets/placeholder/2022-Toyota-Fortuner-2.8-V-4WD.webp"
                  alt="Toyota Fortuner"
                  class="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  sizes="sm:100vw md:33vw lg:25vw"
                />
                <div class="absolute top-4 left-4">
                  <span class="text-sm font-medium bg-brand-navy text-white px-2 py-1 rounded">
                    Premium
                  </span>
                </div>
              </div>
              <div class="p-6">
                <h3 class="text-xl font-semibold text-brand-navy dark:text-white mb-2 min-h-[3.5rem] line-clamp-2">
                  Toyota Fortuner 2.8 V 4WD
                </h3>
                <p class="text-sm text-brand-navy dark:text-gray-200 mb-1">
                  2022 • 28,000 km • Bangkok
                </p>
                <p class="text-sm text-gray-500 dark:text-gray-300 mb-3">
                  Automatic • Diesel
                </p>
                <p class="text-lg font-bold text-brand-navy dark:text-white">
                  ฿1,450,000
                </p>
              </div>
            </div>
          </SwiperSlide>

          <!-- Card 3 - Yamaha Aerox -->
          <SwiperSlide>
            <div class="bg-white dark:bg-gray-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl dark:shadow-2xl transition-all duration-300 group h-full">
              <div class="h-48 relative overflow-hidden">
                <NuxtImg
                  src="/assets/placeholder/2024-Yamaha-Aerox-155.webp"
                  alt="Yamaha Aerox"
                  class="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  sizes="sm:100vw md:33vw lg:25vw"
                />
                <div class="absolute top-4 left-4">
                  <span class="text-sm font-medium bg-brand-red-light text-white px-2 py-1 rounded">
                    Hot Deal
                  </span>
                </div>
              </div>
              <div class="p-6">
                <h3 class="text-xl font-semibold text-brand-navy dark:text-white mb-2 min-h-[3.5rem] line-clamp-2">
                  Yamaha Aerox 155
                </h3>
                <p class="text-sm text-brand-navy dark:text-gray-200 mb-1">
                  2024 • 1,800 km • Chiang Mai
                </p>
                <p class="text-sm text-gray-500 dark:text-gray-300 mb-3">
                  Automatic • 155cc
                </p>
                <p class="text-lg font-bold text-brand-navy dark:text-white">
                  ฿79,000
                </p>
              </div>
            </div>
          </SwiperSlide>

          <!-- Card 4 - Honda Civic -->
          <SwiperSlide>
            <div class="bg-white dark:bg-gray-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl dark:shadow-2xl transition-all duration-300 group h-full">
              <div class="h-48 relative overflow-hidden">
                <NuxtImg
                  src="/assets/placeholder/2021-Honda-Civic-RS-Turbo.webp"
                  alt="Honda Civic"
                  class="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  sizes="sm:100vw md:33vw lg:25vw"
                />
                <div class="absolute top-4 left-4">
                  <span class="text-sm font-medium bg-brand-navy text-white px-2 py-1 rounded">
                    Certified
                  </span>
                </div>
              </div>
              <div class="p-6">
                <h3 class="text-xl font-semibold text-brand-navy dark:text-white mb-2 min-h-[3.5rem] line-clamp-2">
                  Honda Civic RS Turbo
                </h3>
                <p class="text-sm text-brand-navy dark:text-gray-200 mb-1">
                  2021 • 35,000 km • Bangkok
                </p>
                <p class="text-sm text-gray-500 dark:text-gray-300 mb-3">
                  Automatic • Petrol
                </p>
                <p class="text-lg font-bold text-brand-navy dark:text-white">
                  ฿890,000
                </p>
              </div>
            </div>
          </SwiperSlide>

          <!-- Card 5 - Kawasaki Ninja -->
          <SwiperSlide>
            <div class="bg-white dark:bg-gray-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl dark:shadow-2xl transition-all duration-300 group h-full">
              <div class="h-48 relative overflow-hidden">
                <NuxtImg
                  src="/assets/placeholder/sample_5.webp"
                  alt="Kawasaki Ninja"
                  class="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  sizes="sm:100vw md:33vw lg:25vw"
                />
                <div class="absolute top-4 left-4">
                  <span class="text-sm font-medium bg-green-500 text-white px-2 py-1 rounded">
                    Like New
                  </span>
                </div>
              </div>
              <div class="p-6">
                <h3 class="text-xl font-semibold text-brand-navy dark:text-white mb-2 min-h-[3.5rem] line-clamp-2">
                  Kawasaki Ninja 400
                </h3>
                <p class="text-sm text-brand-navy dark:text-gray-300 mb-1">
                  2023 • 3,500 km • Phuket
                </p>
                <p class="text-sm text-gray-500 dark:text-gray-400 mb-3">
                  Manual • 400cc
                </p>
                <p class="text-lg font-bold text-brand-navy dark:text-white">
                  ฿185,000
                </p>
              </div>
            </div>
          </SwiperSlide>

          <!-- Card 6 - Isuzu D-Max -->
          <SwiperSlide>
            <div class="bg-white dark:bg-gray-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl dark:shadow-2xl transition-all duration-300 group h-full">
              <div class="h-48 relative overflow-hidden">
                <NuxtImg
                  src="/assets/placeholder/sample_6.webp"
                  alt="Isuzu D-Max"
                  class="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  sizes="sm:100vw md:33vw lg:25vw"
                />
                <div class="absolute top-4 left-4">
                  <span class="text-sm font-medium bg-purple-500 text-white px-2 py-1 rounded">
                    Best Value
                  </span>
                </div>
              </div>
              <div class="p-6">
                <h3 class="text-xl font-semibold text-brand-navy dark:text-white mb-2 min-h-[3.5rem] line-clamp-2">
                  Isuzu D-Max Hi-Lander
                </h3>
                <p class="text-sm text-brand-navy dark:text-gray-300 mb-1">
                  2020 • 52,000 km • Chonburi
                </p>
                <p class="text-sm text-gray-500 dark:text-gray-400 mb-3">
                  Manual • Diesel
                </p>
                <p class="text-lg font-bold text-brand-navy dark:text-white">
                  ฿620,000
                </p>
              </div>
            </div>
          </SwiperSlide>

          <!-- Card 7 - Speedboat -->
          <SwiperSlide>
            <div class="bg-white dark:bg-gray-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl dark:shadow-2xl transition-all duration-300 group h-full">
              <div class="h-48 relative overflow-hidden">
                <NuxtImg
                  src="/assets/placeholder/sample_7.webp"
                  alt="Speedboat"
                  class="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  sizes="sm:100vw md:33vw lg:25vw"
                />
                <div class="absolute top-4 left-4">
                  <span class="text-sm font-medium bg-red-500 text-white px-2 py-1 rounded">
                    Marine
                  </span>
                </div>
              </div>
              <div class="p-6">
                <h3 class="text-xl font-semibold text-brand-navy dark:text-white mb-2 min-h-[3.5rem] line-clamp-2">
                  Yamaha Speedboat 24ft
                </h3>
                <p class="text-sm text-brand-navy dark:text-gray-300 mb-1">
                  2019 • 450 hrs • Phuket
                </p>
                <p class="text-sm text-gray-500 dark:text-gray-400 mb-3">
                  Twin 200HP Engines
                </p>
                <p class="text-lg font-bold text-brand-navy dark:text-white">
                  ฿2,800,000
                </p>
              </div>
            </div>
          </SwiperSlide>

          <!-- Card 8 - Mazda CX-5 -->
          <SwiperSlide>
            <div class="bg-white dark:bg-gray-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl dark:shadow-2xl transition-all duration-300 group h-full">
              <div class="h-48 relative overflow-hidden">
                <NuxtImg
                  src="/assets/placeholder/sample_8.webp"
                  alt="Mazda CX-5"
                  class="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  sizes="sm:100vw md:33vw lg:25vw"
                />
                <div class="absolute top-4 left-4">
                  <span class="text-sm font-medium bg-yellow-500 text-brand-navy px-2 py-1 rounded">
                    Reduced
                  </span>
                </div>
              </div>
              <div class="p-6">
                <h3 class="text-xl font-semibold text-brand-navy dark:text-white mb-2 min-h-[3.5rem] line-clamp-2">
                  Mazda CX-5 2.5 Turbo
                </h3>
                <p class="text-sm text-brand-navy dark:text-gray-300 mb-1">
                  2022 • 18,000 km • Bangkok
                </p>
                <p class="text-sm text-gray-500 dark:text-gray-400 mb-3">
                  Automatic • Petrol
                </p>
                <p class="text-lg font-bold text-brand-navy dark:text-white">
                  ฿1,280,000
                </p>
              </div>
            </div>
          </SwiperSlide>

          <!-- Card 9 - Honda Wave -->
          <SwiperSlide>
            <div class="bg-white dark:bg-gray-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl dark:shadow-2xl transition-all duration-300 group h-full">
              <div class="h-48 relative overflow-hidden">
                <NuxtImg
                  src="/assets/placeholder/sample_9.webp"
                  alt="Honda Wave"
                  class="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  sizes="sm:100vw md:33vw lg:25vw"
                />
                <div class="absolute top-4 left-4">
                  <span class="text-sm font-medium bg-blue-500 text-white px-2 py-1 rounded">
                    Rent-to-Own
                  </span>
                </div>
              </div>
              <div class="p-6">
                <h3 class="text-xl font-semibold text-brand-navy dark:text-white mb-2 min-h-[3.5rem] line-clamp-2">
                  Honda Wave 125i
                </h3>
                <p class="text-sm text-brand-navy dark:text-gray-300 mb-1">
                  2024 • 800 km • Bangkok
                </p>
                <p class="text-sm text-gray-500 dark:text-gray-400 mb-3">
                  Semi-Auto • 125cc
                </p>
                <p class="text-lg font-bold text-brand-navy dark:text-white">
                  ฿1,200/mo
                </p>
              </div>
            </div>
          </SwiperSlide>

          <!-- Card 10 - BMW 3 Series -->
          <SwiperSlide>
            <div class="bg-white dark:bg-gray-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl dark:shadow-2xl transition-all duration-300 group h-full">
              <div class="h-48 relative overflow-hidden">
                <NuxtImg
                  src="/assets/placeholder/sample_10.webp"
                  alt="BMW 3 Series"
                  class="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  sizes="sm:100vw md:33vw lg:25vw"
                />
                <div class="absolute top-4 left-4">
                  <span class="text-sm font-medium bg-indigo-500 text-white px-2 py-1 rounded">
                    Luxury
                  </span>
                </div>
              </div>
              <div class="p-6">
                <h3 class="text-xl font-semibold text-brand-navy dark:text-white mb-2 min-h-[3.5rem] line-clamp-2">
                  BMW 330i M Sport
                </h3>
                <p class="text-sm text-brand-navy dark:text-gray-300 mb-1">
                  2021 • 22,000 km • Bangkok
                </p>
                <p class="text-sm text-gray-500 dark:text-gray-400 mb-3">
                  Automatic • Petrol
                </p>
                <p class="text-lg font-bold text-brand-navy dark:text-white">
                  ฿1,950,000
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        <!-- Custom Navigation Arrows -->
        <button 
          class="swiper-button-prev-featured absolute left-0 top-[43%] -translate-y-1/2 z-10 w-8 h-8 md:w-12 md:h-12 flex bg-brand-navy dark:bg-white rounded-full shadow-lg items-center justify-center hover:bg-brand-red-light dark:hover:bg-brand-red-light transition-colors duration-300 -ml-[8px] lg:-ml-6"
          type="button"
          aria-label="Previous slide"
        >
          <svg class="w-6 h-6 text-white dark:text-brand-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button 
          class="swiper-button-next-featured absolute right-0 top-[43%] -translate-y-1/2 z-10 w-8 h-8 md:w-12 md:h-12 flex bg-brand-navy dark:bg-white rounded-full shadow-lg items-center justify-center hover:bg-brand-red-light dark:hover:bg-brand-red-light transition-colors duration-300 -mr-[8px] lg:-mr-6"
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

<style scoped>
/* Custom pagination styles */
.swiper-pagination-bullet {
  @apply bg-brand-navy dark:bg-white opacity-50;
}

.swiper-pagination-bullet-active {
  @apply bg-brand-red-light opacity-100;
}
</style>