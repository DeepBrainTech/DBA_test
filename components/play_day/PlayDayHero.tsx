/**
 * 文件用途：Summer Camp 页面完整内容区
 * 依赖关系：依赖 next/image、next/link、PlayDayPageData 类型
 * 注意事项：-mt-[106px] 使首屏与透明导航重叠；max-w-[1344px] 与 Math 页面一致
 */

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import type { PlayDayPageData } from '@/types/play_day';

interface PlayDayHeroProps {
  data: PlayDayPageData;
}

export default function PlayDayHero({ data }: PlayDayHeroProps) {
  const {
    hero,
    intro,
    subjects,
    whyChoose,
    schedule,
    offers,
    location,
    registerButtonText,
    registerUrl,
  } = data;

  return (
    <section className="relative -mt-[106px] pt-32 pb-12 sm:pb-16 lg:pb-24 bg-[#FBF9F4]">
      <div className="mx-auto w-full max-w-[1344px] px-4 sm:px-6 lg:px-9 flex flex-col gap-8 sm:gap-12 lg:gap-16">
        {/* Hero */}
        <div className="flex flex-col items-center text-center mb-4 sm:mb-6 lg:mb-8">
          <div className="relative inline-flex items-center gap-2 sm:gap-3 rounded-2xl lg:rounded-3xl bg-[#E8EEF7] px-4 sm:px-5 py-2.5 sm:py-3.5 mb-4 sm:mb-6">
            <span className="text-[#274777] text-base sm:text-lg md:text-xl font-medium">
              {hero.badge}
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl leading-tight font-bold text-[#2C3E50] mb-3 sm:mb-4">
            {hero.title}
          </h1>

          <p className="max-w-3xl text-sm sm:text-base lg:text-lg leading-relaxed text-[#2C3E50]/70 whitespace-pre-line">
            {hero.subtitle}
          </p>
        </div>

        {/* Intro */}
        <div className="w-full bg-white rounded-2xl sm:rounded-3xl lg:rounded-[40px] py-8 sm:py-10 lg:py-12 px-4 sm:px-8 lg:px-12 overflow-hidden">
          <div className="max-w-4xl mx-auto text-center flex flex-col gap-3 sm:gap-4">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#2C3E50] leading-relaxed">
              {intro.title}
            </h2>
            <p className="text-sm sm:text-base lg:text-lg font-normal text-[#2C3E50]/80 leading-relaxed">
              {intro.description}
            </p>
          </div>
        </div>

        {/* 5 Core Classes */}
        <div className="flex flex-col gap-6 sm:gap-8">
          <h2 className="text-center text-xl sm:text-2xl lg:text-3xl font-bold text-[#2C3E50]">
            5 Core Classes — Every Student, Every Day
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
            {subjects.map((subject) => (
              <div
                key={subject.name}
                className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 flex flex-col gap-3"
              >
                <h3 className="text-lg sm:text-xl font-bold text-[#274777]">{subject.name}</h3>
                <ul className="flex flex-col gap-1.5 text-sm sm:text-base text-[#2C3E50]/75">
                  {subject.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#274777]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose */}
        <div className="w-full bg-[#274777] rounded-2xl sm:rounded-3xl lg:rounded-[40px] py-8 sm:py-10 lg:py-12 px-4 sm:px-8 lg:px-12 text-white">
          <h2 className="text-center text-xl sm:text-2xl lg:text-3xl font-bold mb-6 sm:mb-8">
            {whyChoose.title}
          </h2>
          <ul className="mx-auto max-w-3xl grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {whyChoose.items.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm sm:text-base leading-relaxed">
                <span className="mt-1 shrink-0 text-[#F5A623]">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Schedule + Location + Contact */}
        <div className="w-full bg-[#E8EEF7]/60 rounded-2xl sm:rounded-3xl lg:rounded-[40px] py-8 sm:py-10 lg:py-12 px-4 sm:px-8 lg:px-12">
          <div className="flex flex-col lg:flex-row lg:justify-between gap-8 lg:gap-10">
            <div className="flex flex-col gap-8 flex-1">
              <div className="flex flex-col gap-4 sm:gap-5">
                <h3 className="text-slate-700 text-2xl sm:text-3xl font-semibold leading-tight">
                  <span className="font-normal">⏱️ </span>Schedule
                </h3>
                <div className="flex flex-col gap-1 text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed">
                  <span className="font-semibold text-slate-700">{schedule.timeRange}</span>
                  {schedule.dates.map((item) => (
                    <p key={item.year}>
                      <span className="font-medium">{item.year}</span>
                      <span className="font-normal">: {item.days}</span>
                    </p>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <h3 className="text-slate-700 text-2xl sm:text-3xl font-semibold leading-tight">
                  <span className="font-normal">📍 </span>Location & Contact
                </h3>
                <div className="flex flex-col gap-1 text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed">
                  {location.addresses.map((address) => (
                    <p key={address}>{address}</p>
                  ))}
                  {location.phone && <p>Phone: {location.phone}</p>}
                  {location.email && <p>Email: {location.email}</p>}
                  {location.website && <p>Website: {location.website}</p>}
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center lg:items-start shrink-0 lg:self-center">
              <div className="h-24 w-24 sm:h-28 sm:w-28 lg:h-[130px] lg:w-[130px] overflow-hidden rounded-lg bg-white shrink-0">
                <Image
                  src={location.qrCodeImage}
                  alt="Registration QR Code"
                  width={130}
                  height={130}
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="mt-3 text-center lg:text-left text-slate-600 text-sm sm:text-base font-medium whitespace-pre-line">
                {location.qrCodeText}
              </p>
            </div>
          </div>
        </div>

        {/* Offers */}
        <div className="flex flex-col items-center gap-3 sm:gap-4 text-center">
          {offers.map((offer) => (
            <p
              key={offer}
              className="text-sm sm:text-base lg:text-lg font-semibold text-[#E67E22]"
            >
              {offer}
            </p>
          ))}
        </div>

        {/* Register */}
        <div className="flex flex-col items-center gap-4 pt-2 sm:pt-4">
          <Link
            href={registerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 lg:px-10 py-3 sm:py-4 bg-[#274777] rounded-full shadow-lg hover:bg-[#1F365C] transition-colors"
          >
            <span className="text-base sm:text-lg lg:text-xl font-bold text-white">
              {registerButtonText}
            </span>
            <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </Link>
          <p className="text-sm sm:text-base text-[#2C3E50]/60 italic">
            Strong Minds Today, Bright Futures Tomorrow.
          </p>
        </div>
      </div>
    </section>
  );
}
