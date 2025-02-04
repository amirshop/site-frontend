<template>
  <div class="flex flex-col">
    <UDivider class="mb-2" />
    <UButton
      class="flex justify-between items-center text-white hover:bg-primary-dark py-2 rounded shadow-none"
      @click="toggle"
    >
      <div class="flex items-center gap-x-2">
        <UIcon :name="icon" />
        {{ label }}
      </div>
      <UIcon
        :name="
          isOpen
            ? 'i-heroicons-chevron-up-solid'
            : 'i-heroicons-chevron-down-solid'
        "
      />
    </UButton>
    <div v-if="isOpen" class="pl-4 mt-2 flex flex-col gap-y-2">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    default: "i-heroicons-rectangle-group-20-solid",
  },
});

const isOpen = ref(false);
const toggle = () => {
  isOpen.value = !isOpen.value;
};
</script>
