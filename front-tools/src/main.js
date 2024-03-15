import { createApp } from 'vue'
import plugins from './plugins'
import './index.css'
import App from './App.vue'

createApp(App)
    .use(plugins)
    .mount('#app')
