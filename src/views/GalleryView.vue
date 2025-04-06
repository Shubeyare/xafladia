<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'

interface GalleryImage {
  id: number
  src: string
  alt: string
  category: string
  width: number
  height: number
}

const images = ref<GalleryImage[]>([
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    alt: 'Elegant wedding setup',
    category: 'Wedding',
    width: 1470,
    height: 980
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1478146896981-b80fe463b330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
    alt: 'Corporate conference',
    category: 'Corporate',
    width: 1287,
    height: 1930
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80',
    alt: 'Gala dinner setup',
    category: 'Gala',
    width: 1469,
    height: 979
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80',
    alt: 'Birthday celebration',
    category: 'Birthday',
    width: 1469,
    height: 979
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1513623935135-c896b59073c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    alt: 'Wedding reception',
    category: 'Wedding',
    width: 1470,
    height: 980
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80',
    alt: 'Corporate event',
    category: 'Corporate',
    width: 1469,
    height: 979
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    alt: 'Garden party',
    category: 'Party',
    width: 1470,
    height: 980
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    alt: 'Wedding ceremony',
    category: 'Wedding',
    width: 1470,
    height: 980
  },
  {
    id: 9,
    src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    alt: 'Birthday party',
    category: 'Birthday',
    width: 1470,
    height: 980
  },
  {
    id: 10,
    src: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1562&q=80',
    alt: 'Cocktail reception',
    category: 'Party',
    width: 1562,
    height: 1041
  },
  {
    id: 11,
    src: 'https://images.unsplash.com/photo-1602631985686-1bb0e6a8696e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    alt: 'Corporate meeting',
    category: 'Corporate',
    width: 1470,
    height: 980
  },
  {
    id: 12,
    src: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    alt: 'Wedding reception dinner',
    category: 'Wedding',
    width: 1470,
    height: 980
  }
])

// Lightbox functionality
const lightboxOpen = ref(false)
const currentImage = ref<GalleryImage | null>(null)

function openLightbox(image: GalleryImage) {
  currentImage.value = image
  lightboxOpen.value = true
  document.body.classList.add('overflow-hidden')
}

function closeLightbox() {
  lightboxOpen.value = false
  document.body.classList.remove('overflow-hidden')
}

function nextImage() {
  if (!currentImage.value) return
  const currentIndex = filteredImages.value.findIndex(img => img.id === currentImage.value?.id)
  currentImage.value = filteredImages.value[(currentIndex + 1) % filteredImages.value.length]
}

function prevImage() {
  if (!currentImage.value) return
  const currentIndex = filteredImages.value.findIndex(img => img.id === currentImage.value?.id)
  currentImage.value = filteredImages.value[(currentIndex - 1 + filteredImages.value.length) % filteredImages.value.length]
}

// Handle keyboard navigation for lightbox
function handleKeydown(e: KeyboardEvent) {
  if (!lightboxOpen.value) return

  switch (e.key) {
    case 'Escape':
      closeLightbox()
      break
    case 'ArrowRight':
      nextImage()
      break
    case 'ArrowLeft':
      prevImage()
      break
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

// Filtering functionality
const categories = computed(() => {
  const categoriesSet = new Set(images.value.map(img => img.category))
  return ['All', ...Array.from(categoriesSet)]
})

const selectedCategory = ref('All')

const filteredImages = computed(() => {
  if (selectedCategory.value === 'All') {
    return images.value
  }
  return images.value.filter(img => img.category === selectedCategory.value)
})
</script>

<template>
  <div>
    <!-- Page Header -->
    <section class="bg-xafladia-primary text-white py-20">
      <div class="container text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">Our Gallery</h1>
        <p class="text-lg max-w-2xl mx-auto">
          Explore our portfolio of past events and get inspired for your next celebration.
        </p>
      </div>
    </section>

    <!-- Filters Section -->
    <section class="bg-white py-8 shadow-md">
      <div class="container">
        <div class="flex justify-center flex-wrap gap-2">
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
      </div>
    </section>

    <!-- Masonry Gallery -->
    <section class="section bg-xafladia-light">
      <div class="container">
        <div v-if="filteredImages.length === 0" class="text-center py-12">
          <h3 class="text-2xl font-medium text-gray-600">No images found</h3>
          <p class="mt-2 text-gray-500">Try selecting a different category</p>
        </div>

        <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div
            v-for="image in filteredImages"
            :key="image.id"
            @click="openLightbox(image)"
            class="gallery-item overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer relative"
            :style="{
              aspectRatio: `${image.width} / ${image.height}`,
            }"
          >
            <img
              :src="image.src"
              :alt="image.alt"
              class="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
            />
            <div class="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-opacity flex items-center justify-center">
              <div class="text-white opacity-0 hover:opacity-100 transition-opacity p-4 text-center">
                <span class="text-lg font-bold">{{ image.alt }}</span>
                <span class="block text-sm mt-1">{{ image.category }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Lightbox -->
    <div
      v-if="lightboxOpen"
      class="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
      @click="closeLightbox"
    >
      <div
        class="relative max-w-6xl max-h-[90vh] w-full"
        @click.stop
      >
        <img
          v-if="currentImage"
          :src="currentImage.src"
          :alt="currentImage.alt"
          class="w-full h-full object-contain"
        />

        <div class="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
          <p class="text-lg font-bold">{{ currentImage?.alt }}</p>
          <p class="text-sm">{{ currentImage?.category }}</p>
        </div>

        <!-- Navigation Buttons -->
        <button
          @click.stop="prevImage"
          class="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 p-2 rounded-full"
          aria-label="Previous image"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          @click.stop="nextImage"
          class="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 p-2 rounded-full"
          aria-label="Next image"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <!-- Close Button -->
        <button
          @click.stop="closeLightbox"
          class="absolute top-4 right-4 bg-black bg-opacity-50 hover:bg-opacity-70 p-2 rounded-full"
          aria-label="Close lightbox"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Call to Action -->
    <section class="py-16 bg-xafladia-accent text-white">
      <div class="container text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">Ready for Your Event?</h2>
        <p class="text-lg mb-8 max-w-2xl mx-auto">
          Let us help you create beautiful memories that you'll cherish for years to come.
        </p>
        <router-link to="/contact" class="btn bg-white text-xafladia-accent hover:bg-opacity-90">
          Get Started
        </router-link>
      </div>
    </section>
  </div>
</template>

<style scoped>
.gallery-item {
  break-inside: avoid;
  margin-bottom: 1rem;
}

@media (min-width: 768px) {
  .grid {
    column-gap: 1.5rem;
    column-count: 2;
  }
}

@media (min-width: 1024px) {
  .grid {
    column-count: 3;
  }
}

/* For Firefox */
@-moz-document url-prefix() {
  .grid {
    display: block;
  }
}
</style>
