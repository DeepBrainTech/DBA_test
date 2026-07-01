/**
 * 文件用途：课程标题搜索（课表、课程信息共用，部分匹配）
 */

/** 课表单元格课程名首行（title-meta 布局时为首行标题） */
export function getTimetableCourseTitle(name: string): string {
  return name.split('\n')[0];
}

/** 标题是否包含搜索词（不区分大小写的子串匹配） */
export function matchesCourseTitleSearch(title: string, query: string): boolean {
  const trimmed = query.trim();
  if (trimmed.length === 0) return true;
  return title.toLowerCase().includes(trimmed.toLowerCase());
}

/** 课表课程名搜索 */
export function matchesTimetableCourseSearch(courseName: string, query: string): boolean {
  return matchesCourseTitleSearch(getTimetableCourseTitle(courseName), query);
}
