/**
 * 文件用途：Admission 组件（全球教育页面）
 * 依赖关系：无
 * 注意事项：展示录取统计数据表
 */

'use client';

interface AdmissionData {
  college: string;
  crimsonOffers: number;
  generalAdmitRate: string;
  crimsonAdmitRate: string;
  timesBetter: string;
}

const admissionData: AdmissionData[] = [
  {
    college: 'CMU',
    crimsonOffers: 109,
    generalAdmitRate: '4.4%',
    crimsonAdmitRate: '28.3%',
    timesBetter: '6.5X'
  },
  {
    college: 'MIT',
    crimsonOffers: 44,
    generalAdmitRate: '4.5%',
    crimsonAdmitRate: '26.1%',
    timesBetter: '5.8X'
  },
  {
    college: 'Stanford',
    crimsonOffers: 120,
    generalAdmitRate: '3.7%',
    crimsonAdmitRate: '20.0%',
    timesBetter: '5.5X'
  },
  {
    college: 'UC Berkeley',
    crimsonOffers: 178,
    generalAdmitRate: '3.6%',
    crimsonAdmitRate: '30.8%',
    timesBetter: '8.5X'
  },
  {
    college: 'Cornell',
    crimsonOffers: 116,
    generalAdmitRate: '4.6%',
    crimsonAdmitRate: '26.7%',
    timesBetter: '6.5X'
  }
];

export default function AdmissionSection() {
  return (
    <section className="pt-[60px] pb-[133px] bg-gradient-to-b from-[#B7AAFB] to-[#9A8ED7] relative">
      {/* Code Icon in top right corner */}
      <div className="absolute top-[60px] right-14 text-[#E0E0E0] text-[24px] opacity-50">
        {'</>'}
      </div>
      
      <div className="max-w-[1920px] mx-auto px-14">
        {/* Header */}
        <div className="text-center mb-[80px]">
          <h2 className="text-[53px] font-bold text-[#2C3E50] mb-[27px] leading-[1.3]">
            Admission Success Stories
          </h2>
          <p className="text-[26.5px] text-white max-w-[1200px] mx-auto">
            With outstanding programming background and skills, our students have successfully been admitted to top universities.
          </p>
        </div>

        {/* Admission Statistics Table */}
        <div className="bg-[#E8E4F3] rounded-[27px] p-[40px]">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-[#D0CCE0]">
                  <th className="text-left py-[20px] px-[20px] text-[20px] font-semibold text-[#2C3E50]">
                    College
                  </th>
                  <th className="text-left py-[20px] px-[20px] text-[20px] font-semibold text-[#2C3E50]">
                    <div className="leading-tight">
                      <div>Crimson</div>
                      <div>All Time Offers</div>
                    </div>
                  </th>
                  <th className="text-left py-[20px] px-[20px] text-[20px] font-semibold text-[#2C3E50]">
                    <div className="leading-tight">
                      <div>General</div>
                      <div>Admit Rate</div>
                    </div>
                  </th>
                  <th className="text-left py-[20px] px-[20px] text-[20px] font-semibold text-[#2C3E50]">
                    <div className="leading-tight">
                      <div>US Crimson</div>
                      <div>AdmitRate</div>
                    </div>
                  </th>
                  <th className="text-left py-[20px] px-[20px] text-[20px] font-semibold text-[#2C3E50]">
                    <div className="leading-tight">
                      <div>Times</div>
                      <div>Better</div>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {admissionData.map((data, idx) => (
                  <tr 
                    key={idx} 
                    className="border-b border-[#D0CCE0] hover:bg-white/30 transition"
                  >
                    <td className="py-[27px] px-[20px] text-[20px] text-[#2C3E50] font-semibold">
                      {data.college}
                    </td>
                    <td className="py-[27px] px-[20px] text-[20px] text-[#2C3E50]">
                      {data.crimsonOffers}
                    </td>
                    <td className="py-[27px] px-[20px] text-[20px] text-[#2C3E50]">
                      {data.generalAdmitRate}
                    </td>
                    <td className="py-[27px] px-[20px] text-[20px] text-[#2C3E50]">
                      {data.crimsonAdmitRate}
                    </td>
                    <td className="py-[27px] px-[20px] text-[20px]">
                      <span className="font-bold text-[#E53935]">
                        {data.timesBetter}
                      </span>
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
