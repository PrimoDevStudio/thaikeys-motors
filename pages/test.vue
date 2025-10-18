<template>
  <div class="p-8">
    <h1 class="text-2xl font-bold mb-4">i18n Test Page (Nuxt 4)</h1>
    
    <div class="space-y-2">
      <p>Current locale: <strong>{{ currentLocale || 'Not available' }}</strong></p>
      <p>Available locales: <strong>{{ localesArray.length > 0 ? localesArray.map(l => l.code || l).join(', ') : 'None found' }}</strong></p>
      <p>Locale names: <strong>{{ localesArray.length > 0 ? localesArray.map(l => l.name || l).join(', ') : 'None found' }}</strong></p>
    </div>

    <div class="mt-6 space-y-2">
      <h2 class="text-xl font-semibold">Translation Test:</h2>
      <p>Navigation Features: <strong>{{ $t('nav.features') }}</strong></p>
      <p>Hero Title: <strong>{{ $t('hero.title_part1') }}</strong></p>
      <p>Search Button: <strong>{{ $t('buttons.search_properties') }}</strong></p>
    </div>

    <div class="mt-6">
      <h2 class="text-xl font-semibold">Language Switcher:</h2>
      <div class="flex gap-2 mt-2">
        <button 
          v-for="availableLocale in localesArray"
          :key="availableLocale.code || availableLocale"
          @click="switchLanguage(availableLocale.code || availableLocale)"
          :class="[
            'px-4 py-2 rounded border',
            (availableLocale.code || availableLocale) === currentLocale 
              ? 'bg-blue-500 text-white' 
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          ]"
        >
          {{ availableLocale.name || availableLocale }}
        </button>
      </div>
    </div>

    <div class="mt-6">
      <h2 class="text-xl font-semibold">Debug Info:</h2>
      <div class="bg-gray-100 p-4 rounded text-sm">
        <p><strong>$i18n type:</strong> {{ typeof $i18n }}</p>
        <p><strong>$i18n keys:</strong> {{ i18nKeys }}</p>
        <p><strong>$i18n.locale type:</strong> {{ typeof $i18n?.locale }}</p>
        <p><strong>$i18n.locales type:</strong> {{ typeof $i18n?.locales }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
// Try different approaches to access i18n
const nuxtApp = useNuxtApp()
const { $i18n } = nuxtApp

// Safe access to current locale
const currentLocale = computed(() => {
  return $i18n?.locale?.value || $i18n?.locale || 'en'
})

// Safe access to locales array
const localesArray = computed(() => {
  if (Array.isArray($i18n?.locales?.value)) {
    return $i18n.locales.value
  }
  if (Array.isArray($i18n?.locales)) {
    return $i18n.locales
  }
  // Fallback to config-defined locales
  return [
    { code: 'en', name: 'English' },
    { code: 'th', name: 'ไทย' }
  ]
})

// Debug info
const i18nKeys = computed(() => {
  if (!$i18n) return 'No $i18n'
  return Object.keys($i18n).join(', ')
})

// Method to switch language
const switchLanguage = async (newLocale) => {
  try {
    if ($i18n?.setLocale) {
      await $i18n.setLocale(newLocale)
    } else if ($i18n?.locale) {
      $i18n.locale.value = newLocale
    }
    console.log('Language switched to:', newLocale)
  } catch (error) {
    console.error('Error switching language:', error)
    // Fallback: try navigation approach
    try {
      await navigateTo(switchLocalePath(newLocale))
    } catch (navError) {
      console.error('Navigation fallback failed:', navError)
    }
  }
}

// Log current state for debugging
onMounted(() => {
  console.log('=== i18n Debug Info ===')
  console.log('$i18n:', $i18n)
  console.log('$i18n type:', typeof $i18n)
  console.log('$i18n.locale:', $i18n?.locale)
  console.log('$i18n.locales:', $i18n?.locales)
  console.log('nuxtApp keys:', Object.keys(nuxtApp))
  console.log('========================')
})
</script>