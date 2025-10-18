<template>
  <footer class="bg-white dark:bg-gray-900 py-16 border-t border-gray-200 dark:border-gray-700 transition-colors duration-300">
    <div class="max-w-7xl mx-auto px-4 lg:px-4">
      <div class="flex flex-col md:flex-row justify-between items-center">
        <div class="flex items-center">
          <NuxtLink :to="localePath('/')" class="flex items-center group">
            <img 
              src="~/assets/thaikeys_logo_dark.svg" 
              alt="ThaiKeys Logo" 
              class="h-10 dark:hidden"
            />
            <img 
              src="~/assets/thaikeys_logo_light.svg" 
              alt="ThaiKeys Logo" 
              class="h-10 hidden dark:block"
            />
          </NuxtLink>
        </div>
        
        <div class="flex flex-col md:flex-row items-center justify-center gap-4 lg:gap-8 mt-4 md:mt-0">
          <NuxtLink :to="localePath('/payments')" class="footer-link">
            {{ $t('footer.payments') }}
          </NuxtLink>
          <NuxtLink :to="localePath('/privacy-policy')" class="footer-link">
            {{ $t('footer.privacy') }}
          </NuxtLink>
          <NuxtLink :to="localePath('/terms-conditions')" class="footer-link">
            {{ $t('footer.terms') }}
          </NuxtLink>
          <NuxtLink :to="localePath('/about')" class="footer-link">
            {{ $t('nav.about') }}
          </NuxtLink>
          <NuxtLink :to="localePath('/contact')" class="footer-link">
            {{ $t('footer.contact') }}
          </NuxtLink>
          
          <!-- App Download Buttons inline -->
          <div class="flex gap-2 md:ml-4">
            <a href="#" aria-label="Download on the App Store" class="flex items-center space-x-2 bg-black text-white px-3 py-1.5 rounded-lg hover:bg-gray-800 transition-colors duration-300 text-base">
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <span class="font-medium">App Store</span>
            </a>
            
            <a href="#" aria-label="Get it on Google Play" class="flex items-center space-x-2 bg-black text-white px-3 py-1.5 rounded-lg hover:bg-gray-800 transition-colors duration-300 text-base">
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
              </svg>
              <span class="font-medium">Google Play</span>
            </a>
          </div>
        </div>
      </div>
      
      <!-- Social Media Icons under logo -->
      <div class="mt-8 flex justify-center md:justify-start">
        <div class="flex space-x-4">
          <a href="#" aria-label="Twitter" class="w-8 h-8 bg-gray-100 dark:bg-gray-100 rounded-full flex items-center justify-center hover:bg-brand-turqoise-light hover:text-brand-navy dark:hover:bg-brand-turqoise-light transition-colors duration-300">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
            </svg>
          </a>
          <a href="#" aria-label="Pinterest" class="w-8 h-8 bg-gray-100 dark:bg-gray-100 rounded-full flex items-center justify-center hover:bg-brand-turqoise-light hover:text-brand-navy dark:hover:bg-brand-turqoise-light transition-colors duration-300">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.120.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.758-1.378l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z"/>
            </svg>
          </a>
          <a href="#" aria-label="Instagram" class="w-8 h-8 bg-gray-100 dark:bg-gray-100 rounded-full flex items-center justify-center hover:bg-brand-turqoise-light hover:text-brand-navy dark:hover:bg-brand-turqoise-light transition-colors duration-300">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          <a href="#" aria-label="LinkedIn" class="w-8 h-8 bg-gray-100 dark:bg-gray-100 rounded-full flex items-center justify-center hover:bg-brand-turqoise-light hover:text-brand-navy dark:hover:bg-brand-turqoise-light transition-colors duration-300">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a href="#" aria-label="TikTok" class="w-8 h-8 bg-gray-100 dark:bg-gray-100 rounded-full flex items-center justify-center hover:bg-brand-turqoise-light hover:text-brand-navy dark:hover:bg-brand-turqoise-light transition-colors duration-300">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
            </svg>
          </a>
          <a href="#" aria-label="YouTube" class="w-8 h-8 bg-gray-100 dark:bg-gray-100 rounded-full flex items-center justify-center hover:bg-brand-turqoise-light hover:text-brand-navy dark:hover:bg-brand-turqoise-light transition-colors duration-300">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </a>
        </div>
      </div>

      <!-- Copyright with DBD verification inline -->
      <div class="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8">
        <div class="flex flex-col md:flex-row items-center justify-between">
          <p class="text-brand-navy dark:text-white text-center md:text-left mb-4 md:mb-0">
            &copy; {{ currentYear }} thaikeys<br class="md:hidden" /><span class="hidden md:inline"> - </span>{{ $t('footer.tagline') }}
          </p>
          <div class="flex items-center space-x-3">
            <span class="text-brand-navy dark:text-white text-base">Verified by</span>
            <img 
              src="~/assets/dbd-registered.png" 
              alt="DBD Registered" 
              class="h-10 w-auto"
            />
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'

// Get the localePath function for i18n routing
const localePath = useLocalePath()

const currentYear = computed(() => new Date().getFullYear())
</script>

<style scoped>
/* Footer Navigation Links */
.footer-link {
  @apply relative text-brand-navy dark:text-white font-medium transition-all duration-300 py-2 focus:outline-none;
}

.footer-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  @apply bg-brand-turqoise-light;
  transition: all 0.3s ease;
  transform: translateX(-50%);
}

.footer-link:hover::after {
  width: 100%;
}

/* Active state for current page */
.footer-link.router-link-active::after {
  width: 100%;
}
</style>