<template>
  <div class="about-container">
    <a-card title="About Panda Vue Admin">
      <a-space direction="vertical" size="middle" style="width: 100%;">
        <a-descriptions title="Project Details" bordered>
          <a-descriptions-item label="Name">Panda Vue Admin</a-descriptions-item>
          <a-descriptions-item label="Version">0.0.1</a-descriptions-item>
          <a-descriptions-item label="Framework">Vue 3</a-descriptions-item>
          <a-descriptions-item label="Build Tool">Vite</a-descriptions-item>
          <a-descriptions-item label="Language">TypeScript</a-descriptions-item>
          <a-descriptions-item label="UI Library">Ant Design Vue</a-descriptions-item>
        </a-descriptions>
        
        <a-alert
          message="Development Environment"
          description="Your development environment has been successfully configured!"
          type="info"
          show-icon
        />
      </a-space>
    </a-card>
  </div>
</template>

<script setup lang="ts">
// Component logic
</script>

<style scoped>
.about-container {
  padding: 24px;
  background-color: #f0f2f5;
  min-height: 100vh;
}
</style>