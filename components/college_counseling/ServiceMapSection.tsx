/**
 * 文件用途：服务流程地图区块组件（升学辅导页面）
 * 依赖关系：@/components/college_counseling/RoadmapStepCard；types/college_counseling.ts；图标在 public/college_counseling/roadmap/1-5、t1-t3
 * 注意事项：展示5个服务步骤的时间线布局和透明服务说明
 */

import Image from 'next/image';
import type { ServiceStep } from '@/types/college_counseling';
import { RoadmapStepCard } from '@/components/college_counseling/RoadmapStepCard';

interface ServiceMapSectionProps {
  serviceSteps: ServiceStep[];
}

export default function ServiceMapSection({ serviceSteps }: ServiceMapSectionProps) {
  return (
    <section className="flex flex-col gap-12 sm:gap-16 lg:gap-28 bg-stone-50 px-4 sm:px-6 lg:px-14 pt-12 sm:pt-20 lg:pt-32 pb-10 sm:pb-12 lg:pb-16">
      <div className="mx-auto w-full max-w-[1280px]">
        {/* Header */}
        <div className="flex flex-col items-center gap-4 sm:gap-6 text-center">
          <div className="inline-flex items-center gap-2 sm:gap-4 rounded-2xl sm:rounded-[33px] bg-white px-4 sm:px-8 py-2.5 sm:py-4">
            <span className="font-outfit text-2xl sm:text-4xl text-slate-700">🗺️</span>
            <span className="font-outfit text-base sm:text-lg md:text-xl font-normal text-violet-400">
              Your Roadmap
            </span>

          </div>
          <h2 className="font-outfit text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-slate-700">
            From Potential to Extraordinary
          </h2>
          <p className="font-outfit max-w-3xl text-sm sm:text-base md:text-lg font-normal leading-relaxed text-slate-500">
            A complete, systematic, and transparent service process.
          </p>
        </div>

        {/* Timeline：桌面端左右交替，移动端垂直堆叠 */}
        <div className="relative mx-auto mt-10 sm:mt-14 lg:mt-20 w-full max-w-[1280px]">
          
          {/* 移动端垂直时间线 */}
          <div className="lg:hidden relative">
            {/* 垂直线 */}
            <div
              className="absolute left-5 sm:left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-violet-400 via-orange-300 to-violet-300 opacity-30"
              aria-hidden
            />
            <div className="flex flex-col gap-6 sm:gap-8">
              {serviceSteps.map((step, idx) => (
                <div key={idx} className="flex items-start gap-4 sm:gap-6">
                  {/* 数字圆 */}
                  <div
                    className="relative z-10 flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full text-lg sm:text-xl font-semibold text-white shadow-lg"
                    style={{ backgroundColor: step.color }}
                  >
                    {step.step}
                  </div>
                  {/* 卡片 */}
                  <div className="flex-1 min-w-0">
                    <RoadmapStepCard step={step} align="left" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 桌面端左右交替时间线 */}
          <div className="hidden lg:block">
            {/* 贯穿竖线 */}
            <div
              className="pointer-events-none absolute left-1/2 w-1.5 -translate-x-1/2 rounded-full bg-gradient-to-b from-violet-400 via-orange-300 to-violet-300 opacity-20"
              style={{
                top: 'calc(8rem + 3.125rem)',
                bottom: 'calc(8rem + 3.125rem)',
              }}
              aria-hidden
            />
            <div className="relative z-10 flex flex-col gap-16 xl:gap-20">
              {serviceSteps.map((step, idx) => (
                <div key={idx} className="flex min-h-48 xl:min-h-64 w-full items-center justify-center gap-6 xl:gap-14">
                  {/* 左列 */}
                  <div className="flex flex-1 max-w-[500px] xl:max-w-[650px] justify-end">
                    {step.side === 'left' ? (
                      <RoadmapStepCard step={step} align="left" />
                    ) : (
                      <div />
                    )}
                  </div>

                  {/* 中间数字圆 */}
                  <div className="relative z-10 flex shrink-0 items-center justify-center">
                    <div
                      className="flex h-16 w-16 xl:h-25 xl:w-25 shrink-0 items-center justify-center rounded-full text-3xl xl:text-4xl font-normal text-white shadow-lg"
                      style={{
                        boxShadow: '0px 13.28px 16.59px -9.96px rgba(0,0,0,0.1), 0px 33.19px 41.49px -8.3px rgba(0,0,0,0.1)',
                        backgroundColor: step.color,
                      }}
                    >
                      {step.step}
                    </div>
                  </div>

                  {/* 右列 */}
                  <div className="flex flex-1 max-w-[600px] xl:max-w-[750px] justify-start">
                    {step.side === 'right' ? (
                      <RoadmapStepCard step={step} align="right" />
                    ) : (
                      <div />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Transparent Service */}
        <div className="mt-12 sm:mt-16 lg:mt-28">
          <div className="rounded-2xl lg:rounded-[39.83px] bg-white px-4 sm:px-8 lg:px-16 xl:px-24 pt-8 sm:pt-12 lg:pt-16 pb-6 sm:pb-8 shadow-[0_10px_40px_rgba(0,0,0,0.08)] transition-shadow hover:shadow-[0_15px_50px_rgba(0,0,0,0.12)]">
            <div className="mb-6 sm:mb-8 lg:mb-10 flex flex-col items-center gap-3 sm:gap-4 text-center">
              <h3 className="font-outfit text-xl sm:text-2xl md:text-3xl font-semibold leading-tight text-slate-700">
                Transparent Service
              </h3>
              <p className="font-outfit max-w-[61rem] text-sm sm:text-base md:text-lg font-normal leading-relaxed text-slate-500">
                {`Monitor progress, access documents, and review history any time via our "Growth Portfolio" system—transforming the application process into a transparent, guided journey.`}
              </p>
            </div>
            {/* 三列特性 */}
            <div className="mt-6 sm:mt-8 lg:mt-12 flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 sm:gap-8 lg:gap-18">
              <div className="flex flex-col items-center gap-1 text-center shrink-0">
                <div className="relative h-6 w-6 sm:h-8 sm:w-8 shrink-0">
                  <Image src="/college_counseling/roadmap/t1.png" alt="" width={40} height={40} className="object-contain" />
                </div>
                <h4 className="font-outfit text-sm sm:text-base lg:text-lg font-normal text-slate-700">
                  Progress Tracking
                </h4>
              </div>
              <div className="flex flex-col items-center gap-1 text-center shrink-0">
                <div className="relative h-6 w-6 sm:h-8 sm:w-8 shrink-0">
                  <Image src="/college_counseling/roadmap/t2.png" alt="" width={40} height={40} className="object-contain" />
                </div>
                <h4 className="font-outfit text-sm sm:text-base lg:text-lg font-normal text-slate-700">
                  Cloud Doc Storage
                </h4>
              </div>
              <div className="flex flex-col items-center gap-1 text-center shrink-0">
                <div className="relative h-6 w-6 sm:h-8 sm:w-8 shrink-0">
                  <Image src="/college_counseling/roadmap/t3.png" alt="" width={40} height={40} className="object-contain" />
                </div>
                <h4 className="font-outfit text-sm sm:text-base lg:text-lg font-normal text-slate-700">
                  24/7 Chat
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

