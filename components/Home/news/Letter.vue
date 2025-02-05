<template>
  <!-- Newsletter -->
  <div class="container mx-auto px-4">
    <div class="bg-primary-50 rounded-xl p-8 text-center">
      <h2 class="text-2xl font-bold text-gray-900 dark:text-gray-300 mb-4">
        Stay Updated
      </h2>
      <p class="text-gray-600 mb-6 max-w-xl mx-auto">
        Subscribe to our newsletter for exclusive offers and updates
      </p>
      <div class="flex max-w-md mx-auto">
        <input
          type="email"
          placeholder="Enter your email"
          v-model="email"
          class="flex-1 px-4 py-2 rounded-l-lg border-2 border-primary-200 focus:outline-none focus:border-primary-600"
        />
        <button
          @click="subscribe"
          class="bg-primary-600 text-white px-6 py-2 rounded-r-lg hover:bg-primary-700 transition-colors"
        >
          Subscribe
        </button>
      </div>
    </div>
  </div>
</template>
