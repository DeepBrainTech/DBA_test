/**
 * 文件用途：Track A 四宫格中的单张能力卡片（Theory+Practice / University Exposure / Expert Mentorship / Portfolio Building）
 * 依赖关系：依赖 next/image、types/summer_camp SummerCampTrackAFeature
 * 注意事项：响应式布局，小屏单列、md+ 双列由父级 Grid 控制；卡片内使用弹性布局适配不同宽度
 */

import Image from 'next/image';
import type { SummerCampTrackAFeature } from '@/types/summer_camp';

export interface TrackAFeatureCardProps extends SummerCampTrackAFeature {
  /** 卡片序号（1–4），用于右下角数字与图标路径 tracka-{index}.svg */
  index: number;
}

export default function TrackAFeatureCard({
  index,
  title,
  description,
  tag,
}: TrackAFeatureCardProps) {
  const iconSrc = `/summer_camp/trackA/tracka-${index}.svg`;
  return (
    <div className="w-full min-h-0 bg-white rounded-3xl overflow-hidden relative flex flex-col p-5 sm:p-6">
      {/* 装饰用模糊圆（绝对定位，不参与流式布局） */}
      <div className="w-24 h-24 sm:w-36 sm:h-36 right-0 top-0 absolute opacity-5 bg-rose-400 rounded-full blur-2xl pointer-events-none" aria-hidden />
      {/* 图标区 */}
      <div className="w-14 h-14 sm:w-16 sm:h-16 shrink-0 bg-rose-400/10 rounded-xl inline-flex justify-center items-center">
        <div className="w-7 h-7 sm:w-8 sm:h-8 relative">
          <Image
            src={iconSrc}
            width={32}
            height={32}
            alt={title}
            className="w-full h-full object-contain"
          />
        </div>
      </div>
      {/* 标题 + 描述（高度由内容决定，不拉伸） */}
      <div className="mt-3 sm:mt-3 flex flex-col gap-3">
        <h3 className="text-slate-700 text-lg sm:text-xl md:text-2xl font-semibold font-['Outfit'] leading-tight">
          {title}
        </h3>
        <p className="text-slate-500 text-sm sm:text-base md:text-lg font-normal font-['Outfit'] leading-snug">
          {description}
        </p>
      </div>
      {/* 底部行：左侧标签 + 右侧序号，与上方内容间距 */}
      <div className="mt-6 flex items-end justify-between gap-3 shrink-0">
        <span className="inline-flex h-9 sm:h-10 items-center px-4 sm:px-[18px] bg-rose-400/10 rounded-xl text-rose-400 text-sm sm:text-base md:text-lg font-normal font-['Outfit'] leading-6">
          {tag}
        </span>
        <div className="w-10 h-10 sm:w-12 sm:h-12 opacity-30 rounded-xl outline outline-2 outline-offset-[-1.86px] outline-rose-400 inline-flex justify-center items-center shrink-0">
          <span className="text-rose-400 text-lg sm:text-xl font-normal font-['Outfit'] leading-8">
            {index}
          </span>
        </div>
      </div>
    </div>
  );
}
