/**
 * 文件用途：关于我们页面的「我们的使命」首屏区域
 * 依赖关系：依赖数据文件；纯展示组件
 * 注意事项：内容已提取到 data/about.ts，便于统一管理和修改
 */

import { heroContent } from '@/data/about';

export default function AboutHeroSection() {
  return (
    <section
      className="relative bg-gradient-to-b from-[#E8F4FC] to-[#FBF9F4] min-h-[calc(100vh-106px)] flex flex-col justify-center"
      aria-label="首屏：Our Mission"
    >
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 md:px-11 py-12 sm:py-16 md:py-20">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[black] mb-4 sm:mb-6 md:mb-8 text-center">
          {heroContent.title}
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-[#7C8B99] leading-relaxed max-w-4xl mx-auto text-center px-1 sm:px-0">
          {heroContent.description}
        </p>
      </div>
    </section>
  );
}
