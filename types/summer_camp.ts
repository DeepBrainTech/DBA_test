/**
 * 文件用途：Summer Camp 页面相关类型定义
 * 依赖关系：无
 * 注意事项：按业务模块拆分类型，保持与其他页面类型定义风格一致
 */

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
  /** 注册按钮文字 */
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
}
