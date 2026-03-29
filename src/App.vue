<template>
  <a-config-provider>
    <div id="app">
      <a-layout style="min-height: 100vh">
        <a-layout-header class="header">
          <div class="logo" />
          <a-menu
            v-model:selectedKeys="selectedKeys"
            theme="dark"
            mode="horizontal"
            :style="{ lineHeight: '64px' }"
          >
            <a-menu-item key="1">Dashboard</a-menu-item>
            <a-menu-item key="2">AI Builder</a-menu-item>
            <a-menu-item key="3">Components</a-menu-item>
          </a-menu>
        </a-layout-header>
        <a-layout>
          <a-layout-sider width="200" style="background: #fff">
            <a-menu
              v-model:selectedKeys="selectedKeys2"
              v-model:openKeys="openKeys"
              mode="inline"
              :style="{ height: '100%', borderRight: 0 }"
            >
              <a-menu-item key="1">
                <span>Page Builder</span>
              </a-menu-item>
              <a-menu-item key="2">
                <span>AI Assistant</span>
              </a-menu-item>
            </a-menu>
          </a-layout-sider>
          <a-layout style="padding: 0 24px 24px">
            <a-breadcrumb style="margin: 16px 0">
              <a-breadcrumb-item>Home</a-breadcrumb-item>
              <a-breadcrumb-item>AI Builder</a-breadcrumb-item>
              <a-breadcrumb-item>Page Generator</a-breadcrumb-item>
            </a-breadcrumb>
            <a-layout-content
              :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }"
            >
              <router-view />
            </a-layout-content>
          </a-layout>
        </a-layout>
      </a-layout>
    </div>
  </a-config-provider>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const selectedKeys = ref<string[]>(['2'])
const selectedKeys2 = ref<string[]>(['1'])
const openKeys = ref<string[]>(['sub1'])
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.logo {
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  background: rgba(255, 255, 255, 0.3);
}

.header {
  display: flex;
  align-items: center;
}

.ant-layout-header {
  padding: 0;
}
</style>