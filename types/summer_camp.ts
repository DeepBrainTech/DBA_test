/**
 * 文件用途：定义 Summer Camp 页面的全部静态数据类型（与设计稿一致）
 * 依赖关系：由 data/summer_camp.ts 提供数据，并由 components/summer_camp/* 消费
 * 注意事项：字段与设计稿区块一一对应，文案与设计稿保持一致不翻译
 */

/** 英雄区特色亮点项（图标按顺序使用 public/summer_camp/hero/1.png–4.png） */
export interface SummerCampHeroFeature {
  /** 文案，与设计稿一致 */
  label: string;
}

/** 英雄区数据 */
export interface SummerCampHeroData {
  title: string;
  subtitle: string;
  backgroundImage: string;
  /** 四个特色亮点（Theory + Practice, University Exposure, Expert Mentorship, Portfolio Building） */
  features: SummerCampHeroFeature[];
}

/** 区块标签（如 Program / Schedule / Pricing） */
export interface SectionBadge {
  text: string;
}

/** Track A 单张能力卡片 */
export interface SummerCampTrackAFeature {
  title: string;
  description: string;
  /** 如 Methodology, Experience, Guidance, Outcome */
  tag: string;
}

/** 引用块 */
export interface SummerCampQuote {
  text: string;
  attribution: string;
}

/** 单个 Featured Project */
export interface SummerCampFeaturedProject {
  title: string;
  image: string;
  bullets: string[];
}

/** Learning Strategies 单张策略卡（Identify / Innovate / Prototype / Present） */
export interface LearningStrategyCard {
  /** 卡片标题 */
  title: string;
  /** 卡片描述 */
  description: string;
  /** 可选：图标路径。可为完整路径（如 /summer_camp/Learning_Strategies/identify.svg）或仅文件名（如 identify.svg），未填时按卡片顺序使用默认四张图 */
  icon?: string;
}

/** Learning Strategies 对比表一行（Feature / Track A / Track B） */
export interface LearningStrategiesComparisonRow {
  /** 左侧特征名，如 Target Grades */
  feature: string;
  /** Track A 对应内容 */
  trackA: string;
  /** Track B 对应内容 */
  trackB: string;
}

/** Learning Strategies 独立区块数据（引言、标题、四卡、对比表） */
export interface SummerCampLearningStrategiesData {
  /** 区块 badge 文案，如 Learning Strategies（不含 emoji） */
  title: string;
  /** 区块 badge 前的 emoji，如 ⚙️ */
  badgeIcon?: string;
  /** 顶部引言块 */
  introQuote: {
    text: string;
    attribution: string;
  };
  /** 主标题，如 Beyond Traditional Learning */
  heading: string;
  /** 副标题 */
  subtitle: string;
  /** 四个策略卡：Identify, Innovate, Prototype, Present */
  strategies: LearningStrategyCard[];
  /** 底部「量身定制」区块 */
  comparisonSection: {
    title: string;
    /** 表头：Feature, Track A, Track B */
    columnHeaders: { feature: string; trackA: string; trackB: string };
    rows: LearningStrategiesComparisonRow[];
  };
}

/** Track A: STEM Innovation 区块数据 */
export interface SummerCampTrackAData {
  heading: string;
  description: string;
  features: SummerCampTrackAFeature[];
  quote: SummerCampQuote;
  featuredProjects: {
    title: string;
    subtitle: string;
    projects: SummerCampFeaturedProject[];
  };
  /** 主按钮文案，如 Course Overview */
  primaryCtaLabel: string;
  /** 次按钮文案，如 Register Now */
  secondaryCtaLabel: string;
}

/** Track B 单张能力卡片 */
export interface SummerCampTrackBFeature {
  title: string;
  description: string;
}

/** Track B: Brain & Strategy Camp 区块数据 */
export interface SummerCampTrackBData {
  badge: SectionBadge;
  heading: string;
  description: string;
  features: SummerCampTrackBFeature[];
  quote: SummerCampQuote;
  ctaLabel: string;
}

/** 日程表单元格（课程名 + 可选 Lecture/Workshop + 一或两个标签，如 Online/Onsite） */
export interface ScheduleCell {
  courseName: string;
  /** Track A 可选：Lecture 或 Workshop，展示在课程名后并加粗 */
  sessionType?: 'Lecture' | 'Workshop';
  tag: string;
  /** 蓝色 #45B7D1 为 Online/年级等，粉色 #EF6B83 为 Onsite/Intermediate 等 */
  tagVariant: 'blue' | 'pink';
  /** 可选第二标签（如同一格内 Online + Onsite 并排） */
  tag2?: string;
  tag2Variant?: 'blue' | 'pink';
}

/** 日程表一行 */
export interface SummerCampScheduleRow {
  timeSlot: string;
  session1: ScheduleCell | ScheduleCell[];
  session2: ScheduleCell | ScheduleCell[];
  session3: ScheduleCell | ScheduleCell[];
}

/** 单张日程表（Track A 或 Track B） */
export interface SummerCampScheduleTable {
  title: string;
  /** 仅 Track B 有，如 "We offer online and onsite options for each session." */
  subtitle?: string;
  /** 表头：Date & Time, Jun 8 - Jun 19, Jun 22 - Jul 3, Jul 6 - Jul 17 */
  columnHeaders: [string, string, string, string];
  rows: SummerCampScheduleRow[];
}

/** 日程区数据 */
export interface SummerCampScheduleData {
  badge: SectionBadge;
  heading: string;
  description: string;
  trackATable: SummerCampScheduleTable;
  trackBTable: SummerCampScheduleTable;
}

/** 价格表单元格（纯数字或带折扣文案） */
export interface PricingCell {
  value: string;
  /** 是否为折扣标签样式（粉色背景） */
  isDiscount?: boolean;
}

/** Track A 价格表一行（图1：周计价，Enrollment Option | Onsite | Online） */
export interface SummerCampTrackAPricingRow {
  optionName: string;
  /** 可选副标题，如 "Morning OR Afternoon Project" */
  optionSubtitle?: string;
  onsite: string | PricingCell;
  online: string;
}

/** Multi-Session Savings 单条：折扣百分比 + 描述 + 节省金额 */
export interface SummerCampMultiSessionOffer {
  percent: string;
  description: string;
  savings: string;
}

/** Track B 价格表一行 */
export interface SummerCampTrackBPricingRow {
  optionName: string;
  onsite: PricingCell | string;
  online: string;
}

/** 限时优惠单张档位卡数据（Early Bird / Regular / Last minute） */
export interface LimitedTimeOfferCardData {
  /** 档位名称，如 Early Bird、Regular、Last minute */
  title: string;
  /** 截止日，如 Ends 3/15 */
  endsDate: string;
  /** 是否为“标准价”档位（只显示 Standard Pricing + 截止日） */
  isStandardPricing?: boolean;
  /** 折扣文案，如 5% OFF；isStandardPricing 时不传 */
  discountLabel?: string;
  /** 节省说明（Up to $xxx Savings）；isStandardPricing 时不传 */
  savings?: { prefix: string; amount: string; suffix: string };
}

/** 价格区数据 */
export interface SummerCampPricingData {
  badge: SectionBadge;
  heading: string;
  description: string;
  trackATitle: string;
  /** Track A 副标题，如 "Flexible Options for Every Family • Per Week • 2 Week Per Session" */
  trackASubtitle?: string;
  trackAHeaders: [string, string, string];
  trackARows: SummerCampTrackAPricingRow[];
  /** 如 "* Additional material fees may apply to specific project-based learning courses." */
  materialFootnote: string;
  /** Multi-Session Savings：标题 + 若干档位（5-10% OFF / 10-15% OFF 等） */
  multiSessionSavings?: {
    heading: string;
    offers: SummerCampMultiSessionOffer[];
  };
  trackBTitle: string;
  /** Track B 副标题，如 "Flexible Options for Every Family • Per Week • 2 Week Per Session" */
  trackBSubtitle?: string;
  trackBHeaders: [string, string, string];
  trackBRows: SummerCampTrackBPricingRow[];
  limitedTimeOffer: {
    title: string;
    description: string;
  };
  ctaLabel: string;
}

/** Book Free Trial 区块：「We ensure」单条（图标 emoji + 文案） */
export interface SummerCampBookFreeTrialEnsureItem {
  /** emoji，如 🧑‍🏫、📚、🔬、💼 */
  icon: string;
  /** 说明文案 */
  text: string;
}

/** Book Free Trial 区块：信任标签（如 Secure Information） */
export interface SummerCampBookFreeTrialTrustItem {
  /** emoji，如 🔒、⚡、💯 */
  icon: string;
  label: string;
}

/** Book Free Trial 区块：底部统计项 */
export interface SummerCampBookFreeTrialStat {
  value: string;
  label: string;
}

/** Book Free Trial 区块数据 */
export interface SummerCampBookFreeTrialData {
  /** 顶部徽标文案，如 Limited offer */
  badgeText: string;
  /** 主标题 */
  title: string;
  /** 副标题（预约咨询与早鸟优惠） */
  subtitle: string;
  /** 「We ensure」标题 */
  ensureTitle: string;
  /** 四项保障列表 */
  ensureItems: SummerCampBookFreeTrialEnsureItem[];
  /** 底部信任标签：Secure Information、Fast Response Time、Risk-free Guarantee */
  trustItems: SummerCampBookFreeTrialTrustItem[];
  /** 右侧卡片标题 */
  cardTitle: string;
  /** 右侧卡片副标题 */
  cardSubtitle: string;
  /** 主按钮文案，如 Book Free Trial */
  ctaLabel: string;
  /** 卡片底部三项统计 */
  stats: SummerCampBookFreeTrialStat[];
  /** 底部引用文案（AI 时代培养未来技能） */
  bottomQuote: string;
}

/** 页面聚合数据（与设计稿结构一致，无 Overview / Track 3 / FinalCta） */
export interface SummerCampPageData {
  hero: SummerCampHeroData;
  /** Learning Strategies 独立 section，位于 Intro 与 Track A 之间 */
  learningStrategies: SummerCampLearningStrategiesData;
  trackA: SummerCampTrackAData;
  trackB: SummerCampTrackBData;
  schedule: SummerCampScheduleData;
  pricing: SummerCampPricingData;
  /** Book Free Trial 预约咨询区块 */
  bookFreeTrial: SummerCampBookFreeTrialData;
}
