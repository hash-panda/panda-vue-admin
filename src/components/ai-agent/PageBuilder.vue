<template>
  <div class="page-builder">
    <a-row :gutter="[16, 16]">
      <a-col :span="8">
        <a-card title="Page Structure">
          <a-form :model="pageForm" layout="vertical">
            <a-form-item label="Page Name" name="pageName">
              <a-input v-model:value="pageForm.pageName" placeholder="Enter page name" />
            </a-form-item>
            
            <a-form-item label="Layout Type" name="layoutType">
              <a-select v-model:value="pageForm.layoutType" placeholder="Select layout">
                <a-select-option value="default">Default Layout</a-select-option>
                <a-select-option value="sidebar">Sidebar Layout</a-select-option>
                <a-select-option value="tabs">Tabs Layout</a-select-option>
                <a-select-option value="grid">Grid Layout</a-select-option>
              </a-select>
            </a-form-item>
            
            <a-form-item>
              <a-button type="primary" @click="buildPage">Build Page</a-button>
            </a-form-item>
          </a-form>
        </a-card>
      </a-col>
      
      <a-col :span="16">
        <a-card title="Page Preview">
          <div v-if="pagePreview" class="preview">
            <component :is="pagePreview" />
          </div>
          <a-empty v-else description="Build a page to see preview" />
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { message } from 'ant-design-vue'
import { pageBuilderService } from '@/services/ai-agent/PageBuilderService'

const pageForm = reactive({
  pageName: '',
  layoutType: 'default'
})

const pagePreview = ref<any>(null)

const buildPage = async () => {
  if (!pageForm.pageName) {
    message.error('Please enter a page name')
    return
  }
  
  try {
    const result = await pageBuilderService.buildPage({
      name: pageForm.pageName,
      layout: pageForm.layoutType
    })
    pagePreview.value = result.component
    message.success('Page built successfully')
  } catch (error) {
    message.error('Failed to build page')
    console.error('Page building error:', error)
  }
}
</script>

<style scoped>
.preview {
  min-height: 300px;
  border: 1px dashed #d9d9d9;
  padding: 16px;
  border-radius: 4px;
}
</style>