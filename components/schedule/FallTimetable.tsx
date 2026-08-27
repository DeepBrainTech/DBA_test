/**
 * 文件用途：秋季合并课表组件
 * 依赖关系：components/courses/CourseTimetable、data/timetables/fall
 */

import CourseTimetable from '@/components/courses/CourseTimetable';
import { fallTimetableData } from '@/data/timetables/fall';

export interface FallTimetableProps {
  hideHeader?: boolean;
  hideBadge?: boolean;
  hideCoursesTabDescription?: boolean;
  nested?: boolean;
  isLastInGroup?: boolean;
}

export default function FallTimetable({
  hideHeader,
  hideBadge,
  hideCoursesTabDescription,
  nested,
  isLastInGroup,
}: FallTimetableProps) {
  return (
    <CourseTimetable
      data={fallTimetableData}
      hideHeader={hideHeader}
      hideBadge={hideBadge}
      hideCoursesTabDescription={hideCoursesTabDescription}
      nested={nested}
      isLastInGroup={isLastInGroup}
    />
  );
}
