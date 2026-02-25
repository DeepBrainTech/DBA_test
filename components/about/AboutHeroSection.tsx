/**
 * 文件用途：关于我们页面的「我们的使命」首屏区域
 * 依赖关系：依赖数据文件；纯展示组件
 * 注意事项：内容已提取到 data/about.ts，便于统一管理和修改；-mt-[106px] 使首屏与导航重叠、透明导航下透出渐变，pt-[106px] 使文案在导航下方
 */

import { heroContent } from '@/data/about';

export default function AboutHeroSection() {
  return (
    <section
      className="relative -mt-[106px] bg-gradient-to-b from-[#E8F4FC] to-[#FBF9F4] min-h-screen flex flex-col justify-center"
      aria-label="首屏：Our Mission"
    >
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 md:px-11 pt-[106px] py-12 sm:py-16 md:py-20">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[black] mb-4 sm:mb-6 md:mb-8 text-center">
          {heroContent.title}
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#7C8B99] leading-relaxed max-w-4xl mx-auto text-center px-2 sm:px-4 break-words">
          {heroContent.description}
        </p>
      </div>
    </section>
  );
}
