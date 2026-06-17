/**
 * 文件用途：Summer Camp 页面相关类型定义
 * 依赖关系：types/courses.ts（Book Free Trial 区块类型复用）
 * 注意事项：按业务模块拆分类型，保持与其他页面类型定义风格一致
 */

import type { CoursesBookFreeTrialData } from '@/types/courses';

/**
 * Hero 区特色亮点项
 */
export interface SummerCampHeroFeature {
  /** 亮点文案 */
  label: string;
}

/**
 * 页面 Hero 区数据类型
 */
export interface SummerCampHeroData {
  /** 主标题 */
  title: string;
  /** 副标题/描述文字 */
  subtitle: string;
  /** 背景图路径 */
  backgroundImage: string;
  /** 四个特色亮点 */
  features: SummerCampHeroFeature[];
  /** Hero 底部 CTA 文案 */
  ctaText: string;
  /** 底部滚动按钮目标区块 id */
  scrollTargetId: string;
  /** 底部滚动指示图标 */
  scrollIcon: string;
}

/**
 * Program Highlights 单张特色卡
 */
export interface SummerCampHighlightCard {
  /** 唯一标识 */
  id: string;
  /** 卡片标题 */
  title: string;
  /** 卡片描述 */
  description: string;
  /** 图标图片路径 */
  iconSrc: string;
}

/**
 * Program Highlights 区块数据
 */
export interface SummerCampHighlightsData {
  /** Badge 图标路径 */
  badgeIcon: string;
  /** Badge 文案 */
  badgeText: string;
  /** 主标题 */
  title: string;
  /** 副标题 */
  subtitle: string;
  /** 四张特色卡 */
  cards: SummerCampHighlightCard[];
}

/**
 * 全日项目单科课程
 */
export interface SummerCampProgramSubject {
  /** 唯一标识 */
  id: string;
  /** 科目名称 */
  name: string;
  /** 科目图标路径 */
  iconSrc: string;
  /** 能力亮点列表 */
  highlights: string[];
}

/**
 * Register Now 上方报名开放 + 微信社群面板
 */
export interface SummerCampRegistrationPanel {
  /** 面板标题，如 🚀 Registration Now Open! */
  title: string;
  /** 描述前半段 */
  descriptionPrefix: string;
  /** 描述中高亮片段，如 June 15th */
  descriptionHighlight: string;
  /** 描述后半段 */
  descriptionSuffix: string;
  /** 微信二维码图片路径 */
  wechatQrSrc: string;
  /** 二维码下方两行说明 */
  wechatCommunityLines: [string, string];
}

/**
 * Full-day Program 区块数据
 */
export interface SummerCampProgramData {
  /** Badge 图标路径 */
  badgeIcon: string;
  /** Badge 文案 */
  badgeText: string;
  /** 主标题 */
  title: string;
  /** 副标题 */
  subtitle: string;
  /** 五门核心课程 */
  subjects: SummerCampProgramSubject[];
  /** Register Now 上方报名开放面板 */
  registrationPanel: SummerCampRegistrationPanel;
  /** 注册按钮文字 */
  registerButtonText: string;
  /** 注册链接 */
  registerUrl: string;
}

/**
 * Our Advantage 单张优势卡
 */
export interface SummerCampAdvantageCard {
  /** 唯一标识 */
  id: string;
  /** 卡片标题 */
  title: string;
  /** 卡片描述 */
  description: string;
  /** 统计数字/短语 */
  stat: string;
  /** 统计说明 */
  statLabel: string;
  /** 图标图片路径 */
  iconSrc: string;
}

/**
 * Our Advantage 区块数据
 */
export interface SummerCampAdvantagesData {
  /** Badge 图标路径 */
  badgeIcon: string;
  /** Badge 文案 */
  badgeText: string;
  /** 主标题 */
  title: string;
  /** 优势卡片列表 */
  cards: SummerCampAdvantageCard[];
  /** 底部注册按钮文字 */
  registerButtonText: string;
  /** 注册链接 */
  registerUrl: string;
}

/**
 * 页面完整数据结构
 */
export interface SummerCampPageData {
  /** Hero 区数据 */
  hero: SummerCampHeroData;
  /** Program Highlights 区块 */
  highlights: SummerCampHighlightsData;
  /** Full-day Program 区块 */
  program: SummerCampProgramData;
  /** Our Advantage 区块 */
  advantages: SummerCampAdvantagesData;
  /** Limited offer / Book Free Trial 区块（与 Courses 页一致） */
  bookFreeTrial: CoursesBookFreeTrialData;
}
