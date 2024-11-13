// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/eslint', '@nuxt/image'],
  components: ['src/components'],
  devtools: { enabled: true },
  css: ['~/src/assets/style.css'],
  dir: {
    assets: 'src/assets',
    public: 'public',
    plugins: 'src/plugins',
    pages: 'src/pages',
    layouts: 'src/layouts',
    middleware: 'src/middleware',
  },
  compatibilityDate: '2024-04-03',
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  eslint: {
    config: {
      stylistic: true,
    },
  },
})
