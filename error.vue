<template>
  <div class="min-h-screen bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center px-4">
    <div class="max-w-lg w-full bg-white rounded-lg shadow-xl p-8 text-center">
      <div class="mb-8">
        <div class="animate-bounce">
          <svg class="w-24 h-24 mx-auto text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
      </div>
      <h1 class="text-4xl font-bold text-gray-800 mb-4">Oops! Something went wrong</h1>
      <p class="text-gray-600 mb-8">We're sorry, but it seems there was an error processing your request. Please try again or return home.</p>
      <div class="space-x-4">
        <button @click="$router.go(-1)" class="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors duration-200">
          Go Back
        </button>
        <NuxtLink to="/" class="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300 transition-colors duration-200 inline-block">
          Return Home
        </NuxtLink>
      </div>
    </div>
  </div>
</template>