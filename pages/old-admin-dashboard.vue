<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 font-sans transition-colors duration-300">

    <!-- Dual Role Header -->
    <div class="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-4">
      <div class="flex items-center justify-between mx-auto">
        <!-- Platform & Agency Status -->
        <div class="flex items-center space-x-8">
          <div class="flex items-center space-x-3">
            <!-- Platform Admin Badge -->
            <div class="relative">
              <div class="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center border-2 border-white shadow-lg">
                <span class="text-xl font-bold text-white">TK</span>
              </div>
              <div class="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center border-2 border-white">
                <span class="text-xs font-bold text-white">A</span>
              </div>
            </div>
            
            <!-- ThaiKeys Agency Badge -->
            <div class="w-12 h-12 bg-gradient-to-br from-green-400 to-teal-500 rounded-xl flex items-center justify-center border-2 border-white shadow-lg">
              <span class="text-sm font-bold text-white">TKA</span>
            </div>
          </div>
          
          <div class="text-white">
            <span class="font-bold text-xl">Platform Administrator</span>
            <div class="text-sm text-blue-100 flex items-center space-x-4">
              <span>ThaiKeys Platform Owner</span>
              <span class="w-1 h-1 bg-blue-200 rounded-full"></span>
              <span>ThaiKeys Agency CEO</span>
              <span class="w-1 h-1 bg-blue-200 rounded-full"></span>
              <span class="bg-yellow-400 text-blue-900 px-2 py-0.5 rounded text-xs font-semibold">SUPER ADMIN</span>
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
            <div class="font-bold text-xl">{{ totalAgencies }}</div>
            <div class="text-xs text-blue-100">Active Agencies</div>
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
          
          <!-- Role Switcher -->
          <select v-model="activeRole" @change="switchRole" class="bg-white bg-opacity-20 border border-white border-opacity-30 text-white rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50">
            <option value="platform-admin">Platform Admin</option>
            <option value="agency-owner">ThaiKeys Agency</option>
            <option value="dual-view">Dual View</option>
          </select>
          
          <div class="w-8 h-8 bg-white bg-opacity-20 rounded-full"></div>
        </div>
      </div>
    </div>
    <!-- Main Layout Container -->
    <div class="flex mx-auto">
      <!-- Advanced Admin Sidebar Navigation -->
      <aside class="w-72 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex-shrink-0 transition-colors duration-300">
        <!-- Role Context Indicator -->
        <div class="p-4 bg-gray-50 dark:bg-gray-750 border-b border-gray-200 dark:border-gray-600">
          <div class="flex items-center justify-between">
            <span class="text-sm font-medium text-gray-600 dark:text-gray-400">Active View:</span>
            <span :class="getRoleIndicatorClass(activeRole)" class="px-2 py-1 rounded text-xs font-semibold">
              {{ getRoleDisplayName(activeRole) }}
            </span>
          </div>
        </div>

        <nav class="p-4 space-y-1">
          <!-- Platform Administration Section -->
          <div v-if="activeRole === 'platform-admin' || activeRole === 'dual-view'">
            <div class="px-3 py-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Platform Administration
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
            
            <a href="#" :class="getNavClass('platform-analytics')" @click="activeTab = 'platform-analytics'">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
              </svg>
              <span class="font-medium">Platform Analytics</span>
            </a>
            
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
          </div>

          <!-- ThaiKeys Agency Section -->
          <div v-if="activeRole === 'agency-owner' || activeRole === 'dual-view'" class="mt-6">
            <div class="px-3 py-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              ThaiKeys Agency
            </div>
            
            <a href="#" :class="getNavClass('agency-overview')" @click="activeTab = 'agency-overview'">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
              </svg>
              <span class="font-medium">Agency Overview</span>
            </a>
            
            <a href="#" :class="getNavClass('thaikeys-agents')" @click="activeTab = 'thaikeys-agents'">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
              </svg>
              <span class="font-medium">ThaiKeys Agents</span>
              <span class="bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-400 text-xs font-semibold px-2 py-1 rounded-full ml-auto">{{ thaikeysAgentCount }}</span>
            </a>
            
            <a href="#" :class="getNavClass('agency-performance')" @click="activeTab = 'agency-performance'">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
              </svg>
              <span class="font-medium">Agency Performance</span>
            </a>
            
            <a href="#" :class="getNavClass('agency-financials')" @click="activeTab = 'agency-financials'">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
              </svg>
              <span class="font-medium">Agency Financials</span>
            </a>
          </div>

          <!-- Shared/Global Section -->
          <div class="mt-6">
            <div class="px-3 py-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Global Operations
            </div>
            
            <a href="#" :class="getNavClass('market-intelligence')" @click="activeTab = 'market-intelligence'">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"/>
              </svg>
              <span class="font-medium">Market Intelligence</span>
            </a>
            
            <a href="#" :class="getNavClass('competitive-analysis')" @click="activeTab = 'competitive-analysis'">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
              </svg>
              <span class="font-medium">Competitive Analysis</span>
            </a>
            
            <a href="#" :class="getNavClass('global-settings')" @click="activeTab = 'global-settings'">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
              <span class="font-medium">Global Settings</span>
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
                <div class="text-sm text-red-700 dark:text-red-500">High server load detected • Payment gateway issues • 2 agencies need verification</div>
              </div>
            </div>
          </div>

          <!-- Platform KPIs Grid -->
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
                  <p class="text-sm font-medium text-brand-navy dark:text-gray-400">Total Properties</p>
                  <p class="text-3xl font-bold text-brand-navy dark:text-white">{{ totalPlatformProperties.toLocaleString() }}</p>
                  <p class="text-sm text-purple-600 dark:text-purple-400 mt-2">{{ newPropertiesThisWeek }} added this week</p>
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
                  <p class="text-sm font-medium text-brand-navy dark:text-gray-400">System Health</p>
                  <p class="text-3xl font-bold text-brand-navy dark:text-white">{{ platformHealth }}%</p>
                  <p :class="['text-sm mt-2', platformHealth >= 95 ? 'text-green-600 dark:text-green-400' : 'text-yellow-600 dark:text-yellow-400']">
                    {{ getSystemHealthStatus(platformHealth) }}
                  </p>
                </div>
                <div :class="['w-12 h-12 rounded-xl flex items-center justify-center', platformHealth >= 95 ? 'bg-green-100 dark:bg-green-900/20' : 'bg-yellow-100 dark:bg-yellow-900/20']">
                  <svg :class="['w-6 h-6', platformHealth >= 95 ? 'text-green-600 dark:text-green-400' : 'text-yellow-600 dark:text-yellow-400']" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <!-- Platform Analytics Charts with ECharts -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <!-- User Growth Chart -->
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Platform User Growth</h3>
              <VChart ref="userGrowthChart" :option="userGrowthChartOption" class="h-64" />
            </div>

            <!-- Revenue Analytics Chart -->
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Revenue Analytics</h3>
              <VChart ref="revenueChart" :option="platformRevenueChartOption" class="h-64" />
            </div>
          </div>

          <!-- User Type Distribution and Geographic Analytics -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <!-- User Type Distribution -->
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">User Distribution</h3>
              <VChart ref="userTypeChart" :option="userTypeChartOption" class="h-64" />
            </div>

            <!-- Geographic Distribution -->
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Geographic Distribution</h3>
              <VChart ref="geoChart" :option="geographicChartOption" class="h-64" />
            </div>
          </div>

          <!-- Platform Activity Heatmap -->
          <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 mb-8">
            <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Activity Heatmap (24h)</h3>
            <VChart ref="heatmapChart" :option="activityHeatmapOption" class="h-48" />
          </div>

          <!-- Top Performing Agencies & Recent Platform Activity -->
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <!-- Top Agencies -->
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <div class="flex items-center justify-between mb-4">
                <h3 class="text-lg font-semibold text-brand-navy dark:text-white">Top Agencies</h3>
                <button @click="activeTab = 'agency-oversight'" class="text-brand-turqoise-light hover:text-teal-500 font-medium text-sm">View All</button>
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

            <!-- Recent Platform Activity -->
            <div class="lg:col-span-2 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <div class="flex items-center justify-between mb-4">
                <h3 class="text-lg font-semibold text-brand-navy dark:text-white">Recent Platform Activity</h3>
                <button class="text-brand-turqoise-light hover:text-teal-500 font-medium text-sm">View All</button>
              </div>
              
              <div class="space-y-4">
                <div v-for="activity in recentPlatformActivity" :key="activity.id" class="flex items-start space-x-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                  <div class="flex-shrink-0">
                    <div :class="['w-10 h-10 rounded-full flex items-center justify-center',
                                 activity.type === 'user' ? 'bg-blue-100 dark:bg-blue-900/20' :
                                 activity.type === 'agency' ? 'bg-purple-100 dark:bg-purple-900/20' :
                                 activity.type === 'transaction' ? 'bg-green-100 dark:bg-green-900/20' :
                                 'bg-orange-100 dark:bg-orange-900/20']">
                      <svg class="w-5 h-5" :class="activity.type === 'user' ? 'text-blue-600 dark:text-blue-400' :
                                                  activity.type === 'agency' ? 'text-purple-600 dark:text-purple-400' :
                                                  activity.type === 'transaction' ? 'text-green-600 dark:text-green-400' :
                                                  'text-orange-600 dark:text-orange-400'" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path v-if="activity.type === 'user'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                        <path v-else-if="activity.type === 'agency'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                        <path v-else-if="activity.type === 'transaction'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"/>
                        <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
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
                      <span class="text-xs text-gray-500">{{ activity.location }}</span>
                      <span v-if="activity.value" class="text-xs font-semibold text-green-600">{{ formatCurrency(activity.value) }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- User Management Tab -->
        <div v-if="activeTab === 'user-management'" class="p-6">
          <div class="flex items-center justify-between mb-6">
            <h2 class="text-2xl font-bold text-brand-navy dark:text-white">Platform User Management</h2>
            <div class="flex items-center space-x-4">
              <select class="border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-brand-navy dark:text-white rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-turqoise-light">
                <option>All Users</option>
                <option>Verified Users</option>
                <option>Pending Verification</option>
                <option>Suspicious Activity</option>
              </select>
              <button class="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors">
                Bulk Actions
              </button>
            </div>
          </div>

          <!-- User Statistics Overview -->
          <div class="grid grid-cols-1 md:grid-cols-5 gap-6 mb-6">
            <div class="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg border border-gray-100 dark:border-gray-700 text-center">
              <div class="text-2xl font-bold text-blue-600">{{ userStats.renters.toLocaleString() }}</div>
              <div class="text-sm text-gray-500">Renters</div>
              <div class="text-xs text-green-600 mt-1">{{ userStats.rentersGrowth }}% growth</div>
            </div>
            <div class="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg border border-gray-100 dark:border-gray-700 text-center">
              <div class="text-2xl font-bold text-purple-600">{{ userStats.landlords.toLocaleString() }}</div>
              <div class="text-sm text-gray-500">Landlords</div>
              <div class="text-xs text-green-600 mt-1">{{ userStats.landlordsGrowth }}% growth</div>
            </div>
            <div class="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg border border-gray-100 dark:border-gray-700 text-center">
              <div class="text-2xl font-bold text-green-600">{{ userStats.agents.toLocaleString() }}</div>
              <div class="text-sm text-gray-500">Agents</div>
              <div class="text-xs text-green-600 mt-1">{{ userStats.agentsGrowth }}% growth</div>
            </div>
            <div class="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg border border-gray-100 dark:border-gray-700 text-center">
              <div class="text-2xl font-bold text-yellow-600">{{ userStats.agencies.toLocaleString() }}</div>
              <div class="text-sm text-gray-500">Agencies</div>
              <div class="text-xs text-green-600 mt-1">{{ userStats.agenciesGrowth }}% growth</div>
            </div>
            <div class="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg border border-gray-100 dark:border-gray-700 text-center">
              <div class="text-2xl font-bold text-red-600">{{ userStats.pendingVerification.toLocaleString() }}</div>
              <div class="text-sm text-gray-500">Pending Verification</div>
              <div class="text-xs text-red-600 mt-1">Requires attention</div>
            </div>
          </div>

          <!-- User Analytics Charts -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <!-- User Acquisition Chart -->
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">User Acquisition Trends</h3>
              <VChart ref="userAcquisitionChart" :option="userAcquisitionChartOption" class="h-64" />
            </div>

            <!-- User Engagement Chart -->
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">User Engagement Metrics</h3>
              <VChart ref="userEngagementChart" :option="userEngagementChartOption" class="h-64" />
            </div>
          </div>

          <!-- User Management Table -->
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
            <div class="p-6 border-b border-gray-100 dark:border-gray-600">
              <div class="flex items-center justify-between">
                <h3 class="text-lg font-semibold text-brand-navy dark:text-white">Recent User Activities</h3>
                <div class="relative">
                  <input 
                    v-model="userSearchQuery"
                    type="text" 
                    placeholder="Search users..."
                    class="w-64 px-4 py-2 pr-10 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-turqoise-light bg-white dark:bg-gray-700 text-brand-navy dark:text-white"
                  >
                  <svg class="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                  </svg>
                </div>
              </div>
            </div>
            
            <div class="p-6">
              <div class="space-y-4">
                <div v-for="user in recentUsers" :key="user.id" class="flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-xl transition-colors">
                  <div class="flex items-center space-x-4">
                    <div class="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-800 dark:to-blue-600 rounded-full flex items-center justify-center">
                      <span class="text-sm font-semibold text-blue-800 dark:text-blue-200">{{ user.initials }}</span>
                    </div>
                    <div>
                      <div class="font-semibold text-brand-navy dark:text-white">{{ user.name }}</div>
                      <div class="text-sm text-gray-500">{{ user.email }} • {{ user.roles.join(', ') }}</div>
                      <div class="text-xs text-gray-400">Joined {{ user.joinDate }} • Last active {{ user.lastActive }}</div>
                    </div>
                  </div>
                  <div class="flex items-center space-x-4">
                    <span :class="['px-2 py-1 rounded text-xs font-semibold',
                                 user.verificationStatus === 'Verified' ? 'bg-green-100 text-green-800' :
                                 user.verificationStatus === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                                 'bg-red-100 text-red-800']">
                      {{ user.verificationStatus }}
                    </span>
                    <div class="flex items-center space-x-2">
                      <button @click="viewUserDetails(user)" class="text-blue-600 hover:text-blue-700 p-1">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                        </svg>
                      </button>
                      <button @click="suspendUser(user)" class="text-red-600 hover:text-red-700 p-1">
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
        </div>

        <!-- Agency Oversight Tab -->
        <div v-if="activeTab === 'agency-oversight'" class="p-6">
          <div class="flex items-center justify-between mb-6">
            <h2 class="text-2xl font-bold text-brand-navy dark:text-white">Agency Oversight & Management</h2>
            <div class="flex items-center space-x-4">
              <select class="border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-brand-navy dark:text-white rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-turqoise-light">
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
              <select v-model="analyticsTimeframe" class="border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-brand-navy dark:text-white rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-turqoise-light">
                <option value="7d">Last 7 Days</option>
                <option value="30d">Last 30 Days</option>
                <option value="90d">Last 90 Days</option>
                <option value="1y">Last Year</option>
              </select>
              <button class="bg-brand-turqoise-light text-brand-navy px-6 py-3 rounded-lg font-semibold hover:bg-teal-300 transition-colors">
                Generate Report
              </button>
            </div>
          </div>

          <!-- Advanced Analytics Grid -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <!-- Revenue Trend Analysis -->
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Revenue Trend Analysis</h3>
              <VChart ref="platformRevenueAnalyticsChart" :option="platformRevenueAnalyticsOption" class="h-72" />
            </div>

            <!-- User Behavior Flow -->
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">User Conversion Funnel</h3>
              <VChart ref="conversionFunnelChart" :option="conversionFunnelOption" class="h-72" />
            </div>
          </div>

          <!-- Market Performance Matrix -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <!-- Geographic Performance -->
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Geographic Revenue Distribution</h3>
              <VChart ref="geoRevenueChart" :option="geoRevenueOption" class="h-80" />
            </div>

            <!-- Property Type Performance -->
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Property Type Performance</h3>
              <VChart ref="propertyTypeChart" :option="propertyTypeOption" class="h-80" />
            </div>
          </div>

          <!-- Advanced Metrics Dashboard -->
          <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 mb-8">
            <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Real-time Platform Metrics</h3>
            <VChart ref="realTimeMetricsChart" :option="realTimeMetricsOption" class="h-64" />
          </div>

          <!-- Predictive Analytics -->
          <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
            <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Predictive Revenue Forecasting</h3>
            <VChart ref="predictiveChart" :option="predictiveAnalyticsOption" class="h-64" />
            <div class="mt-4 grid grid-cols-3 gap-4 text-center">
              <div class="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <div class="text-lg font-bold text-blue-600">{{ formatCurrency(predictedRevenue.nextMonth) }}</div>
                <div class="text-sm text-blue-800 dark:text-blue-400">Predicted Next Month</div>
              </div>
              <div class="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <div class="text-lg font-bold text-green-600">{{ formatCurrency(predictedRevenue.nextQuarter) }}</div>
                <div class="text-sm text-green-800 dark:text-green-400">Predicted Next Quarter</div>
              </div>
              <div class="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                <div class="text-lg font-bold text-purple-600">{{ confidenceScore }}%</div>
                <div class="text-sm text-purple-800 dark:text-purple-400">Confidence Level</div>
              </div>
            </div>
          </div>
        </div>

        <!-- ThaiKeys Agency Overview Tab -->
        <div v-if="activeTab === 'agency-overview'" class="p-6">
          <!-- Dual Role Context -->
          <div class="bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-xl p-6 mb-6">
            <div class="flex items-center justify-between">
              <div>
                <h3 class="text-xl font-semibold mb-2">ThaiKeys Agency Performance</h3>
                <p class="text-green-100">Your in-house agency competing on your own platform</p>
              </div>
              <div class="text-right">
                <div class="text-2xl font-bold">{{ thaikeysAgencyRank }}</div>
                <div class="text-sm text-green-100">Platform Ranking</div>
                <div class="text-xs text-green-200 mt-1">{{ thaikeysMarketShare }}% market share</div>
              </div>
            </div>
            
            <div class="mt-4 grid grid-cols-4 gap-4">
              <div class="text-center">
                <div class="text-lg font-bold">{{ thaikeysAgentCount }}</div>
                <div class="text-xs text-green-100">ThaiKeys Agents</div>
              </div>
              <div class="text-center">
                <div class="text-lg font-bold">{{ formatCurrency(thaikeysMonthlyRevenue) }}</div>
                <div class="text-xs text-green-100">Monthly Revenue</div>
              </div>
              <div class="text-center">
                <div class="text-lg font-bold">{{ thaikeysDealsThisMonth }}</div>
                <div class="text-xs text-green-100">Deals This Month</div>
              </div>
              <div class="text-center">
                <div class="text-lg font-bold">{{ thaikeysCustomerSatisfaction }}%</div>
                <div class="text-xs text-green-100">Satisfaction Rate</div>
              </div>
            </div>
          </div>

          <!-- Agency vs Platform Comparison -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <!-- Performance Comparison -->
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">ThaiKeys vs Platform Agencies</h3>
              <VChart ref="agencyComparisonChart" :option="agencyComparisonOption" class="h-64" />
            </div>

            <!-- Revenue Performance -->
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Revenue vs Competition</h3>
              <VChart ref="revenueComparisonChart" :option="revenueComparisonOption" class="h-64" />
            </div>
          </div>

          <!-- ThaiKeys Agent Performance -->
          <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 mb-8">
            <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">ThaiKeys Agent Performance Matrix</h3>
            <VChart ref="agentPerformanceMatrix" :option="agentPerformanceMatrixOption" class="h-80" />
          </div>

          <!-- Competitive Advantages -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <div class="flex items-center space-x-3 mb-4">
                <div class="w-10 h-10 bg-green-100 dark:bg-green-900/20 rounded-xl flex items-center justify-center">
                  <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                  </svg>
                </div>
                <h4 class="text-lg font-semibold text-brand-navy dark:text-white">Platform Advantages</h4>
              </div>
              <ul class="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li class="flex items-center"><span class="w-2 h-2 bg-green-500 rounded-full mr-2"></span>Zero platform fees</li>
                <li class="flex items-center"><span class="w-2 h-2 bg-green-500 rounded-full mr-2"></span>Priority listing placement</li>
                <li class="flex items-center"><span class="w-2 h-2 bg-green-500 rounded-full mr-2"></span>Advanced analytics access</li>
                <li class="flex items-center"><span class="w-2 h-2 bg-green-500 rounded-full mr-2"></span>Direct platform integration</li>
              </ul>
            </div>

            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <div class="flex items-center space-x-3 mb-4">
                <div class="w-10 h-10 bg-blue-100 dark:bg-blue-900/20 rounded-xl flex items-center justify-center">
                  <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                  </svg>
                </div>
                <h4 class="text-lg font-semibold text-brand-navy dark:text-white">Performance Metrics</h4>
              </div>
              <div class="space-y-3">
                <div class="flex justify-between items-center">
                  <span class="text-sm text-gray-600 dark:text-gray-400">Conversion Rate</span>
                  <span class="font-semibold text-brand-navy dark:text-white">{{ thaikeysConversionRate }}%</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-sm text-gray-600 dark:text-gray-400">Avg Deal Size</span>
                  <span class="font-semibold text-brand-navy dark:text-white">{{ formatCurrency(thaikeysAvgDealSize) }}</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-sm text-gray-600 dark:text-gray-400">Response Time</span>
                  <span class="font-semibold text-brand-navy dark:text-white">{{ thaikeysResponseTime }}</span>
                </div>
              </div>
            </div>

            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <div class="flex items-center space-x-3 mb-4">
                <div class="w-10 h-10 bg-purple-100 dark:bg-purple-900/20 rounded-xl flex items-center justify-center">
                  <svg class="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                  </svg>
                </div>
                <h4 class="text-lg font-semibold text-brand-navy dark:text-white">Growth Targets</h4>
              </div>
              <div class="space-y-3">
                <div class="flex justify-between items-center">
                  <span class="text-sm text-gray-600 dark:text-gray-400">Market Share Goal</span>
                  <span class="font-semibold text-brand-navy dark:text-white">15%</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-sm text-gray-600 dark:text-gray-400">Agent Target</span>
                  <span class="font-semibold text-brand-navy dark:text-white">25 agents</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-sm text-gray-600 dark:text-gray-400">Revenue Target</span>
                  <span class="font-semibold text-brand-navy dark:text-white">{{ formatCurrency(revenueTarget) }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- ThaiKeys Agents Tab -->
        <div v-if="activeTab === 'thaikeys-agents'" class="p-6">
          <div class="flex items-center justify-between mb-6">
            <h2 class="text-2xl font-bold text-brand-navy dark:text-white">ThaiKeys Agent Management</h2>
            <div class="flex items-center space-x-4">
              <button class="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center space-x-2">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                </svg>
                <span>Hire New Agent</span>
              </button>
              <div class="text-sm text-brand-navy dark:text-gray-400">
                Zero Platform Fees • Premium Support
              </div>
            </div>
          </div>

          <!-- Agent Performance Comparison Chart -->
          <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 mb-8">
            <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Agent Performance vs Platform Average</h3>
            <VChart ref="thaikeysAgentChart" :option="thaikeysAgentChartOption" class="h-80" />
          </div>

          <!-- ThaiKeys Agents Management -->
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
            <div class="p-6 border-b border-gray-100 dark:border-gray-600">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white">ThaiKeys Team</h3>
            </div>
            
            <div class="p-6">
              <div class="space-y-4">
                <div v-for="agent in thaikeysAgents" :key="agent.id" class="flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-xl transition-colors">
                  <div class="flex items-center space-x-4">
                    <div class="w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 dark:from-green-800 dark:to-green-600 rounded-full flex items-center justify-center">
                      <span class="text-sm font-semibold text-green-800 dark:text-green-200">{{ agent.initials }}</span>
                    </div>
                    <div>
                      <div class="font-semibold text-brand-navy dark:text-white">{{ agent.name }}</div>
                      <div class="text-sm text-gray-500">{{ agent.specializations.join(', ') }}</div>
                      <div class="text-xs text-gray-400">{{ agent.monthlyDeals }} deals • {{ formatCurrency(agent.monthlyEarnings) }} earned</div>
                    </div>
                  </div>
                  <div class="flex items-center space-x-6">
                    <div class="text-center">
                      <div class="text-lg font-bold text-green-600">{{ agent.performanceScore }}%</div>
                      <div class="text-xs text-gray-500">Performance</div>
                    </div>
                    <div class="text-center">
                      <div class="text-lg font-bold text-brand-navy dark:text-white">{{ agent.clientSatisfaction }}%</div>
                      <div class="text-xs text-gray-500">Satisfaction</div>
                    </div>
                    <div class="text-center">
                      <div class="text-lg font-bold text-blue-600">{{ agent.responseTime }}</div>
                      <div class="text-xs text-gray-500">Response</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Agency Performance Tab -->
        <div v-if="activeTab === 'agency-performance'" class="p-6">
          <div class="flex items-center justify-between mb-6">
            <h2 class="text-2xl font-bold text-brand-navy dark:text-white">ThaiKeys Agency Performance Analytics</h2>
            <div class="flex items-center space-x-4">
              <select class="border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-brand-navy dark:text-white rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-turqoise-light">
                <option>Last 30 Days</option>
                <option>Last 90 Days</option>
                <option>Last Year</option>
              </select>
              <div class="text-sm text-brand-navy dark:text-gray-400">
                Performance Score: <span class="font-bold text-lg text-green-600">94%</span>
              </div>
            </div>
          </div>

          <!-- Performance KPIs Grid -->
          <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm font-medium text-brand-navy dark:text-gray-400">Conversion Rate</p>
                  <p class="text-3xl font-bold text-brand-navy dark:text-white">{{ thaikeysConversionRate }}%</p>
                  <p class="text-sm text-green-600 dark:text-green-400 mt-2">+5.2% from last month</p>
                </div>
                <div class="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-xl flex items-center justify-center">
                  <svg class="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                  </svg>
                </div>
              </div>
            </div>

            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm font-medium text-brand-navy dark:text-gray-400">Avg Response Time</p>
                  <p class="text-3xl font-bold text-brand-navy dark:text-white">{{ thaikeysResponseTime }}</p>
                  <p class="text-sm text-blue-600 dark:text-blue-400 mt-2">Industry leading</p>
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
                  <p class="text-sm font-medium text-brand-navy dark:text-gray-400">Client Satisfaction</p>
                  <p class="text-3xl font-bold text-brand-navy dark:text-white">{{ thaikeysCustomerSatisfaction }}%</p>
                  <p class="text-sm text-purple-600 dark:text-purple-400 mt-2">Top 1% on platform</p>
                </div>
                <div class="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-xl flex items-center justify-center">
                  <svg class="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                  </svg>
                </div>
              </div>
            </div>

            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm font-medium text-brand-navy dark:text-gray-400">Market Position</p>
                  <p class="text-3xl font-bold text-brand-navy dark:text-white">#{{ thaikeysAgencyRank }}</p>
                  <p class="text-sm text-orange-600 dark:text-orange-400 mt-2">{{ thaikeysMarketShare }}% market share</p>
                </div>
                <div class="w-12 h-12 bg-orange-100 dark:bg-orange-900/20 rounded-xl flex items-center justify-center">
                  <svg class="w-6 h-6 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <!-- Performance Trends -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <!-- Monthly Performance Trend -->
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Monthly Performance Trends</h3>
              <VChart ref="monthlyPerformanceChart" :option="monthlyPerformanceOption" class="h-64" />
            </div>

            <!-- Agent Productivity -->
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Agent Productivity Matrix</h3>
              <VChart ref="agentProductivityChart" :option="agentProductivityOption" class="h-64" />
            </div>
          </div>

          <!-- Detailed Performance Metrics -->
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
            <div class="p-6 border-b border-gray-100 dark:border-gray-600">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white">Performance vs Platform Benchmarks</h3>
            </div>
            <div class="p-6">
              <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div class="text-center">
                  <div class="text-2xl font-bold text-green-600">156%</div>
                  <div class="text-sm text-gray-500">vs Platform Avg</div>
                  <div class="text-xs text-gray-400 mt-1">Deal Closure Rate</div>
                </div>
                <div class="text-center">
                  <div class="text-2xl font-bold text-blue-600">143%</div>
                  <div class="text-sm text-gray-500">vs Platform Avg</div>
                  <div class="text-xs text-gray-400 mt-1">Revenue per Agent</div>
                </div>
                <div class="text-center">
                  <div class="text-2xl font-bold text-purple-600">128%</div>
                  <div class="text-sm text-gray-500">vs Platform Avg</div>
                  <div class="text-xs text-gray-400 mt-1">Client Retention</div>
                </div>
                <div class="text-center">
                  <div class="text-2xl font-bold text-orange-600">189%</div>
                  <div class="text-sm text-gray-500">vs Platform Avg</div>
                  <div class="text-xs text-gray-400 mt-1">Response Speed</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Agency Financials Tab -->
        <div v-if="activeTab === 'agency-financials'" class="p-6">
          <div class="flex items-center justify-between mb-6">
            <h2 class="text-2xl font-bold text-brand-navy dark:text-white">ThaiKeys Agency Financial Overview</h2>
            <div class="flex items-center space-x-4">
              <select class="border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-brand-navy dark:text-white rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-turqoise-light">
                <option>Current Month</option>
                <option>Last Quarter</option>
                <option>Year to Date</option>
              </select>
              <button class="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                Export Financial Report
              </button>
            </div>
          </div>

          <!-- Financial KPIs -->
          <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm font-medium text-brand-navy dark:text-gray-400">Monthly Revenue</p>
                  <p class="text-3xl font-bold text-brand-navy dark:text-white">{{ formatCurrency(thaikeysMonthlyRevenue) }}</p>
                  <p class="text-sm text-green-600 dark:text-green-400 mt-2">+12.5% from last month</p>
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
                  <p class="text-sm font-medium text-brand-navy dark:text-gray-400">Profit Margin</p>
                  <p class="text-3xl font-bold text-brand-navy dark:text-white">68%</p>
                  <p class="text-sm text-blue-600 dark:text-blue-400 mt-2">Industry leading</p>
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
                  <p class="text-sm font-medium text-brand-navy dark:text-gray-400">Operating Costs</p>
                  <p class="text-3xl font-bold text-brand-navy dark:text-white">฿912K</p>
                  <p class="text-sm text-purple-600 dark:text-purple-400 mt-2">Optimized efficiency</p>
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
                  <p class="text-sm font-medium text-brand-navy dark:text-gray-400">ROI</p>
                  <p class="text-3xl font-bold text-brand-navy dark:text-white">284%</p>
                  <p class="text-sm text-orange-600 dark:text-orange-400 mt-2">Exceptional returns</p>
                </div>
                <div class="w-12 h-12 bg-orange-100 dark:bg-orange-900/20 rounded-xl flex items-center justify-center">
                  <svg class="w-6 h-6 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <!-- Financial Charts -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <!-- Revenue Breakdown -->
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Revenue Breakdown</h3>
              <VChart ref="agencyRevenueBreakdownChart" :option="agencyRevenueBreakdownOption" class="h-64" />
            </div>

            <!-- Monthly P&L Trend -->
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Monthly P&L Trend</h3>
              <VChart ref="monthlyPLChart" :option="monthlyPLOption" class="h-64" />
            </div>
          </div>

          <!-- Cost Analysis -->
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Cost Structure</h3>
              <div class="space-y-4">
                <div class="flex justify-between items-center">
                  <span class="text-sm text-gray-600 dark:text-gray-400">Agent Salaries</span>
                  <span class="font-semibold text-brand-navy dark:text-white">฿456K (50%)</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-sm text-gray-600 dark:text-gray-400">Marketing</span>
                  <span class="font-semibold text-brand-navy dark:text-white">฿182K (20%)</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-sm text-gray-600 dark:text-gray-400">Operations</span>
                  <span class="font-semibold text-brand-navy dark:text-white">฿137K (15%)</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-sm text-gray-600 dark:text-gray-400">Technology</span>
                  <span class="font-semibold text-brand-navy dark:text-white">฿91K (10%)</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-sm text-gray-600 dark:text-gray-400">Other</span>
                  <span class="font-semibold text-brand-navy dark:text-white">฿46K (5%)</span>
                </div>
              </div>
            </div>

            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Financial Health</h3>
              <div class="space-y-4">
                <div class="flex justify-between items-center">
                  <span class="text-sm text-gray-600 dark:text-gray-400">Cash Flow</span>
                  <span class="font-semibold text-green-600">Positive</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-sm text-gray-600 dark:text-gray-400">Debt-to-Equity</span>
                  <span class="font-semibold text-brand-navy dark:text-white">0.15</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-sm text-gray-600 dark:text-gray-400">Quick Ratio</span>
                  <span class="font-semibold text-brand-navy dark:text-white">2.8</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-sm text-gray-600 dark:text-gray-400">Burn Rate</span>
                  <span class="font-semibold text-brand-navy dark:text-white">฿912K/mo</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-sm text-gray-600 dark:text-gray-400">Runway</span>
                  <span class="font-semibold text-green-600">24+ months</span>
                </div>
              </div>
            </div>

            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Growth Metrics</h3>
              <div class="space-y-4">
                <div class="flex justify-between items-center">
                  <span class="text-sm text-gray-600 dark:text-gray-400">Revenue Growth</span>
                  <span class="font-semibold text-green-600">+12.5% MoM</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-sm text-gray-600 dark:text-gray-400">Profit Growth</span>
                  <span class="font-semibold text-green-600">+18.2% MoM</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-sm text-gray-600 dark:text-gray-400">Customer LTV</span>
                  <span class="font-semibold text-brand-navy dark:text-white">฿45K</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-sm text-gray-600 dark:text-gray-400">CAC Payback</span>
                  <span class="font-semibold text-brand-navy dark:text-white">2.3 months</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-sm text-gray-600 dark:text-gray-400">EBITDA Margin</span>
                  <span class="font-semibold text-green-600">72%</span>
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
        <!-- Market Intelligence Tab -->
        <div v-if="activeTab === 'market-intelligence'" class="p-6">
          <div class="flex items-center justify-between mb-6">
            <h2 class="text-2xl font-bold text-brand-navy dark:text-white">Market Intelligence & Insights</h2>
            <div class="flex items-center space-x-4">
              <select class="border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-brand-navy dark:text-white rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-turqoise-light">
                <option>Bangkok Metro</option>
                <option>Phuket</option>
                <option>Pattaya</option>
                <option>Chiang Mai</option>
              </select>
              <button class="bg-brand-turqoise-light text-brand-navy px-6 py-3 rounded-lg font-semibold hover:bg-teal-300 transition-colors">
                Generate Market Report
              </button>
            </div>
          </div>

          <!-- Market Trends Analysis -->
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

          <!-- Supply vs Demand -->
          <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 mb-8">
            <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Supply vs Demand Matrix</h3>
            <VChart ref="supplyDemandChart" :option="supplyDemandOption" class="h-80" />
          </div>
        </div>

        <!-- Competitive Analysis Tab -->
        <div v-if="activeTab === 'competitive-analysis'" class="p-6">
          <div class="flex items-center justify-between mb-6">
            <h2 class="text-2xl font-bold text-brand-navy dark:text-white">Competitive Analysis</h2>
            <div class="text-sm text-brand-navy dark:text-gray-400">
              Market Position: <span class="font-bold text-lg text-brand-turqoise-light">#{{ marketPosition }}</span>
            </div>
          </div>

          <!-- Competitor Comparison -->
          <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 mb-8">
            <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Competitor Performance Matrix</h3>
            <VChart ref="competitorChart" :option="competitorAnalysisOption" class="h-80" />
          </div>

          <!-- Market Share Analysis -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Market Share Distribution</h3>
              <VChart ref="marketShareChart" :option="marketShareOption" class="h-64" />
            </div>
            
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Feature Comparison</h3>
              <VChart ref="featureComparisonChart" :option="featureComparisonOption" class="h-64" />
            </div>
          </div>
        </div>

        <!-- Global Settings Tab -->
        <div v-if="activeTab === 'global-settings'" class="p-6">
          <div class="flex items-center justify-between mb-6">
            <h2 class="text-2xl font-bold text-brand-navy dark:text-white">Global Platform Settings</h2>
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
                  <input type="number" v-model="globalSettings.platformCommission" class="w-full px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-turqoise-light bg-white dark:bg-gray-700 text-brand-navy dark:text-white">
                </div>
                <div>
                  <label class="block text-sm font-medium text-brand-navy dark:text-gray-300 mb-2">Subscription Pricing</label>
                  <div class="space-y-2">
                    <input type="number" v-model="globalSettings.basicTier" placeholder="Basic Tier" class="w-full px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-turqoise-light bg-white dark:bg-gray-700 text-brand-navy dark:text-white">
                    <input type="number" v-model="globalSettings.premiumTier" placeholder="Premium Tier" class="w-full px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-turqoise-light bg-white dark:bg-gray-700 text-brand-navy dark:text-white">
                  </div>
                </div>
              </div>
            </div>

            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">System Configuration</h3>
              <div class="space-y-4">
                <div class="flex items-center space-x-4">
                  <input type="checkbox" v-model="globalSettings.maintenanceMode" class="w-4 h-4 text-brand-turqoise-light border-gray-300 rounded">
                  <label class="text-sm text-brand-navy dark:text-white">Enable Maintenance Mode</label>
                </div>
                <div class="flex items-center space-x-4">
                  <input type="checkbox" v-model="globalSettings.newRegistrations" class="w-4 h-4 text-brand-turqoise-light border-gray-300 rounded">
                  <label class="text-sm text-brand-navy dark:text-white">Allow New Registrations</label>
                </div>
                <div class="flex items-center space-x-4">
                  <input type="checkbox" v-model="globalSettings.autoApproveAgencies" class="w-4 h-4 text-brand-turqoise-light border-gray-300 rounded">
                  <label class="text-sm text-brand-navy dark:text-white">Auto-approve New Agencies</label>
                </div>
              </div>
            </div>
          </div>
        </div>

      </main>
    </div>

    <!-- Modals would go here - keeping minimal for space -->
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
  title: 'Admin Dashboard - ThaiKeys',
  meta: [
    { name: 'description', content: 'Master admin dashboard for platform management and ThaiKeys agency operations' }
  ]
})

// Reactive data
const activeTab = ref('platform-overview')
const activeRole = ref('dual-view')
const analyticsTimeframe = ref('30d')
const userSearchQuery = ref('')

// Platform Statistics
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

// Chart refs
const userGrowthChart = ref(null)
const revenueChart = ref(null)
const userTypeChart = ref(null)
const geoChart = ref(null)
const heatmapChart = ref(null)
const monthlyPerformanceChart = ref(null)
const agentProductivityChart = ref(null)
const agencyRevenueBreakdownChart = ref(null)
const monthlyPLChart = ref(null)

// ThaiKeys Agency Data
const thaikeysAgencyRank = ref(1)
const thaikeysMarketShare = ref(8.5)
const thaikeysAgentCount = ref(22)
const thaikeysMonthlyRevenue = ref(2850000)
const thaikeysDealsThisMonth = ref(67)
const thaikeysCustomerSatisfaction = ref(96)
const thaikeysConversionRate = ref(42)
const thaikeysAvgDealSize = ref(185000)
const thaikeysResponseTime = ref('23m')
const revenueTarget = ref(5000000)

// User Statistics
const userStats = ref({
  renters: 68420,
  rentersGrowth: 12.5,
  landlords: 34210,
  landlordsGrowth: 8.3,
  agents: 2340,
  agentsGrowth: 15.2,
  agencies: 156,
  agenciesGrowth: 18.7,
  pendingVerification: 1240
})

// Revenue Management
const totalPendingPayouts = ref(1850000)
const totalAgencyRevenue = ref(12500000)
const avgAgencyRevenue = ref('฿890K')
const agenciesNeedingReview = ref(8)
const pendingPayouts = ref(15)
const marketPosition = ref(3)

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
const recentUsers = ref([
  { id: 1, name: 'John Smith', initials: 'JS', email: 'john@email.com', roles: ['Renter'], verificationStatus: 'Verified', joinDate: '2024-03-15', lastActive: '2h ago' },
  { id: 2, name: 'Sarah Wilson', initials: 'SW', email: 'sarah@agency.com', roles: ['Agent'], verificationStatus: 'Verified', joinDate: '2024-03-10', lastActive: '30m ago' },
  { id: 3, name: 'David Chen', initials: 'DC', email: 'david@landlord.com', roles: ['Landlord'], verificationStatus: 'Pending', joinDate: '2024-03-12', lastActive: '1h ago' }
])

const platformAgencies = ref([
  { id: 1, name: 'Bangkok Premium Properties', initials: 'BPP', location: 'Sukhumvit', subscriptionTier: 'premium', agentCount: 15, monthlyRevenue: 890000, performanceScore: 87, complianceStatus: 'Compliant', status: 'Active' },
  { id: 2, name: 'Elite Real Estate', initials: 'ERE', location: 'Silom', subscriptionTier: 'pro', agentCount: 8, monthlyRevenue: 560000, performanceScore: 72, complianceStatus: 'Issues', status: 'Active' },
  { id: 3, name: 'Siam Properties', initials: 'SP', location: 'Sathorn', subscriptionTier: 'basic', agentCount: 5, monthlyRevenue: 320000, performanceScore: 65, complianceStatus: 'Compliant', status: 'Active' }
])

const thaikeysAgents = ref([
  { id: 1, name: 'Michael Chen', initials: 'MC', specializations: ['Luxury', 'Condos'], monthlyDeals: 12, monthlyEarnings: 485000, performanceScore: 94, clientSatisfaction: 97, responseTime: '18m' },
  { id: 2, name: 'Lisa Anderson', initials: 'LA', specializations: ['Houses', 'Investment'], monthlyDeals: 9, monthlyEarnings: 342000, performanceScore: 89, clientSatisfaction: 95, responseTime: '25m' },
  { id: 3, name: 'James Thompson', initials: 'JT', specializations: ['Commercial', 'Land'], monthlyDeals: 15, monthlyEarnings: 567000, performanceScore: 96, clientSatisfaction: 98, responseTime: '15m' }
])

const topPerformingAgencies = ref([
  { id: 1, name: 'ThaiKeys Agency', initials: 'TKA', monthlyDeals: 67, monthlyRevenue: 2850000 },
  { id: 2, name: 'Bangkok Premium Properties', initials: 'BPP', monthlyDeals: 45, monthlyRevenue: 1890000 },
  { id: 3, name: 'Elite Real Estate', initials: 'ERE', monthlyDeals: 32, monthlyRevenue: 1240000 },
  { id: 4, name: 'Siam Properties', initials: 'SP', monthlyDeals: 28, monthlyRevenue: 980000 }
])

const recentPlatformActivity = ref([
  { id: 1, type: 'user', title: 'New Premium Agency Registration', description: 'Siam Properties registered as premium agency', location: 'Bangkok', time: '2h ago', value: null },
  { id: 2, type: 'transaction', title: 'High-Value Transaction', description: 'Luxury penthouse sale completed', location: 'Sukhumvit', time: '4h ago', value: 12500000 },
  { id: 3, type: 'agency', title: 'Agency Milestone', description: 'BPP reached 1000 completed deals', location: 'Platform-wide', time: '6h ago', value: null },
  { id: 4, type: 'system', title: 'System Update', description: 'Platform performance optimization deployed', location: 'Global', time: '8h ago', value: null }
])

const systemHealthAlerts = ref([
  { id: 1, title: 'High Server Load', description: 'Database queries taking longer than usual', severity: 'Warning', time: '15m ago' },
  { id: 2, title: 'Payment Gateway Latency', description: 'Increased response times from payment processor', severity: 'Critical', time: '1h ago' },
  { id: 3, title: 'Cache Memory Usage', description: 'Redis cache approaching capacity limits', severity: 'Warning', time: '3h ago' }
])

const pendingPayoutsList = ref([
  { id: 1, recipientName: 'Bangkok Premium Properties', recipientInitials: 'BPP', recipientType: 'Agency', transactionType: 'Commission', amount: 156000, dueDate: 'Today' },
  { id: 2, recipientName: 'Michael Chen', recipientInitials: 'MC', recipientType: 'Agent', transactionType: 'Salary', amount: 85000, dueDate: 'Tomorrow' },
  { id: 3, recipientName: 'Elite Real Estate', recipientInitials: 'ERE', recipientType: 'Agency', transactionType: 'Bonus', amount: 234000, dueDate: 'Today' }
])

// Prediction Data
const predictedRevenue = ref({
  nextMonth: 9200000,
  nextQuarter: 28500000
})
const confidenceScore = ref(87)

// Helper function - MOVED BEFORE CHART OPTIONS
const generateHeatmapData = () => {
  const data = []
  for (let i = 0; i < 7; i++) {
    for (let j = 0; j < 24; j++) {
      data.push([j, i, Math.floor(Math.random() * 100)])
    }
  }
  return data
}

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

const getRoleIndicatorClass = (role) => {
  switch(role) {
    case 'platform-admin': return 'bg-red-100 text-red-800'
    case 'agency-owner': return 'bg-green-100 text-green-800'
    default: return 'bg-purple-100 text-purple-800'
  }
}

const getRoleDisplayName = (role) => {
  switch(role) {
    case 'platform-admin': return 'Platform Admin'
    case 'agency-owner': return 'Agency Owner'
    default: return 'Dual View'
  }
}

const getNavClass = (tabName) => {
  const isActive = activeTab.value === tabName
  return [
    'flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors',
    isActive ? 'bg-brand-turqoise-light text-brand-navy border border-teal-200' : 'text-brand-navy dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700'
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

const switchRole = () => {
  console.log('Switched to role:', activeRole.value)
}

// Action methods
const viewUserDetails = (user) => console.log('View user:', user.name)
const suspendUser = (user) => console.log('Suspend user:', user.name)
const viewAgencyDetails = (agency) => console.log('View agency:', agency.name)
const auditAgency = (agency) => console.log('Audit agency:', agency.name)
const suspendAgency = (agency) => console.log('Suspend agency:', agency.name)

// Basic Platform Charts
const userGrowthChartOption = ref({
  tooltip: { trigger: 'axis' },
  legend: { data: ['New Users', 'Total Users'] },
  xAxis: { type: 'category', data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'] },
  yAxis: { type: 'value' },
  series: [
    { name: 'New Users', type: 'bar', data: [2840, 3420, 4180, 3890, 4650, 5240], itemStyle: { color: '#3B82F6' }},
    { name: 'Total Users', type: 'line', data: [45000, 52000, 61000, 68000, 75000, 84000], itemStyle: { color: '#10B981' }}
  ]
})

const platformRevenueChartOption = ref({
  tooltip: { trigger: 'axis', formatter: '{b}: ฿{c}K' },
  xAxis: { type: 'category', data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'] },
  yAxis: { type: 'value', axisLabel: { formatter: '฿{value}K' }},
  series: [{
    type: 'line',
    data: [4200, 5100, 6300, 7100, 7800, 8500],
    smooth: true,
    areaStyle: { color: { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: 'rgba(59, 130, 246, 0.3)' }, { offset: 1, color: 'rgba(59, 130, 246, 0.1)' }] }},
    itemStyle: { color: '#3B82F6' }
  }]
})

const userTypeChartOption = ref({
  tooltip: { trigger: 'item' },
  legend: { orient: 'vertical', left: 'left' },
  series: [{
    name: 'User Types',
    type: 'pie',
    radius: '50%',
    data: [
      { value: 68420, name: 'Renters' },
      { value: 34210, name: 'Landlords' },
      { value: 2340, name: 'Individual Agents' },
      { value: 890, name: 'Agency Agents' },
      { value: 156, name: 'Agencies' }
    ],
    emphasis: { itemStyle: { shadowBlur: 10, shadowOffsetX: 0, shadowColor: 'rgba(0, 0, 0, 0.5)' }}
  }]
})

const geographicChartOption = ref({
  tooltip: { trigger: 'axis' },
  xAxis: { type: 'category', data: ['Bangkok', 'Phuket', 'Pattaya', 'Chiang Mai', 'Koh Samui'] },
  yAxis: { type: 'value' },
  series: [{
    name: 'Users',
    type: 'bar',
    data: [85420, 12340, 8920, 6780, 3450],
    itemStyle: { color: { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: '#8B5CF6' }, { offset: 1, color: '#A78BFA' }] }}
  }]
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

// User Management Charts
const userAcquisitionChartOption = ref({
  tooltip: { trigger: 'axis' },
  legend: { data: ['Organic', 'Paid', 'Referral', 'Social'] },
  xAxis: { type: 'category', data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'] },
  yAxis: { type: 'value' },
  series: [
    { name: 'Organic', type: 'line', stack: 'Total', data: [1200, 1320, 1510, 1340, 1800, 1950], itemStyle: { color: '#10B981' }},
    { name: 'Paid', type: 'line', stack: 'Total', data: [820, 932, 901, 934, 1290, 1330], itemStyle: { color: '#3B82F6' }},
    { name: 'Referral', type: 'line', stack: 'Total', data: [450, 548, 510, 680, 720, 850], itemStyle: { color: '#8B5CF6' }},
    { name: 'Social', type: 'line', stack: 'Total', data: [370, 620, 1259, 936, 840, 1110], itemStyle: { color: '#F59E0B' }}
  ]
})

const userEngagementChartOption = ref({
  tooltip: { trigger: 'axis' },
  legend: { data: ['Daily Active', 'Weekly Active', 'Monthly Active'] },
  xAxis: { type: 'category', data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'] },
  yAxis: { type: 'value', axisLabel: { formatter: '{value}%' }},
  series: [
    { name: 'Daily Active', type: 'line', data: [28, 32, 35, 38, 42, 45], itemStyle: { color: '#EF4444' }},
    { name: 'Weekly Active', type: 'line', data: [65, 68, 72, 75, 78, 82], itemStyle: { color: '#F59E0B' }},
    { name: 'Monthly Active', type: 'line', data: [88, 89, 91, 93, 94, 96], itemStyle: { color: '#10B981' }}
  ]
})

// Agency Oversight Charts
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

// Platform Analytics Charts
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

const predictiveAnalyticsOption = ref({
  tooltip: { trigger: 'axis' },
  legend: { data: ['Historical', 'Prediction', 'Confidence Range'] },
  xAxis: { type: 'category', data: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'] },
  yAxis: { type: 'value', axisLabel: { formatter: '฿{value}M' }},
  series: [
    { name: 'Historical', type: 'line', data: [7.1, 7.8, 8.5, null, null, null, null, null], itemStyle: { color: '#10B981' }},
    { name: 'Prediction', type: 'line', data: [null, null, 8.5, 9.2, 9.8, 10.5, 11.2, 11.8], itemStyle: { color: '#F59E0B' }, lineStyle: { type: 'dashed' }},
    { 
      name: 'Confidence Range', 
      type: 'line', 
      data: [null, null, 8.5, 8.8, 9.2, 9.8, 10.2, 10.5], 
      itemStyle: { color: '#EF4444', opacity: 0.3 },
      areaStyle: { color: 'rgba(239, 68, 68, 0.1)' }
    }
  ]
})

// PART 3: Remaining Chart Options and Lifecycle Methods

// Agency Comparison Charts
const agencyComparisonOption = ref({
  tooltip: { trigger: 'axis' },
  legend: { data: ['ThaiKeys Agency', 'Top Competitor', 'Platform Average'] },
  radar: {
    indicator: [
      { name: 'Deals', max: 100 },
      { name: 'Revenue', max: 100 },
      { name: 'Satisfaction', max: 100 },
      { name: 'Response Time', max: 100 },
      { name: 'Market Share', max: 100 }
    ]
  },
  series: [{
    name: 'Performance',
    type: 'radar',
    data: [
      { value: [94, 91, 96, 98, 85], name: 'ThaiKeys Agency', itemStyle: { color: '#10B981' }},
      { value: [78, 82, 88, 72, 45], name: 'Top Competitor', itemStyle: { color: '#EF4444' }},
      { value: [65, 70, 75, 68, 25], name: 'Platform Average', itemStyle: { color: '#6B7280' }}
    ]
  }]
})

const revenueComparisonOption = ref({
  tooltip: { trigger: 'axis' },
  legend: { data: ['ThaiKeys Agency', 'Top 3 Competitors'] },
  xAxis: { type: 'category', data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'] },
  yAxis: { type: 'value', axisLabel: { formatter: '฿{value}M' }},
  series: [
    { name: 'ThaiKeys Agency', type: 'line', data: [1.8, 2.1, 2.4, 2.6, 2.7, 2.85], itemStyle: { color: '#10B981' }},
    { name: 'Top 3 Competitors', type: 'line', data: [1.2, 1.4, 1.6, 1.8, 1.9, 2.1], itemStyle: { color: '#EF4444' }}
  ]
})

const agentPerformanceMatrixOption = ref({
  tooltip: { trigger: 'item' },
  xAxis: { type: 'value', name: 'Client Satisfaction %' },
  yAxis: { type: 'value', name: 'Monthly Deals' },
  series: [{
    symbolSize: function (data) { return Math.sqrt(data[2]) * 2 },
    data: [
      [97, 12, 485000, 'Michael Chen'],
      [95, 9, 342000, 'Lisa Anderson'],
      [98, 15, 567000, 'James Thompson'],
      [92, 8, 289000, 'Sarah Kim'],
      [94, 11, 412000, 'David Wilson']
    ],
    type: 'scatter',
    itemStyle: { color: '#10B981' }
  }]
})

// ThaiKeys Agents Chart
const thaikeysAgentChartOption = ref({
  tooltip: { trigger: 'axis' },
  legend: { data: ['ThaiKeys Agents', 'Platform Average'] },
  xAxis: { type: 'category', data: ['Response Time', 'Deals/Month', 'Satisfaction', 'Conversion Rate', 'Revenue/Agent'] },
  yAxis: { type: 'value' },
  series: [
    { name: 'ThaiKeys Agents', type: 'bar', data: [95, 88, 96, 92, 94], itemStyle: { color: '#10B981' }},
    { name: 'Platform Average', type: 'bar', data: [72, 65, 78, 68, 71], itemStyle: { color: '#6B7280' }}
  ]
})

// Agency Performance Charts
const monthlyPerformanceOption = ref({
  tooltip: { trigger: 'axis' },
  legend: { data: ['Deals Closed', 'Revenue Generated', 'Client Satisfaction'] },
  xAxis: { type: 'category', data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'] },
  yAxis: { type: 'value' },
  series: [
    { name: 'Deals Closed', type: 'line', data: [45, 52, 48, 61, 55, 67], itemStyle: { color: '#10B981' }},
    { name: 'Revenue Generated', type: 'line', data: [1.8, 2.1, 1.9, 2.4, 2.2, 2.85], itemStyle: { color: '#3B82F6' }},
    { name: 'Client Satisfaction', type: 'line', data: [94, 95, 93, 97, 96, 96], itemStyle: { color: '#8B5CF6' }}
  ]
})

const agentProductivityOption = ref({
  tooltip: { trigger: 'item' },
  xAxis: { type: 'value', name: 'Deals per Month' },
  yAxis: { type: 'value', name: 'Revenue per Deal (฿K)' },
  series: [{
    symbolSize: function (data) { return Math.sqrt(data[2]) / 10 },
    data: [
      [12, 40, 485000, 'Michael Chen'],
      [9, 38, 342000, 'Lisa Anderson'], 
      [15, 38, 567000, 'James Thompson'],
      [8, 36, 289000, 'Sarah Kim'],
      [11, 37, 412000, 'David Wilson']
    ],
    type: 'scatter',
    itemStyle: { 
      color: function(params) {
        const colors = ['#10B981', '#3B82F6', '#8B5CF6', '#F59E0B', '#EF4444']
        return colors[params.dataIndex % colors.length]
      }
    }
  }]
})

// Agency Financials Charts
const agencyRevenueBreakdownOption = ref({
  tooltip: { trigger: 'item', formatter: '{b}: ฿{c}K ({d}%)' },
  series: [{
    name: 'Revenue Sources',
    type: 'pie',
    radius: '60%',
    data: [
      { value: 1425, name: 'Property Sales', itemStyle: { color: '#10B981' }},
      { value: 854, name: 'Property Rentals', itemStyle: { color: '#3B82F6' }},
      { value: 427, name: 'Property Management', itemStyle: { color: '#8B5CF6' }},
      { value: 144, name: 'Consultation Services', itemStyle: { color: '#F59E0B' }}
    ],
    emphasis: { itemStyle: { shadowBlur: 10, shadowOffsetX: 0, shadowColor: 'rgba(0, 0, 0, 0.5)' }}
  }]
})

const monthlyPLOption = ref({
  tooltip: { trigger: 'axis', formatter: function(params) {
    let result = params[0].name + '<br/>'
    params.forEach(function(item) {
      result += item.marker + item.seriesName + ': ฿' + item.value + 'K<br/>'
    })
    return result
  }},
  legend: { data: ['Revenue', 'Costs', 'Profit'] },
  xAxis: { type: 'category', data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'] },
  yAxis: { type: 'value', axisLabel: { formatter: '฿{value}K' }},
  series: [
    { 
      name: 'Revenue', 
      type: 'bar', 
      data: [1800, 2100, 1900, 2400, 2200, 2850],
      itemStyle: { color: '#10B981' }
    },
    { 
      name: 'Costs', 
      type: 'bar', 
      data: [720, 840, 760, 960, 880, 912],
      itemStyle: { color: '#EF4444' }
    },
    { 
      name: 'Profit', 
      type: 'line', 
      data: [1080, 1260, 1140, 1440, 1320, 1938],
      itemStyle: { color: '#F59E0B' },
      yAxisIndex: 0
    }
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

// Market Intelligence Charts
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

const demandAnalysisOption = ref({
  tooltip: { trigger: 'axis' },
  legend: { data: ['High Demand', 'Medium Demand', 'Low Demand'] },
  xAxis: { type: 'category', data: ['Condos', 'Houses', 'Apartments', 'Commercial', 'Land'] },
  yAxis: { type: 'value' },
  series: [
    { name: 'High Demand', type: 'bar', stack: 'total', data: [35, 25, 20, 15, 5], itemStyle: { color: '#10B981' }},
    { name: 'Medium Demand', type: 'bar', stack: 'total', data: [25, 30, 25, 15, 15], itemStyle: { color: '#F59E0B' }},
    { name: 'Low Demand', type: 'bar', stack: 'total', data: [40, 45, 55, 70, 80], itemStyle: { color: '#EF4444' }}
  ]
})

const supplyDemandOption = ref({
  tooltip: { trigger: 'item' },
  xAxis: { type: 'value', name: 'Supply Index' },
  yAxis: { type: 'value', name: 'Demand Index' },
  series: [{
    symbolSize: function (data) { return data[2] * 2 },
    data: [
      [85, 92, 35, 'Condos'],
      [78, 88, 25, 'Houses'],
      [65, 75, 20, 'Apartments'],
      [45, 58, 15, 'Commercial'],
      [25, 35, 8, 'Land']
    ],
    type: 'scatter',
    itemStyle: { color: '#8B5CF6' }
  }]
})

// Competitive Analysis Charts
const competitorAnalysisOption = ref({
  tooltip: { trigger: 'axis' },
  legend: { data: ['ThaiKeys', 'Competitor A', 'Competitor B', 'Competitor C'] },
  radar: {
    indicator: [
      { name: 'Market Share', max: 100 },
      { name: 'User Base', max: 100 },
      { name: 'Features', max: 100 },
      { name: 'Pricing', max: 100 },
      { name: 'Support', max: 100 },
      { name: 'Technology', max: 100 }
    ]
  },
  series: [{
    type: 'radar',
    data: [
      { value: [85, 88, 92, 78, 95, 90], name: 'ThaiKeys', itemStyle: { color: '#10B981' }},
      { value: [65, 72, 85, 88, 75, 80], name: 'Competitor A', itemStyle: { color: '#EF4444' }},
      { value: [55, 68, 75, 92, 70, 75], name: 'Competitor B', itemStyle: { color: '#3B82F6' }},
      { value: [45, 58, 68, 85, 65, 70], name: 'Competitor C', itemStyle: { color: '#F59E0B' }}
    ]
  }]
})

const marketShareOption = ref({
  tooltip: { trigger: 'item' },
  series: [{
    name: 'Market Share',
    type: 'pie',
    radius: '60%',
    data: [
      { value: 28, name: 'ThaiKeys', itemStyle: { color: '#10B981' }},
      { value: 22, name: 'Competitor A', itemStyle: { color: '#EF4444' }},
      { value: 18, name: 'Competitor B', itemStyle: { color: '#3B82F6' }},
      { value: 15, name: 'Competitor C', itemStyle: { color: '#F59E0B' }},
      { value: 17, name: 'Others', itemStyle: { color: '#6B7280' }}
    ]
  }]
})

const featureComparisonOption = ref({
  tooltip: { trigger: 'axis' },
  legend: { data: ['ThaiKeys', 'Competitors Average'] },
  xAxis: { type: 'category', data: ['Mobile App', 'Search', 'Analytics', 'Support', 'Payment', 'API'] },
  yAxis: { type: 'value', max: 100 },
  series: [
    { name: 'ThaiKeys', type: 'bar', data: [95, 88, 92, 96, 90, 85], itemStyle: { color: '#10B981' }},
    { name: 'Competitors Average', type: 'bar', data: [78, 82, 75, 80, 85, 70], itemStyle: { color: '#6B7280' }}
  ]
})

// Handle window resize
const handleResize = () => {
  const charts = [
    userGrowthChart, revenueChart, userTypeChart, geoChart, heatmapChart,
    monthlyPerformanceChart, agentProductivityChart, agencyRevenueBreakdownChart, monthlyPLChart
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
.inset-0 { top: 0; right: 0; bottom: 0; left: 0; }
</style>