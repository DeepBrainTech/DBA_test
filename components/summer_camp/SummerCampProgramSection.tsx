/**
 * 文件用途：Summer Camp 全日项目区块（五门核心课程 + Register Now）
 * 依赖关系：next/image、next/link、lucide-react、SummerCampSubjectCard；布局参考 Highlights / TestPrepCourses
 * 注意事项：cream 背景；桌面端 3+2 卡片网格（第二行左对齐），移动端纵向堆叠
 */

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import SummerCampSubjectCard from '@/components/summer_camp/SummerCampSubjectCard';
import type { SummerCampProgramData } from '@/types/summer_camp';

interface SummerCampProgramSectionProps {
  data: SummerCampProgramData;
}

export default function SummerCampProgramSection({ data }: SummerCampProgramSectionProps) {
  return (
    <section
      id="summer-camp-program"
      className="bg-[#FBF9F4] scroll-mt-28"
      aria-label="Full-day Summer Camp Program"
    >
      <div className="mx-auto flex w-full max-w-[1344px] flex-col gap-8 px-4 sm:gap-12 sm:px-6 lg:gap-16 lg:px-9 pb-12 sm:pb-16 lg:pb-24 pt-12 sm:pt-16 lg:pt-20">
        {/* 顶部标题区 */}
        <div className="flex w-full flex-col items-center gap-4 text-center sm:gap-6 lg:gap-8">
          <div className="inline-flex items-center gap-2 rounded-2xl bg-[#599CED]/10 px-4 py-2.5 sm:gap-3 sm:rounded-3xl sm:px-5 sm:py-3.5">
            <Image
              src={data.badgeIcon}
              alt=""
              width={24}
              height={24}
              className="size-5 object-contain sm:size-6"
              aria-hidden
            />
            <span className="font-outfit text-base font-normal text-[#599CED] sm:text-lg md:text-xl">
              {data.badgeText}
            </span>
          </div>
          <h2 className="text-center font-outfit text-2xl font-bold leading-tight text-[#2C3E50] sm:text-3xl md:text-4xl">
            {data.title}
          </h2>
          <p className="max-w-[892px] text-center font-outfit text-sm font-normal leading-relaxed text-[#7C8B99] sm:text-base md:text-lg">
            {data.subtitle}
          </p>
        </div>

        {/* 五门课程：上三下二，第二行左对齐 */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          {data.subjects.map((subject) => (
            <SummerCampSubjectCard key={subject.id} subject={subject} />
          ))}
        </div>

        {/* Register Now */}
        <div className="flex justify-center pt-2 sm:pt-4">
          <Link
            href={data.registerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full max-w-md items-center justify-center gap-2 rounded-2xl bg-[#599CED] px-8 py-3.5 font-outfit text-base font-bold text-white shadow-[0_8px_24px_rgba(89,156,237,0.35)] transition hover:brightness-105 sm:w-auto sm:gap-3 sm:rounded-3xl sm:px-10 sm:py-4 sm:text-lg lg:text-xl"
          >
            <span>{data.registerButtonText}</span>
            <ArrowRight className="size-5 shrink-0 sm:size-6" strokeWidth={2.5} />
          </Link>
        </div>
      </div>
    </section>
  );
}
