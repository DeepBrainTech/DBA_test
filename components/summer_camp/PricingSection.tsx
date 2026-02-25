/**
 * 文件用途：Summer Camp 价格区块，含标题、Track A/B 价格表、限时优惠说明与报名按钮
 * 依赖关系：依赖 types/summer_camp 的 SummerCampPricingData
 * 注意事项：表格用网格布局便于响应式；description 中 **text** 解析为加粗
 */

import Image from 'next/image';
import type {
  LimitedTimeOfferCardData,
  PricingCell,
  SummerCampPricingData,
  SummerCampTrackAPricingRow,
  SummerCampTrackBPricingRow,
} from '@/types/summer_camp';
import LimitedTimeOfferCard from '@/components/summer_camp/LimitedTimeOfferCard';

interface PricingSectionProps {
  /** 价格区块数据 */
  data: SummerCampPricingData;
}

/** 限时优惠三档卡数据：Early Bird / Regular / Last minute */
const LIMITED_TIME_OFFER_CARDS: LimitedTimeOfferCardData[] = [
  {
    title: 'Early Bird',
    discountLabel: '5% OFF',
    savings: { prefix: 'Up to', amount: '$200', suffix: 'Savings' },
    endsDate: 'Ends 3/15',
  },
  {
    title: 'Regular',
    discountLabel: '3% OFF',
    savings: { prefix: 'Up to', amount: '$120', suffix: 'Savings' },
    endsDate: 'Ends 3/31',
  },
  {
    title: 'Last minute',
    isStandardPricing: true,
    endsDate: 'Ends 4/15',
  },
];

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
  return (
    <section
      id="pricing"
      className="w-full px-14 py-24 flex flex-col justify-start items-start gap-16"
      aria-label="Pricing"
    >
      <div className="w-full max-w-[min(1280px,90vw)] mx-auto px-9 flex flex-col justify-start items-start gap-16">
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

        {/* 限时优惠：宽度与上方 Track A/B 一致（w-full + px-6 md:px-9） */}
        <div className="w-full px-6 md:px-9 pt-9 pb-9 bg-gradient-to-r from-stone-400/10 to-blue-400/10 rounded-3xl flex flex-col justify-start items-start gap-6">
          <div className="w-full flex flex-col justify-start items-start gap-5">
            <div className="self-stretch h-10 flex items-center">
              <span className="text-slate-700 text-3xl font-normal font-['Outfit'] leading-10">⏱️ </span>
              <span className="text-slate-700 text-3xl font-semibold font-['Outfit'] leading-10">Limited Time Offer!</span>
            </div>
            <div className="w-full">
              <span className="text-slate-500 text-xl font-bold font-['Outfit'] leading-7">Save More by Booking Early!<br /></span>
              <span className="text-slate-500 text-xl font-normal font-['Outfit'] leading-7">*Note: These savings apply to Track A only and can be stacked with our Multi-Session discount. Track B is excluded from this promotion.</span>
            </div>
            {/* 三张档位卡：铺满容器，内容居中；改 gap-* 可调卡片间距（如 gap-4 更密、gap-12 更疏） */}
            <div className="w-full h-80 flex flex-row items-stretch gap-15">
              {LIMITED_TIME_OFFER_CARDS.map((card, i) => (
                <LimitedTimeOfferCard key={i} card={card} />
              ))}
            </div>
            <div className="w-full">
              <span className="text-slate-500 text-xl font-bold font-['Outfit'] leading-7">Sibling Discount</span>
              <span className="text-slate-500 text-xl font-normal font-['Outfit'] leading-7">: Enroll two or more siblings and receive </span>
              <span className="text-slate-500 text-xl font-bold font-['Outfit'] leading-7">10% off</span>
              <span className="text-slate-500 text-xl font-normal font-['Outfit'] leading-7"> the second child&apos;s tuition.<br /></span>
              <span className="text-slate-500 text-xl font-bold font-['Outfit'] leading-7">Payment Plans</span>
              <span className="text-slate-500 text-xl font-normal font-['Outfit'] leading-7">: Flexible payment plans are available for enrollments of 2 or more sessions.<br /><br /></span>
            </div>
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
