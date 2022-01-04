import { createRouter, createWebHistory } from 'vue-router'
import Connect from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Connect',
    component: Connect
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../views/Dashboard.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
