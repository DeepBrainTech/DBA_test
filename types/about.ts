/**
 * 文件用途：定义关于我们页面相关的类型
 * 依赖关系：无
 * 注意事项：所有字段必须与数据源保持一致
 */

/**
 * 哲学卡片配置类型（复用 PhilosophyCard 组件的 props 类型）
 */
export interface PhilosophyCardConfig {
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
  /** 圆圈阴影，可选；不传则用默认阴影 */
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

/**
 * 位置信息类型
 */
export interface Location {
  /** 机构名称 */
  name: string;
  /** 地址 */
  address: string;
  /** 联系电话 */
  phone: string;
  /** Google Maps 嵌入 URL */
  googleMapsEmbedUrl: string;
  /** Google Maps 查看 URL */
  googleMapsViewUrl: string;
}

/**
 * 首屏内容类型
 */
export interface HeroContent {
  /** 标题 */
  title: string;
  /** 描述文本 */
  description: string;
}
