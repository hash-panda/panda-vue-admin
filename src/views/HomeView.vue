<template>
  <div class="home-container">
    <a-card title="Welcome to Panda Vue Admin" class="welcome-card">
      <a-alert
        message="Project Setup Complete"
        description="Your Vue 3 + Vite + TypeScript + Ant Design Vue project is ready!"
        type="success"
        show-icon
      />
      
      <a-divider />
      
      <a-space direction="vertical" size="large" style="width: 100%;">
        <a-typography-title :level="4">Project Information</a-typography-title>
        
        <a-list :data-source="projectInfo" bordered>
          <template #renderItem="{ item }">
            <a-list-item>
              <a-list-item-meta>
                <template #title>
                  <a-tag :color="item.color">{{ item.title }}</a-tag>
                </template>
                <template #description>
                  {{ item.description }}
                </template>
              </a-list-item-meta>
            </a-list-item>
          </template>
        </a-list>
        
        <a-button type="primary" @click="showMessage">
          Test Ant Design Vue
        </a-button>
      </a-space>
    </a-card>
  </div>
</template>

<script setup lang="ts">
import { message } from 'ant-design-vue'

const projectInfo = [
  {
    title: 'Vue 3',
    description: 'Progressive JavaScript framework',
    color: 'green'
  },
  {
    title: 'Vite',
    description: 'Next generation frontend tooling',
    color: 'cyan'
  },
  {
    title: 'TypeScript',
    description: 'JavaScript with syntax for types',
    color: 'blue'
  },
  {
    title: 'Ant Design Vue',
    description: 'Enterprise-class UI design language',
    color: 'red'
  }
]

const showMessage = () => {
  message.success('Ant Design Vue is working perfectly!')
}
</script>

<style scoped>
.home-container {
  padding: 24px;
  background-color: #f0f2f5;
  min-height: 100vh;
}

.welcome-card {
  max-width: 800px;
  margin: 0 auto;
}
</style>