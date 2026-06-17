/**
 * 文件用途：Innovation Program 价格区块（实验版，Project Pricing 单卡布局）
 * 依赖关系：依赖 types/innovation_program 的 InnovationProgramPricingData
 */

import Image from 'next/image';
import type { InnovationProgramPricingData } from '@/types/innovation_program';

interface PricingTempProps {
  data: InnovationProgramPricingData;
}

const PROJECT_PRICING = {
  heading: 'Project Pricing',
  optionName: 'Project',
  optionSubtitle: 'Single Project',
  onsitePrice: '1350',
  enrollmentHeader: 'Enrollment',
  onsiteHeader: 'Onsite',
} as const;

export default function PricingTemp({ data }: PricingTempProps) {
  const badgeIcon = data.badge.text.split(/\s+/)[0] || '💎';
  const badgeLabel = data.badge.text.split(/\s+/).slice(1).join(' ') || 'Pricing';

  return (
    <section
      id="pricing"
      className="w-full bg-white px-4 py-12 sm:px-8 sm:py-16 lg:px-14 lg:py-24"
      aria-label="Pricing"
    >
      <div className="mx-auto flex w-full max-w-[min(1280px,95vw)] flex-col items-center gap-8 px-0 sm:gap-10 sm:px-4 lg:gap-12 lg:px-9">
        <div className="flex flex-col items-center gap-4 text-center sm:gap-6">
          <div className="inline-flex items-center gap-2 rounded-2xl bg-rose-400/10 px-4 py-2.5 sm:rounded-3xl sm:px-5 sm:py-3">
            <span className="text-2xl font-normal text-slate-700 sm:text-3xl">{badgeIcon}</span>
            <span className="text-base font-normal text-rose-400 sm:text-lg lg:text-xl">{badgeLabel}</span>
          </div>
          <h2 className="text-2xl font-bold leading-tight text-slate-700 sm:text-3xl md:text-4xl">
            {PROJECT_PRICING.heading}
          </h2>
        </div>

        <div className="w-full max-w-[900px] rounded-2xl bg-gradient-to-br from-violet-400/5 to-blue-400/5 px-4 py-8 sm:rounded-3xl sm:px-8 sm:py-10 md:px-12">
          <div className="grid grid-cols-2 border-b-2 border-indigo-50 pb-3 sm:pb-4">
            <div className="text-sm font-bold text-slate-500 sm:text-base lg:text-xl">
              {PROJECT_PRICING.enrollmentHeader}
            </div>
            <div className="text-right text-sm font-bold text-slate-500 sm:text-base lg:text-xl">
              {PROJECT_PRICING.onsiteHeader}
            </div>
          </div>

          <div className="grid grid-cols-2 items-center border-b border-indigo-50 py-5 sm:py-6">
            <div className="flex flex-col gap-0.5">
              <span className="text-base font-semibold text-slate-700 sm:text-lg lg:text-xl">
                {PROJECT_PRICING.optionName}
              </span>
              <span className="text-sm font-normal text-slate-500 sm:text-base">
                {PROJECT_PRICING.optionSubtitle}
              </span>
            </div>
            <div className="flex justify-end">
              <span className="inline-flex items-center justify-center rounded-full bg-rose-400/10 px-4 py-1.5 text-base font-normal text-rose-400 sm:px-5 sm:py-2 sm:text-lg lg:text-xl">
                {PROJECT_PRICING.onsitePrice}
              </span>
            </div>
          </div>

          <p className="mt-4 text-sm font-normal text-slate-500 sm:mt-5 sm:text-base lg:text-lg">
            {data.materialFootnote}
          </p>
        </div>

        <a
          href="https://forms.gle/nrcBMPs8NCAn87pc8"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={data.ctaLabel}
          className="inline-flex h-12 min-w-[160px] items-center justify-center gap-3 rounded-2xl bg-rose-400 px-8 text-base font-bold text-white no-underline shadow-md transition-colors hover:bg-rose-500 sm:h-14 sm:gap-6 sm:rounded-3xl sm:px-10 sm:text-lg lg:pl-16 lg:pr-8 lg:text-xl"
        >
          {data.ctaLabel}
          <Image
            src="/innovation_program/trackA/registernow.svg"
            alt=""
            width={24}
            height={24}
            className="h-5 w-5 shrink-0 sm:h-6 sm:w-6"
          />
        </a>
      </div>
    </section>
  );
}
