/**
 * 文件用途：DeepBrain vs Traditional Agencies 对比表组件
 * 依赖关系：无
 * 注意事项：展示服务对比表格
 */

export default function ComparisonTableSection() {
  return (
    <section className="py-[133px] bg-[#D7D2F1]">
      <div className="max-w-[1920px] mx-auto px-[53px]">
        {/* Comparison Table */}
        <div className="rounded-[40px] bg-white/80 backdrop-blur-sm p-[53px]">
          <h3 className="text-[40px] font-semibold text-[#9B8FD8] text-center mb-[53px]">
            DeepBrain Academy vs. Traditional Agencies
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
                { service: 'Service transparency', deepbrain: 'Transparent Tracking System', traditional: 'Opaque Process' },
                { service: 'Essay Originality', deepbrain: '100% original', traditional: 'Template-Based Reuse' },
                { service: 'Data Support', deepbrain: 'Admission database', traditional: 'Reliance on Subjective Guesswork' },
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

