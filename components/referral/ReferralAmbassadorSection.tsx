/**
 * 文件用途：展示 Referral Program 的 Academic Ambassador 高阶奖励
 * 依赖关系：依赖 ReferralSectionHeader、ReferralAmbassadorContent 类型和学生插画资源
 * 注意事项：插画使用 Figma 导出的透明 PNG，桌面端允许轻微溢出以还原原设计构图
 */

import Image from 'next/image';

import ReferralSectionHeader from '@/components/referral/ReferralSectionHeader';
import type { ReferralAmbassadorContent } from '@/types/referral';

interface ReferralAmbassadorSectionProps {
  /** Academic Ambassador 文案 */
  content: ReferralAmbassadorContent;
}

export default function ReferralAmbassadorSection({ content }: ReferralAmbassadorSectionProps) {
  return (
    <section className="overflow-hidden bg-white px-5 py-24 sm:px-8 sm:py-32 lg:px-11 lg:py-[170px]" aria-labelledby="referral-ambassador-title">
      <div className="mx-auto grid max-w-[1720px] items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-4">
        <div className="relative mx-auto aspect-[4/3] w-full max-w-[1004px] lg:-ml-[110px] lg:min-h-[530px]">
          <Image
            src="/referral/raw-image-4.png"
            alt="Three students celebrating together"
            fill
            sizes="(max-width: 1024px) 100vw, 58vw"
            className="object-contain"
          />
        </div>

        <div className="mx-auto w-full max-w-[641px] lg:pl-4">
          <div id="referral-ambassador-title">
            <ReferralSectionHeader
              badge={content.badge}
              title={content.title}
              align="left"
            />
          </div>
          <div className="mt-10 space-y-8 font-outfit text-[#2C3E50] sm:mt-12 sm:space-y-10">
            <p className="text-2xl font-semibold leading-tight sm:text-[32px]">
              {content.highlightLead}{' '}
              <span className="text-[#599CED]">{content.highlightAmount}</span>
              {content.highlightTail}
            </p>
            <p className="text-lg font-normal leading-8 sm:text-2xl">{content.description}</p>
            <div className="text-lg font-normal leading-8 sm:text-2xl">
              <p>{content.benefitsLead}</p>
              <p className="font-semibold">{content.benefits}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
