/**
 * 文件用途：Roadmap 单步卡片（可复用），支持左/右对齐与图标大小、颜色配置
 * 依赖：next/image；types/college_counseling.ts 的 ServiceStep；图标在 public/college_counseling/roadmap/1-5.png
 * 移动端响应式：去除 min-width 限制，允许内容换行
 */

import Image from 'next/image';
import type { ServiceStep } from '@/types/college_counseling';

/** 卡片内容对齐方式：左对齐（图标在左） / 右对齐（图标在右） */
export type StepCardAlign = 'left' | 'right';

export interface RoadmapStepCardProps {
  /** 步骤数据 */
  step: ServiceStep;
  /** 对齐：left 为图标在左、文字左对齐；right 为图标在右、文字右对齐（移动端统一左对齐） */
  align: StepCardAlign;
  /** 图标外框边长（px），默认 80 */
  iconBoxSize?: number;
  /** 图标图片边长（px），默认 48 */
  iconImageSize?: number;
  /** 图标外框背景色（含透明度），如 '#9B8FD820'；不传则用默认浅紫 bg-violet-400/20 */
  iconTint?: string;
}

/**
 * Roadmap 单步卡片：标题、时长、描述、列表项 + 可调图标
 */
export function RoadmapStepCard({
  step,
  align,
  iconBoxSize = 80,
  iconImageSize = 48,
  iconTint,
}: RoadmapStepCardProps) {
  const isLeft = align === 'left';
  const iconBg =
    iconTint ?? (step.color.startsWith('#') && step.color.length === 7 ? `${step.color}20` : 'rgba(139,92,246,0.2)');
  const iconBoxStyle = { backgroundColor: iconBg };

  return (
    <div
      className="w-full max-w-[1280px] rounded-2xl lg:rounded-[39.83px] overflow-hidden px-4 sm:px-8 lg:px-15 py-5 sm:py-6 lg:py-8"
      style={{ background: step.bgColor }}
    >
      {/* 移动端始终左对齐，桌面端根据 align 参数决定 */}
      <div
        className={`flex flex-col gap-1.5 items-start text-left lg:${isLeft ? 'items-end' : 'items-start'} lg:${isLeft ? 'text-right' : 'text-left'}`}
      >
        <div
          className={`flex items-center gap-3 sm:gap-5 lg:gap-7 flex-row lg:${isLeft ? 'flex-row-reverse' : 'flex-row'}`}
        >
          {/* 图标外层 */}
          <div
            className="shrink-0 rounded-xl sm:rounded-2xl lg:rounded-3xl inline-flex justify-center items-center w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20"
            style={{
              ...iconBoxStyle,
            }}
          >
            <div className="relative w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12">
              <Image
                src={`/college_counseling/roadmap/${step.step}.png`}
                alt=""
                width={iconImageSize}
                height={iconImageSize}
                className="object-contain w-full h-full"
              />
            </div>
          </div>
          <div className="flex flex-col gap-0.5 sm:gap-1 lg:gap-1.5">
            <h3 className="font-outfit text-lg sm:text-xl lg:text-3xl font-semibold leading-tight text-slate-700">
              {step.title}
            </h3>
            <p
              className="font-outfit text-sm sm:text-lg lg:text-2xl font-normal leading-snug lg:leading-8"
              style={{ color: step.color }}
            >
              {step.duration}
            </p>
          </div>
        </div>
        {/* 描述 */}
        <p className="font-outfit text-sm sm:text-base lg:text-xl font-normal leading-relaxed lg:leading-8 text-slate-500 my-2 sm:my-3">
          {step.description}
        </p>
        {/* 列表项：移动端单列，桌面端双列 */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 gap-x-4 sm:gap-x-6 lg:gap-x-10 gap-y-2 sm:gap-y-3 lg:gap-y-3.5 justify-items-start lg:${isLeft ? 'justify-items-end' : 'justify-items-start'}`}
        >
          {step.items.map((item, itemIdx) => (
            <div
              key={itemIdx}
              className={`flex items-center gap-2 sm:gap-3 lg:gap-3.5 flex-row lg:${isLeft ? 'flex-row-reverse' : 'flex-row'}`}
            >
              <div
                className="h-2 w-2 sm:h-2.5 sm:w-2.5 shrink-0 rounded-full"
                style={{ backgroundColor: step.color }}
              />
              <span className="font-outfit text-sm sm:text-base lg:text-xl font-normal leading-relaxed lg:leading-8 text-slate-700">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
