<template>
  <div class="about">
    <h1>关于 Panda Vue Admin</h1>
    <a-card title="项目说明" style="margin-top: 20px">
      <p>Panda Vue Admin 是一个基于 Vue 3 + TypeScript + Vite 的现代化后台管理系统框架。</p>
      
      <a-divider />
      
      <a-row :gutter="16">
        <a-col :span="8">
          <a-card title="开发工具" size="small">
            <p>Vite - 快速的构建工具</p>
            <p>TypeScript - 类型安全</p>
            <p>Vue 3 - 渐进式框架</p>
          </a-card>
        </a-col>
        <a-col :span="8">
          <a-card title="UI 框架" size="small">
            <p>Ant Design Vue</p>
            <p>企业级设计语言</p>
            <p>丰富的组件库</p>
          </a-card>
        </a-col>
        <a-col :span="8">
          <a-card title="状态管理" size="small">
            <p>Pinia</p>
            <p>现代状态管理库</p>
            <p>TypeScript 支持</p>
          </a-card>
        </a-col>
      </a-row>
    </a-card>
  </div>
</template>

<script setup lang="ts">
// About page logic can be added here
</script>

<style scoped>
.about {
  padding: 20px;
}

h1 {
  color: #1890ff;
  text-align: center;
  margin-bottom: 30px;
}
</style>