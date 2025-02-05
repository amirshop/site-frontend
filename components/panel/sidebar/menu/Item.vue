<template>
  <NuxtLink
    exactActiveClass="text-red-500 bg-primary-700"
    class="p-2 rounded text-white hover:bg-primary-700"
    :to="props.link"
  >
    <div class="flex items-center gap-x-2">
      <UIcon :name="props.icon" />
      {{ props.label }}
    </div>
  </NuxtLink>
</template>
<script setup lang="ts">
import { ref } from "vue";

const props = defineProps({
  link: {
    type: String,
    required: true,
    default: "/panel/dashboard",
  },
  label: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    default: "i-heroicons-rectangle-group-20-solid",
  },
});
</script>
