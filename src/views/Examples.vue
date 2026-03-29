<template>
  <div>
    <h1>Example Pages</h1>
    <p>Here are the AI Agent-driven development example pages:</p>
    
    <a-row :gutter="[16, 16]">
      <a-col :span="8">
        <a-card hoverable>
          <template #title>Simple Example</template>
          <p>A basic example demonstrating core functionality</p>
          <a-button type="primary" @click="$router.push('/examples/simple')">View Example</a-button>
        </a-card>
      </a-col>
      <a-col :span="8">
        <a-card hoverable>
          <template #title>Medium Example</template>
          <p>A more complex example with data interactions</p>
          <a-button type="primary" @click="$router.push('/examples/medium')">View Example</a-button>
        </a-card>
      </a-col>
      <a-col :span="8">
        <a-card hoverable>
          <template #title>Complex Example</template>
          <p>An advanced example with multiple features</p>
          <a-button type="primary" @click="$router.push('/examples/complex')">View Example</a-button>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script setup lang="ts">
</script>