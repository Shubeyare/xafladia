import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

// Create the app instance
const app = createApp(App)

// Add router
app.use(router)

// Performance directive to prevent re-renders when values don't change
app.directive('memo', {
  // Only re-render if value changes
  beforeUpdate(el, binding) {
    if (binding.value === binding.oldValue) {
      return false
    }
  }
})

// Mount the app
app.mount('#app')

// Prefetch components after initial load is complete
window.addEventListener('load', () => {
  // Prefetch critical components after initial page load
  setTimeout(() => {
    import('./components/GallerySection.vue')
    import('./components/ContactSection.vue')
  }, 1000)
})
