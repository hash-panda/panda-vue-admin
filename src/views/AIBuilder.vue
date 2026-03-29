<template>
  <div>
    <h1>AI Page Builder</h1>
    <a-row :gutter="16">
      <a-col :span="8">
        <a-card title="AI Assistant">
          <a-form :model="promptForm" layout="vertical">
            <a-form-item label="Describe your page">
              <a-textarea
                v-model:value="promptForm.description"
                :rows="4"
                placeholder="Describe what kind of page you want to build..."
              />
            </a-form-item>
            <a-form-item label="Page Type">
              <a-select v-model:value="promptForm.pageType" placeholder="Select page type">
                <a-select-option value="dashboard">Dashboard</a-select-option>
                <a-select-option value="form">Form</a-select-option>
                <a-select-option value="table">Table</a-select-option>
                <a-select-option value="custom">Custom</a-select-option>
              </a-select>
            </a-form-item>
            <a-form-item>
              <a-button type="primary" :loading="isGenerating" @click="generatePage">
                Generate Page
              </a-button>
            </a-form-item>
          </a-form>
        </a-card>
      </a-col>
      <a-col :span="16">
        <a-card title="Page Preview">
          <div v-if="!generatedPage" class="empty-preview">
            <a-empty description="Generate a page to see preview" />
          </div>
          <div v-else class="preview-content">
            <component :is="generatedPage.component" v-bind="generatedPage.props" />
          </div>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { generatePageFromPrompt } from '../services/aiBuilder'

interface PromptForm {
  description: string
  pageType: string
}

interface GeneratedPage {
  component: any
  props: any
  template: string
}

const promptForm = reactive<PromptForm>({
  description: '',
  pageType: ''
})

const isGenerating = ref(false)
const generatedPage = ref<GeneratedPage | null>(null)

const generatePage = async () => {
  if (!promptForm.description || !promptForm.pageType) {
    alert('Please fill in all fields')
    return
  }

  isGenerating.value = true
  try {
    // Simulate AI generation - in real implementation this would call an AI service
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    const page = await generatePageFromPrompt(promptForm)
    generatedPage.value = page
  } catch (error) {
    console.error('Error generating page:', error)
    alert('Failed to generate page')
  } finally {
    isGenerating.value = false
  }
}