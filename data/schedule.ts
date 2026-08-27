/**
 * 文件用途：Schedule 页面静态数据源
 * 依赖关系：依赖 types/schedule、data/timetables
 * 注意事项：暑期 / 旧分表数据保留；页面实际渲染用 fallTimetable
 */

import { ongoingTimetableData } from '@/data/timetables/ongoing';
import { summerTimetableData } from '@/data/timetables/summer';
import { onlineTimetableData } from '@/data/timetables/online';
import { fallTimetableData } from '@/data/timetables/fall';
import { inPersonTimetableData } from '@/data/timetables/inPerson';
import { fallOnlineTimetableData } from '@/data/timetables/fallOnline';
import type { SchedulePageData } from '@/types/schedule';

export const schedulePageData: SchedulePageData = {
  heroTitle: 'Course Schedule',
  ongoingTimetable: ongoingTimetableData,
  summerTimetable: summerTimetableData,
  onlineTimetable: onlineTimetableData,
  fallTimetable: fallTimetableData,
  inPersonTimetable: inPersonTimetableData,
  fallOnlineTimetable: fallOnlineTimetableData,
};
