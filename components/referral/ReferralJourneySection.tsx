/**
 * 文件用途：展示 Referral Program 的 Share、Assess、Enroll 三步流程
 * 依赖关系：依赖 ReferralSectionHeader 与 ReferralJourneyStep 类型
 * 注意事项：桌面端使用 Figma 导出的渐变连接线，移动端改为纵向流程以避免内容拥挤
 */

import Image from 'next/image';

import ReferralSectionHeader from '@/components/referral/ReferralSectionHeader';
import type { ReferralJourneyStep } from '@/types/referral';

interface ReferralJourneySectionProps {
  /** 区块标签 */
  badge: string;
  /** 区块标题 */
  title: string;
  /** 三个流程步骤 */
  steps: ReferralJourneyStep[];
}

function JourneyStepText({ step }: { step: ReferralJourneyStep }) {
  return (
    <>
      <h3 className="font-outfit text-xl font-semibold leading-8 text-[#2C3E50] sm:text-2xl">
        {step.title}
      </h3>
      <p className="mt-2 max-w-[362px] font-outfit text-base font-normal leading-7 text-[#7C8B99] sm:text-lg">
        {step.description}
      </p>
    </>
  );
}

export default function ReferralJourneySection({
  badge,
  title,
  steps,
}: ReferralJourneySectionProps) {
  return (
    <section className="bg-white px-5 pb-24 pt-24 sm:px-8 sm:pb-32 sm:pt-28 lg:px-11 lg:pb-[150px] lg:pt-[150px]" aria-labelledby="referral-journey-title">
      <div className="mx-auto max-w-[1507px]">
        <div id="referral-journey-title">
          <ReferralSectionHeader badge={badge} title={title} />
        </div>

        <div className="relative mx-auto mt-14 max-w-[840px] lg:mt-[60px]">
          <div className="relative hidden h-[80px] md:block" aria-hidden="true">
            <div className="pointer-events-none absolute left-[15px] right-[16px] top-[37px] h-[5px]">
              <Image src="/referral/decor-line-7.svg" alt="" fill sizes="809px" className="object-fill" />
            </div>
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`absolute top-0 z-10 flex size-[80px] items-center justify-center rounded-full font-outfit text-[25px] font-normal text-[#FBF9F4] shadow-[0_20px_12.5px_rgba(0,0,0,0.1),0_8px_5px_rgba(0,0,0,0.1)] ${
                  index === 0 ? 'left-[-40px]' : index === 1 ? 'left-[380px]' : 'right-[-40px]'
                }`}
                style={{ backgroundColor: step.accentColor }}
              >
                {step.number}
              </div>
            ))}
          </div>

          <div className="relative mt-4 hidden min-h-[130px] md:block">
            {steps.map((step, index) => (
              <article
                key={step.number}
                className={`absolute top-0 flex w-[362px] flex-col items-center text-center ${
                  index === 0 ? 'left-0' : index === 1 ? 'left-[420px]' : 'left-full'
                } -translate-x-1/2`}
              >
                <JourneyStepText step={step} />
              </article>
            ))}
          </div>

          <div className="grid gap-12 md:hidden">
            {steps.map((step) => (
              <article key={step.number} className="relative flex flex-col items-center text-center">
                <div
                  className="relative z-10 flex size-20 items-center justify-center rounded-full font-outfit text-2xl font-normal text-[#FBF9F4] shadow-[0_20px_12.5px_rgba(0,0,0,0.1),0_8px_5px_rgba(0,0,0,0.1)]"
                  style={{ backgroundColor: step.accentColor }}
                >
                  {step.number}
                </div>
                <div className="mt-6">
                  <JourneyStepText step={step} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
