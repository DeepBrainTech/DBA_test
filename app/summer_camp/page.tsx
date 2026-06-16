/**

 * 文件用途：Summer Camp 页面入口

 * 依赖关系：依赖 components/summer_camp 下组件与 summer_camp 页面数据

 * 注意事项：Navigation 和 Footer 已在根布局统一管理，这里不重复引入

 */



import SummerCampHero from '@/components/summer_camp/SummerCampHero';

import SummerCampHighlightsSection from '@/components/summer_camp/SummerCampHighlightsSection';

import SummerCampProgramSection from '@/components/summer_camp/SummerCampProgramSection';

import { summerCampPageData } from '@/data/summer_camp';



export default function SummerCampPage() {

  const { hero, highlights, program } = summerCampPageData;



  return (

    <div className="min-h-screen">

      <main>

        <SummerCampHero data={hero} />

        <SummerCampHighlightsSection data={highlights} />

        <SummerCampProgramSection data={program} />

      </main>

    </div>

  );

}

