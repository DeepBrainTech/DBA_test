/**
 * 文件用途：秋季 Online 课表
 * 依赖关系：components/courses/CourseTimetable、data/timetables/fallOnline
 * 注意事项：暑期 OnlineTimetable / online.ts 保留不动
 */

import CourseTimetable from '@/components/courses/CourseTimetable';
import { fallOnlineTimetableData } from '@/data/timetables/fallOnline';

export interface FallOnlineTimetableProps {
  nested?: boolean;
  isLastInGroup?: boolean;
  hideHeader?: boolean;
  hideBadge?: boolean;
  hideCoursesTabDescription?: boolean;
}

export default function FallOnlineTimetable({
  nested = false,
  isLastInGroup = false,
  hideHeader = false,
  hideBadge = false,
  hideCoursesTabDescription = false,
}: FallOnlineTimetableProps) {
  return (
    <CourseTimetable
      data={fallOnlineTimetableData}
      hideHeader={hideHeader}
      hideBadge={hideBadge}
      hideCoursesTabDescription={hideCoursesTabDescription}
      nested={nested}
      isLastInGroup={isLastInGroup}
    />
  );
}
