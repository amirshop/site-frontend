<template>
  <section class="bg-gray-50 dark:bg-gray-900 py-16">
    <!-- Hero Banner -->
    <div class="container mx-auto px-4 mb-12">
      <h1 class="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-gray-300 mb-4">
        Our Collection
      </h1>
      <p class="text-xl text-gray-600 dark:text-gray-300  text-center max-w-2xl mx-auto">
        Discover our carefully curated selection of premium products designed to
        elevate your lifestyle.
      </p>
    </div>

    <!-- Product Grid -->
    <div class="container mx-auto px-4">
      <div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        <div
          v-for="product in products"
          :key="product._id"
          class="group !no-underline transform hover:-translate-y-1 transition-all duration-300"
        >
          <div
            class="bg-white rounded shadow overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div class="relative">
              <NuxtImg
                :src="product.image"
                class="w-full aspect-[4/3] object-cover"
                :alt="product.title"
              />
              <div
                class="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity"
              ></div>
            </div>

            <div class="p-6">
              <div class="flex justify-between items-start mb-4">
                <h3
                  class="text-xl font-semibold text-gray-900 group-hover:text-purple-600 transition-colors"
                >
                  {{ product.title }}
                </h3>
                <span
                  class="bg-purple-100 text-purple-800 text-sm font-medium px-2.5 py-0.5 rounded-full"
                >
                  New
                </span>
              </div>

              <p class="text-gray-600 mb-4 line-clamp-3">
                {{ useTruncate(product.description, { length: 130 }) }}
              </p>

              <div class="flex justify-between items-center">
                <span class="text-lg font-bold text-purple-600">$99.99</span>
                <NuxtLink
                  class="bg-purple-600 text-white px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                  :to="{
                    name: 'products-slug',
                    params: { slug: product.slug },
                  }"
                >
                  View Details
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import type { ProductInterface } from "~/interfaces/product.interface";

const { data: products } =
  await useFetch<ProductInterface[]>("http://localhost:5500/api/v2/products");
</script>
