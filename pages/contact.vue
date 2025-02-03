<template>
  <main class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-r from-purple-800 to-pink-800  text-white py-20">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
          <p class="text-xl text-purple-100">
            We'd love to hear from you. Let us know how we can help!
          </p>
        </div>
      </div>
      <div class="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 dark:from-gray-900"></div>
    </section>

    <!-- Contact Information & Form -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="grid md:grid-cols-2 gap-12 max-w-7xl mx-auto">
          <!-- Contact Information -->
          <div class="space-y-8">
            <div class="bg-white p-8 rounded-xl shadow-lg">
              <h2 class="text-2xl font-bold mb-6 text-gray-800">Contact Information</h2>
              <div class="space-y-6">
                <div class="flex items-start space-x-4">
                  <div class="bg-purple-100 p-3 rounded-lg">
                    <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-semibold text-gray-800">Our Location</h3>
                    <p class="text-gray-600">123 Fashion Street, Style City, SC 12345</p>
                  </div>
                </div>
                
                <div class="flex items-start space-x-4">
                  <div class="bg-purple-100 p-3 rounded-lg">
                    <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-semibold text-gray-800">Email Us</h3>
                    <p class="text-gray-600">support@mystore.com</p>
                  </div>
                </div>

                <div class="flex items-start space-x-4">
                  <div class="bg-purple-100 p-3 rounded-lg">
                    <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-semibold text-gray-800">Call Us</h3>
                    <p class="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="bg-white p-8 rounded-xl shadow-lg">
              <h2 class="text-2xl font-bold mb-6 text-gray-800">Business Hours</h2>
              <ul class="space-y-3">
                <li class="flex justify-between text-gray-600">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </li>
                <li class="flex justify-between text-gray-600">
                  <span>Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </li>
                <li class="flex justify-between text-gray-600">
                  <span>Sunday</span>
                  <span>Closed</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="bg-white p-8 rounded-xl shadow-lg">
            <h2 class="text-2xl font-bold mb-6 text-gray-800">Send us a Message</h2>
            <form class="space-y-6">
              <div>
                <label class="block text-gray-700 mb-2" for="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label class="block text-gray-700 mb-2" for="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label class="block text-gray-700 mb-2" for="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label class="block text-gray-700 mb-2" for="message">Message</label>
                <textarea
                  id="message"
                  rows="4"
                  class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              <button
                type="submit"
                class="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- Map Section -->
    <section class="py-16 bg-gray-100 dark:bg-gray-900">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <div class="bg-white p-4 rounded-xl shadow-lg">
            <div class="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30596073366!2d-74.25986548248684!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1645645399818!5m2!1sen!2s"
                class="w-full h-full rounded-lg"
                style="border:0;"
                :allowfullscreen="true"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
<script setup lang="ts"></script>
