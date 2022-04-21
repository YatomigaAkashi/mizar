import { use } from "echarts/core";
import { CanvasRenderer } from 'echarts/renderers'
import { LineChart, BarChart, GaugeChart } from 'echarts/charts'
import { GridComponent } from 'echarts/components'
import { UniversalTransition } from 'echarts/features';

use([
  CanvasRenderer,
  LineChart,
  BarChart,
  GaugeChart,
  GridComponent,
  UniversalTransition
])
