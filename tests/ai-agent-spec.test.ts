/**
 * AI Agent Specification Tests
 * 
 * Unit tests to validate the AI Agent interface specification
 */

import {
  validateAgentConfiguration,
  validateCreateAgentRequest,
  validateAgentSession,
  validateCreateSessionRequest,
  validateSendMessageRequest,
  validateAgentEvent
} from '../types/ai-agent';

describe('AI Agent Interface Specification', () => {
  describe('Agent Configuration Validation', () => {
    test('should validate correct agent configuration', () => {
      const config = {
        name: 'Test Agent',
        provider: 'openai',
        model: 'gpt-4',
        apiKey: 'test-key',
        maxTokens: 2048,
        temperature: 0.7,
        systemPrompt: 'You are a test agent'
      };

      const result = validateAgentConfiguration(config);
      expect(result.success).toBe(true);
      if (result.success) {
        expect(result.data).toEqual(config);
      }
    });

    test('should reject invalid agent configuration', () => {
      const config = {
        name: '',
        provider: 'invalid-provider',
        model: '',
        apiKey: '',
        maxTokens: -1,
        temperature: 2.0,
        systemPrompt: ''
      };

      const result = validateAgentConfiguration(config);
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error).toBeDefined();
        expect(result.error.message).toContain('validation');
      }
    });
  });

  describe('Create Agent Request Validation', () => {
    test('should validate correct create agent request', () => {
      const request = {
        name: 'Test Agent',
        provider: 'openai',
        model: 'gpt-4',
        apiKey: 'test-key',
        maxTokens: 2048,
        temperature: 0.7,
        systemPrompt: 'You are a test agent'
      };

      const result = validateCreateAgentRequest(request);
      expect(result.success).toBe(true);
    });
  });

  describe('Agent Session Validation', () => {
    test('should validate correct agent session', () => {
      const session = {
        id: 'session-123',
        agentId: 'agent-456',
        systemPrompt: 'You are a test agent',
        messages: [
          {
            id: 'msg-1',
            sessionId: 'session-123',
            role: 'user',
            content: 'Hello',
            timestamp: new Date().toISOString()
          }
        ],
        status: 'active',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };

      const result = validateAgentSession(session);
      expect(result.success).toBe(true);
    });
  });

  describe('Agent Event Validation', () => {
    test('should validate correct agent event', () => {
      const event = {
        type: 'message_received',
        sessionId: 'session-123',
        timestamp: new Date().toISOString(),
        payload: {
          messageId: 'msg-456',
          sessionId: 'session-123',
          role: 'assistant',
          content: 'Hello!',
          timestamp: new Date().toISOString()
        }
      };

      const result = validateAgentEvent(event);
      expect(result.success).toBe(true);
    });
  });

  describe('Type Safety', () => {
    test('should enforce correct provider types', () => {
      const validProviders = ['openai', 'anthropic', 'azure-openai', 'google-gemini'];
      
      validProviders.forEach(provider => {
        const config = {
          name: 'Test Agent',
          provider: provider as any,
          model: 'test-model',
          apiKey: 'test-key'
        };

        // This should not throw a TypeScript error
        const result = validateAgentConfiguration(config);
        expect(result).toBeDefined();
      });
    });

    test('should enforce correct event types', () => {
      const eventTypes = [
        'message_received',
        'stream_chunk',
        'stream_start',
        'stream_end',
        'error',
        'session_created',
        'session_updated',
        'session_deleted'
      ];

      eventTypes.forEach(eventType => {
        const event = {
          type: eventType as any,
          sessionId: 'session-123',
          timestamp: new Date().toISOString(),
          payload: {}
        };

        const result = validateAgentEvent(event);
        expect(result).toBeDefined();
      });
    });
  });
});