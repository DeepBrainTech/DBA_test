/**
 * 文件用途：Summer Camp 全日项目单科卡片（图标 + 标题 + 能力亮点列表）
 * 依赖关系：next/image；由 SummerCampProgramSection 使用
 */

import Image from 'next/image';

import type { SummerCampProgramSubject } from '@/types/summer_camp';

interface SummerCampSubjectCardProps {
  subject: SummerCampProgramSubject;
}

export default function SummerCampSubjectCard({ subject }: SummerCampSubjectCardProps) {
  return (
    <article className="flex h-full flex-col rounded-2xl bg-white p-5 shadow-[0_4px_24px_rgba(44,62,80,0.06)] sm:rounded-3xl sm:p-6 lg:p-7">
      <div className="flex items-center gap-3 sm:gap-4">
        <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-[#599CED]/10 sm:size-14 sm:rounded-2xl">
          <Image
            src={subject.iconSrc}
            alt=""
            width={28}
            height={28}
            className="size-6 object-contain sm:size-7"
            aria-hidden
          />
        </div>
        <h3 className="font-outfit text-lg font-semibold leading-tight text-[#2C3E50] sm:text-xl lg:text-2xl">
          {subject.name}
        </h3>
      </div>
      <ul className="mt-4 flex flex-col gap-2 sm:mt-5 sm:gap-2.5">
        {subject.highlights.map((item) => (
          <li key={item} className="flex items-start gap-2.5 sm:gap-3">
            <span
              className="mt-2 size-1.5 shrink-0 rounded-sm bg-[#599CED] sm:mt-2.5"
              aria-hidden
            />
            <span className="font-outfit text-sm leading-relaxed text-[#7C8B99] sm:text-base">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </article>
  );
}
