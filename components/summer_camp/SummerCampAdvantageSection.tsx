/**
 * 文件用途：Summer Camp Our Advantage 区块（优势卡片 + Register Now）
 * 依赖关系：next/image、next/link、lucide-react；卡片布局参考 home/WhyDeepBrain
 * 注意事项：白底区块；桌面端 2×2 网格，图标来自 public/summer_camp/advantage
 */

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import type { SummerCampAdvantageCard, SummerCampAdvantagesData } from '@/types/summer_camp';

interface SummerCampAdvantageSectionProps {
  data: SummerCampAdvantagesData;
}

function AdvantageCard({ title, description, stat, statLabel, iconSrc }: SummerCampAdvantageCard) {
  return (
    <div className="flex items-start gap-4 rounded-3xl bg-[#FBF9F4] px-5 py-6 sm:gap-5 sm:px-7 sm:py-7">
      <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#599CED]/20 to-[#599CED]/20 sm:size-16">
        <Image
          src={iconSrc}
          alt=""
          width={34}
          height={34}
          className="size-7 object-contain sm:size-8"
          aria-hidden
        />
      </div>
      <div className="flex min-w-0 flex-1 flex-col gap-2.5">
        <h3 className="font-outfit text-lg font-semibold leading-8 text-slate-700 sm:text-xl">
          {title}
        </h3>
        <p className="font-outfit text-base font-normal leading-8 text-slate-500 sm:text-lg">
          {description}
        </p>
        <div className="flex flex-wrap items-baseline gap-x-2">
          <span className="font-outfit text-lg font-normal leading-8 text-[#599CED] sm:text-xl">
            {stat}
          </span>
          <span className="font-outfit text-sm font-normal leading-5 text-slate-500 sm:text-base">
            {statLabel}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function SummerCampAdvantageSection({ data }: SummerCampAdvantageSectionProps) {
  return (
    <section
      id="summer-camp-advantages"
      className="bg-white scroll-mt-28"
      aria-label="Our Advantage"
    >
      <div className="mx-auto flex w-full max-w-[1344px] flex-col gap-8 px-4 sm:gap-12 sm:px-6 lg:gap-16 lg:px-9 pb-12 sm:pb-16 lg:pb-24 pt-12 sm:pt-16 lg:pt-24">
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
        </div>

        {/* 优势卡片：2×2 网格 */}
        <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 lg:gap-6">
          {data.cards.map((card) => (
            <AdvantageCard key={card.id} {...card} />
          ))}
        </div>

        {/* Register Now */}
        <div className="flex justify-center pt-2 sm:pt-4">
          <Link
            href={data.registerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full max-w-md items-center justify-center gap-2 rounded-3xl bg-[#599CED] px-8 py-3.5 font-outfit text-base font-bold text-white shadow-[0_8px_24px_rgba(89,156,237,0.35)] transition hover:brightness-105 sm:w-auto sm:gap-3 sm:px-10 sm:py-4 sm:text-lg md:text-xl"
          >
            <span>{data.registerButtonText}</span>
            <ArrowRight className="size-5 shrink-0 sm:size-6" strokeWidth={2.5} />
          </Link>
        </div>
      </div>
    </section>
  );
}
