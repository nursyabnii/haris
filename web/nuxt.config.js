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
        { 
          rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css' 
        },
      ]
    },
  },
  devtools: { enabled: true },
  css: ['~/assets/css/main.css', 'animate.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  buildModules: [
    '@nuxtjs/tailwindcss',
  ],
  modules: ['@nuxt/ui']
})

