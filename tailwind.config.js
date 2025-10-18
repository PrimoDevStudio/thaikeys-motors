// tailwind.config.js
module.exports = {
  darkMode: 'class', // Enable class-based dark mode
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue"
  ],
  theme: {
    letterSpacing: {
      'tightest': '-0.075em',
      'tighter': '-0.05em', 
      'tight': '0em',
      'normal': '0.015em',
      'wider': '0.05em',
      'widest': '0.1em',
    },
    extend: {
      fontFamily: {
        'sans': ['DM Sans', 'system-ui', 'sans-serif'],
        'display': ['DM Sans', 'system-ui', 'sans-serif'],
      },
      colors: {
        // NEW THAIKEYS BRAND COLORS
        'brand-navy': '#001f3f',
        'brand-blue-light': '#0987EB',
        'brand-blue-dark': '#0060D0',
        'brand-turqoise-light': '#39CCCC',
        'brand-turqoise-dark': '#2FB6B6',
        'brand-red-dark':'#CE074A',
        'brand-red-light':'#E90D57',
        'brand-green-dark':'#227843',
        'brand-green-light':'#1F8546',
        'brand-pruple-light':'#9433EA',
        'brand-pruple-dark':'#7815D0',
        
        gray: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
        
        // Enhanced navy color variations
        navy: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#001f3f',  // Our primary navy
        },
        
        // Teal/blue accent variations
        teal: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#39cccc',  // Our accent blue
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        },
        
        // Enhanced dark mode colors
        dark: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
        }
      },
      boxShadow: {
        'soft': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'medium': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'large': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        // Dark mode shadows
        'dark-soft': '0 1px 3px 0 rgba(0, 0, 0, 0.3), 0 1px 2px 0 rgba(0, 0, 0, 0.2)',
        'dark-medium': '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)',
        'dark-large': '0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.2)',
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      // Additional dark mode utilities
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}