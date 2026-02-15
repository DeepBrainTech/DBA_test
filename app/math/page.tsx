/**
 * 文件用途：数学页面入口，负责组装各个Section组件
 * 依赖关系：依赖所有数学相关的Section组件
 * 注意事项：页面只负责布局和组件组装，不包含业务逻辑
 * Navigation 和 Footer 已在根 layout.tsx 中统一管理，无需在此导入
 */

'use client';

import MathHero from '@/components/math/MathHero';
import MathTeachingPhilosophy from '@/components/math/MathTeachingPhilosophy';
import PreAMCProgram from '@/components/math/PreAMCProgram';
import SevenStepsMethod from '@/components/math/SevenStepsMethod';
import PricingSection from '@/components/math/PricingSection';
import LimitedTimeOffer from '@/components/math/LimitedTimeOffer';
import MathArtPlayDay from '@/components/math/MathArtPlayDay';
import UnlockPotential from '@/components/math/UnlockPotential';
import { scrollToElement } from '@/lib/scroll';

export default function MathPage() {
  return (
    <>
      <div className="relative">
        <MathHero />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center">
          <button
            onClick={() => scrollToElement('math-teaching')}
            className="text-white text-[26px] font-medium hover:opacity-80 transition cursor-pointer mb-[5px]"
          >
            Unlock the World of Math
          </button>
          <div className="flex items-center justify-center w-[40px] h-[66px] rounded-[20px] border-[2.66px] border-[#7EC97E] bg-[#EBFFEB] shadow-lg cursor-pointer translate-y-1/2" onClick={() => scrollToElement('math-teaching')}>
            <div className="w-[10px] h-[10px] rounded-full bg-[#7EC97E] animate-bounce" style={{ animationDuration: '1.5s' }} />
          </div>
        </div>
      </div>
      <MathTeachingPhilosophy />
      <PreAMCProgram />
      <SevenStepsMethod />
      <PricingSection />
      <LimitedTimeOffer />
      <MathArtPlayDay />
      <UnlockPotential />
    </>
  );
}