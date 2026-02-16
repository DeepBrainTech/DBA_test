/**
 * 文件用途：博客详情页顶部区块（分类标签、标题、作者与元信息）
 * 依赖关系：依赖 Next.js Image、lucide-react 图标；接收文章数据与展示文案
 * 注意事项：Industry Insights 标签使用绿色与灯泡图标，其余用 tagColor 与 FileText 图标
 */

import Image from 'next/image';
import { FileText, Lightbulb, User } from 'lucide-react';
import type { BlogPost } from '@/types/blog';

export interface BlogPostHeaderProps {
  /** 当前文章数据 */
  post: BlogPost;
  /** 日期展示文案（优先 dateDisplay，否则 date） */
  dateLabel: string;
  /** 阅读时长展示文案（如 "7 min read"） */
  readLabel: string;
}

export function BlogPostHeader({ post, dateLabel, readLabel }: BlogPostHeaderProps) {
  return (
    <div className="text-center mb-8 mt-8 md:mt-20">
      <div className="flex justify-center mb-4">
        {post.tag === 'Industry Insights' ? (
          <span
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full text-base font-medium bg-white border border-gray-200"
            style={{ color: '#7EC97E' }}
          >
            <Lightbulb className="w-5 h-5 shrink-0" />
            {post.tag}
          </span>
        ) : (
          <span
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full text-base font-medium"
            style={{ backgroundColor: `${post.tagColor}20`, color: post.tagColor }}
          >
            <FileText className="w-5 h-5 shrink-0" />
            {post.tag}
          </span>
        )}
      </div>

      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2C3E50] leading-tight mb-4">
        {post.title}
      </h1>

      <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-[#7C8B99] text-sm md:text-base">
        {post.author ? (
          <>
            <span className="inline-flex items-center gap-2">
              {post.author.avatar ? (
                <span className="relative w-6 h-6 shrink-0 overflow-hidden rounded-full">
                  <Image
                    src={post.author.avatar}
                    alt=""
                    fill
                    className="object-cover object-[center_25%]"
                    sizes="24px"
                  />
                </span>
              ) : (
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#E8F4FC] text-[#6BB6FF]">
                  <User className="w-3.5 h-3.5" />
                </span>
              )}
              {post.author.name}
            </span>
            <span aria-hidden="true">·</span>
            <span>{dateLabel}</span>
            <span aria-hidden="true">·</span>
            <span>{readLabel}</span>
          </>
        ) : (
          <>
            <span>{dateLabel}</span>
            <span aria-hidden="true">·</span>
            <span>{readLabel}</span>
          </>
        )}
      </div>
    </div>
  );
}
