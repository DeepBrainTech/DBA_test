/**

 * 文件用途：定义 Courses 页面相关数据类型

 * 依赖关系：由 data/courses.ts 提供数据，由 components/courses/* 与 app/courses/page.tsx 消费

 */



/** Courses 英雄区特色亮点项 */

export interface CoursesHeroFeature {

  label: string;

}



/** Courses 英雄区数据 */

export interface CoursesHeroData {

  title: string;

  subtitle: string;

  backgroundImage: string;

  features: CoursesHeroFeature[];

}



/** Learning Strategies 单张策略卡 */

export interface CoursesLearningStrategyCard {

  title: string;

  description: string;

  /** 可为完整路径或仅文件名，未填时按 index 回退默认四张图 */

  icon?: string;

}



/** Learning Strategies 对比表一行 */

export interface CoursesLearningStrategiesComparisonRow {

  feature: string;

  trackA: string;

  trackB: string;

}



/** Explore Programs 单张项目卡 */

export interface ProgramCardData {

  index: number;

  title: string;

  description: string;

  icon: string;

  tags: string[];

}



/** Explore Programs 介绍区块数据 */

export interface ExploreProgramsData {

  badgeIcon: string;

  badgeText: string;

  title: string;

  subtitle: string;

  programs: ProgramCardData[];

}



/** Courses Learning Strategies 区块数据 */

export interface CoursesLearningStrategiesData {

  title: string;

  badgeIcon?: string;

  introQuote: {

    text: string;

    attribution: string;

  };

  heading: string;

  subtitle: string;

  strategies: CoursesLearningStrategyCard[];

  comparisonSection: {

    title: string;

    columnHeaders: { feature: string; trackA: string; trackB: string };

    rows: CoursesLearningStrategiesComparisonRow[];

  };

}



/** Book Free Trial：「We ensure」单条 */

export interface CoursesBookFreeTrialEnsureItem {

  icon: string;

  text: string;

}



/** Book Free Trial：信任标签 */

export interface CoursesBookFreeTrialTrustItem {

  icon: string;

  label: string;

}



/** Book Free Trial：底部统计项 */

export interface CoursesBookFreeTrialStat {

  value: string;

  label: string;

}



/** Courses Book Free Trial 区块数据 */

export interface CoursesBookFreeTrialData {

  badgeText: string;

  title: string;

  subtitle: string;

  ensureTitle: string;

  ensureItems: CoursesBookFreeTrialEnsureItem[];

  trustItems: CoursesBookFreeTrialTrustItem[];

  cardTitle: string;

  cardSubtitle: string;

  ctaLabel: string;

  /** CTA 按钮跳转链接 */
  ctaUrl: string;

  stats: CoursesBookFreeTrialStat[];

  bottomQuote: string;

}



/** 课程时间表分类 */

export type TimetableCategory = 'Physics' | 'Math' | 'Chess' | 'Language' | 'AI';



/** 课程时间表单项 */

export interface TimetableCourse {

  name: string;

  cat: TimetableCategory;

}



/** 课程时间表单行 */

export interface TimetableRow {

  time: string;

  days: Record<string, TimetableCourse[]>;

}



/** 课表区块徽章配置（Schedule 页使用） */

export interface CourseTimetableBadge {

  label: string;

  /** 徽章图标图片路径 */

  iconSrc?: string;

  /** 无图片时的 emoji 回退 */

  icon?: string;

  className?: string;

}



/** 课程时间表区块数据 */

export interface CourseTimetableData {

  sectionTitle: string;

  tableTitle?: string;

  scheduleRows: TimetableRow[];

  /** Schedule 页徽章，未设置时使用 Courses 默认样式 */

  badge?: CourseTimetableBadge;

  /** 区块标题下方说明文案 */

  description?: string;

  /** 说明文案中的链接（如指向 Courses 页） */

  descriptionLink?: { label: string; href: string };

  /** 链接后的补充说明（如线上线下选项） */

  descriptionSuffix?: string;

  /** 外层区块背景类名 */

  sectionClassName?: string;

  /** 课表卡片样式：elevated 为 Courses 默认白卡片 */

  cardVariant?: 'elevated' | 'flat' | 'white';

  /**
   * 课程名多行排版：title-meta 首行课程名、后续行老师/年级用较轻样式；
   * uniform 所有行统一样式（用于课程名换行）
   */
  courseNameLayout?: 'title-meta' | 'uniform';

  /** 表格行最小高度缩放（默认 1，如 1.1 表示加高 10%） */
  rowMinHeightScale?: number;

}



/** 课程信息分类 */

export type CourseInfoCategory = 'All' | 'Physics' | 'Math' | 'Chess' | 'Languages' | 'AI';



/** 课程信息单项 */

export interface CourseInfoItem {

  cat: Exclude<CourseInfoCategory, 'All'>;

  name: string;

  desc: string[];

}



/** 课程信息区块数据 */

export interface CourseInformationData {

  sectionTitle: string;

  categories: CourseInfoCategory[];

  courses: CourseInfoItem[];

}



/** Courses Pricing 价格表一行 */

export interface CoursesPricingRow {

  enrollmentOption: string;

  tuitions: string[];

}



/** Courses Pricing 折扣项 */

export interface CoursesPricingDiscount {

  label: string;

  discount: string;

}



/** Courses Pricing 区块数据 */

export interface CoursesPricingData {

  badgeIcon: string;

  badgeText: string;

  title: string;

  tableHeaders: { enrollmentOption: string; tuition: string };

  rows: CoursesPricingRow[];

  discountsTitle: string;

  discounts: CoursesPricingDiscount[];

  ctaLabel: string;

  ctaUrl: string;

}



/** Courses 页面聚合数据 */

export interface CoursesPageData {

  hero: CoursesHeroData;

  explorePrograms: ExploreProgramsData;

  courseInformation: CourseInformationData;

  pricing: CoursesPricingData;

  bookFreeTrial: CoursesBookFreeTrialData;

}

