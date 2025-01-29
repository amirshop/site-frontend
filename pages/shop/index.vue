<template>
  <section>
    <UContainer>
      <div class="gap-4 sm:gap-6 lg:gap-8 grid md:grid-cols-2 lg:grid-cols-4">
        <UCard v-for="product in products" :key="product.id">
          <template #header>
            <NuxtImg
                class="w-96 h-96 object-scale-down"
                :src="product.image"
                :alt="product.title"
            ></NuxtImg>
          </template>
          <h4>{{ product.title }}</h4>
          <p>
            {{ product.description }}
          </p>

          <template #footer>
            <UButton @click="addToCart(product.id)">Add</UButton>
          </template>
        </UCard>
      </div>
    </UContainer>
  </section>
</template>
<script setup lang="ts">
const productStore = useProductStore();
const router = useRouter();
const { data: products } = await useFetch("/api/v1/products");

const addToCart = async (id: string) => {
  // await router.push(`/shop/${id}`);
  productStore.carts.push(id);
};
</script>
