import { createApp } from 'vue'
import App from './App.vue'
import Router from './router'
import { createPinia } from 'pinia'
import './assets/tailwind.css'
import './utils/echarts'


createApp(App)
    .use(Router)
    .use(createPinia())
    .mount('#app')
