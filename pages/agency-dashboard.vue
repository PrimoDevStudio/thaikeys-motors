<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 font-sans transition-colors duration-300">
    <!-- Agency Info Bar -->
    <div class="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-4 transition-colors duration-300">
      <div class="flex items-center justify-between mx-auto">
        <!-- Agency Branding -->
        <div class="flex items-center space-x-6">
          <div class="flex items-center space-x-3">
            <!-- Agency Logo -->
            <div class="relative">
              <div class="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-800 dark:to-purple-600 rounded-xl flex items-center justify-center border-2 border-purple-300 dark:border-purple-600">
                <span class="text-xl font-bold text-purple-800 dark:text-purple-200">{{ agencyProfile.initials }}</span>
              </div>
              <div class="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center border-2 border-white dark:border-gray-800">
                <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
              </div>
            </div>
          </div>
          
          <div class="text-sm text-brand-navy dark:text-gray-400">
            <span class="font-medium text-lg">{{ agencyProfile.name }}</span>
            <div class="text-xs text-gray-500 flex items-center space-x-2">
              <span>{{ agencyProfile.totalAgents }} Active Agents</span>
              <span class="w-1 h-1 bg-gray-400 rounded-full"></span>
              <span :class="getSubscriptionBadgeClass(agencyProfile.subscriptionTier)" class="px-2 py-0.5 rounded text-xs font-semibold">
                {{ agencyProfile.subscriptionTier.toUpperCase() }} Plan
              </span>
              <span class="w-1 h-1 bg-gray-400 rounded-full"></span>
              <span class="text-green-600">{{ agencyProfile.totalListings }} Active Listings</span>
            </div>
          </div>
        </div>

        <!-- Agency Stats & Actions -->
        <div class="flex items-center space-x-6">
          <!-- Quick Stats -->
          <div class="flex items-center space-x-4 text-sm">
            <div class="text-center">
              <div class="font-bold text-brand-navy dark:text-white">{{ monthlyRevenue }}</div>
              <div class="text-xs text-gray-500">Monthly Revenue</div>
            </div>
            <div class="text-center">
              <div class="font-bold text-green-600">{{ activeDeals }}</div>
              <div class="text-xs text-gray-500">Active Deals</div>
            </div>
            <div class="text-center">
              <div class="font-bold text-blue-600">{{ newLeadsThisWeek }}</div>
              <div class="text-xs text-gray-500">New Leads</div>
            </div>
          </div>
          
          <!-- Search -->
          <div class="relative">
            <input 
              v-model="searchQuery"
              type="text" 
              placeholder="Search agents, leads, properties..."
              class="w-80 px-4 py-2 pr-10 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-turqoise-light focus:border-transparent bg-white dark:bg-gray-700 text-brand-navy dark:text-white transition-colors duration-300"
            >
            <svg class="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
          </div>
          
          <!-- Notifications -->
          <button class="relative p-2 text-brand-navy dark:text-gray-400 hover:text-brand-turqoise-light dark:hover:text-brand-turqoise-light transition-colors">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-5 5v-5zM11 13h-1a4 4 0 01-4-4V7a4 4 0 118 0v2a4 4 0 01-4 4z"/>
            </svg>
            <span v-if="unreadNotifications > 0" class="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          
          <!-- Profile Menu -->
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
      <!-- Agency Dashboard Sidebar Navigation -->
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
            <span class="font-medium">Agency Overview</span>
          </a>
          
          <a 
            href="#" 
            :class="['flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors', 
                     activeTab === 'agent-management' ? 'bg-brand-turqoise-light text-brand-navy border border-teal-200' : 'text-brand-navy dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700']"
            @click="activeTab = 'agent-management'"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
            </svg>
            <span class="font-medium">Agent Management</span>
            <span class="bg-purple-100 dark:bg-purple-900/20 text-purple-800 dark:text-purple-400 text-xs font-semibold px-2 py-1 rounded-full ml-auto">{{ agencyProfile.totalAgents }}</span>
          </a>
          
          <a 
            href="#" 
            :class="['flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors', 
                     activeTab === 'lead-distribution' ? 'bg-brand-turqoise-light text-brand-navy border border-teal-200' : 'text-brand-navy dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700']"
            @click="activeTab = 'lead-distribution'"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <span class="font-medium">Lead Distribution</span>
            <span class="bg-orange-100 dark:bg-orange-900/20 text-orange-800 dark:text-orange-400 text-xs font-semibold px-2 py-1 rounded-full ml-auto">{{ unassignedLeads }}</span>
          </a>
          
          <a 
            href="#" 
            :class="['flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors', 
                     activeTab === 'agency-listings' ? 'bg-brand-turqoise-light text-brand-navy border border-teal-200' : 'text-brand-navy dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700']"
            @click="activeTab = 'agency-listings'"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
            </svg>
            <span class="font-medium">Agency Listings</span>
            <span class="bg-brand-turqoise-light/20 text-brand-navy dark:text-brand-turqoise-light text-xs font-semibold px-2 py-1 rounded-full ml-auto">{{ agencyProfile.totalListings }}</span>
          </a>
          
          <a 
            href="#" 
            :class="['flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors', 
                     activeTab === 'client-oversight' ? 'bg-brand-turqoise-light text-brand-navy border border-teal-200' : 'text-brand-navy dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700']"
            @click="activeTab = 'client-oversight'"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"/>
            </svg>
            <span class="font-medium">Client Oversight</span>
            <span class="bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-400 text-xs font-semibold px-2 py-1 rounded-full ml-auto">{{ totalAgencyClients }}</span>
          </a>
          
          <a 
            href="#" 
            :class="['flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors', 
                     activeTab === 'performance-analytics' ? 'bg-brand-turqoise-light text-brand-navy border border-teal-200' : 'text-brand-navy dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700']"
            @click="activeTab = 'performance-analytics'"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
            </svg>
            <span class="font-medium">Performance Analytics</span>
          </a>
          
          <a 
            href="#" 
            :class="['flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors', 
                     activeTab === 'financial-management' ? 'bg-brand-turqoise-light text-brand-navy border border-teal-200' : 'text-brand-navy dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700']"
            @click="activeTab = 'financial-management'"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"/>
            </svg>
            <span class="font-medium">Financial Management</span>
            <span v-if="pendingCommissionPayments > 0" class="bg-yellow-100 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-400 text-xs font-semibold px-2 py-1 rounded-full ml-auto">{{ pendingCommissionPayments }}</span>
          </a>
          
          <a 
            href="#" 
            :class="['flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors', 
                     activeTab === 'team-communications' ? 'bg-brand-turqoise-light text-brand-navy border border-teal-200' : 'text-brand-navy dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700']"
            @click="activeTab = 'team-communications'"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
            </svg>
            <span class="font-medium">Team Communications</span>
            <span v-if="teamMessages > 0" class="bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-400 text-xs font-semibold px-2 py-1 rounded-full ml-auto">{{ teamMessages }}</span>
          </a>

          <a 
            href="#" 
            :class="['flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors', 
                     activeTab === 'agency-settings' ? 'bg-brand-turqoise-light text-brand-navy border border-teal-200' : 'text-brand-navy dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700']"
            @click="activeTab = 'agency-settings'"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
            <span class="font-medium">Agency Settings</span>
          </a>
        </nav>
      </aside>

      <!-- Main Content Area -->
      <main class="flex-1 overflow-y-auto bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <!-- Agency Overview Tab -->
        <div v-if="activeTab === 'overview'" class="p-6">
          <!-- Agency Performance Summary -->
          <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 transition-colors duration-300 mb-6">
            <div class="flex items-center justify-between mb-6">
              <div>
                <h3 class="text-xl font-semibold text-brand-navy dark:text-white mb-2">{{ agencyProfile.name }} Performance Dashboard</h3>
                <p class="text-sm text-brand-navy dark:text-gray-400">Real-time overview of your agency operations</p>
              </div>
              <div class="flex items-center space-x-4">
                <div class="text-center">
                  <div class="text-2xl font-bold text-purple-600">{{ agencyProfile.totalAgents }}</div>
                  <div class="text-xs text-gray-500">Active Agents</div>
                </div>
                <div class="text-center">
                  <div class="text-2xl font-bold text-green-600">{{ agencyPerformanceScore }}%</div>
                  <div class="text-xs text-gray-500">Performance Score</div>
                </div>
                <div class="text-center">
                  <div class="text-2xl font-bold text-blue-600">{{ marketShare }}%</div>
                  <div class="text-xs text-gray-500">Market Share</div>
                </div>
              </div>
            </div>
            
            <!-- Quick Action Alerts -->
            <div class="grid grid-cols-3 gap-4">
              <div v-if="unassignedLeads > 0" class="p-4 bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-700 rounded-lg">
                <div class="flex items-center space-x-2">
                  <svg class="w-5 h-5 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/>
                  </svg>
                  <div>
                    <div class="font-semibold text-orange-800 dark:text-orange-400">{{ unassignedLeads }} Unassigned Leads</div>
                    <div class="text-sm text-orange-700 dark:text-orange-500">Requires immediate attention</div>
                  </div>
                </div>
              </div>
              
              <div v-if="underperformingAgents > 0" class="p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg">
                <div class="flex items-center space-x-2">
                  <svg class="w-5 h-5 text-yellow-600" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/>
                  </svg>
                  <div>
                    <div class="font-semibold text-yellow-800 dark:text-yellow-400">{{ underperformingAgents }} Agents Need Support</div>
                    <div class="text-sm text-yellow-700 dark:text-yellow-500">Below target performance</div>
                  </div>
                </div>
              </div>
              
              <div v-if="pendingCommissionPayments > 0" class="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700 rounded-lg">
                <div class="flex items-center space-x-2">
                  <svg class="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/>
                  </svg>
                  <div>
                    <div class="font-semibold text-red-800 dark:text-red-400">{{ pendingCommissionPayments }} Pending Payments</div>
                    <div class="text-sm text-red-700 dark:text-red-500">{{ formatCurrency(pendingCommissionAmount) }} total</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Key Metrics Grid -->
          <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 transition-colors duration-300">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm font-medium text-brand-navy dark:text-gray-400">Monthly Revenue</p>
                  <p class="text-3xl font-bold text-brand-navy dark:text-white">{{ monthlyRevenue }}</p>
                  <p class="text-sm text-green-600 dark:text-green-400 mt-2">{{ revenueGrowth }} from last month</p>
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
                  <p class="text-sm font-medium text-brand-navy dark:text-gray-400">Active Deals</p>
                  <p class="text-3xl font-bold text-brand-navy dark:text-white">{{ activeDeals }}</p>
                  <p class="text-sm text-blue-600 dark:text-blue-400 mt-2">{{ totalPipelineValue }} pipeline value</p>
                </div>
                <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-xl flex items-center justify-center">
                  <svg class="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                  </svg>
                </div>
              </div>
            </div>

            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 transition-colors duration-300">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm font-medium text-brand-navy dark:text-gray-400">Team Performance</p>
                  <p class="text-3xl font-bold text-brand-navy dark:text-white">{{ teamPerformanceScore }}%</p>
                  <p class="text-sm text-purple-600 dark:text-purple-400 mt-2">Average agent score</p>
                </div>
                <div class="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-xl flex items-center justify-center">
                  <svg class="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                  </svg>
                </div>
              </div>
            </div>

            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 transition-colors duration-300">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm font-medium text-brand-navy dark:text-gray-400">Client Satisfaction</p>
                  <p class="text-3xl font-bold text-brand-navy dark:text-white">{{ clientSatisfactionRate }}%</p>
                  <p class="text-sm text-yellow-600 dark:text-yellow-400 mt-2">{{ totalReviews }} total reviews</p>
                </div>
                <div class="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/20 rounded-xl flex items-center justify-center">
                  <svg class="w-6 h-6 text-yellow-600 dark:text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <!-- Top Performing Agents & Recent Activity -->
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <!-- Top Performing Agents -->
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 transition-colors duration-300">
              <div class="flex items-center justify-between mb-4">
                <h3 class="text-lg font-semibold text-brand-navy dark:text-white">Top Performers</h3>
                <button @click="activeTab = 'agent-management'" class="text-brand-turqoise-light hover:text-teal-500 font-medium text-sm">View All</button>
              </div>
              
              <div class="space-y-4">
                <div v-for="(agent, index) in topPerformingAgents" :key="agent.id" class="flex items-center space-x-4">
                  <div class="flex-shrink-0">
                    <div class="w-10 h-10 bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-800 dark:to-purple-600 rounded-full flex items-center justify-center">
                      <span class="text-sm font-semibold text-purple-800 dark:text-purple-200">{{ agent.initials }}</span>
                    </div>
                  </div>
                  <div class="flex-1">
                    <div class="flex items-center justify-between">
                      <h4 class="font-semibold text-brand-navy dark:text-white">{{ agent.name }}</h4>
                      <span class="text-xs bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-400 px-2 py-1 rounded-full">#{{ index + 1 }}</span>
                    </div>
                    <div class="flex items-center justify-between text-sm text-gray-500 mt-1">
                      <span>{{ agent.monthlyDeals }} deals</span>
                      <span class="font-semibold text-green-600">{{ formatCurrency(agent.monthlyCommission) }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Recent Agency Activity -->
            <div class="lg:col-span-2 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 transition-colors duration-300">
              <div class="flex items-center justify-between mb-4">
                <h3 class="text-lg font-semibold text-brand-navy dark:text-white">Recent Agency Activity</h3>
                <button class="text-brand-turqoise-light hover:text-teal-500 font-medium text-sm">View All</button>
              </div>
              
              <div class="space-y-4">
                <div v-for="activity in recentAgencyActivity" :key="activity.id" class="flex items-start space-x-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                  <div class="flex-shrink-0">
                    <div :class="['w-10 h-10 rounded-full flex items-center justify-center',
                                 activity.type === 'deal' ? 'bg-green-100 dark:bg-green-900/20' :
                                 activity.type === 'lead' ? 'bg-orange-100 dark:bg-orange-900/20' :
                                 activity.type === 'agent' ? 'bg-purple-100 dark:bg-purple-900/20' :
                                 'bg-blue-100 dark:bg-blue-900/20']">
                      <svg class="w-5 h-5" :class="activity.type === 'deal' ? 'text-green-600 dark:text-green-400' :
                                                  activity.type === 'lead' ? 'text-orange-600 dark:text-orange-400' :
                                                  activity.type === 'agent' ? 'text-purple-600 dark:text-purple-400' :
                                                  'text-blue-600 dark:text-blue-400'" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path v-if="activity.type === 'deal'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        <path v-else-if="activity.type === 'lead'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                        <path v-else-if="activity.type === 'agent'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                        <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                      </svg>
                    </div>
                  </div>
                  <div class="flex-1">
                    <div class="flex items-center justify-between">
                      <h4 class="font-semibold text-brand-navy dark:text-white text-sm">{{ activity.title }}</h4>
                      <span class="text-xs text-gray-500">{{ activity.time }}</span>
                    </div>
                    <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">{{ activity.description }}</p>
                    <div class="flex items-center space-x-4 mt-2">
                      <span class="text-xs text-gray-500">Agent: {{ activity.agentName }}</span>
                      <span v-if="activity.value" class="text-xs font-semibold text-green-600">{{ formatCurrency(activity.value) }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Agent Management Tab -->
        <div v-if="activeTab === 'agent-management'" class="p-6">
          <div class="flex items-center justify-between mb-6">
            <h2 class="text-2xl font-bold text-brand-navy dark:text-white">Agent Management</h2>
            <div class="flex items-center space-x-4">
              <select class="border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-brand-navy dark:text-white rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-turqoise-light">
                <option>All Agents</option>
                <option>Top Performers</option>
                <option>Needs Support</option>
                <option>New Agents</option>
              </select>
              <button @click="showAddAgentModal = true" class="bg-brand-turqoise-light text-brand-navy px-6 py-3 rounded-lg font-semibold hover:bg-teal-300 transition-colors flex items-center space-x-2">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                </svg>
                <span>Add New Agent</span>
              </button>
            </div>
          </div>

          <!-- Agent Performance Overview -->
          <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
            <div class="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg border border-gray-100 dark:border-gray-700 text-center">
              <div class="text-2xl font-bold text-purple-600">{{ agencyProfile.totalAgents }}</div>
              <div class="text-sm text-gray-500">Total Agents</div>
              <div class="text-xs text-green-600 mt-1">{{ newAgentsThisMonth }} new this month</div>
            </div>
            <div class="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg border border-gray-100 dark:border-gray-700 text-center">
              <div class="text-2xl font-bold text-green-600">{{ topPerformers }}</div>
              <div class="text-sm text-gray-500">Top Performers</div>
              <div class="text-xs text-green-600 mt-1">Above target</div>
            </div>
            <div class="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg border border-gray-100 dark:border-gray-700 text-center">
              <div class="text-2xl font-bold text-yellow-600">{{ underperformingAgents }}</div>
              <div class="text-sm text-gray-500">Need Support</div>
              <div class="text-xs text-yellow-600 mt-1">Below target</div>
            </div>
            <div class="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg border border-gray-100 dark:border-gray-700 text-center">
              <div class="text-2xl font-bold text-brand-navy dark:text-white">{{ teamPerformanceScore }}%</div>
              <div class="text-sm text-gray-500">Average Performance</div>
              <div class="text-xs text-blue-600 mt-1">Team score</div>
            </div>
          </div>

          <!-- Agent Management Table -->
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
            <div class="p-6 border-b border-gray-100 dark:border-gray-600">
              <div class="flex items-center justify-between">
                <h3 class="text-lg font-semibold text-brand-navy dark:text-white">Team Overview</h3>
                <div class="flex items-center space-x-4">
                  <div class="relative">
                    <input 
                      v-model="agentSearchQuery"
                      type="text" 
                      placeholder="Search agents..."
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
              <div class="grid grid-cols-8 gap-4 text-sm font-medium text-brand-navy dark:text-gray-400 mb-4">
                <div>Agent</div>
                <div>Performance</div>
                <div>Monthly Deals</div>
                <div>Commission Split</div>
                <div>Active Clients</div>
                <div>Satisfaction</div>
                <div>Join Date</div>
                <div>Actions</div>
              </div>
              
              <div class="space-y-4">
                <div v-for="agent in agencyAgents" :key="agent.id" class="grid grid-cols-8 gap-4 items-center p-4 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-xl transition-colors">
                  <!-- Agent Info -->
                  <div class="flex items-center space-x-3">
                    <div class="w-10 h-10 bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-800 dark:to-purple-600 rounded-full flex items-center justify-center">
                      <span class="text-sm font-semibold text-purple-800 dark:text-purple-200">{{ agent.initials }}</span>
                    </div>
                    <div>
                      <div class="font-semibold text-brand-navy dark:text-white">{{ agent.name }}</div>
                      <div class="text-sm text-gray-500">{{ agent.email }}</div>
                    </div>
                  </div>
                  
                  <!-- Performance -->
                  <div>
                    <span :class="['px-3 py-1 rounded-full text-xs font-semibold',
                                 agent.performanceLevel === 'Top' ? 'bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-400' :
                                 agent.performanceLevel === 'Good' ? 'bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-400' :
                                 agent.performanceLevel === 'Average' ? 'bg-yellow-100 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-400' :
                                 'bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-400']">
                      {{ agent.performanceLevel }}
                    </span>
                    <div class="text-xs text-gray-500 mt-1">{{ agent.performanceScore }}% score</div>
                  </div>
                  
                  <!-- Monthly Deals -->
                  <div>
                    <div class="font-bold text-brand-navy dark:text-white">{{ agent.monthlyDeals }}</div>
                    <div class="text-xs text-gray-500">Target: {{ agent.targetDeals }}</div>
                  </div>
                  
                  <!-- Commission Split -->
                  <div>
                    <div class="font-medium text-brand-navy dark:text-white">{{ agent.commissionSplit }}%</div>
                    <div class="text-xs text-gray-500">Agent share</div>
                  </div>
                  
                  <!-- Active Clients -->
                  <div>
                    <div class="font-bold text-brand-navy dark:text-white">{{ agent.activeClients }}</div>
                    <div class="text-xs text-gray-500">clients</div>
                  </div>
                  
                  <!-- Satisfaction -->
                  <div>
                    <div class="font-bold text-brand-navy dark:text-white">{{ agent.satisfactionRate }}%</div>
                    <div class="flex">
                      <svg v-for="i in 5" :key="i" class="w-3 h-3" :class="i <= Math.round(agent.satisfactionRate/20) ? 'text-yellow-400' : 'text-gray-300'" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    </div>
                  </div>
                  
                  <!-- Join Date -->
                  <div>
                    <div class="text-sm text-brand-navy dark:text-white">{{ agent.joinDate }}</div>
                    <div class="text-xs text-gray-500">{{ agent.tenure }}</div>
                  </div>
                  
                  <!-- Actions -->
                  <div class="flex items-center space-x-2">
                    <button @click="viewAgentDetails(agent)" class="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 p-1" title="View Details">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                      </svg>
                    </button>
                    <button @click="reassignClients(agent)" class="text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 p-1" title="Reassign Clients">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/>
                      </svg>
                    </button>
                    <button @click="editAgent(agent)" class="text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 p-1" title="Edit Agent">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
                      </svg>
                    </button>
                    <button @click="managePermissions(agent)" class="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 p-1" title="Manage Permissions">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Lead Distribution Tab -->
        <div v-if="activeTab === 'lead-distribution'" class="p-6">
          <div class="flex items-center justify-between mb-6">
            <h2 class="text-2xl font-bold text-brand-navy dark:text-white">Lead Distribution Management</h2>
            <div class="flex items-center space-x-4">
              <select class="border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-brand-navy dark:text-white rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-turqoise-light">
                <option>All Leads</option>
                <option>Unassigned</option>
                <option>High Priority</option>
                <option>Recent Transfers</option>
              </select>
              <button @click="showBulkAssignModal = true" class="bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors flex items-center space-x-2">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span>Bulk Assign</span>
              </button>
            </div>
          </div>

          <!-- Lead Distribution Stats -->
          <div class="grid grid-cols-1 md:grid-cols-5 gap-6 mb-6">
            <div class="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg border border-gray-100 dark:border-gray-700 text-center">
              <div class="text-2xl font-bold text-orange-600">{{ unassignedLeads }}</div>
              <div class="text-sm text-gray-500">Unassigned</div>
              <div class="text-xs text-red-600 mt-1">Requires action</div>
            </div>
            <div class="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg border border-gray-100 dark:border-gray-700 text-center">
              <div class="text-2xl font-bold text-blue-600">{{ totalLeads }}</div>
              <div class="text-sm text-gray-500">Total Leads</div>
              <div class="text-xs text-green-600 mt-1">{{ newLeadsThisWeek }} this week</div>
            </div>
            <div class="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg border border-gray-100 dark:border-gray-700 text-center">
              <div class="text-2xl font-bold text-green-600">{{ assignedLeads }}</div>
              <div class="text-sm text-gray-500">Assigned</div>
              <div class="text-xs text-blue-600 mt-1">{{ Math.round((assignedLeads/totalLeads)*100) }}% assigned</div>
            </div>
            <div class="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg border border-gray-100 dark:border-gray-700 text-center">
              <div class="text-2xl font-bold text-purple-600">{{ avgResponseTime }}</div>
              <div class="text-sm text-gray-500">Avg Response</div>
              <div class="text-xs text-purple-600 mt-1">Team average</div>
            </div>
            <div class="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg border border-gray-100 dark:border-gray-700 text-center">
              <div class="text-2xl font-bold text-yellow-600">{{ leadConversionRate }}%</div>
              <div class="text-sm text-gray-500">Conversion Rate</div>
              <div class="text-xs text-yellow-600 mt-1">Agency average</div>
            </div>
          </div>

          <!-- Lead Assignment Interface -->
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
            <div class="p-6 border-b border-gray-100 dark:border-gray-600">
              <div class="flex items-center justify-between">
                <h3 class="text-lg font-semibold text-brand-navy dark:text-white">Lead Assignment Center</h3>
                <div class="flex items-center space-x-4">
                  <div class="relative">
                    <input 
                      v-model="leadSearchQuery"
                      type="text" 
                      placeholder="Search leads..."
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
              <div class="grid grid-cols-8 gap-4 text-sm font-medium text-brand-navy dark:text-gray-400 mb-4">
                <div>Lead Details</div>
                <div>Priority</div>
                <div>Property Interest</div>
                <div>Budget Range</div>
                <div>Source</div>
                <div>Current Status</div>
                <div>Assigned Agent</div>
                <div>Actions</div>
              </div>
              
              <div class="space-y-4">
                <div v-for="lead in allLeads" :key="lead.id" class="grid grid-cols-8 gap-4 items-center p-4 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-xl transition-colors">
                  <!-- Lead Details -->
                  <div class="flex items-center space-x-3">
                    <div class="w-10 h-10 bg-gradient-to-br from-orange-100 to-orange-200 dark:from-orange-800 dark:to-orange-600 rounded-full flex items-center justify-center">
                      <span class="text-sm font-semibold text-orange-800 dark:text-orange-200">{{ lead.initials }}</span>
                    </div>
                    <div>
                      <div class="font-semibold text-brand-navy dark:text-white">{{ lead.name }}</div>
                      <div class="text-sm text-gray-500">{{ lead.email }}</div>
                    </div>
                  </div>
                  
                  <!-- Priority -->
                  <div>
                    <span :class="['px-2 py-1 rounded-full text-xs font-semibold',
                                 lead.priority === 'High' ? 'bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-400' :
                                 lead.priority === 'Medium' ? 'bg-yellow-100 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-400' :
                                 'bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-400']">
                      {{ lead.priority }}
                    </span>
                  </div>
                  
                  <!-- Property Interest -->
                  <div>
                    <div class="font-medium text-brand-navy dark:text-white text-sm">{{ lead.propertyType }}</div>
                    <div class="text-sm text-gray-500">{{ lead.preferredArea }}</div>
                  </div>
                  
                  <!-- Budget -->
                  <div>
                    <div class="font-medium text-brand-navy dark:text-white">{{ formatCurrency(lead.budgetMin) }} - {{ formatCurrency(lead.budgetMax) }}</div>
                    <div class="text-sm text-gray-500">{{ lead.dealType }}</div>
                  </div>
                  
                  <!-- Source -->
                  <div>
                    <div class="text-sm text-brand-navy dark:text-white">{{ lead.source }}</div>
                    <div class="text-xs text-gray-500">{{ lead.sourceDate }}</div>
                  </div>
                  
                  <!-- Status -->
                  <div>
                    <span :class="['px-2 py-1 rounded-full text-xs font-semibold',
                                 lead.status === 'Unassigned' ? 'bg-orange-100 dark:bg-orange-900/20 text-orange-800 dark:text-orange-400' :
                                 lead.status === 'Assigned' ? 'bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-400' :
                                 lead.status === 'Contacted' ? 'bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-400' :
                                 'bg-gray-100 dark:bg-gray-600 text-gray-800 dark:text-gray-300']">
                      {{ lead.status }}
                    </span>
                  </div>
                  
                  <!-- Assigned Agent -->
                  <div>
                    <div v-if="lead.assignedAgent" class="text-sm text-brand-navy dark:text-white font-medium">{{ lead.assignedAgent }}</div>
                    <div v-else class="text-sm text-orange-600 font-medium">Unassigned</div>
                    <div v-if="lead.assignedDate" class="text-xs text-gray-500">{{ lead.assignedDate }}</div>
                  </div>
                  
                  <!-- Actions -->
                  <div class="flex items-center space-x-2">
                    <select 
                      v-if="!lead.assignedAgent" 
                      @change="assignLead(lead, $event.target.value)" 
                      class="text-sm border border-gray-200 dark:border-gray-600 rounded px-2 py-1 bg-white dark:bg-gray-700 text-brand-navy dark:text-white"
                    >
                      <option value="">Assign to...</option>
                      <option v-for="agent in availableAgents" :key="agent.id" :value="agent.id">{{ agent.name }}</option>
                    </select>
                    <button v-if="lead.assignedAgent" @click="reassignLead(lead)" class="text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 p-1" title="Reassign">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/>
                      </svg>
                    </button>
                    <button @click="viewLeadDetails(lead)" class="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 p-1" title="View Details">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Agency Listings Tab -->
        <div v-if="activeTab === 'agency-listings'" class="p-6">
          <div class="flex items-center justify-between mb-6">
            <h2 class="text-2xl font-bold text-brand-navy dark:text-white">Agency Listings Management</h2>
            <div class="flex items-center space-x-4">
              <select class="border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-brand-navy dark:text-white rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-turqoise-light">
                <option>All Listings</option>
                <option>Available</option>
                <option>Rented/Sold</option>
                <option>Needs Attention</option>
              </select>
              <div class="text-sm text-brand-navy dark:text-gray-400">
                Total: <span class="font-bold text-lg text-brand-turqoise-light">{{ agencyProfile.totalListings }}</span>
              </div>
            </div>
          </div>

          <!-- Listings Performance Overview -->
          <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
            <div class="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg border border-gray-100 dark:border-gray-700 text-center">
              <div class="text-2xl font-bold text-green-600">{{ availableListings }}</div>
              <div class="text-sm text-gray-500">Available</div>
            </div>
            <div class="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg border border-gray-100 dark:border-gray-700 text-center">
              <div class="text-2xl font-bold text-blue-600">{{ rentedSoldListings }}</div>
              <div class="text-sm text-gray-500">Rented/Sold</div>
            </div>
            <div class="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg border border-gray-100 dark:border-gray-700 text-center">
              <div class="text-2xl font-bold text-yellow-600">{{ avgDaysOnMarket }}</div>
              <div class="text-sm text-gray-500">Avg Days on Market</div>
            </div>
            <div class="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg border border-gray-100 dark:border-gray-700 text-center">
              <div class="text-2xl font-bold text-purple-600">{{ formatCurrency(avgListingValue) }}</div>
              <div class="text-sm text-gray-500">Avg Listing Value</div>
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
                  <span class="bg-purple-600 text-white px-2 py-1 rounded text-xs font-semibold">
                    {{ listing.agentName }}
                  </span>
                </div>
                <div class="absolute bottom-4 left-4">
                  <span class="bg-brand-turqoise-light text-brand-navy px-3 py-1 rounded-full text-xs font-semibold">
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

                <!-- Performance Metrics -->
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
                    <div class="text-lg font-bold text-brand-navy dark:text-white">{{ listing.daysOnMarket }}</div>
                    <div class="text-xs text-brand-navy dark:text-gray-400">Days</div>
                  </div>
                </div>

                <!-- Action Buttons -->
                <div class="flex items-center space-x-2">
                  <button class="flex-1 bg-brand-turqoise-light text-brand-navy py-2 px-4 rounded-lg font-semibold hover:bg-teal-300 transition-colors text-sm">
                    Manage
                  </button>
                  <button @click="reassignListing(listing)" class="text-orange-600 dark:text-orange-400 hover:text-orange-700 p-2" title="Reassign">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Client Oversight Tab -->
        <div v-if="activeTab === 'client-oversight'" class="p-6">
          <div class="flex items-center justify-between mb-6">
            <h2 class="text-2xl font-bold text-brand-navy dark:text-white">Client Relationship Oversight</h2>
            <div class="flex items-center space-x-4">
              <select class="border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-brand-navy dark:text-white rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-turqoise-light">
                <option>All Clients</option>
                <option>High Value</option>
                <option>Needs Attention</option>
                <option>Recent Activity</option>
              </select>
              <div class="text-sm text-brand-navy dark:text-gray-400">
                Total Agency Clients: <span class="font-bold text-lg text-brand-turqoise-light">{{ totalAgencyClients }}</span>
              </div>
            </div>
          </div>

          <!-- Client Overview Stats -->
          <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
            <div class="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg border border-gray-100 dark:border-gray-700 text-center">
              <div class="text-2xl font-bold text-green-600">{{ activeClients }}</div>
              <div class="text-sm text-gray-500">Active Clients</div>
            </div>
            <div class="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg border border-gray-100 dark:border-gray-700 text-center">
              <div class="text-2xl font-bold text-blue-600">{{ highValueClients }}</div>
              <div class="text-sm text-gray-500">High Value</div>
            </div>
            <div class="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg border border-gray-100 dark:border-gray-700 text-center">
              <div class="text-2xl font-bold text-yellow-600">{{ clientsNeedingAttention }}</div>
              <div class="text-sm text-gray-500">Need Attention</div>
            </div>
            <div class="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg border border-gray-100 dark:border-gray-700 text-center">
              <div class="text-2xl font-bold text-purple-600">{{ clientSatisfactionRate }}%</div>
              <div class="text-sm text-gray-500">Satisfaction Rate</div>
            </div>
          </div>

          <!-- Client Management Interface -->
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
            <div class="p-6 border-b border-gray-100 dark:border-gray-600">
              <div class="flex items-center justify-between">
                <h3 class="text-lg font-semibold text-brand-navy dark:text-white">Client Relationship Management</h3>
                <div class="flex items-center space-x-4">
                  <div class="relative">
                    <input 
                      v-model="clientSearchQuery"
                      type="text" 
                      placeholder="Search clients..."
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
              <div class="grid grid-cols-8 gap-4 text-sm font-medium text-brand-navy dark:text-gray-400 mb-4">
                <div>Client</div>
                <div>Assigned Agent</div>
                <div>Status</div>
                <div>Property Interest</div>
                <div>Budget</div>
                <div>Last Activity</div>
                <div>Satisfaction</div>
                <div>Actions</div>
              </div>
              
              <div class="space-y-4">
                <div v-for="client in agencyClients" :key="client.id" class="grid grid-cols-8 gap-4 items-center p-4 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-xl transition-colors">
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
                  
                  <!-- Assigned Agent -->
                  <div>
                    <div class="text-sm text-brand-navy dark:text-white font-medium">{{ client.assignedAgent }}</div>
                    <div class="text-xs text-gray-500">{{ client.assignedDate }}</div>
                  </div>
                  
                  <!-- Status -->
                  <div>
                    <span :class="['px-2 py-1 rounded-full text-xs font-semibold',
                                 client.status === 'Active' ? 'bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-400' :
                                 client.status === 'Negotiating' ? 'bg-yellow-100 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-400' :
                                 client.status === 'Follow Up' ? 'bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-400' :
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
                  </div>
                  
                  <!-- Last Activity -->
                  <div>
                    <div class="text-sm text-brand-navy dark:text-white">{{ client.lastActivity }}</div>
                    <div class="text-xs text-gray-500">{{ client.activityType }}</div>
                  </div>
                  
                  <!-- Satisfaction -->
                  <div>
                    <div class="flex">
                      <svg v-for="i in 5" :key="i" class="w-3 h-3" :class="i <= client.satisfactionRating ? 'text-yellow-400' : 'text-gray-300'" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    </div>
                    <div class="text-xs text-gray-500">{{ client.satisfactionRating }}/5</div>
                  </div>
                  
                  <!-- Actions -->
                  <div class="flex items-center space-x-2">
                    <button @click="viewClientHistory(client)" class="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 p-1" title="View History">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                      </svg>
                    </button>
                    <button @click="reassignClient(client)" class="text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 p-1" title="Reassign">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/>
                      </svg>
                    </button>
                    <button @click="escalateClient(client)" class="text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 p-1" title="Escalate">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Performance Analytics Tab -->
        <div v-if="activeTab === 'performance-analytics'" class="p-6">
          <div class="flex items-center justify-between mb-6">
            <h2 class="text-2xl font-bold text-brand-navy dark:text-white">Performance Analytics</h2>
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

          <!-- Agency Performance Overview -->
          <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm font-medium text-brand-navy dark:text-gray-400">Total Deals Closed</p>
                  <p class="text-3xl font-bold text-brand-navy dark:text-white">{{ totalDealsThisMonth }}</p>
                  <p class="text-sm text-green-600 dark:text-green-400 mt-2">{{ dealsGrowth }}% from last month</p>
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
                  <p class="text-sm font-medium text-brand-navy dark:text-gray-400">Agency Revenue</p>
                  <p class="text-3xl font-bold text-brand-navy dark:text-white">{{ monthlyRevenue }}</p>
                  <p class="text-sm text-blue-600 dark:text-blue-400 mt-2">{{ totalPipelineValue }} pipeline</p>
                </div>
                <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-xl flex items-center justify-center">
                  <svg class="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"/>
                  </svg>
                </div>
              </div>
            </div>

            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm font-medium text-brand-navy dark:text-gray-400">Team Performance</p>
                  <p class="text-3xl font-bold text-brand-navy dark:text-white">{{ teamPerformanceScore }}%</p>
                  <p class="text-sm text-purple-600 dark:text-purple-400 mt-2">Average score</p>
                </div>
                <div class="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-xl flex items-center justify-center">
                  <svg class="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                  </svg>
                </div>
              </div>
            </div>

            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm font-medium text-brand-navy dark:text-gray-400">Market Position</p>
                  <p class="text-3xl font-bold text-brand-navy dark:text-white">{{ marketRanking }}</p>
                  <p class="text-sm text-yellow-600 dark:text-yellow-400 mt-2">{{ marketShare }}% share</p>
                </div>
                <div class="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/20 rounded-xl flex items-center justify-center">
                  <svg class="w-6 h-6 text-yellow-600 dark:text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <!-- Performance Comparison Charts -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <!-- Agent Performance Comparison -->
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Agent Performance Comparison</h3>
              <div class="space-y-4">
                <div v-for="agent in performanceComparison" :key="agent.id" class="flex items-center space-x-4">
                  <div class="w-10 h-10 bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-800 dark:to-purple-600 rounded-full flex items-center justify-center">
                    <span class="text-sm font-semibold text-purple-800 dark:text-purple-200">{{ agent.initials }}</span>
                  </div>
                  <div class="flex-1">
                    <div class="flex items-center justify-between">
                      <span class="font-medium text-brand-navy dark:text-white">{{ agent.name }}</span>
                      <span class="text-sm font-semibold text-brand-navy dark:text-white">{{ agent.deals }} deals</span>
                    </div>
                    <div class="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2 mt-1">
                      <div class="bg-purple-600 h-2 rounded-full" :style="`width: ${agent.performancePercentage}%`"></div>
                    </div>
                    <div class="flex justify-between text-xs text-gray-500 mt-1">
                      <span>{{ formatCurrency(agent.revenue) }} revenue</span>
                      <span>{{ agent.performanceScore }}% score</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Market Trends -->
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Market Trends & Insights</h3>
              <div class="space-y-4">
                <div class="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-lg">
                  <div class="flex items-center space-x-2 mb-2">
                    <svg class="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                    </svg>
                    <span class="font-semibold text-green-800 dark:text-green-400">Growing Segments</span>
                  </div>
                  <p class="text-sm text-green-700 dark:text-green-500">Luxury condos: +{{ luxuryGrowth }}% | BTS proximity: +{{ btsGrowth }}%</p>
                </div>
                
                <div class="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-lg">
                  <div class="flex items-center space-x-2 mb-2">
                    <svg class="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                    </svg>
                    <span class="font-semibold text-blue-800 dark:text-blue-400">Agency Position</span>
                  </div>
                  <p class="text-sm text-blue-700 dark:text-blue-500">Rank #{{ marketRanking }} in Bangkok | {{ marketShare }}% market share</p>
                </div>
                
                <div class="p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg">
                  <div class="flex items-center space-x-2 mb-2">
                    <svg class="w-5 h-5 text-yellow-600" fill="currentColor" viewBox="0 0 24 24">
                      <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/>
                    </svg>
                    <span class="font-semibold text-yellow-800 dark:text-yellow-400">Opportunities</span>
                  </div>
                  <p class="text-sm text-yellow-700 dark:text-yellow-500">Digital adoption: +25% leads | International clients: +18%</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Financial Management Tab -->
        <div v-if="activeTab === 'financial-management'" class="p-6">
          <div class="flex items-center justify-between mb-6">
            <h2 class="text-2xl font-bold text-brand-navy dark:text-white">Financial Management</h2>
            <div class="flex items-center space-x-4">
              <select class="border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-brand-navy dark:text-white rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-turqoise-light">
                <option>This Month</option>
                <option>Last 3 Months</option>
                <option>This Year</option>
              </select>
              <button class="bg-brand-turqoise-light text-brand-navy px-6 py-3 rounded-lg font-semibold hover:bg-teal-300 transition-colors">
                Export Financial Report
              </button>
            </div>
          </div>

          <!-- Financial Overview -->
          <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm font-medium text-brand-navy dark:text-gray-400">Agency Revenue</p>
                  <p class="text-3xl font-bold text-brand-navy dark:text-white">{{ agencyRevenue }}</p>
                  <p class="text-sm text-green-600 dark:text-green-400 mt-2">{{ revenueGrowth }} from last month</p>
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
                  <p class="text-sm font-medium text-brand-navy dark:text-gray-400">Pending Payments</p>
                  <p class="text-3xl font-bold text-brand-navy dark:text-white">{{ formatCurrency(pendingCommissionAmount) }}</p>
                  <p class="text-sm text-yellow-600 dark:text-yellow-400 mt-2">{{ pendingCommissionPayments }} agents</p>
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
                  <p class="text-sm font-medium text-brand-navy dark:text-gray-400">Operating Expenses</p>
                  <p class="text-3xl font-bold text-brand-navy dark:text-white">{{ operatingExpenses }}</p>
                  <p class="text-sm text-blue-600 dark:text-blue-400 mt-2">{{ expenseRatio }}% of revenue</p>
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
                  <p class="text-sm font-medium text-brand-navy dark:text-gray-400">Net Profit</p>
                  <p class="text-3xl font-bold text-brand-navy dark:text-white">{{ netProfit }}</p>
                  <p class="text-sm text-purple-600 dark:text-purple-400 mt-2">{{ profitMargin }}% margin</p>
                </div>
                <div class="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-xl flex items-center justify-center">
                  <svg class="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <!-- Commission Management -->
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 mb-6">
            <div class="p-6 border-b border-gray-100 dark:border-gray-600">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white">Commission Payment Management</h3>
            </div>
            
            <div class="p-6">
              <div class="grid grid-cols-7 gap-4 text-sm font-medium text-brand-navy dark:text-gray-400 mb-4">
                <div>Agent</div>
                <div>Deal Details</div>
                <div>Total Commission</div>
                <div>Agent Share</div>
                <div>Agency Share</div>
                <div>Status</div>
                <div>Actions</div>
              </div>
              
              <div class="space-y-3">
                <div v-for="payment in pendingCommissions" :key="payment.id" class="grid grid-cols-7 gap-4 items-center p-4 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-xl transition-colors">
                  <div>
                    <div class="font-semibold text-brand-navy dark:text-white text-sm">{{ payment.agentName }}</div>
                    <div class="text-xs text-gray-500">{{ payment.agentEmail }}</div>
                  </div>
                  <div>
                    <div class="text-sm text-brand-navy dark:text-white">{{ payment.propertyTitle }}</div>
                    <div class="text-xs text-gray-500">{{ payment.clientName }} • {{ payment.dealType }}</div>
                  </div>
                  <div class="font-bold text-brand-navy dark:text-white">{{ formatCurrency(payment.totalCommission) }}</div>
                  <div class="font-bold text-green-600">{{ formatCurrency(payment.agentShare) }}</div>
                  <div class="font-bold text-purple-600">{{ formatCurrency(payment.agencyShare) }}</div>
                  <div>
                    <span :class="['px-2 py-1 text-xs font-semibold rounded-full',
                                 payment.status === 'Pending' ? 'bg-yellow-100 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-400' :
                                 payment.status === 'Processing' ? 'bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-400' :
                                 'bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-400']">
                      {{ payment.status }}
                    </span>
                  </div>
                  <div class="flex items-center space-x-2">
                    <button v-if="payment.status === 'Pending'" @click="processPayment(payment)" class="bg-green-600 text-white px-3 py-1 rounded text-xs hover:bg-green-700">
                      Process
                    </button>
                    <button @click="viewPaymentDetails(payment)" class="text-blue-600 dark:text-blue-400 hover:text-blue-700 p-1">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Team Communications Tab -->
        <div v-if="activeTab === 'team-communications'" class="p-6">
          <div class="flex items-center justify-between mb-6">
            <h2 class="text-2xl font-bold text-brand-navy dark:text-white">Team Communications</h2>
            <div class="flex items-center space-x-4">
              <select class="border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-brand-navy dark:text-white rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-turqoise-light">
                <option>All Messages</option>
                <option>Agent Communications</option>
                <option>Client Communications</option>
                <option>System Alerts</option>
              </select>
              <button class="bg-brand-turqoise-light text-brand-navy px-6 py-3 rounded-lg font-semibold hover:bg-teal-300 transition-colors">
                Broadcast Message
              </button>
            </div>
          </div>

          <!-- Communication Overview -->
          <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
            <div class="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg border border-gray-100 dark:border-gray-700 text-center">
              <div class="text-2xl font-bold text-red-600">{{ teamMessages }}</div>
              <div class="text-sm text-gray-500">Unread Messages</div>
            </div>
            <div class="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg border border-gray-100 dark:border-gray-700 text-center">
              <div class="text-2xl font-bold text-blue-600">{{ avgTeamResponseTime }}</div>
              <div class="text-sm text-gray-500">Avg Response Time</div>
            </div>
            <div class="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg border border-gray-100 dark:border-gray-700 text-center">
              <div class="text-2xl font-bold text-green-600">{{ activeConversations }}</div>
              <div class="text-sm text-gray-500">Active Conversations</div>
            </div>
            <div class="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg border border-gray-100 dark:border-gray-700 text-center">
              <div class="text-2xl font-bold text-purple-600">{{ escalatedIssues }}</div>
              <div class="text-sm text-gray-500">Escalated Issues</div>
            </div>
          </div>

          <!-- Communication Interface -->
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <!-- Team Messages -->
            <div class="lg:col-span-1 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
              <div class="p-4 border-b border-gray-100 dark:border-gray-600">
                <h3 class="font-semibold text-brand-navy dark:text-white">Team Messages</h3>
              </div>
              <div class="space-y-2 p-4 max-h-96 overflow-y-auto">
                <div v-for="message in teamCommunications" :key="message.id" class="p-3 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg cursor-pointer">
                  <div class="flex items-center space-x-3">
                    <div class="w-8 h-8 bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-800 dark:to-purple-600 rounded-full"></div>
                    <div class="flex-1">
                      <div class="font-semibold text-brand-navy dark:text-white text-sm">{{ message.from }}</div>
                      <div class="text-xs text-gray-500 truncate">{{ message.preview }}</div>
                      <div class="text-xs text-gray-400">{{ message.time }}</div>
                    </div>
                    <div v-if="message.unread" class="w-2 h-2 bg-red-500 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Communication Analytics -->
            <div class="lg:col-span-2 space-y-6">
              <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
                <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Agent Communication Performance</h3>
                <div class="space-y-4">
                  <div v-for="agent in agentCommunicationStats" :key="agent.id" class="flex items-center space-x-4">
                    <div class="w-10 h-10 bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-800 dark:to-purple-600 rounded-full flex items-center justify-center">
                      <span class="text-sm font-semibold text-purple-800 dark:text-purple-200">{{ agent.initials }}</span>
                    </div>
                    <div class="flex-1">
                      <div class="flex items-center justify-between">
                        <span class="font-medium text-brand-navy dark:text-white">{{ agent.name }}</span>
                        <span class="text-sm font-semibold text-brand-navy dark:text-white">{{ agent.responseTime }}</span>
                      </div>
                      <div class="flex justify-between text-xs text-gray-500 mt-1">
                        <span>{{ agent.totalMessages }} messages</span>
                        <span :class="agent.responseTime <= '2h' ? 'text-green-600' : 'text-yellow-600'">
                          {{ agent.responseTime <= '2h' ? 'Excellent' : 'Needs Improvement' }}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
                <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Recent Escalated Issues</h3>
                <div class="space-y-4">
                  <div v-for="issue in escalatedCommunications" :key="issue.id" class="p-4 border border-gray-200 dark:border-gray-600 rounded-lg">
                    <div class="flex items-center justify-between mb-2">
                      <span class="font-semibold text-brand-navy dark:text-white">{{ issue.subject }}</span>
                      <span :class="['px-2 py-1 rounded text-xs font-semibold',
                                   issue.priority === 'High' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800']">
                        {{ issue.priority }} Priority
                      </span>
                    </div>
                    <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">{{ issue.description }}</p>
                    <div class="flex items-center justify-between text-xs text-gray-500">
                      <span>Agent: {{ issue.agentName }}</span>
                      <span>{{ issue.timeAgo }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Agency Settings Tab -->
        <div v-if="activeTab === 'agency-settings'" class="p-6">
          <div class="flex items-center justify-between mb-6">
            <h2 class="text-2xl font-bold text-brand-navy dark:text-white">Agency Settings</h2>
            <button class="bg-brand-turqoise-light text-brand-navy px-6 py-3 rounded-lg font-semibold hover:bg-teal-300 transition-colors">
              Save Changes
            </button>
          </div>

          <!-- Agency Profile Settings -->
          <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 mb-6">
            <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Agency Profile</h3>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <label class="block text-sm font-medium text-brand-navy dark:text-gray-300 mb-2">Agency Name</label>
                <input type="text" v-model="agencyProfile.name" class="w-full px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-turqoise-light bg-white dark:bg-gray-700 text-brand-navy dark:text-white">
              </div>
              <div>
                <label class="block text-sm font-medium text-brand-navy dark:text-gray-300 mb-2">Contact Email</label>
                <input type="email" v-model="agencyProfile.contactEmail" class="w-full px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-turqoise-light bg-white dark:bg-gray-700 text-brand-navy dark:text-white">
              </div>
              <div>
                <label class="block text-sm font-medium text-brand-navy dark:text-gray-300 mb-2">Phone Number</label>
                <input type="tel" v-model="agencyProfile.phone" class="w-full px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-turqoise-light bg-white dark:bg-gray-700 text-brand-navy dark:text-white">
              </div>
              <div>
                <label class="block text-sm font-medium text-brand-navy dark:text-gray-300 mb-2">Business License</label>
                <input type="text" v-model="agencyProfile.businessLicense" class="w-full px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-turqoise-light bg-white dark:bg-gray-700 text-brand-navy dark:text-white">
              </div>
            </div>
          </div>

          <!-- Commission Structure -->
          <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 mb-6">
            <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Commission Structure</h3>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <label class="block text-sm font-medium text-brand-navy dark:text-gray-300 mb-2">Default Agent Commission Split (%)</label>
                <input type="number" v-model="agencySettings.defaultCommissionSplit" min="50" max="90" class="w-full px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-turqoise-light bg-white dark:bg-gray-700 text-brand-navy dark:text-white">
                <p class="text-xs text-gray-500 mt-1">Agent receives this %, agency keeps remainder</p>
              </div>
              <div>
                <label class="block text-sm font-medium text-brand-navy dark:text-gray-300 mb-2">Performance Bonus Threshold (%)</label>
                <input type="number" v-model="agencySettings.performanceThreshold" min="80" max="100" class="w-full px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-turqoise-light bg-white dark:bg-gray-700 text-brand-navy dark:text-white">
                <p class="text-xs text-gray-500 mt-1">Performance score needed for bonus eligibility</p>
              </div>
            </div>
          </div>

          <!-- Lead Distribution Settings -->
          <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 mb-6">
            <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Lead Distribution Rules</h3>
            <div class="space-y-4">
              <div class="flex items-center space-x-4">
                <input type="checkbox" v-model="agencySettings.autoAssignLeads" class="w-4 h-4 text-brand-turqoise-light border-gray-300 rounded focus:ring-brand-turqoise-light">
                <label class="text-sm text-brand-navy dark:text-white">Automatically assign new leads to agents</label>
              </div>
              <div class="flex items-center space-x-4">
                <input type="checkbox" v-model="agencySettings.performanceBasedAssignment" class="w-4 h-4 text-brand-turqoise-light border-gray-300 rounded focus:ring-brand-turqoise-light">
                <label class="text-sm text-brand-navy dark:text-white">Prioritize high-performing agents for lead assignment</label>
              </div>
              <div class="flex items-center space-x-4">
                <input type="checkbox" v-model="agencySettings.specialtyMatching" class="w-4 h-4 text-brand-turqoise-light border-gray-300 rounded focus:ring-brand-turqoise-light">
                <label class="text-sm text-brand-navy dark:text-white">Match leads to agent specializations</label>
              </div>
            </div>
          </div>

          <!-- Subscription & Billing -->
          <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white">Subscription & Billing</h3>
              <span :class="getSubscriptionBadgeClass(agencyProfile.subscriptionTier)" class="px-3 py-1 rounded-full text-sm font-semibold">
                {{ agencyProfile.subscriptionTier.toUpperCase() }} Plan
              </span>
            </div>
            
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div class="text-center p-4 border border-gray-200 dark:border-gray-600 rounded-lg">
                <div class="text-2xl font-bold text-brand-navy dark:text-white">{{ agencyProfile.totalAgents }}</div>
                <div class="text-sm text-gray-500">Active Agents</div>
                <div class="text-xs text-gray-500 mt-1">Limit: {{ agencyProfile.maxAgents }}</div>
              </div>
              <div class="text-center p-4 border border-gray-200 dark:border-gray-600 rounded-lg">
                <div class="text-2xl font-bold text-brand-navy dark:text-white">{{ agencyProfile.totalListings }}</div>
                <div class="text-sm text-gray-500">Active Listings</div>
                <div class="text-xs text-gray-500 mt-1">Unlimited</div>
              </div>
              <div class="text-center p-4 border border-gray-200 dark:border-gray-600 rounded-lg">
                <div class="text-2xl font-bold text-green-600">{{ subscriptionStatus }}</div>
                <div class="text-sm text-gray-500">Status</div>
                <div class="text-xs text-gray-500 mt-1">Next billing: {{ nextBillingDate }}</div>
              </div>
            </div>

            <div class="mt-6 flex items-center justify-between p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-lg">
              <div>
                <div class="font-semibold text-blue-800 dark:text-blue-400">Need to upgrade?</div>
                <div class="text-sm text-blue-700 dark:text-blue-500">Add more agents or access premium features</div>
              </div>
              <button class="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Upgrade Plan
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
    <!-- Add Agent Modal -->
    <div v-if="showAddAgentModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div class="bg-white dark:bg-gray-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div class="p-6 border-b border-gray-200 dark:border-gray-600">
          <div class="flex items-center justify-between">
            <h3 class="text-xl font-semibold text-brand-navy dark:text-white">Add New Agent</h3>
            <button @click="showAddAgentModal = false" class="text-brand-navy dark:text-gray-400 hover:text-brand-turqoise-light">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>
        </div>
        <div class="p-6">
          <div class="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label class="block text-sm font-medium text-brand-navy dark:text-gray-300 mb-2">First Name</label>
              <input type="text" v-model="newAgent.firstName" class="w-full px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-turqoise-light bg-white dark:bg-gray-700 text-brand-navy dark:text-white">
            </div>
            <div>
              <label class="block text-sm font-medium text-brand-navy dark:text-gray-300 mb-2">Last Name</label>
              <input type="text" v-model="newAgent.lastName" class="w-full px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-turqoise-light bg-white dark:bg-gray-700 text-brand-navy dark:text-white">
            </div>
          </div>
          <div class="mb-4">
            <label class="block text-sm font-medium text-brand-navy dark:text-gray-300 mb-2">Email</label>
            <input type="email" v-model="newAgent.email" class="w-full px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-turqoise-light bg-white dark:bg-gray-700 text-brand-navy dark:text-white">
          </div>
          <div class="mb-4">
            <label class="block text-sm font-medium text-brand-navy dark:text-gray-300 mb-2">Commission Split (%)</label>
            <input type="number" v-model="newAgent.commissionSplit" min="50" max="90" class="w-full px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-turqoise-light bg-white dark:bg-gray-700 text-brand-navy dark:text-white">
            <p class="text-xs text-gray-500 mt-1">Agent receives this %, agency keeps remainder</p>
          </div>
          <div class="flex space-x-4">
            <button @click="addAgent" class="flex-1 bg-brand-turqoise-light text-brand-navy py-3 rounded-lg font-semibold hover:bg-teal-300 transition-colors">
              Add Agent
            </button>
            <button @click="showAddAgentModal = false" class="flex-1 border border-gray-300 dark:border-gray-600 text-brand-navy dark:text-gray-300 py-3 rounded-lg font-semibold hover:border-gray-400 transition-colors">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Bulk Assign Modal -->
    <div v-if="showBulkAssignModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div class="bg-white dark:bg-gray-800 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        <div class="p-6 border-b border-gray-200 dark:border-gray-600">
          <div class="flex items-center justify-between">
            <h3 class="text-xl font-semibold text-brand-navy dark:text-white">Bulk Lead Assignment</h3>
            <button @click="showBulkAssignModal = false" class="text-brand-navy dark:text-gray-400 hover:text-brand-turqoise-light">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>
        </div>
        <div class="p-6">
          <div class="mb-4">
            <label class="block text-sm font-medium text-brand-navy dark:text-gray-300 mb-2">Assignment Method</label>
            <select v-model="bulkAssignMethod" class="w-full px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-turqoise-light bg-white dark:bg-gray-700 text-brand-navy dark:text-white">
              <option value="performance">By Performance (Best performers get priority)</option>
              <option value="availability">By Availability (Least busy agents first)</option>
              <option value="specialty">By Specialty (Match property type to agent expertise)</option>
              <option value="round-robin">Round Robin (Equal distribution)</option>
            </select>
          </div>
          <div class="mb-4">
            <label class="block text-sm font-medium text-brand-navy dark:text-gray-300 mb-2">Select Leads to Assign</label>
            <div class="max-h-40 overflow-y-auto border border-gray-200 dark:border-gray-600 rounded-lg p-3">
              <div v-for="lead in unassignedLeadsList" :key="lead.id" class="flex items-center space-x-2 mb-2">
                <input type="checkbox" :value="lead.id" v-model="selectedLeadsForBulkAssign" class="w-4 h-4 text-brand-turqoise-light border-gray-300 rounded focus:ring-brand-turqoise-light">
                <span class="text-sm text-brand-navy dark:text-white">{{ lead.name }} - {{ lead.propertyType }} ({{ lead.priority }})</span>
              </div>
            </div>
          </div>
          <div class="flex space-x-4">
            <button @click="executeBulkAssign" class="flex-1 bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors">
              Assign {{ selectedLeadsForBulkAssign.length }} Leads
            </button>
            <button @click="showBulkAssignModal = false" class="flex-1 border border-gray-300 dark:border-gray-600 text-brand-navy dark:text-gray-300 py-3 rounded-lg font-semibold hover:border-gray-400 transition-colors">
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
  title: 'Agency Dashboard - ThaiKeys',
  meta: [
    {
      name: 'description',
      content: 'Comprehensive agency dashboard for managing agents, leads, listings, financial performance, and team communications.'
    }
  ]
})

// Reactive data
const searchQuery = ref('')
const agentSearchQuery = ref('')
const leadSearchQuery = ref('')
const clientSearchQuery = ref('')
const activeTab = ref('overview')
const showAddAgentModal = ref(false)
const showBulkAssignModal = ref(false)
const unreadNotifications = ref(8)

// New Agent Form
const newAgent = ref({
  firstName: '',
  lastName: '',
  email: '',
  commissionSplit: 65
})

// Bulk Assignment
const bulkAssignMethod = ref('performance')
const selectedLeadsForBulkAssign = ref([])

// Agency Profile
const agencyProfile = ref({
  name: 'Bangkok Premium Properties',
  initials: 'BPP',
  totalAgents: 15,
  totalListings: 84,
  subscriptionTier: 'premium',
  maxAgents: 25,
  contactEmail: 'admin@bpp.co.th',
  phone: '+66 2 123 4567',
  businessLicense: 'BL-2023-0012'
})

// Agency Settings
const agencySettings = ref({
  defaultCommissionSplit: 65,
  performanceThreshold: 85,
  autoAssignLeads: true,
  performanceBasedAssignment: true,
  specialtyMatching: true
})

// Performance Metrics
const agencyPerformanceScore = ref(87)
const marketShare = ref(12.5)
const monthlyRevenue = ref('฿2.8M')
const revenueGrowth = ref('+24%')
const activeDeals = ref(52)
const totalPipelineValue = ref('฿18.5M')
const teamPerformanceScore = ref(83)
const clientSatisfactionRate = ref(91)
const totalReviews = ref(342)
const marketRanking = ref(3)
const newLeadsThisWeek = ref(28)
const underperformingAgents = ref(3)

// Lead Management Data
const unassignedLeads = ref(15)
const totalLeads = ref(142)
const assignedLeads = ref(127)
const avgResponseTime = ref('1.4h')
const leadConversionRate = ref(31)

const unassignedLeadsList = ref([
  { id: 1, name: 'Alex Johnson', propertyType: 'Condo', priority: 'High' },
  { id: 2, name: 'Maria Santos', propertyType: 'House', priority: 'Medium' },
  { id: 3, name: 'David Lee', propertyType: 'Studio', priority: 'Low' }
])

const allLeads = ref([
  {
    id: 1,
    name: 'Alex Johnson',
    initials: 'AJ',
    email: 'alex.johnson@email.com',
    priority: 'High',
    propertyType: 'Luxury Condo',
    preferredArea: 'Sukhumvit',
    budgetMin: 50000,
    budgetMax: 80000,
    dealType: 'Rental',
    source: 'Website',
    sourceDate: '2024-03-20',
    status: 'Unassigned',
    assignedAgent: null,
    assignedDate: null
  },
  {
    id: 2,
    name: 'Maria Santos',
    initials: 'MS',
    email: 'maria.santos@email.com',
    priority: 'Medium',
    propertyType: 'House',
    preferredArea: 'Thonglor',
    budgetMin: 90000,
    budgetMax: 150000,
    dealType: 'Purchase',
    source: 'Referral',
    sourceDate: '2024-03-18',
    status: 'Assigned',
    assignedAgent: 'Sarah Wilson',
    assignedDate: '2024-03-19'
  }
])

// Agent Management Data
const newAgentsThisMonth = ref(2)
const topPerformers = ref(5)

const agencyAgents = ref([
  {
    id: 1,
    name: 'Sarah Wilson',
    initials: 'SW',
    email: 'sarah.wilson@bpp.co.th',
    performanceLevel: 'Top',
    performanceScore: 94,
    monthlyDeals: 8,
    targetDeals: 6,
    commissionSplit: 70,
    activeClients: 12,
    satisfactionRate: 96,
    joinDate: '2023-08-15',
    tenure: '8 months'
  },
  {
    id: 2,
    name: 'Mark Johnson',
    initials: 'MJ',
    email: 'mark.johnson@bpp.co.th',
    performanceLevel: 'Good',
    performanceScore: 87,
    monthlyDeals: 6,
    targetDeals: 5,
    commissionSplit: 65,
    activeClients: 9,
    satisfactionRate: 92,
    joinDate: '2023-06-20',
    tenure: '10 months'
  },
  {
    id: 3,
    name: 'Jane Smith',
    initials: 'JS',
    email: 'jane.smith@bpp.co.th',
    performanceLevel: 'Needs Support',
    performanceScore: 72,
    monthlyDeals: 3,
    targetDeals: 5,
    commissionSplit: 60,
    activeClients: 5,
    satisfactionRate: 85,
    joinDate: '2024-01-10',
    tenure: '3 months'
  }
])

const topPerformingAgents = computed(() => {
  return agencyAgents.value
    .sort((a, b) => b.performanceScore - a.performanceScore)
    .slice(0, 3)
    .map(agent => ({
      ...agent,
      monthlyCommission: agent.monthlyDeals * 35000 // Estimated
    }))
})

const availableAgents = computed(() => agencyAgents.value)

// Listings Data
const availableListings = ref(84)
const rentedSoldListings = ref(67)
const avgDaysOnMarket = ref(18)
const avgListingValue = ref(2850000)

const agencyListings = ref([
  {
    id: 1,
    title: 'Luxury 3BR Penthouse',
    location: 'Sukhumvit 39, Phrom Phong',
    price: '฿120,000',
    bedrooms: 3,
    bathrooms: 3,
    status: 'Available',
    views: 456,
    inquiries: 18,
    daysOnMarket: 12,
    btsDistance: '1 min to Phrom Phong BTS',
    agentName: 'Sarah Wilson'
  },
  {
    id: 2,
    title: 'Modern 2BR Condo',
    location: 'Sukhumvit 24, Phrom Phong',
    price: '฿42,000',
    bedrooms: 2,
    bathrooms: 2,
    status: 'Available',
    views: 189,
    inquiries: 7,
    daysOnMarket: 8,
    btsDistance: '2 min to Phrom Phong BTS',
    agentName: 'Mark Johnson'
  }
])

// Client Management Data
const totalAgencyClients = ref(186)
const activeClients = ref(142)
const highValueClients = ref(28)
const clientsNeedingAttention = ref(12)

const agencyClients = ref([
  {
    id: 1,
    name: 'Emma Thompson',
    initials: 'ET',
    email: 'emma.thompson@email.com',
    assignedAgent: 'Sarah Wilson',
    assignedDate: '2024-02-15',
    status: 'Active',
    propertyType: 'Luxury Condo',
    preferredArea: 'Sukhumvit',
    budgetMin: 60000,
    budgetMax: 100000,
    lastActivity: '2 hours ago',
    activityType: 'Property viewing',
    satisfactionRating: 5
  },
  {
    id: 2,
    name: 'Robert Johnson',
    initials: 'RJ',
    email: 'robert.johnson@email.com',
    assignedAgent: 'Mark Johnson',
    assignedDate: '2024-03-01',
    status: 'Negotiating',
    propertyType: 'Executive House',
    preferredArea: 'Thonglor',
    budgetMin: 120000,
    budgetMax: 180000,
    lastActivity: '1 day ago',
    activityType: 'Contract discussion',
    satisfactionRating: 4
  }
])

// Performance Analytics Data
const totalDealsThisMonth = ref(42)
const dealsGrowth = ref(18)
const luxuryGrowth = ref(32)
const btsGrowth = ref(24)

const performanceComparison = ref([
  {
    id: 1,
    name: 'Sarah Wilson',
    initials: 'SW',
    deals: 8,
    revenue: 280000,
    performanceScore: 94,
    performancePercentage: 100
  },
  {
    id: 2,
    name: 'Mark Johnson',
    initials: 'MJ',
    deals: 6,
    revenue: 210000,
    performanceScore: 87,
    performancePercentage: 85
  },
  {
    id: 3,
    name: 'Jane Smith',
    initials: 'JS',
    deals: 3,
    revenue: 105000,
    performanceScore: 72,
    performancePercentage: 55
  }
])

// Financial Management Data
const pendingCommissionPayments = ref(8)
const pendingCommissionAmount = ref(425000)
const agencyRevenue = ref('฿2.8M')
const operatingExpenses = ref('฿890K')
const expenseRatio = ref(32)
const netProfit = ref('฿1.91M')
const profitMargin = ref(68)

const pendingCommissions = ref([
  {
    id: 1,
    agentName: 'Sarah Wilson',
    agentEmail: 'sarah.wilson@bpp.co.th',
    propertyTitle: 'Luxury Penthouse Deal',
    clientName: 'Emma Thompson',
    dealType: 'Rental',
    totalCommission: 120000,
    agentShare: 84000,
    agencyShare: 36000,
    status: 'Pending'
  },
  {
    id: 2,
    agentName: 'Mark Johnson',
    agentEmail: 'mark.johnson@bpp.co.th',
    propertyTitle: 'Executive House Sale',
    clientName: 'Robert Johnson',
    dealType: 'Purchase',
    totalCommission: 285000,
    agentShare: 185250,
    agencyShare: 99750,
    status: 'Processing'
  }
])

// Communications Data
const teamMessages = ref(24)
const avgTeamResponseTime = ref('1.2h')
const activeConversations = ref(38)
const escalatedIssues = ref(5)

const teamCommunications = ref([
  { id: 1, from: 'Sarah Wilson', preview: 'Client wants to schedule another viewing...', time: '2h', unread: true },
  { id: 2, from: 'Mark Johnson', preview: 'Contract signed! Commission due...', time: '4h', unread: false },
  { id: 3, from: 'Jane Smith', preview: 'Need help with difficult client...', time: '1d', unread: true }
])

const agentCommunicationStats = ref([
  { id: 1, name: 'Sarah Wilson', initials: 'SW', responseTime: '45m', totalMessages: 156 },
  { id: 2, name: 'Mark Johnson', initials: 'MJ', responseTime: '1.2h', totalMessages: 132 },
  { id: 3, name: 'Jane Smith', initials: 'JS', responseTime: '2.8h', totalMessages: 89 }
])

const escalatedCommunications = ref([
  {
    id: 1,
    subject: 'Client Complaint - Property Condition',
    description: 'Client unhappy with undisclosed property issues',
    agentName: 'Jane Smith',
    priority: 'High',
    timeAgo: '2 hours ago'
  },
  {
    id: 2,
    subject: 'Commission Dispute',
    description: 'Agent requesting commission adjustment',
    agentName: 'Mark Johnson',
    priority: 'Medium',
    timeAgo: '1 day ago'
  }
])

// Subscription Data
const subscriptionStatus = ref('Active')
const nextBillingDate = ref('Apr 15, 2024')

// Recent Activity
const recentAgencyActivity = ref([
  {
    id: 1,
    type: 'deal',
    title: 'Deal Closed',
    description: 'Luxury penthouse rental completed',
    agentName: 'Sarah Wilson',
    time: '2 hours ago',
    value: 120000
  },
  {
    id: 2,
    type: 'lead',
    title: 'New High-Value Lead',
    description: 'Corporate client looking for multiple properties',
    agentName: 'Auto-assigned',
    time: '4 hours ago',
    value: null
  },
  {
    id: 3,
    type: 'agent',
    title: 'Performance Milestone',
    description: 'Mark Johnson reached monthly target',
    agentName: 'Mark Johnson',
    time: '1 day ago',
    value: null
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

const getSubscriptionBadgeClass = (tier) => {
  switch(tier) {
    case 'premium': return 'bg-purple-100 dark:bg-purple-900/20 text-purple-800 dark:text-purple-400'
    case 'pro': return 'bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-400'
    default: return 'bg-gray-100 dark:bg-gray-600 text-gray-800 dark:text-gray-300'
  }
}

// Action Methods
const addAgent = () => {
  const agent = {
    id: agencyAgents.value.length + 1,
    name: `${newAgent.value.firstName} ${newAgent.value.lastName}`,
    initials: `${newAgent.value.firstName.charAt(0)}${newAgent.value.lastName.charAt(0)}`,
    email: newAgent.value.email,
    performanceLevel: 'New',
    performanceScore: 0,
    monthlyDeals: 0,
    targetDeals: 3,
    commissionSplit: newAgent.value.commissionSplit,
    activeClients: 0,
    satisfactionRate: 0,
    joinDate: new Date().toLocaleDateString(),
    tenure: 'New'
  }
  
  agencyAgents.value.push(agent)
  showAddAgentModal.value = false
  
  // Reset form
  newAgent.value = {
    firstName: '',
    lastName: '',
    email: '',
    commissionSplit: 65
  }
}

const assignLead = (lead, agentId) => {
  const agent = agencyAgents.value.find(a => a.id === parseInt(agentId))
  if (agent) {
    lead.assignedAgent = agent.name
    lead.status = 'Assigned'
    lead.assignedDate = new Date().toLocaleDateString()
    unassignedLeads.value--
    assignedLeads.value++
  }
}

const executeBulkAssign = () => {
  console.log('Bulk assigning leads:', selectedLeadsForBulkAssign.value, 'Method:', bulkAssignMethod.value)
  showBulkAssignModal.value = false
  selectedLeadsForBulkAssign.value = []
}

const viewAgentDetails = (agent) => {
  console.log('Viewing agent details:', agent.name)
}

const reassignClients = (agent) => {
  console.log('Reassigning clients for agent:', agent.name)
}

const editAgent = (agent) => {
  console.log('Editing agent:', agent.name)
}

const managePermissions = (agent) => {
  console.log('Managing permissions for:', agent.name)
}

const reassignLead = (lead) => {
  console.log('Reassigning lead:', lead.name)
}

const viewLeadDetails = (lead) => {
  console.log('Viewing lead details:', lead.name)
}

const reassignListing = (listing) => {
  console.log('Reassigning listing:', listing.title)
}

const viewClientHistory = (client) => {
  console.log('Viewing client history:', client.name)
}

const reassignClient = (client) => {
  console.log('Reassigning client:', client.name)
}

const escalateClient = (client) => {
  console.log('Escalating client issue:', client.name)
}

const processPayment = (payment) => {
  console.log('Processing payment for:', payment.agentName)
  payment.status = 'Processing'
}

const viewPaymentDetails = (payment) => {
  console.log('Viewing payment details:', payment)
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