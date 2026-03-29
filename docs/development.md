# Development Guide

This guide covers how to set up a development environment, contribute to Panda Vue Admin, and build custom features.

## Prerequisites

Before starting development, ensure you have:

- Node.js v16 or higher
- npm/yarn/pnpm package manager
- Git
- VS Code (recommended) with these extensions:
  - Volar
  - TypeScript Vue Plugin
  - ESLint
  - Prettier

## Development Setup

### 1. Clone and Install

```bash
# Clone the repository
git clone https://github.com/hash-panda/panda-vue-admin.git
cd panda-vue-admin

# Install dependencies
npm install

# or using yarn
yarn install

# or using pnpm
pnpm install
```

### 2. Development Server

```bash
# Start development server
npm run dev

# or
yarn dev

# or
pnpm dev
```

The development server will start at `http://localhost:3000` with hot reload enabled.

### 3. Build for Production

```bash
# Build the project
npm run build

# or
yarn build

# or
pnpm build
```

## Project Structure

```
panda-vue-admin/
├── src/
│   ├── components/         # Global components
│   ├── composables/       # Vue composables
│   ├── layouts/          # Page layouts
│   ├── pages/            # Page components
│   ├── stores/           # Pinia stores
│   ├── types/            # TypeScript types
│   └── utils/            # Utility functions
├── docs/                 # Documentation
├── public/               # Static assets
└── tests/               # Test files
```