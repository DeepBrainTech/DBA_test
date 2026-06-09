/**
 * 文件用途：Courses 页面科目分类共享配置（课表图例、课程信息等复用）
 * 依赖关系：被 components/courses/* 消费
 */

export const COURSE_CATEGORY_CONFIG = {
  Physics: {
    label: 'Physics',
    dotColor: '#EF6B83',
    borderColor: '#EF6B83',
    activeBg: 'rgba(239, 107, 131, 0.1)',
  },
  Math: {
    label: 'Math',
    dotColor: '#4ADE80',
    borderColor: '#4ADE80',
    activeBg: 'rgba(74, 222, 128, 0.1)',
  },
  Chess: {
    label: 'Chess',
    dotColor: '#FDBA74',
    borderColor: '#FDBA74',
    activeBg: 'rgba(253, 186, 116, 0.12)',
  },
  Language: {
    label: 'Language',
    dotColor: '#A78BFA',
    borderColor: '#A78BFA',
    activeBg: 'rgba(167, 139, 250, 0.1)',
  },
  AI: {
    label: 'AI',
    dotColor: '#60A5FA',
    borderColor: '#60A5FA',
    activeBg: 'rgba(96, 165, 250, 0.1)',
  },
} as const;

export type CourseCategory = keyof typeof COURSE_CATEGORY_CONFIG;

export const COURSE_FILTER_CATEGORIES: CourseCategory[] = [
  'Physics',
  'Math',
  'Chess',
  'Language',
  'AI',
];

export const CONTEST_FILTER_CONFIG = {
  label: '* Contest',
  borderColor: '#7C8B99',
  activeBg: 'rgba(124, 139, 153, 0.12)',
} as const;

export const ALL_FILTER_CONFIG = {
  label: 'All',
  borderColor: '#599CED',
  activeBg: 'rgba(89, 156, 237, 0.1)',
} as const;

export type CourseLegendFilter = CourseCategory | 'Contest';

export type CourseInformationFilter = CourseLegendFilter | 'All';

export function isContestCourse(name: string): boolean {
  return name.includes('*');
}

export function isContestCourseInfo(name: string): boolean {
  if (name.includes('*')) return true;
  return /\bContest\b/i.test(name) || /\bBowl\b/i.test(name);
}

export function normalizeCourseInfoCategory(cat: string): CourseCategory | null {
  if (cat === 'Languages') return 'Language';
  if (cat in COURSE_CATEGORY_CONFIG) return cat as CourseCategory;
  return null;
}

export function courseMatchesInformationFilter(
  course: { cat: string; name: string },
  filter: CourseInformationFilter,
): boolean {
  if (filter === 'All') return true;
  if (filter === 'Contest') return isContestCourseInfo(course.name);
  const normalized = normalizeCourseInfoCategory(course.cat);
  return normalized === filter;
}

export function getCourseCardId(course: { cat: string; name: string }): string {
  return `${course.cat}::${course.name}`;
}
