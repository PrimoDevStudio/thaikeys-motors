<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 font-sans transition-colors duration-300">

    <!-- Buyer Info Bar -->
    <div class="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-4 transition-colors duration-300">
      <div class="flex items-center justify-between mx-auto">
        <!-- Buyer Info -->
        <div class="flex items-center space-x-6">
          <div class="flex items-center space-x-3">
            <div class="w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-800 dark:to-purple-600 rounded-full flex items-center justify-center">
              <svg class="w-6 h-6 text-purple-600 dark:text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"/>
              </svg>
            </div>
          </div>
          
          <div class="text-sm text-brand-navy dark:text-gray-400">
            <span class="font-medium">Welcome back, Sarah Mitchell</span>
            <div class="text-xs text-gray-500 flex items-center space-x-2">
              <span>Property Buyer</span>
              <span v-if="hasActiveOffers" class="bg-orange-100 dark:bg-orange-900/20 text-orange-800 dark:text-orange-400 px-2 py-0.5 rounded text-xs font-semibold">
                {{ activeOffers }} Active Offers
              </span>
              <span v-if="mortgagePreApproved" class="bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-400 px-2 py-0.5 rounded text-xs font-semibold">
                Pre-Approved
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
              placeholder="Search properties, areas, price range..."
              class="w-96 px-4 py-2 pr-10 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-turqoise-light focus:border-transparent bg-white dark:bg-gray-700 text-brand-navy dark:text-white transition-colors duration-300"
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
            <div class="w-8 h-8 bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-800 dark:to-purple-600 rounded-full"></div>
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
      <!-- Buyer Sidebar Navigation -->
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
                     activeTab === 'saved' ? 'bg-brand-turqoise-light text-brand-navy border border-teal-200' : 'text-brand-navy dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700']"
            @click="activeTab = 'saved'"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
            </svg>
            <span class="font-medium">Saved Properties</span>
            <span class="bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-400 text-xs font-semibold px-2 py-1 rounded-full ml-auto">{{ savedProperties }}</span>
          </a>
          
          <a 
            href="#" 
            :class="['flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors', 
                     activeTab === 'offers' ? 'bg-brand-turqoise-light text-brand-navy border border-teal-200' : 'text-brand-navy dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700']"
            @click="activeTab = 'offers'"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
            </svg>
            <span class="font-medium">My Offers</span>
            <span v-if="activeOffers > 0" class="bg-orange-100 dark:bg-orange-900/20 text-orange-800 dark:text-orange-400 text-xs font-semibold px-2 py-1 rounded-full ml-auto">{{ activeOffers }}</span>
          </a>
          
          <a 
            href="#" 
            :class="['flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors', 
                     activeTab === 'finance' ? 'bg-brand-turqoise-light text-brand-navy border border-teal-200' : 'text-brand-navy dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700']"
            @click="activeTab = 'finance'"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/>
            </svg>
            <span class="font-medium">Mortgage & Finance</span>
            <span v-if="mortgagePreApproved" class="bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-400 text-xs font-semibold px-2 py-1 rounded-full ml-auto">Approved</span>
            <span v-else class="bg-yellow-100 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-400 text-xs font-semibold px-2 py-1 rounded-full ml-auto">Pending</span>
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
            <span class="font-medium">Viewings & Inspections</span>
            <span v-if="upcomingViewings > 0" class="bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-400 text-xs font-semibold px-2 py-1 rounded-full ml-auto">{{ upcomingViewings }}</span>
          </a>
          
          <a 
            href="#" 
            :class="['flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors', 
                     activeTab === 'timeline' ? 'bg-brand-turqoise-light text-brand-navy border border-teal-200' : 'text-brand-navy dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700']"
            @click="activeTab = 'timeline'"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
            </svg>
            <span class="font-medium">Purchase Timeline</span>
            <span v-if="activePurchases > 0" class="bg-purple-100 dark:bg-purple-900/20 text-purple-800 dark:text-purple-400 text-xs font-semibold px-2 py-1 rounded-full ml-auto">{{ activePurchases }}</span>
          </a>
          
          <a 
            href="#" 
            :class="['flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors', 
                     activeTab === 'documents' ? 'bg-brand-turqoise-light text-brand-navy border border-teal-200' : 'text-brand-navy dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700']"
            @click="activeTab = 'documents'"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
            </svg>
            <span class="font-medium">Documents & Legal</span>
            <span v-if="pendingDocuments > 0" class="bg-yellow-100 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-400 text-xs font-semibold px-2 py-1 rounded-full ml-auto">{{ pendingDocuments }}</span>
          </a>
          
          <a 
            href="#" 
            :class="['flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors', 
                     activeTab === 'investment' ? 'bg-brand-turqoise-light text-brand-navy border border-teal-200' : 'text-brand-navy dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700']"
            @click="activeTab = 'investment'"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
            </svg>
            <span class="font-medium">Investment Analysis</span>
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
                  <p class="text-3xl font-bold text-brand-navy dark:text-white">{{ savedProperties }}</p>
                  <p class="text-sm text-purple-600 dark:text-purple-400 mt-2">{{ newMatchesToday }} new matches today</p>
                </div>
                <div class="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-xl flex items-center justify-center">
                  <svg class="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                  </svg>
                </div>
              </div>
            </div>

            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 transition-colors duration-300">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm font-medium text-brand-navy dark:text-gray-400">Active Offers</p>
                  <p class="text-3xl font-bold text-brand-navy dark:text-white">{{ activeOffers }}</p>
                  <p class="text-sm text-orange-600 dark:text-orange-400 mt-2">{{ totalOffersMade }} total offers made</p>
                </div>
                <div class="w-12 h-12 bg-orange-100 dark:bg-orange-900/20 rounded-xl flex items-center justify-center">
                  <svg class="w-6 h-6 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                  </svg>
                </div>
              </div>
            </div>

            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 transition-colors duration-300">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm font-medium text-brand-navy dark:text-gray-400">Pre-Approval Amount</p>
                  <p class="text-3xl font-bold text-brand-navy dark:text-white">{{ formatCurrency(preApprovalAmount) }}</p>
                  <p class="text-sm text-green-600 dark:text-green-400 mt-2">{{ mortgageRate }}% interest rate</p>
                </div>
                <div class="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-xl flex items-center justify-center">
                  <svg class="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/>
                  </svg>
                </div>
              </div>
            </div>

            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 transition-colors duration-300">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm font-medium text-brand-navy dark:text-gray-400">Budget Remaining</p>
                  <p class="text-3xl font-bold text-brand-navy dark:text-white">{{ formatCurrency(budgetRemaining) }}</p>
                  <p class="text-sm text-blue-600 dark:text-blue-400 mt-2">{{ propertiesInBudget }} properties in range</p>
                </div>
                <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-xl flex items-center justify-center">
                  <svg class="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <!-- Quick Actions & Market Insights -->
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
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                  </svg>
                  <span>Mortgage Calculator</span>
                </button>
                
                <button class="w-full border-2 border-gray-200 dark:border-gray-600 text-brand-navy dark:text-gray-300 py-3 px-4 rounded-lg font-semibold hover:border-gray-300 dark:hover:border-gray-500 transition-colors flex items-center justify-center space-x-2">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                  </svg>
                  <span>Schedule Viewing</span>
                </button>
                
                <button class="w-full border-2 border-gray-200 dark:border-gray-600 text-brand-navy dark:text-gray-300 py-3 px-4 rounded-lg font-semibold hover:border-gray-300 dark:hover:border-gray-500 transition-colors flex items-center justify-center space-x-2">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                  </svg>
                  <span>Investment Analysis</span>
                </button>
              </div>
            </div>

            <!-- Recent Activity -->
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 transition-colors duration-300">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Recent Activity</h3>
              <div class="space-y-4">
                <div class="flex items-start space-x-3">
                  <div class="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p class="text-sm text-brand-navy dark:text-white font-medium">Offer submitted</p>
                    <p class="text-xs text-gray-500">Sukhumvit Penthouse - ฿18.5M</p>
                    <p class="text-xs text-gray-400">3 hours ago</p>
                  </div>
                </div>
                
                <div class="flex items-start space-x-3">
                  <div class="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p class="text-sm text-brand-navy dark:text-white font-medium">Viewing completed</p>
                    <p class="text-xs text-gray-500">Bangkok Heights Condo - Unit 28A</p>
                    <p class="text-xs text-gray-400">1 day ago</p>
                  </div>
                </div>
                
                <div class="flex items-start space-x-3">
                  <div class="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p class="text-sm text-brand-navy dark:text-white font-medium">Saved to favorites</p>
                    <p class="text-xs text-gray-500">Thonglor Luxury Villa</p>
                    <p class="text-xs text-gray-400">2 days ago</p>
                  </div>
                </div>
                
                <div class="flex items-start space-x-3">
                  <div class="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p class="text-sm text-brand-navy dark:text-white font-medium">Mortgage pre-approved</p>
                    <p class="text-xs text-gray-500">฿25M at 4.2% interest</p>
                    <p class="text-xs text-gray-400">1 week ago</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Market Insights -->
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 transition-colors duration-300">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Market Insights</h3>
              <div class="space-y-4">
                <div class="border border-gray-200 dark:border-gray-600 rounded-lg p-3">
                  <div class="flex items-center justify-between mb-2">
                    <h4 class="font-medium text-brand-navy dark:text-white">Sukhumvit Area</h4>
                    <span class="text-xs bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-400 px-2 py-1 rounded">+5.2%</span>
                  </div>
                  <p class="text-sm text-gray-600 dark:text-gray-400">Avg: ฿185,000/sqm</p>
                  <p class="text-xs text-gray-500 mt-1">12% price increase YoY</p>
                </div>
                
                <div class="border border-gray-200 dark:border-gray-600 rounded-lg p-3">
                  <div class="flex items-center justify-between mb-2">
                    <h4 class="font-medium text-brand-navy dark:text-white">Thonglor Area</h4>
                    <span class="text-xs bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-400 px-2 py-1 rounded">+3.8%</span>
                  </div>
                  <p class="text-sm text-gray-600 dark:text-gray-400">Avg: ฿220,000/sqm</p>
                  <p class="text-xs text-gray-500 mt-1">8% price increase YoY</p>
                </div>
                
                <div class="border border-gray-200 dark:border-gray-600 rounded-lg p-3">
                  <div class="flex items-center justify-between mb-2">
                    <h4 class="font-medium text-brand-navy dark:text-white">Interest Rates</h4>
                    <span class="text-xs bg-yellow-100 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-400 px-2 py-1 rounded">Stable</span>
                  </div>
                  <p class="text-sm text-gray-600 dark:text-gray-400">Current: 4.25%</p>
                  <p class="text-xs text-gray-500 mt-1">Expected to remain stable</p>
                </div>
                
                <button class="w-full text-brand-turqoise-light hover:text-teal-600 transition-colors text-sm font-medium">
                  View market report →
                </button>
              </div>
            </div>
          </div>

          <!-- Active Purchase Pipeline -->
          <div v-if="activePurchases > 0" class="mt-8 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 transition-colors duration-300">
            <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Active Purchase Pipeline</h3>
            <div class="space-y-4">
              <div v-for="purchase in activePurchasesList" :key="purchase.id" class="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
                <div class="flex items-center justify-between mb-3">
                  <div>
                    <h4 class="font-semibold text-brand-navy dark:text-white">{{ purchase.propertyTitle }}</h4>
                    <p class="text-sm text-gray-600 dark:text-gray-400">{{ purchase.location }}</p>
                  </div>
                  <div class="text-right">
                    <p class="font-bold text-brand-navy dark:text-white">{{ formatCurrency(purchase.offerAmount) }}</p>
                    <span :class="getPurchaseStatusClass(purchase.status)" class="text-xs px-2 py-1 rounded-full font-semibold">
                      {{ purchase.status }}
                    </span>
                  </div>
                </div>
                
                <div class="mb-3">
                  <div class="flex items-center justify-between text-sm mb-1">
                    <span class="text-gray-600 dark:text-gray-400">Progress</span>
                    <span class="font-medium text-brand-navy dark:text-white">{{ purchase.progress }}%</span>
                  </div>
                  <div class="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                    <div :class="getProgressBarClass(purchase.status)" class="h-2 rounded-full transition-all duration-300" :style="`width: ${purchase.progress}%`"></div>
                  </div>
                </div>
                
                <div class="flex items-center justify-between text-sm text-gray-500">
                  <span>Next: {{ purchase.nextMilestone }}</span>
                  <span>Due: {{ formatDate(purchase.nextDueDate) }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Property Search Tab -->
        <div v-if="activeTab === 'search'" class="p-6">
          <div class="flex items-center justify-between mb-6">
            <h2 class="text-2xl font-bold text-brand-navy dark:text-white">Property Search</h2>
            <div class="flex items-center space-x-4">
              <button class="bg-purple-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-600 transition-colors">
                Investment Calculator
              </button>
              <button class="bg-brand-turqoise-light text-brand-navy px-6 py-3 rounded-lg font-semibold hover:bg-teal-300 transition-colors">
                Save Search Alert
              </button>
            </div>
          </div>

          <!-- Search Filters -->
          <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 mb-6 transition-colors duration-300">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-4">
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
                  <option value="house">House</option>
                  <option value="townhouse">Townhouse</option>
                  <option value="villa">Villa</option>
                  <option value="penthouse">Penthouse</option>
                </select>
              </div>

              <!-- Bedrooms Filter -->
              <div>
                <label class="block text-sm font-medium text-brand-navy dark:text-gray-300 mb-2">Bedrooms</label>
                <select v-model="searchFilters.bedrooms" class="w-full px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-turqoise-light bg-white dark:bg-gray-700 text-brand-navy dark:text-white">
                  <option value="">Any</option>
                  <option value="1">1 Bedroom</option>
                  <option value="2">2 Bedrooms</option>
                  <option value="3">3 Bedrooms</option>
                  <option value="4">4 Bedrooms</option>
                  <option value="5+">5+ Bedrooms</option>
                </select>
              </div>

              <!-- Price Range Filter -->
              <div>
                <label class="block text-sm font-medium text-brand-navy dark:text-gray-300 mb-2">Price Range</label>
                <select v-model="searchFilters.priceRange" class="w-full px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-turqoise-light bg-white dark:bg-gray-700 text-brand-navy dark:text-white">
                  <option value="">Any Price</option>
                  <option value="0-5000000">Up to ฿5M</option>
                  <option value="5000000-10000000">฿5M - ฿10M</option>
                  <option value="10000000-20000000">฿10M - ฿20M</option>
                  <option value="20000000-50000000">฿20M - ฿50M</option>
                  <option value="50000000+">฿50M+</option>
                </select>
              </div>

              <!-- Investment Purpose -->
              <div>
                <label class="block text-sm font-medium text-brand-navy dark:text-gray-300 mb-2">Investment Purpose</label>
                <select v-model="searchFilters.investmentPurpose" class="w-full px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-turqoise-light bg-white dark:bg-gray-700 text-brand-navy dark:text-white">
                  <option value="">Any Purpose</option>
                  <option value="own-use">Own Use</option>
                  <option value="rental-income">Rental Income</option>
                  <option value="capital-appreciation">Capital Appreciation</option>
                  <option value="mixed">Mixed Investment</option>
                </select>
              </div>
            </div>

            <!-- Advanced Investment Filters -->
            <div class="pt-4 border-t border-gray-200 dark:border-gray-600">
              <button @click="showAdvancedFilters = !showAdvancedFilters" class="flex items-center space-x-2 text-brand-turqoise-light hover:text-teal-600 transition-colors mb-4">
                <span>Investment & Financial Filters</span>
                <svg :class="showAdvancedFilters ? 'rotate-180' : ''" class="w-4 h-4 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                </svg>
              </button>

              <!-- Advanced Filters -->
              <div v-if="showAdvancedFilters" class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h4 class="font-medium text-brand-navy dark:text-white mb-3">Investment Metrics</h4>
                  <div class="space-y-3">
                    <div>
                      <label class="block text-sm font-medium text-brand-navy dark:text-gray-300 mb-1">Min Rental Yield</label>
                      <select v-model="searchFilters.minRentalYield" class="w-full px-3 py-2 border border-gray-200 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-brand-turqoise-light bg-white dark:bg-gray-700 text-brand-navy dark:text-white text-sm">
                        <option value="">Any Yield</option>
                        <option value="3">3%+</option>
                        <option value="4">4%+</option>
                        <option value="5">5%+</option>
                        <option value="6">6%+</option>
                      </select>
                    </div>
                    <div>
                      <label class="block text-sm font-medium text-brand-navy dark:text-gray-300 mb-1">Price per SqM</label>
                      <select v-model="searchFilters.pricePerSqm" class="w-full px-3 py-2 border border-gray-200 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-brand-turqoise-light bg-white dark:bg-gray-700 text-brand-navy dark:text-white text-sm">
                        <option value="">Any</option>
                        <option value="0-100000">Under ฿100K</option>
                        <option value="100000-150000">฿100K-150K</option>
                        <option value="150000-200000">฿150K-200K</option>
                        <option value="200000+">฿200K+</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 class="font-medium text-brand-navy dark:text-white mb-3">Building & Amenities</h4>
                  <div class="space-y-2">
                    <label class="flex items-center">
                      <input type="checkbox" v-model="searchFilters.newDevelopment" class="mr-2">
                      <span class="text-sm text-brand-navy dark:text-white">New Development (< 2 years)</span>
                    </label>
                    <label class="flex items-center">
                      <input type="checkbox" v-model="searchFilters.swimmingPool" class="mr-2">
                      <span class="text-sm text-brand-navy dark:text-white">Swimming Pool</span>
                    </label>
                    <label class="flex items-center">
                      <input type="checkbox" v-model="searchFilters.gym" class="mr-2">
                      <span class="text-sm text-brand-navy dark:text-white">Fitness Center</span>
                    </label>
                    <label class="flex items-center">
                      <input type="checkbox" v-model="searchFilters.security" class="mr-2">
                      <span class="text-sm text-brand-navy dark:text-white">24/7 Security</span>
                    </label>
                    <label class="flex items-center">
                      <input type="checkbox" v-model="searchFilters.parking" class="mr-2">
                      <span class="text-sm text-brand-navy dark:text-white">Parking Included</span>
                    </label>
                  </div>
                </div>

                <div>
                  <h4 class="font-medium text-brand-navy dark:text-white mb-3">Location Features</h4>
                  <div class="space-y-2">
                    <label class="flex items-center">
                      <input type="checkbox" v-model="searchFilters.nearBTS" class="mr-2">
                      <span class="text-sm text-brand-navy dark:text-white">Near BTS/MRT (< 500m)</span>
                    </label>
                    <label class="flex items-center">
                      <input type="checkbox" v-model="searchFilters.nearShopping" class="mr-2">
                      <span class="text-sm text-brand-navy dark:text-white">Near Shopping Mall</span>
                    </label>
                    <label class="flex items-center">
                      <input type="checkbox" v-model="searchFilters.nearSchool" class="mr-2">
                      <span class="text-sm text-brand-navy dark:text-white">Near International School</span>
                    </label>
                    <label class="flex items-center">
                      <input type="checkbox" v-model="searchFilters.nearHospital" class="mr-2">
                      <span class="text-sm text-brand-navy dark:text-white">Near Hospital</span>
                    </label>
                    <label class="flex items-center">
                      <input type="checkbox" v-model="searchFilters.riverView" class="mr-2">
                      <span class="text-sm text-brand-navy dark:text-white">River/Park View</span>
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
                  <option value="yield-high">Rental Yield: High to Low</option>
                  <option value="sqm-price-low">Price per SqM: Low to High</option>
                  <option value="newest">Newest First</option>
                </select>
                
                <div class="flex items-center space-x-2">
                  <button :class="viewMode === 'grid' ? 'bg-brand-turqoise-light text-brand-navy' : 'bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-400'" class="p-2 rounded-lg" @click="viewMode = 'grid'">
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
                    <span v-if="property.investmentGrade" class="bg-purple-500 text-white text-xs px-2 py-1 rounded-full font-semibold ml-1">Investment Grade</span>
                  </div>
                  <div class="absolute bottom-3 left-3">
                    <span class="bg-black/60 text-white text-xs px-2 py-1 rounded-full">{{ property.rentalYield }}% Yield</span>
                  </div>
                </div>

                <!-- Property Details -->
                <div class="p-4">
                  <div class="flex items-start justify-between mb-2">
                    <h4 class="font-semibold text-brand-navy dark:text-white">{{ property.title }}</h4>
                    <span class="text-lg font-bold text-brand-navy dark:text-white">{{ formatCurrency(property.price) }}</span>
                  </div>
                  
                  <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">{{ property.location }}</p>
                  
                  <div class="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                    <span>{{ property.bedrooms }} bed</span>
                    <span>{{ property.bathrooms }} bath</span>
                    <span>{{ property.size }}m²</span>
                    <span>{{ formatCurrency(property.pricePerSqm) }}/m²</span>
                  </div>
                  
                  <!-- Investment Metrics -->
                  <div class="bg-gray-50 dark:bg-gray-700 rounded-lg p-3 mb-3">
                    <div class="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span class="text-gray-600 dark:text-gray-400">Monthly Rental</span>
                        <p class="font-semibold text-brand-navy dark:text-white">{{ formatCurrency(property.estimatedRental) }}</p>
                      </div>
                      <div>
                        <span class="text-gray-600 dark:text-gray-400">ROI Estimate</span>
                        <p class="font-semibold text-brand-navy dark:text-white">{{ property.roiEstimate }}%</p>
                      </div>
                    </div>
                  </div>
                  
                  <!-- Action Buttons -->
                  <div class="space-y-2">
                    <div class="flex space-x-2">
                      <button class="flex-1 bg-brand-turqoise-light text-brand-navy py-2 px-4 rounded-lg font-medium hover:bg-teal-300 transition-colors text-sm">
                        View Details
                      </button>
                      <button class="flex-1 border border-gray-200 dark:border-gray-600 text-brand-navy dark:text-gray-300 py-2 px-4 rounded-lg font-medium hover:border-gray-300 dark:hover:border-gray-500 transition-colors text-sm">
                        Schedule Tour
                      </button>
                    </div>
                    
                    <div class="flex space-x-2">
                      <button class="flex-1 border border-purple-200 dark:border-purple-600 text-purple-600 dark:text-purple-400 py-2 px-4 rounded-lg font-medium hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors text-sm flex items-center justify-center">
                        <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                        </svg>
                        Calculate ROI
                      </button>
                      <button class="flex-1 border border-orange-200 dark:border-orange-600 text-orange-600 dark:text-orange-400 py-2 px-4 rounded-lg font-medium hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-colors text-sm flex items-center justify-center">
                        <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                        </svg>
                        Make Offer
                      </button>
                    </div>
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
        <!-- Saved Properties Tab -->
        <div v-if="activeTab === 'saved'" class="p-6">
          <div class="flex items-center justify-between mb-6">
            <div>
              <h2 class="text-2xl font-bold text-brand-navy dark:text-white">Saved Properties</h2>
              <p class="text-gray-600 dark:text-gray-400">{{ savedPropertiesList.length }} properties saved • Total value: {{ formatCurrency(totalSavedValue) }}</p>
            </div>
            <div class="flex items-center space-x-4">
              <button class="bg-purple-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-600 transition-colors">
                Portfolio Analysis
              </button>
              <select v-model="savedPropertiesSort" class="px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-turqoise-light bg-white dark:bg-gray-700 text-brand-navy dark:text-white">
                <option value="newest">Recently Added</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="yield-high">Yield: High to Low</option>
                <option value="roi-high">ROI: High to Low</option>
              </select>
            </div>
          </div>

          <!-- Investment Summary Cards -->
          <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 transition-colors duration-300">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm font-medium text-gray-600 dark:text-gray-400">Avg. Rental Yield</p>
                  <p class="text-3xl font-bold text-brand-navy dark:text-white">{{ averageRentalYield }}%</p>
                  <p class="text-sm text-green-600 dark:text-green-400 mt-1">Above market average</p>
                </div>
                <div class="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-xl flex items-center justify-center">
                  <svg class="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                  </svg>
                </div>
              </div>
            </div>

            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 transition-colors duration-300">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm font-medium text-gray-600 dark:text-gray-400">Avg. Price per SqM</p>
                  <p class="text-3xl font-bold text-brand-navy dark:text-white">{{ formatCurrency(averagePricePerSqm) }}</p>
                  <p class="text-sm text-blue-600 dark:text-blue-400 mt-1">Market competitive</p>
                </div>
                <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-xl flex items-center justify-center">
                  <svg class="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"/>
                  </svg>
                </div>
              </div>
            </div>

            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 transition-colors duration-300">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm font-medium text-gray-600 dark:text-gray-400">Price Appreciation</p>
                  <p class="text-3xl font-bold text-brand-navy dark:text-white">+{{ averagePriceAppreciation }}%</p>
                  <p class="text-sm text-purple-600 dark:text-purple-400 mt-1">Since saved</p>
                </div>
                <div class="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-xl flex items-center justify-center">
                  <svg class="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"/>
                  </svg>
                </div>
              </div>
            </div>

            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 transition-colors duration-300">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm font-medium text-gray-600 dark:text-gray-400">Investment Score</p>
                  <p class="text-3xl font-bold text-brand-navy dark:text-white">{{ averageInvestmentScore }}/10</p>
                  <p class="text-sm text-orange-600 dark:text-orange-400 mt-1">Strong portfolio</p>
                </div>
                <div class="w-12 h-12 bg-orange-100 dark:bg-orange-900/20 rounded-xl flex items-center justify-center">
                  <svg class="w-6 h-6 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <!-- Saved Properties List -->
          <div class="grid grid-cols-1 gap-6">
            <div v-for="property in sortedSavedProperties" :key="property.id" class="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden transition-all duration-300 hover:shadow-xl">
              <div class="md:flex">
                <!-- Property Image -->
                <div class="relative md:w-80 h-48 md:h-auto">
                  <img :src="property.image" :alt="property.title" class="w-full h-full object-cover">
                  <button @click="removeFavorite(property.id)" class="absolute top-3 right-3 p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                  </button>
                  <div class="absolute top-3 left-3">
                    <span :class="getAvailabilityClass(property.availability)" class="text-white text-xs px-2 py-1 rounded-full font-semibold">
                      {{ property.availability }}
                    </span>
                  </div>
                  <div class="absolute bottom-3 left-3">
                    <span class="bg-black/60 text-white text-xs px-2 py-1 rounded-full">Saved {{ formatDate(property.savedDate) }}</span>
                  </div>
                </div>

                <!-- Property Details -->
                <div class="flex-1 p-6">
                  <div class="flex items-start justify-between mb-4">
                    <div>
                      <h4 class="text-xl font-semibold text-brand-navy dark:text-white mb-1">{{ property.title }}</h4>
                      <p class="text-gray-600 dark:text-gray-400 flex items-center">
                        <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                        </svg>
                        {{ property.location }}
                      </p>
                    </div>
                    <div class="text-right">
                      <p class="text-2xl font-bold text-brand-navy dark:text-white">{{ formatCurrency(property.currentPrice) }}</p>
                      <p v-if="property.priceChange !== 0" :class="property.priceChange > 0 ? 'text-green-600' : 'text-red-600'" class="text-sm font-medium">
                        {{ property.priceChange > 0 ? '+' : '' }}{{ property.priceChange }}% since saved
                      </p>
                    </div>
                  </div>

                  <!-- Property Specs -->
                  <div class="flex items-center space-x-6 text-sm text-gray-500 mb-4">
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
                    <span>{{ formatCurrency(property.pricePerSqm) }}/m²</span>
                  </div>

                  <!-- Investment Metrics -->
                  <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    <div class="bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
                      <p class="text-xs text-gray-600 dark:text-gray-400 mb-1">Rental Yield</p>
                      <p class="font-semibold text-brand-navy dark:text-white">{{ property.rentalYield }}%</p>
                    </div>
                    <div class="bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
                      <p class="text-xs text-gray-600 dark:text-gray-400 mb-1">Est. Rental</p>
                      <p class="font-semibold text-brand-navy dark:text-white">{{ formatCurrency(property.estimatedRental) }}</p>
                    </div>
                    <div class="bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
                      <p class="text-xs text-gray-600 dark:text-gray-400 mb-1">ROI (10 years)</p>
                      <p class="font-semibold text-brand-navy dark:text-white">{{ property.roiEstimate }}%</p>
                    </div>
                    <div class="bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
                      <p class="text-xs text-gray-600 dark:text-gray-400 mb-1">Investment Score</p>
                      <p class="font-semibold text-brand-navy dark:text-white">{{ property.investmentScore }}/10</p>
                    </div>
                  </div>

                  <!-- Market Analysis -->
                  <div class="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3 mb-4">
                    <div class="flex items-center justify-between mb-2">
                      <h5 class="font-medium text-blue-900 dark:text-blue-300">Market Analysis</h5>
                      <span class="text-xs text-blue-600 dark:text-blue-400">Updated {{ formatDate(property.lastAnalysisUpdate) }}</span>
                    </div>
                    <div class="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <p class="text-blue-800 dark:text-blue-400">vs Market</p>
                        <p :class="property.marketComparison > 0 ? 'text-green-600' : 'text-red-600'" class="font-semibold">
                          {{ property.marketComparison > 0 ? '+' : '' }}{{ property.marketComparison }}%
                        </p>
                      </div>
                      <div>
                        <p class="text-blue-800 dark:text-blue-400">Area Growth</p>
                        <p class="font-semibold text-blue-900 dark:text-blue-300">+{{ property.areaGrowth }}%</p>
                      </div>
                      <div>
                        <p class="text-blue-800 dark:text-blue-400">Demand Level</p>
                        <p class="font-semibold text-blue-900 dark:text-blue-300">{{ property.demandLevel }}</p>
                      </div>
                    </div>
                  </div>

                  <!-- Action Buttons -->
                  <div class="flex flex-wrap gap-2">
                    <button :disabled="property.availability !== 'Available'" :class="property.availability === 'Available' ? 'bg-brand-turqoise-light text-brand-navy hover:bg-teal-300' : 'bg-gray-300 text-gray-500 cursor-not-allowed'" class="px-4 py-2 rounded-lg font-medium transition-colors text-sm">
                      {{ property.availability === 'Available' ? 'View Details' : 'Not Available' }}
                    </button>
                    <button :disabled="property.availability !== 'Available'" :class="property.availability === 'Available' ? 'border border-purple-200 text-purple-600 hover:bg-purple-50' : 'border border-gray-300 text-gray-400 cursor-not-allowed'" class="px-4 py-2 rounded-lg font-medium transition-colors text-sm">
                      Investment Analysis
                    </button>
                    <button :disabled="property.availability !== 'Available'" :class="property.availability === 'Available' ? 'border border-orange-200 text-orange-600 hover:bg-orange-50' : 'border border-gray-300 text-gray-400 cursor-not-allowed'" class="px-4 py-2 rounded-lg font-medium transition-colors text-sm">
                      Make Offer
                    </button>
                    <button class="border border-blue-200 text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-lg font-medium transition-colors text-sm">
                      Schedule Tour
                    </button>
                    <button class="border border-gray-200 dark:border-gray-600 text-brand-navy dark:text-gray-300 px-4 py-2 rounded-lg font-medium hover:border-gray-300 dark:hover:border-gray-500 transition-colors text-sm">
                      Compare Similar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Empty State -->
          <div v-if="savedPropertiesList.length === 0" class="text-center py-12">
            <svg class="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
            </svg>
            <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-2">No Saved Properties</h3>
            <p class="text-gray-600 dark:text-gray-400 mb-4">Start saving properties you're interested in to track their investment potential</p>
            <button @click="activeTab = 'search'" class="bg-brand-turqoise-light text-brand-navy px-6 py-3 rounded-lg font-semibold hover:bg-teal-300 transition-colors">
              Browse Properties
            </button>
          </div>
        </div>
        <!-- My Offers Tab -->
        <div v-if="activeTab === 'offers'" class="p-6">
          <div class="flex items-center justify-between mb-6">
            <div>
              <h2 class="text-2xl font-bold text-brand-navy dark:text-white">My Offers</h2>
              <p class="text-gray-600 dark:text-gray-400">{{ activeOffers }} active offers • {{ totalOffersMade }} total offers made • {{ acceptanceRate }}% acceptance rate</p>
            </div>
            <button class="bg-brand-turqoise-light text-brand-navy px-6 py-3 rounded-lg font-semibold hover:bg-teal-300 transition-colors">
              New Offer
            </button>
          </div>

          <!-- Offer Status Overview -->
          <div class="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 transition-colors duration-300">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm font-medium text-gray-600 dark:text-gray-400">Pending</p>
                  <p class="text-3xl font-bold text-orange-600 dark:text-orange-400">{{ pendingOffers }}</p>
                  <p class="text-sm text-gray-500 mt-1">Awaiting response</p>
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
                  <p class="text-sm font-medium text-gray-600 dark:text-gray-400">Negotiating</p>
                  <p class="text-3xl font-bold text-blue-600 dark:text-blue-400">{{ negotiatingOffers }}</p>
                  <p class="text-sm text-gray-500 mt-1">In discussion</p>
                </div>
                <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-xl flex items-center justify-center">
                  <svg class="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                  </svg>
                </div>
              </div>
            </div>

            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 transition-colors duration-300">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm font-medium text-gray-600 dark:text-gray-400">Accepted</p>
                  <p class="text-3xl font-bold text-green-600 dark:text-green-400">{{ acceptedOffers }}</p>
                  <p class="text-sm text-gray-500 mt-1">Moving to contract</p>
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
                  <p class="text-3xl font-bold text-red-600 dark:text-red-400">{{ rejectedOffers }}</p>
                  <p class="text-sm text-gray-500 mt-1">Declined</p>
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
                  <p class="text-sm font-medium text-gray-600 dark:text-gray-400">Expired</p>
                  <p class="text-3xl font-bold text-gray-600 dark:text-gray-400">{{ expiredOffers }}</p>
                  <p class="text-sm text-gray-500 mt-1">Time ran out</p>
                </div>
                <div class="w-12 h-12 bg-gray-100 dark:bg-gray-600 rounded-xl flex items-center justify-center">
                  <svg class="w-6 h-6 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <!-- Offers List -->
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 transition-colors duration-300">
            <div class="p-6 border-b border-gray-200 dark:border-gray-600">
              <div class="flex items-center justify-between">
                <h3 class="text-lg font-semibold text-brand-navy dark:text-white">Recent Offers</h3>
                <select v-model="offerFilter" class="px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-turqoise-light bg-white dark:bg-gray-700 text-brand-navy dark:text-white">
                  <option value="all">All Offers</option>
                  <option value="pending">Pending</option>
                  <option value="negotiating">Negotiating</option>
                  <option value="accepted">Accepted</option>
                  <option value="rejected">Rejected</option>
                </select>
              </div>
            </div>

            <div class="divide-y divide-gray-200 dark:divide-gray-600">
              <div v-for="offer in filteredOffersList" :key="offer.id" class="p-6 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                <div class="flex items-start justify-between">
                  <div class="flex-1">
                    <div class="flex items-center space-x-4 mb-2">
                      <h4 class="font-semibold text-brand-navy dark:text-white">{{ offer.propertyTitle }}</h4>
                      <span :class="getOfferStatusClass(offer.status)" class="px-3 py-1 rounded-full text-xs font-semibold">
                        {{ offer.status.charAt(0).toUpperCase() + offer.status.slice(1) }}
                      </span>
                      <span v-if="offer.isUrgent" class="bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-400 px-2 py-1 rounded-full text-xs font-semibold">
                        Expires {{ formatTimeUntil(offer.expirationDate) }}
                      </span>
                    </div>
                    
                    <p class="text-sm text-gray-600 dark:text-gray-400 mb-2 flex items-center">
                      <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                      </svg>
                      {{ offer.propertyLocation }}
                    </p>
                    
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-3">
                      <div>
                        <span class="text-xs text-gray-500">Your Offer</span>
                        <p class="font-semibold text-brand-navy dark:text-white">{{ formatCurrency(offer.offerAmount) }}</p>
                      </div>
                      <div>
                        <span class="text-xs text-gray-500">Asking Price</span>
                        <p class="font-semibold text-gray-600 dark:text-gray-400">{{ formatCurrency(offer.askingPrice) }}</p>
                      </div>
                      <div>
                        <span class="text-xs text-gray-500">Difference</span>
                        <p :class="offer.offerAmount < offer.askingPrice ? 'text-red-600' : 'text-green-600'" class="font-semibold">
                          {{ offer.offerAmount < offer.askingPrice ? '-' : '+' }}{{ formatCurrency(Math.abs(offer.offerAmount - offer.askingPrice)) }}
                        </p>
                      </div>
                      <div>
                        <span class="text-xs text-gray-500">% of Asking</span>
                        <p class="font-semibold text-brand-navy dark:text-white">{{ Math.round((offer.offerAmount / offer.askingPrice) * 100) }}%</p>
                      </div>
                    </div>
                    
                    <!-- Offer Timeline -->
                    <div class="flex items-center space-x-6 text-sm text-gray-500 mb-3">
                      <span class="flex items-center">
                        <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                        </svg>
                        Submitted: {{ formatDate(offer.submittedDate) }}
                      </span>
                      <span v-if="offer.responseDate" class="flex items-center">
                        <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                        </svg>
                        Response: {{ formatDate(offer.responseDate) }}
                      </span>
                      <span class="flex items-center">
                        <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                        Expires: {{ formatDate(offer.expirationDate) }}
                      </span>
                    </div>
                    
                    <!-- Offer Conditions -->
                    <div class="mb-3">
                      <h5 class="text-sm font-medium text-brand-navy dark:text-white mb-2">Offer Conditions</h5>
                      <div class="flex flex-wrap gap-2">
                        <span v-for="condition in offer.conditions" :key="condition" class="text-xs bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-400 px-2 py-1 rounded-full">
                          {{ condition }}
                        </span>
                      </div>
                    </div>
                    
                    <!-- Counter Offer History -->
                    <div v-if="offer.counterOffers && offer.counterOffers.length > 0" class="mb-3">
                      <h5 class="text-sm font-medium text-brand-navy dark:text-white mb-2">Negotiation History</h5>
                      <div class="space-y-1">
                        <div v-for="counter in offer.counterOffers" :key="counter.id" class="flex items-center justify-between text-sm">
                          <span class="text-gray-600 dark:text-gray-400">{{ counter.from }} offered:</span>
                          <span class="font-medium text-brand-navy dark:text-white">{{ formatCurrency(counter.amount) }}</span>
                          <span class="text-xs text-gray-500">{{ formatDate(counter.date) }}</span>
                        </div>
                      </div>
                    </div>
                    
                    <!-- Seller Notes -->
                    <div v-if="offer.sellerNotes" class="bg-gray-50 dark:bg-gray-700 rounded-lg p-3 mb-3">
                      <p class="text-sm text-gray-700 dark:text-gray-300">
                        <span class="font-medium">Seller Notes:</span> {{ offer.sellerNotes }}
                      </p>
                    </div>
                  </div>
                  
                  <!-- Action Buttons -->
                  <div class="flex flex-col space-y-2 ml-6">
                    <button v-if="offer.status === 'pending'" class="px-4 py-2 bg-orange-500 text-white rounded-lg text-sm font-medium hover:bg-orange-600 transition-colors">
                      Withdraw Offer
                    </button>
                    <button v-if="offer.status === 'negotiating'" class="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors">
                      Make Counter Offer
                    </button>
                    <button v-if="offer.status === 'accepted'" class="px-4 py-2 bg-green-500 text-white rounded-lg text-sm font-medium hover:bg-green-600 transition-colors">
                      Proceed to Contract
                    </button>
                    <button v-if="offer.status === 'rejected'" class="px-4 py-2 bg-purple-500 text-white rounded-lg text-sm font-medium hover:bg-purple-600 transition-colors">
                      Make New Offer
                    </button>
                    <button class="px-4 py-2 border border-gray-200 dark:border-gray-600 text-brand-navy dark:text-gray-300 rounded-lg text-sm font-medium hover:border-gray-300 dark:hover:border-gray-500 transition-colors">
                      View Property
                    </button>
                    <button class="px-4 py-2 border border-gray-200 dark:border-gray-600 text-brand-navy dark:text-gray-300 rounded-lg text-sm font-medium hover:border-gray-300 dark:hover:border-gray-500 transition-colors">
                      Contact Agent
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Offer Strategy Tips -->
          <div class="mt-8 bg-purple-50 dark:bg-purple-900/20 rounded-xl p-6 border border-purple-200 dark:border-purple-800">
            <div class="flex items-start space-x-4">
              <div class="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-purple-900 dark:text-purple-300 mb-2">Offer Strategy Tips</h4>
                <ul class="text-sm text-purple-800 dark:text-purple-400 space-y-1">
                  <li>• Research comparable sales in the area before making an offer</li>
                  <li>• Consider market conditions - in hot markets, offer closer to asking price</li>
                  <li>• Include reasonable conditions like inspection and financing contingencies</li>
                  <li>• Be prepared to negotiate - first offers are rarely accepted as-is</li>
                  <li>• Set a reasonable expiration date (typically 24-72 hours)</li>
                  <li>• Have your financing pre-approved to strengthen your offer</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <!-- Mortgage & Finance Tab -->
        <div v-if="activeTab === 'finance'" class="p-6">
          <div class="flex items-center justify-between mb-6">
            <div>
              <h2 class="text-2xl font-bold text-brand-navy dark:text-white">Mortgage & Finance</h2>
              <p class="text-gray-600 dark:text-gray-400">Pre-approval status: {{ mortgagePreApproved ? 'Approved' : 'Pending' }} • {{ formatCurrency(preApprovalAmount) }} available</p>
            </div>
            <div class="flex items-center space-x-4">
              <button class="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors">
                Apply for Pre-Approval
              </button>
              <button class="bg-brand-turqoise-light text-brand-navy px-6 py-3 rounded-lg font-semibold hover:bg-teal-300 transition-colors">
                Mortgage Calculator
              </button>
            </div>
          </div>

          <!-- Financial Overview Cards -->
          <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 transition-colors duration-300">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm font-medium text-gray-600 dark:text-gray-400">Pre-Approval Amount</p>
                  <p class="text-3xl font-bold text-brand-navy dark:text-white">{{ formatCurrency(preApprovalAmount) }}</p>
                  <p class="text-sm text-green-600 dark:text-green-400 mt-1">{{ mortgageRate }}% interest rate</p>
                </div>
                <div class="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-xl flex items-center justify-center">
                  <svg class="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
              </div>
            </div>

            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 transition-colors duration-300">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm font-medium text-gray-600 dark:text-gray-400">Monthly Payment</p>
                  <p class="text-3xl font-bold text-brand-navy dark:text-white">{{ formatCurrency(estimatedMonthlyPayment) }}</p>
                  <p class="text-sm text-blue-600 dark:text-blue-400 mt-1">30-year fixed</p>
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
                  <p class="text-sm font-medium text-gray-600 dark:text-gray-400">Down Payment</p>
                  <p class="text-3xl font-bold text-brand-navy dark:text-white">{{ formatCurrency(downPaymentAmount) }}</p>
                  <p class="text-sm text-purple-600 dark:text-purple-400 mt-1">{{ downPaymentPercent }}% required</p>
                </div>
                <div class="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-xl flex items-center justify-center">
                  <svg class="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"/>
                  </svg>
                </div>
              </div>
            </div>

            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 transition-colors duration-300">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm font-medium text-gray-600 dark:text-gray-400">Debt-to-Income</p>
                  <p class="text-3xl font-bold text-brand-navy dark:text-white">{{ debtToIncomeRatio }}%</p>
                  <p class="text-sm text-orange-600 dark:text-orange-400 mt-1">{{ dtiStatus }}</p>
                </div>
                <div class="w-12 h-12 bg-orange-100 dark:bg-orange-900/20 rounded-xl flex items-center justify-center">
                  <svg class="w-6 h-6 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <!-- Mortgage Calculator & Pre-Approval Status -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <!-- Mortgage Calculator -->
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 transition-colors duration-300">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Mortgage Calculator</h3>
              <div class="space-y-4">
                <div>
                  <label class="block text-sm font-medium text-brand-navy dark:text-gray-300 mb-2">Purchase Price</label>
                  <input type="number" v-model="calculatorInputs.purchasePrice" class="w-full px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-turqoise-light bg-white dark:bg-gray-700 text-brand-navy dark:text-white" placeholder="Property price">
                </div>
                
                <div class="grid grid-cols-2 gap-4">
                  <div>
                    <label class="block text-sm font-medium text-brand-navy dark:text-gray-300 mb-2">Down Payment (%)</label>
                    <input type="number" v-model="calculatorInputs.downPaymentPercent" class="w-full px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-turqoise-light bg-white dark:bg-gray-700 text-brand-navy dark:text-white" placeholder="20">
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-brand-navy dark:text-gray-300 mb-2">Interest Rate (%)</label>
                    <input type="number" step="0.01" v-model="calculatorInputs.interestRate" class="w-full px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-turqoise-light bg-white dark:bg-gray-700 text-brand-navy dark:text-white" placeholder="4.25">
                  </div>
                </div>
                
                <div>
                  <label class="block text-sm font-medium text-brand-navy dark:text-gray-300 mb-2">Loan Term (years)</label>
                  <select v-model="calculatorInputs.loanTerm" class="w-full px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-turqoise-light bg-white dark:bg-gray-700 text-brand-navy dark:text-white">
                    <option value="15">15 years</option>
                    <option value="20">20 years</option>
                    <option value="25">25 years</option>
                    <option value="30">30 years</option>
                  </select>
                </div>
                
                <button @click="calculateMortgage" class="w-full bg-brand-turqoise-light text-brand-navy py-3 px-4 rounded-lg font-semibold hover:bg-teal-300 transition-colors">
                  Calculate Payment
                </button>
                
                <!-- Calculation Results -->
                <div v-if="calculationResults" class="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 space-y-3">
                  <div class="flex justify-between">
                    <span class="text-sm text-gray-600 dark:text-gray-400">Monthly Payment</span>
                    <span class="font-semibold text-brand-navy dark:text-white">{{ formatCurrency(calculationResults.monthlyPayment) }}</span>
                  </div>
                  <div class="flex justify-between">
                    <span class="text-sm text-gray-600 dark:text-gray-400">Down Payment</span>
                    <span class="font-semibold text-brand-navy dark:text-white">{{ formatCurrency(calculationResults.downPayment) }}</span>
                  </div>
                  <div class="flex justify-between">
                    <span class="text-sm text-gray-600 dark:text-gray-400">Loan Amount</span>
                    <span class="font-semibold text-brand-navy dark:text-white">{{ formatCurrency(calculationResults.loanAmount) }}</span>
                  </div>
                  <div class="flex justify-between">
                    <span class="text-sm text-gray-600 dark:text-gray-400">Total Interest</span>
                    <span class="font-semibold text-brand-navy dark:text-white">{{ formatCurrency(calculationResults.totalInterest) }}</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Pre-Approval Status -->
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 transition-colors duration-300">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Pre-Approval Status</h3>
              
              <div class="space-y-4">
                <div class="flex items-center justify-between p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <div class="flex items-center space-x-3">
                    <svg class="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    <div>
                      <h4 class="font-medium text-green-900 dark:text-green-300">Pre-Approved</h4>
                      <p class="text-sm text-green-700 dark:text-green-400">Bangkok Bank</p>
                    </div>
                  </div>
                  <div class="text-right">
                    <p class="font-bold text-green-900 dark:text-green-300">{{ formatCurrency(preApprovalAmount) }}</p>
                    <p class="text-sm text-green-700 dark:text-green-400">{{ mortgageRate }}% APR</p>
                  </div>
                </div>
                
                <div class="space-y-3">
                  <h4 class="font-medium text-brand-navy dark:text-white">Pre-Approval Details</h4>
                  
                  <div class="flex justify-between text-sm">
                    <span class="text-gray-600 dark:text-gray-400">Approval Date</span>
                    <span class="text-brand-navy dark:text-white">{{ formatDate(preApprovalDate) }}</span>
                  </div>
                  
                  <div class="flex justify-between text-sm">
                    <span class="text-gray-600 dark:text-gray-400">Expiration Date</span>
                    <span class="text-brand-navy dark:text-white">{{ formatDate(preApprovalExpirationDate) }}</span>
                  </div>
                  
                  <div class="flex justify-between text-sm">
                    <span class="text-gray-600 dark:text-gray-400">Loan Program</span>
                    <span class="text-brand-navy dark:text-white">{{ loanProgram }}</span>
                  </div>
                  
                  <div class="flex justify-between text-sm">
                    <span class="text-gray-600 dark:text-gray-400">Max LTV Ratio</span>
                    <span class="text-brand-navy dark:text-white">{{ maxLTVRatio }}%</span>
                  </div>
                </div>
                
                <div class="pt-4 border-t border-gray-200 dark:border-gray-600">
                  <h4 class="font-medium text-brand-navy dark:text-white mb-2">Required Documents Status</h4>
                  <div class="space-y-2">
                    <div v-for="doc in requiredDocuments" :key="doc.name" class="flex items-center justify-between">
                      <span class="text-sm text-brand-navy dark:text-white">{{ doc.name }}</span>
                      <span :class="doc.submitted ? 'text-green-600' : 'text-red-600'" class="text-xs font-semibold">
                        {{ doc.submitted ? '✓ Submitted' : '✗ Pending' }}
                      </span>
                    </div>
                  </div>
                </div>
                
                <button class="w-full bg-green-500 text-white py-2 px-4 rounded-lg font-medium hover:bg-green-600 transition-colors">
                  Download Pre-Approval Letter
                </button>
              </div>
            </div>
          </div>

          <!-- Lender Comparison -->
          <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 mb-8 transition-colors duration-300">
            <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Lender Comparison</h3>
            <div class="overflow-x-auto">
              <table class="w-full">
                <thead>
                  <tr class="border-b border-gray-200 dark:border-gray-600">
                    <th class="text-left py-3 px-4 font-medium text-brand-navy dark:text-white">Lender</th>
                    <th class="text-left py-3 px-4 font-medium text-brand-navy dark:text-white">Interest Rate</th>
                    <th class="text-left py-3 px-4 font-medium text-brand-navy dark:text-white">APR</th>
                    <th class="text-left py-3 px-4 font-medium text-brand-navy dark:text-white">Max LTV</th>
                    <th class="text-left py-3 px-4 font-medium text-brand-navy dark:text-white">Processing Fee</th>
                    <th class="text-left py-3 px-4 font-medium text-brand-navy dark:text-white">Status</th>
                    <th class="text-left py-3 px-4 font-medium text-brand-navy dark:text-white">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="lender in lenderOptions" :key="lender.id" class="border-b border-gray-100 dark:border-gray-700">
                    <td class="py-3 px-4">
                      <div class="flex items-center space-x-3">
                        <img :src="lender.logo" :alt="lender.name" class="w-8 h-8 rounded">
                        <span class="font-medium text-brand-navy dark:text-white">{{ lender.name }}</span>
                      </div>
                    </td>
                    <td class="py-3 px-4 text-brand-navy dark:text-white">{{ lender.interestRate }}%</td>
                    <td class="py-3 px-4 text-brand-navy dark:text-white">{{ lender.apr }}%</td>
                    <td class="py-3 px-4 text-brand-navy dark:text-white">{{ lender.maxLTV }}%</td>
                    <td class="py-3 px-4 text-brand-navy dark:text-white">{{ formatCurrency(lender.processingFee) }}</td>
                    <td class="py-3 px-4">
                      <span :class="getLenderStatusClass(lender.status)" class="px-2 py-1 rounded-full text-xs font-semibold">
                        {{ lender.status }}
                      </span>
                    </td>
                    <td class="py-3 px-4">
                      <button v-if="lender.status === 'Available'" class="bg-brand-turqoise-light text-brand-navy px-3 py-1 rounded text-sm font-medium hover:bg-teal-300 transition-colors">
                        Apply
                      </button>
                      <button v-else-if="lender.status === 'Pre-Approved'" class="bg-green-500 text-white px-3 py-1 rounded text-sm font-medium">
                        Approved
                      </button>
                      <span v-else class="text-gray-500 text-sm">{{ lender.status }}</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <!-- Financial Planning Tips -->
          <div class="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
            <div class="flex items-start space-x-4">
              <div class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"/>
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-blue-900 dark:text-blue-300 mb-2">Mortgage & Finance Tips</h4>
                <ul class="text-sm text-blue-800 dark:text-blue-400 space-y-1">
                  <li>• Get pre-approved before house hunting to understand your budget</li>
                  <li>• Compare rates from multiple lenders to get the best deal</li>
                  <li>• Consider the total cost including insurance, taxes, and maintenance</li>
                  <li>• Aim for a debt-to-income ratio below 36% for better rates</li>
                  <li>• Save for closing costs (typically 2-5% of purchase price)</li>
                  <li>• Fixed-rate mortgages offer payment stability over time</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <!-- Mortgage & Finance Tab -->
        <div v-if="activeTab === 'finance'" class="p-6">
          <div class="flex items-center justify-between mb-6">
            <div>
              <h2 class="text-2xl font-bold text-brand-navy dark:text-white">Mortgage & Finance</h2>
              <p class="text-gray-600 dark:text-gray-400">Pre-approval status: {{ mortgagePreApproved ? 'Approved' : 'Pending' }} • {{ formatCurrency(preApprovalAmount) }} available</p>
            </div>
            <div class="flex items-center space-x-4">
              <button class="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors">
                Apply for Pre-Approval
              </button>
              <button class="bg-brand-turqoise-light text-brand-navy px-6 py-3 rounded-lg font-semibold hover:bg-teal-300 transition-colors">
                Mortgage Calculator
              </button>
            </div>
          </div>

          <!-- Financial Overview Cards -->
          <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 transition-colors duration-300">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm font-medium text-gray-600 dark:text-gray-400">Pre-Approval Amount</p>
                  <p class="text-3xl font-bold text-brand-navy dark:text-white">{{ formatCurrency(preApprovalAmount) }}</p>
                  <p class="text-sm text-green-600 dark:text-green-400 mt-1">{{ mortgageRate }}% interest rate</p>
                </div>
                <div class="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-xl flex items-center justify-center">
                  <svg class="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
              </div>
            </div>

            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 transition-colors duration-300">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm font-medium text-gray-600 dark:text-gray-400">Monthly Payment</p>
                  <p class="text-3xl font-bold text-brand-navy dark:text-white">{{ formatCurrency(estimatedMonthlyPayment) }}</p>
                  <p class="text-sm text-blue-600 dark:text-blue-400 mt-1">30-year fixed</p>
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
                  <p class="text-sm font-medium text-gray-600 dark:text-gray-400">Down Payment</p>
                  <p class="text-3xl font-bold text-brand-navy dark:text-white">{{ formatCurrency(downPaymentAmount) }}</p>
                  <p class="text-sm text-purple-600 dark:text-purple-400 mt-1">{{ downPaymentPercent }}% required</p>
                </div>
                <div class="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-xl flex items-center justify-center">
                  <svg class="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"/>
                  </svg>
                </div>
              </div>
            </div>

            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 transition-colors duration-300">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm font-medium text-gray-600 dark:text-gray-400">Debt-to-Income</p>
                  <p class="text-3xl font-bold text-brand-navy dark:text-white">{{ debtToIncomeRatio }}%</p>
                  <p class="text-sm text-orange-600 dark:text-orange-400 mt-1">{{ dtiStatus }}</p>
                </div>
                <div class="w-12 h-12 bg-orange-100 dark:bg-orange-900/20 rounded-xl flex items-center justify-center">
                  <svg class="w-6 h-6 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <!-- Mortgage Calculator & Pre-Approval Status -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <!-- Mortgage Calculator -->
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 transition-colors duration-300">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Mortgage Calculator</h3>
              <div class="space-y-4">
                <div>
                  <label class="block text-sm font-medium text-brand-navy dark:text-gray-300 mb-2">Purchase Price</label>
                  <input type="number" v-model="calculatorInputs.purchasePrice" class="w-full px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-turqoise-light bg-white dark:bg-gray-700 text-brand-navy dark:text-white" placeholder="Property price">
                </div>
                
                <div class="grid grid-cols-2 gap-4">
                  <div>
                    <label class="block text-sm font-medium text-brand-navy dark:text-gray-300 mb-2">Down Payment (%)</label>
                    <input type="number" v-model="calculatorInputs.downPaymentPercent" class="w-full px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-turqoise-light bg-white dark:bg-gray-700 text-brand-navy dark:text-white" placeholder="20">
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-brand-navy dark:text-gray-300 mb-2">Interest Rate (%)</label>
                    <input type="number" step="0.01" v-model="calculatorInputs.interestRate" class="w-full px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-turqoise-light bg-white dark:bg-gray-700 text-brand-navy dark:text-white" placeholder="4.25">
                  </div>
                </div>
                
                <div>
                  <label class="block text-sm font-medium text-brand-navy dark:text-gray-300 mb-2">Loan Term (years)</label>
                  <select v-model="calculatorInputs.loanTerm" class="w-full px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-turqoise-light bg-white dark:bg-gray-700 text-brand-navy dark:text-white">
                    <option value="15">15 years</option>
                    <option value="20">20 years</option>
                    <option value="25">25 years</option>
                    <option value="30">30 years</option>
                  </select>
                </div>
                
                <button @click="calculateMortgage" class="w-full bg-brand-turqoise-light text-brand-navy py-3 px-4 rounded-lg font-semibold hover:bg-teal-300 transition-colors">
                  Calculate Payment
                </button>
                
                <!-- Calculation Results -->
                <div v-if="calculationResults" class="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 space-y-3">
                  <div class="flex justify-between">
                    <span class="text-sm text-gray-600 dark:text-gray-400">Monthly Payment</span>
                    <span class="font-semibold text-brand-navy dark:text-white">{{ formatCurrency(calculationResults.monthlyPayment) }}</span>
                  </div>
                  <div class="flex justify-between">
                    <span class="text-sm text-gray-600 dark:text-gray-400">Down Payment</span>
                    <span class="font-semibold text-brand-navy dark:text-white">{{ formatCurrency(calculationResults.downPayment) }}</span>
                  </div>
                  <div class="flex justify-between">
                    <span class="text-sm text-gray-600 dark:text-gray-400">Loan Amount</span>
                    <span class="font-semibold text-brand-navy dark:text-white">{{ formatCurrency(calculationResults.loanAmount) }}</span>
                  </div>
                  <div class="flex justify-between">
                    <span class="text-sm text-gray-600 dark:text-gray-400">Total Interest</span>
                    <span class="font-semibold text-brand-navy dark:text-white">{{ formatCurrency(calculationResults.totalInterest) }}</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Pre-Approval Status -->
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 transition-colors duration-300">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Pre-Approval Status</h3>
              
              <div class="space-y-4">
                <div class="flex items-center justify-between p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <div class="flex items-center space-x-3">
                    <svg class="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    <div>
                      <h4 class="font-medium text-green-900 dark:text-green-300">Pre-Approved</h4>
                      <p class="text-sm text-green-700 dark:text-green-400">Bangkok Bank</p>
                    </div>
                  </div>
                  <div class="text-right">
                    <p class="font-bold text-green-900 dark:text-green-300">{{ formatCurrency(preApprovalAmount) }}</p>
                    <p class="text-sm text-green-700 dark:text-green-400">{{ mortgageRate }}% APR</p>
                  </div>
                </div>
                
                <div class="space-y-3">
                  <h4 class="font-medium text-brand-navy dark:text-white">Pre-Approval Details</h4>
                  
                  <div class="flex justify-between text-sm">
                    <span class="text-gray-600 dark:text-gray-400">Approval Date</span>
                    <span class="text-brand-navy dark:text-white">{{ formatDate(preApprovalDate) }}</span>
                  </div>
                  
                  <div class="flex justify-between text-sm">
                    <span class="text-gray-600 dark:text-gray-400">Expiration Date</span>
                    <span class="text-brand-navy dark:text-white">{{ formatDate(preApprovalExpirationDate) }}</span>
                  </div>
                  
                  <div class="flex justify-between text-sm">
                    <span class="text-gray-600 dark:text-gray-400">Loan Program</span>
                    <span class="text-brand-navy dark:text-white">{{ loanProgram }}</span>
                  </div>
                  
                  <div class="flex justify-between text-sm">
                    <span class="text-gray-600 dark:text-gray-400">Max LTV Ratio</span>
                    <span class="text-brand-navy dark:text-white">{{ maxLTVRatio }}%</span>
                  </div>
                </div>
                
                <div class="pt-4 border-t border-gray-200 dark:border-gray-600">
                  <h4 class="font-medium text-brand-navy dark:text-white mb-2">Required Documents Status</h4>
                  <div class="space-y-2">
                    <div v-for="doc in requiredDocuments" :key="doc.name" class="flex items-center justify-between">
                      <span class="text-sm text-brand-navy dark:text-white">{{ doc.name }}</span>
                      <span :class="doc.submitted ? 'text-green-600' : 'text-red-600'" class="text-xs font-semibold">
                        {{ doc.submitted ? '✓ Submitted' : '✗ Pending' }}
                      </span>
                    </div>
                  </div>
                </div>
                
                <button class="w-full bg-green-500 text-white py-2 px-4 rounded-lg font-medium hover:bg-green-600 transition-colors">
                  Download Pre-Approval Letter
                </button>
              </div>
            </div>
          </div>

          <!-- Lender Comparison -->
          <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 mb-8 transition-colors duration-300">
            <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Lender Comparison</h3>
            <div class="overflow-x-auto">
              <table class="w-full">
                <thead>
                  <tr class="border-b border-gray-200 dark:border-gray-600">
                    <th class="text-left py-3 px-4 font-medium text-brand-navy dark:text-white">Lender</th>
                    <th class="text-left py-3 px-4 font-medium text-brand-navy dark:text-white">Interest Rate</th>
                    <th class="text-left py-3 px-4 font-medium text-brand-navy dark:text-white">APR</th>
                    <th class="text-left py-3 px-4 font-medium text-brand-navy dark:text-white">Max LTV</th>
                    <th class="text-left py-3 px-4 font-medium text-brand-navy dark:text-white">Processing Fee</th>
                    <th class="text-left py-3 px-4 font-medium text-brand-navy dark:text-white">Status</th>
                    <th class="text-left py-3 px-4 font-medium text-brand-navy dark:text-white">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="lender in lenderOptions" :key="lender.id" class="border-b border-gray-100 dark:border-gray-700">
                    <td class="py-3 px-4">
                      <div class="flex items-center space-x-3">
                        <img :src="lender.logo" :alt="lender.name" class="w-8 h-8 rounded">
                        <span class="font-medium text-brand-navy dark:text-white">{{ lender.name }}</span>
                      </div>
                    </td>
                    <td class="py-3 px-4 text-brand-navy dark:text-white">{{ lender.interestRate }}%</td>
                    <td class="py-3 px-4 text-brand-navy dark:text-white">{{ lender.apr }}%</td>
                    <td class="py-3 px-4 text-brand-navy dark:text-white">{{ lender.maxLTV }}%</td>
                    <td class="py-3 px-4 text-brand-navy dark:text-white">{{ formatCurrency(lender.processingFee) }}</td>
                    <td class="py-3 px-4">
                      <span :class="getLenderStatusClass(lender.status)" class="px-2 py-1 rounded-full text-xs font-semibold">
                        {{ lender.status }}
                      </span>
                    </td>
                    <td class="py-3 px-4">
                      <button v-if="lender.status === 'Available'" class="bg-brand-turqoise-light text-brand-navy px-3 py-1 rounded text-sm font-medium hover:bg-teal-300 transition-colors">
                        Apply
                      </button>
                      <button v-else-if="lender.status === 'Pre-Approved'" class="bg-green-500 text-white px-3 py-1 rounded text-sm font-medium">
                        Approved
                      </button>
                      <span v-else class="text-gray-500 text-sm">{{ lender.status }}</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <!-- Financial Planning Tips -->
          <div class="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
            <div class="flex items-start space-x-4">
              <div class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"/>
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-blue-900 dark:text-blue-300 mb-2">Mortgage & Finance Tips</h4>
                <ul class="text-sm text-blue-800 dark:text-blue-400 space-y-1">
                  <li>• Get pre-approved before house hunting to understand your budget</li>
                  <li>• Compare rates from multiple lenders to get the best deal</li>
                  <li>• Consider the total cost including insurance, taxes, and maintenance</li>
                  <li>• Aim for a debt-to-income ratio below 36% for better rates</li>
                  <li>• Save for closing costs (typically 2-5% of purchase price)</li>
                  <li>• Fixed-rate mortgages offer payment stability over time</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <!-- Purchase Timeline Tab -->
        <div v-if="activeTab === 'timeline'" class="p-6">
          <div class="flex items-center justify-between mb-6">
            <div>
              <h2 class="text-2xl font-bold text-brand-navy dark:text-white">Purchase Timeline</h2>
              <p class="text-gray-600 dark:text-gray-400">{{ activePurchases }} active purchases • {{ averageTimeToClose }} days average to close</p>
            </div>
            <button class="bg-brand-turqoise-light text-brand-navy px-6 py-3 rounded-lg font-semibold hover:bg-teal-300 transition-colors">
              Purchase Checklist
            </button>
          </div>

          <!-- Active Purchases -->
          <div v-for="purchase in activePurchasesList" :key="purchase.id" class="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 mb-8 transition-colors duration-300">
            <!-- Purchase Header -->
            <div class="p-6 border-b border-gray-200 dark:border-gray-600">
              <div class="flex items-center justify-between mb-4">
                <div>
                  <h3 class="text-xl font-semibold text-brand-navy dark:text-white">{{ purchase.propertyTitle }}</h3>
                  <p class="text-gray-600 dark:text-gray-400">{{ purchase.location }}</p>
                </div>
                <div class="text-right">
                  <p class="text-2xl font-bold text-brand-navy dark:text-white">{{ formatCurrency(purchase.offerAmount) }}</p>
                  <span :class="getPurchaseStatusClass(purchase.status)" class="px-3 py-1 rounded-full text-sm font-semibold">
                    {{ purchase.status }}
                  </span>
                </div>
              </div>
              
              <!-- Progress Bar -->
              <div class="mb-4">
                <div class="flex items-center justify-between text-sm mb-2">
                  <span class="text-gray-600 dark:text-gray-400">Purchase Progress</span>
                  <span class="font-medium text-brand-navy dark:text-white">{{ purchase.progress }}% Complete</span>
                </div>
                <div class="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-3">
                  <div :class="getProgressBarClass(purchase.status)" class="h-3 rounded-full transition-all duration-300" :style="`width: ${purchase.progress}%`"></div>
                </div>
              </div>
              
              <!-- Key Dates -->
              <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div>
                  <span class="text-gray-600 dark:text-gray-400">Offer Accepted</span>
                  <p class="font-medium text-brand-navy dark:text-white">{{ formatDate(purchase.offerAcceptedDate) }}</p>
                </div>
                <div>
                  <span class="text-gray-600 dark:text-gray-400">Closing Date</span>
                  <p class="font-medium text-brand-navy dark:text-white">{{ formatDate(purchase.closingDate) }}</p>
                </div>
                <div>
                  <span class="text-gray-600 dark:text-gray-400">Days Remaining</span>
                  <p class="font-medium text-brand-navy dark:text-white">{{ purchase.daysToClosing }}</p>
                </div>
                <div>
                  <span class="text-gray-600 dark:text-gray-400">Est. Closing Costs</span>
                  <p class="font-medium text-brand-navy dark:text-white">{{ formatCurrency(purchase.estimatedClosingCosts) }}</p>
                </div>
              </div>
            </div>

            <!-- Timeline Steps -->
            <div class="p-6">
              <h4 class="font-semibold text-brand-navy dark:text-white mb-4">Purchase Milestones</h4>
              <div class="space-y-6">
                <div v-for="(milestone, index) in purchase.milestones" :key="milestone.id" class="relative">
                  <!-- Timeline Line -->
                  <div v-if="index < purchase.milestones.length - 1" class="absolute left-4 top-8 w-0.5 h-16 bg-gray-300 dark:bg-gray-600"></div>
                  
                  <div class="flex items-start space-x-4">
                    <!-- Status Icon -->
                    <div :class="getMilestoneIconClass(milestone.status)" class="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg v-if="milestone.status === 'completed'" class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                      </svg>
                      <svg v-else-if="milestone.status === 'in-progress'" class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                      <svg v-else class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                    </div>
                    
                    <!-- Milestone Content -->
                    <div class="flex-1">
                      <div class="flex items-center justify-between mb-2">
                        <h5 class="font-medium text-brand-navy dark:text-white">{{ milestone.title }}</h5>
                        <span v-if="milestone.dueDate" class="text-sm text-gray-500">Due: {{ formatDate(milestone.dueDate) }}</span>
                      </div>
                      
                      <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">{{ milestone.description }}</p>
                      
                      <!-- Milestone Tasks -->
                      <div v-if="milestone.tasks && milestone.tasks.length > 0" class="space-y-2 mb-3">
                        <div v-for="task in milestone.tasks" :key="task.id" class="flex items-center space-x-2 text-sm">
                          <input type="checkbox" :checked="task.completed" :disabled="milestone.status === 'completed'" class="rounded">
                          <span :class="task.completed ? 'line-through text-gray-500' : 'text-brand-navy dark:text-white'">{{ task.title }}</span>
                          <span v-if="task.assignedTo" class="text-xs text-gray-500">({{ task.assignedTo }})</span>
                        </div>
                      </div>
                      
                      <!-- Milestone Documents -->
                      <div v-if="milestone.documents && milestone.documents.length > 0" class="mb-3">
                        <h6 class="text-xs font-medium text-gray-600 dark:text-gray-400 mb-1">Required Documents:</h6>
                        <div class="flex flex-wrap gap-2">
                          <span v-for="doc in milestone.documents" :key="doc.id" :class="doc.uploaded ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'" class="text-xs px-2 py-1 rounded-full">
                            {{ doc.uploaded ? '✓' : '✗' }} {{ doc.name }}
                          </span>
                        </div>
                      </div>
                      
                      <!-- Important Notes -->
                      <div v-if="milestone.notes" class="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-3 mb-3">
                        <p class="text-sm text-yellow-800 dark:text-yellow-400">
                          <span class="font-medium">Note:</span> {{ milestone.notes }}
                        </p>
                      </div>
                      
                      <!-- Action Buttons -->
                      <div v-if="milestone.status === 'in-progress'" class="flex space-x-2">
                        <button class="px-3 py-1 bg-blue-500 text-white rounded text-sm font-medium hover:bg-blue-600 transition-colors">
                          Update Status
                        </button>
                        <button v-if="milestone.contactRequired" class="px-3 py-1 border border-gray-200 dark:border-gray-600 text-brand-navy dark:text-gray-300 rounded text-sm font-medium hover:border-gray-300 dark:hover:border-gray-500 transition-colors">
                          Contact {{ milestone.contactPerson }}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Key Contacts -->
            <div class="p-6 border-t border-gray-200 dark:border-gray-600">
              <h4 class="font-semibold text-brand-navy dark:text-white mb-4">Key Contacts</h4>
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div v-for="contact in purchase.keyContacts" :key="contact.id" class="border border-gray-200 dark:border-gray-600 rounded-lg p-3">
                  <h5 class="font-medium text-brand-navy dark:text-white">{{ contact.name }}</h5>
                  <p class="text-sm text-gray-600 dark:text-gray-400">{{ contact.role }}</p>
                  <p class="text-sm text-gray-500">{{ contact.phone }}</p>
                  <p class="text-sm text-gray-500">{{ contact.email }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Completed Purchases -->
          <div v-if="completedPurchases.length > 0" class="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 transition-colors duration-300">
            <div class="p-6 border-b border-gray-200 dark:border-gray-600">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white">Completed Purchases</h3>
            </div>
            <div class="divide-y divide-gray-200 dark:divide-gray-600">
              <div v-for="purchase in completedPurchases" :key="purchase.id" class="p-6">
                <div class="flex items-center justify-between">
                  <div>
                    <h4 class="font-semibold text-brand-navy dark:text-white">{{ purchase.propertyTitle }}</h4>
                    <p class="text-sm text-gray-600 dark:text-gray-400">{{ purchase.location }}</p>
                  </div>
                  <div class="text-right">
                    <p class="font-bold text-brand-navy dark:text-white">{{ formatCurrency(purchase.finalPrice) }}</p>
                    <p class="text-sm text-gray-500">Closed {{ formatDate(purchase.closingDate) }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Purchase Process Guide -->
          <div class="mt-8 bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
            <div class="flex items-start space-x-4">
              <div class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-blue-900 dark:text-blue-300 mb-2">Property Purchase Process Guide</h4>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h5 class="font-medium text-blue-800 dark:text-blue-400 mb-2">Typical Timeline:</h5>
                    <ul class="text-sm text-blue-800 dark:text-blue-400 space-y-1">
                      <li>• Days 1-7: Offer acceptance and initial contract</li>
                      <li>• Days 8-14: Property inspection and appraisal</li>
                      <li>• Days 15-21: Mortgage approval and document submission</li>
                      <li>• Days 22-30: Final walk-through and closing preparation</li>
                    </ul>
                  </div>
                  <div>
                    <h5 class="font-medium text-blue-800 dark:text-blue-400 mb-2">Important Reminders:</h5>
                    <ul class="text-sm text-blue-800 dark:text-blue-400 space-y-1">
                      <li>• Keep all communications documented</li>
                      <li>• Review all documents carefully before signing</li>
                      <li>• Stay in regular contact with your agent and lender</li>
                      <li>• Prepare funds for closing costs in advance</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Documents & Legal Tab -->
        <div v-if="activeTab === 'documents'" class="p-6">
          <div class="flex items-center justify-between mb-6">
            <div>
              <h2 class="text-2xl font-bold text-brand-navy dark:text-white">Documents & Legal</h2>
              <p class="text-gray-600 dark:text-gray-400">{{ pendingDocuments }} pending documents • {{ completedDocuments }} completed • {{ legalReviewsPending }} legal reviews pending</p>
            </div>
            <div class="flex items-center space-x-4">
              <button class="bg-purple-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-600 transition-colors">
                Find Lawyer
              </button>
              <button class="bg-brand-turqoise-light text-brand-navy px-6 py-3 rounded-lg font-semibold hover:bg-teal-300 transition-colors">
                Upload Document
              </button>
            </div>
          </div>

          <!-- Document Status Overview -->
          <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 transition-colors duration-300">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm font-medium text-gray-600 dark:text-gray-400">Pending Documents</p>
                  <p class="text-3xl font-bold text-orange-600 dark:text-orange-400">{{ pendingDocuments }}</p>
                  <p class="text-sm text-gray-500 mt-1">Action required</p>
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
                  <p class="text-sm font-medium text-gray-600 dark:text-gray-400">Under Review</p>
                  <p class="text-3xl font-bold text-blue-600 dark:text-blue-400">{{ documentsUnderReview }}</p>
                  <p class="text-sm text-gray-500 mt-1">Legal review in progress</p>
                </div>
                <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-xl flex items-center justify-center">
                  <svg class="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/>
                  </svg>
                </div>
              </div>
            </div>

            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 transition-colors duration-300">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm font-medium text-gray-600 dark:text-gray-400">Completed</p>
                  <p class="text-3xl font-bold text-green-600 dark:text-green-400">{{ completedDocuments }}</p>
                  <p class="text-sm text-gray-500 mt-1">Ready for closing</p>
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
                  <p class="text-sm font-medium text-gray-600 dark:text-gray-400">Legal Fees</p>
                  <p class="text-3xl font-bold text-brand-navy dark:text-white">{{ formatCurrency(totalLegalFees) }}</p>
                  <p class="text-sm text-purple-600 dark:text-purple-400 mt-1">Estimated total</p>
                </div>
                <div class="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-xl flex items-center justify-center">
                  <svg class="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <!-- Document Categories -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <!-- Purchase Documents -->
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 transition-colors duration-300">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Purchase Documents</h3>
              <div class="space-y-3">
                <div v-for="doc in purchaseDocuments" :key="doc.id" class="flex items-center justify-between p-3 border border-gray-200 dark:border-gray-600 rounded-lg">
                  <div class="flex items-center space-x-3">
                    <div :class="getDocumentIconClass(doc.status)" class="w-8 h-8 rounded-full flex items-center justify-center">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                    </div>
                    <div>
                      <h4 class="font-medium text-brand-navy dark:text-white">{{ doc.name }}</h4>
                      <p class="text-sm text-gray-600 dark:text-gray-400">{{ doc.description }}</p>
                    </div>
                  </div>
                  <div class="flex items-center space-x-2">
                    <span :class="getDocumentStatusClass(doc.status)" class="px-2 py-1 rounded-full text-xs font-semibold">
                      {{ doc.status }}
                    </span>
                    <button v-if="doc.status === 'completed'" class="text-blue-600 hover:text-blue-800 transition-colors">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                      </svg>
                    </button>
                    <button v-if="doc.status === 'pending'" class="text-orange-600 hover:text-orange-800 transition-colors">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <!-- Legal Documents -->
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 transition-colors duration-300">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Legal Documents</h3>
              <div class="space-y-3">
                <div v-for="doc in legalDocuments" :key="doc.id" class="flex items-center justify-between p-3 border border-gray-200 dark:border-gray-600 rounded-lg">
                  <div class="flex items-center space-x-3">
                    <div :class="getDocumentIconClass(doc.status)" class="w-8 h-8 rounded-full flex items-center justify-center">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                      </svg>
                    </div>
                    <div>
                      <h4 class="font-medium text-brand-navy dark:text-white">{{ doc.name }}</h4>
                      <p class="text-sm text-gray-600 dark:text-gray-400">{{ doc.description }}</p>
                      <p v-if="doc.reviewedBy" class="text-xs text-gray-500">Reviewed by: {{ doc.reviewedBy }}</p>
                    </div>
                  </div>
                  <div class="flex items-center space-x-2">
                    <span :class="getDocumentStatusClass(doc.status)" class="px-2 py-1 rounded-full text-xs font-semibold">
                      {{ doc.status }}
                    </span>
                    <button v-if="doc.status === 'completed'" class="text-blue-600 hover:text-blue-800 transition-colors">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Legal Team & Services -->
          <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 mb-8 transition-colors duration-300">
            <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Legal Team & Services</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <!-- Property Lawyer -->
              <div class="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
                <div class="flex items-center space-x-3 mb-3">
                  <div class="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center">
                    <svg class="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2h8z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-medium text-brand-navy dark:text-white">Property Lawyer</h4>
                    <p class="text-sm text-gray-600 dark:text-gray-400">{{ assignedLawyer ? assignedLawyer.name : 'Not Assigned' }}</p>
                  </div>
                </div>
                <div v-if="assignedLawyer" class="space-y-2 text-sm">
                  <p class="text-gray-600 dark:text-gray-400">{{ assignedLawyer.firm }}</p>
                  <p class="text-gray-600 dark:text-gray-400">{{ assignedLawyer.phone }}</p>
                  <p class="text-gray-600 dark:text-gray-400">{{ assignedLawyer.email }}</p>
                  <div class="flex space-x-2 mt-3">
                    <button class="px-3 py-1 bg-purple-500 text-white rounded text-sm hover:bg-purple-600 transition-colors">
                      Contact
                    </button>
                    <button class="px-3 py-1 border border-gray-200 dark:border-gray-600 text-brand-navy dark:text-gray-300 rounded text-sm hover:border-gray-300 transition-colors">
                      Schedule
                    </button>
                  </div>
                </div>
                <div v-else>
                  <button class="w-full px-3 py-2 bg-brand-turqoise-light text-brand-navy rounded font-medium hover:bg-teal-300 transition-colors">
                    Find Property Lawyer
                  </button>
                </div>
              </div>

              <!-- Legal Services -->
              <div class="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
                <h4 class="font-medium text-brand-navy dark:text-white mb-3">Legal Services</h4>
                <div class="space-y-2">
                  <div v-for="service in legalServices" :key="service.id" class="flex items-center justify-between">
                    <span class="text-sm text-brand-navy dark:text-white">{{ service.name }}</span>
                    <span :class="service.completed ? 'text-green-600' : 'text-gray-500'" class="text-xs">
                      {{ service.completed ? '✓ Done' : 'Pending' }}
                    </span>
                  </div>
                </div>
              </div>

              <!-- Legal Costs -->
              <div class="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
                <h4 class="font-medium text-brand-navy dark:text-white mb-3">Legal Costs Breakdown</h4>
                <div class="space-y-2 text-sm">
                  <div class="flex justify-between">
                    <span class="text-gray-600 dark:text-gray-400">Legal Review</span>
                    <span class="text-brand-navy dark:text-white">{{ formatCurrency(legalCosts.review) }}</span>
                  </div>
                  <div class="flex justify-between">
                    <span class="text-gray-600 dark:text-gray-400">Contract Preparation</span>
                    <span class="text-brand-navy dark:text-white">{{ formatCurrency(legalCosts.contract) }}</span>
                  </div>
                  <div class="flex justify-between">
                    <span class="text-gray-600 dark:text-gray-400">Title Search</span>
                    <span class="text-brand-navy dark:text-white">{{ formatCurrency(legalCosts.titleSearch) }}</span>
                  </div>
                  <div class="flex justify-between">
                    <span class="text-gray-600 dark:text-gray-400">Registration</span>
                    <span class="text-brand-navy dark:text-white">{{ formatCurrency(legalCosts.registration) }}</span>
                  </div>
                  <div class="flex justify-between border-t border-gray-200 dark:border-gray-600 pt-2 font-medium">
                    <span class="text-brand-navy dark:text-white">Total</span>
                    <span class="text-brand-navy dark:text-white">{{ formatCurrency(totalLegalFees) }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Document Checklist -->
          <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 mb-8 transition-colors duration-300">
            <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Document Checklist</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 class="font-medium text-brand-navy dark:text-white mb-3">Required for Purchase</h4>
                <div class="space-y-2">
                  <div v-for="item in purchaseChecklist" :key="item.id" class="flex items-center space-x-2">
                    <input type="checkbox" :checked="item.completed" class="rounded">
                    <span :class="item.completed ? 'line-through text-gray-500' : 'text-brand-navy dark:text-white'" class="text-sm">{{ item.title }}</span>
                    <span v-if="item.urgent" class="text-xs bg-red-100 text-red-800 px-1 rounded">Urgent</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 class="font-medium text-brand-navy dark:text-white mb-3">Financial Documents</h4>
                <div class="space-y-2">
                  <div v-for="item in financialChecklist" :key="item.id" class="flex items-center space-x-2">
                    <input type="checkbox" :checked="item.completed" class="rounded">
                    <span :class="item.completed ? 'line-through text-gray-500' : 'text-brand-navy dark:text-white'" class="text-sm">{{ item.title }}</span>
                    <span v-if="item.dueDate" class="text-xs text-gray-500">Due: {{ formatDate(item.dueDate) }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Legal Process Tips -->
          <div class="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-6 border border-purple-200 dark:border-purple-800">
            <div class="flex items-start space-x-4">
              <div class="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-purple-900 dark:text-purple-300 mb-2">Legal Process Tips</h4>
                <ul class="text-sm text-purple-800 dark:text-purple-400 space-y-1">
                  <li>• Review all documents carefully before signing</li>
                  <li>• Ask your lawyer to explain any unclear terms or conditions</li>
                  <li>• Keep copies of all signed documents in a secure location</li>
                  <li>• Ensure title search is completed before closing</li>
                  <li>• Verify all property details match the contract</li>
                  <li>• Budget for legal fees and government registration costs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <!-- Investment Analysis Tab -->
        <div v-if="activeTab === 'investment'" class="p-6">
          <div class="flex items-center justify-between mb-6">
            <div>
              <h2 class="text-2xl font-bold text-brand-navy dark:text-white">Investment Analysis</h2>
              <p class="text-gray-600 dark:text-gray-400">Analyze investment potential and compare properties</p>
            </div>
            <div class="flex items-center space-x-4">
              <button class="bg-purple-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-600 transition-colors">
                Generate Report
              </button>
              <button class="bg-brand-turqoise-light text-brand-navy px-6 py-3 rounded-lg font-semibold hover:bg-teal-300 transition-colors">
                Compare Properties
              </button>
            </div>
          </div>

          <!-- Investment Calculator -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <!-- ROI Calculator -->
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 transition-colors duration-300">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">ROI Calculator</h3>
              <div class="space-y-4">
                <div>
                  <label class="block text-sm font-medium text-brand-navy dark:text-gray-300 mb-2">Purchase Price</label>
                  <input type="number" v-model="investmentInputs.purchasePrice" class="w-full px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-turqoise-light bg-white dark:bg-gray-700 text-brand-navy dark:text-white" placeholder="Property price">
                </div>
                
                <div class="grid grid-cols-2 gap-4">
                  <div>
                    <label class="block text-sm font-medium text-brand-navy dark:text-gray-300 mb-2">Down Payment (%)</label>
                    <input type="number" v-model="investmentInputs.downPaymentPercent" class="w-full px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-turqoise-light bg-white dark:bg-gray-700 text-brand-navy dark:text-white" placeholder="20">
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-brand-navy dark:text-gray-300 mb-2">Closing Costs (%)</label>
                    <input type="number" step="0.1" v-model="investmentInputs.closingCosts" class="w-full px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-turqoise-light bg-white dark:bg-gray-700 text-brand-navy dark:text-white" placeholder="3.5">
                  </div>
                </div>
                
                <div>
                  <label class="block text-sm font-medium text-brand-navy dark:text-gray-300 mb-2">Monthly Rental Income</label>
                  <input type="number" v-model="investmentInputs.monthlyRent" class="w-full px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-turqoise-light bg-white dark:bg-gray-700 text-brand-navy dark:text-white" placeholder="Estimated rental">
                </div>
                
                <div class="grid grid-cols-2 gap-4">
                  <div>
                    <label class="block text-sm font-medium text-brand-navy dark:text-gray-300 mb-2">Monthly Expenses</label>
                    <input type="number" v-model="investmentInputs.monthlyExpenses" class="w-full px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-turqoise-light bg-white dark:bg-gray-700 text-brand-navy dark:text-white" placeholder="Management, maintenance">
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-brand-navy dark:text-gray-300 mb-2">Vacancy Rate (%)</label>
                    <input type="number" step="0.1" v-model="investmentInputs.vacancyRate" class="w-full px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-turqoise-light bg-white dark:bg-gray-700 text-brand-navy dark:text-white" placeholder="5">
                  </div>
                </div>
                
                <div>
                  <label class="block text-sm font-medium text-brand-navy dark:text-gray-300 mb-2">Expected Annual Appreciation (%)</label>
                  <input type="number" step="0.1" v-model="investmentInputs.appreciationRate" class="w-full px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-turqoise-light bg-white dark:bg-gray-700 text-brand-navy dark:text-white" placeholder="5">
                </div>
                
                <button @click="calculateInvestmentROI" class="w-full bg-brand-turqoise-light text-brand-navy py-3 px-4 rounded-lg font-semibold hover:bg-teal-300 transition-colors">
                  Calculate Investment Returns
                </button>
              </div>
            </div>

            <!-- Investment Results -->
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 transition-colors duration-300">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Investment Analysis Results</h3>
              
              <div v-if="investmentResults" class="space-y-4">
                <!-- Key Metrics -->
                <div class="grid grid-cols-2 gap-4">
                  <div class="bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
                    <p class="text-sm text-gray-600 dark:text-gray-400">Cash-on-Cash ROI</p>
                    <p class="text-xl font-bold text-brand-navy dark:text-white">{{ investmentResults.cashOnCashROI }}%</p>
                  </div>
                  <div class="bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
                    <p class="text-sm text-gray-600 dark:text-gray-400">Cap Rate</p>
                    <p class="text-xl font-bold text-brand-navy dark:text-white">{{ investmentResults.capRate }}%</p>
                  </div>
                  <div class="bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
                    <p class="text-sm text-gray-600 dark:text-gray-400">Rental Yield</p>
                    <p class="text-xl font-bold text-brand-navy dark:text-white">{{ investmentResults.rentalYield }}%</p>
                  </div>
                  <div class="bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
                    <p class="text-sm text-gray-600 dark:text-gray-400">Break-even Ratio</p>
                    <p class="text-xl font-bold text-brand-navy dark:text-white">{{ investmentResults.breakEvenRatio }}%</p>
                  </div>
                </div>
                
                <!-- Cash Flow Analysis -->
                <div class="border-t border-gray-200 dark:border-gray-600 pt-4">
                  <h4 class="font-medium text-brand-navy dark:text-white mb-3">Monthly Cash Flow</h4>
                  <div class="space-y-2 text-sm">
                    <div class="flex justify-between">
                      <span class="text-gray-600 dark:text-gray-400">Rental Income</span>
                      <span class="text-green-600 dark:text-green-400">+{{ formatCurrency(investmentResults.monthlyIncome) }}</span>
                    </div>
                    <div class="flex justify-between">
                      <span class="text-gray-600 dark:text-gray-400">Mortgage Payment</span>
                      <span class="text-red-600 dark:text-red-400">-{{ formatCurrency(investmentResults.mortgagePayment) }}</span>
                    </div>
                    <div class="flex justify-between">
                      <span class="text-gray-600 dark:text-gray-400">Expenses</span>
                      <span class="text-red-600 dark:text-red-400">-{{ formatCurrency(investmentResults.monthlyExpenses) }}</span>
                    </div>
                    <div class="flex justify-between">
                      <span class="text-gray-600 dark:text-gray-400">Vacancy Allowance</span>
                      <span class="text-red-600 dark:text-red-400">-{{ formatCurrency(investmentResults.vacancyAllowance) }}</span>
                    </div>
                    <div class="flex justify-between border-t border-gray-200 dark:border-gray-600 pt-2 font-medium">
                      <span class="text-brand-navy dark:text-white">Net Cash Flow</span>
                      <span :class="investmentResults.netCashFlow >= 0 ? 'text-green-600' : 'text-red-600'">
                        {{ investmentResults.netCashFlow >= 0 ? '+' : '' }}{{ formatCurrency(investmentResults.netCashFlow) }}
                      </span>
                    </div>
                  </div>
                </div>
                
                <!-- Investment Score -->
                <div class="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4">
                  <div class="flex items-center justify-between mb-2">
                    <h4 class="font-medium text-purple-900 dark:text-purple-300">Investment Score</h4>
                    <span class="text-2xl font-bold text-purple-900 dark:text-purple-300">{{ investmentResults.investmentScore }}/10</span>
                  </div>
                  <p class="text-sm text-purple-800 dark:text-purple-400">{{ getInvestmentScoreDescription(investmentResults.investmentScore) }}</p>
                </div>
              </div>
              
              <div v-else class="text-center py-8 text-gray-500">
                <svg class="w-12 h-12 mx-auto mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                </svg>
                <p>Enter property details to calculate investment returns</p>
              </div>
            </div>
          </div>

          <!-- Market Analysis -->
          <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 mb-8 transition-colors duration-300">
            <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Market Analysis</h3>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              <!-- Area Performance -->
              <div>
                <h4 class="font-medium text-brand-navy dark:text-white mb-3">Area Performance</h4>
                <div class="space-y-3">
                  <div v-for="area in marketAreas" :key="area.name" class="border border-gray-200 dark:border-gray-600 rounded-lg p-3">
                    <div class="flex items-center justify-between mb-2">
                      <h5 class="font-medium text-brand-navy dark:text-white">{{ area.name }}</h5>
                      <span :class="area.trend > 0 ? 'text-green-600' : 'text-red-600'" class="text-sm font-semibold">
                        {{ area.trend > 0 ? '+' : '' }}{{ area.trend }}%
                      </span>
                    </div>
                    <div class="grid grid-cols-2 gap-2 text-xs">
                      <div>
                        <span class="text-gray-600 dark:text-gray-400">Avg Price/m²</span>
                        <p class="font-medium text-brand-navy dark:text-white">{{ formatCurrency(area.avgPricePerSqm) }}</p>
                      </div>
                      <div>
                        <span class="text-gray-600 dark:text-gray-400">Rental Yield</span>
                        <p class="font-medium text-brand-navy dark:text-white">{{ area.rentalYield }}%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- Investment Hotspots -->
              <div>
                <h4 class="font-medium text-brand-navy dark:text-white mb-3">Investment Hotspots</h4>
                <div class="space-y-3">
                  <div v-for="hotspot in investmentHotspots" :key="hotspot.id" class="border border-gray-200 dark:border-gray-600 rounded-lg p-3">
                    <h5 class="font-medium text-brand-navy dark:text-white">{{ hotspot.area }}</h5>
                    <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">{{ hotspot.reason }}</p>
                    <div class="flex items-center justify-between text-xs">
                      <span class="bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-400 px-2 py-1 rounded-full">
                        {{ hotspot.potentialROI }}% potential ROI
                      </span>
                      <span class="text-gray-500">{{ hotspot.riskLevel }} risk</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- Market Trends -->
              <div>
                <h4 class="font-medium text-brand-navy dark:text-white mb-3">Market Trends</h4>
                <div class="space-y-3">
                  <div v-for="trend in marketTrends" :key="trend.id" class="border border-gray-200 dark:border-gray-600 rounded-lg p-3">
                    <div class="flex items-center space-x-2 mb-2">
                      <div :class="trend.impact === 'positive' ? 'bg-green-500' : trend.impact === 'negative' ? 'bg-red-500' : 'bg-yellow-500'" class="w-3 h-3 rounded-full"></div>
                      <h5 class="font-medium text-brand-navy dark:text-white">{{ trend.title }}</h5>
                    </div>
                    <p class="text-sm text-gray-600 dark:text-gray-400">{{ trend.description }}</p>
                    <p class="text-xs text-gray-500 mt-1">Impact: {{ trend.impact }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Property Comparison -->
          <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 mb-8 transition-colors duration-300">
            <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Property Comparison</h3>
            <div class="overflow-x-auto">
              <table class="w-full">
                <thead>
                  <tr class="border-b border-gray-200 dark:border-gray-600">
                    <th class="text-left py-3 px-4 font-medium text-brand-navy dark:text-white">Property</th>
                    <th class="text-left py-3 px-4 font-medium text-brand-navy dark:text-white">Price</th>
                    <th class="text-left py-3 px-4 font-medium text-brand-navy dark:text-white">Rental Yield</th>
                    <th class="text-left py-3 px-4 font-medium text-brand-navy dark:text-white">Cap Rate</th>
                    <th class="text-left py-3 px-4 font-medium text-brand-navy dark:text-white">Cash Flow</th>
                    <th class="text-left py-3 px-4 font-medium text-brand-navy dark:text-white">Investment Score</th>
                    <th class="text-left py-3 px-4 font-medium text-brand-navy dark:text-white">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="property in comparisonProperties" :key="property.id" class="border-b border-gray-100 dark:border-gray-700">
                    <td class="py-3 px-4">
                      <div>
                        <h4 class="font-medium text-brand-navy dark:text-white">{{ property.title }}</h4>
                        <p class="text-sm text-gray-600 dark:text-gray-400">{{ property.location }}</p>
                      </div>
                    </td>
                    <td class="py-3 px-4 text-brand-navy dark:text-white">{{ formatCurrency(property.price) }}</td>
                    <td class="py-3 px-4 text-brand-navy dark:text-white">{{ property.rentalYield }}%</td>
                    <td class="py-3 px-4 text-brand-navy dark:text-white">{{ property.capRate }}%</td>
                    <td class="py-3 px-4">
                      <span :class="property.monthlyCashFlow >= 0 ? 'text-green-600' : 'text-red-600'">
                        {{ property.monthlyCashFlow >= 0 ? '+' : '' }}{{ formatCurrency(property.monthlyCashFlow) }}
                      </span>
                    </td>
                    <td class="py-3 px-4">
                      <span class="font-medium text-brand-navy dark:text-white">{{ property.investmentScore }}/10</span>
                    </td>
                    <td class="py-3 px-4">
                      <button class="bg-brand-turqoise-light text-brand-navy px-3 py-1 rounded text-sm font-medium hover:bg-teal-300 transition-colors">
                        View Details
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <!-- Investment Tips -->
          <div class="bg-green-50 dark:bg-green-900/20 rounded-xl p-6 border border-green-200 dark:border-green-800">
            <div class="flex items-start space-x-4">
              <div class="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-green-900 dark:text-green-300 mb-2">Property Investment Tips</h4>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h5 class="font-medium text-green-800 dark:text-green-400 mb-2">Key Metrics to Consider:</h5>
                    <ul class="text-sm text-green-800 dark:text-green-400 space-y-1">
                      <li>• Rental yield above 4% is generally good</li>
                      <li>• Cash-on-cash ROI should exceed savings rates</li>
                      <li>• Cap rates vary by area - compare locally</li>
                      <li>• Consider vacancy rates in your calculations</li>
                    </ul>
                  </div>
                  <div>
                    <h5 class="font-medium text-green-800 dark:text-green-400 mb-2">Investment Strategy:</h5>
                    <ul class="text-sm text-green-800 dark:text-green-400 space-y-1">
                      <li>• Diversify across different areas and property types</li>
                      <li>• Factor in maintenance and management costs</li>
                      <li>• Research local market trends and development plans</li>
                      <li>• Consider tax implications and depreciation benefits</li>
                    </ul>
                  </div>
                </div>
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
                    <option value="sellers">Sellers</option>
                    <option value="lawyers">Lawyers</option>
                    <option value="lenders">Lenders</option>
                  </select>
                </div>
              </div>
              
              <div class="overflow-y-auto h-80">
                <div v-for="conversation in filteredBuyerConversations" :key="conversation.id" :class="['p-4 border-b border-gray-100 dark:border-gray-700 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors', selectedConversation?.id === conversation.id ? 'bg-brand-turqoise-light/10 dark:bg-brand-turqoise-light/20' : '']" @click="selectConversation(conversation)">
                  <div class="flex items-start space-x-3">
                    <div class="relative">
                      <div class="w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-800 dark:to-purple-600 rounded-full flex items-center justify-center">
                        <span class="font-semibold text-purple-600 dark:text-purple-300">{{ conversation.contact.initials }}</span>
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
                      <p class="text-sm text-gray-600 dark:text-gray-400 mb-1">{{ conversation.contact.role }} • {{ conversation.contact.company }}</p>
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
                      <div class="w-10 h-10 bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-800 dark:to-purple-600 rounded-full flex items-center justify-center">
                        <span class="font-semibold text-purple-600 dark:text-purple-300">{{ selectedConversation.contact.initials }}</span>
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
              <button v-for="template in buyerMessageTemplates" :key="template.id" class="text-left p-4 border border-gray-200 dark:border-gray-600 rounded-lg hover:border-brand-turqoise-light dark:hover:border-brand-turqoise-light transition-colors" @click="useTemplate(template)">
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
              <p class="text-gray-600 dark:text-gray-400">Manage your buyer profile and investment preferences</p>
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
                <div class="w-24 h-24 bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-800 dark:to-purple-600 rounded-full flex items-center justify-center">
                  <span class="text-2xl font-bold text-purple-600 dark:text-purple-300">SM</span>
                </div>
                <button class="absolute bottom-0 right-0 w-8 h-8 bg-brand-turqoise-light text-brand-navy rounded-full flex items-center justify-center hover:bg-teal-300 transition-colors">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                </button>
              </div>
              
              <div class="flex-1">
                <h3 class="text-xl font-bold text-brand-navy dark:text-white mb-2">Sarah Mitchell</h3>
                <p class="text-gray-600 dark:text-gray-400 mb-3">Property Buyer • Member since January 2024</p>
                
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
                    <span class="text-gray-500">Financial Verified</span>
                    <p class="font-medium text-green-600 dark:text-green-400">✓ Pre-Approved</p>
                  </div>
                  <div>
                    <span class="text-gray-500">Investment Grade</span>
                    <p class="font-medium text-purple-600 dark:text-purple-400">Serious Buyer</p>
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
                    <input type="text" v-model="buyerProfile.firstName" class="w-full px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-turqoise-light bg-white dark:bg-gray-700 text-brand-navy dark:text-white">
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-brand-navy dark:text-gray-300 mb-2">Last Name</label>
                    <input type="text" v-model="buyerProfile.lastName" class="w-full px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-turqoise-light bg-white dark:bg-gray-700 text-brand-navy dark:text-white">
                  </div>
                </div>
                
                <div>
                  <label class="block text-sm font-medium text-brand-navy dark:text-gray-300 mb-2">Email Address</label>
                  <input type="email" v-model="buyerProfile.email" class="w-full px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-turqoise-light bg-white dark:bg-gray-700 text-brand-navy dark:text-white">
                </div>
                
                <div>
                  <label class="block text-sm font-medium text-brand-navy dark:text-gray-300 mb-2">Phone Number</label>
                  <input type="tel" v-model="buyerProfile.phone" class="w-full px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-turqoise-light bg-white dark:bg-gray-700 text-brand-navy dark:text-white">
                </div>
                
                <div class="grid grid-cols-2 gap-4">
                  <div>
                    <label class="block text-sm font-medium text-brand-navy dark:text-gray-300 mb-2">Date of Birth</label>
                    <input type="date" v-model="buyerProfile.dateOfBirth" class="w-full px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-turqoise-light bg-white dark:bg-gray-700 text-brand-navy dark:text-white">
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-brand-navy dark:text-gray-300 mb-2">Nationality</label>
                    <select v-model="buyerProfile.nationality" class="w-full px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-turqoise-light bg-white dark:bg-gray-700 text-brand-navy dark:text-white">
                      <option value="">Select Nationality</option>
                      <option value="thai">Thai</option>
                      <option value="american">American</option>
                      <option value="british">British</option>
                      <option value="chinese">Chinese</option>
                      <option value="japanese">Japanese</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <!-- Investment Preferences -->
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 transition-colors duration-300">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Investment Preferences</h3>
              <div class="space-y-4">
                <div>
                  <label class="block text-sm font-medium text-brand-navy dark:text-gray-300 mb-2">Budget Range</label>
                  <div class="grid grid-cols-2 gap-4">
                    <input type="number" v-model="investmentPreferences.budgetMin" placeholder="Min Budget" class="w-full px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-turqoise-light bg-white dark:bg-gray-700 text-brand-navy dark:text-white">
                    <input type="number" v-model="investmentPreferences.budgetMax" placeholder="Max Budget" class="w-full px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-turqoise-light bg-white dark:bg-gray-700 text-brand-navy dark:text-white">
                  </div>
                </div>
                
                <div>
                  <label class="block text-sm font-medium text-brand-navy dark:text-gray-300 mb-2">Investment Purpose</label>
                  <select v-model="investmentPreferences.purpose" class="w-full px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-turqoise-light bg-white dark:bg-gray-700 text-brand-navy dark:text-white">
                    <option value="">Select Purpose</option>
                    <option value="own-use">Primary Residence</option>
                    <option value="investment">Investment Property</option>
                    <option value="vacation">Vacation Home</option>
                    <option value="mixed">Mixed Use</option>
                  </select>
                </div>
                
                <div>
                  <label class="block text-sm font-medium text-brand-navy dark:text-gray-300 mb-2">Preferred Areas</label>
                  <div class="grid grid-cols-2 gap-2">
                    <label v-for="area in availableAreas" :key="area" class="flex items-center">
                      <input type="checkbox" :value="area" v-model="investmentPreferences.preferredAreas" class="mr-2">
                      <span class="text-sm text-brand-navy dark:text-white">{{ area }}</span>
                    </label>
                  </div>
                </div>
                
                <div>
                  <label class="block text-sm font-medium text-brand-navy dark:text-gray-300 mb-2">Property Types</label>
                  <div class="grid grid-cols-2 gap-2">
                    <label v-for="type in propertyTypes" :key="type" class="flex items-center">
                      <input type="checkbox" :value="type" v-model="investmentPreferences.propertyTypes" class="mr-2">
                      <span class="text-sm text-brand-navy dark:text-white">{{ type }}</span>
                    </label>
                  </div>
                </div>
                
                <div>
                  <label class="block text-sm font-medium text-brand-navy dark:text-gray-300 mb-2">Risk Tolerance</label>
                  <select v-model="investmentPreferences.riskTolerance" class="w-full px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-turqoise-light bg-white dark:bg-gray-700 text-brand-navy dark:text-white">
                    <option value="conservative">Conservative</option>
                    <option value="moderate">Moderate</option>
                    <option value="aggressive">Aggressive</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <!-- Financial Information -->
          <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 mb-8 transition-colors duration-300">
            <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Financial Information</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="space-y-4">
                <div>
                  <label class="block text-sm font-medium text-brand-navy dark:text-gray-300 mb-2">Annual Income</label>
                  <select v-model="financialInfo.annualIncome" class="w-full px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-turqoise-light bg-white dark:bg-gray-700 text-brand-navy dark:text-white">
                    <option value="">Select Range</option>
                    <option value="0-1000000">฿0 - ฿1M</option>
                    <option value="1000000-2000000">฿1M - ฿2M</option>
                    <option value="2000000-5000000">฿2M - ฿5M</option>
                    <option value="5000000-10000000">฿5M - ฿10M</option>
                    <option value="10000000+">฿10M+</option>
                  </select>
                </div>
                
                <div>
                  <label class="block text-sm font-medium text-brand-navy dark:text-gray-300 mb-2">Employment Status</label>
                  <select v-model="financialInfo.employmentStatus" class="w-full px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-turqoise-light bg-white dark:bg-gray-700 text-brand-navy dark:text-white">
                    <option value="">Select Status</option>
                    <option value="employed">Employed</option>
                    <option value="self-employed">Self-Employed</option>
                    <option value="business-owner">Business Owner</option>
                    <option value="investor">Investor</option>
                    <option value="retired">Retired</option>
                  </select>
                </div>
                
                <div>
                  <label class="block text-sm font-medium text-brand-navy dark:text-gray-300 mb-2">Available Cash</label>
                  <select v-model="financialInfo.availableCash" class="w-full px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-turqoise-light bg-white dark:bg-gray-700 text-brand-navy dark:text-white">
                    <option value="">Select Range</option>
                    <option value="0-2000000">฿0 - ฿2M</option>
                    <option value="2000000-5000000">฿2M - ฿5M</option>
                    <option value="5000000-10000000">฿5M - ฿10M</option>
                    <option value="10000000-20000000">฿10M - ฿20M</option>
                    <option value="20000000+">฿20M+</option>
                  </select>
                </div>
              </div>
              
              <div class="space-y-4">
                <div>
                  <label class="block text-sm font-medium text-brand-navy dark:text-gray-300 mb-2">Current Debts</label>
                  <select v-model="financialInfo.currentDebts" class="w-full px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-turqoise-light bg-white dark:bg-gray-700 text-brand-navy dark:text-white">
                    <option value="">Select Range</option>
                    <option value="none">No Debts</option>
                    <option value="0-500000">฿0 - ฿500K</option>
                    <option value="500000-2000000">฿500K - ฿2M</option>
                    <option value="2000000-5000000">฿2M - ฿5M</option>
                    <option value="5000000+">฿5M+</option>
                  </select>
                </div>
                
                <div>
                  <label class="block text-sm font-medium text-brand-navy dark:text-gray-300 mb-2">Credit Score</label>
                  <select v-model="financialInfo.creditScore" class="w-full px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-turqoise-light bg-white dark:bg-gray-700 text-brand-navy dark:text-white">
                    <option value="">Select Range</option>
                    <option value="excellent">Excellent (750+)</option>
                    <option value="good">Good (650-749)</option>
                    <option value="fair">Fair (550-649)</option>
                    <option value="poor">Poor (<550)</option>
                  </select>
                </div>
                
                <div>
                  <label class="block text-sm font-medium text-brand-navy dark:text-gray-300 mb-2">Investment Experience</label>
                  <select v-model="financialInfo.investmentExperience" class="w-full px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-turqoise-light bg-white dark:bg-gray-700 text-brand-navy dark:text-white">
                    <option value="">Select Experience</option>
                    <option value="first-time">First-Time Buyer</option>
                    <option value="some">Some Experience (1-3 properties)</option>
                    <option value="experienced">Experienced (4+ properties)</option>
                    <option value="professional">Professional Investor</option>
                  </select>
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
                    <span class="text-sm text-brand-navy dark:text-white">Price drop alerts</span>
                    <input type="checkbox" v-model="notificationPreferences.email.priceDrops" class="toggle">
                  </label>
                  <label class="flex items-center justify-between">
                    <span class="text-sm text-brand-navy dark:text-white">Market reports</span>
                    <input type="checkbox" v-model="notificationPreferences.email.marketReports" class="toggle">
                  </label>
                  <label class="flex items-center justify-between">
                    <span class="text-sm text-brand-navy dark:text-white">Viewing confirmations</span>
                    <input type="checkbox" v-model="notificationPreferences.email.viewingConfirmations" class="toggle">
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
                    <span class="text-sm text-brand-navy dark:text-white">Offer status updates</span>
                    <input type="checkbox" v-model="notificationPreferences.sms.offerUpdates" class="toggle">
                  </label>
                  <label class="flex items-center justify-between">
                    <span class="text-sm text-brand-navy dark:text-white">Document reminders</span>
                    <input type="checkbox" v-model="notificationPreferences.sms.documentReminders" class="toggle">
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
              <span>Verify Income</span>
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
  title: 'Buyer Dashboard - ThaiKeys',
  meta: [
    {
      name: 'description',
      content: 'Comprehensive buyer dashboard for property search, investment analysis, purchase management, and mortgage tracking on ThaiKeys platform.'
    }
  ]
})

// Reactive data
const searchQuery = ref('')
const activeTab = ref('overview')
const unreadNotifications = ref(5)

// Buyer status
const hasActiveOffers = ref(true)
const mortgagePreApproved = ref(true)
const profileComplete = ref(false)

// Dashboard metrics
const savedProperties = ref(18)
const newMatchesToday = ref(4)
const activeOffers = ref(2)
const totalOffersMade = ref(8)
const preApprovalAmount = ref(25000000)
const mortgageRate = ref(4.25)
const budgetRemaining = ref(20000000)
const propertiesInBudget = ref(245)
const savedSearches = ref(7)
const acceptanceRate = ref(62)

// Purchase timeline
const activePurchases = ref(1)
const averageTimeToClose = ref(45)

// Viewing data - now properly used in template
const upcomingViewings = ref(4)
const nextViewingDate = ref('Tomorrow 2PM')
const completedViewings = ref(15)
const viewingToOfferRate = ref(53)
const scheduledInspections = ref(2)
const pendingInspectionReports = ref(1)
const virtualToursWatched = ref(8)

// Offer data
const pendingOffers = ref(2)
const negotiatingOffers = ref(1)
const acceptedOffers = ref(1)
const rejectedOffers = ref(3)
const expiredOffers = ref(1)

// Financial data
const estimatedMonthlyPayment = ref(95000)
const downPaymentAmount = ref(5000000)
const downPaymentPercent = ref(20)
const debtToIncomeRatio = ref(28)
const dtiStatus = ref('Excellent')
const preApprovalDate = ref('2024-10-15')
const preApprovalExpirationDate = ref('2025-01-15')
const loanProgram = ref('Fixed Rate 30-Year')
const maxLTVRatio = ref(80)

// Documents
const pendingDocuments = ref(6)
const documentsUnderReview = ref(3)
const completedDocuments = ref(12)
const legalReviewsPending = ref(2)
const totalLegalFees = ref(180000)

// Investment data
const averageRentalYield = ref(5.2)
const averagePricePerSqm = ref(165000)
const averagePriceAppreciation = ref(7.3)
const averageInvestmentScore = ref(8.2)
const totalSavedValue = ref(145000000)

// User profiles
const buyerProfile = ref({
  firstName: 'Sarah',
  lastName: 'Mitchell',
  email: 'sarah.mitchell@email.com',
  phone: '+66 81 567 8901',
  dateOfBirth: '1985-08-22',
  nationality: 'american'
})

const investmentPreferences = ref({
  budgetMin: 15000000,
  budgetMax: 30000000,
  purpose: 'investment',
  preferredAreas: ['Sukhumvit', 'Thonglor', 'Ekkamai'],
  propertyTypes: ['Condo', 'Penthouse'],
  riskTolerance: 'moderate'
})

const financialInfo = ref({
  annualIncome: '5000000-10000000',
  employmentStatus: 'business-owner',
  availableCash: '10000000-20000000',
  currentDebts: '500000-2000000',
  creditScore: 'excellent',
  investmentExperience: 'experienced'
})

const notificationPreferences = ref({
  email: {
    propertyMatches: true,
    priceDrops: true,
    marketReports: true,
    viewingConfirmations: true
  },
  sms: {
    urgentUpdates: true,
    viewingReminders: true,
    offerUpdates: true,
    documentReminders: false
  }
})

// Available options
const availableAreas = ['Sukhumvit', 'Silom', 'Thonglor', 'Ekkamai', 'Phrom Phong', 'Asoke', 'Sathorn']
const propertyTypes = ['Condo', 'House', 'Townhouse', 'Villa', 'Penthouse']

// Search filters
const searchFilters = ref({
  location: '',
  propertyType: '',
  bedrooms: '',
  priceRange: '',
  investmentPurpose: '',
  minRentalYield: '',
  pricePerSqm: '',
  newDevelopment: false,
  swimmingPool: false,
  gym: false,
  security: false,
  parking: false,
  nearBTS: false,
  nearShopping: false,
  nearSchool: false,
  nearHospital: false,
  riverView: false
})

// Filter and view states - now properly used
const showAdvancedFilters = ref(false)
const viewMode = ref('grid')
const sortBy = ref('price-low')
const savedPropertiesSort = ref('newest')
const offerFilter = ref('all')
const viewingView = ref('list')
const messageFilter = ref('all')

// Calculator inputs
const calculatorInputs = ref({
  purchasePrice: 20000000,
  downPaymentPercent: 20,
  interestRate: 4.25,
  loanTerm: 30
})

const investmentInputs = ref({
  purchasePrice: 20000000,
  downPaymentPercent: 20,
  closingCosts: 3.5,
  monthlyRent: 50000,
  monthlyExpenses: 8000,
  vacancyRate: 5,
  appreciationRate: 5
})

// Results
const calculationResults = ref(null)
const investmentResults = ref(null)

// Property data
const displayedProperties = ref([
  {
    id: 1,
    title: 'Bangkok Heights Penthouse',
    location: 'Sukhumvit 24',
    price: 25000000,
    bedrooms: 3,
    bathrooms: 3,
    size: 120,
    pricePerSqm: 208333,
    rentalYield: 4.8,
    estimatedRental: 100000,
    roiEstimate: 12.5,
    image: '/assets/placeholder/placeholder.webp',
    isFavorite: true,
    isNewListing: true,
    investmentGrade: true
  },
  {
    id: 2,
    title: 'Thonglor Luxury Condo',
    location: 'Thonglor 15',
    price: 18000000,
    bedrooms: 2,
    bathrooms: 2,
    size: 85,
    pricePerSqm: 211765,
    rentalYield: 5.2,
    estimatedRental: 78000,
    roiEstimate: 14.2,
    image: '/assets/placeholder/placeholder.webp',
    isFavorite: false,
    isNewListing: false,
    investmentGrade: true
  }
])

// Saved properties data
const savedPropertiesList = ref([
  {
    id: 1,
    title: 'Bangkok Heights Penthouse',
    location: 'Sukhumvit 24',
    currentPrice: 25000000,
    savedDate: '2024-11-01',
    priceChange: 3.2,
    availability: 'Available',
    bedrooms: 3,
    bathrooms: 3,
    size: 120,
    pricePerSqm: 208333,
    rentalYield: 4.8,
    estimatedRental: 100000,
    roiEstimate: 12.5,
    investmentScore: 8.5,
    marketComparison: -5,
    areaGrowth: 8.3,
    demandLevel: 'High',
    lastAnalysisUpdate: '2024-11-12',
    image: '/assets/placeholder/placeholder.webp'
  },
  {
    id: 2,
    title: 'Thonglor Luxury Villa',
    location: 'Thonglor 10',
    currentPrice: 45000000,
    savedDate: '2024-10-28',
    priceChange: -1.5,
    availability: 'Under Contract',
    bedrooms: 4,
    bathrooms: 4,
    size: 280,
    pricePerSqm: 160714,
    rentalYield: 3.8,
    estimatedRental: 140000,
    roiEstimate: 10.2,
    investmentScore: 7.8,
    marketComparison: 2,
    areaGrowth: 6.5,
    demandLevel: 'Medium',
    lastAnalysisUpdate: '2024-11-10',
    image: '/assets/placeholder/placeholder.webp'
  }
])

// Offers data
const offersList = ref([
  {
    id: 1,
    propertyTitle: 'Sukhumvit Penthouse',
    propertyLocation: 'Sukhumvit 22',
    offerAmount: 18500000,
    askingPrice: 20000000,
    status: 'negotiating',
    submittedDate: '2024-11-10',
    responseDate: '2024-11-12',
    expirationDate: '2024-11-17',
    isUrgent: true,
    conditions: ['Inspection Contingency', 'Financing Contingency', 'Appraisal Contingency'],
    counterOffers: [
      { id: 1, from: 'Seller', amount: 19500000, date: '2024-11-12' },
      { id: 2, from: 'Buyer', amount: 19000000, date: '2024-11-13' }
    ],
    sellerNotes: 'Seller is motivated but wants to cover recent renovation costs.'
  },
  {
    id: 2,
    propertyTitle: 'Thonglor Garden Villa',
    propertyLocation: 'Thonglor 8',
    offerAmount: 32000000,
    askingPrice: 35000000,
    status: 'pending',
    submittedDate: '2024-11-13',
    responseDate: null,
    expirationDate: '2024-11-18',
    isUrgent: false,
    conditions: ['Inspection Contingency', 'Financing Contingency'],
    counterOffers: [],
    sellerNotes: null
  }
])

// Active purchases data
const activePurchasesList = ref([
  {
    id: 1,
    propertyTitle: 'Bangkok Heights Penthouse',
    location: 'Sukhumvit 24',
    offerAmount: 18500000,
    status: 'Under Contract',
    progress: 65,
    offerAcceptedDate: '2024-10-15',
    closingDate: '2024-12-15',
    daysToClosing: 28,
    estimatedClosingCosts: 555000,
    milestones: [
      {
        id: 1,
        title: 'Offer Accepted',
        description: 'Purchase agreement signed by all parties',
        status: 'completed',
        dueDate: '2024-10-15',
        tasks: [
          { id: 1, title: 'Sign purchase agreement', completed: true },
          { id: 2, title: 'Submit earnest money', completed: true }
        ],
        documents: [
          { id: 1, name: 'Purchase Agreement', uploaded: true },
          { id: 2, name: 'Earnest Money Receipt', uploaded: true }
        ]
      },
      {
        id: 2,
        title: 'Property Inspection',
        description: 'Professional inspection of property condition',
        status: 'completed',
        dueDate: '2024-10-25',
        tasks: [
          { id: 1, title: 'Schedule inspection', completed: true },
          { id: 2, title: 'Review inspection report', completed: true },
          { id: 3, title: 'Negotiate repairs', completed: true }
        ],
        documents: [
          { id: 1, name: 'Inspection Report', uploaded: true }
        ]
      },
      {
        id: 3,
        title: 'Mortgage Approval',
        description: 'Final mortgage approval and loan documentation',
        status: 'in-progress',
        dueDate: '2024-11-30',
        tasks: [
          { id: 1, title: 'Submit final documents', completed: true },
          { id: 2, title: 'Property appraisal', completed: true },
          { id: 3, title: 'Final underwriting', completed: false, assignedTo: 'Bangkok Bank' }
        ],
        documents: [
          { id: 1, name: 'Loan Application', uploaded: true },
          { id: 2, name: 'Appraisal Report', uploaded: true },
          { id: 3, name: 'Final Approval Letter', uploaded: false }
        ],
        contactRequired: true,
        contactPerson: 'Loan Officer'
      },
      {
        id: 4,
        title: 'Final Walk-through',
        description: 'Final inspection before closing',
        status: 'pending',
        dueDate: '2024-12-13',
        tasks: [
          { id: 1, title: 'Schedule walk-through', completed: false },
          { id: 2, title: 'Verify repairs completed', completed: false }
        ],
        documents: []
      },
      {
        id: 5,
        title: 'Closing',
        description: 'Final paperwork and property transfer',
        status: 'pending',
        dueDate: '2024-12-15',
        tasks: [
          { id: 1, title: 'Review closing documents', completed: false },
          { id: 2, title: 'Transfer funds', completed: false },
          { id: 3, title: 'Receive keys', completed: false }
        ],
        documents: [
          { id: 1, name: 'Deed', uploaded: false },
          { id: 2, name: 'Closing Statement', uploaded: false }
        ],
        notes: 'Closing scheduled for 10:00 AM at lawyer office'
      }
    ],
    keyContacts: [
      { id: 1, name: 'Jennifer Wong', role: 'Buying Agent', phone: '+66 81 234 5678', email: 'jennifer@agent.com' },
      { id: 2, name: 'David Chen', role: 'Loan Officer', phone: '+66 82 345 6789', email: 'david@bangkokbank.com' },
      { id: 3, name: 'Lisa Park', role: 'Property Lawyer', phone: '+66 83 456 7890', email: 'lisa@legal.com' },
      { id: 4, name: 'Mike Johnson', role: 'Property Inspector', phone: '+66 84 567 8901', email: 'mike@inspect.com' }
    ]
  }
])

const completedPurchases = ref([
  {
    id: 1,
    propertyTitle: 'Silom Office Condo',
    location: 'Silom 20',
    finalPrice: 8500000,
    closingDate: '2024-03-15'
  }
])

// Viewings data
const viewingsList = ref([
  {
    id: 1,
    propertyTitle: 'Bangkok Heights Penthouse',
    propertyLocation: 'Sukhumvit 24',
    viewingDate: 'Nov 18, 2024',
    viewingTime: '2:00 PM',
    duration: 45,
    type: 'In-Person',
    status: 'scheduled',
    bedrooms: 3,
    bathrooms: 3,
    size: 120,
    price: 25000000,
    agentName: 'Jennifer Wong',
    agentPhone: '+66 81 234 5678',
    agentEmail: 'jennifer@agent.com'
  },
  {
    id: 2,
    propertyTitle: 'Thonglor Villa',
    propertyLocation: 'Thonglor 8',
    viewingDate: 'Nov 15, 2024',
    viewingTime: '10:00 AM',
    duration: 60,
    type: 'Inspection',
    status: 'completed',
    bedrooms: 4,
    bathrooms: 4,
    size: 280,
    price: 45000000,
    agentName: 'Michael Chen',
    agentPhone: '+66 82 345 6789',
    agentEmail: 'michael@agent.com',
    inspectorName: 'Property Inspect Co.',
    inspectionType: 'Full Structural',
    estimatedCost: 25000,
    inspectionReport: true,
    checklist: [
      { item: 'Electrical systems', checked: true },
      { item: 'Plumbing', checked: true },
      { item: 'HVAC', checked: false },
      { item: 'Structural integrity', checked: true }
    ],
    personalNotes: 'Great property but HVAC needs updating. Good investment potential.'
  }
])

// Document data
const purchaseDocuments = ref([
  { id: 1, name: 'Purchase Agreement', description: 'Signed contract with seller', status: 'completed' },
  { id: 2, name: 'Loan Application', description: 'Mortgage application documents', status: 'completed' },
  { id: 3, name: 'Property Inspection Report', description: 'Professional property inspection', status: 'completed' },
  { id: 4, name: 'Appraisal Report', description: 'Bank-ordered property appraisal', status: 'under-review' },
  { id: 5, name: 'Title Search', description: 'Property title verification', status: 'pending' },
  { id: 6, name: 'Insurance Policy', description: 'Property insurance coverage', status: 'pending' }
])

const legalDocuments = ref([
  { id: 1, name: 'Title Deed Review', description: 'Legal review of property title', status: 'completed', reviewedBy: 'Lisa Park, Attorney' },
  { id: 2, name: 'Contract Review', description: 'Legal review of purchase contract', status: 'completed', reviewedBy: 'Lisa Park, Attorney' },
  { id: 3, name: 'Due Diligence Report', description: 'Legal due diligence on property', status: 'under-review', reviewedBy: 'Lisa Park, Attorney' },
  { id: 4, name: 'Closing Documents', description: 'Final legal documents for closing', status: 'pending' }
])

const assignedLawyer = ref({
  name: 'Lisa Park',
  firm: 'Bangkok Legal Associates',
  phone: '+66 83 456 7890',
  email: 'lisa@bangkoklegal.com'
})

const legalServices = ref([
  { id: 1, name: 'Contract Review', completed: true },
  { id: 2, name: 'Title Search', completed: true },
  { id: 3, name: 'Due Diligence', completed: false },
  { id: 4, name: 'Closing Preparation', completed: false }
])

const legalCosts = ref({
  review: 45000,
  contract: 35000,
  titleSearch: 25000,
  registration: 75000
})

// Required documents and checklists
const requiredDocuments = ref([
  { name: 'Income Statements', submitted: true },
  { name: 'Bank Statements', submitted: true },
  { name: 'Employment Letter', submitted: true },
  { name: 'Tax Returns', submitted: false },
  { name: 'Asset Documentation', submitted: false }
])

const purchaseChecklist = ref([
  { id: 1, title: 'Pre-approval letter obtained', completed: true },
  { id: 2, title: 'Property inspection completed', completed: true },
  { id: 3, title: 'Appraisal ordered', completed: true, urgent: false },
  { id: 4, title: 'Title search initiated', completed: false, urgent: true },
  { id: 5, title: 'Insurance quotes obtained', completed: false, urgent: false },
  { id: 6, title: 'Final walk-through scheduled', completed: false, urgent: false }
])

const financialChecklist = ref([
  { id: 1, title: 'Down payment funds verified', completed: true },
  { id: 2, title: 'Closing cost estimate reviewed', completed: true },
  { id: 3, title: 'Final loan approval received', completed: false, dueDate: '2024-11-30' },
  { id: 4, title: 'Homeowner insurance arranged', completed: false, dueDate: '2024-12-10' },
  { id: 5, title: 'Wire transfer instructions confirmed', completed: false, dueDate: '2024-12-13' }
])

// Lender options
const lenderOptions = ref([
  {
    id: 1,
    name: 'Bangkok Bank',
    logo: '/assets/placeholder/placeholder.webp',
    interestRate: 4.25,
    apr: 4.35,
    maxLTV: 80,
    processingFee: 50000,
    status: 'Pre-Approved'
  },
  {
    id: 2,
    name: 'Kasikorn Bank',
    logo: '/assets/placeholder/placeholder.webp',
    interestRate: 4.45,
    apr: 4.55,
    maxLTV: 85,
    processingFee: 45000,
    status: 'Available'
  },
  {
    id: 3,
    name: 'Siam Commercial Bank',
    logo: '/assets/placeholder/placeholder.webp',
    interestRate: 4.15,
    apr: 4.25,
    maxLTV: 75,
    processingFee: 55000,
    status: 'Available'
  }
])

// Market data
const marketAreas = ref([
  { name: 'Sukhumvit', avgPricePerSqm: 185000, rentalYield: 4.8, trend: 5.2 },
  { name: 'Thonglor', avgPricePerSqm: 220000, rentalYield: 4.2, trend: 3.8 },
  { name: 'Ekkamai', avgPricePerSqm: 165000, rentalYield: 5.1, trend: 6.1 },
  { name: 'Silom', avgPricePerSqm: 175000, rentalYield: 4.6, trend: 4.3 }
])

const investmentHotspots = ref([
  { id: 1, area: 'Bang Sue', reason: 'New high-speed rail terminal', potentialROI: 15, riskLevel: 'Medium' },
  { id: 2, area: 'Lat Phrao', reason: 'Metro line extension', potentialROI: 12, riskLevel: 'Low' },
  { id: 3, area: 'Ramkhamhaeng', reason: 'University area development', potentialROI: 18, riskLevel: 'High' }
])

const marketTrends = ref([
  { id: 1, title: 'Interest Rate Stability', description: 'Bank of Thailand maintaining current rates', impact: 'positive' },
  { id: 2, title: 'Foreign Investment Increase', description: 'Growing international buyer interest', impact: 'positive' },
  { id: 3, title: 'Supply Constraints', description: 'Limited new project launches in prime areas', impact: 'neutral' },
  { id: 4, title: 'Rental Demand Growth', description: 'Increasing demand for quality rental properties', impact: 'positive' }
])

const comparisonProperties = ref([
  {
    id: 1,
    title: 'Bangkok Heights Penthouse',
    location: 'Sukhumvit 24',
    price: 25000000,
    rentalYield: 4.8,
    capRate: 4.2,
    monthlyCashFlow: 15000,
    investmentScore: 8.5
  },
  {
    id: 2,
    title: 'Thonglor Luxury Villa',
    location: 'Thonglor 8',
    price: 45000000,
    rentalYield: 3.8,
    capRate: 3.5,
    monthlyCashFlow: -8000,
    investmentScore: 7.2
  }
])

// Messages data
const buyerConversations = ref([
  {
    id: 1,
    contact: {
      name: 'Jennifer Wong',
      initials: 'JW',
      role: 'Buying Agent',
      company: 'Premium Properties'
    },
    lastMessage: 'The inspection report is ready for review',
    lastMessageTime: '2024-11-13T15:30:00',
    unreadCount: 2,
    messages: [
      {
        id: 1,
        sender: 'other',
        content: 'Hi Sarah! I have the inspection report for the Bangkok Heights penthouse.',
        timestamp: '2024-11-13T10:00:00'
      },
      {
        id: 2,
        sender: 'me',
        content: 'Great! What are the main findings?',
        timestamp: '2024-11-13T10:05:00'
      },
      {
        id: 3,
        sender: 'other',
        content: 'The inspection report is ready for review',
        timestamp: '2024-11-13T15:30:00'
      }
    ]
  },
  {
    id: 2,
    contact: {
      name: 'David Chen',
      initials: 'DC',
      role: 'Loan Officer',
      company: 'Bangkok Bank'
    },
    lastMessage: 'Your loan is approved! Ready for closing.',
    lastMessageTime: '2024-11-12T14:20:00',
    unreadCount: 0,
    messages: [
      {
        id: 1,
        sender: 'me',
        content: 'Hi David, any updates on the loan approval?',
        timestamp: '2024-11-12T09:00:00'
      },
      {
        id: 2,
        sender: 'other',
        content: 'Your loan is approved! Ready for closing.',
        timestamp: '2024-11-12T14:20:00'
      }
    ]
  }
])

const selectedConversation = ref(null)
const newMessage = ref('')

const buyerMessageTemplates = ref([
  {
    id: 1,
    title: 'Schedule Property Viewing',
    preview: 'I would like to schedule a viewing for...',
    content: 'Hi, I would like to schedule a viewing for the property. When would be a convenient time?'
  },
  {
    id: 2,
    title: 'Investment Analysis Request',
    preview: 'Could you provide investment analysis for...',
    content: 'Could you provide a detailed investment analysis for this property, including rental yields and ROI projections?'
  },
  {
    id: 3,
    title: 'Make Offer',
    preview: 'I would like to make an offer on...',
    content: 'I would like to make an offer on this property. Could we discuss the terms and next steps?'
  },
  {
    id: 4,
    title: 'Loan Status Inquiry',
    preview: 'Could you update me on my loan application...',
    content: 'Could you please provide an update on my loan application status and any additional documents needed?'
  },
  {
    id: 5,
    title: 'Legal Document Review',
    preview: 'Please review the legal documents for...',
    content: 'Please review the legal documents for the property purchase and let me know if there are any concerns.'
  }
])

// Calendar data - now properly used in template
const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
const calendarDates = ref([
  { 
    date: '2024-11-18', 
    day: 18, 
    viewings: [
      { id: 1, time: '2:00 PM', propertyTitle: 'Bangkok Heights Penthouse', type: 'In-Person' }
    ] 
  },
  { 
    date: '2024-11-19', 
    day: 19, 
    viewings: [
      { id: 2, time: '10:00 AM', propertyTitle: 'Ekkamai Condo', type: 'Virtual' }
    ] 
  },
  { 
    date: '2024-11-20', 
    day: 20, 
    viewings: [
      { id: 3, time: '3:00 PM', propertyTitle: 'Silom Office', type: 'Inspection' }
    ] 
  }
])

// Computed properties
const profileCompletionScore = computed(() => {
  let score = 0
  if (buyerProfile.value.firstName && buyerProfile.value.lastName) score += 15
  if (buyerProfile.value.email) score += 10
  if (buyerProfile.value.phone) score += 10
  if (investmentPreferences.value.budgetMax && investmentPreferences.value.preferredAreas.length > 0) score += 20
  if (financialInfo.value.annualIncome && financialInfo.value.employmentStatus) score += 20
  if (mortgagePreApproved) score += 15
  if (buyerProfile.value.nationality) score += 10
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

const sortedSavedProperties = computed(() => {
  return [...savedPropertiesList.value].sort((a, b) => {
    switch (savedPropertiesSort.value) {
      case 'price-low':
        return a.currentPrice - b.currentPrice
      case 'price-high':
        return b.currentPrice - a.currentPrice
      case 'yield-high':
        return b.rentalYield - a.rentalYield
      case 'roi-high':
        return b.roiEstimate - a.roiEstimate
      default:
        return new Date(b.savedDate) - new Date(a.savedDate)
    }
  })
})

const filteredOffersList = computed(() => {
 if (offerFilter.value === 'all') return offersList.value
 return offersList.value.filter(offer => offer.status === offerFilter.value)
})

const sortedViewingsList = computed(() => {
 return [...viewingsList.value].sort((a, b) => {
   return new Date(a.viewingDate) - new Date(b.viewingDate)
 })
})

const filteredBuyerConversations = computed(() => {
 if (messageFilter.value === 'all') return buyerConversations.value
 if (messageFilter.value === 'unread') return buyerConversations.value.filter(conv => conv.unreadCount > 0)
 return buyerConversations.value.filter(conv => conv.contact.role.toLowerCase().includes(messageFilter.value.slice(0, -1)))
})

const unreadMessages = computed(() => {
 return buyerConversations.value.reduce((total, conv) => total + conv.unreadCount, 0)
})

const activeConversations = computed(() => {
 return buyerConversations.value.length
})

// Methods - now properly used in template
const toggleAdvancedFilters = () => {
 showAdvancedFilters.value = !showAdvancedFilters.value
}

const clearAllFilters = () => {
 searchFilters.value = {
   location: '',
   propertyType: '',
   bedrooms: '',
   priceRange: '',
   investmentPurpose: '',
   minRentalYield: '',
   pricePerSqm: '',
   newDevelopment: false,
   swimmingPool: false,
   gym: false,
   security: false,
   parking: false,
   nearBTS: false,
   nearShopping: false,
   nearSchool: false,
   nearHospital: false,
   riverView: false
 }
}

const searchProperties = () => {
 console.log('Searching properties with filters:', searchFilters.value)
}

const toggleFavorite = (propertyId) => {
 const property = displayedProperties.value.find(p => p.id === propertyId)
 if (property) {
   property.isFavorite = !property.isFavorite
 }
}

const calculateMortgage = () => {
 const principal = calculatorInputs.value.purchasePrice * (1 - calculatorInputs.value.downPaymentPercent / 100)
 const monthlyRate = calculatorInputs.value.interestRate / 100 / 12
 const numPayments = calculatorInputs.value.loanTerm * 12
 
 const monthlyPayment = principal * (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / (Math.pow(1 + monthlyRate, numPayments) - 1)
 const downPayment = calculatorInputs.value.purchasePrice * (calculatorInputs.value.downPaymentPercent / 100)
 const totalInterest = (monthlyPayment * numPayments) - principal
 
 calculationResults.value = {
   monthlyPayment: Math.round(monthlyPayment),
   downPayment: Math.round(downPayment),
   loanAmount: Math.round(principal),
   totalInterest: Math.round(totalInterest)
 }
}

const calculateInvestmentROI = () => {
 const purchasePrice = investmentInputs.value.purchasePrice
 const downPayment = purchasePrice * (investmentInputs.value.downPaymentPercent / 100)
 const closingCosts = purchasePrice * (investmentInputs.value.closingCosts / 100)
 const totalInvestment = downPayment + closingCosts
 
 const annualRent = investmentInputs.value.monthlyRent * 12
 const adjustedRent = annualRent * (1 - investmentInputs.value.vacancyRate / 100)
 const annualExpenses = investmentInputs.value.monthlyExpenses * 12
 const netOperatingIncome = adjustedRent - annualExpenses
 
 // Calculate mortgage payment
 const loanAmount = purchasePrice - downPayment
 const monthlyRate = 4.25 / 100 / 12 // Assuming 4.25% interest rate
 const numPayments = 30 * 12 // 30 year loan
 const mortgagePayment = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / (Math.pow(1 + monthlyRate, numPayments) - 1)
 
 const annualMortgagePayment = mortgagePayment * 12
 const netCashFlow = netOperatingIncome - annualMortgagePayment
 const monthlyCashFlow = netCashFlow / 12
 
 const cashOnCashROI = (netCashFlow / totalInvestment) * 100
 const capRate = (netOperatingIncome / purchasePrice) * 100
 const rentalYield = (annualRent / purchasePrice) * 100
 const breakEvenRatio = ((annualExpenses + annualMortgagePayment) / annualRent) * 100
 
 let investmentScore = 5
 if (cashOnCashROI > 8) investmentScore += 1
 if (capRate > 4) investmentScore += 1
 if (rentalYield > 5) investmentScore += 1
 if (netCashFlow > 0) investmentScore += 1
 if (breakEvenRatio < 80) investmentScore += 1
 
 investmentResults.value = {
   cashOnCashROI: Math.round(cashOnCashROI * 10) / 10,
   capRate: Math.round(capRate * 10) / 10,
   rentalYield: Math.round(rentalYield * 10) / 10,
   breakEvenRatio: Math.round(breakEvenRatio),
   monthlyIncome: Math.round(adjustedRent / 12),
   mortgagePayment: Math.round(mortgagePayment),
   monthlyExpenses: investmentInputs.value.monthlyExpenses,
   vacancyAllowance: Math.round((investmentInputs.value.monthlyRent * investmentInputs.value.vacancyRate) / 100),
   netCashFlow: Math.round(monthlyCashFlow),
   investmentScore: Math.min(investmentScore, 10)
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
     content: newMessage.value.trim(),
     timestamp: new Date().toISOString()
   })
   selectedConversation.value.lastMessage = newMessage.value.trim()
   selectedConversation.value.lastMessageTime = new Date().toISOString()
   newMessage.value = ''
 }
}

const useTemplate = (template) => {
 newMessage.value = template.content
}

// Utility methods
const formatCurrency = (amount) => {
 return new Intl.NumberFormat('th-TH', {
   style: 'currency',
   currency: 'THB',
   minimumFractionDigits: 0,
   maximumFractionDigits: 0
 }).format(amount)
}

const formatDate = (dateString) => {
 return new Date(dateString).toLocaleDateString('en-US', {
   year: 'numeric',
   month: 'short',
   day: 'numeric'
 })
}

const formatTime = (dateString) => {
 return new Date(dateString).toLocaleTimeString('en-US', {
   hour: '2-digit',
   minute: '2-digit'
 })
}

const formatTimeAgo = (dateString) => {
 const now = new Date()
 const date = new Date(dateString)
 const diffInHours = Math.floor((now - date) / (1000 * 60 * 60))
 
 if (diffInHours < 1) return 'Just now'
 if (diffInHours < 24) return `${diffInHours}h ago`
 if (diffInHours < 48) return 'Yesterday'
 return formatDate(dateString)
}

const formatTimeUntil = (dateString) => {
 const now = new Date()
 const date = new Date(dateString)
 const diffInHours = Math.floor((date - now) / (1000 * 60 * 60))
 
 if (diffInHours < 24) return `in ${diffInHours}h`
 const diffInDays = Math.floor(diffInHours / 24)
 return `in ${diffInDays}d`
}

const getProfileCompletionColor = (score) => {
 if (score >= 80) return 'text-green-600'
 if (score >= 60) return 'text-yellow-600'
 return 'text-red-600'
}

const getPropertyRatingClass = (rating) => {
 if (rating >= 8) return 'text-green-600'
 if (rating >= 6) return 'text-yellow-600'
 return 'text-red-600'
}

const getPriceChangeClass = (change) => {
 return change > 0 ? 'text-red-600' : change < 0 ? 'text-green-600' : 'text-gray-500'
}

const getOfferStatusClass = (status) => {
 const classes = {
   'pending': 'bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400',
   'negotiating': 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400',
   'accepted': 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400',
   'rejected': 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400',
   'expired': 'bg-gray-100 text-gray-800 dark:bg-gray-600 dark:text-gray-300'
 }
 return classes[status] || 'bg-gray-100 text-gray-800'
}

const getViewingTypeClass = (type) => {
 const classes = {
   'In-Person': 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400',
   'Virtual': 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400',
   'Inspection': 'bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400'
 }
 return classes[type] || 'bg-gray-100 text-gray-800'
}

const getViewingStatusClass = (status) => {
 const classes = {
   'scheduled': 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400',
   'completed': 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400',
   'cancelled': 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400'
 }
 return classes[status] || 'bg-gray-100 text-gray-800'
}

const getPurchaseStatusClass = (status) => {
 const classes = {
   'Under Contract': 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400',
   'Pending': 'bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400',
   'Closed': 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
 }
 return classes[status] || 'bg-gray-100 text-gray-800'
}

const getProgressBarClass = (status) => {
 const classes = {
   'Under Contract': 'bg-blue-500',
   'Pending': 'bg-orange-500',
   'Closed': 'bg-green-500'
 }
 return classes[status] || 'bg-gray-500'
}

const getMilestoneIconClass = (status) => {
 const classes = {
   'completed': 'bg-green-500',
   'in-progress': 'bg-blue-500',
   'pending': 'bg-gray-300 dark:bg-gray-600'
 }
 return classes[status] || 'bg-gray-300'
}

const getDocumentIconClass = (status) => {
 const classes = {
   'completed': 'bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400',
   'under-review': 'bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400',
   'pending': 'bg-orange-100 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400'
 }
 return classes[status] || 'bg-gray-100 text-gray-600'
}

const getDocumentStatusClass = (status) => {
 const classes = {
   'completed': 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400',
   'under-review': 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400',
   'pending': 'bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400'
 }
 return classes[status] || 'bg-gray-100 text-gray-800'
}

const getLenderStatusClass = (status) => {
 const classes = {
   'Pre-Approved': 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400',
   'Available': 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400',
   'Under Review': 'bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400'
 }
 return classes[status] || 'bg-gray-100 text-gray-800'
}

const getInvestmentScoreDescription = (score) => {
 if (score >= 8) return 'Excellent investment opportunity with strong fundamentals'
 if (score >= 6) return 'Good investment with moderate returns expected'
 if (score >= 4) return 'Fair investment requiring careful consideration'
 return 'Below average investment with significant risks'
}

// Lifecycle
onMounted(() => {
 // Initialize any data that needs to be loaded
 console.log('Buyer Dashboard mounted')
})
</script>

<style scoped>
.toggle {
 @apply relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-turqoise-light focus:ring-offset-2 dark:bg-gray-600;
}

.toggle:checked {
 @apply bg-brand-turqoise-light;
}

.toggle::before {
 @apply absolute left-1 top-1 h-4 w-4 rounded-full bg-white transition-transform;
 content: '';
}

.toggle:checked::before {
 @apply translate-x-5;
}

/* Custom scrollbar */
.overflow-y-auto::-webkit-scrollbar {
 width: 6px;
}

.overflow-y-auto::-webkit-scrollbar-track {
 @apply bg-gray-100 dark:bg-gray-700;
}

.overflow-y-auto::-webkit-scrollbar-thumb {
 @apply bg-gray-300 dark:bg-gray-600 rounded-full;
}

.overflow-y-auto::-webkit-scrollbar-thumb:hover {
 @apply bg-gray-400 dark:bg-gray-500;
}

/* Animations */
@keyframes slideIn {
 from {
   opacity: 0;
   transform: translateY(10px);
 }
 to {
   opacity: 1;
   transform: translateY(0);
 }
}

.animate-slide-in {
 animation: slideIn 0.3s ease-out;
}

/* Tab transitions */
.tab-content {
 animation: slideIn 0.2s ease-out;
}

/* Property card hover effects */
.property-card {
 transition: all 0.3s ease;
}

.property-card:hover {
 transform: translateY(-2px);
 box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

/* Message bubble animations */
.message-bubble {
 animation: slideIn 0.2s ease-out;
}

/* Progress bar animation */
.progress-bar {
 transition: width 0.5s ease-out;
}

/* Button hover effects */
.btn-primary {
 transition: all 0.2s ease;
}

.btn-primary:hover {
 transform: translateY(-1px);
 box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* Card hover effects */
.stats-card {
 transition: all 0.3s ease;
}

.stats-card:hover {
 transform: translateY(-1px);
 box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}
</style>
