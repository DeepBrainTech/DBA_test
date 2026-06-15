/**
 * 文件用途：Summer Camp 页面入口，复用 Play Day 数据与组件
 * 依赖关系：依赖 components/play_day 下组件与 play_day 页面数据
 * 注意事项：Navigation 和 Footer 已在根布局统一管理，这里不重复引入
 */

import { Outfit } from 'next/font/google';

import PlayDayHero from '@/components/play_day/PlayDayHero';
import { playDayPageData } from '@/data/play_day';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

export default function SummerCampPage() {
  return (
    <div className={`${outfit.variable} ${outfit.className} min-h-screen`}>
      <main>
        <PlayDayHero data={playDayPageData} />
      </main>
    </div>
  );
}
