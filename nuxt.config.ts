// https://nuxt.com/docs/api/configuration/nuxt-config
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
  ],
  image: {
    format: ["webp"],
    quality: 50,
    domains: ["nuxtjs.org"],
  },
  pwa: {
    base: "/", // Base URL for the PWA
    manifest: {
      name: "Nuxt Shop",
      short_name: "Shop",
      description:
        "A modern shop with tree chart navigation and offline support.",
      lang: "en",
      start_url: "/",
      display: "standalone", // "standalone" for an app-like experience
      theme_color: "#4CAF50", // Customize to match your brand
      background_color: "#FFFFFF", // Background color of the splash screen
      icons: [
        {
          src: "/icon-192x192.png", // Path to your 192x192 icon
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "/icon-512x512.png", // Path to your 512x512 icon
          sizes: "512x512",
          type: "image/png",
        },
        {
          src: "/icon-512x512-maskable.png", // Maskable icon for better integration
          sizes: "512x512",
          type: "image/png",
          purpose: "maskable",
        },
      ],
    },
    workbox: {
      globPatterns: ["**/*.{js,css,html,png,svg,json}"], // فایل‌هایی که باید کش شوند
      globDirectory: ".nuxt/dev-sw-dist", // مسیر صحیح برای فایل‌های تولید شده
      navigateFallback: "/offline.html", // Page to display when offline
      runtimeCaching: [
        {
          urlPattern: /^https:\/\/fakestoreapi\.com\/products/, // Cache API responses
          handler: "CacheFirst",
          options: {
            cacheName: "api-cache",
            expiration: {
              maxEntries: 50, // Limit cache entries
              maxAgeSeconds: 60 * 60 * 24 * 7, // Cache for one week
            },
            cacheableResponse: {
              statuses: [0, 200],
            },
          },
        },
        // {
        //   urlPattern: /^https:\/\/cdn\.yourshopassets\.com/, // Cache images from your CDN
        //   handler: "CacheFirst",
        //   options: {
        //     cacheName: "image-cache",
        //     expiration: {
        //       maxEntries: 100, // Limit image cache
        //       maxAgeSeconds: 60 * 60 * 24 * 30, // Cache for one month
        //     },
        //     cacheableResponse: {
        //       statuses: [0, 200],
        //     },
        //   },
        // },
      ],
    },
    devOptions: {
      enabled: true, // Enable PWA in development for testing
      type: "module", // Use "module" for modern browser support
    },
    client: {
      installPrompt: true, // Enable install prompt for users
      periodicSyncForUpdates: 1, // Periodically check for updates
    },
  },
});
