<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 font-sans transition-colors duration-300">

    <!-- Developer Info Bar -->
    <div class="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-4 transition-colors duration-300">
      <div class="flex items-center justify-between mx-auto">
        <!-- Developer Info -->
        <div class="flex items-center space-x-6">
          <div class="flex items-center space-x-3">
            <div class="w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-800 dark:to-purple-600 rounded-full flex items-center justify-center">
              <svg class="w-6 h-6 text-purple-600 dark:text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
              </svg>
            </div>
          </div>
          
          <div class="text-sm text-brand-navy dark:text-gray-400">
            <span class="font-medium">Welcome back, Bangkok Heights Development</span>
            <div class="text-xs text-gray-500 flex items-center space-x-2">
              <span>Property Developer</span>
              <span class="bg-purple-100 dark:bg-purple-900/20 text-purple-800 dark:text-purple-400 px-2 py-0.5 rounded text-xs font-semibold">
                Verified Developer
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
              placeholder="Search projects, units, agents..."
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
      <!-- Developer Sidebar Navigation -->
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
                     activeTab === 'projects' ? 'bg-brand-turqoise-light text-brand-navy border border-teal-200' : 'text-brand-navy dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700']"
            @click="activeTab = 'projects'"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
            </svg>
            <span class="font-medium">Projects</span>
            <span class="bg-brand-turqoise-light/20 text-brand-navy dark:text-brand-turqoise-light text-xs font-semibold px-2 py-1 rounded-full ml-auto">{{ activeProjects }}</span>
          </a>
          
          <a 
            href="#" 
            :class="['flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors', 
                     activeTab === 'units' ? 'bg-brand-turqoise-light text-brand-navy border border-teal-200' : 'text-brand-navy dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700']"
            @click="activeTab = 'units'"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"/>
            </svg>
            <span class="font-medium">Inventory</span>
            <span class="bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-400 text-xs font-semibold px-2 py-1 rounded-full ml-auto">{{ availableUnits }}</span>
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
            <span class="font-medium">Pre-Sales</span>
            <span class="bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-400 text-xs font-semibold px-2 py-1 rounded-full ml-auto">{{ activeSales }}</span>
          </a>
          
          <a 
            href="#" 
            :class="['flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors', 
                     activeTab === 'agents' ? 'bg-brand-turqoise-light text-brand-navy border border-teal-200' : 'text-brand-navy dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700']"
            @click="activeTab = 'agents'"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
            </svg>
            <span class="font-medium">Featured Agents</span>
            <span class="bg-purple-100 dark:bg-purple-900/20 text-purple-800 dark:text-purple-400 text-xs font-semibold px-2 py-1 rounded-full ml-auto">{{ featuredAgents }}</span>
          </a>
          
          <a 
            href="#" 
            :class="['flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors', 
                     activeTab === 'construction' ? 'bg-brand-turqoise-light text-brand-navy border border-teal-200' : 'text-brand-navy dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700']"
            @click="activeTab = 'construction'"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
            <span class="font-medium">Construction</span>
            <span v-if="pendingMilestones > 0" class="bg-orange-100 dark:bg-orange-900/20 text-orange-800 dark:text-orange-400 text-xs font-semibold px-2 py-1 rounded-full ml-auto">{{ pendingMilestones }}</span>
          </a>
          
          <a 
            href="#" 
            :class="['flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors', 
                     activeTab === 'reports' ? 'bg-brand-turqoise-light text-brand-navy border border-teal-200' : 'text-brand-navy dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700']"
            @click="activeTab = 'reports'"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
            </svg>
            <span class="font-medium">Safety Reports</span>
            <span class="bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-400 text-xs font-semibold px-2 py-1 rounded-full ml-auto">{{ totalReports }}</span>
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
          <!-- Project Portfolio Summary Cards -->
          <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 transition-colors duration-300">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm font-medium text-brand-navy dark:text-gray-400">Active Projects</p>
                  <p class="text-3xl font-bold text-brand-navy dark:text-white">{{ activeProjects }}</p>
                  <p class="text-sm text-purple-600 dark:text-purple-400 mt-2">{{ totalUnits }} total units</p>
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
                  <p class="text-sm font-medium text-brand-navy dark:text-gray-400">Pre-Sales Revenue</p>
                  <p class="text-3xl font-bold text-brand-navy dark:text-white">{{ formatCurrency(preSalesRevenue) }}</p>
                  <p class="text-sm text-green-600 dark:text-green-400 mt-2">{{ soldUnits }} units sold</p>
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
                  <p class="text-sm font-medium text-brand-navy dark:text-gray-400">Construction Progress</p>
                  <p class="text-3xl font-bold text-brand-navy dark:text-white">{{ averageProgress }}%</p>
                  <p class="text-sm text-blue-600 dark:text-blue-400 mt-2">{{ onScheduleProjects }} on schedule</p>
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
                  <p class="text-sm font-medium text-brand-navy dark:text-gray-400">Featured Agents</p>
                  <p class="text-3xl font-bold text-brand-navy dark:text-white">{{ featuredAgents }}</p>
                  <p class="text-sm text-orange-600 dark:text-orange-400 mt-2">{{ agentSales }} agent sales</p>
                </div>
                <div class="w-12 h-12 bg-orange-100 dark:bg-orange-900/20 rounded-xl flex items-center justify-center">
                  <svg class="w-6 h-6 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <!-- Active Projects & Construction Timeline -->
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <!-- Quick Actions -->
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 transition-colors duration-300">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Quick Actions</h3>
              <div class="space-y-3">
                <button class="w-full bg-brand-turqoise-light text-brand-navy py-3 px-4 rounded-lg font-semibold hover:bg-teal-300 transition-colors flex items-center justify-center space-x-2">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                  </svg>
                  <span>Launch New Project</span>
                </button>
                
                <button class="w-full border-2 border-gray-200 dark:border-gray-600 text-brand-navy dark:text-gray-300 py-3 px-4 rounded-lg font-semibold hover:border-gray-300 dark:hover:border-gray-500 transition-colors flex items-center justify-center space-x-2">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                  </svg>
                  <span>Add Featured Agent</span>
                </button>
                
                <button class="w-full border-2 border-gray-200 dark:border-gray-600 text-brand-navy dark:text-gray-300 py-3 px-4 rounded-lg font-semibold hover:border-gray-300 dark:hover:border-gray-500 transition-colors flex items-center justify-center space-x-2">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"/>
                  </svg>
                  <span>Upload Safety Report</span>
                </button>
                
                <button class="w-full border-2 border-gray-200 dark:border-gray-600 text-brand-navy dark:text-gray-300 py-3 px-4 rounded-lg font-semibold hover:border-gray-300 dark:hover:border-gray-500 transition-colors flex items-center justify-center space-x-2">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <span>Update Milestone</span>
                </button>
              </div>
            </div>

            <!-- Project Timeline & Milestones -->
            <div class="lg:col-span-2 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 transition-colors duration-300">
              <div class="flex items-center justify-between mb-4">
                <h3 class="text-lg font-semibold text-brand-navy dark:text-white">Active Project Timelines</h3>
                <button class="text-brand-turqoise-light hover:text-teal-500 font-medium text-sm">View All Projects</button>
              </div>
              
              <div class="space-y-6">
                <div v-for="project in activeProjectsList" :key="project.id" class="border border-gray-200 dark:border-gray-600 rounded-xl p-4">
                  <!-- Project Header -->
                  <div class="flex items-center justify-between mb-4">
                    <div>
                      <h4 class="font-semibold text-brand-navy dark:text-white">{{ project.name }}</h4>
                      <p class="text-sm text-gray-500">{{ project.location }} • {{ project.totalUnits }} units</p>
                    </div>
                    <div class="text-right">
                      <span :class="['px-3 py-1 rounded-full text-xs font-semibold',
                                   project.status === 'On Schedule' ? 'bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-400' :
                                   project.status === 'Delayed' ? 'bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-400' :
                                   'bg-yellow-100 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-400']">
                        {{ project.status }}
                      </span>
                      <p class="text-xs text-gray-500 mt-1">{{ project.completionProgress }}% complete</p>
                    </div>
                  </div>

                  <!-- Progress Bar -->
                  <div class="mb-4">
                    <div class="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                      <div class="bg-brand-turqoise-light h-2 rounded-full transition-all duration-300" :style="`width: ${project.completionProgress}%`"></div>
                    </div>
                  </div>

                  <!-- Milestone Timeline -->
                  <div class="grid grid-cols-4 gap-2 text-xs">
                    <div class="text-center">
                      <div :class="['w-6 h-6 rounded-full mx-auto mb-1 flex items-center justify-center',
                                  project.completionProgress >= 25 ? 'bg-green-500' : 'bg-gray-300']">
                        <svg v-if="project.completionProgress >= 25" class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                        </svg>
                      </div>
                      <p class="text-brand-navy dark:text-white font-medium">Foundation</p>
                      <p class="text-gray-500">{{ project.foundationDate }}</p>
                    </div>
                    <div class="text-center">
                      <div :class="['w-6 h-6 rounded-full mx-auto mb-1 flex items-center justify-center',
                                  project.completionProgress >= 50 ? 'bg-green-500' : 'bg-gray-300']">
                        <svg v-if="project.completionProgress >= 50" class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                        </svg>
                      </div>
                      <p class="text-brand-navy dark:text-white font-medium">Structure</p>
                      <p class="text-gray-500">{{ project.structureDate }}</p>
                    </div>
                    <div class="text-center">
                      <div :class="['w-6 h-6 rounded-full mx-auto mb-1 flex items-center justify-center',
                                  project.completionProgress >= 75 ? 'bg-green-500' : 'bg-gray-300']">
                        <svg v-if="project.completionProgress >= 75" class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                        </svg>
                      </div>
                      <p class="text-brand-navy dark:text-white font-medium">Finishing</p>
                      <p class="text-gray-500">{{ project.finishingDate }}</p>
                    </div>
                    <div class="text-center">
                      <div :class="['w-6 h-6 rounded-full mx-auto mb-1 flex items-center justify-center',
                                  project.completionProgress >= 100 ? 'bg-green-500' : 'bg-gray-300']">
                        <svg v-if="project.completionProgress >= 100" class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                        </svg>
                      </div>
                      <p class="text-brand-navy dark:text-white font-medium">Handover</p>
                      <p class="text-gray-500">{{ project.handoverDate }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Projects Tab -->
        <div v-if="activeTab === 'projects'" class="p-6">
          <div class="flex items-center justify-between mb-6">
            <h2 class="text-2xl font-bold text-brand-navy dark:text-white">Development Projects</h2>
            <div class="flex items-center space-x-4">
              <select class="border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-brand-navy dark:text-white rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-turqoise-light">
                <option>All Projects</option>
                <option>Active Development</option>
                <option>Pre-Launch</option>
                <option>Construction</option>
                <option>Completed</option>
              </select>
              <button class="bg-brand-turqoise-light text-brand-navy px-6 py-3 rounded-lg font-semibold hover:bg-teal-300 transition-colors flex items-center space-x-2">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                </svg>
                <span>New Project</span>
              </button>
            </div>
          </div>

          <!-- Project Cards Grid -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div v-for="project in developmentProjects" :key="project.id" class="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden">
              <!-- Project Image -->
              <div class="h-48 bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-800 dark:to-purple-600 relative">
                <div class="absolute top-4 left-4">
                  <span :class="['px-3 py-1 rounded-full text-xs font-semibold',
                               project.phase === 'Pre-Launch' ? 'bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-400' :
                               project.phase === 'Construction' ? 'bg-orange-100 dark:bg-orange-900/20 text-orange-800 dark:text-orange-400' :
                               project.phase === 'Sales Launch' ? 'bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-400' :
                               'bg-purple-100 dark:bg-purple-900/20 text-purple-800 dark:text-purple-400']">
                    {{ project.phase }}
                  </span>
                </div>
                <div class="absolute bottom-4 left-4">
                  <span class="bg-brand-turqoise-light text-brand-navy px-3 py-1 rounded-full text-xs font-semibold">
                    {{ project.projectType }}
                  </span>
                </div>
                <div class="absolute top-4 right-4">
                  <span :class="['px-2 py-1 rounded text-xs font-semibold',
                               project.status === 'On Schedule' ? 'bg-green-500 text-white' :
                               project.status === 'Delayed' ? 'bg-red-500 text-white' :
                               'bg-yellow-500 text-white']">
                    {{ project.status }}
                  </span>
                </div>
              </div>

              <!-- Project Details -->
              <div class="p-6">
                <div class="flex items-center justify-between mb-3">
                  <h3 class="font-bold text-xl text-brand-navy dark:text-white">{{ project.name }}</h3>
                  <div class="text-right">
                    <span class="text-lg font-bold text-brand-navy dark:text-white">{{ project.completionProgress }}%</span>
                    <p class="text-xs text-gray-500">Complete</p>
                  </div>
                </div>
                
                <p class="text-sm text-brand-navy dark:text-gray-400 mb-4 flex items-center">
                  <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  {{ project.location }}
                </p>

                <!-- Project Stats -->
                <div class="grid grid-cols-3 gap-4 mb-4 py-3 border-t border-gray-100 dark:border-gray-600">
                  <div class="text-center">
                    <div class="text-lg font-bold text-brand-navy dark:text-white">{{ project.totalUnits }}</div>
                    <div class="text-xs text-brand-navy dark:text-gray-400">Total Units</div>
                  </div>
                  <div class="text-center">
                    <div class="text-lg font-bold text-green-600">{{ project.soldUnits }}</div>
                    <div class="text-xs text-brand-navy dark:text-gray-400">Sold</div>
                  </div>
                  <div class="text-center">
                    <div class="text-lg font-bold text-blue-600">{{ project.reservedUnits }}</div>
                    <div class="text-xs text-brand-navy dark:text-gray-400">Reserved</div>
                  </div>
                </div>

                <!-- Sales Performance -->
                <div class="mb-4">
                  <div class="flex justify-between items-center mb-2">
                    <span class="text-sm font-medium text-brand-navy dark:text-white">Sales Progress</span>
                    <span class="text-sm text-brand-navy dark:text-gray-400">{{ project.salesRate }}%</span>
                  </div>
                  <div class="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                    <div class="bg-green-500 h-2 rounded-full transition-all duration-300" :style="`width: ${project.salesRate}%`"></div>
                  </div>
                </div>

                <!-- Key Dates -->
                <div class="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div>
                    <span class="text-gray-500">Launch Date:</span>
                    <p class="font-medium text-brand-navy dark:text-white">{{ project.launchDate }}</p>
                  </div>
                  <div>
                    <span class="text-gray-500">Completion:</span>
                    <p class="font-medium text-brand-navy dark:text-white">{{ project.completionDate }}</p>
                  </div>
                </div>

                <!-- Project Value -->
                <div class="bg-gray-50 dark:bg-gray-700 rounded-lg p-3 mb-4">
                  <div class="flex justify-between items-center">
                    <span class="text-sm font-medium text-brand-navy dark:text-white">Total Project Value</span>
                    <span class="text-lg font-bold text-brand-navy dark:text-white">{{ formatCurrency(project.totalValue) }}</span>
                  </div>
                  <div class="flex justify-between items-center mt-1">
                    <span class="text-xs text-gray-500">Sales to Date</span>
                    <span class="text-sm font-medium text-green-600">{{ formatCurrency(project.salesValue) }}</span>
                  </div>
                </div>

                <!-- Featured Agents -->
                <div class="mb-4">
                  <div class="flex items-center justify-between mb-2">
                    <span class="text-sm font-medium text-brand-navy dark:text-white">Featured Agents</span>
                    <span class="text-xs text-brand-turqoise-light hover:text-teal-500 cursor-pointer">Manage</span>
                  </div>
                  <div class="flex -space-x-2">
                    <div v-for="agent in project.featuredAgents.slice(0, 4)" :key="agent.id" class="w-8 h-8 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-800 dark:to-blue-600 rounded-full border-2 border-white dark:border-gray-800 flex items-center justify-center">
                      <span class="text-xs font-semibold text-blue-800 dark:text-blue-200">{{ agent.initials }}</span>
                    </div>
                    <div v-if="project.featuredAgents.length > 4" class="w-8 h-8 bg-gray-200 dark:bg-gray-600 rounded-full border-2 border-white dark:border-gray-800 flex items-center justify-center">
                      <span class="text-xs font-semibold text-gray-600 dark:text-gray-300">+{{ project.featuredAgents.length - 4 }}</span>
                    </div>
                  </div>
                </div>

                <!-- Action Buttons -->
                <div class="flex items-center space-x-2">
                  <button class="flex-1 bg-brand-turqoise-light text-brand-navy py-2 px-4 rounded-lg font-semibold hover:bg-teal-300 transition-colors text-sm">
                    Manage Project
                  </button>
                  <button class="flex-1 border border-gray-300 dark:border-gray-600 text-brand-navy dark:text-gray-300 py-2 px-4 rounded-lg font-semibold hover:border-gray-400 dark:hover:border-gray-500 transition-colors text-sm">
                    View Analytics
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Units & Inventory Tab -->
        <div v-if="activeTab === 'units'" class="p-6">
          <div class="flex items-center justify-between mb-6">
            <h2 class="text-2xl font-bold text-brand-navy dark:text-white">Unit Inventory Management</h2>
            <div class="flex items-center space-x-4">
              <select class="border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-brand-navy dark:text-white rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-turqoise-light">
                <option>All Units</option>
                <option>Available</option>
                <option>Reserved</option>
                <option>Sold</option>
                <option>On Hold</option>
              </select>
              <select class="border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-brand-navy dark:text-white rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-turqoise-light">
                <option>All Projects</option>
                <option v-for="project in developmentProjects" :key="project.id">{{ project.name }}</option>
              </select>
              <button class="bg-brand-turqoise-light text-brand-navy px-6 py-3 rounded-lg font-semibold hover:bg-teal-300 transition-colors flex items-center space-x-2">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                </svg>
                <span>Add Unit Type</span>
              </button>
            </div>
          </div>

          <!-- Unit Type Categories -->
          <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div v-for="unitType in unitTypeStats" :key="unitType.type" class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <div class="flex items-center justify-between mb-4">
                <h3 class="font-semibold text-brand-navy dark:text-white">{{ unitType.type }}</h3>
                <span :class="['px-2 py-1 rounded text-xs font-semibold',
                             unitType.availability > 70 ? 'bg-green-100 text-green-800' :
                             unitType.availability > 30 ? 'bg-yellow-100 text-yellow-800' :
                             'bg-red-100 text-red-800']">
                  {{ unitType.availability }}% Available
                </span>
              </div>
              <div class="space-y-2">
                <div class="flex justify-between">
                  <span class="text-sm text-gray-500">Total Units:</span>
                  <span class="font-medium text-brand-navy dark:text-white">{{ unitType.total }}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-sm text-gray-500">Available:</span>
                  <span class="font-medium text-green-600">{{ unitType.available }}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-sm text-gray-500">Sold:</span>
                  <span class="font-medium text-blue-600">{{ unitType.sold }}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-sm text-gray-500">Avg Price:</span>
                  <span class="font-medium text-brand-navy dark:text-white">{{ formatCurrency(unitType.avgPrice) }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Unit Inventory Table -->
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
            <div class="p-6 border-b border-gray-100 dark:border-gray-600">
              <div class="flex items-center justify-between">
                <h3 class="text-lg font-semibold text-brand-navy dark:text-white">Unit Inventory</h3>
                <div class="flex items-center space-x-4">
                  <div class="relative">
                    <input 
                      v-model="unitSearchQuery"
                      type="text" 
                      placeholder="Search units..."
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
                <div>Unit</div>
                <div>Project</div>
                <div>Type</div>
                <div>Floor</div>
                <div>Size</div>
                <div>Price</div>
                <div>Status</div>
                <div>Actions</div>
              </div>
              
              <div class="space-y-3">
                <div v-for="unit in unitInventory" :key="unit.id" class="grid grid-cols-8 gap-4 items-center p-4 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-xl transition-colors">
                  <!-- Unit Number -->
                  <div>
                    <div class="font-semibold text-brand-navy dark:text-white">{{ unit.unitNumber }}</div>
                    <div class="text-xs text-gray-500">Building {{ unit.building }}</div>
                  </div>
                  
                  <!-- Project -->
                  <div>
                    <div class="text-sm text-brand-navy dark:text-white">{{ unit.projectName }}</div>
                    <div class="text-xs text-gray-500">{{ unit.projectPhase }}</div>
                  </div>
                  
                  <!-- Unit Type -->
                  <div>
                    <span class="bg-purple-100 dark:bg-purple-900/20 text-purple-800 dark:text-purple-400 px-2 py-1 rounded text-xs font-semibold">
                      {{ unit.unitType }}
                    </span>
                  </div>
                  
                  <!-- Floor -->
                  <div>
                    <div class="text-sm text-brand-navy dark:text-white">{{ unit.floor }}</div>
                    <div class="text-xs text-gray-500">{{ unit.view }}</div>
                  </div>
                  
                  <!-- Size -->
                  <div>
                    <div class="text-sm font-medium text-brand-navy dark:text-white">{{ unit.size }} sqm</div>
                    <div class="text-xs text-gray-500">{{ unit.bedrooms }}BR {{ unit.bathrooms }}BA</div>
                  </div>
                  
                  <!-- Price -->
                  <div>
                    <div class="font-semibold text-brand-navy dark:text-white">{{ formatCurrency(unit.price) }}</div>
                    <div class="text-xs text-gray-500">{{ formatCurrency(unit.pricePerSqm) }}/sqm</div>
                  </div>
                  
                  <!-- Status -->
                  <div>
                    <span :class="['px-2 py-1 text-xs font-semibold rounded-full',
                                 unit.status === 'Available' ? 'bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-400' :
                                 unit.status === 'Reserved' ? 'bg-yellow-100 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-400' :
                                 unit.status === 'Sold' ? 'bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-400' :
                                 'bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-400']">
                      {{ unit.status }}
                    </span>
                    <div v-if="unit.reservedDate" class="text-xs text-gray-500 mt-1">{{ unit.reservedDate }}</div>
                  </div>
                  
                  <!-- Actions -->
                  <div class="flex items-center space-x-2">
                    <button class="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 p-1" title="View Details">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                      </svg>
                    </button>
                    <button class="text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 p-1" title="Edit Unit">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
                      </svg>
                    </button>
                    <button class="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 p-1" title="Floor Plan">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Pre-Sales Tab -->
        <div v-if="activeTab === 'sales'" class="p-6">
          <div class="flex items-center justify-between mb-6">
            <h2 class="text-2xl font-bold text-brand-navy dark:text-white">Pre-Sales Management</h2>
            <div class="flex items-center space-x-4">
              <select class="border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-brand-navy dark:text-white rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-turqoise-light">
                <option>All Leads</option>
                <option>New Inquiries</option>
                <option>Qualified Leads</option>
                <option>Viewing Scheduled</option>
                <option>Under Negotiation</option>
                <option>Closed Won</option>
              </select>
              <button class="bg-brand-turqoise-light text-brand-navy px-6 py-3 rounded-lg font-semibold hover:bg-teal-300 transition-colors flex items-center space-x-2">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                </svg>
                <span>Add Lead</span>
              </button>
            </div>
          </div>

          <!-- Sales Pipeline Overview -->
          <div class="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
            <div v-for="stage in salesPipelineStages" :key="stage.name" class="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg border border-gray-100 dark:border-gray-700">
              <div class="text-center">
                <h3 class="font-semibold text-brand-navy dark:text-white mb-2">{{ stage.name }}</h3>
                <div class="text-2xl font-bold mb-1" :class="stage.color">{{ stage.count }}</div>
                <div class="text-xs text-gray-500">{{ formatCurrency(stage.value) }}</div>
                <div class="mt-2">
                  <div class="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-1">
                    <div :class="stage.bgColor" class="h-1 rounded-full transition-all duration-300" :style="`width: ${stage.conversionRate}%`"></div>
                  </div>
                  <p class="text-xs text-gray-500 mt-1">{{ stage.conversionRate }}% conversion</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Sales Pipeline Kanban Board -->
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 p-6">
            <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-6">Sales Pipeline</h3>
            
            <div class="grid grid-cols-1 lg:grid-cols-5 gap-6">
              <!-- New Inquiries -->
              <div class="space-y-4">
                <div class="flex items-center justify-between">
                  <h4 class="font-medium text-brand-navy dark:text-white">New Inquiries</h4>
                  <span class="bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-400 px-2 py-1 rounded text-xs font-semibold">{{ newInquiries.length }}</span>
                </div>
                <div class="space-y-3">
                  <div v-for="lead in newInquiries" :key="lead.id" class="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg border-l-4 border-blue-500 cursor-pointer hover:shadow-md transition-shadow">
                    <div class="flex items-center justify-between mb-2">
                      <h5 class="font-semibold text-brand-navy dark:text-white text-sm">{{ lead.clientName }}</h5>
                      <span class="text-xs text-gray-500">{{ lead.timeAgo }}</span>
                    </div>
                    <p class="text-xs text-gray-600 dark:text-gray-400 mb-2">{{ lead.projectInterest }}</p>
                    <p class="text-xs text-gray-600 dark:text-gray-400 mb-2">{{ lead.unitType }} • {{ formatCurrency(lead.budget) }}</p>
                    <div class="flex items-center justify-between">
                      <span class="text-xs bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-400 px-2 py-1 rounded">{{ lead.source }}</span>
                      <button class="text-blue-600 hover:text-blue-700 text-xs font-medium">Qualify</button>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Qualified Leads -->
              <div class="space-y-4">
                <div class="flex items-center justify-between">
                  <h4 class="font-medium text-brand-navy dark:text-white">Qualified</h4>
                  <span class="bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-400 px-2 py-1 rounded text-xs font-semibold">{{ qualifiedLeads.length }}</span>
                </div>
                <div class="space-y-3">
                  <div v-for="lead in qualifiedLeads" :key="lead.id" class="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg border-l-4 border-green-500 cursor-pointer hover:shadow-md transition-shadow">
                    <div class="flex items-center justify-between mb-2">
                      <h5 class="font-semibold text-brand-navy dark:text-white text-sm">{{ lead.clientName }}</h5>
                      <span class="text-xs text-gray-500">{{ lead.timeAgo }}</span>
                    </div>
                    <p class="text-xs text-gray-600 dark:text-gray-400 mb-2">{{ lead.projectInterest }}</p>
                    <p class="text-xs text-gray-600 dark:text-gray-400 mb-2">{{ lead.unitType }} • {{ formatCurrency(lead.budget) }}</p>
                    <div class="flex items-center justify-between">
                      <span class="text-xs font-medium text-brand-navy dark:text-white">{{ lead.assignedAgent }}</span>
                      <button class="text-green-600 hover:text-green-700 text-xs font-medium">Schedule</button>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Viewing Scheduled -->
              <div class="space-y-4">
                <div class="flex items-center justify-between">
                  <h4 class="font-medium text-brand-navy dark:text-white">Viewing Scheduled</h4>
                  <span class="bg-orange-100 dark:bg-orange-900/20 text-orange-800 dark:text-orange-400 px-2 py-1 rounded text-xs font-semibold">{{ scheduledViewings.length }}</span>
                </div>
                <div class="space-y-3">
                  <div v-for="lead in scheduledViewings" :key="lead.id" class="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg border-l-4 border-orange-500 cursor-pointer hover:shadow-md transition-shadow">
                    <div class="flex items-center justify-between mb-2">
                      <h5 class="font-semibold text-brand-navy dark:text-white text-sm">{{ lead.clientName }}</h5>
                      <span class="text-xs text-gray-500">{{ lead.viewingDate }}</span>
                    </div>
                    <p class="text-xs text-gray-600 dark:text-gray-400 mb-2">{{ lead.projectInterest }}</p>
                    <p class="text-xs text-gray-600 dark:text-gray-400 mb-2">{{ lead.unitType }} • {{ formatCurrency(lead.budget) }}</p>
                    <div class="flex items-center justify-between">
                      <span class="text-xs font-medium text-brand-navy dark:text-white">{{ lead.assignedAgent }}</span>
                      <button class="text-orange-600 hover:text-orange-700 text-xs font-medium">Follow Up</button>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Under Negotiation -->
              <div class="space-y-4">
                <div class="flex items-center justify-between">
                  <h4 class="font-medium text-brand-navy dark:text-white">Negotiation</h4>
                  <span class="bg-purple-100 dark:bg-purple-900/20 text-purple-800 dark:text-purple-400 px-2 py-1 rounded text-xs font-semibold">{{ underNegotiation.length }}</span>
                </div>
                <div class="space-y-3">
                  <div v-for="lead in underNegotiation" :key="lead.id" class="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg border-l-4 border-purple-500 cursor-pointer hover:shadow-md transition-shadow">
                    <div class="flex items-center justify-between mb-2">
                      <h5 class="font-semibold text-brand-navy dark:text-white text-sm">{{ lead.clientName }}</h5>
                      <span class="text-xs text-gray-500">{{ lead.timeAgo }}</span>
                    </div>
                    <p class="text-xs text-gray-600 dark:text-gray-400 mb-2">{{ lead.projectInterest }}</p>
                    <p class="text-xs text-gray-600 dark:text-gray-400 mb-2">Unit {{ lead.specificUnit }} • {{ formatCurrency(lead.offerAmount) }}</p>
                    <div class="flex items-center justify-between">
                      <span class="text-xs font-medium text-brand-navy dark:text-white">{{ lead.assignedAgent }}</span>
                      <button class="text-purple-600 hover:text-purple-700 text-xs font-medium">Close</button>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Closed Won -->
              <div class="space-y-4">
                <div class="flex items-center justify-between">
                  <h4 class="font-medium text-brand-navy dark:text-white">Closed Won</h4>
                  <span class="bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-400 px-2 py-1 rounded text-xs font-semibold">{{ closedWon.length }}</span>
                </div>
                <div class="space-y-3">
                  <div v-for="lead in closedWon" :key="lead.id" class="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg border-l-4 border-green-600 cursor-pointer hover:shadow-md transition-shadow">
                    <div class="flex items-center justify-between mb-2">
                      <h5 class="font-semibold text-brand-navy dark:text-white text-sm">{{ lead.clientName }}</h5>
                      <span class="text-xs text-gray-500">{{ lead.closedDate }}</span>
                    </div>
                    <p class="text-xs text-gray-600 dark:text-gray-400 mb-2">{{ lead.projectInterest }}</p>
                    <p class="text-xs text-gray-600 dark:text-gray-400 mb-2">Unit {{ lead.specificUnit }} • {{ formatCurrency(lead.finalPrice) }}</p>
                    <div class="flex items-center justify-between">
                      <span class="text-xs font-medium text-brand-navy dark:text-white">{{ lead.assignedAgent }}</span>
                      <span class="text-xs bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-400 px-2 py-1 rounded font-medium">SOLD</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Featured Agents Tab -->
        <div v-if="activeTab === 'agents'" class="p-6">
          <div class="flex items-center justify-between mb-6">
            <h2 class="text-2xl font-bold text-brand-navy dark:text-white">Featured Agents Management</h2>
            <div class="flex items-center space-x-4">
              <select class="border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-brand-navy dark:text-white rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-turqoise-light">
                <option>All Agents</option>
                <option>Top Performers</option>
                <option>Active Agents</option>
                <option>By Project</option>
              </select>
              <button class="bg-brand-turqoise-light text-brand-navy px-6 py-3 rounded-lg font-semibold hover:bg-teal-300 transition-colors flex items-center space-x-2">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                </svg>
                <span>Add Featured Agent</span>
              </button>
            </div>
          </div>

          <!-- Agent Performance Overview -->
          <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm font-medium text-brand-navy dark:text-gray-400">Total Featured Agents</p>
                  <p class="text-3xl font-bold text-brand-navy dark:text-white">{{ featuredAgents }}</p>
                  <p class="text-sm text-purple-600 dark:text-purple-400 mt-2">{{ activeAgents }} active</p>
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
                  <p class="text-sm font-medium text-brand-navy dark:text-gray-400">Agent Sales Volume</p>
                  <p class="text-3xl font-bold text-brand-navy dark:text-white">{{ formatCurrency(agentSalesVolume) }}</p>
                  <p class="text-sm text-green-600 dark:text-green-400 mt-2">{{ agentSales }} units sold</p>
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
                  <p class="text-sm font-medium text-brand-navy dark:text-gray-400">Commission Paid</p>
                  <p class="text-3xl font-bold text-brand-navy dark:text-white">{{ formatCurrency(totalCommissions) }}</p>
                  <p class="text-sm text-blue-600 dark:text-blue-400 mt-2">{{ avgCommissionRate }}% avg rate</p>
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
                  <p class="text-sm font-medium text-brand-navy dark:text-gray-400">Top Agent Performance</p>
                  <p class="text-3xl font-bold text-brand-navy dark:text-white">{{ topAgentSales }}</p>
                  <p class="text-sm text-orange-600 dark:text-orange-400 mt-2">units this month</p>
                </div>
                <div class="w-12 h-12 bg-orange-100 dark:bg-orange-900/20 rounded-xl flex items-center justify-center">
                  <svg class="w-6 h-6 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <!-- Featured Agents List -->
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
            <div class="p-6 border-b border-gray-100 dark:border-gray-600">
              <div class="flex items-center justify-between">
                <h3 class="text-lg font-semibold text-brand-navy dark:text-white">Agent Performance Dashboard</h3>
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
              <div class="space-y-6">
                <div v-for="agent in featuredAgentsList" :key="agent.id" class="border border-gray-200 dark:border-gray-600 rounded-xl p-6">
                  <!-- Agent Header -->
                  <div class="flex items-center justify-between mb-6">
                    <div class="flex items-center space-x-4">
                      <div class="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-800 dark:to-purple-600 rounded-full flex items-center justify-center">
                        <span class="text-lg font-bold text-purple-800 dark:text-purple-200">{{ agent.initials }}</span>
                      </div>
                      <div>
                        <h4 class="text-lg font-semibold text-brand-navy dark:text-white">{{ agent.name }}</h4>
                        <p class="text-sm text-gray-500">{{ agent.agency }} • {{ agent.experience }} years experience</p>
                        <div class="flex items-center space-x-2 mt-1">
                          <div class="flex items-center">
                            <svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                            </svg>
                            <span class="text-sm font-medium text-brand-navy dark:text-white ml-1">{{ agent.rating }}</span>
                          </div>
                          <span class="text-sm text-gray-500">({{ agent.reviews }} reviews)</span>
                        </div>
                      </div>
                    </div>
                    <div class="text-right">
                      <span :class="['px-3 py-1 rounded-full text-xs font-semibold',
                                   agent.status === 'Active' ? 'bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-400' :
                                   agent.status === 'Inactive' ? 'bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-400' :
                                   'bg-yellow-100 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-400']">
                        {{ agent.status }}
                      </span>
                      <p class="text-xs text-gray-500 mt-1">Featured since {{ agent.featuredSince }}</p>
                    </div>
                  </div>

                  <!-- Performance Metrics -->
                  <div class="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                    <div class="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <div class="text-2xl font-bold text-brand-navy dark:text-white">{{ agent.unitsSold }}</div>
                      <div class="text-sm text-gray-500">Units Sold</div>
                      <div class="text-xs text-green-600 mt-1">{{ agent.unitsSoldThisMonth }} this month</div>
                    </div>
                    <div class="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <div class="text-2xl font-bold text-brand-navy dark:text-white">{{ formatCurrency(agent.salesValue) }}</div>
                      <div class="text-sm text-gray-500">Sales Value</div>
                      <div class="text-xs text-blue-600 mt-1">{{ agent.conversionRate }}% conversion</div>
                    </div>
                    <div class="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <div class="text-2xl font-bold text-brand-navy dark:text-white">{{ formatCurrency(agent.commissionsEarned) }}</div>
                      <div class="text-sm text-gray-500">Commissions</div>
                      <div class="text-xs text-purple-600 mt-1">{{ agent.commissionRate }}% rate</div>
                    </div>
                    <div class="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <div class="text-2xl font-bold text-brand-navy dark:text-white">{{ agent.activeLead }}</div>
                      <div class="text-sm text-gray-500">Active Leads</div>
                      <div class="text-xs text-orange-600 mt-1">{{ agent.responseTime }}h avg response</div>
                    </div>
                  </div>

                  <!-- Projects Assignment -->
                  <div class="mb-6">
                    <h5 class="font-medium text-brand-navy dark:text-white mb-3">Assigned Projects</h5>
                    <div class="flex flex-wrap gap-2">
                      <span v-for="project in agent.assignedProjects" :key="project" class="bg-purple-100 dark:bg-purple-900/20 text-purple-800 dark:text-purple-400 px-3 py-1 rounded-full text-sm font-medium">
                        {{ project }}
                      </span>
                    </div>
                  </div>

                  <!-- Recent Activity -->
                  <div class="mb-6">
                    <h5 class="font-medium text-brand-navy dark:text-white mb-3">Recent Activity</h5>
                    <div class="space-y-2">
                      <div v-for="activity in agent.recentActivity" :key="activity.id" class="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <div class="flex items-center space-x-3">
                          <div class="w-8 h-8 bg-brand-turqoise-light/20 rounded-full flex items-center justify-center">
                            <svg class="w-4 h-4 text-brand-turqoise-light" fill="currentColor" viewBox="0 0 20 20">
                              <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/>
                            </svg>
                          </div>
                          <div>
                            <p class="text-sm text-brand-navy dark:text-white">{{ activity.action }}</p>
                            <p class="text-xs text-gray-500">{{ activity.details }}</p>
                          </div>
                        </div>
                        <span class="text-xs text-gray-500">{{ activity.timeAgo }}</span>
                      </div>
                    </div>
                  </div>

                  <!-- Action Buttons -->
                  <div class="flex items-center space-x-3">
                    <button class="bg-brand-turqoise-light text-brand-navy px-4 py-2 rounded-lg font-semibold hover:bg-teal-300 transition-colors text-sm">
                      View Performance
                    </button>
                    <button class="border border-gray-300 dark:border-gray-600 text-brand-navy dark:text-gray-300 px-4 py-2 rounded-lg font-semibold hover:border-gray-400 dark:hover:border-gray-500 transition-colors text-sm">
                      Assign Project
                    </button>
                    <button class="border border-gray-300 dark:border-gray-600 text-brand-navy dark:text-gray-300 px-4 py-2 rounded-lg font-semibold hover:border-gray-400 dark:hover:border-gray-500 transition-colors text-sm">
                      Contact Agent
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Construction Tab -->
        <div v-if="activeTab === 'construction'" class="p-6">
          <div class="flex items-center justify-between mb-6">
            <h2 class="text-2xl font-bold text-brand-navy dark:text-white">Construction Management</h2>
            <div class="flex items-center space-x-4">
              <select class="border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-brand-navy dark:text-white rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-turqoise-light">
                <option>All Projects</option>
                <option>Foundation Phase</option>
                <option>Structure Phase</option>
                <option>Finishing Phase</option>
                <option>Delayed Projects</option>
              </select>
              <button class="bg-brand-turqoise-light text-brand-navy px-6 py-3 rounded-lg font-semibold hover:bg-teal-300 transition-colors flex items-center space-x-2">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span>Update Milestone</span>
              </button>
            </div>
          </div>

          <!-- Construction Overview -->
          <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm font-medium text-brand-navy dark:text-gray-400">Projects in Construction</p>
                  <p class="text-3xl font-bold text-brand-navy dark:text-white">{{ projectsInConstruction }}</p>
                  <p class="text-sm text-blue-600 dark:text-blue-400 mt-2">{{ onScheduleProjects }} on schedule</p>
                </div>
                <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-xl flex items-center justify-center">
                  <svg class="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                  </svg>
                </div>
              </div>
            </div>

            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm font-medium text-brand-navy dark:text-gray-400">Average Progress</p>
                  <p class="text-3xl font-bold text-brand-navy dark:text-white">{{ averageProgress }}%</p>
                  <p class="text-sm text-green-600 dark:text-green-400 mt-2">{{ completedMilestones }} milestones done</p>
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
                  <p class="text-sm font-medium text-brand-navy dark:text-gray-400">Safety Incidents</p>
                  <p class="text-3xl font-bold text-brand-navy dark:text-white">{{ safetyIncidents }}</p>
                  <p class="text-sm text-red-600 dark:text-red-400 mt-2">{{ criticalIncidents }} critical</p>
                </div>
                <div class="w-12 h-12 bg-red-100 dark:bg-red-900/20 rounded-xl flex items-center justify-center">
                  <svg class="w-6 h-6 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
                  </svg>
                </div>
              </div>
            </div>

            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm font-medium text-brand-navy dark:text-gray-400">Pending Milestones</p>
                  <p class="text-3xl font-bold text-brand-navy dark:text-white">{{ pendingMilestones }}</p>
                  <p class="text-sm text-orange-600 dark:text-orange-400 mt-2">{{ overdueMilestones }} overdue</p>
                </div>
                <div class="w-12 h-12 bg-orange-100 dark:bg-orange-900/20 rounded-xl flex items-center justify-center">
                  <svg class="w-6 h-6 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <!-- Construction Projects Timeline -->
          <div class="space-y-6">
            <div v-for="project in constructionProjects" :key="project.id" class="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
              <!-- Project Header -->
              <div class="p-6 border-b border-gray-100 dark:border-gray-600">
                <div class="flex items-center justify-between">
                  <div>
                    <h3 class="text-lg font-semibold text-brand-navy dark:text-white">{{ project.name }}</h3>
                    <p class="text-sm text-gray-500">{{ project.location }} • {{ project.contractor }}</p>
                  </div>
                  <div class="flex items-center space-x-4">
                    <span :class="['px-3 py-1 rounded-full text-xs font-semibold',
                                 project.constructionStatus === 'On Schedule' ? 'bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-400' :
                                 project.constructionStatus === 'Delayed' ? 'bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-400' :
                                 'bg-yellow-100 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-400']">
                      {{ project.constructionStatus }}
                    </span>
                    <div class="text-right">
                      <span class="text-lg font-bold text-brand-navy dark:text-white">{{ project.completionProgress }}%</span>
                      <p class="text-xs text-gray-500">Complete</p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Construction Timeline -->
              <div class="p-6">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <!-- Milestone Timeline -->
                  <div>
                    <h4 class="font-semibold text-brand-navy dark:text-white mb-4">Construction Milestones</h4>
                    <div class="space-y-4">
                      <div v-for="milestone in project.milestones" :key="milestone.id" class="flex items-center space-x-4">
                        <div :class="['w-8 h-8 rounded-full flex items-center justify-center',
                                    milestone.status === 'Completed' ? 'bg-green-500' :
                                    milestone.status === 'In Progress' ? 'bg-blue-500' :
                                    milestone.status === 'Delayed' ? 'bg-red-500' : 'bg-gray-300']">
                          <svg v-if="milestone.status === 'Completed'" class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                          </svg>
                          <div v-else-if="milestone.status === 'In Progress'" class="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                          <svg v-else-if="milestone.status === 'Delayed'" class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
                          </svg>
                        </div>
                        <div class="flex-1">
                          <div class="flex items-center justify-between">
                            <h5 class="font-medium text-brand-navy dark:text-white">{{ milestone.name }}</h5>
                            <span class="text-xs text-gray-500">{{ milestone.dueDate }}</span>
                          </div>
                          <p class="text-sm text-gray-500">{{ milestone.description }}</p>
                          <div v-if="milestone.progress" class="mt-2">
                            <div class="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-1">
                              <div :class="['h-1 rounded-full transition-all duration-300',
                                          milestone.status === 'Completed' ? 'bg-green-500' :
                                          milestone.status === 'In Progress' ? 'bg-blue-500' :
                                          milestone.status === 'Delayed' ? 'bg-red-500' : 'bg-gray-300']" 
                                   :style="`width: ${milestone.progress}%`"></div>
                            </div>
                            <p class="text-xs text-gray-500 mt-1">{{ milestone.progress }}% complete</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Safety & Quality -->
                  <div>
                    <h4 class="font-semibold text-brand-navy dark:text-white mb-4">Safety & Quality Reports</h4>
                    <div class="space-y-4">
                      <!-- Safety Score -->
                      <div class="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <div class="flex items-center justify-between mb-2">
                          <span class="font-medium text-brand-navy dark:text-white">Safety Score</span>
                          <span :class="['font-bold',
                                       project.safetyScore >= 90 ? 'text-green-600' :
                                       project.safetyScore >= 75 ? 'text-yellow-600' : 'text-red-600']">
                            {{ project.safetyScore }}/100
                          </span>
                        </div>
                        <div class="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                          <div :class="['h-2 rounded-full transition-all duration-300',
                                      project.safetyScore >= 90 ? 'bg-green-500' :
                                      project.safetyScore >= 75 ? 'bg-yellow-500' : 'bg-red-500']" 
                               :style="`width: ${project.safetyScore}%`"></div>
                        </div>
                      </div>

                      <!-- Recent Safety Reports -->
                      <div class="space-y-2">
                        <div v-for="report in project.safetyReports" :key="report.id" class="p-3 border border-gray-200 dark:border-gray-600 rounded-lg">
                          <div class="flex items-center justify-between">
                            <div>
                              <h6 class="font-medium text-brand-navy dark:text-white text-sm">{{ report.type }}</h6>
                              <p class="text-xs text-gray-500">{{ report.inspector }} • {{ report.date }}</p>
                            </div>
                            <span :class="['px-2 py-1 text-xs font-semibold rounded',
                                         report.status === 'Passed' ? 'bg-green-100 text-green-800' :
                                         report.status === 'Failed' ? 'bg-red-100 text-red-800' :
                                         'bg-yellow-100 text-yellow-800']">
                              {{ report.status }}
                            </span>
                          </div>
                          <p v-if="report.notes" class="text-xs text-gray-600 dark:text-gray-400 mt-1">{{ report.notes }}</p>
                        </div>
                      </div>

                      <!-- Quality Metrics -->
                      <div class="grid grid-cols-2 gap-4">
                        <div class="text-center p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                          <div class="text-lg font-bold text-blue-600">{{ project.qualityScore }}%</div>
                          <div class="text-xs text-gray-600">Quality Score</div>
                        </div>
                        <div class="text-center p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                          <div class="text-lg font-bold text-purple-600">{{ project.inspectionsPassed }}</div>
                          <div class="text-xs text-gray-600">Inspections Passed</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Project Actions -->
                <div class="mt-6 pt-6 border-t border-gray-200 dark:border-gray-600">
                  <div class="flex items-center justify-between">
                    <div class="text-sm text-gray-500">
                      Last updated: {{ project.lastUpdate }} • Next inspection: {{ project.nextInspection }}
                    </div>
                    <div class="flex items-center space-x-3">
                      <button class="bg-brand-turqoise-light text-brand-navy px-4 py-2 rounded-lg font-semibold hover:bg-teal-300 transition-colors text-sm">
                        Update Progress
                      </button>
                      <button class="border border-gray-300 dark:border-gray-600 text-brand-navy dark:text-gray-300 px-4 py-2 rounded-lg font-semibold hover:border-gray-400 dark:hover:border-gray-500 transition-colors text-sm">
                        View Reports
                      </button>
                      <button class="border border-gray-300 dark:border-gray-600 text-brand-navy dark:text-gray-300 px-4 py-2 rounded-lg font-semibold hover:border-gray-400 dark:hover:border-gray-500 transition-colors text-sm">
                        Contact Team
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Safety Reports Tab -->
        <div v-if="activeTab === 'reports'" class="p-6">
          <div class="flex items-center justify-between mb-6">
            <h2 class="text-2xl font-bold text-brand-navy dark:text-white">Safety Reports & Compliance</h2>
            <div class="flex items-center space-x-4">
              <select class="border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-brand-navy dark:text-white rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-turqoise-light">
                <option>All Reports</option>
                <option>Safety Inspections</option>
                <option>Quality Audits</option>
                <option>Compliance Reports</option>
                <option>Incident Reports</option>
              </select>
              <button class="bg-brand-turqoise-light text-brand-navy px-6 py-3 rounded-lg font-semibold hover:bg-teal-300 transition-colors flex items-center space-x-2">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"/>
                </svg>
                <span>Upload Report</span>
              </button>
            </div>
          </div>

          <!-- Safety Overview Dashboard -->
          <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm font-medium text-brand-navy dark:text-gray-400">Safety Score Average</p>
                  <p class="text-3xl font-bold text-brand-navy dark:text-white">{{ averageSafetyScore }}</p>
                  <p class="text-sm text-green-600 dark:text-green-400 mt-2">{{ safetyTrend }}% vs last month</p>
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
                  <p class="text-sm font-medium text-brand-navy dark:text-gray-400">Total Reports</p>
                  <p class="text-3xl font-bold text-brand-navy dark:text-white">{{ totalReports }}</p>
                  <p class="text-sm text-blue-600 dark:text-blue-400 mt-2">{{ reportsThisMonth }} this month</p>
                </div>
                <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-xl flex items-center justify-center">
                  <svg class="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                  </svg>
                </div>
              </div>
            </div>

            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm font-medium text-brand-navy dark:text-gray-400">Safety Incidents</p>
                  <p class="text-3xl font-bold text-brand-navy dark:text-white">{{ safetyIncidents }}</p>
                  <p class="text-sm text-red-600 dark:text-red-400 mt-2">{{ criticalIncidents }} critical</p>
                </div>
                <div class="w-12 h-12 bg-red-100 dark:bg-red-900/20 rounded-xl flex items-center justify-center">
                  <svg class="w-6 h-6 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
                  </svg>
                </div>
              </div>
            </div>

            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm font-medium text-brand-navy dark:text-gray-400">Compliance Rate</p>
                  <p class="text-3xl font-bold text-brand-navy dark:text-white">{{ complianceRate }}%</p>
                  <p class="text-sm text-orange-600 dark:text-orange-400 mt-2">{{ pendingActions }} pending actions</p>
                </div>
                <div class="w-12 h-12 bg-orange-100 dark:bg-orange-900/20 rounded-xl flex items-center justify-center">
                  <svg class="w-6 h-6 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <!-- Safety Reports by Project -->
          <div class="space-y-6">
            <div v-for="project in safetyReportsByProject" :key="project.id" class="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
              <!-- Project Header -->
              <div class="p-6 border-b border-gray-100 dark:border-gray-600">
                <div class="flex items-center justify-between">
                  <div>
                    <h3 class="text-lg font-semibold text-brand-navy dark:text-white">{{ project.name }}</h3>
                    <p class="text-sm text-gray-500">{{ project.location }} • Phase: {{ project.currentPhase }}</p>
                  </div>
                  <div class="flex items-center space-x-4">
                    <div class="text-center">
                      <div :class="['text-2xl font-bold',
                                  project.overallSafetyScore >= 90 ? 'text-green-600' :
                                  project.overallSafetyScore >= 75 ? 'text-yellow-600' : 'text-red-600']">
                        {{ project.overallSafetyScore }}
                      </div>
                      <p class="text-xs text-gray-500">Safety Score</p>
                    </div>
                    <span :class="['px-3 py-1 rounded-full text-xs font-semibold',
                                 project.complianceStatus === 'Compliant' ? 'bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-400' :
                                 project.complianceStatus === 'Minor Issues' ? 'bg-yellow-100 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-400' :
                                 'bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-400']">
                      {{ project.complianceStatus }}
                    </span>
                  </div>
                </div>
              </div>

              <!-- Reports Content -->
              <div class="p-6">
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <!-- Recent Reports -->
                  <div class="lg:col-span-2">
                    <h4 class="font-semibold text-brand-navy dark:text-white mb-4">Recent Safety Reports</h4>
                    <div class="space-y-4">
                      <div v-for="report in project.reports" :key="report.id" class="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
                        <div class="flex items-center justify-between mb-3">
                          <div class="flex items-center space-x-3">
                            <div :class="['w-8 h-8 rounded-full flex items-center justify-center',
                                        report.status === 'Passed' ? 'bg-green-100 text-green-600' :
                                        report.status === 'Warning' ? 'bg-yellow-100 text-yellow-600' :
                                        'bg-red-100 text-red-600']">
                              <svg v-if="report.status === 'Passed'" class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                              </svg>
                              <svg v-else-if="report.status === 'Warning'" class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
                              </svg>
                              <svg v-else class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/>
                              </svg>
                            </div>
                            <div>
                              <h5 class="font-medium text-brand-navy dark:text-white">{{ report.type }}</h5>
                              <p class="text-sm text-gray-500">{{ report.inspector }} • {{ report.date }}</p>
                            </div>
                          </div>
                          <div class="flex items-center space-x-2">
                            <span :class="['px-2 py-1 text-xs font-semibold rounded',
                                         report.status === 'Passed' ? 'bg-green-100 text-green-800' :
                                         report.status === 'Warning' ? 'bg-yellow-100 text-yellow-800' :
                                         'bg-red-100 text-red-800']">
                              {{ report.status }}
                            </span>
                            <button class="text-blue-600 dark:text-blue-400 hover:text-blue-700 text-xs font-medium">
                              View Details
                            </button>
                          </div>
                        </div>
                        
                        <!-- Report Details -->
                        <div class="grid grid-cols-2 gap-4 mb-3">
                          <div>
                            <span class="text-xs text-gray-500">Safety Score:</span>
                            <p class="font-medium text-brand-navy dark:text-white">{{ report.safetyScore }}/100</p>
                          </div>
                          <div>
                            <span class="text-xs text-gray-500">Compliance:</span>
                            <p class="font-medium text-brand-navy dark:text-white">{{ report.complianceScore }}%</p>
                          </div>
                        </div>

                        <!-- Issues & Actions -->
                        <div v-if="report.issues.length > 0" class="bg-gray-50 dark:bg-gray-700 rounded p-3">
                          <h6 class="text-sm font-medium text-brand-navy dark:text-white mb-2">Issues Found:</h6>
                          <ul class="space-y-1">
                            <li v-for="issue in report.issues" :key="issue.id" class="text-xs text-gray-600 dark:text-gray-400">
                              • {{ issue.description }} 
                              <span :class="['ml-2 px-2 py-0.5 rounded text-xs',
                                           issue.severity === 'High' ? 'bg-red-100 text-red-800' :
                                           issue.severity === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                                           'bg-blue-100 text-blue-800']">
                                {{ issue.severity }}
                              </span>
                            </li>
                          </ul>
                          <div v-if="report.actionRequired" class="mt-2 pt-2 border-t border-gray-200 dark:border-gray-600">
                            <p class="text-xs font-medium text-orange-600">Action Required: {{ report.actionRequired }}</p>
                            <p class="text-xs text-gray-500">Due: {{ report.actionDueDate }}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Safety Metrics & Trends -->
                  <div>
                    <h4 class="font-semibold text-brand-navy dark:text-white mb-4">Safety Metrics</h4>
                    
                    <!-- Safety Trend -->
                    <div class="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 mb-4">
                      <h5 class="font-medium text-brand-navy dark:text-white mb-3">Safety Trend (Last 6 Months)</h5>
                      <div class="space-y-2">
                        <div v-for="month in project.safetyTrend" :key="month.month" class="flex items-center justify-between">
                          <span class="text-sm text-gray-600 dark:text-gray-400">{{ month.month }}</span>
                          <div class="flex items-center space-x-2">
                            <span class="text-sm font-medium text-brand-navy dark:text-white">{{ month.score }}</span>
                            <div class="w-16 bg-gray-200 dark:bg-gray-600 rounded-full h-1">
                              <div :class="['h-1 rounded-full',
                                          month.score >= 90 ? 'bg-green-500' :
                                          month.score >= 75 ? 'bg-yellow-500' : 'bg-red-500']" 
                                   :style="`width: ${month.score}%`"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <!-- Key Indicators -->
                    <div class="space-y-3">
                      <div class="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <span class="text-sm font-medium text-brand-navy dark:text-white">Workers Trained</span>
                        <span class="text-sm font-bold text-green-600">{{ project.workersTrained }}/{{ project.totalWorkers }}</span>
                      </div>
                      <div class="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <span class="text-sm font-medium text-brand-navy dark:text-white">Equipment Inspected</span>
                        <span class="text-sm font-bold text-blue-600">{{ project.equipmentInspected }}%</span>
                      </div>
                      <div class="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <span class="text-sm font-medium text-brand-navy dark:text-white">Days Since Incident</span>
                        <span class="text-sm font-bold text-purple-600">{{ project.daysSinceIncident }}</span>
                      </div>
                    </div>

                    <!-- Upcoming Inspections -->
                    <div class="mt-4">
                      <h5 class="font-medium text-brand-navy dark:text-white mb-3">Upcoming Inspections</h5>
                      <div class="space-y-2">
                        <div v-for="inspection in project.upcomingInspections" :key="inspection.id" class="p-3 border border-gray-200 dark:border-gray-600 rounded-lg">
                          <div class="font-medium text-brand-navy dark:text-white text-sm">{{ inspection.type }}</div>
                          <div class="text-xs text-gray-500">{{ inspection.date }} • {{ inspection.inspector }}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Analytics Tab with Charts -->
        <div v-if="activeTab === 'analytics'" class="p-6">
          <h2 class="text-2xl font-bold text-brand-navy dark:text-white mb-6">Development Analytics</h2>
          
          <!-- Analytics Cards -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Project Performance</h3>
              <div class="space-y-4">
                <div class="flex justify-between items-center">
                  <span class="text-sm text-brand-navy dark:text-gray-400">Average Construction Time</span>
                  <span class="font-semibold text-brand-navy dark:text-white">24 months</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-sm text-brand-navy dark:text-gray-400">Pre-Sales Rate</span>
                  <span class="font-semibold text-brand-navy dark:text-white">{{ averagePreSalesRate }}%</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-sm text-brand-navy dark:text-gray-400">ROI Average</span>
                  <span class="font-semibold text-brand-navy dark:text-white">{{ averageROI }}%</span>
                </div>
              </div>
            </div>

            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Sales Metrics</h3>
              <div class="space-y-4">
                <div class="flex justify-between items-center">
                  <span class="text-sm text-brand-navy dark:text-gray-400">Units Sold YTD</span>
                  <span class="font-semibold text-brand-navy dark:text-white">{{ totalUnitsSoldYTD }}</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-sm text-brand-navy dark:text-gray-400">Revenue Generated</span>
                  <span class="font-semibold text-brand-navy dark:text-white">{{ formatCurrency(totalRevenueYTD) }}</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-sm text-brand-navy dark:text-gray-400">Agent Conversion</span>
                  <span class="font-semibold text-brand-navy dark:text-white">{{ agentConversionRate }}%</span>
                </div>
              </div>
            </div>

            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Safety & Quality</h3>
              <div class="space-y-4">
                <div class="flex justify-between items-center">
                  <span class="text-sm text-brand-navy dark:text-gray-400">Safety Score</span>
                  <span class="font-semibold text-green-600">{{ averageSafetyScore }}/100</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-sm text-brand-navy dark:text-gray-400">Quality Rating</span>
                  <span class="font-semibold text-brand-navy dark:text-white">{{ averageQualityRating }}/10</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-sm text-brand-navy dark:text-gray-400">On-Time Delivery</span>
                  <span class="font-semibold text-brand-navy dark:text-white">{{ onTimeDeliveryRate }}%</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Charts Section -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <!-- Revenue by Project Chart -->
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Revenue by Project</h3>
              <VChart ref="revenueByProjectChart" :option="revenueByProjectChartOption" class="h-64" />
            </div>

            <!-- Sales Pipeline Progress -->
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Sales Pipeline Value</h3>
              <VChart ref="salesPipelineChart" :option="salesPipelineChartOption" class="h-64" />
            </div>
          </div>

          <!-- Additional Charts -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <!-- Construction Progress Timeline -->
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Construction Timeline Performance</h3>
              <VChart ref="constructionTimelineChart" :option="constructionTimelineChartOption" class="h-64" />
            </div>

            <!-- Unit Type Performance -->
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Unit Type Sales Performance</h3>
              <VChart ref="unitTypePerformanceChart" :option="unitTypePerformanceChartOption" class="h-64" />
            </div>
          </div>

          <!-- Agent Performance and Safety Metrics -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <!-- Agent Performance Comparison -->
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Featured Agent Performance</h3>
              <VChart ref="agentPerformanceChart" :option="agentPerformanceChartOption" class="h-64" />
            </div>

            <!-- Safety Trends Across Projects -->
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Safety Score Trends</h3>
              <VChart ref="safetyTrendsChart" :option="safetyTrendsChartOption" class="h-64" />
            </div>
          </div>
        </div>
        <!-- Profile & Settings Tab -->
        <div v-if="activeTab === 'profile'" class="p-6">
          <div class="flex items-center justify-between mb-6">
            <h2 class="text-2xl font-bold text-brand-navy dark:text-white">Company Profile & Verification</h2>
            <div class="flex items-center space-x-4">
              <div class="text-sm text-brand-navy dark:text-gray-400">
                Profile Completion: <span class="font-bold text-lg" :class="getProfileCompletionColor(profileCompletionScore)">{{ profileCompletionScore }}%</span>
              </div>
              <button class="bg-brand-turqoise-light text-brand-navy px-6 py-3 rounded-lg font-semibold hover:bg-teal-300 transition-colors">
                Save Changes
              </button>
            </div>
          </div>

          <!-- Developer Verification Status -->
          <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 mb-6">
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white">Developer Verification Status</h3>
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

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <!-- Legal & Business Verification -->
              <div class="space-y-4">
                <h4 class="font-semibold text-brand-navy dark:text-white mb-4">Legal & Business Documentation</h4>
                
                <div class="space-y-3">
                  <div class="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div class="flex items-center space-x-3">
                      <svg class="w-5 h-5" :class="developerProfile.business_license_verified ? 'text-green-500' : 'text-gray-400'" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zM6 20V4h7v5h5v11H6z"/>
                      </svg>
                      <div>
                        <div class="font-medium text-brand-navy dark:text-white">Business License</div>
                        <div class="text-sm text-gray-500">Valid construction/development license</div>
                      </div>
                    </div>
                    <span class="text-xs" :class="developerProfile.business_license_verified ? 'text-green-600' : 'text-gray-500'">
                      {{ developerProfile.business_license_verified ? '✓ Verified (+25 pts)' : 'Upload Required' }}
                    </span>
                  </div>

                  <div class="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div class="flex items-center space-x-3">
                      <svg class="w-5 h-5" :class="developerProfile.financial_statements_verified ? 'text-green-500' : 'text-gray-400'" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                      </svg>
                      <div>
                        <div class="font-medium text-brand-navy dark:text-white">Financial Statements</div>
                        <div class="text-sm text-gray-500">Audited financial records</div>
                      </div>
                    </div>
                    <span class="text-xs" :class="developerProfile.financial_statements_verified ? 'text-green-600' : 'text-gray-500'">
                      {{ developerProfile.financial_statements_verified ? '✓ Verified (+20 pts)' : 'Documents Required' }}
                    </span>
                  </div>

                  <div class="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div class="flex items-center space-x-3">
                      <svg class="w-5 h-5" :class="developerProfile.insurance_verified ? 'text-green-500' : 'text-gray-400'" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                      </svg>
                      <div>
                        <div class="font-medium text-brand-navy dark:text-white">Insurance Coverage</div>
                        <div class="text-sm text-gray-500">Professional liability & construction insurance</div>
                      </div>
                    </div>
                    <span class="text-xs" :class="developerProfile.insurance_verified ? 'text-green-600' : 'text-gray-500'">
                      {{ developerProfile.insurance_verified ? '✓ Verified (+15 pts)' : 'Setup Required' }}
                    </span>
                  </div>
                </div>
              </div>

              <!-- Project Track Record -->
              <div class="space-y-4">
                <h4 class="font-semibold text-brand-navy dark:text-white mb-4">Development Track Record</h4>
                
                <div class="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-600 rounded-lg">
                  <div class="flex items-center space-x-3">
                    <svg class="w-5 h-5" :class="developerProfile.project_portfolio_verified ? 'text-green-500' : 'text-gray-400'" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                    </svg>
                    <div>
                      <div class="font-medium text-brand-navy dark:text-white">Project Portfolio</div>
                      <div class="text-sm text-gray-500">Completed development projects</div>
                    </div>
                  </div>
                  <div class="flex items-center space-x-2">
                    <span class="text-sm" :class="developerProfile.project_portfolio_verified ? 'text-green-600' : 'text-gray-500'">
                      {{ developerProfile.project_portfolio_verified ? 'Verified (+25 pts)' : 'Portfolio Required' }}
                    </span>
                  </div>
                </div>

                <div class="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-600 rounded-lg">
                  <div class="flex items-center space-x-3">
                    <svg class="w-5 h-5" :class="developerProfile.references_verified ? 'text-green-500' : 'text-gray-400'" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zM4 18v-4h3v4h2v-4h3l-2-5h-6z"/>
                    </svg>
                    <div>
                      <div class="font-medium text-brand-navy dark:text-white">Industry References</div>
                      <div class="text-sm text-gray-500">Verified client testimonials</div>
                    </div>
                  </div>
                  <div class="flex items-center space-x-2">
                    <span class="text-sm" :class="developerProfile.references_verified ? 'text-green-600' : 'text-gray-500'">
                      {{ developerProfile.references_verified ? 'Verified (+15 pts)' : 'References Required' }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Company Information -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <!-- Basic Company Info -->
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Company Information</h3>
              <div class="space-y-4">
                <div>
                  <label class="block text-sm font-medium text-brand-navy dark:text-gray-300 mb-2">Company Name</label>
                  <input type="text" v-model="developerInfo.companyName" class="w-full px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-turqoise-light bg-white dark:bg-gray-700 text-brand-navy dark:text-white">
                </div>
                <div>
                  <label class="block text-sm font-medium text-brand-navy dark:text-gray-300 mb-2">Registration Number</label>
                  <input type="text" v-model="developerInfo.registrationNumber" class="w-full px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-turqoise-light bg-white dark:bg-gray-700 text-brand-navy dark:text-white">
                </div>
                <div>
                  <label class="block text-sm font-medium text-brand-navy dark:text-gray-300 mb-2">Head Office Address</label>
                  <textarea v-model="developerInfo.headOfficeAddress" rows="3" class="w-full px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-turqoise-light bg-white dark:bg-gray-700 text-brand-navy dark:text-white"></textarea>
                </div>
                <div>
                  <label class="block text-sm font-medium text-brand-navy dark:text-gray-300 mb-2">Years in Business</label>
                  <select v-model="developerInfo.yearsInBusiness" class="w-full px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-turqoise-light bg-white dark:bg-gray-700 text-brand-navy dark:text-white">
                    <option value="1-5">1-5 years</option>
                    <option value="6-10">6-10 years</option>
                    <option value="11-20">11-20 years</option>
                    <option value="20+">20+ years</option>
                  </select>
                </div>
              </div>
            </div>

            <!-- Development Specializations -->
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Development Specializations</h3>
              <div class="space-y-4">
                <div>
                  <label class="block text-sm font-medium text-brand-navy dark:text-gray-300 mb-2">Project Types</label>
                  <div class="grid grid-cols-2 gap-2">
                    <label v-for="type in developmentTypes" :key="type" class="flex items-center">
                      <input type="checkbox" :value="type" v-model="developerInfo.specializations" class="mr-2">
                      <span class="text-sm text-brand-navy dark:text-white">{{ type }}</span>
                    </label>
                  </div>
                </div>
                <div>
                  <label class="block text-sm font-medium text-brand-navy dark:text-gray-300 mb-2">Target Markets</label>
                  <div class="grid grid-cols-2 gap-2">
                    <label v-for="market in targetMarkets" :key="market" class="flex items-center">
                      <input type="checkbox" :value="market" v-model="developerInfo.targetMarkets" class="mr-2">
                      <span class="text-sm text-brand-navy dark:text-white">{{ market }}</span>
                    </label>
                  </div>
                </div>
                <div>
                  <label class="block text-sm font-medium text-brand-navy dark:text-gray-300 mb-2">Geographic Focus</label>
                  <select v-model="developerInfo.primaryRegion" class="w-full px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-turqoise-light bg-white dark:bg-gray-700 text-brand-navy dark:text-white">
                    <option value="">Select Primary Region</option>
                    <option value="bangkok-central">Bangkok Central</option>
                    <option value="bangkok-suburbs">Bangkok Suburbs</option>
                    <option value="pattaya">Pattaya</option>
                    <option value="phuket">Phuket</option>
                    <option value="chiang-mai">Chiang Mai</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <!-- Development Portfolio Summary -->
          <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
            <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-4">Development Portfolio Summary</h3>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div class="text-center">
                <div class="text-2xl font-bold text-brand-navy dark:text-white">{{ totalProjectsCompleted }}</div>
                <div class="text-sm text-gray-500">Projects Completed</div>
              </div>
              <div class="text-center">
                <div class="text-2xl font-bold text-brand-navy dark:text-white">{{ totalUnitsDelivered }}</div>
                <div class="text-sm text-gray-500">Units Delivered</div>
              </div>
              <div class="text-center">
                <div class="text-2xl font-bold text-brand-navy dark:text-white">{{ formatCurrency(totalPortfolioValue) }}</div>
                <div class="text-sm text-gray-500">Portfolio Value</div>
              </div>
              <div class="text-center">
                <div class="text-2xl font-bold text-brand-navy dark:text-white">{{ customerSatisfactionRate }}%</div>
                <div class="text-sm text-gray-500">Customer Satisfaction</div>
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
  title: 'Developer Dashboard - ThaiKeys',
  meta: [
    {
      name: 'description',
      content: 'Professional developer dashboard for managing development projects, construction, pre-sales, and featured agents on ThaiKeys platform.'
    }
  ]
})

// Reactive data
const searchQuery = ref('')
const unitSearchQuery = ref('')
const agentSearchQuery = ref('')
const activeTab = ref('overview')
const unreadNotifications = ref(4)

// Developer Profile
const developerProfile = ref({
  business_license_verified: true,
  financial_statements_verified: false,
  insurance_verified: true,
  project_portfolio_verified: true,
  references_verified: false
})

// Developer Information
const developerInfo = ref({
  companyName: 'Bangkok Heights Development',
  registrationNumber: 'THD-2019-001234',
  headOfficeAddress: '999 Sukhumvit Road, Klongtoey, Bangkok 10110',
  yearsInBusiness: '6-10',
  specializations: ['Condominiums', 'Mixed-Use', 'Luxury Residential'],
  targetMarkets: ['Local', 'Foreign Investment', 'Luxury'],
  primaryRegion: 'bangkok-central'
})

const developmentTypes = ['Condominiums', 'Houses', 'Townhouses', 'Mixed-Use', 'Luxury Residential', 'Commercial']
const targetMarkets = ['Local', 'Foreign Investment', 'Luxury', 'Mid-Market', 'Affordable Housing']

// Developer statistics
const activeProjects = ref(4)
const totalUnits = ref(485)
const availableUnits = ref(158)
const preSalesRevenue = ref(2850000000)
const soldUnits = ref(327)
const averageProgress = ref(72)
const onScheduleProjects = ref(3)
const featuredAgents = ref(12)
const agentSales = ref(186)
const activeSales = ref(47)
const pendingMilestones = ref(8)
const totalReports = ref(156)
const projectsInConstruction = ref(3)
const completedMilestones = ref(24)
const safetyIncidents = ref(3)
const criticalIncidents = ref(1)
const overdueMilestones = ref(2)
const averageSafetyScore = ref(87)
const safetyTrend = ref(5)
const reportsThisMonth = ref(18)
const complianceRate = ref(92)
const pendingActions = ref(6)

// Portfolio metrics
const totalProjectsCompleted = ref(28)
const totalUnitsDelivered = ref(3420)
const totalPortfolioValue = ref(18500000000)
const customerSatisfactionRate = ref(94)

// Analytics metrics
const averagePreSalesRate = ref(78)
const averageROI = ref(24)
const totalUnitsSoldYTD = ref(456)
const totalRevenueYTD = ref(4250000000)
const agentConversionRate = ref(68)
const averageQualityRating = ref(9.2)
const onTimeDeliveryRate = ref(89)

// Chart refs
const revenueByProjectChart = ref(null)
const salesPipelineChart = ref(null)
const constructionTimelineChart = ref(null)
const unitTypePerformanceChart = ref(null)
const agentPerformanceChart = ref(null)
const safetyTrendsChart = ref(null)

// Computed Properties
const verificationScore = computed(() => {
  let score = 0
  if (developerProfile.value.business_license_verified) score += 25
  if (developerProfile.value.financial_statements_verified) score += 20
  if (developerProfile.value.insurance_verified) score += 15
  if (developerProfile.value.project_portfolio_verified) score += 25
  if (developerProfile.value.references_verified) score += 15
  return score
})

const profileCompletionScore = computed(() => {
  let score = 0
  if (developerInfo.value.companyName) score += 20
  if (developerInfo.value.registrationNumber) score += 15
  if (developerInfo.value.headOfficeAddress) score += 15
  if (developerInfo.value.specializations.length > 0) score += 15
  if (developerInfo.value.targetMarkets.length > 0) score += 15
  if (developerProfile.value.business_license_verified) score += 20
  return score
})

const profileComplete = computed(() => profileCompletionScore.value >= 80)

// Active projects data
const activeProjectsList = ref([
  {
    id: 1,
    name: 'Bangkok Heights Tower',
    location: 'Sukhumvit 24',
    totalUnits: 156,
    status: 'On Schedule',
    completionProgress: 78,
    foundationDate: 'Feb 2024',
    structureDate: 'Aug 2024',
    finishingDate: 'Dec 2024',
    handoverDate: 'Mar 2025'
  },
  {
    id: 2,
    name: 'Thonglor Residence',
    location: 'Thonglor 15',
    totalUnits: 89,
    status: 'Delayed',
    completionProgress: 65,
    foundationDate: 'Jan 2024',
    structureDate: 'Jul 2024',
    finishingDate: 'Feb 2025',
    handoverDate: 'May 2025'
  }
])

// Development projects data
const developmentProjects = ref([
  {
    id: 1,
    name: 'Bangkok Heights Tower',
    location: 'Sukhumvit 24, Bangkok',
    phase: 'Construction',
    projectType: 'Condominium',
    status: 'On Schedule',
    completionProgress: 78,
    totalUnits: 156,
    soldUnits: 124,
    reservedUnits: 18,
    salesRate: 91,
    launchDate: 'Mar 2024',
    completionDate: 'Mar 2025',
    totalValue: 2800000000,
    salesValue: 2548000000,
    featuredAgents: [
      { id: 1, initials: 'AB' },
      { id: 2, initials: 'CD' },
      { id: 3, initials: 'EF' }
    ]
  },
  {
    id: 2,
    name: 'Thonglor Residence',
    location: 'Thonglor 15, Bangkok',
    phase: 'Sales Launch',
    projectType: 'Luxury Villa',
    status: 'Delayed',
    completionProgress: 65,
    totalUnits: 89,
    soldUnits: 67,
    reservedUnits: 12,
    salesRate: 89,
    launchDate: 'Jan 2024',
    completionDate: 'May 2025',
    totalValue: 1950000000,
    salesValue: 1735500000,
    featuredAgents: [
      { id: 4, initials: 'GH' },
      { id: 5, initials: 'IJ' }
    ]
  }
])

// Unit type statistics
const unitTypeStats = ref([
  {
    type: '1 Bedroom',
    total: 120,
    available: 38,
    sold: 82,
    availability: 32,
    avgPrice: 4500000
  },
  {
    type: '2 Bedroom',
    total: 185,
    available: 72,
    sold: 113,
    availability: 39,
    avgPrice: 7200000
  },
  {
    type: '3 Bedroom',
    total: 98,
    available: 31,
    sold: 67,
    availability: 32,
    avgPrice: 12500000
  },
  {
    type: 'Penthouse',
    total: 12,
    available: 5,
    sold: 7,
    availability: 42,
    avgPrice: 28000000
  }
])

// Unit inventory data
const unitInventory = ref([
  {
    id: 1,
    unitNumber: '15A',
    building: 'A',
    projectName: 'Bangkok Heights Tower',
    projectPhase: 'Construction',
    unitType: '2BR',
    floor: '15th',
    view: 'City View',
    size: 65,
    bedrooms: 2,
    bathrooms: 2,
    price: 7800000,
    pricePerSqm: 120000,
    status: 'Available'
  },
  {
    id: 2,
    unitNumber: '28B',
    building: 'A',
    projectName: 'Bangkok Heights Tower',
    projectPhase: 'Construction',
    unitType: '3BR',
    floor: '28th',
    view: 'River View',
    size: 98,
    bedrooms: 3,
    bathrooms: 3,
    price: 15200000,
    pricePerSqm: 155000,
    status: 'Reserved',
    reservedDate: 'Oct 15, 2024'
  }
])

// Sales pipeline data
const salesPipelineStages = ref([
  {
    name: 'New Inquiries',
    count: 23,
    value: 184000000,
    conversionRate: 65,
    color: 'text-blue-600',
    bgColor: 'bg-blue-500'
  },
  {
    name: 'Qualified',
    count: 15,
    value: 128000000,
    conversionRate: 73,
    color: 'text-green-600',
    bgColor: 'bg-green-500'
  },
  {
    name: 'Viewing',
    count: 11,
    value: 94000000,
    conversionRate: 82,
    color: 'text-orange-600',
    bgColor: 'bg-orange-500'
  },
  {
    name: 'Negotiation',
    count: 9,
    value: 76000000,
    conversionRate: 89,
    color: 'text-purple-600',
    bgColor: 'bg-purple-500'
  },
  {
    name: 'Closed Won',
    count: 8,
    value: 68000000,
    conversionRate: 100,
    color: 'text-green-600',
    bgColor: 'bg-green-600'
  }
])

// Sales pipeline leads data
const newInquiries = ref([
  {
    id: 1,
    clientName: 'James Wilson',
    projectInterest: 'Bangkok Heights Tower',
    unitType: '2BR',
    budget: 8000000,
    source: 'Website',
    timeAgo: '2h ago'
  },
  {
    id: 2,
    clientName: 'Maria Garcia',
    projectInterest: 'Thonglor Residence',
    unitType: 'Villa',
    budget: 25000000,
    source: 'Referral',
    timeAgo: '5h ago'
  }
])

const qualifiedLeads = ref([
  {
    id: 1,
    clientName: 'Robert Chen',
    projectInterest: 'Bangkok Heights Tower',
    unitType: '3BR',
    budget: 15000000,
    assignedAgent: 'Agent Smith',
    timeAgo: '1d ago'
  }
])

const scheduledViewings = ref([
  {
    id: 1,
    clientName: 'Emma Thompson',
    projectInterest: 'Thonglor Residence',
    unitType: 'Villa',
    budget: 22000000,
    assignedAgent: 'Agent Johnson',
    viewingDate: 'Nov 18, 3PM'
  }
])

const underNegotiation = ref([
  {
    id: 1,
    clientName: 'David Kim',
    projectInterest: 'Bangkok Heights Tower',
    specificUnit: '28B',
    offerAmount: 14500000,
    assignedAgent: 'Agent Brown',
    timeAgo: '3h ago'
  }
])

const closedWon = ref([
  {
    id: 1,
    clientName: 'Sarah Johnson',
    projectInterest: 'Bangkok Heights Tower',
    specificUnit: '15A',
    finalPrice: 7800000,
    assignedAgent: 'Agent Davis',
    closedDate: 'Nov 10'
  }
])

// Featured agents data
const activeAgents = ref(10)
const agentSalesVolume = ref(2450000000)
const totalCommissions = ref(122500000)
const avgCommissionRate = ref(3.2)
const topAgentSales = ref(28)

const featuredAgentsList = ref([
  {
    id: 1,
    name: 'Alexandra Smith',
    initials: 'AS',
    agency: 'Premium Properties',
    experience: 8,
    rating: 4.9,
    reviews: 127,
    status: 'Active',
    featuredSince: 'Jan 2024',
    unitsSold: 28,
    unitsSoldThisMonth: 6,
    salesValue: 425000000,
    conversionRate: 73,
    commissionsEarned: 13600000,
    commissionRate: 3.2,
    activeLead: 12,
    responseTime: 2.4,
    assignedProjects: ['Bangkok Heights Tower', 'Thonglor Residence'],
    recentActivity: [
      {
        id: 1,
        action: 'Closed sale for Unit 28B',
        details: 'Bangkok Heights Tower - ฿15.2M',
        timeAgo: '2h ago'
      },
      {
        id: 2,
        action: 'Scheduled viewing',
        details: 'Thonglor Residence for Emma Thompson',
        timeAgo: '1d ago'
      }
    ]
  },
  {
    id: 2,
    name: 'Michael Johnson',
    initials: 'MJ',
    agency: 'Elite Realty',
    experience: 12,
    rating: 4.8,
    reviews: 89,
    status: 'Active',
    featuredSince: 'Mar 2024',
    unitsSold: 22,
    unitsSoldThisMonth: 4,
    salesValue: 320000000,
    conversionRate: 68,
    commissionsEarned: 10240000,
    commissionRate: 3.2,
    activeLead: 8,
    responseTime: 3.1,
    assignedProjects: ['Bangkok Heights Tower'],
    recentActivity: [
      {
        id: 1,
        action: 'Qualified new lead',
        details: 'Robert Chen for 3BR unit',
        timeAgo: '4h ago'
      }
    ]
  }
])

// Construction projects data
const constructionProjects = ref([
  {
    id: 1,
    name: 'Bangkok Heights Tower',
    location: 'Sukhumvit 24',
    contractor: 'Bangkok Construction Co.',
    constructionStatus: 'On Schedule',
    completionProgress: 78,
    milestones: [
      {
        id: 1,
        name: 'Foundation Complete',
        description: 'Deep foundation and basement construction',
        status: 'Completed',
        dueDate: 'Feb 2024',
        progress: 100
      },
      {
        id: 2,
        name: 'Structure Phase',
        description: 'Main building structure to 30th floor',
        status: 'In Progress',
        dueDate: 'Dec 2024',
        progress: 78
      },
      {
        id: 3,
        name: 'MEP Installation',
        description: 'Mechanical, electrical, plumbing systems',
        status: 'Pending',
        dueDate: 'Jan 2025',
        progress: 0
      }
    ],
    safetyScore: 92,
    safetyReports: [
      {
        id: 1,
        type: 'Weekly Safety Inspection',
        inspector: 'Safety Officer Chen',
        date: 'Nov 12, 2024',
        status: 'Passed',
        notes: 'All safety protocols followed correctly'
      },
      {
        id: 2,
        type: 'Fire Safety Audit',
        inspector: 'Fire Dept Inspector',
        date: 'Nov 8, 2024',
        status: 'Warning',
        notes: 'Fire extinguisher maintenance required'
      }
    ],
    qualityScore: 88,
    inspectionsPassed: 24,
    lastUpdate: 'Nov 12, 2024',
    nextInspection: 'Nov 19, 2024'
  }
])

// Safety reports by project
const safetyReportsByProject = ref([
  {
    id: 1,
    name: 'Bangkok Heights Tower',
    location: 'Sukhumvit 24',
    currentPhase: 'Structure',
    overallSafetyScore: 92,
    complianceStatus: 'Compliant',
    reports: [
      {
        id: 1,
        type: 'Weekly Safety Inspection',
        inspector: 'Safety Officer Chen',
        date: 'Nov 12, 2024',
        status: 'Passed',
        safetyScore: 94,
        complianceScore: 96,
        issues: []
      },
      {
        id: 2,
        type: 'Fire Safety Audit',
        inspector: 'Fire Dept Inspector',
        date: 'Nov 8, 2024',
        status: 'Warning',
        safetyScore: 88,
        complianceScore: 85,
        issues: [
          {
            id: 1,
            description: 'Fire extinguisher maintenance overdue',
            severity: 'Medium'
          }
        ],
        actionRequired: 'Service all fire extinguishers',
        actionDueDate: 'Nov 20, 2024'
      }
    ],
    safetyTrend: [
      { month: 'Jun', score: 89 },
      { month: 'Jul', score: 91 },
      { month: 'Aug', score: 87 },
      { month: 'Sep', score: 93 },
      { month: 'Oct', score: 90 },
      { month: 'Nov', score: 92 }
    ],
    workersTrained: 245,
    totalWorkers: 267,
    equipmentInspected: 94,
    daysSinceIncident: 156,
    upcomingInspections: [
      {
        id: 1,
        type: 'Structural Inspection',
        date: 'Nov 19, 2024',
        inspector: 'Structural Engineer Liu'
      },
      {
        id: 2,
        type: 'Environmental Audit',
        date: 'Nov 25, 2024',
        inspector: 'Environmental Consultant'
      }
    ]
  }
])

// Chart options for developer analytics
const revenueByProjectChartOption = ref({
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
    data: ['Bangkok Heights', 'Thonglor Residence', 'Ekkamai Gardens', 'Phrom Phong Tower']
  },
  yAxis: {
    type: 'value',
    axisLabel: {
      formatter: '฿{value}M'
    }
  },
  series: [
    {
      name: 'Project Revenue',
      type: 'bar',
      itemStyle: {
        color: '#05C7BE'
      },
      data: [2548, 1736, 987, 1245]
    }
  ]
})

const salesPipelineChartOption = ref({
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
      name: 'Pipeline Value',
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      data: [
        { value: 184, name: 'New Inquiries' },
        { value: 128, name: 'Qualified' },
        { value: 94, name: 'Viewing' },
        { value: 76, name: 'Negotiation' },
        { value: 68, name: 'Closed Won' }
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
          const colors = ['#3B82F6', '#10B981', '#F59E0B', '#8B5CF6', '#059669']
          return colors[params.dataIndex]
        }
      }
    }
  ]
})

const constructionTimelineChartOption = ref({
  tooltip: {
    trigger: 'axis',
    formatter: function(params) {
      return `${params[0].name}<br/>Progress: ${params[0].value}%<br/>Target: ${params[1].value}%`
    }
  },
  legend: {
    data: ['Actual Progress', 'Target Progress']
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
    max: 100,
    axisLabel: {
      formatter: '{value}%'
    }
  },
  series: [
    {
      name: 'Actual Progress',
      type: 'line',
      smooth: true,
      lineStyle: {
        color: '#10B981'
      },
      itemStyle: {
        color: '#10B981'
      },
      data: [0, 8, 15, 28, 42, 56, 63, 71, 78, 78, 78, 85]
    },
    {
      name: 'Target Progress',
      type: 'line',
      smooth: true,
      lineStyle: {
        color: '#6B7280',
        type: 'dashed'
      },
      itemStyle: {
        color: '#6B7280'
      },
      data: [0, 10, 18, 30, 45, 58, 68, 75, 82, 88, 92, 100]
    }
  ]
})

const unitTypePerformanceChartOption = ref({
  tooltip: {
    trigger: 'axis',
    formatter: function(params) {
      return `${params[0].name}<br/>Sales Rate: ${params[0].value}%`
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
    data: ['1 Bedroom', '2 Bedroom', '3 Bedroom', 'Penthouse']
  },
  yAxis: {
    type: 'value',
    max: 100,
    axisLabel: {
      formatter: '{value}%'
    }
  },
  series: [
    {
      name: 'Sales Rate',
      type: 'bar',
      itemStyle: {
        color: function(params) {
          const colors = ['#3B82F6', '#10B981', '#F59E0B', '#8B5CF6']
          return colors[params.dataIndex]
        }
      },
      data: [68, 61, 68, 58]
    }
  ]
})

const agentPerformanceChartOption = ref({
  tooltip: {
    trigger: 'axis',
    formatter: function(params) {
      return `${params[0].name}<br/>Units Sold: ${params[0].value}<br/>Conversion Rate: ${params[1].value}%`
    }
  },
  legend: {
    data: ['Units Sold', 'Conversion Rate']
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'category',
    data: ['Alexandra S.', 'Michael J.', 'Sarah L.', 'David W.', 'Emma T.']
  },
  yAxis: [
    {
      type: 'value',
      name: 'Units Sold',
      position: 'left'
    },
    {
      type: 'value',
      name: 'Conversion Rate (%)',
      position: 'right',
      max: 100
    }
  ],
  series: [
    {
      name: 'Units Sold',
      type: 'bar',
      itemStyle: {
        color: '#05C7BE'
      },
      data: [28, 22, 19, 16, 14]
    },
    {
      name: 'Conversion Rate',
      type: 'line',
      yAxisIndex: 1,
      lineStyle: {
        color: '#8B5CF6'
      },
      itemStyle: {
        color: '#8B5CF6'
      },
      data: [73, 68, 71, 65, 69]
    }
  ]
})

const safetyTrendsChartOption = ref({
  tooltip: {
    trigger: 'axis',
    formatter: function(params) {
      return `${params[0].name}<br/>Safety Score: ${params[0].value}/100`
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
    data: ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov']
  },
  yAxis: {
    type: 'value',
    min: 80,
    max: 100,
    axisLabel: {
      formatter: '{value}'
    }
  },
  series: [
    {
      name: 'Safety Score',
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
      data: [89, 91, 87, 93, 90, 92]
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

const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}

const getVerificationScoreColor = (score) => {
  if (score >= 80) return 'text-green-500'
  if (score >= 60) return 'text-blue-500'
  if (score >= 40) return 'text-yellow-500'
  return 'text-red-500'
}

const getVerificationLevel = (score) => {
  if (score >= 80) return 'Verified Developer'
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
  if (revenueByProjectChart.value) revenueByProjectChart.value.resize()
  if (salesPipelineChart.value) salesPipelineChart.value.resize()
  if (constructionTimelineChart.value) constructionTimelineChart.value.resize()
  if (unitTypePerformanceChart.value) unitTypePerformanceChart.value.resize()
  if (agentPerformanceChart.value) agentPerformanceChart.value.resize()
  if (safetyTrendsChart.value) safetyTrendsChart.value.resize()
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

/* Chart container improvements */
.h-64 {
  height: 16rem;
}

/* Animation for progress bars */
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

/* Custom gradient backgrounds for project cards */
.gradient-purple {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.gradient-blue {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.gradient-teal {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

/* Hover effects for interactive elements */
.hover-lift {
  transition: transform 0.2s ease-in-out;
}

.hover-lift:hover {
  transform: translateY(-2px);
}

/* Status indicator styles */
.status-indicator {
  position: relative;
}

.status-indicator::before {
  content: '';
  position: absolute;
  top: 50%;
  left: -8px;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  transform: translateY(-50%);
}

.status-indicator.active::before {
  background-color: #10b981;
}

.status-indicator.delayed::before {
  background-color: #ef4444;
}

.status-indicator.pending::before {
  background-color: #f59e0b;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .grid-cols-8 {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
  
  .grid-cols-8 > div:nth-child(n+5) {
    display: none;
  }
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
