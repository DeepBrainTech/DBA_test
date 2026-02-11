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
    <section className="pt-[60px] pb-[133px] bg-white">
      <div className="max-w-[1920px] mx-auto px-14">
        <div className="text-center mb-[80px]">
          <div className="inline-flex items-center gap-[20px] px-[30px] py-[15px] bg-[#EAF3FF] rounded-[33px] mb-[27px]">
            <span className="text-[32px]">💎</span>
            <span className="text-[24px] text-[#42A5F5] font-medium">Pricing</span>
          </div>
          <h2 className="text-[53px] font-bold text-[#2C3E50] mb-[27px] leading-[1.3]">
            Winter and Spring Program
          </h2>
          <p className="text-[26.5px] text-[#7C8B99]">
            2025-2026 School Year
          </p>
        </div>

        <div className="bg-[#F5F5F5] rounded-[27px] p-[40px]">
          <h3 className="text-center text-[40px] font-semibold text-[#2C3E50] mb-[40px]">
            AMC/SAT/ACT Math Programs
          </h3>

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
                  <th className="text-center py-[20px] px-[20px] text-[20px] font-semibold text-[#4CAF50]">
                    Early Bird Tuition<br />
                    <span className="text-[18px] font-medium text-[#4CAF50]">(Before 1/16)</span>
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
                    <td className="text-left py-[27px] px-[20px] text-[20px] text-[#2C3E50] whitespace-pre-line">
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
                      {program.earlyBird.map((price, i) => (
                        <span
                          key={i}
                          className={`inline-flex min-w-[160px] justify-center rounded-full px-6 py-3 text-[18px] font-semibold ${
                            program.isCallForDetails
                              ? 'bg-[#E8F5E9] text-[#4CAF50]'
                              : 'bg-[#E8F5E9] text-[#4CAF50]'
                          } ${i > 0 ? 'mt-2' : ''} block mx-auto`}
                        >
                          {price}
                        </span>
                      ))}
                    </td>
                    <td className="text-center py-[27px] px-[20px] text-[20px] text-[#2C3E50] font-medium">
                      {program.regular.map((price, i) => (
                        <span key={i} className={`block ${i > 0 ? 'mt-2' : ''}`}>
                          {price}
                        </span>
                      ))}
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
