/**
 * 文件用途：首页英雄区组件
 * 依赖关系：依赖 Next.js Image 组件和 scrollToElement 工具函数
 * 注意事项：包含主标题、描述、按钮和 YouTube 视频；-mt-[106px] 使首屏与透明导航重叠，内容区 pt-[106px] 使文案在导航下方
 */

'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { scrollToElement } from '@/lib/scroll';

/**
 * 英雄区组件
 */
export default function HeroSection() {
  // 控制视频播放状态
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef<HTMLIFrameElement>(null);

  const handleScrollDown = () => {
    scrollToElement('trust-badges');
  };

  /**
   * 处理视频播放
   * 点击 Watch Video 按钮时，显示视频并自动播放
   */
  const handleWatchVideo = () => {
    setIsVideoPlaying(true);
    // 如果 iframe 已加载，通过 YouTube API 播放视频
    if (videoRef.current) {
      const iframe = videoRef.current;
      const videoId = 'iG8ritExvgU';
      // 重新加载 iframe 以触发自动播放
      iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
    }
  };

  return (
    <section className="relative -mt-[106px] min-h-0 md:min-h-screen bg-gradient-to-b from-[#E8F4FC] to-[#FBF9F4] overflow-hidden flex flex-col pb-2 sm:pb-6">
      {/* 小屏上下位置：改 pt-16 调整整块距顶（加大下移、减小上移）；改下方内容区 py-6 调内容区上下留白 */}
      {/* Background Decorations - 大屏显示，小屏减弱避免占空间 */}
      <div className="absolute top-[120px] right-4 md:top-[200px] md:right-[100px] w-20 h-20 md:w-[133px] md:h-[133px] bg-[#FFD4A3] rounded-full opacity-20 blur-[80px] md:blur-[133px] pointer-events-none" aria-hidden />
      
      <div className="max-w-[1920px] mx-auto px-5 sm:px-6 md:px-10 lg:px-14 flex-1 flex items-center pt-[106px] pb-6 sm:pb-8 md:pb-10 lg:pb-[60px]">
      {/* 小屏内容区上下留白：改 py-6（如 py-4 更紧凑、py-10 更宽松） */}
        {/* 小屏单列堆叠；大屏双列，笔记本端缩小间距避免拥挤 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 md:gap-14 lg:gap-12 xl:gap-20 2xl:gap-[100px] w-full items-center">
          {/* Left Content - 小屏居中；大屏左边距随断点递增，笔记本不占太多空间 */}
          <div className="lg:ml-8 xl:ml-16 2xl:ml-[100px] order-1 text-center lg:text-left">
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[66px] font-bold text-[#2C3E50] leading-tight mb-5 sm:mb-5 md:mb-[30px]">
              Inspiring Minds
            </h1>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-3 md:gap-[20px] mb-5 sm:mb-5 md:mb-[30px]">
              <span className="text-sm sm:text-lg md:text-[22px] lg:text-[24px] text-[#7EC97E]">Fun Learning.</span>
              <span className="text-sm sm:text-lg md:text-[22px] lg:text-[24px] text-[#F4A460]">Expert Guidance.</span>
              <span className="text-sm sm:text-lg md:text-[22px] lg:text-[24px] text-[#9B8FD8]">Holistic Growth.</span>
            </div>
            <p className="text-[15px] sm:text-lg md:text-[20px] lg:text-[24px] text-[#7C8B99] leading-relaxed md:leading-[1.6] mb-8 sm:mb-8 md:mb-[40px] max-w-full lg:max-w-[741px] mx-auto lg:mx-0">
              We offer math thinking, chess, and global education support for ages 6-18, helping children learn with joy and grow through challenges.
            </p>
            
            {/* Buttons - 小屏纵向排列；强制文案单行显示，避免换行 */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-4 sm:gap-4 md:gap-[22px] flex-wrap sm:flex-nowrap">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfAceUQq9JJ3uu-EcWlHkTQ1O1jY_uzh-fptrN7_JC9rf-dqg/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 sm:gap-[10px] px-5 sm:px-6 md:px-[42px] h-11 sm:h-14 md:h-[75px] bg-gradient-to-b from-[#7EC97E] to-[#6BB87B] text-white text-sm sm:text-lg md:text-[22px] rounded-2xl md:rounded-[32px] hover:shadow-xl transition whitespace-nowrap shrink-0"
              >
                Schedule A Consultation
                <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-[26px] md:h-[26px] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.77} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <button 
                onClick={handleWatchVideo}
                className="flex items-center justify-center gap-2 sm:gap-[10px] px-5 sm:px-6 md:px-[42px] h-11 sm:h-14 md:h-[75px] bg-white text-[#6BB6FF] text-sm sm:text-lg md:text-[22px] rounded-2xl md:rounded-[32px] border-2 border-[#6BB6FF] hover:shadow-lg transition whitespace-nowrap shrink-0"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-[26px] md:h-[26px] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.77} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.77} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Watch Video
              </button>
            </div>
          </div>

          {/* Right Video - 全断点响应式：始终 16:9，最大宽度 867px，小屏居中、大屏随列宽缩放 */}
          <div className="relative order-2 w-full flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[867px] aspect-video rounded-xl sm:rounded-3xl lg:rounded-[40px] overflow-hidden shadow-[0px_13px_17px_-10px_rgba(0,0,0,0.1),0px_33px_41px_-8px_rgba(0,0,0,0.1)]">
              <div className="absolute inset-0 rounded-xl sm:rounded-3xl lg:rounded-[40px] overflow-hidden">
                {isVideoPlaying ? (
                  <iframe
                    ref={videoRef}
                    src="https://www.youtube.com/embed/iG8ritExvgU?autoplay=1&rel=0"
                    title="Learning Scene Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                ) : (
                  <div className="relative w-full h-full bg-gray-200 flex items-center justify-center">
                    {/* YouTube 视频缩略图 */}
                    <Image
                      src="https://img.youtube.com/vi/iG8ritExvgU/maxresdefault.jpg"
                      alt="Learning Scene Video"
                      fill
                      className="object-cover"
                      unoptimized
                    />
                    {/* 播放按钮覆盖层 */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition cursor-pointer" onClick={handleWatchVideo}>
                      <div className="w-[100px] h-[100px] bg-white/90 rounded-full flex items-center justify-center hover:scale-110 transition">
                        <svg className="w-[50px] h-[50px] text-[#6BB6FF] ml-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            {/* Star decorations - 小屏隐藏减少拥挤感，大屏显示 */}
            <div className="hidden sm:block absolute bottom-4 right-4 lg:bottom-20 lg:-left-10 text-3xl lg:text-[50px] opacity-80 pointer-events-none" aria-hidden>✨</div>
          </div>
        </div>
      </div>

      {/* Scroll Down Arrow - 小屏上下位置：改 pt-4 / pb-2（如 pt-2 上移、pt-8 下移；pb-2 底部更贴边） */}
      <div className="flex justify-center pt-1 sm:pt-1 md:pt-1 pb-2 sm:pb-1">
        <button 
          onClick={handleScrollDown}
          className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-[60px] lg:h-[60px] bg-[#6BB6FF] hover:bg-[#4A9FEF] rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 animate-bounce"
          aria-label="Scroll down"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-[30px] lg:h-[30px] text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </section>
  );
}
