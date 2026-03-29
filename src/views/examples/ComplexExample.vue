<template>
  <div>
    <a-page-header
      title="Complex Example"
      @back="() => $router.push('/examples')"
    />
    
    <a-row :gutter="[16, 16]">
      <!-- Statistics Cards -->
      <a-col :span="6" v-for="stat in stats" :key="stat.title">
        <a-card>
          <a-statistic
            :title="stat.title"
            :value="stat.value"
            :prefix="stat.prefix"
            :suffix="stat.suffix"
            :value-style="{ color: stat.color }"
          />
        </a-card>
      </a-col>
    </a-row>
    
    <!-- Chart and Form Section -->
    <a-row :gutter="[16, 16]" style="margin-top: 16px">
      <a-col :span="16">
        <a-card title="Activity Chart">
          <canvas ref="chartRef" style="width: 100%; height: 300px"></canvas>
        </a-card>
      </a-col>
      
      <a-col :span="8">
        <a-card title="Quick Actions">
          <a-form
            :model="formState"
            layout="vertical"
            @finish="handleSubmit"
          >
            <a-form-item label="Task Name" name="taskName" :rules="[{ required: true, message: 'Please input task name!' }]">
              <a-input v-model:value="formState.taskName" />
            </a-form-item>
            
            <a-form-item label="Priority" name="priority">
              <a-select v-model:value="formState.priority" placeholder="Select priority">
                <a-select-option value="high">High</a-select-option>
                <a-select-option value="medium">Medium</a-select-option>
                <a-select-option value="low">Low</a-select-option>
              </a-select>
            </a-form-item>
            
            <a-form-item>
              <a-button type="primary" html-type="submit">Add Task</a-button>
            </a-form-item>
          </a-form>
        </a-card>
      </a-col>
    </a-row>
    
    <!-- Recent Activities -->
    <a-card title="Recent Activities" style="margin-top: 16px">
      <a-timeline>
        <a-timeline-item v-for="activity in activities" :key="activity.id" :color="activity.color">
          {{ activity.content }}
          <template #dot v-if="activity.icon">
            <component :is="activity.icon" />
          </template>
        </a-timeline-item>
      </a-timeline>
    </a-card>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import { message } from 'ant-design-vue'
import * as echarts from 'echarts'

interface Stat {
  title: string
  value: number
  prefix?: string
  suffix?: string
  color: string
}

interface Activity {
  id: number
  content: string
  color?: string
  icon?: string
}

const chartRef = ref<HTMLCanvasElement>()
const chart = ref<echarts.ECharts>()

const stats = reactive<Stat[]>([
  { title: 'Total Users', value: 1128, color: '#3f8600' },
  { title: 'Active Tasks', value: 24, color: '#cf1322' },
  { title: 'Completion Rate', value: 89, suffix: '%', color: '#1890ff' },
  { title: 'Performance', value: 95, suffix: '%', color: '#722ed1' },
])

const activities = reactive<Activity[]>([
  { id: 1, content: 'System maintenance completed', color: 'green' },
  { id: 2, content: 'New user registration', color: 'blue' },
  { id: 3, content: 'Task assigned to team', color: 'red' },
  { id: 4, content: 'Performance optimization', color: 'gray' },
])

const formState = reactive({
  taskName: '',
  priority: 'medium',
})

const initChart = () => {
  if (chartRef.value) {
    chart.value = echarts.init(chartRef.value)
    
    const option = {
      title: {
        text: 'Weekly Activity'
      },
      tooltip: {
        trigger: 'axis'
      },
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'line',
        smooth: true
      }]
    }
    
    chart.value.setOption(option)
  }
}

const handleSubmit = () => {
  message.success(`Task "${formState.taskName}" added with priority ${formState.priority}`)
  activities.unshift({
    id: activities.length + 1,
    content: `New task created: ${formState.taskName}`,
    color: 'blue'
  })
  formState.taskName = ''
  formState.priority = 'medium'
}

onMounted(() => {
  initChart()
  window.addEventListener('resize', () => {
    chart.value?.resize()
  })
})
</script>