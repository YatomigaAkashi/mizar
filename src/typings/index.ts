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
  Unknown = 3,  // 未连通
}

export enum TrackType {
  High,
  Middle,
  Low,
}

export enum WarnType {
  waiting,
  review,
  report,
  remove
}

// 地面站
export interface GroundStation {
  station_code: string  // 地面站编码
  station_name: string  // 地面站名称
  location: string  // 地面站坐标，经纬度
  status: GroundStationStatus  // 地面站状态：1-良好、2-故障、3-未联通
  trans_status: Status  // 0 未传输，1 正在传输中
}

export interface SpaceTarget {
  target_code: string
  is_fouces: Status // 0 不是，1 是
  track_type: TrackType  // 轨道类型,高、中、低轨
  last_observe_time: string
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
  warn_code: string  // 预警编码
  warn_data: string  // 警告值
  warn_data_type: WarnType  // 警告值类型
  warn_condition: string  // 警告条件阈值
  warn_type: 1 | 2  // 出发警告类型，1-出情；2-新目标
}
