/**
 * WebSocket Event Handling Examples
 * 
 * Examples demonstrating how to handle AI Agent WebSocket events
 */

import type {
  AgentEventType,
  AgentEvent,
  MessageEventPayload,
  StreamChunkEventPayload,
  ErrorEventPayload
} from '../types';

// Event handler registry
type EventHandler<T extends AgentEventType> = (event: AgentEvent<T>) => void;

class AIAgentWebSocketClient {
  private ws: WebSocket | null = null;
  private eventHandlers: Map<AgentEventType, EventHandler<AgentEventType>[]> = new Map();

  constructor(private url: string) {
    this.connect();
  }

  private connect() {
    try {
      this.ws = new WebSocket(this.url);
      
      this.ws.onopen = () => {
        console.log('WebSocket connection established');
      };

      this.ws.onmessage = (event) => {
        this.handleMessage(event.data);
      };

      this.ws.onclose = () => {
        console.log('WebSocket connection closed');
        // Auto-reconnect logic could go here
      };

      this.ws.onerror = (error) => {
        console.error('WebSocket error:', error);
      };
    } catch (error) {
      console.error('Failed to connect to WebSocket:', error);
    }
  }

  private handleMessage(data: string) {
    try {
      const message = JSON.parse(data) as AgentEvent<AgentEventType>;
      this.emitEvent(message);
    } catch (error) {
      console.error('Failed to parse WebSocket message:', error);
    }
  }

  private emitEvent<T extends AgentEventType>(event: AgentEvent<T>) {
    const handlers = this.eventHandlers.get(event.type);
    if (handlers) {
      handlers.forEach(handler => handler(event));
    }
  }

  public on<T extends AgentEventType>(eventType: T, handler: EventHandler<T>) {
    if (!this.eventHandlers.has(eventType)) {
      this.eventHandlers.set(eventType, []);
    }
    this.eventHandlers.get(eventType)!.push(handler);
  }

  public off<T extends AgentEventType>(eventType: T, handler: EventHandler<T>) {
    const handlers = this.eventHandlers.get(eventType);
    if (handlers) {
      const index = handlers.indexOf(handler);
      if (index > -1) {
        handlers.splice(index, 1);
      }
    }
  }

  public send(data: any) {
    if (this.ws && this.ws.readyState === WebSocket.OPEN) {
      this.ws.send(JSON.stringify(data));
    } else {
      throw new Error('WebSocket is not connected');
    }
  }

  public disconnect() {
    if (this.ws) {
      this.ws.close();
      this.ws = null;
    }
  }
}

// Example usage
const setupWebSocketClient = () => {
  const client = new AIAgentWebSocketClient('ws://localhost:8080/ws/ai-agent');

  // Handle different event types
  client.on('message_received', (event) => {
    const payload = event.payload as MessageEventPayload;
    console.log(`Message received: ${payload.content}`);
  });

  client.on('stream_chunk', (event) => {
    const payload = event.payload as StreamChunkEventPayload;
    console.log(`Stream chunk: ${payload.chunk}`);
  });

  client.on('error', (event) => {
    const payload = event.payload as ErrorEventPayload;
    console.error(`Agent error: ${payload.error.message}`);
  });

  client.on('stream_start', (event) => {
    console.log('Stream started');
  });

  client.on('stream_end', (event) => {
    console.log('Stream ended');
  });

  return client;
};

export { AIAgentWebSocketClient, setupWebSocketClient };