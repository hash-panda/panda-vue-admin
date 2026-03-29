# Frequently Asked Questions (FAQ)

This document answers common questions about Panda Vue Admin.

## Installation and Setup

### Q: What are the system requirements for Panda Vue Admin?

**A:** Panda Vue Admin requires:
- Node.js v16 or higher
- npm/yarn/pnpm package manager
- A modern web browser (Chrome, Firefox, Safari, Edge)

### Q: How do I install Panda Vue Admin?

**A:** You can install Panda Vue Admin using npm, yarn, or pnpm:

```bash
# Using npm
npm install panda-vue-admin

# Using yarn
yarn add panda-vue-admin

# Using pnpm
pnpm add panda-vue-admin
```

## Development

### Q: How do I start the development server?

**A:** Run the development server with:

```bash
npm run dev
```

The server will start at `http://localhost:3000` by default.

### Q: The development server won't start. What's wrong?

**A:** Common issues include:
- Port 3000 is already in use
- Missing dependencies
- TypeScript configuration errors

Try these solutions:
1. Check if port 3000 is available or use a different port: `npm run dev -- --port 3001`
2. Reinstall dependencies: `rm -rf node_modules && npm install`
3. Check TypeScript errors and fix them

## Components

### Q: How do I customize component styles?

**A:** You can customize component styles using CSS variables or by overriding component styles:

```css
/* Using CSS variables */
:root {
  --panda-primary-color: #1890ff;
  --panda-border-radius: 4px;
}

/* Or by targeting component classes */
.panda-card {
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
```

## Troubleshooting

### Q: I'm getting TypeScript errors. What should I do?

**A:** Ensure you have:
1. Proper TypeScript configuration in `tsconfig.json`
2. Correct type imports
3. All required dependencies installed

### Q: How do I report a bug?

**A:** Please report bugs through [GitHub Issues](https://github.com/hash-panda/panda-vue-admin/issues) with:
- Detailed description of the issue
- Steps to reproduce
- Expected vs actual behavior
- Code samples if applicable