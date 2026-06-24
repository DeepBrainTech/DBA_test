/**
 * 文件用途：Courses 页 Course Schedule 区块（Summer + Online 课表）
 * 依赖关系：components/schedule/SummerTimetable、OnlineTimetable
 */

import SummerTimetable from '@/components/schedule/SummerTimetable';
import OnlineTimetable from '@/components/schedule/OnlineTimetable';

export default function CourseScheduleSection() {
  return (
    <section className="w-full bg-[#FBF9F4]">
      <div className="mx-auto flex w-full max-w-[min(1440px,98vw)] flex-col items-center px-4 pt-16 text-center sm:px-8 md:pt-20 lg:px-9">
        <h2 className="font-outfit text-3xl font-bold leading-tight text-[#2C3E50] md:text-4xl lg:text-[44px]">
          Course Schedule
        </h2>
      </div>
      <SummerTimetable nested hideBadge hideCoursesTabDescription />
      <OnlineTimetable nested isLastInGroup hideBadge hideCoursesTabDescription />
    </section>
  );
}
