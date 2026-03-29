# Code Examples

This section provides practical examples and code snippets to help you understand how to use Panda Vue Admin effectively.

## Component Examples

### Simple Card Component

```vue
<template>
  <a-card :bordered="false">
    <template #title>{{ title }}</template>
    <p>{{ content }}</p>
  </a-card>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  content: string;
}>();
</script>
```

### API Usage Example

```typescript
// services/UserService.ts
import { BaseService } from './BaseService';

export class UserService extends BaseService {
  constructor() {
    super('/users');
  }

  async getUsers() {
    return this.get('/users');
  }
}

// Component usage
import { UserService } from '@/services/UserService';

const userService = new UserService();
const users = await userService.getUsers();
```

### Composable Example

```typescript
// composables/useAuth.ts
import { ref } from 'vue';

export function useAuth() {
  const user = ref(null);
  const isAuthenticated = ref(false);

  const login = async (credentials) => {
    // Login logic
    user.value = userData;
    isAuthenticated.value = true;
  };

  const logout = () => {
    user.value = null;
    isAuthenticated.value = false;
  };

  return {
    user,
    isAuthenticated,
    login,
    logout
  };
}
```

### Store Example

```typescript
// stores/userStore.ts
import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    users: [],
    loading: false
  }),
  actions: {
    async fetchUsers() {
      this.loading = true;
      try {
        const response = await userService.getUsers();
        this.users = response.data;
      } finally {
        this.loading = false;
      }
    }
  }
});
```

## Usage Patterns

### Form Handling

```vue
<template>
  <a-form @finish="handleSubmit">
    <a-form-item label="Name">
      <a-input v-model:value="form.name" />
    </a-form-item>
    <a-form-item>
      <a-button type="primary" html-type="submit">Submit</a-button>
    </a-form-item>
  </a-form>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

const form = reactive({
  name: ''
});

const handleSubmit = async () => {
  await createUser(form);
};
</script>
```

### Data Fetching

```vue
<template>
  <div v-if="loading">Loading...</div>
  <div v-else-if="error">{{ error.message }}</div>
  <div v-else>
    <a-list :data-source="users" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useUserStore } from '@/stores/userStore';

const userStore = useUserStore();
const loading = ref(false);
const error = ref(null);

const fetchUsers = async () => {
  loading.value = true;
  try {
    await userStore.fetchUsers();
  } catch (err) {
    error.value = err;
  } finally {
    loading.value = false;
  }
};

onMounted(fetchUsers);
</script>
```

---

*For more detailed examples, see the source code and test files*