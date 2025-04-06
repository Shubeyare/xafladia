<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

const isOpen = ref(false)
const isScrolled = ref(false)
const navMenuRef = ref<HTMLElement | null>(null)
const navButtonRef = ref<HTMLElement | null>(null)
const activeSection = ref('home')

const toggleMenu = () => {
  isOpen.value = !isOpen.value
  if (isOpen.value) {
    document.body.classList.add('overflow-hidden')
  } else {
    document.body.classList.remove('overflow-hidden')
  }
}

const closeMenu = () => {
  isOpen.value = false
  document.body.classList.remove('overflow-hidden')
}

const checkScroll = () => {
  isScrolled.value = window.scrollY > 20

  // Check which section is currently visible
  const sections = document.querySelectorAll('section[id]')
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top
    const sectionHeight = section.clientHeight
    const sectionId = section.getAttribute('id') || ''

    if (sectionTop < window.innerHeight / 2 && sectionTop + sectionHeight > window.innerHeight / 2) {
      activeSection.value = sectionId
    }
  })
}

const scrollToSection = (sectionId: string) => {
  const section = document.getElementById(sectionId)
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' })
    closeMenu()
  }
}

onMounted(() => {
  window.addEventListener('scroll', checkScroll)
  checkScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll)
})

const navLinks = [
  { name: 'Home', id: 'home' },
  { name: 'Events', id: 'events' },
  { name: 'Services', id: 'services' },
  { name: 'About', id: 'about' },
  { name: 'Gallery', id: 'gallery' },
  { name: 'Contact', id: 'contact' }
]
</script>

<template>
  <header :class="[
    'fixed top-0 left-0 w-full z-50 transition-all duration-300',
    isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
  ]">
    <div class="container mx-auto px-6 flex justify-between items-center">
      <!-- Logo -->
      <a href="#home" class="flex items-center" @click.prevent="scrollToSection('home')">
        <span class="text-2xl font-display font-bold text-indigo-600">Xafladia</span>
      </a>

      <!-- Desktop Navigation -->
      <nav class="hidden md:flex space-x-8">
        <a
          v-for="link in navLinks"
          :key="link.name"
          :href="'#' + link.id"
          @click.prevent="scrollToSection(link.id)"
          class="text-gray-800 hover:text-indigo-600 font-medium transition-colors"
          :class="{ 'text-indigo-600': activeSection === link.id }"
        >
          {{ link.name }}
        </a>
      </nav>

      <!-- Mobile Menu Button -->
      <button
        ref="navButtonRef"
        class="md:hidden p-2 rounded-md text-gray-800 focus:outline-none"
        @click="toggleMenu"
        aria-label="Toggle menu"
      >
        <Bars3Icon v-if="!isOpen" class="h-6 w-6" />
        <XMarkIcon v-else class="h-6 w-6" />
      </button>
    </div>

    <!-- Mobile Navigation Overlay -->
    <div
      class="md:hidden fixed inset-0 bg-black transition-opacity duration-300 ease-in-out"
      :class="isOpen ? 'opacity-30 pointer-events-auto' : 'opacity-0 pointer-events-none'"
      @click="closeMenu"
      aria-hidden="true"
    ></div>

    <!-- Mobile Menu Drawer -->
    <div
      ref="navMenuRef"
      class="md:hidden fixed inset-y-0 right-0 z-50 w-4/5 max-w-sm bg-white shadow-lg transform transition-transform duration-300 ease-out"
      :class="isOpen ? 'translate-x-0' : 'translate-x-full'"
    >
      <!-- Close button -->
      <button
        class="absolute top-4 right-4 p-2 rounded-full bg-gray-100 text-gray-800 hover:bg-gray-200 transition-colors"
        @click="closeMenu"
        aria-label="Close menu"
      >
        <XMarkIcon class="h-6 w-6" />
      </button>

      <nav class="pt-20 px-6 flex flex-col space-y-4 py-8">
        <a
          v-for="link in navLinks"
          :key="link.name"
          :href="'#' + link.id"
          @click.prevent="scrollToSection(link.id)"
          class="text-xl font-medium py-2 border-b border-gray-100"
          :class="{ 'text-indigo-600': activeSection === link.id }"
        >
          {{ link.name }}
        </a>
      </nav>
    </div>
  </header>
  <!-- Spacer for fixed header -->
  <div class="h-16 md:h-20"></div>
</template>

<style scoped>
.container {
  max-width: 1200px;
}
</style>