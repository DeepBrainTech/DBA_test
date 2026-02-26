/**
 * 文件用途：Play Day 页面相关类型定义
 * 依赖关系：无
 * 注意事项：按业务模块拆分类型，保持与其他页面类型定义风格一致
 */

/**
 * Play Day 页面 Hero 区数据类型
 */
export interface PlayDayHeroData {
  /** 页面标签（如 🎨 Play Day） */
  badge: string;
  /** 主标题 */
  title: string;
  /** 副标题/描述文字 */
  subtitle: string;
}

/**
 * Play Day 简介区数据类型
 */
export interface PlayDayIntroData {
  /** 简介主标题 */
  title: string;
  /** 简介描述内容 */
  description: string;
}

/**
 * Play Day 日程信息
 */
export interface PlayDayScheduleData {
  /** 时间范围（如 9:00 AM - 3:30 PM） */
  timeRange: string;
  /** 日期列表，按年份分组 */
  dates: {
    /** 年份 */
    year: string;
    /** 该年份的日期列表 */
    days: string;
  }[];
}

/**
 * Play Day 地点信息
 */
export interface PlayDayLocationData {
  /** 地址列表 */
  addresses: string[];
  /** 二维码图片路径 */
  qrCodeImage: string;
  /** 二维码描述文字 */
  qrCodeText: string;
}

/**
 * Play Day 页面完整数据结构
 */
export interface PlayDayPageData {
  /** Hero 区数据 */
  hero: PlayDayHeroData;
  /** 简介区数据 */
  intro: PlayDayIntroData;
  /** 日程数据 */
  schedule: PlayDayScheduleData;
  /** 地点数据 */
  location: PlayDayLocationData;
  /** 注册按钮文字 */
  registerButtonText: string;
}
