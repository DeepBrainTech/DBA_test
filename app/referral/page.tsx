/**
 * 文件用途：Referral Program 页面入口，只负责读取数据并组装区块
 * 依赖关系：依赖 data/referral.ts 与 components/referral 下的页面区块
 * 注意事项：Navigation 与 Footer 已由根布局统一渲染，此处不重复引入
 */

import ReferralAmbassadorSection from '@/components/referral/ReferralAmbassadorSection';
import ReferralFaqSection from '@/components/referral/ReferralFaqSection';
import ReferralHeroSection from '@/components/referral/ReferralHeroSection';
import ReferralJourneySection from '@/components/referral/ReferralJourneySection';
import ReferralRewardsSection from '@/components/referral/ReferralRewardsSection';
import { referralPageData } from '@/data/referral';

export default function ReferralPage() {
  const { hero, journey, rewards, ambassador, faq } = referralPageData;

  return (
    <main className="min-h-screen bg-[#FBF9F4]">
      <ReferralHeroSection content={hero} />
      <ReferralJourneySection {...journey} />
      <ReferralRewardsSection {...rewards} />
      <ReferralAmbassadorSection content={ambassador} />
      <ReferralFaqSection {...faq} />
    </main>
  );
}
