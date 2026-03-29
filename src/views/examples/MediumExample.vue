<template>
  <div>
    <a-page-header
      title="Medium Example"
      @back="() => $router.push('/examples')"
    />
    
    <a-card>
      <template #title>User Management</template>
      <p>This example demonstrates data management, filtering, and CRUD operations.</p>
      
      <a-space direction="vertical" size="large" style="width: 100%">
        <a-row type="flex" justify="space-between">
          <a-col :span="8">
            <a-input-search
              v-model:value="searchTerm"
              placeholder="Search users..."
              @search="filterUsers"
            />
          </a-col>
          <a-col>
            <a-button type="primary" @click="showAddModal">Add User</a-button>
          </a-col>
        </a-row>
        
        <a-table
          :columns="columns"
          :data-source="filteredUsers"
          :loading="loading"
          row-key="id"
        >
          <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'status'">
              <a-tag :color="record.status === 'active' ? 'green' : 'red'">
                {{ record.status }}
              </a-tag>
            </template>
            <template v-else-if="column.key === 'actions'">
              <a-space>
                <a-button type="link" @click="editUser(record)">Edit</a-button>
                <a-button type="link" danger @click="deleteUser(record)">Delete</a-button>
              </a-space>
            </template>
          </template>
        </a-table>
      </a-space>
    </a-card>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import { message } from 'ant-design-vue'

interface User {
  id: number
  name: string
  email: string
  status: 'active' | 'inactive'
  role: string
}

const loading = ref(false)
const searchTerm = ref('')
const users = reactive<User[]>([
  { id: 1, name: 'John Doe', email: 'john@example.com', status: 'active', role: 'Admin' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'active', role: 'User' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', status: 'inactive', role: 'User' },
  { id: 4, name: 'Alice Brown', email: 'alice@example.com', status: 'active', role: 'Editor' },
])

const filteredUsers = ref<User[]>([...users])

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: 'Role',
    dataIndex: 'role',
    key: 'role',
  },
  {
    title: 'Actions',
    key: 'actions',
  },
]

const filterUsers = () => {
  if (!searchTerm.value) {
    filteredUsers.value = [...users]
    return
  }
  
  const term = searchTerm.value.toLowerCase()
  filteredUsers.value = users.filter(
    user => 
      user.name.toLowerCase().includes(term) ||
      user.email.toLowerCase().includes(term) ||
      user.role.toLowerCase().includes(term)
  )
}

const showAddModal = () => {
  message.info('Add user functionality would be implemented here')
}

const editUser = (user: User) => {
  message.info(`Edit user: ${user.name}`)
}

const deleteUser = (user: User) => {
  message.info(`Delete user: ${user.name}`)
}

onMounted(() => {
  filterUsers()
})
</script>