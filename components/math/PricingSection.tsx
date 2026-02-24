'use client';

export default function PricingSection() {
  const programs = [
    {
      subject: 'Mental Math',
      sessions: '10 sessions',
      sessionDetails: '1.5h /session',
      earlyBird: ['$660'],
      regular: ['$750'],
    },
    {
      subject: 'MOEMS/Math League/\nPre-AMC Math Enrichment',
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
      subject: 'SAT Math Score\nBreakthrough Intensive',
      sessions: '14h intensive program',
      sessionDetails: '32h extended program',
      earlyBird: ['$850', '$1820'],
      regular: ['$1020', '$2024'],
    },
    {
      subject: 'ACT Math Score\nBreakthrough Intensive',
      sessions: '14h intensive program',
      sessionDetails: '32h extended program',
      earlyBird: ['$850', '$1820'],
      regular: ['$1020', '$2024'],
    },
    {
      subject: 'SAT/ACT Math 1-on-1\nElite Tutoring',
      sessions: 'Flexible Scheduling',
      sessionDetails: '',
      earlyBird: ['Call for details'],
      regular: ['$100-215/h'],
      isCallForDetails: true,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="mx-auto w-full max-w-[1344px] px-9">
        {/* 顶部与 Our Programs 同布局：badge + 主标题 + 副标题 */}
        <div className="mb-16 flex flex-col items-center text-center">
          <div className="relative mb-6 inline-flex items-center gap-3 rounded-3xl bg-[#F7FCF7] px-5 py-3.5">
            <span className="text-lg font-normal leading-none md:text-xl" aria-hidden>
              💎
            </span>
            <span className="font-outfit text-[#7EC97E] text-lg font-normal leading-7 md:text-xl">
              Pricing
            </span>
          </div>
          <h2 className="mb-4 font-outfit text-4xl font-bold leading-tight text-[#2C3E50] md:text-5xl">
            Winter and Spring Program
          </h2>
          <p className="max-w-3xl font-outfit text-base leading-relaxed text-[#2C3E50]/60">
            2025-2026 School Year
          </p>
        </div>

        <div
          className="rounded-[24px] p-8"
          style={{
            background: 'linear-gradient(to right, #9B8FD80D, #6BB6FF0D)',
          }}
        >
          <h3 className="text-center text-[32px] font-semibold text-[#2C3E50] mb-8">
            AMC/SAT/ACT Math Programs
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-[#E0E0E0]">
                  <th className="text-center py-4 px-4 text-[17px] font-semibold text-[#2C3E50]">
                    Subject
                  </th>
                  <th className="text-center py-4 px-4 text-[17px] font-semibold text-[#2C3E50]">
                    Sessions
                  </th>
                  <th className="text-center py-4 px-4 text-[17px] font-semibold text-[#4CAF50]">
                    Early Bird Tuition<br />
                    <span className="text-[15px] font-medium text-[#4CAF50]">(Before 1/16)</span>
                  </th>
                  <th className="text-center py-4 px-4 text-[17px] font-semibold text-[#2C3E50]">
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
                    <td className="text-left py-5 px-4 text-[16px] text-[#2C3E50] whitespace-pre-line">
                      {program.subject}
                    </td>
                    <td className="text-center py-5 px-4 text-[16px] text-[#5C6B7A]">
                      {program.sessions}
                      {program.sessionDetails && (
                        <span className="block text-[14px] text-[#7C8B99] mt-1">
                          {program.sessionDetails}
                        </span>
                      )}
                    </td>
                    <td className="py-5 px-4">
                      <div className="flex flex-col items-center gap-2">
                        {program.earlyBird.map((price, i) => (
                          <span
                            key={i}
                            className={`flex min-w-[130px] justify-center rounded-full px-5 py-2 text-[15px] font-semibold ${
                              program.isCallForDetails
                                ? 'bg-[#E8F5E9] text-[#4CAF50]'
                                : 'bg-[#E8F5E9] text-[#4CAF50]'
                            }`}
                          >
                            {price}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="py-5 px-4 text-center text-[16px] text-[#2C3E50] font-medium">
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
        </div>
      </div>
    </section>
  );
}
