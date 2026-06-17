/**
 * 文件用途：定义 Programming 页面英雄区等静态数据类型
 * 依赖关系：由 data/programming.ts 提供数据，由 components/programming/* 消费
 * 注意事项：与 innovation_program Hero 结构一致，图标按顺序使用 public/programming/hero/1.png–4.png
 */

/** 英雄区特色亮点项（图标按顺序使用 public/programming/hero/1.png–4.png） */
export interface ProgrammingHeroFeature {
  /** 文案 */
  label: string;
}

/** 英雄区数据 */
export interface ProgrammingHeroData {
  title: string;
  subtitle: string;
  /** 背景图路径，如 /programming/hero/cover.png */
  backgroundImage: string;
  /** 四个特色亮点 */
  features: ProgrammingHeroFeature[];
}
