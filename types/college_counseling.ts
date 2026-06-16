/**
 * 文件用途：定义升学辅导页面相关的类型
 * 依赖关系：无
 * 注意事项：所有字段必须与数据源保持一致
 */

/**
 * 特性卡片类型
 */
export interface Feature {
  /** emoji图标 */
  icon: string;
  /** 标题 */
  title: string;
}

/**
 * 统计卡片类型（Stats 区块）
 */
export interface Stat {
  /** 数值展示，如 7X、98% */
  value: string;
  /** 标题，如 Acceptance Rate */
  title: string;
  /** 描述文案 */
  description: string;
}

/**
 * 挑战类型
 */
export interface Challenge {
  /** 图标路径 */
  icon: string;
  /** 图标背景色 */
  iconBg: string;
  /** 图标颜色 */
  iconColor: string;
  /** 挑战标题 */
  title: string;
  /** 挑战描述 */
  description: string;
  /** 挑战项目列表 */
  items: string[];
}

/**
 * 服务步骤类型
 */
export interface ServiceStep {
  /** 步骤编号 */
  step: string;
  /** emoji图标 */
  icon: string;
  /** 步骤标题 */
  title: string;
  /** 持续时间 */
  duration: string;
  /** 步骤描述 */
  description: string;
  /** 主题颜色 */
  color: string;
  /** 背景颜色 */
  bgColor: string;
  /** 显示位置（left/right） */
  side: 'left' | 'right';
  /** 步骤项目列表 */
  items: string[];
}

/**
 * 优势卡片类型（升学辅导页面）
 */
export interface CollegeCounselingAdvantage {
  /** emoji图标 */
  icon: string;
  /** 标题 */
  title: string;
  /** 描述 */
  description: string;
  /** 特性标签列表 */
  features: string[];
}

