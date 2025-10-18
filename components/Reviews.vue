<template>
  <!-- Expert Vehicle Reviews Section -->
  <section class="py-0 bg-white dark:bg-gray-800 transition-colors duration-300">
    <div class="max-w-7xl mx-auto px-3 lg:px-4">

      <!-- Video Carousel -->
      <div class="relative">
        <Swiper
          :modules="[SwiperNavigation]"
          :slides-per-view="1"
          :space-between="20"
          :grab-cursor="true"
          :loop="true"
          :navigation="{
            nextEl: '.swiper-button-next-reviews',
            prevEl: '.swiper-button-prev-reviews',
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
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }"
        >
          <!-- Video Card 1 -->
          <SwiperSlide>
            <div class="group cursor-pointer">
              <div class="relative rounded-2xl overflow-hidden bg-black aspect-[9/16] mb-3">
                <NuxtImg
                  src="/assets/placeholder/review-thumbnail-1.webp"
                  alt="Honda PCX 160 Review"
                  class="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                  loading="lazy"
                  sizes="sm:100vw md:50vw lg:25vw"
                />
                <!-- Play Button Overlay -->
                <div class="absolute inset-0 flex items-center justify-center">
                  <div class="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-xl">
                    <svg class="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
                <!-- Duration Badge -->
                <div class="absolute bottom-3 right-3 bg-black/80 text-white px-2 py-1 rounded text-xs font-semibold">
                  12:45
                </div>
              </div>
              <h3 class="text-base font-semibold text-brand-navy dark:text-white mb-1 line-clamp-2 group-hover:text-brand-red-light transition-colors duration-300">
                2025 Honda PCX 160 Full Review
              </h3>
              <p class="text-sm text-gray-600 dark:text-gray-400">
                245K views • 2 days ago
              </p>
            </div>
          </SwiperSlide>

          <!-- Video Card 2 -->
          <SwiperSlide>
            <div class="group cursor-pointer">
              <div class="relative rounded-2xl overflow-hidden bg-black aspect-[9/16] mb-3">
                <NuxtImg
                  src="/assets/placeholder/review-thumbnail-2.webp"
                  alt="Toyota Fortuner Review"
                  class="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                  loading="lazy"
                  sizes="sm:100vw md:50vw lg:25vw"
                />
                <div class="absolute inset-0 flex items-center justify-center">
                  <div class="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-xl">
                    <svg class="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
                <div class="absolute bottom-3 right-3 bg-black/80 text-white px-2 py-1 rounded text-xs font-semibold">
                  15:32
                </div>
              </div>
              <h3 class="text-base font-semibold text-brand-navy dark:text-white mb-1 line-clamp-2 group-hover:text-brand-red-light transition-colors duration-300">
                Toyota Fortuner 2.8 V - Is It Worth It?
              </h3>
              <p class="text-sm text-gray-600 dark:text-gray-400">
                180K views • 5 days ago
              </p>
            </div>
          </SwiperSlide>

          <!-- Video Card 3 -->
          <SwiperSlide>
            <div class="group cursor-pointer">
              <div class="relative rounded-2xl overflow-hidden bg-black aspect-[9/16] mb-3">
                <NuxtImg
                  src="/assets/placeholder/review-thumbnail-3.webp"
                  alt="Yamaha Aerox Review"
                  class="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                  loading="lazy"
                  sizes="sm:100vw md:50vw lg:25vw"
                />
                <div class="absolute inset-0 flex items-center justify-center">
                  <div class="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-xl">
                    <svg class="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
                <div class="absolute bottom-3 right-3 bg-black/80 text-white px-2 py-1 rounded text-xs font-semibold">
                  10:18
                </div>
              </div>
              <h3 class="text-base font-semibold text-brand-navy dark:text-white mb-1 line-clamp-2 group-hover:text-brand-red-light transition-colors duration-300">
                Yamaha Aerox 155 - Best Bang For Buck?
              </h3>
              <p class="text-sm text-gray-600 dark:text-gray-400">
                320K views • 1 week ago
              </p>
            </div>
          </SwiperSlide>

          <!-- Video Card 4 -->
          <SwiperSlide>
            <div class="group cursor-pointer">
              <div class="relative rounded-2xl overflow-hidden bg-black aspect-[9/16] mb-3">
                <NuxtImg
                  src="/assets/placeholder/review-thumbnail-4.webp"
                  alt="Isuzu D-Max Review"
                  class="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                  loading="lazy"
                  sizes="sm:100vw md:50vw lg:25vw"
                />
                <div class="absolute inset-0 flex items-center justify-center">
                  <div class="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-xl">
                    <svg class="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
                <div class="absolute bottom-3 right-3 bg-black/80 text-white px-2 py-1 rounded text-xs font-semibold">
                  18:24
                </div>
              </div>
              <h3 class="text-base font-semibold text-brand-navy dark:text-white mb-1 line-clamp-2 group-hover:text-brand-red-light transition-colors duration-300">
                Isuzu D-Max Hi-Lander Complete Review
              </h3>
              <p class="text-sm text-gray-600 dark:text-gray-400">
                156K views • 3 days ago
              </p>
            </div>
          </SwiperSlide>

          <!-- Video Card 5 -->
          <SwiperSlide>
            <div class="group cursor-pointer">
              <div class="relative rounded-2xl overflow-hidden bg-black aspect-[9/16] mb-3">
                <NuxtImg
                  src="/assets/placeholder/review-thumbnail-5.webp"
                  alt="Kawasaki Ninja Review"
                  class="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                  loading="lazy"
                  sizes="sm:100vw md:50vw lg:25vw"
                />
                <div class="absolute inset-0 flex items-center justify-center">
                  <div class="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-xl">
                    <svg class="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
                <div class="absolute bottom-3 right-3 bg-black/80 text-white px-2 py-1 rounded text-xs font-semibold">
                  14:56
                </div>
              </div>
              <h3 class="text-base font-semibold text-brand-navy dark:text-white mb-1 line-clamp-2 group-hover:text-brand-red-light transition-colors duration-300">
                Kawasaki Ninja 400 - Track Day Review
              </h3>
              <p class="text-sm text-gray-600 dark:text-gray-400">
                412K views • 1 week ago
              </p>
            </div>
          </SwiperSlide>

          <!-- Video Card 6 -->
          <SwiperSlide>
            <div class="group cursor-pointer">
              <div class="relative rounded-2xl overflow-hidden bg-black aspect-[9/16] mb-3">
                <NuxtImg
                  src="/assets/placeholder/review-thumbnail-6.webp"
                  alt="Ducati Review"
                  class="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                  loading="lazy"
                  sizes="sm:100vw md:50vw lg:25vw"
                />
                <div class="absolute inset-0 flex items-center justify-center">
                  <div class="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-xl">
                    <svg class="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
                <div class="absolute bottom-3 right-3 bg-black/80 text-white px-2 py-1 rounded text-xs font-semibold">
                  20:15
                </div>
              </div>
              <h3 class="text-base font-semibold text-brand-navy dark:text-white mb-1 line-clamp-2 group-hover:text-brand-red-light transition-colors duration-300">
                Ducati Panigale V2 - Dream Bike Test
              </h3>
              <p class="text-sm text-gray-600 dark:text-gray-400">
                890K views • 2 weeks ago
              </p>
            </div>
          </SwiperSlide>

        </Swiper>

        <!-- Custom Navigation Arrows -->
        <button 
          class="swiper-button-prev-reviews absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 flex bg-brand-navy dark:bg-white rounded-full shadow-lg items-center justify-center hover:bg-brand-red-light dark:hover:bg-brand-red-light transition-colors duration-300 -ml-[8px] lg:-ml-6"
          type="button"
          aria-label="Previous video"
        >
          <svg class="w-6 h-6 text-white dark:text-brand-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button 
          class="swiper-button-next-reviews absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 flex bg-brand-navy dark:bg-white rounded-full shadow-lg items-center justify-center hover:bg-brand-red-light dark:hover:bg-brand-red-light transition-colors duration-300 -mr-[8px] lg:-mr-6"
          type="button"
          aria-label="Next video"
        >
          <svg class="w-6 h-6 text-white dark:text-brand-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

const SwiperNavigation = Navigation
</script>

<style scoped>
/* No custom styles needed - everything is handled with Tailwind */
</style>