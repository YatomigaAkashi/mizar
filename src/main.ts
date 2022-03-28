import { createApp } from 'vue'
import App from './App.vue'
import Router from './router'
import { createPinia } from 'pinia'
import './assets/tailwind.css'
import { use } from "echarts/core";
import { CanvasRenderer } from 'echarts/renderers'
import { BarChart } from 'echarts/charts'
import { GridComponent, TooltipComponent } from 'echarts/components'

use([
  CanvasRenderer,
  BarChart,
  GridComponent,
  TooltipComponent
])

createApp(App)
    .use(Router)
    .use(createPinia())
    .mount('#app')
