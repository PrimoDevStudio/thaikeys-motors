// nuxt.config.ts
const i18nConfig = {
  locales: [
    {
      code: 'en',
      name: 'English',
      file: 'en.json',
      iso: 'en-US'
    },
    {
      code: 'th',
      name: 'ไทย',
      file: 'th.json',
      iso: 'th-TH'
    }
  ],
  lazy: true,
  langDir: './locales',
  defaultLocale: 'th',
  detectBrowserLanguage: {
    useCookie: true,
    cookieKey: 'i18n_redirected',
    redirectOn: 'root',
    alwaysRedirect: false,
    fallbackLocale: 'th'
  },
  strategy: 'prefix_except_default'
}

export default defineNuxtConfig({
  compatibilityDate: '2025-08-12',
  
  devtools: { enabled: true },

  typescript: {
    typeCheck: true,
  },

  modules: [
    '@nuxtjs/tailwindcss', 
    '@nuxtjs/supabase', 
    '@nuxtjs/i18n', 
    'nuxt-echarts',
    '@nuxt/image', 
    '@nuxtjs/google-fonts',
    '@productdevbook/chatwoot'
  ],

  // @ts-ignore - i18n types not yet recognized
  i18n: i18nConfig,

  googleFonts: {
    families: {
      'DM Sans': [400, 500, 600, 700, 800, 900]
    },
    display: 'swap',
    download: true,
    inject: true
  },

  chatwoot: {
    init: {
      websiteToken: 'mcU6DvnFm2YepiBENZDyshco',
      baseUrl: 'https://chatwoot-production-1730.up.railway.app'
    },
    settings: {
      locale: 'en',
      position: 'right',
      launcherTitle: 'Chat with us'
    },
    partytown: false
  },

  supabase: {
    redirectOptions: {
      login: '/auth/login',
      callback: '/auth/callback',
      exclude: ['/*'],
    },
    url: process.env.SUPABASE_URL,
    key: process.env.SUPABASE_PUBLISHABLE_KEY,
  },

  app: {
    head: {
      htmlAttrs: {
        lang: 'th'
      },
      title: 'ThaiKeys Motors',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { 
          name: 'description', 
          content: "Thailand's most comprehensive vehicle marketplace" 
        }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      ],
      script: [
        {
          innerHTML: `
            (function() {
              try {
                const savedTheme = localStorage.getItem('theme')
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
                const shouldBeDark = savedTheme === 'dark' || (!savedTheme && prefersDark)
                
                if (shouldBeDark) {
                  document.documentElement.classList.add('dark')
                } else {
                  document.documentElement.classList.remove('dark')
                }
              } catch (e) {}
            })()
          `,
          type: 'text/javascript'
        }
      ]
    },
  },

  runtimeConfig: {
    // Private (server-side only)
    supabaseServiceKey: process.env.SUPABASE_SERVICE_KEY,
    bunnyStorageEndpoint: process.env.BUNNY_STORAGE_ENDPOINT,
    bunnyAccessKey: process.env.BUNNY_ACCESS_KEY,
    bunnyStreamApiKey: process.env.BUNNY_STREAM_API_KEY,
    bunnyStreamLibraryId: process.env.BUNNY_STREAM_LIBRARY_ID,
    docusealUrl: process.env.DOCUSEAL_URL,
    docusealApiKey: process.env.DOCUSEAL_API_KEY,
    docusealTemplateId: process.env.DOCUSEAL_TEMPLATE_ID,
    
    public: {
      // Public (client-side accessible)
      supabaseUrl: process.env.SUPABASE_URL,
      supabaseAnonKey: process.env.SUPABASE_PUBLISHABLE_KEY,
      mapboxToken: process.env.MAPBOX_TOKEN,
      bunnyCdnUrl: process.env.NUXT_PUBLIC_BUNNY_CDN_URL,
      env: process.env.NODE_ENV,
      docusealUrl: process.env.DOCUSEAL_URL,
      docusealTemplateSlug: process.env.DOCUSEAL_TEMPLATE_ID,
    },
  },

  tailwindcss: {
    configPath: 'tailwind.config.js',
    exposeConfig: false,
  },
})