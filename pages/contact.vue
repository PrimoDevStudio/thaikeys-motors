<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 font-sans transition-colors duration-300">

    <!-- Hero Section -->
    <section class="relative pt-16 pb-16 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-brand-navy via-blue-800 to-brand-turqoise-light"></div>
      <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h1 class="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          {{ $t('contact.hero.title') }}
        </h1>
        <p class="text-xl lg:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
          {{ $t('contact.hero.subtitle') }}
        </p>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="grid lg:grid-cols-3 gap-16">
          <!-- Contact Form -->
          <div class="lg:col-span-2">
            <div class="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-700 p-8 lg:p-12">
              <h2 class="text-3xl font-bold text-brand-navy dark:text-white mb-8">
                {{ $t('contact.form.title') }}
              </h2>
              
              <form @submit.prevent="submitForm" class="space-y-6">
                <div class="grid md:grid-cols-2 gap-6">
                  <div>
                    <label class="block text-sm font-semibold text-brand-navy dark:text-gray-300 mb-2">
                      {{ $t('contact.form.first_name') }}
                    </label>
                    <input 
                      v-model="form.firstName"
                      type="text" 
                      required
                      class="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-turqoise-light focus:border-transparent bg-white dark:bg-gray-700 text-brand-navy dark:text-white transition-colors duration-300"
                      :placeholder="$t('contact.form.first_name_placeholder')"
                    >
                  </div>
                  <div>
                    <label class="block text-sm font-semibold text-brand-navy dark:text-gray-300 mb-2">
                      {{ $t('contact.form.last_name') }}
                    </label>
                    <input 
                      v-model="form.lastName"
                      type="text" 
                      required
                      class="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-turqoise-light focus:border-transparent bg-white dark:bg-gray-700 text-brand-navy dark:text-white transition-colors duration-300"
                      :placeholder="$t('contact.form.last_name_placeholder')"
                    >
                  </div>
                </div>

                <div>
                  <label class="block text-sm font-semibold text-brand-navy dark:text-gray-300 mb-2">
                    {{ $t('contact.form.email') }}
                  </label>
                  <input 
                    v-model="form.email"
                    type="email" 
                    required
                    class="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-turqoise-light focus:border-transparent bg-white dark:bg-gray-700 text-brand-navy dark:text-white transition-colors duration-300"
                    :placeholder="$t('contact.form.email_placeholder')"
                  >
                </div>

                <div>
                  <label class="block text-sm font-semibold text-brand-navy dark:text-gray-300 mb-2">
                    {{ $t('contact.form.phone') }}
                  </label>
                  <input 
                    v-model="form.phone"
                    type="tel"
                    class="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-turqoise-light focus:border-transparent bg-white dark:bg-gray-700 text-brand-navy dark:text-white transition-colors duration-300"
                    :placeholder="$t('contact.form.phone_placeholder')"
                  >
                </div>

                <div>
                  <label class="block text-sm font-semibold text-brand-navy dark:text-gray-300 mb-2">
                    {{ $t('contact.form.department') }}
                  </label>
                  <div class="relative">
                    <select 
                      v-model="form.department"
                      required
                      class="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-turqoise-light focus:border-transparent bg-white dark:bg-gray-700 text-brand-navy dark:text-white transition-colors duration-300 appearance-none cursor-pointer"
                    >
                      <option value="">{{ $t('contact.form.select_department') }}</option>
                      <option v-for="dept in departments" :key="dept.id" :value="dept.id">
                        {{ $t(`contact.departments.${dept.id}`) }}
                      </option>
                    </select>
                    <svg class="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                    </svg>
                  </div>
                </div>

                <div>
                  <label class="block text-sm font-semibold text-brand-navy dark:text-gray-300 mb-2">
                    {{ $t('contact.form.subject') }}
                  </label>
                  <input 
                    v-model="form.subject"
                    type="text" 
                    required
                    class="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-turqoise-light focus:border-transparent bg-white dark:bg-gray-700 text-brand-navy dark:text-white transition-colors duration-300"
                    :placeholder="$t('contact.form.subject_placeholder')"
                  >
                </div>

                <div>
                  <label class="block text-sm font-semibold text-brand-navy dark:text-gray-300 mb-2">
                    {{ $t('contact.form.message') }}
                  </label>
                  <textarea 
                    v-model="form.message"
                    rows="6" 
                    required
                    class="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-turqoise-light focus:border-transparent bg-white dark:bg-gray-700 text-brand-navy dark:text-white transition-colors duration-300 resize-none"
                    :placeholder="$t('contact.form.message_placeholder')"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  :disabled="isSubmitting"
                  class="w-full bg-brand-turqoise-light text-brand-navy py-4 px-8 rounded-lg font-bold text-lg hover:bg-teal-300 transition-colors duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span v-if="!isSubmitting">{{ $t('contact.form.send_message') }}</span>
                  <span v-else>{{ $t('contact.form.sending') }}</span>
                </button>
              </form>
            </div>
          </div>

          <!-- Contact Info -->
          <div class="space-y-8">
            <!-- Office Info -->
            <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 p-8">
              <h3 class="text-2xl font-bold text-brand-navy dark:text-white mb-6">
                {{ $t('contact.office.title') }}
              </h3>
              <div class="space-y-4">
                <div class="flex items-start space-x-4">
                  <div class="w-6 h-6 text-brand-turqoise-light mt-1">
                    <svg fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                  </div>
                  <div>
                    <p class="font-semibold text-brand-navy dark:text-white">{{ $t('contact.office.address') }}</p>
                    <p class="text-brand-navy dark:text-gray-400">{{ $t('contact.office.address_line') }}</p>
                  </div>
                </div>

                <div class="flex items-start space-x-4">
                  <div class="w-6 h-6 text-brand-turqoise-light mt-1">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                    </svg>
                  </div>
                  <div>
                    <p class="font-semibold text-brand-navy dark:text-white">{{ $t('contact.office.phone') }}</p>
                    <p class="text-brand-navy dark:text-gray-400">+66 2 123 4567</p>
                  </div>
                </div>

                <div class="flex items-start space-x-4">
                  <div class="w-6 h-6 text-brand-turqoise-light mt-1">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                  </div>
                  <div>
                    <p class="font-semibold text-brand-navy dark:text-white">{{ $t('contact.office.email') }}</p>
                    <p class="text-brand-navy dark:text-gray-400">hello@thaikeys.co.th</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Business Hours -->
            <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 p-8">
              <h3 class="text-2xl font-bold text-brand-navy dark:text-white mb-6">
                {{ $t('contact.hours.title') }}
              </h3>
              <div class="space-y-3">
                <div class="flex justify-between">
                  <span class="text-brand-navy dark:text-gray-300">{{ $t('contact.hours.weekdays') }}</span>
                  <span class="font-semibold text-brand-navy dark:text-white">9:00 - 18:00</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-brand-navy dark:text-gray-300">{{ $t('contact.hours.saturday') }}</span>
                  <span class="font-semibold text-brand-navy dark:text-white">10:00 - 16:00</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-brand-navy dark:text-gray-300">{{ $t('contact.hours.sunday') }}</span>
                  <span class="font-semibold text-brand-navy dark:text-white">{{ $t('contact.hours.closed') }}</span>
                </div>
              </div>
            </div>

            <!-- Emergency Contact -->
            <div class="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 rounded-2xl p-8 border border-red-200 dark:border-red-800">
              <h3 class="text-2xl font-bold text-red-800 dark:text-red-400 mb-4">
                {{ $t('contact.emergency.title') }}
              </h3>
              <p class="text-red-700 dark:text-red-300 mb-4">
                {{ $t('contact.emergency.description') }}
              </p>
              <p class="font-bold text-red-800 dark:text-red-400 text-lg">
                {{ $t('contact.emergency.phone') }}: +66 81 234 5678
              </p>
            </div>
          </div>
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
  title: $t('contact.meta.title'),
  meta: [
    {
      name: 'description',
      content: $t('contact.meta.description')
    }
  ]
})

// Form data
const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  department: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)

// Departments
const departments = ref([
  { id: 'sales' },
  { id: 'support' },
  { id: 'agents' },
  { id: 'partnerships' },
  { id: 'technical' },
  { id: 'media' },
  { id: 'legal' },
  { id: 'general' }
])

// Form submission
const submitForm = async () => {
  isSubmitting.value = true
  
  try {
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', form.value)
    
    // Reset form
    form.value = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      department: '',
      subject: '',
      message: ''
    }
    
    // Show success message (you could use a toast notification)
    alert($t('contact.form.success_message'))
    
  } catch (error) {
    console.error('Form submission error:', error)
    alert($t('contact.form.error_message'))
  } finally {
    isSubmitting.value = false
  }
}
</script>