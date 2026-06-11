/**
 * 文件用途：DeepBrain Score Growth System 方法论介绍（四步卡片 + Register Now）
 * 依赖关系：TestPrepRegisterButton、types/test_prep；图标 public/test_prep/growth/
 */

import Image from 'next/image';

import TestPrepRegisterButton from '@/components/test_prep/TestPrepRegisterButton';
import type { ScoreGrowthSystemData } from '@/types/test_prep';

interface ScoreGrowthSystemProps {
  data: ScoreGrowthSystemData;
}

function GrowthStepCard({
  title,
  description,
  icon,
}: ScoreGrowthSystemData['steps'][number]) {
  return (
    <article className="flex min-h-[320px] flex-col items-center rounded-[28px] bg-[#FBF9F4] px-6 pb-8 pt-9 text-center sm:min-h-[350px] sm:px-8">
      <div className="flex size-[93px] shrink-0 items-center justify-center rounded-[23px] bg-[rgba(107,122,239,0.13)]">
        <Image src={icon} alt="" width={42} height={42} className="size-[42px] object-contain" aria-hidden />
      </div>
      <h3 className="mt-6 font-outfit text-2xl font-semibold leading-tight text-[#2C3E50] sm:text-[28px]">
        {title}
      </h3>
      <p className="mt-4 max-w-[260px] font-outfit text-base font-normal leading-7 text-[#7C8B99] sm:text-xl sm:leading-7">
        {description}
      </p>
    </article>
  );
}

export default function ScoreGrowthSystem({ data }: ScoreGrowthSystemProps) {
  return (
    <section
      id="score-growth-system"
      className="w-full bg-white px-4 sm:px-8 lg:px-9 pb-16 md:pb-20 lg:pb-24"
      aria-label="DeepBrain Score Growth System"
    >
      <div className="mx-auto flex w-full max-w-[min(1270px,95vw)] flex-col items-center gap-12 md:gap-16 lg:gap-[72px]">
        <header className="flex w-full flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-[23px] bg-[rgba(107,122,239,0.1)] px-5 py-2.5">
            <span className="text-[28px] leading-none" aria-hidden>
              {data.badgeIcon}
            </span>
            <span className="font-outfit text-xl text-[#6B7AEF]">{data.badgeText}</span>
          </div>
          <h2 className="mt-6 font-outfit text-3xl md:text-4xl lg:text-[44px] font-bold leading-tight text-[#2C3E50]">
            {data.title}
          </h2>
          <p className="mt-4 max-w-[892px] font-outfit text-lg md:text-xl lg:text-[22px] font-normal leading-relaxed text-[#7C8B99]">
            {data.subtitle}
          </p>
        </header>

        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 xl:grid-cols-4 xl:gap-9">
          {data.steps.map((step) => (
            <GrowthStepCard key={step.title} {...step} />
          ))}
        </div>

        <div className="flex w-full justify-center">
          <TestPrepRegisterButton />
        </div>
      </div>
    </section>
  );
}
