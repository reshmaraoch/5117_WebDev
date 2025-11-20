import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

// Optional: keep AboutView lazy-loaded as before
const AboutView = () => import('../views/AboutView.vue')
import TestingView from '../views/TestingView.vue'
import TestIdView from '../views/TestIdView.vue'
import LoginView from '@/views/LoginView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/testing',
      name: 'testing',
      component: TestingView,
    },
    {
      path: '/test/:id',
      name: 'test_w_id',
      component: TestIdView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView
    }
  ],
})

export default router
