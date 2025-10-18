<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 font-sans transition-colors duration-300">

    <!-- Agent Info Bar with Integration Score -->
    <div class="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-4 transition-colors duration-300">
      <div class="flex items-center justify-between mx-auto">
        <!-- Agent Info with Integration Score -->
        <div class="flex items-center space-x-6">
          <div class="flex items-center space-x-3">
            <div class="relative">
              <!-- Circular Integration Score -->
              <div class="w-12 h-12 relative">
                <svg class="w-12 h-12 transform -rotate-90" viewBox="0 0 36 36">
                  <path
                    class="text-gray-200 dark:text-gray-600"
                    stroke="currentColor"
                    stroke-width="3"
                    fill="none"
                    d="M18 2.0845a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path
                    :class="getScoreColor(integrationScore)"
                    stroke="currentColor"
                    stroke-width="3"
                    fill="none"
                    stroke-linecap="round"
                    :stroke-dasharray="`${integrationScore}, 100`"
                    d="M18 2.0845a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
                <div class="absolute inset-0 flex items-center justify-center">
                  <span class="text-xs font-bold text-brand-navy dark:text-white">{{ integrationScore }}%</span>
                </div>
              </div>
            </div>
          </div>
          
          <div class="text-sm text-brand-navy dark:text-gray-400">
            <span class="font-medium">Welcome back, Sarah Wilson</span>
            <div class="text-xs text-gray-500 flex items-center space-x-2">
              <span>Individual Agent</span>
              <span :class="getVerificationBadgeClass(integrationScore)" class="px-2 py-0.5 rounded text-xs font-semibold">
                {{ getVerificationLevel(integrationScore) }}
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
              placeholder="Search properties, clients, deals..."
              class="w-80 px-4 py-2 pr-10 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-red-light focus:border-transparent bg-white dark:bg-gray-700 text-brand-navy dark:text-white transition-colors duration-300"
            >
            <svg class="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
          </div>
          
          <button class="relative p-2 text-brand-navy dark:text-gray-400 hover:text-brand-red-light dark:hover:text-brand-red-light transition-colors">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-5 5v-5zM11 13h-1a4 4 0 01-4-4V7a4 4 0 118 0v2a4 4 0 01-4 4z"/>
            </svg>
            <span v-if="unreadNotifications > 0" class="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          
          <div class="flex items-center space-x-2">
            <div class="w-8 h-8 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-800 dark:to-blue-600 rounded-full"></div>
            <button class="text-brand-navy dark:text-gray-400 hover:text-brand-red-light dark:hover:text-brand-red-light">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- FIXED: Main Layout Container -->
    <div class="flex mx-auto">
      <!-- Updated Sidebar Navigation -->
      <aside class="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex-shrink-0 transition-colors duration-300">
        <nav class="p-4 space-y-2">
          <a 
            href="#" 
            :class="['flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors', 
                     activeTab === 'overview' ? 'bg-brand-red-light text-brand-navy border border-teal-200' : 'text-brand-navy dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700']"
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
                     activeTab === 'crm' ? 'bg-brand-red-light text-brand-navy border border-teal-200' : 'text-brand-navy dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700']"
            @click="activeTab = 'crm'"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"/>
            </svg>
            <span class="font-medium">CRM & Clients</span>
            <span class="bg-brand-red-light/20 text-brand-navy dark:text-brand-red-light text-xs font-semibold px-2 py-1 rounded-full ml-auto">{{ totalClients }}</span>
          </a>
          
          <a 
            href="#" 
            :class="['flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors', 
                     activeTab === 'pipeline' ? 'bg-brand-red-light text-brand-navy border border-teal-200' : 'text-brand-navy dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700']"
            @click="activeTab = 'pipeline'"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
            </svg>
            <span class="font-medium">Deal Pipeline</span>
            <span class="bg-purple-100 dark:bg-purple-900/20 text-purple-800 dark:text-purple-400 text-xs font-semibold px-2 py-1 rounded-full ml-auto">{{ activeDeals }}</span>
          </a>
          
          <a 
            href="#" 
            :class="['flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors', 
                     activeTab === 'properties' ? 'bg-brand-red-light text-brand-navy border border-teal-200' : 'text-brand-navy dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700']"
            @click="activeTab = 'properties'"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
            </svg>
            <span class="font-medium">Properties</span>
            <span class="bg-brand-red-light/20 text-brand-navy dark:text-brand-red-light text-xs font-semibold px-2 py-1 rounded-full ml-auto">{{ totalProperties }}</span>
          </a>
          
          <a 
            href="#" 
            :class="['flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors', 
                     activeTab === 'commissions' ? 'bg-brand-red-light text-brand-navy border border-teal-200' : 'text-brand-navy dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700']"
            @click="activeTab = 'commissions'"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"/>
            </svg>
            <span class="font-medium">Commissions</span>
            <span v-if="pendingCommissionAmount > 0" class="bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-400 text-xs font-semibold px-2 py-1 rounded-full ml-auto">{{ formatCurrency(pendingCommissionAmount) }}</span>
          </a>
          
          <a 
            href="#" 
            :class="['flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors', 
                     activeTab === 'transactions' ? 'bg-brand-red-light text-brand-navy border border-teal-200' : 'text-brand-navy dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700']"
            @click="activeTab = 'transactions'"
            v-if="userProfile.has_active_clients"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
            </svg>
            <span class="font-medium">Transactions</span>
            <span class="bg-orange-100 dark:bg-orange-900/20 text-orange-800 dark:text-orange-400 text-xs font-semibold px-2 py-1 rounded-full ml-auto">{{ activeTransactions }}</span>
          </a>
          
          <a 
            href="#" 
            :class="['flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors', 
                     activeTab === 'communications' ? 'bg-brand-red-light text-brand-navy border border-teal-200' : 'text-brand-navy dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700']"
            @click="activeTab = 'communications'"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
            </svg>
            <span class="font-medium">Communications</span>
            <span v-if="unreadMessages > 0" class="bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-400 text-xs font-semibold px-2 py-1 rounded-full ml-auto">{{ unreadMessages }}</span>
          </a>
          
          <a 
            href="#" 
            :class="['flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors', 
                     activeTab === 'profile' ? 'bg-brand-red-light text-brand-navy border border-teal-200' : 'text-brand-navy dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700']"
            @click="activeTab = 'profile'"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
            </svg>
            <span class="font-medium">Professional Profile</span>
            <div v-if="!profileComplete" class="w-2 h-2 bg-yellow-500 rounded-full ml-auto"></div>
          </a>
          
          <a 
            href="#" 
            :class="['flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors', 
                     activeTab === 'analytics' ? 'bg-brand-red-light text-brand-navy border border-teal-200' : 'text-brand-navy dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700']"
            @click="activeTab = 'analytics'"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
            </svg>
            <span class="font-medium">Analytics</span>
          </a>
        </nav>
      </aside>

      <!-- FIXED: Main Content Area with proper flex-1 -->
      <main class="flex-1 overflow-y-auto bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <!-- Overview Tab -->
        <div v-if="activeTab === 'overview'" class="p-6">
          <!-- ThaiKeys Integration Score Card -->
          <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 transition-colors duration-300 mb-6">
            <div class="flex items-center justify-between">
              <div>
                <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-2">ThaiKeys Integration Level</h3>
                <p class="text-sm text-brand-navy dark:text-gray-400">Enhance your professional credibility and client trust</p>
              </div>
              <div class="relative">
                <div class="w-20 h-20">
                  <svg class="w-20 h-20 transform -rotate-90" viewBox="0 0 36 36">
                    <path
                      class="text-gray-200 dark:text-gray-600"
                      stroke="currentColor"
                      stroke-width="2"
                      fill="none"
                      d="M18 2.0845a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path
                      :class="getScoreColor(integrationScore)"
                      stroke="currentColor"
                      stroke-width="2"
                      fill="none"
                      stroke-linecap="round"
                      :stroke-dasharray="`${integrationScore}, 100`"
                      d="M18 2.0845a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                  </svg>
                  <div class="absolute inset-0 flex items-center justify-center">
                    <div class="text-center">
                      <span class="text-xl font-bold text-brand-navy dark:text-white">{{ integrationScore }}%</span>
                      <div class="text-xs text-gray-500">{{ getVerificationLevel(integrationScore) }}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="mt-4 grid grid-cols-2 gap-4">
              <!-- Digital Services Status -->
              <div class="space-y-3">
                <div class="flex items-center justify-between">
                  <div class="flex items-center space-x-2">
                    <svg class="w-4 h-4" :class="userProfile.uses_digital_payments ? 'text-green-500' : 'text-gray-400'" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M2 10h20v8a2 2 0 01-2 2H4a2 2 0 01-2-2v-8zm18-4H4a2 2 0 00-2 2v2h20V8a2 2 0 00-2-2zM8 16h4v2H8v-2z"/>
                    </svg>
                    <span class="text-sm" :class="userProfile.uses_digital_payments ? 'text-brand-navy dark:text-white' : 'text-gray-500'">Digital Payments</span>
                  </div>
                  <button v-if="!userProfile.uses_digital_payments" @click="showDigitalPaymentModal = true" class="text-xs bg-brand-red-light text-brand-navy px-2 py-1 rounded hover:bg-teal-300 transition-colors">
                    Enable +25pts
                  </button>
                  <span v-else class="text-xs text-green-600 font-semibold">✓ Active</span>
                </div>
                
                <div class="flex items-center justify-between">
                  <div class="flex items-center space-x-2">
                    <svg class="w-4 h-4" :class="userProfile.uses_digital_contracts ? 'text-green-500' : 'text-gray-400'" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zM6 20V4h7v5h5v11H6z"/>
                    </svg>
                    <span class="text-sm" :class="userProfile.uses_digital_contracts ? 'text-brand-navy dark:text-white' : 'text-gray-500'">E-Signatures</span>
                  </div>
                  <button v-if="!userProfile.uses_digital_contracts" @click="showDigitalContractModal = true" class="text-xs bg-brand-red-light text-brand-navy px-2 py-1 rounded hover:bg-teal-300 transition-colors">
                    Enable +20pts
                  </button>
                  <span v-else class="text-xs text-green-600 font-semibold">✓ Active</span>
                </div>
              </div>
              
              <div class="space-y-3">
                <div class="flex items-center justify-between">
                  <div class="flex items-center space-x-2">
                    <svg class="w-4 h-4" :class="userProfile.id_verified ? 'text-green-500' : 'text-gray-400'" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                    <span class="text-sm" :class="userProfile.id_verified ? 'text-brand-navy dark:text-white' : 'text-gray-500'">ID Verified</span>
                  </div>
                  <span v-if="userProfile.id_verified" class="text-xs text-green-600 font-semibold">✓ Verified</span>
                  <span v-else class="text-xs text-gray-500">Pending</span>
                </div>
                
                <div class="flex items-center justify-between">
                  <div class="flex items-center space-x-2">
                    <svg class="w-4 h-4" :class="userProfile.banking_verified ? 'text-green-500' : 'text-gray-400'" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M11.5 1L2 6v2h20V6l-9.5-5zM2 10v10a1 1 0 001 1h18a1 1 0 001-1V10H2zm8 7.5V14h4v3.5h-4z"/>
                    </svg>
                    <span class="text-sm" :class="userProfile.banking_verified ? 'text-brand-navy dark:text-white' : 'text-gray-500'">Banking Details</span>
                  </div>
                  <span v-if="userProfile.banking_verified" class="text-xs text-green-600 font-semibold">✓ Verified</span>
                  <span v-else class="text-xs text-gray-500">Setup Required</span>
                </div>
              </div>
            </div>
            
            <div class="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <p class="text-sm text-blue-800 dark:text-blue-400">
                <strong>Competitive Advantage:</strong> Agents with 80%+ integration scores receive 3x more client inquiries and rank higher in search results.
              </p>
            </div>
          </div>
          <!-- Stats Cards -->
          <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 transition-colors duration-300">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm font-medium text-brand-navy dark:text-gray-400">Active Listings</p>
                  <p class="text-3xl font-bold text-brand-navy dark:text-white">{{ totalProperties }}</p>
                  <p class="text-sm text-green-600 dark:text-green-400 mt-2">+3 this week</p>
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
                  <p class="text-sm font-medium text-brand-navy dark:text-gray-400">Active Deals</p>
                  <p class="text-3xl font-bold text-brand-navy dark:text-white">{{ activeDeals }}</p>
                  <p class="text-sm text-purple-600 dark:text-purple-400 mt-2">{{ formatCurrency(totalPipelineValue) }} value</p>
                </div>
                <div class="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-xl flex items-center justify-center">
                  <svg class="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                  </svg>
                </div>
              </div>
            </div>

            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 transition-colors duration-300">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm font-medium text-brand-navy dark:text-gray-400">Total Clients</p>
                  <p class="text-3xl font-bold text-brand-navy dark:text-white">{{ totalClients }}</p>
                  <p class="text-sm text-green-600 dark:text-green-400 mt-2">+12% this month</p>
                </div>
                <div class="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-xl flex items-center justify-center">
                  <svg class="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"/>
                  </svg>
                </div>
              </div>
            </div>

            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 transition-colors duration-300">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm font-medium text-brand-navy dark:text-gray-400">Monthly Commissions</p>
                  <p class="text-3xl font-bold text-brand-navy dark:text-white">{{ formatCurrency(monthlyCommissions) }}</p>
                  <p class="text-sm text-green-600 dark:text-green-400 mt-2">+{{ formatCurrency(15000) }} from last month</p>
                </div>
                <div class="w-12 h-12 bg-brand-red-light/20 rounded-xl flex items-center justify-center">
                  <svg class="w-6 h-6 text-brand-red-light dark:text-brand-red-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                <button class="w-full bg-brand-red-light text-brand-navy py-3 px-4 rounded-lg font-semibold hover:bg-teal-300 transition-colors flex items-center justify-center space-x-2">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                  </svg>
                  <span>Add New Listing</span>
                </button>
                
                <button class="w-full border-2 border-gray-200 dark:border-gray-600 text-brand-navy dark:text-gray-300 py-3 px-4 rounded-lg font-semibold hover:border-gray-300 dark:hover:border-gray-500 transition-colors flex items-center justify-center space-x-2">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                  </svg>
                  <span>Add New Client</span>
                </button>
                
                <button class="w-full border-2 border-gray-200 dark:border-gray-600 text-brand-navy dark:text-gray-300 py-3 px-4 rounded-lg font-semibold hover:border-gray-300 dark:hover:border-gray-500 transition-colors flex items-center justify-center space-x-2">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                  </svg>
                  <span>Schedule Viewing</span>
                </button>
                
                <button class="w-full border-2 border-gray-200 dark:border-gray-600 text-brand-navy dark:text-gray-300 py-3 px-4 rounded-lg font-semibold hover:border-gray-300 dark:hover:border-gray-500 transition-colors flex items-center justify-center space-x-2">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                  </svg>
                  <span>View Performance</span>
                </button>
              </div>
            </div>

            <!-- Recent Deal Activity -->
            <div class="lg:col-span-2 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 transition-colors duration-300">
              <div class="flex items-center justify-between mb-4">
                <h3 class="text-lg font-semibold text-brand-navy dark:text-white">Recent Deal Activity</h3>
                <button class="text-brand-red-light hover:text-teal-500 font-medium text-sm">View All</button>
              </div>
              
              <div class="space-y-4">
                <div v-for="activity in recentDealActivity" :key="activity.id" class="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors cursor-pointer">
                  <div class="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-800 dark:to-blue-600 rounded-full flex-shrink-0 flex items-center justify-center">
                    <svg class="w-6 h-6 text-blue-600 dark:text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"/>
                    </svg>
                  </div>
                  <div class="flex-1">
                    <div class="flex items-center justify-between">
                      <h4 class="font-semibold text-brand-navy dark:text-white">{{ activity.clientName }}</h4>
                      <span class="text-xs text-brand-navy dark:text-gray-400">{{ activity.time }}</span>
                    </div>
                    <p class="text-sm text-brand-navy dark:text-gray-400 mt-1">{{ activity.property }}</p>
                    <div class="flex items-center space-x-4 mt-2">
                      <span :class="['text-xs font-semibold px-2 py-1 rounded-full', 
                                   activity.stage === 'Contract' ? 'bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-400' : 
                                   activity.stage === 'Negotiation' ? 'bg-yellow-100 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-400' : 
                                   'bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-400']">
                        {{ activity.stage }}
                      </span>
                      <span class="text-sm font-semibold text-brand-navy dark:text-white">{{ formatCurrency(activity.expectedCommission) }} commission</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- CRM & Clients Tab -->
        <div v-if="activeTab === 'crm'" class="p-6">
          <div class="flex items-center justify-between mb-6">
            <h2 class="text-2xl font-bold text-brand-navy dark:text-white">CRM & Client Management</h2>
            <div class="flex items-center space-x-4">
              <select class="border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-brand-navy dark:text-white rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-red-light">
                <option>All Clients</option>
                <option>Active Clients</option>
                <option>Prospective Clients</option>
                <option>Past Clients</option>
              </select>
              <button class="bg-brand-red-light text-brand-navy px-6 py-3 rounded-lg font-semibold hover:bg-teal-300 transition-colors flex items-center space-x-2">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                </svg>
                <span>Add New Client</span>
              </button>
            </div>
          </div>

          <!-- Client Stats Overview -->
          <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
            <div class="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg border border-gray-100 dark:border-gray-700">
              <div class="text-2xl font-bold text-brand-navy dark:text-white">{{ totalClients }}</div>
              <div class="text-sm text-gray-500">Total Clients</div>
            </div>
            <div class="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg border border-gray-100 dark:border-gray-700">
              <div class="text-2xl font-bold text-green-600">{{ activeClientDeals }}</div>
              <div class="text-sm text-gray-500">Active Deals</div>
            </div>
            <div class="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg border border-gray-100 dark:border-gray-700">
              <div class="text-2xl font-bold text-blue-600">{{ avgClientSatisfaction }}%</div>
              <div class="text-sm text-gray-500">Satisfaction Rate</div>
            </div>
            <div class="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg border border-gray-100 dark:border-gray-700">
              <div class="text-2xl font-bold text-purple-600">{{ avgResponseTime }}</div>
              <div class="text-sm text-gray-500">Avg Response Time</div>
            </div>
          </div>

          <!-- Client Database -->
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
            <div class="p-6 border-b border-gray-100 dark:border-gray-600">
              <div class="flex items-center justify-between">
                <h3 class="text-lg font-semibold text-brand-navy dark:text-white">Client Database</h3>
                <div class="flex items-center space-x-4">
                  <div class="relative">
                    <input 
                      v-model="clientSearchQuery"
                      type="text" 
                      placeholder="Search clients..."
                      class="w-64 px-4 py-2 pr-10 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-red-light bg-white dark:bg-gray-700 text-brand-navy dark:text-white"
                    >
                    <svg class="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="p-6">
              <div class="grid grid-cols-6 gap-4 text-sm font-medium text-brand-navy dark:text-gray-400 mb-4">
                <div>Client</div>
                <div>Status</div>
                <div>Property Interest</div>
                <div>Budget Range</div>
                <div>Last Contact</div>
                <div>Actions</div>
              </div>
              
              <div class="space-y-4">
                <div v-for="client in clients" :key="client.id" class="grid grid-cols-6 gap-4 items-center p-4 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-xl transition-colors">
                  <!-- Client Info -->
                  <div class="flex items-center space-x-3">
                    <div class="w-10 h-10 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-800 dark:to-blue-600 rounded-full flex items-center justify-center">
                      <span class="text-sm font-semibold text-blue-800 dark:text-blue-200">{{ client.initials }}</span>
                    </div>
                    <div>
                      <div class="font-semibold text-brand-navy dark:text-white">{{ client.name }}</div>
                      <div class="text-sm text-gray-500">{{ client.email }}</div>
                    </div>
                  </div>
                  
                  <!-- Status -->
                  <div>
                    <span :class="['px-3 py-1 rounded-full text-xs font-semibold',
                                 client.status === 'Active' ? 'bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-400' :
                                 client.status === 'Prospective' ? 'bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-400' :
                                 client.status === 'Negotiating' ? 'bg-yellow-100 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-400' :
                                 'bg-gray-100 dark:bg-gray-600 text-gray-800 dark:text-gray-300']">
                      {{ client.status }}
                    </span>
                  </div>
                  
                  <!-- Property Interest -->
                  <div>
                    <div class="font-medium text-brand-navy dark:text-white text-sm">{{ client.propertyType }}</div>
                    <div class="text-sm text-gray-500">{{ client.preferredArea }}</div>
                  </div>
                  
                  <!-- Budget -->
                  <div>
                    <div class="font-medium text-brand-navy dark:text-white">{{ formatCurrency(client.budgetMin) }} - {{ formatCurrency(client.budgetMax) }}</div>
                    <div class="text-sm text-gray-500">{{ client.dealType }}</div>
                  </div>
                  
                  <!-- Last Contact -->
                  <div>
                    <div class="text-sm text-brand-navy dark:text-white">{{ client.lastContact }}</div>
                    <div class="text-xs text-gray-500">{{ client.contactMethod }}</div>
                  </div>
                  
                  <!-- Actions -->
                  <div class="flex items-center space-x-2">
                    <button @click="openClientDetails(client)" class="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 p-1">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                      </svg>
                    </button>
                    <button class="text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 p-1">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                      </svg>
                    </button>
                    <button class="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 p-1">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Deal Pipeline Tab -->
        <div v-if="activeTab === 'pipeline'" class="p-6">
          <div class="flex items-center justify-between mb-6">
            <h2 class="text-2xl font-bold text-brand-navy dark:text-white">Deal Pipeline Management</h2>
            <div class="flex items-center space-x-4">
              <select class="border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-brand-navy dark:text-white rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-red-light">
                <option>All Deals</option>
                <option>Rental Deals</option>
                <option>Purchase Deals</option>
                <option>High Value (>฿50k)</option>
              </select>
              <div class="text-sm text-brand-navy dark:text-gray-400">
                Pipeline Value: <span class="font-bold text-lg text-brand-red-light">{{ formatCurrency(totalPipelineValue) }}</span>
              </div>
            </div>
          </div>

          <!-- Pipeline Overview Stats -->
          <div class="grid grid-cols-5 gap-4 mb-6">
            <div class="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg border border-gray-100 dark:border-gray-700 text-center">
              <div class="text-2xl font-bold text-blue-600">{{ pipelineStats.leads }}</div>
              <div class="text-sm text-gray-500">New Leads</div>
              <div class="text-xs text-blue-600 mt-1">{{ formatCurrency(pipelineStats.leadsValue) }}</div>
            </div>
            <div class="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg border border-gray-100 dark:border-gray-700 text-center">
              <div class="text-2xl font-bold text-yellow-600">{{ pipelineStats.viewings }}</div>
              <div class="text-sm text-gray-500">Viewings</div>
              <div class="text-xs text-yellow-600 mt-1">{{ formatCurrency(pipelineStats.viewingsValue) }}</div>
            </div>
            <div class="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg border border-gray-100 dark:border-gray-700 text-center">
              <div class="text-2xl font-bold text-orange-600">{{ pipelineStats.negotiations }}</div>
              <div class="text-sm text-gray-500">Negotiations</div>
              <div class="text-xs text-orange-600 mt-1">{{ formatCurrency(pipelineStats.negotiationsValue) }}</div>
            </div>
            <div class="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg border border-gray-100 dark:border-gray-700 text-center">
              <div class="text-2xl font-bold text-purple-600">{{ pipelineStats.contracts }}</div>
              <div class="text-sm text-gray-500">Contracts</div>
              <div class="text-xs text-purple-600 mt-1">{{ formatCurrency(pipelineStats.contractsValue) }}</div>
            </div>
            <div class="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg border border-gray-100 dark:border-gray-700 text-center">
              <div class="text-2xl font-bold text-green-600">{{ pipelineStats.closed }}</div>
              <div class="text-sm text-gray-500">Closed</div>
              <div class="text-xs text-green-600 mt-1">{{ formatCurrency(pipelineStats.closedValue) }}</div>
            </div>
          </div>
          <!-- Pipeline Kanban Board -->
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 p-6">
            <div class="grid grid-cols-5 gap-4 h-96 overflow-y-auto">
              <!-- Lead Stage -->
              <div class="space-y-4">
                <div class="flex items-center justify-between">
                  <h3 class="font-semibold text-brand-navy dark:text-white">New Leads</h3>
                  <span class="bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-400 text-xs font-semibold px-2 py-1 rounded-full">{{ pipelineDeals.leads.length }}</span>
                </div>
                <div class="space-y-3">
                  <div v-for="deal in pipelineDeals.leads" :key="deal.id" class="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg border-l-4 border-blue-500 cursor-pointer hover:shadow-md transition-shadow">
                    <div class="font-semibold text-brand-navy dark:text-white text-sm">{{ deal.clientName }}</div>
                    <div class="text-xs text-gray-500 mt-1">{{ deal.propertyType }}</div>
                    <div class="text-xs text-gray-600 dark:text-gray-400 mt-1">{{ deal.area }}</div>
                    <div class="flex items-center justify-between mt-2">
                      <span class="text-sm font-bold text-blue-600">{{ formatCurrency(deal.value) }}</span>
                      <span class="text-xs text-gray-500">{{ deal.daysInStage }}d</span>
                    </div>
                    <div class="text-xs text-gray-500 mt-1">Commission: {{ formatCurrency(deal.expectedCommission) }}</div>
                  </div>
                </div>
              </div>

              <!-- Viewing Stage -->
              <div class="space-y-4">
                <div class="flex items-center justify-between">
                  <h3 class="font-semibold text-brand-navy dark:text-white">Viewings</h3>
                  <span class="bg-yellow-100 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-400 text-xs font-semibold px-2 py-1 rounded-full">{{ pipelineDeals.viewings.length }}</span>
                </div>
                <div class="space-y-3">
                  <div v-for="deal in pipelineDeals.viewings" :key="deal.id" class="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg border-l-4 border-yellow-500 cursor-pointer hover:shadow-md transition-shadow">
                    <div class="font-semibold text-brand-navy dark:text-white text-sm">{{ deal.clientName }}</div>
                    <div class="text-xs text-gray-500 mt-1">{{ deal.propertyType }}</div>
                    <div class="text-xs text-gray-600 dark:text-gray-400 mt-1">{{ deal.area }}</div>
                    <div class="flex items-center justify-between mt-2">
                      <span class="text-sm font-bold text-yellow-600">{{ formatCurrency(deal.value) }}</span>
                      <span class="text-xs text-gray-500">{{ deal.daysInStage }}d</span>
                    </div>
                    <div class="text-xs text-gray-500 mt-1">Commission: {{ formatCurrency(deal.expectedCommission) }}</div>
                    <div class="text-xs text-blue-600 mt-1">Next: {{ deal.nextViewing }}</div>
                  </div>
                </div>
              </div>

              <!-- Negotiation Stage -->
              <div class="space-y-4">
                <div class="flex items-center justify-between">
                  <h3 class="font-semibold text-brand-navy dark:text-white">Negotiations</h3>
                  <span class="bg-orange-100 dark:bg-orange-900/20 text-orange-800 dark:text-orange-400 text-xs font-semibold px-2 py-1 rounded-full">{{ pipelineDeals.negotiations.length }}</span>
                </div>
                <div class="space-y-3">
                  <div v-for="deal in pipelineDeals.negotiations" :key="deal.id" class="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg border-l-4 border-orange-500 cursor-pointer hover:shadow-md transition-shadow">
                    <div class="font-semibold text-brand-navy dark:text-white text-sm">{{ deal.clientName }}</div>
                    <div class="text-xs text-gray-500 mt-1">{{ deal.propertyType }}</div>
                    <div class="text-xs text-gray-600 dark:text-gray-400 mt-1">{{ deal.area }}</div>
                    <div class="flex items-center justify-between mt-2">
                      <span class="text-sm font-bold text-orange-600">{{ formatCurrency(deal.value) }}</span>
                      <span class="text-xs text-gray-500">{{ deal.daysInStage }}d</span>
                    </div>
                    <div class="text-xs text-gray-500 mt-1">Commission: {{ formatCurrency(deal.expectedCommission) }}</div>
                    <div class="text-xs text-orange-600 mt-1">{{ deal.negotiationStatus }}</div>
                  </div>
                </div>
              </div>

              <!-- Contract Stage -->
              <div class="space-y-4">
                <div class="flex items-center justify-between">
                  <h3 class="font-semibold text-brand-navy dark:text-white">Contracts</h3>
                  <span class="bg-purple-100 dark:bg-purple-900/20 text-purple-800 dark:text-purple-400 text-xs font-semibold px-2 py-1 rounded-full">{{ pipelineDeals.contracts.length }}</span>
                </div>
                <div class="space-y-3">
                  <div v-for="deal in pipelineDeals.contracts" :key="deal.id" class="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg border-l-4 border-purple-500 cursor-pointer hover:shadow-md transition-shadow">
                    <div class="font-semibold text-brand-navy dark:text-white text-sm">{{ deal.clientName }}</div>
                    <div class="text-xs text-gray-500 mt-1">{{ deal.propertyType }}</div>
                    <div class="text-xs text-gray-600 dark:text-gray-400 mt-1">{{ deal.area }}</div>
                    <div class="flex items-center justify-between mt-2">
                      <span class="text-sm font-bold text-purple-600">{{ formatCurrency(deal.value) }}</span>
                      <span class="text-xs text-gray-500">{{ deal.daysInStage }}d</span>
                    </div>
                    <div class="text-xs text-gray-500 mt-1">Commission: {{ formatCurrency(deal.expectedCommission) }}</div>
                    <div class="flex items-center mt-2">
                      <div class="w-3 h-3 rounded-full mr-2" :class="userProfile.uses_digital_contracts ? 'bg-green-500' : 'bg-gray-400'"></div>
                      <span class="text-xs" :class="userProfile.uses_digital_contracts ? 'text-green-600' : 'text-gray-500'">
                        {{ userProfile.uses_digital_contracts ? 'Digital Contract' : 'Paper Contract' }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Closed Stage -->
              <div class="space-y-4">
                <div class="flex items-center justify-between">
                  <h3 class="font-semibold text-brand-navy dark:text-white">Closed</h3>
                  <span class="bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-400 text-xs font-semibold px-2 py-1 rounded-full">{{ pipelineDeals.closed.length }}</span>
                </div>
                <div class="space-y-3">
                  <div v-for="deal in pipelineDeals.closed" :key="deal.id" class="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg border-l-4 border-green-500 cursor-pointer hover:shadow-md transition-shadow">
                    <div class="font-semibold text-brand-navy dark:text-white text-sm">{{ deal.clientName }}</div>
                    <div class="text-xs text-gray-500 mt-1">{{ deal.propertyType }}</div>
                    <div class="text-xs text-gray-600 dark:text-gray-400 mt-1">{{ deal.area }}</div>
                    <div class="flex items-center justify-between mt-2">
                      <span class="text-sm font-bold text-green-600">{{ formatCurrency(deal.value) }}</span>
                      <span class="text-xs text-gray-500">{{ deal.closedDate }}</span>
                    </div>
                    <div class="text-xs text-green-600 mt-1 font-semibold">Earned: {{ formatCurrency(deal.earnedCommission) }}</div>
                    <div class="flex items-center mt-2">
                      <div class="w-3 h-3 rounded-full mr-2" :class="deal.paidCommission ? 'bg-green-500' : 'bg-yellow-500'"></div>
                      <span class="text-xs" :class="deal.paidCommission ? 'text-green-600' : 'text-yellow-600'">
                        {{ deal.paidCommission ? 'Commission Paid' : 'Payment Pending' }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Pipeline Analytics -->
          <div class="grid grid-cols-3 gap-6 mt-6">
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 class="font-semibold text-brand-navy dark:text-white mb-3">Conversion Rates</h3>
              <div class="space-y-2">
                <div class="flex justify-between text-sm">
                  <span class="text-gray-600 dark:text-gray-400">Lead → Viewing</span>
                  <span class="font-semibold text-brand-navy dark:text-white">{{ conversionRates.leadToViewing }}%</span>
                </div>
                <div class="flex justify-between text-sm">
                  <span class="text-gray-600 dark:text-gray-400">Viewing → Negotiation</span>
                  <span class="font-semibold text-brand-navy dark:text-white">{{ conversionRates.viewingToNegotiation }}%</span>
                </div>
                <div class="flex justify-between text-sm">
                  <span class="text-gray-600 dark:text-gray-400">Negotiation → Contract</span>
                  <span class="font-semibold text-brand-navy dark:text-white">{{ conversionRates.negotiationToContract }}%</span>
                </div>
                <div class="flex justify-between text-sm">
                  <span class="text-gray-600 dark:text-gray-400">Contract → Closed</span>
                  <span class="font-semibold text-brand-navy dark:text-white">{{ conversionRates.contractToClosed }}%</span>
                </div>
              </div>
            </div>

            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 class="font-semibold text-brand-navy dark:text-white mb-3">Time in Stages</h3>
              <div class="space-y-2">
                <div class="flex justify-between text-sm">
                  <span class="text-gray-600 dark:text-gray-400">Avg. Lead Time</span>
                  <span class="font-semibold text-brand-navy dark:text-white">{{ avgStageTime.lead }} days</span>
                </div>
                <div class="flex justify-between text-sm">
                  <span class="text-gray-600 dark:text-gray-400">Avg. Viewing Time</span>
                  <span class="font-semibold text-brand-navy dark:text-white">{{ avgStageTime.viewing }} days</span>
                </div>
                <div class="flex justify-between text-sm">
                  <span class="text-gray-600 dark:text-gray-400">Avg. Negotiation Time</span>
                  <span class="font-semibold text-brand-navy dark:text-white">{{ avgStageTime.negotiation }} days</span>
                </div>
                <div class="flex justify-between text-sm">
                  <span class="text-gray-600 dark:text-gray-400">Total Cycle Time</span>
                  <span class="font-semibold text-brand-navy dark:text-white">{{ avgStageTime.total }} days</span>
                </div>
              </div>
            </div>

            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 class="font-semibold text-brand-navy dark:text-white mb-3">This Month Performance</h3>
              <div class="space-y-2">
                <div class="flex justify-between text-sm">
                  <span class="text-gray-600 dark:text-gray-400">Deals Closed</span>
                  <span class="font-semibold text-green-600">{{ monthlyStats.closedDeals }}</span>
                </div>
                <div class="flex justify-between text-sm">
                  <span class="text-gray-600 dark:text-gray-400">Total Volume</span>
                  <span class="font-semibold text-brand-navy dark:text-white">{{ formatCurrency(monthlyStats.totalVolume) }}</span>
                </div>
                <div class="flex justify-between text-sm">
                  <span class="text-gray-600 dark:text-gray-400">Commission Earned</span>
                  <span class="font-semibold text-green-600">{{ formatCurrency(monthlyStats.commissionEarned) }}</span>
                </div>
                <div class="flex justify-between text-sm">
                  <span class="text-gray-600 dark:text-gray-400">Close Rate</span>
                  <span class="font-semibold text-brand-navy dark:text-white">{{ monthlyStats.closeRate }}%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Properties Tab -->
        <div v-if="activeTab === 'properties'" class="p-6">
          <div class="flex items-center justify-between mb-6">
            <h2 class="text-2xl font-bold text-brand-navy dark:text-white">Property Management</h2>
            <button class="bg-brand-red-light text-brand-navy px-6 py-3 rounded-lg font-semibold hover:bg-teal-300 transition-colors flex items-center space-x-2">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
              </svg>
              <span>Add New Property</span>
            </button>
          </div>

          <!-- Property Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div v-for="property in properties" :key="property.id" class="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-all duration-300">
              <!-- Property Image -->
              <div class="h-48 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-800 dark:to-blue-600 relative">
                <div class="absolute top-4 left-4">
                  <span :class="['px-3 py-1 rounded-full text-xs font-semibold',
                               property.status === 'Available' ? 'bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-400' :
                               property.status === 'Rented' ? 'bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-400' :
                               'bg-yellow-100 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-400']">
                    {{ property.status }}
                  </span>
                </div>
                <div class="absolute bottom-4 left-4">
                  <span class="bg-brand-red-light text-brand-navy px-3 py-1 rounded-full text-xs font-semibold">
                    {{ property.btsDistance }}
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
                    <span class="text-sm text-brand-navy dark:text-gray-400">/month</span>
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
                    <div class="text-lg font-bold text-brand-navy dark:text-white">{{ property.images }}</div>
                    <div class="text-xs text-brand-navy dark:text-gray-400">Photos</div>
                  </div>
                </div>

                <!-- Action Buttons -->
                <div class="flex items-center space-x-2">
                  <button class="flex-1 bg-brand-red-light text-brand-navy py-2 px-4 rounded-lg font-semibold hover:bg-teal-300 transition-colors text-sm">
                    Edit
                  </button>
                  <button class="flex-1 border border-gray-300 dark:border-gray-600 text-brand-navy dark:text-gray-300 py-2 px-4 rounded-lg font-semibold hover:border-gray-400 dark:hover:border-gray-500 transition-colors text-sm">
                    View
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Commissions Tab -->
        <div v-if="activeTab === 'commissions'" class="p-6">
          <div class="flex items-center justify-between mb-6">
            <h2 class="text-2xl font-bold text-brand-navy dark:text-white">Commission Management</h2>
            <div class="flex items-center space-x-4">
              <select class="border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-brand-navy dark:text-white rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-red-light">
                <option>All Time</option>
                <option>This Year</option>
                <option>Last 6 Months</option>
                <option>This Month</option>
              </select>
              <button class="bg-brand-red-light text-brand-navy px-6 py-3 rounded-lg font-semibold hover:bg-teal-300 transition-colors">
                Export Report
              </button>
            </div>
          </div>

          <!-- Commission Overview Cards -->
          <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm font-medium text-brand-navy dark:text-gray-400">Total Earned</p>
                  <p class="text-3xl font-bold text-brand-navy dark:text-white">{{ formatCurrency(totalCommissionsEarned) }}</p>
                  <p class="text-sm text-green-600 dark:text-green-400 mt-2">{{ formatCurrency(monthlyGrowth) }} this month</p>
                </div>
                <div class="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-xl flex items-center justify-center">
                  <svg class="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"/>
                  </svg>
                </div>
              </div>
            </div>

            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm font-medium text-brand-navy dark:text-gray-400">Pending Payment</p>
                  <p class="text-3xl font-bold text-brand-navy dark:text-white">{{ formatCurrency(pendingCommissionAmount) }}</p>
                  <p class="text-sm text-yellow-600 dark:text-yellow-400 mt-2">{{ pendingCommissionDeals }} deals pending</p>
                </div>
                <div class="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/20 rounded-xl flex items-center justify-center">
                  <svg class="w-6 h-6 text-yellow-600 dark:text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
              </div>
            </div>

            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm font-medium text-brand-navy dark:text-gray-400">Average Commission</p>
                  <p class="text-3xl font-bold text-brand-navy dark:text-white">{{ formatCurrency(averageCommission) }}</p>
                  <p class="text-sm text-blue-600 dark:text-blue-400 mt-2">Per deal closed</p>
                </div>
                <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-xl flex items-center justify-center">
                  <svg class="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                  </svg>
                </div>
              </div>
            </div>

            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm font-medium text-brand-navy dark:text-gray-400">Commission Rate</p>
                  <p class="text-3xl font-bold text-brand-navy dark:text-white">{{ averageCommissionRate }}%</p>
                  <p class="text-sm text-purple-600 dark:text-purple-400 mt-2">Average rate</p>
                </div>
                <div class="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-xl flex items-center justify-center">
                  <svg class="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <!-- Commission Breakdown -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <!-- Pending Commissions -->
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Pending Commissions</h3>
              <div class="space-y-4">
                <div v-for="pending in pendingCommissions" :key="pending.id" class="flex items-center justify-between p-4 bg-yellow-50 dark:bg-yellow-900/10 rounded-lg">
                  <div>
                    <div class="font-semibold text-brand-navy dark:text-white">{{ pending.clientName }}</div>
                    <div class="text-sm text-gray-600 dark:text-gray-400">{{ pending.propertyAddress }}</div>
                    <div class="text-xs text-gray-500">Deal closed: {{ pending.closedDate }}</div>
                  </div>
                  <div class="text-right">
                    <div class="font-bold text-lg text-yellow-600">{{ formatCurrency(pending.amount) }}</div>
                    <div class="text-xs text-gray-500">Expected: {{ pending.expectedDate }}</div>
                    <div class="flex items-center mt-2">
                      <div class="w-3 h-3 rounded-full mr-2" :class="userProfile.uses_digital_payments ? 'bg-green-500' : 'bg-gray-400'"></div>
                      <span class="text-xs" :class="userProfile.uses_digital_payments ? 'text-green-600' : 'text-gray-500'">
                        {{ userProfile.uses_digital_payments ? 'Digital Payment' : 'Manual Payment' }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Recent Payments -->
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Recent Payments</h3>
              <div class="space-y-4">
                <div v-for="payment in recentPayments" :key="payment.id" class="flex items-center justify-between p-4 bg-green-50 dark:bg-green-900/10 rounded-lg">
                  <div>
                    <div class="font-semibold text-brand-navy dark:text-white">{{ payment.clientName }}</div>
                    <div class="text-sm text-gray-600 dark:text-gray-400">{{ payment.propertyAddress }}</div>
                    <div class="text-xs text-gray-500">Paid: {{ payment.paidDate }}</div>
                  </div>
                  <div class="text-right">
                    <div class="font-bold text-lg text-green-600">{{ formatCurrency(payment.amount) }}</div>
                    <div class="text-xs text-green-600">✓ Received</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Detailed Commission History -->
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
            <div class="p-6 border-b border-gray-100 dark:border-gray-600">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white">Commission History</h3>
            </div>
            
            <div class="p-6">
              <div class="grid grid-cols-8 gap-4 text-sm font-medium text-brand-navy dark:text-gray-400 mb-4">
                <div>Client</div>
                <div>Property</div>
                <div>Deal Type</div>
                <div>Deal Value</div>
                <div>Commission Rate</div>
                <div>Commission Amount</div>
                <div>Status</div>
                <div>Payment Method</div>
              </div>
              
              <div class="space-y-3">
                <div v-for="commission in commissionHistory" :key="commission.id" class="grid grid-cols-8 gap-4 items-center p-4 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-xl transition-colors">
                  <div>
                    <div class="font-semibold text-brand-navy dark:text-white text-sm">{{ commission.clientName }}</div>
                    <div class="text-xs text-gray-500">{{ commission.dealDate }}</div>
                  </div>
                  <div>
                    <div class="text-sm text-brand-navy dark:text-white">{{ commission.propertyTitle }}</div>
                    <div class="text-xs text-gray-500">{{ commission.area }}</div>
                  </div>
                  <div>
                    <span class="px-2 py-1 text-xs font-semibold rounded-full" :class="commission.dealType === 'Rental' ? 'bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-400' : 'bg-purple-100 dark:bg-purple-900/20 text-purple-800 dark:text-purple-400'">
                      {{ commission.dealType }}
                    </span>
                  </div>
                  <div class="font-semibold text-brand-navy dark:text-white">{{ formatCurrency(commission.dealValue) }}</div>
                  <div class="text-brand-navy dark:text-white">{{ commission.commissionRate }}%</div>
                  <div class="font-bold text-green-600">{{ formatCurrency(commission.commissionAmount) }}</div>
                  <div>
                    <span class="px-2 py-1 text-xs font-semibold rounded-full" :class="commission.status === 'Paid' ? 'bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-400' : 'bg-yellow-100 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-400'">
                      {{ commission.status }}
                    </span>
                  </div>
                  <div class="flex items-center">
                    <div class="w-3 h-3 rounded-full mr-2" :class="commission.digitalPayment ? 'bg-green-500' : 'bg-gray-400'"></div>
                    <span class="text-xs" :class="commission.digitalPayment ? 'text-green-600' : 'text-gray-500'">
                      {{ commission.digitalPayment ? 'Digital' : 'Manual' }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Transactions Tab -->
        <div v-if="activeTab === 'transactions'" class="p-6">
          <div class="flex items-center justify-between mb-6">
            <h2 class="text-2xl font-bold text-brand-navy dark:text-white">Transaction Management</h2>
            <div class="text-sm text-brand-navy dark:text-gray-400">
              Active Transactions: <span class="font-bold text-lg text-brand-red-light">{{ activeTransactions }}</span>
            </div>
          </div>

          <!-- Transaction Status Overview -->
          <div class="grid grid-cols-4 gap-6 mb-6">
            <div class="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg border border-gray-100 dark:border-gray-700 text-center">
              <div class="text-2xl font-bold text-blue-600">{{ transactionStats.documentation }}</div>
              <div class="text-sm text-gray-500">Documentation</div>
            </div>
            <div class="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg border border-gray-100 dark:border-gray-700 text-center">
              <div class="text-2xl font-bold text-yellow-600">{{ transactionStats.deposits }}</div>
              <div class="text-sm text-gray-500">Deposit Management</div>
            </div>
            <div class="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg border border-gray-100 dark:border-gray-700 text-center">
              <div class="text-2xl font-bold text-orange-600">{{ transactionStats.maintenance }}</div>
              <div class="text-sm text-gray-500">Maintenance Requests</div>
            </div>
            <div class="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg border border-gray-100 dark:border-gray-700 text-center">
              <div class="text-2xl font-bold text-green-600">{{ transactionStats.completed }}</div>
              <div class="text-sm text-gray-500">Completed</div>
            </div>
          </div>

          <!-- Active Transactions -->
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
            <div class="p-6 border-b border-gray-100 dark:border-gray-600">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white">Active Transactions</h3>
            </div>
            <div class="p-6">
              <div class="space-y-4">
                <div v-for="transaction in activeTransactionsList" :key="transaction.id" class="p-4 border border-gray-200 dark:border-gray-600 rounded-lg">
                  <div class="flex items-center justify-between mb-2">
                    <h4 class="font-semibold text-brand-navy dark:text-white">{{ transaction.clientName }}</h4>
                    <span :class="['px-2 py-1 rounded text-xs font-semibold', transaction.urgency === 'High' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800']">
                      {{ transaction.urgency }} Priority
                    </span>
                  </div>
                  <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">{{ transaction.property }}</p>
                  <div class="flex items-center justify-between">
                    <span class="text-sm text-brand-navy dark:text-white">{{ transaction.stage }}</span>
                    <div class="flex items-center space-x-2">
                      <div class="w-3 h-3 rounded-full" :class="userProfile.uses_digital_contracts ? 'bg-green-500' : 'bg-gray-400'"></div>
                      <span class="text-xs" :class="userProfile.uses_digital_contracts ? 'text-green-600' : 'text-gray-500'">
                        {{ userProfile.uses_digital_contracts ? 'Digital Contract' : 'Paper Contract' }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Communications Tab -->
        <div v-if="activeTab === 'communications'" class="p-6">
          <div class="flex items-center justify-between mb-6">
            <h2 class="text-2xl font-bold text-brand-navy dark:text-white">Communications Center</h2>
            <button class="bg-brand-red-light text-brand-navy px-6 py-3 rounded-lg font-semibold hover:bg-teal-300 transition-colors">
              New Message
            </button>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <!-- Message List -->
            <div class="lg:col-span-1 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
              <div class="p-4 border-b border-gray-100 dark:border-gray-600">
                <h3 class="font-semibold text-brand-navy dark:text-white">Recent Conversations</h3>
              </div>
              <div class="space-y-2 p-4">
                <div v-for="conversation in conversations" :key="conversation.id" class="p-3 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg cursor-pointer">
                  <div class="flex items-center space-x-3">
                    <div class="w-8 h-8 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-800 dark:to-blue-600 rounded-full"></div>
                    <div class="flex-1">
                      <div class="font-semibold text-brand-navy dark:text-white text-sm">{{ conversation.name }}</div>
                      <div class="text-xs text-gray-500 truncate">{{ conversation.lastMessage }}</div>
                    </div>
                    <div class="text-xs text-gray-500">{{ conversation.time }}</div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Communication Stats -->
            <div class="lg:col-span-2 space-y-6">
              <div class="grid grid-cols-3 gap-4">
                <div class="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg border border-gray-100 dark:border-gray-700 text-center">
                  <div class="text-2xl font-bold text-brand-navy dark:text-white">{{ unreadMessages }}</div>
                  <div class="text-sm text-gray-500">Unread Messages</div>
                </div>
                <div class="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg border border-gray-100 dark:border-gray-700 text-center">
                  <div class="text-2xl font-bold text-brand-navy dark:text-white">{{ avgResponseTime }}</div>
                  <div class="text-sm text-gray-500">Avg Response Time</div>
                </div>
                <div class="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg border border-gray-100 dark:border-gray-700 text-center">
                  <div class="text-2xl font-bold text-brand-navy dark:text-white">{{ scheduledViewings }}</div>
                  <div class="text-sm text-gray-500">Scheduled Viewings</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Analytics Tab -->
        <div v-if="activeTab === 'analytics'" class="p-6">
          <h2 class="text-2xl font-bold text-brand-navy dark:text-white mb-6">Performance Analytics</h2>
          
          <!-- Analytics Cards -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Property Performance</h3>
              <div class="space-y-4">
                <div class="flex justify-between items-center">
                  <span class="text-sm text-brand-navy dark:text-gray-400">Avg Views</span>
                  <span class="font-semibold text-brand-navy dark:text-white">77</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-sm text-brand-navy dark:text-gray-400">Conversion Rate</span>
                  <span class="font-semibold text-brand-navy dark:text-white">12.3%</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-sm text-brand-navy dark:text-gray-400">Avg Response Time</span>
                  <span class="font-semibold text-brand-navy dark:text-white">1.2 hours</span>
                </div>
              </div>
            </div>

            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Revenue Tracking</h3>
              <div class="space-y-4">
                <div class="flex justify-between items-center">
                  <span class="text-sm text-brand-navy dark:text-gray-400">This Month</span>
                  <span class="font-semibold text-brand-navy dark:text-white">{{ formatCurrency(85000) }}</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-sm text-brand-navy dark:text-gray-400">Last Month</span>
                  <span class="font-semibold text-brand-navy dark:text-white">{{ formatCurrency(70000) }}</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-sm text-brand-navy dark:text-gray-400">Growth</span>
                  <span class="font-semibold text-green-600 dark:text-green-400">+21.4%</span>
                </div>
              </div>
            </div>

            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Client Satisfaction</h3>
              <div class="space-y-4">
                <div class="flex justify-between items-center">
                  <span class="text-sm text-brand-navy dark:text-gray-400">Avg Rating</span>
                  <div class="flex items-center space-x-1">
                    <span class="font-semibold text-brand-navy dark:text-white">4.8</span>
                    <svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  </div>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-sm text-brand-navy dark:text-gray-400">Total Reviews</span>
                  <span class="font-semibold text-brand-navy dark:text-white">127</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-sm text-brand-navy dark:text-gray-400">Recommendation Rate</span>
                  <span class="font-semibold text-brand-navy dark:text-white">96%</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Charts Section -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <!-- Revenue Trend Chart -->
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Revenue Trend</h3>
              <VChart ref="revenueChart" :option="revenueChartOption" class="h-64" />
            </div>

            <!-- Property Performance Chart -->
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Property Performance</h3>
              <VChart ref="propertyChart" :option="propertyChartOption" class="h-64" />
            </div>
          </div>

          <!-- BTS Proximity Performance Chart -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <!-- BTS Station Performance -->
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">BTS Proximity Performance</h3>
              <VChart ref="btsChart" :option="btsChartOption" class="h-64" />
            </div>

            <!-- Inquiry Response Time -->
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Response Time Distribution</h3>
              <VChart ref="responseChart" :option="responseTimeChartOption" class="h-64" />
            </div>
          </div>
        </div>
        <!-- FIXED: Professional Profile Tab -->
        <div v-if="activeTab === 'profile'" class="p-6">
          <div class="flex items-center justify-between mb-6">
            <h2 class="text-2xl font-bold text-brand-navy dark:text-white">Professional Profile & Verification</h2>
            <div class="flex items-center space-x-4">
              <div class="text-sm text-brand-navy dark:text-gray-400">
                Profile Completion: <span class="font-bold text-lg" :class="getProfileCompletionColor(profileCompletionScore)">{{ profileCompletionScore }}%</span>
              </div>
              <button class="bg-brand-red-light text-brand-navy px-6 py-3 rounded-lg font-semibold hover:bg-teal-300 transition-colors">
                Save Changes
              </button>
            </div>
          </div>

          <!-- FIXED: ThaiKeys Integration Status -->
          <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 mb-6">
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white">ThaiKeys Integration & Verification</h3>
              <div class="flex items-center space-x-2">
                <div class="relative w-16 h-16">
                  <svg class="w-16 h-16 transform -rotate-90" viewBox="0 0 36 36">
                    <path class="text-gray-200 dark:text-gray-600" stroke="currentColor" stroke-width="2" fill="none" d="M18 2.0845a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                    <path :class="getScoreColor(integrationScore)" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" :stroke-dasharray="`${integrationScore}, 100`" d="M18 2.0845a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                  </svg>
                  <div class="absolute inset-0 flex items-center justify-center">
                    <span class="text-sm font-bold text-brand-navy dark:text-white">{{ integrationScore }}%</span>
                  </div>
                </div>
                <span :class="getVerificationBadgeClass(integrationScore)" class="px-3 py-1 rounded-lg text-sm font-semibold">
                  {{ getVerificationLevel(integrationScore) }}
                </span>
              </div>
            </div>

            <div class="grid grid-cols-2 gap-6">
              <!-- Digital Services -->
              <div class="space-y-4">
                <h4 class="font-semibold text-brand-navy dark:text-white">Digital Services</h4>
                
                <div class="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-600 rounded-lg">
                  <div class="flex items-center space-x-3">
                    <svg class="w-5 h-5" :class="userProfile.uses_digital_payments ? 'text-green-500' : 'text-gray-400'" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M2 10h20v8a2 2 0 01-2 2H4a2 2 0 01-2-2v-8zm18-4H4a2 2 0 00-2 2v2h20V8a2 2 0 00-2-2zM8 16h4v2H8v-2z"/>
                    </svg>
                    <div>
                      <div class="font-medium text-brand-navy dark:text-white">Digital Payments</div>
                      <div class="text-sm text-gray-500">Accept credit cards, bank transfers</div>
                    </div>
                  </div>
                  <div class="flex items-center space-x-2">
                    <span class="text-sm" :class="userProfile.uses_digital_payments ? 'text-green-600' : 'text-gray-500'">
                      {{ userProfile.uses_digital_payments ? 'Active (+25 pts)' : 'Disabled' }}
                    </span>
                    <button v-if="!userProfile.uses_digital_payments" @click="showDigitalPaymentModal = true" class="bg-brand-red-light text-brand-navy px-3 py-1 rounded text-sm hover:bg-teal-300">
                      Enable
                    </button>
                  </div>
                </div>

                <div class="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-600 rounded-lg">
                  <div class="flex items-center space-x-3">
                    <svg class="w-5 h-5" :class="userProfile.uses_digital_contracts ? 'text-green-500' : 'text-gray-400'" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zM6 20V4h7v5h5v11H6z"/>
                    </svg>
                    <div>
                      <div class="font-medium text-brand-navy dark:text-white">E-Signature Contracts</div>
                      <div class="text-sm text-gray-500">Digital contract signing via Certinal</div>
                    </div>
                  </div>
                  <div class="flex items-center space-x-2">
                    <span class="text-sm" :class="userProfile.uses_digital_contracts ? 'text-green-600' : 'text-gray-500'">
                      {{ userProfile.uses_digital_contracts ? 'Active (+20 pts)' : 'Disabled' }}
                    </span>
                    <button v-if="!userProfile.uses_digital_contracts" @click="showDigitalContractModal = true" class="bg-brand-red-light text-brand-navy px-3 py-1 rounded text-sm hover:bg-teal-300">
                      Enable
                    </button>
                  </div>
                </div>
              </div>

              <!-- Verification Status -->
              <div class="space-y-4">
                <h4 class="font-semibold text-brand-navy dark:text-white">Verification Status</h4>
                
                <div class="space-y-3">
                  <div class="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div class="flex items-center space-x-2">
                      <svg class="w-4 h-4" :class="userProfile.id_verified ? 'text-green-500' : 'text-gray-400'" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                      <span class="text-sm text-brand-navy dark:text-white">ID Verification</span>
                    </div>
                    <span class="text-xs" :class="userProfile.id_verified ? 'text-green-600' : 'text-gray-500'">
                      {{ userProfile.id_verified ? '✓ Verified (+10 pts)' : 'Pending' }}
                    </span>
                  </div>

                  <div class="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div class="flex items-center space-x-2">
                      <svg class="w-4 h-4" :class="userProfile.phone_verified ? 'text-green-500' : 'text-gray-400'" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                      </svg>
                      <span class="text-sm text-brand-navy dark:text-white">Phone Verification</span>
                    </div>
                    <span class="text-xs" :class="userProfile.phone_verified ? 'text-green-600' : 'text-gray-500'">
                      {{ userProfile.phone_verified ? '✓ Verified (+5 pts)' : 'Pending' }}
                    </span>
                  </div>

                  <div class="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div class="flex items-center space-x-2">
                      <svg class="w-4 h-4" :class="userProfile.banking_verified ? 'text-green-500' : 'text-gray-400'" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M11.5 1L2 6v2h20V6l-9.5-5zM2 10v10a1 1 0 001 1h18a1 1 0 001-1V10H2zm8 7.5V14h4v3.5h-4z"/>
                      </svg>
                      <span class="text-sm text-brand-navy dark:text-white">Banking Details</span>
                    </div>
                    <span class="text-xs" :class="userProfile.banking_verified ? 'text-green-600' : 'text-gray-500'">
                      {{ userProfile.banking_verified ? '✓ Verified (+10 pts)' : 'Setup Required' }}
                    </span>
                  </div>

                  <div class="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div class="flex items-center space-x-2">
                      <svg class="w-4 h-4" :class="userProfile.license_verified ? 'text-green-500' : 'text-gray-400'" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zM6 20V4h7v5h5v11H6z"/>
                      </svg>
                      <span class="text-sm text-brand-navy dark:text-white">Agent License</span>
                    </div>
                    <span class="text-xs" :class="userProfile.license_verified ? 'text-green-600' : 'text-gray-500'">
                      {{ userProfile.license_verified ? '✓ Verified (+15 pts)' : 'Upload Required' }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Basic Profile Information -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <!-- Personal Information -->
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Personal Information</h3>
              <div class="space-y-4">
                <div>
                  <label class="block text-sm font-medium text-brand-navy dark:text-gray-300 mb-2">Full Name</label>
                  <input type="text" v-model="agentProfile.fullName" class="w-full px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-red-light bg-white dark:bg-gray-700 text-brand-navy dark:text-white">
                </div>
                <div>
                  <label class="block text-sm font-medium text-brand-navy dark:text-gray-300 mb-2">Email</label>
                  <input type="email" v-model="agentProfile.email" class="w-full px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-red-light bg-white dark:bg-gray-700 text-brand-navy dark:text-white">
                </div>
                <div>
                  <label class="block text-sm font-medium text-brand-navy dark:text-gray-300 mb-2">Phone Number</label>
                  <input type="tel" v-model="agentProfile.phone" class="w-full px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-red-light bg-white dark:bg-gray-700 text-brand-navy dark:text-white">
                </div>
                <div>
                  <label class="block text-sm font-medium text-brand-navy dark:text-gray-300 mb-2">Years of Experience</label>
                  <select v-model="agentProfile.experience" class="w-full px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-red-light bg-white dark:bg-gray-700 text-brand-navy dark:text-white">
                    <option value="0-1">0-1 years</option>
                    <option value="2-5">2-5 years</option>
                    <option value="6-10">6-10 years</option>
                    <option value="10+">10+ years</option>
                  </select>
                </div>
              </div>
            </div>

            <!-- Professional Details -->
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Professional Details</h3>
              <div class="space-y-4">
                <div>
                  <label class="block text-sm font-medium text-brand-navy dark:text-gray-300 mb-2">License Number</label>
                  <input type="text" v-model="agentProfile.licenseNumber" class="w-full px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-red-light bg-white dark:bg-gray-700 text-brand-navy dark:text-white">
                </div>
                <div>
                  <label class="block text-sm font-medium text-brand-navy dark:text-gray-300 mb-2">Specialization Areas</label>
                  <div class="grid grid-cols-2 gap-2">
                    <label v-for="specialization in availableSpecializations" :key="specialization" class="flex items-center">
                      <input type="checkbox" :value="specialization" v-model="agentProfile.specializations" class="mr-2">
                      <span class="text-sm text-brand-navy dark:text-white">{{ specialization }}</span>
                    </label>
                  </div>
                </div>
                <div>
                  <label class="block text-sm font-medium text-brand-navy dark:text-gray-300 mb-2">Preferred Commission Rate</label>
                  <div class="flex items-center space-x-2">
                    <input type="number" v-model="agentProfile.preferredCommissionRate" min="1" max="10" step="0.5" class="w-24 px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-red-light bg-white dark:bg-gray-700 text-brand-navy dark:text-white">
                    <span class="text-brand-navy dark:text-white">%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Public Profile Preview -->
          <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 mb-6">
            <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Public Profile Preview</h3>
            <div class="border border-gray-200 dark:border-gray-600 rounded-lg p-6">
              <div class="flex items-start space-x-4">
                <div class="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-800 dark:to-blue-600 rounded-full flex items-center justify-center">
                  <span class="text-2xl font-bold text-blue-800 dark:text-blue-200">{{ agentProfile.initials }}</span>
                </div>
                <div class="flex-1">
                  <div class="flex items-center space-x-3 mb-2">
                    <h4 class="text-xl font-bold text-brand-navy dark:text-white">{{ agentProfile.fullName }}</h4>
                    <span :class="getVerificationBadgeClass(integrationScore)" class="px-2 py-1 rounded text-xs font-semibold">
                      {{ getVerificationLevel(integrationScore) }}
                    </span>
                  </div>
                  <p class="text-gray-600 dark:text-gray-400 mb-2">Individual Agent • {{ agentProfile.experience }} experience</p>
                  <div class="flex items-center space-x-4 mb-3">
                    <div class="flex items-center">
                      <div class="flex">
                        <svg v-for="i in 5" :key="i" class="w-4 h-4" :class="i <= agentRating ? 'text-yellow-400' : 'text-gray-300'" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                      </div>
                      <span class="ml-1 text-sm text-gray-600 dark:text-gray-400">{{ agentRating }}.0 ({{ agentReviews }} reviews)</span>
                    </div>
                    <span class="text-sm text-gray-600 dark:text-gray-400">{{ totalDealsCompleted }} deals completed</span>
                  </div>
                  <div class="flex flex-wrap gap-2 mb-3">
                    <span v-for="spec in agentProfile.specializations" :key="spec" class="bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-400 px-2 py-1 rounded text-xs">
                      {{ spec }}
                    </span>
                  </div>
                  <div class="flex space-x-4 text-sm">
                    <div v-if="userProfile.uses_digital_payments" class="flex items-center text-green-600">
                      <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M2 10h20v8a2 2 0 01-2 2H4a2 2 0 01-2-2v-8zm18-4H4a2 2 0 00-2 2v2h20V8a2 2 0 00-2-2z"/>
                      </svg>
                      Digital Payments
                    </div>
                    <div v-if="userProfile.uses_digital_contracts" class="flex items-center text-green-600">
                      <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z"/>
                      </svg>
                      E-Signatures
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Performance Metrics -->
          <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
            <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Performance Metrics</h3>
            <div class="grid grid-cols-4 gap-6">
              <div class="text-center">
                <div class="text-2xl font-bold text-brand-navy dark:text-white">{{ agentRating }}.0</div>
                <div class="text-sm text-gray-500">Average Rating</div>
              </div>
              <div class="text-center">
                <div class="text-2xl font-bold text-brand-navy dark:text-white">{{ averageResponseTime }}</div>
                <div class="text-sm text-gray-500">Avg Response Time</div>
              </div>
              <div class="text-center">
                <div class="text-2xl font-bold text-brand-navy dark:text-white">{{ totalDealsCompleted }}</div>
                <div class="text-sm text-gray-500">Deals Completed</div>
              </div>
              <div class="text-center">
                <div class="text-2xl font-bold text-brand-navy dark:text-white">{{ clientSatisfactionRate }}%</div>
                <div class="text-sm text-gray-500">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
    <!-- Digital Payment Modal -->
    <div v-if="showDigitalPaymentModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div class="bg-white dark:bg-gray-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div class="p-6 border-b border-gray-200 dark:border-gray-600">
          <div class="flex items-center justify-between">
            <h3 class="text-xl font-semibold text-brand-navy dark:text-white">Enable Digital Payments</h3>
            <button @click="showDigitalPaymentModal = false" class="text-brand-navy dark:text-gray-400 hover:text-brand-red-light">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>
        </div>
        <div class="p-6">
          <p class="text-brand-navy dark:text-gray-300 mb-4">Accept secure digital payments from clients and increase your trust score by +25 points.</p>
          <div class="space-y-3">
            <div class="flex items-center justify-between p-3 border border-gray-200 dark:border-gray-600 rounded">
              <span class="text-brand-navy dark:text-white">Credit & Debit Cards</span>
              <span class="text-green-600">2.9% fee</span>
            </div>
            <div class="flex items-center justify-between p-3 border border-gray-200 dark:border-gray-600 rounded">
              <span class="text-brand-navy dark:text-white">Bank Transfers</span>
              <span class="text-green-600">0.5% fee</span>
            </div>
          </div>
          <button @click="enableDigitalPayments" class="w-full bg-brand-red-light text-brand-navy py-3 rounded-lg font-semibold hover:bg-teal-300 mt-4">
            Enable Digital Payments
          </button>
        </div>
      </div>
    </div>

    <!-- Digital Contract Modal -->
    <div v-if="showDigitalContractModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div class="bg-white dark:bg-gray-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div class="p-6 border-b border-gray-200 dark:border-gray-600">
          <div class="flex items-center justify-between">
            <h3 class="text-xl font-semibold text-brand-navy dark:text-white">Enable E-Signature Contracts</h3>
            <button @click="showDigitalContractModal = false" class="text-brand-navy dark:text-gray-400 hover:text-brand-red-light">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>
        </div>
        <div class="p-6">
          <p class="text-brand-navy dark:text-gray-300 mb-4">Enable secure digital contract signing via Certinal and increase your trust score by +20 points.</p>
          <div class="space-y-3">
            <div class="flex items-center p-3 border border-gray-200 dark:border-gray-600 rounded">
              <svg class="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
              </svg>
              <span class="text-brand-navy dark:text-white">Legally binding digital signatures</span>
            </div>
            <div class="flex items-center p-3 border border-gray-200 dark:border-gray-600 rounded">
              <svg class="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
              </svg>
              <span class="text-brand-navy dark:text-white">Faster deal closures</span>
            </div>
            <div class="flex items-center p-3 border border-gray-200 dark:border-gray-600 rounded">
              <svg class="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
              </svg>
              <span class="text-brand-navy dark:text-white">Document audit trail</span>
            </div>
          </div>
          <button @click="enableDigitalContracts" class="w-full bg-brand-red-light text-brand-navy py-3 rounded-lg font-semibold hover:bg-teal-300 mt-4">
            Enable E-Signatures
          </button>
        </div>
      </div>
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
  title: 'Individual Agent Dashboard - ThaiKeys',
  meta: [
    {
      name: 'description',
      content: 'Professional individual agent dashboard for managing properties, clients, deals, and commissions on ThaiKeys platform.'
    }
  ]
})

// Reactive data
const searchQuery = ref('')
const clientSearchQuery = ref('')
const activeTab = ref('overview')
const showDigitalPaymentModal = ref(false)
const showDigitalContractModal = ref(false)
const unreadNotifications = ref(3)
const unreadMessages = ref(7)

// Chart refs
const revenueChart = ref(null)
const propertyChart = ref(null)
const btsChart = ref(null)
const responseChart = ref(null)

// User profile with integration flags
const userProfile = ref({
  is_individual_agent: true,
  has_active_clients: true,
  uses_digital_payments: false,
  uses_digital_contracts: false,
  id_verified: true,
  phone_verified: true,
  email_verified: true,
  banking_verified: false,
  license_verified: true
})

// Agent profile data
const agentProfile = ref({
  fullName: 'Sarah Wilson',
  email: 'sarah.wilson@email.com',
  phone: '+66 2 123 4567',
  experience: '6-10',
  licenseNumber: 'TH-RE-2024-001234',
  specializations: ['Condominiums', 'Luxury Properties', 'BTS Areas'],
  preferredCommissionRate: 3.0,
  initials: 'SW'
})

const availableSpecializations = [
  'Condominiums', 'Houses', 'Townhouses', 'Luxury Properties', 
  'BTS Areas', 'Investment Properties', 'Commercial', 'Student Housing'
]

// Dashboard statistics
const totalProperties = ref(24)
const totalClients = ref(47)
const activeDeals = ref(8)
const activeTransactions = ref(3)
const pendingCommissionAmount = ref(125000)
const monthlyCommissions = ref(85000)
const totalCommissionsEarned = ref(650000)
const averageCommission = ref(28500)
const averageCommissionRate = ref(3.2)
const monthlyGrowth = ref(15000)
const pendingCommissionDeals = ref(3)
const totalPipelineValue = ref(2850000)
const activeClientDeals = ref(12)
const avgClientSatisfaction = ref(94)
const avgResponseTime = ref('1.2h')
const averageResponseTime = ref('1.2h')
const agentRating = ref(4.8)
const agentReviews = ref(127)
const totalDealsCompleted = ref(89)
const clientSatisfactionRate = ref(96)
const scheduledViewings = ref(5)

// Additional data for missing tabs
const conversations = ref([
  { id: 1, name: 'John Smith', lastMessage: 'When can we schedule a viewing?', time: '2h' },
  { id: 2, name: 'Maria Garcia', lastMessage: 'Thank you for the property details', time: '5h' },
  { id: 3, name: 'David Chen', lastMessage: 'Is the price negotiable?', time: '1d' }
])

const transactionStats = ref({
  documentation: 2,
  deposits: 1,
  maintenance: 3,
  completed: 2
})

const activeTransactionsList = ref([
  {
    id: 1,
    clientName: 'Emma Davis',
    property: 'Townhouse, On Nut',
    stage: 'Awaiting Deposit',
    urgency: 'High'
  },
  {
    id: 2,
    clientName: 'Frank Miller',
    property: 'Condo, Nana',
    stage: 'Contract Signing',
    urgency: 'Medium'
  }
])

const properties = ref([
  {
    id: 1,
    title: 'Luxury 2BR Condo Near Asok',
    location: 'Sukhumvit 21, Asok',
    price: '฿45,000',
    bedrooms: 2,
    bathrooms: 2,
    status: 'Available',
    views: 234,
    inquiries: 8,
    images: 12,
    btsDistance: '2 min to Asok BTS'
  },
  {
    id: 2,
    title: 'Modern Studio Phrom Phong',
    location: 'Sukhumvit 39, Phrom Phong',
    price: '฿28,000',
    bedrooms: 1,
    bathrooms: 1,
    status: 'Available',
    views: 156,
    inquiries: 5,
    images: 8,
    btsDistance: '1 min to Phrom Phong BTS'
  },
  {
    id: 3,
    title: 'Spacious 3BR House Thonglor',
    location: 'Thonglor 25, Bangkok',
    price: '฿85,000',
    bedrooms: 3,
    bathrooms: 3,
    status: 'Rented',
    views: 89,
    inquiries: 12,
    images: 15,
    btsDistance: '5 min to Thonglor BTS'
  }
])

// Integration score calculation
const integrationScore = computed(() => {
  let score = 0
  
  // Basic verification (30 points)
  if (userProfile.value.id_verified) score += 10
  if (userProfile.value.phone_verified) score += 5
  if (userProfile.value.email_verified) score += 5
  if (userProfile.value.banking_verified) score += 10
  
  // Professional credentials (20 points)
  if (userProfile.value.license_verified) score += 15
  if (agentProfile.value.licenseNumber) score += 5
  
  // Digital adoption (50 points)
  if (userProfile.value.uses_digital_payments) score += 25
  if (userProfile.value.uses_digital_contracts) score += 20
  if (agentProfile.value.specializations.length > 0) score += 5
  
  return Math.min(score, 100)
})

const profileCompletionScore = computed(() => {
  let score = 0
  if (agentProfile.value.fullName) score += 15
  if (agentProfile.value.email) score += 15
  if (agentProfile.value.phone) score += 15
  if (agentProfile.value.licenseNumber) score += 20
  if (agentProfile.value.specializations.length > 0) score += 15
  if (userProfile.value.banking_verified) score += 20
  return score
})

const profileComplete = computed(() => profileCompletionScore.value >= 80)

// Recent deal activity
const recentDealActivity = ref([
  {
    id: 1,
    clientName: 'John Smith',
    property: 'Luxury 2BR Condo Near Asok',
    time: '2 hours ago',
    stage: 'Contract',
    expectedCommission: 45000
  },
  {
    id: 2,
    clientName: 'Maria Garcia',
    property: 'Modern Studio Phrom Phong',
    time: '5 hours ago',
    stage: 'Negotiation',
    expectedCommission: 28000
  },
  {
    id: 3,
    clientName: 'David Chen',
    property: 'Spacious 3BR House Thonglor',
    time: '1 day ago',
    stage: 'Contract',
    expectedCommission: 85000
  }
])

// CRM clients data
const clients = ref([
  {
    id: 1,
    name: 'John Smith',
    email: 'john.smith@email.com',
    initials: 'JS',
    status: 'Active',
    propertyType: 'Condo',
    preferredArea: 'Sukhumvit',
    budgetMin: 30000,
    budgetMax: 50000,
    dealType: 'Rental',
    lastContact: '2 hours ago',
    contactMethod: 'WhatsApp'
  },
  {
    id: 2,
    name: 'Maria Garcia',
    email: 'maria.garcia@email.com',
    initials: 'MG',
    status: 'Negotiating',
    propertyType: 'Studio',
    preferredArea: 'Phrom Phong',
    budgetMin: 25000,
    budgetMax: 35000,
    dealType: 'Rental',
    lastContact: '1 day ago',
    contactMethod: 'Line'
  },
  {
    id: 3,
    name: 'David Chen',
    email: 'david.chen@email.com',
    initials: 'DC',
    status: 'Prospective',
    propertyType: 'House',
    preferredArea: 'Thonglor',
    budgetMin: 80000,
    budgetMax: 120000,
    dealType: 'Purchase',
    lastContact: '3 days ago',
    contactMethod: 'Email'
  }
])

// Pipeline statistics
const pipelineStats = ref({
  leads: 12,
  leadsValue: 1200000,
  viewings: 8,
  viewingsValue: 950000,
  negotiations: 5,
  negotiationsValue: 680000,
  contracts: 3,
  contractsValue: 420000,
  closed: 2,
  closedValue: 180000
})

// Pipeline deals by stage
const pipelineDeals = ref({
  leads: [
    {
      id: 1,
      clientName: 'Alice Johnson',
      propertyType: 'Condo',
      area: 'Asok',
      value: 45000,
      expectedCommission: 13500,
      daysInStage: 3
    },
    {
      id: 2,
      clientName: 'Bob Wilson',
      propertyType: 'House',
      area: 'Thonglor',
      value: 120000,
      expectedCommission: 36000,
      daysInStage: 1
    }
  ],
  viewings: [
    {
      id: 3,
      clientName: 'Carol Brown',
      propertyType: 'Studio',
      area: 'Phrom Phong',
      value: 28000,
      expectedCommission: 8400,
      daysInStage: 5,
      nextViewing: 'Tomorrow 2PM'
    }
  ],
  negotiations: [
    {
      id: 4,
      clientName: 'David Lee',
      propertyType: 'Condo',
      area: 'Ekkamai',
      value: 55000,
      expectedCommission: 16500,
      daysInStage: 7,
      negotiationStatus: 'Price discussion'
    }
  ],
  contracts: [
    {
      id: 5,
      clientName: 'Emma Davis',
      propertyType: 'Townhouse',
      area: 'On Nut',
      value: 75000,
      expectedCommission: 22500,
      daysInStage: 2
    }
  ],
  closed: [
    {
      id: 6,
      clientName: 'Frank Miller',
      propertyType: 'Condo',
      area: 'Nana',
      value: 42000,
      expectedCommission: 12600,
      earnedCommission: 12600,
      closedDate: '2 days ago',
      paidCommission: true
    }
  ]
})

// Analytics data
const conversionRates = ref({
  leadToViewing: 67,
  viewingToNegotiation: 63,
  negotiationToContract: 60,
  contractToClosed: 85
})

const avgStageTime = ref({
  lead: 5,
  viewing: 8,
  negotiation: 12,
  total: 25
})

const monthlyStats = ref({
  closedDeals: 6,
  totalVolume: 420000,
  commissionEarned: 85000,
  closeRate: 73
})

// Commission data
const pendingCommissions = ref([
  {
    id: 1,
    clientName: 'Emma Davis',
    propertyAddress: 'Townhouse, On Nut',
    amount: 22500,
    closedDate: '3 days ago',
    expectedDate: 'Next week'
  },
  {
    id: 2,
    clientName: 'Frank Miller',
    propertyAddress: 'Condo, Nana',
    amount: 12600,
    closedDate: '1 week ago',
    expectedDate: 'This week'
  }
])

const recentPayments = ref([
  {
    id: 1,
    clientName: 'John Smith',
    propertyAddress: 'Condo, Asok',
    amount: 45000,
    paidDate: '1 week ago'
  },
  {
    id: 2,
    clientName: 'Maria Garcia',
    propertyAddress: 'Studio, Phrom Phong',
    amount: 28000,
    paidDate: '2 weeks ago'
  }
])

const commissionHistory = ref([
  {
    id: 1,
    clientName: 'John Smith',
    dealDate: '2024-03-15',
    propertyTitle: 'Luxury 2BR Condo',
    area: 'Asok',
    dealType: 'Rental',
    dealValue: 45000,
    commissionRate: 3.0,
    commissionAmount: 45000,
    status: 'Paid',
    digitalPayment: true
  },
  {
    id: 2,
    clientName: 'Maria Garcia',
    dealDate: '2024-03-10',
    propertyTitle: 'Modern Studio',
    area: 'Phrom Phong',
    dealType: 'Rental',
    dealValue: 28000,
    commissionRate: 3.0,
    commissionAmount: 28000,
    status: 'Paid',
    digitalPayment: false
  },
  {
    id: 3,
    clientName: 'Emma Davis',
    dealDate: '2024-03-20',
    propertyTitle: 'Spacious Townhouse',
    area: 'On Nut',
    dealType: 'Purchase',
    dealValue: 7500000,
    commissionRate: 3.0,
    commissionAmount: 225000,
    status: 'Pending',
    digitalPayment: true
  }
])

// Chart options with ThaiKeys brand colors
const revenueChartOption = ref({
  tooltip: {
    trigger: 'axis'
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
      formatter: '฿{value}K'
    }
  },
  series: [
    {
      name: 'Revenue',
      type: 'line',
      smooth: true,
      lineStyle: {
        color: '#05C7BE' // brand-red-light
      },
      itemStyle: {
        color: '#05C7BE'
      },
      areaStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            { offset: 0, color: 'rgba(5, 199, 190, 0.3)' },
            { offset: 1, color: 'rgba(5, 199, 190, 0.1)' }
          ]
        }
      },
      data: [45, 52, 38, 65, 71, 58, 75, 85, 62, 78, 85, 92]
    }
  ]
})

const propertyChartOption = ref({
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  legend: {
    data: ['Views', 'Inquiries']
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'category',
    data: ['Week 1', 'Week 2', 'Week 3', 'Week 4']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: 'Views',
      type: 'bar',
      itemStyle: {
        color: '#1E3A8A' // brand-navy
      },
      data: [420, 382, 450, 520]
    },
    {
      name: 'Inquiries',
      type: 'bar',
      itemStyle: {
        color: '#05C7BE' // brand-red-light
      },
      data: [35, 28, 42, 38]
    }
  ]
})

const btsChartOption = ref({
  tooltip: {
    trigger: 'item'
  },
  legend: {
    orient: 'vertical',
    left: 'left'
  },
  series: [
    {
      name: 'BTS Proximity',
      type: 'pie',
      radius: '50%',
      data: [
        { value: 45, name: '0-2 min walk' },
        { value: 32, name: '3-5 min walk' },
        { value: 18, name: '6-10 min walk' },
        { value: 5, name: '10+ min walk' }
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
          const colors = ['#05C7BE', '#1E3A8A', '#10B981', '#F59E0B']
          return colors[params.dataIndex]
        }
      }
    }
  ]
})

const responseTimeChartOption = ref({
  tooltip: {
    trigger: 'axis'
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'category',
    data: ['< 30 min', '30-60 min', '1-2 hours', '2-4 hours', '4+ hours']
  },
  yAxis: {
    type: 'value',
    axisLabel: {
      formatter: '{value}%'
    }
  },
  series: [
    {
      name: 'Response Rate',
      type: 'bar',
      itemStyle: {
        color: function(params) {
          const colors = ['#10B981', '#05C7BE', '#F59E0B', '#EF4444', '#DC2626']
          return colors[params.dataIndex]
        }
      },
      data: [65, 20, 10, 3, 2]
    }
  ]
})

// Handle window resize for charts
const handleResize = () => {
  if (revenueChart.value) revenueChart.value.resize()
  if (propertyChart.value) propertyChart.value.resize()
  if (btsChart.value) btsChart.value.resize()
  if (responseChart.value) responseChart.value.resize()
}

// Lifecycle hooks
onMounted(() => {
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
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

const getScoreColor = (score) => {
  if (score >= 80) return 'text-green-500'
  if (score >= 60) return 'text-blue-500'
  if (score >= 40) return 'text-yellow-500'
  return 'text-red-500'
}

const getVerificationLevel = (score) => {
  if (score >= 86) return 'ThaiKeys Elite'
  if (score >= 61) return 'Premium Agent'
  if (score >= 31) return 'Verified Agent'
  return 'Basic Agent'
}

const getVerificationBadgeClass = (score) => {
  if (score >= 86) return 'bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-400'
  if (score >= 61) return 'bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-400'
  if (score >= 31) return 'bg-yellow-100 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-400'
  return 'bg-gray-100 dark:bg-gray-600 text-gray-800 dark:text-gray-300'
}

const getProfileCompletionColor = (score) => {
  if (score >= 80) return 'text-green-600'
  if (score >= 60) return 'text-blue-600'
  if (score >= 40) return 'text-yellow-600'
  return 'text-red-600'
}

const enableDigitalPayments = () => {
  userProfile.value.uses_digital_payments = true
  showDigitalPaymentModal.value = false
}

const enableDigitalContracts = () => {
  userProfile.value.uses_digital_contracts = true
  showDigitalContractModal.value = false
}

const openClientDetails = (client) => {
  console.log('Opening client details for:', client.name)
}
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
</style>