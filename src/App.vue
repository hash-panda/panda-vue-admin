<template>
  <div id="app">
    <a-layout style="min-height: 100vh">
      <a-layout-header>
        <div class="logo">Panda Vue Admin</div>
        <a-menu
          v-model:selectedKeys="selectedKeys"
          theme="dark"
          mode="horizontal"
          :style="{ lineHeight: '64px' }"
        >
          <a-menu-item key="1">
            <router-link to="/">首页</router-link>
          </a-menu-item>
          <a-menu-item key="2">
            <router-link to="/about">关于</router-link>
          </a-menu-item>
        </a-menu>
      </a-layout-header>
      <a-layout-content style="padding: 0 50px">
        <div :style="{ background: '#fff', padding: '24px', minHeight: '280px' }">
          <router-view />
        </div>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        Panda Vue Admin ©2024 Created with Vue 3 + TypeScript + Vite
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const selectedKeys = ref<string[]>(['1'])
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.logo {
  float: left;
  width: 200px;
  height: 31px;
  margin: 16px 24px 16px 0;
  color: white;
  font-size: 18px;
  font-weight: bold;
}

.ant-layout-header {
  padding: 0 50px;
}
</style>