<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 font-sans transition-colors duration-300">

    <!-- Hero Section -->
    <section class="relative pt-32 pb-32 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-4 lg:px-4">
        <div class="text-center max-w-4xl mx-auto">
          <h1 class="text-4xl lg:text-6xl font-bold text-brand-navy dark:text-white mb-6 leading-tight">
            Digital Payment Solutions
          </h1>
          <p class="text-xl lg:text-2xl text-brand-navy dark:text-gray-300 leading-relaxed">
            Transparent, secure, and convenient payment processing for modern property transactions in Thailand
          </p>
        </div>
      </div>
    </section>

    <!-- Payment Methods Overview -->
    <section class="py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-4 lg:px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl lg:text-4xl font-bold text-brand-navy dark:text-white mb-4">Available Payment Methods</h2>
          <p class="text-lg text-brand-navy dark:text-gray-300">Choose the payment method that works best for you</p>
        </div>

        <div class="grid lg:grid-cols-3 gap-8">
        <!-- Credit/Debit Cards -->
        <div class="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
        <div class="flex items-center justify-between mb-6">
            <div class="w-16 h-16 bg-red-100 dark:bg-red-900/20 rounded-xl flex items-center justify-center">
            <svg class="w-8 h-8 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
            </div>
            <div class="text-right">
            <div class="text-2xl font-bold text-brand-navy dark:text-white">4%</div>
            <div class="text-sm text-brand-navy dark:text-gray-400">Processing Fee (7% VAT included)</div>
            </div>
        </div>
        <h3 class="text-xl font-bold text-brand-navy dark:text-white mb-3">Credit & Debit Cards</h3>
        <p class="text-brand-navy dark:text-gray-300 mb-4 min-h-[3lh]">
            International and domestic cards accepted. Perfect for foreign clients and convenient one-time payments.
        </p>
        <div class="space-y-3 mb-6">
            <div class="flex items-center space-x-2">
            <svg class="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
            <span class="text-sm text-brand-navy dark:text-gray-300">Visa, Mastercard, JCB, AMEX</span>
            </div>
            <div class="flex items-center space-x-2">
            <svg class="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
            <span class="text-sm text-brand-navy dark:text-gray-300">Multi-currency: USD, GBP, EUR, AUD, JPY, THB<br>(Visa & Mastercard only)</span>
            </div>
            <div class="flex items-center space-x-2">
            <svg class="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
            <span class="text-sm text-brand-navy dark:text-gray-300">Instant processing</span>
            </div>
            <div class="flex items-center space-x-2">
            <svg class="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
            <span class="text-sm text-brand-navy dark:text-gray-300">Global acceptance</span>
            </div>
        </div>
        <div class="bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-800 rounded-lg p-3">
            <div class="text-sm text-red-700 dark:text-red-400 font-medium">Best for: International clients, convenience payments</div>
        </div>
        </div>
          <!-- QR Payment (PromptPay) -->
          <div class="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border-2 border-brand-red-light">
            <div class="flex items-center justify-between mb-6">
              <div class="w-16 h-16 bg-blue-100 dark:bg-blue-900/20 rounded-xl flex items-center justify-center">
                <svg class="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                </svg>
              </div>
              <div class="text-right">
                <div class="text-2xl font-bold text-brand-navy dark:text-white">2%</div>
                <div class="text-sm text-brand-navy dark:text-gray-400">Processing Fee (7% VAT included)</div>
              </div>
            </div>
            <div class="flex items-center space-x-2 mb-3">
              <h3 class="text-xl font-bold text-brand-navy dark:text-white">QR Payment</h3>
              <span class="bg-brand-red-light text-brand-navy px-2 py-1 rounded-full text-xs font-semibold">Popular</span>
            </div>
            <p class="text-brand-navy dark:text-gray-300 mb-4 min-h-[3lh]">
              PromptPay QR codes for instant transfers. The preferred payment method for Thai users with lower fees.
            </p>
            <div class="space-y-3 mb-6">
              <div class="flex items-center space-x-2">
                <svg class="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span class="text-sm text-brand-navy dark:text-gray-300">PromptPay integration</span>
              </div>
              <div class="flex items-center space-x-2">
                <svg class="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span class="text-sm text-brand-navy dark:text-gray-300">Scan and pay instantly</span>
              </div>
              <div class="flex items-center space-x-2">
                <svg class="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span class="text-sm text-brand-navy dark:text-gray-300">Lower processing fees</span>
              </div>
            </div>
            <div class="bg-blue-50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-800 rounded-lg p-3">
              <div class="text-sm text-blue-700 dark:text-blue-400 font-medium">Best for: Thai users, medium-sized payments</div>
            </div>
          </div>

          <!-- Bank Transfer -->
          <div class="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
            <div class="flex items-center justify-between mb-6">
              <div class="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-xl flex items-center justify-center">
                <svg class="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                </svg>
              </div>
              <div class="text-right">
                <div class="text-2xl font-bold text-brand-navy dark:text-white">₿15</div>
                <div class="text-sm text-brand-navy dark:text-gray-400">Flat Fee (7% VAT included)</div>
              </div>
            </div>
            <h3 class="text-xl font-bold text-brand-navy dark:text-white mb-3">Bank Transfer</h3>
            <p class="text-brand-navy dark:text-gray-300 mb-4 min-h-[3lh]">
              Direct debit and mobile banking with flat fees. Most cost-effective for large transactions like security deposits.
            </p>
            <div class="space-y-3 mb-6">
              <div class="flex items-center space-x-2">
                <svg class="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span class="text-sm text-brand-navy dark:text-gray-300">All major Thai banks</span>
              </div>
              <div class="flex items-center space-x-2">
                <svg class="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span class="text-sm text-brand-navy dark:text-gray-300">Mobile banking apps</span>
              </div>
              <div class="flex items-center space-x-2">
                <svg class="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span class="text-sm text-brand-navy dark:text-gray-300">Lowest cost for large amounts</span>
              </div>
            </div>
            <div class="bg-green-50 dark:bg-green-900/10 border border-green-200 dark:border-green-800 rounded-lg p-3">
              <div class="text-sm text-green-700 dark:text-green-400 font-medium">Best for: Security deposits, large payments</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Fee Comparison -->
    <section class="py-16 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div class="max-w-6xl mx-auto px-4 lg:px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl lg:text-4xl font-bold text-brand-navy dark:text-white mb-4">Payment Fee Comparison</h2>
          <p class="text-lg text-brand-navy dark:text-gray-300">See how much you'll pay with different payment methods</p>
        </div>

        <div class="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8">
          <div class="overflow-x-auto">
            <table class="w-full">
              <thead>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                  <th class="text-left py-4 px-4 font-semibold text-brand-navy dark:text-white">Transaction Amount</th>
                  <th class="text-center py-4 px-4 font-semibold text-red-600 dark:text-red-400">Credit/Debit Cards (4%)</th>
                  <th class="text-center py-4 px-4 font-semibold text-blue-600 dark:text-blue-400">QR Payment (2%)</th>
                  <th class="text-center py-4 px-4 font-semibold text-green-600 dark:text-green-400">Bank Transfer (₿15)</th>
                </tr>
              </thead>
              <tbody class="text-brand-navy dark:text-gray-300">
                <tr class="border-b border-gray-200 dark:border-gray-700">
                  <td class="py-4 px-4 font-medium">₿5,000</td>
                  <td class="text-center py-4 px-4 text-red-600 dark:text-red-400">₿200</td>
                  <td class="text-center py-4 px-4 text-blue-600 dark:text-blue-400">₿100</td>
                  <td class="text-center py-4 px-4 text-green-600 dark:text-green-400 font-bold">₿15</td>
                </tr>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                  <td class="py-4 px-4 font-medium">₿15,000</td>
                  <td class="text-center py-4 px-4 text-red-600 dark:text-red-400">₿600</td>
                  <td class="text-center py-4 px-4 text-blue-600 dark:text-blue-400">₿300</td>
                  <td class="text-center py-4 px-4 text-green-600 dark:text-green-400 font-bold">₿15</td>
                </tr>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                  <td class="py-4 px-4 font-medium">₿30,000</td>
                  <td class="text-center py-4 px-4 text-red-600 dark:text-red-400">₿1,200</td>
                  <td class="text-center py-4 px-4 text-blue-600 dark:text-blue-400">₿600</td>
                  <td class="text-center py-4 px-4 text-green-600 dark:text-green-400 font-bold">₿15</td>
                </tr>
                <tr>
                  <td class="py-4 px-4 font-medium">₿60,000</td>
                  <td class="text-center py-4 px-4 text-red-600 dark:text-red-400">₿2,400</td>
                  <td class="text-center py-4 px-4 text-blue-600 dark:text-blue-400">₿1,200</td>
                  <td class="text-center py-4 px-4 text-green-600 dark:text-green-400 font-bold">₿15</td>
                </tr>
              </tbody>
            </table>
          </div>
          
            <div class="mt-6 p-4 bg-blue-50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-800 rounded-lg">
            <div class="text-center">
                <svg class="w-6 h-6 text-blue-600 dark:text-blue-400 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p class="text-sm text-blue-700 dark:text-blue-400 font-bold mb-2">
                All fees include 7% VAT.
                </p>
                <p class="text-sm text-blue-700 dark:text-blue-400">
                For security deposits over ₿750, bank transfer becomes the most cost-effective option. 
                Choose the payment method that makes sense for your transaction size.
                </p>
            </div>
            </div>
        </div>
      </div>
    </section>

    <!-- How It Works -->
    <section class="py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-4 lg:px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl lg:text-4xl font-bold text-brand-navy dark:text-white mb-4">How Digital Payments Work</h2>
          <p class="text-lg text-brand-navy dark:text-gray-300">Simple, secure, and transparent payment processing</p>
        </div>

        <div class="grid lg:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="w-16 h-16 bg-brand-red-light rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-2xl font-bold text-brand-navy">1</span>
            </div>
            <h3 class="text-xl font-bold text-brand-navy dark:text-white mb-3">Select Payment Method</h3>
            <p class="text-brand-navy dark:text-gray-300">Choose from cards, QR payment, or bank transfer based on your preferences and transaction size.</p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 bg-brand-red-light rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-2xl font-bold text-brand-navy">2</span>
            </div>
            <h3 class="text-xl font-bold text-brand-navy dark:text-white mb-3">Review Fees</h3>
            <p class="text-brand-navy dark:text-gray-300">See exactly what you'll pay in processing fees before confirming your payment.</p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 bg-brand-red-light rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-2xl font-bold text-brand-navy">3</span>
            </div>
            <h3 class="text-xl font-bold text-brand-navy dark:text-white mb-3">Secure Processing</h3>
            <p class="text-brand-navy dark:text-gray-300">Your payment is processed securely through Omise, Thailand's leading payment gateway.</p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 bg-brand-red-light rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-2xl font-bold text-brand-navy">4</span>
            </div>
            <h3 class="text-xl font-bold text-brand-navy dark:text-white mb-3">Instant Confirmation</h3>
            <p class="text-brand-navy dark:text-gray-300">Receive immediate confirmation and digital receipts for all successful transactions.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Security & Trust -->
    <section class="py-16 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div class="max-w-6xl mx-auto px-4 lg:px-4">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl lg:text-4xl font-bold text-brand-navy dark:text-white mb-6">Security & Trust</h2>
            <p class="text-lg text-brand-navy dark:text-gray-300 mb-8">
              Your financial security is our top priority. We use industry-leading security measures to protect your transactions.
            </p>
            
            <div class="space-y-6">
              <div class="flex items-start space-x-4">
                <div class="w-8 h-8 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <svg class="w-4 h-4 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-1">PCI DSS Compliant</h3>
                  <p class="text-brand-navy dark:text-gray-300">Bank-level security standards for all card transactions and data storage.</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-4">
                <div class="w-8 h-8 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <svg class="w-4 h-4 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-1">SSL Encryption</h3>
                  <p class="text-brand-navy dark:text-gray-300">End-to-end encryption protects your personal and financial information.</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-4">
                <div class="w-8 h-8 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <svg class="w-4 h-4 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-brand-navy dark:text-white mb-1">Transparent Fees</h3>
                  <p class="text-brand-navy dark:text-gray-300">No hidden charges - all fees are clearly displayed before payment confirmation.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="relative">
            <div class="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-900/20 dark:via-indigo-900/20 dark:to-purple-900/20 rounded-3xl p-8 h-96">
              <div class="absolute top-8 left-8 bg-white dark:bg-gray-700 rounded-lg p-4 shadow-lg">
                <div class="flex items-center space-x-3">
                  <div class="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span class="text-sm font-medium text-brand-navy dark:text-white">Secure Connection</span>
                </div>
              </div>
              
              <div class="absolute top-24 right-8 bg-white dark:bg-gray-700 rounded-lg p-4 shadow-lg">
                <div class="text-xs text-brand-navy dark:text-gray-400 mb-1">Payment Processing</div>
                <div class="text-lg font-bold text-brand-navy dark:text-white">256-bit SSL</div>
              </div>
              
              <div class="absolute bottom-8 left-8 bg-white dark:bg-gray-700 rounded-lg p-4 shadow-lg">
                <div class="flex items-center space-x-2">
                  <svg class="w-4 h-4 text-brand-red-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span class="text-sm font-medium text-brand-navy dark:text-white">Verified Transaction</span>
                </div>
              </div>
              
              <div class="absolute bottom-24 right-12 bg-white dark:bg-gray-700 rounded-lg p-3 shadow-lg">
                <div class="w-8 h-8 bg-brand-red-light rounded-full mx-auto"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div class="max-w-4xl mx-auto px-4 lg:px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl lg:text-4xl font-bold text-brand-navy dark:text-white mb-4">Frequently Asked Questions</h2>
          <p class="text-lg text-brand-navy dark:text-gray-300">Everything you need to know about our payment system</p>
        </div>

        <div class="space-y-6">
          <div class="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
            <h3 class="text-xl font-bold text-brand-navy dark:text-white mb-3">Why do you charge payment processing fees?</h3>
            <p class="text-brand-navy dark:text-gray-300 leading-relaxed">
              Payment processing fees are charged directly by our payment processor (Omise) and banking networks. We pass these costs transparently to users rather than hiding them in inflated pricing. This ensures agents keep their full commissions while users pay only for the payment convenience they choose to use.
            </p>
          </div>

          <div class="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
            <h3 class="text-xl font-bold text-brand-navy dark:text-white mb-3">Which payment method should I choose?</h3>
            <p class="text-brand-navy dark:text-gray-300 leading-relaxed">
              For large transactions like security deposits, bank transfer (₿15 flat fee) is most cost-effective. For medium payments, QR payment (2%) offers good value. Credit cards (4%) are perfect for international clients or when you need instant processing convenience.
            </p>
          </div>

          <div class="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
            <h3 class="text-xl font-bold text-brand-navy dark:text-white mb-3">Are my payment details secure?</h3>
            <p class="text-brand-navy dark:text-gray-300 leading-relaxed">
              Yes, all payments are processed through Omise, a PCI DSS compliant payment gateway. We never store your card details or banking information. All transactions use bank-level encryption and security protocols.
            </p>
          </div>

          <div class="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
            <h3 class="text-xl font-bold text-brand-navy dark:text-white mb-3">Can I get a refund if something goes wrong?</h3>
            <p class="text-brand-navy dark:text-gray-300 leading-relaxed">
              Refunds are handled according to our terms of service and depend on the specific circumstances. Payment processing fees are non-refundable as they're charged by the payment processor, but we'll work with you to resolve any legitimate issues with your transaction.
            </p>
          </div>

          <div class="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
            <h3 class="text-xl font-bold text-brand-navy dark:text-white mb-3">Do agents pay any payment processing fees?</h3>
            <p class="text-brand-navy dark:text-gray-300 leading-relaxed">
              No, agents never pay payment processing fees. All fees are paid by the end users who choose to use digital payment methods. This ensures agents receive their full commission while providing clients with convenient payment options.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 bg-brand-navy dark:bg-gray-800 text-white transition-colors duration-300">
      <div class="max-w-4xl mx-auto px-4 lg:px-4 text-center">
        <h2 class="text-3xl lg:text-4xl font-bold mb-6">Ready to Experience Modern Property Payments?</h2>
        <p class="text-xl text-gray-300 mb-8 leading-relaxed">
          Join thousands of users who trust thaikeys.co.th for secure, transparent property transactions
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button class="bg-brand-red-light text-brand-navy px-8 py-3 rounded-xl font-semibold hover:bg-teal-300 transition-colors duration-300 text-lg">
            Start Searching Properties
          </button>
          <button class="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-brand-navy transition-colors duration-300 text-lg">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Meta tags
useHead({
  title: 'Digital Payment Solutions - thaikeys.co.th',
  meta: [
    {
      name: 'description',
      content: 'Transparent, secure payment processing for property transactions in Thailand. Credit cards, QR payments, and bank transfers with clear fee structure.'
    }
  ]
})
</script>