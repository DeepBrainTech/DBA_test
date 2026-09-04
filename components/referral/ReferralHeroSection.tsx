/**
 * 文件用途：Referral Program 首屏，展示主标题、说明和 Figma 导出的背景装饰
 * 依赖关系：依赖 ReferralHeroContent 类型与 public/referral 下的 SVG 资源
 * 注意事项：导航栏由根布局统一渲染，本区块只通过负外边距与导航栏首屏叠加
 */

import Image from 'next/image';

import type { ReferralHeroContent } from '@/types/referral';

interface ReferralHeroSectionProps {
  /** Hero 文案 */
  content: ReferralHeroContent;
}

export default function ReferralHeroSection({ content }: ReferralHeroSectionProps) {
  return (
    <section
      className="relative -mt-[106px] min-h-[620px] overflow-hidden bg-gradient-to-b from-[#E8F4FC] to-[#FBF9F4] lg:min-h-[681px]"
      aria-labelledby="referral-hero-title"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute right-[20%] top-24 size-24 rounded-full bg-[#FFD4A3] opacity-20 blur-[55px]" />
        <Image
          src="/referral/decor-line-2.svg"
          alt=""
          width={990}
          height={539}
          className="absolute bottom-[-295px] left-[-440px] hidden h-auto w-[990px] max-w-none lg:block"
        />
        <Image
          src="/referral/decor-line-4.svg"
          alt=""
          width={988}
          height={512}
          className="absolute bottom-[-145px] right-[-200px] hidden h-auto w-[988px] max-w-none lg:block"
        />
        <Image
          src="/referral/decor-line-2.svg"
          alt=""
          width={990}
          height={539}
          className="absolute bottom-[-110px] left-[-235px] h-auto w-[480px] max-w-none lg:hidden"
        />
        <Image
          src="/referral/decor-line-4.svg"
          alt=""
          width={988}
          height={512}
          className="absolute bottom-[-80px] right-[-230px] h-auto w-[500px] max-w-none lg:hidden"
        />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[620px] max-w-[1920px] items-start justify-center px-5 pb-24 pt-[190px] text-center sm:px-8 sm:pt-[220px] lg:min-h-[681px] lg:pt-[280px]">
        <div className="max-w-[959px]">
          <h1
            id="referral-hero-title"
            className="font-outfit text-4xl font-bold leading-tight text-[#333333] sm:text-5xl lg:text-[54px] lg:leading-[1.3]"
          >
            {content.titleLead}{' '}
            <span className="bg-gradient-to-b from-[#C8E4FF] to-[#4599FF] bg-clip-text text-transparent">
              {content.titleAccent}
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-[959px] font-outfit text-sm font-normal leading-6 text-[#7C8B99] sm:text-base sm:leading-7 lg:mt-4 lg:text-lg">
            {content.description}
          </p>
        </div>
      </div>
    </section>
  );
}
