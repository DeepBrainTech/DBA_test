/**
 * 文件用途：Test Prep 英雄区，主标题、副标题与四个特色亮点（与 Math/Courses Hero 结构一致）
 * 依赖关系：next/image、TestPrepHeroData 类型、scrollToElement；封面与滚动图标来自 public/test_prep/hero/
 */

'use client';

import Image from 'next/image';

import { scrollToElement } from '@/lib/scroll';
import type { TestPrepHeroData } from '@/types/test_prep';

interface TestPrepHeroProps {
  data: TestPrepHeroData;
}

export default function TestPrepHero({ data }: TestPrepHeroProps) {
  return (
    <section className="relative -mt-[106px] flex flex-col pb-10 bg-[#FFFFFF]">
      <div className="relative min-h-[45svh] w-full overflow-visible bg-[#e8e8e8] md:min-h-[55svh] lg:min-h-[70svh]">
        <div className="absolute inset-0 z-0 [contain:layout]">
          <Image
            src={data.backgroundImage}
            alt="Test Prep hero background"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="relative z-10 mx-auto flex min-h-full max-w-[1344px] flex-col items-center justify-center px-4 sm:px-6 lg:px-9 pt-[106px] pb-4 text-center">
          <h1 className="font-outfit mt-10 sm:mt-14 lg:mt-20 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[80px] font-bold leading-tight lg:leading-[1.75] xl:leading-[140px] text-[#333333]">
            {data.title}
          </h1>
          <p className="font-outfit mt-2 sm:mt-3 lg:mt-4 max-w-[926px] text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[32px] font-medium leading-relaxed lg:leading-[46px] text-black">
            {data.subtitle}
          </p>
          <div className="mt-8 sm:mt-12 lg:mt-16 w-full overflow-x-auto pb-2 -mx-2 px-2 lg:overflow-x-visible lg:mx-0 lg:px-0">
            <div className="flex gap-3 sm:gap-4 lg:gap-[26px] w-max lg:w-auto lg:justify-center">
              {data.features.map((feature) => (
                <div
                  key={feature.label}
                  className="flex-shrink-0 lg:flex-shrink flex min-h-[56px] sm:min-h-[70px] lg:min-h-[clamp(3.5rem,12vw,92.909px)] w-[180px] sm:w-[220px] lg:w-auto lg:flex-1 lg:max-w-[350px] items-center gap-2 sm:gap-3 md:gap-5 rounded-xl sm:rounded-2xl lg:rounded-3xl bg-white/80 px-3 sm:px-4 md:pl-7 md:pr-7 transition hover:shadow-lg cursor-pointer"
                >
                  <span className="shrink-0 text-2xl sm:text-3xl lg:text-4xl leading-none" aria-hidden>
                    {feature.emoji}
                  </span>
                  <span className="font-outfit text-[#2C3E50] text-sm sm:text-base lg:text-[22px] leading-snug lg:leading-[33px]">
                    {feature.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 flex translate-y-1/2 justify-center">
          <button
            type="button"
            onClick={() => scrollToElement('success-stories')}
            className="pointer-events-auto cursor-pointer border-0 bg-transparent p-0 min-w-[1vw] max-w-[35px]"
            aria-label="Scroll to Success Stories"
          >
            <Image
              src={data.scrollIcon}
              alt=""
              width={1200}
              height={600}
              className="h-auto w-full object-contain"
              unoptimized
            />
          </button>
        </div>
      </div>
    </section>
  );
}
