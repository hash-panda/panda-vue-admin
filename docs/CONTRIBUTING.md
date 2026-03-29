# Contributing Guide

We welcome contributions to Panda Vue Admin! This guide will help you get started with contributing to the project.

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Git
- Basic knowledge of Vue 3, TypeScript, and Ant Design Vue

### Setup

1. Fork the repository
2. Clone your fork: `git clone https://github.com/your-username/panda-vue-admin.git`
3. Navigate to the project directory: `cd panda-vue-admin`
4. Install dependencies: `npm install`
5. Start the development server: `npm run dev`

## Development Workflow

### 1. Create a Feature Branch

```bash
# Create a new branch from main
git checkout -b feature/your-feature-name
```

### 2. Make Your Changes

- Follow the [Best Practices](./best-practices.md)
- Write clear, documented code
- Add tests for new functionality
- Update relevant documentation

### 3. Test Your Changes

```bash
# Run type checking
npm run type-check

# Run linting
npm run lint

# Run tests
npm run test

# Build the project
npm run build
```

### 4. Commit Your Changes

Use conventional commit format:

```bash
# Feature commit
git commit -m "feat: add user profile component"

# Bug fix commit
git commit -m "fix: resolve login validation issue"

# Documentation commit
git commit -m "docs: update API reference"

# Refactor commit
git commit -m "refactor: optimize component performance"
```

### 5. Push and Create Pull Request

```bash
git push origin feature/your-feature-name
```

Then create a Pull Request on GitHub.

## Code Standards

### TypeScript

- Use strict TypeScript configuration
- Define interfaces for all props and data
- Use generic types for reusable components
- Avoid `any` type when possible

### Vue Components

- Use Composition API with `<script setup>`
- Prefer single-file components
- Use meaningful component names
- Keep components focused and single-purpose

### Styling

- Use scoped styles when possible
- Follow Ant Design Vue theme guidelines
- Use CSS variables for theming
- Maintain responsive design principles

### Testing

- Write unit tests for all new features
- Test both success and error cases
- Mock external dependencies
- Maintain good test coverage

## Pull Request Guidelines

### PR Title

Use the conventional commit format for PR titles:
- `feat: description` for new features
- `fix: description` for bug fixes
- `docs: description` for documentation
- `style: description` for code style changes
- `refactor: description` for refactoring
- `test: description` for test changes
- `chore: description` for maintenance tasks

### PR Description

Include in your PR description:
- What changes were made and why
- Any breaking changes
- Related issue number (e.g., "Fixes #123")
- Testing instructions
- Screenshots for UI changes (if applicable)

### Review Process

1. Automated checks must pass
2. At least one maintainer approval
3. Address all review comments
4. Update documentation if needed
5. Merge after approval

## Reporting Issues

### Bug Reports

When reporting bugs, please include:
- Clear description of the issue
- Steps to reproduce
- Expected vs actual behavior
- Environment information (OS, browser, Node.js version)
- Relevant error messages or screenshots

### Feature Requests

For feature requests, please provide:
- Clear description of the desired feature
- Use case and motivation
- Alternative solutions considered
- Potential implementation approach

## Community Guidelines

### Code of Conduct

- Be respectful and inclusive
- Focus on constructive feedback
- Help newcomers get started
- Follow project standards and guidelines

### Communication

- Use GitHub issues for bugs and feature requests
- Use GitHub discussions for general questions
- Join our community channels for real-time chat

---

Thank you for contributing to Panda Vue Admin! 🎉