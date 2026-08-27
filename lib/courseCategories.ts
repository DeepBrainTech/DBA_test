/**
 * 文件用途：Courses 页面科目分类共享配置（课表图例、课程信息等复用）
 * 依赖关系：被 components/courses/* 消费
 */

export const COURSE_CATEGORY_CONFIG = {
  Science: {
    label: 'Science',
    dotColor: '#EF6B83',
    borderColor: '#EF6B83',
    activeBg: 'rgba(239, 107, 131, 0.1)',
  },
  Math: {
    label: 'Math',
    dotColor: '#7EC97E',
    borderColor: '#7EC97E',
    activeBg: 'rgba(126, 201, 126, 0.1)',
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
  ProgrammingAI: {
    label: 'Programming & AI',
    dotColor: '#60A5FA',
    borderColor: '#60A5FA',
    activeBg: 'rgba(96, 165, 250, 0.1)',
  },
} as const;

export type CourseCategory = keyof typeof COURSE_CATEGORY_CONFIG;

/** 带 * 的特殊筛选（与科目色点并列） */
export type CourseSpecialTag = 'Contest' | 'StandardTest';

export const COURSE_FILTER_CATEGORIES: CourseCategory[] = [
  'Science',
  'Math',
  'Chess',
  'Language',
  'ProgrammingAI',
];

export const CONTEST_FILTER_CONFIG = {
  label: '* Contest',
  borderColor: '#7C8B99',
  activeBg: 'rgba(124, 139, 153, 0.12)',
} as const;

export const STANDARD_TEST_FILTER_CONFIG = {
  label: '* Standard Test',
  borderColor: '#7C8B99',
  activeBg: 'rgba(124, 139, 153, 0.12)',
} as const;

export const ALL_FILTER_CONFIG = {
  label: 'All',
  borderColor: '#599CED',
  activeBg: 'rgba(89, 156, 237, 0.1)',
} as const;

/** 课表 Format 筛选 */
export type CourseFormatFilter = 'Hybrid' | 'InPersonOnly' | 'OnlineOnly';

export const COURSE_FORMAT_CONFIG = {
  Hybrid: {
    label: 'Hybrid',
    borderColor: '#599CED',
    activeBg: 'rgba(89, 156, 237, 0.1)',
  },
  InPersonOnly: {
    label: 'In-Person Only',
    borderColor: '#7C8B99',
    activeBg: 'rgba(124, 139, 153, 0.12)',
  },
  OnlineOnly: {
    label: 'Online Only',
    borderColor: '#7C8B99',
    activeBg: 'rgba(124, 139, 153, 0.12)',
  },
} as const;

export const COURSE_FORMAT_FILTERS: CourseFormatFilter[] = [
  'Hybrid',
  'InPersonOnly',
  'OnlineOnly',
];

/** 课表三行筛选状态（行内单选，行间可组合） */
export type TimetableSubjectFilter = 'All' | CourseCategory;
export type TimetableTypeFilter = 'All' | CourseSpecialTag;
export type TimetableFormatFilter = 'All' | CourseFormatFilter;

export interface TimetableTripleFilters {
  subject: TimetableSubjectFilter;
  type: TimetableTypeFilter;
  format: TimetableFormatFilter;
}

export const DEFAULT_TIMETABLE_TRIPLE_FILTERS: TimetableTripleFilters = {
  subject: 'All',
  type: 'All',
  format: 'All',
};

export function getCourseFormat(
  course: { format?: CourseFormatFilter },
): CourseFormatFilter {
  return course.format ?? 'Hybrid';
}

export function courseMatchesTimetableTripleFilters(
  course: {
    name: string;
    cat: string;
    tags?: CourseSpecialTag[];
    format?: CourseFormatFilter;
  },
  filters: TimetableTripleFilters,
): boolean {
  if (filters.subject !== 'All' && course.cat !== filters.subject) return false;

  if (filters.type === 'Contest' && !isContestCourse(course.name, course.tags)) {
    return false;
  }
  if (
    filters.type === 'StandardTest' &&
    !isStandardTestCourse(course.name, course.tags)
  ) {
    return false;
  }

  if (filters.format !== 'All' && getCourseFormat(course) !== filters.format) {
    return false;
  }

  return true;
}

export type CourseLegendFilter = CourseCategory | CourseSpecialTag;

export type CourseInformationFilter = CourseLegendFilter | 'All';

export function isContestCourse(name: string, tags?: CourseSpecialTag[]): boolean {
  if (tags?.includes('Contest')) return true;
  return name.includes('*');
}

export function isStandardTestCourse(name: string, tags?: CourseSpecialTag[]): boolean {
  if (tags?.includes('StandardTest')) return true;
  return false;
}

export function isContestCourseInfo(
  course: { name: string; tags?: CourseSpecialTag[] },
): boolean {
  if (course.tags?.includes('Contest')) return true;
  if (course.name.includes('*')) return true;
  return /\bContest\b/i.test(course.name) || /\bBowl\b/i.test(course.name);
}

export function isStandardTestCourseInfo(
  course: { name: string; tags?: CourseSpecialTag[] },
): boolean {
  return course.tags?.includes('StandardTest') ?? false;
}

export function normalizeCourseInfoCategory(cat: string): CourseCategory | null {
  if (cat === 'Languages' || cat === 'Language') return 'Language';
  if (cat === 'Physics' || cat === 'Science') return 'Science';
  if (cat === 'AI' || cat === 'ProgrammingAI') return 'ProgrammingAI';
  if (cat in COURSE_CATEGORY_CONFIG) return cat as CourseCategory;
  return null;
}

export function courseMatchesInformationFilter(
  course: { cat: string; name: string; tags?: CourseSpecialTag[] },
  filter: CourseInformationFilter,
): boolean {
  if (filter === 'All') return true;
  if (filter === 'Contest') return isContestCourseInfo(course);
  if (filter === 'StandardTest') return isStandardTestCourseInfo(course);
  const normalized = normalizeCourseInfoCategory(course.cat);
  return normalized === filter;
}

export function getCourseCardId(course: { cat: string; name: string }): string {
  return `${course.cat}::${course.name}`;
}
