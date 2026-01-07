/**
 * 文件用途：全球教育页面入口，负责组装各个Section组件
 * 依赖关系：依赖所有Section组件和数据文件
 * 注意事项：页面只负责布局和组件组装，不包含业务逻辑
 */

'use client';

import { Outfit } from 'next/font/google';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import GlobalHeroSection from '@/components/global/GlobalHeroSection';
import StatsSection from '@/components/global/StatsSection';
import AdmissionLettersSection from '@/components/global/AdmissionLettersSection';
import ComparisonTableSection from '@/components/global/ComparisonTableSection';
import ChallengesSection from '@/components/global/ChallengesSection';
import ServiceMapSection from '@/components/global/ServiceMapSection';
import FacultySection from '@/components/global/FacultySection';
import CTASection from '@/components/global/CTASection';
import { features, challenges, serviceSteps } from '@/data/global-education';

const outfit = Outfit({ subsets: ['latin'] });

/**
 * 全球教育页面组件
 */
export default function GlobalEducation() {
  return (
    <div className={`min-h-screen bg-[#FBF9F4] ${outfit.className}`}>
      <Navigation />
      <GlobalHeroSection features={features} />
      <StatsSection />
      <AdmissionLettersSection />
      <ComparisonTableSection />
      <ChallengesSection challenges={challenges} />
      <ServiceMapSection serviceSteps={serviceSteps} />
      <FacultySection />
      <CTASection />
      <Footer />
    </div>
  );
}
