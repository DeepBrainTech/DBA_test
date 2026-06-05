/**
 * 文件用途：Courses 页面入口，负责字体配置与区块拼接
 * 依赖关系：依赖 components/courses 与 data/courses 页面数据
 * 注意事项：Navigation 和 Footer 已在根布局统一管理，这里不重复引入
 */

import { Outfit } from 'next/font/google';

import Hero from '@/components/courses/Hero';
import LearningStrategies from '@/components/courses/LearningStrategies';
import CourseTimetable from '@/components/courses/CourseTimetable';
import CourseInformation from '@/components/courses/CourseInformation';
import BookFreeTrialSection from '@/components/courses/BookFreeTrialSection';
import { coursesPageData } from '@/data/courses';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

export default function Page() {
  const { hero, learningStrategies, timetable, courseInformation, bookFreeTrial } = coursesPageData;
  return (
    <div className={`${outfit.variable} ${outfit.className} min-h-screen`}>
      <main>
        <Hero data={hero} />
        <LearningStrategies data={learningStrategies} />
        <CourseTimetable data={timetable} />
        <CourseInformation data={courseInformation} />
        <BookFreeTrialSection data={bookFreeTrial} />
      </main>
    </div>
  );
}
