<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 font-sans transition-colors duration-300">
    <HeaderNav />
    
    <section class="pt-24 pb-24">
      <div class="max-w-2xl mx-auto px-6">
        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
          <div class="text-center mb-8">
            <h1 class="text-3xl font-bold text-brand-navy dark:text-white mb-2">Create Your Account</h1>
            <p class="text-brand-navy dark:text-gray-300">Join thousands finding their perfect home in Thailand</p>
          </div>

          <form @submit.prevent="handleRegister" class="space-y-6">
            <!-- Personal Details -->
            <div class="grid grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium text-brand-navy dark:text-white mb-2">First Name</label>
                <input v-model="form.firstName" type="text" required 
                  class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-brand-turqoise-light bg-white dark:bg-gray-700 text-brand-navy dark:text-white">
              </div>
              <div>
                <label class="block text-sm font-medium text-brand-navy dark:text-white mb-2">Last Name</label>
                <input v-model="form.lastName" type="text" required
                  class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-brand-turqoise-light bg-white dark:bg-gray-700 text-brand-navy dark:text-white">
              </div>
            </div>

            <div>
              <label class="block text-sm font-medium text-brand-navy dark:text-white mb-2">Email Address</label>
              <input v-model="form.email" type="email" required
                class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-brand-turqoise-light bg-white dark:bg-gray-700 text-brand-navy dark:text-white">
            </div>

            <div>
              <label class="block text-sm font-medium text-brand-navy dark:text-white mb-2">Phone Number</label>
              <input v-model="form.phone" type="tel"
                class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-brand-turqoise-light bg-white dark:bg-gray-700 text-brand-navy dark:text-white">
            </div>

            <div>
              <label class="block text-sm font-medium text-brand-navy dark:text-white mb-2">Password</label>
              <input v-model="form.password" type="password" required
                class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-brand-turqoise-light bg-white dark:bg-gray-700 text-brand-navy dark:text-white">
            </div>

            <!-- Property Preferences -->
            <div>
              <label class="block text-sm font-medium text-brand-navy dark:text-white mb-2">Budget Range (Monthly)</label>
              <select v-model="form.budget" 
                class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-brand-turqoise-light bg-white dark:bg-gray-700 text-brand-navy dark:text-white">
                <option value="">Select budget range</option>
                <option value="10000-25000">₿10,000 - ₿25,000</option>
                <option value="25000-50000">₿25,000 - ₿50,000</option>
                <option value="50000-100000">₿50,000 - ₿100,000</option>
                <option value="100000+">₿100,000+</option>
              </select>
            </div>

            <div>
              <label class="block text-sm font-medium text-brand-navy dark:text-white mb-2">Preferred Areas</label>
              <div class="grid grid-cols-2 gap-2">
                <label v-for="area in areas" :key="area" class="flex items-center">
                  <input v-model="form.preferredAreas" :value="area" type="checkbox" 
                    class="rounded border-gray-300 text-brand-turqoise-light focus:ring-brand-turqoise-light">
                  <span class="ml-2 text-sm text-brand-navy dark:text-gray-300">{{ area }}</span>
                </label>
              </div>
            </div>

            <!-- Terms -->
            <div>
              <label class="flex items-start space-x-3">
                <input v-model="form.agreeToTerms" type="checkbox" required
                  class="mt-1 rounded border-gray-300 text-brand-turqoise-light focus:ring-brand-turqoise-light">
                <span class="text-sm text-brand-navy dark:text-gray-300">
                  I agree to the <NuxtLink to="/terms-conditions" class="text-brand-turqoise-light underline">Terms & Conditions</NuxtLink> 
                  and <NuxtLink to="/privacy-policy" class="text-brand-turqoise-light underline">Privacy Policy</NuxtLink>
                </span>
              </label>
            </div>

            <button type="submit" :disabled="loading"
              class="w-full bg-brand-turqoise-light text-brand-navy py-3 rounded-xl font-semibold hover:bg-teal-300 transition-all duration-300 disabled:opacity-50">
              <span v-if="loading">Creating Account...</span>
              <span v-else>Create Account</span>
            </button>
          </form>

          <div class="text-center mt-6">
            <p class="text-sm text-brand-navy dark:text-gray-300">
              Already have an account? 
              <button @click="openLoginModal" class="text-brand-turqoise-light hover:underline">Sign in here</button>
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>

<!-- Footer Component -->
    <FooterSection />
</template>

<script setup>
const form = ref({
  firstName: '', lastName: '', email: '', phone: '', password: '',
  budget: '', preferredAreas: [], agreeToTerms: false
})

const areas = ['Sukhumvit', 'Silom', 'Sathorn', 'Thonglor', 'Ari', 'Phra Khanong']
const loading = ref(false)

const handleRegister = async () => {
  loading.value = true
  // TODO: Implement Supabase registration
  console.log('Register:', form.value)
  loading.value = false
}

const openLoginModal = () => {
  // TODO: Open login modal
  console.log('Open login modal')
}
</script>