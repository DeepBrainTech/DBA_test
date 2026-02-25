'use client';

interface Program {
  subject: string;
  sessions: string;
  sessionDetails: string;
  earlyBird: string[];
  regular: string[];
  isCallForDetails?: boolean;
}

export default function PricingSection() {
  const programs: Program[] = [
    {
      subject: 'Mental Math',
      sessions: '10 sessions',
      sessionDetails: '1.5h /session',
      earlyBird: ['$660'],
      regular: ['$750'],
    },
    {
      subject: 'MOEMS/Math League/Pre-AMC Math Enrichment',
      sessions: '20 sessions',
      sessionDetails: '1.5h /session',
      earlyBird: ['$1530'],
      regular: ['$1650'],
    },
    {
      subject: 'AMC 8 Math Foundations',
      sessions: '20 sessions',
      sessionDetails: '1.5h /session',
      earlyBird: ['$1530'],
      regular: ['$1650'],
    },
    {
      subject: 'SAT Math Score Breakthrough Intensive',
      sessions: '14h intensive program',
      sessionDetails: '32h extended program',
      earlyBird: ['$850', '$1820'],
      regular: ['$1020', '$2024'],
    },
    {
      subject: 'ACT Math Score Breakthrough Intensive',
      sessions: '14h intensive program',
      sessionDetails: '32h extended program',
      earlyBird: ['$850', '$1820'],
      regular: ['$1020', '$2024'],
    },
    {
      subject: 'SAT/ACT Math 1-on-1 Elite Tutoring',
      sessions: 'Flexible Scheduling',
      sessionDetails: '',
      earlyBird: ['Call for details'],
      regular: ['$100-215/h'],
      isCallForDetails: true,
    },
  ];

  return (
    <section className="py-10 sm:py-14 lg:py-20 bg-white">
      <div className="mx-auto w-full max-w-[1344px] px-4 sm:px-6 lg:px-9">
        {/* Header */}
        <div className="mb-8 sm:mb-12 lg:mb-16 flex flex-col items-center text-center">
          <div className="relative mb-4 sm:mb-6 inline-flex items-center gap-2 sm:gap-3 rounded-2xl sm:rounded-3xl bg-[#F7FCF7] px-4 sm:px-5 py-2.5 sm:py-3.5">
            <span className="text-base sm:text-lg md:text-xl" aria-hidden>
              💎
            </span>
            <span className="font-outfit text-[#7EC97E] text-base sm:text-lg md:text-xl font-normal">
              Pricing
            </span>
          </div>
          <h2 className="mb-3 sm:mb-4 font-outfit text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight text-[#2C3E50]">
            Winter and Spring Program
          </h2>
          <p className="max-w-3xl font-outfit text-sm sm:text-base leading-relaxed text-[#2C3E50]/60">
            2025-2026 School Year
          </p>
        </div>

        <div
          className="rounded-xl sm:rounded-2xl lg:rounded-[24px] p-4 sm:p-6 lg:p-8"
          style={{
            background: 'linear-gradient(to right, #9B8FD80D, #6BB6FF0D)',
          }}
        >
          <h3 className="text-center text-lg sm:text-xl lg:text-2xl xl:text-[32px] font-semibold text-[#2C3E50] mb-6 sm:mb-8">
            AMC/SAT/ACT Math Programs
          </h3>

          {/* 桌面端表格 */}
          <div className="hidden lg:block overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-[#E0E0E0]">
                  <th className="text-center py-4 px-3 xl:px-4 text-sm xl:text-[17px] font-semibold text-[#2C3E50]">
                    Subject
                  </th>
                  <th className="text-center py-4 px-3 xl:px-4 text-sm xl:text-[17px] font-semibold text-[#2C3E50]">
                    Sessions
                  </th>
                  <th className="text-center py-4 px-3 xl:px-4 text-sm xl:text-[17px] font-semibold text-[#4CAF50]">
                    Early Bird Tuition<br />
                    <span className="text-xs xl:text-[15px] font-medium text-[#4CAF50]">(Before 1/16)</span>
                  </th>
                  <th className="text-center py-4 px-3 xl:px-4 text-sm xl:text-[17px] font-semibold text-[#2C3E50]">
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
                    <td className="text-left py-5 px-3 xl:px-4 text-sm xl:text-[16px] text-[#2C3E50]">
                      {program.subject}
                    </td>
                    <td className="text-center py-5 px-3 xl:px-4 text-sm xl:text-[16px] text-[#5C6B7A]">
                      {program.sessions}
                      {program.sessionDetails && (
                        <span className="block text-xs xl:text-[14px] text-[#7C8B99] mt-1">
                          {program.sessionDetails}
                        </span>
                      )}
                    </td>
                    <td className="py-5 px-3 xl:px-4">
                      <div className="flex flex-col items-center gap-2">
                        {program.earlyBird.map((price, i) => (
                          <span
                            key={i}
                            className="flex min-w-[100px] xl:min-w-[130px] justify-center rounded-full px-4 xl:px-5 py-1.5 xl:py-2 text-xs xl:text-[15px] font-semibold bg-[#E8F5E9] text-[#4CAF50]"
                          >
                            {price}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="py-5 px-3 xl:px-4 text-center text-sm xl:text-[16px] text-[#2C3E50] font-medium">
                      <div className="flex flex-col items-center gap-2">
                        {program.regular.map((price, i) => (
                          <span key={i}>{price}</span>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 移动端/平板卡片布局 */}
          <div className="lg:hidden space-y-4">
            {programs.map((program, idx) => (
              <div key={idx} className="bg-white rounded-xl p-4 shadow-sm">
                <h4 className="font-semibold text-[#2C3E50] mb-3 pb-2 border-b border-gray-100 text-sm sm:text-base">
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
                  <div className="flex justify-between items-center flex-wrap gap-2">
                    <span className="text-[#4CAF50] font-medium">Early Bird:</span>
                    <div className="flex flex-wrap gap-1 justify-end">
                      {program.earlyBird.map((price, i) => (
                        <span key={i} className="bg-[#E8F5E9] text-[#4CAF50] px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                          {price}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between items-center flex-wrap gap-2">
                    <span className="text-[#5C6B7A]">Regular:</span>
                    <div className="flex flex-wrap gap-1 justify-end">
                      {program.regular.map((price, i) => (
                        <span key={i} className="text-[#2C3E50] font-medium">{price}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
