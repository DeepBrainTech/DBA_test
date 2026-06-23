/**
 * 文件用途：Schedule 页面入口，组装 Hero 与课表 A、B
 * 依赖关系：依赖 components/schedule、data/schedule
 * 注意事项：Navigation 与 Footer 由根布局统一管理
 */

import OngoingTimetable from '@/components/schedule/OngoingTimetable';
import SummerTimetable from '@/components/schedule/SummerTimetable';
import OnlineTimetable from '@/components/schedule/OnlineTimetable';
import ScheduleHeroSection from '@/components/schedule/ScheduleHeroSection';
import { schedulePageData } from '@/data/schedule';

export default function SchedulePage() {
  const { heroTitle } = schedulePageData;

  return (
    <div className="min-h-screen bg-white">
      <main>
        <ScheduleHeroSection title={heroTitle} />
        <OngoingTimetable />
        <SummerTimetable />
        <OnlineTimetable isLastInGroup />
      </main>
    </div>
  );
}
