/**
 * 文件用途：首页入口，负责组装各个Section组件
 * 依赖关系：依赖所有Section组件和数据文件
 * 注意事项：页面只负责布局和组件组装，不包含业务逻辑
 */

/**
 * 文件用途：首页入口，负责组装各个Section组件
 * 依赖关系：依赖所有Section组件和数据文件
 * 注意事项：页面只负责布局和组件组装，不包含业务逻辑
 * Navigation 和 Footer 已在根 layout.tsx 中统一管理，无需在此导入
 */

'use client';

import { Outfit } from 'next/font/google';
import HeroSection from '@/components/home/HeroSection';
import TrustBadges from '@/components/home/TrustBadges';
import KeyPrograms from '@/components/home/KeyPrograms';
import WhyDeepBrain from '@/components/home/WhyDeepBrain';
import HonorWall from '@/components/home/HonorWall';
import ParentsVoices from '@/components/home/ParentsVoices';
import NewsSection from '@/components/home/NewsSection';
import { programs, trustBadges, advantages, studentAchievements, newsArticles } from '@/data/home';

const outfit = Outfit({ subsets: ['latin'], weight: ['400', '700'] });

/**
 * 首页组件
 */
export default function Home() {
  return (
    <div className={`min-h-screen bg-[#FBF9F4] ${outfit.className}`}>
      <HeroSection />
      <TrustBadges badges={trustBadges} />
      <KeyPrograms programs={programs} />
      <WhyDeepBrain advantages={advantages} />
      <HonorWall achievements={studentAchievements} />
      <ParentsVoices />
      <NewsSection articles={newsArticles} />
    </div>
  );
}
