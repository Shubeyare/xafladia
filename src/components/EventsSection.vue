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
      <div class="md:hidden relative animate-on-scroll opacity-0">
        <div
          ref="mobileCarousel"
          class="overflow-x-auto pb-8 scrollbar-hide snap-x snap-mandatory carousel-container"
          @touchstart="handleTouchStart"
          @touchmove="handleTouchMove"
          @touchend="handleTouchEnd"
          @scroll="handleScrollThrottled"
        >
          <div class="flex gap-6 pl-2 pr-2">
            <!-- Event card 1 - Mobile version -->
            <div class="w-[280px] flex-shrink-0 snap-center transition-transform event-card" :id="`event-card-0`">
              <EventCard
                image="https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                title="Annual Tech Conference"
                date="July 15, 2023"
                description="Connect with industry leaders and discover the latest innovations in technology."
                location="San Francisco, CA"
              />
            </div>

            <!-- Event card 2 - Mobile version -->
            <div class="w-[280px] flex-shrink-0 snap-center transition-transform event-card" :id="`event-card-1`">
              <EventCard
                image="https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                title="Summer Wedding Showcase"
                date="August 20, 2023"
                description="Explore the latest wedding trends and meet our experienced planning team."
                location="Los Angeles, CA"
              />
            </div>

            <!-- Event card 3 - Mobile version -->
            <div class="w-[280px] flex-shrink-0 snap-center transition-transform event-card" :id="`event-card-2`">
              <EventCard
                image="https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
                title="Annual Charity Gala"
                date="September 10, 2023"
                description="Join us for an evening of elegance and giving back to the community."
                location="New York, NY"
              />
            </div>
          </div>
        </div>

        <!-- Scroll indicator dots -->
        <div class="flex justify-center mt-4 space-x-3">
          <div
            v-for="(_, index) in 3"
            :key="index"
            class="w-3 h-3 rounded-full transition-all duration-300 cursor-pointer"
            :class="activeCardIndex === index ? 'bg-indigo-600 scale-110' : 'bg-gray-300 hover:bg-gray-400'"
            @click="scrollToCard(index)"
            :aria-label="`Go to event ${index + 1}`"
          ></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref, onBeforeUnmount } from 'vue'
import EventCard from './EventCard.vue'

// Track the active card index
const activeCardIndex = ref(0)
const mobileCarousel = ref<HTMLElement | null>(null)
let touchStartX = 0
let touchEndX = 0
let isTouching = false
let scrollTimeout: number | null = null
const totalCards = 3

// Card dimensions
const cardWidth = 280
const cardGap = 24 // 6 in tailwind = 1.5rem = 24px
const cardTotal = cardWidth + cardGap

// Create a throttled scroll handler
const handleScrollThrottled = throttle(updateActiveIndex, 100)

// Function to update active index based on scroll position
function updateActiveIndex() {
  if (!mobileCarousel.value || isTouching) return

  const scrollLeft = mobileCarousel.value.scrollLeft
  const newIndex = calculateCardIndex(scrollLeft)

  // Only update if changed to avoid unnecessary renders
  if (newIndex !== activeCardIndex.value) {
    activeCardIndex.value = newIndex
  }

  // Clear any existing timeout
  if (scrollTimeout) {
    window.clearTimeout(scrollTimeout)
  }

  // Set timeout to snap to nearest card when scrolling stops
  scrollTimeout = window.setTimeout(() => {
    if (!isTouching) {
      snapToNearestCard()
    }
  }, 150)
}

// Function to calculate current index from scroll position
function calculateCardIndex(scrollLeft: number): number {
  return Math.round(scrollLeft / cardTotal)
}

// Function to snap to the nearest card
function snapToNearestCard() {
  if (!mobileCarousel.value) return

  const scrollLeft = mobileCarousel.value.scrollLeft
  const nearestCardIndex = Math.round(scrollLeft / cardTotal)

  // Snap to the nearest card
  scrollToCard(nearestCardIndex)
}

// Function to scroll to a specific card
function scrollToCard(index: number) {
  if (!mobileCarousel.value) return

  // Ensure index is within bounds
  const boundedIndex = Math.max(0, Math.min(index, totalCards - 1))

  mobileCarousel.value.scrollTo({
    left: boundedIndex * cardTotal,
    behavior: 'smooth'
  })

  // Update active index immediately for better UX
  activeCardIndex.value = boundedIndex
}

// Navigate to the previous card
function previousCard() {
  if (activeCardIndex.value > 0) {
    scrollToCard(activeCardIndex.value - 1)
  }
}

// Navigate to the next card
function nextCard() {
  if (activeCardIndex.value < totalCards - 1) {
    scrollToCard(activeCardIndex.value + 1)
  }
}

// Touch event handlers for improved mobile swiping
function handleTouchStart(e: TouchEvent) {
  touchStartX = e.changedTouches[0].screenX
  isTouching = true

  // Clear any snap timeout when user starts touching
  if (scrollTimeout) {
    window.clearTimeout(scrollTimeout)
    scrollTimeout = null
  }
}

function handleTouchMove(e: TouchEvent) {
  // We don't prevent default here to allow native scrolling
  // But we can detect the current touch position for later use
  touchEndX = e.changedTouches[0].screenX
}

function handleTouchEnd(e: TouchEvent) {
  touchEndX = e.changedTouches[0].screenX
  isTouching = false
  handleSwipe()

  // Set a timeout to ensure we snap to the nearest card
  setTimeout(snapToNearestCard, 50)
}

function handleSwipe() {
  const swipeThreshold = 50 // Minimum distance to trigger swipe
  if (touchEndX < touchStartX - swipeThreshold) {
    // Swipe left -> next card
    nextCard()
  } else if (touchEndX > touchStartX + swipeThreshold) {
    // Swipe right -> previous card
    previousCard()
  }
}

// Throttle function to limit the frequency of function calls
function throttle(callback: Function, delay: number) {
  let lastCall = 0
  return function(this: any, ...args: any[]) {
    const now = new Date().getTime()
    if (now - lastCall < delay) {
      return
    }
    lastCall = now
    return callback.apply(this, args)
  }
}

// Keyboard navigation handler
function handleKeyboardNav(e: KeyboardEvent) {
  if (e.key === 'ArrowLeft') {
    previousCard()
  } else if (e.key === 'ArrowRight') {
    nextCard()
  }
}

onMounted(() => {
  // Only set up event listeners on mobile
  if (window.innerWidth < 768) {
    const carousel = mobileCarousel.value

    if (carousel) {
      // Force a redraw to ensure proper snap points
      setTimeout(() => {
        // Set initial scroll position based on active index
        scrollToCard(0)
      }, 150)

      // Set up keyboard navigation for accessibility
      window.addEventListener('keydown', handleKeyboardNav)
    }
  }
})

// Clean up event listeners when component is destroyed
onBeforeUnmount(() => {
  // Remove keyboard event listener
  window.removeEventListener('keydown', handleKeyboardNav)

  // Clear any pending timeouts
  if (scrollTimeout) {
    window.clearTimeout(scrollTimeout)
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

/* Enhanced carousel styling */
.carousel-container {
  -webkit-overflow-scrolling: touch; /* Smooth scrolling on iOS */
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  overscroll-behavior-x: contain; /* Prevent back/forward navigation on some browsers */
}

.event-card {
  scroll-snap-align: center;
  transform: scale(0.98);
  transition: transform 0.3s ease;
}

.event-card:hover {
  transform: scale(1);
}
</style>