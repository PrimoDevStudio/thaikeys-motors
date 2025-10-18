<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 font-sans transition-colors duration-300">

    <!-- Agent Info Bar with Agency Branding -->
    <div class="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-4 transition-colors duration-300">
      <div class="flex items-center justify-between mx-auto">
        <!-- Agent Info with Agency Branding -->
        <div class="flex items-center space-x-6">
          <div class="flex items-center space-x-3">
            <!-- Agency Logo/Brand -->
            <div class="relative">
              <div class="w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-800 dark:to-purple-600 rounded-xl flex items-center justify-center">
                <span class="text-sm font-bold text-purple-800 dark:text-purple-200">{{ agencyInfo.initials }}</span>
              </div>
              <div class="absolute -bottom-1 -right-1 w-4 h-4 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-800 dark:to-blue-600 rounded-full flex items-center justify-center border-2 border-white dark:border-gray-800">
                <span class="text-xs font-bold text-blue-800 dark:text-blue-200">{{ agentProfile.initials }}</span>
              </div>
            </div>
          </div>
          
          <div class="text-sm text-brand-navy dark:text-gray-400">
            <span class="font-medium">Welcome back, {{ agentProfile.firstName }} {{ agentProfile.lastName }}</span>
            <div class="text-xs text-gray-500 flex items-center space-x-2">
              <span>{{ agencyInfo.name }} Agent</span>
              <span class="w-1 h-1 bg-gray-400 rounded-full"></span>
              <span :class="getPerformanceBadgeClass(monthlyPerformanceRank)" class="px-2 py-0.5 rounded text-xs font-semibold">
                #{{ monthlyPerformanceRank }} This Month
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
    <!-- Main Layout Container -->
    <div class="flex mx-auto">
      <!-- Agency Agent Sidebar Navigation -->
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
                     activeTab === 'assigned-leads' ? 'bg-brand-red-light text-brand-navy border border-teal-200' : 'text-brand-navy dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700']"
            @click="activeTab = 'assigned-leads'"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
            </svg>
            <span class="font-medium">Assigned Leads</span>
            <span class="bg-orange-100 dark:bg-orange-900/20 text-orange-800 dark:text-orange-400 text-xs font-semibold px-2 py-1 rounded-full ml-auto">{{ assignedLeads.length }}</span>
          </a>
          
          <a 
            href="#" 
            :class="['flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors', 
                     activeTab === 'my-clients' ? 'bg-brand-red-light text-brand-navy border border-teal-200' : 'text-brand-navy dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700']"
            @click="activeTab = 'my-clients'"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"/>
            </svg>
            <span class="font-medium">My Clients</span>
            <span class="bg-brand-red-light/20 text-brand-navy dark:text-brand-red-light text-xs font-semibold px-2 py-1 rounded-full ml-auto">{{ myClients.length }}</span>
          </a>
          
          <a 
            href="#" 
            :class="['flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors', 
                     activeTab === 'my-listings' ? 'bg-brand-red-light text-brand-navy border border-teal-200' : 'text-brand-navy dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700']"
            @click="activeTab = 'my-listings'"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
            </svg>
            <span class="font-medium">My Listings</span>
            <span class="bg-brand-red-light/20 text-brand-navy dark:text-brand-red-light text-xs font-semibold px-2 py-1 rounded-full ml-auto">{{ myListings.length }}</span>
          </a>
          
          <a 
            href="#" 
            :class="['flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors', 
                     activeTab === 'agency-listings' ? 'bg-brand-red-light text-brand-navy border border-teal-200' : 'text-brand-navy dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700']"
            @click="activeTab = 'agency-listings'"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"/>
            </svg>
            <span class="font-medium">Agency Listings</span>
            <div class="ml-auto flex items-center space-x-1">
              <svg class="w-3 h-3 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 15a3 3 0 100-6 3 3 0 000 6z"/>
                <path fill-rule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clip-rule="evenodd"/>
              </svg>
              <span class="text-xs text-gray-500">View Only</span>
            </div>
          </a>
          
          <a 
            href="#" 
            :class="['flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors', 
                     activeTab === 'deal-pipeline' ? 'bg-brand-red-light text-brand-navy border border-teal-200' : 'text-brand-navy dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700']"
            @click="activeTab = 'deal-pipeline'"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
            </svg>
            <span class="font-medium">Deal Pipeline</span>
            <span class="bg-purple-100 dark:bg-purple-900/20 text-purple-800 dark:text-purple-400 text-xs font-semibold px-2 py-1 rounded-full ml-auto">{{ activePipelineDeals }}</span>
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
                     activeTab === 'performance' ? 'bg-brand-red-light text-brand-navy border border-teal-200' : 'text-brand-navy dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700']"
            @click="activeTab = 'performance'"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
            </svg>
            <span class="font-medium">Performance</span>
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
            <span class="font-medium">Profile</span>
            <div v-if="!profileComplete" class="w-2 h-2 bg-yellow-500 rounded-full ml-auto"></div>
          </a>
        </nav>
      </aside>

      <!-- Main Content Area -->
      <main class="flex-1 overflow-y-auto bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <!-- Overview Tab -->
        <div v-if="activeTab === 'overview'" class="p-6">
          <!-- Agency Performance Context -->
          <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 transition-colors duration-300 mb-6">
            <div class="flex items-center justify-between">
              <div>
                <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-2">{{ agencyInfo.name }} Team Performance</h3>
                <p class="text-sm text-brand-navy dark:text-gray-400">Your contribution to agency success</p>
              </div>
              <div class="text-right">
                <div class="text-2xl font-bold text-brand-navy dark:text-white">#{{ monthlyPerformanceRank }}</div>
                <div class="text-sm text-gray-500">out of {{ agencyInfo.totalAgents }} agents</div>
                <div class="text-xs text-green-600 mt-1">{{ commissionSplitPercentage }}% commission split</div>
              </div>
            </div>
            
            <div class="mt-4 grid grid-cols-4 gap-4">
              <div class="text-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div class="text-lg font-bold text-brand-navy dark:text-white">{{ myMonthlyDeals }}</div>
                <div class="text-xs text-gray-500">Your Deals</div>
              </div>
              <div class="text-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div class="text-lg font-bold text-purple-600">{{ formatCurrency(myMonthlyCommission) }}</div>
                <div class="text-xs text-gray-500">Your Commission</div>
              </div>
              <div class="text-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div class="text-lg font-bold text-blue-600">{{ formatCurrency(agencyMonthlyTotal) }}</div>
                <div class="text-xs text-gray-500">Agency Total</div>
              </div>
              <div class="text-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div class="text-lg font-bold text-green-600">{{ myContributionPercentage }}%</div>
                <div class="text-xs text-gray-500">Your Contribution</div>
              </div>
            </div>
          </div>

          <!-- Individual Stats Cards -->
          <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 transition-colors duration-300">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm font-medium text-brand-navy dark:text-gray-400">Assigned Leads</p>
                  <p class="text-3xl font-bold text-brand-navy dark:text-white">{{ assignedLeads.length }}</p>
                  <p class="text-sm text-orange-600 dark:text-orange-400 mt-2">{{ newLeadsThisWeek }} new this week</p>
                </div>
                <div class="w-12 h-12 bg-orange-100 dark:bg-orange-900/20 rounded-xl flex items-center justify-center">
                  <svg class="w-6 h-6 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                  </svg>
                </div>
              </div>
            </div>

            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 transition-colors duration-300">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm font-medium text-brand-navy dark:text-gray-400">My Active Clients</p>
                  <p class="text-3xl font-bold text-brand-navy dark:text-white">{{ myClients.length }}</p>
                  <p class="text-sm text-blue-600 dark:text-blue-400 mt-2">{{ myPipelineValue }} pipeline value</p>
                </div>
                <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-xl flex items-center justify-center">
                  <svg class="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"/>
                  </svg>
                </div>
              </div>
            </div>

            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 transition-colors duration-300">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm font-medium text-brand-navy dark:text-gray-400">My Listings</p>
                  <p class="text-3xl font-bold text-brand-navy dark:text-white">{{ myListings.length }}</p>
                  <p class="text-sm text-purple-600 dark:text-purple-400 mt-2">{{ newListingsThisWeek }} added this week</p>
                </div>
                <div class="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-xl flex items-center justify-center">
                  <svg class="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                  </svg>
                </div>
              </div>
            </div>

            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 transition-colors duration-300">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm font-medium text-brand-navy dark:text-gray-400">Monthly Commission</p>
                  <p class="text-3xl font-bold text-brand-navy dark:text-white">{{ formatCurrency(myMonthlyCommission) }}</p>
                  <p class="text-sm text-green-600 dark:text-green-400 mt-2">{{ commissionGrowth }} from last month</p>
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
                <button class="w-full bg-brand-red-light text-brand-navy py-3 px-4 rounded-lg font-semibold hover:bg-teal-300 transition-colors flex items-center justify-center space-x-2">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                  </svg>
                  <span>Add New Listing</span>
                </button>
                
                <button class="w-full border-2 border-gray-200 dark:border-gray-600 text-brand-navy dark:text-gray-300 py-3 px-4 rounded-lg font-semibold hover:border-gray-300 dark:hover:border-gray-500 transition-colors flex items-center justify-center space-x-2">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                  </svg>
                  <span>Schedule Viewing</span>
                </button>
                
                <button class="w-full border-2 border-gray-200 dark:border-gray-600 text-brand-navy dark:text-gray-300 py-3 px-4 rounded-lg font-semibold hover:border-gray-300 dark:hover:border-gray-500 transition-colors flex items-center justify-center space-x-2">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                  </svg>
                  <span>Contact Lead</span>
                </button>
                
                <button @click="showLeadTransferModal = true" class="w-full border-2 border-orange-200 dark:border-orange-600 text-orange-600 dark:text-orange-400 py-3 px-4 rounded-lg font-semibold hover:border-orange-300 dark:hover:border-orange-500 transition-colors flex items-center justify-center space-x-2">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/>
                  </svg>
                  <span>Request Lead Transfer</span>
                </button>
              </div>
            </div>

            <!-- Recent Lead Activity -->
            <div class="lg:col-span-2 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 transition-colors duration-300">
              <div class="flex items-center justify-between mb-4">
                <h3 class="text-lg font-semibold text-brand-navy dark:text-white">Recent Lead Activity</h3>
                <button class="text-brand-red-light hover:text-teal-500 font-medium text-sm">View All</button>
              </div>
              
              <div class="space-y-4">
                <div v-for="activity in recentLeadActivity" :key="activity.id" class="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors cursor-pointer">
                  <div class="w-12 h-12 bg-gradient-to-br from-orange-100 to-orange-200 dark:from-orange-800 dark:to-orange-600 rounded-full flex-shrink-0 flex items-center justify-center">
                    <svg class="w-6 h-6 text-orange-600 dark:text-orange-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                    </svg>
                  </div>
                  <div class="flex-1">
                    <div class="flex items-center justify-between">
                      <h4 class="font-semibold text-brand-navy dark:text-white">{{ activity.leadName }}</h4>
                      <span class="text-xs text-brand-navy dark:text-gray-400">{{ activity.time }}</span>
                    </div>
                    <p class="text-sm text-brand-navy dark:text-gray-400 mt-1">{{ activity.interest }}</p>
                    <div class="flex items-center space-x-4 mt-2">
                      <span :class="['text-xs font-semibold px-2 py-1 rounded-full', 
                                   activity.status === 'New' ? 'bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-400' : 
                                   activity.status === 'Contacted' ? 'bg-yellow-100 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-400' : 
                                   'bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-400']">
                        {{ activity.status }}
                      </span>
                      <span class="text-sm text-brand-navy dark:text-white">{{ activity.budget }} budget</span>
                      <span class="text-xs text-gray-500">Assigned by {{ activity.assignedBy }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Assigned Leads Tab -->
        <div v-if="activeTab === 'assigned-leads'" class="p-6">
          <div class="flex items-center justify-between mb-6">
            <h2 class="text-2xl font-bold text-brand-navy dark:text-white">Assigned Leads</h2>
            <div class="flex items-center space-x-4">
              <select class="border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-brand-navy dark:text-white rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-red-light">
                <option>All Leads</option>
                <option>New Leads</option>
                <option>Contacted</option>
                <option>In Progress</option>
                <option>High Priority</option>
              </select>
              <button @click="showLeadTransferModal = true" class="bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors flex items-center space-x-2">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/>
                </svg>
                <span>Request Transfer</span>
              </button>
            </div>
          </div>

          <!-- Lead Assignment Stats -->
          <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
            <div class="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg border border-gray-100 dark:border-gray-700">
              <div class="text-2xl font-bold text-orange-600">{{ assignedLeads.length }}</div>
              <div class="text-sm text-gray-500">Total Assigned</div>
              <div class="text-xs text-green-600 mt-1">+{{ newLeadsThisWeek }} this week</div>
            </div>
            <div class="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg border border-gray-100 dark:border-gray-700">
              <div class="text-2xl font-bold text-blue-600">{{ contactedLeadsCount }}</div>
              <div class="text-sm text-gray-500">Contacted</div>
              <div class="text-xs text-blue-600 mt-1">{{ Math.round((contactedLeadsCount/assignedLeads.length)*100) }}% contact rate</div>
            </div>
            <div class="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg border border-gray-100 dark:border-gray-700">
              <div class="text-2xl font-bold text-yellow-600">{{ avgResponseTime }}</div>
              <div class="text-sm text-gray-500">Avg Response Time</div>
              <div class="text-xs text-yellow-600 mt-1">Target: < 2 hours</div>
            </div>
            <div class="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg border border-gray-100 dark:border-gray-700">
              <div class="text-2xl font-bold text-green-600">{{ leadConversionRate }}%</div>
              <div class="text-sm text-gray-500">Conversion Rate</div>
              <div class="text-xs text-green-600 mt-1">Agency avg: {{ agencyAvgConversion }}%</div>
            </div>
          </div>

          <!-- Lead Management Interface -->
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
            <div class="p-6 border-b border-gray-100 dark:border-gray-600">
              <div class="flex items-center justify-between">
                <h3 class="text-lg font-semibold text-brand-navy dark:text-white">Lead Management</h3>
                <div class="flex items-center space-x-4">
                  <div class="relative">
                    <input 
                      v-model="leadSearchQuery"
                      type="text" 
                      placeholder="Search leads..."
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
              <div class="grid grid-cols-7 gap-4 text-sm font-medium text-brand-navy dark:text-gray-400 mb-4">
                <div>Lead Details</div>
                <div>Status</div>
                <div>Interest</div>
                <div>Budget Range</div>
                <div>Assigned By</div>
                <div>Assigned Date</div>
                <div>Actions</div>
              </div>
              
              <div class="space-y-4">
                <div v-for="lead in assignedLeads" :key="lead.id" class="grid grid-cols-7 gap-4 items-center p-4 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-xl transition-colors">
                  <!-- Lead Details -->
                  <div class="flex items-center space-x-3">
                    <div class="w-10 h-10 bg-gradient-to-br from-orange-100 to-orange-200 dark:from-orange-800 dark:to-orange-600 rounded-full flex items-center justify-center">
                      <span class="text-sm font-semibold text-orange-800 dark:text-orange-200">{{ lead.initials }}</span>
                    </div>
                    <div>
                      <div class="font-semibold text-brand-navy dark:text-white">{{ lead.name }}</div>
                      <div class="text-sm text-gray-500">{{ lead.email }}</div>
                      <div class="text-sm text-gray-500">{{ lead.phone }}</div>
                    </div>
                  </div>
                  
                  <!-- Status -->
                  <div>
                    <span :class="['px-3 py-1 rounded-full text-xs font-semibold',
                                 lead.status === 'New' ? 'bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-400' :
                                 lead.status === 'Contacted' ? 'bg-yellow-100 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-400' :
                                 lead.status === 'In Progress' ? 'bg-purple-100 dark:bg-purple-900/20 text-purple-800 dark:text-purple-400' :
                                 'bg-gray-100 dark:bg-gray-600 text-gray-800 dark:text-gray-300']">
                      {{ lead.status }}
                    </span>
                    <div v-if="lead.priority === 'High'" class="text-xs text-red-600 mt-1 font-semibold">High Priority</div>
                  </div>
                  
                  <!-- Interest -->
                  <div>
                    <div class="font-medium text-brand-navy dark:text-white text-sm">{{ lead.propertyType }}</div>
                    <div class="text-sm text-gray-500">{{ lead.preferredArea }}</div>
                    <div class="text-xs text-gray-500">{{ lead.dealType }}</div>
                  </div>
                  
                  <!-- Budget -->
                  <div>
                    <div class="font-medium text-brand-navy dark:text-white">{{ formatCurrency(lead.budgetMin) }} - {{ formatCurrency(lead.budgetMax) }}</div>
                  </div>
                  
                  <!-- Assigned By -->
                  <div>
                    <div class="text-sm text-brand-navy dark:text-white font-medium">{{ lead.assignedBy }}</div>
                    <div class="text-xs text-gray-500">{{ lead.assignedByRole }}</div>
                  </div>
                  
                  <!-- Assigned Date -->
                  <div>
                    <div class="text-sm text-brand-navy dark:text-white">{{ lead.assignedDate }}</div>
                    <div class="text-xs text-gray-500">{{ lead.timeAgo }}</div>
                  </div>
                  
                  <!-- Actions -->
                  <div class="flex items-center space-x-2">
                    <button @click="contactLead(lead)" class="text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 p-1" title="Contact Lead">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                      </svg>
                    </button>
                    <button @click="scheduleMeeting(lead)" class="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 p-1" title="Schedule Meeting">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                      </svg>
                    </button>
                    <button @click="viewLeadDetails(lead)" class="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 p-1" title="View Details">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                      </svg>
                    </button>
                    <button @click="requestTransfer(lead)" class="text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 p-1" title="Request Transfer">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- My Clients Tab -->
        <div v-if="activeTab === 'my-clients'" class="p-6">
          <div class="flex items-center justify-between mb-6">
            <h2 class="text-2xl font-bold text-brand-navy dark:text-white">My Clients</h2>
            <div class="flex items-center space-x-4">
              <select class="border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-brand-navy dark:text-white rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-red-light">
                <option>All Clients</option>
                <option>Active</option>
                <option>Negotiating</option>
                <option>Closed Won</option>
                <option>Follow Up Required</option>
              </select>
              <div class="text-sm text-brand-navy dark:text-gray-400">
                Note: <span class="text-orange-600 font-medium">Agency admin can reassign your clients</span>
              </div>
            </div>
          </div>

          <!-- Client Management Stats -->
          <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
            <div class="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg border border-gray-100 dark:border-gray-700 text-center">
              <div class="text-2xl font-bold text-brand-navy dark:text-white">{{ myClients.length }}</div>
              <div class="text-sm text-gray-500">Total Clients</div>
            </div>
            <div class="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg border border-gray-100 dark:border-gray-700 text-center">
              <div class="text-2xl font-bold text-green-600">{{ activeClientDeals }}</div>
              <div class="text-sm text-gray-500">Active Deals</div>
            </div>
            <div class="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg border border-gray-100 dark:border-gray-700 text-center">
              <div class="text-2xl font-bold text-blue-600">{{ clientSatisfactionScore }}%</div>
              <div class="text-sm text-gray-500">Satisfaction Score</div>
            </div>
            <div class="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg border border-gray-100 dark:border-gray-700 text-center">
              <div class="text-2xl font-bold text-purple-600">{{ myPipelineValue }}</div>
              <div class="text-sm text-gray-500">Pipeline Value</div>
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
              <div class="grid grid-cols-7 gap-4 text-sm font-medium text-brand-navy dark:text-gray-400 mb-4">
                <div>Client</div>
                <div>Status</div>
                <div>Property Interest</div>
                <div>Budget Range</div>
                <div>Last Contact</div>
                <div>Source</div>
                <div>Actions</div>
              </div>
              
              <div class="space-y-4">
                <div v-for="client in myClients" :key="client.id" class="grid grid-cols-7 gap-4 items-center p-4 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-xl transition-colors">
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
                                 client.status === 'Negotiating' ? 'bg-yellow-100 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-400' :
                                 client.status === 'Follow Up' ? 'bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-400' :
                                 'bg-gray-100 dark:bg-gray-600 text-gray-800 dark:text-gray-300']">
                      {{ client.status }}
                    </span>
                    <div v-if="client.reassignable" class="text-xs text-orange-600 mt-1">⚠ Can be reassigned</div>
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
                  
                  <!-- Source -->
                  <div>
                    <div class="text-sm text-brand-navy dark:text-white">{{ client.source }}</div>
                    <div v-if="client.convertedFromLead" class="text-xs text-green-600">Converted Lead</div>
                  </div>
                  
                  <!-- Actions -->
                  <div class="flex items-center space-x-2">
                    <button @click="contactClient(client)" class="text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 p-1">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                      </svg>
                    </button>
                    <button @click="scheduleViewing(client)" class="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 p-1">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                      </svg>
                    </button>
                    <button @click="viewClientHistory(client)" class="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 p-1">
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
        <!-- My Listings Tab -->
        <div v-if="activeTab === 'my-listings'" class="p-6">
          <div class="flex items-center justify-between mb-6">
            <h2 class="text-2xl font-bold text-brand-navy dark:text-white">My Listings</h2>
            <div class="flex items-center space-x-4">
              <select class="border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-brand-navy dark:text-white rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-red-light">
                <option>All Listings</option>
                <option>Available</option>
                <option>Rented/Sold</option>
                <option>Under Review</option>
              </select>
              <button class="bg-brand-red-light text-brand-navy px-6 py-3 rounded-lg font-semibold hover:bg-teal-300 transition-colors flex items-center space-x-2">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                </svg>
                <span>Add New Listing</span>
              </button>
            </div>
          </div>

          <!-- My Listings Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div v-for="listing in myListings" :key="listing.id" class="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-all duration-300">
              <!-- Property Image -->
              <div class="h-48 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-800 dark:to-blue-600 relative">
                <div class="absolute top-4 left-4">
                  <span :class="['px-3 py-1 rounded-full text-xs font-semibold',
                               listing.status === 'Available' ? 'bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-400' :
                               listing.status === 'Rented' ? 'bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-400' :
                               'bg-yellow-100 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-400']">
                    {{ listing.status }}
                  </span>
                </div>
                <div class="absolute top-4 right-4">
                  <span class="bg-purple-600 text-white px-2 py-1 rounded text-xs font-semibold">
                    My Listing
                  </span>
                </div>
                <div class="absolute bottom-4 left-4">
                  <span class="bg-brand-red-light text-brand-navy px-3 py-1 rounded-full text-xs font-semibold">
                    {{ listing.btsDistance }}
                  </span>
                </div>
              </div>

              <!-- Property Details -->
              <div class="p-6">
                <h3 class="font-semibold text-brand-navy dark:text-white mb-2 text-lg">{{ listing.title }}</h3>
                <p class="text-sm text-brand-navy dark:text-gray-400 mb-3 flex items-center">
                  <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  {{ listing.location }}
                </p>
                
                <div class="flex items-center justify-between mb-4">
                  <div>
                    <span class="text-2xl font-bold text-brand-navy dark:text-white">{{ listing.price }}</span>
                    <span class="text-sm text-brand-navy dark:text-gray-400">/month</span>
                  </div>
                  <div class="text-sm text-brand-navy dark:text-gray-400">{{ listing.bedrooms }}bed • {{ listing.bathrooms }}bath</div>
                </div>

                <!-- Property Performance -->
                <div class="grid grid-cols-3 gap-4 mb-4 py-3 border-t border-gray-100 dark:border-gray-600">
                  <div class="text-center">
                    <div class="text-lg font-bold text-brand-navy dark:text-white">{{ listing.views }}</div>
                    <div class="text-xs text-brand-navy dark:text-gray-400">Views</div>
                  </div>
                  <div class="text-center">
                    <div class="text-lg font-bold text-brand-navy dark:text-white">{{ listing.inquiries }}</div>
                    <div class="text-xs text-brand-navy dark:text-gray-400">Inquiries</div>
                  </div>
                  <div class="text-center">
                    <div class="text-lg font-bold text-brand-navy dark:text-white">{{ listing.viewings }}</div>
                    <div class="text-xs text-brand-navy dark:text-gray-400">Viewings</div>
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

        <!-- Agency Listings Tab (Read Only) -->
        <div v-if="activeTab === 'agency-listings'" class="p-6">
          <div class="flex items-center justify-between mb-6">
            <div>
              <h2 class="text-2xl font-bold text-brand-navy dark:text-white">{{ agencyInfo.name }} Listings</h2>
              <p class="text-sm text-gray-500 mt-1">View-only access to all agency listings</p>
            </div>
            <div class="flex items-center space-x-4">
              <select class="border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-brand-navy dark:text-white rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-red-light">
                <option>All Listings</option>
                <option>Available</option>
                <option>Rented/Sold</option>
                <option>My Listings Only</option>
              </select>
              <div class="text-sm text-brand-navy dark:text-gray-400">
                Total: <span class="font-bold text-lg text-brand-red-light">{{ agencyListings.length }}</span>
              </div>
            </div>
          </div>

          <!-- Agency Listings Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div v-for="listing in agencyListings" :key="listing.id" class="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-all duration-300">
              <!-- Property Image -->
              <div class="h-48 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-600 relative">
                <div class="absolute top-4 left-4">
                  <span :class="['px-3 py-1 rounded-full text-xs font-semibold',
                               listing.status === 'Available' ? 'bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-400' :
                               listing.status === 'Rented' ? 'bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-400' :
                               'bg-yellow-100 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-400']">
                    {{ listing.status }}
                  </span>
                </div>
                <div class="absolute top-4 right-4">
                  <span :class="['px-2 py-1 rounded text-xs font-semibold',
                               listing.isMyListing ? 'bg-purple-600 text-white' : 'bg-gray-600 text-white']">
                    {{ listing.isMyListing ? 'My Listing' : listing.agentName }}
                  </span>
                </div>
                <div class="absolute bottom-4 left-4">
                  <span class="bg-brand-red-light text-brand-navy px-3 py-1 rounded-full text-xs font-semibold">
                    {{ listing.btsDistance }}
                  </span>
                </div>
                <div v-if="!listing.isMyListing" class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div class="bg-white bg-opacity-90 rounded-full p-2">
                    <svg class="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 15a3 3 0 100-6 3 3 0 000 6z"/>
                      <path fill-rule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clip-rule="evenodd"/>
                    </svg>
                  </div>
                </div>
              </div>

              <!-- Property Details -->
              <div class="p-6">
                <h3 class="font-semibold text-brand-navy dark:text-white mb-2 text-lg">{{ listing.title }}</h3>
                <p class="text-sm text-brand-navy dark:text-gray-400 mb-3 flex items-center">
                  <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  {{ listing.location }}
                </p>
                
                <div class="flex items-center justify-between mb-4">
                  <div>
                    <span class="text-2xl font-bold text-brand-navy dark:text-white">{{ listing.price }}</span>
                    <span class="text-sm text-brand-navy dark:text-gray-400">/month</span>
                  </div>
                  <div class="text-sm text-brand-navy dark:text-gray-400">{{ listing.bedrooms }}bed • {{ listing.bathrooms }}bath</div>
                </div>

                <!-- Property Performance -->
                <div class="grid grid-cols-3 gap-4 mb-4 py-3 border-t border-gray-100 dark:border-gray-600">
                  <div class="text-center">
                    <div class="text-lg font-bold text-brand-navy dark:text-white">{{ listing.views }}</div>
                    <div class="text-xs text-brand-navy dark:text-gray-400">Views</div>
                  </div>
                  <div class="text-center">
                    <div class="text-lg font-bold text-brand-navy dark:text-white">{{ listing.inquiries }}</div>
                    <div class="text-xs text-brand-navy dark:text-gray-400">Inquiries</div>
                  </div>
                  <div class="text-center">
                    <div class="text-lg font-bold text-brand-navy dark:text-white">{{ listing.viewings }}</div>
                    <div class="text-xs text-brand-navy dark:text-gray-400">Viewings</div>
                  </div>
                </div>

                <!-- Action Buttons -->
                <div class="flex items-center space-x-2">
                  <button v-if="listing.isMyListing" class="flex-1 bg-brand-red-light text-brand-navy py-2 px-4 rounded-lg font-semibold hover:bg-teal-300 transition-colors text-sm">
                    Edit
                  </button>
                  <button class="flex-1 border border-gray-300 dark:border-gray-600 text-brand-navy dark:text-gray-300 py-2 px-4 rounded-lg font-semibold hover:border-gray-400 dark:hover:border-gray-500 transition-colors text-sm">
                    {{ listing.isMyListing ? 'View' : 'View Only' }}
                  </button>
                  <button v-if="!listing.isMyListing" @click="requestListingAccess(listing)" class="text-orange-600 dark:text-orange-400 hover:text-orange-700 p-2" title="Request Access">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Deal Pipeline Tab -->
        <div v-if="activeTab === 'deal-pipeline'" class="p-6">
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
                Pipeline Value: <span class="font-bold text-lg text-brand-red-light">{{ myPipelineValue }}</span>
              </div>
            </div>
          </div>

          <!-- Pipeline Overview Stats -->
          <div class="grid grid-cols-5 gap-4 mb-6">
            <div class="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg border border-gray-100 dark:border-gray-700 text-center">
              <div class="text-2xl font-bold text-blue-600">{{ myPipelineDeals.leads.length }}</div>
              <div class="text-sm text-gray-500">New Leads</div>
              <div class="text-xs text-blue-600 mt-1">{{ formatCurrency(calculateStageValue(myPipelineDeals.leads)) }}</div>
            </div>
            <div class="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg border border-gray-100 dark:border-gray-700 text-center">
              <div class="text-2xl font-bold text-yellow-600">{{ myPipelineDeals.viewings.length }}</div>
              <div class="text-sm text-gray-500">Viewings</div>
              <div class="text-xs text-yellow-600 mt-1">{{ formatCurrency(calculateStageValue(myPipelineDeals.viewings)) }}</div>
            </div>
            <div class="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg border border-gray-100 dark:border-gray-700 text-center">
              <div class="text-2xl font-bold text-orange-600">{{ myPipelineDeals.negotiations.length }}</div>
              <div class="text-sm text-gray-500">Negotiations</div>
              <div class="text-xs text-orange-600 mt-1">{{ formatCurrency(calculateStageValue(myPipelineDeals.negotiations)) }}</div>
            </div>
            <div class="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg border border-gray-100 dark:border-gray-700 text-center">
              <div class="text-2xl font-bold text-purple-600">{{ myPipelineDeals.contracts.length }}</div>
              <div class="text-sm text-gray-500">Contracts</div>
              <div class="text-xs text-purple-600 mt-1">{{ formatCurrency(calculateStageValue(myPipelineDeals.contracts)) }}</div>
            </div>
            <div class="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg border border-gray-100 dark:border-gray-700 text-center">
              <div class="text-2xl font-bold text-green-600">{{ myPipelineDeals.closed.length }}</div>
              <div class="text-sm text-gray-500">Closed</div>
              <div class="text-xs text-green-600 mt-1">{{ formatCurrency(calculateStageValue(myPipelineDeals.closed)) }}</div>
            </div>
          </div>

          <!-- Pipeline Kanban Board -->
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 p-6">
            <div class="grid grid-cols-5 gap-4 h-96 overflow-y-auto">
              <!-- Lead Stage -->
              <div class="space-y-4">
                <div class="flex items-center justify-between">
                  <h3 class="font-semibold text-brand-navy dark:text-white">New Leads</h3>
                  <span class="bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-400 text-xs font-semibold px-2 py-1 rounded-full">{{ myPipelineDeals.leads.length }}</span>
                </div>
                <div class="space-y-3">
                  <div v-for="deal in myPipelineDeals.leads" :key="deal.id" class="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg border-l-4 border-blue-500 cursor-pointer hover:shadow-md transition-shadow">
                    <div class="font-semibold text-brand-navy dark:text-white text-sm">{{ deal.clientName }}</div>
                    <div class="text-xs text-gray-500 mt-1">{{ deal.propertyType }}</div>
                    <div class="text-xs text-gray-600 dark:text-gray-400 mt-1">{{ deal.area }}</div>
                    <div class="flex items-center justify-between mt-2">
                      <span class="text-sm font-bold text-blue-600">{{ formatCurrency(deal.value) }}</span>
                      <span class="text-xs text-gray-500">{{ deal.daysInStage }}d</span>
                    </div>
                    <div class="text-xs text-gray-500 mt-1">Commission: {{ formatCurrency(deal.expectedCommission) }}</div>
                    <div class="text-xs text-orange-600 mt-1">Source: {{ deal.source }}</div>
                  </div>
                </div>
              </div>

              <!-- Viewing Stage -->
              <div class="space-y-4">
                <div class="flex items-center justify-between">
                  <h3 class="font-semibold text-brand-navy dark:text-white">Viewings</h3>
                  <span class="bg-yellow-100 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-400 text-xs font-semibold px-2 py-1 rounded-full">{{ myPipelineDeals.viewings.length }}</span>
                </div>
                <div class="space-y-3">
                  <div v-for="deal in myPipelineDeals.viewings" :key="deal.id" class="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg border-l-4 border-yellow-500 cursor-pointer hover:shadow-md transition-shadow">
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
                  <span class="bg-orange-100 dark:bg-orange-900/20 text-orange-800 dark:text-orange-400 text-xs font-semibold px-2 py-1 rounded-full">{{ myPipelineDeals.negotiations.length }}</span>
                </div>
                <div class="space-y-3">
                  <div v-for="deal in myPipelineDeals.negotiations" :key="deal.id" class="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg border-l-4 border-orange-500 cursor-pointer hover:shadow-md transition-shadow">
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
                  <span class="bg-purple-100 dark:bg-purple-900/20 text-purple-800 dark:text-purple-400 text-xs font-semibold px-2 py-1 rounded-full">{{ myPipelineDeals.contracts.length }}</span>
                </div>
                <div class="space-y-3">
                  <div v-for="deal in myPipelineDeals.contracts" :key="deal.id" class="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg border-l-4 border-purple-500 cursor-pointer hover:shadow-md transition-shadow">
                    <div class="font-semibold text-brand-navy dark:text-white text-sm">{{ deal.clientName }}</div>
                    <div class="text-xs text-gray-500 mt-1">{{ deal.propertyType }}</div>
                    <div class="text-xs text-gray-600 dark:text-gray-400 mt-1">{{ deal.area }}</div>
                    <div class="flex items-center justify-between mt-2">
                      <span class="text-sm font-bold text-purple-600">{{ formatCurrency(deal.value) }}</span>
                      <span class="text-xs text-gray-500">{{ deal.daysInStage }}d</span>
                    </div>
                    <div class="text-xs text-gray-500 mt-1">Commission: {{ formatCurrency(deal.expectedCommission) }}</div>
                    <div class="text-xs text-purple-600 mt-1">Agency commission split: {{ commissionSplitPercentage }}%</div>
                  </div>
                </div>
              </div>

              <!-- Closed Stage -->
              <div class="space-y-4">
                <div class="flex items-center justify-between">
                  <h3 class="font-semibold text-brand-navy dark:text-white">Closed</h3>
                  <span class="bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-400 text-xs font-semibold px-2 py-1 rounded-full">{{ myPipelineDeals.closed.length }}</span>
                </div>
                <div class="space-y-3">
                  <div v-for="deal in myPipelineDeals.closed" :key="deal.id" class="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg border-l-4 border-green-500 cursor-pointer hover:shadow-md transition-shadow">
                    <div class="font-semibold text-brand-navy dark:text-white text-sm">{{ deal.clientName }}</div>
                    <div class="text-xs text-gray-500 mt-1">{{ deal.propertyType }}</div>
                    <div class="text-xs text-gray-600 dark:text-gray-400 mt-1">{{ deal.area }}</div>
                    <div class="flex items-center justify-between mt-2">
                      <span class="text-sm font-bold text-green-600">{{ formatCurrency(deal.value) }}</span>
                      <span class="text-xs text-gray-500">{{ deal.closedDate }}</span>
                    </div>
                    <div class="text-xs text-green-600 mt-1 font-semibold">Earned: {{ formatCurrency(deal.myCommission) }}</div>
                    <div class="text-xs text-gray-500 mt-1">Agency share: {{ formatCurrency(deal.agencyCommission) }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Pipeline Performance Analytics -->
          <div class="grid grid-cols-3 gap-6 mt-6">
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 class="font-semibold text-brand-navy dark:text-white mb-3">My Conversion Rates</h3>
              <div class="space-y-2">
                <div class="flex justify-between text-sm">
                  <span class="text-gray-600 dark:text-gray-400">Lead → Viewing</span>
                  <span class="font-semibold text-brand-navy dark:text-white">{{ myConversionRates.leadToViewing }}%</span>
                </div>
                <div class="flex justify-between text-sm">
                  <span class="text-gray-600 dark:text-gray-400">Viewing → Negotiation</span>
                  <span class="font-semibold text-brand-navy dark:text-white">{{ myConversionRates.viewingToNegotiation }}%</span>
                </div>
                <div class="flex justify-between text-sm">
                  <span class="text-gray-600 dark:text-gray-400">Negotiation → Contract</span>
                  <span class="font-semibold text-brand-navy dark:text-white">{{ myConversionRates.negotiationToContract }}%</span>
                </div>
                <div class="flex justify-between text-sm">
                  <span class="text-gray-600 dark:text-gray-400">Contract → Closed</span>
                  <span class="font-semibold text-brand-navy dark:text-white">{{ myConversionRates.contractToClosed }}%</span>
                </div>
              </div>
            </div>

            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 class="font-semibold text-brand-navy dark:text-white mb-3">Agency Comparison</h3>
              <div class="space-y-2">
                <div class="flex justify-between text-sm">
                  <span class="text-gray-600 dark:text-gray-400">My Close Rate</span>
                  <span class="font-semibold text-brand-navy dark:text-white">{{ myCloseRate }}%</span>
                </div>
                <div class="flex justify-between text-sm">
                  <span class="text-gray-600 dark:text-gray-400">Agency Average</span>
                  <span class="font-semibold text-gray-500">{{ agencyAvgCloseRate }}%</span>
                </div>
                <div class="flex justify-between text-sm">
                  <span class="text-gray-600 dark:text-gray-400">My Ranking</span>
                  <span class="font-semibold text-purple-600">#{{ monthlyPerformanceRank }} of {{ agencyInfo.totalAgents }}</span>
                </div>
                <div class="flex justify-between text-sm">
                  <span class="text-gray-600 dark:text-gray-400">Performance Tier</span>
                  <span :class="getPerformanceBadgeClass(monthlyPerformanceRank)" class="font-semibold text-xs px-2 py-1 rounded">{{ getPerformanceTier(monthlyPerformanceRank) }}</span>
                </div>
              </div>
            </div>

            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 class="font-semibold text-brand-navy dark:text-white mb-3">This Month</h3>
              <div class="space-y-2">
                <div class="flex justify-between text-sm">
                  <span class="text-gray-600 dark:text-gray-400">Deals Closed</span>
                  <span class="font-semibold text-green-600">{{ myMonthlyDeals }}</span>
                </div>
                <div class="flex justify-between text-sm">
                  <span class="text-gray-600 dark:text-gray-400">Total Volume</span>
                  <span class="font-semibold text-brand-navy dark:text-white">{{ formatCurrency(myMonthlyVolume) }}</span>
                </div>
                <div class="flex justify-between text-sm">
                  <span class="text-gray-600 dark:text-gray-400">My Commission</span>
                  <span class="font-semibold text-green-600">{{ formatCurrency(myMonthlyCommission) }}</span>
                </div>
                <div class="flex justify-between text-sm">
                  <span class="text-gray-600 dark:text-gray-400">Agency Share</span>
                  <span class="font-semibold text-purple-600">{{ formatCurrency(agencyMonthlyShare) }}</span>
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

          <!-- Commission Split Information -->
          <div class="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-xl p-4 mb-6">
            <div class="flex items-center space-x-2">
              <svg class="w-5 h-5 text-yellow-600" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/>
              </svg>
              <div>
                <div class="font-semibold text-yellow-800 dark:text-yellow-400">Commission Split Structure</div>
                <div class="text-sm text-yellow-700 dark:text-yellow-500">
                  You receive {{ commissionSplitPercentage }}% of total commission • {{ agencyInfo.name }} receives {{ 100 - commissionSplitPercentage }}%
                </div>
              </div>
            </div>
          </div>

          <!-- Commission Overview Cards -->
          <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm font-medium text-brand-navy dark:text-gray-400">My Total Earned</p>
                  <p class="text-3xl font-bold text-brand-navy dark:text-white">{{ formatCurrency(myTotalEarned) }}</p>
                  <p class="text-sm text-green-600 dark:text-green-400 mt-2">{{ formatCurrency(myMonthlyGrowth) }} this month</p>
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
                  <p class="text-sm font-medium text-brand-navy dark:text-gray-400">Agency Total Generated</p>
                  <p class="text-3xl font-bold text-brand-navy dark:text-white">{{ formatCurrency(agencyTotalGenerated) }}</p>
                  <p class="text-sm text-purple-600 dark:text-purple-400 mt-2">From your deals</p>
                </div>
                <div class="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-xl flex items-center justify-center">
                  <svg class="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                  </svg>
                </div>
              </div>
            </div>

            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm font-medium text-brand-navy dark:text-gray-400">Average Commission</p>
                  <p class="text-3xl font-bold text-brand-navy dark:text-white">{{ formatCurrency(myAverageCommission) }}</p>
                  <p class="text-sm text-blue-600 dark:text-blue-400 mt-2">Per deal closed</p>
                </div>
                <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-xl flex items-center justify-center">
                  <svg class="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <!-- Commission History -->
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
            <div class="p-6 border-b border-gray-100 dark:border-gray-600">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white">Commission History</h3>
            </div>
            
            <div class="p-6">
              <div class="grid grid-cols-9 gap-4 text-sm font-medium text-brand-navy dark:text-gray-400 mb-4">
                <div>Client</div>
                <div>Property</div>
                <div>Deal Type</div>
                <div>Deal Value</div>
                <div>Total Commission</div>
                <div>My Share</div>
                <div>Agency Share</div>
                <div>Status</div>
                <div>Date</div>
              </div>
              
              <div class="space-y-3">
                <div v-for="commission in myCommissionHistory" :key="commission.id" class="grid grid-cols-9 gap-4 items-center p-4 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-xl transition-colors">
                  <div>
                    <div class="font-semibold text-brand-navy dark:text-white text-sm">{{ commission.clientName }}</div>
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
                  <div class="font-bold text-gray-600 dark:text-gray-400">{{ formatCurrency(commission.totalCommission) }}</div>
                  <div class="font-bold text-green-600">{{ formatCurrency(commission.myShare) }}</div>
                  <div class="font-bold text-purple-600">{{ formatCurrency(commission.agencyShare) }}</div>
                  <div>
                    <span class="px-2 py-1 text-xs font-semibold rounded-full" :class="commission.status === 'Paid' ? 'bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-400' : 'bg-yellow-100 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-400'">
                      {{ commission.status }}
                    </span>
                  </div>
                  <div class="text-sm text-brand-navy dark:text-white">{{ commission.date }}</div>
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
                <div class="text-xs text-orange-600 mt-1">Agency admin can view your communications</div>
              </div>
              <div class="space-y-2 p-4">
                <div v-for="conversation in conversations" :key="conversation.id" class="p-3 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg cursor-pointer">
                  <div class="flex items-center space-x-3">
                    <div class="w-8 h-8 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-800 dark:to-blue-600 rounded-full"></div>
                    <div class="flex-1">
                      <div class="font-semibold text-brand-navy dark:text-white text-sm">{{ conversation.name }}</div>
                      <div class="text-xs text-gray-500 truncate">{{ conversation.lastMessage }}</div>
                      <div class="text-xs text-gray-400">{{ conversation.source }}</div>
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
        <!-- Performance Tab -->
        <div v-if="activeTab === 'performance'" class="p-6">
          <div class="flex items-center justify-between mb-6">
            <h2 class="text-2xl font-bold text-brand-navy dark:text-white">Performance Analytics</h2>
            <div class="flex items-center space-x-4">
              <select class="border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-brand-navy dark:text-white rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-red-light">
                <option>This Month</option>
                <option>Last 3 Months</option>
                <option>This Year</option>
                <option>All Time</option>
              </select>
              <div class="text-sm text-brand-navy dark:text-gray-400">
                Agency Rank: <span class="font-bold text-lg text-purple-600">#{{ monthlyPerformanceRank }}</span>
              </div>
            </div>
          </div>

          <!-- Performance Overview -->
          <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm font-medium text-brand-navy dark:text-gray-400">Deals Closed</p>
                  <p class="text-3xl font-bold text-brand-navy dark:text-white">{{ myMonthlyDeals }}</p>
                  <div class="flex items-center mt-2">
                    <span :class="['text-sm font-semibold', myDealsGrowth >= 0 ? 'text-green-600' : 'text-red-600']">
                      {{ myDealsGrowth >= 0 ? '+' : '' }}{{ myDealsGrowth }}%
                    </span>
                    <span class="text-sm text-gray-500 ml-2">vs last month</span>
                  </div>
                </div>
                <div class="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-xl flex items-center justify-center">
                  <svg class="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
              </div>
            </div>

            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm font-medium text-brand-navy dark:text-gray-400">Client Satisfaction</p>
                  <p class="text-3xl font-bold text-brand-navy dark:text-white">{{ clientSatisfactionScore }}%</p>
                  <div class="flex items-center mt-2">
                    <div class="flex">
                      <svg v-for="i in 5" :key="i" class="w-4 h-4" :class="i <= Math.round(clientSatisfactionScore/20) ? 'text-yellow-400' : 'text-gray-300'" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    </div>
                    <span class="text-sm text-gray-500 ml-2">{{ totalReviews }} reviews</span>
                  </div>
                </div>
                <div class="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/20 rounded-xl flex items-center justify-center">
                  <svg class="w-6 h-6 text-yellow-600 dark:text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
                  </svg>
                </div>
              </div>
            </div>

            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm font-medium text-brand-navy dark:text-gray-400">Response Time</p>
                  <p class="text-3xl font-bold text-brand-navy dark:text-white">{{ avgResponseTime }}</p>
                  <div class="flex items-center mt-2">
                    <span class="text-sm text-blue-600">Agency target: < 2h</span>
                  </div>
                </div>
                <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-xl flex items-center justify-center">
                  <svg class="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
              </div>
            </div>

            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm font-medium text-brand-navy dark:text-gray-400">Lead Conversion</p>
                  <p class="text-3xl font-bold text-brand-navy dark:text-white">{{ leadConversionRate }}%</p>
                  <div class="flex items-center mt-2">
                    <span class="text-sm text-gray-500">Agency avg: {{ agencyAvgConversion }}%</span>
                  </div>
                </div>
                <div class="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-xl flex items-center justify-center">
                  <svg class="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <!-- Performance Comparison -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Agency Performance Comparison</h3>
              <div class="space-y-4">
                <div class="flex items-center justify-between">
                  <span class="text-sm text-brand-navy dark:text-gray-400">Your Monthly Deals</span>
                  <span class="font-semibold text-brand-navy dark:text-white">{{ myMonthlyDeals }}</span>
                </div>
                <div class="flex items-center justify-between">
                  <span class="text-sm text-brand-navy dark:text-gray-400">Agency Average</span>
                  <span class="font-semibold text-gray-500">{{ agencyAvgDeals }}</span>
                </div>
                <div class="flex items-center justify-between">
                  <span class="text-sm text-brand-navy dark:text-gray-400">Top Performer</span>
                  <span class="font-semibold text-green-600">{{ agencyTopPerformer }} deals</span>
                </div>
                <div class="flex items-center justify-between">
                  <span class="text-sm text-brand-navy dark:text-gray-400">Your Ranking</span>
                  <span :class="getPerformanceBadgeClass(monthlyPerformanceRank)" class="font-semibold text-sm px-2 py-1 rounded">
                    #{{ monthlyPerformanceRank }} of {{ agencyInfo.totalAgents }}
                  </span>
                </div>
              </div>
            </div>

            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Performance Metrics</h3>
              <div class="space-y-4">
                <div>
                  <div class="flex justify-between text-sm mb-1">
                    <span class="text-brand-navy dark:text-gray-400">Deal Closure Rate</span>
                    <span class="font-semibold text-brand-navy dark:text-white">{{ myCloseRate }}%</span>
                  </div>
                  <div class="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                    <div class="bg-green-600 h-2 rounded-full" :style="`width: ${myCloseRate}%`"></div>
                  </div>
                </div>
                <div>
                  <div class="flex justify-between text-sm mb-1">
                    <span class="text-brand-navy dark:text-gray-400">Client Satisfaction</span>
                    <span class="font-semibold text-brand-navy dark:text-white">{{ clientSatisfactionScore }}%</span>
                  </div>
                  <div class="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                    <div class="bg-yellow-600 h-2 rounded-full" :style="`width: ${clientSatisfactionScore}%`"></div>
                  </div>
                </div>
                <div>
                  <div class="flex justify-between text-sm mb-1">
                    <span class="text-brand-navy dark:text-gray-400">Lead Conversion</span>
                    <span class="font-semibold text-brand-navy dark:text-white">{{ leadConversionRate }}%</span>
                  </div>
                  <div class="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                    <div class="bg-purple-600 h-2 rounded-full" :style="`width: ${leadConversionRate}%`"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Profile Tab -->
        <div v-if="activeTab === 'profile'" class="p-6">
          <div class="flex items-center justify-between mb-6">
            <h2 class="text-2xl font-bold text-brand-navy dark:text-white">Agent Profile</h2>
            <div class="flex items-center space-x-4">
              <div class="text-sm text-brand-navy dark:text-gray-400">
                Agency: <span class="font-bold text-purple-600">{{ agencyInfo.name }}</span>
              </div>
              <button class="bg-brand-red-light text-brand-navy px-6 py-3 rounded-lg font-semibold hover:bg-teal-300 transition-colors">
                Save Changes
              </button>
            </div>
          </div>

          <!-- Agency Restrictions Notice -->
          <div class="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-700 rounded-xl p-4 mb-6">
            <div class="flex items-center space-x-2">
              <svg class="w-5 h-5 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/>
              </svg>
              <div>
                <div class="font-semibold text-orange-800 dark:text-orange-400">Agency Agent Restrictions</div>
                <div class="text-sm text-orange-700 dark:text-orange-500">
                  • Cannot transfer between agencies • Agency admin can reassign your clients/leads • Limited to assigned properties
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

            <!-- Agency Information -->
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Agency Information</h3>
              <div class="space-y-4">
                <div>
                  <label class="block text-sm font-medium text-brand-navy dark:text-gray-300 mb-2">Agency Name</label>
                  <input type="text" :value="agencyInfo.name" disabled class="w-full px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg bg-gray-100 dark:bg-gray-600 text-gray-500 cursor-not-allowed">
                </div>
                <div>
                  <label class="block text-sm font-medium text-brand-navy dark:text-gray-300 mb-2">Commission Split</label>
                  <input type="text" :value="`${commissionSplitPercentage}% (You) / ${100 - commissionSplitPercentage}% (Agency)`" disabled class="w-full px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg bg-gray-100 dark:bg-gray-600 text-gray-500 cursor-not-allowed">
                </div>
                <div>
                  <label class="block text-sm font-medium text-brand-navy dark:text-gray-300 mb-2">Agent ID</label>
                  <input type="text" :value="agentProfile.agentId" disabled class="w-full px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg bg-gray-100 dark:bg-gray-600 text-gray-500 cursor-not-allowed">
                </div>
                <div>
                  <label class="block text-sm font-medium text-brand-navy dark:text-gray-300 mb-2">Join Date</label>
                  <input type="text" :value="agentProfile.joinDate" disabled class="w-full px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg bg-gray-100 dark:bg-gray-600 text-gray-500 cursor-not-allowed">
                </div>
              </div>
            </div>
          </div>

          <!-- Professional Specializations -->
          <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 mb-6">
            <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Professional Specializations</h3>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
              <label v-for="specialization in availableSpecializations" :key="specialization" class="flex items-center p-3 border border-gray-200 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer">
                <input type="checkbox" :value="specialization" v-model="agentProfile.specializations" class="mr-3">
                <span class="text-sm text-brand-navy dark:text-white">{{ specialization }}</span>
              </label>
            </div>
          </div>

          <!-- Performance Summary -->
          <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
            <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Performance Summary</h3>
            <div class="grid grid-cols-4 gap-6 text-center">
              <div>
                <div class="text-2xl font-bold text-brand-navy dark:text-white">{{ totalDealsCompleted }}</div>
                <div class="text-sm text-gray-500">Deals Completed</div>
              </div>
              <div>
                <div class="text-2xl font-bold text-brand-navy dark:text-white">{{ clientSatisfactionScore }}%</div>
                <div class="text-sm text-gray-500">Satisfaction Rate</div>
              </div>
              <div>
                <div class="text-2xl font-bold text-brand-navy dark:text-white">#{{ monthlyPerformanceRank }}</div>
                <div class="text-sm text-gray-500">Agency Ranking</div>
              </div>
              <div>
                <div class="text-2xl font-bold text-brand-navy dark:text-white">{{ formatCurrency(myTotalEarned) }}</div>
                <div class="text-sm text-gray-500">Total Earned</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
    <!-- Lead Transfer Request Modal -->
    <div v-if="showLeadTransferModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div class="bg-white dark:bg-gray-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div class="p-6 border-b border-gray-200 dark:border-gray-600">
          <div class="flex items-center justify-between">
            <h3 class="text-xl font-semibold text-brand-navy dark:text-white">Request Lead Transfer</h3>
            <button @click="showLeadTransferModal = false" class="text-brand-navy dark:text-gray-400 hover:text-brand-red-light">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>
        </div>
        <div class="p-6">
          <div class="mb-4">
            <label class="block text-sm font-medium text-brand-navy dark:text-gray-300 mb-2">Select Lead to Transfer</label>
            <select v-model="selectedLeadForTransfer" class="w-full px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-red-light bg-white dark:bg-gray-700 text-brand-navy dark:text-white">
              <option value="">Select a lead...</option>
              <option v-for="lead in assignedLeads" :key="lead.id" :value="lead.id">{{ lead.name }} - {{ lead.propertyType }}</option>
            </select>
          </div>
          <div class="mb-4">
            <label class="block text-sm font-medium text-brand-navy dark:text-gray-300 mb-2">Transfer To</label>
            <select v-model="transferToAgent" class="w-full px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-red-light bg-white dark:bg-gray-700 text-brand-navy dark:text-white">
              <option value="">Select agent...</option>
              <option value="agency-admin">Agency Admin</option>
              <option v-for="agent in otherAgents" :key="agent.id" :value="agent.id">{{ agent.name }}</option>
            </select>
          </div>
          <div class="mb-4">
            <label class="block text-sm font-medium text-brand-navy dark:text-gray-300 mb-2">Reason for Transfer</label>
            <textarea v-model="transferReason" rows="3" class="w-full px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-red-light bg-white dark:bg-gray-700 text-brand-navy dark:text-white" placeholder="Explain why you're requesting this transfer..."></textarea>
          </div>
          <div class="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-700 rounded-lg p-3 mb-4">
            <p class="text-sm text-orange-800 dark:text-orange-400">
              <strong>Note:</strong> Transfer requests must be approved by agency admin. You may lose commission on transferred leads.
            </p>
          </div>
          <div class="flex space-x-4">
            <button @click="submitTransferRequest" class="flex-1 bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors">
              Submit Transfer Request
            </button>
            <button @click="showLeadTransferModal = false" class="flex-1 border border-gray-300 dark:border-gray-600 text-brand-navy dark:text-gray-300 py-3 rounded-lg font-semibold hover:border-gray-400 transition-colors">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// Meta tags
useHead({
  title: 'Agency Agent Dashboard - ThaiKeys',
  meta: [
    {
      name: 'description',
      content: 'Professional agency agent dashboard for managing assigned leads, clients, listings, and performance within an agency structure.'
    }
  ]
})

// Reactive data
const searchQuery = ref('')
const leadSearchQuery = ref('')
const clientSearchQuery = ref('')
const activeTab = ref('overview')
const showLeadTransferModal = ref(false)
const selectedLeadForTransfer = ref('')
const transferToAgent = ref('')
const transferReason = ref('')
const unreadNotifications = ref(5)
const unreadMessages = ref(12)

// Agency and Agent Information
const agencyInfo = ref({
  name: 'Bangkok Premium Properties',
  initials: 'BPP',
  totalAgents: 15,
  owner: 'James Thompson'
})

const agentProfile = ref({
  firstName: 'Sarah',
  lastName: 'Wilson',
  fullName: 'Sarah Wilson',
  initials: 'SW',
  email: 'sarah.wilson@bpp.co.th',
  phone: '+66 2 123 4567',
  agentId: 'BPP-007',
  joinDate: '2023-08-15',
  experience: '6-10',
  specializations: ['Condominiums', 'Luxury Properties', 'BTS Areas']
})

const availableSpecializations = [
  'Condominiums', 'Houses', 'Townhouses', 'Luxury Properties', 
  'BTS Areas', 'Investment Properties', 'Commercial', 'Student Housing'
]

// Performance and Commission Data
const monthlyPerformanceRank = ref(3)
const commissionSplitPercentage = ref(65) // Agent gets 65%, Agency gets 35%
const myMonthlyDeals = ref(7)
const myMonthlyCommission = ref(95000)
const myMonthlyVolume = ref(2850000)
const agencyMonthlyTotal = ref(12500000)
const agencyMonthlyShare = ref(52500) // 35% of agent's deals
const myContributionPercentage = ref(23) // Agent's contribution to agency total
const commissionGrowth = ref('+18%')
const myDealsGrowth = ref(16)

// Lead Management Data
const assignedLeads = ref([
  {
    id: 1,
    name: 'Michael Chen',
    initials: 'MC',
    email: 'michael.chen@email.com',
    phone: '+66 81 234 5678',
    status: 'New',
    propertyType: 'Condo',
    preferredArea: 'Sukhumvit',
    budgetMin: 35000,
    budgetMax: 50000,
    dealType: 'Rental',
    assignedBy: 'James Thompson',
    assignedByRole: 'Agency Owner',
    assignedDate: '2024-03-20',
    timeAgo: '2 hours ago',
    priority: 'High',
    source: 'Agency Assignment'
  },
  {
    id: 2,
    name: 'Lisa Anderson',
    initials: 'LA',
    email: 'lisa.anderson@email.com',
    phone: '+66 82 345 6789',
    status: 'Contacted',
    propertyType: 'House',
    preferredArea: 'Thonglor',
    budgetMin: 80000,
    budgetMax: 120000,
    dealType: 'Purchase',
    assignedBy: 'Mark Johnson',
    assignedByRole: 'Senior Agent',
    assignedDate: '2024-03-18',
    timeAgo: '2 days ago',
    priority: 'Medium',
    source: 'Lead Transfer'
  },
  {
    id: 3,
    name: 'David Kim',
    initials: 'DK',
    email: 'david.kim@email.com',
    phone: '+66 83 456 7890',
    status: 'In Progress',
    propertyType: 'Studio',
    preferredArea: 'Phrom Phong',
    budgetMin: 25000,
    budgetMax: 35000,
    dealType: 'Rental',
    assignedBy: 'System',
    assignedByRole: 'Auto-Assignment',
    assignedDate: '2024-03-15',
    timeAgo: '5 days ago',
    priority: 'Low',
    source: 'Website Inquiry'
  }
])

const newLeadsThisWeek = ref(5)
const contactedLeadsCount = ref(8)
const avgResponseTime = ref('1.8h')
const leadConversionRate = ref(34)
const agencyAvgConversion = ref(28)

// Client Management Data
const myClients = ref([
  {
    id: 1,
    name: 'Emma Thompson',
    initials: 'ET',
    email: 'emma.thompson@email.com',
    status: 'Active',
    propertyType: 'Condo',
    preferredArea: 'Asok',
    budgetMin: 40000,
    budgetMax: 60000,
    dealType: 'Rental',
    lastContact: '1 day ago',
    contactMethod: 'Line',
    source: 'Converted Lead',
    convertedFromLead: true,
    reassignable: false
  },
  {
    id: 2,
    name: 'Robert Johnson',
    initials: 'RJ',
    email: 'robert.johnson@email.com',
    status: 'Negotiating',
    propertyType: 'House',
    preferredArea: 'Ekkamai',
    budgetMin: 90000,
    budgetMax: 150000,
    dealType: 'Purchase',
    lastContact: '3 hours ago',
    contactMethod: 'WhatsApp',
    source: 'Agency Referral',
    convertedFromLead: false,
    reassignable: true
  }
])

const activeClientDeals = ref(5)
const clientSatisfactionScore = ref(92)
const myPipelineValue = ref('฿2.8M')

// Listings Data
const myListings = ref([
  {
    id: 1,
    title: 'Modern 2BR Condo Near BTS',
    location: 'Sukhumvit 24, Phrom Phong',
    price: '฿42,000',
    bedrooms: 2,
    bathrooms: 2,
    status: 'Available',
    views: 189,
    inquiries: 7,
    viewings: 3,
    btsDistance: '1 min to Phrom Phong BTS',
    isMyListing: true
  },
  {
    id: 2,
    title: 'Luxury Studio Asok',
    location: 'Sukhumvit 21, Asok',
    price: '฿35,000',
    bedrooms: 1,
    bathrooms: 1,
    status: 'Available',
    views: 234,
    inquiries: 12,
    viewings: 6,
    btsDistance: '2 min to Asok BTS',
    isMyListing: true
  }
])

const agencyListings = ref([
  ...myListings.value.map(listing => ({ ...listing, isMyListing: true })),
  {
    id: 3,
    title: 'Premium 3BR Penthouse',
    location: 'Sukhumvit 39, Phrom Phong',
    price: '฿120,000',
    bedrooms: 3,
    bathrooms: 3,
    status: 'Available',
    views: 456,
    inquiries: 18,
    viewings: 8,
    btsDistance: '1 min to Phrom Phong BTS',
    isMyListing: false,
    agentName: 'Mark Johnson'
  },
  {
    id: 4,
    title: 'Cozy 1BR Near Emporium',
    location: 'Sukhumvit 24, Phrom Phong',
    price: '฿38,000',
    bedrooms: 1,
    bathrooms: 1,
    status: 'Rented',
    views: 298,
    inquiries: 15,
    viewings: 9,
    btsDistance: '3 min to Phrom Phong BTS',
    isMyListing: false,
    agentName: 'Jane Smith'
  }
])

const newListingsThisWeek = ref(2)

// Deal Pipeline Data
const activePipelineDeals = ref(12)
const myPipelineDeals = ref({
  leads: [
    {
      id: 1,
      clientName: 'Michael Chen',
      propertyType: 'Condo',
      area: 'Sukhumvit',
      value: 45000,
      expectedCommission: 29250, // Agent's 65% share
      daysInStage: 2,
      source: 'Agency Assignment'
    },
    {
      id: 2,
      clientName: 'Lisa Anderson',
      propertyType: 'House',
      area: 'Thonglor',
      value: 120000,
      expectedCommission: 78000,
      daysInStage: 4,
      source: 'Lead Transfer'
    }
  ],
  viewings: [
    {
      id: 3,
      clientName: 'David Kim',
      propertyType: 'Studio',
      area: 'Phrom Phong',
      value: 30000,
      expectedCommission: 19500,
      daysInStage: 6,
      nextViewing: 'Tomorrow 3PM'
    }
  ],
  negotiations: [
    {
      id: 4,
      clientName: 'Emma Thompson',
      propertyType: 'Condo',
      area: 'Asok',
      value: 50000,
      expectedCommission: 32500,
      daysInStage: 8,
      negotiationStatus: 'Price discussion'
    }
  ],
  contracts: [
    {
      id: 5,
      clientName: 'Robert Johnson',
      propertyType: 'House',
      area: 'Ekkamai',
      value: 95000,
      expectedCommission: 61750,
      daysInStage: 3
    }
  ],
  closed: [
    {
      id: 6,
      clientName: 'Sarah Miller',
      propertyType: 'Condo',
      area: 'Nana',
      value: 38000,
      expectedCommission: 24700,
      myCommission: 24700,
      agencyCommission: 13300,
      closedDate: '1 week ago'
    }
  ]
})

// Performance Analytics
const myConversionRates = ref({
  leadToViewing: 72,
  viewingToNegotiation: 68,
  negotiationToContract: 65,
  contractToClosed: 89
})

const myCloseRate = ref(67)
const agencyAvgCloseRate = ref(58)
const agencyAvgDeals = ref(4.2)
const agencyTopPerformer = ref(12)
const totalReviews = ref(89)
const totalDealsCompleted = ref(67)

// Commission Data
const pendingCommissionAmount = ref(85000)
const pendingCommissionDeals = ref(2)
const myTotalEarned = ref(420000)
const myMonthlyGrowth = ref(22000)
const agencyTotalGenerated = ref(230000) // Total commission generated for agency from agent's deals
const myAverageCommission = ref(31500)

const myCommissionHistory = ref([
  {
    id: 1,
    clientName: 'Sarah Miller',
    propertyTitle: 'Modern Condo',
    area: 'Nana',
    dealType: 'Rental',
    dealValue: 38000,
    totalCommission: 38000,
    myShare: 24700,
    agencyShare: 13300,
    status: 'Paid',
    date: '2024-03-10'
  },
  {
    id: 2,
    clientName: 'Tom Wilson',
    propertyTitle: 'Luxury Apartment',
    area: 'Thonglor',
    dealType: 'Rental',
    dealValue: 65000,
    totalCommission: 65000,
    myShare: 42250,
    agencyShare: 22750,
    status: 'Paid',
    date: '2024-03-05'
  },
  {
    id: 3,
    clientName: 'Robert Johnson',
    propertyTitle: 'Executive House',
    area: 'Ekkamai',
    dealType: 'Purchase',
    dealValue: 9500000,
    totalCommission: 285000,
    myShare: 185250,
    agencyShare: 99750,
    status: 'Pending',
    date: '2024-03-15'
  }
])

// Recent Activity Data
const recentLeadActivity = ref([
  {
    id: 1,
    leadName: 'Michael Chen',
    time: '2 hours ago',
    interest: 'Luxury 2BR Condo Near BTS',
    status: 'New',
    budget: '฿35k-50k',
    assignedBy: 'James Thompson'
  },
  {
    id: 2,
    leadName: 'Lisa Anderson',
    time: '1 day ago',
    interest: 'Executive House Thonglor',
    status: 'Contacted',
    budget: '฿80k-120k',
    assignedBy: 'Mark Johnson'
  },
  {
    id: 3,
    leadName: 'David Kim',
    time: '3 days ago',
    interest: 'Modern Studio Phrom Phong',
    status: 'In Progress',
    budget: '฿25k-35k',
    assignedBy: 'System'
  }
])

// Communications Data
const conversations = ref([
  { id: 1, name: 'Michael Chen', lastMessage: 'When can we schedule a viewing?', time: '1h', source: 'Assigned Lead' },
  { id: 2, name: 'Emma Thompson', lastMessage: 'Thank you for the property details', time: '3h', source: 'My Client' },
  { id: 3, name: 'James Thompson', lastMessage: 'Great work on the Johnson deal', time: '1d', source: 'Agency Owner' },
  { id: 4, name: 'Mark Johnson', lastMessage: 'Can you handle the Chen viewing?', time: '2d', source: 'Colleague' }
])

const scheduledViewings = ref(6)

// Other Agency Agents (for transfer requests)
const otherAgents = ref([
  { id: 1, name: 'Mark Johnson' },
  { id: 2, name: 'Jane Smith' },
  { id: 3, name: 'Tom Brown' }
])

const profileComplete = computed(() => {
  return agentProfile.value.fullName && 
         agentProfile.value.email && 
         agentProfile.value.phone && 
         agentProfile.value.specializations.length > 0
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

const calculateStageValue = (deals) => {
  return deals.reduce((total, deal) => total + deal.value, 0)
}

const getPerformanceBadgeClass = (rank) => {
  if (rank <= 3) return 'bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-400'
  if (rank <= 7) return 'bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-400'
  if (rank <= 12) return 'bg-yellow-100 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-400'
  return 'bg-gray-100 dark:bg-gray-600 text-gray-800 dark:text-gray-300'
}

const getPerformanceTier = (rank) => {
  if (rank <= 3) return 'Top Performer'
  if (rank <= 7) return 'High Performer'
  if (rank <= 12) return 'Good Performer'
  return 'Developing'
}

// Action Methods
const contactLead = (lead) => {
  console.log('Contacting lead:', lead.name)
}

const scheduleMeeting = (lead) => {
  console.log('Scheduling meeting with:', lead.name)
}

const viewLeadDetails = (lead) => {
  console.log('Viewing lead details:', lead.name)
}

const requestTransfer = (lead) => {
  selectedLeadForTransfer.value = lead.id
  showLeadTransferModal.value = true
}

const submitTransferRequest = () => {
  console.log('Transfer request submitted:', {
    lead: selectedLeadForTransfer.value,
    transferTo: transferToAgent.value,
    reason: transferReason.value
  })
  showLeadTransferModal.value = false
  // Reset form
  selectedLeadForTransfer.value = ''
  transferToAgent.value = ''
  transferReason.value = ''
}

const contactClient = (client) => {
  console.log('Contacting client:', client.name)
}

const scheduleViewing = (client) => {
  console.log('Scheduling viewing for:', client.name)
}

const viewClientHistory = (client) => {
  console.log('Viewing client history:', client.name)
}

const requestListingAccess = (listing) => {
  console.log('Requesting access to listing:', listing.title)
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
        