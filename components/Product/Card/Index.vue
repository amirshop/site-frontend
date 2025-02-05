<template>
  <UCard :ui="configProductCardUi">
    <template #header>
      <div
        class="flex flex-col space-y-1 absolute bg-white p-1 rounded shadow left-4 top-4 z-50"
      >
        <UButton
          v-for="color in props.product.colors"
          type="primary"
          variant="solid"
          :color="color"
          class="w-3 h-3"
          :ui="{ rounded: 'rounded-full' }"
        />
      </div>
      <div class="relative">
        <NuxtImg
          class="w-full h-56 aspect-squire object-contain mx-auto"
          :src="props.product.image"
          :title="props.product.title"
          :alt="props.product.title"
        />
        <div
          class="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity"
        />
      </div>
    </template>

    <div class="flex justify-between mb-4">
      <ULink
        :to="{ name: 'products-slug', params: { slug: props.product.slug } }"
      >
        <h1>{{ props.product.title }}</h1>
      </ULink>
    </div>

    <template #footer>
      <div class="flex justify-between">
        <span class="text-primary"
          >{{ props.product.price.toLocaleString() }} تومان</span
        >
        <UButton
          class="opacity-0 group-hover:opacity-100 transition-opacity"
          color="primary"
          variant="soft"
          @click="emits('addToCart', props.product.id)"
          icon="heroicons-solid-shopping-cart"
        >
          Add to Cart
        </UButton>
      </div>
    </template>
  </UCard>
</template>

<script setup lang="ts">
import type { ProductInterface } from "~/interfaces/product.interface";

interface Props {
  product: ProductInterface;
}
const props = withDefaults(defineProps<Props>(), {
  product: () => ({}) as ProductInterface,
});
const configProductCardUi = {
  base: "product-card group !no-underline transform hover:-translate-y-1 transition-all duration-300",
  background: "bg-white dark:bg-gray-900",
  divide: "divide-y divide-gray-200 dark:divide-gray-800",
  ring: "ring-1 ring-gray-200 dark:ring-gray-800",
  rounded: "rounded-lg",
  shadow: "shadow hover:shadow-xl",
  body: {
    base: "",
    background: "",
    padding: "px-4 py-5 sm:p-6",
  },
  header: {
    base: "",
    background: "",
    padding: "px-0 py-0 sm:p-0",
  },
  footer: {
    base: "",
    background: "",
    padding: "px-4 py-4 sm:px-6",
  },
};

const emits = defineEmits(["addToCart"]);
</script>
<style lang="less">
.product-card {
  div {
    &::nth-child(0) {
      background-color: red !important;
    }
  }
}
</style>
