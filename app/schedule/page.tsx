/**
 * 文件用途：Schedule 页面入口，组装 Hero 与秋季合并课表
 * 依赖关系：依赖 components/schedule、data/schedule
 * 注意事项：Navigation 与 Footer 由根布局统一管理；暑期 / 旧分表组件保留未删除
 */

import FallTimetable from '@/components/schedule/FallTimetable';
import ScheduleHeroSection from '@/components/schedule/ScheduleHeroSection';
import { schedulePageData } from '@/data/schedule';

export default function SchedulePage() {
  const { heroTitle } = schedulePageData;

  return (
    <div className="min-h-screen bg-white">
      <main>
        <ScheduleHeroSection title={heroTitle} />
        <FallTimetable />
      </main>
    </div>
  );
}
