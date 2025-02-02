<template>
  <section class="py-12">
    <UContainer>
      <div class="gap-4 sm:gap-6 lg:gap-8 grid md:grid-cols-2 lg:grid-cols-4">
        <template v-if="status === 'success'">
          <ULink
            v-for="product in products"
            :key="product._id"
            :to="{ name: 'shop-products-id', params: { id: product._id } }"
          >
            <UCard>
              <NuxtImg
                class="w-full h-44 object-scale-down"
                :src="product.image"
                :alt="product.title"
              />
              <h4 class="mb-2 text-primary">{{ product.title }}</h4>
              <p class="min-h-24 overflow-hidden">
                {{ useTruncate(product.description, { length: 120 }) }}
              </p>
            </UCard>
          </ULink>
        </template>
        <template v-if="status === 'pending'">
          <UCard v-for="product in 4" :key="product">
            <template #header>
              <USkeleton class="h-48 w-full" :ui="{ rounded: 'rounded' }" />
            </template>
            <h4 class="mb-4">
              <USkeleton class="h-6 w-24" :ui="{ rounded: 'rounded' }" />
            </h4>
            <p>
              <USkeleton class="h-16 w-full" :ui="{ rounded: 'rounded' }" />
            </p>

            <template #footer>
              <UButton @click="addToCart(product._id)">Add</UButton>
            </template>
          </UCard>
        </template>
      </div>
    </UContainer>
  </section>
</template>
<script setup lang="ts">
import type { ProductInterface } from "~/interfaces/product.interface";

const { data: products, status } =
  await useFetch<ProductInterface[]>("/api/v2/products");

const router = useRouter();
const addToCart = (id: string) => {
  console.log("🚀 ~ addToCart ~ id:", id);
};
</script>
