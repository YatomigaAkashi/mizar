import { use } from "echarts/core";
import { CanvasRenderer } from 'echarts/renderers'
import { LineChart, BarChart, GaugeChart } from 'echarts/charts'
import { GridComponent } from 'echarts/components'
import { UniversalTransition } from 'echarts/features'
import 'echarts-gl'
import './registerMap'  // 注册地图
import './texture'  // 注册纹理

use([
  CanvasRenderer,
  LineChart,
  BarChart,
  GaugeChart,
  GridComponent,
  UniversalTransition
])
