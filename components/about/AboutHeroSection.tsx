/**
 * 文件用途：关于我们页面的「我们的使命」首屏区域
 * 依赖关系：无外部业务依赖，纯展示
 * 注意事项：内容来源于 HeroSection 设计稿，保持与品牌调性一致
 */

export default function AboutHeroSection() {
  return (
    <section
      className="relative bg-gradient-to-b from-[#E8F4FC] to-[#FBF9F4] min-h-[calc(100vh-106px)] flex flex-col justify-center"
      aria-label="首屏：Our Mission"
    >
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 md:px-11 py-12 sm:py-16 md:py-20">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[black] mb-4 sm:mb-6 md:mb-8 text-center">
          Our Mission
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-[#7C8B99] leading-relaxed max-w-4xl mx-auto text-center px-1 sm:px-0">
          DeepBrain Academy is not a test-prep factory. It was born from a desire to create a place where
          students learn how to think, not just what to memorize. We believe that true academic excellence
          is not determined by school labels, but by how the brain learns, adapts, and thinks.
        </p>
      </div>
    </section>
  );
}
