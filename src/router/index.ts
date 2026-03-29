import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Dashboard',
    component: () => import('@/views/Dashboard.vue')
  },
  {
    path: '/examples',
    name: 'Examples',
    component: () => import('@/views/Examples.vue')
  },
  {
    path: '/examples/simple',
    name: 'SimpleExample',
    component: () => import('@/views/examples/SimpleExample.vue')
  },
  {
    path: '/examples/medium',
    name: 'MediumExample',
    component: () => import('@/views/examples/MediumExample.vue')
  },
  {
    path: '/examples/complex',
    name: 'ComplexExample',
    component: () => import('@/views/examples/ComplexExample.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router