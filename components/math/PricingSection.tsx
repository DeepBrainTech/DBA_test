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
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-[#EAF3FF] rounded-full mb-6">
            <span className="text-[24px]">💎</span>
            <span className="text-[18px] text-[#42A5F5] font-medium">Pricing</span>
          </div>
          <h2 className="text-[40px] font-bold text-[#2C3E50] mb-4 leading-[1.3]">
            Winter and Spring Program
          </h2>
          <p className="text-[20px] text-[#7C8B99]">
            2025-2026 School Year
          </p>
        </div>

        <div className="bg-[#F5F5F5] rounded-[24px] p-8">
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
                    <td className="text-center py-5 px-4">
                      {program.earlyBird.map((price, i) => (
                        <span
                          key={i}
                          className={`inline-flex min-w-[130px] justify-center rounded-full px-5 py-2 text-[15px] font-semibold ${
                            program.isCallForDetails
                              ? 'bg-[#E8F5E9] text-[#4CAF50]'
                              : 'bg-[#E8F5E9] text-[#4CAF50]'
                          } ${i > 0 ? 'mt-2' : ''} block mx-auto`}
                        >
                          {price}
                        </span>
                      ))}
                    </td>
                    <td className="text-center py-5 px-4 text-[16px] text-[#2C3E50] font-medium">
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
