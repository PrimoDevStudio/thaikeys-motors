<template>
  <div class="relative">
    <button
      @click="toggleTheme"
      class="flex items-center justify-center w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 group focus:outline-none"
      :title="isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'"
    >
      <!-- Sun Icon (Light Mode) -->
      <svg
        v-if="!isDark"
        class="w-5 h-5 text-gray-600 dark:text-gray-300 group-hover:text-brand-red-light transition-colors duration-300"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
      
      <!-- Moon Icon (Dark Mode) -->
      <svg
        v-else
        class="w-5 h-5 text-gray-300 group-hover:text-brand-red-light transition-colors duration-300"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
        />
      </svg>
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'

// Reactive state
const isDark = ref(false)

// Toggle theme function
const toggleTheme = () => {
  isDark.value = !isDark.value
}

// Apply theme to document
const applyTheme = (dark) => {
  if (process.client) {
    if (dark) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }
}

// Get initial theme state
const getInitialTheme = () => {
  if (process.client) {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      return savedTheme === 'dark'
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  }
  return false // Default to light on server
}

// Watch for theme changes
watch(isDark, (newValue) => {
  applyTheme(newValue)
}, { immediate: false })

// Initialize theme on mount
onMounted(() => {
  // Sync with current DOM state (set by the inline script)
  if (process.client) {
    isDark.value = document.documentElement.classList.contains('dark')
    
    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = (e) => {
      if (!localStorage.getItem('theme')) {
        isDark.value = e.matches
      }
    }
    
    mediaQuery.addEventListener('change', handleChange)
    
    // Cleanup listener on unmount
    onBeforeUnmount(() => {
      mediaQuery.removeEventListener('change', handleChange)
    })
  }
})
</script>