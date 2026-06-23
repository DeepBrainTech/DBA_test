/**
 * 文件用途：课表 B — Summer Course Timetable
 * 依赖关系：components/courses/CourseTimetable、data/timetables/summer
 */

import CourseTimetable from '@/components/courses/CourseTimetable';
import { summerTimetableData } from '@/data/timetables/summer';

export interface SummerTimetableProps {
  nested?: boolean;
  isLastInGroup?: boolean;
  hideHeader?: boolean;
  hideCoursesTabDescription?: boolean;
}

export default function SummerTimetable({
  nested = false,
  isLastInGroup = false,
  hideHeader = false,
  hideCoursesTabDescription = false,
}: SummerTimetableProps) {
  return (
    <CourseTimetable
      data={summerTimetableData}
      hideHeader={hideHeader}
      hideCoursesTabDescription={hideCoursesTabDescription}
      nested={nested}
      isLastInGroup={isLastInGroup}
    />
  );
}
