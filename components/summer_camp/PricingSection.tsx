/**
 * 文件用途：Summer Camp 价格区块，含标题、Track A/B 价格表、限时优惠说明与报名按钮
 * 依赖关系：依赖 types/summer_camp 的 SummerCampPricingData
 * 注意事项：表格用网格布局便于响应式；description 中 **text** 解析为加粗
 */

import Image from 'next/image';
import type { ReactNode } from 'react';
import type {
  PricingCell,
  SummerCampPricingData,
  SummerCampTrackAPricingRow,
  SummerCampTrackBPricingRow,
} from '@/types/summer_camp';

interface PricingSectionProps {
  /** 价格区块数据 */
  data: SummerCampPricingData;
}

/** 将 "**foo**" 解析为 <strong>foo</strong>，用于限时优惠描述 */
function parseBoldSegments(text: string): ReactNode {
  const parts: ReactNode[] = [];
  let remaining = text;
  let key = 0;
  while (remaining.length > 0) {
    const start = remaining.indexOf('**');
    if (start === -1) {
      parts.push(<span key={key++}>{remaining}</span>);
      break;
    }
    parts.push(<span key={key++}>{remaining.slice(0, start)}</span>);
    const end = remaining.indexOf('**', start + 2);
    if (end === -1) {
      parts.push(<span key={key++}>{remaining.slice(start + 2)}</span>);
      break;
    }
    parts.push(<strong key={key++} className="font-bold">{remaining.slice(start + 2, end)}</strong>);
    remaining = remaining.slice(end + 2);
  }
  return <>{parts}</>;
}

/** 渲染价格单元格：纯文案或带折扣标签样式 */
function PriceCell({ cell }: { cell: string | PricingCell }) {
  const value = typeof cell === 'string' ? cell : cell.value;
  const isDiscount = typeof cell !== 'string' && cell.isDiscount;
  return (
    <div className="flex justify-center items-center py-4">
      {isDiscount ? (
        <span className="inline-flex justify-center items-center px-4 py-2 bg-rose-400/10 rounded-[20px] text-rose-400 text-xl font-normal font-['Outfit'] leading-6">
          {value}
        </span>
      ) : (
        <span className="text-slate-700 text-xl font-normal font-['Outfit'] leading-6">{value}</span>
      )}
    </div>
  );
}

export default function PricingSection({ data }: PricingSectionProps) {
  const offerParagraphs = data.limitedTimeOffer.description.split('\n\n');

  return (
    <section
      id="pricing"
      className="w-full px-9 py-20 flex flex-col justify-start items-start gap-16"
      aria-label="Pricing"
    >
      <div className="w-full max-w-[1180px] mx-auto flex flex-col justify-start items-start gap-16">
        {/* 区块标题：徽标 + 主标题 + 描述 */}
        <div className="self-stretch flex flex-col justify-start items-center gap-6 text-center">
          <div className="inline-flex justify-start items-start">
            <div className="inline-flex items-center gap-2 px-5 py-3 bg-rose-400/10 rounded-3xl">
              <span className="text-slate-700 text-3xl font-normal font-['Outfit'] leading-9">
                {data.badge.text.split(/\s+/)[0] || '💎️'}
              </span>
              <span className="text-rose-400 text-xl font-normal font-['Outfit'] leading-7">
                {data.badge.text.split(/\s+/).slice(1).join(' ') || 'Pricing'}
              </span>
            </div>
          </div>
          <h2 className="w-full text-slate-700 text-3xl md:text-4xl font-bold font-['Outfit'] leading-tight">
            {data.heading}
          </h2>
          <p className="max-w-[1100px] text-slate-500 text-lg md:text-xl font-normal font-['Outfit'] leading-7">
            {data.description}
          </p>
        </div>

        {/* Track A: STEM Innovation Pricing */}
        <div className="w-full px-6 md:px-9 pt-9 pb-9 bg-gradient-to-br from-violet-400/5 to-blue-400/5 rounded-3xl flex flex-col justify-start items-start gap-7">
          <h3 className="self-stretch text-center text-slate-700 text-2xl md:text-3xl font-semibold font-['Outfit'] leading-10">
            {data.trackATitle}
          </h3>
          <div className="w-full overflow-x-auto">
            <div className="min-w-[600px] w-full">
              {/* 表头 */}
              <div className="grid grid-cols-4 border-b-2 border-indigo-50">
                <div className="py-3 text-left text-slate-500 text-lg md:text-xl font-bold font-['Outfit'] leading-7">
                  {data.trackAHeaders[0]}
                </div>
                <div className="py-3 text-center text-slate-500 text-lg md:text-xl font-bold font-['Outfit'] leading-7">
                  {data.trackAHeaders[1]}
                </div>
                <div className="py-3 text-center text-slate-500 text-lg md:text-xl font-bold font-['Outfit'] leading-7">
                  {data.trackAHeaders[2]}
                </div>
                <div className="py-3 text-center text-slate-500 text-lg md:text-xl font-bold font-['Outfit'] leading-7">
                  {data.trackAHeaders[3]}
                </div>
              </div>
              {/* 数据行 */}
              {data.trackARows.map((row: SummerCampTrackAPricingRow, i: number) => (
                <div
                  key={i}
                  className="grid grid-cols-4 border-b border-indigo-50 last:border-b-0"
                >
                  <div className="py-4 text-slate-700 text-lg md:text-xl font-normal font-['Outfit'] leading-6 whitespace-pre-line">
                    {row.optionName}
                  </div>
                  <div className="flex justify-center items-center py-4">
                    <span className="text-slate-700 text-xl font-normal font-['Outfit'] leading-6">
                      {row.session1}
                    </span>
                  </div>
                  <PriceCell cell={row.session2} />
                  <PriceCell cell={row.session3} />
                </div>
              ))}
              {/* 材料费备注 */}
              <div className="grid grid-cols-4 border-b border-indigo-50 py-4">
                <div className="col-span-4 flex items-center gap-1">
                  <span className="text-slate-500 text-xl font-normal font-['Outfit'] leading-6">
                    {data.materialFootnote}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Track B: Brain & Strategy Camp Pricing */}
        <div className="w-full px-6 md:px-9 pt-9 pb-9 bg-gradient-to-br from-violet-400/5 to-blue-400/5 rounded-3xl flex flex-col justify-start items-start gap-7">
          <h3 className="self-stretch text-center text-slate-700 text-2xl md:text-3xl font-semibold font-['Outfit'] leading-10">
            {data.trackBTitle}
          </h3>
          <div className="w-full overflow-x-auto py-5">
            <div className="min-w-[500px] w-full">
              <div className="grid grid-cols-3 border-b-2 border-indigo-50">
                <div className="py-3 text-left text-slate-500 text-lg md:text-xl font-bold font-['Outfit'] leading-7">
                  {data.trackBHeaders[0]}
                </div>
                <div className="py-3 text-center text-slate-500 text-lg md:text-xl font-bold font-['Outfit'] leading-7">
                  {data.trackBHeaders[1]}
                </div>
                <div className="py-3 text-center text-slate-500 text-lg md:text-xl font-bold font-['Outfit'] leading-7">
                  {data.trackBHeaders[2]}
                </div>
              </div>
              {data.trackBRows.map((row: SummerCampTrackBPricingRow, i: number) => (
                <div
                  key={i}
                  className="grid grid-cols-3 border-b border-indigo-50"
                >
                  <div className="py-4 flex items-center text-slate-700 text-lg md:text-xl font-normal font-['Outfit'] leading-6">
                    {row.optionName}
                  </div>
                  <PriceCell cell={row.onsite} />
                  <div className="flex justify-center items-center py-4">
                    <span className="text-slate-700 text-xl font-normal font-['Outfit'] leading-6">
                      {typeof row.online === 'string' ? row.online : row.online}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 限时优惠：宽度 w-full（可改为 max-w-3xl 等）；高度由内容+内边距决定，可加 min-h-[200px] 或改 py-* */}
        <div className="w-full pl-8 md:pl-20 pr-8 md:pr-48 py-14 bg-gradient-to-r from-[#C9B47E]/10 to-[#6BABFF]/10 rounded-3xl flex flex-col justify-start items-start gap-6">
          <h3 className="text-slate-700 text-2xl md:text-3xl font-semibold font-['Outfit'] leading-10">
            {data.limitedTimeOffer.title}
          </h3>
          <div className="flex flex-col gap-4 text-slate-500 text-lg md:text-xl font-normal font-['Outfit'] leading-7 overflow-x-auto">
            {offerParagraphs.map((para, i) => (
              <p key={i} className={i === 0 ? 'whitespace-nowrap' : undefined}>{parseBoldSegments(para)}</p>
            ))}
          </div>
        </div>

        {/* Enroll Now 按钮 */}
        <div className="w-full flex justify-center">
          <a
            href="https://forms.gle/nrcBMPs8NCAn87pc8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex justify-center items-center gap-6 md:gap-7 min-w-[150px] h-12 md:h-14 pl-18 pr-6 py-3 md:pl-20 md:pr-7 md:py-3.5 bg-rose-400 rounded-3xl text-white text-xl font-bold font-['Outfit'] leading-7 shadow-[0px_4.65px_6.97px_-4.65px_rgba(0,0,0,0.10)] shadow-[0px_11.62px_17.42px_-3.48px_rgba(0,0,0,0.10)] hover:bg-rose-500 transition-colors no-underline"
            aria-label={data.ctaLabel}
          >
            {data.ctaLabel}
            <Image src="/summer_camp/trackA/registernow.svg" alt="" width={24} height={24} className="shrink-0 w-6 h-6" aria-hidden />
          </a>
        </div>
      </div>
    </section>
  );
}
