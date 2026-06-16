/**
 * 文件用途：Learning Strategies 完整区块，含顶部引言、四张策略卡、底部对比表
 * 依赖关系：依赖 next/image、StrategyCard、types/learning_program 的 LearningProgramLearningStrategiesData
 * 注意事项：样式与设计稿一致，使用 Outfit 字体与 rose/green 主题色；策略卡由 StrategyCard 组件渲染；区块标题图标使用 learning_strategies.png
 */

import Image from 'next/image';
import StrategyCard from '@/components/learning_program/StrategyCard';
import type { LearningProgramLearningStrategiesData } from '@/types/learning_program';

interface LearningStrategiesProps {
  /** Learning Strategies 区块数据 */
  data: LearningProgramLearningStrategiesData;
  /** 是否显示底部 Track A/B 对比表（Learning Program 页面使用） */
  showComparisonSection?: boolean;
}

export default function LearningStrategies({ data, showComparisonSection = false }: LearningStrategiesProps) {
  const introParagraphs = data.introQuote.text.split('\n\n');

  return (
    <section
      id="learning-strategies"
      className="w-full px-4 sm:px-8 lg:px-14 pt-12 sm:pt-16 lg:pt-24 pb-10 sm:pb-12 lg:pb-16 bg-white flex flex-col justify-start items-start gap-8 sm:gap-12 lg:gap-16"
      aria-label="Learning Strategies"
    >
      <div className="w-full max-w-[min(1280px,95vw)] mx-auto px-0 sm:px-4 lg:px-9 flex flex-col justify-start items-start gap-8 sm:gap-12 lg:gap-16">
        {/* 1. 顶部引言块：移动端简化布局 */}
        <div className="w-full max-w-[1200px] mx-auto rounded-2xl sm:rounded-3xl overflow-hidden bg-white p-4 sm:p-6 lg:p-10">
          <div className="text-green-400 text-4xl sm:text-5xl md:text-6xl font-normal font-outfit leading-tight opacity-20 mb-2">
            &quot;
          </div>
          <div className="text-center text-slate-700 text-sm sm:text-base lg:text-lg font-normal font-outfit leading-relaxed mb-4 sm:mb-6">
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
          <div className="text-center text-slate-500 text-sm sm:text-base font-normal font-outfit">
            {data.introQuote.attribution}
          </div>
        </div>

        {/* 2. 区块标题 */}
        <div className="w-full mt-4 sm:mt-8 lg:mt-12 flex flex-col items-center text-center gap-4 sm:gap-6 lg:gap-8">
          <div className="inline-flex items-center gap-2 sm:gap-3 rounded-2xl sm:rounded-3xl bg-rose-400/10 px-4 sm:px-5 py-2.5 sm:py-3.5">
            <Image
              src="/learning_program/Learning_Strategies/learning_strategies.png"
              alt=""
              width={30}
              height={30}
              className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-8 object-contain shrink-0"
              aria-hidden
            />
            <span className="text-rose-400 text-base sm:text-lg md:text-xl font-normal font-outfit">
              {data.title}
            </span>
          </div>
          <h2 className="text-center text-slate-700 text-2xl sm:text-3xl md:text-4xl font-bold font-outfit leading-tight">
            {data.heading}
          </h2>
          <p className="max-w-[892px] text-slate-500 text-sm sm:text-base md:text-lg font-normal font-outfit leading-relaxed text-center">
            {data.subtitle}
          </p>
        </div>

        {/* 3. 四张策略卡：移动端横向滚动 */}
        <div className="w-full lg:hidden overflow-x-auto pb-4 -mx-2 px-2">
          <div className="flex gap-4 w-max">
            {data.strategies.map((card, index) => (
              <div key={card.title} className="w-[260px] sm:w-[280px] flex-shrink-0">
                <StrategyCard card={card} index={index} />
              </div>
            ))}
          </div>
        </div>
        <div className="hidden lg:grid w-full grid-cols-4 gap-6 justify-items-center">
          {data.strategies.map((card, index) => (
            <StrategyCard key={card.title} card={card} index={index} />
          ))}
        </div>

        {showComparisonSection && (
          <div className="w-full bg-gradient-to-r from-red-400/10 to-red-400/10 rounded-2xl sm:rounded-3xl overflow-hidden">
            <div className="flex justify-start items-start pt-3 pl-3 pb-0 md:pt-4 md:pl-4">
              <div className="leading-none opacity-20 text-rose-400 text-4xl sm:text-5xl md:text-6xl font-normal font-outfit" aria-hidden>
                &quot;
              </div>
            </div>
            <div className="px-3 sm:px-6 pt-0 pb-8 sm:pb-10 lg:pb-14 md:px-15 md:pt-1 lg:pb-15">
              <h3 className="text-center text-slate-700 text-lg sm:text-xl md:text-2xl font-bold font-outfit leading-tight mb-4 sm:mb-6">
                {data.comparisonSection.title}
              </h3>
              <div className="w-full overflow-x-auto rounded-xl sm:rounded-2xl bg-white shadow-sm">
                <div className="min-w-[500px] px-3 sm:px-4 md:px-5 py-4 sm:py-5 md:py-6">
                  <div className="grid grid-cols-[minmax(100px,1fr)_minmax(140px,1.5fr)_minmax(140px,1.5fr)] gap-2 sm:gap-4 border-b border-zinc-100 pb-3 text-sm sm:text-base md:text-lg font-outfit leading-7 bg-zinc-50/80">
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
                  {data.comparisonSection.rows.map((row, i) => (
                    <div
                      key={row.feature}
                      className={`grid grid-cols-[minmax(100px,1fr)_minmax(140px,1.5fr)_minmax(140px,1.5fr)] gap-2 sm:gap-4 py-3 text-sm sm:text-base md:text-lg font-outfit leading-7 ${
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
        )}
      </div>
    </section>
  );
}
