<template>
  <section class="py-4 md:py-6 lg:py-8 min-h-screen flex items-center">
    <UContainer>
      <UAvatar
        src="/images/login.webp"
        alt="Avatar"
        size="3xl"
        :ui="avatarUi"
        class="mb-12"
      />
      <UForm
        class="space-y-4 w-full"
        :schema="loginSchema"
        :state="auth"
        @submit.prevent="executeLogin"
      >
        <UFormGroup label="Username" name="username" required>
          <UInput v-model="auth.username" type="text" />
        </UFormGroup>

        <UFormGroup label="Password" name="password" required>
          <UInput v-model="auth.password" type="password" />
        </UFormGroup>

        <div class="space-x-4">
          <UButton type="submit" :loading="status === 'pending'">Login</UButton>
          <UButton type="reset" variant="outline" @click="clearForm"
            >Reset</UButton
          >
        </div>
      </UForm>

      <UDivider class="my-8" />
      <ULink
        to="/auth/register"
        class="text-primary-500 hover:text-primary-600"
      >
        Don't have an account? Register here
      </ULink>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { z } from "zod";
import type { FormSubmitEvent } from "#ui/types";
import { loginSchema, type LoginSchemaType } from "~/schemes/login.schema";
import { useLocalStorage } from "@vueuse/core";
definePageMeta({
  layout: "auth",
});

const auth = ref<LoginSchemaType>({} as LoginSchemaType);

const token = useLocalStorage("token", "");
const { error, status, execute, clear, data } = useAsyncData(
  "login",
  async () => {
    return await $fetch("/api/v2/auth/login", {
      method: "POST",
      body: auth.value,
    });
  },
  { immediate: false }
);
const toast = useToast();
const executeLogin = async () => {
  await execute();
  if (error.value) {
    toast.add({
      title: `Error ${error.value.statusCode}`,
      description: error.value.statusMessage,
      color: "red",
    });
  } else {
    token.value = data.value?.token ?? "";
    useRouter().push("/");
    toast.add({
      title: "Login successful",
      description: "Welcome back!",
      color: "green",
    });
  }
};

const clearForm = () => {
  clear();
  auth.value = {} as LoginSchemaType;
};

const avatarUi = {
  rounded: "rounded-none",
  size: {
    "3xl": "h-96 w-full object-contain",
  },
};
</script>
