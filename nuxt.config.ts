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
    "nuxt-swiper",
  ],
  app: {
    head: {
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/flowbite@3.1.1/dist/flowbite.min.js",
        },
      ],
    },
  },
  // css: ["swiper/css", "swiper/css/effect-coverflow", "swiper/css/pagination"],

  image: {
    format: ["webp"],
    quality: 50,
    domains: ["nuxtjs.org"],
  },
});
