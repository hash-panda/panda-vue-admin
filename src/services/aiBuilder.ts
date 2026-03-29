export interface PromptForm {
  description: string
  pageType: string
}

export interface GeneratedPage {
  component: any
  props: any
  template: string
}

const generateDashboardPage = (description: string): GeneratedPage => {
  const template = `
    <div class="dashboard-page">
      <h2>Generated Dashboard</h2>
      <p>Based on: ${description}</p>
      <a-row :gutter="16">
        <a-col :span="8">
          <a-card title="Metric 1">
            <p>Value: 1,234</p>
          </a-card>
        </a-col>
        <a-col :span="8">
          <a-card title="Metric 2">
            <p>Value: 5,678</p>
          </a-card>
        </a-col>
        <a-col :span="8">
          <a-card title="Metric 3">
            <p>Value: 9,012</p>
          </a-card>
        </a-col>
      </a-row>
    </div>
  `
  
  return {
    component: {
      template,
      setup() {
        return {}
      }
    },
    props: {},
    template
  }
}

const generateFormPage = (description: string): GeneratedPage => {
  const template = `
    <div class="form-page">
      <h2>Generated Form</h2>
      <p>Based on: ${description}</p>
      <a-form layout="vertical">
        <a-form-item label="Name">
          <a-input placeholder="Enter your name" />
        </a-form-item>
        <a-form-item label="Email">
          <a-input type="email" placeholder="Enter your email" />
        </a-form-item>
        <a-form-item label="Message">
          <a-textarea :rows="4" placeholder="Enter your message" />
        </a-form-item>
        <a-form-item>
          <a-button type="primary">Submit</a-button>
        </a-form-item>
      </a-form>
    </div>
  `
  
  return {
    component: {
      template,
      setup() {
        return {}
      }
    },
    props: {},
    template
  }
}

const generateTablePage = (description: string): GeneratedPage => {
  const template = `
    <div class="table-page">
      <h2>Generated Table</h2>
      <p>Based on: ${description}</p>
      <a-table :columns="columns" :data-source="data" :pagination="false" />
    </div>
  `
  
  return {
    component: {
      template,
      setup() {
        const columns = [
          { title: 'Name', dataIndex: 'name', key: 'name' },
          { title: 'Age', dataIndex: 'age', key: 'age' },
          { title: 'Address', dataIndex: 'address', key: 'address' }
        ]
        const data = [
          { key: '1', name: 'John Brown', age: 32, address: 'New York No. 1 Lake Park' },
          { key: '2', name: 'Jim Green', age: 42, address: 'London No. 1 Lake Park' },
          { key: '3', name: 'Joe Black', age: 32, address: 'Sidney No. 1 Lake Park' }
        ]
        
        return { columns, data }
      }
    },
    props: {},
    template
  }
}

const generateCustomPage = (description: string): GeneratedPage => {
  const template = `
    <div class="custom-page">
      <h2>Custom Page</h2>
      <p>Based on: ${description}</p>
      <p>This is a custom page generated based on your description.</p>
      <a-alert message="This is a custom component" type="info" />
    </div>
  `
  
  return {
    component: {
      template,
      setup() {
        return {}
      }
    },
    props: {},
    template
  }
}

export const generatePageFromPrompt = async (prompt: PromptForm): Promise<GeneratedPage> => {
  // This is where the AI magic happens
  // For now, we'll create mock components based on the prompt
  
  switch (prompt.pageType) {
    case 'dashboard':
      return generateDashboardPage(prompt.description)
    case 'form':
      return generateFormPage(prompt.description)
    case 'table':
      return generateTablePage(prompt.description)
    case 'custom':
      return generateCustomPage(prompt.description)
    default:
      throw new Error('Unknown page type')
  }
}