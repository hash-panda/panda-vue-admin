<template>
  <div class="home">
    <a-card title="Welcome to Panda Vue Admin" :bordered="false">
      <a-space direction="vertical" size="large" style="width: 100%">
        <p>
          This is the home page of Panda Vue Admin, a comprehensive admin dashboard solution
          built with Vue 3, TypeScript, and Ant Design Vue.
        </p>
        <a-button type="primary" @click="goToDashboard">
          Go to Dashboard
        </a-button>
      </a-space>
    </a-card>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const goToDashboard = () => {
  router.push({ name: 'Dashboard' })
}
</script>

<style scoped>
.home {
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
}
</style>