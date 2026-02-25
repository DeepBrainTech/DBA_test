/**
 * 文件用途：Programming 英雄区，主标题、副标题与四个特色亮点（与 summer_camp Hero 结构一致）
 * 依赖关系：next/image、ProgrammingHeroData 类型、scrollToElement
 * 注意事项：图片使用 public/programming/hero/ 下 cover.png、1–5.png；底部 5.png 点击滚动至 programming-pillars
 */

'use client';

import Image from 'next/image';

import { scrollToElement } from '@/lib/scroll';
import type { ProgrammingHeroData } from '@/types/programming';

// 四张卡片图标静态导入，用于按原始尺寸展示（与 summer_camp Hero 一致）
import hero1 from '@/public/programming/hero/1.png';
import hero2 from '@/public/programming/hero/2.png';
import hero3 from '@/public/programming/hero/3.png';
import hero4 from '@/public/programming/hero/4.png';

const HERO_CARD_IMGS = [hero1, hero2, hero3, hero4] as const;

interface ProgrammingHeroProps {
  data: ProgrammingHeroData;
}

export default function ProgrammingHeroSection({ data }: ProgrammingHeroProps) {
  return (
    <section className="relative -mt-[106px] flex flex-col pb-10 bg-[#FFFFFF]">
      {/* 背景图区域：高度随视口变化（vh）；overflow-visible 让底部滚动指示器可伸入下方白色区域 */}
      <div className="relative min-h-[45svh] w-full overflow-visible bg-[#e8e8e8] md:min-h-[55svh] lg:min-h-[70svh]">
        <div className="absolute inset-0 z-0 [contain:layout]">
          <Image
            src={data.backgroundImage}
            alt="Programming hero background"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          {/* 与 Summer Camp 一致的遮罩：50% 浅灰半透明，提升文字可读性 */}
          <div className="absolute inset-0 bg-[lightgray]/50" aria-hidden />
        </div>
        {/* 整块内容区：min-h-full 让内容可撑高背景区，cover 始终铺满 */}
        <div className="relative z-10 mx-auto flex min-h-full max-w-[1344px] flex-col items-center justify-center px-9 pt-[106px] pb-4 text-center">
          <h1 className="font-outfit mt-20 text-5xl font-bold leading-[1.75] text-[#333333] md:text-6xl lg:text-[80px] lg:leading-[140px]">
            {data.title}
          </h1>
          <p className="font-outfit mt-4 max-w-[926px] text-xl font-medium leading-[46px] text-black md:text-2xl lg:text-[32px]">
            {data.subtitle}
          </p>
          {/* 四卡片：与 summer_camp 一致，不换行 */}
          <div className="mt-16 flex flex-nowrap items-stretch justify-center gap-[26px]">
            {data.features.map((feature, index) => {
              const img = HERO_CARD_IMGS[index];
              return (
                <div
                  key={feature.label}
                  className="flex min-h-[clamp(3.5rem,12vw,92.909px)] min-w-0 flex-1 max-w-[1920px] min-[1400px]:min-w-[350px] items-center gap-3 rounded-3xl bg-white/80 pl-4 pr-4 transition hover:shadow-lg cursor-pointer md:gap-5 md:pl-7 md:pr-7"
                >
                  <Image
                    src={img.src}
                    alt=""
                    width={img.width}
                    height={img.height}
                    className="shrink-0 max-h-14 w-auto object-contain md:max-h-16"
                  />
                  <span className="font-outfit text-[#2C3E50] text-base leading-[33px] lg:text-[22px] lg:whitespace-nowrap">
                    {feature.label}
                  </span>
                </div>
              );
            })}
          </div>
          {/* 四卡片下方文案 */}
          <div className="mt-6 text-center font-outfit text-xl font-medium capitalize leading-10 text-white [text-shadow:_0px_2px_4px_rgb(0_0_0_/_0.20)]">
            Unlock the Power of Programming
          </div>
        </div>
        {/* 5.png 鼠标：固定锚定在封面容器底部，点击滚动至 programming-pillars */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 flex translate-y-1/2 justify-center">
          <button
            type="button"
            onClick={() => scrollToElement('programming-pillars')}
            className="pointer-events-auto cursor-pointer border-0 bg-transparent p-0 min-w-[1vw] max-w-[35px]"
            aria-label="滚动至 Coding Is the New Literacy"
          >
            <Image
              src="/programming/hero/5.png"
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
