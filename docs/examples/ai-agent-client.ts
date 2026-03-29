// AI Agent Client Implementation Example
import {
  ChatCompletionRequest,
  ChatCompletionResponse,
  ToolExecutionRequest,
  ToolExecutionResponse,
  WebSocketMessage,
  AgentConfig
} from '../api/types/ai-agent';

class AIAgentClient {
  private baseUrl: string;
  private apiKey: string;
  private ws: WebSocket | null = null;

  constructor(baseUrl: string, apiKey: string) {
    this.baseUrl = baseUrl;
    this.apiKey = apiKey;
  }

  async chatCompletion(request: ChatCompletionRequest): Promise<ChatCompletionResponse> {
    const response = await fetch(`${this.baseUrl}/api/v1/chat/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.apiKey}`
      },
      body: JSON.stringify(request)
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  }

  async executeTool(request: ToolExecutionRequest): Promise<ToolExecutionResponse> {
    const response = await fetch(`${this.baseUrl}/api/v1/tools/execute`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.apiKey}`
      },
      body: JSON.stringify(request)
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  }

  async getTools(): Promise<any[]> {
    const response = await fetch(`${this.baseUrl}/api/v1/tools`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${this.apiKey}`
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.tools;
  }

  connectWebSocket(): Promise<void> {
    return new Promise((resolve, reject) => {
      const wsUrl = `${this.baseUrl.replace('http', 'ws')}/ws/agent`;
      this.ws = new WebSocket(wsUrl);

      this.ws.onopen = () => {
        console.log('WebSocket connected');
        this.ws?.send(JSON.stringify({
          type: 'auth',
          token: this.apiKey
        }));
        resolve();
      };

      this.ws.onerror = (error) => {
        console.error('WebSocket error:', error);
        reject(error);
      };

      this.ws.onmessage = (event) => {
        const message: WebSocketMessage = JSON.parse(event.data);
        this.handleWebSocketMessage(message);
      };
    });
  }

  private handleWebSocketMessage(message: WebSocketMessage): void {
    console.log('Received message:', message);
    // Handle different message types
    switch (message.type) {
      case 'message':
        // Handle chat message
        break;
      case 'tool_call':
        // Handle tool execution
        break;
      case 'status':
        // Handle status updates
        break;
    }
  }

  sendMessage(message: string): void {
    if (this.ws && this.ws.readyState === WebSocket.OPEN) {
      this.ws.send(JSON.stringify({
        type: 'message',
        content: message
      }));
    } else {
      throw new Error('WebSocket is not connected');
    }
  }

  disconnect(): void {
    if (this.ws) {
      this.ws.close();
      this.ws = null;
    }
  }
}

// Usage Example
async function exampleUsage() {
  const client = new AIAgentClient('http://localhost:3000', 'your-api-key');

  try {
    // Chat completion
    const chatResponse = await client.chatCompletion({
      messages: [
        { role: 'system', content: 'You are a helpful assistant.' },
        { role: 'user', content: 'Hello, how are you?' }
      ]
    });
    console.log('Chat response:', chatResponse);

    // Get available tools
    const tools = await client.getTools();
    console.log('Available tools:', tools);

    // Execute a tool
    const toolResponse = await client.executeTool({
      tool_name: 'calculator',
      parameters: { expression: '2 + 2' }
    });
    console.log('Tool response:', toolResponse);

    // WebSocket connection
    await client.connectWebSocket();
    client.sendMessage('Hello via WebSocket!');

  } catch (error) {
    console.error('Error:', error);
  } finally {
    client.disconnect();
  }
}

export default AIAgentClient;
export { exampleUsage };