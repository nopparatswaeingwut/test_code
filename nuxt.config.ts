
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  css: [
    'bootstrap/dist/css/bootstrap.min.css',
    '@fortawesome/fontawesome-free/css/all.min.css',
    'bootstrap-icons/font/bootstrap-icons.css'
  ],
  plugins: [
    '~/plugins/bootstrap.js'
  ]
})
