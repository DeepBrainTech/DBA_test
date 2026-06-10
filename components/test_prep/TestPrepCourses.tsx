/**
 * 文件用途：Test Prep Courses 课程卡
 * TestPrepCourseCard、types/test_prep；public/test_prep/courses/icons/
 */

import TestPrepCourseCard from '@/components/test_prep/TestPrepCourseCard';
import TestPrepRegisterButton from '@/components/test_prep/TestPrepRegisterButton';
import type { TestPrepPageData } from '@/types/test_prep';

interface TestPrepCoursesProps {
  data: TestPrepPageData['courses'];
}

export default function TestPrepCourses({ data }: TestPrepCoursesProps) {
  return (
    <section
      id="test-prep-courses"
      className="w-full bg-white px-4 sm:px-8 lg:px-9 pt-8 md:pt-10 lg:pt-12 pb-16 md:pb-20 lg:pb-24"
      aria-label="Test Prep Courses"
    >
      <div className="mx-auto flex w-full max-w-[min(1270px,95vw)] flex-col items-center gap-12 md:gap-16 lg:gap-[72px]">
        <header className="flex w-full flex-col items-center text-center">
          <div className="inline-flex items-center gap-3 rounded-[23px] bg-[rgba(107,122,239,0.1)] px-5 py-2.5">
            <span className="text-[28px] leading-none" aria-hidden>
              {data.badgeIcon}
            </span>
            <span className="font-outfit text-xl text-[#6B7AEF]">{data.badgeText}</span>
          </div>
          <h2 className="mt-6 font-outfit text-3xl md:text-4xl lg:text-[44px] font-bold leading-tight text-[#2C3E50]">
            {data.title}
          </h2>
          <p className="mt-4 max-w-[1174px] font-outfit text-lg md:text-xl lg:text-[22px] font-normal leading-relaxed text-[#7C8B99]">
            {data.subtitle}
          </p>
        </header>

        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:gap-[37px]">
          {data.programs.map((program) => (
            <TestPrepCourseCard key={program.title} card={program} />
          ))}
        </div>

        <div className="flex w-full justify-center">
          <TestPrepRegisterButton />
        </div>
      </div>
    </section>
  );
}
