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
    <div className="px-14 pt-20 bg-[#FBF9F4]">
      <div className="w-full max-w-[1344px] mx-auto px-9 pt-0 flex flex-col justify-start items-center gap-16">
        {/* 标题区：Program 标签 + Track A 标题 + 副标题（整体居中；与 Learning Strategies 一致用固定最大宽容器 + mx-auto 保证居中） */}
        {/* 字号与 LearningStrategies 区块标题一致：badge text-lg/xl、主标题 3xl/4xl、副标题 base/lg */}
        <div className="w-full max-w-[892px] mx-auto flex flex-col items-center text-center gap-5">
          {/* 与 Learning Strategies 区块 badge 样式、尺寸一致：图标容器 w-5 h-5 md:w-7 md:h-8，文案 text-lg md:text-xl */}
          <div className="inline-flex items-center gap-3 rounded-3xl bg-rose-400/10 px-5 py-3.5">
            <span className="flex h-5 w-5 items-center justify-center shrink-0 text-base font-['Outfit'] md:h-8 md:w-7 md:text-xl" aria-hidden>📖</span>
            <span className="text-rose-400 text-lg md:text-xl font-normal font-['Outfit'] leading-7">Program</span>
          </div>
          <h2 className="w-full text-slate-700 text-3xl md:text-4xl font-bold font-['Outfit'] leading-tight">Track A: STEM Innovation</h2>
          <p className="w-full whitespace-nowrap text-center text-slate-500 text-base md:text-lg font-normal font-['Outfit'] leading-relaxed">A 2 to 6-week, project-based STEAM exploration for the innovators of tomorrow.</p>
        </div>

        {/* 四宫格：左右与上下间距一致（gap-6），md+ 双列每列最大 540px */}
        <div className="w-full max-w-[1104px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:[grid-template-columns:repeat(2,minmax(0,540px))] md:justify-center">
          <TrackAFeatureCard index={1} {...features[0]} />
          <TrackAFeatureCard index={2} {...features[1]} />
          <TrackAFeatureCard index={3} {...features[2]} />
          <TrackAFeatureCard index={4} {...features[3]} />
        </div>

        {/* 引用块：引号在文字上边，与 summer camp 页面开头部分一致；流式布局，无绝对定位 */}
        <div className="w-full max-w-[1268px] mx-auto flex flex-col bg-gradient-to-r from-green-400/0 to-green-400/0 rounded-3xl overflow-hidden pt-6 pl-6 pr-8 pb-9 md:pt-6 md:pl-12 md:pr-8 md:pb-9">
          <div className="flex justify-start pb-0" aria-hidden>
            <span className="leading-none opacity-20 text-green-400 text-5xl md:text-6xl font-normal font-['Outfit']">&quot;</span>
          </div>
          <div className="flex flex-col items-center gap-5 min-w-0 flex-1 mt-0.5">
            <p className="w-full max-w-[1028px] text-center text-slate-700 text-xl font-normal font-['Outfit'] leading-7">
              This track is designed for students who are passionate about science, technology, engineering, and math. Through a series of hands-on projects, students will dive deep into advanced scientific concepts and apply them to solve real-world problems. They will learn to identify challenges, design and build prototypes, test their creations, and communicate their findings. Each project is an immersive experience that combines theory with practice, guided by our expert instructors.
            </p>
            <p className="text-slate-500 text-lg font-normal font-['Outfit'] leading-7">DeepBrain Academy Coaching Team</p>
          </div>
        </div>

        {/* Featured Projects 列表：Course Overview 按钮骑在白卡顶部，流式布局无绝对定位；max-w 略窄于上方案位 */}
        <div className="w-full max-w-[1180px] mx-auto pt-8">
          {/* Course Overview 按钮：负下外边距使下半部分压入白卡，阴影增强浮动感；z-10 仅用于层叠顺序 */}
          <div className="relative z-10 flex justify-start -mt-14 -mb-8 ml-4 md:ml-9">
            <div className="bg-rose-400 rounded-[33.19px] px-6 py-3.5 shadow-lg">
              <span className="text-white text-base md:text-lg font-normal font-['Outfit'] leading-8">{trackA.primaryCtaLabel}</span>
            </div>
          </div>
          {/* 白卡：pt 加大，为上方重叠的按钮留出视觉空间，内容从按钮下方开始 */}
          <div className="w-full bg-white rounded-3xl shadow-sm flex flex-col px-6 pt-14 pb-8 md:px-9 md:pt-16 md:pb-10 gap-8">
            {/* 区块头：图标 + 标题 + 副标题，flex 横排/列；图标使用 trackA/featured_projects.svg */}
            <div className="flex flex-col sm:flex-row sm:items-start gap-4">
              <div className="w-20 h-20 shrink-0 rounded-3xl bg-rose-400/10 flex items-center justify-center">
                <Image src="/summer_camp/trackA/featured_projects.svg" alt="" width={42} height={42} className="w-10 h-10 object-contain" />
              </div>
              <div className="flex flex-col gap-1 min-w-0">
                <h3 className="text-slate-700 text-xl md:text-2xl font-semibold font-['Outfit'] leading-tight">{featuredProjects.title}</h3>
                <p className="text-slate-500 text-base md:text-lg font-normal font-['Outfit'] leading-7">{featuredProjects.subtitle}</p>
              </div>
            </div>
            {/* 项目列表：流式排列，每张卡片由 FeaturedProjectCard 渲染 */}
            <div className="flex flex-col gap-5">
              {featuredProjects.projects.map((project) => (
                <FeaturedProjectCard key={project.title} project={project} />
              ))}
            </div>
          </div>
        </div>

        {/* 注册按钮：点击在新标签页打开报名表单；下方留白加大 */}
        <div className="w-full max-w-full flex justify-center pt-4 pb-12 md:pb-20">
          <a
            href="https://forms.gle/nrcBMPs8NCAn87pc8"
            target="_blank"
            rel="noopener noreferrer"
            className="min-w-[150px] h-12 md:h-14 pl-18 pr-6 py-3 md:pl-20 md:pr-7 md:py-3.5 rounded-3xl bg-rose-400 inline-flex flex-col justify-center items-center shadow-[0px_4.65px_6.97px_-4.65px_rgba(0,0,0,0.10)] shadow-[0px_11.62px_17.42px_-3.48px_rgba(0,0,0,0.10)] no-underline"
          >
            <div className="inline-flex items-center justify-center gap-6 md:gap-7">
              <span className="text-white text-lg md:text-xl font-bold font-['Outfit'] leading-7">{trackA.secondaryCtaLabel}</span>
              <Image src="/summer_camp/trackA/registernow.svg" alt="" width={24} height={24} className="shrink-0 w-6 h-6" aria-hidden />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
