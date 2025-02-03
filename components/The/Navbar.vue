<template>
  <nav class="bg-gradient-to-r from-purple-600 to-pink-600 shadow-lg">
    <UContainer>
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <NuxtLink to="/" class="text-white font-bold text-xl">
              MyStore
            </NuxtLink>
          </div>
          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline space-x-4">
              <NuxtLink
                to="/"
                class="text-white hover:bg-purple-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Home
              </NuxtLink>
              <NuxtLink
                to="/products"
                class="text-white hover:bg-purple-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Products
              </NuxtLink>
              <NuxtLink
                to="/contact"
                class="text-white hover:bg-purple-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Contact
              </NuxtLink>
            </div>
          </div>
        </div>
        <div class="flex items-center space-x-4">
          <NuxtLink
            to="/auth/login"
            class="text-white hover:bg-purple-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
          >
            Login
          </NuxtLink>

          <NuxtLink
            to="/auth/register"
            class="bg-purple-800 text-white hover:bg-purple-700 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200"
          >
            Register
          </NuxtLink>
          <UButton
            type="primary"
            @click="
              colorMode.preference =
                colorMode.value === 'dark'
                  ? 'light'
                  : colorMode.value === 'light'
                    ? 'system'
                    : 'dark'
            "
          >
            <UIcon :name="colorModeIcon" />
          </UButton>
        </div>
      </div>
    </UContainer>
  </nav>
</template>
<script setup lang="ts">
const colorMode = useColorMode();

const colorModeIcon = computed(() => {
  if (colorMode.value === "dark") return "i-heroicons-sun";
  if (colorMode.value === "light") return "i-heroicons-moon";
  return "i-heroicons-computer-desktop";
});
</script>
