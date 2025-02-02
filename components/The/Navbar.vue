<template>



  <UHorizontalNavigation :links="links" :ui="horizontalNavigationUi" />
  <UBadge>
    {{ productStore.carts.length }}
  </UBadge>
</template>

<script setup lang="ts">
const productStore = useProductStore();

const links = [
  [
    {
      label: "Home",
      to: "/",
      avatar: {
        src: "https://avatars.githubusercontent.com/u/739984?v=4",
      },
      items: [
        {
          label: "Shop",
          icon: "i-heroicons-home",
          to: "/shop",
        }
      ]
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
  ],
  [
    {
      label: "Login",
      icon: "i-heroicons-user",
      to: "/auth/login",
    },
  ],
];

const horizontalNavigationUi = {
  wrapper:
    "relative w-full flex items-center justify-between border-b border-gray-200 dark:border-gray-800 bg-primary",
  container: "mx-auto px-4 sm:px-6 lg:px-8 container",
  label: "truncate relative text-white",
  icon: {
    base: "flex-shrink-0 w-5 h-5 relative",
    active: "text-gray-700 dark:text-gray-200",
    inactive:
      "text-white dark:text-gray-500 group-hover:text-gray-700 dark:group-hover:text-gray-200",
  },
};
</script>
