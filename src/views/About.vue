<template>
  <div class="about">
    <a-card title="About Panda Vue Admin" :bordered="false">
      <a-typography>
        <a-typography-paragraph>
          Panda Vue Admin is a modern, feature-rich admin dashboard framework designed to accelerate the development of admin interfaces.
        </a-typography-paragraph>
        
        <a-typography-title :level="4">Features</a-typography-title>
        <a-list size="small" :data-source="features">
          <template #renderItem="{ item }">
            <a-list-item>
              <a-tag color="blue">{{ item.icon }}</a-tag>
              {{ item.text }}
            </a-list-item>
          </template>
        </a-list>
        
        <a-typography-title :level="4" style="margin-top: 24px">Technology Stack</a-typography-title>
        <a-row :gutter="[8, 8]">
          <a-col :span="8" v-for="tech in techStack" :key="tech">
            <a-tag>{{ tech }}</a-tag>
          </a-col>
        </a-row>
      </a-typography>
    </a-card>
  </div>
</template>

<script setup lang="ts">
const features = [
  { icon: '🎨', text: 'Modern UI with Ant Design Vue' },
  { icon: '🔧', text: 'Vue 3 + TypeScript' },
  { icon: '📱', text: 'Responsive Design' },
  { icon: '🎯', text: 'Comprehensive Documentation' },
  { icon: '🔐', text: 'Authentication Ready' },
  { icon: '📊', text: 'Data Management' }
]

const techStack = [
  'Vue 3',
  'TypeScript',
  'Ant Design Vue',
  'Vite',
  'Pinia',
  'Vue Router',
  'Axios',
  'Day.js'
]
</script>

<style scoped>
.about {
  padding: 24px;
  max-width: 800px;
  margin: 0 auto;
}
</style>