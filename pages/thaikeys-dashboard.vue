<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 font-sans transition-colors duration-300">

    <!-- Agency Header -->
    <div class="bg-gradient-to-r from-green-500 to-teal-500 text-white px-6 py-4">
      <div class="flex items-center justify-between mx-auto">
        <!-- Agency Branding -->
        <div class="flex items-center space-x-6">
          <div class="w-16 h-16 bg-white bg-opacity-20 rounded-xl flex items-center justify-center border-2 border-white shadow-lg">
            <span class="text-2xl font-bold text-white">TKA</span>
          </div>
          
          <div class="text-white">
            <h1 class="font-bold text-2xl">ThaiKeys Agency</h1>
            <div class="text-sm text-green-100 flex items-center space-x-4">
              <span>Premium Real Estate Services</span>
              <span class="w-1 h-1 bg-green-200 rounded-full"></span>
              <span>{{ thaikeysAgentCount }} Active Agents</span>
              <span class="w-1 h-1 bg-green-200 rounded-full"></span>
              <span class="bg-yellow-400 text-green-900 px-2 py-0.5 rounded text-xs font-semibold">PLATFORM OWNER</span>
            </div>
          </div>
        </div>

        <!-- Agency Performance Stats -->
        <div class="flex items-center space-x-6 text-white">
          <div class="text-center">
            <div class="font-bold text-xl">{{ thaikeysDealsThisMonth }}</div>
            <div class="text-xs text-green-100">Deals This Month</div>
          </div>
          <div class="text-center">
            <div class="font-bold text-xl">{{ formatCurrency(thaikeysMonthlyRevenue) }}</div>
            <div class="text-xs text-green-100">Monthly Revenue</div>
          </div>
          <div class="text-center">
            <div class="font-bold text-xl text-yellow-300">#{{ thaikeysAgencyRank }}</div>
            <div class="text-xs text-green-100">Platform Ranking</div>
          </div>
          <div class="text-center">
            <div class="font-bold text-xl">{{ thaikeysCustomerSatisfaction }}%</div>
            <div class="text-xs text-green-100">Satisfaction Rate</div>
          </div>
        </div>

        <!-- Quick Actions -->
        <div class="flex items-center space-x-4">
          <button class="relative p-2 text-white hover:text-yellow-300 transition-colors">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-5 5-5-5h5v-12"/>
            </svg>
          </button>
          <button class="bg-white bg-opacity-20 border border-white border-opacity-30 text-white rounded-lg px-4 py-2 text-sm hover:bg-opacity-30 transition-colors">
            Export Report
          </button>
          <div class="w-8 h-8 bg-white bg-opacity-20 rounded-full"></div>
        </div>
      </div>
    </div>
    <!-- Main Layout Container -->
    <div class="flex mx-auto">
      <!-- Agency Sidebar Navigation -->
      <aside class="w-72 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex-shrink-0 transition-colors duration-300">
        <nav class="p-4 space-y-1">
          <!-- Agency Management Section -->
          <div>
            <div class="px-3 py-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Agency Management
            </div>
            
            <a href="#" :class="getNavClass('agency-overview')" @click="activeTab = 'agency-overview'">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
              </svg>
              <span class="font-medium">Overview</span>
            </a>
            
            <a href="#" :class="getNavClass('agent-management')" @click="activeTab = 'agent-management'">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
              </svg>
              <span class="font-medium">Agent Management</span>
              <span class="bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-400 text-xs font-semibold px-2 py-1 rounded-full ml-auto">{{ thaikeysAgentCount }}</span>
            </a>
            
            <a href="#" :class="getNavClass('performance-analytics')" @click="activeTab = 'performance-analytics'">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
              </svg>
              <span class="font-medium">Performance Analytics</span>
            </a>
            
            <a href="#" :class="getNavClass('financial-management')" @click="activeTab = 'financial-management'">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"/>
              </svg>
              <span class="font-medium">Financial Management</span>
            </a>
          </div>

          <!-- Operations Section -->
          <div class="mt-6">
            <div class="px-3 py-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Operations
            </div>
            
            <a href="#" :class="getNavClass('lead-management')" @click="activeTab = 'lead-management'">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
              </svg>
              <span class="font-medium">Lead Management</span>
              <span class="bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-400 text-xs font-semibold px-2 py-1 rounded-full ml-auto">{{ activeLeads }}</span>
            </a>
            
            <a href="#" :class="getNavClass('client-relationships')" @click="activeTab = 'client-relationships'">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
              </svg>
              <span class="font-medium">Client Relationships</span>
            </a>
            
            <a href="#" :class="getNavClass('property-portfolio')" @click="activeTab = 'property-portfolio'">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
              </svg>
              <span class="font-medium">Property Portfolio</span>
            </a>
          </div>

          <!-- Competitive Intelligence Section -->
          <div class="mt-6">
            <div class="px-3 py-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Intelligence
            </div>
            
            <a href="#" :class="getNavClass('market-insights')" @click="activeTab = 'market-insights'">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"/>
              </svg>
              <span class="font-medium">Market Insights</span>
            </a>
            
            <a href="#" :class="getNavClass('competitor-analysis')" @click="activeTab = 'competitor-analysis'">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
              </svg>
              <span class="font-medium">Competitor Analysis</span>
            </a>
            
            <a href="#" :class="getNavClass('agency-settings')" @click="activeTab = 'agency-settings'">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
              <span class="font-medium">Agency Settings</span>
            </a>
          </div>
        </nav>
      </aside>

      <!-- Main Content Area -->
      <main class="flex-1 overflow-y-auto bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        
        <!-- Agency Overview Tab -->
        <div v-if="activeTab === 'agency-overview'" class="p-6">
          <!-- Agency Performance KPIs -->
          <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm font-medium text-brand-navy dark:text-gray-400">Monthly Revenue</p>
                  <p class="text-3xl font-bold text-brand-navy dark:text-white">{{ formatCurrency(thaikeysMonthlyRevenue) }}</p>
                  <p class="text-sm text-green-600 dark:text-green-400 mt-2">+18.5% from last month</p>
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
                  <p class="text-sm font-medium text-brand-navy dark:text-gray-400">Active Deals</p>
                  <p class="text-3xl font-bold text-brand-navy dark:text-white">{{ activeDeals }}</p>
                  <p class="text-sm text-blue-600 dark:text-blue-400 mt-2">{{ newDealsThisWeek }} new this week</p>
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
                  <p class="text-sm font-medium text-brand-navy dark:text-gray-400">Conversion Rate</p>
                  <p class="text-3xl font-bold text-brand-navy dark:text-white">{{ thaikeysConversionRate }}%</p>
                  <p class="text-sm text-purple-600 dark:text-purple-400 mt-2">Industry leading</p>
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
                  <p class="text-sm font-medium text-brand-navy dark:text-gray-400">Client Satisfaction</p>
                  <p class="text-3xl font-bold text-brand-navy dark:text-white">{{ thaikeysCustomerSatisfaction }}%</p>
                  <p class="text-sm text-orange-600 dark:text-orange-400 mt-2">{{ thaikeysMarketShare }}% market share</p>
                </div>
                <div class="w-12 h-12 bg-orange-100 dark:bg-orange-900/20 rounded-xl flex items-center justify-center">
                  <svg class="w-6 h-6 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <!-- Charts Row 1 -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <!-- Revenue Trend -->
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Revenue Growth Trend</h3>
              <VChart ref="agencyRevenueChart" :option="agencyRevenueOption" class="h-64" />
            </div>

            <!-- Performance vs Competitors -->
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Performance vs Competitors</h3>
              <VChart ref="competitorComparisonChart" :option="competitorComparisonOption" class="h-64" />
            </div>
          </div>

          <!-- Charts Row 2 -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <!-- Deal Pipeline -->
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Deal Pipeline</h3>
              <VChart ref="dealPipelineChart" :option="dealPipelineOption" class="h-64" />
            </div>

            <!-- Agent Performance -->
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Top Performing Agents</h3>
              <VChart ref="topAgentsChart" :option="topAgentsOption" class="h-64" />
            </div>
          </div>

          <!-- Recent Activity & Goals -->
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <!-- Recent Agency Activity -->
            <div class="lg:col-span-2 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <div class="flex items-center justify-between mb-4">
                <h3 class="text-lg font-semibold text-brand-navy dark:text-white">Recent Activity</h3>
                <button class="text-green-600 hover:text-green-700 font-medium text-sm">View All</button>
              </div>
              
              <div class="space-y-4">
                <div v-for="activity in recentAgencyActivity" :key="activity.id" class="flex items-start space-x-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                  <div class="flex-shrink-0">
                    <div :class="['w-10 h-10 rounded-full flex items-center justify-center',
                                 activity.type === 'deal' ? 'bg-green-100 dark:bg-green-900/20' :
                                 activity.type === 'client' ? 'bg-blue-100 dark:bg-blue-900/20' :
                                 activity.type === 'agent' ? 'bg-purple-100 dark:bg-purple-900/20' :
                                 'bg-orange-100 dark:bg-orange-900/20']">
                      <svg class="w-5 h-5" :class="activity.type === 'deal' ? 'text-green-600 dark:text-green-400' :
                                                  activity.type === 'client' ? 'text-blue-600 dark:text-blue-400' :
                                                  activity.type === 'agent' ? 'text-purple-600 dark:text-purple-400' :
                                                  'text-orange-600 dark:text-orange-400'" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path v-if="activity.type === 'deal'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        <path v-else-if="activity.type === 'client'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                        <path v-else-if="activity.type === 'agent'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
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
                      <span class="text-xs text-gray-500">{{ activity.agent }}</span>
                      <span v-if="activity.value" class="text-xs font-semibold text-green-600">{{ formatCurrency(activity.value) }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Monthly Goals -->
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Monthly Goals</h3>
              
              <div class="space-y-4">
                <div v-for="goal in monthlyGoals" :key="goal.id">
                  <div class="flex items-center justify-between mb-2">
                    <span class="text-sm font-medium text-brand-navy dark:text-white">{{ goal.name }}</span>
                    <span class="text-sm text-gray-500">{{ goal.current }}/{{ goal.target }}</span>
                  </div>
                  <div class="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                    <div :class="['h-2 rounded-full', goal.percentage >= 80 ? 'bg-green-500' : goal.percentage >= 60 ? 'bg-yellow-500' : 'bg-red-500']" :style="`width: ${goal.percentage}%`"></div>
                  </div>
                  <div class="text-xs text-gray-500 mt-1">{{ goal.percentage }}% complete</div>
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
              <button class="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center space-x-2">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                </svg>
                <span>Hire New Agent</span>
              </button>
              <select class="border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-brand-navy dark:text-white rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500">
                <option>All Agents</option>
                <option>Top Performers</option>
                <option>New Hires</option>
                <option>Needs Training</option>
              </select>
            </div>
          </div>

          <!-- Agent Performance Overview -->
          <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div class="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg border border-gray-100 dark:border-gray-700 text-center">
              <div class="text-2xl font-bold text-green-600">{{ thaikeysAgentCount }}</div>
              <div class="text-sm text-gray-500">Total Agents</div>
              <div class="text-xs text-green-600 mt-1">2 new this month</div>
            </div>
            <div class="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg border border-gray-100 dark:border-gray-700 text-center">
              <div class="text-2xl font-bold text-blue-600">{{ avgDealsPerAgent }}</div>
              <div class="text-sm text-gray-500">Avg Deals/Month</div>
              <div class="text-xs text-blue-600 mt-1">Above industry avg</div>
            </div>
            <div class="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg border border-gray-100 dark:border-gray-700 text-center">
              <div class="text-2xl font-bold text-purple-600">{{ formatCurrency(avgAgentEarnings) }}</div>
              <div class="text-sm text-gray-500">Avg Monthly Earnings</div>
              <div class="text-xs text-purple-600 mt-1">+15% from last month</div>
            </div>
            <div class="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg border border-gray-100 dark:border-gray-700 text-center">
              <div class="text-2xl font-bold text-orange-600">{{ thaikeysResponseTime }}</div>
              <div class="text-sm text-gray-500">Avg Response Time</div>
              <div class="text-xs text-orange-600 mt-1">Industry leading</div>
            </div>
          </div>

          <!-- Agent Performance Charts -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <!-- Agent Performance Matrix -->
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Agent Performance Matrix</h3>
              <VChart ref="agentPerformanceChart" :option="agentPerformanceMatrixOption" class="h-64" />
            </div>

            <!-- Monthly Agent Rankings -->
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Monthly Rankings</h3>
              <VChart ref="agentRankingsChart" :option="agentRankingsOption" class="h-64" />
            </div>
          </div>

          <!-- Agent List -->
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
            <div class="p-6 border-b border-gray-100 dark:border-gray-600">
              <div class="flex items-center justify-between">
                <h3 class="text-lg font-semibold text-brand-navy dark:text-white">Agent Directory</h3>
                <div class="relative">
                  <input 
                    v-model="agentSearchQuery"
                    type="text" 
                    placeholder="Search agents..."
                    class="w-64 px-4 py-2 pr-10 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white dark:bg-gray-700 text-brand-navy dark:text-white"
                  >
                  <svg class="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                  </svg>
                </div>
              </div>
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
                    <div class="flex items-center space-x-2">
                      <button @click="viewAgentDetails(agent)" class="text-blue-600 hover:text-blue-700 p-2 rounded-full hover:bg-blue-50">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                        </svg>
                      </button>
                      <button @click="editAgent(agent)" class="text-green-600 hover:text-green-700 p-2 rounded-full hover:bg-green-50">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
                        </svg>
                      </button>
                    </div>
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
              <select v-model="analyticsTimeframe" class="border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-brand-navy dark:text-white rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500">
                <option value="7d">Last 7 Days</option>
                <option value="30d">Last 30 Days</option>
                <option value="90d">Last 90 Days</option>
                <option value="1y">Last Year</option>
              </select>
              <button class="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                Export Analytics
              </button>
            </div>
          </div>

          <!-- Performance KPIs -->
          <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm font-medium text-brand-navy dark:text-gray-400">Conversion Rate</p>
                  <p class="text-3xl font-bold text-brand-navy dark:text-white">{{ thaikeysConversionRate }}%</p>
                  <p class="text-sm text-green-600 dark:text-green-400 mt-2">+5.2% from last period</p>
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
                  <p class="text-sm font-medium text-brand-navy dark:text-gray-400">Avg Deal Size</p>
                  <p class="text-3xl font-bold text-brand-navy dark:text-white">{{ formatCurrency(thaikeysAvgDealSize) }}</p>
                  <p class="text-sm text-blue-600 dark:text-blue-400 mt-2">Above market average</p>
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
                  <p class="text-sm font-medium text-brand-navy dark:text-gray-400">Response Time</p>
                  <p class="text-3xl font-bold text-brand-navy dark:text-white">{{ thaikeysResponseTime }}</p>
                  <p class="text-sm text-purple-600 dark:text-purple-400 mt-2">Industry leading</p>
                </div>
                <div class="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-xl flex items-center justify-center">
                  <svg class="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
              </div>
            </div>

            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm font-medium text-brand-navy dark:text-gray-400">Market Ranking</p>
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

          <!-- Advanced Performance Charts -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <!-- Monthly Performance Trends -->
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Monthly Performance Trends</h3>
              <VChart ref="monthlyTrendsChart" :option="monthlyTrendsOption" class="h-64" />
            </div>

            <!-- Performance vs Competition -->
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Performance vs Competition</h3>
              <VChart ref="competitivePerformanceChart" :option="competitivePerformanceOption" class="h-64" />
            </div>
          </div>

          <!-- Lead Conversion Funnel -->
          <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 mb-8">
            <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Lead Conversion Funnel</h3>
            <VChart ref="conversionFunnelChart" :option="leadConversionFunnelOption" class="h-64" />
          </div>

          <!-- Performance Benchmarks -->
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

        <!-- Financial Management Tab -->
        <div v-if="activeTab === 'financial-management'" class="p-6">
          <div class="flex items-center justify-between mb-6">
            <h2 class="text-2xl font-bold text-brand-navy dark:text-white">Financial Management</h2>
            <div class="flex items-center space-x-4">
              <select class="border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-brand-navy dark:text-white rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500">
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
              <VChart ref="revenueBreakdownChart" :option="agencyRevenueBreakdownOption" class="h-64" />
            </div>

            <!-- Monthly P&L Trend -->
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Monthly P&L Trend</h3>
              <VChart ref="profitLossChart" :option="monthlyPLOption" class="h-64" />
            </div>
          </div>

          <!-- Financial Analysis Grid -->
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

        <!-- Lead Management Tab -->
        <div v-if="activeTab === 'lead-management'" class="p-6">
          <div class="flex items-center justify-between mb-6">
            <h2 class="text-2xl font-bold text-brand-navy dark:text-white">Lead Management</h2>
            <div class="flex items-center space-x-4">
              <button class="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center space-x-2">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                </svg>
                <span>Add Lead</span>
              </button>
              <select class="border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-brand-navy dark:text-white rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500">
                <option>All Leads</option>
                <option>Hot Leads</option>
                <option>Warm Leads</option>
                <option>Cold Leads</option>
                <option>Converted</option>
              </select>
            </div>
          </div>

          <!-- Lead Pipeline Overview -->
          <div class="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
            <div class="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg border border-gray-100 dark:border-gray-700 text-center">
              <div class="text-2xl font-bold text-blue-600">{{ totalLeads }}</div>
              <div class="text-sm text-gray-500">Total Leads</div>
              <div class="text-xs text-blue-600 mt-1">{{ newLeadsToday }} new today</div>
            </div>
            <div class="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg border border-gray-100 dark:border-gray-700 text-center">
              <div class="text-2xl font-bold text-red-600">{{ hotLeads }}</div>
              <div class="text-sm text-gray-500">Hot Leads</div>
              <div class="text-xs text-red-600 mt-1">Immediate follow-up</div>
            </div>
            <div class="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg border border-gray-100 dark:border-gray-700 text-center">
              <div class="text-2xl font-bold text-orange-600">{{ warmLeads }}</div>
              <div class="text-sm text-gray-500">Warm Leads</div>
              <div class="text-xs text-orange-600 mt-1">Active nurturing</div>
            </div>
            <div class="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg border border-gray-100 dark:border-gray-700 text-center">
              <div class="text-2xl font-bold text-gray-600">{{ coldLeads }}</div>
              <div class="text-sm text-gray-500">Cold Leads</div>
              <div class="text-xs text-gray-600 mt-1">Long-term nurture</div>
            </div>
            <div class="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg border border-gray-100 dark:border-gray-700 text-center">
              <div class="text-2xl font-bold text-green-600">{{ convertedLeads }}</div>
              <div class="text-sm text-gray-500">Converted</div>
              <div class="text-xs text-green-600 mt-1">This month</div>
            </div>
          </div>

          <!-- Lead Pipeline Charts -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <!-- Lead Source Analysis -->
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Lead Sources</h3>
              <VChart ref="leadSourceChart" :option="leadSourceOption" class="h-64" />
            </div>

            <!-- Lead Conversion Funnel -->
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Conversion Progress</h3>
              <VChart ref="leadConversionChart" :option="leadConversionOption" class="h-64" />
            </div>
          </div>

          <!-- Lead List -->
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
            <div class="p-6 border-b border-gray-100 dark:border-gray-600">
              <div class="flex items-center justify-between">
                <h3 class="text-lg font-semibold text-brand-navy dark:text-white">Active Leads</h3>
                <div class="relative">
                  <input 
                    v-model="leadSearchQuery"
                    type="text" 
                    placeholder="Search leads..."
                    class="w-64 px-4 py-2 pr-10 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white dark:bg-gray-700 text-brand-navy dark:text-white"
                  >
                  <svg class="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                  </svg>
                </div>
              </div>
            </div>
            
            <div class="p-6">
              <div class="space-y-4">
                <div v-for="lead in leadsList" :key="lead.id" class="flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-xl transition-colors">
                  <div class="flex items-center space-x-4">
                    <div :class="['w-12 h-12 rounded-full flex items-center justify-center',
                                 lead.priority === 'Hot' ? 'bg-red-100 dark:bg-red-900/20' :
                                 lead.priority === 'Warm' ? 'bg-orange-100 dark:bg-orange-900/20' :
                                 'bg-gray-100 dark:bg-gray-700']">
                      <span :class="['text-sm font-semibold',
                                   lead.priority === 'Hot' ? 'text-red-800 dark:text-red-400' :
                                   lead.priority === 'Warm' ? 'text-orange-800 dark:text-orange-400' :
                                   'text-gray-800 dark:text-gray-400']">{{ lead.initials }}</span>
                    </div>
                    <div>
                      <div class="font-semibold text-brand-navy dark:text-white">{{ lead.name }}</div>
                      <div class="text-sm text-gray-500">{{ lead.email }} • {{ lead.phone }}</div>
                      <div class="text-xs text-gray-400">{{ lead.source }} • {{ lead.propertyType }} • {{ lead.budget }}</div>
                    </div>
                  </div>
                  <div class="flex items-center space-x-6">
                    <div class="text-center">
                      <span :class="['px-2 py-1 rounded text-xs font-semibold',
                                   lead.priority === 'Hot' ? 'bg-red-100 text-red-800' :
                                   lead.priority === 'Warm' ? 'bg-orange-100 text-orange-800' :
                                   'bg-gray-100 text-gray-800']">
                        {{ lead.priority }}
                      </span>
                    </div>
                    <div class="text-center">
                      <div class="text-sm font-bold text-brand-navy dark:text-white">{{ lead.assignedAgent }}</div>
                      <div class="text-xs text-gray-500">Assigned Agent</div>
                    </div>
                    <div class="text-center">
                      <div class="text-sm font-bold text-brand-navy dark:text-white">{{ lead.lastContact }}</div>
                      <div class="text-xs text-gray-500">Last Contact</div>
                    </div>
                    <div class="flex items-center space-x-2">
                      <button @click="viewLeadDetails(lead)" class="text-blue-600 hover:text-blue-700 p-2 rounded-full hover:bg-blue-50">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                        </svg>
                      </button>
                      <button @click="contactLead(lead)" class="text-green-600 hover:text-green-700 p-2 rounded-full hover:bg-green-50">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div><!-- Lead Management Tab -->
        <div v-if="activeTab === 'lead-management'" class="p-6">
          <div class="flex items-center justify-between mb-6">
            <h2 class="text-2xl font-bold text-brand-navy dark:text-white">Lead Management</h2>
            <div class="flex items-center space-x-4">
              <button class="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center space-x-2">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                </svg>
                <span>Add Lead</span>
              </button>
              <select class="border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-brand-navy dark:text-white rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500">
                <option>All Leads</option>
                <option>Hot Leads</option>
                <option>Warm Leads</option>
                <option>Cold Leads</option>
                <option>Converted</option>
              </select>
            </div>
          </div>

          <!-- Lead Pipeline Overview -->
          <div class="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
            <div class="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg border border-gray-100 dark:border-gray-700 text-center">
              <div class="text-2xl font-bold text-blue-600">{{ totalLeads }}</div>
              <div class="text-sm text-gray-500">Total Leads</div>
              <div class="text-xs text-blue-600 mt-1">{{ newLeadsToday }} new today</div>
            </div>
            <div class="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg border border-gray-100 dark:border-gray-700 text-center">
              <div class="text-2xl font-bold text-red-600">{{ hotLeads }}</div>
              <div class="text-sm text-gray-500">Hot Leads</div>
              <div class="text-xs text-red-600 mt-1">Immediate follow-up</div>
            </div>
            <div class="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg border border-gray-100 dark:border-gray-700 text-center">
              <div class="text-2xl font-bold text-orange-600">{{ warmLeads }}</div>
              <div class="text-sm text-gray-500">Warm Leads</div>
              <div class="text-xs text-orange-600 mt-1">Active nurturing</div>
            </div>
            <div class="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg border border-gray-100 dark:border-gray-700 text-center">
              <div class="text-2xl font-bold text-gray-600">{{ coldLeads }}</div>
              <div class="text-sm text-gray-500">Cold Leads</div>
              <div class="text-xs text-gray-600 mt-1">Long-term nurture</div>
            </div>
            <div class="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg border border-gray-100 dark:border-gray-700 text-center">
              <div class="text-2xl font-bold text-green-600">{{ convertedLeads }}</div>
              <div class="text-sm text-gray-500">Converted</div>
              <div class="text-xs text-green-600 mt-1">This month</div>
            </div>
          </div>

          <!-- Lead Pipeline Charts -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <!-- Lead Source Analysis -->
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Lead Sources</h3>
              <VChart ref="leadSourceChart" :option="leadSourceOption" class="h-64" />
            </div>

            <!-- Lead Conversion Funnel -->
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Conversion Progress</h3>
              <VChart ref="leadConversionChart" :option="leadConversionOption" class="h-64" />
            </div>
          </div>

          <!-- Lead List -->
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
            <div class="p-6 border-b border-gray-100 dark:border-gray-600">
              <div class="flex items-center justify-between">
                <h3 class="text-lg font-semibold text-brand-navy dark:text-white">Active Leads</h3>
                <div class="relative">
                  <input 
                    v-model="leadSearchQuery"
                    type="text" 
                    placeholder="Search leads..."
                    class="w-64 px-4 py-2 pr-10 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white dark:bg-gray-700 text-brand-navy dark:text-white"
                  >
                  <svg class="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                  </svg>
                </div>
              </div>
            </div>
            
            <div class="p-6">
              <div class="space-y-4">
                <div v-for="lead in leadsList" :key="lead.id" class="flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-xl transition-colors">
                  <div class="flex items-center space-x-4">
                    <div :class="['w-12 h-12 rounded-full flex items-center justify-center',
                                 lead.priority === 'Hot' ? 'bg-red-100 dark:bg-red-900/20' :
                                 lead.priority === 'Warm' ? 'bg-orange-100 dark:bg-orange-900/20' :
                                 'bg-gray-100 dark:bg-gray-700']">
                      <span :class="['text-sm font-semibold',
                                   lead.priority === 'Hot' ? 'text-red-800 dark:text-red-400' :
                                   lead.priority === 'Warm' ? 'text-orange-800 dark:text-orange-400' :
                                   'text-gray-800 dark:text-gray-400']">{{ lead.initials }}</span>
                    </div>
                    <div>
                      <div class="font-semibold text-brand-navy dark:text-white">{{ lead.name }}</div>
                      <div class="text-sm text-gray-500">{{ lead.email }} • {{ lead.phone }}</div>
                      <div class="text-xs text-gray-400">{{ lead.source }} • {{ lead.propertyType }} • {{ lead.budget }}</div>
                    </div>
                  </div>
                  <div class="flex items-center space-x-6">
                    <div class="text-center">
                      <span :class="['px-2 py-1 rounded text-xs font-semibold',
                                   lead.priority === 'Hot' ? 'bg-red-100 text-red-800' :
                                   lead.priority === 'Warm' ? 'bg-orange-100 text-orange-800' :
                                   'bg-gray-100 text-gray-800']">
                        {{ lead.priority }}
                      </span>
                    </div>
                    <div class="text-center">
                      <div class="text-sm font-bold text-brand-navy dark:text-white">{{ lead.assignedAgent }}</div>
                      <div class="text-xs text-gray-500">Assigned Agent</div>
                    </div>
                    <div class="text-center">
                      <div class="text-sm font-bold text-brand-navy dark:text-white">{{ lead.lastContact }}</div>
                      <div class="text-xs text-gray-500">Last Contact</div>
                    </div>
                    <div class="flex items-center space-x-2">
                      <button @click="viewLeadDetails(lead)" class="text-blue-600 hover:text-blue-700 p-2 rounded-full hover:bg-blue-50">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                        </svg>
                      </button>
                      <button @click="contactLead(lead)" class="text-green-600 hover:text-green-700 p-2 rounded-full hover:bg-green-50">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Client Relationships Tab -->
        <div v-if="activeTab === 'client-relationships'" class="p-6">
          <div class="flex items-center justify-between mb-6">
            <h2 class="text-2xl font-bold text-brand-navy dark:text-white">Client Relationships</h2>
            <div class="flex items-center space-x-4">
              <button class="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center space-x-2">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                </svg>
                <span>Add Client</span>
              </button>
              <select class="border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-brand-navy dark:text-white rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500">
                <option>All Clients</option>
                <option>Active Clients</option>
                <option>VIP Clients</option>
                <option>Past Clients</option>
                <option>Referral Sources</option>
              </select>
            </div>
          </div>

          <!-- Client Overview Stats -->
          <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm font-medium text-brand-navy dark:text-gray-400">Total Clients</p>
                  <p class="text-3xl font-bold text-brand-navy dark:text-white">{{ totalClients }}</p>
                  <p class="text-sm text-green-600 dark:text-green-400 mt-2">{{ newClientsThisMonth }} new this month</p>
                </div>
                <div class="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-xl flex items-center justify-center">
                  <svg class="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                  </svg>
                </div>
              </div>
            </div>

            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm font-medium text-brand-navy dark:text-gray-400">Client Retention</p>
                  <p class="text-3xl font-bold text-brand-navy dark:text-white">{{ clientRetentionRate }}%</p>
                  <p class="text-sm text-blue-600 dark:text-blue-400 mt-2">Above industry average</p>
                </div>
                <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-xl flex items-center justify-center">
                  <svg class="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                  </svg>
                </div>
              </div>
            </div>

            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm font-medium text-brand-navy dark:text-gray-400">Referral Rate</p>
                  <p class="text-3xl font-bold text-brand-navy dark:text-white">{{ referralRate }}%</p>
                  <p class="text-sm text-purple-600 dark:text-purple-400 mt-2">{{ referralsThisMonth }} referrals this month</p>
                </div>
                <div class="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-xl flex items-center justify-center">
                  <svg class="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                  </svg>
                </div>
              </div>
            </div>

            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm font-medium text-brand-navy dark:text-gray-400">Avg Client Value</p>
                  <p class="text-3xl font-bold text-brand-navy dark:text-white">{{ formatCurrency(avgClientValue) }}</p>
                  <p class="text-sm text-orange-600 dark:text-orange-400 mt-2">Lifetime value</p>
                </div>
                <div class="w-12 h-12 bg-orange-100 dark:bg-orange-900/20 rounded-xl flex items-center justify-center">
                  <svg class="w-6 h-6 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <!-- Client Analytics Charts -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <!-- Client Satisfaction Trends -->
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Client Satisfaction Trends</h3>
              <VChart ref="clientSatisfactionChart" :option="clientSatisfactionOption" class="h-64" />
            </div>

            <!-- Client Lifecycle -->
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Client Lifecycle Distribution</h3>
              <VChart ref="clientLifecycleChart" :option="clientLifecycleOption" class="h-64" />
            </div>
          </div>

          <!-- Client Directory -->
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
            <div class="p-6 border-b border-gray-100 dark:border-gray-600">
              <div class="flex items-center justify-between">
                <h3 class="text-lg font-semibold text-brand-navy dark:text-white">Client Directory</h3>
                <div class="relative">
                  <input 
                    v-model="clientSearchQuery"
                    type="text" 
                    placeholder="Search clients..."
                    class="w-64 px-4 py-2 pr-10 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white dark:bg-gray-700 text-brand-navy dark:text-white"
                  >
                  <svg class="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                  </svg>
                </div>
              </div>
            </div>
            
            <div class="p-6">
              <div class="space-y-4">
                <div v-for="client in clientsList" :key="client.id" class="flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-xl transition-colors">
                  <div class="flex items-center space-x-4">
                    <div :class="['w-12 h-12 rounded-full flex items-center justify-center',
                                 client.tier === 'VIP' ? 'bg-purple-100 dark:bg-purple-900/20' :
                                 client.tier === 'Premium' ? 'bg-blue-100 dark:bg-blue-900/20' :
                                 'bg-green-100 dark:bg-green-900/20']">
                      <span :class="['text-sm font-semibold',
                                   client.tier === 'VIP' ? 'text-purple-800 dark:text-purple-400' :
                                   client.tier === 'Premium' ? 'text-blue-800 dark:text-blue-400' :
                                   'text-green-800 dark:text-green-400']">{{ client.initials }}</span>
                    </div>
                    <div>
                      <div class="font-semibold text-brand-navy dark:text-white">{{ client.name }}</div>
                      <div class="text-sm text-gray-500">{{ client.email }} • {{ client.phone }}</div>
                      <div class="text-xs text-gray-400">{{ client.propertyType }} • Client since {{ client.clientSince }}</div>
                    </div>
                  </div>
                  <div class="flex items-center space-x-6">
                    <div class="text-center">
                      <span :class="['px-2 py-1 rounded text-xs font-semibold',
                                   client.tier === 'VIP' ? 'bg-purple-100 text-purple-800' :
                                   client.tier === 'Premium' ? 'bg-blue-100 text-blue-800' :
                                   'bg-green-100 text-green-800']">
                        {{ client.tier }}
                      </span>
                    </div>
                    <div class="text-center">
                      <div class="text-sm font-bold text-brand-navy dark:text-white">{{ client.assignedAgent }}</div>
                      <div class="text-xs text-gray-500">Primary Agent</div>
                    </div>
                    <div class="text-center">
                      <div class="text-sm font-bold text-green-600">{{ formatCurrency(client.totalValue) }}</div>
                      <div class="text-xs text-gray-500">Total Value</div>
                    </div>
                    <div class="text-center">
                      <div class="text-sm font-bold text-brand-navy dark:text-white">{{ client.lastContact }}</div>
                      <div class="text-xs text-gray-500">Last Contact</div>
                    </div>
                    <div class="flex items-center space-x-2">
                      <button @click="viewClientDetails(client)" class="text-blue-600 hover:text-blue-700 p-2 rounded-full hover:bg-blue-50">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                        </svg>
                      </button>
                      <button @click="contactClient(client)" class="text-green-600 hover:text-green-700 p-2 rounded-full hover:bg-green-50">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Property Portfolio Tab -->
        <div v-if="activeTab === 'property-portfolio'" class="p-6">
          <div class="flex items-center justify-between mb-6">
            <h2 class="text-2xl font-bold text-brand-navy dark:text-white">Property Portfolio Management</h2>
            <div class="flex items-center space-x-4">
              <button class="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center space-x-2">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                </svg>
                <span>Add Property</span>
              </button>
              <select class="border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-brand-navy dark:text-white rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500">
                <option>All Properties</option>
                <option>Active Listings</option>
                <option>Sold Properties</option>
                <option>Under Contract</option>
                <option>Off Market</option>
              </select>
            </div>
          </div>

          <!-- Portfolio Overview Stats -->
          <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm font-medium text-brand-navy dark:text-gray-400">Total Properties</p>
                  <p class="text-3xl font-bold text-brand-navy dark:text-white">{{ totalProperties }}</p>
                  <p class="text-sm text-green-600 dark:text-green-400 mt-2">{{ newListingsThisMonth }} new this month</p>
                </div>
                <div class="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-xl flex items-center justify-center">
                  <svg class="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                  </svg>
                </div>
              </div>
            </div>

            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm font-medium text-brand-navy dark:text-gray-400">Active Listings</p>
                  <p class="text-3xl font-bold text-brand-navy dark:text-white">{{ activeListings }}</p>
                  <p class="text-sm text-blue-600 dark:text-blue-400 mt-2">{{ avgDaysOnMarket }} avg days on market</p>
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
                  <p class="text-sm font-medium text-brand-navy dark:text-gray-400">Portfolio Value</p>
                  <p class="text-3xl font-bold text-brand-navy dark:text-white">{{ formatCurrency(portfolioValue) }}</p>
                  <p class="text-sm text-purple-600 dark:text-purple-400 mt-2">{{ formatCurrency(avgPropertyValue) }} avg value</p>
                </div>
                <div class="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-xl flex items-center justify-center">
                  <svg class="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"/>
                  </svg>
                </div>
              </div>
            </div>

            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm font-medium text-brand-navy dark:text-gray-400">Properties Sold</p>
                  <p class="text-3xl font-bold text-brand-navy dark:text-white">{{ propertiesSold }}</p>
                  <p class="text-sm text-orange-600 dark:text-orange-400 mt-2">This month</p>
                </div>
                <div class="w-12 h-12 bg-orange-100 dark:bg-orange-900/20 rounded-xl flex items-center justify-center">
                  <svg class="w-6 h-6 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <!-- Property Analytics Charts -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <!-- Property Type Distribution -->
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Property Type Distribution</h3>
              <VChart ref="propertyTypeChart" :option="propertyTypeDistributionOption" class="h-64" />
            </div>

            <!-- Price Range Analysis -->
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Price Range Analysis</h3>
              <VChart ref="priceRangeChart" :option="priceRangeOption" class="h-64" />
            </div>
          </div>

          <!-- Property Listings -->
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
            <div class="p-6 border-b border-gray-100 dark:border-gray-600">
              <div class="flex items-center justify-between">
                <h3 class="text-lg font-semibold text-brand-navy dark:text-white">Property Listings</h3>
                <div class="relative">
                  <input 
                    v-model="propertySearchQuery"
                    type="text" 
                    placeholder="Search properties..."
                    class="w-64 px-4 py-2 pr-10 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white dark:bg-gray-700 text-brand-navy dark:text-white"
                  >
                  <svg class="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                  </svg>
                </div>
              </div>
            </div>
            
            <div class="p-6">
              <div class="space-y-4">
                <div v-for="property in propertiesList" :key="property.id" class="flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-xl transition-colors">
                  <div class="flex items-center space-x-4">
                    <div class="w-16 h-12 bg-gray-200 dark:bg-gray-600 rounded-lg flex items-center justify-center">
                      <svg class="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"/>
                      </svg>
                    </div>
                    <div>
                      <div class="font-semibold text-brand-navy dark:text-white">{{ property.title }}</div>
                      <div class="text-sm text-gray-500">{{ property.address }}</div>
                      <div class="text-xs text-gray-400">{{ property.type }} • {{ property.bedrooms }}BR {{ property.bathrooms }}BA • {{ property.sqft }} sqft</div>
                    </div>
                  </div>
                  <div class="flex items-center space-x-6">
                    <div class="text-center">
                      <div class="text-lg font-bold text-green-600">{{ formatCurrency(property.price) }}</div>
                      <div class="text-xs text-gray-500">Listed Price</div>
                    </div>
                    <div class="text-center">
                      <span :class="['px-2 py-1 rounded text-xs font-semibold',
                                   property.status === 'Active' ? 'bg-green-100 text-green-800' :
                                   property.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                                   property.status === 'Sold' ? 'bg-blue-100 text-blue-800' :
                                   'bg-gray-100 text-gray-800']">
                        {{ property.status }}
                      </span>
                    </div>
                    <div class="text-center">
                      <div class="text-sm font-bold text-brand-navy dark:text-white">{{ property.assignedAgent }}</div>
                      <div class="text-xs text-gray-500">Agent</div>
                    </div>
                    <div class="text-center">
                      <div class="text-sm font-bold text-brand-navy dark:text-white">{{ property.daysOnMarket }}</div>
                      <div class="text-xs text-gray-500">Days on Market</div>
                    </div>
                    <div class="flex items-center space-x-2">
                      <button @click="viewPropertyDetails(property)" class="text-blue-600 hover:text-blue-700 p-2 rounded-full hover:bg-blue-50">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                        </svg>
                      </button>
                      <button @click="editProperty(property)" class="text-green-600 hover:text-green-700 p-2 rounded-full hover:bg-green-50">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Market Insights Tab -->
        <div v-if="activeTab === 'market-insights'" class="p-6">
          <div class="flex items-center justify-between mb-6">
            <h2 class="text-2xl font-bold text-brand-navy dark:text-white">Market Insights & Intelligence</h2>
            <div class="flex items-center space-x-4">
              <select class="border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-brand-navy dark:text-white rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500">
                <option>Bangkok Metro</option>
                <option>Phuket</option>
                <option>Pattaya</option>
                <option>Chiang Mai</option>
                <option>Koh Samui</option>
              </select>
              <button class="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                Generate Market Report
              </button>
            </div>
          </div>

          <!-- Market Overview KPIs -->
          <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm font-medium text-brand-navy dark:text-gray-400">Market Share</p>
                  <p class="text-3xl font-bold text-brand-navy dark:text-white">{{ thaikeysMarketShare }}%</p>
                  <p class="text-sm text-green-600 dark:text-green-400 mt-2">+0.8% this quarter</p>
                </div>
                <div class="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-xl flex items-center justify-center">
                  <svg class="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                  </svg>
                </div>
              </div>
            </div>

            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm font-medium text-brand-navy dark:text-gray-400">Avg Market Price</p>
                  <p class="text-3xl font-bold text-brand-navy dark:text-white">{{ formatCurrency(avgMarketPrice) }}</p>
                  <p class="text-sm text-blue-600 dark:text-blue-400 mt-2">+5.2% YoY</p>
                </div>
                <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-xl flex items-center justify-center">
                  <svg class="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                  </svg>
                </div>
              </div>
            </div>

            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm font-medium text-brand-navy dark:text-gray-400">Market Activity</p>
                  <p class="text-3xl font-bold text-brand-navy dark:text-white">{{ marketActivity }}</p>
                  <p class="text-sm text-purple-600 dark:text-purple-400 mt-2">Transactions/month</p>
                </div>
                <div class="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-xl flex items-center justify-center">
                  <svg class="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"/>
                  </svg>
                </div>
              </div>
            </div>

            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm font-medium text-brand-navy dark:text-gray-400">Days on Market</p>
                  <p class="text-3xl font-bold text-brand-navy dark:text-white">{{ avgMarketDays }}</p>
                  <p class="text-sm text-orange-600 dark:text-orange-400 mt-2">Market average</p>
                </div>
                <div class="w-12 h-12 bg-orange-100 dark:bg-orange-900/20 rounded-xl flex items-center justify-center">
                  <svg class="w-6 h-6 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <!-- Market Analysis Charts -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <!-- Market Price Trends -->
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Market Price Trends</h3>
              <VChart ref="marketPriceTrendsChart" :option="marketPriceTrendsOption" class="h-64" />
            </div>

            <!-- Supply vs Demand -->
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Supply vs Demand Analysis</h3>
              <VChart ref="supplyDemandChart" :option="marketSupplyDemandOption" class="h-64" />
            </div>
          </div>

          <!-- Market Opportunities -->
          <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 mb-8">
            <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Market Opportunities Matrix</h3>
            <VChart ref="opportunitiesChart" :option="marketOpportunitiesOption" class="h-80" />
          </div>

          <!-- Market Insights Grid -->
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Hot Neighborhoods</h3>
              <div class="space-y-3">
                <div v-for="neighborhood in hotNeighborhoods" :key="neighborhood.id" class="flex justify-between items-center">
                  <span class="text-sm text-brand-navy dark:text-white">{{ neighborhood.name }}</span>
                  <span class="text-sm font-semibold text-green-600">{{ neighborhood.growth }}%</span>
                </div>
              </div>
            </div>

            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Market Predictions</h3>
              <div class="space-y-3">
                <div class="flex justify-between items-center">
                  <span class="text-sm text-gray-600 dark:text-gray-400">Price Growth (6mo)</span>
                  <span class="font-semibold text-green-600">+8.5%</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-sm text-gray-600 dark:text-gray-400">Market Activity</span>
                  <span class="font-semibold text-blue-600">Increasing</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-sm text-gray-600 dark:text-gray-400">Best Property Type</span>
                  <span class="font-semibold text-brand-navy dark:text-white">Condos</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-sm text-gray-600 dark:text-gray-400">Inventory Level</span>
                  <span class="font-semibold text-orange-600">Low</span>
                </div>
              </div>
            </div>

            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Competitive Intel</h3>
              <div class="space-y-3">
                <div class="flex justify-between items-center">
                  <span class="text-sm text-gray-600 dark:text-gray-400">Market Leader</span>
                  <span class="font-semibold text-brand-navy dark:text-white">ThaiKeys</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-sm text-gray-600 dark:text-gray-400">Closest Competitor</span>
                  <span class="font-semibold text-red-600">6.2% behind</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-sm text-gray-600 dark:text-gray-400">Our Advantage</span>
                  <span class="font-semibold text-green-600">Response Time</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-sm text-gray-600 dark:text-gray-400">Growth Rate</span>
                  <span class="font-semibold text-purple-600">2x Industry</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Competitor Analysis Tab -->
        <div v-if="activeTab === 'competitor-analysis'" class="p-6">
          <div class="flex items-center justify-between mb-6">
            <h2 class="text-2xl font-bold text-brand-navy dark:text-white">Competitive Intelligence</h2>
            <div class="flex items-center space-x-4">
              <select class="border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-brand-navy dark:text-white rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500">
                <option>All Competitors</option>
                <option>Direct Competitors</option>
                <option>Emerging Threats</option>
                <option>Market Leaders</option>
              </select>
              <button class="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                Export Analysis
              </button>
            </div>
          </div>

          <!-- Competitive Position Overview -->
          <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm font-medium text-brand-navy dark:text-gray-400">Market Ranking</p>
                  <p class="text-3xl font-bold text-brand-navy dark:text-white">#{{ thaikeysAgencyRank }}</p>
                  <p class="text-sm text-green-600 dark:text-green-400 mt-2">Market leader</p>
                </div>
                <div class="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-xl flex items-center justify-center">
                  <svg class="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
                  </svg>
                </div>
              </div>
            </div>

            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm font-medium text-brand-navy dark:text-gray-400">Market Share</p>
                  <p class="text-3xl font-bold text-brand-navy dark:text-white">{{ thaikeysMarketShare }}%</p>
                  <p class="text-sm text-blue-600 dark:text-blue-400 mt-2">{{ competitorGap }}% ahead</p>
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
                  <p class="text-sm font-medium text-brand-navy dark:text-gray-400">Competitive Advantage</p>
                  <p class="text-3xl font-bold text-brand-navy dark:text-white">{{ competitiveScore }}%</p>
                  <p class="text-sm text-purple-600 dark:text-purple-400 mt-2">Overall advantage</p>
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
                  <p class="text-sm font-medium text-brand-navy dark:text-gray-400">Threat Level</p>
                  <p class="text-3xl font-bold text-brand-navy dark:text-white">Low</p>
                  <p class="text-sm text-orange-600 dark:text-orange-400 mt-2">{{ threatsMonitored }} monitored</p>
                </div>
                <div class="w-12 h-12 bg-orange-100 dark:bg-orange-900/20 rounded-xl flex items-center justify-center">
                  <svg class="w-6 h-6 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <!-- Competitive Analysis Charts -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <!-- Competitor Performance Matrix -->
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Competitor Performance Matrix</h3>
              <VChart ref="competitorMatrixChart" :option="competitorMatrixOption" class="h-64" />
            </div>

            <!-- Market Share Evolution -->
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Market Share Evolution</h3>
              <VChart ref="marketShareEvolutionChart" :option="marketShareEvolutionOption" class="h-64" />
            </div>
          </div>

          <!-- Competitor Benchmarking -->
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 mb-8">
            <div class="p-6 border-b border-gray-100 dark:border-gray-600">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white">Competitor Benchmarking</h3>
            </div>
            <div class="p-6">
              <div class="overflow-x-auto">
                <table class="w-full">
                  <thead>
                    <tr class="border-b border-gray-200 dark:border-gray-600">
                      <th class="text-left py-3 px-4 font-semibold text-brand-navy dark:text-white">Company</th>
                      <th class="text-left py-3 px-4 font-semibold text-brand-navy dark:text-white">Market Share</th>
                      <th class="text-left py-3 px-4 font-semibold text-brand-navy dark:text-white">Agents</th>
                      <th class="text-left py-3 px-4 font-semibold text-brand-navy dark:text-white">Avg Response</th>
                      <th class="text-left py-3 px-4 font-semibold text-brand-navy dark:text-white">Customer Rating</th>
                      <th class="text-left py-3 px-4 font-semibold text-brand-navy dark:text-white">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="competitor in competitorsList" :key="competitor.id" class="border-b border-gray-100 dark:border-gray-700">
                      <td class="py-3 px-4">
                        <div class="flex items-center space-x-3">
                          <div :class="['w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold',
                                       competitor.name === 'ThaiKeys Agency' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800']">
                            {{ competitor.initials }}
                          </div>
                          <span class="font-medium text-brand-navy dark:text-white">{{ competitor.name }}</span>
                        </div>
                      </td>
                      <td class="py-3 px-4 text-brand-navy dark:text-white">{{ competitor.marketShare }}%</td>
                      <td class="py-3 px-4 text-brand-navy dark:text-white">{{ competitor.agentCount }}</td>
                      <td class="py-3 px-4 text-brand-navy dark:text-white">{{ competitor.responseTime }}</td>
                      <td class="py-3 px-4">
                        <div class="flex items-center space-x-2">
                          <span class="text-brand-navy dark:text-white">{{ competitor.rating }}/5</span>
                          <div class="flex space-x-1">
                            <div v-for="star in 5" :key="star" :class="['w-3 h-3 rounded-full', star <= competitor.rating ? 'bg-yellow-400' : 'bg-gray-300']"></div>
                          </div>
                        </div>
                      </td>
                      <td class="py-3 px-4">
                        <span :class="['px-2 py-1 rounded text-xs font-semibold',
                                     competitor.threat === 'Low' ? 'bg-green-100 text-green-800' :
                                     competitor.threat === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                                     'bg-red-100 text-red-800']">
                          {{ competitor.threat }} Threat
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <!-- Agency Settings Tab -->
        <div v-if="activeTab === 'agency-settings'" class="p-6">
          <div class="flex items-center justify-between mb-6">
            <h2 class="text-2xl font-bold text-brand-navy dark:text-white">Agency Settings</h2>
            <button class="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
              Save Changes
            </button>
          </div>

          <!-- Agency Configuration -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Agency Information</h3>
              <div class="space-y-4">
                <div>
                  <label class="block text-sm font-medium text-brand-navy dark:text-gray-300 mb-2">Agency Name</label>
                  <input type="text" v-model="agencySettings.name" class="w-full px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white dark:bg-gray-700 text-brand-navy dark:text-white">
                </div>
                <div>
                  <label class="block text-sm font-medium text-brand-navy dark:text-gray-300 mb-2">Contact Email</label>
                  <input type="email" v-model="agencySettings.email" class="w-full px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white dark:bg-gray-700 text-brand-navy dark:text-white">
                </div>
                <div>
                  <label class="block text-sm font-medium text-brand-navy dark:text-gray-300 mb-2">Phone Number</label>
                  <input type="tel" v-model="agencySettings.phone" class="w-full px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white dark:bg-gray-700 text-brand-navy dark:text-white">
                </div>
                <div>
                  <label class="block text-sm font-medium text-brand-navy dark:text-gray-300 mb-2">Office Address</label>
                  <textarea v-model="agencySettings.address" rows="3" class="w-full px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white dark:bg-gray-700 text-brand-navy dark:text-white"></textarea>
                </div>
              </div>
            </div>

            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Operational Settings</h3>
              <div class="space-y-4">
                <div class="flex items-center space-x-4">
                  <input type="checkbox" v-model="agencySettings.autoAssignLeads" class="w-4 h-4 text-green-600 border-gray-300 rounded">
                  <label class="text-sm text-brand-navy dark:text-white">Auto-assign new leads</label>
                </div>
                <div class="flex items-center space-x-4">
                  <input type="checkbox" v-model="agencySettings.enableNotifications" class="w-4 h-4 text-green-600 border-gray-300 rounded">
                  <label class="text-sm text-brand-navy dark:text-white">Enable email notifications</label>
                </div>
                <div class="flex items-center space-x-4">
                  <input type="checkbox" v-model="agencySettings.publicProfile" class="w-4 h-4 text-green-600 border-gray-300 rounded">
                  <label class="text-sm text-brand-navy dark:text-white">Public agency profile</label>
                </div>
                <div>
                  <label class="block text-sm font-medium text-brand-navy dark:text-gray-300 mb-2">Default Commission Rate (%)</label>
                  <input type="number" v-model="agencySettings.commissionRate" step="0.1" class="w-full px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white dark:bg-gray-700 text-brand-navy dark:text-white">
                </div>
                <div>
                  <label class="block text-sm font-medium text-brand-navy dark:text-gray-300 mb-2">Business Hours</label>
                  <select v-model="agencySettings.businessHours" class="w-full px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white dark:bg-gray-700 text-brand-navy dark:text-white">
                    <option>9:00 AM - 6:00 PM</option>
                    <option>8:00 AM - 8:00 PM</option>
                    <option>24/7 Available</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <!-- Team Management -->
          <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 mb-8">
            <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Team Management</h3>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div class="text-center p-4 border border-gray-200 dark:border-gray-600 rounded-lg">
                <div class="text-2xl font-bold text-green-600">{{ thaikeysAgentCount }}</div>
                <div class="text-sm text-gray-500">Total Agents</div>
                <button class="mt-2 text-green-600 hover:text-green-700 text-sm font-medium">Manage Agents</button>
              </div>
              <div class="text-center p-4 border border-gray-200 dark:border-gray-600 rounded-lg">
                <div class="text-2xl font-bold text-blue-600">{{ adminUsers }}</div>
                <div class="text-sm text-gray-500">Admin Users</div>
                <button class="mt-2 text-blue-600 hover:text-blue-700 text-sm font-medium">Manage Access</button>
              </div>
              <div class="text-center p-4 border border-gray-200 dark:border-gray-600 rounded-lg">
                <div class="text-2xl font-bold text-purple-600">{{ pendingInvites }}</div>
                <div class="text-sm text-gray-500">Pending Invites</div>
                <button class="mt-2 text-purple-600 hover:text-purple-700 text-sm font-medium">Send Invites</button>
              </div>
            </div>
          </div>

          <!-- Integration Settings -->
          <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
            <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Platform Integration</h3>
            <div class="space-y-4">
              <div class="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-600 rounded-lg">
                <div>
                  <h4 class="font-semibold text-brand-navy dark:text-white">Platform API Access</h4>
                  <p class="text-sm text-gray-500">Direct access to platform features and data</p>
                </div>
                <div class="flex items-center space-x-2">
                  <span class="text-sm text-green-600">Active</span>
                  <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
              </div>
              <div class="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-600 rounded-lg">
                <div>
                  <h4 class="font-semibold text-brand-navy dark:text-white">Zero Platform Fees</h4>
                  <p class="text-sm text-gray-500">Platform owner benefit - no transaction fees</p>
                </div>
                <div class="flex items-center space-x-2">
                  <span class="text-sm text-green-600">Enabled</span>
                  <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
              </div>
              <div class="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-600 rounded-lg">
                <div>
                  <h4 class="font-semibold text-brand-navy dark:text-white">Priority Support</h4>
                  <p class="text-sm text-gray-500">24/7 dedicated platform support</p>
                </div>
                <div class="flex items-center space-x-2">
                  <span class="text-sm text-green-600">Active</span>
                  <div class="w-2 h-2 bg-green-500 rounded-full"></div>
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
  title: 'ThaiKeys Agency Dashboard',
  meta: [
    { name: 'description', content: 'ThaiKeys Agency management dashboard for team performance and operations' }
  ]
})

// Reactive data
const activeTab = ref('agency-overview')
const analyticsTimeframe = ref('30d')
const agentSearchQuery = ref('')
const leadSearchQuery = ref('')
const clientSearchQuery = ref('')
const propertySearchQuery = ref('')

// Agency Statistics
const thaikeysAgencyRank = ref(1)
const thaikeysMarketShare = ref(8.5)
const thaikeysAgentCount = ref(22)
const thaikeysMonthlyRevenue = ref(2850000)
const thaikeysDealsThisMonth = ref(67)
const thaikeysCustomerSatisfaction = ref(96)
const thaikeysConversionRate = ref(42)
const thaikeysAvgDealSize = ref(185000)
const thaikeysResponseTime = ref('23m')
const activeDeals = ref(156)
const newDealsThisWeek = ref(12)
const avgDealsPerAgent = ref(12)
const avgAgentEarnings = ref(425000)

// Lead Management
const totalLeads = ref(342)
const newLeadsToday = ref(8)
const hotLeads = ref(45)
const warmLeads = ref(123)
const coldLeads = ref(89)
const convertedLeads = ref(24)
const activeLeads = ref(257)

// Client Management
const totalClients = ref(1240)
const newClientsThisMonth = ref(67)
const clientRetentionRate = ref(87)
const referralRate = ref(34)
const referralsThisMonth = ref(23)
const avgClientValue = ref(450000)

// Property Portfolio
const totalProperties = ref(189)
const newListingsThisMonth = ref(15)
const activeListings = ref(124)
const avgDaysOnMarket = ref(42)
const portfolioValue = ref(89500000)
const avgPropertyValue = ref(4750000)
const propertiesSold = ref(18)

// Market Data
const avgMarketPrice = ref(5200000)
const marketActivity = ref(1840)
const avgMarketDays = ref(58)

// Competitive Data
const competitorGap = ref(2.3)
const competitiveScore = ref(91)
const threatsMonitored = ref(12)

// Settings Data
const adminUsers = ref(5)
const pendingInvites = ref(3)

// Chart refs
const agencyRevenueChart = ref(null)
const competitorComparisonChart = ref(null)
const dealPipelineChart = ref(null)
const topAgentsChart = ref(null)
const agentPerformanceChart = ref(null)
const agentRankingsChart = ref(null)
const monthlyTrendsChart = ref(null)
const competitivePerformanceChart = ref(null)
const conversionFunnelChart = ref(null)
const revenueBreakdownChart = ref(null)
const profitLossChart = ref(null)

// Sample Data Arrays
const thaikeysAgents = ref([
  { id: 1, name: 'Michael Chen', initials: 'MC', specializations: ['Luxury', 'Condos'], monthlyDeals: 12, monthlyEarnings: 485000, performanceScore: 94, clientSatisfaction: 97, responseTime: '18m' },
  { id: 2, name: 'Lisa Anderson', initials: 'LA', specializations: ['Houses', 'Investment'], monthlyDeals: 9, monthlyEarnings: 342000, performanceScore: 89, clientSatisfaction: 95, responseTime: '25m' },
  { id: 3, name: 'James Thompson', initials: 'JT', specializations: ['Commercial', 'Land'], monthlyDeals: 15, monthlyEarnings: 567000, performanceScore: 96, clientSatisfaction: 98, responseTime: '15m' },
  { id: 4, name: 'Sarah Kim', initials: 'SK', specializations: ['Rental', 'Student Housing'], monthlyDeals: 8, monthlyEarnings: 289000, performanceScore: 85, clientSatisfaction: 92, responseTime: '32m' },
  { id: 5, name: 'David Wilson', initials: 'DW', specializations: ['Luxury', 'Investment'], monthlyDeals: 11, monthlyEarnings: 412000, performanceScore: 91, clientSatisfaction: 94, responseTime: '28m' }
])

const recentAgencyActivity = ref([
  { id: 1, type: 'deal', title: 'High-Value Deal Closed', description: 'Luxury penthouse sold by Michael Chen', agent: 'Michael Chen', time: '2h ago', value: 12500000 },
  { id: 2, type: 'client', title: 'VIP Client Onboarded', description: 'Premium client assigned to Lisa Anderson', agent: 'Lisa Anderson', time: '4h ago', value: null },
  { id: 3, type: 'agent', title: 'Performance Milestone', description: 'James Thompson reached monthly target', agent: 'James Thompson', time: '6h ago', value: null },
  { id: 4, type: 'deal', title: 'Commercial Property Sold', description: 'Office building transaction completed', agent: 'James Thompson', time: '1d ago', value: 8900000 }
])

const monthlyGoals = ref([
  { id: 1, name: 'Monthly Deals', current: 67, target: 75, percentage: 89 },
  { id: 2, name: 'Revenue Target', current: 2850000, target: 3000000, percentage: 95 },
  { id: 3, name: 'New Clients', current: 67, target: 80, percentage: 84 },
  { id: 4, name: 'Client Satisfaction', current: 96, target: 95, percentage: 100 }
])

const leadsList = ref([
  { id: 1, name: 'Jennifer Walsh', initials: 'JW', email: 'jen@email.com', phone: '+66 81 234 5678', source: 'Website', propertyType: 'Condo', budget: '฿5-8M', priority: 'Hot', assignedAgent: 'Michael', lastContact: '2h ago' },
  { id: 2, name: 'Robert Taylor', initials: 'RT', email: 'rob@email.com', phone: '+66 82 345 6789', source: 'Referral', propertyType: 'House', budget: '฿12-15M', priority: 'Warm', assignedAgent: 'Lisa', lastContact: '1d ago' },
  { id: 3, name: 'Anna Schmidt', initials: 'AS', email: 'anna@email.com', phone: '+66 83 456 7890', source: 'Social Media', propertyType: 'Investment', budget: '฿20M+', priority: 'Hot', assignedAgent: 'James', lastContact: '4h ago' }
])

const clientsList = ref([
  { id: 1, name: 'William Chen', initials: 'WC', email: 'william@email.com', phone: '+66 81 111 2222', propertyType: 'Luxury Condos', tier: 'VIP', assignedAgent: 'Michael', totalValue: 25000000, clientSince: '2022', lastContact: '1w ago' },
  { id: 2, name: 'Sophie Martinez', initials: 'SM', email: 'sophie@email.com', phone: '+66 82 222 3333', propertyType: 'Investment Properties', tier: 'Premium', assignedAgent: 'Lisa', totalValue: 8500000, clientSince: '2023', lastContact: '3d ago' },
  { id: 3, name: 'Thomas Johnson', initials: 'TJ', email: 'thomas@email.com', phone: '+66 83 333 4444', propertyType: 'Commercial', tier: 'VIP', assignedAgent: 'James', totalValue: 45000000, clientSince: '2021', lastContact: '2d ago' }
])

const propertiesList = ref([
  { id: 1, title: 'Luxury Penthouse Sukhumvit', address: 'Sukhumvit 24, Bangkok', type: 'Condo', bedrooms: 4, bathrooms: 5, sqft: 3200, price: 15000000, status: 'Active', assignedAgent: 'Michael', daysOnMarket: 28 },
  { id: 2, title: 'Modern Townhouse Thonglor', address: 'Thonglor 15, Bangkok', type: 'House', bedrooms: 3, bathrooms: 4, sqft: 2800, price: 12500000, status: 'Pending', assignedAgent: 'Lisa', daysOnMarket: 45 },
  { id: 3, title: 'Investment Condo Asoke', address: 'Asoke Road, Bangkok', type: 'Condo', bedrooms: 2, bathrooms: 2, sqft: 1200, price: 6800000, status: 'Active', assignedAgent: 'Sarah', daysOnMarket: 15 }
])

const hotNeighborhoods = ref([
  { id: 1, name: 'Sukhumvit', growth: 12.5 },
  { id: 2, name: 'Thonglor', growth: 10.8 },
  { id: 3, name: 'Sathorn', growth: 9.2 },
  { id: 4, name: 'Silom', growth: 8.7 }
])

const competitorsList = ref([
  { id: 1, name: 'ThaiKeys Agency', initials: 'TKA', marketShare: 8.5, agentCount: 22, responseTime: '23m', rating: 4.8, threat: 'Low' },
  { id: 2, name: 'Bangkok Premium Properties', initials: 'BPP', marketShare: 6.2, agentCount: 35, responseTime: '45m', rating: 4.2, threat: 'Medium' },
  { id: 3, name: 'Elite Real Estate', initials: 'ERE', marketShare: 5.8, agentCount: 28, responseTime: '52m', rating: 4.0, threat: 'Low' },
  { id: 4, name: 'Siam Properties', initials: 'SP', marketShare: 4.1, agentCount: 18, responseTime: '67m', rating: 3.8, threat: 'Low' }
])

const agencySettings = ref({
  name: 'ThaiKeys Agency',
  email: 'contact@thaikeys-agency.com',
  phone: '+66 2 123 4567',
  address: '123 Sukhumvit Road, Watthana, Bangkok 10110',
  autoAssignLeads: true,
  enableNotifications: true,
  publicProfile: true,
  commissionRate: 3.0,
  businessHours: '9:00 AM - 6:00 PM'
})

// Chart Options
const agencyRevenueOption = ref({
  tooltip: { trigger: 'axis' },
  xAxis: { type: 'category', data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'] },
  yAxis: { type: 'value', axisLabel: { formatter: '฿{value}M' }},
  series: [{
    type: 'line',
    data: [1.8, 2.1, 2.4, 2.6, 2.7, 2.85],
    smooth: true,
    areaStyle: { color: { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: 'rgba(16, 185, 129, 0.3)' }, { offset: 1, color: 'rgba(16, 185, 129, 0.1)' }] }},
    itemStyle: { color: '#10B981' }
  }]
})

const competitorComparisonOption = ref({
  tooltip: { trigger: 'axis' },
  legend: { data: ['ThaiKeys Agency', 'Top Competitor', 'Market Average'] },
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
      { value: [65, 70, 75, 68, 25], name: 'Market Average', itemStyle: { color: '#6B7280' }}
    ]
  }]
})

const dealPipelineOption = ref({
  tooltip: { trigger: 'item', formatter: '{a} <br/>{b} : {c} deals' },
  series: [{
    name: 'Deal Pipeline',
    type: 'funnel',
    left: '10%', width: '80%', maxSize: '80%',
    data: [
      { value: 342, name: 'Total Leads' },
      { value: 168, name: 'Qualified Leads' },
      { value: 89, name: 'Proposals Sent' },
      { value: 45, name: 'Under Negotiation' },
      { value: 24, name: 'Deals Closed' }
    ],
    itemStyle: { borderColor: '#fff', borderWidth: 1 }
  }]
})

const topAgentsOption = ref({
  tooltip: { trigger: 'axis' },
  xAxis: { type: 'category', data: ['Michael', 'James', 'David', 'Lisa', 'Sarah'] },
  yAxis: { type: 'value' },
  series: [{
    name: 'Monthly Deals',
    type: 'bar',
    data: [12, 15, 11, 9, 8],
    itemStyle: { color: { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: '#10B981' }, { offset: 1, color: '#34D399' }] }}
  }]
})

const agentPerformanceMatrixOption = ref({
  tooltip: { trigger: 'item' },
  xAxis: { type: 'value', name: 'Client Satisfaction %' },
  yAxis: { type: 'value', name: 'Monthly Deals' },
  series: [{
    symbolSize: function (data) { return Math.sqrt(data[2]) / 100 },
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

const agentRankingsOption = ref({
  tooltip: { trigger: 'axis' },
  legend: { data: ['Deals', 'Revenue', 'Satisfaction'] },
  xAxis: { type: 'category', data: ['Michael', 'James', 'David', 'Lisa', 'Sarah'] },
  yAxis: { type: 'value' },
  series: [
    { name: 'Deals', type: 'bar', data: [12, 15, 11, 9, 8], itemStyle: { color: '#3B82F6' }},
    { name: 'Revenue', type: 'bar', data: [485, 567, 412, 342, 289], itemStyle: { color: '#10B981' }},
    { name: 'Satisfaction', type: 'bar', data: [97, 98, 94, 95, 92], itemStyle: { color: '#8B5CF6' }}
  ]
})

// Additional chart options for other tabs...
const monthlyTrendsOption = ref({
  tooltip: { trigger: 'axis' },
  legend: { data: ['Deals Closed', 'Revenue', 'Client Satisfaction'] },
  xAxis: { type: 'category', data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'] },
  yAxis: { type: 'value' },
  series: [
    { name: 'Deals Closed', type: 'line', data: [45, 52, 48, 61, 55, 67], itemStyle: { color: '#10B981' }},
    { name: 'Revenue', type: 'line', data: [1.8, 2.1, 1.9, 2.4, 2.2, 2.85], itemStyle: { color: '#3B82F6' }},
    { name: 'Client Satisfaction', type: 'line', data: [94, 95, 93, 97, 96, 96], itemStyle: { color: '#8B5CF6' }}
  ]
})

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
  tooltip: { trigger: 'axis' },
  legend: { data: ['Revenue', 'Costs', 'Profit'] },
  xAxis: { type: 'category', data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'] },
  yAxis: { type: 'value', axisLabel: { formatter: '฿{value}K' }},
  series: [
    { name: 'Revenue', type: 'bar', data: [1800, 2100, 1900, 2400, 2200, 2850], itemStyle: { color: '#10B981' }},
    { name: 'Costs', type: 'bar', data: [720, 840, 760, 960, 880, 912], itemStyle: { color: '#EF4444' }},
    { name: 'Profit', type: 'line', data: [1080, 1260, 1140, 1440, 1320, 1938], itemStyle: { color: '#F59E0B' }}
  ]
})

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
    isActive ? 'bg-green-500 text-white' : 'text-brand-navy dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700'
  ]
}

// Action methods
const viewAgentDetails = (agent) => console.log('View agent:', agent.name)
const editAgent = (agent) => console.log('Edit agent:', agent.name)
const viewLeadDetails = (lead) => console.log('View lead:', lead.name)
const contactLead = (lead) => console.log('Contact lead:', lead.name)
const viewClientDetails = (client) => console.log('View client:', client.name)
const contactClient = (client) => console.log('Contact client:', client.name)
const viewPropertyDetails = (property) => console.log('View property:', property.title)
const editProperty = (property) => console.log('Edit property:', property.title)

// Handle window resize
const handleResize = () => {
  const charts = [
    agencyRevenueChart, competitorComparisonChart, dealPipelineChart, topAgentsChart,
    agentPerformanceChart, agentRankingsChart, monthlyTrendsChart, revenueBreakdownChart, profitLossChart
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




