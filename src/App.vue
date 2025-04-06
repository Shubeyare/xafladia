<script setup lang="ts">
import Navbar from './components/Navbar.vue'
import HomeView from './views/HomeView.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <Navbar />
    <main class="flex-grow">
      <HomeView />
    </main>

    <footer class="bg-gray-900 text-gray-300">
      <!-- Main Footer -->
      <div class="container mx-auto px-6 py-12">
        <div class="flex flex-col md:flex-row justify-between gap-8">
          <!-- Brand Section -->
          <div class="md:w-1/4">
            <h2 class="text-2xl font-bold text-white mb-4">Xafladia</h2>
            <p class="mb-4">Creating extraordinary events and unforgettable experiences that bring your vision to life.</p>
          </div>

          <!-- Footer Links -->
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <!-- Company Links -->
            <div class="space-y-4">
              <h3 class="text-lg font-semibold text-white">Company</h3>
              <ul class="space-y-2">
                <li><a href="#about" class="hover:text-white transition-colors duration-300">About Us</a></li>
                <li><a href="#" class="hover:text-white transition-colors duration-300">Careers</a></li>
                <li><a href="#" class="hover:text-white transition-colors duration-300">Blog</a></li>
                <li><a href="#" class="hover:text-white transition-colors duration-300">Our Team</a></li>
              </ul>
            </div>

            <!-- Services Links -->
            <div class="space-y-4">
              <h3 class="text-lg font-semibold text-white">Services</h3>
              <ul class="space-y-2">
                <li><a href="#services" class="hover:text-white transition-colors duration-300">Event Planning</a></li>
                <li><a href="#services" class="hover:text-white transition-colors duration-300">Corporate Events</a></li>
                <li><a href="#services" class="hover:text-white transition-colors duration-300">Weddings</a></li>
                <li><a href="#services" class="hover:text-white transition-colors duration-300">Special Occasions</a></li>
                <li><a href="#services" class="hover:text-white transition-colors duration-300">Decoration</a></li>
              </ul>
            </div>

            <!-- Support Links -->
            <div class="space-y-4">
              <h3 class="text-lg font-semibold text-white">Support</h3>
              <ul class="space-y-2">
                <li><a href="#contact" class="hover:text-white transition-colors duration-300">Help Center</a></li>
                <li><a href="#contact" class="hover:text-white transition-colors duration-300">Contact Us</a></li>
                <li><a href="#" class="hover:text-white transition-colors duration-300">FAQs</a></li>
                <li><a href="#" class="hover:text-white transition-colors duration-300">Terms of Service</a></li>
                <li><a href="#" class="hover:text-white transition-colors duration-300">Privacy Policy</a></li>
              </ul>
            </div>
          </div>

          <!-- Social Media -->
          <div class="md:w-1/5 space-y-4">
            <h3 class="text-lg font-semibold text-white">Follow Us</h3>
            <div class="flex space-x-4">
              <a href="#" class="text-gray-400 hover:text-white transition-colors duration-300" aria-label="Instagram">
                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" />
                </svg>
              </a>
              <a href="#" class="text-gray-400 hover:text-white transition-colors duration-300" aria-label="Twitter">
                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" class="text-gray-400 hover:text-white transition-colors duration-300" aria-label="Facebook">
                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" />
                </svg>
              </a>
              <a href="#" class="text-gray-400 hover:text-white transition-colors duration-300" aria-label="LinkedIn">
                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill-rule="evenodd" d="M19.7 3H4.3C3.582 3 3 3.582 3 4.3v15.4c0 .718.582 1.3 1.3 1.3h15.4c.718 0 1.3-.582 1.3-1.3V4.3c0-.718-.582-1.3-1.3-1.3zM8.339 18.338H5.667v-8.59h2.672v8.59zM7.004 8.574a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm11.335 9.764H15.67v-4.177c0-.996-.017-2.278-1.387-2.278-1.389 0-1.601 1.086-1.601 2.206v4.249h-2.667v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.779 3.203 4.092v4.711z" clip-rule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Copyright Bar -->
      <div class="border-t border-gray-800 py-6">
        <div class="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <p class="text-sm text-gray-400">© {{ new Date().getFullYear() }} Xafladia. All rights reserved.</p>
          <div class="mt-4 md:mt-0">
            <a href="#" class="text-sm text-gray-400 hover:text-white transition-colors duration-300 mr-4">Terms</a>
            <a href="#" class="text-sm text-gray-400 hover:text-white transition-colors duration-300">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style>
html {
  scroll-behavior: smooth;
  scroll-padding-top: 70px; /* Add padding for fixed header */
}

.section {
  padding: 5rem 0;
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.section-title {
  font-size: 2.25rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
  position: relative;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -0.75rem;
  left: 50%;
  transform: translateX(-50%);
  width: 5rem;
  height: 0.25rem;
  background-color: var(--color-primary);
  border-radius: 0.25rem;
}

.btn {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  font-weight: 600;
  border-radius: 0.375rem;
  text-align: center;
  transition: all 0.3s ease;
}

.btn-secondary {
  background-color: white;
  color: var(--color-primary);
}

.btn-secondary:hover {
  background-color: #f8f9fa;
}
</style>
