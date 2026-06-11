/**
 * 文件用途：直接复用 Courses 页面 CourseTimetable
 * 依赖关系：next/link、components/courses/CourseTimetable、types/courses
 * 注意事项：沿用 Courses
 */

import Link from 'next/link';

import CourseTimetable from '@/components/courses/CourseTimetable';
import type { CourseTimetableData } from '@/types/courses';

interface TestPrepTimetableSectionProps {
  data: CourseTimetableData;
}

export default function TestPrepTimetableSection({ data }: TestPrepTimetableSectionProps) {
  return (
    <section className="w-full bg-[#FBF9F4] pt-16 md:pt-20 lg:pt-24">
      <div className="mx-auto flex w-full max-w-[min(1270px,95vw)] flex-col items-center px-4 text-center sm:px-8 lg:px-9">
        <h2 className="font-outfit text-3xl font-bold leading-tight text-[#2C3E50] md:text-4xl lg:text-[44px]">
          Course Timetable
        </h2>
        <p className="mt-4 font-outfit text-lg font-normal leading-relaxed text-[#7C8B99] md:text-xl lg:text-[22px]">
          Explore our course options. For more information, please visit the{' '}
          <Link href="/courses" className="font-bold text-[#2C3E50] underline-offset-4 hover:underline">
            Courses tab
          </Link>
          .
        </p>
      </div>
      <CourseTimetable data={data} hideHeader />
    </section>
  );
}
