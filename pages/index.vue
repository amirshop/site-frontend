<template>
  <SliderSwiper />
  <HomeHeroBanner />

  <section class="bg-gray-50 dark:bg-gray-900 py-16">
    <UContainer
      :ui="{
        base: 'grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4',
      }"
    >
      <ProductCard :product="product" @add-to-cart="" />
    </UContainer>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { ProductInterface } from "~/interfaces/product.interface";

const product = ref<ProductInterface>({
  id: "1",
  price: 40_000_000,
  slug: "harman_kardon_aura_studio_series",
  title: "harman kardon Aura Studio Series",
  category: "Speaker",
  description: "Bag",
  colors: ["red", "amber", "cyan", "lime"],
  image: "https://biinoise.com/wp-content/uploads/2022/10/aura-bag01.jpg",
});
const configProductCard = {
  base: "group !no-underline transform hover:-translate-y-1 transition-all duration-300",
  background: "bg-white dark:bg-gray-900",
  divide: "divide-y divide-gray-200 dark:divide-gray-800",
  ring: "ring-1 ring-gray-200 dark:ring-gray-800",
  rounded: "rounded-lg",
  shadow: "shadow",
  body: {
    base: "",
    background: "",
    padding: "px-0 py-0 sm:p-0",
  },
  header: {
    base: "",
    background: "",
    padding: "px-0 py-0 sm:px-0",
  },
  footer: {
    base: "",
    background: "",
    padding: "px-4 py-4 sm:px-6",
  },
};

const email = ref("");
const featuredProducts = ref([
  {
    id: 1,
    title: "Premium Product 1",
    price: 99.99,
    image: "https://via.assets.so/shoe.webp?id=1",
  },
  {
    id: 2,
    title: "Premium Product 2",
    price: 149.99,
    image: "https://via.assets.so/shoe.webp?id=3",
  },
  {
    id: 3,
    title: "Premium Product 3",
    price: 199.99,
    image: "https://via.assets.so/shoe.webp?id=4",
  },
  {
    id: 4,
    title: "Premium Product 4",
    price: 79.99,
    image: "https://via.assets.so/shoe.webp?id=5",
  },
]);

const categories = ref([
  {
    id: 1,
    title: "Electronics",
    image: "https://via.assets.so/shoe.webp?id=6",
  },
  { id: 2, title: "Fashion", image: "https://via.assets.so/shoe.webp?id=7" },
  {
    id: 3,
    title: "Home & Living",
    image: "https://via.assets.so/shoe.webp?id=8",
  },
  { id: 4, title: "Sports", image: "https://via.assets.so/shoe.webp?id=9" },
]);

const specialOffers = ref([
  {
    id: 1,
    title: "Summer Sale",
    description: "Up to 50% off on summer collection",
  },
  {
    id: 2,
    title: "New Arrivals",
    description: "Check out our latest products",
  },
  { id: 3, title: "Bundle Deals", description: "Save more when you buy more" },
]);

const subscribe = () => {
  // Handle newsletter subscription
  console.log("Subscribed:", email.value);
  email.value = "";
};
</script>
