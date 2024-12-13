// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  // Firebase plugin dosyasını ekle
  plugins: ["~/plugins/firebase.js"],

  // Firebase client-side çalışır, bu yüzden SSR devre dışı
  ssr: false,

  compatibilityDate: "2024-12-13"
});