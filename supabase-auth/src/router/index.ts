import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

// @ts-ignore
import Auth from '../views/Auth.vue'
import Profile from '../views/profile.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/auth',
      name: 'auth',
      component: Auth
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    }
  ]
})

export default router
