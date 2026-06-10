/**
 * 文件用途：Test Prep Courses 单张课程卡片
 * 依赖关系：依赖 types/test_prep 的 TestPrepCourseCardData，由 TestPrepCourses 使用
 */

import Image from 'next/image';

import type { TestPrepCourseCardData } from '@/types/test_prep';

interface TestPrepCourseCardProps {
  card: TestPrepCourseCardData;
}

export default function TestPrepCourseCard({ card }: TestPrepCourseCardProps) {
  return (
    <article className="relative overflow-hidden rounded-[28px] bg-white p-7 sm:p-8 md:p-9 min-h-[320px] md:min-h-[380px] lg:min-h-[416px] flex flex-col shadow-sm">
      <div
        className="pointer-events-none absolute -right-4 top-0 size-[149px] rounded-full bg-[#6B7AEF] opacity-5 blur-[46px]"
        aria-hidden
      />

      <div className="flex size-[74px] shrink-0 items-center justify-center rounded-[19px] bg-[rgba(107,122,239,0.13)]">
        <Image
          src={card.icon}
          alt=""
          width={36}
          height={36}
          className="size-9 object-contain"
          aria-hidden
        />
      </div>

      <div className="mt-6 flex flex-1 flex-col gap-[19px]">
        <h3 className="font-outfit text-2xl sm:text-[28px] font-semibold leading-tight text-[#2C3E50]">
          {card.title}
        </h3>
        <p className="font-outfit text-lg md:text-xl font-normal leading-[1.5] text-[#7C8B99]">
          {card.description}
        </p>
        <div className="mt-auto flex flex-wrap gap-3 pt-2">
          {card.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-[14px] bg-[rgba(107,122,239,0.08)] px-[19px] py-[9px] font-outfit text-base sm:text-lg text-[#6B7AEF]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div
        className="absolute bottom-7 right-7 sm:bottom-9 sm:right-9 flex size-12 sm:size-14 items-center justify-center rounded-[14px] border-2 border-[#6B7AEF]/30"
        aria-hidden
      >
        <span className="font-outfit text-xl sm:text-[23px] text-[#6B7AEF]/70">{card.index}</span>
      </div>
    </article>
  );
}
