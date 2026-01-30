/**
 * 文件用途：关于我们页面入口，仅负责布局与组件拼接
 * 依赖关系：Navigation 和 Footer 已在根 layout.tsx 中统一管理；本页仅引入 about 下各区块组件
 * 注意事项：业务内容均在 components/about 中，此处不写业务逻辑；本页统一使用 Outfit 字体
 */

import { Outfit } from 'next/font/google';
import AboutHeroSection from '@/components/about/AboutHeroSection';
import DeepBrainApproachSection from '@/components/about/DeepBrainApproachSection';
import LocationSection from '@/components/about/LocationSection';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

export default function AboutPage() {
  return (
    <div className={`${outfit.variable} ${outfit.className} min-h-screen bg-[#FBF9F4] pt-[106px]`}>
      <AboutHeroSection />
      <DeepBrainApproachSection />
      <LocationSection />
    </div>
  );
}
