<template>
  <div class="home">
    <a-row :gutter="16">
      <a-col :span="24">
        <a-card>
          <h1>欢迎使用 Panda Vue Admin</h1>
          <p>这是一个集成了 AI Agent 功能的现代化管理后台系统。</p>
          <a-space>
            <a-button type="primary" @click="$router.push('/ai-agent')">
              开始使用 AI Agent
            </a-button>
            <a-button @click="$router.push('/components')">
              查看组件库
            </a-button>
          </a-space>
        </a-card>
      </a-col>
    </a-row>
    
    <a-row :gutter="16" style="margin-top: 16px;">
      <a-col :span="8">
        <a-card title="AI Agent 功能">
          <p>• 智能指令解析</p>
          <p>• 自动代码生成</p>
          <p>• UI 组件渲染</p>
          <p>• 实时通信模块</p>
        </a-card>
      </a-col>
      <a-col :span="8">
        <a-card title="技术栈">
          <p>• Vue 3 + TypeScript</p>
          <p>• Ant Design Vue</p>
          <p>• Pinia 状态管理</p>
          <p>• Vue Router</p>
        </a-card>
      </a-col>
      <a-col :span="8">
        <a-card title="快速开始">
          <p>1. 进入 AI Agent 页面</p>
          <p>2. 输入自然语言指令</p>
          <p>3. 生成对应代码/组件</p>
          <p>4. 一键应用到项目</p>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.home {
  max-width: 1200px;
  margin: 0 auto;
}
</style>