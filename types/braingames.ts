/**
 * 文件用途：定义 Brain Games 页面相关的类型
 * 依赖关系：无
 * 注意事项：所有字段必须与数据源保持一致
 */

/** 英雄区特色亮点项（与 innovation_program Hero 一致，图标按顺序使用） */
export interface BraingamesHeroFeature {
    /** 文案 */
    label: string;
}

/** 英雄区数据（结构与 innovation_program Hero 一致） */
export interface BraingamesHeroData {
    title: string;
    subtitle: string;
    backgroundImage: string;
    /** 四个特色亮点 */
    features: BraingamesHeroFeature[];
}

/**
 * 特性卡片类型（课程区等仍用）
 */
export interface Feature {
    /** emoji图标 */
    icon: string;
    /** 标题 */
    title: string;
}


export interface PhilosophyCard {
    id: string;
    iconSrc: string; // e.g. "/braingames/icons/brain.svg"
    title: string;
    description: string;
}

export interface QuotePill {
    id: string;
    title: string;      // e.g. "Planning"
    description: string; // e.g. "Strategic foresight."
}

export interface ChessPhilosophyData {
    badgeText: string; // "Educational Value"
    heading: string;   // "Mental Gymnastics"
    subheading: string;
    cards: PhilosophyCard[];

    quoteHeading: string;
    quoteBody: string;
    quotePills: QuotePill[];

    footerLine1: string;
    footerLine2: string;
}

export interface CourseFeature {
    /** 图标（emoji 或 svg 对应） */
    icon: string;
    /** 特性标题 */
    title: string;
    /** 特性描述 */
    description: string;
}

export interface CourseCard {
  id: string;
  iconSrc: string;
  title: string;
  description: string;
}

/** 限时优惠区块（与 innovation_program Pricing 中 limitedTimeOffer 结构一致） */
export interface BraingamesLimitedTimeOffer {
  /** 标题，如 ⏱️ Limited Time Offer! */
  title: string;
  /** 描述正文，\n\n 分段，**text** 表示加粗 */
  description: string;
}

/** Pricing 区块数据（限时优惠与 CTA 与 innovation_program 一致） */
export interface BraingamesPricingData {
  limitedTimeOffer: BraingamesLimitedTimeOffer;
  /** 报名按钮文案 */
  ctaLabel: string;
}

/** Book Free Trial 区块：「We ensure」单条（与 innovation_program 一致） */
export interface BraingamesBookFreeEnsureItem {
  icon: string;
  text: string;
}

/** Book Free Trial 区块：信任标签（与 innovation_program 一致） */
export interface BraingamesBookFreeTrustItem {
  icon: string;
  label: string;
}

/** Book Free Trial 区块：底部统计项（与 innovation_program 一致） */
export interface BraingamesBookFreeStat {
  value: string;
  label: string;
}

/** Book Free Trial 区块数据（与 innovation_program 结构一致，无表单输入） */
export interface BraingamesBookFreeTrialData {
  badgeText: string;
  title: string;
  subtitle: string;
  ensureTitle: string;
  ensureItems: BraingamesBookFreeEnsureItem[];
  trustItems: BraingamesBookFreeTrustItem[];
  cardTitle: string;
  cardSubtitle: string;
  ctaLabel: string;
  stats: BraingamesBookFreeStat[];
  bottomQuote: string;
}

export interface Course {
    /** 唯一 id（用于 key） */
    id: string;
    /** 标签（如 Featured Program） */
    tag: string;
    /** 标签前图标路径（可选，与 Educational Value badge 一致时使用） */
    badgeIcon?: string;
    /** 课程标题 */
    title: string;
    /** 副标题 */
    subtitle: string;
    /** 特性列表 */
    cards: CourseCard[];
    /** CTA 文案 */
    ctaText: string;
    /** 二维码图片路径 */
    qrImage: string;

    ctaIcon?: string;          // "♟" or "⚫"（无 ctaIconSrc 时显示）
    /** CTA 标题前图标图片路径（可选，如棋子图） */
    ctaIconSrc?: string;
    ctaDescription?: string;   // the paragraph in the CTA panel
    /** Section 背景样式类名（可选，如 Go 区块用 #FBF9F4） */
    sectionBgClassName?: string;
    /** 四张课程卡背景样式类名（可选，如 Go 区块卡片用白色） */
    cardBgClassName?: string;
    /** CTA 面板（Start Your Journey + WeChat）背景样式类名（可选） */
    ctaPanelBgClassName?: string;
}
