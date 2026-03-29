<template>
  <div class="home">
    <h1>欢迎使用 Panda Vue Admin</h1>
    <a-card title="项目信息" style="margin-top: 20px">
      <p><strong>技术栈：</strong></p>
      <ul>
        <li>Vue 3</li>
        <li>TypeScript</li>
        <li>Vite</li>
        <li>Ant Design Vue</li>
        <li>Vue Router</li>
        <li>Pinia</li>
      </ul>
      
      <a-divider />
      
      <p><strong>开发环境：</strong></p>
      <a-button type="primary" @click="showMessage">
        测试按钮
      </a-button>
    </a-card>
  </div>
</template>

<script setup lang="ts">
import { message } from 'ant-design-vue'

const showMessage = () => {
  message.success('Hello from Panda Vue Admin!')
}
</script>

<style scoped>
.home {
  padding: 20px;
}

h1 {
  color: #1890ff;
  text-align: center;
  margin-bottom: 30px;
}

ul {
  padding-left: 20px;
}

li {
  margin: 8px 0;
}
</style>