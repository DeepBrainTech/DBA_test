/**
 * 文件用途：升学辅导页面英雄区组件
 * 依赖关系：依赖 types/college_counseling.ts 中的 Feature 类型和 scrollToElement 工具函数
 * 注意事项：布局与 Learning Program Hero 一致；-mt-[106px] 使首屏与透明导航重叠
 */

'use client';

import Image from 'next/image';
import { scrollToElement } from '@/lib/scroll';
import type { Feature } from '@/types/college_counseling';

interface CollegeCounselingHeroSectionProps {
  features: Feature[];
}

/**
 * 升学辅导英雄区组件（布局与 Learning Program Hero 一致）
 * @param features 特性数据数组
 */
export default function CollegeCounselingHeroSection({ features }: CollegeCounselingHeroSectionProps) {
  return (
    <section className="relative -mt-[106px] flex flex-col pb-10 bg-[#FFFFFF]">
      {/* 背景图区域：高度与 Learning Program 一致；用 svh 替代 vh 避免导航后封面区上下跳动 */}
      <div className="relative min-h-[45svh] w-full overflow-visible bg-[#e8e8e8] md:min-h-[55svh] lg:min-h-[70svh]">
        <div className="absolute inset-0 z-0 [contain:layout]">
          <Image
            src="/college_counseling/Hero/cover.png"
            alt="College Counseling Background"
            fill
            sizes="100vw"
            className="object-cover object-[50%_15%]"
            priority
          />
          <div className="absolute inset-0 bg-[lightgray]/50" aria-hidden />
        </div>
        {/* 内容区 */}
        <div className="relative z-10 mx-auto flex min-h-full max-w-[min(1280px,95vw)] flex-col items-center justify-center px-4 sm:px-6 lg:px-9 pt-[106px] pb-4 text-center">
          <div className="w-full">
            <h1 className="font-outfit mt-10 sm:mt-14 lg:mt-20 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[80px] font-bold leading-tight lg:leading-[1.75] xl:leading-[140px] text-[#333333]">
              College Counseling
            </h1>
            <p className="font-outfit mx-auto mt-2 sm:mt-3 lg:mt-4 max-w-[926px] text-center text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[32px] font-medium leading-relaxed lg:leading-[46px] text-black">
              A customized journey from aspiration to admission.
            </p>
          </div>
          {/* 卡片行：移动端横向滚动 */}
          <div className="mt-8 sm:mt-12 lg:mt-16 w-full overflow-x-auto pb-2 -mx-2 px-2 lg:overflow-x-visible lg:mx-0 lg:px-0">
            <div className="flex gap-3 sm:gap-4 lg:gap-[26px] w-max lg:w-auto lg:justify-center">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 lg:flex-shrink flex min-h-[56px] sm:min-h-[70px] lg:min-h-[clamp(3.5rem,12vw,92.909px)] w-[180px] sm:w-[220px] lg:w-auto lg:flex-1 lg:max-w-[350px] items-center gap-2 sm:gap-3 md:gap-5 rounded-xl sm:rounded-2xl lg:rounded-3xl bg-white/80 px-3 sm:px-4 md:pl-7 md:pr-7 transition hover:shadow-lg cursor-pointer"
                >
                  <div className="flex shrink-0 items-center justify-center">
                    {feature.icon.startsWith('/') ? (
                      <Image src={feature.icon} alt={feature.title} width={46} height={46} className="max-h-10 sm:max-h-12 md:max-h-14 lg:max-h-16 w-auto object-contain shrink-0" />
                    ) : (
                      <span className="text-lg sm:text-xl lg:text-2xl">{feature.icon}</span>
                    )}
                  </div>
                  <span className="font-outfit text-[#2C3E50] text-sm sm:text-base lg:text-[22px] leading-snug lg:leading-[33px]">
                    {feature.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
          {/* 文案 */}
          <div className="mt-4 sm:mt-6 text-center font-outfit text-base sm:text-lg lg:text-xl font-medium capitalize leading-relaxed lg:leading-10 text-white [text-shadow:_0px_2px_4px_rgb(0_0_0_/_0.20)]">
            Begin Your Journey
          </div>
        </div>
        {/* hero_5 鼠标：固定锚定在封面容器底部，避免不同浏览器/缩放下因文档流高度变化而“脱离骑边效果” */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 flex translate-y-1/2 justify-center">
          <button
            type="button"
            onClick={() => scrollToElement('stats')}
            className="pointer-events-auto cursor-pointer border-0 bg-transparent p-0 min-w-[1vw] max-w-[35px]"
            aria-label="滚动至 Stats 区块"
          >
            <Image
              src="/college_counseling/Hero/hero_5.png"
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
