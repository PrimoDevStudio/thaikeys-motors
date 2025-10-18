<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 font-sans transition-colors duration-300">
    <!-- Platform Admin Header -->
    <div class="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-4">
      <div class="flex items-center justify-between mx-auto">
        <!-- Platform Admin Identity -->
        <div class="flex items-center space-x-6">
          <div class="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center border-2 border-white shadow-lg">
            <span class="text-xl font-bold text-white">TK</span>
          </div>
          
          <div class="text-white">
            <h1 class="font-bold text-2xl">Platform Administration</h1>
            <div class="text-sm text-blue-100 flex items-center space-x-4">
              <span>ThaiKeys Platform Control Center</span>
              <span class="w-1 h-1 bg-blue-200 rounded-full"></span>
              <span>{{ totalAgencies }} Active Agencies</span>
              <span class="w-1 h-1 bg-blue-200 rounded-full"></span>
              <span class="bg-red-400 text-blue-900 px-2 py-0.5 rounded text-xs font-semibold">SUPER ADMIN</span>
            </div>
          </div>
        </div>

        <!-- Platform Stats -->
        <div class="flex items-center space-x-6 text-white">
          <div class="text-center">
            <div class="font-bold text-xl">{{ totalPlatformUsers.toLocaleString() }}</div>
            <div class="text-xs text-blue-100">Platform Users</div>
          </div>
          <div class="text-center">
            <div class="font-bold text-xl">{{ totalSearchSessions.toLocaleString() }}</div>
            <div class="text-xs text-blue-100">Search Sessions</div>
          </div>
          <div class="text-center">
            <div class="font-bold text-xl">{{ formatCurrency(platformRevenue) }}</div>
            <div class="text-xs text-blue-100">Monthly Revenue</div>
          </div>
          <div class="text-center">
            <div class="font-bold text-xl text-green-300">{{ platformHealth }}%</div>
            <div class="text-xs text-blue-100">System Health</div>
          </div>
        </div>

        <!-- Quick Actions -->
        <div class="flex items-center space-x-4">
          <button class="relative p-2 text-white hover:text-yellow-300 transition-colors">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
            </svg>
            <span v-if="systemAlerts > 0" class="absolute top-1 right-1 w-2 h-2 bg-red-400 rounded-full"></span>
          </button>
          
          <button class="bg-white bg-opacity-20 border border-white border-opacity-30 text-white rounded-lg px-4 py-2 text-sm hover:bg-opacity-30 transition-colors">
            Export Platform Report
          </button>
          
          <div class="w-8 h-8 bg-white bg-opacity-20 rounded-full"></div>
        </div>
      </div>
    </div>

    <!-- Main Layout Container -->
    <div class="flex mx-auto">
      <!-- Platform Admin Sidebar -->
      <aside class="w-72 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex-shrink-0 transition-colors duration-300">
        <nav class="p-4 space-y-1">
          <!-- Platform Management Section -->
          <div>
            <div class="px-3 py-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Platform Management
            </div>
            
            <a href="#" :class="getNavClass('platform-overview')" @click="activeTab = 'platform-overview'">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
              </svg>
              <span class="font-medium">Platform Overview</span>
            </a>
            
            <a href="#" :class="getNavClass('user-management')" @click="activeTab = 'user-management'">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"/>
              </svg>
              <span class="font-medium">User Management</span>
              <span class="bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-400 text-xs font-semibold px-2 py-1 rounded-full ml-auto">{{ totalPlatformUsers.toLocaleString() }}</span>
            </a>
            
            <a href="#" :class="getNavClass('agency-oversight')" @click="activeTab = 'agency-oversight'">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
              </svg>
              <span class="font-medium">Agency Oversight</span>
              <span class="bg-purple-100 dark:bg-purple-900/20 text-purple-800 dark:text-purple-400 text-xs font-semibold px-2 py-1 rounded-full ml-auto">{{ totalAgencies }}</span>
            </a>
          </div>

          <!-- Analytics & Intelligence Section -->
          <div class="mt-6">
            <div class="px-3 py-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Analytics & Intelligence
            </div>
            
            <a href="#" :class="getNavClass('platform-analytics')" @click="activeTab = 'platform-analytics'">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
              </svg>
              <span class="font-medium">Platform Analytics</span>
            </a>
            
            <a href="#" :class="getNavClass('user-behavior')" @click="activeTab = 'user-behavior'">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
              </svg>
              <span class="font-medium">User Behavior Analytics</span>
            </a>
            
            <a href="#" :class="getNavClass('search-analytics')" @click="activeTab = 'search-analytics'">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
              </svg>
              <span class="font-medium">Search Analytics</span>
              <span class="bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-400 text-xs font-semibold px-2 py-1 rounded-full ml-auto">{{ totalSearchSessions.toLocaleString() }}</span>
            </a>
            
            <a href="#" :class="getNavClass('market-intelligence')" @click="activeTab = 'market-intelligence'">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"/>
              </svg>
              <span class="font-medium">Market Intelligence</span>
            </a>
          </div>

          <!-- System Operations Section -->
          <div class="mt-6">
            <div class="px-3 py-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              System Operations
            </div>
            
            <a href="#" :class="getNavClass('revenue-management')" @click="activeTab = 'revenue-management'">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"/>
              </svg>
              <span class="font-medium">Revenue Management</span>
              <span v-if="pendingPayouts > 0" class="bg-yellow-100 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-400 text-xs font-semibold px-2 py-1 rounded-full ml-auto">{{ pendingPayouts }}</span>
            </a>
            
            <a href="#" :class="getNavClass('system-health')" @click="activeTab = 'system-health'">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
              </svg>
              <span class="font-medium">System Health</span>
              <div :class="['w-2 h-2 rounded-full ml-auto', systemAlerts > 0 ? 'bg-red-500' : 'bg-green-500']"></div>
            </a>
            
            <a href="#" :class="getNavClass('platform-settings')" @click="activeTab = 'platform-settings'">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
              <span class="font-medium">Platform Settings</span>
            </a>
          </div>
        </nav>
      </aside>

      <!-- Main Content Area -->
      <main class="flex-1 overflow-y-auto bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        
        <!-- Platform Overview Tab -->
        <div v-if="activeTab === 'platform-overview'" class="p-6">
          <!-- Critical System Alerts -->
          <div v-if="systemAlerts > 0" class="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700 rounded-xl p-4 mb-6">
            <div class="flex items-center space-x-2">
              <svg class="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/>
              </svg>
              <div>
                <div class="font-semibold text-red-800 dark:text-red-400">{{ systemAlerts }} System Alerts Require Attention</div>
                <div class="text-sm text-red-700 dark:text-red-500">High server load detected • Payment gateway issues • {{ agenciesNeedingReview }} agencies need verification</div>
              </div>
            </div>
          </div>

          <!-- Platform KPIs Grid (Main DB + Analytics DB) -->
          <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm font-medium text-brand-navy dark:text-gray-400">Platform Revenue</p>
                  <p class="text-3xl font-bold text-brand-navy dark:text-white">{{ formatCurrency(platformRevenue) }}</p>
                  <p class="text-sm text-green-600 dark:text-green-400 mt-2">{{ platformRevenueGrowth }} from last month</p>
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
                  <p class="text-sm font-medium text-brand-navy dark:text-gray-400">Active Users</p>
                  <p class="text-3xl font-bold text-brand-navy dark:text-white">{{ totalPlatformUsers.toLocaleString() }}</p>
                  <p class="text-sm text-blue-600 dark:text-blue-400 mt-2">{{ newUsersThisMonth.toLocaleString() }} new this month</p>
                </div>
                <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-xl flex items-center justify-center">
                  <svg class="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"/>
                  </svg>
                </div>
              </div>
            </div>

            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm font-medium text-brand-navy dark:text-gray-400">Search Sessions</p>
                  <p class="text-3xl font-bold text-brand-navy dark:text-white">{{ totalSearchSessions.toLocaleString() }}</p>
                  <p class="text-sm text-purple-600 dark:text-purple-400 mt-2">{{ avgSearchesPerUser }} avg per user</p>
                </div>
                <div class="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-xl flex items-center justify-center">
                  <svg class="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                  </svg>
                </div>
              </div>
            </div>

            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm font-medium text-brand-navy dark:text-gray-400">User Interactions</p>
                  <p class="text-3xl font-bold text-brand-navy dark:text-white">{{ totalUserInteractions.toLocaleString() }}</p>
                  <p class="text-sm text-orange-600 dark:text-orange-400 mt-2">{{ interactionGrowth }}% this week</p>
                </div>
                <div class="w-12 h-12 bg-orange-100 dark:bg-orange-900/20 rounded-xl flex items-center justify-center">
                  <svg class="w-6 h-6 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <!-- Analytics-Driven Charts -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <!-- User Engagement from Analytics DB -->
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">User Engagement Trends</h3>
              <VChart ref="userEngagementChart" :option="userEngagementOption" class="h-64" />
            </div>

            <!-- Search Behavior Analytics -->
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Search Behavior Analytics</h3>
              <VChart ref="searchBehaviorChart" :option="searchBehaviorOption" class="h-64" />
            </div>
          </div>

          <!-- Market Demand from Analytics -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <!-- Demand Analytics -->
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Market Demand Analytics</h3>
              <VChart ref="demandAnalyticsChart" :option="demandAnalyticsOption" class="h-64" />
            </div>

            <!-- Price Trends -->
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Price Trends Analysis</h3>
              <VChart ref="priceTrendsChart" :option="priceTrendsOption" class="h-64" />
            </div>
          </div>

          <!-- Real-time Activity Heatmap -->
          <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 mb-8">
            <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Real-time User Activity Heatmap</h3>
            <VChart ref="activityHeatmapChart" :option="activityHeatmapOption" class="h-48" />
          </div>

          <!-- Platform Insights Grid -->
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <!-- Top Performing Agencies -->
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <div class="flex items-center justify-between mb-4">
                <h3 class="text-lg font-semibold text-brand-navy dark:text-white">Top Agencies</h3>
                <button @click="activeTab = 'agency-oversight'" class="text-blue-600 hover:text-blue-700 font-medium text-sm">View All</button>
              </div>
              
              <div class="space-y-4">
                <div v-for="(agency, index) in topPerformingAgencies" :key="agency.id" class="flex items-center space-x-4">
                  <div class="flex-shrink-0">
                    <div class="w-10 h-10 bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-800 dark:to-purple-600 rounded-full flex items-center justify-center">
                      <span class="text-sm font-semibold text-purple-800 dark:text-purple-200">{{ agency.initials }}</span>
                    </div>
                  </div>
                  <div class="flex-1">
                    <div class="flex items-center justify-between">
                      <h4 class="font-semibold text-brand-navy dark:text-white">{{ agency.name }}</h4>
                      <span class="text-xs bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-400 px-2 py-1 rounded-full">#{{ index + 1 }}</span>
                    </div>
                    <div class="flex items-center justify-between text-sm text-gray-500 mt-1">
                      <span>{{ agency.monthlyDeals }} deals</span>
                      <span class="font-semibold text-green-600">{{ formatCurrency(agency.monthlyRevenue) }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Search Insights from Analytics DB -->
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Search Insights</h3>
              
              <div class="space-y-4">
                <div v-for="insight in searchInsights" :key="insight.id" class="flex items-center justify-between">
                  <div>
                    <div class="font-semibold text-brand-navy dark:text-white text-sm">{{ insight.term }}</div>
                    <div class="text-xs text-gray-500">{{ insight.category }}</div>
                  </div>
                  <div class="text-right">
                    <div class="font-bold text-blue-600">{{ insight.searches.toLocaleString() }}</div>
                    <div class="text-xs text-gray-500">searches</div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Market Signals -->
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Market Signals</h3>
              
              <div class="space-y-4">
                <div v-for="signal in marketSignals" :key="signal.id" class="p-3 rounded-lg" :class="signal.trend === 'up' ? 'bg-green-50 dark:bg-green-900/20' : signal.trend === 'down' ? 'bg-red-50 dark:bg-red-900/20' : 'bg-yellow-50 dark:bg-yellow-900/20'">
                  <div class="flex items-center justify-between">
                    <div class="font-semibold text-brand-navy dark:text-white text-sm">{{ signal.indicator }}</div>
                    <div :class="['text-sm font-bold', signal.trend === 'up' ? 'text-green-600' : signal.trend === 'down' ? 'text-red-600' : 'text-yellow-600']">
                      {{ signal.change }}
                    </div>
                  </div>
                  <div class="text-xs text-gray-500 mt-1">{{ signal.description }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- User Behavior Analytics Tab -->
        <div v-if="activeTab === 'user-behavior'" class="p-6">
          <div class="flex items-center justify-between mb-6">
            <h2 class="text-2xl font-bold text-brand-navy dark:text-white">User Behavior Analytics</h2>
            <div class="flex items-center space-x-4">
              <select v-model="behaviorTimeframe" class="border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-brand-navy dark:text-white rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="24h">Last 24 Hours</option>
                <option value="7d">Last 7 Days</option>
                <option value="30d">Last 30 Days</option>
                <option value="90d">Last 90 Days</option>
              </select>
              <button class="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Export Behavior Report
              </button>
            </div>
          </div>

          <!-- User Behavior KPIs (from Analytics DB) -->
          <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm font-medium text-brand-navy dark:text-gray-400">Total User Events</p>
                  <p class="text-3xl font-bold text-brand-navy dark:text-white">{{ totalUserEvents.toLocaleString() }}</p>
                  <p class="text-sm text-green-600 dark:text-green-400 mt-2">{{ eventGrowth }}% increase</p>
                </div>
                <div class="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-xl flex items-center justify-center">
                  <svg class="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                  </svg>
                </div>
              </div>
            </div>

            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm font-medium text-brand-navy dark:text-gray-400">Avg Session Duration</p>
                  <p class="text-3xl font-bold text-brand-navy dark:text-white">{{ avgSessionDuration }}</p>
                  <p class="text-sm text-blue-600 dark:text-blue-400 mt-2">{{ sessionGrowth }}% longer</p>
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
                  <p class="text-sm font-medium text-brand-navy dark:text-gray-400">User Interactions</p>
                  <p class="text-3xl font-bold text-brand-navy dark:text-white">{{ totalUserInteractions.toLocaleString() }}</p>
                  <p class="text-sm text-purple-600 dark:text-purple-400 mt-2">{{ avgInteractionsPerUser }} per user</p>
                </div>
                <div class="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-xl flex items-center justify-center">
                  <svg class="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"/>
                  </svg>
                </div>
              </div>
            </div>

            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm font-medium text-brand-navy dark:text-gray-400">Bounce Rate</p>
                  <p class="text-3xl font-bold text-brand-navy dark:text-white">{{ bounceRate }}%</p>
                  <p class="text-sm text-orange-600 dark:text-orange-400 mt-2">{{ bounceRateChange }}% vs last period</p>
                </div>
                <div class="w-12 h-12 bg-orange-100 dark:bg-orange-900/20 rounded-xl flex items-center justify-center">
                  <svg class="w-6 h-6 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <!-- User Journey Analytics -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <!-- User Funnel from user_events -->
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">User Journey Funnel</h3>
              <VChart ref="userJourneyChart" :option="userJourneyOption" class="h-64" />
            </div>

            <!-- Interaction Heatmap -->
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">User Interaction Patterns</h3>
              <VChart ref="interactionPatternsChart" :option="interactionPatternsOption" class="h-64" />
            </div>
          </div>

          <!-- Detailed User Event Analysis -->
          <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 mb-8">
            <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">User Event Timeline</h3>
            <VChart ref="userEventTimelineChart" :option="userEventTimelineOption" class="h-64" />
          </div>

          <!-- User Behavior Insights -->
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Top User Actions</h3>
              <div class="space-y-3">
                <div v-for="action in topUserActions" :key="action.event_type" class="flex justify-between items-center">
                  <span class="text-sm text-brand-navy dark:text-white">{{ action.event_type }}</span>
                  <span class="font-semibold text-blue-600">{{ action.count.toLocaleString() }}</span>
                </div>
              </div>
            </div>

            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Peak Activity Hours</h3>
              <div class="space-y-3">
                <div v-for="hour in peakHours" :key="hour.hour" class="flex justify-between items-center">
                  <span class="text-sm text-brand-navy dark:text-white">{{ hour.hour }}:00</span>
                  <div class="flex items-center space-x-2">
                    <div class="w-16 bg-gray-200 rounded-full h-2">
                      <div class="bg-blue-600 h-2 rounded-full" :style="`width: ${hour.activity}%`"></div>
                    </div>
                    <span class="text-xs text-gray-500">{{ hour.activity }}%</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">User Retention</h3>
              <div class="space-y-3">
                <div class="flex justify-between items-center">
                  <span class="text-sm text-gray-600 dark:text-gray-400">Day 1</span>
                  <span class="font-semibold text-brand-navy dark:text-white">{{ retentionMetrics.day1 }}%</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-sm text-gray-600 dark:text-gray-400">Day 7</span>
                  <span class="font-semibold text-brand-navy dark:text-white">{{ retentionMetrics.day7 }}%</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-sm text-gray-600 dark:text-gray-400">Day 30</span>
                  <span class="font-semibold text-brand-navy dark:text-white">{{ retentionMetrics.day30 }}%</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-sm text-gray-600 dark:text-gray-400">Day 90</span>
                  <span class="font-semibold text-brand-navy dark:text-white">{{ retentionMetrics.day90 }}%</span>
                </div>
              </div>
            </div>
          </div>
        </div><!-- User Behavior Analytics Tab -->
        <div v-if="activeTab === 'user-behavior'" class="p-6">
          <div class="flex items-center justify-between mb-6">
            <h2 class="text-2xl font-bold text-brand-navy dark:text-white">User Behavior Analytics</h2>
            <div class="flex items-center space-x-4">
              <select v-model="behaviorTimeframe" class="border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-brand-navy dark:text-white rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="24h">Last 24 Hours</option>
                <option value="7d">Last 7 Days</option>
                <option value="30d">Last 30 Days</option>
                <option value="90d">Last 90 Days</option>
              </select>
              <button class="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Export Behavior Report
              </button>
            </div>
          </div>

          <!-- User Behavior KPIs (from Analytics DB) -->
          <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm font-medium text-brand-navy dark:text-gray-400">Total User Events</p>
                  <p class="text-3xl font-bold text-brand-navy dark:text-white">{{ totalUserEvents.toLocaleString() }}</p>
                  <p class="text-sm text-green-600 dark:text-green-400 mt-2">{{ eventGrowth }}% increase</p>
                </div>
                <div class="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-xl flex items-center justify-center">
                  <svg class="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                  </svg>
                </div>
              </div>
            </div>

            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm font-medium text-brand-navy dark:text-gray-400">Avg Session Duration</p>
                  <p class="text-3xl font-bold text-brand-navy dark:text-white">{{ avgSessionDuration }}</p>
                  <p class="text-sm text-blue-600 dark:text-blue-400 mt-2">{{ sessionGrowth }}% longer</p>
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
                  <p class="text-sm font-medium text-brand-navy dark:text-gray-400">User Interactions</p>
                  <p class="text-3xl font-bold text-brand-navy dark:text-white">{{ totalUserInteractions.toLocaleString() }}</p>
                  <p class="text-sm text-purple-600 dark:text-purple-400 mt-2">{{ avgInteractionsPerUser }} per user</p>
                </div>
                <div class="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-xl flex items-center justify-center">
                  <svg class="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"/>
                  </svg>
                </div>
              </div>
            </div>

            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm font-medium text-brand-navy dark:text-gray-400">Bounce Rate</p>
                  <p class="text-3xl font-bold text-brand-navy dark:text-white">{{ bounceRate }}%</p>
                  <p class="text-sm text-orange-600 dark:text-orange-400 mt-2">{{ bounceRateChange }}% vs last period</p>
                </div>
                <div class="w-12 h-12 bg-orange-100 dark:bg-orange-900/20 rounded-xl flex items-center justify-center">
                  <svg class="w-6 h-6 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <!-- User Journey Analytics -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <!-- User Funnel from user_events -->
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">User Journey Funnel</h3>
              <VChart ref="userJourneyChart" :option="userJourneyOption" class="h-64" />
            </div>

            <!-- Interaction Heatmap -->
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">User Interaction Patterns</h3>
              <VChart ref="interactionPatternsChart" :option="interactionPatternsOption" class="h-64" />
            </div>
          </div>

          <!-- Detailed User Event Analysis -->
          <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 mb-8">
            <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">User Event Timeline</h3>
            <VChart ref="userEventTimelineChart" :option="userEventTimelineOption" class="h-64" />
          </div>

          <!-- User Behavior Insights -->
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Top User Actions</h3>
              <div class="space-y-3">
                <div v-for="action in topUserActions" :key="action.event_type" class="flex justify-between items-center">
                  <span class="text-sm text-brand-navy dark:text-white">{{ action.event_type }}</span>
                  <span class="font-semibold text-blue-600">{{ action.count.toLocaleString() }}</span>
                </div>
              </div>
            </div>

            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Peak Activity Hours</h3>
              <div class="space-y-3">
                <div v-for="hour in peakHours" :key="hour.hour" class="flex justify-between items-center">
                  <span class="text-sm text-brand-navy dark:text-white">{{ hour.hour }}:00</span>
                  <div class="flex items-center space-x-2">
                    <div class="w-16 bg-gray-200 rounded-full h-2">
                      <div class="bg-blue-600 h-2 rounded-full" :style="`width: ${hour.activity}%`"></div>
                    </div>
                    <span class="text-xs text-gray-500">{{ hour.activity }}%</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">User Retention</h3>
              <div class="space-y-3">
                <div class="flex justify-between items-center">
                  <span class="text-sm text-gray-600 dark:text-gray-400">Day 1</span>
                  <span class="font-semibold text-brand-navy dark:text-white">{{ retentionMetrics.day1 }}%</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-sm text-gray-600 dark:text-gray-400">Day 7</span>
                  <span class="font-semibold text-brand-navy dark:text-white">{{ retentionMetrics.day7 }}%</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-sm text-gray-600 dark:text-gray-400">Day 30</span>
                  <span class="font-semibold text-brand-navy dark:text-white">{{ retentionMetrics.day30 }}%</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-sm text-gray-600 dark:text-gray-400">Day 90</span>
                  <span class="font-semibold text-brand-navy dark:text-white">{{ retentionMetrics.day90 }}%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Search Analytics Tab -->
        <div v-if="activeTab === 'search-analytics'" class="p-6">
          <div class="flex items-center justify-between mb-6">
            <h2 class="text-2xl font-bold text-brand-navy dark:text-white">Search Analytics & Intelligence</h2>
            <div class="flex items-center space-x-4">
              <select v-model="searchTimeframe" class="border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-brand-navy dark:text-white rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="24h">Last 24 Hours</option>
                <option value="7d">Last 7 Days</option>
                <option value="30d">Last 30 Days</option>
                <option value="90d">Last 90 Days</option>
              </select>
              <button class="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Export Search Report
              </button>
            </div>
          </div>

          <!-- Search Analytics KPIs (from search_analytics & search_sessions) -->
          <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm font-medium text-brand-navy dark:text-gray-400">Total Searches</p>
                  <p class="text-3xl font-bold text-brand-navy dark:text-white">{{ totalSearches.toLocaleString() }}</p>
                  <p class="text-sm text-green-600 dark:text-green-400 mt-2">{{ searchGrowth }}% increase</p>
                </div>
                <div class="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-xl flex items-center justify-center">
                  <svg class="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                  </svg>
                </div>
              </div>
            </div>

            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm font-medium text-brand-navy dark:text-gray-400">Search Sessions</p>
                  <p class="text-3xl font-bold text-brand-navy dark:text-white">{{ totalSearchSessions.toLocaleString() }}</p>
                  <p class="text-sm text-blue-600 dark:text-blue-400 mt-2">{{ avgSearchesPerSession }} searches/session</p>
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
                  <p class="text-sm font-medium text-brand-navy dark:text-gray-400">Search Success Rate</p>
                  <p class="text-3xl font-bold text-brand-navy dark:text-white">{{ searchSuccessRate }}%</p>
                  <p class="text-sm text-purple-600 dark:text-purple-400 mt-2">{{ successRateChange }}% improvement</p>
                </div>
                <div class="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-xl flex items-center justify-center">
                  <svg class="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
              </div>
            </div>

            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm font-medium text-brand-navy dark:text-gray-400">Zero Results Rate</p>
                  <p class="text-3xl font-bold text-brand-navy dark:text-white">{{ zeroResultsRate }}%</p>
                  <p class="text-sm text-orange-600 dark:text-orange-400 mt-2">{{ zeroResultsChange }}% change</p>
                </div>
                <div class="w-12 h-12 bg-orange-100 dark:bg-orange-900/20 rounded-xl flex items-center justify-center">
                  <svg class="w-6 h-6 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <!-- Search Trend Analysis -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <!-- Search Volume Trends -->
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Search Volume Trends</h3>
              <VChart ref="searchVolumeChart" :option="searchVolumeOption" class="h-64" />
            </div>

            <!-- Search Filters Usage -->
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Most Used Search Filters</h3>
              <VChart ref="searchFiltersChart" :option="searchFiltersOption" class="h-64" />
            </div>
          </div>

          <!-- Popular Search Terms -->
          <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 mb-8">
            <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Popular Search Terms Cloud</h3>
            <VChart ref="searchTermsChart" :option="searchTermsCloudOption" class="h-80" />
          </div>

          <!-- Search Intelligence Grid -->
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Top Search Terms</h3>
              <div class="space-y-3">
                <div v-for="term in topSearchTerms" :key="term.term" class="flex justify-between items-center">
                  <span class="text-sm text-brand-navy dark:text-white">{{ term.term }}</span>
                  <div class="flex items-center space-x-2">
                    <span class="font-semibold text-blue-600">{{ term.count.toLocaleString() }}</span>
                    <span :class="['text-xs', term.trend === 'up' ? 'text-green-600' : term.trend === 'down' ? 'text-red-600' : 'text-gray-500']">
                      {{ term.change }}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Search Conversion</h3>
              <div class="space-y-3">
                <div class="flex justify-between items-center">
                  <span class="text-sm text-gray-600 dark:text-gray-400">Search to View</span>
                  <span class="font-semibold text-brand-navy dark:text-white">{{ searchConversion.searchToView }}%</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-sm text-gray-600 dark:text-gray-400">View to Contact</span>
                  <span class="font-semibold text-brand-navy dark:text-white">{{ searchConversion.viewToContact }}%</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-sm text-gray-600 dark:text-gray-400">Contact to Deal</span>
                  <span class="font-semibold text-brand-navy dark:text-white">{{ searchConversion.contactToDeal }}%</span>
                </div>
                <div class="flex justify-between items-center border-t pt-2">
                  <span class="text-sm font-medium text-brand-navy dark:text-white">Overall Conversion</span>
                  <span class="font-bold text-green-600">{{ searchConversion.overall }}%</span>
                </div>
              </div>
            </div>

            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Search Refinements</h3>
              <div class="space-y-3">
                <div v-for="refinement in searchRefinements" :key="refinement.type" class="flex justify-between items-center">
                  <span class="text-sm text-brand-navy dark:text-white">{{ refinement.type }}</span>
                  <div class="flex items-center space-x-2">
                    <div class="w-16 bg-gray-200 rounded-full h-2">
                      <div class="bg-purple-600 h-2 rounded-full" :style="`width: ${refinement.percentage}%`"></div>
                    </div>
                    <span class="text-xs text-gray-500">{{ refinement.percentage }}%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Agency Oversight Tab -->
        <div v-if="activeTab === 'agency-oversight'" class="p-6">
          <div class="flex items-center justify-between mb-6">
            <h2 class="text-2xl font-bold text-brand-navy dark:text-white">Agency Oversight & Management</h2>
            <div class="flex items-center space-x-4">
              <select class="border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-brand-navy dark:text-white rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>All Agencies</option>
                <option>Premium Agencies</option>
                <option>Needs Review</option>
                <option>Top Performers</option>
              </select>
              <div class="text-sm text-brand-navy dark:text-gray-400">
                Total Revenue: <span class="font-bold text-lg text-green-600">{{ formatCurrency(totalAgencyRevenue) }}</span>
              </div>
            </div>
          </div>

          <!-- Agency Performance Analytics -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <!-- Agency Performance Distribution -->
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Agency Performance Distribution</h3>
              <VChart ref="agencyPerformanceChart" :option="agencyPerformanceChartOption" class="h-64" />
            </div>

            <!-- Revenue by Agency Tier -->
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Revenue by Subscription Tier</h3>
              <VChart ref="revenueTierChart" :option="revenueTierChartOption" class="h-64" />
            </div>
          </div>

          <!-- Agency Overview Stats -->
          <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
            <div class="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg border border-gray-100 dark:border-gray-700 text-center">
              <div class="text-2xl font-bold text-purple-600">{{ totalAgencies }}</div>
              <div class="text-sm text-gray-500">Total Agencies</div>
              <div class="text-xs text-green-600 mt-1">{{ newAgenciesThisMonth }} new this month</div>
            </div>
            <div class="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg border border-gray-100 dark:border-gray-700 text-center">
              <div class="text-2xl font-bold text-green-600">{{ activeAgencies }}</div>
              <div class="text-sm text-gray-500">Active Agencies</div>
              <div class="text-xs text-blue-600 mt-1">{{ Math.round((activeAgencies/totalAgencies)*100) }}% active</div>
            </div>
            <div class="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg border border-gray-100 dark:border-gray-700 text-center">
              <div class="text-2xl font-bold text-yellow-600">{{ avgAgencyRevenue }}</div>
              <div class="text-sm text-gray-500">Avg Monthly Revenue</div>
            </div>
            <div class="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg border border-gray-100 dark:border-gray-700 text-center">
              <div class="text-2xl font-bold text-red-600">{{ agenciesNeedingReview }}</div>
              <div class="text-sm text-gray-500">Need Review</div>
            </div>
          </div>

          <!-- Agency Management Interface -->
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
            <div class="p-6 border-b border-gray-100 dark:border-gray-600">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white">Agency Management</h3>
            </div>
            
            <div class="p-6">
              <div class="grid grid-cols-8 gap-4 text-sm font-medium text-brand-navy dark:text-gray-400 mb-4">
                <div>Agency</div>
                <div>Subscription</div>
                <div>Agents</div>
                <div>Monthly Revenue</div>
                <div>Performance</div>
                <div>Compliance</div>
                <div>Status</div>
                <div>Actions</div>
              </div>
              
              <div class="space-y-4">
                <div v-for="agency in platformAgencies" :key="agency.id" class="grid grid-cols-8 gap-4 items-center p-4 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-xl transition-colors">
                  <div class="flex items-center space-x-3">
                    <div class="w-10 h-10 bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-800 dark:to-purple-600 rounded-full flex items-center justify-center">
                      <span class="text-sm font-semibold text-purple-800 dark:text-purple-200">{{ agency.initials }}</span>
                    </div>
                    <div>
                      <div class="font-semibold text-brand-navy dark:text-white">{{ agency.name }}</div>
                      <div class="text-sm text-gray-500">{{ agency.location }}</div>
                    </div>
                  </div>
                  
                  <div>
                    <span :class="['px-2 py-1 rounded text-xs font-semibold',
                                 agency.subscriptionTier === 'premium' ? 'bg-purple-100 text-purple-800' :
                                 agency.subscriptionTier === 'pro' ? 'bg-blue-100 text-blue-800' :
                                 'bg-gray-100 text-gray-800']">
                      {{ agency.subscriptionTier.toUpperCase() }}
                    </span>
                  </div>
                  
                  <div>
                    <div class="font-bold text-brand-navy dark:text-white">{{ agency.agentCount }}</div>
                    <div class="text-xs text-gray-500">agents</div>
                  </div>
                  
                  <div class="font-semibold text-green-600">{{ formatCurrency(agency.monthlyRevenue) }}</div>
                  
                  <div>
                    <div class="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                      <div :class="['h-2 rounded-full', getPerformanceColor(agency.performanceScore)]" :style="`width: ${agency.performanceScore}%`"></div>
                    </div>
                    <div class="text-xs text-gray-500 mt-1">{{ agency.performanceScore }}%</div>
                  </div>
                  
                  <div>
                    <span :class="['px-2 py-1 rounded text-xs font-semibold',
                                 agency.complianceStatus === 'Compliant' ? 'bg-green-100 text-green-800' :
                                 agency.complianceStatus === 'Issues' ? 'bg-red-100 text-red-800' :
                                 'bg-yellow-100 text-yellow-800']">
                      {{ agency.complianceStatus }}
                    </span>
                  </div>
                  
                  <div>
                    <span :class="['px-2 py-1 rounded text-xs font-semibold',
                                 agency.status === 'Active' ? 'bg-green-100 text-green-800' :
                                 agency.status === 'Suspended' ? 'bg-red-100 text-red-800' :
                                 'bg-yellow-100 text-yellow-800']">
                      {{ agency.status }}
                    </span>
                  </div>
                  
                  <div class="flex items-center space-x-2">
                    <button @click="viewAgencyDetails(agency)" class="text-blue-600 hover:text-blue-700 p-1">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                      </svg>
                    </button>
                    <button @click="auditAgency(agency)" class="text-orange-600 hover:text-orange-700 p-1">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                      </svg>
                    </button>
                    <button v-if="agency.status === 'Active'" @click="suspendAgency(agency)" class="text-red-600 hover:text-red-700 p-1">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728L5.636 5.636m12.728 12.728L18.364 5.636M5.636 18.364l12.728-12.728"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Platform Analytics Tab -->
        <div v-if="activeTab === 'platform-analytics'" class="p-6">
          <div class="flex items-center justify-between mb-6">
            <h2 class="text-2xl font-bold text-brand-navy dark:text-white">Platform Analytics & Intelligence</h2>
            <div class="flex items-center space-x-4">
              <select v-model="analyticsTimeframe" class="border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-brand-navy dark:text-white rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="7d">Last 7 Days</option>
                <option value="30d">Last 30 Days</option>
                <option value="90d">Last 90 Days</option>
                <option value="1y">Last Year</option>
              </select>
              <button class="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Generate Platform Report
              </button>
            </div>
          </div>

          <!-- Advanced Analytics Grid (Multi-DB Integration) -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <!-- Revenue Trend Analysis (Main DB) -->
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Revenue Trend Analysis</h3>
              <VChart ref="platformRevenueAnalyticsChart" :option="platformRevenueAnalyticsOption" class="h-72" />
            </div>

            <!-- User Conversion Funnel (Analytics DB) -->
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">User Conversion Funnel</h3>
              <VChart ref="conversionFunnelChart" :option="conversionFunnelOption" class="h-72" />
            </div>
          </div>

          <!-- Market Performance Matrix -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <!-- Geographic Performance (Analytics DB) -->
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Geographic Revenue Distribution</h3>
              <VChart ref="geoRevenueChart" :option="geoRevenueOption" class="h-80" />
            </div>

            <!-- Property Type Performance (Combined Main + Analytics) -->
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Property Type Performance</h3>
              <VChart ref="propertyTypeChart" :option="propertyTypeOption" class="h-80" />
            </div>
          </div>

          <!-- Advanced Metrics Dashboard (Analytics DB) -->
          <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 mb-8">
            <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Real-time Platform Metrics</h3>
            <VChart ref="realTimeMetricsChart" :option="realTimeMetricsOption" class="h-64" />
          </div>

          <!-- Investment Insights (Analytics DB) -->
          <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 mb-8">
            <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Investment Insights & Trends</h3>
            <VChart ref="investmentInsightsChart" :option="investmentInsightsOption" class="h-64" />
          </div>

          <!-- Market Signals Dashboard -->
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Demand Analytics</h3>
              <div class="space-y-3">
                <div v-for="demand in demandAnalytics" :key="demand.property_type" class="flex justify-between items-center">
                  <span class="text-sm text-brand-navy dark:text-white">{{ demand.property_type }}</span>
                  <div class="flex items-center space-x-2">
                    <div class="w-16 bg-gray-200 rounded-full h-2">
                      <div class="bg-blue-600 h-2 rounded-full" :style="`width: ${demand.demand_score}%`"></div>
                    </div>
                    <span class="text-xs text-gray-500">{{ demand.demand_score }}%</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Investment Trends</h3>
              <div class="space-y-3">
                <div v-for="trend in investmentTrends" :key="trend.indicator" class="flex justify-between items-center">
                  <span class="text-sm text-brand-navy dark:text-white">{{ trend.indicator }}</span>
                  <span :class="['font-semibold text-sm', trend.direction === 'up' ? 'text-green-600' : trend.direction === 'down' ? 'text-red-600' : 'text-gray-600']">
                    {{ trend.value }}
                  </span>
                </div>
              </div>
            </div>

            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Market Signals</h3>
              <div class="space-y-3">
                <div v-for="signal in marketSignalsAdvanced" :key="signal.signal_type" class="p-3 rounded-lg" :class="signal.strength === 'strong' ? 'bg-green-50 dark:bg-green-900/20' : signal.strength === 'weak' ? 'bg-red-50 dark:bg-red-900/20' : 'bg-yellow-50 dark:bg-yellow-900/20'">
                  <div class="flex items-center justify-between">
                    <div class="font-semibold text-brand-navy dark:text-white text-sm">{{ signal.signal_type }}</div>
                    <div :class="['text-sm font-bold', signal.strength === 'strong' ? 'text-green-600' : signal.strength === 'weak' ? 'text-red-600' : 'text-yellow-600']">
                      {{ signal.indicator_value }}
                    </div>
                  </div>
                  <div class="text-xs text-gray-500 mt-1">{{ signal.description }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Market Intelligence Tab -->
        <div v-if="activeTab === 'market-intelligence'" class="p-6">
          <div class="flex items-center justify-between mb-6">
            <h2 class="text-2xl font-bold text-brand-navy dark:text-white">Market Intelligence & Insights</h2>
            <div class="flex items-center space-x-4">
              <select class="border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-brand-navy dark:text-white rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Bangkok Metro</option>
                <option>Phuket</option>
                <option>Pattaya</option>
                <option>Chiang Mai</option>
              </select>
              <button class="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Generate Market Report
              </button>
            </div>
          </div>

          <!-- Market Trends Analysis (Price Trends + Demand Analytics) -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Property Price Trends</h3>
              <VChart ref="priceTrendsChart" :option="priceTrendsOption" class="h-64" />
            </div>
            
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Market Demand Analysis</h3>
              <VChart ref="demandAnalysisChart" :option="demandAnalysisOption" class="h-64" />
            </div>
          </div>

          <!-- Supply vs Demand (Market Signals + Investment Insights) -->
          <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 mb-8">
            <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Supply vs Demand Matrix</h3>
            <VChart ref="supplyDemandChart" :option="supplyDemandOption" class="h-80" />
          </div>
        </div>

        <!-- Revenue Management Tab -->
        <div v-if="activeTab === 'revenue-management'" class="p-6">
          <div class="flex items-center justify-between mb-6">
            <h2 class="text-2xl font-bold text-brand-navy dark:text-white">Platform Revenue Management</h2>
            <div class="flex items-center space-x-4">
              <div class="text-sm text-brand-navy dark:text-gray-400">
                Pending Payouts: <span class="font-bold text-lg text-yellow-600">{{ formatCurrency(totalPendingPayouts) }}</span>
              </div>
              <button class="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                Process Payouts
              </button>
            </div>
          </div>

          <!-- Revenue Analytics -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <!-- Revenue Streams -->
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Revenue Streams</h3>
              <VChart ref="revenueStreamsChart" :option="revenueStreamsOption" class="h-64" />
            </div>

            <!-- Payout Timeline -->
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Payout Schedule</h3>
              <VChart ref="payoutTimelineChart" :option="payoutTimelineOption" class="h-64" />
            </div>
          </div>
          <!-- Pending Payouts Management -->
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
            <div class="p-6 border-b border-gray-100 dark:border-gray-600">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white">Pending Payouts Queue</h3>
            </div>
            <div class="p-6">
              <div class="space-y-4">
                <div v-for="payout in pendingPayoutsList" :key="payout.id" class="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-600 rounded-lg">
                  <div class="flex items-center space-x-4">
                    <div class="w-10 h-10 bg-gradient-to-br from-green-100 to-green-200 dark:from-green-800 dark:to-green-600 rounded-full flex items-center justify-center">
                      <span class="text-sm font-semibold text-green-800 dark:text-green-200">{{ payout.recipientInitials }}</span>
                    </div>
                    <div>
                      <div class="font-semibold text-brand-navy dark:text-white">{{ payout.recipientName }}</div>
                      <div class="text-sm text-gray-500">{{ payout.recipientType }} • {{ payout.transactionType }}</div>
                    </div>
                  </div>
                  <div class="flex items-center space-x-4">
                    <div class="text-right">
                      <div class="font-bold text-green-600">{{ formatCurrency(payout.amount) }}</div>
                      <div class="text-xs text-gray-500">Due: {{ payout.dueDate }}</div>
                    </div>
                    <button class="bg-green-600 text-white px-4 py-2 rounded text-sm hover:bg-green-700">
                      Process
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- System Health Tab -->
        <div v-if="activeTab === 'system-health'" class="p-6">
          <div class="flex items-center justify-between mb-6">
            <h2 class="text-2xl font-bold text-brand-navy dark:text-white">System Health & Infrastructure</h2>
            <div class="flex items-center space-x-4">
              <div :class="['px-3 py-1 rounded-full text-sm font-semibold', platformHealth >= 95 ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800']">
                {{ getSystemHealthStatus(platformHealth) }}
              </div>
              <button class="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors">
                Emergency Actions
              </button>
            </div>
          </div>

          <!-- System Metrics Dashboard -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <!-- Server Performance -->
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Server Performance</h3>
              <VChart ref="serverPerformanceChart" :option="serverPerformanceOption" class="h-64" />
            </div>

            <!-- Database Performance -->
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Database Performance</h3>
              <VChart ref="databaseChart" :option="databasePerformanceOption" class="h-64" />
            </div>
          </div>

          <!-- Error Tracking -->
          <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 mb-8">
            <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Error Tracking & Response Times</h3>
            <VChart ref="errorTrackingChart" :option="errorTrackingOption" class="h-64" />
          </div>

          <!-- System Alerts -->
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
            <div class="p-6 border-b border-gray-100 dark:border-gray-600">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white">Active System Alerts</h3>
            </div>
            <div class="p-6">
              <div class="space-y-4">
                <div v-for="alert in systemHealthAlerts" :key="alert.id" class="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-600 rounded-lg">
                  <div class="flex items-center space-x-3">
                    <div :class="['w-3 h-3 rounded-full', alert.severity === 'Critical' ? 'bg-red-500' : alert.severity === 'Warning' ? 'bg-yellow-500' : 'bg-blue-500']"></div>
                    <div>
                      <div class="font-semibold text-brand-navy dark:text-white">{{ alert.title }}</div>
                      <div class="text-sm text-gray-600 dark:text-gray-400">{{ alert.description }}</div>
                    </div>
                  </div>
                  <div class="text-sm text-gray-500">{{ alert.time }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Platform Settings Tab -->
        <div v-if="activeTab === 'platform-settings'" class="p-6">
          <div class="flex items-center justify-between mb-6">
            <h2 class="text-2xl font-bold text-brand-navy dark:text-white">Platform Settings</h2>
            <button class="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors">
              Apply Changes
            </button>
          </div>

          <!-- Platform Configuration -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Revenue Settings</h3>
              <div class="space-y-4">
                <div>
                  <label class="block text-sm font-medium text-brand-navy dark:text-gray-300 mb-2">Platform Commission Rate (%)</label>
                  <input type="number" v-model="globalSettings.platformCommission" class="w-full px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-brand-navy dark:text-white">
                </div>
                <div>
                  <label class="block text-sm font-medium text-brand-navy dark:text-gray-300 mb-2">Subscription Pricing</label>
                  <div class="space-y-2">
                    <input type="number" v-model="globalSettings.basicTier" placeholder="Basic Tier" class="w-full px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-brand-navy dark:text-white">
                    <input type="number" v-model="globalSettings.premiumTier" placeholder="Premium Tier" class="w-full px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-brand-navy dark:text-white">
                  </div>
                </div>
              </div>
            </div>

            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">System Configuration</h3>
              <div class="space-y-4">
                <div class="flex items-center space-x-4">
                  <input type="checkbox" v-model="globalSettings.maintenanceMode" class="w-4 h-4 text-blue-600 border-gray-300 rounded">
                  <label class="text-sm text-brand-navy dark:text-white">Enable Maintenance Mode</label>
                </div>
                <div class="flex items-center space-x-4">
                  <input type="checkbox" v-model="globalSettings.newRegistrations" class="w-4 h-4 text-blue-600 border-gray-300 rounded">
                  <label class="text-sm text-brand-navy dark:text-white">Allow New Registrations</label>
                </div>
                <div class="flex items-center space-x-4">
                  <input type="checkbox" v-model="globalSettings.autoApproveAgencies" class="w-4 h-4 text-blue-600 border-gray-300 rounded">
                  <label class="text-sm text-brand-navy dark:text-white">Auto-approve New Agencies</label>
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
import { LineChart, BarChart, PieChart, ScatterChart, FunnelChart, HeatmapChart, RadarChart } from 'echarts/charts'
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
  DataZoomComponent,
  ToolboxComponent,
  VisualMapComponent
} from 'echarts/components'
import VChart from 'vue-echarts'

// Register ECharts components
use([
  CanvasRenderer,
  LineChart, BarChart, PieChart, ScatterChart, FunnelChart, HeatmapChart, RadarChart,
  TitleComponent, TooltipComponent, LegendComponent, GridComponent, DataZoomComponent, ToolboxComponent, VisualMapComponent
])

// Meta tags
useHead({
  title: 'Platform Admin Dashboard - ThaiKeys',
  meta: [
    { name: 'description', content: 'Platform administration dashboard with analytics integration' }
  ]
})

// Reactive data
const activeTab = ref('platform-overview')
const analyticsTimeframe = ref('30d')
const behaviorTimeframe = ref('7d')
const searchTimeframe = ref('30d')
const userSearchQuery = ref('')

// Platform Statistics (from Main DB)
const totalPlatformUsers = ref(142850)
const newUsersThisMonth = ref(8420)
const totalPlatformProperties = ref(45680)
const newPropertiesThisWeek = ref(287)
const totalAgencies = ref(156)
const newAgenciesThisMonth = ref(8)
const activeAgencies = ref(142)
const platformRevenue = ref(8500000)
const platformRevenueGrowth = ref('+18.5%')
const platformHealth = ref(97)
const systemAlerts = ref(3)
const agenciesNeedingReview = ref(8)
const pendingPayouts = ref(15)

// Analytics DB Statistics
const totalSearchSessions = ref(245600)
const totalSearches = ref(587400)
const totalUserEvents = ref(1234500)
const totalUserInteractions = ref(456780)
const avgSearchesPerUser = ref(4.1)
const avgSearchesPerSession = ref(2.4)
const avgSessionDuration = ref('8m 32s')
const avgInteractionsPerUser = ref(3.2)
const interactionGrowth = ref(15.8)
const sessionGrowth = ref('+12.5')
const searchGrowth = ref('+22.3')
const eventGrowth = ref('+18.7')
const searchSuccessRate = ref(89.2)
const successRateChange = ref('+3.4')
const zeroResultsRate = ref(4.8)
const zeroResultsChange = ref('-1.2')
const bounceRate = ref(23.5)
const bounceRateChange = ref('-2.1')

// Revenue Management
const totalPendingPayouts = ref(1850000)
const totalAgencyRevenue = ref(12500000)
const avgAgencyRevenue = ref('฿890K')

// Global Settings
const globalSettings = ref({
  platformCommission: 2.5,
  basicTier: 2500,
  premiumTier: 8500,
  maintenanceMode: false,
  newRegistrations: true,
  autoApproveAgencies: false
})

// Sample Data Arrays
const topPerformingAgencies = ref([
  { id: 1, name: 'ThaiKeys Agency', initials: 'TKA', monthlyDeals: 67, monthlyRevenue: 2850000 },
  { id: 2, name: 'Bangkok Premium Properties', initials: 'BPP', monthlyDeals: 45, monthlyRevenue: 1890000 },
  { id: 3, name: 'Elite Real Estate', initials: 'ERE', monthlyDeals: 32, monthlyRevenue: 1240000 }
])

const platformAgencies = ref([
  { id: 1, name: 'Bangkok Premium Properties', initials: 'BPP', location: 'Sukhumvit', subscriptionTier: 'premium', agentCount: 15, monthlyRevenue: 890000, performanceScore: 87, complianceStatus: 'Compliant', status: 'Active' },
  { id: 2, name: 'Elite Real Estate', initials: 'ERE', location: 'Silom', subscriptionTier: 'pro', agentCount: 8, monthlyRevenue: 560000, performanceScore: 72, complianceStatus: 'Issues', status: 'Active' },
  { id: 3, name: 'Siam Properties', initials: 'SP', location: 'Sathorn', subscriptionTier: 'basic', agentCount: 5, monthlyRevenue: 320000, performanceScore: 65, complianceStatus: 'Compliant', status: 'Active' }
])

const pendingPayoutsList = ref([
  { id: 1, recipientName: 'Bangkok Premium Properties', recipientInitials: 'BPP', recipientType: 'Agency', transactionType: 'Commission', amount: 156000, dueDate: 'Today' },
  { id: 2, recipientName: 'Michael Chen', recipientInitials: 'MC', recipientType: 'Agent', transactionType: 'Salary', amount: 85000, dueDate: 'Tomorrow' },
  { id: 3, recipientName: 'Elite Real Estate', recipientInitials: 'ERE', recipientType: 'Agency', transactionType: 'Bonus', amount: 234000, dueDate: 'Today' }
])

const systemHealthAlerts = ref([
  { id: 1, title: 'High Server Load', description: 'Database queries taking longer than usual', severity: 'Warning', time: '15m ago' },
  { id: 2, title: 'Payment Gateway Latency', description: 'Increased response times from payment processor', severity: 'Critical', time: '1h ago' }
])

// Analytics DB Sample Data
const searchInsights = ref([
  { id: 1, term: 'Bangkok condo', category: 'Property Type', searches: 45600 },
  { id: 2, term: 'Sukhumvit', category: 'Location', searches: 38200 },
  { id: 3, term: 'Under 5 million', category: 'Price Range', searches: 29800 }
])

const marketSignals = ref([
  { id: 1, indicator: 'Search Volume', change: '+15.2%', trend: 'up', description: 'Increased property searches' },
  { id: 2, indicator: 'Price Queries', change: '+8.7%', trend: 'up', description: 'More price-focused searches' },
  { id: 3, indicator: 'Location Demand', change: '-2.3%', trend: 'down', description: 'Slight decrease in location searches' }
])

const topUserActions = ref([
  { event_type: 'Property View', count: 234500 },
  { event_type: 'Search', count: 187600 },
  { event_type: 'Filter Applied', count: 123400 },
  { event_type: 'Contact Agent', count: 45600 }
])

const peakHours = ref([
  { hour: '09', activity: 85 },
  { hour: '12', activity: 92 },
  { hour: '14', activity: 78 },
  { hour: '19', activity: 95 }
])

const retentionMetrics = ref({
  day1: 78,
  day7: 45,
  day30: 23,
  day90: 12
})

const topSearchTerms = ref([
  { term: 'Bangkok condo', count: 45600, trend: 'up', change: '+12%' },
  { term: 'Sukhumvit apartment', count: 38200, trend: 'up', change: '+8%' },
  { term: 'Under 5M budget', count: 29800, trend: 'down', change: '-3%' }
])

const searchConversion = ref({
  searchToView: 34.5,
  viewToContact: 12.8,
  contactToDeal: 8.9,
  overall: 3.1
})

const searchRefinements = ref([
  { type: 'Price Filter', percentage: 68 },
  { type: 'Location Filter', percentage: 54 },
  { type: 'Property Type', percentage: 42 },
  { type: 'Size Filter', percentage: 28 }
])

// Analytics from Analytics DB
const demandAnalytics = ref([
  { property_type: 'Condos', demand_score: 85 },
  { property_type: 'Houses', demand_score: 72 },
  { property_type: 'Apartments', demand_score: 58 },
  { property_type: 'Commercial', demand_score: 34 }
])

const investmentTrends = ref([
  { indicator: 'Foreign Investment', value: '+15.2%', direction: 'up' },
  { indicator: 'Luxury Segment', value: '+8.7%', direction: 'up' },
  { indicator: 'Commercial RE', value: '-2.3%', direction: 'down' }
])

const marketSignalsAdvanced = ref([
  { signal_type: 'Price Momentum', indicator_value: 'Strong', strength: 'strong', description: 'Accelerating price growth' },
  { signal_type: 'Demand Signal', indicator_value: 'Moderate', strength: 'moderate', description: 'Steady buyer interest' }
])

// Chart refs
const userGrowthChart = ref(null)
const revenueChart = ref(null)
const userTypeChart = ref(null)
const geoChart = ref(null)
const heatmapChart = ref(null)
const userEngagementChart = ref(null)
const searchBehaviorChart = ref(null)
const demandAnalyticsChart = ref(null)
const priceTrendsChart = ref(null)
const activityHeatmapChart = ref(null)

// Methods
const formatCurrency = (amount) => {
  if (amount >= 1000000) {
    return `฿${(amount / 1000000).toFixed(1)}M`
  } else if (amount >= 1000) {
    return `฿${(amount / 1000).toFixed(0)}K`
  }
  return new Intl.NumberFormat('th-TH', {
    style: 'currency',
    currency: 'THB',
    minimumFractionDigits: 0
  }).format(amount).replace('THB', '฿')
}

const getNavClass = (tabName) => {
  const isActive = activeTab.value === tabName
  return [
    'flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors',
    isActive ? 'bg-blue-500 text-white' : 'text-brand-navy dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700'
  ]
}

const getSystemHealthStatus = (health) => {
  if (health >= 95) return 'Excellent'
  if (health >= 85) return 'Good'
  if (health >= 75) return 'Fair'
  return 'Poor'
}

const getPerformanceColor = (score) => {
  if (score >= 85) return 'bg-green-500'
  if (score >= 70) return 'bg-yellow-500'
  return 'bg-red-500'
}

// Helper function for heatmap
const generateHeatmapData = () => {
  const data = []
  for (let i = 0; i < 7; i++) {
    for (let j = 0; j < 24; j++) {
      data.push([j, i, Math.floor(Math.random() * 100)])
    }
  }
  return data
}

// Action methods
const viewAgencyDetails = (agency) => console.log('View agency:', agency.name)
const auditAgency = (agency) => console.log('Audit agency:', agency.name)
const suspendAgency = (agency) => console.log('Suspend agency:', agency.name)

// Chart Options (Analytics DB Integration)
const userEngagementOption = ref({
  tooltip: { trigger: 'axis' },
  legend: { data: ['Page Views', 'User Sessions', 'Interactions'] },
  xAxis: { type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
  yAxis: { type: 'value' },
  series: [
    { name: 'Page Views', type: 'line', data: [2340, 2890, 3200, 3100, 3400, 2800, 2100], itemStyle: { color: '#3B82F6' }},
    { name: 'User Sessions', type: 'line', data: [1200, 1450, 1680, 1590, 1740, 1320, 980], itemStyle: { color: '#10B981' }},
    { name: 'Interactions', type: 'line', data: [890, 1120, 1350, 1280, 1420, 1080, 760], itemStyle: { color: '#8B5CF6' }}
  ]
})

const searchBehaviorOption = ref({
  tooltip: { trigger: 'axis' },
  legend: { data: ['Total Searches', 'Successful Searches', 'Zero Results'] },
  xAxis: { type: 'category', data: ['Week 1', 'Week 2', 'Week 3', 'Week 4'] },
  yAxis: { type: 'value' },
  series: [
    { name: 'Total Searches', type: 'bar', data: [12400, 13200, 14100, 15600], itemStyle: { color: '#3B82F6' }},
    { name: 'Successful Searches', type: 'bar', data: [11080, 11770, 12580, 13920], itemStyle: { color: '#10B981' }},
    { name: 'Zero Results', type: 'bar', data: [595, 634, 676, 748], itemStyle: { color: '#EF4444' }}
  ]
})

const demandAnalyticsOption = ref({
  tooltip: { trigger: 'axis' },
  xAxis: { type: 'category', data: ['Condos', 'Houses', 'Apartments', 'Commercial', 'Land'] },
  yAxis: { type: 'value', max: 100 },
  series: [{
    name: 'Demand Score',
    type: 'bar',
    data: [85, 72, 58, 34, 18],
    itemStyle: { color: { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: '#10B981' }, { offset: 1, color: '#34D399' }] }}
  }]
})

const priceTrendsOption = ref({
  tooltip: { trigger: 'axis' },
  legend: { data: ['Average Price', 'Median Price', 'Price/SqM'] },
  xAxis: { type: 'category', data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'] },
  yAxis: { type: 'value', axisLabel: { formatter: '฿{value}M' }},
  series: [
    { name: 'Average Price', type: 'line', data: [4.2, 4.5, 4.8, 5.1, 5.4, 5.7], itemStyle: { color: '#10B981' }},
    { name: 'Median Price', type: 'line', data: [3.8, 4.1, 4.3, 4.6, 4.9, 5.2], itemStyle: { color: '#3B82F6' }},
    { name: 'Price/SqM', type: 'line', data: [85, 88, 92, 95, 98, 102], itemStyle: { color: '#8B5CF6' }}
  ]
})

const activityHeatmapOption = ref({
  tooltip: { position: 'top' },
  grid: { height: '50%', top: '10%' },
  xAxis: { type: 'category', data: ['12a', '1a', '2a', '3a', '4a', '5a', '6a', '7a', '8a', '9a', '10a', '11a', '12p', '1p', '2p', '3p', '4p', '5p', '6p', '7p', '8p', '9p', '10p', '11p'], splitArea: { show: true }},
  yAxis: { type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], splitArea: { show: true }},
  visualMap: { min: 0, max: 100, calculable: true, orient: 'horizontal', left: 'center', bottom: '15%' },
  series: [{
    name: 'Activity',
    type: 'heatmap',
    data: generateHeatmapData(),
    label: { show: true },
    emphasis: { itemStyle: { shadowBlur: 10, shadowColor: 'rgba(0, 0, 0, 0.5)' }}
  }]
})

// User Journey Analytics Charts
const userJourneyOption = ref({
  tooltip: { trigger: 'item', formatter: '{a} <br/>{b} : {c} users' },
  series: [{
    name: 'User Journey',
    type: 'funnel',
    left: '10%', width: '80%', maxSize: '80%',
    data: [
      { value: 100000, name: 'Website Visitors' },
      { value: 45000, name: 'Registered Users' },
      { value: 28000, name: 'Active Users' },
      { value: 18000, name: 'Property Inquiries' },
      { value: 12000, name: 'Successful Matches' }
    ],
    itemStyle: { borderColor: '#fff', borderWidth: 1 }
  }]
})

const interactionPatternsOption = ref({
  tooltip: { trigger: 'axis' },
  legend: { data: ['Property Views', 'Saved Properties', 'Contact Requests', 'Applications'] },
  xAxis: { type: 'category', data: ['00-06', '06-12', '12-18', '18-24'] },
  yAxis: { type: 'value' },
  series: [
    { name: 'Property Views', type: 'line', data: [1200, 4500, 3800, 2100], itemStyle: { color: '#3B82F6' }},
    { name: 'Saved Properties', type: 'line', data: [340, 1250, 1680, 890], itemStyle: { color: '#10B981' }},
    { name: 'Contact Requests', type: 'line', data: [180, 650, 780, 420], itemStyle: { color: '#8B5CF6' }},
    { name: 'Applications', type: 'line', data: [45, 180, 220, 120], itemStyle: { color: '#F59E0B' }}
  ]
})

const userEventTimelineOption = ref({
  tooltip: { trigger: 'axis' },
  legend: { data: ['Page Views', 'Searches', 'Property Views', 'Contacts'] },
  xAxis: { type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
  yAxis: { type: 'value' },
  series: [
    { name: 'Page Views', type: 'bar', stack: 'total', data: [12000, 14500, 13200, 15800, 16200, 11500, 9800], itemStyle: { color: '#3B82F6' }},
    { name: 'Searches', type: 'bar', stack: 'total', data: [3400, 4200, 3800, 4600, 4800, 3200, 2700], itemStyle: { color: '#10B981' }},
    { name: 'Property Views', type: 'bar', stack: 'total', data: [2100, 2600, 2300, 2800, 2900, 2000, 1700], itemStyle: { color: '#8B5CF6' }},
    { name: 'Contacts', type: 'bar', stack: 'total', data: [340, 420, 380, 460, 480, 320, 280], itemStyle: { color: '#F59E0B' }}
  ]
})

// Search Analytics Charts
const searchVolumeOption = ref({
  tooltip: { trigger: 'axis' },
  legend: { data: ['Total Searches', 'Unique Users', 'Successful Searches'] },
  xAxis: { type: 'category', data: ['Week 1', 'Week 2', 'Week 3', 'Week 4'] },
  yAxis: { type: 'value' },
  series: [
    { name: 'Total Searches', type: 'line', data: [145600, 156200, 167800, 178400], itemStyle: { color: '#3B82F6' }},
    { name: 'Unique Users', type: 'line', data: [89400, 95600, 102100, 108700], itemStyle: { color: '#10B981' }},
    { name: 'Successful Searches', type: 'line', data: [129880, 139330, 149600, 159160], itemStyle: { color: '#8B5CF6' }}
  ]
})

const searchFiltersOption = ref({
  tooltip: { trigger: 'item' },
  series: [{
    name: 'Filter Usage',
    type: 'pie',
    radius: '60%',
    data: [
      { value: 68, name: 'Price Range', itemStyle: { color: '#10B981' }},
      { value: 54, name: 'Location', itemStyle: { color: '#3B82F6' }},
      { value: 42, name: 'Property Type', itemStyle: { color: '#8B5CF6' }},
      { value: 28, name: 'Size/Bedrooms', itemStyle: { color: '#F59E0B' }},
      { value: 16, name: 'Amenities', itemStyle: { color: '#EF4444' }}
    ],
    emphasis: { itemStyle: { shadowBlur: 10, shadowOffsetX: 0, shadowColor: 'rgba(0, 0, 0, 0.5)' }}
  }]
})

const searchTermsCloudOption = ref({
  tooltip: { trigger: 'item' },
  series: [{
    type: 'wordCloud',
    gridSize: 2,
    sizeRange: [12, 50],
    rotationRange: [-90, 90],
    shape: 'pentagon',
    width: '100%',
    height: '100%',
    textStyle: {
      fontFamily: 'sans-serif',
      fontWeight: 'bold',
      color: function () {
        const colors = ['#10B981', '#3B82F6', '#8B5CF6', '#F59E0B', '#EF4444']
        return colors[Math.floor(Math.random() * colors.length)]
      }
    },
    data: [
      { name: 'Bangkok', value: 45600 },
      { name: 'Condo', value: 38200 },
      { name: 'Sukhumvit', value: 29800 },
      { name: 'Under 5M', value: 25400 },
      { name: 'Apartment', value: 22100 },
      { name: 'Silom', value: 18900 },
      { name: 'Investment', value: 16700 },
      { name: 'Rental', value: 14500 },
      { name: 'Luxury', value: 12300 },
      { name: 'Modern', value: 10800 }
    ]
  }]
})

// Platform Analytics Advanced Charts
const platformRevenueAnalyticsOption = ref({
  tooltip: { trigger: 'axis' },
  legend: { data: ['Revenue', 'Forecast', 'Target'] },
  xAxis: { type: 'category', data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'] },
  yAxis: { type: 'value', axisLabel: { formatter: '฿{value}M' }},
  series: [
    { name: 'Revenue', type: 'line', data: [4.2, 5.1, 6.3, 7.1, 7.8, 8.5, null, null], itemStyle: { color: '#10B981' }},
    { name: 'Forecast', type: 'line', data: [null, null, null, null, null, 8.5, 9.2, 10.1], itemStyle: { color: '#F59E0B' }, lineStyle: { type: 'dashed' }},
    { name: 'Target', type: 'line', data: [5.0, 5.5, 6.0, 6.5, 7.0, 7.5, 8.0, 8.5], itemStyle: { color: '#EF4444' }, lineStyle: { type: 'dotted' }}
  ]
})

const conversionFunnelOption = ref({
  tooltip: { trigger: 'item', formatter: '{a} <br/>{b} : {c}%' },
  series: [{
    name: 'User Journey',
    type: 'funnel',
    left: '10%', width: '80%', maxSize: '80%',
    data: [
      { value: 100, name: 'Website Visitors' },
      { value: 45, name: 'Registered Users' },
      { value: 28, name: 'Active Users' },
      { value: 18, name: 'Premium Users' },
      { value: 12, name: 'Paying Customers' }
    ],
    itemStyle: { borderColor: '#fff', borderWidth: 1 }
  }]
})

const geoRevenueOption = ref({
  tooltip: { trigger: 'axis', formatter: '{b}: ฿{c}M' },
  xAxis: { type: 'category', data: ['Bangkok', 'Phuket', 'Pattaya', 'Chiang Mai', 'Koh Samui', 'Hua Hin'] },
  yAxis: { type: 'value', axisLabel: { formatter: '฿{value}M' }},
  series: [{
    name: 'Revenue',
    type: 'bar',
    data: [5.2, 1.8, 1.1, 0.9, 0.7, 0.5],
    itemStyle: { color: { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: '#059669' }, { offset: 1, color: '#10B981' }] }}
  }]
})

const propertyTypeOption = ref({
  tooltip: { trigger: 'item' },
  series: [{
    name: 'Property Performance',
    type: 'pie',
    radius: ['40%', '70%'],
    data: [
      { value: 35, name: 'Condos', itemStyle: { color: '#3B82F6' }},
      { value: 28, name: 'Houses', itemStyle: { color: '#10B981' }},
      { value: 18, name: 'Apartments', itemStyle: { color: '#8B5CF6' }},
      { value: 12, name: 'Commercial', itemStyle: { color: '#F59E0B' }},
      { value: 7, name: 'Land', itemStyle: { color: '#EF4444' }}
    ],
    emphasis: { itemStyle: { shadowBlur: 10, shadowOffsetX: 0, shadowColor: 'rgba(0, 0, 0, 0.5)' }}
  }]
})

const realTimeMetricsOption = ref({
  tooltip: { trigger: 'axis' },
  legend: { data: ['Active Users', 'Page Views', 'Transactions'] },
  xAxis: { type: 'category', data: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00'] },
  yAxis: { type: 'value' },
  series: [
    { name: 'Active Users', type: 'line', data: [820, 932, 1901, 2934, 2290, 1330], smooth: true, itemStyle: { color: '#3B82F6' }},
    { name: 'Page Views', type: 'line', data: [2450, 2800, 4200, 5800, 4900, 3200], smooth: true, itemStyle: { color: '#10B981' }},
    { name: 'Transactions', type: 'line', data: [45, 78, 156, 234, 189, 98], smooth: true, itemStyle: { color: '#F59E0B' }}
  ]
})

const investmentInsightsOption = ref({
  tooltip: { trigger: 'axis' },
  legend: { data: ['Investment Volume', 'Foreign Investment', 'Luxury Segment'] },
  xAxis: { type: 'category', data: ['Q1', 'Q2', 'Q3', 'Q4'] },
  yAxis: { type: 'value', axisLabel: { formatter: '฿{value}B' }},
  series: [
    { name: 'Investment Volume', type: 'bar', data: [12.5, 15.2, 18.7, 22.1], itemStyle: { color: '#10B981' }},
    { name: 'Foreign Investment', type: 'line', data: [3.8, 4.9, 6.2, 7.8], itemStyle: { color: '#3B82F6' }},
    { name: 'Luxury Segment', type: 'line', data: [2.1, 2.7, 3.4, 4.2], itemStyle: { color: '#8B5CF6' }}
  ]
})

// Agency Performance Charts
const agencyPerformanceChartOption = ref({
  tooltip: { trigger: 'item', formatter: '{a} <br/>{b} : {c} agencies' },
  series: [{
    name: 'Performance Distribution',
    type: 'pie',
    radius: '60%',
    data: [
      { value: 45, name: 'Excellent (90-100%)', itemStyle: { color: '#10B981' }},
      { value: 67, name: 'Good (80-89%)', itemStyle: { color: '#3B82F6' }},
      { value: 32, name: 'Fair (70-79%)', itemStyle: { color: '#F59E0B' }},
      { value: 12, name: 'Poor (<70%)', itemStyle: { color: '#EF4444' }}
    ],
    emphasis: { itemStyle: { shadowBlur: 10, shadowOffsetX: 0, shadowColor: 'rgba(0, 0, 0, 0.5)' }}
  }]
})

const revenueTierChartOption = ref({
  tooltip: { trigger: 'axis', formatter: '{b}: ฿{c}M' },
  xAxis: { type: 'category', data: ['Basic', 'Pro', 'Premium'] },
  yAxis: { type: 'value', axisLabel: { formatter: '฿{value}M' }},
  series: [{
    name: 'Revenue',
    type: 'bar',
    data: [2.8, 4.2, 6.5],
    itemStyle: { color: { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: '#8B5CF6' }, { offset: 1, color: '#A78BFA' }] }}
  }]
})

// Market Intelligence Charts
const marketPriceTrendsOption = ref({
  tooltip: { trigger: 'axis' },
  legend: { data: ['Bangkok', 'Phuket', 'Pattaya', 'Chiang Mai'] },
  xAxis: { type: 'category', data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'] },
  yAxis: { type: 'value', axisLabel: { formatter: '฿{value}M' }},
  series: [
    { name: 'Bangkok', type: 'line', data: [5.2, 5.4, 5.7, 5.9, 6.1, 6.3], itemStyle: { color: '#10B981' }},
    { name: 'Phuket', type: 'line', data: [3.8, 3.9, 4.1, 4.2, 4.4, 4.5], itemStyle: { color: '#3B82F6' }},
    { name: 'Pattaya', type: 'line', data: [2.1, 2.2, 2.3, 2.4, 2.5, 2.6], itemStyle: { color: '#8B5CF6' }},
    { name: 'Chiang Mai', type: 'line', data: [1.8, 1.9, 2.0, 2.1, 2.2, 2.3], itemStyle: { color: '#F59E0B' }}
  ]
})

const marketSupplyDemandOption = ref({
  tooltip: { trigger: 'item' },
  xAxis: { type: 'value', name: 'Supply Index' },
  yAxis: { type: 'value', name: 'Demand Index' },
  series: [{
    symbolSize: function (data) { return data[2] * 3 },
    data: [
      [85, 92, 35, 'Bangkok Condos'],
      [78, 88, 28, 'Phuket Villas'],
      [65, 75, 22, 'Pattaya Apartments'],
      [58, 68, 18, 'Chiang Mai Houses'],
      [45, 58, 15, 'Commercial Properties'],
      [35, 45, 12, 'Land Plots']
    ],
    type: 'scatter',
    itemStyle: { color: '#8B5CF6' }
  }]
})

// Competitive Analysis Charts
const competitorMatrixOption = ref({
  tooltip: { trigger: 'item' },
  xAxis: { type: 'value', name: 'Market Share %' },
  yAxis: { type: 'value', name: 'Growth Rate %' },
  series: [{
    symbolSize: function (data) { return data[2] * 5 },
    data: [
      [28.5, 22.1, 15, 'ThaiKeys'],
      [22.3, 8.7, 12, 'Competitor A'],
      [18.2, 12.4, 10, 'Competitor B'],
      [15.1, 6.2, 8, 'Competitor C'],
      [9.8, 15.8, 6, 'Competitor D']
    ],
    type: 'scatter',
    itemStyle: { 
      color: function(params) {
        return params.data[3] === 'ThaiKeys' ? '#10B981' : '#6B7280'
      }
    }
  }]
})

const marketShareEvolutionOption = ref({
  tooltip: { trigger: 'axis' },
  legend: { data: ['ThaiKeys', 'Competitor A', 'Competitor B', 'Others'] },
  xAxis: { type: 'category', data: ['Q1', 'Q2', 'Q3', 'Q4'] },
  yAxis: { type: 'value', axisLabel: { formatter: '{value}%' }},
  series: [
    { name: 'ThaiKeys', type: 'line', data: [24.2, 26.1, 27.8, 28.5], itemStyle: { color: '#10B981' }},
    { name: 'Competitor A', type: 'line', data: [25.1, 24.3, 23.2, 22.3], itemStyle: { color: '#EF4444' }},
    { name: 'Competitor B', type: 'line', data: [19.8, 18.9, 18.5, 18.2], itemStyle: { color: '#3B82F6' }},
    { name: 'Others', type: 'line', data: [30.9, 30.7, 30.5, 31.0], itemStyle: { color: '#6B7280' }}
  ]
})

// Revenue Management Charts
const revenueStreamsOption = ref({
  tooltip: { trigger: 'item' },
  series: [{
    name: 'Revenue Streams',
    type: 'pie',
    radius: ['30%', '70%'],
    data: [
      { value: 45, name: 'Platform Commissions', itemStyle: { color: '#10B981' }},
      { value: 28, name: 'Subscription Fees', itemStyle: { color: '#3B82F6' }},
      { value: 15, name: 'Premium Features', itemStyle: { color: '#8B5CF6' }},
      { value: 8, name: 'Advertisement', itemStyle: { color: '#F59E0B' }},
      { value: 4, name: 'Other Services', itemStyle: { color: '#EF4444' }}
    ]
  }]
})

const payoutTimelineOption = ref({
  tooltip: { trigger: 'axis' },
  legend: { data: ['Scheduled', 'Processed', 'Pending'] },
  xAxis: { type: 'category', data: ['Week 1', 'Week 2', 'Week 3', 'Week 4'] },
  yAxis: { type: 'value', axisLabel: { formatter: '฿{value}K' }},
  series: [
    { name: 'Scheduled', type: 'bar', data: [450, 520, 480, 610], itemStyle: { color: '#6B7280' }},
    { name: 'Processed', type: 'bar', data: [420, 480, 450, 580], itemStyle: { color: '#10B981' }},
    { name: 'Pending', type: 'bar', data: [30, 40, 30, 30], itemStyle: { color: '#F59E0B' }}
  ]
})

// System Health Charts
const serverPerformanceOption = ref({
  tooltip: { trigger: 'axis' },
  legend: { data: ['CPU Usage', 'Memory Usage', 'Disk I/O'] },
  xAxis: { type: 'category', data: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00'] },
  yAxis: { type: 'value', axisLabel: { formatter: '{value}%' }},
  series: [
    { name: 'CPU Usage', type: 'line', data: [45, 38, 52, 67, 73, 58], itemStyle: { color: '#3B82F6' }},
    { name: 'Memory Usage', type: 'line', data: [62, 58, 64, 71, 78, 69], itemStyle: { color: '#10B981' }},
    { name: 'Disk I/O', type: 'line', data: [28, 25, 31, 42, 48, 35], itemStyle: { color: '#F59E0B' }}
  ]
})

const databasePerformanceOption = ref({
  tooltip: { trigger: 'axis' },
  legend: { data: ['Query Time', 'Connections', 'Throughput'] },
  xAxis: { type: 'category', data: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00'] },
  yAxis: { type: 'value' },
  series: [
    { name: 'Query Time', type: 'line', data: [12, 8, 15, 23, 28, 18], itemStyle: { color: '#EF4444' }},
    { name: 'Connections', type: 'line', data: [245, 198, 289, 356, 423, 312], itemStyle: { color: '#8B5CF6' }},
    { name: 'Throughput', type: 'line', data: [1200, 980, 1450, 1890, 2100, 1650], itemStyle: { color: '#10B981' }}
  ]
})

const errorTrackingOption = ref({
  tooltip: { trigger: 'axis' },
  legend: { data: ['Critical Errors', 'Warnings', 'Info'] },
  xAxis: { type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
  yAxis: { type: 'value' },
  series: [
    { name: 'Critical Errors', type: 'bar', stack: 'total', data: [2, 1, 0, 3, 1, 0, 1], itemStyle: { color: '#EF4444' }},
    { name: 'Warnings', type: 'bar', stack: 'total', data: [12, 8, 15, 18, 22, 8, 10], itemStyle: { color: '#F59E0B' }},
    { name: 'Info', type: 'bar', stack: 'total', data: [45, 38, 52, 67, 73, 42, 48], itemStyle: { color: '#3B82F6' }}
  ]
})

// Handle window resize
const handleResize = () => {
  const charts = [
    userGrowthChart, revenueChart, userTypeChart, geoChart, heatmapChart,
    userEngagementChart, searchBehaviorChart, demandAnalyticsChart, priceTrendsChart, activityHeatmapChart
  ]
  charts.forEach(chart => {
    if (chart.value) chart.value.resize()
  })
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<style scoped>
.flex { display: flex; }
.flex-1 { flex: 1; }
.flex-shrink-0 { flex-shrink: 0; }
.relative { position: relative; }
.absolute { position: absolute; }
</style>

