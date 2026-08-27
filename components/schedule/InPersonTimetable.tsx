/**
 * 文件用途：线下课表 — In-Person Course Timetable
 * 依赖关系：components/courses/CourseTimetable、data/timetables/inPerson
 */

import CourseTimetable from '@/components/courses/CourseTimetable';
import { inPersonTimetableData } from '@/data/timetables/inPerson';

export interface InPersonTimetableProps {
  nested?: boolean;
  isLastInGroup?: boolean;
  hideHeader?: boolean;
  hideBadge?: boolean;
  hideCoursesTabDescription?: boolean;
}

export default function InPersonTimetable({
  nested = false,
  isLastInGroup = false,
  hideHeader = false,
  hideBadge = false,
  hideCoursesTabDescription = false,
}: InPersonTimetableProps) {
  return (
    <CourseTimetable
      data={inPersonTimetableData}
      hideHeader={hideHeader}
      hideBadge={hideBadge}
      hideCoursesTabDescription={hideCoursesTabDescription}
      nested={nested}
      isLastInGroup={isLastInGroup}
    />
  );
}
