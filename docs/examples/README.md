# Examples

This section provides practical examples and code samples for using Panda Vue Admin components and features.

## Basic Layout Example

```vue
<!-- BasicLayoutExample.vue -->
<template>
  <AdminLayout>
    <template #sidebar>
      <SidebarMenu :items="menuItems" />
    </template>
    
    <template #header>
      <HeaderBar :user="currentUser" />
    </template>
    
    <template #content>
      <router-view />
    </template>
  </AdminLayout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AdminLayout from '@/components/layout/AdminLayout.vue'

const menuItems = ref([
  {
    key: 'dashboard',
    icon: 'dashboard',
    label: 'Dashboard',
    path: '/dashboard'
  },
  {
    key: 'users',
    icon: 'user',
    label: 'Users',
    path: '/users'
  }
])

const currentUser = ref({
  name: 'John Doe',
  avatar: '/avatar.jpg',
  role: 'admin'
})
</script>
```

## Data Table Example

```vue
<!-- DataTableExample.vue -->
<template>
  <div>
    <DataTable
      :columns="columns"
      :data-source="users"
      :loading="loading"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const columns = [
  { title: 'Name', dataIndex: 'name' },
  { title: 'Email', dataIndex: 'email' },
  { title: 'Role', dataIndex: 'role' }
]

const users = ref([
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' }
])

const loading = ref(false)
</script>
```

## Form Example

```vue
<!-- FormExample.vue -->
<template>
  <FormBuilder
    :fields="formFields"
    v-model="formData"
    @submit="handleSubmit"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const formFields = [
  { name: 'name', label: 'Name', type: 'input', required: true },
  { name: 'email', label: 'Email', type: 'email', required: true },
  { name: 'role', label: 'Role', type: 'select', options: ['Admin', 'User'] }
]

const formData = ref({})
const handleSubmit = (data: any) => {
  console.log('Form submitted:', data)
}
</script>
```