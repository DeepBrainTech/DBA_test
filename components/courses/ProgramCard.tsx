/**
 * 文件用途：Courses 页面「Explore Our Programs」单张项目卡片
 * 依赖关系：依赖 types/courses 的 ProgramCardData，由 ExplorePrograms 使用
 */

import Image from 'next/image';
import type { ProgramCardData } from '@/types/courses';

interface ProgramCardProps {
  card: ProgramCardData;
}

export default function ProgramCard({ card }: ProgramCardProps) {
  return (
    <article className="relative overflow-hidden rounded-[28px] bg-[#FBF9F4] p-9 min-h-[320px] md:min-h-[380px] lg:min-h-[416px] flex flex-col">
      <div
        className="pointer-events-none absolute -right-4 top-0 size-[149px] rounded-full bg-[#599CED] opacity-5 blur-[46px]"
        aria-hidden
      />

      <div className="flex size-[74px] shrink-0 items-center justify-center rounded-[19px] bg-[rgba(89,156,237,0.13)]">
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
        <h3 className="font-['Outfit'] text-[28px] font-semibold leading-tight text-[#2C3E50]">
          {card.title}
        </h3>
        <p className="font-['Outfit'] text-lg md:text-xl font-normal leading-[1.5] text-[#7C8B99]">
          {card.description}
        </p>
        <div className="mt-auto flex flex-wrap gap-3 pt-2">
          {card.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-[14px] bg-[rgba(89,156,237,0.08)] px-[19px] py-[9px] font-['Outfit'] text-lg text-[#599CED]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div
        className="absolute bottom-9 right-9 flex size-14 items-center justify-center rounded-[14px] border-2 border-[#599CED]/30"
        aria-hidden
      >
        <span className="font-['Outfit'] text-[23px] text-[#599CED]/70">{card.index}</span>
      </div>
    </article>
  );
}
