<template>
  <section class="py-12">
    <UContainer>
      <h1
        class="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-gray-300 mb-4"
      >
        Welcome to Our Amazing Store
      </h1>
      <p
        class="text-xl text-gray-600 dark:text-gray-300 text-center max-w-2xl mx-auto"
      >
        Discover unique products that inspire and elevate your lifestyle with
        our carefully curated collection
      </p>

      <div class="flex justify-center mt-8">
        <ULink
          to="/products"
          class="bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transform hover:-translate-y-0.5 transition-all font-medium"
        >
          Shop Now
        </ULink>
      </div>
    </UContainer>
  </section>
</template>
