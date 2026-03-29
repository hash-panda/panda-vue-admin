<template>
  <div>
    <a-page-header
      title="Simple Example"
      @back="() => $router.push('/examples')"
    />
    
    <a-card>
      <template #title>Counter Example</template>
      <p>This is a simple counter example demonstrating basic Vue reactivity and user interactions.</p>
      
      <a-space direction="vertical" size="large">
        <div>
          <h3>Current Count: {{ count }}</h3>
          <a-space>
            <a-button type="primary" @click="increment">Increment</a-button>
            <a-button @click="decrement">Decrement</a-button>
            <a-button @click="reset">Reset</a-button>
          </a-space>
        </div>
        
        <div>
          <h4>Count History:</h4>
          <a-list size="small" :data-source="history" bordered>
            <template #renderItem="{ item }">
              <a-list-item>{{ item }}</a-list-item>
            </template>
          </a-list>
        </div>
      </a-space>
    </a-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)
const history = ref<string[]>([])

const increment = () => {
  count.value++
  history.value.unshift(`Incremented to ${count.value}`)
  if (history.value.length > 10) history.value.pop()
}

const decrement = () => {
  count.value--
  history.value.unshift(`Decremented to ${count.value}`)
  if (history.value.length > 10) history.value.pop()
}

const reset = () => {
  const oldValue = count.value
  count.value = 0
  history.value.unshift(`Reset from ${oldValue} to 0`)
  if (history.value.length > 10) history.value.pop()
}
</script>