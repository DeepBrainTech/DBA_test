/**
 * 文件用途：首页入口，负责组装各个Section组件
 * 依赖关系：依赖所有Section组件和数据文件
 * 注意事项：页面只负责布局和组件组装，不包含业务逻辑
 */

'use client';

import { Outfit } from 'next/font/google';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import TrustBadges from '@/components/sections/TrustBadges';
import KeyPrograms from '@/components/sections/KeyPrograms';
import WhyDeepBrain from '@/components/sections/WhyDeepBrain';
import HonorWall from '@/components/sections/HonorWall';
import ParentsVoices from '@/components/sections/ParentsVoices';
import NewsSection from '@/components/sections/NewsSection';
import { programs, trustBadges, advantages, studentAchievements, newsArticles } from '@/data/home';

const outfit = Outfit({ subsets: ['latin'] });

/**
 * 首页组件
 */
export default function Home() {
  return (
    <div className={`min-h-screen bg-[#FBF9F4] ${outfit.className}`}>
      <Navigation />
      <HeroSection />
      <TrustBadges badges={trustBadges} />
      <KeyPrograms programs={programs} />
      <WhyDeepBrain advantages={advantages} />
      <HonorWall achievements={studentAchievements} />
      <ParentsVoices />
      <NewsSection articles={newsArticles} />
      <Footer />
    </div>
  );
}
