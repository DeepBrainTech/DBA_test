/**
 * 文件用途：定义 Test Prep 页面相关数据类型
 * 依赖关系：由 data/test_prep.ts 提供数据，由 components/test_prep/* 与 app/test_prep/page.tsx 消费
 */

export interface TestPrepHeroFeature {
  emoji: string;
  label: string;
}

export interface TestPrepHeroData {
  title: string;
  subtitle: string;
  backgroundImage: string;
  scrollIcon: string;
  features: TestPrepHeroFeature[];
}

export interface SuccessStoryCard {
  title: string;
  titleSuffix?: string;
  scoreImage: string;
  studentInitial: string;
  studentName: string;
  grade: string;
}

export interface ScoreProgressStory {
  firstTestImage: string;
  secondTestImage: string;
  pointsGain: string;
  duration: string;
  quote: string;
}

export interface TestPrepCourseCardData {
  index: number;
  title: string;
  description: string;
  icon: string;
  tags: string[];
}

export interface GrowthStepCard {
  title: string;
  description: string;
  icon: string;
}

export interface ScoreGrowthSystemData {
  badgeIcon: string;
  badgeText: string;
  title: string;
  subtitle: string;
  steps: GrowthStepCard[];
}

export interface TestPrepPageData {
  hero: TestPrepHeroData;
  successStories: {
    badgeIcon: string;
    badgeText: string;
    title: string;
    stories: SuccessStoryCard[];
    progressStory: ScoreProgressStory;
  };
  courses: {
    badgeIcon: string;
    badgeText: string;
    title: string;
    subtitle: string;
    programs: TestPrepCourseCardData[];
  };
  scoreGrowthSystem: ScoreGrowthSystemData;
}
