/**
 * 文件用途：全球教育页面入口，负责组装各个Section组件
 * 依赖关系：依赖所有Section组件和数据文件
 * 注意事项：页面只负责布局和组件组装，不包含业务逻辑
 */

/**
 * 文件用途：全球教育页面入口，负责组装各个Section组件
 * 依赖关系：依赖所有Section组件和数据文件
 * 注意事项：页面只负责布局和组件组装，不包含业务逻辑
 * Navigation 和 Footer 已在根 layout.tsx 中统一管理，无需在此导入
 */

'use client';

import { Outfit } from 'next/font/google';
import GlobalHeroSection from '@/components/global/GlobalHeroSection';
import StatsSection from '@/components/global/StatsSection';
import AdmissionLettersSection from '@/components/global/AdmissionLettersSection';
import ComparisonTableSection from '@/components/global/ComparisonTableSection';
import ChallengesSection from '@/components/global/ChallengesSection';
import ServiceMapSection from '@/components/global/ServiceMapSection';
import PricingSection from '@/components/global/PricingSection';
import AdmissionSection from '@/components/global/AdmissionSection';
import BookFreeSection from '@/components/global/BookFreeSection';
import { features, stats, challenges, serviceSteps } from '@/data/global-education';

const outfit = Outfit({ subsets: ['latin'], weight: ['400', '700'] });

/**
 * 全球教育页面组件
 */
export default function GlobalEducation() {
  return (
    <div className={`min-h-screen bg-[#FBF9F4] ${outfit.className}`}>
      <GlobalHeroSection features={features} />
      <StatsSection stats={stats} />
      <AdmissionLettersSection />
      <ComparisonTableSection />
      <ChallengesSection challenges={challenges} />
      <ServiceMapSection serviceSteps={serviceSteps} />
      <PricingSection />
      <AdmissionSection />
      <BookFreeSection />
    </div>
  );
}
