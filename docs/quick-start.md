# Quick Start Guide

This guide will help you get Panda Vue Admin up and running in minutes.

## Installation

### Prerequisites

Ensure you have the following installed:
- Node.js (v16 or higher)
- npm, yarn, or pnpm
- Git

### Step 1: Clone the Repository

```bash
git clone https://github.com/hash-panda/panda-vue-admin.git
cd panda-vue-admin
```

### Step 2: Install Dependencies

```bash
# Using npm
npm install

# Using yarn
yarn

# Using pnpm
pnpm install
```

### Step 3: Start Development Server

```bash
# Using npm
npm run dev

# Using yarn
yarn dev

# Using pnpm
pnpm dev
```

The development server will start at `http://localhost:3000` (or the next available port).

## Project Structure

```
panda-vue-admin/
├── src/                    # Source code
│   ├── components/         # Vue components
│   ├── composables/        # Vue composables
│   ├── layouts/            # Layout components
│   ├── pages/              # Page components
│   ├── stores/             # Pinia stores
│   ├── types/              # TypeScript type definitions
│   ├── utils/              # Utility functions
│   ├── App.vue             # Root component
│   └── main.ts             # Application entry point
├── docs/                   # Documentation
├── public/                 # Static assets
├── tests/                  # Test files
├── package.json            # Project dependencies and scripts
└── README.md               # Project overview
```

## Basic Usage

### Creating a New Page

1. Create a new Vue component in `src/pages/`:

```vue
<!-- src/pages/Dashboard.vue -->
<template>
  <div class="dashboard">
    <a-card>
      <h1>Welcome to Dashboard</h1>
    </a-card>
  </div>
</template>

<script setup lang="ts">
// Your component logic here
</script>

<style scoped>
.dashboard {
  padding: 24px;
}
</style>
```

2. Add the route in your routing configuration:

```typescript
// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../pages/Dashboard.vue'

const routes = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
```

### Using Components

Panda Vue Admin provides a set of pre-built components:

```vue
<template>
  <div>
    <!-- Use Ant Design Vue components -->
    <a-button type="primary" @click="handleClick">
      Click me
    </a-button>
    
    <a-table :columns="columns" :data-source="data" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const columns = ref([
  { title: 'Name', dataIndex: 'name' },
  { title: 'Age', dataIndex: 'age' }
])

const data = ref([
  { key: '1', name: 'John Doe', age: 32 },
  { key: '2', name: 'Jane Smith', age: 28 }
])

const handleClick = () => {
  console.log('Button clicked!')
}
</script>
```

## Next Steps

- Explore the [API Documentation](./api/README.md)
- Check out [Components](./components/README.md)
- Learn about [Development](./development.md)
- Browse [Examples](./examples/README.md)

## Troubleshooting

### Common Issues

**Build Errors**
```bash
# Clear node modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Port Already in Use**
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9
```

**TypeScript Errors**
Ensure all TypeScript dependencies are properly installed:
```bash
npm install --save-dev typescript @types/node
```

### Getting Help

If you encounter issues:
- Check the [FAQ](./faq.md)
- Search existing [GitHub Issues](https://github.com/hash-panda/panda-vue-admin/issues)
- Create a new issue with detailed error information