/**
 * 文件用途：展示新家庭与推荐家庭的 Referral Rewards 对照表
 * 依赖关系：依赖 ReferralSectionHeader、ReferralRewardRow 类型与本地设计 token
 * 注意事项：小屏保留表格结构并允许横向滚动，确保长文案不被压缩或截断
 */

import ReferralSectionHeader from '@/components/referral/ReferralSectionHeader';
import type { ReferralRewardRow, ReferralRewardValue } from '@/types/referral';

interface ReferralRewardsSectionProps {
  /** 区块标签 */
  badge: string;
  /** 区块标题 */
  title: string;
  /** 奖励表格行 */
  rows: ReferralRewardRow[];
  /** 表格脚注 */
  notes: string[];
}

function RewardValue({ amount, text, note }: ReferralRewardValue) {
  return (
    <div className="font-outfit text-sm font-normal leading-6 text-[#2C3E50] sm:text-base sm:leading-7 lg:text-xl">
      <p>
        {amount ? <span className="font-bold text-[#EF6B83]">{amount}</span> : null}
        {text}
      </p>
      {note ? <p className="mt-1 text-xs leading-5 text-[#7C8B99] sm:text-sm sm:leading-6">{note}</p> : null}
    </div>
  );
}

export default function ReferralRewardsSection({
  badge,
  title,
  rows,
  notes,
}: ReferralRewardsSectionProps) {
  return (
    <section className="bg-white px-5 pb-24 sm:px-8 sm:pb-32 lg:px-11 lg:pb-[170px]" aria-labelledby="referral-rewards-title">
      <div className="mx-auto max-w-[1507px]">
        <div id="referral-rewards-title">
          <ReferralSectionHeader badge={badge} title={title} />
        </div>

        <div className="mx-auto mt-12 max-w-[1270px] rounded-[28px] bg-[linear-gradient(158deg,rgba(155,143,216,0.05),rgba(107,182,255,0.05))] p-5 sm:mt-14 sm:p-7 lg:mt-16 lg:p-[37px]">
          <div className="overflow-x-auto pb-3">
            <div className="min-w-[800px] font-outfit" role="table" aria-label="Referral rewards">
              <div className="grid grid-cols-[30%_35%_35%] border-b-2 border-[#E8F4FC] text-center text-base font-bold text-[#7C8B99] sm:text-xl" role="row">
                <div className="px-3 py-3" role="columnheader" aria-label="Benefit" />
                <div className="px-3 py-3" role="columnheader">New Family</div>
                <div className="px-3 py-3" role="columnheader">Referring Family</div>
              </div>

              <div role="rowgroup">
                {rows.map((row) => (
                  <div key={row.benefit} className="grid min-h-[100px] grid-cols-[30%_35%_35%] border-b border-[#E8F4FC]" role="row">
                    <div className="flex items-center px-3 py-5 font-outfit text-base font-semibold leading-6 text-[#2C3E50] sm:text-xl" role="cell">
                      {row.benefit}
                    </div>
                    <div className="flex items-center px-3 py-5" role="cell">
                      <RewardValue {...row.newFamily} />
                    </div>
                    <div className="flex items-center px-3 py-5" role="cell">
                      <RewardValue {...row.referringFamily} />
                    </div>
                  </div>
                ))}

                <div className="flex flex-col gap-1 px-3 pt-5 font-outfit text-xs leading-5 text-[#7C8B99] sm:text-sm sm:leading-7" role="row">
                  {notes.map((note) => (
                    <p key={note} role="cell">* {note}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
