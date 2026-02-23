/**
 * 文件用途：服务流程地图区块组件（全球教育页面）
 * 依赖关系：依赖 types/global-education.ts 中的 ServiceStep 类型
 * 注意事项：展示5个服务步骤的时间线布局和透明服务说明
 */

import type { ServiceStep } from '@/types/global-education';

interface ServiceMapSectionProps {
  serviceSteps: ServiceStep[];
}

/**
 * 服务流程地图组件
 * @param serviceSteps 服务步骤数据数组
 */
/** 单步卡片内容：左侧卡片右对齐/右侧卡片左对齐，文档流 */
function StepCard({
  step,
  align,
}: {
  step: ServiceStep;
  align: 'left' | 'right';
}) {
  const isLeft = align === 'left';
  return (
    <div
      className="w-full max-w-[1600px] min-w-0 rounded-[39.83px] p-5"
      style={{ backgroundColor: step.bgColor }}
    >
      <div
        className={`flex flex-col gap-1.5 ${isLeft ? 'items-end text-right' : 'items-start text-left'}`}
      >
        <div
          className={`flex items-center gap-7 ${isLeft ? 'flex-row-reverse' : 'flex-row'}`}
        >
          <div
            className="flex h-24 w-24 shrink-0 items-center justify-center rounded-3xl text-[24px]"
            style={{ backgroundColor: step.bgColor }}
          >
            {step.icon}
          </div>
          <div className="flex flex-col gap-1.5">
            <h3 className="font-outfit text-3xl font-semibold leading-tight text-slate-700">
              {step.title}
            </h3>
            <p
              className="font-outfit text-2xl font-normal leading-8"
              style={{ color: step.color }}
            >
              {step.duration}
            </p>
          </div>
        </div>
        <p className="font-outfit text-xl font-normal leading-8 text-slate-500">
          {step.description}
        </p>
        <div
          className={`grid grid-cols-2 gap-x-10 gap-y-3.5 ${isLeft ? 'justify-items-end' : 'justify-items-start'}`}
        >
          {step.items.map((item, itemIdx) => (
            <div
              key={itemIdx}
              className={`flex items-center gap-3.5 ${isLeft ? 'flex-row-reverse' : 'flex-row'}`}
            >
              <div
                className="h-2.5 w-2.5 shrink-0 rounded-full"
                style={{ backgroundColor: step.color }}
              />
              <span className="font-outfit text-xl font-normal leading-8 text-slate-700">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
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

        {/* Timeline：三块 [左列|数字圆+竖线列|右列]，竖线在圆之间分段连接 1→5，整体居中 */}
        <div className="mx-auto mt-20 flex w-full max-w-[1200px] justify-center gap-14">
          {/* 左列：左侧步骤渲染卡片，右侧步骤占位 */}
          <div className="flex flex-1 flex-col gap-20">
            {serviceSteps.map((step, idx) => (
              <div key={idx} className="flex min-h-64 min-w-0 items-center">
                {step.side === 'left' ? (
                  <StepCard step={step} align="left" />
                ) : (
                  <div className="min-h-64" />
                )}
              </div>
            ))}
          </div>
          {/* 数字圆列 + 竖线：每行 min-h-64 与左右对齐，圆下方为渐变线段，从 1 贯穿到 5 */}
          <div className="flex shrink-0 flex-col items-center">
            {serviceSteps.map((step, idx) => (
              <div
                key={idx}
                className={`flex min-h-64 flex-col items-center ${idx === 0 ? 'mt-12' : ''}`}
              >
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
                {/* 除最后一个圆外，下方竖线填满到下一圆，使整条线从 1 连到 5 */}
                {idx < serviceSteps.length - 1 && (
                  <div
                    className="min-h-[80px] w-1.5 flex-1 rounded-full opacity-20 bg-gradient-to-b from-violet-400 via-orange-300 to-violet-300"
                    aria-hidden
                  />
                )}
              </div>
            ))}
          </div>
          {/* 右列：右侧步骤渲染卡片，左侧步骤占位 */}
          <div className="flex flex-1 flex-col gap-20">
            {serviceSteps.map((step, idx) => (
              <div key={idx} className="flex min-h-64 min-w-0 items-center">
                {step.side === 'right' ? (
                  <StepCard step={step} align="right" />
                ) : (
                  <div className="min-h-64" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Transparent Service：白卡、圆角、阴影，三列文档流 */}
        <div className="mt-28">
          <div className="rounded-[39.83px] bg-white px-8 py-16 shadow-[0_10px_40px_rgba(0,0,0,0.08)] transition-shadow hover:shadow-[0_15px_50px_rgba(0,0,0,0.12)] md:px-16 lg:px-24">
            <div className="mb-10 flex flex-col items-center gap-4 text-center">
              <h3 className="font-outfit text-4xl font-semibold leading-[55.76px] text-slate-700">
                Transparent Service
              </h3>
              <p className="font-outfit max-w-3xl text-2xl font-normal leading-10 text-slate-500">
                {`Monitor progress, access documents, and review history any time via our "Growth Portfolio" system—transforming the application process into a transparent, guided journey.`}
              </p>
            </div>
            <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
              <div className="flex flex-col items-center gap-3 text-center">
                <span className="font-outfit text-5xl leading-[59.74px] text-slate-700">📊</span>
                <h4 className="font-outfit text-2xl font-normal leading-10 text-slate-700">
                  Progress Tracking
                </h4>
              </div>
              <div className="flex flex-col items-center gap-3 text-center">
                <span className="font-outfit text-5xl leading-[59.74px] text-slate-700">☁️</span>
                <h4 className="font-outfit text-2xl font-normal leading-10 text-slate-700">
                  Cloud Doc Storage
                </h4>
              </div>
              <div className="flex flex-col items-center gap-3 text-center">
                <span className="font-outfit text-5xl leading-[59.74px] text-slate-700">💬</span>
                <h4 className="font-outfit text-2xl font-normal leading-10 text-slate-700">
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

