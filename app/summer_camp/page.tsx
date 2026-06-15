/**
 * 文件用途：Summer Camp 页面入口
 * 依赖关系：依赖 components/summer_camp 下组件与 summer_camp 页面数据
 * 注意事项：Navigation 和 Footer 已在根布局统一管理，这里不重复引入
 */

import { Outfit } from 'next/font/google';

import SummerCampHero from '@/components/summer_camp/SummerCampHero';
import { summerCampPageData } from '@/data/summer_camp';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

export default function SummerCampPage() {
  return (
    <div className={`${outfit.variable} ${outfit.className} min-h-screen`}>
      <main>
        <SummerCampHero data={summerCampPageData} />
      </main>
    </div>
  );
}
