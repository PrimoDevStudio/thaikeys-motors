<template>
  <!-- Animated Stats -->
  <div class="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
    <div 
      v-for="(stat, index) in stats" 
      :key="index"
      class="text-center"
    >
      <div 
        :class="['text-4xl lg:text-5xl font-bold mb-2', stat.color]"
        :ref="el => { if (el) statRefs[index] = el }"
      >
        {{ stat.prefix }}{{ displayValues[index] }}{{ stat.suffix }}
      </div>
      <div class="text-gray-600 dark:text-gray-300 font-semibold">{{ stat.label }}</div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, reactive } from 'vue'

const stats = [
  { value: 500, suffix: '+', prefix: '', label: 'Active Agencies', color: 'text-blue-600' },
  { value: 15000, suffix: '+', prefix: '', label: 'Properties Listed', color: 'text-brand-green-dark' },
  { value: 2500, suffix: '+', prefix: '', label: 'Private Landlords', color: 'text-purple-600' },
  { value: 50, suffix: 'M+', prefix: '₿', label: 'Monthly Volume', color: 'text-brand-red-dark' }
]

const displayValues = reactive(stats.map(() => 0))
const statRefs = ref([])
const hasAnimated = ref(false)

const formatValue = (value) => {
  return value.toLocaleString()
}

const animateValue = (index, endValue, duration = 2000) => {
  const startValue = 0
  const startTime = Date.now()
  
  const animate = () => {
    const currentTime = Date.now()
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / duration, 1)
    
    // Easing function for smooth animation
    const easeOutQuad = (t) => t * (2 - t)
    const easedProgress = easeOutQuad(progress)
    
    const currentValue = Math.floor(startValue + (endValue - startValue) * easedProgress)
    displayValues[index] = formatValue(currentValue)
    
    if (progress < 1) {
      requestAnimationFrame(animate)
    } else {
      displayValues[index] = formatValue(endValue)
    }
  }
  
  animate()
}

onMounted(() => {
  // Intersection Observer to trigger animation when in view
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasAnimated.value) {
          hasAnimated.value = true
          stats.forEach((stat, index) => {
            setTimeout(() => animateValue(index, stat.value), index * 100)
          })
        }
      })
    },
    { threshold: 0.3 }
  )
  
  if (statRefs.value[0]) {
    observer.observe(statRefs.value[0])
  }
})
</script>