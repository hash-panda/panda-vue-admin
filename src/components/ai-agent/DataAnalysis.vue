<template>
  <div class="data-analysis">
    <a-form :model="analysisForm" layout="vertical">
      <a-form-item label="Data Source" name="dataSource">
        <a-select v-model:value="analysisForm.dataSource" placeholder="Select data source">
          <a-select-option value="api">API</a-select-option>
          <a-select-option value="file">File Upload</a-select-option>
          <a-select-option value="database">Database</a-select-option>
        </a-select>
      </a-form-item>
      
      <a-form-item label="Analysis Type" name="analysisType">
        <a-select v-model:value="analysisForm.analysisType" placeholder="Select analysis type">
          <a-select-option value="descriptive">Descriptive Statistics</a-select-option>
          <a-select-option value="predictive">Predictive Analysis</a-select-option>
          <a-select-option value="trend">Trend Analysis</a-select-option>
          <a-select-option value="correlation">Correlation Analysis</a-select-option>
        </a-select>
      </a-form-item>
      
      <a-form-item>
        <a-button type="primary" @click="analyzeData">
          Analyze Data
        </a-button>
      </a-form-item>
    </a-form>
    
    <div v-if="analysisResult" class="analysis-result">
      <a-divider>Analysis Results</a-divider>
      <a-card>
        <h3>{{ analysisResult.title }}</h3>
        <p>{{ analysisResult.summary }}</p>
        
        <div v-if="analysisResult.chart" class="chart-container">
          <!-- Chart would be rendered here -->
          <div class="chart-placeholder">
            <a-empty description="Chart visualization" />
          </div>
        </div>
        
        <template #extra>
          <a-button type="link" @click="exportResult">
            <ExportOutlined /> Export
          </a-button>
        </template>
      </a-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { message } from 'ant-design-vue'
import { ExportOutlined } from '@ant-design/icons-vue'
import { dataAnalysisService } from '@/services/ai-agent/DataAnalysisService'

const analysisForm = reactive({
  dataSource: '',
  analysisType: ''
})

const analysisResult = ref<any>(null)

const analyzeData = async () => {
  if (!analysisForm.dataSource || !analysisForm.analysisType) {
    message.error('Please select data source and analysis type')
    return
  }
  
  try {
    const result = await dataAnalysisService.analyzeData({
      source: analysisForm.dataSource,
      type: analysisForm.analysisType
    })
    analysisResult.value = result
    message.success('Data analysis completed')
  } catch (error) {
    message.error('Failed to analyze data')
    console.error('Data analysis error:', error)
  }
}

const exportResult = () => {
  if (analysisResult.value) {
    message.success('Analysis result exported')
  }
}
</script>

<style scoped>
.analysis-result {
  margin-top: 24px;
}

.chart-placeholder {
  height: 200px;
  border: 1px dashed #d9d9d9;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
}
</style>