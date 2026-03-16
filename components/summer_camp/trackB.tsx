/**
 * 文件用途：Summer Camp Track B 区块容器组件（AI & Strategy Camp）
 * 依赖关系：StrategyCard（策略卡）、data/summer_camp、next/image
 * 注意事项：四张卡片使用 StrategyCard（图标+标题+描述），与 Learning Strategies 策略卡一致
 */

import Image from 'next/image';
import { summerCampPageData } from '@/data/summer_camp';
import StrategyCard from '@/components/summer_camp/StrategyCard';

export default function TrackB() {
  const { trackB } = summerCampPageData;
  const features = trackB.features;
  return (
    <div className="px-14 pt-20 bg-[#FFFFFF]">
      <div className="w-full max-w-[min(1280px,90vw)] mx-auto px-9 pt-0 flex flex-col justify-start items-center gap-16">
        {/* 标题区：Program 标签 + Track B 标题 + 副标题 */}
        <div className="w-full max-w-[892px] mx-auto flex flex-col items-center text-center gap-5">
          <div className="inline-flex items-center gap-3 rounded-3xl bg-rose-400/10 px-5 py-3.5">
            <span className="flex h-5 w-5 items-center justify-center shrink-0 text-base font-['Outfit'] md:h-8 md:w-7 md:text-xl" aria-hidden>
              📖
            </span>
            <span className="text-rose-400 text-lg md:text-xl font-normal font-['Outfit'] leading-7">Program</span>
          </div>
          <h2 className="w-full text-slate-700 text-3xl md:text-4xl font-bold font-['Outfit'] leading-tight">
            {trackB.heading}
          </h2>
          <p className="w-full text-center text-slate-500 text-base md:text-lg font-normal font-['Outfit'] leading-relaxed">
            {trackB.description}
          </p>
        </div>

        {/* 四张策略卡：使用 StrategyCard，图标为 trackB/trackb-1～4.svg */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 justify-items-center">
          {features.map((card, index) => (
            <StrategyCard
              key={card.title}
              card={{ ...card, icon: `/summer_camp/trackB/trackb-${index + 1}.svg` }}
              index={index}
            />
          ))}
        </div>

        {/* 引用块：流式布局，无绝对定位；max-w 与 Track A 引用块一致 */}
        <div className="w-full max-w-[1268px] mx-auto flex flex-col bg-gradient-to-r from-green-400/0 to-green-400/0 rounded-3xl overflow-hidden pt-6 pl-6 pr-8 pb-9 md:pt-6 md:pl-12 md:pr-8 md:pb-9">
          <div className="flex justify-start pb-0" aria-hidden>
            <span className="leading-none opacity-20 text-green-400 text-5xl md:text-6xl font-normal font-['Outfit']">
              &quot;
            </span>
          </div>
          <div className="flex flex-col items-center gap-5 min-w-0 flex-1 mt-0.5">
            <p className="w-full max-w-[1028px] text-center text-slate-700 text-xl font-normal font-['Outfit'] leading-7">
              {trackB.quote.text}
            </p>
            <p className="text-slate-500 text-lg font-normal font-['Outfit'] leading-7">{trackB.quote.attribution}</p>
          </div>
        </div>

        {/* 注册按钮：新标签页打开报名表单，下方留白与 Track A 一致 */}
        <div className="w-full max-w-full flex justify-center pt-4 pb-12 md:pb-20">
          <a
            href="https://forms.gle/nrcBMPs8NCAn87pc8"
            target="_blank"
            rel="noopener noreferrer"
            className="min-w-[200px] h-12 md:h-14 pl-18 pr-6 py-3 md:pl-20 md:pr-7 md:py-3.5 rounded-3xl bg-rose-400 inline-flex flex-col justify-center items-center shadow-[0px_4.65px_6.97px_-4.65px_rgba(0,0,0,0.10)] shadow-[0px_11.62px_17.42px_-3.48px_rgba(0,0,0,0.10)] no-underline"
          >
            <div className="inline-flex items-center justify-center gap-6 md:gap-7">
              <span className="text-white text-lg md:text-xl font-bold font-['Outfit'] leading-7">{trackB.ctaLabel}</span>
              <Image src="/summer_camp/trackA/registernow.svg" alt="" width={24} height={24} className="shrink-0 w-6 h-6" aria-hidden />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
