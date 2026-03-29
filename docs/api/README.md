# API Documentation

This section provides comprehensive documentation for the Panda Vue Admin framework APIs, utilities, and core functionality.

## Overview

Panda Vue Admin exposes several types of APIs:

- **Core Framework APIs** - Fundamental framework utilities and functions
- **Component APIs** - Prop and event interfaces for components  
- **Utility APIs** - Helper functions and utilities
- **Store APIs** - State management interfaces
- **Plugin APIs** - Plugin and extension interfaces

## Core Framework APIs

### Configuration

#### `createApp(config: AppConfig)`

Creates and configures the Panda Vue Admin application.

**Parameters:**
- `config` (`AppConfig`): Application configuration object

**Returns:**
- `App`: The configured Vue application instance

**Example:**
```typescript
import { createApp } from '@panda-vue-admin/core'
import type { AppConfig } from '@panda-vue-admin/types'

const config: AppConfig = {
  router: {
    mode: 'history',
    base: '/admin/'
  },
  state: {
    persist: true
  },
  theme: {
    primary: '#1890ff',
    mode: 'light'
  }
}

const app = createApp(config)
```