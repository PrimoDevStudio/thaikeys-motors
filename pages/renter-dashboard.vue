<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 font-sans transition-colors duration-300">

    <!-- Renter Info Bar -->
    <div class="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-4 transition-colors duration-300">
      <div class="flex items-center justify-between mx-auto">
        <!-- Renter Info -->
        <div class="flex items-center space-x-6">
          <div class="flex items-center space-x-3">
            <div class="w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 dark:from-green-800 dark:to-green-600 rounded-full flex items-center justify-center">
              <svg class="w-6 h-6 text-green-600 dark:text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5v4M16 5v4"/>
              </svg>
            </div>
          </div>
          
          <div class="text-sm text-brand-navy dark:text-gray-400">
            <span class="font-medium">Welcome back, Alex Johnson</span>
            <div class="text-xs text-gray-500 flex items-center space-x-2">
              <span>Property Renter</span>
              <span v-if="hasActiveLease" class="bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-400 px-2 py-0.5 rounded text-xs font-semibold">
                Active Lease
              </span>
              <span v-else class="bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-400 px-2 py-0.5 rounded text-xs font-semibold">
                Searching
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
              placeholder="Search properties, areas..."
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
            <div class="w-8 h-8 bg-gradient-to-br from-green-100 to-green-200 dark:from-green-800 dark:to-green-600 rounded-full"></div>
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
      <!-- Renter Sidebar Navigation -->
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
                     activeTab === 'search' ? 'bg-brand-turqoise-light text-brand-navy border border-teal-200' : 'text-brand-navy dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700']"
            @click="activeTab = 'search'"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
            <span class="font-medium">Property Search</span>
            <span v-if="savedSearches > 0" class="bg-brand-turqoise-light/20 text-brand-navy dark:text-brand-turqoise-light text-xs font-semibold px-2 py-1 rounded-full ml-auto">{{ savedSearches }}</span>
          </a>
          
          <a 
            href="#" 
            :class="['flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors', 
                     activeTab === 'favorites' ? 'bg-brand-turqoise-light text-brand-navy border border-teal-200' : 'text-brand-navy dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700']"
            @click="activeTab = 'favorites'"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
            </svg>
            <span class="font-medium">Favorites</span>
            <span class="bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-400 text-xs font-semibold px-2 py-1 rounded-full ml-auto">{{ favoriteProperties }}</span>
          </a>
          
          <a 
            href="#" 
            :class="['flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors', 
                     activeTab === 'applications' ? 'bg-brand-turqoise-light text-brand-navy border border-teal-200' : 'text-brand-navy dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700']"
            @click="activeTab = 'applications'"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
            </svg>
            <span class="font-medium">Applications</span>
            <span class="bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-400 text-xs font-semibold px-2 py-1 rounded-full ml-auto">{{ pendingApplications }}</span>
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
            v-if="hasActiveLease"
            href="#" 
            :class="['flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors', 
                     activeTab === 'lease' ? 'bg-brand-turqoise-light text-brand-navy border border-teal-200' : 'text-brand-navy dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700']"
            @click="activeTab = 'lease'"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
            </svg>
            <span class="font-medium">My Lease</span>
            <span v-if="daysUntilRenewal <= 60" class="bg-yellow-100 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-400 text-xs font-semibold px-2 py-1 rounded-full ml-auto">Renewal</span>
          </a>
          
          <a 
            v-if="hasActiveLease"
            href="#" 
            :class="['flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors', 
                     activeTab === 'payments' ? 'bg-brand-turqoise-light text-brand-navy border border-teal-200' : 'text-brand-navy dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700']"
            @click="activeTab = 'payments'"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/>
            </svg>
            <span class="font-medium">Payments</span>
            <span v-if="overdueDays > 0" class="bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-400 text-xs font-semibold px-2 py-1 rounded-full ml-auto">Overdue</span>
          </a>
          
          <a 
            v-if="hasActiveLease"
            href="#" 
            :class="['flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors', 
                     activeTab === 'maintenance' ? 'bg-brand-turqoise-light text-brand-navy border border-teal-200' : 'text-brand-navy dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700']"
            @click="activeTab = 'maintenance'"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
            <span class="font-medium">Maintenance</span>
            <span v-if="openMaintenanceRequests > 0" class="bg-orange-100 dark:bg-orange-900/20 text-orange-800 dark:text-orange-400 text-xs font-semibold px-2 py-1 rounded-full ml-auto">{{ openMaintenanceRequests }}</span>
          </a>
          
          <a 
            href="#" 
            :class="['flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors', 
                     activeTab === 'messages' ? 'bg-brand-turqoise-light text-brand-navy border border-teal-200' : 'text-brand-navy dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700']"
            @click="activeTab = 'messages'"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
            </svg>
            <span class="font-medium">Messages</span>
            <span v-if="unreadMessages > 0" class="bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-400 text-xs font-semibold px-2 py-1 rounded-full ml-auto">{{ unreadMessages }}</span>
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
          <!-- Status Cards -->
          <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 transition-colors duration-300">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm font-medium text-brand-navy dark:text-gray-400">Saved Properties</p>
                  <p class="text-3xl font-bold text-brand-navy dark:text-white">{{ favoriteProperties }}</p>
                  <p class="text-sm text-red-600 dark:text-red-400 mt-2">{{ newMatchesToday }} new matches today</p>
                </div>
                <div class="w-12 h-12 bg-red-100 dark:bg-red-900/20 rounded-xl flex items-center justify-center">
                  <svg class="w-6 h-6 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                  </svg>
                </div>
              </div>
            </div>

            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 transition-colors duration-300">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm font-medium text-brand-navy dark:text-gray-400">Applications</p>
                  <p class="text-3xl font-bold text-brand-navy dark:text-white">{{ pendingApplications }}</p>
                  <p class="text-sm text-blue-600 dark:text-blue-400 mt-2">{{ applicationResponseRate }}% response rate</p>
                </div>
                <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-xl flex items-center justify-center">
                  <svg class="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                  </svg>
                </div>
              </div>
            </div>

            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 transition-colors duration-300">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm font-medium text-brand-navy dark:text-gray-400">Upcoming Viewings</p>
                  <p class="text-3xl font-bold text-brand-navy dark:text-white">{{ upcomingViewings }}</p>
                  <p class="text-sm text-orange-600 dark:text-orange-400 mt-2">{{ totalViewings }} total scheduled</p>
                </div>
                <div class="w-12 h-12 bg-orange-100 dark:bg-orange-900/20 rounded-xl flex items-center justify-center">
                  <svg class="w-6 h-6 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                  </svg>
                </div>
              </div>
            </div>

            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 transition-colors duration-300">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm font-medium text-brand-navy dark:text-gray-400">Budget Range</p>
                  <p class="text-3xl font-bold text-brand-navy dark:text-white">{{ formatCurrency(budgetMax) }}</p>
                  <p class="text-sm text-green-600 dark:text-green-400 mt-2">{{ availableInBudget }} properties available</p>
                </div>
                <div class="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-xl flex items-center justify-center">
                  <svg class="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"/>
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
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                  </svg>
                  <span>Search Properties</span>
                </button>
                
                <button class="w-full border-2 border-gray-200 dark:border-gray-600 text-brand-navy dark:text-gray-300 py-3 px-4 rounded-lg font-semibold hover:border-gray-300 dark:hover:border-gray-500 transition-colors flex items-center justify-center space-x-2">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                  </svg>
                  <span>Schedule Viewing</span>
                </button>
                
                <button v-if="hasActiveLease" class="w-full border-2 border-gray-200 dark:border-gray-600 text-brand-navy dark:text-gray-300 py-3 px-4 rounded-lg font-semibold hover:border-gray-300 dark:hover:border-gray-500 transition-colors flex items-center justify-center space-x-2">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/>
                  </svg>
                  <span>Pay Rent</span>
                </button>
                
                <button v-if="hasActiveLease" class="w-full border-2 border-gray-200 dark:border-gray-600 text-brand-navy dark:text-gray-300 py-3 px-4 rounded-lg font-semibold hover:border-gray-300 dark:hover:border-gray-500 transition-colors flex items-center justify-center space-x-2">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                  <span>Request Maintenance</span>
                </button>
              </div>
            </div>

            <!-- Recent Activity -->
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 transition-colors duration-300">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Recent Activity</h3>
              <div class="space-y-4">
                <div class="flex items-start space-x-3">
                  <div class="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p class="text-sm text-brand-navy dark:text-white font-medium">Application submitted</p>
                    <p class="text-xs text-gray-500">Sukhumvit Tower - Unit 2503</p>
                    <p class="text-xs text-gray-400">2 hours ago</p>
                  </div>
                </div>
                
                <div class="flex items-start space-x-3">
                  <div class="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p class="text-sm text-brand-navy dark:text-white font-medium">Viewing scheduled</p>
                    <p class="text-xs text-gray-500">Thonglor Residence - Tomorrow 3PM</p>
                    <p class="text-xs text-gray-400">1 day ago</p>
                  </div>
                </div>
                
                <div class="flex items-start space-x-3">
                  <div class="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p class="text-sm text-brand-navy dark:text-white font-medium">Saved to favorites</p>
                    <p class="text-xs text-gray-500">Bangkok Heights Condo</p>
                    <p class="text-xs text-gray-400">2 days ago</p>
                  </div>
                </div>
                
                <div class="flex items-start space-x-3">
                  <div class="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p class="text-sm text-brand-navy dark:text-white font-medium">New match found</p>
                    <p class="text-xs text-gray-500">Phrom Phong area - 2BR within budget</p>
                    <p class="text-xs text-gray-400">3 days ago</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Recommended Properties -->
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 transition-colors duration-300">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Recommended for You</h3>
              <div class="space-y-4">
                <div class="border border-gray-200 dark:border-gray-600 rounded-lg p-3">
                  <div class="flex items-center justify-between mb-2">
                    <h4 class="font-medium text-brand-navy dark:text-white">Bangkok Heights Tower</h4>
                    <span class="text-xs bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-400 px-2 py-1 rounded">95% Match</span>
                  </div>
                  <p class="text-sm text-gray-600 dark:text-gray-400">2BR • 65sqm • Sukhumvit 24</p>
                  <p class="text-sm font-semibold text-brand-navy dark:text-white">฿35,000/month</p>
                </div>
                
                <div class="border border-gray-200 dark:border-gray-600 rounded-lg p-3">
                  <div class="flex items-center justify-between mb-2">
                    <h4 class="font-medium text-brand-navy dark:text-white">Thonglor Residence</h4>
                    <span class="text-xs bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-400 px-2 py-1 rounded">88% Match</span>
                  </div>
                  <p class="text-sm text-gray-600 dark:text-gray-400">1BR • 45sqm • Thonglor 15</p>
                  <p class="text-sm font-semibold text-brand-navy dark:text-white">฿28,000/month</p>
                </div>
                
                <button class="w-full text-brand-turqoise-light hover:text-teal-600 transition-colors text-sm font-medium">
                  View all recommendations →
                </button>
              </div>
            </div>
          </div>
        </div>
        <!-- Property Search Tab -->
        <div v-if="activeTab === 'search'" class="p-6">
          <div class="flex items-center justify-between mb-6">
            <h2 class="text-2xl font-bold text-brand-navy dark:text-white">Property Search</h2>
            <button class="bg-brand-turqoise-light text-brand-navy px-6 py-3 rounded-lg font-semibold hover:bg-teal-300 transition-colors">
              Save Search Alert
            </button>
          </div>

          <!-- Search Filters -->
          <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 mb-6 transition-colors duration-300">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <!-- Location Filter -->
              <div>
                <label class="block text-sm font-medium text-brand-navy dark:text-gray-300 mb-2">Location</label>
                <select v-model="searchFilters.location" class="w-full px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-turqoise-light bg-white dark:bg-gray-700 text-brand-navy dark:text-white">
                  <option value="">All Areas</option>
                  <option value="sukhumvit">Sukhumvit</option>
                  <option value="silom">Silom</option>
                  <option value="thonglor">Thonglor</option>
                  <option value="ekkamai">Ekkamai</option>
                  <option value="phrom-phong">Phrom Phong</option>
                  <option value="asoke">Asoke</option>
                </select>
              </div>

              <!-- Property Type Filter -->
              <div>
                <label class="block text-sm font-medium text-brand-navy dark:text-gray-300 mb-2">Property Type</label>
                <select v-model="searchFilters.propertyType" class="w-full px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-turqoise-light bg-white dark:bg-gray-700 text-brand-navy dark:text-white">
                  <option value="">All Types</option>
                  <option value="condo">Condominium</option>
                  <option value="apartment">Apartment</option>
                  <option value="house">House</option>
                  <option value="townhouse">Townhouse</option>
                </select>
              </div>

              <!-- Bedrooms Filter -->
              <div>
                <label class="block text-sm font-medium text-brand-navy dark:text-gray-300 mb-2">Bedrooms</label>
                <select v-model="searchFilters.bedrooms" class="w-full px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-turqoise-light bg-white dark:bg-gray-700 text-brand-navy dark:text-white">
                  <option value="">Any</option>
                  <option value="studio">Studio</option>
                  <option value="1">1 Bedroom</option>
                  <option value="2">2 Bedrooms</option>
                  <option value="3">3 Bedrooms</option>
                  <option value="4+">4+ Bedrooms</option>
                </select>
              </div>

              <!-- Price Range Filter -->
              <div>
                <label class="block text-sm font-medium text-brand-navy dark:text-gray-300 mb-2">Monthly Rent</label>
                <select v-model="searchFilters.priceRange" class="w-full px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-turqoise-light bg-white dark:bg-gray-700 text-brand-navy dark:text-white">
                  <option value="">Any Price</option>
                  <option value="0-20000">Up to ฿20,000</option>
                  <option value="20000-35000">฿20,000 - ฿35,000</option>
                  <option value="35000-50000">฿35,000 - ฿50,000</option>
                  <option value="50000-80000">฿50,000 - ฿80,000</option>
                  <option value="80000+">฿80,000+</option>
                </select>
              </div>
            </div>

            <!-- Advanced Filters Toggle -->
            <div class="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
              <button @click="showAdvancedFilters = !showAdvancedFilters" class="flex items-center space-x-2 text-brand-turqoise-light hover:text-teal-600 transition-colors">
                <span>Advanced Filters</span>
                <svg :class="showAdvancedFilters ? 'rotate-180' : ''" class="w-4 h-4 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                </svg>
              </button>

              <!-- Advanced Filters -->
              <div v-if="showAdvancedFilters" class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                <div>
                  <label class="block text-sm font-medium text-brand-navy dark:text-gray-300 mb-2">Amenities</label>
                  <div class="space-y-2">
                    <label v-for="amenity in availableAmenities" :key="amenity" class="flex items-center">
                      <input type="checkbox" :value="amenity" v-model="searchFilters.amenities" class="mr-2">
                      <span class="text-sm text-brand-navy dark:text-white">{{ amenity }}</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label class="block text-sm font-medium text-brand-navy dark:text-gray-300 mb-2">Transportation</label>
                  <div class="space-y-2">
                    <label class="flex items-center">
                      <input type="checkbox" v-model="searchFilters.nearBTS" class="mr-2">
                      <span class="text-sm text-brand-navy dark:text-white">Near BTS/MRT (< 500m)</span>
                    </label>
                    <label class="flex items-center">
                      <input type="checkbox" v-model="searchFilters.parking" class="mr-2">
                      <span class="text-sm text-brand-navy dark:text-white">Parking Available</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label class="block text-sm font-medium text-brand-navy dark:text-gray-300 mb-2">Preferences</label>
                  <div class="space-y-2">
                    <label class="flex items-center">
                      <input type="checkbox" v-model="searchFilters.petFriendly" class="mr-2">
                      <span class="text-sm text-brand-navy dark:text-white">Pet Friendly</span>
                    </label>
                    <label class="flex items-center">
                      <input type="checkbox" v-model="searchFilters.furnished" class="mr-2">
                      <span class="text-sm text-brand-navy dark:text-white">Furnished</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Search Results -->
          <div class="space-y-6">
            <div class="flex items-center justify-between">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white">{{ filteredProperties.length }} properties found</h3>
              <div class="flex items-center space-x-4">
                <select v-model="sortBy" class="px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-turqoise-light bg-white dark:bg-gray-700 text-brand-navy dark:text-white">
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="newest">Newest First</option>
                  <option value="size-large">Size: Largest First</option>
                </select>
                
                <div class="flex items-center space-x-2">
                  <button :class="viewMode === 'grid' ? 'bg-brand-turqoise-light text-brand-navy' : 'bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-400'" class="p-2 rounded-lg">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/>
                    </svg>
                  </button>
                  <button :class="viewMode === 'list' ? 'bg-brand-turqoise-light text-brand-navy' : 'bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-400'" class="p-2 rounded-lg" @click="viewMode = 'list'">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <!-- Property Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div v-for="property in displayedProperties" :key="property.id" class="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden transition-all duration-300 hover:shadow-xl">
                <!-- Property Image -->
                <div class="relative h-48">
                  <img :src="property.image" :alt="property.title" class="w-full h-full object-cover">
                  <button @click="toggleFavorite(property.id)" class="absolute top-3 right-3 p-2 bg-white/80 dark:bg-gray-800/80 rounded-full hover:bg-white dark:hover:bg-gray-700 transition-colors">
                    <svg :class="property.isFavorite ? 'text-red-500 fill-current' : 'text-gray-400'" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                    </svg>
                  </button>
                  <div class="absolute top-3 left-3">
                    <span v-if="property.isNewListing" class="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-semibold">New</span>
                    <span v-if="property.isPetFriendly" class="bg-blue-500 text-white text-xs px-2 py-1 rounded-full font-semibold ml-1">Pet OK</span>
                  </div>
                </div>

                <!-- Property Details -->
                <div class="p-4">
                  <div class="flex items-start justify-between mb-2">
                    <h4 class="font-semibold text-brand-navy dark:text-white">{{ property.title }}</h4>
                    <span class="text-lg font-bold text-brand-navy dark:text-white">{{ formatCurrency(property.price) }}/mo</span>
                  </div>
                  
                  <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">{{ property.location }}</p>
                  
                  <div class="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                    <span>{{ property.bedrooms }} bed</span>
                    <span>{{ property.bathrooms }} bath</span>
                    <span>{{ property.size }}m²</span>
                  </div>
                  
                  <!-- Amenities -->
                  <div class="flex flex-wrap gap-1 mb-3">
                    <span v-for="amenity in property.amenities.slice(0, 3)" :key="amenity" class="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded">
                      {{ amenity }}
                    </span>
                    <span v-if="property.amenities.length > 3" class="text-xs text-gray-500">+{{ property.amenities.length - 3 }} more</span>
                  </div>
                  
                  <!-- Action Buttons -->
                  <div class="flex space-x-2">
                    <button class="flex-1 bg-brand-turqoise-light text-brand-navy py-2 px-4 rounded-lg font-medium hover:bg-teal-300 transition-colors text-sm">
                      View Details
                    </button>
                    <button class="flex-1 border border-gray-200 dark:border-gray-600 text-brand-navy dark:text-gray-300 py-2 px-4 rounded-lg font-medium hover:border-gray-300 dark:hover:border-gray-500 transition-colors text-sm">
                      Schedule Tour
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <!-- Pagination -->
            <div class="flex items-center justify-center space-x-2 mt-8">
              <button class="px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg text-brand-navy dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                Previous
              </button>
              <button class="px-4 py-2 bg-brand-turqoise-light text-brand-navy rounded-lg font-medium">1</button>
              <button class="px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg text-brand-navy dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">2</button>
              <button class="px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg text-brand-navy dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">3</button>
              <button class="px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg text-brand-navy dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                Next
              </button>
            </div>
          </div>
        </div>
        <!-- Favorites Tab -->
        <div v-if="activeTab === 'favorites'" class="p-6">
          <div class="flex items-center justify-between mb-6">
            <div>
              <h2 class="text-2xl font-bold text-brand-navy dark:text-white">Saved Properties</h2>
              <p class="text-gray-600 dark:text-gray-400">{{ favoritesList.length }} properties saved</p>
            </div>
            <div class="flex items-center space-x-4">
              <button class="bg-brand-turqoise-light text-brand-navy px-6 py-3 rounded-lg font-semibold hover:bg-teal-300 transition-colors">
                Create Alert from Favorites
              </button>
              <select v-model="favoritesSort" class="px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-turqoise-light bg-white dark:bg-gray-700 text-brand-navy dark:text-white">
                <option value="newest">Recently Added</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="location">By Location</option>
              </select>
            </div>
          </div>

          <!-- Favorites Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div v-for="property in sortedFavorites" :key="property.id" class="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden transition-all duration-300 hover:shadow-xl">
              <!-- Property Image -->
              <div class="relative h-48">
                <img :src="property.image" :alt="property.title" class="w-full h-full object-cover">
                <button @click="removeFavorite(property.id)" class="absolute top-3 right-3 p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                </button>
                <div class="absolute top-3 left-3">
                  <span v-if="property.status === 'available'" class="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-semibold">Available</span>
                  <span v-else-if="property.status === 'pending'" class="bg-yellow-500 text-white text-xs px-2 py-1 rounded-full font-semibold">Pending</span>
                  <span v-else class="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-semibold">Rented</span>
                </div>
                <div class="absolute bottom-3 left-3">
                  <span class="bg-black/50 text-white text-xs px-2 py-1 rounded-full">Saved {{ formatDate(property.savedDate) }}</span>
                </div>
              </div>

              <!-- Property Details -->
              <div class="p-4">
                <div class="flex items-start justify-between mb-2">
                  <h4 class="font-semibold text-brand-navy dark:text-white">{{ property.title }}</h4>
                  <span class="text-lg font-bold text-brand-navy dark:text-white">{{ formatCurrency(property.price) }}/mo</span>
                </div>
                
                <p class="text-sm text-gray-600 dark:text-gray-400 mb-2 flex items-center">
                  <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                  {{ property.location }}
                </p>
                
                <div class="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                  <span class="flex items-center">
                    <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"/>
                    </svg>
                    {{ property.bedrooms }} bed
                  </span>
                  <span class="flex items-center">
                    <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"/>
                    </svg>
                    {{ property.bathrooms }} bath
                  </span>
                  <span class="flex items-center">
                    <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"/>
                    </svg>
                    {{ property.size }}m²
                  </span>
                </div>
                
                <!-- Price Analysis -->
                <div class="bg-gray-50 dark:bg-gray-700 rounded-lg p-3 mb-3">
                  <div class="flex items-center justify-between text-sm">
                    <span class="text-gray-600 dark:text-gray-400">Market Price</span>
                    <span :class="property.priceComparison === 'below' ? 'text-green-600' : property.priceComparison === 'above' ? 'text-red-600' : 'text-gray-600'" class="font-semibold">
                      {{ property.priceComparison === 'below' ? '↓' : property.priceComparison === 'above' ? '↑' : '→' }}
                      {{ property.marketComparison }}% {{ property.priceComparison === 'below' ? 'below' : property.priceComparison === 'above' ? 'above' : 'at' }} market
                    </span>
                  </div>
                </div>
                
                <!-- Action Buttons -->
                <div class="space-y-2">
                  <div class="flex space-x-2">
                    <button :disabled="property.status !== 'available'" :class="property.status === 'available' ? 'bg-brand-turqoise-light text-brand-navy hover:bg-teal-300' : 'bg-gray-300 text-gray-500 cursor-not-allowed'" class="flex-1 py-2 px-4 rounded-lg font-medium transition-colors text-sm">
                      {{ property.status === 'available' ? 'View Details' : 'Not Available' }}
                    </button>
                    <button :disabled="property.status !== 'available'" :class="property.status === 'available' ? 'border border-gray-200 dark:border-gray-600 text-brand-navy dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-500' : 'border border-gray-300 text-gray-400 cursor-not-allowed'" class="flex-1 py-2 px-4 rounded-lg font-medium transition-colors text-sm">
                      {{ property.status === 'available' ? 'Schedule Tour' : 'Unavailable' }}
                    </button>
                  </div>
                  
                  <div class="flex space-x-2">
                    <button class="flex-1 border border-blue-200 dark:border-blue-600 text-blue-600 dark:text-blue-400 py-2 px-4 rounded-lg font-medium hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors text-sm flex items-center justify-center">
                      <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                      </svg>
                      Apply Now
                    </button>
                    <button class="flex-1 border border-gray-200 dark:border-gray-600 text-brand-navy dark:text-gray-300 py-2 px-4 rounded-lg font-medium hover:border-gray-300 dark:hover:border-gray-500 transition-colors text-sm flex items-center justify-center">
                      <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"/>
                      </svg>
                      Share
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Empty State -->
          <div v-if="favoritesList.length === 0" class="text-center py-12">
            <svg class="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
            </svg>
            <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-2">No Saved Properties</h3>
            <p class="text-gray-600 dark:text-gray-400 mb-4">Start saving properties you're interested in to see them here</p>
            <button @click="activeTab = 'search'" class="bg-brand-turqoise-light text-brand-navy px-6 py-3 rounded-lg font-semibold hover:bg-teal-300 transition-colors">
              Browse Properties
            </button>
          </div>
        </div>
        <!-- Applications Tab -->
        <div v-if="activeTab === 'applications'" class="p-6">
          <div class="flex items-center justify-between mb-6">
            <div>
              <h2 class="text-2xl font-bold text-brand-navy dark:text-white">Rental Applications</h2>
              <p class="text-gray-600 dark:text-gray-400">{{ totalApplications }} total applications, {{ pendingApplications }} pending review</p>
            </div>
            <button class="bg-brand-turqoise-light text-brand-navy px-6 py-3 rounded-lg font-semibold hover:bg-teal-300 transition-colors">
              New Application
            </button>
          </div>

          <!-- Application Status Overview -->
          <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 transition-colors duration-300">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm font-medium text-gray-600 dark:text-gray-400">Pending Review</p>
                  <p class="text-3xl font-bold text-blue-600 dark:text-blue-400">{{ pendingApplications }}</p>
                  <p class="text-sm text-gray-500 mt-1">Awaiting landlord response</p>
                </div>
                <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-xl flex items-center justify-center">
                  <svg class="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
              </div>
            </div>

            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 transition-colors duration-300">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm font-medium text-gray-600 dark:text-gray-400">Approved</p>
                  <p class="text-3xl font-bold text-green-600 dark:text-green-400">{{ approvedApplications }}</p>
                  <p class="text-sm text-gray-500 mt-1">Ready to proceed</p>
                </div>
                <div class="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-xl flex items-center justify-center">
                  <svg class="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
              </div>
            </div>

            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 transition-colors duration-300">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm font-medium text-gray-600 dark:text-gray-400">Rejected</p>
                  <p class="text-3xl font-bold text-red-600 dark:text-red-400">{{ rejectedApplications }}</p>
                  <p class="text-sm text-gray-500 mt-1">Need improvement</p>
                </div>
                <div class="w-12 h-12 bg-red-100 dark:bg-red-900/20 rounded-xl flex items-center justify-center">
                  <svg class="w-6 h-6 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                </div>
              </div>
            </div>

            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 transition-colors duration-300">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm font-medium text-gray-600 dark:text-gray-400">Success Rate</p>
                  <p class="text-3xl font-bold text-brand-navy dark:text-white">{{ applicationResponseRate }}%</p>
                  <p class="text-sm text-gray-500 mt-1">Application approval rate</p>
                </div>
                <div class="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-xl flex items-center justify-center">
                  <svg class="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <!-- Applications List -->
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 transition-colors duration-300">
            <div class="p-6 border-b border-gray-200 dark:border-gray-600">
              <div class="flex items-center justify-between">
                <h3 class="text-lg font-semibold text-brand-navy dark:text-white">Recent Applications</h3>
                <select v-model="applicationFilter" class="px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-turqoise-light bg-white dark:bg-gray-700 text-brand-navy dark:text-white">
                  <option value="all">All Applications</option>
                  <option value="pending">Pending</option>
                  <option value="approved">Approved</option>
                  <option value="rejected">Rejected</option>
                </select>
              </div>
            </div>

            <div class="divide-y divide-gray-200 dark:divide-gray-600">
              <div v-for="application in filteredApplicationsList" :key="application.id" class="p-6 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                <div class="flex items-start justify-between">
                  <div class="flex-1">
                    <div class="flex items-center space-x-4 mb-2">
                      <h4 class="font-semibold text-brand-navy dark:text-white">{{ application.propertyTitle }}</h4>
                      <span :class="getApplicationStatusClass(application.status)" class="px-3 py-1 rounded-full text-xs font-semibold">
                        {{ application.status.charAt(0).toUpperCase() + application.status.slice(1) }}
                      </span>
                    </div>
                    
                    <p class="text-sm text-gray-600 dark:text-gray-400 mb-2 flex items-center">
                      <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                      </svg>
                      {{ application.propertyLocation }}
                    </p>
                    
                    <div class="flex items-center space-x-6 text-sm text-gray-500 mb-3">
                      <span>{{ formatCurrency(application.monthlyRent) }}/month</span>
                      <span>Applied {{ formatDate(application.applicationDate) }}</span>
                      <span v-if="application.responseDate">Responded {{ formatDate(application.responseDate) }}</span>
                    </div>
                    
                    <!-- Application Progress -->
                    <div class="mb-3">
                      <div class="flex items-center justify-between text-sm mb-2">
                        <span class="text-gray-600 dark:text-gray-400">Application Progress</span>
                        <span class="font-medium text-brand-navy dark:text-white">{{ application.completionPercentage }}%</span>
                      </div>
                      <div class="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                        <div :class="getProgressBarClass(application.status)" class="h-2 rounded-full transition-all duration-300" :style="`width: ${application.completionPercentage}%`"></div>
                      </div>
                    </div>
                    
                    <!-- Required Documents -->
                    <div class="flex flex-wrap gap-2 mb-3">
                      <span v-for="doc in application.requiredDocuments" :key="doc.name" :class="doc.submitted ? 'bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-400' : 'bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-400'" class="text-xs px-2 py-1 rounded-full">
                        {{ doc.submitted ? '✓' : '✗' }} {{ doc.name }}
                      </span>
                    </div>
                    
                    <!-- Notes/Feedback -->
                    <div v-if="application.notes" class="bg-gray-50 dark:bg-gray-700 rounded-lg p-3 mb-3">
                      <p class="text-sm text-gray-700 dark:text-gray-300">
                        <span class="font-medium">Landlord Notes:</span> {{ application.notes }}
                      </p>
                    </div>
                  </div>
                  
                  <!-- Action Buttons -->
                  <div class="flex flex-col space-y-2 ml-6">
                    <button v-if="application.status === 'pending'" class="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors">
                      View Application
                    </button>
                    <button v-if="application.status === 'approved'" class="px-4 py-2 bg-green-500 text-white rounded-lg text-sm font-medium hover:bg-green-600 transition-colors">
                      Proceed to Lease
                    </button>
                    <button v-if="application.status === 'rejected'" class="px-4 py-2 bg-orange-500 text-white rounded-lg text-sm font-medium hover:bg-orange-600 transition-colors">
                      Reapply
                    </button>
                    <button class="px-4 py-2 border border-gray-200 dark:border-gray-600 text-brand-navy dark:text-gray-300 rounded-lg text-sm font-medium hover:border-gray-300 dark:hover:border-gray-500 transition-colors">
                      Contact Agent
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Application Tips -->
          <div class="mt-8 bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
            <div class="flex items-start space-x-4">
              <div class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-blue-900 dark:text-blue-300 mb-2">Tips for Better Applications</h4>
                <ul class="text-sm text-blue-800 dark:text-blue-400 space-y-1">
                  <li>• Complete all required documents before submitting</li>
                  <li>• Provide recent employment verification and pay stubs</li>
                  <li>• Include references from previous landlords</li>
                  <li>• Submit applications within 24 hours of viewing</li>
                  <li>• Be responsive to landlord communications</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <!-- Viewings Tab -->
        <div v-if="activeTab === 'viewings'" class="p-6">
          <div class="flex items-center justify-between mb-6">
            <div>
              <h2 class="text-2xl font-bold text-brand-navy dark:text-white">Property Viewings</h2>
              <p class="text-gray-600 dark:text-gray-400">{{ upcomingViewings }} upcoming viewings, {{ totalViewings }} total scheduled</p>
            </div>
            <button class="bg-brand-turqoise-light text-brand-navy px-6 py-3 rounded-lg font-semibold hover:bg-teal-300 transition-colors">
              Schedule New Viewing
            </button>
          </div>

          <!-- Viewing Status Cards -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 transition-colors duration-300">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm font-medium text-gray-600 dark:text-gray-400">Upcoming</p>
                  <p class="text-3xl font-bold text-orange-600 dark:text-orange-400">{{ upcomingViewings }}</p>
                  <p class="text-sm text-gray-500 mt-1">Next: {{ nextViewingDate }}</p>
                </div>
                <div class="w-12 h-12 bg-orange-100 dark:bg-orange-900/20 rounded-xl flex items-center justify-center">
                  <svg class="w-6 h-6 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                  </svg>
                </div>
              </div>
            </div>

            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 transition-colors duration-300">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm font-medium text-gray-600 dark:text-gray-400">Completed</p>
                  <p class="text-3xl font-bold text-green-600 dark:text-green-400">{{ completedViewings }}</p>
                  <p class="text-sm text-gray-500 mt-1">This month</p>
                </div>
                <div class="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-xl flex items-center justify-center">
                  <svg class="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
              </div>
            </div>

            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 transition-colors duration-300">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm font-medium text-gray-600 dark:text-gray-400">Applications After</p>
                  <p class="text-3xl font-bold text-brand-navy dark:text-white">{{ viewingToApplicationRate }}%</p>
                  <p class="text-sm text-gray-500 mt-1">Conversion rate</p>
                </div>
                <div class="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-xl flex items-center justify-center">
                  <svg class="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <!-- Calendar View Toggle -->
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 mb-6 transition-colors duration-300">
            <div class="p-6 border-b border-gray-200 dark:border-gray-600">
              <div class="flex items-center justify-between">
                <h3 class="text-lg font-semibold text-brand-navy dark:text-white">Viewing Schedule</h3>
                <div class="flex items-center space-x-2">
                  <button :class="viewingView === 'list' ? 'bg-brand-turqoise-light text-brand-navy' : 'bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-400'" class="px-4 py-2 rounded-lg font-medium transition-colors" @click="viewingView = 'list'">
                    List View
                  </button>
                  <button :class="viewingView === 'calendar' ? 'bg-brand-turqoise-light text-brand-navy' : 'bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-400'" class="px-4 py-2 rounded-lg font-medium transition-colors" @click="viewingView = 'calendar'">
                    Calendar
                  </button>
                </div>
              </div>
            </div>

            <!-- List View -->
            <div v-if="viewingView === 'list'" class="divide-y divide-gray-200 dark:divide-gray-600">
              <div v-for="viewing in sortedViewings" :key="viewing.id" class="p-6 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                <div class="flex items-start justify-between">
                  <div class="flex-1">
                    <div class="flex items-center space-x-4 mb-2">
                      <h4 class="font-semibold text-brand-navy dark:text-white">{{ viewing.propertyTitle }}</h4>
                      <span :class="getViewingStatusClass(viewing.status)" class="px-3 py-1 rounded-full text-xs font-semibold">
                        {{ viewing.status.charAt(0).toUpperCase() + viewing.status.slice(1) }}
                      </span>
                      <span v-if="viewing.isUrgent" class="bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-400 px-2 py-1 rounded-full text-xs font-semibold">
                        Today
                      </span>
                    </div>
                    
                    <p class="text-sm text-gray-600 dark:text-gray-400 mb-2 flex items-center">
                      <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                      </svg>
                      {{ viewing.propertyLocation }}
                    </p>
                    
                    <div class="flex items-center space-x-6 text-sm text-gray-500 mb-3">
                      <span class="flex items-center">
                        <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                        </svg>
                        {{ viewing.viewingDate }} at {{ viewing.viewingTime }}
                      </span>
                      <span class="flex items-center">
                        <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                        {{ viewing.duration }} minutes
                      </span>
                      <span class="flex items-center">
                        <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                        </svg>
                        {{ viewing.agentName }}
                      </span>
                    </div>
                    
                    <!-- Property Details -->
                    <div class="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                      <span>{{ viewing.bedrooms }} bed • {{ viewing.bathrooms }} bath</span>
                      <span>{{ viewing.size }}m²</span>
                      <span>{{ formatCurrency(viewing.monthlyRent) }}/month</span>
                    </div>
                    
                    <!-- Viewing Notes -->
                    <div v-if="viewing.notes" class="bg-gray-50 dark:bg-gray-700 rounded-lg p-3 mb-3">
                      <p class="text-sm text-gray-700 dark:text-gray-300">
                        <span class="font-medium">Notes:</span> {{ viewing.notes }}
                      </p>
                    </div>
                    
                    <!-- Agent Contact Info -->
                    <div class="flex items-center space-x-4 text-sm text-gray-500">
                      <span class="flex items-center">
                        <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                        </svg>
                        {{ viewing.agentPhone }}
                      </span>
                      <span class="flex items-center">
                        <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                        </svg>
                        {{ viewing.agentEmail }}
                      </span>
                    </div>
                  </div>
                  
                  <!-- Action Buttons -->
                  <div class="flex flex-col space-y-2 ml-6">
                    <button v-if="viewing.status === 'scheduled'" class="px-4 py-2 bg-green-500 text-white rounded-lg text-sm font-medium hover:bg-green-600 transition-colors">
                      Join Virtual Tour
                    </button>
                    <button v-if="viewing.status === 'scheduled'" class="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors">
                      Get Directions
                    </button>
                    <button v-if="viewing.status === 'completed'" class="px-4 py-2 bg-orange-500 text-white rounded-lg text-sm font-medium hover:bg-orange-600 transition-colors">
                      Submit Application
                    </button>
                    <button class="px-4 py-2 border border-gray-200 dark:border-gray-600 text-brand-navy dark:text-gray-300 rounded-lg text-sm font-medium hover:border-gray-300 dark:hover:border-gray-500 transition-colors">
                      Reschedule
                    </button>
                    <button class="px-4 py-2 border border-red-200 dark:border-red-600 text-red-600 dark:text-red-400 rounded-lg text-sm font-medium hover:border-red-300 dark:hover:border-red-500 transition-colors">
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <!-- Calendar View -->
            <div v-if="viewingView === 'calendar'" class="p-6">
              <div class="grid grid-cols-7 gap-4 mb-4">
                <div v-for="day in weekDays" :key="day" class="text-center font-semibold text-gray-600 dark:text-gray-400 py-2">
                  {{ day }}
                </div>
              </div>
              
              <div class="grid grid-cols-7 gap-4">
                <div v-for="date in calendarDates" :key="date.date" class="min-h-24 border border-gray-200 dark:border-gray-600 rounded-lg p-2">
                  <div class="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">{{ date.day }}</div>
                  <div v-for="viewing in date.viewings" :key="viewing.id" :class="getViewingStatusClass(viewing.status)" class="text-xs px-2 py-1 rounded mb-1 cursor-pointer hover:opacity-80">
                    {{ viewing.time }} - {{ viewing.propertyTitle.slice(0, 15) }}...
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Viewing Preparation Tips -->
          <div class="bg-green-50 dark:bg-green-900/20 rounded-xl p-6 border border-green-200 dark:border-green-800">
            <div class="flex items-start space-x-4">
              <div class="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-green-900 dark:text-green-300 mb-2">Viewing Preparation Checklist</h4>
                <ul class="text-sm text-green-800 dark:text-green-400 space-y-1">
                  <li>• Arrive 5-10 minutes early to the viewing appointment</li>
                  <li>• Bring your ID, employment letter, and bank statements</li>
                  <li>• Prepare questions about utilities, parking, and building facilities</li>
                  <li>• Take photos and notes during the viewing for comparison</li>
                  <li>• Test water pressure, electrical outlets, and mobile signal</li>
                  <li>• Ask about lease terms, deposits, and move-in requirements</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <!-- Lease Tab (Only shown if hasActiveLease is true) -->
        <div v-if="activeTab === 'lease' && hasActiveLease" class="p-6">
          <div class="flex items-center justify-between mb-6">
            <div>
              <h2 class="text-2xl font-bold text-brand-navy dark:text-white">My Lease Agreement</h2>
              <p class="text-gray-600 dark:text-gray-400">{{ currentLease.propertyTitle }} • Lease expires {{ formatDate(currentLease.leaseEndDate) }}</p>
            </div>
            <div class="flex items-center space-x-4">
              <span v-if="daysUntilRenewal <= 60" class="bg-yellow-100 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-400 px-3 py-1 rounded-full text-sm font-semibold">
                Renewal Available
              </span>
              <button class="bg-brand-turqoise-light text-brand-navy px-6 py-3 rounded-lg font-semibold hover:bg-teal-300 transition-colors">
                Download Lease
              </button>
            </div>
          </div>

          <!-- Lease Overview Cards -->
          <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 transition-colors duration-300">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm font-medium text-gray-600 dark:text-gray-400">Monthly Rent</p>
                  <p class="text-3xl font-bold text-brand-navy dark:text-white">{{ formatCurrency(currentLease.monthlyRent) }}</p>
                  <p class="text-sm text-gray-500 mt-1">Due {{ currentLease.rentDueDate }}th</p>
                </div>
                <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-xl flex items-center justify-center">
                  <svg class="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/>
                  </svg>
                </div>
              </div>
            </div>

            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 transition-colors duration-300">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm font-medium text-gray-600 dark:text-gray-400">Lease Duration</p>
                  <p class="text-3xl font-bold text-brand-navy dark:text-white">{{ currentLease.leaseDurationMonths }}</p>
                  <p class="text-sm text-gray-500 mt-1">{{ daysUntilRenewal }} days until renewal</p>
                </div>
                <div class="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-xl flex items-center justify-center">
                  <svg class="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                  </svg>
                </div>
              </div>
            </div>

            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 transition-colors duration-300">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm font-medium text-gray-600 dark:text-gray-400">Security Deposit</p>
                  <p class="text-3xl font-bold text-brand-navy dark:text-white">{{ formatCurrency(currentLease.securityDeposit) }}</p>
                  <p class="text-sm text-gray-500 mt-1">Paid & secured</p>
                </div>
                <div class="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-xl flex items-center justify-center">
                  <svg class="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                  </svg>
                </div>
              </div>
            </div>

            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 transition-colors duration-300">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm font-medium text-gray-600 dark:text-gray-400">Payment Status</p>
                  <p class="text-3xl font-bold text-green-600 dark:text-green-400">{{ overdueDays > 0 ? 'OVERDUE' : 'CURRENT' }}</p>
                  <p class="text-sm text-gray-500 mt-1">{{ overdueDays > 0 ? `${overdueDays} days overdue` : 'All payments up to date' }}</p>
                </div>
                <div class="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-xl flex items-center justify-center">
                  <svg class="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <!-- Lease Details & Landlord Info -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <!-- Property Details -->
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 transition-colors duration-300">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Property Details</h3>
              <div class="space-y-3">
                <div class="flex items-center justify-between">
                  <span class="text-sm text-gray-600 dark:text-gray-400">Property</span>
                  <span class="font-medium text-brand-navy dark:text-white">{{ currentLease.propertyTitle }}</span>
                </div>
                <div class="flex items-center justify-between">
                  <span class="text-sm text-gray-600 dark:text-gray-400">Unit Number</span>
                  <span class="font-medium text-brand-navy dark:text-white">{{ currentLease.unitNumber }}</span>
                </div>
                <div class="flex items-center justify-between">
                  <span class="text-sm text-gray-600 dark:text-gray-400">Floor</span>
                  <span class="font-medium text-brand-navy dark:text-white">{{ currentLease.floor }}</span>
                </div>
                <div class="flex items-center justify-between">
                  <span class="text-sm text-gray-600 dark:text-gray-400">Size</span>
                  <span class="font-medium text-brand-navy dark:text-white">{{ currentLease.size }}m²</span>
                </div>
                <div class="flex items-center justify-between">
                  <span class="text-sm text-gray-600 dark:text-gray-400">Bedrooms</span>
                  <span class="font-medium text-brand-navy dark:text-white">{{ currentLease.bedrooms }}</span>
                </div>
                <div class="flex items-center justify-between">
                  <span class="text-sm text-gray-600 dark:text-gray-400">Bathrooms</span>
                  <span class="font-medium text-brand-navy dark:text-white">{{ currentLease.bathrooms }}</span>
                </div>
                <div class="flex items-center justify-between">
                  <span class="text-sm text-gray-600 dark:text-gray-400">Parking</span>
                  <span class="font-medium text-brand-navy dark:text-white">{{ currentLease.parkingSpaces }} space(s)</span>
                </div>
              </div>
            </div>

            <!-- Landlord Contact -->
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 transition-colors duration-300">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Landlord Contact</h3>
              <div class="space-y-4">
                <div class="flex items-center space-x-4">
                  <div class="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-800 dark:to-blue-600 rounded-full flex items-center justify-center">
                    <span class="font-semibold text-blue-600 dark:text-blue-300">{{ currentLease.landlord.initials }}</span>
                  </div>
                  <div>
                    <h4 class="font-semibold text-brand-navy dark:text-white">{{ currentLease.landlord.name }}</h4>
                    <p class="text-sm text-gray-600 dark:text-gray-400">Property Owner</p>
                  </div>
                </div>
                
                <div class="space-y-3">
                  <div class="flex items-center space-x-3">
                    <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                    </svg>
                    <span class="text-sm text-brand-navy dark:text-white">{{ currentLease.landlord.phone }}</span>
                    <button class="text-brand-turqoise-light hover:text-teal-600 transition-colors text-sm">Call</button>
                  </div>
                  
                  <div class="flex items-center space-x-3">
                    <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                    <span class="text-sm text-brand-navy dark:text-white">{{ currentLease.landlord.email }}</span>
                    <button class="text-brand-turqoise-light hover:text-teal-600 transition-colors text-sm">Email</button>
                  </div>
                  
                  <div class="flex items-center space-x-3">
                    <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                    </svg>
                    <span class="text-sm text-brand-navy dark:text-white">Available 9AM - 6PM</span>
                    <button class="text-brand-turqoise-light hover:text-teal-600 transition-colors text-sm">Message</button>
                  </div>
                </div>
                
                <button class="w-full bg-brand-turqoise-light text-brand-navy py-3 px-4 rounded-lg font-semibold hover:bg-teal-300 transition-colors">
                  Contact Landlord
                </button>
              </div>
            </div>
          </div>

          <!-- Lease Terms & Important Dates -->
          <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 mb-8 transition-colors duration-300">
            <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-6">Lease Terms & Important Dates</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <h4 class="font-medium text-brand-navy dark:text-white mb-3">Lease Period</h4>
                <div class="space-y-2 text-sm">
                  <div class="flex justify-between">
                    <span class="text-gray-600 dark:text-gray-400">Start Date:</span>
                    <span class="text-brand-navy dark:text-white">{{ formatDate(currentLease.leaseStartDate) }}</span>
                  </div>
                  <div class="flex justify-between">
                    <span class="text-gray-600 dark:text-gray-400">End Date:</span>
                    <span class="text-brand-navy dark:text-white">{{ formatDate(currentLease.leaseEndDate) }}</span>
                  </div>
                  <div class="flex justify-between">
                    <span class="text-gray-600 dark:text-gray-400">Renewal Notice:</span>
                    <span class="text-brand-navy dark:text-white">{{ currentLease.renewalNoticeDays }} days</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 class="font-medium text-brand-navy dark:text-white mb-3">Payment Terms</h4>
                <div class="space-y-2 text-sm">
                  <div class="flex justify-between">
                    <span class="text-gray-600 dark:text-gray-400">Monthly Rent:</span>
                    <span class="text-brand-navy dark:text-white">{{ formatCurrency(currentLease.monthlyRent) }}</span>
                  </div>
                  <div class="flex justify-between">
                    <span class="text-gray-600 dark:text-gray-400">Due Date:</span>
                    <span class="text-brand-navy dark:text-white">{{ currentLease.rentDueDate }}th of month</span>
                  </div>
                  <div class="flex justify-between">
                    <span class="text-gray-600 dark:text-gray-400">Late Fee:</span>
                    <span class="text-brand-navy dark:text-white">{{ formatCurrency(currentLease.lateFee) }}</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 class="font-medium text-brand-navy dark:text-white mb-3">Policies</h4>
                <div class="space-y-2 text-sm">
                  <div class="flex justify-between">
                    <span class="text-gray-600 dark:text-gray-400">Pets Allowed:</span>
                    <span class="text-brand-navy dark:text-white">{{ currentLease.petsAllowed ? 'Yes' : 'No' }}</span>
                  </div>
                  <div class="flex justify-between">
                    <span class="text-gray-600 dark:text-gray-400">Smoking:</span>
                    <span class="text-brand-navy dark:text-white">{{ currentLease.smokingAllowed ? 'Allowed' : 'Not Allowed' }}</span>
                  </div>
                  <div class="flex justify-between">
                    <span class="text-gray-600 dark:text-gray-400">Subletting:</span>
                    <span class="text-brand-navy dark:text-white">{{ currentLease.sublettingAllowed ? 'Allowed' : 'Not Allowed' }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Lease Actions -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <button v-if="daysUntilRenewal <= 90" class="bg-green-500 text-white py-4 px-6 rounded-xl font-semibold hover:bg-green-600 transition-colors flex items-center justify-center space-x-2">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
              </svg>
              <span>Renew Lease</span>
            </button>
            
            <button class="bg-blue-500 text-white py-4 px-6 rounded-xl font-semibold hover:bg-blue-600 transition-colors flex items-center justify-center space-x-2">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>
              </svg>
              <span>Request Lease Amendment</span>
            </button>
            
            <button class="bg-orange-500 text-white py-4 px-6 rounded-xl font-semibold hover:bg-orange-600 transition-colors flex items-center justify-center space-x-2">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <span>Give Notice to Vacate</span>
            </button>
          </div>
        </div>
        <!-- Payments Tab (Only shown if hasActiveLease is true) -->
        <div v-if="activeTab === 'payments' && hasActiveLease" class="p-6">
          <div class="flex items-center justify-between mb-6">
            <div>
              <h2 class="text-2xl font-bold text-brand-navy dark:text-white">Rent Payments</h2>
              <p class="text-gray-600 dark:text-gray-400">Manage your rent payments and view payment history</p>
            </div>
            <div class="flex items-center space-x-4">
              <button class="bg-brand-turqoise-light text-brand-navy px-6 py-3 rounded-lg font-semibold hover:bg-teal-300 transition-colors">
                Set Up Auto-Pay
              </button>
              <button class="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors">
                Make Payment
              </button>
            </div>
          </div>

          <!-- Payment Status Alert -->
          <div v-if="overdueDays > 0" class="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-6 mb-8">
            <div class="flex items-start space-x-4">
              <div class="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.502 0L4.268 16.5c-.77.833.192 2.5 1.732 2.5z"/>
                </svg>
              </div>
              <div class="flex-1">
                <h3 class="font-semibold text-red-900 dark:text-red-300 mb-2">Payment Overdue</h3>
                <p class="text-red-800 dark:text-red-400 mb-4">
                  Your rent payment is {{ overdueDays }} days overdue. Late fees of {{ formatCurrency(currentLease.lateFee) }} may apply.
                </p>
                <button class="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors">
                  Pay Now - {{ formatCurrency(currentLease.monthlyRent + currentLease.lateFee) }}
                </button>
              </div>
            </div>
          </div>

          <!-- Current Payment Status -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 transition-colors duration-300">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm font-medium text-gray-600 dark:text-gray-400">Next Payment Due</p>
                  <p class="text-3xl font-bold text-brand-navy dark:text-white">{{ formatCurrency(currentLease.monthlyRent) }}</p>
                  <p class="text-sm text-orange-600 dark:text-orange-400 mt-1">Due {{ nextPaymentDate }}</p>
                </div>
                <div class="w-12 h-12 bg-orange-100 dark:bg-orange-900/20 rounded-xl flex items-center justify-center">
                  <svg class="w-6 h-6 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
              </div>
            </div>

            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 transition-colors duration-300">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm font-medium text-gray-600 dark:text-gray-400">Payment Method</p>
                  <p class="text-3xl font-bold text-brand-navy dark:text-white">•••• {{ paymentMethod.lastFour }}</p>
                  <p class="text-sm text-blue-600 dark:text-blue-400 mt-1">{{ paymentMethod.type }} {{ paymentMethod.expiry }}</p>
                </div>
                <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-xl flex items-center justify-center">
                  <svg class="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/>
                  </svg>
                </div>
              </div>
            </div>

            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 transition-colors duration-300">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm font-medium text-gray-600 dark:text-gray-400">Auto-Pay Status</p>
                  <p class="text-3xl font-bold text-green-600 dark:text-green-400">{{ autoPayEnabled ? 'ACTIVE' : 'INACTIVE' }}</p>
                  <p class="text-sm text-gray-500 mt-1">{{ autoPayEnabled ? `Next: ${nextPaymentDate}` : 'Manual payments' }}</p>
                </div>
                <div class="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-xl flex items-center justify-center">
                  <svg class="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <!-- Payment Actions -->
          <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 mb-8 transition-colors duration-300">
            <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-6">Quick Payment Actions</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <button class="flex flex-col items-center space-y-2 p-4 border border-gray-200 dark:border-gray-600 rounded-lg hover:border-brand-turqoise-light dark:hover:border-brand-turqoise-light transition-colors">
                <div class="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-xl flex items-center justify-center">
                  <svg class="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/>
                  </svg>
                </div>
                <span class="text-sm font-medium text-brand-navy dark:text-white">Pay Current Rent</span>
                <span class="text-xs text-gray-500">{{ formatCurrency(currentLease.monthlyRent) }}</span>
              </button>

              <button class="flex flex-col items-center space-y-2 p-4 border border-gray-200 dark:border-gray-600 rounded-lg hover:border-brand-turqoise-light dark:hover:border-brand-turqoise-light transition-colors">
                <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-xl flex items-center justify-center">
                  <svg class="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                  </svg>
                </div>
                <span class="text-sm font-medium text-brand-navy dark:text-white">Schedule Payment</span>
                <span class="text-xs text-gray-500">Future date</span>
              </button>

              <button class="flex flex-col items-center space-y-2 p-4 border border-gray-200 dark:border-gray-600 rounded-lg hover:border-brand-turqoise-light dark:hover:border-brand-turqoise-light transition-colors">
                <div class="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-xl flex items-center justify-center">
                  <svg class="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
                  </svg>
                </div>
                <span class="text-sm font-medium text-brand-navy dark:text-white">Setup Auto-Pay</span>
                <span class="text-xs text-gray-500">Automatic payments</span>
              </button>

              <button class="flex flex-col items-center space-y-2 p-4 border border-gray-200 dark:border-gray-600 rounded-lg hover:border-brand-turqoise-light dark:hover:border-brand-turqoise-light transition-colors">
                <div class="w-12 h-12 bg-orange-100 dark:bg-orange-900/20 rounded-xl flex items-center justify-center">
                  <svg class="w-6 h-6 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                  </svg>
                </div>
                <span class="text-sm font-medium text-brand-navy dark:text-white">Payment Receipt</span>
                <span class="text-xs text-gray-500">Download/Email</span>
              </button>
            </div>
          </div>

          <!-- Payment History -->
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 transition-colors duration-300">
            <div class="p-6 border-b border-gray-200 dark:border-gray-600">
              <div class="flex items-center justify-between">
                <h3 class="text-lg font-semibold text-brand-navy dark:text-white">Payment History</h3>
                <div class="flex items-center space-x-4">
                  <select v-model="paymentHistoryFilter" class="px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-turqoise-light bg-white dark:bg-gray-700 text-brand-navy dark:text-white">
                    <option value="all">All Payments</option>
                    <option value="last-3-months">Last 3 Months</option>
                    <option value="last-6-months">Last 6 Months</option>
                    <option value="this-year">This Year</option>
                  </select>
                  <button class="text-brand-turqoise-light hover:text-teal-600 transition-colors text-sm font-medium">
                    Export History
                  </button>
                </div>
              </div>
            </div>

            <div class="divide-y divide-gray-200 dark:divide-gray-600">
              <div v-for="payment in filteredPaymentHistory" :key="payment.id" class="p-6 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                <div class="flex items-center justify-between">
                  <div class="flex-1">
                    <div class="flex items-center space-x-4 mb-2">
                      <h4 class="font-semibold text-brand-navy dark:text-white">{{ payment.description }}</h4>
                      <span :class="getPaymentStatusClass(payment.status)" class="px-3 py-1 rounded-full text-xs font-semibold">
                        {{ payment.status.charAt(0).toUpperCase() + payment.status.slice(1) }}
                      </span>
                    </div>
                    
                    <div class="flex items-center space-x-6 text-sm text-gray-500 mb-2">
                      <span class="flex items-center">
                        <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                        </svg>
                        Due: {{ formatDate(payment.dueDate) }}
                      </span>
                      <span v-if="payment.paidDate" class="flex items-center">
                        <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                        </svg>
                        Paid: {{ formatDate(payment.paidDate) }}
                      </span>
                      <span class="flex items-center">
                        <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/>
                        </svg>
                        {{ payment.paymentMethod }}
                      </span>
                    </div>
                    
                    <div v-if="payment.lateFee > 0" class="text-sm text-red-600 dark:text-red-400 mb-2">
                      Late fee applied: {{ formatCurrency(payment.lateFee) }}
                    </div>
                    
                    <div v-if="payment.notes" class="text-sm text-gray-600 dark:text-gray-400">
                      {{ payment.notes }}
                    </div>
                  </div>
                  
                  <div class="flex flex-col items-end space-y-2 ml-6">
                    <span class="text-2xl font-bold text-brand-navy dark:text-white">{{ formatCurrency(payment.amount) }}</span>
                    <div class="flex space-x-2">
                      <button v-if="payment.status === 'completed'" class="px-3 py-1 bg-blue-500 text-white rounded text-sm font-medium hover:bg-blue-600 transition-colors">
                        Receipt
                      </button>
                      <button v-if="payment.status === 'pending'" class="px-3 py-1 bg-green-500 text-white rounded text-sm font-medium hover:bg-green-600 transition-colors">
                        Pay Now
                      </button>
                      <button v-if="payment.status === 'failed'" class="px-3 py-1 bg-orange-500 text-white rounded text-sm font-medium hover:bg-orange-600 transition-colors">
                        Retry
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Payment Summary -->
            <div class="p-6 bg-gray-50 dark:bg-gray-700/50 border-t border-gray-200 dark:border-gray-600">
              <div class="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
                <div>
                  <p class="text-sm text-gray-600 dark:text-gray-400 mb-1">Total Paid This Year</p>
                  <p class="text-xl font-bold text-brand-navy dark:text-white">{{ formatCurrency(totalPaidThisYear) }}</p>
                </div>
                <div>
                  <p class="text-sm text-gray-600 dark:text-gray-400 mb-1">Average Payment Time</p>
                  <p class="text-xl font-bold text-brand-navy dark:text-white">{{ averagePaymentDays }} days</p>
                </div>
                <div>
                  <p class="text-sm text-gray-600 dark:text-gray-400 mb-1">On-Time Payments</p>
                  <p class="text-xl font-bold text-green-600 dark:text-green-400">{{ onTimePaymentRate }}%</p>
                </div>
                <div>
                  <p class="text-sm text-gray-600 dark:text-gray-400 mb-1">Late Fees Paid</p>
                  <p class="text-xl font-bold text-red-600 dark:text-red-400">{{ formatCurrency(totalLateFees) }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Maintenance Tab (Only shown if hasActiveLease is true) -->
        <div v-if="activeTab === 'maintenance' && hasActiveLease" class="p-6">
          <div class="flex items-center justify-between mb-6">
            <div>
              <h2 class="text-2xl font-bold text-brand-navy dark:text-white">Maintenance Requests</h2>
              <p class="text-gray-600 dark:text-gray-400">{{ openMaintenanceRequests }} open requests, {{ totalMaintenanceRequests }} total submitted</p>
            </div>
            <button class="bg-brand-turqoise-light text-brand-navy px-6 py-3 rounded-lg font-semibold hover:bg-teal-300 transition-colors">
              New Request
            </button>
          </div>

          <!-- Maintenance Status Overview -->
          <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 transition-colors duration-300">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm font-medium text-gray-600 dark:text-gray-400">Open Requests</p>
                  <p class="text-3xl font-bold text-orange-600 dark:text-orange-400">{{ openMaintenanceRequests }}</p>
                  <p class="text-sm text-gray-500 mt-1">{{ urgentMaintenanceRequests }} urgent</p>
                </div>
                <div class="w-12 h-12 bg-orange-100 dark:bg-orange-900/20 rounded-xl flex items-center justify-center">
                  <svg class="w-6 h-6 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
              </div>
            </div>

            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 transition-colors duration-300">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm font-medium text-gray-600 dark:text-gray-400">In Progress</p>
                  <p class="text-3xl font-bold text-blue-600 dark:text-blue-400">{{ inProgressMaintenanceRequests }}</p>
                  <p class="text-sm text-gray-500 mt-1">Being worked on</p>
                </div>
                <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-xl flex items-center justify-center">
                  <svg class="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                </div>
              </div>
            </div>

            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 transition-colors duration-300">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm font-medium text-gray-600 dark:text-gray-400">Completed</p>
                  <p class="text-3xl font-bold text-green-600 dark:text-green-400">{{ completedMaintenanceRequests }}</p>
                  <p class="text-sm text-gray-500 mt-1">This month</p>
                </div>
                <div class="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-xl flex items-center justify-center">
                  <svg class="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
              </div>
            </div>

            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 transition-colors duration-300">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm font-medium text-gray-600 dark:text-gray-400">Avg Response Time</p>
                  <p class="text-3xl font-bold text-brand-navy dark:text-white">{{ averageResponseTime }}</p>
                  <p class="text-sm text-gray-500 mt-1">hours to respond</p>
                </div>
                <div class="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-xl flex items-center justify-center">
                  <svg class="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <!-- Quick Request Categories -->
          <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 mb-8 transition-colors duration-300">
            <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-6">Quick Request</h3>
            <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              <button v-for="category in maintenanceCategories" :key="category.id" class="flex flex-col items-center space-y-2 p-4 border border-gray-200 dark:border-gray-600 rounded-lg hover:border-brand-turqoise-light dark:hover:border-brand-turqoise-light transition-colors">
                <div :class="category.bgColor" class="w-12 h-12 rounded-xl flex items-center justify-center">
                  <svg :class="category.iconColor" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="category.iconPath"/>
                  </svg>
                </div>
                <span class="text-sm font-medium text-brand-navy dark:text-white">{{ category.name }}</span>
              </button>
            </div>
          </div>

          <!-- Active Maintenance Requests -->
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 transition-colors duration-300">
            <div class="p-6 border-b border-gray-200 dark:border-gray-600">
              <div class="flex items-center justify-between">
                <h3 class="text-lg font-semibold text-brand-navy dark:text-white">Recent Requests</h3>
                <select v-model="maintenanceFilter" class="px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-turqoise-light bg-white dark:bg-gray-700 text-brand-navy dark:text-white">
                  <option value="all">All Requests</option>
                  <option value="open">Open</option>
                  <option value="in-progress">In Progress</option>
                  <option value="completed">Completed</option>
                  <option value="urgent">Urgent</option>
                </select>
              </div>
            </div>

            <div class="divide-y divide-gray-200 dark:divide-gray-600">
              <div v-for="request in filteredMaintenanceRequests" :key="request.id" class="p-6 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                <div class="flex items-start justify-between">
                  <div class="flex-1">
                    <div class="flex items-center space-x-4 mb-2">
                      <h4 class="font-semibold text-brand-navy dark:text-white">{{ request.title }}</h4>
                      <span :class="getMaintenanceStatusClass(request.status)" class="px-3 py-1 rounded-full text-xs font-semibold">
                        {{ request.status.charAt(0).toUpperCase() + request.status.slice(1).replace('-', ' ') }}
                      </span>
                      <span v-if="request.priority === 'urgent'" class="bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-400 px-2 py-1 rounded-full text-xs font-semibold">
                        Urgent
                      </span>
                    </div>
                    
                    <p class="text-sm text-gray-600 dark:text-gray-400 mb-3">{{ request.description }}</p>
                    
                    <div class="flex items-center space-x-6 text-sm text-gray-500 mb-3">
                      <span class="flex items-center">
                        <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"/>
                        </svg>
                        {{ request.category }}
                      </span>
                      <span class="flex items-center">
                        <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                        </svg>
                        Submitted {{ formatDate(request.submittedDate) }}
                      </span>
                      <span v-if="request.assignedTo" class="flex items-center">
                        <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                        </svg>
                        {{ request.assignedTo }}
                      </span>
                    </div>
                    
                    <!-- Progress Timeline -->
                    <div class="mb-4">
                      <div class="flex items-center space-x-2 mb-2">
                        <span class="text-sm font-medium text-brand-navy dark:text-white">Progress</span>
                        <div class="flex-1 bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                          <div :class="getProgressBarClass(request.status)" class="h-2 rounded-full transition-all duration-300" :style="`width: ${request.progress}%`"></div>
                        </div>
                        <span class="text-sm text-gray-500">{{ request.progress }}%</span>
                      </div>
                      
                      <div class="flex space-x-4 text-xs text-gray-500">
                        <span :class="request.progress >= 25 ? 'text-brand-navy dark:text-white font-medium' : ''">Submitted</span>
                        <span :class="request.progress >= 50 ? 'text-brand-navy dark:text-white font-medium' : ''">Acknowledged</span>
                        <span :class="request.progress >= 75 ? 'text-brand-navy dark:text-white font-medium' : ''">In Progress</span>
                        <span :class="request.progress >= 100 ? 'text-brand-navy dark:text-white font-medium' : ''">Completed</span>
                      </div>
                    </div>
                    
                    <!-- Updates/Comments -->
                    <div v-if="request.lastUpdate" class="bg-gray-50 dark:bg-gray-700 rounded-lg p-3 mb-3">
                      <div class="flex items-start space-x-3">
                        <div class="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <p class="text-sm text-gray-700 dark:text-gray-300">{{ request.lastUpdate.message }}</p>
                          <p class="text-xs text-gray-500 mt-1">{{ request.lastUpdate.author }} • {{ formatDate(request.lastUpdate.date) }}</p>
                        </div>
                      </div>
                    </div>
                    
                    <!-- Attached Photos -->
                    <div v-if="request.photos && request.photos.length > 0" class="flex space-x-2 mb-3">
                      <div v-for="photo in request.photos.slice(0, 3)" :key="photo.id" class="w-16 h-16 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-600">
                        <img :src="photo.thumbnail" :alt="photo.alt" class="w-full h-full object-cover">
                      </div>
                      <div v-if="request.photos.length > 3" class="w-16 h-16 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600 flex items-center justify-center">
                        <span class="text-xs text-gray-500">+{{ request.photos.length - 3 }}</span>
                      </div>
                    </div>
                  </div>
                  
                  <!-- Action Buttons -->
                  <div class="flex flex-col space-y-2 ml-6">
                    <button v-if="request.status === 'open'" class="px-4 py-2 bg-orange-500 text-white rounded-lg text-sm font-medium hover:bg-orange-600 transition-colors">
                      Add Details
                    </button>
                    <button v-if="request.status === 'in-progress'" class="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors">
                      View Updates
                    </button>
                    <button v-if="request.status === 'completed'" class="px-4 py-2 bg-green-500 text-white rounded-lg text-sm font-medium hover:bg-green-600 transition-colors">
                      Rate Service
                    </button>
                    <button class="px-4 py-2 border border-gray-200 dark:border-gray-600 text-brand-navy dark:text-gray-300 rounded-lg text-sm font-medium hover:border-gray-300 dark:hover:border-gray-500 transition-colors">
                      Contact Manager
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Maintenance Tips -->
          <div class="mt-8 bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
            <div class="flex items-start space-x-4">
              <div class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-blue-900 dark:text-blue-300 mb-2">Maintenance Request Tips</h4>
                <ul class="text-sm text-blue-800 dark:text-blue-400 space-y-1">
                  <li>• Include photos when possible to help identify the issue</li>
                  <li>• Provide specific details about when the problem occurs</li>
                  <li>• Mark urgent requests only for safety hazards or emergencies</li>
                  <li>• Be available during scheduled repair times</li>
                  <li>• Test repairs and provide feedback after completion</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <!-- Messages Tab -->
        <div v-if="activeTab === 'messages'" class="p-6">
          <div class="flex items-center justify-between mb-6">
            <div>
              <h2 class="text-2xl font-bold text-brand-navy dark:text-white">Messages</h2>
              <p class="text-gray-600 dark:text-gray-400">{{ unreadMessages }} unread messages from {{ activeConversations }} conversations</p>
            </div>
            <button class="bg-brand-turqoise-light text-brand-navy px-6 py-3 rounded-lg font-semibold hover:bg-teal-300 transition-colors">
              New Message
            </button>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 h-96">
            <!-- Conversations List -->
            <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden transition-colors duration-300">
              <div class="p-4 border-b border-gray-200 dark:border-gray-600">
                <div class="flex items-center justify-between">
                  <h3 class="font-semibold text-brand-navy dark:text-white">Conversations</h3>
                  <select v-model="messageFilter" class="text-sm px-3 py-1 border border-gray-200 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-brand-turqoise-light bg-white dark:bg-gray-700 text-brand-navy dark:text-white">
                    <option value="all">All</option>
                    <option value="unread">Unread</option>
                    <option value="agents">Agents</option>
                    <option value="landlords">Landlords</option>
                  </select>
                </div>
              </div>
              
              <div class="overflow-y-auto h-80">
                <div v-for="conversation in filteredConversations" :key="conversation.id" :class="['p-4 border-b border-gray-100 dark:border-gray-700 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors', selectedConversation?.id === conversation.id ? 'bg-brand-turqoise-light/10 dark:bg-brand-turqoise-light/20' : '']" @click="selectConversation(conversation)">
                  <div class="flex items-start space-x-3">
                    <div class="relative">
                      <div class="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-800 dark:to-blue-600 rounded-full flex items-center justify-center">
                        <span class="font-semibold text-blue-600 dark:text-blue-300">{{ conversation.contact.initials }}</span>
                      </div>
                      <div v-if="conversation.unreadCount > 0" class="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                        {{ conversation.unreadCount }}
                      </div>
                    </div>
                    
                    <div class="flex-1 min-w-0">
                      <div class="flex items-center justify-between mb-1">
                        <h4 class="font-medium text-brand-navy dark:text-white truncate">{{ conversation.contact.name }}</h4>
                        <span class="text-xs text-gray-500">{{ formatTimeAgo(conversation.lastMessageTime) }}</span>
                      </div>
                      <p class="text-sm text-gray-600 dark:text-gray-400 mb-1">{{ conversation.contact.role }}</p>
                      <p class="text-sm text-gray-500 truncate">{{ conversation.lastMessage }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Chat Area -->
            <div class="lg:col-span-2 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden transition-colors duration-300">
              <div v-if="selectedConversation" class="h-full flex flex-col">
                <!-- Chat Header -->
                <div class="p-4 border-b border-gray-200 dark:border-gray-600">
                  <div class="flex items-center justify-between">
                    <div class="flex items-center space-x-3">
                      <div class="w-10 h-10 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-800 dark:to-blue-600 rounded-full flex items-center justify-center">
                        <span class="font-semibold text-blue-600 dark:text-blue-300">{{ selectedConversation.contact.initials }}</span>
                      </div>
                      <div>
                        <h4 class="font-semibold text-brand-navy dark:text-white">{{ selectedConversation.contact.name }}</h4>
                        <p class="text-sm text-gray-600 dark:text-gray-400">{{ selectedConversation.contact.role }} • {{ selectedConversation.contact.company }}</p>
                      </div>
                    </div>
                    
                    <div class="flex items-center space-x-2">
                      <button class="p-2 text-gray-400 hover:text-brand-turqoise-light transition-colors">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                        </svg>
                      </button>
                      <button class="p-2 text-gray-400 hover:text-brand-turqoise-light transition-colors">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/>
                        </svg>
                      </button>
                      <button class="p-2 text-gray-400 hover:text-brand-turqoise-light transition-colors">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

                <!-- Messages Area -->
                <div class="flex-1 overflow-y-auto p-4 space-y-4">
                  <div v-for="message in selectedConversation.messages" :key="message.id" :class="['flex', message.sender === 'me' ? 'justify-end' : 'justify-start']">
                    <div :class="['max-w-xs lg:max-w-md px-4 py-2 rounded-lg', message.sender === 'me' ? 'bg-brand-turqoise-light text-brand-navy' : 'bg-gray-200 dark:bg-gray-700 text-brand-navy dark:text-white']">
                      <p class="text-sm">{{ message.content }}</p>
                      <p :class="['text-xs mt-1', message.sender === 'me' ? 'text-brand-navy/70' : 'text-gray-500']">{{ formatTime(message.timestamp) }}</p>
                    </div>
                  </div>
                </div>

                <!-- Message Input -->
                <div class="p-4 border-t border-gray-200 dark:border-gray-600">
                  <div class="flex items-center space-x-2">
                    <button class="p-2 text-gray-400 hover:text-brand-turqoise-light transition-colors">
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"/>
                      </svg>
                    </button>
                    <input v-model="newMessage" type="text" placeholder="Type your message..." class="flex-1 px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-turqoise-light bg-white dark:bg-gray-700 text-brand-navy dark:text-white" @keypress.enter="sendMessage">
                    <button @click="sendMessage" class="p-2 bg-brand-turqoise-light text-brand-navy rounded-lg hover:bg-teal-300 transition-colors">
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              
              <!-- No Conversation Selected -->
              <div v-else class="h-full flex items-center justify-center">
                <div class="text-center">
                  <svg class="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                  </svg>
                  <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-2">Select a Conversation</h3>
                  <p class="text-gray-600 dark:text-gray-400">Choose a conversation from the list to start messaging</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Quick Message Templates -->
          <div class="mt-8 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 transition-colors duration-300">
            <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Quick Message Templates</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <button v-for="template in messageTemplates" :key="template.id" class="text-left p-4 border border-gray-200 dark:border-gray-600 rounded-lg hover:border-brand-turqoise-light dark:hover:border-brand-turqoise-light transition-colors" @click="useTemplate(template)">
                <h4 class="font-medium text-brand-navy dark:text-white mb-2">{{ template.title }}</h4>
                <p class="text-sm text-gray-600 dark:text-gray-400">{{ template.preview }}</p>
              </button>
            </div>
          </div>
        </div>
        <!-- Profile & Settings Tab -->
        <div v-if="activeTab === 'profile'" class="p-6">
          <div class="flex items-center justify-between mb-6">
            <div>
              <h2 class="text-2xl font-bold text-brand-navy dark:text-white">Profile & Settings</h2>
              <p class="text-gray-600 dark:text-gray-400">Manage your personal information and preferences</p>
            </div>
            <div class="flex items-center space-x-4">
              <div class="text-sm text-brand-navy dark:text-gray-400">
                Profile Completion: <span class="font-bold text-lg" :class="getProfileCompletionColor(profileCompletionScore)">{{ profileCompletionScore }}%</span>
              </div>
              <button class="bg-brand-turqoise-light text-brand-navy px-6 py-3 rounded-lg font-semibold hover:bg-teal-300 transition-colors">
                Save Changes
              </button>
            </div>
          </div>

          <!-- Profile Overview -->
          <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 mb-8 transition-colors duration-300">
            <div class="flex items-start space-x-6">
              <div class="relative">
                <div class="w-24 h-24 bg-gradient-to-br from-green-100 to-green-200 dark:from-green-800 dark:to-green-600 rounded-full flex items-center justify-center">
                  <span class="text-2xl font-bold text-green-600 dark:text-green-300">AJ</span>
                </div>
                <button class="absolute bottom-0 right-0 w-8 h-8 bg-brand-turqoise-light text-brand-navy rounded-full flex items-center justify-center hover:bg-teal-300 transition-colors">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                </button>
              </div>
              
              <div class="flex-1">
                <h3 class="text-xl font-bold text-brand-navy dark:text-white mb-2">Alex Johnson</h3>
                <p class="text-gray-600 dark:text-gray-400 mb-3">Property Renter • Member since March 2024</p>
                
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <span class="text-gray-500">Email Verified</span>
                    <p class="font-medium text-green-600 dark:text-green-400">✓ Verified</p>
                  </div>
                  <div>
                    <span class="text-gray-500">Phone Verified</span>
                    <p class="font-medium text-green-600 dark:text-green-400">✓ Verified</p>
                  </div>
                  <div>
                    <span class="text-gray-500">ID/Passport Verified</span>
                    <p class="font-medium text-yellow-600 dark:text-yellow-400">Pending</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Personal Information -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 transition-colors duration-300">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Personal Information</h3>
              <div class="space-y-4">
                <div class="grid grid-cols-2 gap-4">
                  <div>
                    <label class="block text-sm font-medium text-brand-navy dark:text-gray-300 mb-2">First Name</label>
                    <input type="text" v-model="userProfile.firstName" class="w-full px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-turqoise-light bg-white dark:bg-gray-700 text-brand-navy dark:text-white">
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-brand-navy dark:text-gray-300 mb-2">Last Name</label>
                    <input type="text" v-model="userProfile.lastName" class="w-full px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-turqoise-light bg-white dark:bg-gray-700 text-brand-navy dark:text-white">
                  </div>
                </div>
                
                <div>
                  <label class="block text-sm font-medium text-brand-navy dark:text-gray-300 mb-2">Email Address</label>
                  <input type="email" v-model="userProfile.email" class="w-full px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-turqoise-light bg-white dark:bg-gray-700 text-brand-navy dark:text-white">
                </div>
                
                <div>
                  <label class="block text-sm font-medium text-brand-navy dark:text-gray-300 mb-2">Phone Number</label>
                  <input type="tel" v-model="userProfile.phone" class="w-full px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-turqoise-light bg-white dark:bg-gray-700 text-brand-navy dark:text-white">
                </div>
                
                <div>
                  <label class="block text-sm font-medium text-brand-navy dark:text-gray-300 mb-2">Date of Birth</label>
                  <input type="date" v-model="userProfile.dateOfBirth" class="w-full px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-turqoise-light bg-white dark:bg-gray-700 text-brand-navy dark:text-white">
                </div>
                
                <div>
                  <label class="block text-sm font-medium text-brand-navy dark:text-gray-300 mb-2">Nationality</label>
                  <select v-model="userProfile.nationality" class="w-full px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-turqoise-light bg-white dark:bg-gray-700 text-brand-navy dark:text-white">
                    <option value="">Select Nationality</option>
                    <option value="thai">Thai</option>
                    <option value="american">American</option>
                    <option value="british">British</option>
                    <option value="japanese">Japanese</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
            </div>

            <!-- Rental Preferences -->
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 transition-colors duration-300">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Rental Preferences</h3>
              <div class="space-y-4">
                <div>
                  <label class="block text-sm font-medium text-brand-navy dark:text-gray-300 mb-2">Budget Range (Monthly)</label>
                  <div class="grid grid-cols-2 gap-4">
                    <input type="number" v-model="rentalPreferences.budgetMin" placeholder="Min" class="w-full px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-turqoise-light bg-white dark:bg-gray-700 text-brand-navy dark:text-white">
                    <input type="number" v-model="rentalPreferences.budgetMax" placeholder="Max" class="w-full px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-turqoise-light bg-white dark:bg-gray-700 text-brand-navy dark:text-white">
                  </div>
                </div>
                
                <div>
                  <label class="block text-sm font-medium text-brand-navy dark:text-gray-300 mb-2">Preferred Areas</label>
                  <div class="grid grid-cols-2 gap-2">
                    <label v-for="area in availableAreas" :key="area" class="flex items-center">
                      <input type="checkbox" :value="area" v-model="rentalPreferences.preferredAreas" class="mr-2">
                      <span class="text-sm text-brand-navy dark:text-white">{{ area }}</span>
                    </label>
                  </div>
                </div>
                
                <div>
                  <label class="block text-sm font-medium text-brand-navy dark:text-gray-300 mb-2">Property Type</label>
                  <select v-model="rentalPreferences.propertyType" class="w-full px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-turqoise-light bg-white dark:bg-gray-700 text-brand-navy dark:text-white">
                    <option value="">Any Type</option>
                    <option value="condo">Condominium</option>
                    <option value="apartment">Apartment</option>
                    <option value="house">House</option>
                    <option value="townhouse">Townhouse</option>
                  </select>
                </div>
                
                <div>
                  <label class="block text-sm font-medium text-brand-navy dark:text-gray-300 mb-2">Minimum Bedrooms</label>
                  <select v-model="rentalPreferences.minBedrooms" class="w-full px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-turqoise-light bg-white dark:bg-gray-700 text-brand-navy dark:text-white">
                    <option value="">Any</option>
                    <option value="studio">Studio</option>
                    <option value="1">1 Bedroom</option>
                    <option value="2">2 Bedrooms</option>
                    <option value="3">3+ Bedrooms</option>
                  </select>
                </div>
                
                <div>
                  <label class="block text-sm font-medium text-brand-navy dark:text-gray-300 mb-2">Special Requirements</label>
                  <div class="space-y-2">
                    <label class="flex items-center">
                      <input type="checkbox" v-model="rentalPreferences.petFriendly" class="mr-2">
                      <span class="text-sm text-brand-navy dark:text-white">Pet Friendly</span>
                    </label>
                    <label class="flex items-center">
                      <input type="checkbox" v-model="rentalPreferences.furnished" class="mr-2">
                      <span class="text-sm text-brand-navy dark:text-white">Furnished</span>
                    </label>
                    <label class="flex items-center">
                      <input type="checkbox" v-model="rentalPreferences.parking" class="mr-2">
                      <span class="text-sm text-brand-navy dark:text-white">Parking Required</span>
                    </label>
                    <label class="flex items-center">
                      <input type="checkbox" v-model="rentalPreferences.nearTransport" class="mr-2">
                      <span class="text-sm text-brand-navy dark:text-white">Near BTS/MRT</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Employment Information -->
          <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 mb-8 transition-colors duration-300">
            <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Employment Information</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="space-y-4">
                <div>
                  <label class="block text-sm font-medium text-brand-navy dark:text-gray-300 mb-2">Employment Status</label>
                  <select v-model="employmentInfo.status" class="w-full px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-turqoise-light bg-white dark:bg-gray-700 text-brand-navy dark:text-white">
                    <option value="">Select Status</option>
                    <option value="employed">Employed</option>
                    <option value="self-employed">Self-Employed</option>
                    <option value="student">Student</option>
                    <option value="retired">Retired</option>
                    <option value="unemployed">Unemployed</option>
                  </select>
                </div>
                
                <div>
                  <label class="block text-sm font-medium text-brand-navy dark:text-gray-300 mb-2">Company Name</label>
                  <input type="text" v-model="employmentInfo.companyName" class="w-full px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-turqoise-light bg-white dark:bg-gray-700 text-brand-navy dark:text-white">
                </div>
                
                <div>
                  <label class="block text-sm font-medium text-brand-navy dark:text-gray-300 mb-2">Job Title</label>
                  <input type="text" v-model="employmentInfo.jobTitle" class="w-full px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-turqoise-light bg-white dark:bg-gray-700 text-brand-navy dark:text-white">
                </div>
              </div>
              
              <div class="space-y-4">
                <div>
                  <label class="block text-sm font-medium text-brand-navy dark:text-gray-300 mb-2">Monthly Income</label>
                  <select v-model="employmentInfo.monthlyIncome" class="w-full px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-turqoise-light bg-white dark:bg-gray-700 text-brand-navy dark:text-white">
                    <option value="">Select Range</option>
                    <option value="0-30000">฿0 - ฿30,000</option>
                    <option value="30000-50000">฿30,000 - ฿50,000</option>
                    <option value="50000-80000">฿50,000 - ฿80,000</option>
                    <option value="80000-120000">฿80,000 - ฿120,000</option>
                    <option value="120000+">฿120,000+</option>
                  </select>
                </div>
                
                <div>
                  <label class="block text-sm font-medium text-brand-navy dark:text-gray-300 mb-2">Years at Company</label>
                  <input type="number" v-model="employmentInfo.yearsAtCompany" class="w-full px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-turqoise-light bg-white dark:bg-gray-700 text-brand-navy dark:text-white">
                </div>
                
                <div>
                  <label class="block text-sm font-medium text-brand-navy dark:text-gray-300 mb-2">Work Address</label>
                  <textarea v-model="employmentInfo.workAddress" rows="2" class="w-full px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-turqoise-light bg-white dark:bg-gray-700 text-brand-navy dark:text-white"></textarea>
                </div>
              </div>
            </div>
          </div>

          <!-- Notification Preferences -->
          <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 mb-8 transition-colors duration-300">
            <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Notification Preferences</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 class="font-medium text-brand-navy dark:text-white mb-3">Email Notifications</h4>
                <div class="space-y-3">
                  <label class="flex items-center justify-between">
                    <span class="text-sm text-brand-navy dark:text-white">New property matches</span>
                    <input type="checkbox" v-model="notificationPreferences.email.propertyMatches" class="toggle">
                  </label>
                  <label class="flex items-center justify-between">
                    <span class="text-sm text-brand-navy dark:text-white">Application updates</span>
                    <input type="checkbox" v-model="notificationPreferences.email.applicationUpdates" class="toggle">
                  </label>
                  <label class="flex items-center justify-between">
                    <span class="text-sm text-brand-navy dark:text-white">Viewing confirmations</span>
                    <input type="checkbox" v-model="notificationPreferences.email.viewingConfirmations" class="toggle">
                  </label>
                  <label class="flex items-center justify-between">
                    <span class="text-sm text-brand-navy dark:text-white">Rent reminders</span>
                    <input type="checkbox" v-model="notificationPreferences.email.rentReminders" class="toggle">
                  </label>
                </div>
              </div>
              
              <div>
                <h4 class="font-medium text-brand-navy dark:text-white mb-3">SMS Notifications</h4>
                <div class="space-y-3">
                  <label class="flex items-center justify-between">
                    <span class="text-sm text-brand-navy dark:text-white">Urgent property updates</span>
                    <input type="checkbox" v-model="notificationPreferences.sms.urgentUpdates" class="toggle">
                  </label>
                  <label class="flex items-center justify-between">
                    <span class="text-sm text-brand-navy dark:text-white">Viewing reminders</span>
                    <input type="checkbox" v-model="notificationPreferences.sms.viewingReminders" class="toggle">
                  </label>
                  <label class="flex items-center justify-between">
                    <span class="text-sm text-brand-navy dark:text-white">Payment confirmations</span>
                    <input type="checkbox" v-model="notificationPreferences.sms.paymentConfirmations" class="toggle">
                  </label>
                  <label class="flex items-center justify-between">
                    <span class="text-sm text-brand-navy dark:text-white">Maintenance updates</span>
                    <input type="checkbox" v-model="notificationPreferences.sms.maintenanceUpdates" class="toggle">
                  </label>
                </div>
              </div>
            </div>
          </div>

          <!-- Account Actions -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <button class="bg-blue-500 text-white py-4 px-6 rounded-xl font-semibold hover:bg-blue-600 transition-colors flex items-center justify-center space-x-2">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
              </svg>
              <span>Verify Identity</span>
            </button>
            
            <button class="bg-orange-500 text-white py-4 px-6 rounded-xl font-semibold hover:bg-orange-600 transition-colors flex items-center justify-center space-x-2">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
              </svg>
              <span>Change Password</span>
            </button>
            
            <button class="bg-red-500 text-white py-4 px-6 rounded-xl font-semibold hover:bg-red-600 transition-colors flex items-center justify-center space-x-2">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
              </svg>
              <span>Delete Account</span>
            </button>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>
<script setup>
import { ref, computed, onMounted } from 'vue'

// Meta tags
useHead({
  title: 'Renter Dashboard - ThaiKeys',
  meta: [
    {
      name: 'description',
      content: 'Comprehensive renter dashboard for property search, applications, lease management, and maintenance requests on ThaiKeys platform.'
    }
  ]
})

// Reactive data
const searchQuery = ref('')
const activeTab = ref('overview')
const unreadNotifications = ref(3)
const unreadMessages = ref(7)

// Renter status
const hasActiveLease = ref(true)
const profileComplete = ref(false)

// Dashboard metrics
const favoriteProperties = ref(12)
const newMatchesToday = ref(3)
const pendingApplications = ref(2)
const applicationResponseRate = ref(75)
const upcomingViewings = ref(3)
const totalViewings = ref(8)
const budgetMax = ref(45000)
const availableInBudget = ref(156)
const savedSearches = ref(5)

// Lease information
const currentLease = ref({
  propertyTitle: 'Bangkok Heights Tower',
  unitNumber: '15A',
  floor: '15th Floor',
  size: 65,
  bedrooms: 2,
  bathrooms: 2,
  parkingSpaces: 1,
  monthlyRent: 35000,
  securityDeposit: 70000,
  leaseDurationMonths: 12,
  leaseStartDate: '2024-03-01',
  leaseEndDate: '2025-03-01',
  renewalNoticeDays: 60,
  rentDueDate: 1,
  lateFee: 1000,
  petsAllowed: false,
  smokingAllowed: false,
  sublettingAllowed: false,
  landlord: {
    name: 'Mr. Somchai Tanaka',
    initials: 'ST',
    phone: '+66 2 123 4567',
    email: 'somchai@property.com'
  }
})

const daysUntilRenewal = ref(85)
const overdueDays = ref(0)

// Payment information
const nextPaymentDate = ref('Dec 1, 2024')
const paymentMethod = ref({
  type: 'Visa',
  lastFour: '4532',
  expiry: '12/26'
})
const autoPayEnabled = ref(true)
const totalPaidThisYear = ref(385000)
const averagePaymentDays = ref(1.2)
const onTimePaymentRate = ref(95)
const totalLateFees = ref(2000)

// Maintenance
const openMaintenanceRequests = ref(2)
const totalMaintenanceRequests = ref(8)
const urgentMaintenanceRequests = ref(1)
const inProgressMaintenanceRequests = ref(1)
const completedMaintenanceRequests = ref(5)
const averageResponseTime = ref(4)

// Application data
const totalApplications = ref(5)
const approvedApplications = ref(1)
const rejectedApplications = ref(2)

// Viewing data
const nextViewingDate = ref('Tomorrow 3PM')
const completedViewings = ref(12)
const viewingToApplicationRate = ref(67)

// Messages
const activeConversations = ref(6)

// Search and filter states
const showAdvancedFilters = ref(false)
const viewMode = ref('grid')
const sortBy = ref('price-low')
const favoritesSort = ref('newest')
const applicationFilter = ref('all')
const paymentHistoryFilter = ref('all')
const maintenanceFilter = ref('all')
const messageFilter = ref('all')
const viewingView = ref('list')

// User profile data
const userProfile = ref({
  firstName: 'Alex',
  lastName: 'Johnson',
  email: 'alex.johnson@email.com',
  phone: '+66 81 234 5678',
  dateOfBirth: '1990-05-15',
  nationality: 'american'
})

const rentalPreferences = ref({
  budgetMin: 25000,
  budgetMax: 45000,
  preferredAreas: ['Sukhumvit', 'Thonglor', 'Ekkamai'],
  propertyType: 'condo',
  minBedrooms: '2',
  petFriendly: false,
  furnished: true,
  parking: true,
  nearTransport: true
})

const employmentInfo = ref({
  status: 'employed',
  companyName: 'Tech Solutions Ltd',
  jobTitle: 'Software Engineer',
  monthlyIncome: '80000-120000',
  yearsAtCompany: 3,
  workAddress: '123 Business District, Bangkok'
})

const notificationPreferences = ref({
  email: {
    propertyMatches: true,
    applicationUpdates: true,
    viewingConfirmations: true,
    rentReminders: true
  },
  sms: {
    urgentUpdates: true,
    viewingReminders: true,
    paymentConfirmations: false,
    maintenanceUpdates: true
  }
})

// Search filters
const searchFilters = ref({
  location: '',
  propertyType: '',
  bedrooms: '',
  priceRange: '',
  amenities: [],
  nearBTS: false,
  parking: false,
  petFriendly: false,
  furnished: false
})

// Available options
const availableAmenities = ['Swimming Pool', 'Gym', 'Security', 'Parking', 'Garden', 'Playground']
const availableAreas = ['Sukhumvit', 'Silom', 'Thonglor', 'Ekkamai', 'Phrom Phong', 'Asoke']

// Property data
const displayedProperties = ref([
  {
    id: 1,
    title: 'Bangkok Heights Tower',
    location: 'Sukhumvit 24, Bangkok',
    price: 35000,
    bedrooms: 2,
    bathrooms: 2,
    size: 65,
    amenities: ['Swimming Pool', 'Gym', 'Security'],
    image: '/assets/placeholder/placeholder.webp',
    isFavorite: true,
    isNewListing: true,
    isPetFriendly: false
  },
  {
    id: 2,
    title: 'Thonglor Residence',
    location: 'Thonglor 15, Bangkok',
    price: 28000,
    bedrooms: 1,
    bathrooms: 1,
    size: 45,
    amenities: ['Parking', 'Garden', 'Security'],
    image: '/assets/placeholder/placeholder.webp',
    isFavorite: false,
    isNewListing: false,
    isPetFriendly: true
  }
])

// Favorites data
const favoritesList = ref([
  {
    id: 1,
    title: 'Bangkok Heights Tower',
    location: 'Sukhumvit 24',
    price: 35000,
    image: '/assets/placeholder/placeholder.webp',
    status: 'available',
    savedDate: '2024-11-10',
    priceComparison: 'below',
    marketComparison: 8
  },
  {
    id: 2,
    title: 'Thonglor Residence',
    location: 'Thonglor 15',
    price: 28000,
    image: '/assets/placeholder/placeholder.webp',
    status: 'pending',
    savedDate: '2024-11-08',
    priceComparison: 'at',
    marketComparison: 2
  }
])

// Applications data
const applicationsList = ref([
  {
    id: 1,
    propertyTitle: 'Bangkok Heights Tower',
    propertyLocation: 'Sukhumvit 24',
    monthlyRent: 35000,
    status: 'pending',
    applicationDate: '2024-11-12',
    responseDate: null,
    completionPercentage: 85,
    requiredDocuments: [
      { name: 'ID Copy', submitted: true },
      { name: 'Employment Letter', submitted: true },
      { name: 'Bank Statement', submitted: false }
    ],
    notes: 'Application under review. Additional income verification required.'
  },
  {
    id: 2,
    propertyTitle: 'Thonglor Residence',
    propertyLocation: 'Thonglor 15',
    monthlyRent: 28000,
    status: 'approved',
    applicationDate: '2024-11-05',
    responseDate: '2024-11-10',
    completionPercentage: 100,
    requiredDocuments: [
      { name: 'ID Copy', submitted: true },
      { name: 'Employment Letter', submitted: true },
      { name: 'Bank Statement', submitted: true }
    ],
    notes: 'Congratulations! Your application has been approved.'
  }
])

// Viewings data
const viewingsList = ref([
  {
    id: 1,
    propertyTitle: 'Bangkok Heights Tower',
    propertyLocation: 'Sukhumvit 24',
    viewingDate: 'Nov 18, 2024',
    viewingTime: '3:00 PM',
    duration: 30,
    status: 'scheduled',
    bedrooms: 2,
    bathrooms: 2,
    size: 65,
    monthlyRent: 35000,
    agentName: 'Sarah Chen',
    agentPhone: '+66 81 234 5678',
    agentEmail: 'sarah@agent.com',
    notes: 'Please bring ID and be on time',
    isUrgent: true
  },
  {
    id: 2,
    propertyTitle: 'Thonglor Residence',
    propertyLocation: 'Thonglor 15',
    viewingDate: 'Nov 15, 2024',
    viewingTime: '2:00 PM',
    duration: 45,
    status: 'completed',
    bedrooms: 1,
    bathrooms: 1,
    size: 45,
    monthlyRent: 28000,
    agentName: 'Mike Johnson',
    agentPhone: '+66 82 345 6789',
    agentEmail: 'mike@agent.com',
    notes: null,
    isUrgent: false
  }
])

// Payment history
const paymentHistory = ref([
  {
    id: 1,
    description: 'Monthly Rent - November 2024',
    amount: 35000,
    dueDate: '2024-11-01',
    paidDate: '2024-11-01',
    status: 'completed',
    paymentMethod: 'Bank Transfer',
    lateFee: 0,
    notes: null
  },
  {
    id: 2,
    description: 'Monthly Rent - October 2024',
    amount: 35000,
    dueDate: '2024-10-01',
    paidDate: '2024-10-03',
    status: 'completed',
    paymentMethod: 'Credit Card',
    lateFee: 1000,
    notes: 'Late payment - 2 days overdue'
  }
])

// Maintenance requests
const maintenanceRequests = ref([
  {
    id: 1,
    title: 'Air Conditioning Not Working',
    description: 'The AC unit in the bedroom is not cooling properly and making strange noises.',
    category: 'HVAC',
    priority: 'urgent',
    status: 'in-progress',
    submittedDate: '2024-11-10',
    progress: 60,
    assignedTo: 'Bangkok Maintenance Co.',
    lastUpdate: {
      message: 'Technician scheduled for tomorrow morning between 9-11 AM.',
      author: 'Maintenance Team',
      date: '2024-11-12'
    },
    photos: [
      { id: 1, thumbnail: '/assets/placeholder/placeholder.webp', alt: 'AC unit' }
    ]
  },
  {
    id: 2,
    title: 'Kitchen Sink Leak',
    description: 'Small leak under the kitchen sink, appears to be from the pipe connection.',
    category: 'Plumbing',
    priority: 'normal',
    status: 'open',
    submittedDate: '2024-11-08',
    progress: 25,
    assignedTo: null,
    lastUpdate: null,
    photos: []
  }
])

// Maintenance categories
const maintenanceCategories = ref([
  {
    id: 1,
    name: 'Plumbing',
    bgColor: 'bg-blue-100 dark:bg-blue-900/20',
    iconColor: 'text-blue-600 dark:text-blue-400',
    iconPath: 'M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z'
  },
  {
    id: 2,
    name: 'Electrical',
    bgColor: 'bg-yellow-100 dark:bg-yellow-900/20',
    iconColor: 'text-yellow-600 dark:text-yellow-400',
    iconPath: 'M13 10V3L4 14h7v7l9-11h-7z'
  },
  {
    id: 3,
    name: 'HVAC',
    bgColor: 'bg-green-100 dark:bg-green-900/20',
    iconColor: 'text-green-600 dark:text-green-400',
    iconPath: 'M4 7V5a3 3 0 116 0v2h6a2 2 0 012 2v9a2 2 0 01-2 2H6a2 2 0 01-2-2V9a2 2 0 012-2z'
  },
  {
    id: 4,
    name: 'Appliances',
    bgColor: 'bg-purple-100 dark:bg-purple-900/20',
    iconColor: 'text-purple-600 dark:text-purple-400',
    iconPath: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'
  },
  {
    id: 5,
    name: 'Cleaning',
    bgColor: 'bg-pink-100 dark:bg-pink-900/20',
    iconColor: 'text-pink-600 dark:text-pink-400',
    iconPath: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'
  },
  {
    id: 6,
    name: 'Other',
    bgColor: 'bg-gray-100 dark:bg-gray-900/20',
    iconColor: 'text-gray-600 dark:text-gray-400',
    iconPath: 'M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z'
  }
])

// Messages data
const conversations = ref([
  {
    id: 1,
    contact: {
      name: 'Sarah Chen',
      initials: 'SC',
      role: 'Property Agent',
      company: 'Prime Properties'
    },
    lastMessage: 'The viewing is confirmed for tomorrow at 3 PM',
    lastMessageTime: '2024-11-12T14:30:00',
    unreadCount: 2,
    messages: [
      {
        id: 1,
        sender: 'other',
        content: 'Hi Alex! I have good news about the Bangkok Heights Tower unit.',
        timestamp: '2024-11-12T10:00:00'
      },
      {
        id: 2,
        sender: 'me',
        content: 'Great! What\'s the update?',
        timestamp: '2024-11-12T10:05:00'
      },
      {
        id: 3,
        sender: 'other',
        content: 'The viewing is confirmed for tomorrow at 3 PM',
        timestamp: '2024-11-12T14:30:00'
      }
    ]
  },
  {
    id: 2,
    contact: {
      name: 'Mr. Somchai Tanaka',
      initials: 'ST',
      role: 'Landlord',
      company: 'Property Owner'
    },
    lastMessage: 'Thank you for the prompt payment',
    lastMessageTime: '2024-11-01T09:15:00',
    unreadCount: 0,
    messages: [
      {
        id: 1,
        sender: 'me',
        content: 'Hi, I\'ve just made the November rent payment.',
        timestamp: '2024-11-01T08:00:00'
      },
      {
        id: 2,
        sender: 'other',
        content: 'Thank you for the prompt payment',
        timestamp: '2024-11-01T09:15:00'
      }
    ]
  }
])

const selectedConversation = ref(null)
const newMessage = ref('')

// Message templates
const messageTemplates = ref([
  {
    id: 1,
    title: 'Schedule Viewing',
    preview: 'I would like to schedule a viewing for...',
    content: 'Hi, I would like to schedule a viewing for the property. When would be a good time?'
  },
  {
    id: 2,
    title: 'Application Follow-up',
    preview: 'I wanted to follow up on my application...',
    content: 'Hi, I wanted to follow up on my rental application submitted on [date]. Could you please provide an update on the status?'
  },
  {
    id: 3,
    title: 'Maintenance Request',
    preview: 'I need to report a maintenance issue...',
    content: 'Hi, I need to report a maintenance issue in my unit. The problem is [describe issue]. Could you please arrange for someone to take a look?'
  }
])

// Calendar data for viewings
const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
const calendarDates = ref([
  { date: '2024-11-18', day: 18, viewings: [{ id: 1, time: '3:00 PM', propertyTitle: 'Bangkok Heights Tower', status: 'scheduled' }] },
  { date: '2024-11-19', day: 19, viewings: [] },
  { date: '2024-11-20', day: 20, viewings: [{ id: 2, time: '11:00 AM', propertyTitle: 'Sukhumvit Condo', status: 'scheduled' }] }
])

// Computed properties
const profileCompletionScore = computed(() => {
  let score = 0
  if (userProfile.value.firstName && userProfile.value.lastName) score += 20
  if (userProfile.value.email) score += 15
  if (userProfile.value.phone) score += 15
  if (employmentInfo.value.status && employmentInfo.value.companyName) score += 20
  if (rentalPreferences.value.budgetMax && rentalPreferences.value.preferredAreas.length > 0) score += 20
  if (userProfile.value.nationality) score += 10
  return score
})

const filteredProperties = computed(() => {
  return displayedProperties.value.filter(property => {
    if (searchFilters.value.location && !property.location.toLowerCase().includes(searchFilters.value.location.toLowerCase())) {
      return false
    }
    if (searchFilters.value.propertyType && searchFilters.value.propertyType !== 'condo') {
      return false
    }
    return true
  })
})

const sortedFavorites = computed(() => {
  return [...favoritesList.value].sort((a, b) => {
    switch (favoritesSort.value) {
      case 'price-low':
        return a.price - b.price
      case 'price-high':
        return b.price - a.price
      case 'location':
        return a.location.localeCompare(b.location)
      default:
        return new Date(b.savedDate) - new Date(a.savedDate)
    }
  })
})

const filteredApplicationsList = computed(() => {
  if (applicationFilter.value === 'all') return applicationsList.value
  return applicationsList.value.filter(app => app.status === applicationFilter.value)
})

const filteredPaymentHistory = computed(() => {
  if (paymentHistoryFilter.value === 'all') return paymentHistory.value
  
  const now = new Date()
  const cutoffDate = new Date()
  
  switch (paymentHistoryFilter.value) {
    case 'last-3-months':
      cutoffDate.setMonth(now.getMonth() - 3)
      break
    case 'last-6-months':
      cutoffDate.setMonth(now.getMonth() - 6)
      break
    case 'this-year':
      cutoffDate.setFullYear(now.getFullYear(), 0, 1)
      break
    default:
      return paymentHistory.value
  }
  
  return paymentHistory.value.filter(payment => new Date(payment.dueDate) >= cutoffDate)
})

const filteredMaintenanceRequests = computed(() => {
  if (maintenanceFilter.value === 'all') return maintenanceRequests.value
  if (maintenanceFilter.value === 'urgent') {
    return maintenanceRequests.value.filter(req => req.priority === 'urgent')
  }
  return maintenanceRequests.value.filter(req => req.status === maintenanceFilter.value)
})

const sortedViewings = computed(() => {
  return [...viewingsList.value].sort((a, b) => {
    return new Date(a.viewingDate) - new Date(b.viewingDate)
  })
})

const filteredConversations = computed(() => {
  if (messageFilter.value === 'all') return conversations.value
  if (messageFilter.value === 'unread') {
    return conversations.value.filter(conv => conv.unreadCount > 0)
  }
  if (messageFilter.value === 'agents') {
    return conversations.value.filter(conv => conv.contact.role.includes('Agent'))
  }
  if (messageFilter.value === 'landlords') {
    return conversations.value.filter(conv => conv.contact.role.includes('Landlord'))
  }
  return conversations.value
})

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

const formatTime = (timeString) => {
  return new Date(timeString).toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit'
  })
}

const formatTimeAgo = (timeString) => {
  const now = new Date()
  const time = new Date(timeString)
  const diffInHours = Math.floor((now - time) / (1000 * 60 * 60))
  
  if (diffInHours < 1) return 'Just now'
  if (diffInHours < 24) return `${diffInHours}h ago`
  return `${Math.floor(diffInHours / 24)}d ago`
}

const getProfileCompletionColor = (score) => {
  if (score >= 80) return 'text-green-600'
  if (score >= 60) return 'text-blue-600'
  if (score >= 40) return 'text-yellow-600'
  return 'text-red-600'
}

const getApplicationStatusClass = (status) => {
  switch (status) {
    case 'pending':
      return 'bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-400'
    case 'approved':
      return 'bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-400'
    case 'rejected':
      return 'bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-400'
    default:
      return 'bg-gray-100 dark:bg-gray-900/20 text-gray-800 dark:text-gray-400'
  }
}

const getProgressBarClass = (status) => {
  switch (status) {
    case 'approved':
    case 'completed':
      return 'bg-green-500'
    case 'in-progress':
      return 'bg-blue-500'
    case 'pending':
      return 'bg-yellow-500'
    default:
      return 'bg-gray-500'
  }
}

const getViewingStatusClass = (status) => {
  switch (status) {
    case 'scheduled':
      return 'bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-400'
    case 'completed':
      return 'bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-400'
    case 'cancelled':
      return 'bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-400'
    default:
      return 'bg-gray-100 dark:bg-gray-900/20 text-gray-800 dark:text-gray-400'
  }
}

const getPaymentStatusClass = (status) => {
  switch (status) {
    case 'completed':
      return 'bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-400'
    case 'pending':
      return 'bg-yellow-100 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-400'
    case 'failed':
      return 'bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-400'
    default:
      return 'bg-gray-100 dark:bg-gray-900/20 text-gray-800 dark:text-gray-400'
  }
}

const getMaintenanceStatusClass = (status) => {
  switch (status) {
    case 'open':
      return 'bg-orange-100 dark:bg-orange-900/20 text-orange-800 dark:text-orange-400'
    case 'in-progress':
      return 'bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-400'
    case 'completed':
      return 'bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-400'
    default:
      return 'bg-gray-100 dark:bg-gray-900/20 text-gray-800 dark:text-gray-400'
  }
}

const toggleFavorite = (propertyId) => {
  const property = displayedProperties.value.find(p => p.id === propertyId)
  if (property) {
    property.isFavorite = !property.isFavorite
  }
}

const removeFavorite = (propertyId) => {
  const index = favoritesList.value.findIndex(p => p.id === propertyId)
  if (index > -1) {
    favoritesList.value.splice(index, 1)
    favoriteProperties.value--
  }
}

const selectConversation = (conversation) => {
  selectedConversation.value = conversation
  conversation.unreadCount = 0
}

const sendMessage = () => {
  if (newMessage.value.trim() && selectedConversation.value) {
    selectedConversation.value.messages.push({
      id: Date.now(),
      sender: 'me',
      content: newMessage.value,
      timestamp: new Date().toISOString()
    })
    selectedConversation.value.lastMessage = newMessage.value
    selectedConversation.value.lastMessageTime = new Date().toISOString()
    newMessage.value = ''
  }
}

const useTemplate = (template) => {
  newMessage.value = template.content
}

// Lifecycle
onMounted(() => {
  // Initialize any data or perform setup
})
</script>

<style scoped>
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

.dark .overflow-y-auto::-webkit-scrollbar-thumb {
  background: rgba(75, 85, 99, 0.5);
}

.dark .overflow-y-auto::-webkit-scrollbar-thumb:hover {
  background: rgba(75, 85, 99, 0.7);
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

/* Toggle switch styling */
.toggle {
  appearance: none;
  background-color: #d1d5db;
  border: none;
  border-radius: 1rem;
  width: 3rem;
  height: 1.5rem;
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease;
}

.toggle:checked {
  background-color: #05c7be;
}

.toggle::after {
  content: '';
  position: absolute;
  top: 0.125rem;
  left: 0.125rem;
  width: 1.25rem;
  height: 1.25rem;
  background-color: white;
  border-radius: 50%;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.toggle:checked::after {
  transform: translateX(1.5rem);
}

.dark .toggle {
  background-color: #4b5563;
}

.dark .toggle:checked {
  background-color: #05c7be;
}

/* Focus ring improvements */
.focus\:ring-2:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow, 0 0 #0000);
}

/* Transition improvements */
.transition-colors {
  transition-property: color, background-color, border-color;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .grid-cols-4 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

/* Chat message animations */
@keyframes slideInFromRight {
  from {
    opacity: 0;
    transform: translateX(20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInFromLeft {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.message-enter-active {
  animation: slideInFromRight 0.3s ease-out;
}

.message-enter-active.from-other {
  animation: slideInFromLeft 0.3s ease-out;
}

/* Progress bar animations */
@keyframes progressAnimation {
  from {
    width: 0%;
  }
  to {
    width: var(--progress-width);
  }
}

.progress-animated {
  animation: progressAnimation 1s ease-out;
}

/* Status indicator pulse */
@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.status-indicator.urgent {
  animation: pulse 2s infinite;
}

/* Print styles */
@media print {
  .no-print {
    display: none;
  }
  
  .bg-white {
    background-color: white !important;
  }
  
  .text-brand-navy {
    color: #1e3a8a !important;
  }
}
</style>