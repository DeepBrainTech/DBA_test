/**
 * 文件用途：Courses Learning Strategies 区块
 * 依赖关系：依赖 StrategyCard、types/courses；图标来自 public/courses/Learning_Strategies
 */

import Image from 'next/image';
import StrategyCard from '@/components/courses/StrategyCard';
import type { CoursesLearningStrategiesData } from '@/types/courses';

interface LearningStrategiesProps {
  data: CoursesLearningStrategiesData;
}

export default function LearningStrategies({ data }: LearningStrategiesProps) {
  const introParagraphs = data.introQuote.text.split('\n\n');

  return (
    <section
      id="learning-strategies"
      className="w-full px-4 sm:px-8 lg:px-14 pt-12 sm:pt-16 lg:pt-24 pb-10 sm:pb-12 lg:pb-16 bg-white flex flex-col justify-start items-start gap-8 sm:gap-12 lg:gap-16"
      aria-label="Learning Strategies"
    >
      <div className="w-full max-w-[min(1280px,95vw)] mx-auto px-0 sm:px-4 lg:px-9 flex flex-col justify-start items-start gap-8 sm:gap-12 lg:gap-16">
        <div className="w-full max-w-[1200px] mx-auto rounded-2xl sm:rounded-3xl overflow-hidden bg-white p-4 sm:p-6 lg:p-10">
          <div className="text-green-400 text-4xl sm:text-5xl md:text-6xl font-normal font-['Outfit'] leading-tight opacity-20 mb-2">
            &quot;
          </div>
          <div className="text-center text-slate-700 text-sm sm:text-base lg:text-lg font-normal font-['Outfit'] leading-relaxed mb-4 sm:mb-6">
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
          <div className="text-center text-slate-500 text-sm sm:text-base font-normal font-['Outfit']">
            {data.introQuote.attribution}
          </div>
        </div>

        <div className="w-full mt-4 sm:mt-8 lg:mt-12 flex flex-col items-center text-center gap-4 sm:gap-6 lg:gap-8">
          <div className="inline-flex items-center gap-2 sm:gap-3 rounded-2xl sm:rounded-3xl bg-rose-400/10 px-4 sm:px-5 py-2.5 sm:py-3.5">
            <Image
              src="/courses/Learning_Strategies/learning_strategies.png"
              alt=""
              width={30}
              height={30}
              className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-8 object-contain shrink-0"
              aria-hidden
            />
            <span className="text-rose-400 text-base sm:text-lg md:text-xl font-normal font-['Outfit']">
              {data.title}
            </span>
          </div>
          <h2 className="text-center text-slate-700 text-2xl sm:text-3xl md:text-4xl font-bold font-['Outfit'] leading-tight">
            {data.heading}
          </h2>
          <p className="max-w-[892px] text-slate-500 text-sm sm:text-base md:text-lg font-normal font-['Outfit'] leading-relaxed text-center">
            {data.subtitle}
          </p>
        </div>

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
      </div>
    </section>
  );
}
