<template>
  <section class="py-16 bg-gray-50">
    <div class="container mx-auto px-4">
      <!-- Breadcrumb -->
      <nav class="mb-8 text-sm">
        <NuxtLink to="/" class="text-gray-500 hover:text-primary-600"
          >Home</NuxtLink
        >
        <span class="mx-2 text-gray-400">/</span>
        <NuxtLink to="/products" class="text-gray-500 hover:text-primary-600"
          >Products</NuxtLink
        >
        <span class="mx-2 text-gray-400">/</span>
        <span class="text-primary-600">{{ product?.title }}</span>
      </nav>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Product Images -->
        <div class="space-y-6">
          <div class="bg-white rounded-2xl p-6 shadow-lg">
            <div class="relative group">
              <img
                :src="product?.image"
                :alt="product?.title"
                class="w-full h-[500px] object-cover rounded-xl"
              />
              <div
                class="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity rounded-xl"
              ></div>
            </div>
          </div>

          <div class="grid grid-cols-4 gap-4">
            <div
              v-for="n in 4"
              :key="n"
              class="bg-white rounded-xl p-3 shadow-md cursor-pointer transform hover:scale-105 transition-transform"
            >
              <img
                :src="product?.image"
                :alt="product?.title"
                class="w-full h-24 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

        <!-- Product Details -->
        <div class="bg-white rounded-2xl p-8 shadow-lg space-y-8">
          <div>
            <span
              class="bg-primary-100 text-primary-800 text-sm font-medium px-3 py-1 rounded-full"
              >New Arrival</span
            >
            <h1 class="text-4xl font-bold text-gray-900 mt-4 mb-2">
              {{ product?.title }}
            </h1>

            <div class="flex items-center space-x-4 mb-6">
              <div class="flex text-yellow-400">
                <span v-for="n in 5" :key="n" class="text-xl">★</span>
              </div>
              <span class="text-gray-500">(150 reviews)</span>
            </div>

            <p class="text-gray-600 leading-relaxed">
              {{ product?.description }}
            </p>
          </div>

          <div class="border-t border-b py-6">
            <div class="flex items-center justify-between mb-6">
              <span class="text-3xl font-bold text-primary-600"
                >${{ product?.price }}</span
              >
              <div class="flex items-center space-x-2">
                <span class="text-green-500">✓</span>
                <span class="text-sm text-gray-500">In Stock</span>
              </div>
            </div>

            <div class="flex items-center space-x-4 mb-6">
              <label class="text-gray-700 font-medium">Quantity:</label>
              <div
                class="flex items-center border-2 border-primary-200 rounded-lg"
              >
                <button
                  @click="quantity > 1 && quantity--"
                  class="px-4 py-2 hover:bg-primary-50 transition"
                >
                  −
                </button>
                <input
                  type="number"
                  v-model="quantity"
                  class="w-16 text-center border-none focus:outline-none bg-transparent"
                  min="1"
                />
                <button
                  @click="quantity++"
                  class="px-4 py-2 hover:bg-primary-50 transition"
                >
                  +
                </button>
              </div>
            </div>

            <div class="grid grid-cols-2 gap-4">
              <button
                class="w-full bg-primary-600 text-white py-4 rounded-xl font-medium hover:bg-primary-700 transform hover:-translate-y-0.5 transition-all"
              >
                Add to Cart
              </button>
              <button
                class="w-full bg-primary-50 text-primary-600 py-4 rounded-xl font-medium hover:bg-primary-100 transform hover:-translate-y-0.5 transition-all"
              >
                Add to Wishlist
              </button>
            </div>
          </div>

          <div class="space-y-4">
            <div class="flex items-center space-x-3">
              <div class="p-2 bg-green-50 rounded-full">
                <svg
                  class="w-5 h-5 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </div>
              <span class="text-gray-600"
                >Free shipping on orders over $100</span
              >
            </div>
            <div class="flex items-center space-x-3">
              <div class="p-2 bg-blue-50 rounded-full">
                <svg
                  class="w-5 h-5 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
              <span class="text-gray-600">30-day money-back guarantee</span>
            </div>
            <div class="flex items-center space-x-3">
              <div class="p-2 bg-primary-50 rounded-full">
                <svg
                  class="w-5 h-5 text-primary-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  ></path>
                </svg>
              </div>
              <span class="text-gray-600">Secure payment processing</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { ProductInterface } from "~/interfaces/product.interface";
const route = useRoute();
const quantity = ref(1);
const { data: product } = await useFetch<ProductInterface>(
  `http://localhost:5500/api/v2/products/slug/${route.params.slug}`
);
</script>
