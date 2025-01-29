<template>
  <section class="py-4 md:py-6 lg:py-8 min-h-screen flex items-center">
    <UContainer :ui="containerUi">
      <UAvatar
        src="/images/login.webp"
        alt="Avatar"
        size="3xl"
        :ui="avatarUi"
        class="mb-12"
      />
      <UForm
        class="space-y-4 w-full"
        :schema="registerSchema"
        :state="auth"
        @submit.prevent="onSubmit"
      >
        <UFormGroup label="Username" name="username" required>
          <UInput v-model="auth.username" type="text" />
        </UFormGroup>

        <UFormGroup label="Password" name="password" required>
          <UInput v-model="auth.password" type="password" />
        </UFormGroup>

        <UFormGroup label="First name" name="name.first" required>
          <UInput v-model="auth.name.first" type="text" />
        </UFormGroup>

        <UFormGroup label="Last name" name="name.last" required>
          <UInput v-model="auth.name.last" type="text" />
        </UFormGroup>

        <UFormGroup label="Email" name="email" required>
          <UInput v-model="auth.email" type="email" />
        </UFormGroup>

        <div class="space-x-4">
          <UButton type="submit" :loading="isSubmitting">Register </UButton>
          <UButton type="reset" variant="outline">Reset</UButton>
        </div>
      </UForm>

      <UDivider class="my-8" />
      <ULink to="/auth/login" class="text-primary-500 hover:text-primary-600">
        Do you have an account? Login here
      </ULink>
    </UContainer>
  </section>
</template>
<script setup lang="ts">
import type { FormSubmitEvent } from "#ui/types";
import {
  registerSchema,
  type RegisterSchemaType,
} from "~/schemes/register.schema";

definePageMeta({
  layout: "auth",
});

const auth = reactive<RegisterSchemaType>({
  username: "amirrr1987",
  password: "amir12",
  email: "amir@amir.amir",
  name: {
    first: "amir",
    last: "maghami",
  },
});

const isSubmitting = ref<boolean>(false);

const onSubmit = async (event: FormSubmitEvent<RegisterSchemaType>) => {
  isSubmitting.value = true;
  try {
    const { data } = await useFetch("/api/v2/auth/register", {
      method: "POST",
      body: auth,
      headers: {
        "Content-Type": "application/json",
      },
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
