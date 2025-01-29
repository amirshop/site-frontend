<template>
  <section class="contact-page py-12">
    <UContainer>
      <div class="text-center mb-8">
        <h1 class="text-4xl font-bold mb-4">Get in Touch</h1>
        <p class="text-lg text-gray-600">We would love to hear from you! Please fill out the form below or contact us directly.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Contact Form -->
        <UCard >
          <UForm @submit.prevent="submitForm">
            <UFormGroup  label="Your Name" for="name" class="mb-4">
              <UInput
                  id="name"
                  v-model="form.name"
                  placeholder="Enter your name"
              />
            </UFormGroup>

            <UFormGroup  label="Your Email" for="email" class="mb-4">
              <UInput
                  id="email"
                  type="email"
                  v-model="form.email"
                  placeholder="Enter your email"
              />
            </UFormGroup>





            <UFormGroup  label="Your Message" for="message" class="mb-4">
              <UTextarea
                  id="message"
                  v-model="form.message"
                  :rows="5"
                  placeholder="Enter your message"
              />
            </UFormGroup>
            <UButton
                type="submit"
                block

            >
              Send Message
            </UButton>
          </UForm>
        </UCard>

        <!-- Contact Information -->
        <div class="flex flex-col justify-center items-start">
          <h2 class="text-2xl font-semibold mb-4">Contact Information</h2>
          <p class="text-gray-600 mb-2">📍 Address: 123 Creative Lane, Design City</p>
          <p class="text-gray-600 mb-2">📞 Phone: +1 (123) 456-7890</p>
          <p class="text-gray-600 mb-6">✉️ Email: contact@yourdomain.com</p>
          <h3 class="text-lg font-medium mb-2">Follow Us</h3>
          <div class="flex space-x-4">
            <ULink href="#" class="text-blue-500 hover:text-blue-600">Twitter</ULink>
            <ULink href="#" class="text-blue-500 hover:text-blue-600">Facebook</ULink>
            <ULink href="#" class="text-blue-500 hover:text-blue-600">Instagram</ULink>
          </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      }
    };
  },
  methods: {
    submitForm() {
      // Placeholder for form submission logic
      alert(`Thank you, ${this.form.name}! Your message has been sent.`);
      this.form.name = '';
      this.form.email = '';
      this.form.message = '';
    }
  }
};
</script>

<style scoped>
.contact-page {
  background: linear-gradient(to bottom right, #f0f4ff, #e0eaff);
}
</style>
