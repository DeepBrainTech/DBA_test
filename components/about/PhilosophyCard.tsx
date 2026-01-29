/**
 * 文件用途：可复用的「数字圆圈 + 卡片」组件，圆圈、卡片、标题、描述均通过 props 配置
 * 依赖关系：无外部业务依赖，可在任意页面复用（如 About 理念区块复用三次）
 * 注意事项：未传的样式类名使用默认值，传入的会覆盖对应部分
 */

/** 圆圈默认阴影，可通过 circleShadow 覆盖 */
const DEFAULT_CIRCLE_SHADOW =
  '0 9.56px 11.95px -7.17px rgba(0,0,0,0.1), 0 23.9px 29.87px -5.97px rgba(0,0,0,0.1)';

export interface PhilosophyCardProps {
  /** 显示在圆圈内的数字（如 1/2/3） */
  index: number;
  /** 原则标题（卡片内容中的标题） */
  title: string;
  /** 原则描述（卡片内容中的正文） */
  detail: string;
  // —— 圆圈可配置 ——
  /** 圆圈背景色 */
  circleColor: string;
  /** 圆圈容器类名，可选；不传则用默认尺寸与圆角 */
  circleClassName?: string;
  /** 圆圈内联样式，可选；会与默认 backgroundColor、boxShadow 合并 */
  circleStyle?: React.CSSProperties;
  /** 圆圈阴影，可选；不传则用 DEFAULT_CIRCLE_SHADOW */
  circleShadow?: string;
  // —— 卡片可配置 ——
  /** 卡片背景：纯色或 linear-gradient(...) */
  cardBg: string;
  /** 卡片边框色，可选 */
  cardBorderColor?: string;
  /** 卡片容器类名，可选；不传则用默认圆角、内边距、阴影 */
  cardClassName?: string;
  /** 卡片内联样式，可选；会与 background、border 合并 */
  cardStyle?: React.CSSProperties;
  // —— 卡片内容：标题与描述可配置 ——
  /** 标题样式类名，可选 */
  titleClassName?: string;
  /** 描述样式类名，可选 */
  detailClassName?: string;
}

const DEFAULT_CIRCLE_CLASS =
  'w-16 h-16 sm:w-20 sm:h-20 md:w-[95.59px] md:h-[95.59px] rounded-full flex-shrink-0 flex items-center justify-center text-white text-2xl sm:text-3xl font-bold z-10';
const DEFAULT_CARD_CLASS =
  'rounded-xl sm:rounded-2xl px-4 py-12 pb-4 sm:px-6 sm:pt-14 sm:pb-6 md:px-8 md:pb-8 -mt-6 sm:-mt-8 shadow-sm hover:shadow-md transition-shadow w-full text-center';
const DEFAULT_TITLE_CLASS = 'text-lg sm:text-xl md:text-2xl font-bold text-[#2C3E50] mb-1.5 sm:mb-2';
const DEFAULT_DETAIL_CLASS = 'text-sm sm:text-base text-gray-600 leading-relaxed';

export default function PhilosophyCard({
  index,
  title,
  detail,
  circleColor,
  circleClassName,
  circleStyle,
  circleShadow,
  cardBg,
  cardBorderColor = '#E8F4FC',
  cardClassName,
  cardStyle,
  titleClassName,
  detailClassName,
}: PhilosophyCardProps) {
  const circleMergedStyle: React.CSSProperties = {
    backgroundColor: circleColor,
    boxShadow: circleShadow ?? DEFAULT_CIRCLE_SHADOW,
    ...circleStyle,
  };
  const cardMergedStyle: React.CSSProperties = {
    background: cardBg,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: cardBorderColor,
    ...cardStyle,
  };

  return (
    <div className="flex flex-col items-center">
      {/* 圆圈：可配置颜色、类名、样式、阴影 */}
      <div
        className={circleClassName ?? DEFAULT_CIRCLE_CLASS}
        style={circleMergedStyle}
      >
        {index}
      </div>
      {/* 卡片：可配置背景、边框、类名、样式 */}
      <div
        className={cardClassName ?? DEFAULT_CARD_CLASS}
        style={cardMergedStyle}
      >
        {/* 卡片内容：标题与描述均可配置类名 */}
        <h3 className={titleClassName ?? DEFAULT_TITLE_CLASS}>{title}</h3>
        <p className={detailClassName ?? DEFAULT_DETAIL_CLASS}>{detail}</p>
      </div>
    </div>
  );
}
