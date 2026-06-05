/**
 * 文件用途：Featured Projects 列表中的单张项目卡片（左图右文，流式布局无绝对定位）
 * 依赖关系：next/image、types/learning_program LearningProgramFeaturedProject
 * 注意事项：图片区仅用 relative 供 Next Image fill 使用，卡片内无 absolute 定位
 */

import Image from 'next/image';
import type { LearningProgramFeaturedProject } from '@/types/learning_program';

/** 将 "Project 1 Spiral Wonders" 拆为 label "Project 1" 与 name "Spiral Wonders" */
function parseProjectTitle(title: string): { label: string; name: string } {
  const m = title.match(/^(Project \d+)\s+(.*)$/);
  return m ? { label: m[1], name: m[2].trim() } : { label: '', name: title };
}

export interface FeaturedProjectCardProps {
  /** 项目数据 */
  project: LearningProgramFeaturedProject;
}

export default function FeaturedProjectCard({ project }: FeaturedProjectCardProps) {
  const { label, name } = parseProjectTitle(project.title);
  return (
    <div className="flex flex-col sm:flex-row overflow-hidden rounded-[20px] bg-rose-400/5">
      {/* 左侧图片区：贴齐卡片左边缘，固定宽度，sm 下与卡片同高；relative 仅供 Image fill 定位用，无 absolute */}
      <div className="relative w-full h-52 sm:w-52 sm:min-h-[208px] shrink-0 sm:self-stretch overflow-hidden rounded-t-[20px] sm:rounded-t-none sm:rounded-l-[20px]">
        <Image
          className="object-cover rounded-t-[20px] sm:rounded-t-none sm:rounded-l-[20px] sm:rounded-r-none"
          src={project.image}
          fill
          sizes="208px"
          alt={name}
        />
      </div>
      {/* 内容区：与左侧图片的间距由 pl 控制，改 sm:pl-* 即可调大/调小 */}
      <div className="flex flex-col gap-4 min-w-0 flex-1 p-4 sm:py-6 sm:pr-5 sm:pl-10">
        <div className="flex flex-wrap items-baseline gap-1">
          <span className="text-rose-400 text-base font-normal font-['Outfit'] leading-7">{label}</span>
          <span className="text-slate-700 text-lg md:text-xl font-semibold font-['Outfit'] leading-7">{name}</span>
        </div>
        <ul className="flex flex-col gap-2.5 list-none">
          {project.bullets.map((bullet, i) => (
            <li key={i} className="flex gap-2 items-start">
              <span className="text-rose-400 text-base font-normal font-['Outfit'] leading-5 shrink-0">▸</span>
              <span className="text-slate-500 text-base md:text-lg font-normal font-['Outfit'] leading-7">{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
