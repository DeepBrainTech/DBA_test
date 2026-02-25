/**
 * 文件用途：Winter and Spring Program Pricing 组件
 * 依赖关系：无；限时优惠为原版布局（两行绿点 + 右侧橙色 Enroll 按钮）
 * 注意事项：布局与字体参考 global（AdmissionSection / CTASection）
 */

'use client';

import Image from 'next/image';

interface Program {
  subject: string;
  sessions: string;
  sessionDetails?: string;
  tuition: string;
  regular: string;
}

const programs: Program[] = [
    {
        subject: "Chess Fundamentals (Beginner)",
        sessions: "12 sessions",
        sessionDetails: "1.5h / session",
        tuition: "$660",
        regular: "$720"
    },
    {
        subject: "Advanced Tactics & Openings",
        sessions: "12 sessions",
        sessionDetails: "1.5h / session",
        tuition: "$660",
        regular: "$720"
    },
    {
        subject: "Go Fundamentals (Beginner)",
        sessions: "12 sessions",
        sessionDetails: "1.5h / session",
        tuition: "$660",
        regular: "$750"
    },
    {
        subject: "Chess/Go 1-on-1 Private Coaching",
        sessions: "Flexible Scheduling",
        tuition: "Call for details",
        regular: "$90/h"

    },
];

export default function PricingSection() {
  return (
    <section className="pt-10 sm:pt-14 lg:pt-[60px] pb-16 sm:pb-24 lg:pb-[133px] bg-white">
      <div className="max-w-[1344px] mx-auto px-4 sm:px-6 lg:px-9">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-[40px]">
          <div className="inline-flex items-center gap-2 sm:gap-3 rounded-2xl sm:rounded-3xl bg-[#FDF5EE] px-4 sm:px-5 py-2.5 sm:py-3.5 mb-4 sm:mb-6 lg:mb-[27px]">
            <span className="text-base sm:text-lg">💎</span>
            <span className="text-base sm:text-lg md:text-xl font-normal text-[#F4A460]">Pricing</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-semibold text-[#2C3E50] mb-4 sm:mb-6 lg:mb-[27px] leading-tight">
            Winter and Spring Program
          </h2>
          <p className="text-base sm:text-lg lg:text-2xl font-normal text-[#7C8B99] max-w-[1100px] mx-auto leading-relaxed">
            2025-2026 School Year
          </p>
        </div>

        {/* Pricing Table */}
        <div className="bg-gradient-to-b from-[#9B8FD80D] to-[#6BB6FF0D] rounded-xl sm:rounded-2xl lg:rounded-[27px] p-4 sm:p-6 lg:p-[40px] mb-6 sm:mb-8 lg:mb-[40px]">
          <h3 className="text-center text-lg sm:text-xl lg:text-2xl font-semibold text-[#2C3E50] mb-6 sm:mb-8 lg:mb-[40px]">
            Chess & Go Programs
          </h3>

          {/* 桌面端表格 */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-[#E0E0E0]">
                  <th className="text-center py-4 lg:py-[20px] px-3 lg:px-[16px] text-sm lg:text-[20px] font-bold text-[#7C8B99]">
                    Subject
                  </th>
                  <th className="text-center py-4 lg:py-[20px] px-3 lg:px-[16px] text-sm lg:text-[20px] font-bold text-[#7C8B99]">
                    Sessions
                  </th>
                  <th className="text-center py-4 lg:py-[20px] px-3 lg:px-[16px] text-sm lg:text-[20px] font-bold text-[#F4A460]">
                    Early Bird Tuition<br />
                    <span className="text-xs lg:text-[18px] font-medium text-[#F4A460]">(Before 1/16)</span>
                  </th>
                  <th className="text-center py-4 lg:py-[20px] px-3 lg:px-[16px] text-sm lg:text-[20px] font-bold text-[#7C8B99]">
                    Regular Tuition
                  </th>
                </tr>
              </thead>
              <tbody>
                {programs.map((program, idx) => (
                  <tr
                    key={idx}
                    className="border-b border-[#E0E0E0] hover:bg-white/50 transition"
                  >
                    <td className="text-center py-5 lg:py-[27px] px-3 lg:px-[16px] text-sm lg:text-[20px] font-normal text-[#2C3E50]">
                      {program.subject}
                    </td>
                    <td className="text-center py-5 lg:py-[27px] px-3 lg:px-[16px] text-sm lg:text-[20px] font-normal text-[#5C6B7A]">
                      {program.sessions}
                      {program.sessionDetails && (
                        <span className="block text-xs lg:text-[16px] text-[#7C8B99] mt-1">
                          {program.sessionDetails}
                        </span>
                      )}
                    </td>
                    <td className="text-center py-5 lg:py-[27px] px-3 lg:px-[16px]">
                      <span className="inline-flex min-w-[100px] lg:min-w-[160px] justify-center rounded-full bg-[#F3EBDD] px-4 lg:px-6 py-2 lg:py-3 text-sm lg:text-[18px] font-normal text-[#F4A460]">
                        {program.tuition}
                      </span>
                    </td>
                    <td className="text-center py-5 lg:py-[27px] px-3 lg:px-[16px] text-sm lg:text-[20px] text-[#2C3E50] font-normal">
                      {program.regular}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 移动端卡片布局 */}
          <div className="md:hidden space-y-4">
            {programs.map((program, idx) => (
              <div key={idx} className="bg-white rounded-xl p-4 shadow-sm">
                <h4 className="font-semibold text-[#2C3E50] mb-3 pb-2 border-b border-gray-100">
                  {program.subject}
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-[#5C6B7A]">Sessions:</span>
                    <span className="text-[#2C3E50]">{program.sessions}</span>
                  </div>
                  {program.sessionDetails && (
                    <div className="flex justify-between">
                      <span className="text-[#5C6B7A]">Duration:</span>
                      <span className="text-[#2C3E50]">{program.sessionDetails}</span>
                    </div>
                  )}
                  <div className="flex justify-between items-center">
                    <span className="text-[#F4A460] font-medium">Early Bird:</span>
                    <span className="bg-[#F3EBDD] text-[#F4A460] px-3 py-1 rounded-full text-sm font-medium">
                      {program.tuition}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#5C6B7A]">Regular:</span>
                    <span className="text-[#2C3E50] font-medium">{program.regular}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Limited Time Offer */}
        <div className="bg-gradient-to-r from-[#C9B47E1A] to-[#6BABFF1A] rounded-xl sm:rounded-2xl lg:rounded-[27px] p-5 sm:p-6 lg:p-[40px] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-6 sm:gap-8 lg:gap-[40px]">
          <div className="flex-1">
            <div className="flex items-center gap-2 sm:gap-3 lg:gap-[13px] mb-3 sm:mb-4 lg:mb-[20px]">
              <span className="text-2xl sm:text-3xl lg:text-[32px]">⏱️</span>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#2C3E50]">
                Limited Time Offer!
              </h3>
            </div>
            <div className="space-y-2 sm:space-y-3 lg:space-y-[13px]">
              <div className="flex items-start gap-2 sm:gap-[10px]">
                <div className="w-1.5 h-1.5 rounded-full bg-[#66BB6A] mt-2 sm:mt-[10px] flex-shrink-0"></div>
                <p className="text-base sm:text-lg lg:text-2xl text-[#7C8B99] leading-snug">
                  5% off your second course (any course)
                </p>
              </div>
              <div className="flex items-start gap-2 sm:gap-[10px]">
                <div className="w-1.5 h-1.5 rounded-full bg-[#66BB6A] mt-2 sm:mt-[10px] flex-shrink-0"></div>
                <p className="text-base sm:text-lg lg:text-2xl text-[#7C8B99] leading-snug">
                  5% additional discount for onsite registration
                </p>
              </div>
            </div>
          </div>

          <div className="flex-shrink-0 flex justify-center sm:justify-end">
            <a
              href="https://forms.gle/2mMzKoQkXHa2CVHe6"
              target="_blank"
              rel="noopener noreferrer"
              className="min-w-32 sm:min-w-[150px] h-11 sm:h-12 md:h-14 px-6 sm:px-8 lg:pl-20 lg:pr-7 py-2.5 sm:py-3 md:py-3.5 rounded-2xl sm:rounded-3xl bg-[#F4A460] inline-flex items-center justify-center gap-3 sm:gap-6 md:gap-7 font-['Outfit'] text-base sm:text-lg md:text-xl font-bold text-white shadow-md hover:bg-[#E89451] transition-colors no-underline"
              aria-label="Enroll Now"
            >
              Enroll Now
              <Image src="/summer_camp/trackA/registernow.svg" alt="" width={24} height={24} className="shrink-0 w-5 h-5 sm:w-6 sm:h-6" aria-hidden />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
