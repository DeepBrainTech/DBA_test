/**
 * 文件用途：Test Prep 紫色版「Book Free Trial」预约咨询区块
 * 依赖关系：依赖 types/courses 的 CoursesBookFreeTrialData；结构沿用 Courses BookFreeTrialSection
 */

import Image from 'next/image';
import { ArrowRight, ListChecks } from 'lucide-react';

import type { CoursesBookFreeTrialData } from '@/types/courses';

const ASSET_BASE = '/courses/bookfreetrial';
const ENSURE_ICONS = ['smallgroup.png', 'Course Materials.png', 'Strict.png', 'Weekly.png'];
const TRUST_ICONS = ['cure.png', 'fast.png', 'risk-free.png'];
const FORM_URL = 'https://docs.google.com/forms/d/1wnsEKekngdFdpt465K4BIvXLT1mKvM2VmEI2Kc0QvCQ/viewform';

interface TestPrepBookFreeTrialSectionProps {
  data: CoursesBookFreeTrialData;
}

export default function TestPrepBookFreeTrialSection({ data }: TestPrepBookFreeTrialSectionProps) {
  return (
    <section
      id="test-prep-book-free-trial"
      className="relative w-full overflow-hidden bg-linear-to-b from-[#6B7AEF] from-[74%] to-[#4758E0]"
      aria-label="Book Free Trial"
    >
      <div className="relative mx-auto w-full max-w-[min(1280px,90vw)] px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mb-6 flex justify-center lg:mb-8">
          <div className="inline-flex items-center gap-2.5 rounded-3xl bg-white/20 px-7 py-3.5 opacity-90">
            <Image
              src={`${ASSET_BASE}/limitedoffer.svg`}
              alt=""
              width={20}
              height={20}
              className="shrink-0 brightness-0 invert"
              aria-hidden
            />
            <span className="font-outfit text-xl font-normal leading-7 text-white">{data.badgeText}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1fr_auto] lg:gap-12">
          <div className="flex flex-col gap-9">
            <div className="flex flex-col gap-5">
              <h2 className="font-outfit text-3xl font-bold leading-tight text-white sm:text-4xl">
                {data.title}
              </h2>
              <p className="max-w-[586px] font-outfit text-lg font-normal leading-7 text-white/90 sm:text-xl">
                {data.subtitle}
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2.5">
                <ListChecks className="size-7 shrink-0 text-white" strokeWidth={2} />
                <span className="font-outfit text-xl font-semibold leading-7 text-white">
                  {data.ensureTitle}
                </span>
              </div>
              <ul className="flex flex-col gap-4">
                {data.ensureItems.map((item, index) => (
                  <li
                    key={item.text}
                    className="flex items-center gap-3.5 rounded-xl bg-white/20 px-5 py-4"
                  >
                    <Image
                      src={`${ASSET_BASE}/${encodeURIComponent(ENSURE_ICONS[index] ?? '')}`}
                      alt=""
                      width={24}
                      height={24}
                      className="shrink-0 object-contain"
                      aria-hidden
                    />
                    <span className="font-outfit text-lg font-normal leading-7 text-white sm:text-xl">
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap items-center gap-3 sm:flex-nowrap sm:gap-5">
              {data.trustItems.map((item, index) => (
                <div key={item.label} className="flex shrink-0 items-center gap-2">
                  <Image
                    src={`${ASSET_BASE}/${encodeURIComponent(TRUST_ICONS[index] ?? '')}`}
                    alt=""
                    width={24}
                    height={24}
                    className="size-5 shrink-0 object-contain opacity-90 sm:size-6"
                    aria-hidden
                  />
                  <span className="font-outfit text-sm font-normal leading-6 text-white/80 sm:text-base lg:text-lg">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 flex min-h-[320px] w-full flex-col gap-5 rounded-2xl bg-white px-4 pb-5 pt-6 shadow-[0px_29px_58px_-14px_rgba(0,0,0,0.25)] sm:px-6 sm:pb-6 sm:pt-8 lg:mt-12 lg:min-h-[360px] lg:w-[500px] lg:shrink-0 lg:gap-9 lg:rounded-3xl lg:px-8 lg:pb-8 lg:pt-12 xl:w-[607px]">
            <div className="flex flex-col gap-2">
              <h3 className="font-outfit text-xl font-semibold leading-tight text-[#2C3E50] sm:text-2xl lg:text-3xl">
                {data.cardTitle}
              </h3>
              <p className="font-outfit text-sm font-normal leading-relaxed text-slate-500 sm:text-base lg:text-xl">
                {data.cardSubtitle}
              </p>
            </div>

            <a
              href={FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-[#6B7AEF] font-outfit text-base font-normal text-white transition-colors hover:bg-[#5A69DE] sm:h-12 sm:text-lg lg:h-14 lg:rounded-2xl lg:text-xl"
            >
              {data.ctaLabel}
              <ArrowRight className="size-5 shrink-0 sm:size-6" strokeWidth={2} />
            </a>

            <div className="grid grid-cols-1 justify-items-center gap-4 border-t border-indigo-50 pt-4 sm:grid-cols-3 sm:gap-x-4 sm:pt-6 lg:gap-x-6">
              {data.stats.map((stat) => (
                <div key={stat.label} className="flex flex-col items-center gap-0.5 text-center">
                  <span className="font-outfit text-base font-semibold text-[#6B7AEF] sm:text-lg lg:text-xl">
                    {stat.value}
                  </span>
                  <span className="text-center font-outfit text-xs font-normal text-slate-500 sm:text-sm lg:text-base">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5 lg:mt-12">
          <div className="flex size-16 shrink-0 items-center justify-center rounded-2xl bg-white/20 p-2 sm:size-20">
            <Image
              src={`${ASSET_BASE}/brain.png`}
              alt=""
              width={50}
              height={50}
              className="size-full object-contain"
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
