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
        :schema="registerSchema"
        :state="auth"
        @submit.prevent="executeRegister"
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
          <UButton type="submit" :loading="status == 'pending'"
            >Register
          </UButton>
          <UButton type="reset" variant="outline" @click="clearForm"
            >Reset</UButton
          >
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
import {
  registerSchema,
  type RegisterSchemaType,
} from "~/schemes/register.schema";

definePageMeta({
  layout: "auth",
});

const auth = ref<RegisterSchemaType>({
  username: "",
  password: "",
  email: "",
  name: {
    first: "",
    last: "",
  },
});

const { error, status, execute, clear } = useAsyncData(
  "register",
  async () => {
    return await $fetch("/api/v2/auth/register", {
      method: "POST",
      body: auth.value,
    });
  },
  { immediate: false }
);

const toast = useToast();

const executeRegister = async () => {
  await execute();
  if (error.value) {
    toast.add({
      title: `Error ${error.value.statusCode}`,
      description: error.value.statusMessage,
      color: "red",
    });
  } else {
    toast.add({
      title: "Register successful",
      description: "Welcome back!",
      color: "green",
    });
    clearForm();
  }
};

const clearForm = () => {
  clear();
  auth.value = {
    username: "",
    password: "",
    email: "",
    name: {
      first: "",
      last: "",
    },
  };
};

const avatarUi = {
  rounded: "rounded-none",
  size: {
    "3xl": "h-96 w-full object-contain",
  },
};
</script>
