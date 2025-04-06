<script setup lang="ts">
import { ref } from 'vue'

interface Service {
  id: number
  title: string
  description: string
  icon: string
  features: string[]
}

const services = ref<Service[]>([
  {
    id: 1,
    title: 'Event Planning',
    description: 'Comprehensive planning services from concept to execution, ensuring every detail is perfectly organized.',
    icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01',
    features: [
      'Personalized event strategy',
      'Timeline development',
      'Budget management',
      'Vendor coordination',
      'Day-of coordination'
    ]
  },
  {
    id: 2,
    title: 'Catering & Cuisine',
    description: 'Exquisite food and beverage options tailored to your preferences and dietary requirements.',
    icon: 'M21 15.9999V7.9999C21 6.8954 20.1046 5.9999 19 5.9999H5C3.89543 5.9999 3 6.8954 3 7.9999V15.9999M21 15.9999V16.9999C21 18.1045 20.1046 18.9999 19 18.9999H5C3.89543 18.9999 3 18.1045 3 16.9999V15.9999M21 15.9999H3M16 10.9999C16 9.8954 15.1046 8.9999 14 8.9999H10C8.89543 8.9999 8 9.8954 8 10.9999V15.9999H16V10.9999Z',
    features: [
      'Custom menu design',
      'Professional chefs',
      'Bar service',
      'Tastings',
      'Special dietary options'
    ]
  },
  {
    id: 3,
    title: 'Venue Selection',
    description: 'Access to exclusive venues and spaces perfect for your event size and style.',
    icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
    features: [
      'Venue sourcing',
      'Site visits',
      'Contract negotiation',
      'Layout planning',
      'Capacity management'
    ]
  },
  {
    id: 4,
    title: 'Decor & Styling',
    description: 'Creative design and styling to transform spaces into visually stunning environments.',
    icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
    features: [
      'Theme development',
      'Floral arrangements',
      'Lighting design',
      'Furniture rental',
      'Table styling'
    ]
  },
  {
    id: 5,
    title: 'Entertainment',
    description: 'Curated entertainment options to elevate your event and engage your guests.',
    icon: 'M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3',
    features: [
      'Live music',
      'DJs & emcees',
      'Performers',
      'Interactive activities',
      'Custom entertainment planning'
    ]
  },
  {
    id: 6,
    title: 'Photography & Video',
    description: 'Professional documentation of your event to capture every special moment.',
    icon: 'M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z',
    features: [
      'Event photography',
      'Videography',
      'Drone footage',
      'Photo booths',
      'Same-day edits'
    ]
  }
])

const selectedService = ref<Service | null>(null)

function toggleServiceDetails(service: Service) {
  if (selectedService.value && selectedService.value.id === service.id) {
    selectedService.value = null
  } else {
    selectedService.value = service
  }
}
</script>

<template>
  <div>
    <!-- Page Header -->
    <section class="bg-xafladia-primary text-white py-20">
      <div class="container text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
        <p class="text-lg max-w-2xl mx-auto">
          Discover our comprehensive range of event services designed to make your occasion remarkable.
        </p>
      </div>
    </section>

    <!-- Services Overview -->
    <section class="section bg-white">
      <div class="container">
        <div class="max-w-3xl mx-auto text-center mb-12">
          <h2 class="text-3xl font-bold mb-4">Full-Service Event Management</h2>
          <p class="text-lg text-gray-600">
            From intimate gatherings to large-scale events, our team handles every detail
            with precision and creativity. We deliver seamless experiences that exceed expectations.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="service in services"
            :key="service.id"
            class="bg-xafladia-light rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            :class="{ 'ring-2 ring-xafladia-primary': selectedService && selectedService.id === service.id }"
          >
            <div class="w-14 h-14 bg-xafladia-primary rounded-lg flex items-center justify-center text-white mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="service.icon" />
              </svg>
            </div>

            <h3 class="text-xl font-bold mb-2">{{ service.title }}</h3>
            <p class="text-gray-600 mb-4">{{ service.description }}</p>

            <button
              @click="toggleServiceDetails(service)"
              class="text-xafladia-primary font-medium hover:underline focus:outline-none flex items-center"
            >
              <span>{{ selectedService && selectedService.id === service.id ? 'Show Less' : 'Show Details' }}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 ml-1 transition-transform"
                :class="{ 'rotate-180': selectedService && selectedService.id === service.id }"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div
              v-if="selectedService && selectedService.id === service.id"
              class="mt-4 pt-4 border-t border-gray-200"
            >
              <h4 class="font-bold mb-2 text-xafladia-dark">What We Provide:</h4>
              <ul class="space-y-2">
                <li
                  v-for="(feature, index) in service.features"
                  :key="index"
                  class="flex items-start"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-xafladia-secondary mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{{ feature }}</span>
                </li>
              </ul>

              <div class="mt-4">
                <router-link to="/contact" class="btn bg-xafladia-secondary text-white py-2 px-4 rounded">
                  Inquire Now
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Process Section -->
    <section class="section bg-gray-50">
      <div class="container">
        <h2 class="section-title">Our Process</h2>

        <div class="relative max-w-4xl mx-auto">
          <!-- Process Line -->
          <div class="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-xafladia-primary top-0 hidden md:block"></div>

          <!-- Process Steps -->
          <div class="space-y-12 relative">
            <!-- Step 1 -->
            <div class="md:flex items-center">
              <div class="md:w-1/2 md:pr-12 mb-4 md:mb-0 md:text-right">
                <h3 class="text-xl font-bold text-xafladia-primary mb-2">1. Consultation</h3>
                <p class="text-gray-600">We begin with an in-depth discussion to understand your vision, requirements, and objectives.</p>
              </div>

              <div class="md:w-10 md:h-10 bg-xafladia-primary rounded-full z-10 flex items-center justify-center text-white font-bold mx-auto md:mx-0">1</div>

              <div class="md:w-1/2 md:pl-12 md:mb-0 mt-4 md:mt-0">
                <div class="bg-white p-4 rounded-lg shadow-md">
                  <p class="text-gray-600 italic">"During our consultation, we'll discuss your goals, preferences, budget, and timeline to establish the foundation for your event."</p>
                </div>
              </div>
            </div>

            <!-- Step 2 -->
            <div class="md:flex items-center">
              <div class="md:w-1/2 md:pr-12 mb-4 md:mb-0 md:text-right order-1 md:order-2">
                <div class="bg-white p-4 rounded-lg shadow-md">
                  <p class="text-gray-600 italic">"We create a comprehensive plan including venue selection, vendor coordination, timeline development, and budget allocation."</p>
                </div>
              </div>

              <div class="md:w-10 md:h-10 bg-xafladia-primary rounded-full z-10 flex items-center justify-center text-white font-bold mx-auto md:mx-0 order-2 md:order-1">2</div>

              <div class="md:w-1/2 md:pl-12 order-3 mt-4 md:mt-0">
                <h3 class="text-xl font-bold text-xafladia-primary mb-2">2. Planning & Design</h3>
                <p class="text-gray-600">Our team develops a tailored event plan that aligns with your vision and objectives.</p>
              </div>
            </div>

            <!-- Step 3 -->
            <div class="md:flex items-center">
              <div class="md:w-1/2 md:pr-12 mb-4 md:mb-0 md:text-right">
                <h3 class="text-xl font-bold text-xafladia-primary mb-2">3. Coordination & Execution</h3>
                <p class="text-gray-600">We manage all logistics, vendor coordination, and setup to ensure flawless execution.</p>
              </div>

              <div class="md:w-10 md:h-10 bg-xafladia-primary rounded-full z-10 flex items-center justify-center text-white font-bold mx-auto md:mx-0">3</div>

              <div class="md:w-1/2 md:pl-12 mt-4 md:mt-0">
                <div class="bg-white p-4 rounded-lg shadow-md">
                  <p class="text-gray-600 italic">"Our experienced team handles all details on the day of your event, so you can relax and enjoy the experience with your guests."</p>
                </div>
              </div>
            </div>

            <!-- Step 4 -->
            <div class="md:flex items-center">
              <div class="md:w-1/2 md:pr-12 mb-4 md:mb-0 md:text-right order-1 md:order-2">
                <div class="bg-white p-4 rounded-lg shadow-md">
                  <p class="text-gray-600 italic">"We gather feedback, provide post-event reports, and ensure all final details are taken care of for a complete event experience."</p>
                </div>
              </div>

              <div class="md:w-10 md:h-10 bg-xafladia-primary rounded-full z-10 flex items-center justify-center text-white font-bold mx-auto md:mx-0 order-2 md:order-1">4</div>

              <div class="md:w-1/2 md:pl-12 order-3 mt-4 md:mt-0">
                <h3 class="text-xl font-bold text-xafladia-primary mb-2">4. Post-Event Follow-up</h3>
                <p class="text-gray-600">We evaluate the success of your event and ensure all elements are properly concluded.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="py-16 bg-xafladia-secondary text-white">
      <div class="container text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">Ready to Create Your Perfect Event?</h2>
        <p class="text-lg mb-8 max-w-2xl mx-auto">
          Contact us today to discuss how our services can make your next event exceptional.
        </p>
        <router-link to="/contact" class="btn bg-white text-xafladia-secondary hover:bg-opacity-90">
          Get in Touch
        </router-link>
      </div>
    </section>
  </div>
</template>