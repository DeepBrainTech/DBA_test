/**
 * 文件用途：课表 A — Current Timetable（Ongoing Courses）
 * 依赖关系：components/courses/CourseTimetable、data/timetables/ongoing
 */

import CourseTimetable from '@/components/courses/CourseTimetable';
import { ongoingTimetableData } from '@/data/timetables/ongoing';
import type { CourseTimetableData } from '@/types/courses';

export interface OngoingTimetableProps {
  nested?: boolean;
  isLastInGroup?: boolean;
  /** schedule 页独立展示；courses 页嵌套在 Course Schedule 区块内 */
  variant?: 'schedule' | 'courses';
}

const coursesVariantOverrides: Partial<CourseTimetableData> = {
  badge: {
    icon: '📅',
    label: 'Ongoing Courses',
    className: 'bg-[#FBF9F4] text-slate-700',
  },
};

export default function OngoingTimetable({
  nested = false,
  isLastInGroup = false,
  variant = 'schedule',
}: OngoingTimetableProps) {
  const data =
    variant === 'courses'
      ? { ...ongoingTimetableData, ...coursesVariantOverrides }
      : ongoingTimetableData;

  return (
    <CourseTimetable
      data={data}
      nested={nested}
      isLastInGroup={isLastInGroup}
    />
  );
}
