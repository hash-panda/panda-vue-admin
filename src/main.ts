import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

// Import Ant Design Vue styles
import 'ant-design-vue/dist/antd.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')