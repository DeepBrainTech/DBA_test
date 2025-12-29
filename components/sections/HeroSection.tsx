/**
 * 文件用途：首页英雄区组件
 * 依赖关系：依赖 Next.js Image 组件和 scrollToElement 工具函数
 * 注意事项：包含主标题、描述、按钮和背景图片
 */

'use client';

import Image from 'next/image';
import { scrollToElement } from '@/lib/scroll';

/**
 * 英雄区组件
 */
export default function HeroSection() {
  const handleScrollDown = () => {
    scrollToElement('trust-badges');
  };

  return (
    <section className="relative h-screen pt-[133px] bg-gradient-to-b from-[#E8F4FC] to-[#FBF9F4] overflow-hidden flex flex-col">
      {/* Background Decorations */}
      <div className="absolute top-[200px] right-[100px] w-[133px] h-[133px] bg-[#FFD4A3] rounded-full opacity-20 blur-[133px]"></div>
      
      <div className="max-w-[1920px] mx-auto px-14 py-[60px] flex-1 flex items-center">
        <div className="grid grid-cols-2 gap-[100px] w-full items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-[66px] font-bold text-[#2C3E50] leading-[1.2] mb-[30px]">
              Inspiring Minds
            </h1>
            <h2 className="text-[36px] font-bold text-[#2C3E50] leading-[1.6] mb-[30px]">
              Math Olympiad • Chess • Global Education
            </h2>
            <div className="flex items-center gap-[20px] mb-[30px]">
              <span className="text-[24px] text-[#7EC97E]">Fun Learning.</span>
              <span className="text-[24px] text-[#F4A460]">Expert Guidance.</span>
              <span className="text-[24px] text-[#9B8FD8]">Holistic Growth.</span>
            </div>
            <p className="text-[24px] text-[#7C8B99] leading-[1.6] mb-[40px] max-w-[741px]">
              We offer math thinking, chess, and global education support for ages 6-18, helping children learn with joy and grow through challenges.
            </p>
            
            {/* Buttons */}
            <div className="flex gap-[27px]">
              <button className="flex items-center justify-center gap-[13px] px-[53px] h-[95px] bg-gradient-to-b from-[#7EC97E] to-[#6BB87B] text-white text-[28px] rounded-[40px] hover:shadow-xl transition">
                Free Trial
                <svg className="w-[33px] h-[33px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.77} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
              <button className="flex items-center justify-center gap-[13px] px-[53px] h-[95px] bg-white text-[#6BB6FF] text-[28px] rounded-[40px] hover:shadow-lg transition">
                <svg className="w-[33px] h-[33px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.77} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.77} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Watch Video
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative w-[867px] h-[587px] bg-white rounded-[40px] shadow-[0px_13px_17px_-10px_rgba(0,0,0,0.1),0px_33px_41px_-8px_rgba(0,0,0,0.1)]">
              <div className="absolute inset-[13px] rounded-[33px] overflow-hidden">
                <Image
                  src="/Image (儿童学习场景).svg"
                  alt="Learning Scene"
                  fill
                  priority
                  quality={75}
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
            {/* Star decorations */}
            <div className="absolute -top-10 right-0 text-[60px]">⭐</div>
            <div className="absolute bottom-20 -left-10 text-[50px] opacity-80">✨</div>
          </div>
        </div>
      </div>

      {/* Scroll Down Arrow */}
      <div className="absolute bottom-[40px] left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <button 
          onClick={handleScrollDown}
          className="w-[60px] h-[60px] bg-[#6BB6FF] hover:bg-[#4A9FEF] rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110"
          aria-label="Scroll down"
        >
          <svg className="w-[30px] h-[30px] text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </section>
  );
}

