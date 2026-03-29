# Panda Vue Admin

A modern admin dashboard built with Vue 3, TypeScript, and Ant Design Vue.

## 🚀 Features

- **Vue 3 Composition API**: Modern reactive programming
- **TypeScript**: Type-safe development experience
- **Ant Design Vue**: Beautiful and customizable UI components
- **Vite**: Fast build tool and development server
- **Pinia**: Intuitive state management
- **Vue Router**: Official routing solution
- **Axios**: HTTP client for API communication
- **ESLint & Prettier**: Code quality and formatting

## 📦 Quick Start

### Prerequisites

- Node.js >= 16.0.0
- npm >= 7.0.0

### Installation

```bash
# Clone the repository
git clone https://github.com/hash-panda/panda-vue-admin.git

# Navigate to the project directory
cd panda-vue-admin

# Install dependencies
npm install

# Start the development server
npm run dev
```

The application will be available at `http://localhost:5173`.

### Build for Production

```bash
npm run build
```

### Run Tests

```bash
npm run test
```

## 📁 Project Structure

```
panda-vue-admin/
├── src/                    # Source code
│   ├── api/               # API services
│   ├── assets/            # Static assets
│   ├── components/        # Reusable components
│   ├── composables/       # Vue composables
│   ├── layouts/           # Layout components
│   ├── router/            # Router configuration
│   ├── stores/            # Pinia stores
│   ├── styles/            # Global styles
│   ├── types/             # TypeScript types
│   ├── utils/             # Utilities
│   └── views/             # Page components
├── docs/                  # Documentation
├── public/                # Public files
└── tests/                 # Test files
```

## 📖 Documentation

For detailed documentation, please visit the [docs](./docs/) directory:

- [Getting Started](./docs/getting-started.md) - Quick start guide
- [Architecture](./docs/architecture.md) - Technical architecture
- [Development](./docs/development.md) - Development guide
- [API Reference](./docs/api-reference.md) - Complete API documentation
- [Best Practices](./docs/best-practices.md) - Coding guidelines
- [Examples](./docs/examples.md) - Code examples
- [Contributing](./docs/CONTRIBUTING.md) - How to contribute

## 🛠️ Development

### Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build

# Code Quality
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript type checking
npm run format       # Format code with Prettier

# Testing
npm run test         # Run tests
npm run test:watch   # Run tests in watch mode
npm run test:coverage # Run test coverage
```

### Environment Variables

Create a `.env.local` file in the project root:

```env
VITE_API_BASE_URL=https://api.example.com
VITE_APP_TITLE=Panda Vue Admin
VITE_DEBUG_MODE=true
```

## 🎨 Theming

The project uses Ant Design Vue's theming system. Customize the theme in `src/styles/theme.ts`:

```typescript
export const theme = {
  token: {
    colorPrimary: '#1890ff',
    borderRadius: 6,
  },
  components: {
    Button: {
      borderRadius: 4,
    },
  },
};
```

## 🤝 Contributing

We welcome contributions! Please read our [Contributing Guide](./docs/CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Vue.js](https://vuejs.org/) - The progressive JavaScript framework
- [Ant Design Vue](https://www.antdv.com/) - An enterprise-class UI design language
- [Vite](https://vitejs.dev/) - Next generation frontend tooling
- [TypeScript](https://www.typescriptlang.org/) - JavaScript with syntax for types

---

Built with ❤️ by the Panda Vue Admin team