/**
 * 文件用途：Learning Program 价格区块，含标题、Track A/B 价格表、限时优惠说明与报名按钮
 * 依赖关系：依赖 types/learning_program 的 LearningProgramPricingData
 * 注意事项：表格用网格布局便于响应式；description 中 **text** 解析为加粗
 */

import Image from 'next/image';
import type {
  LimitedTimeOfferCardData,
  PricingCell,
  LearningProgramPricingData,
  LearningProgramTrackAPricingRow,
  LearningProgramTrackBPricingRow,
} from '@/types/learning_program';
import LimitedTimeOfferCard from '@/components/learning_program/LimitedTimeOfferCard';

interface PricingSectionProps {
  /** 价格区块数据 */
  data: LearningProgramPricingData;
}

/** 限时优惠三档卡数据：Early Bird / Regular / Last minute */
const LIMITED_TIME_OFFER_CARDS: LimitedTimeOfferCardData[] = [
  {
    title: 'Early Bird',
    discountLabel: '5% OFF',
    savings: { prefix: 'Up to', amount: '$200', suffix: 'Savings' },
    endsDate: 'Ends 3/31',
  },
  {
    title: 'Regular',
    discountLabel: '3% OFF',
    savings: { prefix: 'Up to', amount: '$120', suffix: 'Savings' },
    endsDate: 'Ends 4/15',
  },
  {
    title: 'Last minute',
    isStandardPricing: true,
    endsDate: 'Ends 6/01',
  },
];

/** 渲染价格单元格：纯文案或带折扣标签样式 */
function PriceCell({ cell }: { cell: string | PricingCell }) {
  const value = typeof cell === 'string' ? cell : cell.value;
  const isDiscount = typeof cell !== 'string' && cell.isDiscount;
  return (
    <div className="flex justify-center items-center py-3 sm:py-4">
      {isDiscount ? (
        <span className="inline-flex justify-center items-center px-2 sm:px-4 py-1 sm:py-2 bg-rose-400/10 rounded-full text-rose-400 text-sm sm:text-base lg:text-xl font-normal font-['Outfit']">
          {value}
        </span>
      ) : (
        <span className="text-slate-700 text-sm sm:text-base lg:text-xl font-normal font-['Outfit']">{value}</span>
      )}
    </div>
  );
}

export default function PricingSection({ data }: PricingSectionProps) {
  return (
    <section
      id="pricing"
      className="w-full px-4 sm:px-8 lg:px-14 py-12 sm:py-16 lg:py-24 flex flex-col justify-start items-start gap-8 sm:gap-12 lg:gap-16"
      aria-label="Pricing"
    >
      <div className="w-full max-w-[min(1280px,95vw)] mx-auto px-0 sm:px-4 lg:px-9 flex flex-col justify-start items-start gap-8 sm:gap-12 lg:gap-16">
        {/* 区块标题 */}
        <div className="self-stretch flex flex-col justify-start items-center gap-4 sm:gap-6 text-center">
          <div className="inline-flex justify-start items-start">
            <div className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 bg-rose-400/10 rounded-2xl sm:rounded-3xl">
              <span className="text-slate-700 text-2xl sm:text-3xl font-normal font-['Outfit']">
                {data.badge.text.split(/\s+/)[0] || '💎️'}
              </span>
              <span className="text-rose-400 text-base sm:text-lg lg:text-xl font-normal font-['Outfit']">
                {data.badge.text.split(/\s+/).slice(1).join(' ') || 'Pricing'}
              </span>
            </div>
          </div>
          <h2 className="w-full text-slate-700 text-2xl sm:text-3xl md:text-4xl font-bold font-['Outfit'] leading-tight">
            {data.heading}
          </h2>
          <p className="max-w-[1100px] text-slate-500 text-sm sm:text-base lg:text-lg xl:text-xl font-normal font-['Outfit'] leading-relaxed">
            {data.description}
          </p>
        </div>

        {/* Track A: STEM Innovation Weekly Pricing（图1：三列 Onsite/Online + Multi-Session Savings） */}
        <div className="w-full px-3 sm:px-6 md:px-9 py-6 sm:py-9 bg-gradient-to-br from-violet-400/5 to-blue-400/5 rounded-2xl sm:rounded-3xl flex flex-col justify-start items-start gap-5 sm:gap-7">
          <div className="w-full flex flex-col items-center gap-2">
            <h3 className="w-full text-center text-slate-700 text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold font-['Outfit']">
              {data.trackATitle}
            </h3>
            {data.trackASubtitle && (
              <p className="w-full text-center text-slate-500 text-sm sm:text-base lg:text-lg font-normal font-['Outfit']">
                {data.trackASubtitle}
              </p>
            )}
          </div>
          <div className="w-full overflow-x-auto">
            <div className="min-w-[400px] w-full">
              <div className="grid grid-cols-3 border-b-2 border-indigo-50">
                <div className="py-2 sm:py-3 text-left text-slate-500 text-sm sm:text-base lg:text-xl font-bold font-['Outfit']">
                  {data.trackAHeaders[0]}
                </div>
                <div className="py-2 sm:py-3 text-center text-slate-500 text-sm sm:text-base lg:text-xl font-bold font-['Outfit']">
                  {data.trackAHeaders[1]}
                </div>
                <div className="py-2 sm:py-3 text-center text-slate-500 text-sm sm:text-base lg:text-xl font-bold font-['Outfit']">
                  {data.trackAHeaders[2]}
                </div>
              </div>
              {data.trackARows.map((row: LearningProgramTrackAPricingRow, i: number) => (
                <div
                  key={i}
                  className="grid grid-cols-3 border-b border-indigo-50 last:border-b-0"
                >
                  <div className="py-3 sm:py-4 flex flex-col justify-center gap-0.5">
                    <span className="text-slate-700 text-sm sm:text-base lg:text-xl font-semibold font-['Outfit']">
                      {row.optionName}
                    </span>
                    {row.optionSubtitle && (
                      <span className="text-slate-500 text-xs sm:text-sm lg:text-base font-normal font-['Outfit']">
                        {row.optionSubtitle}
                      </span>
                    )}
                  </div>
                  <PriceCell cell={row.onsite} />
                  <div className="flex justify-center items-center py-3 sm:py-4">
                    <span className="text-slate-700 text-sm sm:text-base lg:text-xl font-normal font-['Outfit']">
                      {row.online}
                    </span>
                  </div>
                </div>
              ))}
              <div className="grid grid-cols-3 border-b border-indigo-50 py-3 sm:py-4">
                <div className="col-span-3 flex items-center gap-1">
                  <span className="text-slate-500 text-sm sm:text-base lg:text-xl font-normal font-['Outfit']">
                    {data.materialFootnote}
                  </span>
                </div>
              </div>
            </div>
          </div>
          {data.multiSessionSavings && (
            <div className="w-full pt-2 rounded-2xl bg-white/60 border border-indigo-50 overflow-hidden min-w-0">
              <div
                className="w-full max-w-full min-w-0 flex flex-nowrap items-stretch overflow-x-auto lg:overflow-visible overscroll-x-contain"
                style={{ WebkitOverflowScrolling: 'touch', touchAction: 'pan-x' }}
              >
                {/* 第一格：标题；lg 以下保持不压缩以支持横向滑动 */}
                <div className="min-w-[280px] flex-1 min-h-52 px-8 sm:px-12 lg:px-16 py-8 sm:py-9 inline-flex flex-col justify-center items-center gap-2.5 shrink-0">
                  <div className="self-stretch text-center">
                    <span className="text-slate-700 text-base sm:text-lg lg:text-xl font-bold font-['Outfit'] leading-7">
                      {data.multiSessionSavings.heading}
                    </span>
                  </div>
                </div>
                {data.multiSessionSavings.offers.map((offer, j) => {
                  const percentMatch = offer.percent.match(/^(.+?)(% OFF)$/);
                  const percentLeft = percentMatch ? percentMatch[1] : offer.percent;
                  const percentRight = percentMatch ? percentMatch[2] : '';
                  const saveMatch = offer.savings.match(/^(Save up to)\s+(.+)$/);
                  const savePrefix = saveMatch ? saveMatch[1] : '';
                  const saveAmount = saveMatch ? saveMatch[2] : offer.savings;
                  return (
                    <div
                      key={j}
                      className="min-w-[280px] flex-1 min-h-52 px-8 sm:px-12 lg:px-16 py-8 sm:py-9 inline-flex flex-col justify-center items-center gap-2.5 shrink-0"
                    >
                      <div className="self-stretch text-center">
                        <span className="text-rose-400 text-2xl sm:text-3xl font-semibold font-['Outfit'] leading-7">
                          {percentLeft}
                        </span>
                        <span className="text-rose-400 text-2xl sm:text-3xl font-semibold font-['Outfit']">
                          {percentRight}
                        </span>
                      </div>
                      <div className="w-64 text-center">
                      <span className="text-slate-700 text-base sm:text-lg font-semibold font-['Outfit'] leading-7">
                        {offer.description}
                      </span>
                      <br />
                      {savePrefix ? (
                        <>
                          <span className="text-slate-500 text-base sm:text-lg font-normal font-['Outfit'] leading-7">
                            {savePrefix}
                          </span>
                          <span className="text-slate-500 text-base sm:text-lg font-bold font-['Outfit'] leading-7">
                            {' '}
                            {saveAmount}
                          </span>
                        </>
                      ) : (
                        <span className="text-slate-500 text-base sm:text-lg font-normal font-['Outfit'] leading-7">
                          {offer.savings}
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
            </div>
          )}
        </div>

        {/* 限时优惠（图1）：紧接 Track A 后、Track B 前 */}
        <div className="w-full px-3 sm:px-6 md:px-9 py-6 sm:py-9 bg-gradient-to-r from-[#C9B47E1A] to-[#6BABFF1A] rounded-2xl sm:rounded-3xl flex flex-col justify-start items-start gap-4 sm:gap-6">
          <div className="w-full flex flex-col justify-start items-start gap-4 sm:gap-5">
            <div className="self-stretch flex items-center flex-wrap gap-2">
              <span className="text-slate-700 text-2xl sm:text-3xl font-normal font-['Outfit']">⏱️</span>
              <span className="text-slate-700 text-xl sm:text-2xl lg:text-3xl font-semibold font-['Outfit']">Limited Time Offer!</span>
            </div>
            <div className="w-full text-sm sm:text-base lg:text-xl">
              <span className="text-slate-500 font-bold font-['Outfit']">Save More by Booking Early!</span>
              <br />
              <span className="text-slate-500 font-normal font-['Outfit']">*Note: These savings apply to Track A only and can be stacked with our Multi-Session discount. Track B is excluded from this promotion.</span>
            </div>
            {/* 手机端横向滑动；桌面端 lg 三卡居中排布 */}
            <div
              className="w-full overflow-x-auto overflow-y-hidden pb-2 flex flex-nowrap lg:justify-center overscroll-x-contain snap-x snap-mandatory lg:snap-none"
              style={{ WebkitOverflowScrolling: 'touch', touchAction: 'pan-x' }}
            >
              <div className="inline-flex flex-nowrap items-stretch gap-4 sm:gap-6 lg:gap-20 min-w-max lg:min-w-0 lg:w-full justify-start lg:justify-center">
                {LIMITED_TIME_OFFER_CARDS.map((card, i) => (
                  <div
                    key={i}
                    className="w-[170px] sm:w-[200px] lg:flex-1 lg:max-w-[260px] flex-shrink-0 snap-start"
                  >
                    <LimitedTimeOfferCard card={card} />
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full text-sm sm:text-base lg:text-xl">
              <span className="text-slate-500 font-bold font-['Outfit']">Sibling Discount</span>
              <span className="text-slate-500 font-normal font-['Outfit']">: Enroll two or more siblings and receive </span>
              <span className="text-slate-500 font-bold font-['Outfit']">10% off</span>
              <span className="text-slate-500 font-normal font-['Outfit']"> the second child&apos;s tuition.</span>
              <br />
              <span className="text-slate-500 font-bold font-['Outfit']">Payment Plans</span>
              <span className="text-slate-500 font-normal font-['Outfit']">: Flexible payment plans are available for enrollments of 2 or more sessions.</span>
            </div>
          </div>
        </div>

        {/* Track B: AI & Strategy Camp Pricing */}
        <div className="w-full px-3 sm:px-6 md:px-9 py-6 sm:py-9 bg-gradient-to-br from-violet-400/5 to-blue-400/5 rounded-2xl sm:rounded-3xl flex flex-col justify-start items-start gap-5 sm:gap-7">
          <div className="w-full flex flex-col items-center gap-2">
            <h3 className="w-full text-center text-slate-700 text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold font-['Outfit']">
              {data.trackBTitle}
            </h3>
            {data.trackBSubtitle && (
              <p className="w-full text-center text-slate-500 text-xl font-normal font-['Outfit'] leading-7">
                {data.trackBSubtitle}
              </p>
            )}
          </div>
          <div className="w-full overflow-x-auto py-3 sm:py-5">
            <div className="min-w-[400px] w-full">
              <div className="grid grid-cols-3 border-b-2 border-indigo-50">
                <div className="py-2 sm:py-3 text-left text-slate-500 text-sm sm:text-base lg:text-xl font-bold font-['Outfit']">
                  {data.trackBHeaders[0]}
                </div>
                <div className="py-2 sm:py-3 text-center text-slate-500 text-sm sm:text-base lg:text-xl font-bold font-['Outfit']">
                  {data.trackBHeaders[1]}
                </div>
                <div className="py-2 sm:py-3 text-center text-slate-500 text-sm sm:text-base lg:text-xl font-bold font-['Outfit']">
                  {data.trackBHeaders[2]}
                </div>
              </div>
              {data.trackBRows.map((row: LearningProgramTrackBPricingRow, i: number) => (
                <div
                  key={i}
                  className="grid grid-cols-3 border-b border-indigo-50"
                >
                  <div className="py-3 sm:py-4 flex items-center text-slate-700 text-sm sm:text-base lg:text-xl font-normal font-['Outfit']">
                    {row.optionName}
                  </div>
                  <PriceCell cell={row.onsite} />
                  <div className="flex justify-center items-center py-3 sm:py-4">
                    <span className="text-slate-700 text-sm sm:text-base lg:text-xl font-normal font-['Outfit']">
                      {typeof row.online === 'string' ? row.online : row.online}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Special Discounts（图1）：Enroll Now 上方 */}
        <div className="w-full max-w-[min(1280px,95vw)] px-6 sm:px-12 lg:px-20 py-8 sm:py-14 bg-gradient-to-r from-stone-400/10 to-blue-400/10 rounded-3xl flex flex-col justify-start items-start gap-5 sm:gap-6">
          <div className="w-full flex items-center gap-2">
            <span className="text-slate-700 text-2xl sm:text-3xl font-normal font-['Outfit'] leading-10">⏱️ </span>
            <span className="text-slate-700 text-2xl sm:text-3xl font-semibold font-['Outfit'] leading-10">Special Discounts</span>
          </div>
          <div className="w-full flex flex-col lg:flex-row justify-start items-stretch gap-8 lg:gap-10 py-6 sm:py-10">
            {/* 左侧：周数折扣列表 */}
            <div className="w-full lg:max-w-[627px] flex flex-col border-b border-slate-300">
              {[
                { weeks: '2 Weeks', percent: '5% Off' },
                { weeks: '3 Weeks', percent: '8% Off' },
                { weeks: '4 Weeks', percent: '10% Off' },
                { weeks: '5 Weeks', percent: '12% Off' },
              ].map((row, i) => (
                <div
                  key={i}
                  className="w-full py-4 sm:py-5 flex justify-between items-center border-b border-slate-300 last:border-b-0"
                >
                  <span className="text-slate-700 text-lg sm:text-xl font-normal font-['Outfit'] leading-6">
                    {row.weeks}
                  </span>
                  <span className="text-rose-400 text-lg sm:text-xl font-semibold font-['Outfit'] leading-6">
                    {row.percent}
                  </span>
                </div>
              ))}
            </div>
            {/* 右侧：Full Summer 白卡 */}
            <div className="w-full lg:w-80 shrink-0 px-6 sm:px-7 py-8 bg-white rounded-2xl flex flex-col justify-center items-center gap-5 sm:gap-7">
              <div className="w-full text-center text-slate-700 text-lg sm:text-xl font-bold font-['Outfit'] uppercase leading-7">
                Full Summer
                <br />
                6 Weeks
              </div>
              <div className="w-full text-center">
                <span className="text-rose-400 text-4xl sm:text-5xl font-semibold font-['Outfit'] leading-7">15</span>
                <span className="text-rose-400 text-4xl sm:text-5xl font-semibold font-['Outfit']">% OFF</span>
              </div>
              <div className="w-full text-center text-slate-500 text-base sm:text-lg font-normal font-['Outfit'] leading-7">
                Enroll for the complete track
              </div>
            </div>
          </div>
          <div className="w-full text-lg sm:text-xl">
            <span className="text-slate-500 font-bold font-['Outfit'] leading-7">Sibling Discount</span>
            <span className="text-slate-500 font-normal font-['Outfit'] leading-7">: Enroll two or more siblings and receive </span>
            <span className="text-slate-500 font-bold font-['Outfit'] leading-7">10% off</span>
            <span className="text-slate-500 font-normal font-['Outfit'] leading-7"> the second child&apos;s tuition.</span>
            <br />
            <span className="text-slate-500 font-bold font-['Outfit'] leading-7">Payment Plans</span>
            <span className="text-slate-500 font-normal font-['Outfit'] leading-7">: Flexible payment plans are available for enrollments of 2 or more sessions.</span>
          </div>
        </div>

        {/* Enroll Now 按钮 */}
        <div className="w-full flex justify-center">
          <a
            href="https://forms.gle/nrcBMPs8NCAn87pc8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex justify-center items-center gap-3 sm:gap-6 md:gap-7 min-w-[140px] sm:min-w-[150px] h-11 sm:h-12 md:h-14 px-6 sm:px-8 lg:pl-20 lg:pr-7 py-2.5 sm:py-3 md:py-3.5 bg-rose-400 rounded-2xl sm:rounded-3xl text-white text-base sm:text-lg lg:text-xl font-bold font-['Outfit'] shadow-md hover:bg-rose-500 transition-colors no-underline"
            aria-label={data.ctaLabel}
          >
            {data.ctaLabel}
            <Image src="/learning_program/trackA/registernow.svg" alt="" width={24} height={24} className="shrink-0 w-5 h-5 sm:w-6 sm:h-6" aria-hidden />
          </a>
        </div>
      </div>
    </section>
  );
}
