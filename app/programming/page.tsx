/**
 * 文件用途：编程页面入口，负责组装编程相关组件
 * 依赖关系：依赖 @/data/programming 与 @/components/programming/* 各 Section
 * 注意事项：页面只负责布局和组件组装，不包含业务逻辑
 * Navigation 和 Footer 已在根 layout.tsx 中统一管理，无需在此导入
 */

import { programmingHeroData } from '@/data/programming';
import ProgrammingHero from '@/components/programming/ProgrammingHero';
import ProgrammingPillars from '@/components/programming/ProgrammingPillars';
import ProgrammingInnovators from '@/components/programming/ProgrammingInnovators';
import ProgrammingStats from '@/components/programming/ProgrammingStats';
import ProgrammingCourseRoadmap from '@/components/programming/ProgrammingCourseRoadmap';
import ProgrammingPricingSection from '@/components/programming/ProgrammingPricingSection';
import ProgrammingValueSection from '@/components/programming/ProgrammingValueSection';
import ConsultationCTA from '@/components/programming/ConsultationCTA';

export default function Page() {
  return (
    <main>
      <ProgrammingHero data={programmingHeroData} />
      <ProgrammingPillars />
      <ProgrammingInnovators />
      <ProgrammingStats />
      <ProgrammingCourseRoadmap />
      <ProgrammingPricingSection />
      <ProgrammingValueSection />
      <ConsultationCTA />
    </main>
  );
}
