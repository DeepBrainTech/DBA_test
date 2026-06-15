/**
 * 文件用途：Test Prep 页面入口，负责组装 Hero、Success Stories 与 Courses 区块
 * 依赖关系：依赖 components/test_prep 与 data/test_prep
 * 注意事项：Navigation 和 Footer 已在根布局统一管理
 */

import ScoreGrowthSystem from '@/components/test_prep/ScoreGrowthSystem';
import SuccessStories from '@/components/test_prep/SuccessStories';
import TestPrepBookFreeTrialSection from '@/components/test_prep/TestPrepBookFreeTrialSection';
import TestPrepCourses from '@/components/test_prep/TestPrepCourses';
import TestPrepHero from '@/components/test_prep/TestPrepHero';
import TestPrepTimetableSection from '@/components/test_prep/TestPrepTimetableSection';
import { coursesPageData } from '@/data/courses';
import { testPrepPageData } from '@/data/test_prep';

export default function TestPrepPage() {
  const { hero, successStories, courses, scoreGrowthSystem } = testPrepPageData;
  const { timetable, bookFreeTrial } = coursesPageData;
  const testPrepBookFreeTrial = {
    ...bookFreeTrial,
    stats: bookFreeTrial.stats.map((stat) =>
      stat.label === 'Sessions Booked' ? { ...stat, value: '110' } : stat
    ),
  };

  return (
    <div className="min-h-screen">
      <main>
        <TestPrepHero data={hero} />
        <SuccessStories data={successStories} />
        <TestPrepCourses data={courses} />
        <ScoreGrowthSystem data={scoreGrowthSystem} />
        <TestPrepTimetableSection data={timetable} />
        <TestPrepBookFreeTrialSection data={testPrepBookFreeTrial} />
      </main>
    </div>
  );
}
