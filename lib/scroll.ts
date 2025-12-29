/**
 * 文件用途：滚动相关的工具函数
 * 依赖关系：无
 * 注意事项：这些函数用于处理页面滚动行为
 */

/**
 * 平滑滚动到指定元素
 * @param elementId 目标元素的ID
 * @param block 垂直对齐方式，默认为 'start'（元素顶部对齐视口顶部）
 * @param behavior 滚动行为，默认为 'smooth'（平滑滚动）
 * 
 * 边界条件：
 * - 如果元素不存在，函数不会执行任何操作
 * - 如果浏览器不支持 smooth 滚动，会回退到 instant 滚动
 */
export function scrollToElement(
  elementId: string,
  block: ScrollLogicalPosition = 'start',
  behavior: ScrollBehavior = 'smooth'
): void {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior, block });
  }
}

