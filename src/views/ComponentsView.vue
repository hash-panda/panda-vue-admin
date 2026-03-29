<template>
  <div class="components">
    <a-card>
      <h1>组件库</h1>
      <p>这里展示了由 AI Agent 生成的组件</p>
    </a-card>
    
    <a-row :gutter="16" style="margin-top: 16px;">
      <a-col :span="12">
        <a-card title="表单组件">
          <a-form layout="vertical">
            <a-form-item label="用户名">
              <a-input placeholder="请输入用户名" />
            </a-form-item>
            <a-form-item label="邮箱">
              <a-input placeholder="请输入邮箱" />
            </a-form-item>
            <a-form-item>
              <a-button type="primary">提交</a-button>
            </a-form-item>
          </a-form>
        </a-card>
      </a-col>
      <a-col :span="12">
        <a-card title="数据表格">
          <a-table :columns="columns" :data-source="data" size="small" />
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script setup lang="ts">
const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age'
  },
  {
    title: '地址',
    dataIndex: 'address',
    key: 'address'
  }
]

const data = [
  {
    key: '1',
    name: '张三',
    age: 32,
    address: '北京市朝阳区'
  },
  {
    key: '2',
    name: '李四',
    age: 42,
    address: '上海市浦东新区'
  },
  {
    key: '3',
    name: '王五',
    age: 28,
    address: '广州市天河区'
  }
]
</script>

<style scoped>
.components {
  max-width: 1200px;
  margin: 0 auto;
}
</style>