<template>
  <section class="py-4 md:py-6 lg:py-8 min-h-screen flex items-center">
    <UContainer :ui="containerUi">
      <ClientOnly>
        <UAvatar
        src="/images/login.webp"
        alt="Avatar"
        size="3xl"
        :ui="avatarUi"
        class="mb-12"
      />
      </ClientOnly>
      <UForm
        class="space-y-4 w-full"
        :schema="loginSchema"
        :state="auth"
        @submit.prevent="onSubmit"
      >
        <UFormGroup label="Username" name="username" required>
          <UInput v-model="auth.username" type="text" />
        </UFormGroup>

        <UFormGroup label="Password" name="password" required>
          <UInput v-model="auth.password" type="password" />
        </UFormGroup>

        <div class="space-x-4">
          <UButton type="submit" :loading="isSubmitting">Login</UButton>
          <UButton type="reset" variant="outline">Reset</UButton>
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
import { z } from "zod";
import type { FormSubmitEvent } from "#ui/types";
import { loginSchema, type LoginSchemaType } from "~/schemes/login.schema";

definePageMeta({
  layout: "auth",
});


const auth = reactive({
  username: "mor_2314",
  password: "83r5^_",
});

const isSubmitting = ref<boolean>(false);

const onSubmit = async (event: FormSubmitEvent<LoginSchemaType>) => {
  isSubmitting.value = true;
  try {
    const { data } = await useFetch("/api/v2/auth/login", {
      method: 'POST',
      body: JSON.stringify(event.data),
    });
    console.log("Login Success:", data);
  } catch (error) {
    console.error("Login Failed:", error);
  } finally {
    isSubmitting.value = false;
  }
};

const containerUi = {
  //   base: "grid grid-cols-[1fr_max-content_1fr] gap-x-4 sm:gap-x-6 lg:gap-x-8",
};

const avatarUi = {
  rounded: "rounded-none",
  size: {
    "3xl": "h-96 w-full object-contain",
  },
};
</script>
