/**
 * 文件用途：博客详情页底部导航（上一篇 / 下一篇 或 Back / Back to Blog）
 * 依赖关系：依赖 Next.js Link、lucide-react 箭头图标
 * 注意事项：无 prev 时显示 Back 链回首页 #blog；无 next 时显示 Back to Blog
 */

import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export interface BlogPostNavProps {
  /** 上一篇 slug，无则为 null */
  prev: string | null;
  /** 下一篇 slug，无则为 null */
  next: string | null;
}

export function BlogPostNav({ prev, next }: BlogPostNavProps) {
  return (
    <nav className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-[#E8F4FC]">
      {prev ? (
        <Link
          href={`/blog/${prev}`}
          className="inline-flex items-center gap-2 text-[#6BB6FF] hover:underline text-sm md:text-base font-semibold"
        >
          <ArrowLeft className="w-4 h-4 shrink-0" strokeWidth={2.2} />
          <span>Previous Article</span>
        </Link>
      ) : (
        <Link
          href="/#blog"
          className="inline-flex items-center gap-2 text-[#6BB6FF] hover:underline text-sm md:text-base font-semibold"
        >
          <ArrowLeft className="w-4 h-4 shrink-0" strokeWidth={2.2} />
          <span>Back</span>
        </Link>
      )}
      {next ? (
        <Link
          href={`/blog/${next}`}
          className="inline-flex items-center gap-2 text-[#6BB6FF] hover:underline text-sm md:text-base font-semibold"
        >
          <span>Next Article</span>
          <ArrowRight className="w-4 h-4 shrink-0" strokeWidth={2.2} />
        </Link>
      ) : (
        <Link
          href="/#blog"
          className="inline-flex items-center gap-2 text-[#6BB6FF] hover:underline text-sm md:text-base font-semibold"
        >
          <span>Back to Blog</span>
        </Link>
      )}
    </nav>
  );
}
