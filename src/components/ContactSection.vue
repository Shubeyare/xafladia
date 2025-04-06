<template>
  <section id="contact" class="py-20 bg-gray-50">
    <div class="container mx-auto px-6">
      <h2 class="text-4xl font-bold text-center mb-12">Contact Us</h2>
      <p class="text-center text-gray-600 mb-16 max-w-3xl mx-auto">
        We'd love to hear from you! Whether you have a question about our services, pricing, or anything else, our team is ready to answer all your questions.
      </p>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Contact Form -->
        <div class="bg-white p-8 rounded-lg shadow-md">
          <h3 class="text-2xl font-semibold mb-6">Send us a message</h3>
          <form @submit.prevent="submitForm" class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input type="text" id="name" v-model="form.name" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Your name" required />
              </div>
              <div>
                <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input type="email" id="email" v-model="form.email" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="your@email.com" required />
              </div>
            </div>

            <div>
              <label for="subject" class="block text-sm font-medium text-gray-700 mb-1">Subject</label>
              <input type="text" id="subject" v-model="form.subject" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="How can we help you?" required />
            </div>

            <div>
              <label for="message" class="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea id="message" v-model="form.message" rows="4" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Tell us about your event or inquiry..." required></textarea>
            </div>

            <div>
              <button type="submit" class="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300 flex items-center justify-center">
                <span>Send Message</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </button>
            </div>
          </form>
        </div>

        <!-- Contact Information -->
        <div>
          <div class="bg-white p-8 rounded-lg shadow-md mb-8">
            <h3 class="text-2xl font-semibold mb-6">Contact Information</h3>
            <div class="space-y-4">
              <div class="flex items-start">
                <div class="flex-shrink-0 bg-indigo-100 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div class="ml-4">
                  <h4 class="text-lg font-medium text-gray-900">Address</h4>
                  <p class="text-gray-600">
                    123 Event Avenue<br />
                    Suite 500<br />
                    Los Angeles, CA 90001
                  </p>
                </div>
              </div>

              <div class="flex items-start">
                <div class="flex-shrink-0 bg-indigo-100 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div class="ml-4">
                  <h4 class="text-lg font-medium text-gray-900">Phone</h4>
                  <p class="text-gray-600">(123) 456-7890</p>
                </div>
              </div>

              <div class="flex items-start">
                <div class="flex-shrink-0 bg-indigo-100 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div class="ml-4">
                  <h4 class="text-lg font-medium text-gray-900">Email</h4>
                  <p class="text-gray-600">info@xafladia.com</p>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-white p-8 rounded-lg shadow-md">
            <h3 class="text-2xl font-semibold mb-6">Business Hours</h3>
            <ul class="space-y-3">
              <li class="flex justify-between">
                <span class="text-gray-600">Monday - Friday:</span>
                <span class="font-medium">9:00 AM - 6:00 PM</span>
              </li>
              <li class="flex justify-between">
                <span class="text-gray-600">Saturday:</span>
                <span class="font-medium">10:00 AM - 4:00 PM</span>
              </li>
              <li class="flex justify-between">
                <span class="text-gray-600">Sunday:</span>
                <span class="font-medium">Closed</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const submitForm = () => {
  // In a real application, you would implement form submission logic here
  console.log('Form submitted:', form)
  alert('Thank you for your message! We will get back to you soon.')

  // Reset form
  form.name = ''
  form.email = ''
  form.subject = ''
  form.message = ''
}
</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>