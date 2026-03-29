<template>
  <div class="home">
    <a-layout>
      <a-layout-header>
        <div class="header-content">
          <h1>Panda Vue Admin</h1>
          <a-menu mode="horizontal" :selectedKeys="[currentRoute]">
            <a-menu-item key="Home">
              <router-link to="/">Home</router-link>
            </a-menu-item>
            <a-menu-item key="Dashboard">
              <router-link to="/dashboard">Dashboard</router-link>
            </a-menu-item>
            <a-menu-item key="AIAgent">
              <router-link to="/ai-agent">AI Agent</router-link>
            </a-menu-item>
          </a-menu>
        </div>
      </a-layout-header>
      
      <a-layout-content>
        <div class="content">
          <a-card>
            <h2>Welcome to Panda Vue Admin</h2>
            <p>This is a modern admin dashboard with AI Agent capabilities.</p>
            <a-button type="primary" @click="goToAgent">
              Try AI Agent
            </a-button>
          </a-card>
        </div>
      </a-layout-content>
    </a-layout>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const currentRoute = computed(() => {
  return router.currentRoute.value.name?.toString() || 'Home'
})

const goToAgent = () => {
  router.push('/ai-agent')
}
</script>

<style scoped>
.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
}

.header-content h1 {
  margin: 0;
  color: white;
}

.content {
  padding: 24px;
  min-height: calc(100vh - 64px);
}
</style>