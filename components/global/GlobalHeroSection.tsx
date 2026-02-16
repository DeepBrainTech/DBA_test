/**
 * 文件用途：全球教育页面英雄区组件
 * 依赖关系：依赖 types/global-education.ts 中的 Feature 类型和 scrollToElement 工具函数
 * 注意事项：包含背景图片、标题、特性卡片和按钮；-mt-[106px] 使首屏与透明导航重叠，内容区 pt-[106px] 使文案在导航下方
 */

'use client';

import Image from 'next/image';
import { scrollToElement } from '@/lib/scroll';
import type { Feature } from '@/types/global-education';

interface GlobalHeroSectionProps {
  features: Feature[];
}

/**
 * 全球教育英雄区组件
 * @param features 特性数据数组
 */
export default function GlobalHeroSection({ features }: GlobalHeroSectionProps) {
  const handleScrollDown = () => {
    scrollToElement('stats');
  };

  return (
    <section className="relative -mt-[106px] flex flex-col">
      {/* 背景图区域高度 */}
      <div className="relative h-[95vh] overflow-visible">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/global/Hero/cover.png"
            alt="Global Education Background"
            fill
            className="object-cover object-[50%_15%]"
            priority
          />
          <div className="absolute inset-0 bg-white/50" aria-hidden />
        </div>

        {/* Hero Content：收窄内容区、整体居中；用上内边距把标题放到设计稿的垂直中段 */}
        <div className="relative z-10 h-full w-full max-w-[1280px] mx-auto px-6 md:px-12 pt-[106px] pb-0 flex flex-col items-center text-center">
          <h1 className="text-[80px] font-bold text-[#333] leading-[140px] mb-[30px]">
            Global Education
          </h1>
          
          <p className="text-[32px] text-black leading-[46px] mb-[80px] max-w-[800px] font-medium">
            A customized journey from aspiration to admission.
          </p>
          
          <div className="flex flex-wrap justify-center items-stretch gap-[26px] mb-[140px] w-full max-w-[1100px] mx-auto">
            {features.map((feature, idx) => (
              <div 
                key={idx} 
                className="bg-white/80 backdrop-blur-sm border border-[#E8F4FC] rounded-[20px] px-[27px] py-[20px] hover:shadow-lg transition cursor-pointer flex items-center gap-[20px] w-[400px] min-w-[520px] shrink-0 h-[94px]"
              >
                <div className="text-[33px] leading-[46px] flex-shrink-0 w-[46px] h-[46px] flex items-center justify-center">
                  {feature.icon.startsWith('/') ? (
                    <Image src={feature.icon} alt={feature.title} width={46} height={46} className="object-contain" />
                  ) : (
                    <span>{feature.icon}</span>
                  )}
                </div>
                <h3 className="text-[23px] text-[#2C3E50] font-normal text-left leading-[33px] whitespace-nowrap flex-shrink-0">
                  {feature.title}
                </h3>
              </div>
            ))}
          </div>

          {/* Begin Your Journey 位置：上方间距由上面卡片的 mb-[80px] 控制；下方间距由下面鼠标的 mt-[60px] 控制；加 mt-* / mb-* 可微调本段上下位置 */}
          <p
            role="button"
            tabIndex={0}
            onClick={handleScrollDown}
            onKeyDown={(e) => e.key === 'Enter' && handleScrollDown()}
            className="text-white text-[26px] font-medium cursor-pointer hover:opacity-90"
          >
            Begin Your Journey
          </p>

          {/* 设计稿：鼠标在图片下边缘，与 Begin Your Journey 同款点击/按键跳转效果 */}
          <div
            role="button"
            tabIndex={0}
            onClick={handleScrollDown}
            onKeyDown={(e) => e.key === 'Enter' && handleScrollDown()}
            className="mt-[10px] flex justify-center -mb-8 cursor-pointer hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9B8FD8] focus-visible:ring-offset-2 rounded"
          >
            <Image
              src="/global/Hero/hero_5.png"
              alt="向下滚动"
              width={35}
              height={35}
              className="object-contain"
            />
          </div>
        </div>
      </div>
      {/* 下方白条：承接鼠标下半部分，与下一节衔接 */}
      <div className="h-10 bg-white" aria-hidden />
    </section>
  );
}

