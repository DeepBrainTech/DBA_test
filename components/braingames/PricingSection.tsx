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
    <section className="pt-[60px] pb-[133px] bg-white">
      <div className="max-w-[1344px] mx-auto px-9">
        {/* Header（与 global AdmissionSection 一致：mb-[40px]、text-5xl / text-2xl） */}
        <div className="text-center mb-[40px]">
          <div className="inline-flex items-center gap-3 rounded-3xl bg-[#FDF5EE] px-5 py-3.5 mb-[27px]">
            <span className="text-lg">💎</span>
            <span className="text-lg md:text-xl font-normal text-[#F4A460] leading-7">Pricing</span>
          </div>
          <h2 className="text-5xl font-semibold text-[#2C3E50] mb-[27px] leading-tight">
            Winter and Spring Program
          </h2>
          <p className="text-2xl font-normal text-[#7C8B99] max-w-[1100px] mx-auto leading-relaxed">
            2025-2026 School Year
          </p>
        </div>

        {/* Pricing Table（表头/表体与 global 一致：py-[20px] px-[16px] text-[20px]） */}
        <div className="bg-linear-to-b from-[#9B8FD80D] to-[#6BB6FF0D] rounded-[27px] p-[40px] mb-[40px]">
          <h3 className="text-center text-2xl font-semibold text-[#2C3E50] mb-[40px]">
            Chess & Go Programs
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-[#E0E0E0]">
                  <th className="text-center py-[20px] px-[16px] text-[20px] font-bold text-[#7C8B99]">
                    Subject
                  </th>
                  <th className="text-center py-[20px] px-[16px] text-[20px] font-bold text-[#7C8B99]">
                    Sessions
                  </th>
                  <th className="text-center py-[20px] px-[16px] text-[20px] font-bold text-[#F4A460]">
                    Early Bird Tuition<br />
                    <span className="text-[18px] font-medium text-[#F4A460]">(Before 1/16)</span>
                  </th>
                  <th className="text-center py-[20px] px-[16px] text-[20px] font-bold text-[#7C8B99]">
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
                    <td className="text-center py-[27px] px-[16px] text-[20px] font-normal text-[#2C3E50]">
                      {program.subject}
                    </td>
                    <td className="text-center py-[27px] px-[16px] text-[20px] font-normal text-[#5C6B7A]">
                      {program.sessions}
                      {program.sessionDetails && (
                        <span className="block text-[16px] text-[#7C8B99] mt-[5px]">
                          {program.sessionDetails}
                        </span>
                      )}
                    </td>
                    <td className="text-center py-[27px] px-[16px]">
                      <span className="inline-flex min-w-[160px] justify-center rounded-full bg-[#F3EBDD] px-6 py-3 text-[18px] font-normal text-[#F4A460]">
                        {program.tuition}
                      </span>
                    </td>
                    <td className="text-center py-[27px] px-[16px] text-[20px] text-[#2C3E50] font-normal">
                      {program.regular}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Limited Time Offer & Enrollment（原版：左侧两行绿点文案，右侧橙色 Enroll 按钮滚动到 book-free） */}
        <div className="bg-linear-to-r from-[#C9B47E1A] to-[#6BABFF1A] rounded-[27px] p-[40px] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-[40px]">
          <div className="flex-1">
            <div className="flex items-center gap-[13px] mb-[20px]">
              <span className="text-[32px]">⏱️</span>
              <h3 className="text-3xl font-semibold text-[#2C3E50]">
                Limited Time Offer!
              </h3>
            </div>
            <div className="space-y-[13px]">
              <div className="flex items-start gap-[10px]">
                <div className="w-[6px] h-[6px] rounded-full bg-[#66BB6A] mt-[10px] flex-shrink-0"></div>
                <p className="text-2xl text-[#7C8B99] leading-[1.3]">
                  5% off your second course (any course)
                </p>
              </div>
              <div className="flex items-start gap-[10px]">
                <div className="w-[6px] h-[6px] rounded-full bg-[#66BB6A] mt-[10px] flex-shrink-0"></div>
                <p className="text-2xl text-[#7C8B99] leading-[1.3]">
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
              className="min-w-[150px] h-12 md:h-14 pl-18 pr-6 py-3 md:pl-20 md:pr-7 md:py-3.5 rounded-3xl bg-[#F4A460] inline-flex items-center justify-center gap-6 md:gap-7 font-['Outfit'] text-lg md:text-xl font-bold leading-7 text-white shadow-[0px_4.65px_6.97px_-4.65px_rgba(0,0,0,0.10)] shadow-[0px_11.62px_17.42px_-3.48px_rgba(0,0,0,0.10)] hover:bg-[#E89451] transition-colors no-underline"
              aria-label="Enroll Now"
            >
              Enroll Now
              <Image src="/summer_camp/trackA/registernow.svg" alt="" width={24} height={24} className="shrink-0 w-6 h-6" aria-hidden />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
