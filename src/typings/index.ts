export enum Status {
  Not,  // 不是
  Is, // 时
}

export enum State {
  Normal,  // 正常
  Warning, // 警告
  Bad,  // 故障
}

export enum GroundStationStatus {
  Good = 1,  // 良好
  Bad = 2,  // 故障
  Undefined = 3,  // 未连通
}

export enum TrackType {
  High,
  Middle,
  Low,
}

export enum SignalType {
  Communication,
  Measurement,
  Radar,
  SAR,
  Unknown,
}

export enum ModulationType {
  BPSK,
  SingleCarrier,
}

// 地面站
export interface GroundStation {
  station_code: string
  station_name: string
  location: string
  status: GroundStationStatus
  trans_status: Status  // 0 未传输，1 正在传输中
}

// 观测目标
export interface SpaceTarget {
  target_code: string
  is_fouces: Status // 0 不是，1 是
  last_observe_time: string
}

// 观测目标基本数据
export interface SpaceTargetBase {
  target_code: string
  tle_info: string
  track_type: TrackType
  track_paras: string
  observe_data: string
  observe_start_time: string
  continue_time: number
  station_code: string
  location: string
  antenna_azimuth: string
  azimuth_pzh: string
  antenna_fyj: string
  fyj_pzh: string
  rf_info: string
  collect_info: string
  signal_file: string
  reserve_item1: string
  reserve_item2: string
}

// 观测目标信号基本参数
export interface SpaceTargetSignal {
  target_code: string
  observe_data: string
  observe_start_time: string
  station_code: string
  signal_channel: number
  signal_type: SignalType
  modulation_mode: ModulationType
  Carrier_frequency: string
  code_rate: string
  snr: string
  reserve_item: string
  spectrum1: string
  Spectrum2: string
  planisphere: string
  base_signal_graph: string
}

// 操作日志
export interface OperationResponse {
  time_id: string
  user_code: string
  authority_code: string
  result: number
  state: State
  warn_text: string
}

// 设备信息
export interface EquipmentInfo {
  memory: number  // 以GB为单位
  disk: number  // 以GB为单位
}

// 工作状态
export interface WorkStatus {
  time_id: number  // 时间戳 yyyy-MM-dd HH:mm:ss
  cpu_utilization: number  // Cpu使用率，存储放大1000倍的值,真实值保留1位小数,例：xx.x%
  host_memory_usage: number  // 主机内存使用率，存储放大1000倍的值,真实值保留1位小数,例：xx.x%
  disk_usage: number  // 磁盘总的使用率。实际中应该是用来存放数据的某个盘符的使用率，无需监控所有盘符的使用率
  state: State  // 系统状态，0：正常，1：预警，2-故障
  warn_text: string  // 告警具体内容
}

// 预警信息
export interface WarningInfo {
  warn_code: string
  warn_data: string
  warn_data_type: string
  warn_condition: string
  warn_type: string
}
