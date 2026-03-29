# Components Documentation

Panda Vue Admin provides a rich set of pre-built components based on Ant Design Vue, enhanced with additional features and customization options.

## Available Components

### Layout Components

#### `AdminLayout`
The main layout component for admin interfaces.

**Props:**
- `sidebarCollapsed` (`boolean`): Control sidebar visibility
- `showHeader` (`boolean`): Show/hide header
- `theme` (`string`): Layout theme

**Usage:**
```vue
<template>
  <AdminLayout :sidebar-collapsed="isCollapsed">
    <!-- Your content here -->
  </AdminLayout>
</template>
```

### Data Components

#### `DataTable`
Enhanced table component with sorting, filtering, and pagination.

**Props:**
- `columns` (`Array`): Table columns configuration
- `dataSource` (`Array`): Table data
- `loading` (`boolean`): Loading state
- `pagination` (`Object`): Pagination configuration

**Usage:**
```vue
<template>
  <DataTable
    :columns="columns"
    :data-source="data"
    :loading="loading"
    :pagination="{ pageSize: 10 }"
  />
</template>
```

#### `FormBuilder`
Dynamic form builder with validation.

**Props:**
- `fields` (`Array`): Form field configuration
- `modelValue` (`Object`): Form data model
- `rules` (`Object`): Validation rules

**Usage:**
```vue
<template>
  <FormBuilder
    :fields="formFields"
    v-model="formData"
    :rules="validationRules"
    @submit="handleSubmit"
  />
</template>
```

### UI Components

#### `ActionCard`
Card component with built-in action buttons.

**Props:**
- `title` (`string`): Card title
- `actions` (`Array`): Action buttons configuration
- `loading` (`boolean`): Loading state

**Usage:**
```vue
<template>
  <ActionCard
    title="User Management"
    :actions="[
      { text: 'Add', type: 'primary' },
      { text: 'Edit' },
      { text: 'Delete', danger: true }
    ]"
  >
    <!-- Card content -->
  </ActionCard>
</template>
```

#### `SearchBox`
Advanced search component with filters.

**Props:**
- `placeholder` (`string`): Input placeholder
- `filters` (`Array`): Filter options
- `value` (`string`): Search value

**Events:**
- `search`: Emitted when search is performed
- `filter-change`: Emitted when filters change

**Usage:**
```vue
<template>
  <SearchBox
    placeholder="Search users..."
    :filters="[
      { label: 'Name', value: 'name' },
      { label: 'Email', value: 'email' }
    ]"
    @search="handleSearch"
  />
</template>
```

## Component Examples

For detailed examples of each component, please refer to the [Examples](../examples/README.md) section.

## Customization

### Theme Customization

All components support theme customization through the theme configuration:

```typescript
import { useTheme } from '@panda-vue-admin/core'

const { setTheme } = useTheme()

setTheme({
  primary: '#1890ff',
  success: '#52c41a',
  warning: '#faad14',
  error: '#f5222d'
})
```

### Component Overrides

You can override component styles using CSS variables:

```css
:root {
  --panda-primary-color: #1890ff;
  --panda-border-radius: 4px;
  --panda-font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto;
}
```