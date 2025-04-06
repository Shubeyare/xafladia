<template>
  <section id="events" class="py-20 bg-gray-100">
    <div class="container mx-auto px-6">
      <h2 class="text-4xl font-bold text-center mb-4 animate-on-scroll opacity-0">Upcoming Events</h2>
      <p class="text-gray-600 text-center mb-16 max-w-3xl mx-auto animate-on-scroll opacity-0">
        Join us at our exclusive upcoming events and experience the extraordinary
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-on-scroll opacity-0">
        <!-- Event 1 -->
        <div class="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:transform hover:scale-105">
          <img src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
               alt="Tech Conference" class="w-full h-48 object-cover" />
          <div class="p-6">
            <div class="text-indigo-600 font-semibold mb-2">July 15, 2023</div>
            <h3 class="text-xl font-bold mb-2">Annual Tech Conference</h3>
            <p class="text-gray-600 mb-4">Connect with industry leaders and discover the latest innovations in technology.</p>
            <div class="flex items-center text-gray-500 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>San Francisco, CA</span>
            </div>
            <a href="#" class="inline-block bg-indigo-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-indigo-700 transition duration-300">
              Register Now
            </a>
          </div>
        </div>

        <!-- Event 2 -->
        <div class="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:transform hover:scale-105">
          <img src="https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
               alt="Wedding Showcase" class="w-full h-48 object-cover" />
          <div class="p-6">
            <div class="text-indigo-600 font-semibold mb-2">August 20, 2023</div>
            <h3 class="text-xl font-bold mb-2">Summer Wedding Showcase</h3>
            <p class="text-gray-600 mb-4">Explore the latest wedding trends and meet our experienced planning team.</p>
            <div class="flex items-center text-gray-500 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Los Angeles, CA</span>
            </div>
            <a href="#" class="inline-block bg-indigo-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-indigo-700 transition duration-300">
              Register Now
            </a>
          </div>
        </div>

        <!-- Event 3 -->
        <div class="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:transform hover:scale-105">
          <img src="https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
               alt="Charity Gala" class="w-full h-48 object-cover" />
          <div class="p-6">
            <div class="text-indigo-600 font-semibold mb-2">September 10, 2023</div>
            <h3 class="text-xl font-bold mb-2">Annual Charity Gala</h3>
            <p class="text-gray-600 mb-4">Join us for an evening of elegance and giving back to the community.</p>
            <div class="flex items-center text-gray-500 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>New York, NY</span>
            </div>
            <a href="#" class="inline-block bg-indigo-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-indigo-700 transition duration-300">
              Register Now
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Component-specific logic can go here
</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>