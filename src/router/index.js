import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/HomeView.vue'
import NotFound from '@/views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },

  {
    path: '/:pathMatch(.*)*',
    name: 'about',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router

