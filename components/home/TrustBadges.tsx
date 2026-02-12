/**
 * 文件用途：信任徽章区块组件
 * 依赖关系：依赖 types/program.ts 中的 TrustBadge 类型、Next.js Image
 * 注意事项：展示 4 个统计数据卡片，优先使用 iconSrc 图片，无图时回退 emoji
 */

import Image from 'next/image';
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
    <section id="trust-badges" className="py-[80px] bg-white scroll-mt-[133px]">
      <div className="max-w-[1920px] mx-auto px-14">
        {/* 四个组件的整体宽度：改 max-w 即可，如 max-w-[1000px] 更窄、max-w-[1400px] 更宽 */}
        <div className="grid grid-cols-4 gap-[28px] max-w-[1200px] mx-auto">
          {badges.map((item, idx) => (

            <div key={idx} className="bg-[#FBF9F4] rounded-[24px] p-[28px] border border-gray-100 hover:shadow-xl transition flex flex-col items-center text-center">
              {/* 图标外框：每个徽章可用 item.iconBg 单独设置，见 data/home.ts */}
              <div
                className="w-[80px] h-[80px] rounded-[20px] flex items-center justify-center text-[40px] mb-[20px] overflow-hidden"
                style={{ background: item.iconBg ?? 'linear-gradient(to bottom right, rgba(107,182,255,0.2), rgba(74,159,239,0.2))' }}
              >
                {item.iconSrc ? (
                  <Image src={item.iconSrc} alt="" width={48} height={48} className="object-contain" />
                ) : (
                  item.emoji ?? null
                )}
              </div>
              <h3 className="text-[30px] font-semibold mb-[10px]" style={{ color: item.color }}>
                {item.title}
              </h3>
              <p className="text-[20px] text-[#7C8B99]">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
