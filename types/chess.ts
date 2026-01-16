/**
 * 文件用途：定义象棋页面相关的类型
 * 依赖关系：无
 * 注意事项：所有字段必须与数据源保持一致
 */

/**
 * 特性卡片类型
 */
export interface Feature {
    /** emoji图标 */
    icon: string;
    /** 标题 */
    title: string;
}


export interface PhilosophyCard {
    id: string;
    iconSrc: string; // e.g. "/chess/icons/brain.svg"
    title: string;
    description: string;
}

export interface QuotePill {
    id: string;
    title: string;      // e.g. "Planning"
    description: string; // e.g. "Strategic foresight."
}

export interface ChessPhilosophyData {
    badgeText: string; // "Educational Value"
    heading: string;   // "Mental Gymnastics"
    subheading: string;
    cards: PhilosophyCard[];

    quoteHeading: string;
    quoteBody: string;
    quotePills: QuotePill[];

    footerLine1: string;
    footerLine2: string;
}

export interface CourseFeature {
    /** 图标（emoji 或 svg 对应） */
    icon: string;
    /** 特性标题 */
    title: string;
    /** 特性描述 */
    description: string;
}

export interface Course {
    /** 唯一 id（用于 key） */
    id: string;
    /** 标签（如 Beginner / Intermediate） */
    tag: string;
    /** 课程标题 */
    title: string;
    /** 副标题 */
    subtitle: string;
    /** 特性列表 */
    features: CourseFeature[];
    /** CTA 文案 */
    ctaText: string;
    /** 二维码图片路径 */
    qrImage: string;
}