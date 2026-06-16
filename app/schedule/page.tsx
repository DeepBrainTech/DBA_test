/**
 * 文件用途：Schedule 页面入口，组装 Hero 与两个课表区块
 * 依赖关系：依赖 components/schedule、components/courses/CourseTimetable、data/schedule
 * 注意事项：Navigation 与 Footer 由根布局统一管理
 */

import CourseTimetable from '@/components/courses/CourseTimetable';
import ScheduleHeroSection from '@/components/schedule/ScheduleHeroSection';
import { schedulePageData } from '@/data/schedule';

export default function SchedulePage() {
  const { heroTitle, ongoingTimetable, summerTimetable } = schedulePageData;

  return (
    <div className="min-h-screen bg-white">
      <main>
        <ScheduleHeroSection title={heroTitle} />
        <CourseTimetable data={ongoingTimetable} />
        <CourseTimetable data={summerTimetable} />
      </main>
    </div>
  );
}
