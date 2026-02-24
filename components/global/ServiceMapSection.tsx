/**
 * 文件用途：服务流程地图区块组件（全球教育页面）
 * 依赖关系：@/components/global/RoadmapStepCard；types/global-education.ts；图标在 public/global/roadmap/1-5、t1-t3
 * 注意事项：展示5个服务步骤的时间线布局和透明服务说明
 */

import Image from 'next/image';
import type { ServiceStep } from '@/types/global-education';
import { RoadmapStepCard } from '@/components/global/RoadmapStepCard';

interface ServiceMapSectionProps {
  serviceSteps: ServiceStep[];
}

export default function ServiceMapSection({ serviceSteps }: ServiceMapSectionProps) {
  return (
    <section className="flex flex-col gap-28 bg-stone-50 px-9 pt-32 pb-16 md:px-14">
      <div className="mx-auto w-full max-w-[1200px]">
        {/* Header：与设计稿一致 白底 pill + 主标题 5xl + 副标题 2xl */}
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="inline-flex items-center gap-4 rounded-[33px] bg-white px-8 py-4">
            <span className="font-outfit text-4xl leading-[53.1px] text-slate-700">🗺️</span>
            <span className="font-outfit text-2xl font-normal leading-10 text-violet-400">
              Your Roadmap
            </span>
          </div>
          <h2 className="font-outfit text-4xl font-bold leading-tight text-slate-700 md:text-5xl md:leading-[69px]">
            From Potential to Extraordinary
          </h2>
          <p className="font-outfit max-w-3xl text-2xl font-normal leading-10 text-slate-500">
            A complete, systematic, and transparent service process.
          </p>
        </div>

        {/* Timeline：按行布局，竖线从 1 贯穿到 5，圆与对应卡片垂直居中 */}
        <div className="relative mx-auto mt-20 w-full max-w-[1200px]">
          {/* 贯穿竖线：从圆 1 的底部到圆 5 的上边（min-h-64 行中心 ± 圆半径 h-25/2≈50px） */}
          <div
            className="pointer-events-none absolute left-1/2 w-1.5 -translate-x-1/2 rounded-full bg-gradient-to-b from-violet-400 via-orange-300 to-violet-300 opacity-20"
            style={{
              top: 'calc(8rem + 3.125rem)',   /* 第一行中心(128px) + 圆半径(50px) */
              bottom: 'calc(8rem + 3.125rem)', /* 距底部同值，对应第五行中心之上 */
            }}
            aria-hidden
          />
          <div className="relative z-10 flex flex-col gap-20">
            {serviceSteps.map((step, idx) => (
              <div key={idx} className="flex min-h-64 w-full items-center justify-center gap-14">
                {/* 左列：该步在左侧时渲染卡片 */}
                <div className="flex min-w-[650px] max-w-[750px] flex-1 justify-end">
                  {step.side === 'left' ? (
                    <RoadmapStepCard step={step} align="left" />
                  ) : (
                    <div />
                  )}
                </div>

                {/* 中间：数字圆（与卡片垂直居中，覆盖在竖线上方） */}
                <div className="relative z-10 flex shrink-0 items-center justify-center">
                  <div
                    className="flex h-25 w-25 shrink-0 items-center justify-center rounded-[66px] text-5xl font-semibold text-white shadow-lg"
                    style={{
                      boxShadow:
                        '0px 13.28px 16.59px -9.96px rgba(0,0,0,0.1), 0px 33.19px 41.49px -8.3px rgba(0,0,0,0.1)',
                      backgroundColor: step.color,
                    }}
                  >
                    {step.step}
                  </div>
                </div>

                {/* 右列：该步在右侧时渲染卡片 */}
                <div className="flex min-w-[650px] max-w-[750px] flex-1 justify-start">
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

        {/* Transparent Service：白卡、圆角、阴影，三列文档流 */}
        <div className="mt-28">
          <div className="rounded-[39.83px] bg-white px-8 pt-16 pb-8 shadow-[0_10px_40px_rgba(0,0,0,0.08)] transition-shadow hover:shadow-[0_15px_50px_rgba(0,0,0,0.12)] md:px-16 lg:px-24">
            <div className="mb-10 flex flex-col items-center gap-4 text-center">
              <h3 className="font-outfit text-4xl font-semibold leading-[55.76px] text-slate-700">
                Transparent Service
              </h3>
              <p className="font-outfit max-w-[61rem] text-2xl font-normal leading-10 text-slate-500">
                {`Monitor progress, access documents, and review history any time via our "Growth Portfolio" system—transforming the application process into a transparent, guided journey.`}
              </p>
            </div>
            {/* 三列按内容宽度排布，间距由 gap 控制（改 md:gap-* 即可，如 md:gap-0 / md:gap-4 / md:gap-6） */}
            <div className="mt-12 flex flex-col md:flex-row flex-wrap justify-center items-center md:gap-18">
              {/* 图标与下方文字的间距：下面三个 div 的 gap-0 改为 gap-1 / gap-2 / gap-3 等 */}
              <div className="flex flex-col items-center gap-1 text-center shrink-0">
                <div className="relative h-8 w-8 shrink-0">
                  <Image src="/global/roadmap/t1.png" alt="" width={40} height={40} className="object-contain" />
                </div>
                <h4 className="font-outfit text-1xl font-normal leading-10 text-slate-700">
                  Progress Tracking
                </h4>
              </div>
              <div className="flex flex-col items-center gap-1 text-center shrink-0">
                <div className="relative h-8 w-8 shrink-0">
                  <Image src="/global/roadmap/t2.png" alt="" width={40} height={40} className="object-contain" />
                </div>
                <h4 className="font-outfit text-1xl font-normal leading-10 text-slate-700">
                  Cloud Doc Storage
                </h4>
              </div>
              <div className="flex flex-col items-center gap-1 text-center shrink-0">
                <div className="relative h-8 w-8 shrink-0">
                  <Image src="/global/roadmap/t3.png" alt="" width={40} height={40} className="object-contain" />
                </div>
                <h4 className="font-outfit text-1xl font-normal leading-10 text-slate-700">
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

