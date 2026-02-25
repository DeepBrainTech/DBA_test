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
    <section className="pt-10 sm:pt-14 lg:pt-[60px] pb-16 sm:pb-24 lg:pb-[133px] bg-gradient-to-b from-[#B7AAFB] to-[#9A8ED7] relative">
      <div className="max-w-[1344px] mx-auto px-4 sm:px-6 lg:px-9">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-[40px]">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-semibold text-white mb-4 sm:mb-6 lg:mb-[27px]">
            Prestigious School Admission Cases
          </h2>
          <p className="text-base sm:text-lg lg:text-2xl font-normal text-white max-w-[1100px] mx-auto leading-relaxed">
            With an outstanding programming background and project experience, our students have been successfully admitted to top universities for computer-related majors.
          </p>
        </div>

        {/* 表格区域 */}
        <div className="max-w-[1242px] mx-auto">
          <div className="w-full bg-white/10 rounded-xl lg:rounded-[10px] p-4 sm:p-6 lg:p-[40px]">
            
            {/* 桌面端表格 */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-white/20">
                    <th className="text-center py-4 lg:py-[20px] px-3 lg:px-[16px] text-sm lg:text-[20px] font-semibold text-white">
                      College
                    </th>
                    <th className="text-center py-4 lg:py-[20px] px-3 lg:px-[16px] text-sm lg:text-[20px] font-semibold text-white">
                      Offers
                    </th>
                    <th className="text-center py-4 lg:py-[20px] px-3 lg:px-[16px] text-sm lg:text-[20px] font-semibold text-white">
                      General Rate
                    </th>
                    <th className="text-center py-4 lg:py-[20px] px-3 lg:px-[16px] text-sm lg:text-[20px] font-semibold text-white">
                      Our Rate
                    </th>
                    <th className="text-center py-4 lg:py-[20px] px-3 lg:px-[16px] text-sm lg:text-[20px] font-semibold text-white">
                      Times Better
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {admissionData.map((data, idx) => (
                    <tr
                      key={idx}
                      className="border-b border-white/20 hover:bg-white/10 transition"
                    >
                      <td className="text-center py-4 lg:py-[27px] px-3 lg:px-[16px] text-sm lg:text-[20px] font-normal text-white">
                        {data.college}
                      </td>
                      <td className="text-center py-4 lg:py-[27px] px-3 lg:px-[16px] text-sm lg:text-[20px] font-normal text-white">
                        {data.offersReceived}
                      </td>
                      <td className="text-center py-4 lg:py-[27px] px-3 lg:px-[16px] text-sm lg:text-[20px] font-normal text-white">
                        {data.generalAdmitRate}
                      </td>
                      <td className="text-center py-4 lg:py-[27px] px-3 lg:px-[16px] text-sm lg:text-[20px] font-normal text-white">
                        {data.ourAdmitRate}
                      </td>
                      <td className="text-center py-4 lg:py-[27px] px-3 lg:px-[16px] text-sm lg:text-[20px]">
                        <span className="font-semibold text-red-400">
                          {data.timesBetter}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* 移动端卡片布局 */}
            <div className="md:hidden space-y-4">
              {admissionData.map((data, idx) => (
                <div
                  key={idx}
                  className="bg-white/10 rounded-xl p-4 backdrop-blur-sm"
                >
                  <h3 className="text-lg font-semibold text-white mb-3 pb-2 border-b border-white/20">
                    {data.college}
                  </h3>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div>
                      <span className="text-white/70">Offers:</span>
                      <span className="ml-2 text-white font-medium">{data.offersReceived}</span>
                    </div>
                    <div>
                      <span className="text-white/70">General:</span>
                      <span className="ml-2 text-white font-medium">{data.generalAdmitRate}</span>
                    </div>
                    <div>
                      <span className="text-white/70">Our Rate:</span>
                      <span className="ml-2 text-white font-medium">{data.ourAdmitRate}</span>
                    </div>
                    <div>
                      <span className="text-white/70">Better:</span>
                      <span className="ml-2 text-red-400 font-semibold">{data.timesBetter}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
