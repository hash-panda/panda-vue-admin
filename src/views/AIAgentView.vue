<template>
  <div class="ai-agent">
    <a-card>
      <h1>AI Agent 智能助手</h1>
      <p>输入自然语言指令，AI 将为您生成对应的前端代码或 UI 组件</p>
    </a-card>

    <a-row :gutter="16" style="margin-top: 16px;">
      <a-col :span="12">
        <a-card title="指令输入">
          <a-textarea
            v-model:value="instruction"
            placeholder="请输入您的指令，例如：'创建一个用户登录表单，包含用户名和密码字段'"
            :rows="4"
          />
          <a-space style="margin-top: 16px;">
            <a-button type="primary" :loading="isProcessing" @click="processInstruction">
              执行指令
            </a-button>
            <a-button @click="clearInstruction">清空</a-button>
          </a-space>
        </a-card>
      </a-col>
      
      <a-col :span="12">
        <a-card title="生成结果">
          <a-textarea
            v-model:value="generatedCode"
            :rows="12"
            placeholder="生成的代码将在这里显示"
            readonly
          />
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { AIAgent } from '../modules/ai-agent'
import { message } from 'ant-design-vue'

const instruction = ref('')
const generatedCode = ref('')
const isProcessing = ref(false)
const aiAgent = ref<AIAgent | null>(null)

onMounted(async () => {
  try {
    aiAgent.value = new AIAgent({ debug: true })
    await aiAgent.value.initialize()
    console.log('AI Agent 初始化成功')
  } catch (error) {
    console.error('AI Agent 初始化失败:', error)
    message.error('AI Agent 初始化失败')
  }
})

onBeforeUnmount(async () => {
  if (aiAgent.value) {
    await aiAgent.value.cleanup()
  }
})

const processInstruction = async () => {
  if (!instruction.value.trim()) {
    message.warning('请输入指令')
    return
  }

  if (!aiAgent.value) {
    message.error('AI Agent 未初始化')
    return
  }

  isProcessing.value = true
  try {
    const result = await aiAgent.value.processInstruction(instruction.value)
    generatedCode.value = result.generatedComponent.code
    
    console.log('AI Agent 处理结果:', result)
    message.success('指令处理成功')
  } catch (error) {
    console.error('处理指令时出错:', error)
    message.error('处理指令失败')
  } finally {
    isProcessing.value = false
  }
}

const clearInstruction = () => {
  instruction.value = ''
  generatedCode.value = ''
}
</script>

<style scoped>
.ai-agent {
  max-width: 1400px;
  margin: 0 auto;
}
</style>