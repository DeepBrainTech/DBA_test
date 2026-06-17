/**
 * 文件用途：Innovation Program 限时优惠单张档位卡（Early Bird / Regular / Last minute）
 * 依赖关系：依赖 types/innovation_program 的 LimitedTimeOfferCardData
 * 注意事项：卡片通过 flex-1 铺满容器，内容在卡片内居中
 */

import type { LimitedTimeOfferCardData } from '@/types/innovation_program';

interface LimitedTimeOfferCardProps {
  /** 单张卡数据 */
  card: LimitedTimeOfferCardData;
}

/** 限时优惠档位卡：折扣档展示 discount + 节省行 + 截止日，标准价档展示 Standard Pricing + 截止日 */
export default function LimitedTimeOfferCard({ card }: LimitedTimeOfferCardProps) {
  const { title, endsDate, isStandardPricing, discountLabel, savings } = card;

  return (
    <div className="flex-1 min-w-0 h-full px-3 sm:px-5 lg:px-7 py-4 sm:py-5 lg:py-7 bg-white rounded-xl sm:rounded-2xl flex flex-col justify-center items-center gap-3 sm:gap-5 lg:gap-7">
      <div className="w-full text-center text-slate-700 text-sm sm:text-base lg:text-xl font-bold font-outfit uppercase">
        {title}
      </div>
      {isStandardPricing ? (
        <>
          <div className="w-full flex items-center justify-center text-center text-rose-400 text-lg sm:text-xl lg:text-3xl font-semibold font-outfit">
            Standard Pricing
          </div>
          <div className="w-full flex items-center justify-center text-center text-slate-500 text-xs sm:text-sm lg:text-lg font-semibold font-outfit">
            {endsDate}
          </div>
        </>
      ) : (
        <>
          <div className="w-full text-center">
            <span className="text-rose-400 text-2xl sm:text-3xl lg:text-5xl font-semibold font-outfit">{discountLabel}</span>
          </div>
          <div className="w-full text-center text-xs sm:text-sm lg:text-lg">
            {savings && (
              <>
                <span className="text-slate-500 font-normal font-outfit">{savings.prefix} </span>
                <span className="text-slate-500 font-semibold font-outfit">{savings.amount} </span>
                <span className="text-slate-500 font-normal font-outfit">{savings.suffix}</span>
                <br />
              </>
            )}
            <span className="text-slate-500 font-semibold font-outfit">{endsDate}</span>
          </div>
        </>
      )}
    </div>
  );
}
