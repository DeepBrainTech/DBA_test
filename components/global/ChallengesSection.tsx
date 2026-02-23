/**
 * 文件用途：挑战区块组件（全球教育页面）
 * 依赖关系：依赖 types/global-education.ts 中的 Challenge 类型和 Next.js Image 组件
 * 注意事项：展示4个挑战卡片和一个总结区域
 */

import Image from 'next/image';
import type { Challenge } from '@/types/global-education';

interface ChallengesSectionProps {
  challenges: Challenge[];
}

/**
 * 挑战区块组件
 * @param challenges 挑战数据数组
 */
export default function ChallengesSection({ challenges }: ChallengesSectionProps) {
  return (
    <section id="challenges" className="pt-[80px] pb-[133px] bg-white scroll-mt-[133px]">
      <div className="max-w-[1344px] mx-auto px-9">

        <div className="text-center mb-[80px]">
          <div className="inline-flex items-center gap-3 rounded-3xl bg-[#F3F0FF] px-5 py-3.5 mb-[27px]">
            <span className="text-2xl" aria-hidden>🤔</span>
            <span className="text-2xl text-[#9B8FD8] font-normal leading-10">Common Challenges</span>
          </div>
          <h2 className="text-5xl font-bold text-[#2C3E50] mb-[27px] leading-[1.2]">
            Facing these hurdles?
          </h2>
          <p className="text-2xl text-[#7C8B99]">
            {`You aren't alone in the application process.`}
          </p>
        </div>

        {/* Challenges Grid：与设计稿一致 bg-stone-50、圆角 39.83、图标 w-28、标题 text-4xl、列表圆点 w-2.5，文档流布局 */}
        <div className="grid grid-cols-2 gap-[40px]">
          {challenges.map((challenge, idx) => (
            <div key={idx} className="relative overflow-hidden rounded-3xl p-8 hover:shadow-lg transition bg-[#FBF9F4]">
              <div className="relative flex flex-col gap-5">
                {/* 图标在上方，标题在图标下方 */}
                <div
                  className="flex h-20 w-20 shrink-0 items-center justify-center rounded-3xl"
                  style={{ backgroundColor: challenge.iconBg }}
                >
                  <Image
                    src={challenge.icon}
                    alt={challenge.title}
                    width={40}
                    height={40}
                    className="h-10 w-10 object-contain"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-outfit text-3xl font-semibold leading-[55.76px] text-slate-700">
                    {challenge.title}
                  </h3>
                  <p className="font-outfit text-xl font-normal leading-10 text-slate-500 whitespace-nowrap">
                    {challenge.description}
                  </p>
                </div>

                {/* 列表：圆点 w-2.5 h-2.5 + 文案 text-2xl，文档流 */}
                <div className="flex flex-col gap-2.5">
                  {challenge.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="flex items-start gap-3">
                      <div
                        className="mt-[13px] h-2.5 w-2.5 shrink-0 rounded-full"
                        style={{ backgroundColor: challenge.iconColor }}
                        aria-hidden
                      />
                      <span className="font-outfit text-xl font-normal leading-8 text-slate-500">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


