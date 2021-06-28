import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  { path: '/:pathMatch(.*)*', redirect: { name: '404' } },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/404.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login.vue')
  },
  {
    path: '/',
    name: 'index',
    component: () => import('@/views/index.vue')
  },
  {
    path: '/demo1',
    name: 'demo1',
    component: () => import('@/views/modules/base/components/demo1.vue')
  },
  {
    path: '/demo2',
    name: 'demo2',
    component: () => import('@/views/modules/base/components/demo2.vue')
  },
  {
    path: '/demo3',
    name: 'demo3',
    component: () => import('@/views/modules/base/components/demo3.vue')
  },
  {
    path: '/demo4',
    name: 'demo4',
    component: () => import('@/views/modules/base/components/demo4/index.vue')
  },
  {
    path: '/demo5',
    name: 'demo5',
    component: () => import('@/views/modules/base/components/demo5.vue')
  },
  {
    path: '/demo6',
    name: 'demo6',
    component: () => import('@/views/modules/base/components/demo6.vue')
  },
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
