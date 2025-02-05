<template>
        <!-- Categories -->
    <div class="container mx-auto px-4 mb-16">
      <h2
        class="text-3xl font-bold text-center text-gray-900 dark:text-gray-300 mb-8"
      >
        Shop by Category
      </h2>
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div
          v-for="category in categories"
          :key="category.id"
          class="group relative rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow"
        >
          <img
            :src="category.image"
            :alt="category.title"
            class="w-full aspect-[3/2] object-contain"
          />
          <div
            class="absolute inset-0 bg-black opacity-30 group-hover:opacity-40 transition-opacity"
          ></div>
          <h3 class="absolute bottom-4 left-4 text-white text-xl font-semibold">
            {{ category.title }}
          </h3>
        </div>
      </div>
    </div>
</template>