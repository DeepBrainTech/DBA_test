/**
 * 文件用途：Our Programs 课程区块（PRE-AMC / AMC 8/10 等复用），含 badge + 标题 + 副标题 + 四张卡；引用与 CTA 按 data 可选渲染
 * 依赖关系：lucide-react、PreAMCProgramCard、data 由页面通过 props 传入
 */

import Link from 'next/link';

import { ArrowRight } from 'lucide-react';

import PreAMCProgramCard from '@/components/math/PreAMCProgramCard';
import type { PreAMCProgramData } from '@/types/math';

interface PreAMCProgramProps {
  /** 课程区块数据 */
  data: PreAMCProgramData;
  /** 可选：section 外层样式，用于覆盖背景等（如 bg-[#FBF9F4]、渐变）。不传则默认 bg-white */
  sectionClassName?: string;
}

export default function PreAMCProgram({ data, sectionClassName }: PreAMCProgramProps) {
  const sectionClass = `${sectionClassName ?? 'bg-white'} py-24`;
  return (
    <section className={sectionClass}>
      <div className="mx-auto w-full max-w-[1344px] px-9">
        {/* 顶部：与 Math Teaching Philosophy 区块同布局——badge + 主标题 + 副标题 */}
        <div className="mb-16 flex flex-col items-center text-center">
          <div className="relative mb-6 inline-flex items-center gap-3 rounded-3xl bg-[#F0FFF0] px-5 py-3.5">
            <span className="text-lg font-normal leading-none md:text-xl" aria-hidden>
              💡
            </span>
            <span className="font-outfit text-[#7EC97E] text-lg font-normal leading-7 md:text-xl">
              {data.badgeLabel}
            </span>
          </div>
          <h2 className="mb-4 font-outfit text-4xl font-bold leading-tight text-[#2C3E50] md:text-5xl">
            {data.title}
          </h2>
          <p className="max-w-3xl font-outfit text-base leading-relaxed text-[#2C3E50]/60">
            {data.subtitle}
          </p>
        </div>

        <div className="flex flex-col gap-16 md:gap-20">
          {/* 四张特色卡片：图标来自 data 的 iconSrc；改 gap-6 可调卡片间距（如 gap-4 更密、gap-8 更疏） */}
          <div className="grid w-full grid-cols-1 gap-9 sm:grid-cols-2 lg:grid-cols-4">
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

          {/* 课程理念引用（仅当 data 提供 quoteText 时渲染） */}
          {data.quoteText != null && data.quoteText !== '' && (
            <div className="mx-auto w-full max-w-[1268px] flex flex-col rounded-3xl overflow-hidden pt-5 pl-6 pr-8 pb-9 md:pt-6 md:pl-12 md:pr-8 md:pb-9 bg-gradient-to-r from-green-400/0 to-green-400/0">
              <div className="flex justify-start pb-0" aria-hidden>
                <span className="font-outfit text-4xl font-normal leading-none text-green-400 opacity-20 md:text-6xl">
                  &quot;
                </span>
              </div>
              <div className="mt-0.5 flex min-w-0 flex-1 flex-col items-center gap-5">
                <p className="w-full max-w-[1028px] text-center font-outfit text-xl font-normal leading-7 text-slate-700">
                  {data.quoteText}
                </p>
                {data.quoteAttribution != null && data.quoteAttribution !== '' && (
                  <p className="font-outfit text-lg font-normal leading-7 text-slate-500">
                    {data.quoteAttribution}
                  </p>
                )}
              </div>
            </div>
          )}

          {/* 双 CTA（仅当 data 提供 ctaWatchUrl 时渲染） */}
          {data.ctaWatchUrl != null && data.ctaWatchUrl !== '' && (
            <div className="flex w-full flex-wrap justify-center gap-4">
              <Link
                href={data.ctaWatchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-3xl bg-white px-8 py-4 font-outfit text-xl font-bold text-[#7EC97E] shadow-[0px_6.64px_9.96px_-6.64px_rgba(0,0,0,0.1),0px_16.59px_24.89px_-4.98px_rgba(0,0,0,0.1)] transition hover:bg-green-50"
              >
                Free Assessment
                <ArrowRight className="size-6 shrink-0" strokeWidth={2.5} />
              </Link>
              {data.ctaRegisterUrl != null && data.ctaRegisterUrl !== '' && (
                <Link
                  href={data.ctaRegisterUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-[33px] bg-[#7EC97E] px-8 py-4 font-outfit text-xl font-bold text-white shadow-[0px_6.64px_9.96px_-6.64px_rgba(0,0,0,0.1),0px_16.59px_24.89px_-4.98px_rgba(0,0,0,0.1)] transition hover:bg-green-500"
                >
                  Register Now
                  <ArrowRight className="size-6 shrink-0" strokeWidth={2.5} />
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
