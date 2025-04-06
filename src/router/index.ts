import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw, RouteLocationNormalized } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
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

export default router