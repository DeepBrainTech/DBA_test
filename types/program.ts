/**
 * 文件用途：定义课程相关的类型
 * 依赖关系：无
 * 注意事项：所有字段必须与数据源保持一致
 */

/**
 * 课程项目类型
 */
export interface Program {
  /** 图标emoji（可选，用于显示） */
  icon?: string;
  /** 图标图片路径 */
  iconSrc: string;
  /** 课程标题 */
  title: string;
  /** 副标题 */
  subtitle: string;
  /** 课程描述 */
  description: string;
  /** 课程特性列表 */
  features: string[];
  /** 主题颜色（十六进制） */
  color: string;
  /** 背景渐变色类名（Tailwind格式） */
  bgGradient: string;
}

/**
 * 信任徽章类型
 */
export interface TrustBadge {
  /** emoji图标 */
  emoji: string;
  /** 标题/数值 */
  title: string;
  /** 描述文字 */
  desc: string;
  /** 主题颜色 */
  color: string;
}

/**
 * 优势卡片类型
 */
export interface Advantage {
  /** emoji图标 */
  icon: string;
  /** 标题 */
  title: string;
  /** 描述 */
  desc: string;
  /** 统计数据 */
  stat: string;
  /** 统计标签 */
  label: string;
}

/**
 * 学生成就类型
 */
export interface StudentAchievement {
  /** emoji头像 */
  emoji: string;
  /** 学校名称 */
  school: string;
  /** 学生姓名 */
  name: string;
  /** 学历级别 */
  level: string;
  /** 年级/年份 */
  year: string;
}

/**
 * 新闻文章类型
 */
export interface NewsArticle {
  /** 标签 */
  tag: string;
  /** 标签颜色 */
  tagColor: string;
  /** 文章标题 */
  title: string;
  /** 文章摘要 */
  excerpt: string;
  /** 发布日期 */
  date: string;
  /** 阅读时长 */
  time: string;
  /** 封面图片路径 */
  image: string;
}

