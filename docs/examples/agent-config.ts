// AI Agent Configuration Example
import { AgentConfig } from '../api/types/ai-agent';

const agentConfig: AgentConfig = {
  model: {
    name: 'gpt-3.5-turbo',
    max_tokens: 2048,
    temperature: 0.7
  },
  tools: {
    enabled: [
      'calculator',
      'web_search',
      'file_reader',
      'database_query'
    ],
    custom_configs: {
      calculator: {
        precision: 10,
        max_expression_length: 100
      },
      web_search: {
        max_results: 5,
        safe_search: true
      }
    }
  },
  rate_limits: {
    requests_per_minute: 60,
    requests_per_hour: 3600,
    websocket_connections: 10
  },
  security: {
    require_authentication: true,
    allowed_origins: [
      'http://localhost:3000',
      'https://panda-vue-admin.example.com'
    ],
    enable_csrf_protection: true
  }
};

// Environment-based configuration
function createAgentConfig(): AgentConfig {
  return {
    model: {
      name: process.env.MODEL_NAME || 'gpt-3.5-turbo',
      max_tokens: parseInt(process.env.MAX_TOKENS || '2048'),
      temperature: parseFloat(process.env.TEMPERATURE || '0.7')
    },
    tools: {
      enabled: process.env.ENABLED_TOOLS?.split(',') || ['calculator', 'web_search'],
      custom_configs: {}
    },
    rate_limits: {
      requests_per_minute: parseInt(process.env.RPM_LIMIT || '60'),
      requests_per_hour: parseInt(process.env.RPH_LIMIT || '3600'),
      websocket_connections: parseInt(process.env.WS_LIMIT || '10')
    },
    security: {
      require_authentication: process.env.REQUIRE_AUTH !== 'false',
      allowed_origins: process.env.ALLOWED_ORIGINS?.split(',') || ['http://localhost:3000'],
      enable_csrf_protection: process.env.CSRF_PROTECTION !== 'false'
    }
  };
}

export { agentConfig, createAgentConfig };