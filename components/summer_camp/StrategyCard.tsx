/**
 * 文件用途：Learning Strategies 单张策略卡，标题、描述、图标均由 card 配置驱动
 * 依赖关系：依赖 types/summer_camp 的 LearningStrategyCard、next/image；被 LearningStrategies 使用
 * 注意事项：布局与设计稿一致；图标来自 card.icon（或按 index 回退到默认四张），路径基于 public/summer_camp/Learning_Strategies
 */

import Image from 'next/image';

import type { LearningStrategyCard } from '@/types/summer_camp';

/** 默认四张图标文件名（当 card.icon 未配置时按 index 使用） */
const DEFAULT_ICON_NAMES = ['identify.svg', 'innovate.svg', 'prototype.svg', 'present.svg'] as const;

const ICON_BASE = '/summer_camp/Learning_Strategies';

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
    <div className="w-72 h-[22rem] relative bg-[#FBF9F4] rounded-3xl">
      <div className="w-24 h-24 left-[98.27px] top-[37.17px] absolute bg-rose-400/10 rounded-3xl inline-flex justify-center items-center">
        <div className="w-10 h-10 relative overflow-hidden">
          <Image
            src={iconSrc}
            alt=""
            width={40}
            height={40}
            className="object-contain"
          />
        </div>
      </div>
      <div className="w-52 h-7 left-[37.17px] top-[157.98px] absolute inline-flex justify-start items-start">
        <div className="flex-1 text-center justify-start text-slate-700 text-3xl font-semibold font-['Outfit'] leading-7">
          {card.title}
        </div>
      </div>
      <div className="w-52 h-24 left-[37.17px] top-[202.19px] absolute">
        <div className="w-52 left-[0.83px] top-[-0.19px] absolute text-center justify-start text-slate-500 text-xl font-normal font-['Outfit'] leading-7">
          {card.description}
        </div>
      </div>
    </div>
  );
}
