/**
 * 文件用途：Summer Camp Track A 区块容器组件（STEM Innovation）
 * 依赖关系：依赖 next/image、TrackAFeatureCard、FeaturedProjectCard、data/summer_camp
 * 注意事项：包含 Program 标题、四宫格特色、引用、Featured Projects 列表与注册按钮；无绝对定位
 */

import Image from 'next/image';
import { summerCampPageData } from '@/data/summer_camp';
import TrackAFeatureCard from '@/components/summer_camp/TrackAFeatureCard';
import FeaturedProjectCard from '@/components/summer_camp/FeaturedProjectCard';

export default function TrackA() {
  const { trackA } = summerCampPageData;
  const features = trackA.features;
  const { featuredProjects } = trackA;
  return (
    <div className="px-4 sm:px-6 lg:px-14 pt-12 sm:pt-16 lg:pt-20 bg-[#FBF9F4]">
      <div className="w-full max-w-[min(1280px,95vw)] mx-auto px-0 sm:px-4 lg:px-9 pt-0 flex flex-col justify-start items-center gap-8 sm:gap-12 lg:gap-16">
        {/* 标题区 */}
        <div className="w-full max-w-full sm:max-w-[600px] md:max-w-[750px] lg:max-w-[892px] mx-auto flex flex-col items-center text-center gap-3 sm:gap-4 lg:gap-5 px-2 sm:px-0">
          <div className="inline-flex items-center gap-2 sm:gap-3 rounded-2xl lg:rounded-3xl bg-rose-400/10 px-4 sm:px-5 py-2.5 sm:py-3.5">
            <span className="flex h-5 w-5 items-center justify-center shrink-0 text-sm sm:text-base font-['Outfit'] md:h-8 md:w-7 md:text-xl" aria-hidden>📖</span>
            <span className="text-rose-400 text-base sm:text-lg md:text-xl font-normal font-['Outfit']">Program</span>
          </div>
          <h2 className="w-full text-slate-700 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold font-['Outfit'] leading-tight">Track A: STEM Innovation</h2>
          <p className="w-full text-center text-slate-500 text-xs sm:text-sm md:text-base lg:text-lg font-normal font-['Outfit'] leading-relaxed">A 2 to 6-week, project-based STEAM exploration for the innovators of tomorrow.</p>
        </div>

        {/* 四宫格 */}
        <div className="w-full max-w-[1104px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <TrackAFeatureCard index={1} {...features[0]} />
          <TrackAFeatureCard index={2} {...features[1]} />
          <TrackAFeatureCard index={3} {...features[2]} />
          <TrackAFeatureCard index={4} {...features[3]} />
        </div>

        {/* 引用块 */}
        <div className="w-full max-w-[1268px] mx-auto flex flex-col bg-gradient-to-r from-green-400/0 to-green-400/0 rounded-2xl lg:rounded-3xl overflow-hidden pt-4 sm:pt-6 px-4 sm:px-6 md:pl-12 md:pr-8 pb-6 sm:pb-9">
          <div className="flex justify-start pb-0" aria-hidden>
            <span className="leading-none opacity-20 text-green-400 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal font-['Outfit']">&quot;</span>
          </div>
          <div className="flex flex-col items-center gap-3 sm:gap-4 lg:gap-5 min-w-0 flex-1 mt-0.5">
            <p className="w-full max-w-[1028px] text-center text-slate-700 text-sm sm:text-base lg:text-xl font-normal font-['Outfit'] leading-relaxed">
              This track is designed for students who are passionate about science, technology, engineering, and math. Through a series of hands-on projects, students will dive deep into advanced scientific concepts and apply them to solve real-world problems. They will learn to identify challenges, design and build prototypes, test their creations, and communicate their findings. Each project is an immersive experience that combines theory with practice, guided by our expert instructors.
            </p>
            <p className="text-slate-500 text-sm sm:text-base lg:text-lg font-normal font-['Outfit']">DeepBrain Academy Coaching Team</p>
          </div>
        </div>

        {/* Featured Projects 列表 */}
        <div className="w-full max-w-[1180px] mx-auto pt-4 sm:pt-6 lg:pt-8">
          {/* Course Overview 按钮 */}
          <div className="relative z-10 flex justify-start -mt-8 sm:-mt-10 lg:-mt-14 -mb-4 sm:-mb-6 lg:-mb-8 ml-2 sm:ml-4 md:ml-9">
            <div className="bg-rose-400 rounded-2xl lg:rounded-[33.19px] px-4 sm:px-6 py-2.5 sm:py-3.5 shadow-lg">
              <span className="text-white text-sm sm:text-base md:text-lg font-normal font-['Outfit']">{trackA.primaryCtaLabel}</span>
            </div>
          </div>
          {/* 白卡 */}
          <div className="w-full bg-white rounded-2xl lg:rounded-3xl shadow-sm flex flex-col px-4 sm:px-6 md:px-9 pt-10 sm:pt-12 md:pt-14 lg:pt-16 pb-6 sm:pb-8 md:pb-10 gap-5 sm:gap-6 lg:gap-8">
            {/* 区块头 */}
            <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4">
              <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 shrink-0 rounded-2xl lg:rounded-3xl bg-rose-400/10 flex items-center justify-center">
                <Image src="/summer_camp/trackA/featured_projects.svg" alt="" width={42} height={42} className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 object-contain" />
              </div>
              <div className="flex flex-col gap-1 min-w-0">
                <h3 className="text-slate-700 text-lg sm:text-xl md:text-2xl font-semibold font-['Outfit'] leading-tight">{featuredProjects.title}</h3>
                <p className="text-slate-500 text-sm sm:text-base md:text-lg font-normal font-['Outfit']">{featuredProjects.subtitle}</p>
              </div>
            </div>
            {/* 项目列表 */}
            <div className="flex flex-col gap-3 sm:gap-4 lg:gap-5">
              {featuredProjects.projects.map((project) => (
                <FeaturedProjectCard key={project.title} project={project} />
              ))}
            </div>
          </div>
        </div>

        {/* 注册按钮 */}
        <div className="w-full max-w-full flex justify-center pt-2 sm:pt-4 pb-8 sm:pb-12 md:pb-20">
          <a
            href="https://forms.gle/nrcBMPs8NCAn87pc8"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto min-w-[140px] sm:min-w-[150px] h-11 sm:h-12 md:h-14 px-6 sm:px-8 lg:pl-20 lg:pr-7 py-2.5 sm:py-3 md:py-3.5 rounded-xl sm:rounded-2xl lg:rounded-3xl bg-rose-400 inline-flex justify-center items-center gap-3 sm:gap-4 lg:gap-6 md:gap-7 shadow-md no-underline"
          >
            <span className="text-white text-base sm:text-lg md:text-xl font-bold font-['Outfit']">{trackA.secondaryCtaLabel}</span>
            <Image src="/summer_camp/trackA/registernow.svg" alt="" width={24} height={24} className="shrink-0 w-5 h-5 sm:w-6 sm:h-6" aria-hidden />
          </a>
        </div>
      </div>
    </div>
  );
}
