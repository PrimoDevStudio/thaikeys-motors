<template>
  <nav class="bg-white/100 dark:bg-gray-900/100 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-700/50 sticky top-0 z-50 transition-colors duration-300">
    <div class="max-w-7xl mx-auto px-4 lg:px-4">
      <div class="flex items-center h-16">
        <!-- Left: Logo -->
        <div class="flex-shrink-0">
          <NuxtLink :to="localePath('/')" class="flex items-center group">
            <img 
              src="~/assets/thaikeys_motors_logo_dark.svg" 
              alt="ThaiKeys Logo" 
              class="h-8 dark:hidden"
            />
            <img 
              src="~/assets/thaikeys_motors_logo_light.svg" 
              alt="ThaiKeys Logo" 
              class="h-8 hidden dark:block"
            />   
          </NuxtLink>
        </div>
        
        <!-- Center: Navigation Links -->
        <div class="hidden lg:flex items-center justify-center flex-1 space-x-8">
          <NuxtLink :to="localePath('/cars')" class="nav-link">
            {{ $t('nav.cars') }}
          </NuxtLink>
          <NuxtLink :to="localePath('/motorcycles')" class="nav-link">
            {{ $t('nav.motorcycles') }}
          </NuxtLink>
          <NuxtLink :to="localePath('/commercial')" class="nav-link">
            {{ $t('nav.commercial') }}
          </NuxtLink>
          <NuxtLink :to="localePath('/marine')" class="nav-link">
            {{ $t('nav.marine') }}
          </NuxtLink>
          <NuxtLink :to="localePath('/rent-to-own')" class="nav-link">
            {{ $t('nav.rent_to_own') }}
          </NuxtLink>
          <NuxtLink :to="localePath('/news')" class="nav-link">
            {{ $t('nav.news') }}
          </NuxtLink>
        </div>
        
        <!-- Right: Switchers + Auth -->
        <div class="hidden lg:flex items-center space-x-4 flex-shrink-0">
          <!-- Language Switcher -->
          <LanguageSwitcher />
          
          <!-- Theme Switcher -->
          <ThemeSwitcher />

          <!-- Currency Switcher -->
          <CurrencySwitcher />
          
          <!-- Auth Section -->
          <div v-if="!user" class="flex items-center">
            <button 
              @click="showLoginModal = true"
              class="bg-brand-navy dark:bg-brand-turqoise-light text-white dark:text-brand-navy px-6 py-2.5 rounded-lg hover:bg-brand-turqoise-light dark:hover:bg-blue-400 transition-all duration-300 font-medium"
            >
              {{ $t('nav.login') }}
            </button>
          </div>
          
          <!-- User Menu -->
          <div v-else class="flex items-center space-x-4">
            <span class="text-sm text-brand-navy dark:text-white">{{ user.email }}</span>
            <button 
              @click="handleLogout"
              class="text-brand-navy dark:text-white hover:text-brand-turqoise-light dark:hover:text-brand-turqoise-light transition-colors duration-300 font-medium"
            >
              {{ $t('nav.logout') }}
            </button>
          </div>
        </div>
        
        <!-- Mobile menu button -->
        <button 
          class="lg:hidden p-2 ml-auto"
          :aria-label="isMobileMenuOpen ? 'Close menu' : 'Open menu'"
          :aria-expanded="isMobileMenuOpen"
          @click="toggleMobileMenu"
        >
          <svg class="w-9 h-9 text-gray-800 dark:text-gray-200 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      
      <!-- Mobile Menu -->
      <div v-if="isMobileMenuOpen" class="lg:hidden border-t border-gray-200 dark:border-gray-700 py-4 transition-colors duration-300">
        <div class="flex flex-col items-center space-y-4">
          <NuxtLink :to="localePath('/rent')" class="mobile-nav-link text-center" @click="closeMobileMenu">
            {{ $t('nav.rent') }}
          </NuxtLink>
          <NuxtLink :to="localePath('/buy')" class="mobile-nav-link text-center" @click="closeMobileMenu">
            {{ $t('nav.buy') }}
          </NuxtLink>
          <NuxtLink :to="localePath('/sell')" class="mobile-nav-link text-center" @click="closeMobileMenu">
            {{ $t('nav.sell') }}
          </NuxtLink>
          <NuxtLink :to="localePath('/agents')" class="mobile-nav-link text-center" @click="closeMobileMenu">
            {{ $t('nav.agents') }}
          </NuxtLink>
          <NuxtLink :to="localePath('/developers')" class="mobile-nav-link text-center" @click="closeMobileMenu">
            {{ $t('nav.developers') }}
          </NuxtLink>
          <NuxtLink :to="localePath('/list-privately')" class="mobile-nav-link text-center" @click="closeMobileMenu">
            {{ $t('nav.listprivately') }}
          </NuxtLink>
          <NuxtLink :to="localePath('/expats')" class="mobile-nav-link text-center" @click="closeMobileMenu">
            {{ $t('nav.expats') }}
          </NuxtLink>
          
          <!-- Switchers -->
          <div class="flex items-center justify-center space-x-4 pt-2">
            <LanguageSwitcher />
            <ThemeSwitcher />
            <CurrencySwitcher />
          </div>
          
          <!-- Mobile Auth -->
          <div v-if="!user" class="flex flex-col items-center space-y-3 pt-2">
            <button 
              @click="showLoginModal = true; closeMobileMenu()"
              class="bg-brand-navy dark:bg-brand-turqoise-light text-white dark:text-brand-navy px-6 py-2.5 rounded-lg hover:bg-blue-800 dark:hover:bg-blue-400 transition-all duration-300 font-medium"
            >
              {{ $t('nav.login') }}
            </button>
          </div>
          
          <!-- Mobile User Menu -->
          <div v-else class="flex flex-col items-center space-y-2 pt-2">
            <span class="text-sm text-brand-navy dark:text-white">{{ user.email }}</span>
            <button 
              @click="handleLogout"
              class="text-brand-navy dark:text-white hover:text-brand-turqoise-light dark:hover:text-brand-turqoise-light transition-colors duration-300 font-medium"
            >
              {{ $t('nav.logout') }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Login Modal -->
    <LoginModal 
      :isOpen="showLoginModal" 
      @close="showLoginModal = false" 
      @login="handleLogin" 
    />
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import LoginModal from '~/components/LoginModal.vue'
// Import i18n composables properly for Nuxt 4
const { t: $t } = useI18n()
const localePath = useLocalePath()

const isMobileMenuOpen = ref(false)
const showLoginModal = ref(false)
const user = ref(null) // TODO: Get from Supabase auth state

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

const handleLogin = async (credentials) => {
  try {
    // TODO: Implement Supabase login
    console.log('Login attempt:', credentials)
    // const { data, error } = await $supabase.auth.signInWithPassword(credentials)
    // if (error) throw error
    // user.value = data.user
    showLoginModal.value = false
  } catch (error) {
    console.error('Login error:', error)
    // Handle error - show toast notification
  }
}

const handleLogout = async () => {
  try {
    // TODO: Implement Supabase logout
    console.log('Logout')
    // await $supabase.auth.signOut()
    user.value = null
  } catch (error) {
    console.error('Logout error:', error)
  }
}

// TODO: Watch for auth state changes
// onMounted(() => {
//   const { data: { user } } = $supabase.auth.getSession()
//   if (user) user.value = user
//   
//   $supabase.auth.onAuthStateChange((event, session) => {
//     user.value = session?.user || null
//   })
// })
</script>

<style scoped>
/* Desktop Navigation Links */
.nav-link {
  @apply relative text-brand-navy dark:text-white font-medium transition-all duration-300 py-2 focus:outline-none;
}

.nav-link::after {
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

.nav-link:hover::after {
  width: 100%;
}

/* Active state for current page */
.nav-link.router-link-active::after {
  width: 100%;
}

/* Mobile Navigation Links */
.mobile-nav-link {
  @apply text-brand-navy dark:text-white font-medium transition-all duration-300 py-2 focus:outline-none;
}

.mobile-nav-link:hover {
  @apply text-brand-turqoise-light dark:text-brand-turqoise-light;
}

.mobile-nav-link.router-link-active {
  @apply text-brand-turqoise-light dark:text-brand-turqoise-light;
}
</style>