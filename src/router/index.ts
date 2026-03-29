import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Dashboard',
    component: () => import('../views/Dashboard.vue')
  },
  {
    path: '/ai-builder',
    name: 'AI Builder',
    component: () => import('../views/AIBuilder.vue')
  },
  {
    path: '/ai-assistant',
    name: 'AI Assistant',
    component: () => import('../views/AIAssistant.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router