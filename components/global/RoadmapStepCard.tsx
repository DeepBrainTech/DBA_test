/**
 * 文件用途：Roadmap 单步卡片（可复用），支持左/右对齐与图标大小、颜色配置
 * 依赖：next/image；types/global-education.ts 的 ServiceStep；图标在 public/global/roadmap/1-5.png
 */

import Image from 'next/image';
import type { ServiceStep } from '@/types/global-education';

/** 卡片内容对齐方式：左对齐（图标在左） / 右对齐（图标在右） */
export type StepCardAlign = 'left' | 'right';

export interface RoadmapStepCardProps {
  /** 步骤数据 */
  step: ServiceStep;
  /** 对齐：left 为图标在左、文字左对齐；right 为图标在右、文字右对齐 */
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
  // 图标容器色：优先用 iconTint，否则用步骤主题色 + 约 12% 透明度（#RRGGBB -> #RRGGBB20）
  const iconBg =
    iconTint ?? (step.color.startsWith('#') && step.color.length === 7 ? `${step.color}20` : 'rgba(139,92,246,0.2)');
  const iconBoxStyle = { backgroundColor: iconBg };

  return (
    <div
      className="min-w-[480px] w-full max-w-[1600px] rounded-[39.83px] overflow-hidden px-15 py-8"
      style={{ background: step.bgColor }}
    >
      <div
        className={`flex flex-col gap-1.5 ${isLeft ? 'items-end text-right' : 'items-start text-left'}`}
      >
        <div
          className={`flex items-center gap-7 ${isLeft ? 'flex-row-reverse' : 'flex-row'}`}
        >
          {/* 图标外层：可调大小与颜色（默认随 step.color 变化） */}
          <div
            className="shrink-0 rounded-3xl inline-flex justify-center items-center"
            style={{
              ...iconBoxStyle,
              width: iconBoxSize,
              height: iconBoxSize,
            }}
          >
            <div className="relative" style={{ width: iconImageSize, height: iconImageSize }}>
              <Image
                src={`/global/roadmap/${step.step}.png`}
                alt=""
                width={iconImageSize}
                height={iconImageSize}
                className="object-contain"
              />
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <h3 className="font-outfit text-3xl font-semibold leading-tight text-slate-700 whitespace-nowrap">
              {step.title}
            </h3>
            <p
              className="font-outfit text-2xl font-normal leading-8 whitespace-nowrap"
              style={{ color: step.color }}
            >
              {step.duration}
            </p>
          </div>
        </div>
        <p className="font-outfit text-xl font-normal leading-8 text-slate-500 whitespace-nowrap">
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
              <span className="font-outfit text-xl font-normal leading-8 text-slate-700 whitespace-nowrap">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
