/**
 * 文件用途：统计数据展示组件（全球教育页面）
 * 依赖关系：依赖 types/global-education.ts 中的 Stat 类型
 * 注意事项：展示3个统计卡片，布局与设计稿一致；数据由页面从 /data 传入
 */

import type { Stat } from '@/types/global-education';

interface StatsSectionProps {
  stats: Stat[];
}

export default function StatsSection({ stats }: StatsSectionProps) {
  return (
    <section id="stats" className="py-[75px] bg-[#FFFFFF]">
      <div className="mx-auto max-w-[1344px] px-9">
        {/* 与设计稿一致：slate-50 背景、圆角、引号与卡片均为文档流布局 */}
        <div className="flex min-h-96 overflow-hidden rounded-[39.83px] bg-[#F7F6FC] ">
          {/* 左上引号：文档流，占左侧窄列 */}
          <div
            className="flex shrink-0 items-start pt-10 pl-6 font-outfit text-6xl font-normal leading-[99.57px] text-zinc-800 opacity-10 md:pl-10"
            aria-hidden
          >
            &quot;
          </div>

          {/* 三张统计卡片：中间主区域 */}
          <div className="flex flex-1 flex-col items-stretch gap-8 px-6 py-10 md:flex-row md:gap-10 md:px-8 md:pt-[55px] md:pb-12">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="flex min-h-64 flex-1 flex-col gap-4 rounded-3xl bg-white px-6 pt-6 pb-5"
              >
                <div className="flex shrink-0 items-center justify-center ">
                  <p className="font-outfit text-center text-4xl font-semibold leading-tight text-violet-400">
                    {stat.value}
                  </p>
                </div>
                <div className="flex shrink-0 items-center justify-center">
                  <h4 className="font-outfit flex-1 text-center text-2xl font-semibold leading-8 text-zinc-800">
                    {stat.title}
                  </h4>
                </div>
                <div className="flex flex-1 items-start justify-center">
                  <p className="font-outfit w-full max-w-[15rem] text-center text-xl font-normal leading-8 text-slate-500">
                    {stat.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* 右下引号：文档流，占右侧窄列，底部对齐 */}
          <div
            className="flex shrink-0 flex-col justify-end pb-10 pr-4 md:pr-6"
            aria-hidden
          >
            <span className="origin-top-left rotate-180 font-outfit text-6xl font-normal leading-[99.57px] text-zinc-800 opacity-10 md: pb-12">
              &quot;
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
