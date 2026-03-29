# Getting Started

This guide will help you set up Panda Vue Admin for local development and deployment.

## Prerequisites

### System Requirements

- **Node.js**: Version 16.0 or higher
- **npm**: Version 8.0 or higher (comes with Node.js)
- **Git**: Version 2.0 or higher
- **IDE/Editor**: VS Code (recommended) or any code editor with TypeScript support

### Recommended Development Environment

- **VS Code**: With the following extensions:
  - Volar (Vue 3 extension)
  - TypeScript Vue Plugin
  - ESLint
  - Prettier
- **Browser**: Chrome, Firefox, or Safari (latest versions)
- **Terminal**: Any modern terminal with Git support

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/hash-panda/panda-vue-admin.git
cd panda-vue-admin
```

### 2. Install Dependencies

Using npm:

```bash
npm install
```

Using yarn:

```bash
yarn install
```

Using pnpm:

```bash
pnpm install
```

### 3. Environment Configuration

Create a `.env.local` file in the root directory:

```bash
cp .env.example .env.local
```

Edit the `.env.local` file with your environment-specific settings:

```env
# API Configuration
VITE_API_BASE_URL=http://localhost:3000/api
VITE_APP_TITLE=Panda Vue Admin

# Development Settings
VITE_DEV=true
VITE_MOCK_API=true

# Production Settings
VITE_PRODUCTION=false
```

## Development

### Starting the Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5173` by default.

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Linting and Code Quality

```bash
# Run ESLint
npm run lint

# Fix linting issues
npm run lint:fix

# Type checking
npm run type-check
```

## Next Steps

After setting up the project:

1. Read the [Technical Architecture](./architecture.md) to understand the project structure
2. Follow the [Development Guide](./development.md) for coding standards
3. Check out the [API Reference](./api-reference.md) for available utilities
4. Explore the [Examples](./examples/) for implementation patterns

## Troubleshooting

If you encounter issues during setup:

1. Ensure Node.js version is 16.0 or higher
2. Clear npm cache: `npm cache clean --force`
3. Delete `node_modules` and `package-lock.json`, then reinstall
4. Check the [Troubleshooting](./troubleshooting.md) section for common issues

Need more help? Check the [GitHub Issues](https://github.com/hash-panda/panda-vue-admin/issues) or create a new one.