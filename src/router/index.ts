import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/ai-agent',
    name: 'AI Agent',
    component: () => import('../views/AIAgentView.vue')
  },
  {
    path: '/components',
    name: 'Components',
    component: () => import('../views/ComponentsView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router