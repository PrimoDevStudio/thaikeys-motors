<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 font-sans transition-colors duration-300">

    <!-- Landlord Info Bar -->
    <div class="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-4 transition-colors duration-300">
      <div class="flex items-center justify-between mx-auto">
        <!-- Landlord Info -->
        <div class="flex items-center space-x-6">
          <div class="flex items-center space-x-3">
            <div class="w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 dark:from-green-800 dark:to-green-600 rounded-full flex items-center justify-center">
              <svg class="w-6 h-6 text-green-600 dark:text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
              </svg>
            </div>
          </div>
          
          <div class="text-sm text-brand-navy dark:text-gray-400">
            <span class="font-medium">Welcome back, Michael Chen</span>
            <div class="text-xs text-gray-500 flex items-center space-x-2">
              <span>Property Owner</span>
              <span class="bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-400 px-2 py-0.5 rounded text-xs font-semibold">
                Verified Landlord
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
              placeholder="Search properties, tenants..."
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
      <!-- Landlord Sidebar Navigation -->
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
                    activeTab === 'tenants' ? 'bg-brand-turqoise-light text-brand-navy border border-teal-200' : 'text-brand-navy dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700']"
            @click="activeTab = 'tenants'"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"/>
            </svg>
            <span class="font-medium">Tenants</span>
            <span class="bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-400 text-xs font-semibold px-2 py-1 rounded-full ml-auto">{{ activeTenants }}</span>
          </a>
          
          <a 
            href="#" 
            :class="['flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors', 
                    activeTab === 'income' ? 'bg-brand-turqoise-light text-brand-navy border border-teal-200' : 'text-brand-navy dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700']"
            @click="activeTab = 'income'"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"/>
            </svg>
            <span class="font-medium">Rental Income</span>
            <span class="bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-400 text-xs font-semibold px-2 py-1 rounded-full ml-auto">{{ formatCurrency(monthlyIncome) }}</span>
          </a>
          
          <a 
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
            <span v-if="pendingMaintenance > 0" class="bg-orange-100 dark:bg-orange-900/20 text-orange-800 dark:text-orange-400 text-xs font-semibold px-2 py-1 rounded-full ml-auto">{{ pendingMaintenance }}</span>
          </a>
          
          <a 
            href="#" 
            :class="['flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors', 
                    activeTab === 'contracts' ? 'bg-brand-turqoise-light text-brand-navy border border-teal-200' : 'text-brand-navy dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700']"
            @click="activeTab = 'contracts'"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
            </svg>
            <span class="font-medium">Contracts</span>
            <span class="bg-purple-100 dark:bg-purple-900/20 text-purple-800 dark:text-purple-400 text-xs font-semibold px-2 py-1 rounded-full ml-auto">{{ activeContracts }}</span>
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
          <!-- Portfolio Summary Cards -->
          <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 transition-colors duration-300">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm font-medium text-brand-navy dark:text-gray-400">Total Properties</p>
                  <p class="text-3xl font-bold text-brand-navy dark:text-white">{{ totalProperties }}</p>
                  <p class="text-sm text-green-600 dark:text-green-400 mt-2">{{ occupancyRate }}% occupied</p>
                </div>
                <div class="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-xl flex items-center justify-center">
                  <svg class="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                  </svg>
                </div>
              </div>
            </div>

            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 transition-colors duration-300">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm font-medium text-brand-navy dark:text-gray-400">Monthly Income</p>
                  <p class="text-3xl font-bold text-brand-navy dark:text-white">{{ formatCurrency(monthlyIncome) }}</p>
                  <p class="text-sm text-green-600 dark:text-green-400 mt-2">+{{ formatCurrency(5000) }} this month</p>
                </div>
                <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-xl flex items-center justify-center">
                  <svg class="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"/>
                  </svg>
                </div>
              </div>
            </div>

            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 transition-colors duration-300">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm font-medium text-brand-navy dark:text-gray-400">Active Tenants</p>
                  <p class="text-3xl font-bold text-brand-navy dark:text-white">{{ activeTenants }}</p>
                  <p class="text-sm text-purple-600 dark:text-purple-400 mt-2">{{ contractsExpiring }} expiring soon</p>
                </div>
                <div class="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-xl flex items-center justify-center">
                  <svg class="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"/>
                  </svg>
                </div>
              </div>
            </div>

            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 transition-colors duration-300">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm font-medium text-brand-navy dark:text-gray-400">Maintenance Requests</p>
                  <p class="text-3xl font-bold text-brand-navy dark:text-white">{{ pendingMaintenance }}</p>
                  <p class="text-sm text-orange-600 dark:text-orange-400 mt-2">{{ urgentMaintenance }} urgent</p>
                </div>
                <div class="w-12 h-12 bg-orange-100 dark:bg-orange-900/20 rounded-xl flex items-center justify-center">
                  <svg class="w-6 h-6 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
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
                  <span>Add New Property</span>
                </button>
                
                <button class="w-full border-2 border-gray-200 dark:border-gray-600 text-brand-navy dark:text-gray-300 py-3 px-4 rounded-lg font-semibold hover:border-gray-300 dark:hover:border-gray-500 transition-colors flex items-center justify-center space-x-2">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                  </svg>
                  <span>Create Lease</span>
                </button>
                
                <button class="w-full border-2 border-gray-200 dark:border-gray-600 text-brand-navy dark:text-gray-300 py-3 px-4 rounded-lg font-semibold hover:border-gray-300 dark:hover:border-gray-500 transition-colors flex items-center justify-center space-x-2">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <span>Collect Rent</span>
                </button>
                
                <button class="w-full border-2 border-gray-200 dark:border-gray-600 text-brand-navy dark:text-gray-300 py-3 px-4 rounded-lg font-semibold hover:border-gray-300 dark:hover:border-gray-500 transition-colors flex items-center justify-center space-x-2">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                  </svg>
                  <span>View Reports</span>
                </button>
              </div>
            </div>

            <!-- Recent Tenant Activity -->
            <div class="lg:col-span-2 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 transition-colors duration-300">
              <div class="flex items-center justify-between mb-4">
                <h3 class="text-lg font-semibold text-brand-navy dark:text-white">Recent Activity</h3>
                <button class="text-brand-turqoise-light hover:text-teal-500 font-medium text-sm">View All</button>
              </div>
              
              <div class="space-y-4">
                <div v-for="activity in recentActivity" :key="activity.id" class="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors cursor-pointer">
                  <div class="w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 dark:from-green-800 dark:to-green-600 rounded-full flex-shrink-0 flex items-center justify-center">
                    <svg class="w-6 h-6" :class="activity.type === 'payment' ? 'text-green-600 dark:text-green-300' : activity.type === 'maintenance' ? 'text-orange-600 dark:text-orange-300' : 'text-blue-600 dark:text-blue-300'" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path v-if="activity.type === 'payment'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"/>
                      <path v-else-if="activity.type === 'maintenance'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                      <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                    </svg>
                  </div>
                  <div class="flex-1">
                    <div class="flex items-center justify-between">
                      <h4 class="font-semibold text-brand-navy dark:text-white">{{ activity.tenant }}</h4>
                      <span class="text-xs text-brand-navy dark:text-gray-400">{{ activity.time }}</span>
                    </div>
                    <p class="text-sm text-brand-navy dark:text-gray-400 mt-1">{{ activity.property }}</p>
                    <div class="flex items-center space-x-4 mt-2">
                      <span :class="['text-xs font-semibold px-2 py-1 rounded-full', 
                                   activity.type === 'payment' ? 'bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-400' : 
                                   activity.type === 'maintenance' ? 'bg-orange-100 dark:bg-orange-900/20 text-orange-800 dark:text-orange-400' : 
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
            <h2 class="text-2xl font-bold text-brand-navy dark:text-white">Property Portfolio</h2>
            <div class="flex items-center space-x-4">
              <select class="border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-brand-navy dark:text-white rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-turqoise-light">
                <option>All Properties</option>
                <option>Occupied</option>
                <option>Vacant</option>
                <option>Under Maintenance</option>
              </select>
              <button class="bg-brand-turqoise-light text-brand-navy px-6 py-3 rounded-lg font-semibold hover:bg-teal-300 transition-colors flex items-center space-x-2">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                </svg>
                <span>Add Property</span>
              </button>
            </div>
          </div>

          <!-- Property Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div v-for="property in properties" :key="property.id" class="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-all duration-300">
              <!-- Property Image -->
              <div class="h-48 bg-gradient-to-br from-green-100 to-green-200 dark:from-green-800 dark:to-green-600 relative">
                <div class="absolute top-4 left-4">
                  <span :class="['px-3 py-1 rounded-full text-xs font-semibold',
                               property.status === 'Occupied' ? 'bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-400' :
                               property.status === 'Vacant' ? 'bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-400' :
                               'bg-yellow-100 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-400']">
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
                    <span class="text-2xl font-bold text-brand-navy dark:text-white">{{ property.rent }}</span>
                    <span class="text-sm text-brand-navy dark:text-gray-400">/month</span>
                  </div>
                  <div class="text-sm text-brand-navy dark:text-gray-400">{{ property.bedrooms }}bed • {{ property.bathrooms }}bath</div>
                </div>

                <!-- Property Stats -->
                <div class="grid grid-cols-2 gap-4 mb-4 py-3 border-t border-gray-100 dark:border-gray-600">
                  <div class="text-center">
                    <div class="text-lg font-bold text-brand-navy dark:text-white">{{ property.tenant || 'Vacant' }}</div>
                    <div class="text-xs text-brand-navy dark:text-gray-400">Current Tenant</div>
                  </div>
                  <div class="text-center">
                    <div class="text-lg font-bold text-brand-navy dark:text-white">{{ property.leaseExpiry || 'N/A' }}</div>
                    <div class="text-xs text-brand-navy dark:text-gray-400">Lease Expiry</div>
                  </div>
                </div>

                <!-- Action Buttons -->
                <div class="flex items-center space-x-2">
                  <button class="flex-1 bg-brand-turqoise-light text-brand-navy py-2 px-4 rounded-lg font-semibold hover:bg-teal-300 transition-colors text-sm">
                    Manage
                  </button>
                  <button class="flex-1 border border-gray-300 dark:border-gray-600 text-brand-navy dark:text-gray-300 py-2 px-4 rounded-lg font-semibold hover:border-gray-400 dark:hover:border-gray-500 transition-colors text-sm">
                    Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Tenants Tab -->
        <div v-if="activeTab === 'tenants'" class="p-6">
          <div class="flex items-center justify-between mb-6">
            <h2 class="text-2xl font-bold text-brand-navy dark:text-white">Tenant Management</h2>
            <div class="flex items-center space-x-4">
              <select class="border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-brand-navy dark:text-white rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-turqoise-light">
                <option>All Tenants</option>
                <option>Active Tenants</option>
                <option>Lease Expiring Soon</option>
                <option>Payment Due</option>
              </select>
              <button class="bg-brand-turqoise-light text-brand-navy px-6 py-3 rounded-lg font-semibold hover:bg-teal-300 transition-colors flex items-center space-x-2">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                </svg>
                <span>Add Tenant</span>
              </button>
            </div>
          </div>

          <!-- Tenant Database -->
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
            <div class="p-6 border-b border-gray-100 dark:border-gray-600">
              <div class="flex items-center justify-between">
                <h3 class="text-lg font-semibold text-brand-navy dark:text-white">Current Tenants</h3>
                <div class="flex items-center space-x-4">
                  <div class="relative">
                    <input 
                      v-model="tenantSearchQuery"
                      type="text" 
                      placeholder="Search tenants..."
                      class="w-64 px-4 py-2 pr-10 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-turqoise-light bg-white dark:bg-gray-700 text-brand-navy dark:text-white"
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
                <div>Tenant</div>
                <div>Property</div>
                <div>Rent Amount</div>
                <div>Lease Expiry</div>
                <div>Payment Status</div>
                <div>Actions</div>
              </div>
              
              <div class="space-y-4">
                <div v-for="tenant in tenants" :key="tenant.id" class="grid grid-cols-6 gap-4 items-center p-4 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-xl transition-colors">
                  <!-- Tenant Info -->
                  <div class="flex items-center space-x-3">
                    <div class="w-10 h-10 bg-gradient-to-br from-green-100 to-green-200 dark:from-green-800 dark:to-green-600 rounded-full flex items-center justify-center">
                      <span class="text-sm font-semibold text-green-800 dark:text-green-200">{{ tenant.initials }}</span>
                    </div>
                    <div>
                      <div class="font-semibold text-brand-navy dark:text-white">{{ tenant.name }}</div>
                      <div class="text-sm text-gray-500">{{ tenant.email }}</div>
                    </div>
                  </div>
                  
                  <!-- Property -->
                  <div>
                    <div class="font-medium text-brand-navy dark:text-white text-sm">{{ tenant.property }}</div>
                    <div class="text-sm text-gray-500">{{ tenant.propertyType }}</div>
                  </div>
                  
                  <!-- Rent Amount -->
                  <div>
                    <div class="font-semibold text-brand-navy dark:text-white">{{ formatCurrency(tenant.rentAmount) }}</div>
                    <div class="text-sm text-gray-500">Monthly</div>
                  </div>
                  
                  <!-- Lease Expiry -->
                  <div>
                    <div class="text-sm text-brand-navy dark:text-white">{{ tenant.leaseExpiry }}</div>
                    <div :class="['text-xs', tenant.daysToExpiry <= 30 ? 'text-orange-500' : 'text-gray-500']">
                      {{ tenant.daysToExpiry }} days left
                    </div>
                  </div>
                  
                  <!-- Payment Status -->
                  <div>
                    <span :class="['px-3 py-1 rounded-full text-xs font-semibold',
                                 tenant.paymentStatus === 'Paid' ? 'bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-400' :
                                 tenant.paymentStatus === 'Due' ? 'bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-400' :
                                 'bg-yellow-100 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-400']">
                      {{ tenant.paymentStatus }}
                    </span>
                  </div>
                  
                  <!-- Actions -->
                  <div class="flex items-center space-x-2">
                    <button class="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 p-1">
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
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Rental Income Tab -->
        <div v-if="activeTab === 'income'" class="p-6">
          <div class="flex items-center justify-between mb-6">
            <h2 class="text-2xl font-bold text-brand-navy dark:text-white">Rental Income Management</h2>
            <div class="flex items-center space-x-4">
              <select class="border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-brand-navy dark:text-white rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-turqoise-light">
                <option>This Month</option>
                <option>Last 3 Months</option>
                <option>This Year</option>
                <option>All Time</option>
              </select>
              <button class="bg-brand-turqoise-light text-brand-navy px-6 py-3 rounded-lg font-semibold hover:bg-teal-300 transition-colors">
                Generate Report
              </button>
            </div>
          </div>

          <!-- Income Overview Cards -->
          <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm font-medium text-brand-navy dark:text-gray-400">Monthly Income</p>
                  <p class="text-3xl font-bold text-brand-navy dark:text-white">{{ formatCurrency(monthlyIncome) }}</p>
                  <p class="text-sm text-green-600 dark:text-green-400 mt-2">{{ occupancyRate }}% occupancy</p>
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
                  <p class="text-sm font-medium text-brand-navy dark:text-gray-400">Outstanding Rent</p>
                  <p class="text-3xl font-bold text-brand-navy dark:text-white">{{ formatCurrency(outstandingRent) }}</p>
                  <p class="text-sm text-red-600 dark:text-red-400 mt-2">{{ latePayments }} late payments</p>
                </div>
                <div class="w-12 h-12 bg-red-100 dark:bg-red-900/20 rounded-xl flex items-center justify-center">
                  <svg class="w-6 h-6 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
              </div>
            </div>

            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm font-medium text-brand-navy dark:text-gray-400">Yearly Income</p>
                  <p class="text-3xl font-bold text-brand-navy dark:text-white">{{ formatCurrency(yearlyIncome) }}</p>
                  <p class="text-sm text-blue-600 dark:text-blue-400 mt-2">{{ formatCurrency(monthlyIncome * 12) }} projected</p>
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
                  <p class="text-sm font-medium text-brand-navy dark:text-gray-400">Avg Property ROI</p>
                  <p class="text-3xl font-bold text-brand-navy dark:text-white">{{ averageROI }}%</p>
                  <p class="text-sm text-purple-600 dark:text-purple-400 mt-2">Annual return</p>
                </div>
                <div class="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-xl flex items-center justify-center">
                  <svg class="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <!-- Payment Status & Recent Payments -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <!-- Payment Status -->
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Payment Status</h3>
              <div class="space-y-4">
                <div v-for="payment in paymentStatus" :key="payment.id" class="flex items-center justify-between p-4 rounded-lg" :class="payment.status === 'Paid' ? 'bg-green-50 dark:bg-green-900/10' : payment.status === 'Due' ? 'bg-red-50 dark:bg-red-900/10' : 'bg-yellow-50 dark:bg-yellow-900/10'">
                  <div>
                    <div class="font-semibold text-brand-navy dark:text-white">{{ payment.tenant }}</div>
                    <div class="text-sm text-gray-600 dark:text-gray-400">{{ payment.property }}</div>
                    <div class="text-xs text-gray-500">Due: {{ payment.dueDate }}</div>
                  </div>
                  <div class="text-right">
                    <div class="font-bold text-lg" :class="payment.status === 'Paid' ? 'text-green-600' : payment.status === 'Due' ? 'text-red-600' : 'text-yellow-600'">
                      {{ formatCurrency(payment.amount) }}
                    </div>
                    <div :class="['text-xs font-semibold', payment.status === 'Paid' ? 'text-green-600' : payment.status === 'Due' ? 'text-red-600' : 'text-yellow-600']">
                      {{ payment.status }}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Recent Payments -->
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Recent Payments</h3>
              <div class="space-y-4">
                <div v-for="payment in recentPayments" :key="payment.id" class="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div>
                    <div class="font-semibold text-brand-navy dark:text-white">{{ payment.tenant }}</div>
                    <div class="text-sm text-gray-600 dark:text-gray-400">{{ payment.property }}</div>
                    <div class="text-xs text-gray-500">Paid: {{ payment.paidDate }}</div>
                  </div>
                  <div class="text-right">
                    <div class="font-bold text-lg text-green-600">{{ formatCurrency(payment.amount) }}</div>
                    <div class="text-xs text-green-600 font-semibold">✓ Received</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Maintenance Tab -->
        <div v-if="activeTab === 'maintenance'" class="p-6">
          <div class="flex items-center justify-between mb-6">
            <h2 class="text-2xl font-bold text-brand-navy dark:text-white">Maintenance Management</h2>
            <div class="flex items-center space-x-4">
              <select class="border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-brand-navy dark:text-white rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-turqoise-light">
                <option>All Requests</option>
                <option>Urgent</option>
                <option>In Progress</option>
                <option>Completed</option>
              </select>
              <button class="bg-brand-turqoise-light text-brand-navy px-6 py-3 rounded-lg font-semibold hover:bg-teal-300 transition-colors flex items-center space-x-2">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                </svg>
                <span>Schedule Maintenance</span>
              </button>
            </div>
          </div>

          <!-- Maintenance Overview -->
          <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
            <div class="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg border border-gray-100 dark:border-gray-700 text-center">
              <div class="text-2xl font-bold text-orange-600">{{ pendingMaintenance }}</div>
              <div class="text-sm text-gray-500">Pending Requests</div>
            </div>
            <div class="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg border border-gray-100 dark:border-gray-700 text-center">
              <div class="text-2xl font-bold text-red-600">{{ urgentMaintenance }}</div>
              <div class="text-sm text-gray-500">Urgent</div>
            </div>
            <div class="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg border border-gray-100 dark:border-gray-700 text-center">
              <div class="text-2xl font-bold text-blue-600">{{ inProgressMaintenance }}</div>
              <div class="text-sm text-gray-500">In Progress</div>
            </div>
            <div class="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg border border-gray-100 dark:border-gray-700 text-center">
              <div class="text-2xl font-bold text-green-600">{{ completedMaintenance }}</div>
              <div class="text-sm text-gray-500">Completed This Month</div>
            </div>
          </div>

          <!-- Maintenance Requests -->
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
            <div class="p-6 border-b border-gray-100 dark:border-gray-600">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white">Maintenance Requests</h3>
            </div>
            
            <div class="p-6">
              <div class="grid grid-cols-7 gap-4 text-sm font-medium text-brand-navy dark:text-gray-400 mb-4">
                <div>Property</div>
                <div>Tenant</div>
                <div>Issue</div>
                <div>Priority</div>
                <div>Submitted</div>
                <div>Status</div>
                <div>Actions</div>
              </div>
              
              <div class="space-y-3">
                <div v-for="request in maintenanceRequests" :key="request.id" class="grid grid-cols-7 gap-4 items-center p-4 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-xl transition-colors">
                  <div>
                    <div class="font-semibold text-brand-navy dark:text-white text-sm">{{ request.property }}</div>
                    <div class="text-xs text-gray-500">{{ request.propertyType }}</div>
                  </div>
                  <div>
                    <div class="text-sm text-brand-navy dark:text-white">{{ request.tenant }}</div>
                    <div class="text-xs text-gray-500">{{ request.tenantPhone }}</div>
                  </div>
                  <div>
                    <div class="text-sm text-brand-navy dark:text-white">{{ request.issue }}</div>
                    <div class="text-xs text-gray-500">{{ request.description }}</div>
                  </div>
                  <div>
                    <span :class="['px-2 py-1 text-xs font-semibold rounded-full',
                                 request.priority === 'Urgent' ? 'bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-400' :
                                 request.priority === 'High' ? 'bg-orange-100 dark:bg-orange-900/20 text-orange-800 dark:text-orange-400' :
                                 request.priority === 'Medium' ? 'bg-yellow-100 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-400' :
                                 'bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-400']">
                      {{ request.priority }}
                    </span>
                  </div>
                  <div class="text-sm text-brand-navy dark:text-white">{{ request.submitted }}</div>
                  <div>
                    <span :class="['px-2 py-1 text-xs font-semibold rounded-full',
                                 request.status === 'Completed' ? 'bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-400' :
                                 request.status === 'In Progress' ? 'bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-400' :
                                 'bg-gray-100 dark:bg-gray-600 text-gray-800 dark:text-gray-300']">
                      {{ request.status }}
                    </span>
                  </div>
                  <div class="flex items-center space-x-2">
                    <button class="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 p-1">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                      </svg>
                    </button>
                    <button class="text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 p-1">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Contracts Tab -->
        <div v-if="activeTab === 'contracts'" class="p-6">
          <div class="flex items-center justify-between mb-6">
            <h2 class="text-2xl font-bold text-brand-navy dark:text-white">Contract Management</h2>
            <div class="flex items-center space-x-4">
              <select class="border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-brand-navy dark:text-white rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-turqoise-light">
                <option>All Contracts</option>
                <option>Active Leases</option>
                <option>Expiring Soon</option>
                <option>Expired</option>
              </select>
              <button class="bg-brand-turqoise-light text-brand-navy px-6 py-3 rounded-lg font-semibold hover:bg-teal-300 transition-colors flex items-center space-x-2">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                </svg>
                <span>New Contract</span>
              </button>
            </div>
          </div>

          <!-- Contracts List -->
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
            <div class="p-6 border-b border-gray-100 dark:border-gray-600">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white">Lease Contracts</h3>
            </div>
            
            <div class="p-6">
              <div class="grid grid-cols-6 gap-4 text-sm font-medium text-brand-navy dark:text-gray-400 mb-4">
                <div>Property</div>
                <div>Tenant</div>
                <div>Lease Term</div>
                <div>Monthly Rent</div>
                <div>Status</div>
                <div>Actions</div>
              </div>
              
              <div class="space-y-3">
                <div v-for="contract in contracts" :key="contract.id" class="grid grid-cols-6 gap-4 items-center p-4 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-xl transition-colors">
                  <div>
                    <div class="font-semibold text-brand-navy dark:text-white text-sm">{{ contract.property }}</div>
                    <div class="text-xs text-gray-500">{{ contract.address }}</div>
                  </div>
                  <div>
                    <div class="text-sm text-brand-navy dark:text-white">{{ contract.tenant }}</div>
                    <div class="text-xs text-gray-500">{{ contract.tenantEmail }}</div>
                  </div>
                  <div>
                    <div class="text-sm text-brand-navy dark:text-white">{{ contract.startDate }} - {{ contract.endDate }}</div>
                    <div class="text-xs text-gray-500">{{ contract.duration }} months</div>
                  </div>
                  <div class="font-semibold text-brand-navy dark:text-white">{{ formatCurrency(contract.monthlyRent) }}</div>
                  <div>
                    <span :class="['px-2 py-1 text-xs font-semibold rounded-full',
                                 contract.status === 'Active' ? 'bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-400' :
                                 contract.status === 'Expiring' ? 'bg-yellow-100 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-400' :
                                 'bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-400']">
                      {{ contract.status }}
                    </span>
                  </div>
                  <div class="flex items-center space-x-2">
                    <button class="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 p-1">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                      </svg>
                    </button>
                    <button class="text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 p-1">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Analytics Tab with Charts -->
        <div v-if="activeTab === 'analytics'" class="p-6">
          <h2 class="text-2xl font-bold text-brand-navy dark:text-white mb-6">Portfolio Analytics</h2>
          
          <!-- Analytics Cards -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Occupancy Rate</h3>
              <div class="space-y-4">
                <div class="flex justify-between items-center">
                  <span class="text-sm text-brand-navy dark:text-gray-400">Current Occupancy</span>
                  <span class="font-semibold text-brand-navy dark:text-white">{{ occupancyRate }}%</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-sm text-brand-navy dark:text-gray-400">Target Occupancy</span>
                  <span class="font-semibold text-brand-navy dark:text-white">95%</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-sm text-brand-navy dark:text-gray-400">Avg Vacancy Period</span>
                  <span class="font-semibold text-brand-navy dark:text-white">21 days</span>
                </div>
              </div>
            </div>

            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Financial Performance</h3>
              <div class="space-y-4">
                <div class="flex justify-between items-center">
                  <span class="text-sm text-brand-navy dark:text-gray-400">Monthly Yield</span>
                  <span class="font-semibold text-brand-navy dark:text-white">{{ averageROI }}%</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-sm text-brand-navy dark:text-gray-400">Collection Rate</span>
                  <span class="font-semibold text-brand-navy dark:text-white">96%</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-sm text-brand-navy dark:text-gray-400">Maintenance Cost</span>
                  <span class="font-semibold text-brand-navy dark:text-white">{{ formatCurrency(8500) }}</span>
                </div>
              </div>
            </div>

            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Tenant Satisfaction</h3>
              <div class="space-y-4">
                <div class="flex justify-between items-center">
                  <span class="text-sm text-brand-navy dark:text-gray-400">Avg Rating</span>
                  <div class="flex items-center space-x-1">
                    <span class="font-semibold text-brand-navy dark:text-white">4.6</span>
                    <svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  </div>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-sm text-brand-navy dark:text-gray-400">Response Time</span>
                  <span class="font-semibold text-brand-navy dark:text-white">4.2 hours</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-sm text-brand-navy dark:text-gray-400">Renewal Rate</span>
                  <span class="font-semibold text-brand-navy dark:text-white">87%</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Charts Section -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <!-- Rental Income Trend Chart -->
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Monthly Rental Income</h3>
              <VChart ref="incomeChart" :option="incomeChartOption" class="h-64" />
            </div>

            <!-- Property Performance by Type -->
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Income by Property Type</h3>
              <VChart ref="propertyTypeChart" :option="propertyTypeChartOption" class="h-64" />
            </div>
          </div>

          <!-- Additional Charts -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <!-- Occupancy Rate Trend -->
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Occupancy Rate Trend</h3>
              <VChart ref="occupancyChart" :option="occupancyChartOption" class="h-64" />
            </div>

            <!-- Maintenance Costs -->
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Maintenance Breakdown</h3>
              <VChart ref="maintenanceChart" :option="maintenanceChartOption" class="h-64" />
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
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white">Landlord Verification Status</h3>
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
                <h4 class="font-semibold text-brand-navy dark:text-white">Identity & Documentation</h4>
                
                <div class="space-y-3">
                  <div class="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div class="flex items-center space-x-2">
                      <svg class="w-4 h-4" :class="landlordProfile.id_verified ? 'text-green-500' : 'text-gray-400'" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                      <span class="text-sm text-brand-navy dark:text-white">ID Verification</span>
                    </div>
                    <span class="text-xs" :class="landlordProfile.id_verified ? 'text-green-600' : 'text-gray-500'">
                      {{ landlordProfile.id_verified ? '✓ Verified (+15 pts)' : 'Upload Required' }}
                    </span>
                  </div>

                  <div class="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div class="flex items-center space-x-2">
                      <svg class="w-4 h-4" :class="landlordProfile.banking_verified ? 'text-green-500' : 'text-gray-400'" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M11.5 1L2 6v2h20V6l-9.5-5zM2 10v10a1 1 0 001 1h18a1 1 0 001-1V10H2zm8 7.5V14h4v3.5h-4z"/>
                      </svg>
                      <span class="text-sm text-brand-navy dark:text-white">Banking Details</span>
                    </div>
                    <span class="text-xs" :class="landlordProfile.banking_verified ? 'text-green-600' : 'text-gray-500'">
                      {{ landlordProfile.banking_verified ? '✓ Verified (+15 pts)' : 'Setup Required' }}
                    </span>
                  </div>

                  <div class="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div class="flex items-center space-x-2">
                      <svg class="w-4 h-4" :class="landlordProfile.property_ownership_verified ? 'text-green-500' : 'text-gray-400'" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                      </svg>
                      <span class="text-sm text-brand-navy dark:text-white">Property Ownership</span>
                    </div>
                    <span class="text-xs" :class="landlordProfile.property_ownership_verified ? 'text-green-600' : 'text-gray-500'">
                      {{ landlordProfile.property_ownership_verified ? '✓ Verified (+20 pts)' : 'Documents Required' }}
                    </span>
                  </div>
                </div>
              </div>

              <!-- Digital Services -->
              <div class="space-y-4">
                <h4 class="font-semibold text-brand-navy dark:text-white">Digital Services</h4>
                
                <div class="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-600 rounded-lg">
                  <div class="flex items-center space-x-3">
                    <svg class="w-5 h-5" :class="landlordProfile.uses_digital_payments ? 'text-green-500' : 'text-gray-400'" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M2 10h20v8a2 2 0 01-2 2H4a2 2 0 01-2-2v-8zm18-4H4a2 2 0 00-2 2v2h20V8a2 2 0 00-2-2zM8 16h4v2H8v-2z"/>
                    </svg>
                    <div>
                      <div class="font-medium text-brand-navy dark:text-white">Digital Rent Collection</div>
                      <div class="text-sm text-gray-500">Accept online rent payments</div>
                    </div>
                  </div>
                  <div class="flex items-center space-x-2">
                    <span class="text-sm" :class="landlordProfile.uses_digital_payments ? 'text-green-600' : 'text-gray-500'">
                      {{ landlordProfile.uses_digital_payments ? 'Active (+25 pts)' : 'Disabled' }}
                    </span>
                    <button v-if="!landlordProfile.uses_digital_payments" @click="showDigitalPaymentModal = true" class="bg-brand-turqoise-light text-brand-navy px-3 py-1 rounded text-sm hover:bg-teal-300">
                      Enable
                    </button>
                  </div>
                </div>

                <div class="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-600 rounded-lg">
                  <div class="flex items-center space-x-3">
                    <svg class="w-5 h-5" :class="landlordProfile.uses_digital_leases ? 'text-green-500' : 'text-gray-400'" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zM6 20V4h7v5h5v11H6z"/>
                    </svg>
                    <div>
                      <div class="font-medium text-brand-navy dark:text-white">Electronic Leases</div>
                      <div class="text-sm text-gray-500">Digital lease signing & management</div>
                    </div>
                  </div>
                  <div class="flex items-center space-x-2">
                    <span class="text-sm" :class="landlordProfile.uses_digital_leases ? 'text-green-600' : 'text-gray-500'">
                      {{ landlordProfile.uses_digital_leases ? 'Active (+25 pts)' : 'Disabled' }}
                    </span>
                    <button v-if="!landlordProfile.uses_digital_leases" @click="showDigitalLeaseModal = true" class="bg-brand-turqoise-light text-brand-navy px-3 py-1 rounded text-sm hover:bg-teal-300">
                      Enable
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Personal Information -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <!-- Basic Information -->
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Personal Information</h3>
              <div class="space-y-4">
                <div>
                  <label class="block text-sm font-medium text-brand-navy dark:text-gray-300 mb-2">Full Name</label>
                  <input type="text" v-model="landlordPersonalInfo.fullName" class="w-full px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-turqoise-light bg-white dark:bg-gray-700 text-brand-navy dark:text-white">
                </div>
                <div>
                  <label class="block text-sm font-medium text-brand-navy dark:text-gray-300 mb-2">Email</label>
                  <input type="email" v-model="landlordPersonalInfo.email" class="w-full px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-turqoise-light bg-white dark:bg-gray-700 text-brand-navy dark:text-white">
                </div>
                <div>
                  <label class="block text-sm font-medium text-brand-navy dark:text-gray-300 mb-2">Phone Number</label>
                  <input type="tel" v-model="landlordPersonalInfo.phone" class="w-full px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-turqoise-light bg-white dark:bg-gray-700 text-brand-navy dark:text-white">
                </div>
                <div>
                  <label class="block text-sm font-medium text-brand-navy dark:text-gray-300 mb-2">Years as Landlord</label>
                  <select v-model="landlordPersonalInfo.experience" class="w-full px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-turqoise-light bg-white dark:bg-gray-700 text-brand-navy dark:text-white">
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
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Portfolio Information</h3>
              <div class="space-y-4">
                <div>
                  <label class="block text-sm font-medium text-brand-navy dark:text-gray-300 mb-2">Total Properties Owned</label>
                  <input type="number" v-model="landlordPersonalInfo.totalPropertiesOwned" min="1" class="w-full px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-turqoise-light bg-white dark:bg-gray-700 text-brand-navy dark:text-white">
                </div>
                <div>
                  <label class="block text-sm font-medium text-brand-navy dark:text-gray-300 mb-2">Property Types</label>
                  <div class="grid grid-cols-2 gap-2">
                    <label v-for="type in propertyTypes" :key="type" class="flex items-center">
                      <input type="checkbox" :value="type" v-model="landlordPersonalInfo.propertyTypes" class="mr-2">
                      <span class="text-sm text-brand-navy dark:text-white">{{ type }}</span>
                    </label>
                  </div>
                </div>
                <div>
                  <label class="block text-sm font-medium text-brand-navy dark:text-gray-300 mb-2">Primary Investment Area</label>
                  <select v-model="landlordPersonalInfo.primaryArea" class="w-full px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-turqoise-light bg-white dark:bg-gray-700 text-brand-navy dark:text-white">
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

          <!-- Portfolio Performance Summary -->
          <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
            <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Portfolio Performance Summary</h3>
            <div class="grid grid-cols-4 gap-6">
              <div class="text-center">
                <div class="text-2xl font-bold text-brand-navy dark:text-white">{{ occupancyRate }}%</div>
                <div class="text-sm text-gray-500">Occupancy Rate</div>
              </div>
              <div class="text-center">
                <div class="text-2xl font-bold text-brand-navy dark:text-white">{{ formatCurrency(monthlyIncome) }}</div>
                <div class="text-sm text-gray-500">Monthly Income</div>
              </div>
              <div class="text-center">
                <div class="text-2xl font-bold text-brand-navy dark:text-white">{{ averageROI }}%</div>
                <div class="text-sm text-gray-500">Average ROI</div>
              </div>
              <div class="text-center">
                <div class="text-2xl font-bold text-brand-navy dark:text-white">4.2h</div>
                <div class="text-sm text-gray-500">Avg Response Time</div>
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
  title: 'Landlord Dashboard - ThaiKeys',
  meta: [
    {
      name: 'description',
      content: 'Professional landlord dashboard for managing rental properties, tenants, income, and maintenance on ThaiKeys platform.'
    }
  ]
})

// Reactive data
const searchQuery = ref('')
const tenantSearchQuery = ref('')
const activeTab = ref('overview')
const unreadNotifications = ref(2)

// Digital Services Modal States
const showDigitalPaymentModal = ref(false)
const showDigitalLeaseModal = ref(false)

// Landlord Profile
const landlordProfile = ref({
  uses_digital_payments: false,
  uses_digital_leases: false,
  id_verified: true,
  banking_verified: false,
  property_ownership_verified: false
})

// Personal Information
const landlordPersonalInfo = ref({
  fullName: 'Michael Chen',
  email: 'michael.chen@email.com',
  phone: '+66 2 345 6789',
  experience: '6-10',
  totalPropertiesOwned: 8,
  propertyTypes: ['Condos', 'Houses'],
  primaryArea: 'sukhumvit'
})

const propertyTypes = ['Condos', 'Houses', 'Townhouses', 'Studios', 'Commercial']

// Landlord statistics
const totalProperties = ref(8)
const activeTenants = ref(7)
const monthlyIncome = ref(185000)
const occupancyRate = ref(88)
const contractsExpiring = ref(2)
const pendingMaintenance = ref(4)
const urgentMaintenance = ref(1)
const inProgressMaintenance = ref(2)
const completedMaintenance = ref(12)
const activeContracts = ref(7)
const outstandingRent = ref(25000)
const latePayments = ref(2)
const yearlyIncome = ref(2100000)
const averageROI = ref(7.2)

// Computed Properties
const verificationScore = computed(() => {
  let score = 0
  if (landlordProfile.value.id_verified) score += 15
  if (landlordProfile.value.banking_verified) score += 15
  if (landlordProfile.value.property_ownership_verified) score += 20
  if (landlordProfile.value.uses_digital_payments) score += 25
  if (landlordProfile.value.uses_digital_leases) score += 25
  return score
})

const profileCompletionScore = computed(() => {
  let score = 0
  if (landlordPersonalInfo.value.fullName) score += 15
  if (landlordPersonalInfo.value.email) score += 15
  if (landlordPersonalInfo.value.phone) score += 15
  if (landlordPersonalInfo.value.totalPropertiesOwned > 0) score += 15
  if (landlordPersonalInfo.value.propertyTypes.length > 0) score += 15
  if (landlordProfile.value.banking_verified) score += 25
  return score
})

const profileComplete = computed(() => profileCompletionScore.value >= 80)

// Recent activity data
const recentActivity = ref([
  {
    id: 1,
    tenant: 'Sarah Johnson',
    property: 'Condo Unit 302, Asok',
    action: 'Rent Paid',
    type: 'payment',
    time: '2 hours ago',
    amount: 28000
  },
  {
    id: 2,
    tenant: 'Mike Chen',
    property: 'House, Thonglor',
    action: 'Maintenance Request',
    type: 'maintenance',
    time: '5 hours ago'
  },
  {
    id: 3,
    tenant: 'Lisa Wong',
    property: 'Studio, Phrom Phong',
    action: 'Contract Renewal',
    type: 'contract',
    time: '1 day ago'
  }
])

// Properties data
const properties = ref([
  {
    id: 1,
    title: 'Luxury 2BR Condo',
    location: 'Sukhumvit 21, Asok',
    rent: '฿45,000',
    bedrooms: 2,
    bathrooms: 2,
    status: 'Occupied',
    type: 'Condo',
    tenant: 'Sarah Johnson',
    leaseExpiry: 'Dec 2024'
  },
  {
    id: 2,
    title: 'Modern Studio',
    location: 'Sukhumvit 39, Phrom Phong',
    rent: '฿28,000',
    bedrooms: 1,
    bathrooms: 1,
    status: 'Occupied',
    type: 'Studio',
    tenant: 'Lisa Wong',
    leaseExpiry: 'Jan 2025'
  },
  {
    id: 3,
    title: 'Spacious 3BR House',
    location: 'Thonglor 25, Bangkok',
    rent: '฿85,000',
    bedrooms: 3,
    bathrooms: 3,
    status: 'Vacant',
    type: 'House',
    tenant: null,
    leaseExpiry: null
  }
])

// Tenants data
const tenants = ref([
  {
    id: 1,
    name: 'Sarah Johnson',
    email: 'sarah.j@email.com',
    initials: 'SJ',
    property: 'Condo Unit 302',
    propertyType: 'Asok',
    rentAmount: 45000,
    leaseExpiry: 'Dec 31, 2024',
    daysToExpiry: 89,
    paymentStatus: 'Paid'
  },
  {
    id: 2,
    name: 'Mike Chen',
    email: 'mike.chen@email.com',
    initials: 'MC',
    property: 'House 25',
    propertyType: 'Thonglor',
    rentAmount: 85000,
    leaseExpiry: 'Mar 15, 2025',
    daysToExpiry: 163,
    paymentStatus: 'Due'
  },
  {
    id: 3,
    name: 'Lisa Wong',
    email: 'lisa.wong@email.com',
    initials: 'LW',
    property: 'Studio 39',
    propertyType: 'Phrom Phong',
    rentAmount: 28000,
    leaseExpiry: 'Jan 20, 2025',
    daysToExpiry: 108,
    paymentStatus: 'Overdue'
  }
])

// Payment status data
const paymentStatus = ref([
  {
    id: 1,
    tenant: 'Sarah Johnson',
    property: 'Condo Unit 302, Asok',
    amount: 45000,
    dueDate: 'Nov 1, 2024',
    status: 'Paid'
  },
  {
    id: 2,
    tenant: 'Mike Chen',
    property: 'House, Thonglor',
    amount: 85000,
    dueDate: 'Nov 1, 2024',
    status: 'Due'
  },
  {
    id: 3,
    tenant: 'Lisa Wong',
    property: 'Studio, Phrom Phong',
    amount: 28000,
    dueDate: 'Oct 20, 2024',
    status: 'Overdue'
  }
])

// Recent payments data
const recentPayments = ref([
  {
    id: 1,
    tenant: 'Sarah Johnson',
    property: 'Condo Unit 302',
    amount: 45000,
    paidDate: 'Nov 1, 2024'
  },
  {
    id: 2,
    tenant: 'David Kim',
    property: 'Townhouse, Ekkamai',
    amount: 65000,
    paidDate: 'Oct 30, 2024'
  }
])

// Maintenance requests data
const maintenanceRequests = ref([
  {
    id: 1,
    property: 'Condo Unit 302',
    propertyType: 'Asok',
    tenant: 'Sarah Johnson',
    tenantPhone: '+66 81 234 5678',
    issue: 'Air Conditioning',
    description: 'AC not cooling properly',
    priority: 'High',
    submitted: 'Nov 2, 2024',
    status: 'Pending'
  },
  {
    id: 2,
    property: 'House',
    propertyType: 'Thonglor',
    tenant: 'Mike Chen',
    tenantPhone: '+66 82 345 6789',
    issue: 'Plumbing',
    description: 'Kitchen sink leaking',
    priority: 'Urgent',
    submitted: 'Nov 1, 2024',
    status: 'In Progress'
  }
])

// Contracts data
const contracts = ref([
  {
    id: 1,
    property: 'Condo Unit 302',
    address: 'Sukhumvit 21, Asok',
    tenant: 'Sarah Johnson',
    tenantEmail: 'sarah.j@email.com',
    startDate: 'Jan 1, 2024',
    endDate: 'Dec 31, 2024',
    duration: 12,
    monthlyRent: 45000,
    status: 'Expiring'
  },
  {
    id: 2,
    property: 'House',
    address: 'Thonglor 25, Bangkok',
    tenant: 'Mike Chen',
    tenantEmail: 'mike.chen@email.com',
    startDate: 'Mar 15, 2024',
    endDate: 'Mar 14, 2025',
    duration: 12,
    monthlyRent: 85000,
    status: 'Active'
  }
])

// Chart refs
const incomeChart = ref(null)
const propertyTypeChart = ref(null)
const occupancyChart = ref(null)
const maintenanceChart = ref(null)

// Chart options for landlord analytics
const incomeChartOption = ref({
  tooltip: {
    trigger: 'axis',
    formatter: function(params) {
      return `${params[0].name}<br/>Income: ฿${params[0].value.toLocaleString()}`
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
      formatter: '฿{value}K'
    }
  },
  series: [
    {
      name: 'Monthly Income',
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
      data: [165, 170, 185, 180, 190, 185, 175, 180, 185, 190, 185, 195]
    }
  ]
})

const propertyTypeChartOption = ref({
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b}: ฿{c} ({d}%)'
  },
  legend: {
    orient: 'vertical',
    left: 'left'
  },
  series: [
    {
      name: 'Income by Type',
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      data: [
        { value: 85000, name: 'Houses' },
        { value: 73000, name: 'Condos' },
        { value: 28000, name: 'Studios' }
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
          const colors = ['#10B981', '#05C7BE', '#1E3A8A']
          return colors[params.dataIndex]
        }
      }
    }
  ]
})

const occupancyChartOption = ref({
  tooltip: {
    trigger: 'axis',
    formatter: function(params) {
      return `${params[0].name}<br/>Occupancy: ${params[0].value}%`
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
    data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  },
  yAxis: {
    type: 'value',
    min: 60,
    max: 100,
    axisLabel: {
      formatter: '{value}%'
    }
  },
  series: [
    {
      name: 'Occupancy Rate',
      type: 'bar',
      itemStyle: {
        color: '#05C7BE'
      },
      data: [85, 82, 88, 90, 87, 85, 88, 92, 89, 88, 85, 88]
    }
  ]
})

const maintenanceChartOption = ref({
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b}: ฿{c} ({d}%)'
  },
  legend: {
    orient: 'horizontal',
    bottom: 'bottom'
  },
  series: [
    {
      name: 'Maintenance Costs',
      type: 'pie',
      radius: '60%',
      data: [
        { value: 3500, name: 'Plumbing' },
        { value: 2800, name: 'Electrical' },
        { value: 1200, name: 'HVAC' },
        { value: 800, name: 'General Repairs' },
        { value: 200, name: 'Others' }
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
          const colors = ['#F59E0B', '#EF4444', '#8B5CF6', '#06B6D4', '#84CC16']
          return colors[params.dataIndex]
        }
      }
    }
  ]
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

const getVerificationScoreColor = (score) => {
  if (score >= 80) return 'text-green-500'
  if (score >= 60) return 'text-blue-500'
  if (score >= 40) return 'text-yellow-500'
  return 'text-red-500'
}

const getVerificationLevel = (score) => {
  if (score >= 80) return 'Verified Landlord'
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

const enableDigitalPayments = () => {
  landlordProfile.value.uses_digital_payments = true
  showDigitalPaymentModal.value = false
}

const enableDigitalLeases = () => {
  landlordProfile.value.uses_digital_leases = true
  showDigitalLeaseModal.value = false
}

// Handle window resize for charts
const handleResize = () => {
  if (incomeChart.value) incomeChart.value.resize()
  if (propertyTypeChart.value) propertyTypeChart.value.resize()
  if (occupancyChart.value) occupancyChart.value.resize()
  if (maintenanceChart.value) maintenanceChart.value.resize()
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
</style>