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
    <section className="py-12 sm:py-16 lg:py-24 xl:py-[133px] bg-gradient-to-b from-[#E8F4FC] to-white">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-14">
        <div className="bg-gradient-to-br from-[#9B8FD8] to-[#8A7CC7] rounded-2xl sm:rounded-3xl lg:rounded-[40px] p-6 sm:p-10 lg:p-16 xl:p-[80px] text-center text-white shadow-xl">
          <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl 2xl:text-[53px] font-bold mb-4 sm:mb-6 lg:mb-[27px] leading-tight">
            Ready to Start Your Global Education Journey?
          </h2>
          <p className="text-sm sm:text-base lg:text-xl xl:text-[28px] mb-6 sm:mb-8 lg:mb-12 xl:mb-[53px] opacity-90 max-w-full sm:max-w-[600px] md:max-w-[750px] lg:max-w-[900px] mx-auto px-2 sm:px-0">
            Book a free consultation with our expert team and discover how we can help you achieve your educational goals.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 lg:gap-[27px]">
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 sm:gap-3 lg:gap-[13px] px-6 sm:px-8 lg:px-12 xl:px-[53px] h-12 sm:h-14 lg:h-16 xl:h-[95px] bg-white text-[#9B8FD8] text-sm sm:text-base lg:text-xl xl:text-[28px] rounded-xl sm:rounded-2xl lg:rounded-[40px] hover:shadow-xl transition font-semibold">
              Schedule Consultation
              <svg className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 xl:w-[33px] xl:h-[33px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.77} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 sm:gap-3 lg:gap-[13px] px-6 sm:px-8 lg:px-12 xl:px-[53px] h-12 sm:h-14 lg:h-16 xl:h-[95px] bg-transparent border-2 border-white text-white text-sm sm:text-base lg:text-xl xl:text-[28px] rounded-xl sm:rounded-2xl lg:rounded-[40px] hover:bg-white/10 transition">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

