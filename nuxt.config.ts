// import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: [
    "@pinia/nuxt",
    "@nuxt/content",
    "@nuxt/image",
    "@vueuse/nuxt",
    "nuxt-lodash",
    "nuxt-typed-router",
    "@nuxt/ui",
  ],
  app: {
    head: {
      script: [],
    },
  },

  // css: ["~/assets/css/main.css"],
  vite: {
    // plugins: [tailwindcss()],
  },

  image: {
    format: ["webp"],
    quality: 50,
    domains: ["nuxtjs.org"],
  },
});
