import * as echarts from 'echarts'
import { worldMap } from "@/assets/map/world"
import { chinaMap } from "@/assets/map/china"

echarts.registerMap("world", worldMap)
echarts.registerMap("china", chinaMap)
