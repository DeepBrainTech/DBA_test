/**
 * 文件用途：Courses「Book Free Trial」预约咨询区块
 * 依赖关系：依赖 types/courses 的 CoursesBookFreeTrialData；图标来自 public/courses/bookfreetrial
 */

import Image from 'next/image';
import { ArrowRight, ListChecks } from 'lucide-react';
import type { CoursesBookFreeTrialData } from '@/types/courses';

const ASSET_BASE = '/courses/bookfreetrial';
const ENSURE_ICONS = ['smallgroup.png', 'Course Materials.png', 'Strict.png', 'Weekly.png'];
const TRUST_ICONS = ['cure.png', 'fast.png', 'risk-free.png'];

const ICON_SIZE = {
  badge: 20,
  ensure: 24,
  trust: 24,
  quote: 50,
};

interface BookFreeTrialSectionProps {
  data: CoursesBookFreeTrialData;
}

export default function BookFreeTrialSection({ data }: BookFreeTrialSectionProps) {
  return (
    <section
      id="book-free-trial"
      className="w-full relative bg-[#599CED] overflow-hidden"
      aria-label="Book Free Trial"
    >
      <div className="relative w-full max-w-[min(1280px,90vw)] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="flex justify-center mb-6 lg:mb-8">
          <div className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-white/20 rounded-3xl opacity-90">
            <Image
              src={`${ASSET_BASE}/limitedoffer.svg`}
              alt=""
              width={ICON_SIZE.badge}
              height={ICON_SIZE.badge}
              className="shrink-0 brightness-0 invert"
            />
            <span className="text-white text-xl font-normal font-outfit leading-7">
              {data.badgeText}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 lg:gap-12 items-start">
          <div className="flex flex-col gap-9">
            <div className="flex flex-col gap-5">
              <h2 className="text-white text-3xl sm:text-4xl font-bold font-outfit leading-tight">
                {data.title}
              </h2>
              <p className="text-white/90 text-lg sm:text-xl font-normal font-outfit leading-7 max-w-[586px]">
                {data.subtitle}
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2.5">
                <ListChecks className="w-7 h-7 text-white shrink-0" strokeWidth={2} />
                <span className="text-white text-xl font-semibold font-outfit leading-7">
                  {data.ensureTitle}
                </span>
              </div>
              <ul className="flex flex-col gap-4">
                {data.ensureItems.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3.5 px-5 py-4 bg-white/20 rounded-xl"
                  >
                    <Image
                      src={`${ASSET_BASE}/${encodeURIComponent(ENSURE_ICONS[i] ?? '')}`}
                      alt=""
                      width={ICON_SIZE.ensure}
                      height={ICON_SIZE.ensure}
                      className="shrink-0 object-contain"
                    />
                    <span className="text-white text-lg sm:text-xl font-normal font-outfit leading-7">
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 sm:gap-5">
              {data.trustItems.map((item, i) => (
                <div key={i} className="flex items-center gap-2 shrink-0">
                  <Image
                    src={`${ASSET_BASE}/${encodeURIComponent(TRUST_ICONS[i] ?? '')}`}
                    alt=""
                    width={ICON_SIZE.trust}
                    height={ICON_SIZE.trust}
                    className="w-5 h-5 sm:w-6 sm:h-6 shrink-0 object-contain opacity-90"
                  />
                  <span className="text-white/80 text-sm sm:text-base lg:text-lg font-normal font-outfit leading-6">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-[500px] xl:w-[607px] lg:shrink-0 min-h-[320px] lg:min-h-[360px] mt-6 lg:mt-12 px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 lg:pt-12 pb-5 sm:pb-6 lg:pb-8 bg-white rounded-2xl lg:rounded-3xl shadow-[0px_29px_58px_-14px_rgba(0,0,0,0.25)] flex flex-col gap-5 sm:gap-7 lg:gap-9">
            <div className="flex flex-col gap-2">
              <h3 className="text-[#599CED] text-xl sm:text-2xl lg:text-3xl font-semibold font-outfit leading-tight">
                {data.cardTitle}
              </h3>
              <p className="text-slate-500 text-sm sm:text-base lg:text-xl font-normal font-outfit leading-relaxed">
                {data.cardSubtitle}
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:gap-4">
              <a
                href={data.ctaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-11 sm:h-12 lg:h-14 bg-[#599CED] rounded-xl lg:rounded-2xl inline-flex justify-center items-center gap-2 text-white text-base sm:text-lg lg:text-xl font-normal font-outfit hover:bg-[#4788D9] transition-colors"
              >
                {data.ctaLabel}
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" strokeWidth={2} />
              </a>
            </div>

            <div className="pt-4 sm:pt-6 border-t border-indigo-50 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-x-4 lg:gap-x-6 justify-items-center">
              {data.stats.map((stat, i) => (
                <div key={i} className="flex flex-col gap-0.5 items-center text-center">
                  <span className="text-[#599CED] text-base sm:text-lg lg:text-xl font-semibold font-outfit">
                    {stat.value}
                  </span>
                  <span className="text-slate-500 text-xs sm:text-sm lg:text-base font-normal font-outfit text-center">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 lg:mt-12 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-5">
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 rounded-2xl flex justify-center items-center shrink-0 p-2">
            <Image
              src={`${ASSET_BASE}/brain.png`}
              alt=""
              width={ICON_SIZE.quote}
              height={ICON_SIZE.quote}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="px-6 sm:px-9 py-5 bg-white/20 rounded-3xl max-w-[780px]">
            <p className="text-white text-lg sm:text-xl font-normal font-outfit leading-7">
              {data.bottomQuote}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
