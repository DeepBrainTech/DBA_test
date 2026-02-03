/**
 * 文件用途：Admission 组件（全球教育页面）
 * 依赖关系：无
 * 注意事项：展示录取统计数据表
 */

'use client';

interface AdmissionData {
  college: string;
  offersReceived: number;
  generalAdmitRate: string;
  ourAdmitRate: string;
  timesBetter: string;
}

const admissionData: AdmissionData[] = [
  { college: 'Harvard', offersReceived: 5, generalAdmitRate: '3.5%', ourAdmitRate: '32.5%', timesBetter: '9.3X' },
  { college: 'MIT', offersReceived: 8, generalAdmitRate: '5%', ourAdmitRate: '48.8%', timesBetter: '9.8X' },
  { college: 'Stanford', offersReceived: 7, generalAdmitRate: '3.9%', ourAdmitRate: '20.0%', timesBetter: '5.1X' },
  { college: 'Yale', offersReceived: 12, generalAdmitRate: '4.5%', ourAdmitRate: '40.5%', timesBetter: '9.0X' },
  { college: 'Duke', offersReceived: 38, generalAdmitRate: '6.8%', ourAdmitRate: '60.7%', timesBetter: '8.9X' },
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
        <div className="text-center mb-[40px]">
          <h2 className="text-[53px] font-bold text-white mb-[27px] leading-[1.3]">
            Prestigious School Admission Cases
          </h2>
          <p className="text-[26.5px] text-white max-w-[1242px] mx-auto leading-relaxed">
            With an outstanding programming background and project experience, our students have been successfully admitted to top universities for computer-related majors.
          </p>
        </div>

        {/* Admission Statistics Table */}
        <div className="max-w-[1242px] mx-auto">
          <div className="bg-[#E8E4F3] rounded-[27px] p-[40px]">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-[#D0CCE0]">
                    <th className="text-center py-[20px] px-[16px] text-[20px] font-semibold text-[#2C3E50]">
                      College
                    </th>
                    <th className="text-center py-[20px] px-[16px] text-[20px] font-semibold text-[#2C3E50]">
                      Offers Received
                    </th>
                    <th className="text-center py-[20px] px-[16px] text-[20px] font-semibold text-[#2C3E50]">
                      General Admission Rate
                    </th>
                    <th className="text-center py-[20px] px-[16px] text-[20px] font-semibold text-[#2C3E50]">
                      Our Admission Rate
                    </th>
                    <th className="text-center py-[20px] px-[16px] text-[20px] font-semibold text-[#2C3E50]">
                      Times Better
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {admissionData.map((data, idx) => (
                    <tr
                      key={idx}
                      className="border-b border-[#D0CCE0] hover:bg-white/30 transition"
                    >
                      <td className="text-center py-[27px] px-[16px] text-[20px] text-[#2C3E50] font-semibold">
                        {data.college}
                      </td>
                      <td className="text-center py-[27px] px-[16px] text-[20px] text-[#2C3E50]">
                        {data.offersReceived}
                      </td>
                      <td className="text-center py-[27px] px-[16px] text-[20px] text-[#2C3E50]">
                        {data.generalAdmitRate}
                      </td>
                      <td className="text-center py-[27px] px-[16px] text-[20px] text-[#2C3E50]">
                        {data.ourAdmitRate}
                      </td>
                      <td className="text-center py-[27px] px-[16px] text-[20px]">
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
      </div>
    </section>
  );
}
