<script setup lang="ts">
import { onMounted } from 'vue'

import HomeSection from '../components/HomeSection.vue'
import EventsSection from '../components/EventsSection.vue'
import ServicesSection from '../components/ServicesSection.vue'
import AboutSection from '../components/AboutSection.vue'
import GallerySection from '../components/GallerySection.vue'
import ContactSection from '../components/ContactSection.vue'

// Set up intersection observer for animations
onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show')
        }
      })
    },
    { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
  )

  document.querySelectorAll('.animate-on-scroll').forEach((el) => {
    observer.observe(el)
  })
})
</script>

<template>
  <div>
    <TestComponent />
    <HomeSection />
    <EventsSection />
    <ServicesSection />
    <AboutSection />
    <GallerySection />
    <ContactSection />
  </div>
</template>

<style scoped>
.animate-on-scroll {
  transition: transform 1s, opacity 1s;
  transform: translateY(50px);
}

.animate-on-scroll.show {
  opacity: 1 !important;
  transform: translateY(0);
}
</style>