/**
 * 文件用途：Play Day 页面完整内容区，包含 Hero、简介、日程、地点和注册按钮
 * 依赖关系：依赖 next/image、next/link、PlayDayPageData 类型
 * 注意事项：-mt-[106px] 使首屏与透明导航重叠；使用 Outfit 字体；max-w-[1344px] 与 Math 页面一致
 */

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import type { PlayDayPageData } from '@/types/play_day';

interface PlayDayHeroProps {
  data: PlayDayPageData;
}

export default function PlayDayHero({ data }: PlayDayHeroProps) {
  const { hero, intro, schedule, location, registerButtonText } = data;

  return (
    <section className="relative -mt-[106px] pt-32 pb-12 sm:pb-16 lg:pb-24 bg-[#FBF9F4]">
      <div className="mx-auto w-full max-w-[1344px] px-4 sm:px-6 lg:px-9 flex flex-col gap-8 sm:gap-12 lg:gap-16">
        {/* Hero 区：标签 + 主标题 + 副标题 */}
        <div className="flex flex-col items-center text-center mb-4 sm:mb-6 lg:mb-8">
          {/* 标签 badge */}
          <div className="relative inline-flex items-center gap-2 sm:gap-3 rounded-2xl lg:rounded-3xl bg-[#E8F5E9] px-4 sm:px-5 py-2.5 sm:py-3.5 mb-4 sm:mb-6">
            <span className="text-2xl sm:text-3xl lg:text-4xl">🎨</span>
            <span className="text-[#4CAF50] text-base sm:text-lg md:text-1xl font-normal">
              Play Day
            </span>
          </div>

          {/* 主标题 */}
          <h1 className="text-2xl sm:text-3xl lg:text-3xl xl:text-4xl leading-tight font-bold text-[#2C3E50] mb-3 sm:mb-4">
            {hero.title}
          </h1>

          {/* 副标题 */}
          <p className="max-w-3xl text-sm sm:text-base leading-relaxed text-[#2C3E50]/60 whitespace-pre-line">
            {hero.subtitle}
          </p>
        </div>

        {/* 简介卡片 */}
        <div className="w-full bg-white rounded-2xl sm:rounded-3xl lg:rounded-[40px] py-8 sm:py-10 lg:py-12 px-4 sm:px-8 lg:px-12 overflow-hidden">
          <div className="max-w-3xl mx-auto text-center flex flex-col gap-3 sm:gap-4">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#2C3E50] leading-relaxed">
              {intro.title}
            </h2>
            <p className="text-sm sm:text-base lg:text-lg font-normal text-[#2C3E50] leading-relaxed">
              {intro.description}
            </p>
          </div>
        </div>

        {/* 日程 + 地点卡片 */}
        <div className="w-full bg-[#4CAF50]/5 rounded-2xl sm:rounded-3xl lg:rounded-[40px] py-8 sm:py-10 lg:py-12 px-4 sm:px-8 lg:px-12">
          <div className="flex flex-col lg:flex-row lg:justify-between gap-8 lg:gap-6">
            {/* 左侧：日程 + 地点 */}
            <div className="flex flex-col gap-8 flex-1">
              {/* 日程 */}
              <div className="flex flex-col gap-4 sm:gap-5 lg:gap-7">
                <h3 className="text-slate-700 text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight">
                  <span className="font-normal">⏱️ </span>Schedule
                </h3>
                <div className="flex flex-col gap-1 text-slate-500 text-sm sm:text-base md:text-lg font-normal leading-relaxed">
                  <span className="font-semibold">{schedule.timeRange}</span>
                  {schedule.dates.map((item) => (
                    <p key={item.year}>
                      <span className="font-medium">{item.year}</span>
                      <span className="font-normal">: {item.days}</span>
                    </p>
                  ))}
                </div>
              </div>

              {/* 地点 */}
              <div className="flex flex-col gap-4 sm:gap-3 lg:gap-5">
                <h3 className="text-slate-700 text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight">
                  <span className="font-normal">📍 </span>Location
                </h3>
                <div className="flex flex-col gap-1 text-slate-500 text-sm sm:text-base md:text-lg font-normal leading-relaxed">
                  {location.addresses.map((address, index) => (
                    <p key={index}>{address}</p>
                  ))}
                </div>
              </div>
            </div>

            {/* 右侧：二维码（参考 Brain Games 布局） */}
            <div className="flex flex-col items-start shrink-0 lg:self-center">
              <div className="h-20 w-20 sm:h-24 sm:w-24 lg:h-[110px] lg:w-[110px] overflow-hidden rounded-lg bg-white shrink-0">
                <Image
                  src={location.qrCodeImage}
                  alt="WeChat QR Code"
                  width={110}
                  height={110}
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="mt-2 sm:mt-3 text-left text-slate-500 text-sm sm:text-base font-normal">
                <span className="block">Scan to join our</span>
                <span className="block">WeChat Community</span>
              </p>
            </div>
          </div>
        </div>

        {/* 注册按钮 */}
        <div className="flex justify-center pt-2 sm:pt-4">
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSdDDvu8hiXfKu5lEzD2cV95oyoVpC3qkbIfMtBkbzduKx1BQg/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 lg:px-10 py-3 sm:py-4 bg-[#4CAF50] rounded-full shadow-lg hover:bg-[#43A047] transition-colors"
          >
            <span className="text-base sm:text-lg lg:text-xl font-bold text-white">
              {registerButtonText}
            </span>
            <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </Link>
        </div>
      </div>
    </section>
  );
}
