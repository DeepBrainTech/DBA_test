/**
 * 文件用途：Schedule 页面类型定义
 * 依赖关系：依赖 types/courses 中的课表类型
 */

import type { CourseTimetableData } from '@/types/courses';

/** Schedule 页面数据结构 */

export interface SchedulePageData {

  heroTitle: string;

  /** 旧课表 A（保留） */
  ongoingTimetable: CourseTimetableData;

  /** 暑期线下课表（保留，页面暂不渲染） */
  summerTimetable: CourseTimetableData;

  /** 暑期 Online 课表（保留，页面暂不渲染） */
  onlineTimetable: CourseTimetableData;

  /** 当前秋季合并课表 */
  fallTimetable: CourseTimetableData;

  /** 旧线下分表（保留） */
  inPersonTimetable: CourseTimetableData;

  /** 旧 Online 分表（保留） */
  fallOnlineTimetable: CourseTimetableData;

}
