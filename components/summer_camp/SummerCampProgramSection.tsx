/**
 * 文件用途：Summer Camp 全日项目区块（五门核心课程 + Register Now）
 * 依赖关系：next/image、next/link、lucide-react、SummerCampSubjectCard；布局参考 Highlights / TestPrepCourses
 * 注意事项：cream 背景；桌面端 3+2 卡片网格（第二行左对齐），移动端纵向堆叠
 */

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import SummerCampSubjectCard from '@/components/summer_camp/SummerCampSubjectCard';
import type { SummerCampProgramData } from '@/types/summer_camp';

interface SummerCampProgramSectionProps {
  data: SummerCampProgramData;
}

export default function SummerCampProgramSection({ data }: SummerCampProgramSectionProps) {
  return (
    <section
      id="summer-camp-program"
      className="bg-[#FBF9F4] scroll-mt-28"
      aria-label="Full-day Summer Camp Program"
    >
      <div className="mx-auto flex w-full max-w-[1344px] flex-col gap-8 px-4 sm:gap-12 sm:px-6 lg:gap-16 lg:px-9 pb-12 sm:pb-16 lg:pb-24 pt-12 sm:pt-16 lg:pt-20">
        {/* 顶部标题区 */}
        <div className="flex w-full flex-col items-center gap-4 text-center sm:gap-6 lg:gap-8">
          <div className="inline-flex items-center gap-2 rounded-2xl bg-[#599CED]/10 px-4 py-2.5 sm:gap-3 sm:rounded-3xl sm:px-5 sm:py-3.5">
            <Image
              src={data.badgeIcon}
              alt=""
              width={24}
              height={24}
              className="size-5 object-contain sm:size-6"
              aria-hidden
            />
            <span className="font-outfit text-base font-normal text-[#599CED] sm:text-lg md:text-xl">
              {data.badgeText}
            </span>
          </div>
          <h2 className="text-center font-outfit text-2xl font-bold leading-tight text-[#2C3E50] sm:text-3xl md:text-4xl">
            {data.title}
          </h2>
          <p className="max-w-[892px] text-center font-outfit text-sm font-normal leading-relaxed text-[#7C8B99] sm:text-base md:text-lg">
            {data.subtitle}
          </p>
        </div>

        {/* 五门课程：上三下二，第二行左对齐 */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          {data.subjects.map((subject) => (
            <SummerCampSubjectCard key={subject.id} subject={subject} />
          ))}
        </div>

        {/* 报名开放 + 微信社群 */}
        <div className="w-full rounded-2xl bg-[#599CED]/10 px-4 py-6 sm:rounded-3xl sm:px-6 sm:py-8 md:px-14 md:py-10 lg:py-12">
          <div className="flex flex-col gap-6 sm:gap-8 md:flex-row md:items-center md:justify-between lg:gap-10">
            <div className="max-w-[720px]">
              <h3 className="font-outfit text-lg font-semibold leading-tight text-slate-700 sm:text-2xl md:text-3xl">
                {data.registrationPanel.title}
              </h3>
              <p className="mt-3 max-w-[38rem] font-outfit text-sm font-normal leading-relaxed text-slate-500 sm:mt-4 sm:text-base md:mt-5 md:text-xl md:leading-7">
                {data.registrationPanel.descriptionPrefix}
                <span className="font-semibold">{data.registrationPanel.descriptionHighlight}</span>
                {data.registrationPanel.descriptionSuffix}
              </p>
            </div>
            <div className="flex shrink-0 flex-col items-start md:mr-8 lg:mr-16">
              <div className="size-20 shrink-0 overflow-hidden rounded-lg bg-white sm:size-24 lg:size-[110px]">
                <Image
                  src={data.registrationPanel.wechatQrSrc}
                  alt="WeChat QR Code"
                  width={110}
                  height={110}
                  className="size-full object-contain"
                />
              </div>
              <p className="mt-2 text-left font-outfit text-sm font-normal text-slate-700 sm:mt-3 sm:text-base sm:leading-5">
                <span className="block">{data.registrationPanel.wechatCommunityLines[0]}</span>
                <span className="block">{data.registrationPanel.wechatCommunityLines[1]}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Register Now */}
        <div className="flex justify-center pt-2 sm:pt-4">
          <Link
            href={data.registerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full max-w-md items-center justify-center gap-2 rounded-2xl bg-[#599CED] px-8 py-3.5 font-outfit text-base font-bold text-white shadow-[0_8px_24px_rgba(89,156,237,0.35)] transition hover:brightness-105 sm:w-auto sm:gap-3 sm:rounded-3xl sm:px-10 sm:py-4 sm:text-lg lg:text-xl"
          >
            <span>{data.registerButtonText}</span>
            <ArrowRight className="size-5 shrink-0 sm:size-6" strokeWidth={2.5} />
          </Link>
        </div>
      </div>
    </section>
  );
}
