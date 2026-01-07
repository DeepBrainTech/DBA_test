/**
 * 文件用途：全球教育优势区块组件
 * 依赖关系：依赖 types/global-education.ts 中的 GlobalAdvantage 类型
 * 注意事项：展示4个优势卡片和对比表格
 */

import type { GlobalAdvantage } from '@/types/global-education';

interface GlobalAdvantagesSectionProps {
  advantages: GlobalAdvantage[];
}

/**
 * 全球教育优势组件
 * @param advantages 优势数据数组
 */
export default function GlobalAdvantagesSection({ advantages }: GlobalAdvantagesSectionProps) {
  return (
    <section className="py-[133px] bg-white">
      <div className="max-w-[1920px] mx-auto px-[53px]">
        {/* Header */}
        <div className="text-center mb-[106px]">
          <div className="inline-flex items-center gap-[27px] px-[27px] py-[13px] bg-[#F3F0FF] rounded-[33px] mb-[27px]">
            <span className="text-[40px]">💎</span>
            <span className="text-[27px] text-[#9B8FD8] font-normal">Our Advantages</span>
          </div>
          <h2 className="text-[53px] font-bold text-[#2C3E50] mb-[27px] leading-[1.3]">
            How top applicants stand out?
          </h2>
          <p className="text-[27px] text-[#7C8B99]">
            Not all agencies offer these core strengths.
          </p>
        </div>

        {/* Advantages Grid - 2x2 */}
        <div className="grid grid-cols-2 gap-[53px] mb-[106px]">
          {advantages.map((advantage, idx) => {
            const colors = [
              { bg: '#9B8FD8', bgLight: 'rgba(155,143,216,0.13)' },
              { bg: '#6BB6FF', bgLight: 'rgba(107,182,255,0.13)' },
              { bg: '#F4A460', bgLight: 'rgba(244,164,96,0.13)' },
              { bg: '#7EC97E', bgLight: 'rgba(126,201,126,0.13)' }
            ];
            const color = colors[idx % colors.length];

            return (
              <div key={idx} className="bg-[#FBF9F4] rounded-[40px] p-[53px] relative overflow-hidden">
                <div className="absolute top-[-66px] right-[150px] w-[266px] h-[266px] opacity-5 rounded-full blur-[66px]" style={{ backgroundColor: color.bg }}></div>
                <div className="relative z-10">
                  <div className="w-[106px] h-[106px] rounded-[27px] flex items-center justify-center mb-[53px]" style={{ backgroundColor: color.bgLight }}>
                    <span className="text-[53px]">{advantage.icon}</span>
                  </div>
                  <h3 className="text-[40px] font-semibold text-[#2C3E50] mb-[27px]">
                    {advantage.title}
                  </h3>
                  <p className="text-[27px] text-[#7C8B99] leading-[1.6] mb-[27px]">
                    {advantage.description}
                  </p>
                  <div className="grid grid-cols-2 gap-[20px]">
                    {advantage.features.map((feature, fIdx) => (
                      <div key={fIdx} className="bg-white rounded-[20px] px-[20px] py-[13px] text-center">
                        <p className="text-[27px] text-[#2C3E50]">{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Comparison Table */}
        <div className="rounded-[40px] bg-gradient-to-br from-[rgba(155,143,216,0.05)] to-[rgba(107,182,255,0.05)] p-[53px]">
          <h3 className="text-[40px] font-semibold text-[#2C3E50] text-center mb-[53px]">
            Us vs. Traditional Agencies
          </h3>
          
          <div className="overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-12 gap-[20px] border-b-[3px] border-[#E8F4FC] pb-[27px] mb-[27px]">
              <div className="col-span-3">
                <p className="text-[27px] font-bold text-[#7C8B99]">Services</p>
              </div>
              <div className="col-span-6 text-center">
                <p className="text-[27px] font-bold text-[#9B8FD8]">DeepBrain Academy</p>
              </div>
              <div className="col-span-3 text-center">
                <p className="text-[27px] font-bold text-[#7C8B99]">Traditional Agencies</p>
              </div>
            </div>

            {/* Table Rows */}
            <div className="space-y-[27px]">
              {[
                { service: 'Mentor background', deepbrain: 'Former Admissions Team', traditional: 'General Advisors' },
                { service: 'Service transparency', deepbrain: 'End-to-end Visualized System', traditional: 'Progress Lack of Transparency' },
                { service: 'Essay Originality', deepbrain: '100% original', traditional: 'Template-Based Reuse' },
                { service: 'Data Support', deepbrain: 'Admission database', traditional: 'Reliance on Experiential Judgment' },
                { service: 'Follow-up Services', deepbrain: 'Post-Acceptance Guidance', traditional: 'Services End Upon Admission' }
              ].map((row, idx) => (
                <div key={idx} className={`grid grid-cols-12 gap-[20px] ${idx < 4 ? 'border-b border-[#E8F4FC] pb-[27px]' : 'pb-[27px]'}`}>
                  <div className="col-span-3">
                    <p className="text-[23px] text-[#2C3E50]">{row.service}</p>
                  </div>
                  <div className="col-span-6 flex justify-center">
                    <div className="bg-[rgba(155,143,216,0.1)] rounded-[20px] px-[27px] py-[13px] inline-flex items-center gap-[13px]">
                      <span className="text-[23px] text-[#9B8FD8]">✓</span>
                      <p className="text-[23px] text-[#9B8FD8]">{row.deepbrain}</p>
                    </div>
                  </div>
                  <div className="col-span-3 text-center">
                    <p className="text-[23px] text-[#7C8B99]">{row.traditional}</p>
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

