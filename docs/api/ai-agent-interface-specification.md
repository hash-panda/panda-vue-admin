# AI Agent Interface Specification

This document defines the comprehensive API specification for AI Agent functionality within Panda Vue Admin.

## Overview
The AI Agent interface provides a standardized way to interact with various AI providers and models. This specification ensures consistency across different implementations while maintaining flexibility for provider-specific features.

### Key Features
- **Multi-provider support**: OpenAI, Anthropic, local models, and custom providers
- **TypeScript safety**: Full TypeScript support with type definitions
- **Event-driven architecture**: Real-time status updates and progress tracking
- **Configurable authentication**: Flexible authentication mechanisms
- **Comprehensive error handling**: Detailed error reporting and recovery

## Core Interfaces

### AgentConfig Interface

```typescript
interface AgentConfig {
  id: string;
  name: string;
  type: 'chat' | 'code' | 'analysis' | 'automation' | 'custom';
  provider: 'openai' | 'anthropic' | 'local' | 'custom';
  model: string;
  capabilities: string[];
  maxTokens?: number;
  temperature?: number;
  timeout?: number;
  retries?: number;
  baseUrl?: string;
  headers?: Record<string, string>;
  metadata?: Record<string, any>;
}
```

### AgentRequest Interface

```typescript
interface AgentRequest {
  id: string;
  agentId: string;
  prompt: string;
  context?: string;
  parameters?: Record<string, any>;
  options?: AgentRequestOptions;
  metadata?: Record<string, any>;
}
```

### AgentResponse Interface

```typescript
interface AgentResponse {
  id: string;
  requestId: string;
  agentId: string;
  status: 'pending' | 'processing' | 'completed' | 'failed' | 'cancelled';
  result?: any;
  error?: AgentError;
  metadata?: Record<string, any>;
  createdAt: number;
  completedAt?: number;
  duration?: number;
}
```

## API Endpoints

### POST /api/agents
Create a new agent configuration.

**Request:**
```json
{
  "id": "string",
  "name": "string", 
  "type": "chat|code|analysis|automation|custom",
  "provider": "openai|anthropic|local|custom",
  "model": "string",
  "capabilities": []
}
```

### GET /api/agents
List all agent configurations.

### GET /api/agents/{id}
Get agent configuration by ID.

### PUT /api/agents/{id}
Update agent configuration.

### DELETE /api/agents/{id}
Delete agent configuration.

## Request Handling

### POST /api/agents/{id}/request
Send a request to an agent.

**Request:**
```json
{
  "prompt": "string",
  "context": "string",
  "parameters": {},
  "options": {
    "stream": false,
    "temperature": 0.7,
    "maxTokens": 1000,
    "topP": 1.0,
    "topK": 50,
    "presencePenalty": 0,
    "frequencyPenalty": 0,
    "stopSequences": [],
    "timeout": 30000
  }
}
```

### GET /api/requests/{id}
Get request status and result.

## Response Formats

### Success Response
```json
{
  "id": "string",
  "status": "pending|processing|completed|failed",
  "result": {},
  "metadata": {}
}
```

### Error Response
```json
{
  "error": {
    "code": "VALIDATION_ERROR|AUTHENTICATION_ERROR|PROVIDER_ERROR|TIMEOUT_ERROR|RATE_LIMIT_ERROR|INTERNAL_ERROR",
    "message": "string",
    "details": {
      "field": "string",
      "reason": "string",
      "suggestion": "string"
    }
  }
}
```

## Events

### WebSocket Connection

Connect to WebSocket endpoint for real-time updates:
```
ws://localhost:3000/ws/agents
```

### Agent Events
- `agent:created` - New agent created
- `agent:updated` - Agent configuration updated
- `agent:deleted` - Agent removed

### Request Events  
- `request:created` - New request initiated
- `request:processing` - Request being processed
- `request:progress` - Progress update
- `request:completed` - Request completed successfully
- `request:failed` - Request failed
- `request:cancelled` - Request cancelled

### Event Format
```json
{
  "type": "request:progress",
  "timestamp": "2024-01-01T00:00:00Z",
  "data": {
    "requestId": "req_123",
    "progress": 0.5,
    "message": "Processing..."
  }
}
```

## Authentication

All API requests require authentication via Authorization header:
```
Authorization: Bearer {token}
```

## Examples

### Creating an Agent

```bash
curl -X POST http://localhost:3000/api/agents \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer your-token" \
  -d '{
    "id": "gpt-4-chat",
    "name": "GPT-4 Chat Assistant",
    "type": "chat",
    "provider": "openai",
    "model": "gpt-4",
    "capabilities": ["text-generation", "conversation"],
    "maxTokens": 4000,
    "temperature": 0.7
  }'
```

### Sending a Request

```bash
curl -X POST http://localhost:3000/api/agents/gpt-4-chat/request \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer your-token" \
  -d '{
    "prompt": "Explain quantum computing in simple terms",
    "options": {
      "temperature": 0.5,
      "maxTokens": 500
    }
  }'
```

### Streaming Response

```javascript
const response = await fetch('/api/agents/gpt-4-chat/request', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer your-token'
  },
  body: JSON.stringify({
    prompt: 'Write a poem about AI',
    options: {
      stream: true
    }
  })
});

const reader = response.body.getReader();
const decoder = new TextDecoder();

while (true) {
  const { done, value } = await reader.read();
  if (done) break;
  
  const chunk = decoder.decode(value);
  console.log(chunk);
}
```

## Error Codes

### 4xx Client Errors
- `400 Bad Request` - Invalid request data
- `401 Unauthorized` - Missing or invalid authentication
- `403 Forbidden` - Insufficient permissions
- `404 Not Found` - Resource not found
- `409 Conflict` - Resource already exists
- `422 Validation Error` - Request data failed validation

### 5xx Server Errors
- `500 Internal Server Error` - Server error
- `502 Bad Gateway` - Provider service unavailable
- `503 Service Unavailable` - Rate limited or overloaded
- `504 Gateway Timeout` - Provider request timeout