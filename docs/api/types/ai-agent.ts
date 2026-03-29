// AI Agent Interface TypeScript Type Definitions

export interface ChatMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

export interface ChatCompletionRequest {
  messages: ChatMessage[];
  tools?: string[];
  temperature?: number;
  max_tokens?: number;
  stream?: boolean;
}

export interface ChatCompletionResponse {
  id: string;
  message: ChatMessage;
  usage: TokenUsage;
  created: number;
}

export interface TokenUsage {
  prompt_tokens: number;
  completion_tokens: number;
  total_tokens: number;
}

export interface Tool {
  name: string;
  description: string;
  parameters: ToolParameterSchema;
}

export interface ToolParameterSchema {
  type: 'object';
  properties: Record<string, ToolProperty>;
  required?: string[];
}

export interface ToolProperty {
  type: string;
  description?: string;
  enum?: any[];
  default?: any;
}

export interface ToolExecutionRequest {
  tool_name: string;
  parameters: Record<string, any>;
}

export interface ToolExecutionResponse {
  result: any;
  success: boolean;
  error?: string;
}

export interface ToolListResponse {
  tools: Tool[];
}

export interface WebSocketMessage {
  type: 'message' | 'tool_call' | 'status';
  data: any;
  timestamp: string;
}

export interface ErrorResponse {
  error: {
    code: string;
    message: string;
    details?: Record<string, any>;
  };
  timestamp: string;
}

export interface AgentStatus {
  status: 'ready' | 'processing' | 'error' | 'offline';
  current_task?: string;
  uptime: number;
  performance: {
    requests_per_second: number;
    average_response_time: number;
  };
}

// Authentication types
export interface JWTPayload {
  sub: string;
  username: string;
  role: string;
  permissions: string[];
  iat: number;
  exp: number;
}

// Event types
export interface AgentEvent {
  type: 'chat' | 'tool_execution' | 'error' | 'status_change';
  payload: any;
  timestamp: string;
  user_id?: string;
  session_id?: string;
}

// Configuration types
export interface AgentConfig {
  model: {
    name: string;
    max_tokens: number;
    temperature: number;
  };
  tools: {
    enabled: string[];
    custom_configs?: Record<string, any>;
  };
  rate_limits: {
    requests_per_minute: number;
    requests_per_hour: number;
    websocket_connections: number;
  };
  security: {
    require_authentication: boolean;
    allowed_origins: string[];
    enable_csrf_protection: boolean;
  };
}