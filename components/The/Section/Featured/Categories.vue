<template>
  <section class="py-20">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-12">Shop by Category</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="group relative overflow-hidden rounded-xl">
          <img
            src="https://placehold.co/600x400"
            alt="Men's Fashion"
            class="w-full h-64 object-cover transition group-hover:scale-105"
          />
          <div
            class="absolute inset-0 bg-black/50 flex items-center justify-center"
          >
            <h3 class="text-white text-2xl font-bold">Men's Fashion</h3>
          </div>
        </div>
        <div class="group relative overflow-hidden rounded-xl">
          <img
            src="https://placehold.co/600x400"
            alt="Women's Fashion"
            class="w-full h-64 object-cover transition group-hover:scale-105"
          />
          <div
            class="absolute inset-0 bg-black/50 flex items-center justify-center"
          >
            <h3 class="text-white text-2xl font-bold">Women's Fashion</h3>
          </div>
        </div>
        <div class="group relative overflow-hidden rounded-xl">
          <img
            src="https://placehold.co/600x400"
            alt="Accessories"
            class="w-full h-64 object-cover transition group-hover:scale-105"
          />
          <div
            class="absolute inset-0 bg-black/50 flex items-center justify-center"
          >
            <h3 class="text-white text-2xl font-bold">Accessories</h3>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
