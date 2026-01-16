/**
 * 文件用途：Winter and Spring Program Pricing 组件
 * 依赖关系：无
 * 注意事项：展示课程价格表和限时优惠信息
 */

'use client';

import { scrollToElement } from '@/lib/scroll';

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
        regular: "$720"
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
      <div className="max-w-[1920px] mx-auto px-14">
        {/* Header */}
        <div className="text-center mb-[80px]">
          <div className="inline-flex items-center gap-[20px] px-[30px] py-[15px] bg-[#F3F0FF] rounded-[33px] mb-[27px]">
            <span className="text-[32px]">💎</span>
            <span className="text-[24px] text-[#9B8FD8] font-medium">Pricing</span>
          </div>
          <h2 className="text-[53px] font-bold text-[#2C3E50] mb-[27px] leading-[1.3]">
            Winter and Spring Program
          </h2>
          <p className="text-[26.5px] text-[#7C8B99]">
            2025-2026 School Year
          </p>
        </div>

        {/* Pricing Table */}
        <div className="bg-[#F5F5F5] rounded-[27px] p-[40px] mb-[40px]">
          <h3 className="text-center text-[40px] font-semibold text-[#2C3E50] mb-[40px]">
            Chess & Go Programs
          </h3>
          
          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-[#E0E0E0]">
                  <th className="text-center py-[20px] px-[20px] text-[20px] font-semibold text-[#2C3E50]">
                    Subject
                  </th>
                  <th className="text-center py-[20px] px-[20px] text-[20px] font-semibold text-[#2C3E50]">
                    Sessions
                  </th>
                  <th className="text-center py-[20px] px-[20px] text-[20px] font-semibold text-[#F4A460]">
                    Early Bird Tuition<br />
                    <span className="text-[18px] font-medium text-[#F4A460]">(Before 1/16)</span>
                  </th>
                  <th className="text-center py-[20px] px-[20px] text-[20px] font-semibold text-[#2C3E50]">
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
                    <td className="text-center py-[27px] px-[20px] text-[20px] text-[#2C3E50]">
                      {program.subject}
                    </td>
                    <td className="text-center py-[27px] px-[20px] text-[20px] text-[#5C6B7A]">
                      {program.sessions}
                      {program.sessionDetails && (
                        <span className="block text-[16px] text-[#7C8B99] mt-[5px]">
                          {program.sessionDetails}
                        </span>
                      )}
                    </td>
                    <td className="text-center py-[27px] px-[20px]">
                            <span className="inline-flex min-w-[160px] justify-center rounded-full bg-[#F3EBDD] px-6 py-3 text-[18px] font-semibold text-[#F4A460]">
                        {program.tuition}
                      </span>
                    </td>
                    <td className="text-center py-[27px] px-[20px] text-[20px] text-[#2C3E50] font-medium">
                      {program.regular}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Limited Time Offer & Enrollment */}
        <div className="bg-[#c9b47e1a] rounded-[27px] p-[40px] flex items-center justify-between gap-[40px]">
          <div className="flex-1">
            <div className="flex items-center gap-[13px] mb-[20px]">
              <span className="text-[32px]">⏰</span>
              <h3 className="text-[40px] font-bold text-[#2C3E50]">
                Limited Time Offer!
              </h3>
            </div>
            <div className="space-y-[13px]">
              <div className="flex items-start gap-[10px]">
                <div className="w-[6px] h-[6px] rounded-full bg-[#66BB6A] mt-[10px] flex-shrink-0"></div>
                <p className="text-[20px] text-[#2C3E50] leading-[1.3]">
                  5% off your second course (any course)
                </p>
              </div>
              <div className="flex items-start gap-[10px]">
                <div className="w-[6px] h-[6px] rounded-full bg-[#66BB6A] mt-[10px] flex-shrink-0"></div>
                <p className="text-[20px] text-[#2C3E50] leading-[1.3]">
                  5% additional discount for onsite registration
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex-shrink-0">
            <button 
              onClick={() => scrollToElement('book-free')}
              className="flex items-center justify-center gap-[13px] px-[53px] h-[95px] !bg-[#f4a460] text-white text-[28px] font-semibold rounded-[40px] hover:bg-[#f4a460] hover:shadow-xl transition"
            >
              Enroll Now
              <svg className="w-[33px] h-[33px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.77} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
