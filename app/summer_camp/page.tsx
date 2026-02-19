/**
 * 文件用途：Summer Camp 页面入口，负责字体配置与区块拼接
 * 依赖关系：依赖 components/summer_camp 下各区块组件与 summer_camp 页面数据
 * 注意事项：Navigation 和 Footer 已在根布局统一管理，这里不重复引入
 */

import { Outfit } from 'next/font/google';

import Hero from '@/components/summer_camp/Hero';
import LearningStrategies from '@/components/summer_camp/LearningStrategies';
import TrackA from '@/components/summer_camp/trackA';
import { summerCampPageData } from '@/data/summer_camp';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

export default function Page() {
  const { hero, learningStrategies } = summerCampPageData;
  return (
    <div className={`${outfit.variable} ${outfit.className} min-h-screen`}>
      <main>
        <Hero data={hero} />
        <LearningStrategies data={learningStrategies} />
        <TrackA />
      </main>
    </div>
  );
}
