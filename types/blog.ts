/**
 * 文件用途：博客详情页相关类型定义
 * 依赖关系：与首页 NewsArticle 列表字段保持一致，便于从列表跳转详情
 * 注意事项：slug 用于路由与数据查找；body 为正文内容（可按需扩展为富文本或 Markdown）
 */

/**
 * 博客文章详情类型（用于 /blog/[slug] 单页）
 */
export interface BlogPost {
  /** 路由用唯一标识，如 value-of-learning-chess */
  slug: string;
  /** 标签 */
  tag: string;
  /** 标签颜色 */
  tagColor: string;
  /** 文章标题 */
  title: string;
  /** 文章摘要 */
  excerpt: string;
  /** 发布日期（用于列表等简短展示，如 2025.11.30） */
  date: string;
  /** 发布日期展示文案（用于详情页，如 November 30th, 2025；不填则用 date） */
  dateDisplay?: string;
  /** 阅读时长 */
  time: string;
  /** 封面图片路径 */
  image: string;
  /** 作者信息（可选；无则详情页不展示作者行） */
  author?: {
    /** 作者姓名 */
    name: string;
    /** 头像图片路径（可选；无则用图标占位） */
    avatar?: string;
  };
  /** 正文内容（可后续改为 Markdown 或结构化数据） */
  body: string;
  /** 参考文献列表（可选；无则不展示 References 区块） */
  references?: string[];
}
