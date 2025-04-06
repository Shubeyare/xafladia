<script setup lang="ts">
import { ref } from 'vue'

interface FormData {
  name: string
  email: string
  phone: string
  eventType: string
  date: string
  message: string
}

const formData = ref<FormData>({
  name: '',
  email: '',
  phone: '',
  eventType: '',
  date: '',
  message: ''
})

const isSubmitting = ref(false)
const submissionStatus = ref<'success' | 'error' | null>(null)
const errors = ref<Record<string, string>>({})

const eventTypes = [
  'Wedding',
  'Corporate Event',
  'Birthday Party',
  'Gala/Charity Event',
  'Conference',
  'Other'
]

function validateForm(): boolean {
  errors.value = {}
  let isValid = true

  if (!formData.value.name.trim()) {
    errors.value.name = 'Name is required'
    isValid = false
  }

  if (!formData.value.email.trim()) {
    errors.value.email = 'Email is required'
    isValid = false
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.value.email)) {
    errors.value.email = 'Please enter a valid email address'
    isValid = false
  }

  if (formData.value.phone && !/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/.test(formData.value.phone)) {
    errors.value.phone = 'Please enter a valid phone number'
    isValid = false
  }

  if (!formData.value.message.trim()) {
    errors.value.message = 'Message is required'
    isValid = false
  }

  return isValid
}

async function submitForm() {
  if (!validateForm()) {
    return
  }

  isSubmitting.value = true

  try {
    // In a real application, you would send the form data to a backend service here
    // For demo purposes, we'll just simulate a successful submission after a delay
    await new Promise(resolve => setTimeout(resolve, 1500))

    submissionStatus.value = 'success'
    formData.value = {
      name: '',
      email: '',
      phone: '',
      eventType: '',
      date: '',
      message: ''
    }
  } catch (error) {
    submissionStatus.value = 'error'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <div>
    <!-- Page Header -->
    <section class="bg-xafladia-primary text-white py-20">
      <div class="container text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
        <p class="text-lg max-w-2xl mx-auto">
          Ready to start planning your perfect event? Get in touch with our team today.
        </p>
      </div>
    </section>

    <!-- Contact Form Section -->
    <section class="section bg-white">
      <div class="container">
        <div class="flex flex-col lg:flex-row gap-12">
          <!-- Contact Form -->
          <div class="lg:w-2/3">
            <h2 class="text-3xl font-bold mb-6">Get In Touch</h2>

            <!-- Success Message -->
            <div v-if="submissionStatus === 'success'" class="bg-green-50 border border-green-200 text-green-800 rounded-lg p-4 mb-6">
              <div class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="font-medium">Thank you for contacting us!</span>
              </div>
              <p class="mt-2">We've received your message and will get back to you as soon as possible.</p>
            </div>

            <!-- Error Message -->
            <div v-if="submissionStatus === 'error'" class="bg-red-50 border border-red-200 text-red-800 rounded-lg p-4 mb-6">
              <div class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span class="font-medium">Oops! Something went wrong.</span>
              </div>
              <p class="mt-2">Please try again or contact us directly at contact@xafladia.com</p>
            </div>

            <form @submit.prevent="submitForm" class="space-y-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <!-- Name Field -->
                <div>
                  <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                  <input
                    type="text"
                    id="name"
                    v-model="formData.name"
                    :class="{ 'border-red-500': errors.name }"
                    class="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-xafladia-primary focus:border-xafladia-primary transition"
                    placeholder="Your name"
                  />
                  <p v-if="errors.name" class="mt-1 text-sm text-red-600">{{ errors.name }}</p>
                </div>

                <!-- Email Field -->
                <div>
                  <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                  <input
                    type="email"
                    id="email"
                    v-model="formData.email"
                    :class="{ 'border-red-500': errors.email }"
                    class="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-xafladia-primary focus:border-xafladia-primary transition"
                    placeholder="Your email"
                  />
                  <p v-if="errors.email" class="mt-1 text-sm text-red-600">{{ errors.email }}</p>
                </div>

                <!-- Phone Field -->
                <div>
                  <label for="phone" class="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    v-model="formData.phone"
                    :class="{ 'border-red-500': errors.phone }"
                    class="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-xafladia-primary focus:border-xafladia-primary transition"
                    placeholder="Your phone number"
                  />
                  <p v-if="errors.phone" class="mt-1 text-sm text-red-600">{{ errors.phone }}</p>
                </div>

                <!-- Event Type Field -->
                <div>
                  <label for="eventType" class="block text-sm font-medium text-gray-700 mb-1">Event Type</label>
                  <select
                    id="eventType"
                    v-model="formData.eventType"
                    class="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-xafladia-primary focus:border-xafladia-primary transition"
                  >
                    <option value="" disabled selected>Select event type</option>
                    <option v-for="type in eventTypes" :key="type" :value="type">{{ type }}</option>
                  </select>
                </div>

                <!-- Event Date Field -->
                <div>
                  <label for="date" class="block text-sm font-medium text-gray-700 mb-1">Event Date</label>
                  <input
                    type="date"
                    id="date"
                    v-model="formData.date"
                    class="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-xafladia-primary focus:border-xafladia-primary transition"
                  />
                </div>
              </div>

              <!-- Message Field -->
              <div>
                <label for="message" class="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                <textarea
                  id="message"
                  v-model="formData.message"
                  :class="{ 'border-red-500': errors.message }"
                  class="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-xafladia-primary focus:border-xafladia-primary transition"
                  rows="5"
                  placeholder="Tell us about your event..."
                ></textarea>
                <p v-if="errors.message" class="mt-1 text-sm text-red-600">{{ errors.message }}</p>
              </div>

              <!-- Submit Button -->
              <div>
                <button
                  type="submit"
                  class="btn btn-primary relative"
                  :disabled="isSubmitting"
                >
                  <span v-if="isSubmitting" class="absolute inset-0 flex items-center justify-center">
                    <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  </span>
                  <span :class="{ 'opacity-0': isSubmitting }">Send Message</span>
                </button>
              </div>
            </form>
          </div>

          <!-- Contact Information -->
          <div class="lg:w-1/3 bg-xafladia-light p-6 rounded-lg h-fit">
            <h3 class="text-xl font-bold mb-6 border-b border-gray-200 pb-2">Contact Information</h3>

            <div class="space-y-6">
              <div class="flex items-start">
                <div class="flex-shrink-0 h-10 w-10 rounded-full bg-xafladia-primary text-white flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div class="ml-4">
                  <h4 class="text-lg font-medium">Visit Us</h4>
                  <address class="not-italic mt-1 text-gray-600">
                    123 Event Plaza<br>
                    Suite 500<br>
                    New York, NY 10001
                  </address>
                </div>
              </div>

              <div class="flex items-start">
                <div class="flex-shrink-0 h-10 w-10 rounded-full bg-xafladia-secondary text-white flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div class="ml-4">
                  <h4 class="text-lg font-medium">Call Us</h4>
                  <p class="mt-1 text-gray-600">
                    <a href="tel:+12345678900" class="hover:text-xafladia-primary transition-colors">+1 (234) 567-8900</a>
                  </p>
                </div>
              </div>

              <div class="flex items-start">
                <div class="flex-shrink-0 h-10 w-10 rounded-full bg-xafladia-accent text-white flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div class="ml-4">
                  <h4 class="text-lg font-medium">Email Us</h4>
                  <p class="mt-1 text-gray-600">
                    <a href="mailto:info@xafladia.com" class="hover:text-xafladia-primary transition-colors">info@xafladia.com</a>
                  </p>
                </div>
              </div>

              <div class="flex items-start">
                <div class="flex-shrink-0 h-10 w-10 rounded-full bg-xafladia-dark text-white flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div class="ml-4">
                  <h4 class="text-lg font-medium">Office Hours</h4>
                  <p class="mt-1 text-gray-600">
                    Monday - Friday: 9am to 6pm<br>
                    Saturday: 10am to 4pm<br>
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            <!-- Social Media Links -->
            <div class="mt-8 pt-6 border-t border-gray-200">
              <h4 class="font-medium mb-4">Follow Us</h4>
              <div class="flex space-x-4">
                <a href="#" class="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-xafladia-primary hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.294h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                  </svg>
                </a>
                <a href="#" class="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-xafladia-primary hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#" class="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-xafladia-primary hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" class="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-xafladia-primary hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Map Section -->
    <section class="py-12">
      <div class="container">
        <div class="bg-gray-200 rounded-lg overflow-hidden h-80 relative">
          <!-- This would be replaced with an actual Google Maps embed in a real application -->
          <div class="absolute inset-0 flex items-center justify-center bg-xafladia-light">
            <div class="text-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-xafladia-primary mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p class="text-gray-600">Map location would be displayed here.<br>In a real app, this would be replaced with an actual Google Maps embed.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="section bg-xafladia-light">
      <div class="container">
        <h2 class="section-title">Frequently Asked Questions</h2>

        <div class="max-w-3xl mx-auto divide-y">
          <div class="py-5">
            <h3 class="text-xl font-bold">How far in advance should I book my event?</h3>
            <p class="mt-2 text-gray-600">
              We recommend booking your event at least 3-6 months in advance, especially for weddings and large corporate events. However, we do our best to accommodate last-minute requests when possible.
            </p>
          </div>

          <div class="py-5">
            <h3 class="text-xl font-bold">What is your cancellation policy?</h3>
            <p class="mt-2 text-gray-600">
              Our standard policy requires a 50% deposit to secure your date, which is non-refundable within 30 days of the event. Full details will be provided in your contract.
            </p>
          </div>

          <div class="py-5">
            <h3 class="text-xl font-bold">Do you provide services for small events?</h3>
            <p class="mt-2 text-gray-600">
              Yes! We cater to events of all sizes, from intimate gatherings to large-scale celebrations. Our team will work with you to create a package that suits your specific needs.
            </p>
          </div>

          <div class="py-5">
            <h3 class="text-xl font-bold">Can you accommodate special dietary requirements?</h3>
            <p class="mt-2 text-gray-600">
              Absolutely. Our catering partners can accommodate various dietary restrictions and preferences, including vegetarian, vegan, gluten-free, and allergen-specific menus.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>