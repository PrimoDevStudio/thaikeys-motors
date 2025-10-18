<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
// Global metadata + Theme initialization
useHead({
  titleTemplate: '%s - thaikeys.co.th',
  meta: [
    {
      name: 'description',
      content: 'Thailand\'s most advanced property platform with integrated transport mapping, professional agents, and modern payment solutions.'
    }
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
})
</script>