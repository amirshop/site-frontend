<template>
  <div class="container mx-auto px-4 mb-16">
    <h2
      class="text-3xl font-bold text-center text-gray-900 dark:text-gray-300 mb-8"
    >
      Special Offers
    </h2>
    <div class="grid md:grid-cols-3 gap-8">
      <div
        v-for="offer in specialOffers"
        :key="offer.id"
        class="bg-white rounded-lg shadow p-8 text-center hover:shadow-lg transition-shadow"
      >
        <h3 class="text-xl font-semibold text-gray-900 mb-4">
          {{ offer.title }}
        </h3>
        <p class="text-gray-600 mb-6">{{ offer.description }}</p>
        <button
          class="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors"
        >
          Shop Now
        </button>
      </div>
    </div>
  </div>
</template>
