/**
 * 文件用途：Learning Program 页面入口，负责字体配置与区块拼接
 * 依赖关系：依赖 components/learning_program 下各区块组件与 learning_program 页面数据
 * 注意事项：Navigation 和 Footer 已在根布局统一管理，这里不重复引入
 */

import { Outfit } from 'next/font/google';

import BookFreeTrialSection from '@/components/learning_program/BookFreeTrialSection';
import Hero from '@/components/learning_program/Hero';
import LearningStrategies from '@/components/learning_program/LearningStrategies';
import PricingTemp from '@/components/learning_program/pricing_temp';
import TrackA from '@/components/learning_program/trackA';
import TrackB from '@/components/learning_program/trackB';
import Timeline from '@/components/learning_program/Timeline';
import { learningProgramPageData } from '@/data/learning_program';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

export default function Page() {
  const { hero, learningStrategies, pricing, bookFreeTrial } = learningProgramPageData;
  return (
    <div className={`${outfit.variable} ${outfit.className} min-h-screen`}>
      <main>
        <Hero data={hero} />
        <LearningStrategies data={learningStrategies} showComparisonSection />
        <TrackA />
        <TrackB />
        <Timeline />
        <PricingTemp data={pricing} />
        <BookFreeTrialSection data={bookFreeTrial} />
      </main>
    </div>
  );
}
