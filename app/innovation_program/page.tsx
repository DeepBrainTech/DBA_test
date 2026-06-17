/**
 * 文件用途：Innovation Program 页面入口，负责字体配置与区块拼接
 * 依赖关系：依赖 components/innovation_program 下各区块组件与 innovation_program 页面数据
 * 注意事项：Navigation 和 Footer 已在根布局统一管理，这里不重复引入
 */

import BookFreeTrialSection from '@/components/innovation_program/BookFreeTrialSection';
import Hero from '@/components/innovation_program/Hero';
import LearningStrategies from '@/components/innovation_program/LearningStrategies';
import PricingTemp from '@/components/innovation_program/pricing_temp';
import TrackA from '@/components/innovation_program/trackA';
import TrackB from '@/components/innovation_program/trackB';
import Timeline from '@/components/innovation_program/Timeline';
import { innovationProgramPageData } from '@/data/innovation_program';

export default function Page() {
  const { hero, learningStrategies, pricing, bookFreeTrial } = innovationProgramPageData;
  return (
    <div className="min-h-screen">
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
