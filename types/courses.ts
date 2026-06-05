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



/** 课程时间表区块数据 */

export interface CourseTimetableData {

  sectionTitle: string;

  tableTitle: string;

  scheduleRows: TimetableRow[];

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



/** Courses 页面聚合数据 */

export interface CoursesPageData {

  hero: CoursesHeroData;

  learningStrategies: CoursesLearningStrategiesData;

  timetable: CourseTimetableData;

  courseInformation: CourseInformationData;

  bookFreeTrial: CoursesBookFreeTrialData;

}

