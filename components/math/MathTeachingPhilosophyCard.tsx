/**
 * 文件用途：Math 教学理念单张卡片，含图标、标题、描述、标签与右下角序号标识
 * 依赖关系：next/image；图标来自 public/math/Teaching_Features，由 MathTeachingPhilosophy 传入 data
 * 注意事项：右下角序号标识为圆角方框、outline 描边、opacity-30，颜色随 tagText
 */

import Image from 'next/image';

import type { MathTeachingPhilosophyCardData } from '@/types/math';

export type MathTeachingPhilosophyCardProps = MathTeachingPhilosophyCardData;

export default function MathTeachingPhilosophyCard({
  number,
  iconSrc,
  iconBg,
  title,
  description,
  tags,
  tagBg,
  tagText,
}: MathTeachingPhilosophyCardProps) {
  return (
    <div className="relative flex h-full flex-col rounded-2xl bg-[#FBF9F4] p-8">
      <div className={`relative size-15 shrink-0 ${iconBg} rounded-xl flex items-center justify-center mb-5 overflow-hidden`}>
        <Image src={iconSrc} alt="" fill className="object-contain p-2" sizes="3rem" />
      </div>
      <h3 className="font-outfit text-slate-700 text-2xl font-semibold mb-3 shrink-0">{title}</h3>
      {/* 描述区占满剩余空间，把标签压到卡片中下部，避免标签下方大片留白显得“靠上” */}
      <p className="font-outfit text-slate-500 text-1xl font-normal leading-9 mb-5 max-w-prose flex-1 min-h-0">{description}</p>
      <div className="flex flex-wrap gap-2 shrink-0">
        {tags.map((tag, i) => (
          <span key={i} className={`font-outfit px-3 py-1.5 ${tagBg} ${tagText} rounded-full text-1xl font-normal leading-6`}>
            {tag}
          </span>
        ))}
      </div>
      {/* 右下角序号标识：圆角方框、outline、半透明、数字 Outfit，尺寸由内容与内边距撑开 */}
      <div
        className={`absolute bottom-6 right-6 opacity-30 rounded-2xl outline outline-2 -outline-offset-2 outline-current inline-flex justify-center items-center min-w-13 min-h-13 aspect-square ${tagText}`}
        aria-hidden
      >
        <span className="font-outfit text-2xl font-normal leading-10">{number}</span>
      </div>
    </div>
  );
}
