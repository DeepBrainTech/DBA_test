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
    <section id="challenges" className="pt-12 sm:pt-16 lg:pt-[80px] pb-16 sm:pb-24 lg:pb-[133px] bg-white scroll-mt-20 lg:scroll-mt-[133px]">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-9">

        <div className="text-center mb-10 sm:mb-14 lg:mb-[80px]">
          <div className="inline-flex items-center gap-2 sm:gap-3 rounded-2xl sm:rounded-3xl bg-[#F3F0FF] px-4 sm:px-5 py-2.5 sm:py-3.5 mb-4 sm:mb-6 lg:mb-[27px]">
            <span className="text-xl sm:text-2xl" aria-hidden>🤔</span>
            <span className="text-base sm:text-lg md:text-xl text-[#9B8FD8] font-normal">Common Challenges</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2C3E50] mb-4 sm:mb-6 lg:mb-[27px] leading-tight">
            Facing these hurdles?
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#7C8B99]">
            {`You aren't alone in the application process.`}
          </p>
        </div>

        {/* Challenges Grid：移动端单列，平板/桌面双列 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-[40px]">
          {challenges.map((challenge, idx) => (
            <div key={idx} className="relative overflow-hidden rounded-2xl lg:rounded-3xl p-5 sm:p-6 lg:p-8 hover:shadow-lg transition bg-[#FBF9F4]">
              <div className="relative flex flex-col gap-4 sm:gap-5">
                {/* 图标在上方，标题在图标下方 */}
                <div
                  className="flex h-14 w-14 sm:h-16 sm:w-16 lg:h-20 lg:w-20 shrink-0 items-center justify-center rounded-2xl lg:rounded-3xl"
                  style={{ backgroundColor: challenge.iconBg }}
                >
                  <Image
                    src={challenge.icon}
                    alt={challenge.title}
                    width={40}
                    height={40}
                    className="h-7 w-7 sm:h-8 sm:w-8 lg:h-10 lg:w-10 object-contain"
                  />
                </div>
                <div className="flex flex-col gap-1 sm:gap-2">
                  <h3 className="font-outfit text-xl sm:text-2xl lg:text-3xl font-semibold leading-tight lg:leading-[55.76px] text-slate-700">
                    {challenge.title}
                  </h3>
                  <p className="font-outfit text-sm sm:text-base lg:text-xl font-normal leading-relaxed lg:leading-10 text-slate-500">
                    {challenge.description}
                  </p>
                </div>

                {/* 列表：圆点 + 文案 */}
                <div className="flex flex-col gap-2 sm:gap-2.5">
                  {challenge.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="flex items-start gap-2 sm:gap-3">
                      <div
                        className="mt-2 sm:mt-2.5 lg:mt-[13px] h-2 w-2 sm:h-2.5 sm:w-2.5 shrink-0 rounded-full"
                        style={{ backgroundColor: challenge.iconColor }}
                        aria-hidden
                      />
                      <span className="font-outfit text-sm sm:text-base lg:text-xl font-normal leading-relaxed lg:leading-8 text-slate-500">
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


