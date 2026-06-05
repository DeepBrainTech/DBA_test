/**
 * 文件用途：Courses Learning Strategies 单张策略卡
 * 依赖关系：依赖 types/courses 的 CoursesLearningStrategyCard；图标来自 public/courses/Learning_Strategies
 */

import Image from 'next/image';

import type { CoursesLearningStrategyCard } from '@/types/courses';

const DEFAULT_ICON_NAMES = ['identify.svg', 'innovate.svg', 'prototype.svg', 'present.svg'] as const;
const ICON_BASE = '/courses/Learning_Strategies';

interface StrategyCardProps {
  card: CoursesLearningStrategyCard;
  index: number;
}

function getIconSrc(card: CoursesLearningStrategyCard, index: number): string {
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
      <h3 className="mt-5 w-full text-center text-slate-700 text-xl md:text-2xl font-semibold font-['Outfit'] leading-tight">
        {card.title}
      </h3>
      <p className="mt-4 w-full max-w-[12rem] text-center text-slate-500 text-base md:text-lg font-normal font-['Outfit'] leading-snug">
        {card.description}
      </p>
    </div>
  );
}
