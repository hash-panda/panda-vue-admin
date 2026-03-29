<template>
  <a-layout>
    <a-layout-sider width="200" style="background: #fff">
      <a-menu
        mode="inline"
        :default-selected-keys="['1']"
        :default-open-keys="['sub1']"
        style="height: 100%"
      >
        <a-menu-item key="1">
          <router-link to="/">Dashboard</router-link>
        </a-menu-item>
        <a-sub-menu key="sub1">
          <template #title>
            <span>Examples</span>
          </template>
          <a-menu-item key="2">
            <router-link to="/examples">All Examples</router-link>
          </a-menu-item>
          <a-menu-item key="3">
            <router-link to="/examples/simple">Simple Example</router-link>
          </a-menu-item>
          <a-menu-item key="4">
            <router-link to="/examples/medium">Medium Example</router-link>
          </a-menu-item>
          <a-menu-item key="5">
            <router-link to="/examples/complex">Complex Example</router-link>
          </a-menu-item>
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>
    <a-layout style="padding: 0 24px 24px">
      <a-layout-content :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }">
        <router-view>
          <template #default>
            <div>
              <h1>Welcome to Panda Vue Admin</h1>
              <p>This is the main dashboard of the AI Agent-driven Vue.js admin template.</p>
              
              <a-row :gutter="[16, 16]">
                <a-col :span="12">
                  <a-card>
                    <template #title>Getting Started</template>
                    <p>Explore the example pages developed using AI Agent:</p>
                    <ul>
                      <li><strong>Simple Example:</strong> Basic counter with history tracking</li>
                      <li><strong>Medium Example:</strong> User management with CRUD operations</li>
                      <li><strong>Complex Example:</strong> Dashboard with charts, forms, and statistics</li>
                    </ul>
                    <a-button type="primary" @click="$router.push('/examples')">View Examples</a-button>
                  </a-card>
                </a-col>
                
                <a-col :span="12">
                  <a-card>
                    <template #title>Project Info</template>
                    <p><strong>Framework:</strong> Vue 3 + TypeScript</p>
                    <p><strong>UI Library:</strong> Ant Design Vue</p>
                    <p><strong>Build Tool:</strong> Vite</p>
                    <p><strong>Status:</strong> Agent-driven development</p>
                    <p>This project demonstrates AI Agent-driven development process for creating a Vue.js admin dashboard.</p>
                  </a-card>
                </a-col>
              </a-row>
            </div>
          </template>
        </router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script setup lang="ts">
</script>

<style scoped>
</style>