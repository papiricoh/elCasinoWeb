import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BetsView from '../views/BetsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/bets',
      name: 'bets',
      component: BetsView,
    },
    {
      path: '/config',
      name: 'config',
      component: BetsView,
    }
  ],
})

export default router
