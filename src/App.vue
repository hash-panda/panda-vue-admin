<template>
  <div class="app-container">
    <a-layout>
      <a-layout-header class="header">
        <div class="logo">Panda Vue Admin</div>
        <a-menu
          v-model:selectedKeys="selectedKeys"
          theme="dark"
          mode="horizontal"
          :style="{ lineHeight: '64px' }"
          @click="({ key }) => handleMenuClick(key as string)"
        >
          <a-menu-item key="1">首页</a-menu-item>
          <a-menu-item key="2">AI Agent</a-menu-item>
          <a-menu-item key="3">组件库</a-menu-item>
        </a-menu>
      </a-layout-header>
      <a-layout-content class="content">
        <router-view />
      </a-layout-content>
      <a-layout-footer class="footer">
        Panda Vue Admin ©{{ new Date().getFullYear() }} Created by hash-panda
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const selectedKeys = ref<string[]>(['1'])

// 路由映射
const routeMap: Record<string, string> = {
  '1': '/',
  '2': '/ai-agent',
  '3': '/components'
}

// 监听菜单点击事件
const handleMenuClick = (key: string) => {
  const path = routeMap[key]
  if (path) {
    router.push(path)
  }
}

// 监听路由变化，更新菜单选中状态
router.beforeEach((to) => {
  const currentPath = to.path
  const matchingKey = Object.entries(routeMap).find(([, path]) => path === currentPath)?.[0]
  if (matchingKey) {
    selectedKeys.value = [matchingKey]
  }
})
</script>

<style scoped>
.app-container {
  min-height: 100vh;
}

.header {
  display: flex;
  align-items: center;
  padding: 0 24px;
}

.logo {
  color: white;
  font-size: 18px;
  font-weight: bold;
  margin-right: 24px;
}

.content {
  padding: 24px;
  min-height: calc(100vh - 64px - 70px);
  background: #f0f2f5;
}

.footer {
  text-align: center;
  background: #f0f2f5;
  padding: 24px;
}
</style>