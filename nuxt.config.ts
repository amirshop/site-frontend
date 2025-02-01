export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: [
    "@pinia/nuxt",
    "@nuxt/content",
    "@nuxt/image",
    "@nuxt/ui",
    "@vueuse/nuxt",
    "@vite-pwa/nuxt",
    "nuxt-lodash",
    "nuxt-typed-router",
  ],

  image: {
    format: ["webp"],
    quality: 50,
    domains: ["nuxtjs.org"],
  },
  pwa: {
    base: "/",
    manifest: {
      name: "Nuxt Shop",
      short_name: "Shop",
      description:
        "A modern shop with tree chart navigation and offline support.",
      lang: "en",
      start_url: "/",
      display: "standalone",
      theme_color: "#4CAF50",
      background_color: "#FFFFFF",
      icons: [
        { src: "/icon-192x192.png", sizes: "192x192", type: "image/png" },
        { src: "/icon-512x512.png", sizes: "512x512", type: "image/png" },
        {
          src: "/icon-512x512-maskable.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "maskable",
        },
      ],
    },
    // workbox: {
    //   globPatterns: ["**/*"],
    //   navigateFallback: "/offline.html",
    //   runtimeCaching: [
    //     {
    //       urlPattern: /^https:\\fakestoreapi\.com/,
    //       handler: "CacheFirst",
    //       options: {
    //         cacheName: "api-cache",
    //         expiration: {
    //           maxEntries: 50,
    //           maxAgeSeconds: 60 * 60 * 24 * 7,
    //         },
    //         cacheableResponse: {
    //           statuses: [0, 200],
    //         },
    //       },
    //     },
    //   ],
    // },
    // devOptions: {
    //   enabled: true,
    //   type: "module",
    // },
    // client: {
    //   installPrompt: true,
    // },
  },
});