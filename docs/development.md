# Development Guide

This guide provides essential instructions for developing with Panda Vue Admin.

## Coding Standards

### Naming Conventions
- **Components**: PascalCase (e.g., `UserTable.vue`)
- **Files**: kebab-case (e.g., `user-table.vue`)
- **Variables**: camelCase (e.g., `userName`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `API_BASE_URL`)
- **Types**: PascalCase (e.g., `User`, `ApiResponse`)

### TypeScript Guidelines

```typescript
// Interface example
interface User {
  id: number;
  name: string;
  email: string;
}

// Generic response type
interface ApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
}
```

### Vue Component Structure

```vue
<template>
  <div class="component">
    <h1>{{ title }}</h1>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface Props {
  title: string;
  loading?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  loading: false,
});

const count = ref(0);
</script>

<style scoped>
.component {
  padding: 1rem;
}
</style>
```

## Development Workflow

### 1. Feature Development

```bash
# Create feature branch
git checkout -b feature/your-feature-name

# Make changes and test
npm run dev

# Lint and type-check
npm run lint
npm run type-check
```

### 2. Code Quality

- **ESLint**: Run `npm run lint` to check code style
- **TypeScript**: Ensure all files have proper types
- **Testing**: Write unit tests for utilities and services
- **Documentation**: Document new features and APIs

### 3. Commit Guidelines

Use conventional commits:

```bash
feat: add new user management feature
fix: resolve login validation issue
docs: update API documentation
style: format component styles
refactor: improve user service structure
test: add unit tests for auth utilities
chore: update dependencies
```

## File Organization

### Component Structure
```
components/
├── common/          # Generic components
├── layout/          # Layout components
└── form/            # Form components
```

### Feature Organization
```
src/
├── components/      # Reusable components
├── views/           # Page components
├── stores/          # Pinia stores
├── services/        # API services
├── types/           # TypeScript types
├── utils/           # Utility functions
└── hooks/           # Composition hooks
```

## State Management

### Pinia Store Example

```typescript
import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    users: [] as User[],
    loading: false,
  }),
  
  getters: {
    getUserById: (state) => (id: number) => {
      return state.users.find(user => user.id === id);
    },
  },
  
  actions: {
    async fetchUsers() {
      this.loading = true;
      this.users = await userService.getUsers();
      this.loading = false;
    },
  },
});
```

## API Services

### Service Class Pattern

```typescript
class UserService {
  async getUsers(): Promise<User[]> {
    const response = await api.get('/users');
    return response.data;
  }
  
  async createUser(user: CreateUserDTO): Promise<User> {
    const response = await api.post('/users', user);
    return response.data;
  }
}

export const userService = new UserService();
```

## Best Practices

### 1. Component Design
- Keep components small and focused
- Use composition API consistently
- Prefer composition over inheritance
- Implement proper prop validation

### 2. TypeScript Usage
- Define types for all data structures
- Use generic types for reusability
- Avoid `any` type when possible
- Use proper return types for functions

### 3. Performance
- Use `computed` properties for derived state
- Implement lazy loading for routes
- Use `v-memo` for expensive components
- Optimize re-renders with proper keys

### 4. Testing
- Write unit tests for utilities
- Test component behavior with Vitest
- Mock API calls in tests
- Test edge cases and error states

---

*For detailed API reference, see [API Reference](./api-reference.md)*