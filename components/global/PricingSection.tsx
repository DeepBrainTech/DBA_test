/**
 * 文件用途：Winter and Spring Program Pricing 组件
 * 依赖关系：无
 * 注意事项：展示课程价格表和限时优惠信息
 */

'use client';

import { scrollToElement } from '@/lib/scroll';

interface ProgramRow {
  sessions: string;
  earlyBirdTuition: string;
  hourlyRate: string;
}

interface ProgramGroup {
  subjectLine1: string;
  subjectLine2: string;
  rows: ProgramRow[];
}

const programGroups: ProgramGroup[] = [
  {
    subjectLine1: 'SAT Math Score',
    subjectLine2: 'Breakthrough Intensive',
    rows: [
      { sessions: '14h intensive program', earlyBirdTuition: '$850', hourlyRate: '$1020' },
      { sessions: '32h extended program', earlyBirdTuition: '$1820', hourlyRate: '$2024' },
    ],
  },
  {
    subjectLine1: 'ACT Math Score',
    subjectLine2: 'Breakthrough Intensive',
    rows: [
      { sessions: '14h intensive program', earlyBirdTuition: '$850', hourlyRate: '$1020' },
      { sessions: '32h extended program', earlyBirdTuition: '$1820', hourlyRate: '$2024' },
    ],
  },
  {
    subjectLine1: 'SAT/ACT Math 1-on-1 Elite Tutoring',
    subjectLine2: '',
    rows: [
      { sessions: 'Flexible Scheduling', earlyBirdTuition: 'Call for details', hourlyRate: '$100-215/h' },
    ],
  },
];

export default function PricingSection() {
  return (
    <section className="pt-[60px] pb-[133px] bg-white">
      <div className="max-w-[1344px] mx-auto px-9">
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
        <div className="bg-[#F5F5F5] rounded-[27px] p-[24px] mb-[32px]">
          <h3 className="text-center text-[40px] font-semibold text-[#2C3E50] mb-[24px]">
            SAT/ACT Math Programs
          </h3>
          
          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-[#E0E0E0]">
                  <th className="text-center py-[12px] px-[12px] text-[18px] font-semibold text-[#2C3E50]">
                    Subject
                  </th>
                  <th className="text-center py-[12px] px-[12px] text-[18px] font-semibold text-[#2C3E50]">
                    Sessions
                  </th>
                  <th className="text-center py-[12px] px-[12px] text-[18px] font-semibold">
                    <span className="inline-block px-[14px] py-[6px] bg-[#F3F0FF] text-[#9B8FD8] rounded-[8px]">
                      Early Bird Tuition
                    </span>
                  </th>
                  <th className="text-center py-[12px] px-[12px] text-[18px] font-semibold text-[#2C3E50]">
                    Hourly Rate
                  </th>
                </tr>
              </thead>
              <tbody>
                {programGroups.map((group, groupIdx) =>
                  group.rows.map((row, rowIdx) => (
                    <tr
                      key={`${groupIdx}-${rowIdx}`}
                      className="border-b border-[#E0E0E0] hover:bg-white/50 transition"
                    >
                      {rowIdx === 0 ? (
                        <td
                          rowSpan={group.rows.length}
                          className="text-center py-[14px] px-[12px] text-[18px] text-[#2C3E50] align-middle leading-tight"
                        >
                          <span className="block">{group.subjectLine1}</span>
                          {group.subjectLine2 && (
                            <span className="block">{group.subjectLine2}</span>
                          )}
                        </td>
                      ) : null}
                      <td className="text-center py-[14px] px-[12px] text-[18px] text-[#5C6B7A]">
                        {row.sessions}
                      </td>
                      <td className="text-center py-[14px] px-[12px]">
                        <span className="inline-block px-[14px] py-[6px] bg-[#F3F0FF] text-[#9B8FD8] text-[18px] font-semibold rounded-[8px]">
                          {row.earlyBirdTuition}
                        </span>
                      </td>
                      <td className="text-center py-[14px] px-[12px] text-[18px] text-[#2C3E50] font-medium">
                        {row.hourlyRate}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Limited Time Offer & Enrollment */}
        <div className="bg-[#E8F5E9] rounded-[27px] p-[40px] flex items-center justify-between gap-[40px]">
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
              className="flex items-center justify-center gap-[13px] px-[53px] h-[95px] bg-[#9B8FD8] text-white text-[28px] font-semibold rounded-[40px] hover:bg-[#8A7CC7] hover:shadow-xl transition"
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
