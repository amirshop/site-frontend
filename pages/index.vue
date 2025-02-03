<template>
  <section class="bg-gray-50 dark:bg-gray-900 py-16">
    <!-- Hero Banner -->
    <div class="container mx-auto px-4 mb-12">
      <h1 class="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-gray-300 mb-4">
        Welcome to Our Amazing Store
      </h1>
      <p class="text-xl text-gray-600 dark:text-gray-300 text-center max-w-2xl mx-auto">
        Discover unique products that inspire and elevate your lifestyle with our carefully curated collection
      </p>
      <div class="flex justify-center mt-8">
        <NuxtLink 
          to="/products"
          class="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transform hover:-translate-y-0.5 transition-all font-medium"
        >
          Shop Now
        </NuxtLink>
      </div>
    </div>

    <!-- Featured Products -->
    <div class="container mx-auto px-4 mb-16">
      <h2 class="text-3xl font-bold text-center text-gray-900 dark:text-gray-300 mb-8">Featured Products</h2>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        <div
          v-for="product in featuredProducts"
          :key="product.id"
          class="group !no-underline transform hover:-translate-y-1 transition-all duration-300"
        >
          <div class="bg-white rounded shadow overflow-hidden hover:shadow-lg transition-shadow">
            <div class="relative">
              <img
                :src="product.image"
                class="w-full h-full aspect-[3/2] object-contain bg-white"
                :alt="product.name"
              />
              <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity"></div>
            </div>

            <div class="p-6">
              <div class="flex justify-between items-start mb-4">
                <h3 class="text-xl font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                  {{ product.name }}
                </h3>
                <span class="bg-purple-100 text-purple-800 text-sm font-medium px-2.5 py-0.5 rounded-full">
                  New
                </span>
              </div>

              <div class="flex justify-between items-center">
                <span class="text-lg font-bold text-purple-600">${{ product.price }}</span>
                <button class="bg-purple-600 text-white px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Categories -->
    <div class="container mx-auto px-4 mb-16">
      <h2 class="text-3xl font-bold text-center text-gray-900 dark:text-gray-300 mb-8">Shop by Category</h2>
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div
          v-for="category in categories"
          :key="category.id"
          class="group relative rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow"
        >
          <img :src="category.image" :alt="category.name" class="w-full aspect-[3/2] object-contain" />
          <div class="absolute inset-0 bg-black opacity-30 group-hover:opacity-40 transition-opacity"></div>
          <h3 class="absolute bottom-4 left-4 text-white text-xl font-semibold">{{ category.name }}</h3>
        </div>
      </div>
    </div>

    <!-- Special Offers -->
    <div class="container mx-auto px-4 mb-16">
      <h2 class="text-3xl font-bold text-center text-gray-900 dark:text-gray-300 mb-8">Special Offers</h2>
      <div class="grid md:grid-cols-3 gap-8">
        <div
          v-for="offer in specialOffers"
          :key="offer.id"
          class="bg-white rounded-lg shadow p-8 text-center hover:shadow-lg transition-shadow"
        >
          <h3 class="text-xl font-semibold text-gray-900 mb-4">{{ offer.title }}</h3>
          <p class="text-gray-600 mb-6">{{ offer.description }}</p>
          <button class="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors">
            Shop Now
          </button>
        </div>
      </div>
    </div>

    <!-- Newsletter -->
    <div class="container mx-auto px-4">
      <div class="bg-purple-50 rounded-xl p-8 text-center">
        <h2 class="text-2xl font-bold text-gray-900 dark:text-gray-300 mb-4">Stay Updated</h2>
        <p class="text-gray-600 mb-6 max-w-xl mx-auto">
          Subscribe to our newsletter for exclusive offers and updates
        </p>
        <div class="flex max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            v-model="email"
            class="flex-1 px-4 py-2 rounded-l-lg border-2 border-purple-200 focus:outline-none focus:border-purple-600"
          />
          <button
            @click="subscribe"
            class="bg-purple-600 text-white px-6 py-2 rounded-r-lg hover:bg-purple-700 transition-colors"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const email = ref('')
const featuredProducts = ref([
  { id: 1, name: 'Premium Product 1', price: 99.99, image: 'https://via.assets.so/shoe.webp?id=1' },
  { id: 2, name: 'Premium Product 2', price: 149.99, image: 'https://via.assets.so/shoe.webp?id=3' },
  { id: 3, name: 'Premium Product 3', price: 199.99, image: 'https://via.assets.so/shoe.webp?id=4' },
  { id: 4, name: 'Premium Product 4', price: 79.99, image: 'https://via.assets.so/shoe.webp?id=5' }
])

const categories = ref([
  { id: 1, name: 'Electronics', image: 'https://via.assets.so/shoe.webp?id=6' },
  { id: 2, name: 'Fashion', image: 'https://via.assets.so/shoe.webp?id=7' },
  { id: 3, name: 'Home & Living', image: 'https://via.assets.so/shoe.webp?id=8' },
  { id: 4, name: 'Sports', image: 'https://via.assets.so/shoe.webp?id=9' }
])

const specialOffers = ref([
  { id: 1, title: 'Summer Sale', description: 'Up to 50% off on summer collection' },
  { id: 2, title: 'New Arrivals', description: 'Check out our latest products' },
  { id: 3, title: 'Bundle Deals', description: 'Save more when you buy more' }
])

const subscribe = () => {
  // Handle newsletter subscription
  console.log('Subscribed:', email.value)
  email.value = ''
}
</script>
