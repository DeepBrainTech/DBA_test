/**
 * 文件用途：Summer Camp 限时优惠单张档位卡（Early Bird / Regular / Last minute）
 * 依赖关系：依赖 types/summer_camp 的 LimitedTimeOfferCardData
 * 注意事项：卡片通过 flex-1 铺满容器，内容在卡片内居中
 */

import type { LimitedTimeOfferCardData } from '@/types/summer_camp';

interface LimitedTimeOfferCardProps {
  /** 单张卡数据 */
  card: LimitedTimeOfferCardData;
}

/** 限时优惠档位卡：折扣档展示 discount + 节省行 + 截止日，标准价档展示 Standard Pricing + 截止日 */
export default function LimitedTimeOfferCard({ card }: LimitedTimeOfferCardProps) {
  const { title, endsDate, isStandardPricing, discountLabel, savings } = card;

  return (
    <div className="flex-1 min-w-0 h-full px-7 py-7 bg-white rounded-2xl flex flex-col justify-center items-center gap-7">
      <div className="w-full text-center text-slate-700 text-xl font-bold font-['Outfit'] uppercase leading-7">
        {title}
      </div>
      {isStandardPricing ? (
        <>
          <div className="w-full h-14 flex items-center justify-center text-center text-rose-400 text-3xl font-semibold font-['Outfit'] leading-7">
            Standard Pricing
          </div>
          <div className="w-full h-14 flex items-center justify-center text-center text-slate-500 text-lg font-semibold font-['Outfit'] leading-7">
            {endsDate}
          </div>
        </>
      ) : (
        <>
          <div className="w-full text-center">
            <span className="text-rose-400 text-5xl font-semibold font-['Outfit'] leading-7"> </span>
            <span className="text-rose-400 text-5xl font-semibold font-['Outfit']">{discountLabel}</span>
          </div>
          <div className="w-full text-center">
            {savings && (
              <>
                <span className="text-slate-500 text-lg font-normal font-['Outfit'] leading-7">{savings.prefix} </span>
                <span className="text-slate-500 text-lg font-semibold font-['Outfit'] leading-7">{savings.amount} </span>
                <span className="text-slate-500 text-lg font-normal font-['Outfit'] leading-7">{savings.suffix}<br /></span>
              </>
            )}
            <span className="text-slate-500 text-lg font-semibold font-['Outfit'] leading-7">{endsDate}</span>
          </div>
        </>
      )}
    </div>
  );
}
