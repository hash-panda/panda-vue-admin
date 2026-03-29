<template>
  <div class="dashboard">
    <a-row :gutter="[16, 16]">
      <a-col :span="6" v-for="stat in stats" :key="stat.title">
        <a-card>
          <a-statistic
            :title="stat.title"
            :value="stat.value"
            :prefix="stat.prefix"
            :suffix="stat.suffix"
          />
        </a-card>
      </a-col>
    </a-row>
    
    <a-card title="Recent Activities" style="margin-top: 24px">
      <a-list
        item-layout="horizontal"
        :data-source="activities"
      >
        <template #renderItem="{ item }">
          <a-list-item>
            <a-list-item-meta
              :title="item.title"
              :description="item.description"
            />
            <template #extra>
              <a-tag :color="item.color">{{ item.status }}</a-tag>
            </template>
          </a-list-item>
        </template>
      </a-list>
    </a-card>
  </div>
</template>

<script setup lang="ts">
const stats = [
  { title: 'Total Users', value: 1128, prefix: '👥' },
  { title: 'Revenue', value: 23400, prefix: '💰', suffix: '$' },
  { title: 'Orders', value: 846, prefix: '📦' },
  { title: 'Growth', value: 12.8, prefix: '📈', suffix: '%' }
]

const activities = [
  {
    title: 'New user registration',
    description: 'John Doe created an account',
    status: 'Success',
    color: 'green'
  },
  {
    title: 'Order placed',
    description: 'Order #12345 has been placed',
    status: 'Pending',
    color: 'orange'
  },
  {
    title: 'Payment received',
    description: 'Payment for order #12344 received',
    status: 'Completed',
    color: 'blue'
  }
]
</script>

<style scoped>
.dashboard {
  padding: 24px;
}
</style>