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
    <section id="trust-badges" className="py-10 sm:py-14 md:py-[80px] bg-white scroll-mt-20 md:scroll-mt-[133px]">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 md:px-14">
        {/* 小屏 2 列、大屏 4 列；四个组件的整体宽度：改 max-w 即可 */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-[28px] max-w-[1200px] mx-auto">
          {badges.map((item, idx) => (

            <div key={idx} className="bg-[#FBF9F4] rounded-xl md:rounded-[24px] p-4 sm:p-5 md:p-[28px] border border-gray-100 hover:shadow-xl transition flex flex-col items-center text-center">
              {/* 图标外框：每个徽章可用 item.iconBg 单独设置，见 data/home.ts */}
              <div
                className="w-12 h-12 sm:w-14 sm:h-14 md:w-[80px] md:h-[80px] rounded-xl md:rounded-[20px] flex items-center justify-center text-2xl md:text-[40px] mb-2 sm:mb-3 md:mb-[20px] overflow-hidden shrink-0"
                style={{ background: item.iconBg ?? 'linear-gradient(to bottom right, rgba(107,182,255,0.2), rgba(74,159,239,0.2))' }}
              >
                {item.iconSrc ? (
                  <Image src={item.iconSrc} alt="" width={48} height={48} className="object-contain w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12" />
                ) : (
                  item.emoji ?? null
                )}
              </div>
              <h3 className="text-lg sm:text-xl md:text-[30px] font-semibold mb-1 sm:mb-[10px]" style={{ color: item.color }}>
                {item.title}
              </h3>
              <p className="text-sm sm:text-base md:text-[20px] text-[#7C8B99]">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
