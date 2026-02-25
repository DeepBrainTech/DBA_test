/**
 * 文件用途：DeepBrain vs Traditional Agencies 对比表组件
 * 依赖关系：无
 * 注意事项：展示服务对比表格；移动端使用卡片式布局
 */

export default function ComparisonTableSection() {
  const comparisonData = [
    { service: 'Mentor background', deepbrain: 'Former Admissions Team', traditional: 'General Advisors' },
    { service: 'Service transparency', deepbrain: 'Transparent Tracking System', traditional: 'Opaque Process' },
    { service: 'Essay Originality', deepbrain: '100% original', traditional: 'Template-Based Reuse' },
    { service: 'Data Support', deepbrain: 'Admission database', traditional: 'Reliance on Subjective Guesswork' },
    { service: 'Follow-up Services', deepbrain: 'Post-Acceptance Guidance', traditional: 'Services End Upon Admission' }
  ];

  return (
    <section className="py-16 md:py-24 lg:py-[133px] bg-[#D7D2F1]">
      <div className="max-w-[1344px] mx-auto px-4 sm:px-6 lg:px-9">
        {/* Comparison Table */}
        <div className="rounded-2xl md:rounded-[40px] bg-white/80 backdrop-blur-sm p-4 sm:p-8 lg:p-[53px]">
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-[40px] font-semibold text-[#9B8FD8] text-center mb-8 md:mb-12 lg:mb-[53px]">
            DeepBrain Academy vs. Traditional Agencies
          </h3>
          
          {/* 桌面端表格布局 */}
          <div className="hidden lg:block overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-12 gap-5 border-b-[3px] border-[#E8F4FC] pb-6 mb-6">
              <div className="col-span-3">
                <p className="text-xl xl:text-[27px] font-bold text-[#7C8B99]">Services</p>
              </div>
              <div className="col-span-6 text-center">
                <p className="text-xl xl:text-[27px] font-bold text-[#9B8FD8]">DeepBrain Academy</p>
              </div>
              <div className="col-span-3 text-center">
                <p className="text-xl xl:text-[27px] font-bold text-[#7C8B99]">Traditional Agencies</p>
              </div>
            </div>

            {/* Table Rows */}
            <div className="space-y-6">
              {comparisonData.map((row, idx) => (
                <div key={idx} className={`grid grid-cols-12 gap-5 ${idx < 4 ? 'border-b border-[#E8F4FC] pb-6' : 'pb-6'}`}>
                  <div className="col-span-3">
                    <p className="text-lg xl:text-[23px] text-[#2C3E50]">{row.service}</p>
                  </div>
                  <div className="col-span-6 flex justify-center">
                    <div className="bg-[rgba(155,143,216,0.1)] rounded-xl xl:rounded-[20px] px-4 xl:px-[27px] py-2 xl:py-[13px] inline-flex items-center gap-3">
                      <span className="text-lg xl:text-[23px] text-[#9B8FD8]">✓</span>
                      <p className="text-lg xl:text-[23px] text-[#9B8FD8]">{row.deepbrain}</p>
                    </div>
                  </div>
                  <div className="col-span-3 text-center flex items-center justify-center">
                    <p className="text-lg xl:text-[23px] text-[#7C8B99]">{row.traditional}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 移动端/平板卡片布局 */}
          <div className="lg:hidden space-y-4">
            {comparisonData.map((row, idx) => (
              <div key={idx} className="bg-white rounded-xl p-4 sm:p-6 shadow-sm">
                {/* 服务名称 */}
                <h4 className="text-base sm:text-lg font-semibold text-[#2C3E50] mb-4 pb-3 border-b border-gray-100">
                  {row.service}
                </h4>
                
                {/* DeepBrain */}
                <div className="mb-3">
                  <span className="text-xs sm:text-sm font-medium text-[#9B8FD8] uppercase tracking-wide">DeepBrain Academy</span>
                  <div className="mt-2 bg-[rgba(155,143,216,0.1)] rounded-lg px-3 py-2 inline-flex items-center gap-2">
                    <span className="text-[#9B8FD8]">✓</span>
                    <p className="text-sm sm:text-base text-[#9B8FD8]">{row.deepbrain}</p>
                  </div>
                </div>
                
                {/* Traditional */}
                <div>
                  <span className="text-xs sm:text-sm font-medium text-[#7C8B99] uppercase tracking-wide">Traditional Agencies</span>
                  <p className="mt-2 text-sm sm:text-base text-[#7C8B99]">{row.traditional}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

