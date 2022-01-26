import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Send Page',
    component: () => import('../components/SendPage.vue')
  },
  {
    path: '/all-claims',
    name: 'All Claims',
    component: () => import('../components/AllClaims.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
