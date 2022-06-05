import { createApp } from 'vue'
import routes from './routes'
import App from './App.vue'

import '@/assets/scss/main.scss'

createApp(App).use(routes).mount('#app')
