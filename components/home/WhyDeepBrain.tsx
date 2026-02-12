/**
 * 文件用途：为什么选择DeepBrain Academy区块组件
 * 依赖关系：依赖 types/program.ts 中的 Advantage 类型和 Next.js Image 组件
 * 注意事项：包含标题区、图片和4个优势卡片
 */

import Image from 'next/image';
import type { Advantage } from '@/types/program';

interface WhyDeepBrainProps {
  advantages: Advantage[];
}

/**
 * 为什么选择DeepBrain组件
 * @param advantages 优势数据数组
 */
export default function WhyDeepBrain({ advantages }: WhyDeepBrainProps) {
  return (
    <section className="py-14 md:py-20 bg-white">
      {/* 按设计图：内容居中且左右留出宽阔边距，使用较小 max-w + 较大 px */}
      <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16 xl:px-20">
        {/* Top Section - Title左 + Image右，整体缩小间距与字号 */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start mb-10 lg:mb-12">
          {/* Left - Title，增加上边距让整块文字略往下靠 */}
          <div className="flex-1 w-full lg:max-w-[480px] pt-6 lg:pt-16">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#E8F4FC] rounded-2xl mb-4">
              <Image src="/home/section-icons/pros.png" alt="Pros" width={32} height={32} className="w-8 h-8 shrink-0" />
              <span className="text-lg text-[#6BB6FF]">Pros</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2C3E50] mb-3 leading-[1.3]">
              Why DeepBrain Academy?
            </h2>
            <p className="text-base md:text-lg text-[#7C8B99] leading-[1.6]">
              We are committed to providing the highest quality and most personalized educational services.
            </p>
          </div>

          {/* Right - Image with Overlay，缩小宽高 */}
          <div className="w-full lg:w-[520px] xl:w-[600px] flex-shrink-0 relative">
            <div className="relative w-full aspect-[4/3] max-h-[320px] rounded-3xl overflow-hidden shadow-[0px_24px_48px_-12px_rgba(0,0,0,0.2)]">
              <Image
                src="/home/why-deepbrain/learn.svg"
                alt="Learning Scene"
                fill
                loading="lazy"
                className="object-cover"
              />
            </div>
            {/* Stats Overlay 缩小 */}
            <div className="absolute bottom-[-20px] right-[-8px] bg-gradient-to-b from-[#7EC97E] to-[#6BB87B] rounded-2xl shadow-lg px-5 py-3 w-[160px] z-10">
              <p className="text-xs text-white/90 mb-0.5 leading-tight">Trusted by</p>
              <h3 className="text-2xl font-semibold text-white mb-0.5 leading-tight">10,000+</h3>
              <p className="text-xs text-white/90 leading-tight">Families Worldwide</p>
            </div>
            <div className="absolute -left-4 -top-8 w-24 h-24 bg-[#FFD4A3] rounded-full opacity-20 blur-3xl" aria-hidden="true" />
          </div>
        </div>

        {/* Bottom Section - Four Cards，缩小卡片内边距与字号 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {advantages.map((item, idx) => (
            <div key={idx} className="bg-[#FBF9F4] rounded-2xl p-5 md:p-6 hover:shadow-lg transition flex items-start gap-4">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-[rgba(107,182,255,0.2)] to-[rgba(74,159,239,0.2)] rounded-xl flex items-center justify-center flex-shrink-0 overflow-hidden">
                {item.iconSrc ? (
                  <Image src={item.iconSrc} alt="" width={56} height={56} className="w-8 h-8 md:w-9 md:h-9 object-contain" />
                ) : (
                  <span className="text-2xl">{item.icon}</span>
                )}
              </div>
              <div className="flex-1 flex flex-col min-w-0">
                <h4 className="text-lg md:text-xl font-semibold text-[#2C3E50] mb-2 leading-[1.3]">
                  {item.title}
                </h4>
                <p className="text-sm md:text-base text-[#7C8B99] leading-[1.5] mb-2">
                  {item.desc}
                </p>
                <div className="flex items-center gap-2 mt-auto">
                  <span className="text-lg font-semibold text-[#6BB6FF]">{item.stat}</span>
                  <span className="text-sm text-[#7C8B99]">{item.label}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
