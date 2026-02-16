/**
 * 文件用途：博客文章详情页，根据 slug 渲染单篇文章
 * 依赖关系：依赖 data/blog 的 getPostBySlug、blogSlugs、getPrevNextSlugs；根 layout 已包含导航与页脚
 * 注意事项：未知 slug 返回 404；页面只负责取数与拼接 components/blog 下的 Section 组件
 */

import { notFound } from 'next/navigation';
import { Outfit } from 'next/font/google';
import { getPostBySlug, getPrevNextSlugs, blogSlugs } from '@/data/blog';
import { BlogPostHeader } from '@/components/blog/BlogPostHeader';
import { BlogPostCover } from '@/components/blog/BlogPostCover';
import { BlogPostBody } from '@/components/blog/BlogPostBody';
import { BlogPostReferences } from '@/components/blog/BlogPostReferences';
import { BlogPostNav } from '@/components/blog/BlogPostNav';

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-outfit',
  display: 'swap',
});

/** 静态生成：预渲染三篇已知文章 */
export function generateStaticParams() {
  return blogSlugs.map((slug) => ({ slug }));
}

interface BlogPageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const { prev, next } = getPrevNextSlugs(slug);
  const dateLabel = post.dateDisplay ?? post.date;
  const readLabel = post.time.includes('read') ? post.time : `${post.time} read`;

  return (
    <div className={`${outfit.variable} ${outfit.className} relative -mt-[106px] min-h-screen bg-[#FBF9F4]`}>
      <article className="max-w-[960px] mx-auto px-4 sm:px-6 md:px-8 pt-[106px] py-10 md:py-14">
        <BlogPostHeader post={post} dateLabel={dateLabel} readLabel={readLabel} />
        <BlogPostCover image={post.image} alt={post.title} />
        {post.body ? <BlogPostBody body={post.body} /> : null}
        {post.references && post.references.length > 0 ? (
          <BlogPostReferences references={post.references} />
        ) : null}
        <BlogPostNav prev={prev} next={next} />
      </article>
    </div>
  );
}
