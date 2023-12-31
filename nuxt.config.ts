// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/google-fonts', '@nuxtjs/tailwindcss', 'nuxt-vitest'],
  googleFonts: {
    families: {
      Inter: [400, 700],
    },
  },

  app: {
    head: {
      title: 'License Plate Number App',
    },
  },
})
