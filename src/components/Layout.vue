<template>
  <a-layout class="layout">
    <a-layout-sider v-model:collapsed="collapsed" collapsible>
      <div class="logo">
        <h3 v-if="!collapsed">Panda Admin</h3>
        <h3 v-else>PA</h3>
      </div>
      <a-menu
        v-model:selectedKeys="selectedKeys"
        v-model:openKeys="openKeys"
        theme="dark"
        mode="inline"
      >
        <a-menu-item key="home">
          <router-link to="/">
            <home-outlined />
            <span>Home</span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="dashboard">
          <router-link to="/dashboard">
            <dashboard-outlined />
            <span>Dashboard</span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="about">
          <router-link to="/about">
            <info-circle-outlined />
            <span>About</span>
          </router-link>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    
    <a-layout>
      <a-layout-header class="header">
        <div class="header-content">
          <menu-unfold-outlined
            v-if="collapsed"
            class="trigger"
            @click="() => (collapsed = !collapsed)"
          />
          <menu-fold-outlined
            v-else
            class="trigger"
            @click="() => (collapsed = !collapsed)"
          />
          <div class="header-right">
            <a-space>
              <a-button type="link" shape="circle">
                <bell-outlined />
              </a-button>
              <a-button type="link" shape="circle">
                <setting-outlined />
              </a-button>
              <a-avatar>U</a-avatar>
            </a-space>
          </div>
        </div>
      </a-layout-header>
      
      <a-layout-content class="content">
        <slot />
      </a-layout-content>
      
      <a-layout-footer class="footer">
        <div class="footer-content">
          Panda Vue Admin ©{{ new Date().getFullYear() }} Created with ❤️
        </div>
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {
  HomeOutlined,
  DashboardOutlined,
  InfoCircleOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  BellOutlined,
  SettingOutlined
} from '@ant-design/icons-vue'

const collapsed = ref(false)
const selectedKeys = ref<string[]>(['home'])
const openKeys = ref<string[]>([])
</script>

<style scoped>
.layout {
  min-height: 100vh;
}

.logo {
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.1);
  color: white;
}

.logo h3 {
  margin: 0;
  color: white;
  font-weight: 600;
}

.header {
  background: #fff;
  padding: 0;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  height: 100%;
}

.trigger {
  font-size: 18px;
  cursor: pointer;
  transition: color 0.3s;
}

.trigger:hover {
  color: #1890ff;
}

.header-right {
  display: flex;
  align-items: center;
}

.content {
  margin: 24px 16px;
  padding: 24px;
  background: #fff;
  min-height: 280px;
  border-radius: 8px;
}

.footer {
  text-align: center;
  background: #fff;
  padding: 16px;
}

.footer-content {
  color: rgba(0, 0, 0, 0.45);
}
</style>