import type { ParsedInstruction } from './types'

export class InstructionParser {
  private intentKeywords = {
    create: ['创建', '生成', '建立', '制作'],
    form: ['表单', '表格', '输入', '填写'],
    button: ['按钮', '点击', '提交'],
    table: ['表格', '列表', '数据表'],
    card: ['卡片', '面板'],
    modal: ['弹窗', '模态框', '对话框']
  }

  parse(instruction: string): ParsedInstruction {
    const normalizedText = instruction.toLowerCase()
    
    // 解析意图
    const intent = this.detectIntent(normalizedText)
    
    // 解析参数
    const parameters = this.extractParameters(normalizedText)
    
    // 解析组件类型
    const componentType = this.detectComponentType(normalizedText)
    
    // 解析样式参数
    const style = this.extractStyleParameters(normalizedText)

    return {
      intent,
      parameters,
      componentType,
      style
    }
  }

  private detectIntent(text: string): string {
    for (const [intent, keywords] of Object.entries(this.intentKeywords)) {
      if (keywords.some(keyword => text.includes(keyword))) {
        return intent
      }
    }
    return 'create' // 默认意图
  }

  private extractParameters(text: string): Record<string, any> {
    const parameters: Record<string, any> = {}
    
    // 提取字段名称
    const fieldMatches = text.match(/(用户名|密码|邮箱|手机|姓名|年龄|地址)/g)
    if (fieldMatches) {
      parameters.fields = fieldMatches
    }
    
    // 提取数量相关
    const numberMatches = text.match(/\d+/g)
    if (numberMatches) {
      parameters.count = parseInt(numberMatches[0])
    }
    
    // 提取颜色
    const colorMatches = text.match(/(红色|蓝色|绿色|黄色|黑色|白色)/)
    if (colorMatches) {
      parameters.color = colorMatches[0]
    }
    
    return parameters
  }

  private detectComponentType(text: string): string {
    if (text.includes('表单')) return 'form'
    if (text.includes('表格')) return 'table'
    if (text.includes('按钮')) return 'button'
    if (text.includes('卡片')) return 'card'
    if (text.includes('弹窗')) return 'modal'
    return 'div'
  }

  private extractStyleParameters(text: string): Record<string, any> {
    const style: Record<string, any> = {}
    
    if (text.includes('大') || text.includes('large')) {
      style.size = 'large'
    } else if (text.includes('小') || text.includes('small')) {
      style.size = 'small'
    }
    
    if (text.includes('主要') || text.includes('primary')) {
      style.type = 'primary'
    } else if (text.includes('危险') || text.includes('danger')) {
      style.type = 'danger'
    }
    
    return style
  }

  validateInstruction(instruction: string): boolean {
    return instruction.trim().length > 0
  }
}