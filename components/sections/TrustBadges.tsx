/**
 * 文件用途：信任徽章区块组件
 * 依赖关系：依赖 types/program.ts 中的 TrustBadge 类型
 * 注意事项：展示4个统计数据卡片
 */

import type { TrustBadge } from '@/types/program';

interface TrustBadgesProps {
  badges: TrustBadge[];
}

/**
 * 信任徽章组件
 * @param badges 徽章数据数组
 */
export default function TrustBadges({ badges }: TrustBadgesProps) {
  return (
    <section id="trust-badges" className="py-[106px] bg-white scroll-mt-[133px]">
      <div className="max-w-[1920px] mx-auto px-14">
        <div className="grid grid-cols-4 gap-[40px]">
          {badges.map((item, idx) => (
            <div key={idx} className="bg-white rounded-[33px] p-[40px] border border-gray-100 hover:shadow-xl transition">
              <div className="w-[107px] h-[107px] bg-gradient-to-br from-[rgba(107,182,255,0.2)] to-[rgba(74,159,239,0.2)] rounded-[27px] flex items-center justify-center text-[53px] mb-[27px]">
                {item.emoji}
              </div>
              <h3 className="text-[40px] font-semibold mb-[13px]" style={{ color: item.color }}>
                {item.title}
              </h3>
              <p className="text-[26.5px] text-[#7C8B99]">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

