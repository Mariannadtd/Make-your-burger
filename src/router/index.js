import { createRouter, createWebHistory } from 'vue-router'
import TheHomePage from '../views/TheHomePage.vue'
import TheOrder from '../views/TheOrder.vue'
import ThePrivicyPolicy from '../views/ThePrivicyPolicy.vue'
import TheTermsAndConditions from '../views/TheTermsAndConditions.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: TheHomePage
    },
    {
      path: '/order',
      name: 'order',
      component: TheOrder
    },
    ,
    {
      path: '/privicy',
      name: 'privicy',
      component: ThePrivicyPolicy
    },
    ,
    {
      path: '/terms',
      name: 'terms',
      component: TheTermsAndConditions
    }
  ]
})

export default router
