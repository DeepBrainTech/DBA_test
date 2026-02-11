/**
 * 文件用途：数学页面入口，负责组装各个Section组件
 * 依赖关系：依赖所有数学相关的Section组件
 * 注意事项：页面只负责布局和组件组装，不包含业务逻辑
 * Navigation 和 Footer 已在根 layout.tsx 中统一管理，无需在此导入
 */

import MathHero from '@/components/math/MathHero';
import MathTeachingPhilosophy from '@/components/math/MathTeachingPhilosophy';
import MeetOurFaculty from '@/components/math/MeetOurFaculty';
import PreAMCProgram from '@/components/math/PreAMCProgram';
import SevenStepsMethod from '@/components/math/SevenStepsMethod';
import PricingSection from '@/components/math/PricingSection';
import LimitedTimeOffer from '@/components/math/LimitedTimeOffer';
import MathArtPlayDay from '@/components/math/MathArtPlayDay';
import UnlockPotential from '@/components/math/UnlockPotential';

export default function MathPage() {
  return (
    <>
      <MathHero />
      <MathTeachingPhilosophy />
      <MeetOurFaculty />
      <PreAMCProgram />
      <SevenStepsMethod />
      <PricingSection />
      <LimitedTimeOffer />
      <MathArtPlayDay />
      <UnlockPotential />
    </>
  );
}