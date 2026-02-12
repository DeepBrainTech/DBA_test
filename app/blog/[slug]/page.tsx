/**
 * 文件用途：博客文章详情页，根据 slug 渲染单篇文章
 * 依赖关系：依赖 data/blog.ts 的 getPostBySlug、blogSlugs、getPrevNextSlugs；根 layout 已包含导航与页脚
 * 注意事项：未知 slug 返回 404；正文 body 为空时仅展示摘要与元信息；布局按设计图：标签+标题+作者日期+大图+正文+参考文献+底部前后文导航
 */

import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Outfit } from 'next/font/google';
import { ArrowLeft, ArrowRight, FileText, Lightbulb, User } from 'lucide-react';
import { getPostBySlug, getPrevNextSlugs, blogSlugs } from '@/data/blog';

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
    <div className={`${outfit.variable} ${outfit.className} min-h-screen bg-[#FBF9F4] pt-[106px]`}>
      <article className="max-w-[960px] mx-auto px-4 sm:px-6 md:px-8 py-10 md:py-14">
        {/* 顶部：分类标签、标题、作者与元信息（整体居中） */}
        <div className="text-center mb-8">
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

          {/* 作者、日期、阅读时长（居中，用 · 分隔） */}
          <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-[#7C8B99] text-sm md:text-base">
            {post.author && (
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
            )}
            {!post.author && (
              <>
                <span>{dateLabel}</span>
                <span aria-hidden="true">·</span>
                <span>{readLabel}</span>
              </>
            )}
          </div>
        </div>

        {/* 主图：宽幅 */}
        <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-white mb-10">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* 正文：多段排版；无 body 时不渲染正文区块 */}
        {post.body ? (
          <div className="prose prose-neutral max-w-none text-[#2C3E50] leading-relaxed mb-10">
            {post.body.split(/\n\n+/).map((para, i) => (
              <p key={i} className="mb-4">
                {para}
              </p>
            ))}
          </div>
        ) : null}

        {/* 参考文献区块（有数据时展示） */}
        {post.references && post.references.length > 0 && (
          <section className="mb-12">
            <h2 className="text-lg font-semibold text-[#2C3E50] mb-3">References</h2>
            <ul className="list-none space-y-2 text-[#7C8B99] text-sm md:text-base leading-relaxed">
              {post.references.map((ref, i) => (
                <li key={i}>{ref}</li>
              ))}
            </ul>
          </section>
        )}

        {/* 底部导航：左为 + Back（第一篇）或 Previous Article（第二、三篇）；右为 Next Article + 或 Back to Blog */}
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
      </article>
    </div>
  );
}
