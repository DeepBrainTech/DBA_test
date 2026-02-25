/**
 * 文件用途：Programming 页面 Pricing 组件
 * 依赖关系：next/image；布局参考 braingames/PricingSection
 * 注意事项：保持与 braingames 一致的字体大小、布局、按钮样式
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
    subject: '3D Creation & Printing with Blender',
    sessions: '12 sessions',
    sessionDetails: '1.5h / session',
    tuition: '$810',
    regular: '$900',
  },
  {
    subject: 'Python for Beginners',
    sessions: '12 sessions',
    sessionDetails: '1.5h / session',
    tuition: '$810',
    regular: '$900',
  },
  {
    subject: 'AI & Coding Exploratory Course',
    sessions: '12 sessions',
    sessionDetails: '1.5h / session',
    tuition: '$810',
    regular: '$900',
  },
];

export default function ProgrammingPricingSection() {
  return (
    <section className="pt-16 pb-32 bg-white">
      <div className="max-w-[1344px] mx-auto px-9">
        {/* Header - 与 braingames PricingSection 一致 */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-3 rounded-3xl bg-[#ECF7FF] px-5 py-3.5 mb-7">
            <span className="text-lg">💎</span>
            <span className="text-lg md:text-xl font-normal text-[#2AAED6] leading-7">Pricing</span>
          </div>
          <h2 className="text-5xl font-semibold text-slate-700 mb-7 leading-tight">
            Winter and Spring Program
          </h2>
          <p className="text-2xl font-normal text-gray-500 max-w-4xl mx-auto leading-relaxed">
            2025-2026 School Year
          </p>
        </div>

        {/* Pricing Table - 与 braingames 一致的表格布局 */}
        <div className="bg-gradient-to-b from-[#4ECDC4]/5 via-[#45B7D1]/5 to-[#4ECDC4]/5 rounded-3xl p-10 mb-10">
          <h3 className="text-center text-2xl font-semibold text-slate-700 mb-10">
            Coding &amp; Technology Programs
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-center py-5 px-4 text-xl font-bold text-gray-500">
                    Subject
                  </th>
                  <th className="text-center py-5 px-4 text-xl font-bold text-gray-500">
                    Sessions
                  </th>
                  <th className="text-center py-5 px-4 text-xl font-bold text-[#2AAED6]">
                    Early Bird Tuition<br />
                    <span className="text-lg font-medium text-[#2AAED6]">(Before 1/16)</span>
                  </th>
                  <th className="text-center py-5 px-4 text-xl font-bold text-gray-500">
                    Regular Tuition
                  </th>
                </tr>
              </thead>
              <tbody>
                {programs.map((program, idx) => (
                  <tr
                    key={idx}
                    className="border-b border-gray-200 hover:bg-white/50 transition"
                  >
                    <td className="text-center py-7 px-4 text-xl font-normal text-slate-700">
                      {program.subject}
                    </td>
                    <td className="text-center py-7 px-4 text-xl font-normal text-gray-600">
                      {program.sessions}
                      {program.sessionDetails && (
                        <span className="block text-base text-gray-500 mt-1">
                          {program.sessionDetails}
                        </span>
                      )}
                    </td>
                    <td className="text-center py-7 px-4">
                      <span className="inline-flex min-w-40 justify-center rounded-full bg-[#E7F6FF] px-6 py-3 text-lg font-normal text-[#2AAED6]">
                        {program.tuition}
                      </span>
                    </td>
                    <td className="text-center py-7 px-4 text-xl text-slate-700 font-normal">
                      {program.regular}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Limited Time Offer - 与 braingames 一致的布局 */}
        <div className="bg-gradient-to-r from-[#4ECDC4]/10 to-[#45B7D1]/10 rounded-3xl p-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-10">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-3xl">⏱️</span>
              <h3 className="text-3xl font-semibold text-slate-700">
                Limited Time Offer!
              </h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-2.5">
                <div className="w-1.5 h-1.5 rounded-full bg-[#4ECDC4] mt-2.5 shrink-0"></div>
                <p className="text-2xl text-gray-500 leading-snug">
                  5% off your second course (any course)
                </p>
              </div>
              <div className="flex items-start gap-2.5">
                <div className="w-1.5 h-1.5 rounded-full bg-[#4ECDC4] mt-2.5 shrink-0"></div>
                <p className="text-2xl text-gray-500 leading-snug">
                  5% additional discount for onsite registration
                </p>
              </div>
            </div>
          </div>

          <div className="shrink-0 flex justify-center sm:justify-end">
            <a
              href="https://forms.gle/2mMzKoQkXHa2CVHe6"
              target="_blank"
              rel="noopener noreferrer"
              className="min-w-40 h-12 md:h-14 pl-16 pr-6 py-3 md:pl-20 md:pr-7 md:py-3.5 rounded-3xl bg-[#2AAED6] inline-flex items-center justify-center gap-6 md:gap-7 font-['Outfit'] text-lg md:text-xl font-bold leading-7 text-white shadow-md hover:bg-[#45B7D1] transition-colors no-underline"
              aria-label="Enroll Now"
            >
              Enroll Now
              <Image src="/programming/arrow.png" alt="" width={24} height={24} className="shrink-0 w-6 h-6" aria-hidden />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}