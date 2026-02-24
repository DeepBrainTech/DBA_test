/**
 * 文件用途：全球教育页面英雄区组件
 * 依赖关系：依赖 types/global-education.ts 中的 Feature 类型和 scrollToElement 工具函数
 * 注意事项：布局与 Summer Camp Hero 一致；-mt-[106px] 使首屏与透明导航重叠
 */

'use client';

import Image from 'next/image';
import { scrollToElement } from '@/lib/scroll';
import type { Feature } from '@/types/global-education';

interface GlobalHeroSectionProps {
  features: Feature[];
}

/**
 * 全球教育英雄区组件（布局与 Summer Camp Hero 一致）
 * @param features 特性数据数组
 */
export default function GlobalHeroSection({ features }: GlobalHeroSectionProps) {
  return (
    <section className="relative -mt-[106px] flex flex-col pb-10 bg-[#FFFFFF]">
      {/* 背景图区域：高度与 Summer Camp 一致；用 svh 替代 vh 避免导航后封面区上下跳动 */}
      <div className="relative min-h-[45svh] w-full overflow-visible bg-[#e8e8e8] md:min-h-[55svh] lg:min-h-[70svh]">
        <div className="absolute inset-0 z-0 [contain:layout]">
          <Image
            src="/global/Hero/cover.png"
            alt="Global Education Background"
            fill
            sizes="100vw"
            className="object-cover object-[50%_15%]"
            priority
          />
          <div className="absolute inset-0 bg-[lightgray]/50" aria-hidden />
        </div>
        {/* 内容区：整体 max-w-[1600px] 使卡片行更宽；标题/副标题用内层 max-w-[1344px] 保持与页面一致 */}
        <div className="relative z-10 mx-auto flex min-h-full max-w-[1600px] flex-col items-center justify-center px-9 pt-[106px] pb-4 text-center">
          <div className="w-full max-w-[1344px]">
            <h1 className="font-outfit mt-20 text-5xl font-bold leading-[1.75] text-[#333333] md:text-6xl lg:text-[80px] lg:leading-[140px]">
              Global Education
            </h1>
            <p className="font-outfit mx-auto mt-4 max-w-[926px] text-center text-xl font-medium leading-[46px] text-black md:text-2xl lg:text-[32px]">
              A customized journey from aspiration to admission.
            </p>
          </div>
          {/* 卡片行：使用 1600px 内容区宽度，四个特性按钮更宽 */}
          <div className="mt-16 flex w-full flex-nowrap items-stretch justify-center gap-[26px]">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="flex min-h-[clamp(3.5rem,12vw,92.909px)] min-w-0 flex-1 max-w-[1920px] min-[1400px]:min-w-[350px] items-center gap-3 rounded-3xl bg-white/80 pl-4 pr-4 transition hover:shadow-lg cursor-pointer md:gap-5 md:pl-7 md:pr-7"
              >
                <div className="flex shrink-0 items-center justify-center">
                  {feature.icon.startsWith('/') ? (
                    <Image src={feature.icon} alt={feature.title} width={46} height={46} className="max-h-14 w-auto object-contain md:max-h-16 shrink-0" />
                  ) : (
                    <span className="text-2xl">{feature.icon}</span>
                  )}
                </div>
                <span className="font-outfit text-[#2C3E50] text-base leading-[33px] lg:text-[22px] lg:whitespace-nowrap">
                  {feature.title}
                </span>
              </div>
            ))}
          </div>
          {/* 与 Summer Camp「Join us this summer」同款样式的文案 */}
          <div className="mt-6 text-center font-outfit text-xl font-medium capitalize leading-10 text-white [text-shadow:_0px_2px_4px_rgb(0_0_0_/_0.20)]">
            Begin Your Journey
          </div>
          {/* 与 Summer Camp 一致：文档流内紧跟文案，mt-4 -mb-[45px]，按钮与图片尺寸类一致 */}
          <div className="mt-4 -mb-[45px] flex justify-center">
            <button
              type="button"
              onClick={() => scrollToElement('stats')}
              className="cursor-pointer border-0 bg-transparent p-0 min-w-[1vw] max-w-[35px]"
              aria-label="滚动至 Stats 区块"
            >
              <Image
                src="/global/Hero/hero_5.png"
                alt=""
                width={1200}
                height={600}
                className="h-auto w-full object-contain"
                unoptimized
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

