<template>
  <div>
    <h1>Dashboard</h1>
    <a-row :gutter="16">
      <a-col :span="8">
        <a-card>
          <template #title>
            <span>Total Pages</span>
          </template>
          <p>0</p>
        </a-card>
      </a-col>
      <a-col :span="8">
        <a-card>
          <template #title>
            <span>AI Generated</span>
          </template>
          <p>0</p>
        </a-card>
      </a-col>
      <a-col :span="8">
        <a-card>
          <template #title>
            <span>Components Used</span>
          </template>
          <p>0</p>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script setup lang="ts">
</script>