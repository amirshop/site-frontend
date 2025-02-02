<template>
  <section class="py-12">
    <UContainer>
      <!-- Loading State -->
      <div v-if="pending" class="text-center">
        <UProgress animation="spin" />
        <p class="mt-2 text-gray-600">Loading product details...</p>
      </div>

      <!-- Error State -->
      <div v-else-if="error" class="text-center">
        <UIcon
          name="i-heroicons-exclamation-circle"
          class="w-12 h-12 text-red-500"
        />
        <p class="mt-2 text-red-600">
          {{ error.message || "Failed to load product details." }}
        </p>
        <UButton
          label="Go Back"
          color="gray"
          variant="ghost"
          class="mt-4"
          @click="goBack"
        />
      </div>

      <!-- Product Details -->
      <div v-else class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Product Image -->
        <div class="relative aspect-square">
          <img
            :src="data.image"
            :alt="data.title"
            class="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>

        <!-- Product Information -->
        <div class="space-y-6">
          <h1 class="text-3xl font-bold text-gray-900">{{ data.title }}</h1>
          <p class="text-lg text-gray-700">{{ data.description }}</p>

          <!-- Price -->
          <div class="flex items-center space-x-4">
            <span class="text-2xl font-semibold text-gray-900">
              ${{ data.price }}
            </span>
            <UBadge color="green" variant="solid">In Stock</UBadge>
          </div>

          <!-- Category -->
          <div class="flex items-center space-x-2">
            <UIcon name="i-heroicons-tag" class="w-5 h-5 text-gray-500" />
            <span class="text-gray-600">{{ data.category }}</span>
          </div>

          <!-- Actions -->
          <div class="flex space-x-4">
            <UButton label="Add to Cart" color="primary" />
            <UButton label="Buy Now" color="gray" variant="outline" />
          </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
const route = useRoute();

// Fetch product data based on the ID from the route
const { data, pending, error } = await useFetch(
  `/api/v2/products/${route.params.id}`,
  {
    method: "GET",
  }
);

// Function to go back to the previous page
const goBack = () => {
  navigateTo("/products");
};
</script>

<style scoped>
/* Add custom styles if needed */
</style>
