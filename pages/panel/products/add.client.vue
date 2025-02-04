<template>
  <UCard class="">
    <template #header>
      <h1 class="text-lg font-bold">Add New User</h1>
    </template>

    <UForm :schema="schema" @submit="onSubmit" class="grid grid-cols-2 gap-4">
      <UFormGroup label="Full Name" name="fullName">
        <UInput v-model="form.fullName" placeholder="Enter full name" />
      </UFormGroup>

      <UFormGroup label="Email" name="email">
        <UInput v-model="form.email" type="email" placeholder="Enter email" />
      </UFormGroup>

      <UFormGroup label="Password" name="password">
        <UInput
          v-model="form.password"
          type="password"
          placeholder="Enter password"
        />
      </UFormGroup>

      <UFormGroup label="Role" name="role">
        <USelect
          v-model="form.role"
          :options="roles"
          placeholder="Select role"
        />
      </UFormGroup>

      <UFormGroup label="Bio" name="bio">
        <UTextarea v-model="form.bio" placeholder="Enter bio" />
      </UFormGroup>

      <UFormGroup label="Profile Picture" name="profilePicture">
        <UInput
          v-model="form.profilePicture"
          type="file"
          accept="image/*"
          @change="onFileChange"
        />
      </UFormGroup>

      <div class="">
        <UButton type="primary" :loading="isSubmitting">
          {{ isSubmitting ? "Submitting..." : "Add User" }}
        </UButton>
      </div>
    </UForm>
  </UCard>
</template>
<script setup lang="ts">
import { z } from "zod";
definePageMeta({
  layout: "panel",
});

const form = ref({
  fullName: "",
  email: "",
  password: "",
  role: "",
  bio: "",
  profilePicture: null,
});

const roles = [
  { value: "admin", label: "Admin" },
  { value: "editor", label: "Editor" },
  { value: "viewer", label: "Viewer" },
];

const schema = z.object({
  fullName: z.string("Full name is required"),
  email: z.string("Email is required").email("Invalid email"),
  password: z
    .string("Password is required")
    .min(6, "Password must be at least 6 characters"),
  role: z.string("Role is required"),
  bio: z.string().optional(),
  profilePicture: z.string().optional(),
});

const isSubmitting = ref(false);

const onSubmit = async () => {
  isSubmitting.value = true;
  try {
    // Simulate an API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("User added:", form.value);
    // Reset form after submission
    form.value = {
      fullName: "",
      email: "",
      password: "",
      role: "",
      bio: "",
      profilePicture: null,
    };
  } catch (error) {
    console.error("Error adding user:", error);
  } finally {
    isSubmitting.value = false;
  }
};

const onFileChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  if (target.files && target.files[0]) {
    form.value.profilePicture = target.files[0];
  }
};
</script>
