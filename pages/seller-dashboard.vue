<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 font-sans transition-colors duration-300">

    <!-- Seller Info Bar -->
    <div class="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-4 transition-colors duration-300">
      <div class="flex items-center justify-between mx-auto">
        <!-- Seller Info -->
        <div class="flex items-center space-x-6">
          <div class="flex items-center space-x-3">
            <div class="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-800 dark:to-blue-600 rounded-full flex items-center justify-center">
              <svg class="w-6 h-6 text-blue-600 dark:text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
              </svg>
            </div>
          </div>
          
          <div class="text-sm text-brand-navy dark:text-gray-400">
            <span class="font-medium">Welcome back, Sarah Thompson</span>
            <div class="text-xs text-gray-500 flex items-center space-x-2">
              <span>Property Seller</span>
              <span class="bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-400 px-2 py-0.5 rounded text-xs font-semibold">
                Verified Seller
              </span>
            </div>
          </div>
        </div>

        <!-- Search & Actions -->
        <div class="flex items-center space-x-4">
          <div class="relative">
            <input 
              v-model="searchQuery"
              type="text" 
              placeholder="Search properties, buyers..."
              class="w-80 px-4 py-2 pr-10 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-turqoise-light focus:border-transparent bg-white dark:bg-gray-700 text-brand-navy dark:text-white transition-colors duration-300"
            >
            <svg class="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
          </div>
          
          <button class="relative p-2 text-brand-navy dark:text-gray-400 hover:text-brand-turqoise-light dark:hover:text-brand-turqoise-light transition-colors">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-5 5v-5zM11 13h-1a4 4 0 01-4-4V7a4 4 0 118 0v2a4 4 0 01-4 4z"/>
            </svg>
            <span v-if="unreadNotifications > 0" class="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          
          <div class="flex items-center space-x-2">
            <div class="w-8 h-8 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-800 dark:to-blue-600 rounded-full"></div>
            <button class="text-brand-navy dark:text-gray-400 hover:text-brand-turqoise-light dark:hover:text-brand-turqoise-light">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Layout Container -->
    <div class="flex mx-auto">
      <!-- Seller Sidebar Navigation -->
      <aside class="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex-shrink-0 transition-colors duration-300">
        <nav class="p-4 space-y-2">
          <a 
            href="#" 
            :class="['flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors', 
                     activeTab === 'overview' ? 'bg-brand-turqoise-light text-brand-navy border border-teal-200' : 'text-brand-navy dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700']"
            @click="activeTab = 'overview'"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
            </svg>
            <span class="font-medium">Overview</span>
          </a>
          
          <a 
            href="#" 
            :class="['flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors', 
                     activeTab === 'properties' ? 'bg-brand-turqoise-light text-brand-navy border border-teal-200' : 'text-brand-navy dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700']"
            @click="activeTab = 'properties'"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
            </svg>
            <span class="font-medium">My Properties</span>
            <span class="bg-brand-turqoise-light/20 text-brand-navy dark:text-brand-turqoise-light text-xs font-semibold px-2 py-1 rounded-full ml-auto">{{ totalProperties }}</span>
          </a>
          
          <a 
            href="#" 
            :class="['flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors', 
                     activeTab === 'inquiries' ? 'bg-brand-turqoise-light text-brand-navy border border-teal-200' : 'text-brand-navy dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700']"
            @click="activeTab = 'inquiries'"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
            </svg>
            <span class="font-medium">Buyer Inquiries</span>
            <span class="bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-400 text-xs font-semibold px-2 py-1 rounded-full ml-auto">{{ pendingInquiries }}</span>
          </a>
          
          <a 
            href="#" 
            :class="['flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors', 
                     activeTab === 'sales' ? 'bg-brand-turqoise-light text-brand-navy border border-teal-200' : 'text-brand-navy dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700']"
            @click="activeTab = 'sales'"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
            </svg>
            <span class="font-medium">Active Sales</span>
            <span class="bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-400 text-xs font-semibold px-2 py-1 rounded-full ml-auto">{{ activeSales }}</span>
          </a>
          
          <a 
            href="#" 
            :class="['flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors', 
                     activeTab === 'viewings' ? 'bg-brand-turqoise-light text-brand-navy border border-teal-200' : 'text-brand-navy dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700']"
            @click="activeTab = 'viewings'"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
            </svg>
            <span class="font-medium">Viewings</span>
            <span v-if="upcomingViewings > 0" class="bg-orange-100 dark:bg-orange-900/20 text-orange-800 dark:text-orange-400 text-xs font-semibold px-2 py-1 rounded-full ml-auto">{{ upcomingViewings }}</span>
          </a>
          
          <a 
            href="#" 
            :class="['flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors', 
                     activeTab === 'documents' ? 'bg-brand-turqoise-light text-brand-navy border border-teal-200' : 'text-brand-navy dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700']"
            @click="activeTab = 'documents'"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
            </svg>
            <span class="font-medium">Documents</span>
            <span class="bg-purple-100 dark:bg-purple-900/20 text-purple-800 dark:text-purple-400 text-xs font-semibold px-2 py-1 rounded-full ml-auto">{{ totalDocuments }}</span>
          </a>
          
          <a 
            href="#" 
            :class="['flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors', 
                     activeTab === 'analytics' ? 'bg-brand-turqoise-light text-brand-navy border border-teal-200' : 'text-brand-navy dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700']"
            @click="activeTab = 'analytics'"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
            </svg>
            <span class="font-medium">Analytics</span>
          </a>

          <a 
            href="#" 
            :class="['flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors', 
                     activeTab === 'profile' ? 'bg-brand-turqoise-light text-brand-navy border border-teal-200' : 'text-brand-navy dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700']"
            @click="activeTab = 'profile'"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
            </svg>
            <span class="font-medium">Profile & Settings</span>
            <div v-if="!profileComplete" class="w-2 h-2 bg-yellow-500 rounded-full ml-auto"></div>
          </a>
        </nav>
      </aside>

      <!-- Main Content Area -->
      <main class="flex-1 overflow-y-auto bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <!-- Overview Tab -->
        <div v-if="activeTab === 'overview'" class="p-6">
          <!-- Sales Summary Cards -->
          <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 transition-colors duration-300">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm font-medium text-brand-navy dark:text-gray-400">Properties Listed</p>
                  <p class="text-3xl font-bold text-brand-navy dark:text-white">{{ totalProperties }}</p>
                  <p class="text-sm text-blue-600 dark:text-blue-400 mt-2">{{ activeSales }} under contract</p>
                </div>
                <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-xl flex items-center justify-center">
                  <svg class="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                  </svg>
                </div>
              </div>
            </div>

            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 transition-colors duration-300">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm font-medium text-brand-navy dark:text-gray-400">Average Sale Price</p>
                  <p class="text-3xl font-bold text-brand-navy dark:text-white">{{ formatCurrency(averageSalePrice) }}</p>
                  <p class="text-sm text-green-600 dark:text-green-400 mt-2">+8% vs market</p>
                </div>
                <div class="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-xl flex items-center justify-center">
                  <svg class="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"/>
                  </svg>
                </div>
              </div>
            </div>

            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 transition-colors duration-300">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm font-medium text-brand-navy dark:text-gray-400">Buyer Inquiries</p>
                  <p class="text-3xl font-bold text-brand-navy dark:text-white">{{ pendingInquiries }}</p>
                  <p class="text-sm text-purple-600 dark:text-purple-400 mt-2">{{ inquiriesThisMonth }} this month</p>
                </div>
                <div class="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-xl flex items-center justify-center">
                  <svg class="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                  </svg>
                </div>
              </div>
            </div>

            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 transition-colors duration-300">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm font-medium text-brand-navy dark:text-gray-400">Property Views</p>
                  <p class="text-3xl font-bold text-brand-navy dark:text-white">{{ viewsThisMonth }}</p>
                  <p class="text-sm text-orange-600 dark:text-orange-400 mt-2">{{ upcomingViewings }} viewings scheduled</p>
                </div>
                <div class="w-12 h-12 bg-orange-100 dark:bg-orange-900/20 rounded-xl flex items-center justify-center">
                  <svg class="w-6 h-6 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <!-- Quick Actions & Recent Activity -->
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <!-- Quick Actions -->
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 transition-colors duration-300">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Quick Actions</h3>
              <div class="space-y-3">
                <button class="w-full bg-brand-turqoise-light text-brand-navy py-3 px-4 rounded-lg font-semibold hover:bg-teal-300 transition-colors flex items-center justify-center space-x-2">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                  </svg>
                  <span>List New Property</span>
                </button>
                
                <button class="w-full border-2 border-gray-200 dark:border-gray-600 text-brand-navy dark:text-gray-300 py-3 px-4 rounded-lg font-semibold hover:border-gray-300 dark:hover:border-gray-500 transition-colors flex items-center justify-center space-x-2">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                  </svg>
                  <span>Schedule Viewing</span>
                </button>
                
                <button class="w-full border-2 border-gray-200 dark:border-gray-600 text-brand-navy dark:text-gray-300 py-3 px-4 rounded-lg font-semibold hover:border-gray-300 dark:hover:border-gray-500 transition-colors flex items-center justify-center space-x-2">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"/>
                  </svg>
                  <span>Upload Documents</span>
                </button>
                
                <button class="w-full border-2 border-gray-200 dark:border-gray-600 text-brand-navy dark:text-gray-300 py-3 px-4 rounded-lg font-semibold hover:border-gray-300 dark:hover:border-gray-500 transition-colors flex items-center justify-center space-x-2">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                  </svg>
                  <span>View Reports</span>
                </button>
              </div>
            </div>

            <!-- Recent Activity -->
            <div class="lg:col-span-2 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 transition-colors duration-300">
              <div class="flex items-center justify-between mb-4">
                <h3 class="text-lg font-semibold text-brand-navy dark:text-white">Recent Activity</h3>
                <button class="text-brand-turqoise-light hover:text-teal-500 font-medium text-sm">View All</button>
              </div>
              
              <div class="space-y-4">
                <div v-for="activity in recentActivity" :key="activity.id" class="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors cursor-pointer">
                  <div class="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-800 dark:to-blue-600 rounded-full flex-shrink-0 flex items-center justify-center">
                    <svg class="w-6 h-6" :class="activity.type === 'offer' ? 'text-green-600 dark:text-green-300' : activity.type === 'viewing' ? 'text-orange-600 dark:text-orange-300' : 'text-blue-600 dark:text-blue-300'" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path v-if="activity.type === 'offer'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"/>
                      <path v-else-if="activity.type === 'viewing'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                      <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                    </svg>
                  </div>
                  <div class="flex-1">
                    <div class="flex items-center justify-between">
                      <h4 class="font-semibold text-brand-navy dark:text-white">{{ activity.buyer }}</h4>
                      <span class="text-xs text-brand-navy dark:text-gray-400">{{ activity.time }}</span>
                    </div>
                    <p class="text-sm text-brand-navy dark:text-gray-400 mt-1">{{ activity.property }}</p>
                    <div class="flex items-center space-x-4 mt-2">
                      <span :class="['text-xs font-semibold px-2 py-1 rounded-full', 
                                   activity.type === 'offer' ? 'bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-400' : 
                                   activity.type === 'viewing' ? 'bg-orange-100 dark:bg-orange-900/20 text-orange-800 dark:text-orange-400' : 
                                   'bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-400']">
                        {{ activity.action }}
                      </span>
                      <span v-if="activity.amount" class="text-sm font-semibold text-brand-navy dark:text-white">{{ formatCurrency(activity.amount) }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Properties Tab -->
        <div v-if="activeTab === 'properties'" class="p-6">
          <div class="flex items-center justify-between mb-6">
            <h2 class="text-2xl font-bold text-brand-navy dark:text-white">Properties for Sale</h2>
            <div class="flex items-center space-x-4">
              <select class="border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-brand-navy dark:text-white rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-turqoise-light">
                <option>All Properties</option>
                <option>Active Listings</option>
                <option>Under Contract</option>
                <option>Sold</option>
              </select>
              <button class="bg-brand-turqoise-light text-brand-navy px-6 py-3 rounded-lg font-semibold hover:bg-teal-300 transition-colors flex items-center space-x-2">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                </svg>
                <span>List Property</span>
              </button>
            </div>
          </div>

          <!-- Property Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div v-for="property in propertiesForSale" :key="property.id" class="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-all duration-300">
              <!-- Property Image -->
              <div class="h-48 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-800 dark:to-blue-600 relative">
                <div class="absolute top-4 left-4">
                  <span :class="['px-3 py-1 rounded-full text-xs font-semibold',
                               property.status === 'Active' ? 'bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-400' :
                               property.status === 'Under Contract' ? 'bg-yellow-100 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-400' :
                               'bg-gray-100 dark:bg-gray-600 text-gray-800 dark:text-gray-300']">
                    {{ property.status }}
                  </span>
                </div>
                <div class="absolute bottom-4 left-4">
                  <span class="bg-brand-turqoise-light text-brand-navy px-3 py-1 rounded-full text-xs font-semibold">
                    {{ property.type }}
                  </span>
                </div>
              </div>

              <!-- Property Details -->
              <div class="p-6">
                <h3 class="font-semibold text-brand-navy dark:text-white mb-2 text-lg">{{ property.title }}</h3>
                <p class="text-sm text-brand-navy dark:text-gray-400 mb-3 flex items-center">
                  <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  {{ property.location }}
                </p>
                
                <div class="flex items-center justify-between mb-4">
                  <div>
                    <span class="text-2xl font-bold text-brand-navy dark:text-white">{{ property.price }}</span>
                  </div>
                  <div class="text-sm text-brand-navy dark:text-gray-400">{{ property.bedrooms }}bed • {{ property.bathrooms }}bath</div>
                </div>

                <!-- Property Stats -->
                <div class="grid grid-cols-3 gap-4 mb-4 py-3 border-t border-gray-100 dark:border-gray-600">
                  <div class="text-center">
                    <div class="text-lg font-bold text-brand-navy dark:text-white">{{ property.views }}</div>
                    <div class="text-xs text-brand-navy dark:text-gray-400">Views</div>
                  </div>
                  <div class="text-center">
                    <div class="text-lg font-bold text-brand-navy dark:text-white">{{ property.inquiries }}</div>
                    <div class="text-xs text-brand-navy dark:text-gray-400">Inquiries</div>
                  </div>
                  <div class="text-center">
                    <div class="text-lg font-bold text-brand-navy dark:text-white">{{ property.daysListed }}</div>
                    <div class="text-xs text-brand-navy dark:text-gray-400">Days Listed</div>
                  </div>
                </div>

                <!-- Action Buttons -->
                <div class="flex items-center space-x-2">
                  <button class="flex-1 bg-brand-turqoise-light text-brand-navy py-2 px-4 rounded-lg font-semibold hover:bg-teal-300 transition-colors text-sm">
                    Manage
                  </button>
                  <button class="flex-1 border border-gray-300 dark:border-gray-600 text-brand-navy dark:text-gray-300 py-2 px-4 rounded-lg font-semibold hover:border-gray-400 dark:hover:border-gray-500 transition-colors text-sm">
                    Analytics
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Documents Tab -->
        <div v-if="activeTab === 'documents'" class="p-6">
          <div class="flex items-center justify-between mb-6">
            <h2 class="text-2xl font-bold text-brand-navy dark:text-white">Sale Documents & Progress</h2>
            <div class="flex items-center space-x-4">
              <select class="border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-brand-navy dark:text-white rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-turqoise-light">
                <option>All Sales</option>
                <option>Active Sales</option>
                <option>Completed Sales</option>
                <option>Pending Documentation</option>
              </select>
              <button class="bg-brand-turqoise-light text-brand-navy px-6 py-3 rounded-lg font-semibold hover:bg-teal-300 transition-colors flex items-center space-x-2">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"/>
                </svg>
                <span>Upload Document</span>
              </button>
            </div>
          </div>

          <!-- Active Sales with Document Progress -->
          <div class="space-y-6">
            <div v-for="sale in activeSalesList" :key="sale.id" class="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
              <!-- Sale Header -->
              <div class="p-6 border-b border-gray-100 dark:border-gray-600">
                <div class="flex items-center justify-between">
                  <div>
                    <h3 class="text-lg font-semibold text-brand-navy dark:text-white">{{ sale.propertyTitle }}</h3>
                    <p class="text-sm text-gray-500">{{ sale.propertyAddress }}</p>
                    <div class="flex items-center space-x-4 mt-2">
                      <span class="text-sm font-medium text-brand-navy dark:text-white">Buyer: {{ sale.buyerName }}</span>
                      <span class="text-sm text-gray-500">Sale Price: {{ formatCurrency(sale.salePrice) }}</span>
                    </div>
                  </div>
                  <div class="flex flex-col items-end space-y-2">
                    <span :class="['px-3 py-1 rounded-full text-xs font-semibold',
                                 sale.status === 'Under Contract' ? 'bg-yellow-100 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-400' :
                                 sale.status === 'Pending Completion' ? 'bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-400' :
                                 sale.status === 'Completed' ? 'bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-400' :
                                 'bg-gray-100 dark:bg-gray-600 text-gray-800 dark:text-gray-300']">
                      {{ sale.status }}
                    </span>
                    <span class="text-xs text-gray-500">{{ sale.progressPercentage }}% Complete</span>
                  </div>
                </div>
              </div>

              <!-- Progress Bar -->
              <div class="px-6 py-4 bg-gray-50 dark:bg-gray-700">
                <div class="flex justify-between items-center mb-2">
                  <span class="text-sm font-medium text-brand-navy dark:text-white">Sale Progress</span>
                  <span class="text-sm text-brand-navy dark:text-gray-400">{{ sale.currentMilestone }}</span>
                </div>
                <div class="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                  <div class="bg-brand-turqoise-light h-2 rounded-full transition-all duration-300" :style="`width: ${sale.progressPercentage}%`"></div>
                </div>
                <div class="flex justify-between text-xs text-gray-500 mt-1">
                  <span>Offer Accepted</span>
                  <span>Documentation</span>
                  <span>Legal Review</span>
                  <span>Completion</span>
                </div>
              </div>

              <!-- Documents Section -->
              <div class="p-6">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div v-for="docType in documentTypes" :key="docType.type" class="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
                    <div class="flex items-center justify-between mb-3">
                      <h4 class="font-medium text-brand-navy dark:text-white">{{ docType.name }}</h4>
                      <svg v-if="hasDocument(sale.id, docType.type)" class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                      </svg>
                      <svg v-else class="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd"/>
                      </svg>
                    </div>
                    
                    <div v-if="hasDocument(sale.id, docType.type)" class="space-y-2">
                      <div v-for="doc in getDocuments(sale.id, docType.type)" :key="doc.id" class="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-700 rounded">
                        <div class="flex items-center space-x-2">
                          <svg class="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clip-rule="evenodd"/>
                          </svg>
                          <span class="text-sm text-brand-navy dark:text-white">{{ doc.document_name }}</span>
                        </div>
                        <div class="flex items-center space-x-2">
                          <span class="text-xs text-gray-500">{{ formatDate(doc.upload_date) }}</span>
                          <button class="text-blue-600 dark:text-blue-400 hover:text-blue-700 text-xs">View</button>
                        </div>
                      </div>
                    </div>
                    
                    <div v-else class="text-center py-4">
                      <p class="text-sm text-gray-500 mb-2">{{ docType.description }}</p>
                      <button class="text-brand-turqoise-light hover:text-teal-500 text-sm font-medium">Upload {{ docType.name }}</button>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Communication Log -->
              <div class="px-6 pb-6">
                <h4 class="font-medium text-brand-navy dark:text-white mb-3">Recent Updates</h4>
                <div class="space-y-2">
                  <div v-for="update in sale.recentUpdates" :key="update.id" class="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div class="w-8 h-8 bg-brand-turqoise-light/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg class="w-4 h-4 text-brand-turqoise-light" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/>
                      </svg>
                    </div>
                    <div class="flex-1">
                      <p class="text-sm text-brand-navy dark:text-white">{{ update.message }}</p>
                      <p class="text-xs text-gray-500">{{ update.timestamp }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Inquiries Tab -->
        <div v-if="activeTab === 'inquiries'" class="p-6">
          <div class="flex items-center justify-between mb-6">
            <h2 class="text-2xl font-bold text-brand-navy dark:text-white">Buyer Inquiries</h2>
            <div class="flex items-center space-x-4">
              <select class="border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-brand-navy dark:text-white rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-turqoise-light">
                <option>All Inquiries</option>
                <option>Unread</option>
                <option>Responded</option>
                <option>High Priority</option>
              </select>
              <button class="bg-brand-turqoise-light text-brand-navy px-6 py-3 rounded-lg font-semibold hover:bg-teal-300 transition-colors">
                Mark All Read
              </button>
            </div>
          </div>

          <!-- Inquiries List -->
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
            <div class="p-6 border-b border-gray-100 dark:border-gray-600">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white">Recent Inquiries</h3>
            </div>
            
            <div class="p-6">
              <div class="space-y-4">
                <div v-for="inquiry in buyerInquiries" :key="inquiry.id" class="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  <div class="flex items-center space-x-4">
                    <div class="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-800 dark:to-blue-600 rounded-full flex items-center justify-center">
                      <span class="text-sm font-semibold text-blue-800 dark:text-blue-200">{{ inquiry.buyerInitials }}</span>
                    </div>
                    <div>
                      <h4 class="font-semibold text-brand-navy dark:text-white">{{ inquiry.buyerName }}</h4>
                      <p class="text-sm text-gray-500">{{ inquiry.propertyTitle }}</p>
                      <p class="text-xs text-gray-400">{{ inquiry.timestamp }}</p>
                    </div>
                  </div>
                  <div class="flex items-center space-x-3">
                    <span :class="['px-2 py-1 text-xs font-semibold rounded-full',
                                 inquiry.priority === 'High' ? 'bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-400' :
                                 inquiry.priority === 'Medium' ? 'bg-yellow-100 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-400' :
                                 'bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-400']">
                      {{ inquiry.priority }}
                    </span>
                    <button class="bg-brand-turqoise-light text-brand-navy px-4 py-2 rounded-lg text-sm font-semibold hover:bg-teal-300 transition-colors">
                      Respond
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Sales Tab -->
        <div v-if="activeTab === 'sales'" class="p-6">
          <div class="flex items-center justify-between mb-6">
            <h2 class="text-2xl font-bold text-brand-navy dark:text-white">Active Sales Process</h2>
            <div class="flex items-center space-x-4">
              <select class="border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-brand-navy dark:text-white rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-turqoise-light">
                <option>All Sales</option>
                <option>Under Contract</option>
                <option>Pending Completion</option>
                <option>Completed</option>
              </select>
              <button class="bg-brand-turqoise-light text-brand-navy px-6 py-3 rounded-lg font-semibold hover:bg-teal-300 transition-colors">
                Export Report
              </button>
            </div>
          </div>

          <!-- Sales Progress Cards -->
          <div class="space-y-6">
            <div v-for="sale in activeSalesList" :key="sale.id" class="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
              <div class="p-6">
                <div class="flex items-center justify-between mb-4">
                  <div>
                    <h3 class="text-lg font-semibold text-brand-navy dark:text-white">{{ sale.propertyTitle }}</h3>
                    <p class="text-sm text-gray-500">{{ sale.propertyAddress }}</p>
                  </div>
                  <div class="text-right">
                    <p class="text-2xl font-bold text-brand-navy dark:text-white">{{ formatCurrency(sale.salePrice) }}</p>
                    <p class="text-sm text-gray-500">Sale Price</p>
                  </div>
                </div>

                <!-- Milestone Progress -->
                <div class="grid grid-cols-4 gap-4 mb-6">
                  <div class="text-center">
                    <div class="w-8 h-8 bg-green-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                      <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                      </svg>
                    </div>
                    <p class="text-xs font-medium text-brand-navy dark:text-white">Offer Accepted</p>
                  </div>
                  <div class="text-center">
                    <div :class="['w-8 h-8 rounded-full mx-auto mb-2 flex items-center justify-center',
                                sale.progressPercentage >= 50 ? 'bg-green-500' : 'bg-gray-300']">
                      <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                      </svg>
                    </div>
                    <p class="text-xs font-medium text-brand-navy dark:text-white">Documentation</p>
                  </div>
                  <div class="text-center">
                    <div :class="['w-8 h-8 rounded-full mx-auto mb-2 flex items-center justify-center',
                                sale.progressPercentage >= 75 ? 'bg-green-500' : 'bg-gray-300']">
                      <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                      </svg>
                    </div>
                    <p class="text-xs font-medium text-brand-navy dark:text-white">Legal Review</p>
                  </div>
                  <div class="text-center">
                    <div :class="['w-8 h-8 rounded-full mx-auto mb-2 flex items-center justify-center',
                                sale.progressPercentage >= 100 ? 'bg-green-500' : 'bg-gray-300']">
                      <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                      </svg>
                    </div>
                    <p class="text-xs font-medium text-brand-navy dark:text-white">Completion</p>
                  </div>
                </div>

                <!-- Buyer Information -->
                <div class="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <h4 class="font-medium text-brand-navy dark:text-white mb-2">Buyer Details</h4>
                  <div class="grid grid-cols-2 gap-4">
                    <div>
                      <p class="text-sm font-medium text-brand-navy dark:text-white">{{ sale.buyerName }}</p>
                      <p class="text-xs text-gray-500">Primary Buyer</p>
                    </div>
                    <div>
                      <p class="text-sm font-medium text-brand-navy dark:text-white">{{ sale.currentMilestone }}</p>
                      <p class="text-xs text-gray-500">Current Status</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Viewings Tab -->
        <div v-if="activeTab === 'viewings'" class="p-6">
          <div class="flex items-center justify-between mb-6">
            <h2 class="text-2xl font-bold text-brand-navy dark:text-white">Property Viewings</h2>
            <div class="flex items-center space-x-4">
              <select class="border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-brand-navy dark:text-white rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-turqoise-light">
                <option>All Viewings</option>
                <option>Today</option>
                <option>This Week</option>
                <option>Upcoming</option>
              </select>
              <button class="bg-brand-turqoise-light text-brand-navy px-6 py-3 rounded-lg font-semibold hover:bg-teal-300 transition-colors flex items-center space-x-2">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                </svg>
                <span>Schedule Viewing</span>
              </button>
            </div>
          </div>

          <!-- Calendar View -->
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 p-6">
            <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Upcoming Viewings</h3>
            <div class="space-y-4">
              <div v-for="viewing in upcomingViewingsList" :key="viewing.id" class="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-600 rounded-lg">
                <div class="flex items-center space-x-4">
                  <div class="text-center">
                    <div class="text-lg font-bold text-brand-navy dark:text-white">{{ viewing.day }}</div>
                    <div class="text-sm text-gray-500">{{ viewing.month }}</div>
                  </div>
                  <div>
                    <h4 class="font-semibold text-brand-navy dark:text-white">{{ viewing.propertyTitle }}</h4>
                    <p class="text-sm text-gray-500">{{ viewing.buyerName }} • {{ viewing.time }}</p>
                    <p class="text-xs text-gray-400">{{ viewing.contactInfo }}</p>
                  </div>
                </div>
                <div class="flex items-center space-x-2">
                  <span :class="['px-2 py-1 text-xs font-semibold rounded-full',
                               viewing.status === 'Confirmed' ? 'bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-400' :
                               viewing.status === 'Pending' ? 'bg-yellow-100 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-400' :
                               'bg-gray-100 dark:bg-gray-600 text-gray-800 dark:text-gray-300']">
                    {{ viewing.status }}
                  </span>
                  <button class="text-blue-600 dark:text-blue-400 hover:text-blue-700 p-1">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Analytics Tab with Charts -->
        <div v-if="activeTab === 'analytics'" class="p-6">
          <h2 class="text-2xl font-bold text-brand-navy dark:text-white mb-6">Sales Analytics</h2>
          
          <!-- Analytics Cards -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Property Performance</h3>
              <div class="space-y-4">
                <div class="flex justify-between items-center">
                  <span class="text-sm text-brand-navy dark:text-gray-400">Average Days on Market</span>
                  <span class="font-semibold text-brand-navy dark:text-white">45 days</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-sm text-brand-navy dark:text-gray-400">Average Sale Price</span>
                  <span class="font-semibold text-brand-navy dark:text-white">{{ formatCurrency(averageSalePrice) }}</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-sm text-brand-navy dark:text-gray-400">Price vs Asking</span>
                  <span class="font-semibold text-brand-navy dark:text-white">96%</span>
                </div>
              </div>
            </div>

            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Buyer Interest</h3>
              <div class="space-y-4">
                <div class="flex justify-between items-center">
                  <span class="text-sm text-brand-navy dark:text-gray-400">Total Views</span>
                  <span class="font-semibold text-brand-navy dark:text-white">{{ viewsThisMonth }}</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-sm text-brand-navy dark:text-gray-400">Inquiry Rate</span>
                  <span class="font-semibold text-brand-navy dark:text-white">7.8%</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-sm text-brand-navy dark:text-gray-400">Viewing Conversion</span>
                  <span class="font-semibold text-brand-navy dark:text-white">24%</span>
                </div>
              </div>
            </div>

            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Market Position</h3>
              <div class="space-y-4">
                <div class="flex justify-between items-center">
                  <span class="text-sm text-brand-navy dark:text-gray-400">vs Market Average</span>
                  <span class="font-semibold text-green-600">+8%</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-sm text-brand-navy dark:text-gray-400">Sale Success Rate</span>
                  <span class="font-semibold text-brand-navy dark:text-white">85%</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-sm text-brand-navy dark:text-gray-400">Repeat Buyers</span>
                  <span class="font-semibold text-brand-navy dark:text-white">12%</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Charts Section -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <!-- Sales Revenue Trend Chart -->
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Monthly Sales Revenue</h3>
              <VChart ref="revenueChart" :option="revenueChartOption" class="h-64" />
            </div>

            <!-- Property Type Performance -->
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Sales by Property Type</h3>
              <VChart ref="propertyTypeChart" :option="propertyTypeChartOption" class="h-64" />
            </div>
          </div>

          <!-- Additional Charts -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <!-- Price Range Distribution -->
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Price Range Distribution</h3>
              <VChart ref="priceRangeChart" :option="priceRangeChartOption" class="h-64" />
            </div>

            <!-- Market Performance Comparison -->
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Days on Market vs Industry</h3>
              <VChart ref="marketComparisonChart" :option="marketComparisonChartOption" class="h-64" />
            </div>
          </div>
        </div>

        <!-- Profile & Settings Tab -->
        <div v-if="activeTab === 'profile'" class="p-6">
          <div class="flex items-center justify-between mb-6">
            <h2 class="text-2xl font-bold text-brand-navy dark:text-white">Profile & Verification</h2>
            <div class="flex items-center space-x-4">
              <div class="text-sm text-brand-navy dark:text-gray-400">
                Profile Completion: <span class="font-bold text-lg" :class="getProfileCompletionColor(profileCompletionScore)">{{ profileCompletionScore }}%</span>
              </div>
              <button class="bg-brand-turqoise-light text-brand-navy px-6 py-3 rounded-lg font-semibold hover:bg-teal-300 transition-colors">
                Save Changes
              </button>
            </div>
          </div>

          <!-- Verification Status Overview -->
          <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 mb-6">
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white">Seller Verification Status</h3>
              <div class="flex items-center space-x-2">
                <div class="relative w-16 h-16">
                  <svg class="w-16 h-16 transform -rotate-90" viewBox="0 0 36 36">
                    <path class="text-gray-200 dark:text-gray-600" stroke="currentColor" stroke-width="2" fill="none" d="M18 2.0845a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                    <path :class="getVerificationScoreColor(verificationScore)" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" :stroke-dasharray="`${verificationScore}, 100`" d="M18 2.0845a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                  </svg>
                  <div class="absolute inset-0 flex items-center justify-center">
                    <span class="text-sm font-bold text-brand-navy dark:text-white">{{ verificationScore }}%</span>
                  </div>
                </div>
                <span :class="getVerificationBadgeClass(verificationScore)" class="px-3 py-1 rounded-lg text-sm font-semibold">
                  {{ getVerificationLevel(verificationScore) }}
                </span>
              </div>
            </div>

            <div class="grid grid-cols-2 gap-6">
              <!-- Verification Items -->
              <div class="space-y-4">
                <h4 class="font-semibold text-brand-navy dark:text-white">Legal & Documentation</h4>
                
                <div class="space-y-3">
                  <div class="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div class="flex items-center space-x-2">
                      <svg class="w-4 h-4" :class="sellerProfile.property_ownership_verified ? 'text-green-500' : 'text-gray-400'" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                      </svg>
                      <span class="text-sm text-brand-navy dark:text-white">Property Ownership</span>
                    </div>
                    <span class="text-xs" :class="sellerProfile.property_ownership_verified ? 'text-green-600' : 'text-gray-500'">
                      {{ sellerProfile.property_ownership_verified ? '✓ Verified (+30 pts)' : 'Documents Required' }}
                    </span>
                  </div>

                  <div class="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div class="flex items-center space-x-2">
                      <svg class="w-4 h-4" :class="sellerProfile.legal_documents_verified ? 'text-green-500' : 'text-gray-400'" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                      </svg>
                      <span class="text-sm text-brand-navy dark:text-white">Legal Documentation</span>
                    </div>
                    <span class="text-xs" :class="sellerProfile.legal_documents_verified ? 'text-green-600' : 'text-gray-500'">
                      {{ sellerProfile.legal_documents_verified ? '✓ Verified (+25 pts)' : 'Setup Required' }}
                    </span>
                  </div>

                  <div class="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div class="flex items-center space-x-2">
                      <svg class="w-4 h-4" :class="sellerProfile.tax_documentation_verified ? 'text-green-500' : 'text-gray-400'" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                      </svg>
                      <span class="text-sm text-brand-navy dark:text-white">Tax Documentation</span>
                    </div>
                    <span class="text-xs" :class="sellerProfile.tax_documentation_verified ? 'text-green-600' : 'text-gray-500'">
                      {{ sellerProfile.tax_documentation_verified ? '✓ Verified (+20 pts)' : 'Documents Required' }}
                    </span>
                  </div>
                </div>
              </div>

              <!-- Banking Information -->
              <div class="space-y-4">
                <h4 class="font-semibold text-brand-navy dark:text-white">Banking & Finance</h4>
                
                <div class="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-600 rounded-lg">
                  <div class="flex items-center space-x-3">
                    <svg class="w-5 h-5" :class="sellerProfile.banking_verified ? 'text-green-500' : 'text-gray-400'" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M11.5 1L2 6v2h20V6l-9.5-5zM2 10v10a1 1 0 001 1h18a1 1 0 001-1V10H2zm8 7.5V14h4v3.5h-4z"/>
                    </svg>
                    <div>
                      <div class="font-medium text-brand-navy dark:text-white">Banking Details</div>
                      <div class="text-sm text-gray-500">Account for sale proceeds</div>
                    </div>
                  </div>
                  <div class="flex items-center space-x-2">
                    <span class="text-sm" :class="sellerProfile.banking_verified ? 'text-green-600' : 'text-gray-500'">
                      {{ sellerProfile.banking_verified ? 'Verified (+25 pts)' : 'Setup Required' }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Personal Information -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <!-- Basic Information -->
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Personal Information</h3>
              <div class="space-y-4">
                <div>
                  <label class="block text-sm font-medium text-brand-navy dark:text-gray-300 mb-2">Full Name</label>
                  <input type="text" v-model="sellerPersonalInfo.fullName" class="w-full px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-turqoise-light bg-white dark:bg-gray-700 text-brand-navy dark:text-white">
                </div>
                <div>
                  <label class="block text-sm font-medium text-brand-navy dark:text-gray-300 mb-2">Email</label>
                  <input type="email" v-model="sellerPersonalInfo.email" class="w-full px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-turqoise-light bg-white dark:bg-gray-700 text-brand-navy dark:text-white">
                </div>
                <div>
                  <label class="block text-sm font-medium text-brand-navy dark:text-gray-300 mb-2">Phone Number</label>
                  <input type="tel" v-model="sellerPersonalInfo.phone" class="w-full px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-turqoise-light bg-white dark:bg-gray-700 text-brand-navy dark:text-white">
                </div>
                <div>
                  <label class="block text-sm font-medium text-brand-navy dark:text-gray-300 mb-2">Years as Property Owner</label>
                  <select v-model="sellerPersonalInfo.experience" class="w-full px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-turqoise-light bg-white dark:bg-gray-700 text-brand-navy dark:text-white">
                    <option value="0-1">0-1 years</option>
                    <option value="2-5">2-5 years</option>
                    <option value="6-10">6-10 years</option>
                    <option value="10+">10+ years</option>
                  </select>
                </div>
              </div>
            </div>

            <!-- Property Portfolio Details -->
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Property Portfolio</h3>
              <div class="space-y-4">
                <div>
                  <label class="block text-sm font-medium text-brand-navy dark:text-gray-300 mb-2">Total Properties Owned</label>
                  <input type="number" v-model="sellerPersonalInfo.totalPropertiesOwned" min="1" class="w-full px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-turqoise-light bg-white dark:bg-gray-700 text-brand-navy dark:text-white">
                </div>
                <div>
                  <label class="block text-sm font-medium text-brand-navy dark:text-gray-300 mb-2">Property Types</label>
                  <div class="grid grid-cols-2 gap-2">
                    <label v-for="type in propertyTypes" :key="type" class="flex items-center">
                      <input type="checkbox" :value="type" v-model="sellerPersonalInfo.propertyTypes" class="mr-2">
                      <span class="text-sm text-brand-navy dark:text-white">{{ type }}</span>
                    </label>
                  </div>
                </div>
                <div>
                  <label class="block text-sm font-medium text-brand-navy dark:text-gray-300 mb-2">Primary Investment Area</label>
                  <select v-model="sellerPersonalInfo.primaryArea" class="w-full px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-turqoise-light bg-white dark:bg-gray-700 text-brand-navy dark:text-white">
                    <option value="">Select Area</option>
                    <option value="sukhumvit">Sukhumvit</option>
                    <option value="silom">Silom</option>
                    <option value="thonglor">Thonglor</option>
                    <option value="ekkamai">Ekkamai</option>
                    <option value="phrom-phong">Phrom Phong</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { LineChart, BarChart, PieChart } from 'echarts/charts'
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent
} from 'echarts/components'
import VChart from 'vue-echarts'

// Register ECharts components
use([
  CanvasRenderer,
  LineChart,
  BarChart,
  PieChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent
])

// Meta tags
useHead({
  title: 'Seller Dashboard - ThaiKeys',
  meta: [
    {
      name: 'description',
      content: 'Professional seller dashboard for managing property sales, buyer inquiries, and sale documentation on ThaiKeys platform.'
    }
  ]
})

// Reactive data
const searchQuery = ref('')
const activeTab = ref('overview')
const unreadNotifications = ref(3)

// Seller Profile
const sellerProfile = ref({
  property_ownership_verified: true,
  banking_verified: false,
  legal_documents_verified: false,
  tax_documentation_verified: false
})

// Personal Information
const sellerPersonalInfo = ref({
  fullName: 'Sarah Thompson',
  email: 'sarah.thompson@email.com',
  phone: '+66 2 456 7890',
  experience: '2-5',
  totalPropertiesOwned: 3,
  propertyTypes: ['Condos', 'Houses'],
  primaryArea: 'thonglor'
})

const propertyTypes = ['Condos', 'Houses', 'Townhouses', 'Land', 'Commercial']

// Seller statistics
const totalProperties = ref(3)
const pendingInquiries = ref(8)
const activeSales = ref(2)
const upcomingViewings = ref(5)
const totalDocuments = ref(24)
const averageSalePrice = ref(12500000)
const viewsThisMonth = ref(156)
const inquiriesThisMonth = ref(12)

// Chart refs
const revenueChart = ref(null)
const propertyTypeChart = ref(null)
const priceRangeChart = ref(null)
const marketComparisonChart = ref(null)

// Chart options for seller analytics
const revenueChartOption = ref({
  tooltip: {
    trigger: 'axis',
    formatter: function(params) {
      return `${params[0].name}<br/>Revenue: ฿${params[0].value.toLocaleString()}M`
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  },
  yAxis: {
    type: 'value',
    axisLabel: {
      formatter: '฿{value}M'
    }
  },
  series: [
    {
      name: 'Sales Revenue',
      type: 'line',
      smooth: true,
      lineStyle: {
        color: '#10B981'
      },
      itemStyle: {
        color: '#10B981'
      },
      areaStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            { offset: 0, color: 'rgba(16, 185, 129, 0.3)' },
            { offset: 1, color: 'rgba(16, 185, 129, 0.1)' }
          ]
        }
      },
      data: [15, 25, 18, 32, 28, 45, 38, 52, 48, 35, 42, 55]
    }
  ]
})

const propertyTypeChartOption = ref({
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b}: ฿{c}M ({d}%)'
  },
  legend: {
    orient: 'vertical',
    left: 'left'
  },
  series: [
    {
      name: 'Sales Value',
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      data: [
        { value: 120, name: 'Condos' },
        { value: 85, name: 'Houses' },
        { value: 65, name: 'Penthouses' },
        { value: 30, name: 'Townhouses' }
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      },
      itemStyle: {
        color: function(params) {
          const colors = ['#05C7BE', '#10B981', '#1E3A8A', '#8B5CF6']
          return colors[params.dataIndex]
        }
      }
    }
  ]
})

const priceRangeChartOption = ref({
  tooltip: {
    trigger: 'axis',
    formatter: function(params) {
      return `${params[0].name}<br/>Properties Sold: ${params[0].value}`
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'category',
    data: ['<5M', '5-10M', '10-15M', '15-20M', '20-30M', '>30M']
  },
  yAxis: {
    type: 'value',
    axisLabel: {
      formatter: '{value}'
    }
  },
  series: [
    {
      name: 'Properties Sold',
      type: 'bar',
      itemStyle: {
        color: '#05C7BE'
      },
      data: [8, 15, 12, 6, 4, 2]
    }
  ]
})

const marketComparisonChartOption = ref({
  tooltip: {
    trigger: 'axis',
    formatter: function(params) {
      return `${params[0].name}<br/>${params[0].seriesName}: ${params[0].value} days<br/>${params[1].seriesName}: ${params[1].value} days`
    }
  },
  legend: {
    data: ['Your Properties', 'Market Average']
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'category',
    data: ['Condos', 'Houses', 'Penthouses', 'Townhouses']
  },
  yAxis: {
    type: 'value',
    axisLabel: {
      formatter: '{value} days'
    }
  },
  series: [
    {
      name: 'Your Properties',
      type: 'bar',
      itemStyle: {
        color: '#10B981'
      },
      data: [32, 45, 28, 52]
    },
    {
      name: 'Market Average',
      type: 'bar',
      itemStyle: {
        color: '#6B7280'
      },
      data: [45, 58, 38, 65]
    }
  ]
})

// Computed Properties
const verificationScore = computed(() => {
  let score = 0
  if (sellerProfile.value.property_ownership_verified) score += 30
  if (sellerProfile.value.banking_verified) score += 25
  if (sellerProfile.value.legal_documents_verified) score += 25
  if (sellerProfile.value.tax_documentation_verified) score += 20
  return score
})

const profileCompletionScore = computed(() => {
  let score = 0
  if (sellerPersonalInfo.value.fullName) score += 20
  if (sellerPersonalInfo.value.email) score += 15
  if (sellerPersonalInfo.value.phone) score += 15
  if (sellerPersonalInfo.value.totalPropertiesOwned > 0) score += 15
  if (sellerPersonalInfo.value.propertyTypes.length > 0) score += 15
  if (sellerProfile.value.banking_verified) score += 20
  return score
})

const profileComplete = computed(() => profileCompletionScore.value >= 80)

// Recent activity data
const recentActivity = ref([
  {
    id: 1,
    buyer: 'John Davis',
    property: 'Luxury Villa, Thonglor',
    action: 'New Inquiry',
    type: 'inquiry',
    time: '1 hour ago',
    amount: null
  },
  {
    id: 2,
    buyer: 'Emma Wilson',
    property: 'Modern Condo, Sukhumvit',
    action: 'Viewing Scheduled',
    type: 'viewing',
    time: '3 hours ago'
  },
  {
    id: 3,
    buyer: 'David Kim',
    property: 'Penthouse, Asok',
    action: 'Offer Submitted',
    type: 'offer',
    time: '1 day ago',
    amount: 15000000
  }
])

// Properties for sale data
const propertiesForSale = ref([
  {
    id: 1,
    title: 'Luxury Villa with Pool',
    location: 'Thonglor 15, Bangkok',
    price: '฿18,500,000',
    bedrooms: 4,
    bathrooms: 5,
    status: 'Active',
    type: 'House',
    views: 89,
    inquiries: 12,
    daysListed: 45
  },
  {
    id: 2,
    title: 'Modern 2BR Condo',
    location: 'Sukhumvit 24, Bangkok',
    price: '฿8,200,000',
    bedrooms: 2,
    bathrooms: 2,
    status: 'Under Contract',
    type: 'Condo',
    views: 156,
    inquiries: 28,
    daysListed: 23
  },
  {
    id: 3,
    title: 'Penthouse Suite',
    location: 'Asok, Bangkok',
    price: '฿25,000,000',
    bedrooms: 3,
    bathrooms: 4,
    status: 'Active',
    type: 'Penthouse',
    views: 203,
    inquiries: 15,
    daysListed: 67
  }
])

// Buyer inquiries data
const buyerInquiries = ref([
  {
    id: 1,
    buyerName: 'John Davis',
    buyerInitials: 'JD',
    propertyTitle: 'Luxury Villa with Pool',
    message: 'Interested in scheduling a viewing this weekend. Is the property still available?',
    timestamp: '2 hours ago',
    priority: 'High',
    status: 'Unread'
  },
  {
    id: 2,
    buyerName: 'Lisa Wang',
    buyerInitials: 'LW',
    propertyTitle: 'Modern 2BR Condo',
    message: 'What are the monthly maintenance fees for this condo?',
    timestamp: '5 hours ago',
    priority: 'Medium',
    status: 'Responded'
  },
  {
    id: 3,
    buyerName: 'Michael Brown',
    buyerInitials: 'MB',
    propertyTitle: 'Penthouse Suite',
    message: 'Can you provide more details about the building amenities?',
    timestamp: '1 day ago',
    priority: 'Low',
    status: 'Read'
  },
  {
    id: 4,
    buyerName: 'Anna Chen',
    buyerInitials: 'AC',
    propertyTitle: 'Luxury Villa with Pool',
    message: 'I would like to make an offer. Please contact me as soon as possible.',
    timestamp: '2 days ago',
    priority: 'High',
    status: 'Responded'
  }
])

// Upcoming viewings data
const upcomingViewingsList = ref([
  {
    id: 1,
    propertyTitle: 'Luxury Villa with Pool',
    buyerName: 'John Davis',
    day: '15',
    month: 'Nov',
    time: '2:00 PM',
    contactInfo: '+66 81 234 5678',
    status: 'Confirmed'
  },
  {
    id: 2,
    propertyTitle: 'Penthouse Suite',
    buyerName: 'Michael Brown',
    day: '16',
    month: 'Nov',
    time: '10:30 AM',
    contactInfo: '+66 82 345 6789',
    status: 'Confirmed'
  },
  {
    id: 3,
    propertyTitle: 'Modern 2BR Condo',
    buyerName: 'Sarah Wilson',
    day: '17',
    month: 'Nov',
    time: '4:00 PM',
    contactInfo: '+66 83 456 7890',
    status: 'Pending'
  },
  {
    id: 4,
    propertyTitle: 'Luxury Villa with Pool',
    buyerName: 'David Kim',
    day: '18',
    month: 'Nov',
    time: '11:00 AM',
    contactInfo: '+66 84 567 8901',
    status: 'Confirmed'
  },
  {
    id: 5,
    propertyTitle: 'Penthouse Suite',
    buyerName: 'Emma Thompson',
    day: '19',
    month: 'Nov',
    time: '3:30 PM',
    contactInfo: '+66 85 678 9012',
    status: 'Pending'
  }
])

// Active sales with document progress
const activeSalesList = ref([
  {
    id: 1,
    propertyTitle: 'Modern 2BR Condo',
    propertyAddress: 'Sukhumvit 24, Bangkok',
    buyerName: 'Emma Wilson',
    salePrice: 8200000,
    status: 'Under Contract',
    progressPercentage: 65,
    currentMilestone: 'Documentation Phase',
    recentUpdates: [
      {
        id: 1,
        message: 'Purchase agreement signed by buyer',
        timestamp: '2 hours ago'
      },
      {
        id: 2,
        message: 'Deposit received and confirmed',
        timestamp: '1 day ago'
      },
      {
        id: 3,
        message: 'Property valuation completed',
        timestamp: '3 days ago'
      }
    ]
  },
  {
    id: 2,
    propertyTitle: 'Penthouse Suite',
    propertyAddress: 'Asok, Bangkok',
    buyerName: 'David Kim',
    salePrice: 25000000,
    status: 'Pending Completion',
    progressPercentage: 85,
    currentMilestone: 'Legal Review',
    recentUpdates: [
      {
        id: 1,
        message: 'Legal documents submitted for review',
        timestamp: '4 hours ago'
      },
      {
        id: 2,
        message: 'Final inspection scheduled',
        timestamp: '2 days ago'
      }
    ]
  }
])

// Document types for purchase process
const documentTypes = ref([
  {
    type: 'purchase_agreement',
    name: 'Purchase Agreement',
    description: 'Signed contract between buyer and seller'
  },
  {
    type: 'property_title',
    name: 'Property Title Deed',
    description: 'Official ownership documents'
  },
  {
    type: 'valuation_report',
    name: 'Property Valuation',
    description: 'Professional property assessment'
  },
  {
    type: 'tax_documents',
    name: 'Tax Documentation',
    description: 'Tax clearance and related documents'
  },
  {
    type: 'legal_clearance',
    name: 'Legal Clearance',
    description: 'Legal verification documents'
  },
  {
    type: 'transfer_documents',
    name: 'Transfer Documents',
    description: 'Property transfer paperwork'
  }
])

// Sample documents data
const saleDocuments = ref([
  {
    id: 1,
    purchase_id: 1,
    document_type: 'purchase_agreement',
    document_name: 'Purchase_Agreement_Condo_Sukhumvit24.pdf',
    upload_date: '2024-03-15T10:30:00Z',
    is_visible_to_buyer: true,
    is_visible_to_seller: true
  },
  {
    id: 2,
    purchase_id: 1,
    document_type: 'property_title',
    document_name: 'Title_Deed_Condo_Unit_2402.pdf',
    upload_date: '2024-03-14T14:20:00Z',
    is_visible_to_buyer: true,
    is_visible_to_seller: true
  },
  {
    id: 3,
    purchase_id: 2,
    document_type: 'valuation_report',
    document_name: 'Valuation_Report_Penthouse_Asok.pdf',
    upload_date: '2024-03-16T09:15:00Z',
    is_visible_to_buyer: true,
    is_visible_to_seller: true
  },
  {
    id: 4,
    purchase_id: 1,
    document_type: 'tax_documents',
    document_name: 'Tax_Clearance_Certificate.pdf',
    upload_date: '2024-03-17T11:45:00Z',
    is_visible_to_buyer: true,
    is_visible_to_seller: true
  },
  {
    id: 5,
    purchase_id: 2,
    document_type: 'legal_clearance',
    document_name: 'Legal_Verification_Report.pdf',
    upload_date: '2024-03-18T08:20:00Z',
    is_visible_to_buyer: true,
    is_visible_to_seller: true
  }
])

// Methods
const formatCurrency = (amount) => {
  return new Intl.NumberFormat('th-TH', {
    style: 'currency',
    currency: 'THB',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount).replace('THB', '฿')
}

const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}

const hasDocument = (saleId, documentType) => {
  return saleDocuments.value.some(doc => 
    doc.purchase_id === saleId && 
    doc.document_type === documentType &&
    doc.is_visible_to_seller
  )
}

const getDocuments = (saleId, documentType) => {
  return saleDocuments.value.filter(doc => 
    doc.purchase_id === saleId && 
    doc.document_type === documentType &&
    doc.is_visible_to_seller
  )
}

const getVerificationScoreColor = (score) => {
  if (score >= 80) return 'text-green-500'
  if (score >= 60) return 'text-blue-500'
  if (score >= 40) return 'text-yellow-500'
  return 'text-red-500'
}

const getVerificationLevel = (score) => {
  if (score >= 80) return 'Verified Seller'
  if (score >= 60) return 'Basic Verification'
  if (score >= 40) return 'Partial Verification'
  return 'Unverified'
}

const getVerificationBadgeClass = (score) => {
  if (score >= 80) return 'bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-400'
  if (score >= 60) return 'bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-400'
  if (score >= 40) return 'bg-yellow-100 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-400'
  return 'bg-gray-100 dark:bg-gray-600 text-gray-800 dark:text-gray-300'
}

const getProfileCompletionColor = (score) => {
  if (score >= 80) return 'text-green-600'
  if (score >= 60) return 'text-blue-600'
  if (score >= 40) return 'text-yellow-600'
  return 'text-red-600'
}

// Handle window resize for charts
const handleResize = () => {
  if (revenueChart.value) revenueChart.value.resize()
  if (propertyTypeChart.value) propertyTypeChart.value.resize()
  if (priceRangeChart.value) priceRangeChart.value.resize()
  if (marketComparisonChart.value) marketComparisonChart.value.resize()
}

// Lifecycle hooks
onMounted(() => {
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<style scoped>
/* Ensure proper layout */
.flex {
  display: flex;
}

.flex-1 {
  flex: 1;
}

.flex-shrink-0 {
  flex-shrink: 0;
}

/* Fix positioning issues */
.relative {
  position: relative;
}

.absolute {
  position: absolute;
}

.inset-0 {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

/* Custom scrollbar for webkit browsers */
.overflow-y-auto::-webkit-scrollbar {
  width: 6px;
}

.overflow-y-auto::-webkit-scrollbar-track {
  background: transparent;
}

.overflow-y-auto::-webkit-scrollbar-thumb {
  background: rgba(156, 163, 175, 0.5);
  border-radius: 3px;
}

.overflow-y-auto::-webkit-scrollbar-thumb:hover {
  background: rgba(156, 163, 175, 0.7);
}

/* Dark mode scrollbar */
.dark .overflow-y-auto::-webkit-scrollbar-thumb {
  background: rgba(75, 85, 99, 0.5);
}

.dark .overflow-y-auto::-webkit-scrollbar-thumb:hover {
  background: rgba(75, 85, 99, 0.7);
}

/* Transition improvements */
.transition-colors {
  transition-property: color, background-color, border-color;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

/* Focus ring improvements */
.focus\:ring-2:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow, 0 0 #0000);
}

/* Custom checkbox styling */
input[type="checkbox"] {
  appearance: none;
  background-color: #fff;
  border: 1px solid #d1d5db;
  border-radius: 0.25rem;
  width: 1rem;
  height: 1rem;
  display: inline-block;
  position: relative;
  cursor: pointer;
}

input[type="checkbox"]:checked {
  background-color: #05c7be;
  border-color: #05c7be;
}

input[type="checkbox"]:checked::after {
  content: '✓';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 0.75rem;
  font-weight: bold;
}

.dark input[type="checkbox"] {
  background-color: #374151;
  border-color: #6b7280;
}

.dark input[type="checkbox"]:checked {
  background-color: #05c7be;
  border-color: #05c7be;
}
</style>