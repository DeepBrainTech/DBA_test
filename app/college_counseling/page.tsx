/**
 * 文件用途：升学辅导页面入口，负责组装各个 Section 组件
 * 依赖关系：依赖所有 Section 组件和数据文件
 * 注意事项：页面只负责布局和组件组装，不包含业务逻辑；字体由根布局统一管理
 */

'use client';

import CollegeCounselingHeroSection from '@/components/college_counseling/CollegeCounselingHeroSection';
import StatsSection from '@/components/college_counseling/StatsSection';
import AdmissionLettersSection from '@/components/college_counseling/AdmissionLettersSection';
import ComparisonTableSection from '@/components/college_counseling/ComparisonTableSection';
import ChallengesSection from '@/components/college_counseling/ChallengesSection';
import ServiceMapSection from '@/components/college_counseling/ServiceMapSection';
import AdmissionSection from '@/components/college_counseling/AdmissionSection';
import BookFreeSection from '@/components/college_counseling/BookFreeSection';
import { features, stats, challenges, serviceSteps } from '@/data/college_counseling';

/**
 * 升学辅导页面组件
 */
export default function CollegeCounseling() {
  return (
    <div className="min-h-screen bg-[#FBF9F4]">
      <CollegeCounselingHeroSection features={features} />
      <StatsSection stats={stats} />
      <AdmissionLettersSection />
      <ComparisonTableSection />
      <ChallengesSection challenges={challenges} />
      <ServiceMapSection serviceSteps={serviceSteps} />
      <AdmissionSection />
      <BookFreeSection />
    </div>
  );
}
