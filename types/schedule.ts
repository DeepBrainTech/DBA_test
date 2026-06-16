/**
 * 文件用途：Schedule 页面类型定义
 * 依赖关系：依赖 types/courses 中的课表类型
 */

import type { CourseTimetableData } from '@/types/courses';

/** Schedule 页面数据结构 */

export interface SchedulePageData {

  heroTitle: string;

  ongoingTimetable: CourseTimetableData;

  summerTimetable: CourseTimetableData;

}
