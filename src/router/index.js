import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes.js'

export const router = createRouter({
  history: createWebHistory(),
  routes: routes,

  scrollBehavior() {
    return { top: 0, behavior: 'smooth' }
  }
})
