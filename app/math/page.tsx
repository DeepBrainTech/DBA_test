/**
 * 文件用途：数学页面入口，负责组装各个Section组件
 * 依赖关系：依赖所有数学相关的Section组件与 data/math
 * 注意事项：页面只负责布局和组件组装；Hero 与 summer_camp 结构一致，需 Outfit 字体
 */

'use client';

import { Outfit } from 'next/font/google';

import MathHero from '@/components/math/MathHero';
import MathTeachingPhilosophy from '@/components/math/MathTeachingPhilosophy';
import AMCProgram from '@/components/math/AMCProgram';
import PreAMCProgram from '@/components/math/PreAMCProgram';
import PricingSection from '@/components/math/PricingSection';
import LimitedTimeOffer from '@/components/math/LimitedTimeOffer';
import UnlockPotential from '@/components/math/UnlockPotential';
import { mathPageData } from '@/data/math';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

export default function MathPage() {
  return (
    <div className={`${outfit.variable} ${outfit.className} min-h-screen`}>
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