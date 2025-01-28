<template>
  <section>
    status: {{status}}
    <UContainer>
      <div class="gap-4 sm:gap-6 lg:gap-8 grid md:grid-cols-2 lg:grid-cols-4">
        <template  v-if="status === 'success'">

        <UCard v-for="product in products" :key="product.id">
          <template #header>
            <NuxtImg
              class="w-96 h-96 object-scale-down"
              :src="product.image"
              :alt="product.title"
            ></NuxtImg>
          </template>
          <h4 class="mb-4">{{ useToUpper(product.title) }}</h4>
          <p>
            {{ product.description }}
          </p>

          <template #footer>
            <UButton @click="addToCart(product.id)">Add</UButton>
          </template>
        </UCard>
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
                <UButton @click="addToCart(product.id)">Add</UButton>
              </template>
            </UCard>
          </template>
      </div>
    </UContainer>
  </section>
</template>
<script setup lang="ts">
const { data: products, status } = await useFetch("/api/products");

const router = useRouter();
const productStore = useProductStore();
const addToCart = async (id: string) => {
  // await router.push(`/shop/${id}`);
  productStore.carts.push(id);
};
</script>
