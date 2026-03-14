/**
 * 文件用途：Our Programs 课程区块（PRE-AMC / AMC 8/10 等复用），含 badge + 标题 + 副标题 + 四张卡；引用与 CTA 按 data 可选渲染
 * 依赖关系：lucide-react、ClassTimeWeChatSection、FreeTrialButton、PreAMCProgramCard、data 由页面通过 props 传入
 */

import Link from 'next/link';

import { ArrowRight } from 'lucide-react';

import ClassTimeWeChatSection from '@/components/math/ClassTimeWeChatSection';
import FreeTrialButton from '@/components/math/FreeTrialButton';
import PreAMCProgramCard from '@/components/math/PreAMCProgramCard';
import type { ClassTimeWeChatData, PreAMCProgramData } from '@/types/math';

interface PreAMCProgramProps {
  /** 课程区块数据 */
  data: PreAMCProgramData;
  /** 可选：section 外层样式，用于覆盖背景等（如 bg-[#FBF9F4]、渐变）。不传则默认 bg-white */
  sectionClassName?: string;
  /** Class Time + WeChat 区块数据（仅独立渲染 PRE-AMC 时传入，用于展示第一处区块） */
  classTimeWeChat?: ClassTimeWeChatData;
}

export default function PreAMCProgram({ data, sectionClassName, classTimeWeChat }: PreAMCProgramProps) {
  const sectionClass = `${sectionClassName ?? 'bg-white'} py-12 sm:py-16 lg:py-24`;
  return (
    <section className={sectionClass}>
      <div className="mx-auto w-full max-w-[1344px] px-4 sm:px-6 lg:px-9">
        {/* 顶部 */}
        <div className="mb-8 sm:mb-12 lg:mb-16 flex flex-col items-center text-center">
          <div className="relative mb-4 sm:mb-6 inline-flex items-center gap-2 sm:gap-3 rounded-2xl lg:rounded-3xl bg-[#F0FFF0] px-4 sm:px-5 py-2.5 sm:py-3.5">
            <span className="text-base sm:text-lg md:text-xl font-normal leading-none" aria-hidden>
              💡
            </span>
            <span className="font-outfit text-[#7EC97E] text-base sm:text-lg md:text-xl font-normal">
              {data.badgeLabel}
            </span>
          </div>
          <h2 className="mb-3 sm:mb-4 font-outfit text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight text-[#2C3E50]">
            {data.title}
          </h2>
          <p className="max-w-3xl font-outfit text-sm sm:text-base leading-relaxed text-[#2C3E50]/60">
            {data.subtitle}
          </p>
        </div>

        <div className="flex flex-col gap-8 sm:gap-12 md:gap-16 lg:gap-20">
          {/* 四张特色卡片：移动端横向滚动 */}
          <div className="lg:hidden w-full overflow-x-auto pb-4 -mx-2 px-2">
            <div className="flex gap-4 sm:gap-6 w-max">
              {data.features.map((feature) => (
                <div key={feature.title} className="w-[260px] sm:w-[300px] flex-shrink-0">
                  <PreAMCProgramCard
                    cardClassName={feature.cardBg}
                    iconContainerClassName={feature.iconBg}
                    iconSrc={feature.iconSrc}
                    title={feature.title}
                    titleClassName={feature.titleClassName}
                    content={feature.description}
                    contentClassName={feature.contentClassName}
                    titleMaxCh={feature.titleMaxCh}
                    contentMaxCh={feature.contentMaxCh}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="hidden lg:grid w-full grid-cols-4 gap-9">
            {data.features.map((feature) => (
              <PreAMCProgramCard
                key={feature.title}
                cardClassName={feature.cardBg}
                iconContainerClassName={feature.iconBg}
                iconSrc={feature.iconSrc}
                title={feature.title}
                titleClassName={feature.titleClassName}
                content={feature.description}
                contentClassName={feature.contentClassName}
                titleMaxCh={feature.titleMaxCh}
                contentMaxCh={feature.contentMaxCh}
              />
            ))}
          </div>

          {/* 课程理念引用 */}
          {data.quoteText != null && data.quoteText !== '' && (
            <div className="mx-auto w-full max-w-[1268px] flex flex-col rounded-2xl lg:rounded-3xl overflow-hidden pt-4 sm:pt-5 md:pt-6 px-4 sm:px-6 md:pl-12 md:pr-8 pb-6 sm:pb-8 md:pb-9 bg-gradient-to-r from-green-400/0 to-green-400/0">
              <div className="flex justify-start pb-0" aria-hidden>
                <span className="font-outfit text-3xl sm:text-4xl md:text-6xl font-normal leading-none text-green-400 opacity-20">
                  &quot;
                </span>
              </div>
              <div className="mt-0.5 flex min-w-0 flex-1 flex-col items-center gap-3 sm:gap-4 lg:gap-5">
                <p className="w-full max-w-[1028px] text-center font-outfit text-base sm:text-lg lg:text-xl font-normal leading-relaxed text-slate-700">
                  {data.quoteText}
                </p>
                {data.quoteAttribution != null && data.quoteAttribution !== '' && (
                  <p className="font-outfit text-sm sm:text-base lg:text-lg font-normal text-slate-500">
                    {data.quoteAttribution}
                  </p>
                )}
              </div>
            </div>
          )}

          {/* Class Time + WeChat 二维码，紧接双 CTA 上方；数据来自 data/math.ts */}
          {data.ctaWatchUrl != null && data.ctaWatchUrl !== '' && classTimeWeChat != null && (
            <>
              <ClassTimeWeChatSection data={classTimeWeChat} variant="preamc" />
              <div className="flex w-full flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
                <FreeTrialButton
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl sm:rounded-2xl lg:rounded-3xl bg-white px-6 sm:px-8 py-3 sm:py-4 font-outfit text-base sm:text-lg lg:text-xl font-bold text-[#7EC97E] shadow-md transition hover:bg-green-50"
                />
                {data.ctaRegisterUrl != null && data.ctaRegisterUrl !== '' && (
                  <Link
                    href={data.ctaRegisterUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl sm:rounded-2xl lg:rounded-[33px] bg-[#7EC97E] px-6 sm:px-8 py-3 sm:py-4 font-outfit text-base sm:text-lg lg:text-xl font-bold text-white shadow-md transition hover:bg-green-500"
                  >
                    Register Now
                    <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" strokeWidth={2.5} />
                  </Link>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
