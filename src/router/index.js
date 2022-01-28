import {createRouter, createWebHistory} from 'vue-router'
import store from '@/store'

const routes = [
  {
    path: '/',
    name: 'Send Page',
    component: () => import('../views/SendPage.vue')
  },
  {
    path: '/all-claims',
    name: 'All Claims',
    component: () => import('../views/AllClaimsPage.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  mode: history,
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if (!store.state.isLogin && to.path === '/all-claims') {
    next('/')
  } else {
    next()
  }
})

export default router
