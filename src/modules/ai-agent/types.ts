export interface AIAgentMessage {
  id: string
  content: string
  type: 'instruction' | 'response' | 'error'
  timestamp: Date
}

export interface ParsedInstruction {
  intent: string
  parameters: Record<string, any>
  componentType?: string
  style?: Record<string, any>
}

export interface GeneratedComponent {
  code: string
  preview: string
  dependencies?: string[]
}

export interface AIAgentConfig {
  endpoint?: string
  timeout?: number
  maxRetries?: number
  debug?: boolean
}