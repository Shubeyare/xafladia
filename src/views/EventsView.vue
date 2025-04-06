<script setup lang="ts">
import { ref, computed } from 'vue'

interface Event {
  id: number
  title: string
  date: string
  location: string
  category: string
  image: string
  description: string
}

const events = ref<Event[]>([
  {
    id: 1,
    title: 'Summer Wedding Extravaganza',
    date: 'June 15, 2023',
    location: 'Riverside Gardens',
    category: 'Wedding',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    description: 'A beautiful summer wedding surrounded by nature and elegance.'
  },
  {
    id: 2,
    title: 'Corporate Annual Conference',
    date: 'September 20, 2023',
    location: 'Grand Convention Center',
    category: 'Corporate',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    description: 'Networking and insights at our annual business conference.'
  },
  {
    id: 3,
    title: 'Charity Gala Dinner',
    date: 'November 10, 2023',
    location: 'Starlight Ballroom',
    category: 'Charity',
    image: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    description: 'An elegant evening raising funds for important causes.'
  },
  {
    id: 4,
    title: 'Birthday Celebration',
    date: 'July 25, 2023',
    location: 'Blue Horizon Resort',
    category: 'Birthday',
    image: 'https://images.unsplash.com/photo-1464349153735-7db50ed83c84?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
    description: 'A milestone birthday celebration with friends and family.'
  },
  {
    id: 5,
    title: 'Product Launch',
    date: 'August 8, 2023',
    location: 'Innovate Hall',
    category: 'Corporate',
    image: 'https://images.unsplash.com/photo-1558403871-bb6e8113a32e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    description: 'Unveiling the next big thing in tech with style.'
  },
  {
    id: 6,
    title: 'Engagement Party',
    date: 'October 5, 2023',
    location: 'Sunset Vineyard',
    category: 'Wedding',
    image: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    description: 'Celebrating love with an intimate engagement gathering.'
  }
])

const categories = ['All', 'Wedding', 'Corporate', 'Charity', 'Birthday']
const selectedCategory = ref('All')
const searchQuery = ref('')

const filteredEvents = computed(() => {
  let filtered = events.value

  if (selectedCategory.value !== 'All') {
    filtered = filtered.filter(event => event.category === selectedCategory.value)
  }

  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(event =>
      event.title.toLowerCase().includes(query) ||
      event.description.toLowerCase().includes(query) ||
      event.location.toLowerCase().includes(query)
    )
  }

  return filtered
})

const selectedEvent = ref<Event | null>(null)

function openEventDetails(event: Event) {
  selectedEvent.value = event
}

function closeEventDetails() {
  selectedEvent.value = null
}
</script>

<template>
  <div>
    <!-- Page Header -->
    <section class="bg-xafladia-primary text-white py-20">
      <div class="container text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">Our Events</h1>
        <p class="text-lg max-w-2xl mx-auto">
          Discover our past and upcoming events. Get inspired for your next special occasion.
        </p>
      </div>
    </section>

    <!-- Filters Section -->
    <section class="bg-white py-8 shadow-md">
      <div class="container">
        <div class="flex flex-col md:flex-row gap-4 justify-between items-center">
          <div class="flex flex-wrap gap-2">
            <button
              v-for="category in categories"
              :key="category"
              @click="selectedCategory = category"
              class="px-4 py-2 rounded-full text-sm font-medium transition-colors"
              :class="selectedCategory === category
                ? 'bg-xafladia-primary text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'"
            >
              {{ category }}
            </button>
          </div>

          <div class="w-full md:w-auto">
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Search events..."
              class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-xafladia-primary"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Events Grid -->
    <section class="section bg-gray-50">
      <div class="container">
        <div v-if="filteredEvents.length === 0" class="text-center py-12">
          <h3 class="text-2xl font-medium text-gray-600">No events found</h3>
          <p class="mt-2 text-gray-500">Try adjusting your search or filter criteria</p>
        </div>

        <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="event in filteredEvents"
            :key="event.id"
            class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
          >
            <div class="relative h-48 overflow-hidden">
              <img
                :src="event.image"
                :alt="event.title"
                class="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
              />
              <div class="absolute top-0 right-0 bg-xafladia-primary text-white px-3 py-1 m-2 rounded-md text-sm">
                {{ event.category }}
              </div>
            </div>

            <div class="p-6">
              <h3 class="text-xl font-bold mb-2 text-xafladia-dark">{{ event.title }}</h3>

              <div class="flex items-center text-gray-600 mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {{ event.date }}
              </div>

              <div class="flex items-center text-gray-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {{ event.location }}
              </div>

              <p class="text-gray-600 mb-4">{{ event.description }}</p>

              <button
                @click="openEventDetails(event)"
                class="text-xafladia-primary font-medium hover:underline focus:outline-none"
              >
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Event Details Modal -->
    <div v-if="selectedEvent" class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div class="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        <div class="relative h-64 md:h-80">
          <img
            :src="selectedEvent.image"
            :alt="selectedEvent.title"
            class="w-full h-full object-cover"
          />
          <button
            @click="closeEventDetails"
            class="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
            <h2 class="text-2xl md:text-3xl font-bold text-white">{{ selectedEvent.title }}</h2>
          </div>
        </div>

        <div class="p-6">
          <div class="flex flex-wrap gap-4 mb-6">
            <div class="flex items-center text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {{ selectedEvent.date }}
            </div>

            <div class="flex items-center text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {{ selectedEvent.location }}
            </div>

            <div class="flex items-center">
              <span class="bg-xafladia-primary text-white px-3 py-1 rounded-md text-sm">
                {{ selectedEvent.category }}
              </span>
            </div>
          </div>

          <p class="text-gray-600 mb-6">{{ selectedEvent.description }}</p>

          <div class="border-t border-gray-200 pt-6">
            <h3 class="text-xl font-bold mb-4">Interested in a similar event?</h3>
            <router-link to="/contact" class="btn btn-primary">
              Contact Us
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Optional: Add fade transition for modal */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>