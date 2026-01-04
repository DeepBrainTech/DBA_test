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
    <section id="challenges" className="py-[133px] bg-white scroll-mt-[133px]">
      <div className="max-w-[1920px] mx-auto px-14">
        <div className="text-center mb-[80px]">
          <div className="inline-flex items-center gap-[20px] px-[30px] py-[15px] bg-[#F3F0FF] rounded-[33px] mb-[27px]">
            <span className="text-[32px]">🤔</span>
            <span className="text-[24px] text-[#9B8FD8] font-medium">Common Challenges</span>
          </div>
          <h2 className="text-[53px] font-bold text-[#2C3E50] mb-[27px] leading-[1.3]">
            Facing these hurdles?
          </h2>
          <p className="text-[26.5px] text-[#7C8B99]">
            You aren't alone in the application process.
          </p>
        </div>

        {/* Challenges Grid */}
        <div className="grid grid-cols-2 gap-[40px] mb-[80px]">
          {challenges.map((challenge, idx) => (
            <div key={idx} className="bg-[#FBF9F4] rounded-[33px] p-[48px] hover:shadow-lg transition">
              <div className="flex items-start gap-[27px] mb-[27px]">
                <div 
                  className="w-[80px] h-[80px] rounded-[20px] flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: challenge.iconBg }}
                >
                  <Image 
                    src={challenge.icon} 
                    alt={challenge.title}
                    width={40}
                    height={40}
                    className="w-[40px] h-[40px]"
                  />
                </div>
                <div>
                  <h3 className="text-[32px] font-semibold text-[#2C3E50] mb-[13px]">
                    {challenge.title}
                  </h3>
                  <p className="text-[22px] text-[#7C8B99] leading-[1.6]">
                    {challenge.description}
                  </p>
                </div>
              </div>
              
              <div className="space-y-[13px] ml-[107px]">
                {challenge.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="flex items-start gap-[13px]">
                    <div 
                      className="w-[8px] h-[8px] mt-[10px] rounded-full" 
                      style={{ backgroundColor: challenge.iconColor }}
                    ></div>
                    <span className="text-[20px] text-[#5C6B7A] leading-[1.5]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* We Get It Section */}
        <div className="bg-gradient-to-br from-[#F3F0FF] to-[#E8F4FC] rounded-[40px] p-[60px] text-center">
          <h3 className="text-[40px] font-bold text-[#2C3E50] mb-[20px]">
            We Get It.
          </h3>
          <p className="text-[24px] text-[#7C8B99] mb-[13px]">
            Applications aren't just academic—they're life-changing. Anxiety is normal. But there's the good news:
          </p>
          <p className="text-[26px] font-semibold text-[#9B8FD8]">
            2,000+ families guided. You're not alone.
          </p>
        </div>
      </div>
    </section>
  );
}


