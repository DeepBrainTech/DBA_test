/**
 * 文件用途：Learning Strategies 完整区块，含顶部引言、四张策略卡、底部对比表
 * 依赖关系：依赖 StrategyCard、types/summer_camp 的 SummerCampLearningStrategiesData
 * 注意事项：样式与设计稿一致，使用 Outfit 字体与 rose/green 主题色；策略卡由 StrategyCard 组件渲染
 */

import StrategyCard from '@/components/summer_camp/StrategyCard';
import type { SummerCampLearningStrategiesData } from '@/types/summer_camp';

interface LearningStrategiesProps {
  /** Learning Strategies 区块数据 */
  data: SummerCampLearningStrategiesData;
}

export default function LearningStrategies({ data }: LearningStrategiesProps) {
  const introParagraphs = data.introQuote.text.split('\n\n');

  return (
    <section
      id="learning-strategies"
      className="w-full max-w-[1344px] px-9 pt-24 pb-16 mx-auto flex flex-col justify-start items-start gap-16"
      aria-label="Learning Strategies"
    >
        {/* 1. 顶部引言块：按设计稿尺寸与定位，绿色渐变 + 引号 + 正文 + 署名 */}
        <div className="w-full max-w-[1268px] mx-auto h-[468px] relative rounded-3xl overflow-hidden bg-gradient-to-r from-green-400/0 to-green-400/0">
          {/* 引号：设计稿 left/top 约 28px */}
          <div className="w-7 h-16 left-[27.88px] top-[27.88px] absolute opacity-20">
            <div className="left-0 top-[-0.46px] absolute text-green-400 text-7xl font-normal font-['Outfit'] leading-[69.70px]">
              &quot;
            </div>
          </div>
          {/* 正文+署名：设计稿 left 约 114px, top 约 56px，宽 1041px */}
          <div className="w-full max-w-[1041px] left-[113.83px] top-[56.07px] absolute inline-flex flex-col justify-start items-start gap-5">
            <div className="self-stretch h-80 relative">
              <div className="w-full max-w-[1028px] left-[6px] top-[0.10px] absolute text-center text-slate-700 text-xl font-normal font-['Outfit'] leading-7">
                {introParagraphs.map((p, i) => (
                  <span key={i}>
                    {p.replace(/\n/g, ' ')}
                    {i < introParagraphs.length - 1 && (
                      <>
                        <br />
                        <br />
                      </>
                    )}
                  </span>
                ))}
              </div>
            </div>
            <div className="self-stretch h-20 inline-flex justify-center items-center">
              <div className="text-slate-500 text-lg font-normal font-['Outfit'] leading-7">
                {data.introQuote.attribution}
              </div>
            </div>
          </div>
        </div>

        {/* 2. 区块标题：badge + 主标题 + 副标题；*/}
        <div className="w-full mt-12 flex flex-col items-center text-center gap-8">
          <div className="inline-flex items-center gap-3 rounded-3xl bg-rose-400/10 px-5 py-3.5">
            <span className="text-3xl leading-9 font-['Outfit']" aria-hidden>
              {data.badgeIcon}
            </span>
            <span className="text-rose-400 text-xl font-normal font-['Outfit'] leading-7">
              {data.title}
            </span>
          </div>
          <h2 className="text-center justify-start text-slate-700 text-5xl font-bold font-['Outfit'] leading-[48.32px]">
            {data.heading}
          </h2>
          <p className="max-w-[892px] text-slate-500 text-xl font-normal font-['Outfit'] leading-7 text-center">
            {data.subtitle}
          </p>
        </div>

        {/* 3. 四张策略卡：Identify, Innovate, Prototype, Present（由 StrategyCard 组件渲染） */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
          {data.strategies.map((card, index) => (
            <StrategyCard key={card.title} card={card} index={index} />
          ))}
        </div>

        {/* 4. 底部对比表：Tailored Programs for Every Learner（与设计稿结构一致） */}
        <div className="self-stretch h-[514.37px] relative bg-gradient-to-r from-red-400/10 to-red-400/10 rounded-3xl overflow-hidden">
          <div className="w-7 h-16 left-[27.88px] top-[27.88px] absolute opacity-20">
            <div className="left-0 top-[-0.46px] absolute justify-start text-rose-400 text-7xl font-normal font-['Outfit'] leading-[69.70px]">
              &quot;
            </div>
          </div>
          <div className="w-[1040.82px] h-96 left-[114.30px] top-[55.76px] absolute">
            <div className="w-[1040.82px] h-10 left-0 top-0 absolute">
              <div className="left-[288.36px] top-[-0.23px] absolute text-center justify-start text-slate-700 text-3xl font-semibold font-['Outfit'] leading-10">
                {data.comparisonSection.title}
              </div>
            </div>
            <div className="w-[1041px] h-72 left-[0.52px] top-[71.03px] absolute">
              <div className="w-[1041px] h-80 px-5 pt-6 left-0 top-[0.49px] absolute bg-white rounded-2xl inline-flex flex-col justify-start items-start gap-4">
                <div className="self-stretch h-9 border-b border-zinc-100 inline-flex justify-start items-start">
                  <div className="w-[1003.83px] h-7 relative">
                    <div className="w-64 left-[0.41px] top-[0.91px] absolute text-center justify-start text-rose-400 text-xl font-semibold font-['Outfit'] leading-7 whitespace-nowrap">
                      {data.comparisonSection.columnHeaders.feature}
                    </div>
                    <div className="w-80 left-[277.41px] top-[0.41px] absolute text-center justify-start text-rose-400 text-xl font-semibold font-['Outfit'] leading-7 whitespace-nowrap">
                      {data.comparisonSection.columnHeaders.trackA}
                    </div>
                    <div className="w-80 left-[653.41px] top-[0.41px] absolute text-center justify-start text-rose-400 text-xl font-semibold font-['Outfit'] leading-7 whitespace-nowrap">
                      {data.comparisonSection.columnHeaders.trackB}
                    </div>
                  </div>
                </div>
                {data.comparisonSection.rows.map((row, i) => (
                  <div
                    key={row.feature}
                    className={`self-stretch h-9 inline-flex justify-start items-start ${
                      i < data.comparisonSection.rows.length - 1
                        ? 'border-b border-zinc-100'
                        : ''
                    }`}
                  >
                    <div className="w-[1003.83px] h-7 relative">
                      <div className="w-64 left-[0.41px] top-[0.91px] absolute text-center justify-start text-slate-500 text-xl font-semibold font-['Outfit'] leading-7 whitespace-nowrap">
                        {row.feature}
                      </div>
                      <div className="w-80 left-[277.41px] top-[0.41px] absolute text-center justify-start text-slate-500 text-xl font-normal font-['Outfit'] leading-7 whitespace-nowrap">
                        {row.trackA}
                      </div>
                      <div className="w-80 left-[653.41px] top-[0.41px] absolute text-center justify-start text-slate-500 text-xl font-normal font-['Outfit'] leading-7 whitespace-nowrap">
                        {row.trackB}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
    </section>
  );
}
