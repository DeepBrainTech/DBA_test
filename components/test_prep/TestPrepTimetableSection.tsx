/**
 * 文件用途：Test Prep 页面课表区块，复用课表 B、C
 * 依赖关系：components/schedule/SummerTimetable、OnlineTimetable
 */

import OnlineTimetable from '@/components/schedule/OnlineTimetable';
import SummerTimetable from '@/components/schedule/SummerTimetable';

export default function TestPrepTimetableSection() {
  return (
    <section className="w-full bg-[#FBF9F4] pt-16 md:pt-20 lg:pt-24">
      <SummerTimetable />
      <OnlineTimetable isLastInGroup />
    </section>
  );
}
