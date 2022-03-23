import { createApp } from 'vue'
import App from './App.vue'
import Router from './router'
import { createPinia } from 'pinia'
import './assets/tailwind.css'
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'

createApp(App)
    .use(Router)
    .use(createPinia())
//    .use(ElementPlus)
    .mount('#app')
