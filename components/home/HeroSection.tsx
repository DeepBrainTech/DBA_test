/**
 * 文件用途：首页英雄区组件
 * 依赖关系：依赖 Next.js Image 组件和 scrollToElement 工具函数
 * 注意事项：包含主标题、描述、按钮和 YouTube 视频
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
    <section className="relative h-screen pt-[133px] bg-gradient-to-b from-[#E8F4FC] to-[#FBF9F4] overflow-hidden flex flex-col">
      {/* Background Decorations */}
      <div className="absolute top-[200px] right-[100px] w-[133px] h-[133px] bg-[#FFD4A3] rounded-full opacity-20 blur-[133px]"></div>
      
      <div className="max-w-[1920px] mx-auto px-14 py-[60px] flex-1 flex items-center">
        <div className="grid grid-cols-2 gap-[100px] w-full items-center">
          {/* Left Content */}
          <div className="ml-[100px]">
            <h1 className="text-[66px] font-bold text-[#2C3E50] leading-[1.2] mb-[30px]">
              Inspiring Minds
            </h1>
            <div className="flex items-center gap-[20px] mb-[30px]">
              <span className="text-[24px] text-[#7EC97E]">Fun Learning.</span>
              <span className="text-[24px] text-[#F4A460]">Expert Guidance.</span>
              <span className="text-[24px] text-[#9B8FD8]">Holistic Growth.</span>
            </div>
            <p className="text-[24px] text-[#7C8B99] leading-[1.6] mb-[40px] max-w-[741px]">
              We offer math thinking, chess, and global education support for ages 6-18, helping children learn with joy and grow through challenges.
            </p>
            
            {/* Buttons */}
            <div className="flex gap-[22px]">
              <button className="flex items-center justify-center gap-[10px] px-[42px] h-[75px] bg-gradient-to-b from-[#7EC97E] to-[#6BB87B] text-white text-[22px] rounded-[32px] hover:shadow-xl transition">
                Schedule A Consultation
                <svg className="w-[26px] h-[26px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.77} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
              <button 
                onClick={handleWatchVideo}
                className="flex items-center justify-center gap-[10px] px-[42px] h-[75px] bg-white text-[#6BB6FF] text-[22px] rounded-[32px] hover:shadow-lg transition"
              >
                <svg className="w-[26px] h-[26px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.77} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.77} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Watch Video
              </button>
            </div>
          </div>

          {/* Right Video */}
          <div className="relative -ml-[90px]">
            <div className="relative w-[867px] h-[500px] rounded-[40px] overflow-hidden shadow-[0px_13px_17px_-10px_rgba(0,0,0,0.1),0px_33px_41px_-8px_rgba(0,0,0,0.1)]">
              <div className="absolute inset-0 rounded-[40px] overflow-hidden">
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
            {/* Star decorations */}
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
