<template>
  <UCard class="w-full max-w-md backdrop-blur-sm bg-white/90 shadow-2xl">
    <template #header>
      <div class="text-center space-y-2">
        <h2
          class="text-3xl font-bold bg-gradient-to-r from-primary-600 to-pink-600 bg-clip-text text-transparent"
        >
          Welcome Back
        </h2>
        <p class="text-gray-600">Sign in to your account</p>
      </div>
    </template>

    <UForm :state="loginSchema" @submit="login" class="space-y-6">
      <UFormGroup
        label="Username"
        class="transition-all duration-300 hover:scale-[1.02]"
      >
        <UInput
          v-model="username"
          placeholder="Enter your username"
          icon="i-heroicons-user"
          class="rounded-lg"
        />
      </UFormGroup>

      <UFormGroup
        label="Password"
        class="transition-all duration-300 hover:scale-[1.02]"
      >
        <UInput
          v-model="password"
          type="password"
          placeholder="Enter your password"
          icon="i-heroicons-lock-closed"
          class="rounded-lg"
        />
      </UFormGroup>

      <UButton
        type="submit"
        color="purple"
        variant="solid"
        block
        class="mt-8 text-lg font-semibold py-3 rounded-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
      >
        Sign In
      </UButton>

      <div class="text-center text-sm text-gray-600 mt-4">
        Don't have an account?
        <NuxtLink
          to="/auth/register"
          class="text-primary-600 hover:text-primary-800 font-medium"
        >
          Create one
        </NuxtLink>
      </div>
    </UForm>
  </UCard>
</template>
<script setup lang="ts">
import { loginSchema } from "~/schemes/login.schema";
definePageMeta({
  layout: "auth",
});
const name = ref("");
const email = ref("");
const password = ref("");
const toast = useToast();

const login = async () => {
  try {
    const response = await useFetch("/api/v1/auth/register", {
      method: "POST",
      body: {
        name: name.value,
        email: email.value,
      },
    });

    toast.add({
      title: "Success!",
      description: "Your account has been created successfully.",
      icon: "i-heroicons-check-circle",
      color: "green",
    });

    // Redirect to login or dashboard
    navigateTo("/auth/login");
  } catch (error) {
    toast.add({
      title: "Error",
      description: "Something went wrong. Please try again.",
      icon: "i-heroicons-x-circle",
      color: "red",
    });
    console.error(error);
  }
};
</script>
