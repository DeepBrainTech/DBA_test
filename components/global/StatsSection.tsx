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
    <section id="stats" className="py-10 sm:py-12 lg:py-[75px] bg-[#FFFFFF]">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-9">
        {/* 移动端：无引号装饰，直接显示卡片 */}
        <div className="md:hidden flex flex-col gap-4">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="flex flex-col gap-3 rounded-2xl bg-[#F7F6FC] px-5 py-6"
            >
              <p className="font-outfit text-center text-2xl sm:text-3xl font-semibold text-violet-400">
                {stat.value}
              </p>
              <h4 className="font-outfit text-center text-lg sm:text-xl font-semibold text-zinc-800">
                {stat.title}
              </h4>
              <p className="font-outfit text-center text-sm sm:text-base text-slate-500">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* 桌面端：保留原有设计 */}
        <div className="hidden md:flex min-h-96 overflow-hidden rounded-2xl lg:rounded-[39.83px] bg-[#F7F6FC]">
          {/* 左上引号 */}
          <div
            className="flex shrink-0 items-start pt-6 lg:pt-10 pl-4 lg:pl-10 font-outfit text-4xl lg:text-6xl font-normal text-zinc-800 opacity-10"
            aria-hidden
          >
            &quot;
          </div>

          {/* 三张统计卡片 */}
          <div className="flex flex-1 flex-row items-stretch gap-6 lg:gap-10 px-4 lg:px-8 py-8 lg:pt-[55px] lg:pb-12">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="flex min-h-48 lg:min-h-64 flex-1 flex-col gap-3 lg:gap-4 rounded-2xl lg:rounded-3xl bg-white px-4 lg:px-6 pt-5 lg:pt-6 pb-4 lg:pb-5"
              >
                <div className="flex shrink-0 items-center justify-center">
                  <p className="font-outfit text-center text-2xl lg:text-4xl font-semibold text-violet-400">
                    {stat.value}
                  </p>
                </div>
                <div className="flex shrink-0 items-center justify-center">
                  <h4 className="font-outfit flex-1 text-center text-lg lg:text-2xl font-semibold text-zinc-800">
                    {stat.title}
                  </h4>
                </div>
                <div className="flex flex-1 items-start justify-center">
                  <p className="font-outfit w-full max-w-[15rem] text-center text-base lg:text-xl font-normal text-slate-500">
                    {stat.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* 右下引号 */}
          <div
            className="flex shrink-0 flex-col justify-end pb-6 lg:pb-10 pr-4 lg:pr-6"
            aria-hidden
          >
            <span className="origin-top-left rotate-180 font-outfit text-4xl lg:text-6xl font-normal text-zinc-800 opacity-10 lg:pb-12">
              &quot;
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
