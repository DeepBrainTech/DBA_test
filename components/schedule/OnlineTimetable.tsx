/**
 * 文件用途：课表 C — Online Course Timetable
 * 依赖关系：components/courses/CourseTimetable、data/timetables/online
 */

import CourseTimetable from '@/components/courses/CourseTimetable';
import { onlineTimetableData } from '@/data/timetables/online';

export interface OnlineTimetableProps {
  nested?: boolean;
  isLastInGroup?: boolean;
  hideHeader?: boolean;
  hideCoursesTabDescription?: boolean;
}

export default function OnlineTimetable({
  nested = false,
  isLastInGroup = false,
  hideHeader = false,
  hideCoursesTabDescription = false,
}: OnlineTimetableProps) {
  return (
    <CourseTimetable
      data={onlineTimetableData}
      hideHeader={hideHeader}
      hideCoursesTabDescription={hideCoursesTabDescription}
      nested={nested}
      isLastInGroup={isLastInGroup}
    />
  );
}
