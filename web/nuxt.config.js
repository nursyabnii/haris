// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Muhammad Nur Sya Bani Haris',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      link: [
        { 
          rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' 
        },
      ],
      script: [
        {
          src: '/assets/js/script.js'
        }
      ],
    },
  },
  devtools: { enabled: true },
  css: ['@/assets/css/main.css'],
  
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
