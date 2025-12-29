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
    <section className="py-[133px] bg-white">
      <div className="max-w-[1920px] mx-auto px-14">
        {/* Top Section - Title左 + Image右 */}
        <div className="flex gap-[80px] items-start mb-[80px]">
          {/* Left - Title */}
          <div className="flex-1">
            <div className="inline-flex items-center gap-[27px] px-[27px] py-[13px] bg-[#E8F4FC] rounded-[33px] mb-[27px]">
              <span className="text-[40px]">💎</span>
              <span className="text-[26.5px] text-[#6BB6FF]">Pros</span>
            </div>
            <h2 className="text-[53px] font-bold text-[#2C3E50] mb-[27px] leading-[1.3]">
              Why DeepBrain Academy?
            </h2>
            <p className="text-[26.5px] text-[#7C8B99] leading-[1.6]">
              herefore we are committed to providing the highest quality and most personalized educational services.
            </p>
          </div>

          {/* Right - Image with Overlay */}
          <div className="w-[850px] flex-shrink-0 relative">
            {/* Image Container */}
            <div className="relative w-full h-[429px] rounded-[40px] overflow-hidden shadow-[0px_41px_83px_-20px_rgba(0,0,0,0.25)]">
              <Image
                src="/Image (学习场景).svg"
                alt="Learning Scene"
                fill
                loading="lazy"
                className="object-cover"
              />
            </div>
            
            {/* Stats Overlay */}
            <div className="absolute bottom-[-40px] right-[-20px] bg-gradient-to-b from-[#7EC97E] to-[#6BB87B] rounded-[27px] shadow-xl p-[30px] w-[200px] z-10">
              <p className="text-[18px] text-white/90 mb-[6px] leading-[1.3]">We Served</p>
              <h3 className="text-[36px] font-semibold text-white mb-[6px] leading-[1.1]">10,000+</h3>
              <p className="text-[16px] text-white/90 leading-[1.3]">Trusted choice for families</p>
            </div>

            {/* Decorations */}
            <div className="absolute -left-[30px] -top-[60px] w-[159px] h-[159px] bg-[#FFD4A3] rounded-full opacity-20 blur-[133px]"></div>
          </div>
        </div>

        {/* Bottom Section - Four Cards横跨全宽 */}
        <div className="grid grid-cols-2 gap-[40px]">
          {advantages.map((item, idx) => (
            <div key={idx} className="bg-[#FBF9F4] rounded-[33px] p-[40px] hover:shadow-lg transition flex items-start gap-[26px]">
              {/* Icon on the left */}
              <div className="w-[80px] h-[80px] bg-gradient-to-br from-[rgba(107,182,255,0.2)] to-[rgba(74,159,239,0.2)] rounded-[23px] flex items-center justify-center text-[40px] flex-shrink-0">
                {item.icon}
              </div>
              
              {/* Content on the right */}
              <div className="flex-1 flex flex-col min-w-0">
                <h4 className="text-[28px] font-semibold text-[#2C3E50] mb-[13px] leading-[1.3]">
                  {item.title}
                </h4>
                <p className="text-[24px] text-[#7C8B99] leading-[1.5] mb-[16px]">
                  {item.desc}
                </p>
                <div className="flex items-center gap-[13px] mt-auto">
                  <span className="text-[26px] font-semibold text-[#6BB6FF]">{item.stat}</span>
                  <span className="text-[20px] text-[#7C8B99]">{item.label}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

