<template>
  <div class="code-generation">
    <a-form :model="formState" layout="vertical">
      <a-form-item label="Code Type" name="codeType">
        <a-select v-model:value="formState.codeType" placeholder="Select code type">
          <a-select-option value="vue-component">Vue Component</a-select-option>
          <a-select-option value="javascript">JavaScript Function</a-select-option>
          <a-select-option value="typescript">TypeScript Interface</a-select-option>
          <a-select-option value="css">CSS Styles</a-select-option>
          <a-select-option value="api-endpoint">API Endpoint</a-select-option>
        </a-select>
      </a-form-item>
      
      <a-form-item label="Description" name="description">
        <a-textarea
          v-model:value="formState.description"
          :rows="4"
          placeholder="Describe what you want to generate..."
        />
      </a-form-item>
      
      <a-form-item>
        <a-button type="primary" :loading="loading" @click="generateCode">
          Generate Code
        </a-button>
      </a-form-item>
    </a-form>
    
    <div v-if="generatedCode" class="code-result">
      <a-divider>Generated Code</a-divider>
      <a-card>
        <pre><code>{{ generatedCode }}</code></pre>
        <template #extra>
          <a-button type="link" @click="copyCode">
            <CopyOutlined /> Copy
          </a-button>
        </template>
      </a-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { message } from 'ant-design-vue'
import { CopyOutlined } from '@ant-design/icons-vue'
import { codeGenerationService } from '@/services/ai-agent/CodeGenerationService'

const formState = reactive({
  codeType: '',
  description: ''
})

const loading = ref(false)
const generatedCode = ref('')

const generateCode = async () => {
  if (!formState.codeType || !formState.description) {
    message.error('Please fill in all fields')
    return
  }
  
  loading.value = true
  try {
    const result = await codeGenerationService.generateCode({
      type: formState.codeType,
      description: formState.description
    })
    generatedCode.value = result.code
    message.success('Code generated successfully')
  } catch (error) {
    message.error('Failed to generate code')
    console.error('Code generation error:', error)
  } finally {
    loading.value = false
  }
}

const copyCode = () => {
  if (generatedCode.value) {
    navigator.clipboard.writeText(generatedCode.value)
    message.success('Code copied to clipboard')
  }
}
</script>

<style scoped>
.code-result {
  margin-top: 24px;
}

code {
  background: #f5f5f5;
  padding: 16px;
  border-radius: 4px;
  display: block;
  white-space: pre-wrap;
  word-wrap: break-word;
  max-height: 400px;
  overflow-y: auto;
}
</style>