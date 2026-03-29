<template>
  <div class="smart-prompts">
    <a-form :model="promptForm" layout="vertical">
      <a-form-item label="Context" name="context">
        <a-textarea
          v-model:value="promptForm.context"
          :rows="3"
          placeholder="Describe the context or situation..."
        />
      </a-form-item>
      
      <a-form-item label="Goal" name="goal">
        <a-input v-model:value="promptForm.goal" placeholder="What do you want to achieve?" />
      </a-form-item>
      
      <a-form-item>
        <a-button type="primary" @click="generatePrompts">
          Generate Smart Prompts
        </a-button>
      </a-form-item>
    </a-form>
    
    <div v-if="prompts.length > 0" class="prompts-list">
      <a-divider>Generated Prompts</a-divider>
      <a-list
        item-layout="horizontal"
        :data-source="prompts"
      >
        <template #renderItem="{ item }">
          <a-list-item>
            <a-list-item-meta>
              <template #title>
                {{ item.title }}
              </template>
              <template #description>
                {{ item.description }}
              </template>
            </a-list-item-meta>
            <template #extra>
              <a-button type="link" @click="usePrompt(item)">
                Use
              </a-button>
            </template>
          </a-list-item>
        </template>
      </a-list>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { message } from 'ant-design-vue'
import { smartPromptsService } from '@/services/ai-agent/SmartPromptsService'

const promptForm = reactive({
  context: '',
  goal: ''
})

const prompts = ref<any[]>([])

const generatePrompts = async () => {
  if (!promptForm.context || !promptForm.goal) {
    message.error('Please fill in all fields')
    return
  }
  
  try {
    const result = await smartPromptsService.generatePrompts({
      context: promptForm.context,
      goal: promptForm.goal
    })
    prompts.value = result.prompts
    message.success('Prompts generated successfully')
  } catch (error) {
    message.error('Failed to generate prompts')
    console.error('Prompt generation error:', error)
  }
}

const usePrompt = (prompt: any) => {
  // Implementation for using the selected prompt
  message.info(`Using prompt: ${prompt.title}`)
}
</script>

<style scoped>
.prompts-list {
  margin-top: 24px;
}
</style>