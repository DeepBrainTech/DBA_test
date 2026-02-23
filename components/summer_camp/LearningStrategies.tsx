/**
 * 文件用途：Learning Strategies 完整区块，含顶部引言、四张策略卡、底部对比表
 * 依赖关系：依赖 next/image、StrategyCard、types/summer_camp 的 SummerCampLearningStrategiesData
 * 注意事项：样式与设计稿一致，使用 Outfit 字体与 rose/green 主题色；策略卡由 StrategyCard 组件渲染；区块标题图标使用 learning_strategies.png
 */

import Image from 'next/image';
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
      className="w-full px-14 pt-24 pb-16 flex flex-col justify-start items-start gap-16"
      aria-label="Learning Strategies"
    >
      <div className="w-full max-w-[1344px] mx-auto px-9 flex flex-col justify-start items-start gap-16">
        {/* 1. 顶部引言块：按设计稿尺寸与定位，绿色渐变 + 引号 + 正文 + 署名；文字区略宽 */}
        <div className="w-full max-w-[1200px] mx-auto h-[468px] relative rounded-3xl overflow-hidden bg-gradient-to-r from-green-400/0 to-green-400/0">
          {/* 引号：设计稿 left/top 约 28px */}
          <div className="w-7 h-16 left-[27.88px] top-[27.88px] absolute opacity-20">
            <div className="left-0 top-[-0.46px] absolute text-green-400 text-5xl md:text-6xl font-normal font-['Outfit'] leading-tight">
              &quot;
            </div>
          </div>
          {/* 正文+署名：设计稿 left 约 114px, top 约 56px；内容区略宽 */}
          <div className="w-full max-w-[960px] left-[125px] top-[56.07px] absolute inline-flex flex-col justify-start items-start gap-5">
            <div className="self-stretch h-80 relative">
              <div className="w-full max-w-[925px] left-[6px] top-[0.10px] absolute text-center text-slate-700 text-base font-normal font-['Outfit'] leading-relaxed md:text-lg">
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
              <div className="text-slate-500 text-base font-normal font-['Outfit'] leading-7">
                {data.introQuote.attribution}
              </div>
            </div>
          </div>
        </div>

        {/* 2. 区块标题：badge + 主标题 + 副标题；*/}
        <div className="w-full mt-12 flex flex-col items-center text-center gap-8">
          {/* 与首页 section 标签、主标题、副标题字号一致 */}
          <div className="inline-flex items-center gap-3 rounded-3xl bg-rose-400/10 px-5 py-3.5">
            <Image
              src="/summer_camp/Learning_Strategies/learning_strategies.png"
              alt=""
              width={30}
              height={30}
              className="w-5 h-5 md:w-7 md:h-8 object-contain shrink-0"
              aria-hidden
            />
            <span className="text-rose-400 text-lg md:text-xl font-normal font-['Outfit'] leading-7">
              {data.title}
            </span>
          </div>
          <h2 className="text-center justify-start text-slate-700 text-3xl md:text-4xl font-bold font-['Outfit'] leading-tight">
            {data.heading}
          </h2>
          <p className="max-w-[892px] text-slate-500 text-base md:text-lg font-normal font-['Outfit'] leading-relaxed text-center">
            {data.subtitle}
          </p>
        </div>

        {/* 3. 四张策略卡：Identify, Innovate, Prototype, Present（由 StrategyCard 组件渲染） */}
        <div className="w-full  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
          {data.strategies.map((card, index) => (
            <StrategyCard key={card.title} card={card} index={index} />
          ))}
        </div>

        {/* 4. 底部对比表：与上方四张策略卡同宽(w-full)，按设计稿(图1) */}
        <div className="w-full bg-gradient-to-r from-red-400/10 to-red-400/10 rounded-3xl overflow-hidden">
          {/* 引号容器：左上角，引号与容器上、左边距一致 */}
          <div className="flex justify-start items-start pt-3 pl-3 pb-0 md:pt-4 md:pl-4">
            <div className="leading-none opacity-20 text-rose-400 text-5xl md:text-6xl font-normal font-['Outfit']" aria-hidden>
              &quot;
            </div>
          </div>
          {/* 内容区：紧贴容器上边距，标题在粉区内居中，与白卡留出设计稿中的间距 */}
          <div className="px-6 pt-0 pb-14 md:px-15 md:pt-1 md:pb-15">
            <h3 className="text-center text-slate-700 text-xl md:text-2xl font-bold font-['Outfit'] leading-tight">
              {data.comparisonSection.title}
            </h3>
            {/* 白卡：仅包表格，设计稿中的轻微阴影与圆角 */}
            <div className="mt-8 w-full overflow-hidden rounded-2xl bg-white shadow-sm px-4 py-5 md:px-5 md:py-6 md:mt-10">
              {/* 表头：三列网格，设计稿中表头有极浅背景区分 */}
              <div className="grid grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)_minmax(0,1.5fr)] gap-4 border-b border-zinc-100 pb-3 text-base md:text-lg font-['Outfit'] leading-7 bg-zinc-50/80">
                <div className="text-center font-semibold text-rose-400">
                  {data.comparisonSection.columnHeaders.feature}
                </div>
                <div className="text-center font-semibold text-rose-400">
                  {data.comparisonSection.columnHeaders.trackA}
                </div>
                <div className="text-center font-semibold text-rose-400">
                  {data.comparisonSection.columnHeaders.trackB}
                </div>
              </div>
              {/* 表体：每行三列 */}
              {data.comparisonSection.rows.map((row, i) => (
                <div
                  key={row.feature}
                  className={`grid grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)_minmax(0,1.5fr)] gap-4 py-3 text-base md:text-lg font-['Outfit'] leading-7 ${
                    i < data.comparisonSection.rows.length - 1
                      ? 'border-b border-zinc-100'
                      : ''
                  }`}
                >
                  <div className="text-center font-semibold text-slate-500">
                    {row.feature}
                  </div>
                  <div className="text-center font-normal text-slate-500">
                    {row.trackA}
                  </div>
                  <div className="text-center font-normal text-slate-500">
                    {row.trackB}
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
