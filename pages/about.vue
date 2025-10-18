<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 font-sans transition-colors duration-300">
    <!-- Hero Section -->
    <section class="relative pt-16 pb-24 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-brand-navy via-blue-800 to-brand-red-light"></div>
      <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h1 class="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          {{ $t('about.hero.title') }}
        </h1>
        <p class="text-xl lg:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
          {{ $t('about.hero.subtitle') }}
        </p>
      </div>
    </section>

    <!-- Mission Section -->
    <section class="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 class="text-4xl lg:text-5xl font-bold text-brand-navy dark:text-white mb-8">
              {{ $t('about.mission.title') }}
            </h2>
            <p class="text-xl text-brand-navy dark:text-gray-300 mb-6 leading-relaxed">
              {{ $t('about.mission.description') }}
            </p>
            <p class="text-lg text-brand-navy dark:text-gray-400 leading-relaxed">
              {{ $t('about.mission.vision') }}
            </p>
          </div>
          <div class="relative">
            <div class="bg-gradient-to-br from-brand-red-light to-blue-400 rounded-3xl p-8 shadow-2xl">
              <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div class="grid grid-cols-2 gap-6">
                  <div class="text-center">
                    <div class="text-4xl font-bold text-white mb-2">50K+</div>
                    <div class="text-blue-100 text-sm">{{ $t('about.stats.properties') }}</div>
                  </div>
                  <div class="text-center">
                    <div class="text-4xl font-bold text-white mb-2">2K+</div>
                    <div class="text-blue-100 text-sm">{{ $t('about.stats.agents') }}</div>
                  </div>
                  <div class="text-center">
                    <div class="text-4xl font-bold text-white mb-2">95%</div>
                    <div class="text-blue-100 text-sm">{{ $t('about.stats.satisfaction') }}</div>
                  </div>
                  <div class="text-center">
                    <div class="text-4xl font-bold text-white mb-2">24/7</div>
                    <div class="text-blue-100 text-sm">{{ $t('about.stats.support') }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section class="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl lg:text-5xl font-bold text-brand-navy dark:text-white mb-6">
            {{ $t('about.values.title') }}
          </h2>
          <p class="text-xl text-brand-navy dark:text-gray-300 max-w-3xl mx-auto">
            {{ $t('about.values.subtitle') }}
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="value in values" :key="value.id" class="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group">
            <div class="w-16 h-16 bg-brand-red-light rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <component :is="value.icon" class="w-8 h-8 text-brand-navy" />
            </div>
            <h3 class="text-2xl font-bold text-brand-navy dark:text-white mb-4">
              {{ $t(`about.values.items.${value.id}.title`) }}
            </h3>
            <p class="text-brand-navy dark:text-gray-300 leading-relaxed">
              {{ $t(`about.values.items.${value.id}.description`) }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl lg:text-5xl font-bold text-brand-navy dark:text-white mb-6">
            {{ $t('about.team.title') }}
          </h2>
          <p class="text-xl text-brand-navy dark:text-gray-300 max-w-3xl mx-auto">
            {{ $t('about.team.subtitle') }}
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="member in teamMembers" :key="member.id" class="text-center group">
            <div class="relative mb-6">
              <div class="w-32 h-32 bg-gradient-to-br from-brand-red-light to-blue-400 rounded-full mx-auto flex items-center justify-center text-4xl font-bold text-brand-navy group-hover:scale-105 transition-transform duration-300">
                {{ member.initials }}
              </div>
            </div>
            <h3 class="text-2xl font-bold text-brand-navy dark:text-white mb-2">{{ member.name }}</h3>
            <p class="text-brand-red-light font-semibold mb-4">{{ $t(`about.team.members.${member.id}.role`) }}</p>
            <p class="text-brand-navy dark:text-gray-300 leading-relaxed">
              {{ $t(`about.team.members.${member.id}.bio`) }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-brand-navy dark:bg-gray-800 transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 class="text-4xl lg:text-5xl font-bold text-white mb-8">
          {{ $t('about.cta.title') }}
        </h2>
        <p class="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
          {{ $t('about.cta.subtitle') }}
        </p>
        <div class="flex flex-col sm:flex-row gap-6 justify-center">
          <NuxtLink :to="localePath('/contact')" class="bg-brand-red-light text-brand-navy px-8 py-4 rounded-xl font-bold text-lg hover:bg-teal-300 transition-colors duration-300 shadow-lg hover:shadow-xl">
            {{ $t('about.cta.contact_us') }}
          </NuxtLink>
          <NuxtLink :to="localePath('/agents')" class="border-2 border-brand-red-light text-brand-red-light px-8 py-4 rounded-xl font-bold text-lg hover:bg-brand-red-light hover:text-brand-navy transition-colors duration-300">
            {{ $t('about.cta.join_team') }}
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Import i18n composables
const { t: $t } = useI18n()
const localePath = useLocalePath()

// Meta tags
useHead({
  title: $t('about.meta.title'),
  meta: [
    {
      name: 'description',
      content: $t('about.meta.description')
    }
  ]
})

// Values data
const values = ref([
  {
    id: 'innovation',
    icon: 'svg' // We'll use inline SVG
  },
  {
    id: 'transparency',
    icon: 'svg'
  },
  {
    id: 'excellence',
    icon: 'svg'
  },
  {
    id: 'community',
    icon: 'svg'
  },
  {
    id: 'technology',
    icon: 'svg'
  },
  {
    id: 'trust',
    icon: 'svg'
  }
])

// Team members data
const teamMembers = ref([
  {
    id: 'ceo',
    name: 'Ariya Thanankit',
    initials: 'AT'
  },
  {
    id: 'cto',
    name: 'Sarah Chen',
    initials: 'SC'
  },
  {
    id: 'head_sales',
    name: 'Michael Rodriguez',
    initials: 'MR'
  }
])
</script>