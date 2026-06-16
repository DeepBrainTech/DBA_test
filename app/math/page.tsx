/**
 * 文件用途：数学页面入口，负责组装各个Section组件
 * 依赖关系：依赖所有数学相关的Section组件与 data/math
 * 注意事项：页面只负责布局和组件组装；字体由根布局统一管理
 */

'use client';

import MathHero from '@/components/math/MathHero';
import MathTeachingPhilosophy from '@/components/math/MathTeachingPhilosophy';
import AMCProgram from '@/components/math/AMCProgram';
import PreAMCProgram from '@/components/math/PreAMCProgram';
import PricingSection from '@/components/math/PricingSection';
import LimitedTimeOffer from '@/components/math/LimitedTimeOffer';
import UnlockPotential from '@/components/math/UnlockPotential';
import { mathPageData } from '@/data/math';

export default function MathPage() {
  return (
    <div className="min-h-screen">
      <main>
        <MathHero data={mathPageData.hero} />
        <MathTeachingPhilosophy />
        <PreAMCProgram data={mathPageData.preAMCProgram} classTimeWeChat={mathPageData.classTimeWeChat} />
        <AMCProgram
          data={mathPageData.amc810Program}
          sevenStepsData={mathPageData.sevenStepsMethod}
          classTimeWeChat={mathPageData.classTimeWeChat}
        />
        <PricingSection />
        <LimitedTimeOffer />
        <UnlockPotential data={mathPageData.unlockPotential} />
      </main>
    </div>
  );
}
