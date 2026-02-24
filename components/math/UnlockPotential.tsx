/**
 * 文件用途：Math 页「Unlock Potential」预约咨询区块，结构与 BookFreeTrialSection 一致
 * 依赖关系：依赖 types/math 的 UnlockPotentialData；图标来自 public/math/limited_time_offer
 * 注意事项：绿色渐变背景；左侧文案+保障列表+信任标签，右侧白色预约卡片，底部引用
 */

import Image from 'next/image';
import Link from 'next/link';

import { ArrowRight, Check, ListChecks } from 'lucide-react';

import type { UnlockPotentialData } from '@/types/math';

const CTA_URL_FALLBACK = 'https://forms.gle/2mMzKoQkXHa2CVHe6';

interface UnlockPotentialProps {
  /** Unlock Potential 区块数据 */
  data: UnlockPotentialData;
}

export default function UnlockPotential({ data }: UnlockPotentialProps) {
  const ctaUrl = data.ctaUrl ?? CTA_URL_FALLBACK;

  return (
    <section
      id="book-free"
      className="relative w-full overflow-hidden bg-gradient-to-b from-[#7EC97E] via-[#6BB86B] to-[#5FA65F]"
      aria-label="Book Free Trial"
    >
      <div className="relative mx-auto w-full max-w-[1280px] px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        {/* 顶部 Limited offer 徽标 */}
        <div className="mb-6 flex justify-center lg:mb-8">
          <div className="inline-flex items-center gap-2.5 rounded-3xl bg-white/20 px-7 py-3.5 opacity-90">
            <Image
              src="/math/limited_time_offer/icon.png"
              alt=""
              width={20}
              height={20}
              className="shrink-0"
              aria-hidden
            />
            <span className="font-outfit text-xl font-normal leading-7 text-white">
              {data.badgeText}
            </span>
          </div>
        </div>

        {/* 主内容区：左文案 + 右卡片 */}
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1fr_auto] lg:gap-12">
          {/* 左侧：标题、副标题、保障列表、信任标签 */}
          <div className="flex flex-col gap-9">
            <div className="flex flex-col gap-5">
              <h2 className="font-outfit text-3xl font-bold leading-tight text-white sm:text-4xl">
                {data.title}
              </h2>
              <p className="font-outfit max-w-[586px] text-lg font-normal leading-7 text-white/90 sm:text-xl">
                {data.subtitle}
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2.5">
                <ListChecks className="h-7 w-7 shrink-0 text-white" strokeWidth={2} />
                <span className="font-outfit text-xl font-semibold leading-7 text-white">
                  {data.ensureTitle}
                </span>
              </div>
              <ul className="flex flex-col gap-4">
                {data.ensureItems.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3.5 rounded-xl bg-white/20 px-5 py-4"
                  >
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-[6px] bg-white/30">
                      <Check className="h-4 w-4 text-white" strokeWidth={3} />
                    </div>
                    <span className="font-outfit text-lg font-normal leading-7 text-white sm:text-xl">
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-nowrap items-center gap-5">
              {data.trustItems.map((item, i) => (
                <div key={i} className="flex shrink-0 items-center gap-2">
                  <Image
                    src={`/math/limited_time_offer/${i + 1}.png`}
                    alt=""
                    width={24}
                    height={24}
                    className="shrink-0 object-contain opacity-90"
                    aria-hidden
                  />
                  <span className="font-outfit text-base font-normal leading-6 text-white/80 sm:text-lg">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* 右侧：白色预约卡片（尺寸与各页 Book Free 卡片完全一致：宽度优先保证 607px） */}
          <div className="w-full lg:w-[607px] lg:min-w-[607px] lg:shrink-0 min-h-[360px] mt-8 lg:mt-12 px-6 sm:px-8 pt-8 pb-6 sm:pt-12 sm:pb-8 bg-white rounded-3xl shadow-[0px_29px_58px_-14px_rgba(0,0,0,0.25)] flex flex-col gap-9">
            <div className="flex flex-col gap-2.5">
              <h3 className="font-outfit text-2xl font-semibold leading-10 text-slate-700 sm:text-3xl">
                {data.cardTitle}
              </h3>
              <p className="font-outfit text-lg font-normal leading-7 text-slate-500 sm:text-xl whitespace-nowrap">
                {data.cardSubtitle}
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <Link
                href={ctaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-14 w-full items-center justify-center gap-2.5 rounded-2xl bg-[#4CAF50] font-outfit text-xl font-normal leading-7 text-white transition-colors hover:bg-[#43A047]"
              >
                {data.ctaLabel}
                <ArrowRight className="h-6 w-6 shrink-0" strokeWidth={2} />
              </Link>
            </div>

            <div className="flex flex-wrap justify-between gap-6 border-t border-slate-100 pt-6">
              {data.stats.map((stat, i) => (
                <div key={i} className="flex min-w-[100px] flex-1 flex-row items-baseline gap-1.5 whitespace-nowrap">
                  <span className="font-outfit shrink-0 text-xl font-semibold leading-7 text-[#4CAF50]">
                    {stat.value}
                  </span>
                  <span className="font-outfit truncate text-lg font-normal leading-7 text-slate-500">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 底部引用气泡：留足上边距，避免被上方卡片遮挡 */}
        <div className="mt-14 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5 lg:mt-20">
          <div className="relative flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-white/20 p-2 sm:h-20 sm:w-20">
            <Image
              src="/math/limited_time_offer/4.png"
              alt=""
              fill
              className="object-contain p-1"
              sizes="5rem"
              aria-hidden
            />
          </div>
          <div className="max-w-[780px] rounded-3xl bg-white/20 px-6 py-5 sm:px-9">
            <p className="font-outfit text-lg font-normal leading-7 text-white sm:text-xl">
              {data.bottomQuote}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
