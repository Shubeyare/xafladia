<template>
  <section id="about" class="py-20 bg-white">
    <div class="container mx-auto px-6">
      <h2 class="text-4xl font-bold text-center mb-12 animate-on-scroll opacity-0">About Us</h2>

      <div class="flex flex-col md:flex-row items-center gap-12">
        <div class="md:w-1/2 animate-on-scroll opacity-0">
          <h3 class="text-2xl font-bold mb-6 text-gray-800">Our Story</h3>
          <p class="mb-4 text-gray-700">
            Xafladia was born from a passion for creating memorable moments and celebrating life's special occasions. Founded in 2010, we began as a small team with big dreams, dedicated to transforming events from ordinary to extraordinary.
          </p>
          <p class="mb-4 text-gray-700">
            Our philosophy is simple: every event should tell a story and create lasting memories. We believe in the power of personalized experiences that reflect the unique vision and personality of each client.
          </p>
          <p class="mb-4 text-gray-700">
            Over the years, we've had the privilege of orchestrating a diverse range of events, from intimate weddings to large corporate galas, each with its own distinctive character and charm.
          </p>
        </div>
        <div class="md:w-1/2 animate-on-scroll opacity-0">
          <div class="relative">
            <img
              src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt="Team collaboration"
              class="rounded-lg shadow-lg"
            />
            <div class="absolute -bottom-6 -right-6 bg-indigo-600 rounded-lg p-6 shadow-xl w-40 h-40 flex items-center justify-center">
              <div class="text-center text-white">
                <div class="text-3xl font-bold">12+</div>
                <div class="text-sm font-medium">Years of Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Team Section -->
      <div class="mt-24">
        <h3 class="text-2xl font-bold text-center mb-12 animate-on-scroll opacity-0">Meet Our Team</h3>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow animate-on-scroll opacity-0">
            <div class="h-64 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
                alt="Sophia Reynolds"
                class="w-full h-full object-cover object-center transition-transform hover:scale-105 duration-500"
              />
            </div>
            <div class="p-6">
              <h4 class="text-xl font-bold mb-1">Sophia Reynolds</h4>
              <div class="text-indigo-600 font-medium mb-3">Founder & Creative Director</div>
              <p class="text-gray-600">With over 15 years in the event industry, Sophia brings creative vision and leadership to every project.</p>
            </div>
          </div>

          <div class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow animate-on-scroll opacity-0">
            <div class="h-64 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1556157382-97eda2f9671e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
                alt="Marcus Chen"
                class="w-full h-full object-cover object-center transition-transform hover:scale-105 duration-500"
              />
            </div>
            <div class="p-6">
              <h4 class="text-xl font-bold mb-1">Marcus Chen</h4>
              <div class="text-indigo-600 font-medium mb-3">Event Planning Manager</div>
              <p class="text-gray-600">Marcus excels at logistics and coordination, ensuring that every event runs smoothly from planning through execution.</p>
            </div>
          </div>

          <div class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow animate-on-scroll opacity-0">
            <div class="h-64 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1289&q=80"
                alt="Isabella Martinez"
                class="w-full h-full object-cover object-center transition-transform hover:scale-105 duration-500"
              />
            </div>
            <div class="p-6">
              <h4 class="text-xl font-bold mb-1">Isabella Martinez</h4>
              <div class="text-indigo-600 font-medium mb-3">Design Specialist</div>
              <p class="text-gray-600">With an eye for aesthetics and detail, Isabella transforms spaces into stunning environments that perfectly complement each event theme.</p>
            </div>
          </div>

          <div class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow animate-on-scroll opacity-0">
            <div class="h-64 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
                alt="James Wilson"
                class="w-full h-full object-cover object-center transition-transform hover:scale-105 duration-500"
              />
            </div>
            <div class="p-6">
              <h4 class="text-xl font-bold mb-1">James Wilson</h4>
              <div class="text-indigo-600 font-medium mb-3">Client Relations Manager</div>
              <p class="text-gray-600">James is dedicated to ensuring client satisfaction, maintaining communication throughout the planning process and beyond.</p>
            </div>
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