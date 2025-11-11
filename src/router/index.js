import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

// Optional: keep AboutView lazy-loaded as before
const AboutView = () => import('../views/AboutView.vue')
import TestingView from '../views/TestingView.vue'
import TestIdView from '../views/TestIdView.vue'

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
      name: 'test-id',
      component: TestIdView,
      props: true, 
    },
  ],
})

export default router
