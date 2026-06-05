/**
 * 文件用途：Learning Strategies 单张策略卡，标题、描述、图标均由 card 配置驱动
 * 依赖关系：依赖 types/learning_program 的 LearningStrategyCard、next/image；被 LearningStrategies 使用
 * 注意事项：布局与设计稿一致；图标来自 card.icon（或按 index 回退到默认四张），路径基于 public/learning_program/Learning_Strategies
 */

import Image from 'next/image';

import type { LearningStrategyCard } from '@/types/learning_program';

/** 默认四张图标文件名（当 card.icon 未配置时按 index 使用） */
const DEFAULT_ICON_NAMES = ['identify.svg', 'innovate.svg', 'prototype.svg', 'present.svg'] as const;

const ICON_BASE = '/learning_program/Learning_Strategies';

interface StrategyCardProps {
  /** 单张策略卡数据（标题、描述、可选图标）；全部可配置 */
  card: LearningStrategyCard;
  /** 当 card.icon 未配置时，用此 index 从默认图标中选取 */
  index: number;
}

/** 解析图标地址：支持完整路径或仅文件名 */
function getIconSrc(card: LearningStrategyCard, index: number): string {
  if (card.icon) {
    return card.icon.startsWith('/') ? card.icon : `${ICON_BASE}/${card.icon}`;
  }
  const name = DEFAULT_ICON_NAMES[Math.min(index, DEFAULT_ICON_NAMES.length - 1)];
  return `${ICON_BASE}/${name}`;
}

export default function StrategyCard({ card, index }: StrategyCardProps) {
  const iconSrc = getIconSrc(card, index);

  return (
    <div className="flex w-64 min-h-[20rem] flex-col items-center bg-[#FBF9F4] rounded-3xl px-6 pt-9 pb-8">
      {/* 图标容器：无绝对定位，flex 自然排列 */}
      <div className="w-20 h-20 shrink-0 rounded-3xl bg-rose-400/10 flex justify-center items-center">
        <div className="w10 h-10 relative overflow-hidden">
          <Image
            src={iconSrc}
            alt=""
            width={40}
            height={40}
            className="object-contain"
          />
        </div>
      </div>
      {/* 卡片标题：与首页 KeyPrograms 卡片标题字号一致 */}
      <h3 className="mt-5 w-full text-center text-slate-700 text-xl md:text-2xl font-semibold font-['Outfit'] leading-tight">
        {card.title}
      </h3>
      {/* 描述：居中，宽度由 max-w 限制 */}
      <p className="mt-4 w-full max-w-[12rem] text-center text-slate-500 text-base md:text-lg font-normal font-['Outfit'] leading-snug">
        {card.description}
      </p>
    </div>
  );
}
