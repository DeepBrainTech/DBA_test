/**
 * 文件用途：Courses 页面入口，负责字体配置与区块拼接
 * 依赖关系：依赖 components/courses 与 data/courses 页面数据
 * 注意事项：Navigation 和 Footer 已在根布局统一管理，这里不重复引入
 */

import Hero from '@/components/courses/Hero';
import ExplorePrograms from '@/components/courses/ExplorePrograms';
import CourseInformation from '@/components/courses/CourseInformation';
import BookFreeTrialSection from '@/components/courses/BookFreeTrialSection';
import CourseScheduleSection from '@/components/schedule/CourseScheduleSection';
import { coursesPageData } from '@/data/courses';

export default function Page() {
  const { hero, explorePrograms, courseInformation, bookFreeTrial } = coursesPageData;
  return (
    <div className="min-h-screen">
      <main>
        <Hero data={hero} />
        <ExplorePrograms data={explorePrograms} />
        <CourseScheduleSection />
        <CourseInformation data={courseInformation} />
        <BookFreeTrialSection data={bookFreeTrial} />
      </main>
    </div>
  );
}
