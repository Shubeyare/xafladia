import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw, RouteLocationNormalized } from 'vue-router'
import { defineAsyncComponent } from 'vue'

// Loading component for async components
const loadingComponent = {
  template: `
    <div class="flex justify-center items-center p-8">
      <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
    </div>
  `
}

// Error component for async components
const errorComponent = {
  template: `
    <div class="text-center p-8 text-red-600">
      <p>Error loading content. Please try again.</p>
    </div>
  `
}

// Use defineAsyncComponent for better loading control
const HomeView = defineAsyncComponent({
  loader: () => import('../views/HomeView.vue'),
  loadingComponent,
  errorComponent,
  delay: 200, // delay in ms before showing loading component
  timeout: 5000 // timeout in ms
})

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    // Prefetch the component when hovering over any link to this route
    meta: {
      prefetch: true
    }
  },
  // Single page layout now - all sections are in HomeView
  // Keeping a wildcard route to redirect to home
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, _from: RouteLocationNormalized, savedPosition) {
    // If the route has a hash (for scrolling to section)
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    }
    return savedPosition || { top: 0, behavior: 'smooth' }
  }
})

// Optional: Prefetch components for routes that have prefetch: true in their meta
router.beforeResolve((to, from, next) => {
  // If the route has prefetch in meta, preload the component
  if (to.matched.some(record => record.meta.prefetch)) {
    // This will trigger the preload of the component
    const component = to.matched.find(record => record.meta.prefetch)?.components?.default
    if (typeof component === 'function') {
      component()
    }
  }
  next()
})

export default router