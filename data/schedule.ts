/**
 * 文件用途：Schedule 页面静态数据源
 * 依赖关系：依赖 types/schedule、data/timetables
 */

import { ongoingTimetableData } from '@/data/timetables/ongoing';
import { summerTimetableData } from '@/data/timetables/summer';
import { onlineTimetableData } from '@/data/timetables/online';
import type { SchedulePageData } from '@/types/schedule';

export const schedulePageData: SchedulePageData = {
  heroTitle: 'Course Schedule',
  ongoingTimetable: ongoingTimetableData,
  summerTimetable: summerTimetableData,
  onlineTimetable: onlineTimetableData,
};
