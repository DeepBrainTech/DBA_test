/**
 * 文件用途：Consultation CTA 预约入口组件（Programming 页面）
 * 依赖关系：无；布局参考 components/global/BookFreeSection
 * 图标均来自 public/programming/book_free_trial/
 */

'use client';

import Image from 'next/image';
import { ArrowRight, ListChecks } from 'lucide-react';

/** 图标路径前缀（图片放在 public/programming/book_free_trial/ 下） */
const BOOK_ICONS = '/programming/book_free_trial';

// TODO: 替换为你的 Google Form 链接
const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSfAceUQq9JJ3uu-EcWlHkTQ1O1jY_uzh-fptrN7_JC9rf-dqg/viewform';

interface Benefit {
  text: string;
}

const benefits: Benefit[] = [
  { text: 'Personalized Report' },
  { text: 'One-on-one consultation' },
  { text: 'Background Evaluation & Analysis' },
];

const stats = [
  { value: '2,456', label: 'Sessions Booked' },
  { value: '100%', label: 'Satisfaction Rate' },
  { value: '24h', label: 'Response Time' },
];

const trustItems = [
  { label: 'Secure Information' },
  { label: 'Fast Responding' },
  { label: 'Risk-free Guarantee' },
];

const BOTTOM_QUOTE =
  "Behind every acceptance: planning, guidance, and partnership. Start your journey here—let's make it possible! 🚀";

export default function ConsultationCTA() {
  return (
    <section
      id="book-free"
      className="w-full relative bg-gradient-to-b from-[#44D1C6] to-[#1DA89E] overflow-hidden"
      aria-label="Book Free Consultation"
    >
      <div className="relative w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* 顶部 Limited-time Offer 徽标 */}
        <div className="flex justify-center mb-6 lg:mb-8">
          <div className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-white/20 rounded-3xl opacity-90">
            <Image
              src={`${BOOK_ICONS}/Icon.png`}
              alt=""
              width={20}
              height={20}
              className="shrink-0 brightness-0 invert"
            />
            <span className="text-white text-xl font-normal leading-7">
              Limited-time Offer
            </span>
          </div>
        </div>

        {/* 主内容区：左文案 + 右卡片 */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 lg:gap-12 items-start">
          {/* 左侧：标题、副标题、You'll Get 列表、信任标签 */}
          <div className="flex flex-col gap-9">
            <div className="flex flex-col gap-5">
              <h2 className="text-white text-3xl sm:text-4xl font-bold leading-tight">
                Your path to a dream school deserves a strategic partner.
              </h2>
              <p className="text-white/90 text-lg sm:text-xl font-normal leading-7 max-w-[586px]">
                Book a free consultation with our advisor now.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2.5">
                <ListChecks className="w-7 h-7 text-white shrink-0" strokeWidth={2} />
                <span className="text-white text-xl font-semibold leading-7">
                  You&apos;ll Get:
                </span>
              </div>
              <ul className="flex flex-col gap-4">
                {benefits.map((benefit, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3.5 px-5 py-4 bg-white/20 rounded-xl"
                  >
                    <Image
                      src={`${BOOK_ICONS}/${i + 1}.png`}
                      alt=""
                      width={24}
                      height={24}
                      className="shrink-0 object-contain"
                    />
                    <span className="text-white text-lg sm:text-xl font-normal leading-7">
                      {benefit.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-nowrap items-center gap-5">
              {trustItems.map((item, i) => (
                <div key={i} className="flex items-center gap-2 shrink-0">
                  <Image
                    src={`${BOOK_ICONS}/${i + 4}.png`}
                    alt=""
                    width={24}
                    height={24}
                    className="shrink-0 object-contain opacity-90"
                  />
                  <span className="text-white/80 text-base sm:text-lg font-normal leading-6">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* 右侧：白色预约卡片 */}
          <div className="w-full lg:w-[607px] lg:min-w-[607px] lg:shrink-0 min-h-[360px] mt-8 lg:mt-12 px-6 sm:px-8 pt-8 pb-6 sm:pt-12 sm:pb-8 bg-white rounded-3xl shadow-[0px_29px_58px_-14px_rgba(0,0,0,0.25)] flex flex-col gap-9">
            <div className="flex flex-col gap-2.5">
              <h3 className="text-slate-700 text-2xl sm:text-3xl font-semibold leading-10">
                Schedule Your Consultation
              </h3>
              <p className="text-slate-500 text-lg sm:text-xl font-normal leading-7 whitespace-nowrap">
                Submit your details and an advisor will contact you within 24h.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <a
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-14 bg-gradient-to-b from-[#44D1C6] to-[#1DA89E] rounded-2xl inline-flex justify-center items-center gap-2.5 text-white text-xl font-normal leading-7 hover:opacity-95 transition-opacity"
              >
                Book Free Trial
                <ArrowRight className="w-6 h-6 shrink-0" strokeWidth={2} />
              </a>
            </div>

            {/* 底部统计 */}
            <div className="pt-6 border-t border-teal-50 grid grid-cols-3 gap-x-6 gap-y-6 justify-items-center">
              {stats.map((stat, i) => (
                <div key={i} className="flex flex-col gap-0.5 min-w-0 items-center text-center">
                  <span className="text-[#2FBFB6] text-xl font-semibold leading-7">
                    {stat.value}
                  </span>
                  <span className="text-slate-500 text-lg font-normal leading-7 truncate">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 底部引用气泡 */}
        <div className="mt-10 lg:mt-12 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-5">
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 rounded-2xl flex justify-center items-center shrink-0 p-2">
            <Image
              src={`${BOOK_ICONS}/7.png`}
              alt=""
              width={50}
              height={50}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="px-6 sm:px-9 py-5 bg-white/20 rounded-3xl max-w-[780px]">
            <p className="text-white text-lg sm:text-xl font-normal leading-7">
              {BOTTOM_QUOTE}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
