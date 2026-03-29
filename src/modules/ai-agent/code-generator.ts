import type { ParsedInstruction, GeneratedComponent } from './types'

export class CodeGenerator {
  generateComponent(parsedInstruction: ParsedInstruction): GeneratedComponent {
    const { componentType, parameters, style } = parsedInstruction
    
    switch (componentType) {
      case 'form':
        return this.generateForm(parameters, style)
      case 'table':
        return this.generateTable(parameters, style)
      case 'button':
        return this.generateButton(parameters, style)
      default:
        return this.generateDiv(parameters, style)
    }
  }

  private generateForm(parameters: Record<string, any>, style: Record<string, any>): GeneratedComponent {
    const fields = parameters.fields || ['用户名', '密码']
    const code = `
<template>
  <a-form layout="vertical">
    ${fields.map((field: string) => `
    <a-form-item label="${field}">
      <a-input placeholder="请输入${field}" />
    </a-form-item>`).join('')}
    
    <a-form-item>
      <a-button type="primary">提交</a-button>
    </a-form-item>
  </a-form>
</template>

<script setup lang="ts">
const onSubmit = () => {
  console.log('表单提交')
}
</script>`

    return {
      code: code.trim(),
      preview: '表单组件预览',
      dependencies: ['ant-design-vue']
    }
  }

  private generateTable(parameters: Record<string, any>, style: Record<string, any>): GeneratedComponent {
    const code = `
<template>
  <a-table :columns="columns" :data-source="data" />
</template>

<script setup lang="ts">
const columns = [
  { title: '姓名', dataIndex: 'name', key: 'name' },
  { title: '年龄', dataIndex: 'age', key: 'age' },
  { title: '地址', dataIndex: 'address', key: 'address' }
]

const data = [
  { key: '1', name: '张三', age: 32, address: '北京市' },
  { key: '2', name: '李四', age: 28, address: '上海市' }
]
</script>`

    return {
      code: code.trim(),
      preview: '表格组件预览',
      dependencies: ['ant-design-vue']
    }
  }

  private generateButton(parameters: Record<string, any>, style: Record<string, any>): GeneratedComponent {
    const buttonType = style.type || 'primary'
    const code = `
<template>
  <a-button type="${buttonType}" @click="handleClick">
    点击按钮
  </a-button>
</template>

<script setup lang="ts">
const handleClick = () => {
  console.log('按钮被点击')
}
</script>`

    return {
      code: code.trim(),
      preview: '按钮组件预览',
      dependencies: ['ant-design-vue']
    }
  }

  private generateDiv(parameters: Record<string, any>, style: Record<string, any>): GeneratedComponent {
    const code = `
<template>
  <div class="generated-div">
    <h3>生成的组件</h3>
    <p>基于指令生成的简单组件</p>
  </div>
</template>

<style scoped>
.generated-div {
  padding: 16px;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
}
</style>`

    return {
      code: code.trim(),
      preview: '基础组件预览',
      dependencies: []
    }
  }
}