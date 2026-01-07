/**
 * 文件用途：全球教育页面英雄区组件
 * 依赖关系：依赖 types/global-education.ts 中的 Feature 类型和 scrollToElement 工具函数
 * 注意事项：包含背景图片、标题、特性卡片和按钮
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
    scrollToElement('challenges');
  };

  return (
    <section className="relative min-h-screen overflow-hidden flex flex-col">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/global/cover.svg"
          alt="Global Education Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-[1920px] mx-auto px-[81px] py-[120px] flex-1 flex flex-col items-center justify-center text-center">
        {/* Main Title */}
        <h1 className="text-[80px] font-bold text-[#333] leading-[140px] mb-[30px]">
          Global Education
        </h1>
        
        <p className="text-[32px] text-black leading-[46px] mb-[80px] max-w-[800px] font-medium">
          A customized journey from aspiration to admission.
        </p>
        
        {/* Feature Cards */}
        <div className="flex items-start gap-[26px] mb-[80px] w-full max-w-[1759px]">
          {features.map((feature, idx) => (
            <div 
              key={idx} 
              className="bg-white/80 backdrop-blur-sm border border-[#E8F4FC] rounded-[20px] px-[27px] py-[20px] hover:shadow-lg transition cursor-pointer flex items-center gap-[20px] flex-1 h-[94px]"
            >
              <div className="text-[33px] leading-[46px] flex-shrink-0">
                {feature.icon}
              </div>
              <h3 className="text-[23px] text-[#2C3E50] font-normal text-left leading-[33px]">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Begin Your Journey Button */}
        <button 
          onClick={handleScrollDown}
          className="px-[60px] h-[90px] bg-gradient-to-b from-[#9B8FD8] to-[#8A7CC7] text-white text-[26px] rounded-[40px] hover:shadow-xl transition font-medium"
        >
          Begin Your Journey
        </button>
      </div>
    </section>
  );
}

