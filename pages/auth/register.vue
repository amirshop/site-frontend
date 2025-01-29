<template>
  <section class="py-4 md:py-6 lg:py-8 min-h-screen flex items-center">
    <UContainer :ui="containerUi">
      <UForm class="space-y-4 w-96">
        <UFormGroup label="Username">
          <UInput type="text" />
        </UFormGroup>
        <UFormGroup label="Password">
          <UInput type="password" />
        </UFormGroup>
        <div class="space-x-4">
          <UButton type="submit">Login</UButton>
          <UButton type="reset">Reset</UButton>
        </div>
      </UForm>

      <UDivider class="my-8" />
      <UForm class="space-y-4">
        <UFormGroup label="Username">
          <UInput type="text" />
        </UFormGroup>
        <UFormGroup label="Password">
          <UInput type="password" />
        </UFormGroup>
        <div class="space-x-4">
          <UButton type="submit">Login</UButton>
          <UButton type="reset">Reset</UButton>
        </div>
      </UForm>
    </UContainer>
  </section>
</template>
<script setup lang="ts">
definePageMeta({
  layout: "auth",
});
const containerUi = {
  //   base: "grid grid-cols-[1fr_max-content_1fr] gap-x-4 sm:gap-x-6 lg:gap-x-8",
};
</script>
