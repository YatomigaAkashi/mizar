import * as echarts from 'echarts/core';
import {
  // 系列类型的定义后缀都为 SeriesOption
  LineSeriesOption,
  BarSeriesOption,
  GaugeSeriesOption
} from 'echarts/charts'
import {
  GridComponentOption,
  // 数据集组件
  DatasetComponentOption,
} from 'echarts/components';

// 通过 ComposeOption 来组合出一个只有必须组件和图表的 Option 类型
export type ECOption = echarts.ComposeOption<
  | LineSeriesOption
  | BarSeriesOption
  | GridComponentOption
  | DatasetComponentOption
  | GaugeSeriesOption
  >;
