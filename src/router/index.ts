import { createRouter, createWebHistory } from 'vue-router'
import TheHome from '../views/TheHome.vue'

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'TheHome',
      component: TheHome
    },
    {
      path: '/active',
      name: 'TheActive',
      component: () => import('../views/TheActive.vue')
    },
    {
      path: '/filters',
      name: 'TheFilters',
      component: () => import('../views/TheFilters.vue')
    },
    {
      path: '/history',
      name: 'TheHistory',
      component: () => import('../views/TheHistory.vue')
    }
  ]
})
