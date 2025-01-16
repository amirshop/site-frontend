<script setup lang="ts">
const links = [
  {
    label: "Home",
    to: "/",
    avatar: {
      src: "https://avatars.githubusercontent.com/u/739984?v=4",
    },
  },
  {
    label: "Shop",
    icon: "i-heroicons-home",
    to: "/shop",
  },
  {
    label: "Contact us",
    icon: "i-heroicons-chart-bar",
    to: "/contact",
  },
];
</script>

<template>
  <UHorizontalNavigation
    :links="links"
    class="border-b border-gray-200 dark:border-gray-800"
  />
</template>
