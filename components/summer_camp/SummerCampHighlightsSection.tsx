/**
 * 文件用途：Summer Camp Program Highlights 区块（Hero 下方四张特色卡）
 * 依赖关系：next/image；布局风格参考 ProgrammingPillars / ChessPhilosophySection
 * 注意事项：白底区块；图标资源来自 public/summer_camp/hightlights
 */

import Image from 'next/image';

import type { SummerCampHighlightCard, SummerCampHighlightsData } from '@/types/summer_camp';

interface SummerCampHighlightsSectionProps {
  data: SummerCampHighlightsData;
}

/** 单张特色卡 */
function HighlightCard({ title, description, iconSrc }: SummerCampHighlightCard) {
  return (
    <div className="rounded-2xl lg:rounded-3xl bg-[#FBF9F4] px-4 sm:px-6 pt-6 sm:pt-9 pb-6 sm:pb-8 text-center flex flex-col items-center">
      <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 shrink-0 rounded-2xl lg:rounded-3xl bg-[#599CED]/10 flex justify-center items-center">
        <Image
          src={iconSrc}
          alt=""
          width={40}
          height={40}
          className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 object-contain"
          aria-hidden
        />
      </div>
      <h3 className="mt-3 sm:mt-4 lg:mt-5 w-full text-center text-[#2C3E50] text-lg sm:text-xl md:text-2xl font-semibold font-outfit leading-tight">
        {title}
      </h3>
      <p className="mt-2 sm:mt-3 lg:mt-4 w-full max-w-[18rem] text-center text-[#7C8B99] text-sm sm:text-base md:text-lg font-normal font-outfit leading-snug">
        {description}
      </p>
    </div>
  );
}

export default function SummerCampHighlightsSection({ data }: SummerCampHighlightsSectionProps) {
  return (
    <section
      id="summer-camp-highlights"
      className="bg-white scroll-mt-28"
      aria-label="Program Highlights"
    >
      <div className="mx-auto max-w-[1344px] px-4 sm:px-6 lg:px-9 pt-16 sm:pt-20 lg:pt-24 pb-12 sm:pb-16 lg:pb-24 flex flex-col gap-8 sm:gap-12 lg:gap-16">
        {/* 顶部标题区 */}
        <div className="w-full flex flex-col items-center text-center gap-4 sm:gap-6 lg:gap-8">
          <div className="inline-flex items-center gap-2 sm:gap-3 rounded-2xl lg:rounded-3xl bg-[#599CED]/10 px-4 sm:px-5 py-2.5 sm:py-3.5">
            <Image
              src={data.badgeIcon}
              alt=""
              width={24}
              height={24}
              className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
              aria-hidden
            />
            <span className="text-[#599CED] text-base sm:text-lg md:text-xl font-normal font-outfit">
              {data.badgeText}
            </span>
          </div>
          <h2 className="text-center text-[#2C3E50] text-2xl sm:text-3xl md:text-4xl font-bold font-outfit leading-tight">
            {data.title}
          </h2>
          <p className="max-w-[892px] text-[#7C8B99] text-sm sm:text-base md:text-lg font-normal font-outfit leading-relaxed text-center">
            {data.subtitle}
          </p>
        </div>

        {/* 四张特色卡：移动端横向滚动，桌面端网格 */}
        <div className="lg:hidden w-full overflow-x-auto pb-4 -mx-2 px-2">
          <div className="flex gap-4 w-max">
            {data.cards.map((card) => (
              <div key={card.id} className="w-[240px] sm:w-[280px] flex-shrink-0">
                <HighlightCard {...card} />
              </div>
            ))}
          </div>
        </div>
        <div className="hidden lg:grid w-full grid-cols-4 gap-8">
          {data.cards.map((card) => (
            <HighlightCard key={card.id} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
