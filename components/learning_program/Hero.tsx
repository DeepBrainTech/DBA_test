/**
 * 文件用途：Learning Program 英雄区，主标题、副标题与四个特色亮点（与设计稿一致）
 * 依赖关系：依赖 next/image、LearningProgramHeroData 类型、scrollToElement 工具函数
 * 注意事项：文案与设计稿一致；-mt-[106px] 使首屏与透明导航重叠；底部 5.png 可点击滚动至 Learning Strategies 区块
 */

'use client';

import Image from 'next/image';

import { scrollToElement } from '@/lib/scroll';
import type { LearningProgramHeroData } from '@/types/learning_program';

// 四张卡片图标静态导入，用于获取原始宽高并按原始尺寸展示
import hero1 from '@/public/learning_program/hero/1.png';
import hero2 from '@/public/learning_program/hero/2.png';
import hero3 from '@/public/learning_program/hero/3.png';
import hero4 from '@/public/learning_program/hero/4.png';

const HERO_CARD_IMGS = [hero1, hero2, hero3, hero4] as const;

interface HeroProps {
  data: LearningProgramHeroData;
}

export default function Hero({ data }: HeroProps) {
  return (
    <section className="relative -mt-[106px] flex flex-col pb-10 bg-[#FFFFFF]">
      {/* 背景图区域：高度随视口变化（vh）；overflow-visible 让底部滚动指示器可伸入下方白色区域；pb-10 为伸出部分留白 */}
      {/* 使用 svh 替代 vh，避免导航后视口重算导致封面区上下跳动 */}
      <div className="relative min-h-[45svh] w-full overflow-visible bg-[#e8e8e8] md:min-h-[55svh] lg:min-h-[70svh]">
        <div className="absolute inset-0 z-0 [contain:layout]">
          <Image
            src={data.backgroundImage}
            alt="Learning Program hero background"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          {/* 与 Global Education 一致的遮罩：50% 浅灰半透明，提升文字可读性 */}
          <div className="absolute inset-0 bg-[lightgray]/50" aria-hidden />
        </div>
        {/* 整块内容区：min-h-full 让内容可撑高背景区，cover 始终铺满 */}
        <div className="relative z-10 mx-auto flex min-h-full max-w-[min(1280px,95vw)] flex-col items-center justify-center px-4 sm:px-6 lg:px-9 pt-[106px] pb-4 text-center">
          {/* 主标题 */}
          <h1 className="font-outfit mt-10 sm:mt-14 lg:mt-20 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight lg:leading-[1.75] text-[#333333]">
            {data.title}
          </h1>
          {/* 副标题 */}
          <p className="font-outfit mt-2 sm:mt-3 lg:mt-4 max-w-[926px] text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[32px] font-medium leading-relaxed lg:leading-[46px] text-black">
            {data.subtitle}
          </p>
          {/* 四卡片：移动端横向滚动，大屏固定一行 */}
          <div className="mt-8 sm:mt-12 lg:mt-16 w-full overflow-x-auto pb-2 -mx-2 px-2 lg:overflow-x-visible lg:mx-0 lg:px-0">
            <div className="flex gap-3 sm:gap-4 lg:gap-[26px] w-max lg:w-auto lg:justify-center">
              {data.features.map((feature, index) => {
                const img = HERO_CARD_IMGS[index];
                return (
                  <div
                    key={feature.label}
                    className="flex-shrink-0 lg:flex-shrink flex min-h-[56px] sm:min-h-[70px] lg:min-h-[clamp(3.5rem,12vw,92.909px)] w-[180px] sm:w-[220px] lg:w-auto lg:flex-1 lg:max-w-[350px] items-center gap-2 sm:gap-3 md:gap-5 rounded-xl sm:rounded-2xl lg:rounded-3xl bg-white/80 px-3 sm:px-4 md:pl-7 md:pr-7 transition hover:shadow-lg cursor-pointer"
                  >
                    <Image
                      src={img.src}
                      alt=""
                      width={img.width}
                      height={img.height}
                      className="shrink-0 max-h-10 sm:max-h-12 md:max-h-14 lg:max-h-16 w-auto object-contain"
                    />
                    <span className="font-outfit text-[#2C3E50] text-sm sm:text-base lg:text-[22px] leading-snug lg:leading-[33px]">
                      {feature.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
          {/* 四卡片下方文案 */}
          <div className="mt-6 text-center font-outfit text-xl font-medium capitalize leading-10 text-white [text-shadow:_0px_2px_4px_rgb(0_0_0_/_0.20)]">
            Join us this summer
          </div>
        </div>
        {/* 5.png 鼠标：固定锚定在封面容器底部，避免不同浏览器/缩放下因文档流高度变化而“脱离骑边效果” */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 flex translate-y-1/2 justify-center">
          <button
            type="button"
            onClick={() => scrollToElement('learning-strategies')}
            className="pointer-events-auto cursor-pointer border-0 bg-transparent p-0 min-w-[1vw] max-w-[35px]"
            aria-label="滚动至 Learning Strategies"
          >
            <Image
              src="/learning_program/hero/5.png"
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
