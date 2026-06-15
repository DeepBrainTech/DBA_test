/**
 * 文件用途：Play Day / Summer Camp 页面相关类型定义
 * 依赖关系：无
 * 注意事项：按业务模块拆分类型，保持与其他页面类型定义风格一致
 */

/**
 * 页面 Hero 区数据类型
 */
export interface PlayDayHeroData {
  /** 页面标签（如 ☀️ Summer Camp） */
  badge: string;
  /** 主标题 */
  title: string;
  /** 副标题/描述文字 */
  subtitle: string;
}

/**
 * 简介区数据类型
 */
export interface PlayDayIntroData {
  /** 简介主标题 */
  title: string;
  /** 简介描述内容 */
  description: string;
}

/**
 * 单日课程科目
 */
export interface PlayDaySubject {
  /** 科目名称 */
  name: string;
  /** 能力亮点列表 */
  highlights: string[];
}

/**
 * 日程信息
 */
export interface PlayDayScheduleData {
  /** 时间范围或项目周期说明 */
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
 * 地点与联系方式
 */
export interface PlayDayLocationData {
  /** 地址列表 */
  addresses: string[];
  /** 电话 */
  phone?: string;
  /** 邮箱 */
  email?: string;
  /** 网站 */
  website?: string;
  /** 二维码图片路径 */
  qrCodeImage: string;
  /** 二维码描述文字 */
  qrCodeText: string;
}

/**
 * 页面完整数据结构
 */
export interface PlayDayPageData {
  /** Hero 区数据 */
  hero: PlayDayHeroData;
  /** 简介区数据 */
  intro: PlayDayIntroData;
  /** 每日五门核心课程 */
  subjects: PlayDaySubject[];
  /** 家长选择理由 */
  whyChoose: {
    title: string;
    items: string[];
  };
  /** 日程数据 */
  schedule: PlayDayScheduleData;
  /** 报名优惠与提醒 */
  offers: string[];
  /** 地点与联系信息 */
  location: PlayDayLocationData;
  /** 注册按钮文字 */
  registerButtonText: string;
  /** 注册链接（与传单二维码一致） */
  registerUrl: string;
}
