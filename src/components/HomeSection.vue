<template>
  <section id="home" class="min-h-screen flex items-center justify-center relative bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
    <div class="absolute inset-0 overflow-hidden">
      <div class="particles"></div>
    </div>

    <div class="container mx-auto px-6 relative z-10">
      <div class="text-center">
        <h1 class="text-5xl md:text-6xl font-bold mb-6 animate-on-scroll opacity-0">
          Creating Extraordinary <span class="text-yellow-300">Events</span>
        </h1>
        <p class="text-xl md:text-2xl mb-10 max-w-3xl mx-auto animate-on-scroll opacity-0">
          We bring your vision to life with attention to detail, creativity, and flawless execution
        </p>
        <div class="flex flex-col sm:flex-row justify-center gap-4 animate-on-scroll opacity-0">
          <a href="#contact" class="bg-white text-indigo-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition duration-300 will-change-transform">
            Get in Touch
          </a>
          <a href="#services" class="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:bg-opacity-10 transition duration-300 will-change-transform">
            Our Services
          </a>
        </div>
      </div>
    </div>

    <!-- Preload critical components that will be visible soon -->
    <Suspense v-if="shouldPrefetch">
      <template #default>
        <div class="hidden">
          <component :is="ServicesPreload"></component>
        </div>
      </template>
      <template #fallback></template>
    </Suspense>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, defineAsyncComponent, nextTick } from 'vue';

const shouldPrefetch = ref(false);

// Preload components that will be visible soon after scrolling
const ServicesPreload = defineAsyncComponent(() => import('./ServicesSection.vue'));

onMounted(() => {
  // Use requestIdleCallback or setTimeout to delay prefetching until after initial render
  if ('requestIdleCallback' in window) {
    (window as any).requestIdleCallback(() => {
      nextTick(() => {
        shouldPrefetch.value = true;
      });
    });
  } else {
    setTimeout(() => {
      nextTick(() => {
        shouldPrefetch.value = true;
      });
    }, 2000);
  }
});
</script>

<style scoped>
/* Optimize particles animation with hardware acceleration hints */
.particles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  will-change: transform;
  backface-visibility: hidden;
  transform: translateZ(0);
}

.particles:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E") repeat;
  animation: particleAnimation 20s linear infinite;
  transform: translateZ(0);
}

@keyframes particleAnimation {
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(50px, 50px, 0);
  }
}
</style>