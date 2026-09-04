/**
 * 文件用途：Referral Program 各内容区块共用的标签与标题
 * 依赖关系：被 Journey、Rewards、Ambassador 与 FAQ 区块复用
 * 注意事项：标题样式集中在此处，保证不同区块的视觉层级一致
 */

interface ReferralSectionHeaderProps {
  /** 显示在标题上方的蓝色标签 */
  badge: string;
  /** 区块主标题 */
  title: string;
  /** 是否使用左对齐，Academic Ambassador 区块使用 */
  align?: 'center' | 'left';
}

export default function ReferralSectionHeader({
  badge,
  title,
  align = 'center',
}: ReferralSectionHeaderProps) {
  const isCentered = align === 'center';

  return (
    <div className={`flex flex-col gap-5 ${isCentered ? 'items-center text-center' : 'items-start text-left'}`}>
      <span className="inline-flex items-center rounded-[28px] bg-[#FAF8F4] px-6 py-3.5 font-outfit text-base font-normal leading-8 text-[#6BB6FF] sm:text-lg md:text-[22px] md:leading-[35px]">
        {badge}
      </span>
      <h2 className="font-outfit text-3xl font-bold leading-tight text-[#2C3E50] sm:text-4xl md:text-[44px] md:leading-[1.3]">
        {title}
      </h2>
    </div>
  );
}
