<template>
  <!-- Featured Products -->
  <div class="container mx-auto px-4 mb-16">
    <h2
      class="text-3xl font-bold text-center text-gray-900 dark:text-gray-300 mb-8"
    >
      Featured Products
    </h2>
    <div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      <UCard
        v-for="product in featuredProducts"
        :key="product.id"
        class=""
        :ui="configProductCard"
      >
        <template #header>
          <NuxtImg
            class="w-w-full h-full aspect-[3/2] object-contain"
            :src="product.image"
            :title="product.title"
            :alt="product.title"
          />
          <div
            class="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity"
          />
        </template>

        <div class="p-6">
          <div class="flex justify-between items-start mb-4">
            <h3
              class="text-xl font-semibold text-gray-900 group-hover:text-primary-600 transition-colors"
            >
              {{ product.title }}
            </h3>
            <span
              class="bg-primary-100 text-primary-800 text-sm font-medium px-2.5 py-0.5 rounded-full"
            >
              New
            </span>
          </div>

          <div class="flex justify-between items-center">
            <span class="text-lg font-bold text-primary-600"
              >${{ product.price }}</span
            >

            <UButton type="primary"> Add to Cart </UButton>
            <button
              class="bg-primary-600 text-white px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </UCard>
      <div
        v-for="product in featuredProducts"
        :key="product.id"
        class="group !no-underline transform hover:-translate-y-1 transition-all duration-300"
      >
        <div
          class="bg-white rounded shadow overflow-hidden hover:shadow-lg transition-shadow"
        >
          <div class="relative">
            <img
              :src="product.image"
              class="w-full h-full aspect-[3/2] object-contain bg-white"
              :alt="product.title"
            />
            <div
              class="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity"
            />
          </div>

          <div class="p-6">
            <div class="flex justify-between items-start mb-4">
              <h3
                class="text-xl font-semibold text-gray-900 group-hover:text-primary-600 transition-colors"
              >
                {{ product.title }}
              </h3>
              <span
                class="bg-primary-100 text-primary-800 text-sm font-medium px-2.5 py-0.5 rounded-full"
              >
                New
              </span>
            </div>

            <div class="flex justify-between items-center">
              <span class="text-lg font-bold text-primary-600"
                >${{ product.price }}</span
              >
              <button
                class="bg-primary-600 text-white px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
