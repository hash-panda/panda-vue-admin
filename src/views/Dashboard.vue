<template>
  <div class="dashboard">
    <a-layout>
      <a-layout-header>
        <div class="header-content">
          <h1>Dashboard</h1>
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
          <a-row :gutter="[16, 16]">
            <a-col :span="8">
              <a-card>
                <a-statistic title="Total Users" :value="1128" />
              </a-card>
            </a-col>
            <a-col :span="8">
              <a-card>
                <a-statistic title="Active Sessions" :value="93" />
              </a-card>
            </a-col>
            <a-col :span="8">
              <a-card>
                <a-statistic title="Completion Rate" :value="89.3" suffix="%" />
              </a-card>
            </a-col>
          </a-row>
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
  return router.currentRoute.value.name?.toString() || 'Dashboard'
})
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