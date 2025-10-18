<template>
  <!-- Featured Properties Carousel -->
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
          <!-- Card 1 -->
          <SwiperSlide>
            <div class="bg-white dark:bg-gray-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl dark:shadow-2xl transition-all duration-300 group h-full">
              <div class="h-48 relative overflow-hidden">
                <NuxtImg
                  src="/assets/placeholder/sample_1.webp"
                  alt="Altitude Forest Onnut"
                  class="w-full h-full object-cover object-bottom transform group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  sizes="sm:100vw md:33vw lg:25vw"
                />
                <div class="absolute top-4 left-4">
                  <span class="text-sm font-medium bg-brand-turqoise-light text-brand-navy px-2 py-1 rounded">
                    {{ $t('common.new_project') }}
                  </span>
                </div>
              </div>
              <div class="p-6">
                <h3 class="text-xl font-semibold text-brand-navy dark:text-white mb-2 min-h-[3.5rem] line-clamp-2">
                  Altitude Forest Onnut
                </h3>
                <p class="text-sm text-brand-navy dark:text-gray-300 mb-3">
                  Bang Na, Bangkok
                </p>
                <p class="text-lg font-bold text-brand-navy dark:text-white">
                  {{ $t('common.from') }} ฿1,890,000
                </p>
                <p class="text-sm text-brand-navy dark:text-gray-300 mt-1">≈ $53,000</p>
              </div>
            </div>
          </SwiperSlide>

          <!-- Card 2 -->
          <SwiperSlide>
            <div class="bg-white dark:bg-gray-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl dark:shadow-2xl transition-all duration-300 group h-full">
              <div class="h-48 relative overflow-hidden">
                <NuxtImg
                  src="/assets/placeholder/sample_2.webp"
                  alt="Sansiri Ekkamai"
                  class="w-full h-full object-cover object-bottom transform group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  sizes="sm:100vw md:33vw lg:25vw"
                />
                <div class="absolute top-4 left-4">
                  <span class="text-sm font-medium bg-brand-navy text-white px-2 py-1 rounded">
                    {{ $t('common.premium') }}
                  </span>
                </div>
              </div>
              <div class="p-6">
                <h3 class="text-xl font-semibold text-brand-navy dark:text-white mb-2 min-h-[3.5rem] line-clamp-2">
                  Sansiri Ekkamai
                </h3>
                <p class="text-sm text-brand-navy dark:text-gray-300 mb-3">
                  Ekkamai, Bangkok
                </p>
                <p class="text-lg font-bold text-brand-navy dark:text-white">
                  {{ $t('common.from') }} ฿4,500,000
                </p>
                <p class="text-sm text-brand-navy dark:text-gray-300 mt-1">≈ $126,000</p>
              </div>
            </div>
          </SwiperSlide>

          <!-- Card 3 -->
          <SwiperSlide>
            <div class="bg-white dark:bg-gray-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl dark:shadow-2xl transition-all duration-300 group h-full">
              <div class="h-48 relative overflow-hidden">
                <NuxtImg
                  src="/assets/placeholder/sample_3.webp"
                  alt="The Lofts Silom"
                  class="w-full h-full object-cover object-bottom transform group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  sizes="sm:100vw md:33vw lg:25vw"
                />
                <div class="absolute top-4 left-4">
                  <span class="text-sm font-medium bg-brand-turqoise-light text-brand-navy px-2 py-1 rounded">
                    {{ $t('common.hot_sale') }}
                  </span>
                </div>
              </div>
              <div class="p-6">
                <h3 class="text-xl font-semibold text-brand-navy dark:text-white mb-2 min-h-[3.5rem] line-clamp-2">
                  The Lofts Silom
                </h3>
                <p class="text-sm text-brand-navy dark:text-gray-300 mb-3">
                  Silom, Bangkok
                </p>
                <p class="text-lg font-bold text-brand-navy dark:text-white">
                  {{ $t('common.from') }} ฿2,890,000
                </p>
                <p class="text-sm text-brand-navy dark:text-gray-300 mt-1">≈ $81,000</p>
              </div>
            </div>
          </SwiperSlide>

          <!-- Card 4 -->
          <SwiperSlide>
            <div class="bg-white dark:bg-gray-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl dark:shadow-2xl transition-all duration-300 group h-full">
              <div class="h-48 relative overflow-hidden">
                <NuxtImg
                  src="/assets/placeholder/sample_4.webp"
                  alt="Park Origin Thonglor"
                  class="w-full h-full object-cover object-bottom transform group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  sizes="sm:100vw md:33vw lg:25vw"
                />
                <div class="absolute top-4 left-4">
                  <span class="text-sm font-medium bg-brand-navy text-white px-2 py-1 rounded">
                    {{ $t('common.luxury') }}
                  </span>
                </div>
              </div>
              <div class="p-6">
                <h3 class="text-xl font-semibold text-brand-navy dark:text-white mb-2 min-h-[3.5rem] line-clamp-2">
                  Park Origin Thonglor
                </h3>
                <p class="text-sm text-brand-navy dark:text-gray-300 mb-3">
                  Thonglor, Bangkok
                </p>
                <p class="text-lg font-bold text-brand-navy dark:text-white">
                  {{ $t('common.from') }} ฿8,500,000
                </p>
                <p class="text-sm text-brand-navy dark:text-gray-300 mt-1">≈ $238,000</p>
              </div>
            </div>
          </SwiperSlide>

          <!-- Card 5 -->
          <SwiperSlide>
            <div class="bg-white dark:bg-gray-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl dark:shadow-2xl transition-all duration-300 group h-full">
              <div class="h-48 relative overflow-hidden">
                <NuxtImg
                  src="/assets/placeholder/sample_5.webp"
                  alt="Noble Ploenchit"
                  class="w-full h-full object-cover object-bottom transform group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  sizes="sm:100vw md:33vw lg:25vw"
                />
                <div class="absolute top-4 left-4">
                  <span class="text-sm font-medium bg-green-500 text-white px-2 py-1 rounded">
                    Ready to Move
                  </span>
                </div>
              </div>
              <div class="p-6">
                <h3 class="text-xl font-semibold text-brand-navy dark:text-white mb-2 min-h-[3.5rem] line-clamp-2">
                  Noble Ploenchit
                </h3>
                <p class="text-sm text-brand-navy dark:text-gray-300 mb-3">
                  Ploenchit, Bangkok
                </p>
                <p class="text-lg font-bold text-brand-navy dark:text-white">
                  {{ $t('common.from') }} ฿6,200,000
                </p>
                <p class="text-sm text-brand-navy dark:text-gray-300 mt-1">≈ $174,000</p>
              </div>
            </div>
          </SwiperSlide>

          <!-- Card 6 -->
          <SwiperSlide>
            <div class="bg-white dark:bg-gray-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl dark:shadow-2xl transition-all duration-300 group h-full">
              <div class="h-48 relative overflow-hidden">
                <NuxtImg
                  src="/assets/placeholder/sample_6.webp"
                  alt="Whizdom Connect Sukhumvit"
                  class="w-full h-full object-cover object-bottom transform group-hover:scale-105 transition-transform duration-700"
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
                  Whizdom Connect Sukhumvit
                </h3>
                <p class="text-sm text-brand-navy dark:text-gray-300 mb-3">
                  Punnawithi, Bangkok
                </p>
                <p class="text-lg font-bold text-brand-navy dark:text-white">
                  {{ $t('common.from') }} ฿2,100,000
                </p>
                <p class="text-sm text-brand-navy dark:text-gray-300 mt-1">≈ $59,000</p>
              </div>
            </div>
          </SwiperSlide>

          <!-- Card 7 -->
          <SwiperSlide>
            <div class="bg-white dark:bg-gray-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl dark:shadow-2xl transition-all duration-300 group h-full">
              <div class="h-48 relative overflow-hidden">
                <NuxtImg
                  src="/assets/placeholder/sample_7.webp"
                  alt="The Reserve Phahol-Pradipat"
                  class="w-full h-full object-cover object-bottom transform group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  sizes="sm:100vw md:33vw lg:25vw"
                />
                <div class="absolute top-4 left-4">
                  <span class="text-sm font-medium bg-red-500 text-white px-2 py-1 rounded">
                    Last Units
                  </span>
                </div>
              </div>
              <div class="p-6">
                <h3 class="text-xl font-semibold text-brand-navy dark:text-white mb-2 min-h-[3.5rem] line-clamp-2">
                  The Reserve Phahol-Pradipat
                </h3>
                <p class="text-sm text-brand-navy dark:text-gray-300 mb-3">
                  Phahol, Bangkok
                </p>
                <p class="text-lg font-bold text-brand-navy dark:text-white">
                  {{ $t('common.from') }} ฿3,450,000
                </p>
                <p class="text-sm text-brand-navy dark:text-gray-300 mt-1">≈ $97,000</p>
              </div>
            </div>
          </SwiperSlide>

          <!-- Card 8 -->
          <SwiperSlide>
            <div class="bg-white dark:bg-gray-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl dark:shadow-2xl transition-all duration-300 group h-full">
              <div class="h-48 relative overflow-hidden">
                <NuxtImg
                  src="/assets/placeholder/sample_8.webp"
                  alt="Life Asoke-Rama 9"
                  class="w-full h-full object-cover object-bottom transform group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  sizes="sm:100vw md:33vw lg:25vw"
                />
                <div class="absolute top-4 left-4">
                  <span class="text-sm font-medium bg-yellow-500 text-brand-navy px-2 py-1 rounded">
                    Special Offer
                  </span>
                </div>
              </div>
              <div class="p-6">
                <h3 class="text-xl font-semibold text-brand-navy dark:text-white mb-2 min-h-[3.5rem] line-clamp-2">
                  Life Asoke-Rama 9
                </h3>
                <p class="text-sm text-brand-navy dark:text-gray-300 mb-3">
                  Rama 9, Bangkok
                </p>
                <p class="text-lg font-bold text-brand-navy dark:text-white">
                  {{ $t('common.from') }} ฿2,750,000
                </p>
                <p class="text-sm text-brand-navy dark:text-gray-300 mt-1">≈ $77,000</p>
              </div>
            </div>
          </SwiperSlide>

          <!-- Card 9 -->
          <SwiperSlide>
            <div class="bg-white dark:bg-gray-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl dark:shadow-2xl transition-all duration-300 group h-full">
              <div class="h-48 relative overflow-hidden">
                <NuxtImg
                  src="/assets/placeholder/sample_9.webp"
                  alt="Quintara Treehaus Sukhumvit 42"
                  class="w-full h-full object-cover object-bottom transform group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  sizes="sm:100vw md:33vw lg:25vw"
                />
                <div class="absolute top-4 left-4">
                  <span class="text-sm font-medium bg-blue-500 text-white px-2 py-1 rounded">
                    Near BTS
                  </span>
                </div>
              </div>
              <div class="p-6">
                <h3 class="text-xl font-semibold text-brand-navy dark:text-white mb-2 min-h-[3.5rem] line-clamp-2">
                  Quintara Treehaus Sukhumvit 42
                </h3>
                <p class="text-sm text-brand-navy dark:text-gray-300 mb-3">
                  Ekkamai, Bangkok
                </p>
                <p class="text-lg font-bold text-brand-navy dark:text-white">
                  {{ $t('common.from') }} ฿5,890,000
                </p>
                <p class="text-sm text-brand-navy dark:text-gray-300 mt-1">≈ $165,000</p>
              </div>
            </div>
          </SwiperSlide>

          <!-- Card 10 -->
          <SwiperSlide>
            <div class="bg-white dark:bg-gray-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl dark:shadow-2xl transition-all duration-300 group h-full">
              <div class="h-48 relative overflow-hidden">
                <NuxtImg
                  src="/assets/placeholder/sample_10.webp"
                  alt="Cloud Residences SKV23"
                  class="w-full h-full object-cover object-bottom transform group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  sizes="sm:100vw md:33vw lg:25vw"
                />
                <div class="absolute top-4 left-4">
                  <span class="text-sm font-medium bg-indigo-500 text-white px-2 py-1 rounded">
                    High Floor
                  </span>
                </div>
              </div>
              <div class="p-6">
                <h3 class="text-xl font-semibold text-brand-navy dark:text-white mb-2 min-h-[3.5rem] line-clamp-2">
                  Cloud Residences SKV23
                </h3>
                <p class="text-sm text-brand-navy dark:text-gray-300 mb-3">
                  Asoke, Bangkok
                </p>
                <p class="text-lg font-bold text-brand-navy dark:text-white">
                  {{ $t('common.from') }} ฿7,200,000
                </p>
                <p class="text-sm text-brand-navy dark:text-gray-300 mt-1">≈ $202,000</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        <!-- Custom Navigation Arrows -->
        <button 
          class="swiper-button-prev-featured absolute left-0 top-[43%] -translate-y-1/2 z-10 w-8 h-8 md:w-12 md:h-12 flex bg-brand-navy dark:bg-white rounded-full shadow-lg items-center justify-center hover:bg-brand-turqoise-light dark:hover:bg-brand-turqoise-light transition-colors duration-300 -ml-[8px] lg:-ml-6"
          type="button"
          aria-label="Previous slide"
        >
          <svg class="w-6 h-6 text-white dark:text-brand-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button 
          class="swiper-button-next-featured absolute right-0 top-[43%] -translate-y-1/2 z-10 w-8 h-8 md:w-12 md:h-12 flex bg-brand-navy dark:bg-white rounded-full shadow-lg items-center justify-center hover:bg-brand-turqoise-light dark:hover:bg-brand-turqoise-light transition-colors duration-300 -mr-[8px] lg:-mr-6"
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
  @apply bg-brand-turqoise-light opacity-100;
}
</style>