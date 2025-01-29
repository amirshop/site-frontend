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
        :schema="schema"
        :state="auth"
        @submit="onSubmit"
      >
        <UFormGroup label="Username" name="username" required>
          <UInput v-model="auth.username" type="text" />
        </UFormGroup>

        <UFormGroup label="Password" name="password" required>
          <UInput v-model="auth.password" type="password" />
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
import { z } from "zod";
import type { FormSubmitEvent } from "#ui/types";

definePageMeta({
  layout: "auth",
});
const schema = z.object({
  username: z.string().min(3),
  password: z.string().min(6, "Must be at least 6 characters"),
});
type Schema = z.output<typeof schema>;

const auth = reactive({
  username: "amir",
  password: "123456",
});

const isSubmitting = ref<boolean>(false);

const onSubmit = async (event: FormSubmitEvent<Schema>) => {
  isSubmitting.value = true;
  try {
    const { data } = await useFetch("/api/v2/auth/register", {
      method: "POST",
      body: auth, // به جای JSON.stringify(auth) مستقیماً داده‌ها را ارسال کنید
      headers: {
        "Content-Type": "application/json", // تنظیم هدر Content-Type
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
