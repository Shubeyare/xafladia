<template>
  <section id="events" class="py-20 bg-gray-100">
    <div class="container mx-auto px-6">
      <h2 class="text-4xl font-bold text-center mb-4 animate-on-scroll opacity-0">Upcoming Events</h2>
      <p class="text-gray-600 text-center mb-16 max-w-3xl mx-auto animate-on-scroll opacity-0">
        Join us at our exclusive upcoming events and experience the extraordinary
      </p>

      <!-- Desktop: Grid layout -->
      <div class="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-on-scroll opacity-0">
        <!-- Event cards for desktop layout -->
        <EventCard
          image="https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          title="Annual Tech Conference"
          date="July 15, 2023"
          description="Connect with industry leaders and discover the latest innovations in technology."
          location="San Francisco, CA"
        />

        <EventCard
          image="https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          title="Summer Wedding Showcase"
          date="August 20, 2023"
          description="Explore the latest wedding trends and meet our experienced planning team."
          location="Los Angeles, CA"
        />

        <EventCard
          image="https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
          title="Annual Charity Gala"
          date="September 10, 2023"
          description="Join us for an evening of elegance and giving back to the community."
          location="New York, NY"
        />
      </div>

      <!-- Mobile: Horizontal scrollable cards -->
      <div class="md:hidden overflow-x-auto pb-8 scrollbar-hide snap-x snap-mandatory animate-on-scroll opacity-0">
        <div class="flex gap-4 min-w-max pl-2">
          <!-- Event card 1 - Mobile version -->
          <div class="w-80 flex-shrink-0 snap-center">
            <EventCard
              image="https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              title="Annual Tech Conference"
              date="July 15, 2023"
              description="Connect with industry leaders and discover the latest innovations in technology."
              location="San Francisco, CA"
            />
          </div>

          <!-- Event card 2 - Mobile version -->
          <div class="w-80 flex-shrink-0 snap-center">
            <EventCard
              image="https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              title="Summer Wedding Showcase"
              date="August 20, 2023"
              description="Explore the latest wedding trends and meet our experienced planning team."
              location="Los Angeles, CA"
            />
          </div>

          <!-- Event card 3 - Mobile version -->
          <div class="w-80 flex-shrink-0 snap-center pr-2">
            <EventCard
              image="https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
              title="Annual Charity Gala"
              date="September 10, 2023"
              description="Join us for an evening of elegance and giving back to the community."
              location="New York, NY"
            />
          </div>
        </div>

        <!-- Scroll indicator -->
        <div class="flex justify-center mt-6 space-x-2">
          <div class="w-2 h-2 rounded-full bg-indigo-600"></div>
          <div class="w-2 h-2 rounded-full bg-gray-300"></div>
          <div class="w-2 h-2 rounded-full bg-gray-300"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import EventCard from './EventCard.vue'

// Optional: Add functionality to track the active card in the scroll
const activeCardIndex = ref(0)

onMounted(() => {
  // On mobile, we can add event listeners to track scroll position
  if (window.innerWidth < 768) {
    const scrollContainer = document.querySelector('.scrollbar-hide')
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', () => {
        // This is a simple implementation - you might want to use
        // Intersection Observer for more precise tracking
        const scrollLeft = scrollContainer.scrollLeft
        const cardWidth = 320 // Width of card + gap
        activeCardIndex.value = Math.round(scrollLeft / cardWidth)

        // Update scroll indicators
        const indicators = document.querySelectorAll('.rounded-full')
        indicators.forEach((indicator, index) => {
          if (index === activeCardIndex.value) {
            indicator.classList.remove('bg-gray-300')
            indicator.classList.add('bg-indigo-600')
          } else {
            indicator.classList.remove('bg-indigo-600')
            indicator.classList.add('bg-gray-300')
          }
        })
      })
    }
  }
})
</script>

<style scoped>
.container {
  max-width: 1200px;
}

/* Hide scrollbar for Chrome, Safari and Opera */
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.scrollbar-hide {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
</style>