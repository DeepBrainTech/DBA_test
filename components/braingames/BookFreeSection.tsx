/**
 * 文件用途：Brain Games「Book Free Trial」预约咨询区块
 * 依赖关系：依赖 types/braingames 的 BraingamesBookFreeTrialData；图标来自 public/braingames/bookfree
 * 注意事项：无表单输入，仅 CTA 跳转外链；Limited offer 用 icon.png，We ensure 标题用 get.png，下列 8 个用 1.png–8.png
 */

import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import type { BraingamesBookFreeTrialData } from '@/types/braingames';

const BOOKFREE_BASE = '/braingames/bookfree';
/** We ensure 四项 → 1.png–4.png；信任三项 → 5.png–7.png；底部引用 → 8.png */

const ICON_SIZE = {
  badge: 20,
  ensure: 24,
  trust: 24,
  quote: 50,
};

interface BookFreeSectionProps {
  data: BraingamesBookFreeTrialData;
}

export default function BookFreeSection({ data }: BookFreeSectionProps) {
  return (
    <section
      id="book-free"
      className="w-full relative bg-gradient-to-r from-[#F4A460] to-[#E89451] overflow-hidden"
      aria-label="Book Free Trial"
    >
      <div className="relative w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* 顶部 Limited offer 徽标（图标：braingames/bookfree/icon.png） */}
        <div className="flex justify-center mb-6 lg:mb-8">
          <div className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-white/20 rounded-3xl opacity-90">
            <Image
              src={`${BOOKFREE_BASE}/icon.png`}
              alt=""
              width={ICON_SIZE.badge}
              height={ICON_SIZE.badge}
              className="shrink-0 object-contain"
            />
            <span className="text-white text-xl font-normal font-['Outfit'] leading-7">
              {data.badgeText}
            </span>
          </div>
        </div>

        {/* 主内容区：左文案 + 右卡片（与 summer_camp 一致） */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 lg:gap-12 items-start">
          <div className="flex flex-col gap-9">
            <div className="flex flex-col gap-5">
              <h2 className="text-white text-3xl sm:text-4xl font-bold font-['Outfit'] leading-tight">
                {data.title}
              </h2>
              <p className="text-white/90 text-lg sm:text-xl font-normal font-['Outfit'] leading-7 max-w-[586px]">
                {data.subtitle}
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2.5">
                <Image
                  src={`${BOOKFREE_BASE}/get.png`}
                  alt=""
                  width={28}
                  height={28}
                  className="shrink-0 object-contain"
                />
                <span className="text-white text-xl font-semibold font-['Outfit'] leading-7">
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
                      src={`${BOOKFREE_BASE}/${i + 1}.png`}
                      alt=""
                      width={ICON_SIZE.ensure}
                      height={ICON_SIZE.ensure}
                      className="shrink-0 object-contain"
                    />
                    <span className="text-white text-lg sm:text-xl font-normal font-['Outfit'] leading-7">
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-nowrap items-center gap-5">
              {data.trustItems.map((item, i) => (
                <div key={i} className="flex items-center gap-2 shrink-0">
                  <Image
                    src={`${BOOKFREE_BASE}/${i + 5}.png`}
                    alt=""
                    width={ICON_SIZE.trust}
                    height={ICON_SIZE.trust}
                    className="shrink-0 object-contain opacity-90"
                  />
                  <span className="text-white/80 text-base sm:text-lg font-normal font-['Outfit'] leading-6">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* 右侧：白色预约卡片（尺寸与各页 Book Free 卡片统一：607px / 统一内边距与 min-height） */}
          <div className="w-full lg:w-[607px] lg:min-w-[607px] lg:shrink-0 min-h-[360px] mt-8 lg:mt-30 px-6 sm:px-8 pt-8 pb-6 sm:pt-12 sm:pb-8 bg-white rounded-3xl shadow-[0px_29px_58px_-14px_rgba(0,0,0,0.25)] flex flex-col gap-9">
            <div className="flex flex-col gap-2.5 mb-2">
              <h3 className="text-slate-700 text-2xl sm:text-3xl font-semibold font-['Outfit'] leading-10">
                {data.cardTitle}
              </h3>
              <p className="text-slate-500 text-lg sm:text-xl font-normal font-['Outfit'] leading-7 whitespace-nowrap">
                {data.cardSubtitle}
              </p>
            </div>

            <div className="flex flex-col bg-gradient-to-b from-[#F4A460] to-[#E89451] rounded-2xl gap-4">
              <a
                href="https://forms.gle/2mMzKoQkXHa2CVHe6"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-14 bg-gradient-to-r from-[#F4A460] to-[#E89451] rounded-2xl inline-flex justify-center items-center gap-2.5 text-white text-xl font-normal font-['Outfit'] leading-7 hover:opacity-90 transition-opacity"
              >
                {data.ctaLabel}
                <ArrowRight className="w-6 h-6 shrink-0" strokeWidth={2} />
              </a>
            </div>

            <div className="pt-6 border-t border-indigo-50 flex flex-wrap justify-between gap-6">
              {data.stats.map((stat, i) => (
                <div key={i} className="flex flex-row items-baseline gap-1.5 min-w-[100px] flex-1 whitespace-nowrap">
                  <span className="text-[#F4A460] text-xl font-semibold font-['Outfit'] leading-7 shrink-0">
                    {stat.value}
                  </span>
                  <span className="text-slate-500 text-lg font-normal font-['Outfit'] leading-7 truncate">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 底部引用气泡（与 summer_camp 一致） */}
        <div className="mt-10 lg:mt-12 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-5">
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 rounded-2xl flex justify-center items-center shrink-0 p-2">
            <Image
              src={`${BOOKFREE_BASE}/8.png`}
              alt=""
              width={ICON_SIZE.quote}
              height={ICON_SIZE.quote}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="px-6 sm:px-9 py-5 bg-white/20 rounded-3xl max-w-[780px]">
            <p className="text-white text-lg sm:text-xl font-normal font-['Outfit'] leading-7">
              {data.bottomQuote}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
