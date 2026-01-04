/**
 * 文件用途：定义通用类型
 * 依赖关系：无
 * 注意事项：这些类型在多个模块中共享使用
 */

/**
 * 导航链接类型
 */
export interface NavLink {
  /** 链接地址 */
  href: string;
  /** 链接文本 */
  label: string;
  /** 是否为当前激活状态 */
  isActive?: boolean;
}

