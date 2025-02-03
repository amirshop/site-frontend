<template>
  <UCard class="w-full max-w-md backdrop-blur-sm bg-white/90 shadow-2xl">
    <template #header>
      <div class="text-center space-y-2">
        <h2
          class="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
        >
          Join Our Community
        </h2>
        <p class="text-gray-600">Start your amazing journey with us</p>
      </div>
    </template>

    <UForm :state="registerSchema" @submit="register" class="space-y-6">
      <UFormGroup
        label="Full Name"
        class="transition-all duration-300 hover:scale-[1.02]"
      >
        <UInput
          v-model="name"
          placeholder="Enter your full name"
          icon="i-heroicons-user"
          class="rounded-lg"
        />
      </UFormGroup>

      <UFormGroup
        label="Email Address"
        class="transition-all duration-300 hover:scale-[1.02]"
      >
        <UInput
          v-model="email"
          type="email"
          placeholder="your.email@example.com"
          icon="i-heroicons-envelope"
          class="rounded-lg"
        />
      </UFormGroup>

      <UFormGroup
        label="Create Password"
        class="transition-all duration-300 hover:scale-[1.02]"
      >
        <UInput
          v-model="password"
          type="password"
          placeholder="Choose a strong password"
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
        Create Account
      </UButton>

      <div class="text-center text-sm text-gray-600 mt-4">
        Already have an account?
        <NuxtLink
          to="/auth/login"
          class="text-purple-600 hover:text-purple-800 font-medium"
        >
          Sign in
        </NuxtLink>
      </div>
    </UForm>
  </UCard>
</template>
<script setup lang="ts">
import { registerSchema } from "~/schemes/register.schema";
definePageMeta({
  layout: "auth",
});
const name = ref("");
const email = ref("");
const password = ref("");
const toast = useToast();


const register = async () => {
  try {
    const response = await useFetch("/api/v1/auth/register", {
      method: "POST",
      body: {
        name: name.value,
        email: email.value,
        password: password.value,
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
