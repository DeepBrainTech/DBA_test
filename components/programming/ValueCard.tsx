/**
 * 文件用途：Value of Coding 通用卡片组件
 * 依赖关系：next/image
 * 注意事项：可复用于 Admissions Advantage 和 Career Outlook 两种场景
 */

import Image from 'next/image';

/** 列表项数据结构 */
export interface ValueListItemData {
  title: string;
  description: React.ReactNode;
}

/** 卡片 props */
export interface ValueCardProps {
  /** 卡片图标路径 */
  iconSrc: string;
  /** 图标背景颜色（Tailwind class，如 bg-[#4ECDC4]/10） */
  iconBgColor: string;
  /** 主标题 */
  title: string;
  /** 副标题 */
  subtitle: string;
  /** 列表项数据 */
  items: ValueListItemData[];
  /** 列表项圆点颜色（Tailwind class，如 bg-[#4ECDC4]） */
  dotColor: string;
  /** 底部统计区背景颜色（Tailwind class） */
  footerBgColor: string;
  /** 底部统计区文字颜色（Tailwind class） */
  footerTextColor: string;
  /** 底部统计图标（emoji） */
  footerIcon: string;
  /** 底部统计内容 */
  footerContent: React.ReactNode;
}

/** 单个列表项组件 */
function ValueListItem({
  title,
  description,
  dotColor,
}: ValueListItemData & { dotColor: string }) {
  return (
    <div className="flex gap-4">
      <div className={`w-3.5 h-3.5 ${dotColor} rounded-full mt-2 shrink-0`} />
      <div className="flex-1">
        <h4 className="text-xl md:text-1xl font-semibold text-slate-700 leading-tight">
          {title}
        </h4>
        <p className="mt-1 text-base md:text-lg font-normal text-slate-500 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function ValueCard({
  iconSrc,
  iconBgColor,
  title,
  subtitle,
  items,
  dotColor,
  footerBgColor,
  footerTextColor,
  footerIcon,
  footerContent,
}: ValueCardProps) {
  return (
    <div className="flex-1 bg-[#FBF9F4] rounded-3xl px-6 md:px-10 py-8 md:py-10 flex flex-col gap-5">
      {/* 标题区 */}
      <div className="flex items-start gap-5">
        <div
          className={`w-16 h-16 md:w-18 md:h-18 ${iconBgColor} rounded-3xl flex justify-center items-center shrink-0`}
        >
          <Image
            src={iconSrc}
            alt=""
            width={40}
            height={40}
            className="w-8 h-8 md:w-10 md:h-10 object-contain"
            aria-hidden
          />
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="text-1xl md:text-2xl font-semibold text-slate-700 leading-tight">
            {title}
          </h3>
          <p className="text-base md:text-1xl font-normal text-slate-500 leading-relaxed">
            {subtitle}
          </p>
        </div>
      </div>

      {/* 列表 */}
      <div className="flex flex-col gap-2">
        {items.map((item) => (
          <ValueListItem key={item.title} {...item} dotColor={dotColor} />
        ))}
      </div>

      {/* 底部统计 */}
      <div className={`${footerBgColor} rounded-3xl px-5 py-5 flex items-center gap-3`}>
        <span className="text-xl">{footerIcon}</span>
        <p className={`text-base md:text-lg ${footerTextColor} leading-relaxed`}>
          {footerContent}
        </p>
      </div>
    </div>
  );
}
