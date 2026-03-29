/**
 * AI Agent Interface Specification Type Definitions
 * 
 * This file contains TypeScript type definitions for the AI Agent interface specification
 * as documented in docs/api/ai-agent-interface-specification.md
 */

// Base Types
export type AgentId = string;
export type SessionId = string;
export type MessageId = string;
export type Provider = 'openai' | 'anthropic' | 'local' | 'custom';
export type Model = string;

// Agent Status
export type AgentStatus = 'idle' | 'thinking' | 'responding' | 'error' | 'stopped';

// Message Role
export type MessageRole = 'system' | 'user' | 'assistant' | 'tool';

// Event Types
export type AgentEventType = 
  | 'session_created'
  | 'session_updated'
  | 'message_sent'
  | 'message_received'
  | 'thinking_start'
  | 'thinking_end'
  | 'stream_start'
  | 'stream_chunk'
  | 'stream_end'
  | 'error'
  | 'agent_status_changed';

// Error Types
export interface AgentError {
  code: string;
  message: string;
  details?: Record<string, any>;
  timestamp?: string;
}

// Agent Configuration
export interface AgentConfiguration {
  id: AgentId;
  name: string;
  provider: Provider;
  model: Model;
  apiKey?: string;
  baseUrl?: string;
  maxTokens?: number;
  temperature?: number;
  topP?: number;
  systemPrompt?: string;
  tools?: ToolConfiguration[];
  createdAt: string;
  updatedAt: string;
}

// Tool Configuration
export interface ToolConfiguration {
  name: string;
  description: string;
  parameters: Record<string, any>;
  required: string[];
}

// Message Interface
export interface AgentMessage {
  id: MessageId;
  role: MessageRole;
  content: string;
  timestamp: string;
  metadata?: Record<string, any>;
}

// Session Interface
export interface AgentSession {
  id: SessionId;
  agentId: AgentId;
  status: AgentStatus;
  messages: AgentMessage[];
  metadata?: Record<string, any>;
  createdAt: string;
  updatedAt: string;
}

// Create Agent Request
export interface CreateAgentRequest {
  name: string;
  provider: Provider;
  model: Model;
  apiKey?: string;
  baseUrl?: string;
  maxTokens?: number;
  temperature?: number;
  topP?: number;
  systemPrompt?: string;
  tools?: ToolConfiguration[];
}

// Update Agent Request
export interface UpdateAgentRequest {
  name?: string;
  model?: Model;
  apiKey?: string;
  baseUrl?: string;
  maxTokens?: number;
  temperature?: number;
  topP?: number;
  systemPrompt?: string;
  tools?: ToolConfiguration[];
}

// Create Session Request
export interface CreateSessionRequest {
  agentId: AgentId;
  systemPrompt?: string;
  metadata?: Record<string, any>;
}

// Send Message Request
export interface SendMessageRequest {
  sessionId: SessionId;
  content: string;
  stream?: boolean;
  tools?: string[];
}

// Event Payloads
export interface AgentEventPayload {
  sessionId: SessionId;
  agentId: AgentId;
  timestamp: string;
  data: any;
}

// Specific Event Types
export interface MessageEventPayload extends AgentEventPayload {
  messageId: MessageId;
  role: MessageRole;
  content: string;
}

export interface StreamChunkEventPayload extends AgentEventPayload {
  chunk: string;
  isFinal?: boolean;
}

export interface ErrorEventPayload extends AgentEventPayload {
  error: AgentError;
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: AgentError;
  timestamp: string;
}

export interface AgentListResponse {
  agents: AgentConfiguration[];
  total: number;
  page: number;
  limit: number;
}

export interface SessionListResponse {
  sessions: AgentSession[];
  total: number;
  page: number;
  limit: number;
}

// WebSocket Message Types
export interface WebSocketMessage {
  type: AgentEventType;
  payload: AgentEventPayload;
  id: string;
}

// Authentication Types
export interface AuthConfig {
  type: 'bearer' | 'api-key' | 'oauth';
  token: string;
  expiresAt?: string;
}

export interface ProviderAuth {
  provider: Provider;
  config: AuthConfig;
}

// Utility Types
export type AgentEventPayloadMap = {
  session_created: AgentEventPayload;
  session_updated: AgentEventPayload;
  message_sent: MessageEventPayload;
  message_received: MessageEventPayload;
  thinking_start: AgentEventPayload;
  thinking_end: AgentEventPayload;
  stream_start: AgentEventPayload;
  stream_chunk: StreamChunkEventPayload;
  stream_end: AgentEventPayload;
  error: ErrorEventPayload;
  agent_status_changed: AgentEventPayload;
};

export type AgentEvent<T extends AgentEventType> = {
  type: T;
  payload: AgentEventPayloadMap[T];
  timestamp: string;
};