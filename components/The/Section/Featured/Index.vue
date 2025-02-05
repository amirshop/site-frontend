<template>
  <section class="bg-gray-50 py-20">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-12">Featured Products</h2>
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div
          v-for="n in 4"
          :key="n"
          class="bg-white rounded-xl shadow-sm hover:shadow-md transition"
        >
          <div class="relative">
            <img
              src="https://placehold.co/400x400"
              alt="Product"
              class="w-full h-64 object-cover rounded-t-xl"
            />
            <button
              class="absolute top-4 right-4 bg-white p-2 rounded-full shadow hover:bg-gray-100"
            >
              <svg
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                ></path>
              </svg>
            </button>
          </div>
          <div class="p-4">
            <h3 class="font-semibold mb-2">Product Name</h3>
            <p class="text-gray-600 mb-2">$99.99</p>
            <button
              class="w-full bg-gray-900 text-white py-2 rounded-lg hover:bg-gray-800 transition"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
