<template>
  <section id="gallery" class="py-20 bg-gray-50">
    <div class="container mx-auto px-6">
      <h2 class="text-4xl font-bold text-center mb-12 animate-on-scroll opacity-0">Our Gallery</h2>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 animate-on-scroll opacity-0">
        <!-- Gallery Item 1 -->
        <div ref="galleryItems" class="relative group overflow-hidden rounded-lg h-64 shadow-md">
          <img
            loading="lazy"
            data-src="https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'%3E%3C/svg%3E"
            alt="Wedding"
            class="w-full h-full object-cover transition-transform group-hover:scale-110 duration-500 lazy-image"
          />
          <div class="absolute inset-0 bg-indigo-600 opacity-0 group-hover:opacity-70 transition-opacity duration-300 flex items-center justify-center">
            <div class="text-white text-center p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <div class="text-lg font-bold">Elegant Wedding</div>
              <div class="text-sm">Los Angeles, CA</div>
            </div>
          </div>
        </div>

        <!-- Gallery Item 2 -->
        <div ref="galleryItems" class="relative group overflow-hidden rounded-lg h-64 shadow-md">
          <img
            loading="lazy"
            data-src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'%3E%3C/svg%3E"
            alt="Corporate Event"
            class="w-full h-full object-cover transition-transform group-hover:scale-110 duration-500 lazy-image"
          />
          <div class="absolute inset-0 bg-indigo-500 opacity-0 group-hover:opacity-70 transition-opacity duration-300 flex items-center justify-center">
            <div class="text-white text-center p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <div class="text-lg font-bold">Tech Summit</div>
              <div class="text-sm">San Francisco, CA</div>
            </div>
          </div>
        </div>

        <!-- Gallery Item 3 -->
        <div ref="galleryItems" class="relative group overflow-hidden rounded-lg h-64 shadow-md">
          <img
            loading="lazy"
            data-src="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'%3E%3C/svg%3E"
            alt="Birthday Party"
            class="w-full h-full object-cover transition-transform group-hover:scale-110 duration-500 lazy-image"
          />
          <div class="absolute inset-0 bg-indigo-700 opacity-0 group-hover:opacity-70 transition-opacity duration-300 flex items-center justify-center">
            <div class="text-white text-center p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <div class="text-lg font-bold">Birthday Celebration</div>
              <div class="text-sm">Chicago, IL</div>
            </div>
          </div>
        </div>

        <!-- Gallery Item 4 -->
        <div ref="galleryItems" class="relative group overflow-hidden rounded-lg h-64 shadow-md">
          <img
            loading="lazy"
            data-src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'%3E%3C/svg%3E"
            alt="Music Festival"
            class="w-full h-full object-cover transition-transform group-hover:scale-110 duration-500 lazy-image"
          />
          <div class="absolute inset-0 bg-indigo-600 opacity-0 group-hover:opacity-70 transition-opacity duration-300 flex items-center justify-center">
            <div class="text-white text-center p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <div class="text-lg font-bold">Music Festival</div>
              <div class="text-sm">Miami, FL</div>
            </div>
          </div>
        </div>

        <!-- Gallery Item 5 -->
        <div ref="galleryItems" class="relative group overflow-hidden rounded-lg h-64 shadow-md">
          <img
            loading="lazy"
            data-src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'%3E%3C/svg%3E"
            alt="Corporate Meeting"
            class="w-full h-full object-cover transition-transform group-hover:scale-110 duration-500 lazy-image"
          />
          <div class="absolute inset-0 bg-indigo-500 opacity-0 group-hover:opacity-70 transition-opacity duration-300 flex items-center justify-center">
            <div class="text-white text-center p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <div class="text-lg font-bold">Corporate Meeting</div>
              <div class="text-sm">Seattle, WA</div>
            </div>
          </div>
        </div>

        <!-- Gallery Item 6 -->
        <div ref="galleryItems" class="relative group overflow-hidden rounded-lg h-64 shadow-md">
          <img
            loading="lazy"
            data-src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'%3E%3C/svg%3E"
            alt="Charity Gala"
            class="w-full h-full object-cover transition-transform group-hover:scale-110 duration-500 lazy-image"
          />
          <div class="absolute inset-0 bg-indigo-700 opacity-0 group-hover:opacity-70 transition-opacity duration-300 flex items-center justify-center">
            <div class="text-white text-center p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <div class="text-lg font-bold">Charity Gala</div>
              <div class="text-sm">Boston, MA</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const galleryItems = ref([]);

onMounted(() => {
  // Set up intersection observer for lazy loading
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target.querySelector('.lazy-image');
        if (img && img.dataset.src) {
          img.src = img.dataset.src;
          img.classList.add('loaded');
          observer.unobserve(entry.target); // Stop observing once loaded
        }
      }
    });
  }, {
    rootMargin: '50px 0px',
    threshold: 0.1
  });

  // Get all gallery items and observe them
  const items = document.querySelectorAll('[ref="galleryItems"]');
  items.forEach(item => {
    imageObserver.observe(item);
  });
});
</script>

<style scoped>
.container {
  max-width: 1200px;
}

.lazy-image {
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}

.lazy-image.loaded {
  opacity: 1;
}
</style>