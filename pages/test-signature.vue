<!-- pages/test-signature.vue -->
<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4">
    <div class="max-w-5xl mx-auto">
      <!-- Header -->
      <div class="mb-8 text-center">
        <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Lease Agreement Signing
        </h1>
        <p class="text-gray-600 dark:text-gray-400">
          Complete lease signing for all parties
        </p>
      </div>

      <!-- Setup Form -->
      <div v-if="!submissionCreated" class="mb-6 bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <h2 class="text-lg font-semibold mb-4">Lease Agreement Parties</h2>
        
        <div class="space-y-6">
          <!-- Landlord -->
          <div class="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
            <h3 class="font-semibold text-blue-900 dark:text-blue-100 mb-3">Landlord</h3>
            <div class="space-y-3">
              <input
                v-model="landlordName"
                type="text"
                class="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
                placeholder="Landlord Name"
              />
              <input
                v-model="landlordEmail"
                type="email"
                class="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
                placeholder="landlord@example.com"
              />
            </div>
          </div>

          <!-- Tenant -->
          <div class="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
            <h3 class="font-semibold text-green-900 dark:text-green-100 mb-3">Tenant</h3>
            <div class="space-y-3">
              <input
                v-model="tenantName"
                type="text"
                class="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
                placeholder="Tenant Name"
              />
              <input
                v-model="tenantEmail"
                type="email"
                class="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
                placeholder="tenant@example.com"
              />
            </div>
          </div>

          <!-- ThaiKeys Agent -->
          <div class="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
            <h3 class="font-semibold text-purple-900 dark:text-purple-100 mb-3">ThaiKeys Agent</h3>
            <div class="space-y-3">
              <input
                v-model="agentName"
                type="text"
                class="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
                placeholder="Agent Name"
              />
              <input
                v-model="agentEmail"
                type="email"
                class="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
                placeholder="agent@thaikeys.co.th"
              />
            </div>
          </div>

          <button
            @click="createSubmission"
            :disabled="loading"
            class="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50"
          >
            {{ loading ? 'Creating Lease...' : 'Create Lease Agreement' }}
          </button>

          <div v-if="error" class="p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
            <p class="text-red-600 dark:text-red-400 text-sm">{{ error }}</p>
          </div>
        </div>
      </div>

      <!-- Signing Links -->
      <div v-if="submissionCreated && signingLinks.length > 0" class="space-y-4">
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h2 class="text-lg font-semibold mb-4">✓ Lease Agreement Created!</h2>
          <p class="text-sm text-gray-600 dark:text-gray-400 mb-6">
            Send these signing links to each party:
          </p>

          <div class="space-y-4">
            <div 
              v-for="link in signingLinks" 
              :key="link.slug"
              class="p-4 border rounded-lg"
              :class="{
                'border-blue-200 bg-blue-50 dark:bg-blue-900/20': link.role === 'Landlord',
                'border-green-200 bg-green-50 dark:bg-green-900/20': link.role === 'Tenant',
                'border-purple-200 bg-purple-50 dark:bg-purple-900/20': link.role === 'ThaiKeys Agent'
              }"
            >
              <div class="flex items-start justify-between mb-3">
                <div>
                  <h3 class="font-semibold">{{ link.role }}</h3>
                  <p class="text-sm text-gray-600 dark:text-gray-400">{{ link.email }}</p>
                  <p class="text-xs text-gray-500 mt-1">{{ link.name }}</p>
                </div>
                <span 
                  class="px-3 py-1 text-xs rounded-full"
                  :class="{
                    'bg-yellow-100 text-yellow-800': link.status === 'awaiting',
                    'bg-green-100 text-green-800': link.status === 'completed'
                  }"
                >
                  {{ link.status }}
                </span>
              </div>

              <div class="flex gap-2">
                <a
                  :href="link.embedUrl"
                  target="_blank"
                  class="flex-1 bg-blue-600 text-white px-4 py-2 rounded text-center text-sm font-medium hover:bg-blue-700"
                >
                  Open Signing Page →
                </a>
                <button
                  @click="copyLink(link.embedUrl)"
                  class="px-4 py-2 border border-gray-300 rounded text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  {{ copiedLink === link.embedUrl ? '✓ Copied' : 'Copy' }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface SigningLink {
  role: string
  email: string
  name: string
  embedUrl: string
  slug: string
  status: string
  id: number
}

// Form data
const landlordName = ref('John Smith')
const landlordEmail = ref('landlord@example.com')
const tenantName = ref('Jane Doe')
const tenantEmail = ref('tenant@example.com')
const agentName = ref('ThaiKeys Agent')
const agentEmail = ref('agent@thaikeys.co.th')

// State
const loading = ref(false)
const error = ref('')
const submissionCreated = ref(false)
const signingLinks = ref<SigningLink[]>([])
const copiedLink = ref('')

const createSubmission = async () => {
  if (!landlordName.value || !landlordEmail.value || !tenantName.value || !tenantEmail.value) {
    alert('Please fill in all required fields')
    return
  }
  
  loading.value = true
  error.value = ''
  
  try {
    const response = await $fetch<{ submitters: SigningLink[]; submissionId: number }>('/api/docuseal/create-lease-submission', {
      method: 'POST',
      body: {
        submitters: [
          {
            role: 'Landlord',
            email: landlordEmail.value,
            name: landlordName.value
          },
          {
            role: 'Tenant',
            email: tenantEmail.value,
            name: tenantName.value
          },
          {
            role: 'ThaiKeys Agent',
            email: agentEmail.value,
            name: agentName.value
          }
        ]
      }
    })
    
    console.log('Submission created:', response)
    
    signingLinks.value = response.submitters
    submissionCreated.value = true
    
  } catch (err: any) {
    console.error('Error:', err)
    error.value = err.data?.message || err.message || 'Failed to create lease agreement'
  } finally {
    loading.value = false
  }
}

const copyLink = async (url: string) => {
  try {
    await navigator.clipboard.writeText(url)
    copiedLink.value = url
    setTimeout(() => {
      copiedLink.value = ''
    }, 2000)
  } catch (err) {
    console.error('Failed to copy:', err)
  }
}
</script>