/**
 * 文件用途：Math 页「Schedule + Location + WeChat 二维码」区块，置于双 CTA 上方；数据由 data/math.ts 经 props 传入
 * 依赖关系：next/image、@/types/math；样式与 AMC 区块统一（rounded-[39.83px]、font-outfit）
 */

import Image from 'next/image';

import type { ClassTimeWeChatData, ClassTimeWeChatVariant } from '@/types/math';

export type { ClassTimeWeChatVariant } from '@/types/math';

interface ClassTimeWeChatSectionProps {
  /** 区块数据（来自 mathPageData.classTimeWeChat） */
  data: ClassTimeWeChatData;
  /** 第一处 preamc（PRE-AMC）、第二处 amc（AMC 8/10），决定使用 data.preamc 或 data.amc 文案 */
  variant: ClassTimeWeChatVariant;
}

export default function ClassTimeWeChatSection({ data, variant }: ClassTimeWeChatSectionProps) {
  const item = variant === 'preamc' ? data.preamc : data.amc;
  const [line1, line2] = data.wechatCommunityLines;

  return (
    <div className="w-full max-w-[1344px] mx-auto px-6 sm:px-8 md:px-10 lg:px-14 py-8 sm:py-12 lg:py-16 bg-[#7EC97E10] rounded-[39.83px] flex flex-col lg:flex-row lg:items-stretch gap-8 lg:gap-12">
      {/* 左侧：Schedule + Location，文案来自 data */}
      <div className="flex-1 flex flex-col gap-6 sm:gap-8 min-w-0">
        <div className="flex flex-col gap-2">
          <h3 className="font-outfit text-slate-700 text-xl sm:text-1xl lg:text-2xl font-semibold leading-tight flex items-center gap-2">
            <span aria-hidden>⏰</span>
            Class Time
          </h3>
          <p className="font-outfit text-slate-500 text-base sm:text-lg leading-relaxed">
            {item.scheduleLines.map((line, i) => (
              <span key={i}>
                {i > 0 && <br />}
                {line}
              </span>
            ))}
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="font-outfit text-slate-700 text-xl sm:text-1xl lg:text-2xl font-semibold leading-tight flex items-center gap-2">
            <span aria-hidden>📍</span>
            Location
          </h3>
          <p className="font-outfit text-slate-500 text-sm sm:text-base leading-relaxed">
            {item.locationLines.map((line, i) => (
              <span key={i}>
                {i > 0 && <br />}
                {line}
              </span>
            ))}
          </p>
        </div>
      </div>

      {/* 右侧：WeChat 二维码 + 说明，来自 data */}
      <div className="flex flex-col items-start gap-3 shrink-0 lg:border-l lg:border-slate-200 lg:pl-10 lg:self-center">
        <div className="relative w-32 h-32">
          <Image
            src={data.wechatQrSrc}
            alt="WeChat 社群二维码"
            fill
            className="object-contain rounded-lg"
            sizes="128px"
          />
        </div>
        <p className="font-outfit text-slate-500 text-sm sm:text-base leading-7">
          {line1}
          <br />
          {line2}
        </p>
      </div>
    </div>
  );
}
