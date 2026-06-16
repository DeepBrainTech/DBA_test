/**
 * 文件用途：Courses 页面第一部分 — Explore Our Programs 介绍区块
 * 依赖关系：依赖 ProgramCard、types/courses；图标来自 public/courses/icon
 */

import ProgramCard from '@/components/courses/ProgramCard';
import type { ExploreProgramsData } from '@/types/courses';

interface ExploreProgramsProps {
  data: ExploreProgramsData;
}

export default function ExplorePrograms({ data }: ExploreProgramsProps) {
  return (
    <section
      id="explore-programs"
      className="w-full bg-white px-4 sm:px-8 lg:px-9 pt-16 md:pt-20 lg:pt-[93px] pb-8 md:pb-10 lg:pb-12"
      aria-label="Explore Our Programs"
    >
      <div className="mx-auto flex w-full max-w-[min(1270px,95vw)] flex-col items-center gap-12 md:gap-16 lg:gap-[72px]">
        <header className="flex w-full flex-col items-center text-center">
          <div className="inline-flex items-center gap-2.5 rounded-[23px] bg-[rgba(89,156,237,0.1)] px-5 py-2.5">
            <span className="text-[28px] leading-none" aria-hidden>
              {data.badgeIcon}
            </span>
            <span className="font-outfit text-xl text-[#599CED]">{data.badgeText}</span>
          </div>
          <h2 className="mt-6 font-outfit text-3xl md:text-4xl lg:text-[44px] font-bold leading-tight text-[#2C3E50]">
            {data.title}
          </h2>
          <p className="mt-4 max-w-[892px] font-outfit text-lg md:text-xl lg:text-[22px] font-normal leading-relaxed text-[#7C8B99]">
            {data.subtitle}
          </p>
        </header>

        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:gap-[37px]">
          {data.programs.map((program) => (
            <ProgramCard key={program.title} card={program} />
          ))}
        </div>
      </div>
    </section>
  );
}
