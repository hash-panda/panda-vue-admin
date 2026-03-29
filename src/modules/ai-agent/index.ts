import { CommunicationModule } from './communication'
import { InstructionParser } from './instruction-parser'
import { CodeGenerator } from './code-generator'
import { UIRenderer } from './ui-renderer'
import type { AIAgentConfig, AIAgentMessage, GeneratedComponent } from './types'

export class AIAgent {
  private communication: CommunicationModule
  private parser: InstructionParser
  private generator: CodeGenerator
  private renderer: UIRenderer

  constructor(config: AIAgentConfig = {}) {
    this.communication = new CommunicationModule(config)
    this.parser = new InstructionParser()
    this.generator = new CodeGenerator()
    this.renderer = new UIRenderer()
  }

  async initialize(): Promise<void> {
    await this.communication.connect()
  }

  async processInstruction(instruction: string): Promise<{
    message: AIAgentMessage
    generatedComponent: GeneratedComponent
    componentInstance?: any
  }> {
    // 验证指令
    if (!this.parser.validateInstruction(instruction)) {
      throw new Error('无效的指令')
    }

    // 发送指令到通信模块
    const message = await this.communication.sendMessage(instruction)

    // 解析指令
    const parsedInstruction = this.parser.parse(instruction)

    // 生成代码
    const generatedComponent = this.generator.generateComponent(parsedInstruction)

    // 渲染组件
    const componentInstance = await this.renderer.renderComponent(generatedComponent)

    return {
      message,
      generatedComponent,
      componentInstance
    }
  }

  async generateCodeOnly(instruction: string): Promise<GeneratedComponent> {
    const parsedInstruction = this.parser.parse(instruction)
    return this.generator.generateComponent(parsedInstruction)
  }

  getMessageHistory(): AIAgentMessage[] {
    return this.communication.getMessageHistory()
  }

  async cleanup(): Promise<void> {
    await this.communication.disconnect()
    this.renderer.clearCache()
  }
}