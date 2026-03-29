/**
 * Basic AI Agent Usage Examples
 * 
 * Simple examples demonstrating how to use the AI Agent types
 */

import type {
  AgentConfiguration,
  AgentSession,
  AgentMessage,
  CreateAgentRequest,
  CreateSessionRequest,
  SendMessageRequest
} from '../types';

// Example: Create an agent configuration
const createExampleAgent = (): CreateAgentRequest => ({
  name: 'GPT-4 Assistant',
  provider: 'openai',
  model: 'gpt-4',
  apiKey: 'your-api-key',
  maxTokens: 2048,
  temperature: 0.7,
  systemPrompt: 'You are a helpful assistant.',
  tools: [
    {
      name: 'web_search',
      description: 'Search the web for information',
      parameters: {
        query: { type: 'string', description: 'The search query' }
      },
      required: ['query']
    }
  ]
});

// Example: Create a session
const createExampleSession = (agentId: string): CreateSessionRequest => ({
  agentId,
  systemPrompt: 'You are a helpful assistant specialized in technical documentation.',
  metadata: {
    user: 'john.doe',
    project: 'panda-vue-admin'
  }
});

// Example: Send a message
const sendExampleMessage = (sessionId: string): SendMessageRequest => ({
  sessionId,
  content: 'How do I implement the AI Agent interface?',
  stream: true
});

// Example: Parse agent response
interface AgentResponse {
  success: boolean;
  data?: {
    sessionId: string;
    messageId: string;
    content: string;
    timestamp: string;
  };
  error?: {
    code: string;
    message: string;
    details?: Record<string, any>;
  };
}

const handleAgentResponse = (response: AgentResponse) => {
  if (response.success && response.data) {
    console.log('Response received:', response.data.content);
  } else if (response.error) {
    console.error('Error:', response.error.message);
  }
};

// Export examples
export {
  createExampleAgent,
  createExampleSession,
  sendExampleMessage,
  handleAgentResponse
};