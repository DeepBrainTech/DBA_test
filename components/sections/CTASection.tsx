/**
 * 文件用途：行动号召区块组件（全球教育页面）
 * 依赖关系：无
 * 注意事项：包含标题、描述和两个按钮
 */

'use client';

/**
 * 行动号召组件
 */
export default function CTASection() {
  return (
    <section className="py-[133px] bg-gradient-to-b from-[#E8F4FC] to-white">
      <div className="max-w-[1920px] mx-auto px-14">
        <div className="bg-gradient-to-br from-[#9B8FD8] to-[#8A7CC7] rounded-[40px] p-[80px] text-center text-white shadow-xl">
          <h2 className="text-[53px] font-bold mb-[27px]">
            Ready to Start Your Global Education Journey?
          </h2>
          <p className="text-[28px] mb-[53px] opacity-90 max-w-[900px] mx-auto">
            Book a free consultation with our expert team and discover how we can help you achieve your educational goals.
          </p>
          <div className="flex items-center justify-center gap-[27px]">
            <button className="flex items-center justify-center gap-[13px] px-[53px] h-[95px] bg-white text-[#9B8FD8] text-[28px] rounded-[40px] hover:shadow-xl transition font-semibold">
              Schedule Consultation
              <svg className="w-[33px] h-[33px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.77} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
            <button className="flex items-center justify-center gap-[13px] px-[53px] h-[95px] bg-transparent border-2 border-white text-white text-[28px] rounded-[40px] hover:bg-white/10 transition">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

