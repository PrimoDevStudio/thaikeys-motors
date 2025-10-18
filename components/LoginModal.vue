<template>
  <Teleport to="body">
    <div v-if="isOpen" class="fixed inset-0 z-50 overflow-hidden">
      <!-- Background overlay -->
      <div class="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm" @click="close"></div>
      
      <!-- Modal container - centers content -->
      <div class="flex items-center justify-center min-h-full p-4">
        <!-- Modal content -->
        <div class="relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 w-full max-w-md transform transition-all">
          
          <button @click="close" class="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div class="text-center mb-6">
            <h2 class="text-2xl font-bold text-brand-navy dark:text-white mb-2">Welcome Back</h2>
            <p class="text-brand-navy dark:text-gray-300">Sign in to your account</p>
          </div>

          <form @submit.prevent="handleLogin" class="space-y-6">
            <div>
              <input v-model="form.email" type="email" required placeholder="Email address"
                class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-brand-red-light focus:border-brand-red-light bg-white dark:bg-gray-700 text-brand-navy dark:text-white transition-colors">
            </div>
            
            <div>
              <input v-model="form.password" type="password" required placeholder="Password"
                class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-brand-red-light focus:border-brand-red-light bg-white dark:bg-gray-700 text-brand-navy dark:text-white transition-colors">
            </div>

            <button type="submit" :disabled="loading"
              class="w-full bg-brand-red-light text-brand-navy py-3 rounded-xl font-semibold hover:bg-teal-300 transition-all duration-300 disabled:opacity-50">
              <span v-if="loading">Signing In...</span>
              <span v-else>Sign In</span>
            </button>
          </form>

          <div class="text-center mt-6">
            <p class="text-sm text-brand-navy dark:text-gray-300">
              Don't have an account? 
              <NuxtLink to="/auth/register" @click="close" class="text-brand-red-light hover:text-teal-500 underline transition-colors">Sign up here</NuxtLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps(['isOpen'])
const emit = defineEmits(['close', 'login'])

const form = ref({ email: '', password: '' })
const loading = ref(false)

const close = () => emit('close')

// Prevent scrolling when modal is open
watch(() => props.isOpen, (isOpen) => {
  if (process.client) {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }
})

// Cleanup on unmount
onUnmounted(() => {
  if (process.client) {
    document.body.style.overflow = ''
  }
})

const handleLogin = async () => {
  loading.value = true
  try {
    console.log('Login:', form.value)
    emit('login', form.value)
  } catch (error) {
    console.error('Login error:', error)
  } finally {
    loading.value = false
  }
}
</script>