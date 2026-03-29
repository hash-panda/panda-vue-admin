<template>
  <div class="ai-agent">
    <a-layout>
      <a-layout-header>
        <div class="header-content">
          <h1>AI Agent</h1>
          <a-menu mode="horizontal" :selectedKeys="[currentRoute]">
            <a-menu-item key="Home">
              <router-link to="/">Home</router-link>
            </a-menu-item>
            <a-menu-item key="Dashboard">
              <router-link to="/dashboard">Dashboard</router-link>
            </a-menu-item>
            <a-menu-item key="AIAgent">
              <router-link to="/ai-agent">AI Agent</router-link>
            </a-menu-item>
          </a-menu>
        </div>
      </a-layout-header>
      
      <a-layout-content>
        <div class="content">
          <a-row :gutter="[16, 16]">
            <a-col :span="6">
              <a-card title="AI Agent Tools">
                <a-menu mode="vertical" :selectedKeys="[selectedTool]" @click="handleMenuClick">
                  <a-menu-item key="code-generation">
                    <CodeOutlined />
                    Code Generation
                  </a-menu-item>
                  <a-menu-item key="page-builder">
                    <LayoutOutlined />
                    Page Builder
                  </a-menu-item>
                  <a-menu-item key="smart-prompts">
                    <BulbOutlined />
                    Smart Prompts
                  </a-menu-item>
                  <a-menu-item key="data-analysis">
                    <LineChartOutlined />
                    Data Analysis
                  </a-menu-item>
                </a-menu>
              </a-card>
            </a-col>
            
            <a-col :span="18">
              <a-card>
                <CodeGeneration v-if="selectedTool === 'code-generation'" />
                <PageBuilder v-if="selectedTool === 'page-builder'" />
                <SmartPrompts v-if="selectedTool === 'smart-prompts'" />
                <DataAnalysis v-if="selectedTool === 'data-analysis'" />
              </a-card>
            </a-col>
          </a-row>
        </div>
      </a-layout-content>
    </a-layout>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { CodeOutlined, LayoutOutlined, BulbOutlined, LineChartOutlined } from '@ant-design/icons-vue'
import CodeGeneration from '@/components/ai-agent/CodeGeneration.vue'
import PageBuilder from '@/components/ai-agent/PageBuilder.vue'
import SmartPrompts from '@/components/ai-agent/SmartPrompts.vue'
import DataAnalysis from '@/components/ai-agent/DataAnalysis.vue'

const selectedTool = ref('code-generation')
const currentRoute = ref('AIAgent')

const handleMenuClick = ({ key }: { key: string }) => {
  selectedTool.value = key
}
</script>

<style scoped>
.ai-agent {
  min-height: 100vh;
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
}

.header-content h1 {
  margin: 0;
  color: white;
}

.content {
  padding: 24px;
  background: #f0f2f5;
  min-height: calc(100vh - 64px);
}
</style>ard title="AI Agent Tools">
                <a-menu mode="vertical" @click="handleMenuClick">
                  <a-menu-item key="code-generation">
                    <CodeOutlined />
                    Code Generation
                  </a-menu-item>
                  <a-menu-item key="page-builder">
                    <LayoutOutlined />
                    Page Builder
                  </a-menu-item>
                  <a-menu-item key="smart-prompts">
                    <BulbOutlined />
                    Smart Prompts
                  </a-menu-item>
                  <a-menu-item key="data-analysis">
                    <BarChartOutlined />
                    Data Analysis
                  </a-menu-item>
                </a-menu>
              </a-card>
            </a-col>
            
            <a-col :span="18">
              <a-card :title="currentToolTitle">
                <div class="tool-content">
                  <div v-if="currentTool === 'code-generation'">
                    <CodeGeneration />
                  </div>
                  <div v-else-if="currentTool === 'page-builder'">
                    <PageBuilder />
                  </div>
                  <div v-else-if="currentTool === 'smart-prompts'">
                    <SmartPrompts />
                  </div>
                  <div v-else-if="currentTool === 'data-analysis'">
                    <DataAnalysis />
                  </div>
                  <div v-else>
                    <a-empty description="Select a tool to get started" />
                  </div>
                </div>
              </a-card>
            </a-col>
          </a-row>
        </div>
      </a-layout-content>
    </a-layout>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import {
  CodeOutlined,
  LayoutOutlined,
  BulbOutlined,
  BarChartOutlined
} from '@ant-design/icons-vue'

import CodeGeneration from '@/components/ai-agent/CodeGeneration.vue'
import PageBuilder from '@/components/ai-agent/PageBuilder.vue'
import SmartPrompts from '@/components/ai-agent/SmartPrompts.vue'
import DataAnalysis from '@/components/ai-agent/DataAnalysis.vue'

const router = useRouter()
const currentTool = ref('code-generation')

const currentRoute = computed(() => {
  return router.currentRoute.value.name?.toString() || 'AIAgent'
})

const currentToolTitle = computed(() => {
  const titles: Record<string, string> = {
    'code-generation': 'Code Generation',
    'page-builder': 'Page Builder',
    'smart-prompts': 'Smart Prompts',
    'data-analysis': 'Data Analysis'
  }
  return titles[currentTool.value] || 'AI Agent Tool'
})

const handleMenuClick = ({ key }: { key: string }) => {
  currentTool.value = key
}
</script>

<style scoped>
.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
}

.header-content h1 {
  margin: 0;
  color: white;
}

.content {
  padding: 24px;
  min-height: calc(100vh - 64px);
}

.tool-content {
  min-height: 400px;
}
</style>