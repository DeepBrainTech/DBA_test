/**
 * 文件用途：新闻/教育洞察区块组件
 * 依赖关系：依赖 types/program.ts 中的 NewsArticle 类型和 Next.js Image 组件
 * 注意事项：展示3篇最新文章，尺寸与 KeyPrograms 区块保持一致
 */

import Image from 'next/image';
import Link from 'next/link';
import type { NewsArticle } from '@/types/program';

interface NewsSectionProps {
  articles: NewsArticle[];
}

/**
 * 新闻区块组件
 * @param articles 文章数据数组
 */
export default function NewsSection({ articles }: NewsSectionProps) {
  return (
    <section className="py-16 md:py-20 bg-[#FFFFFF]">
      <div className="max-w-[1920px] mx-auto px-6 md:px-14">
        <div className="text-center mb-8 md:mb-10">
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-white rounded-full mb-4 shadow-sm border border-[#E8F4FC]">
            <span className="text-2xl">📚</span>
            <span className="text-lg md:text-xl text-[#6BB6FF]">Blog</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#2C3E50] mb-3 leading-tight">
            Educational Insights
          </h2>
          <p className="text-base md:text-lg text-[#7C8B99] max-w-2xl mx-auto">
            Sharing educational philosophies, learning methods, and industry trends
          </p>
        </div>

        <div className="grid grid-cols-3 gap-5 md:gap-8 max-w-[1200px] mx-auto">
          {articles.map((article, idx) => (
            <div
              key={idx}
              className="bg-[#FBF9F4] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition flex flex-col h-full"
            >
              <div className="relative h-45 md:h-50 bg-white overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover rounded-t-2xl"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 px-3 py-2 bg-white/95 backdrop-blur-sm rounded-xl flex items-center gap-2 shadow-sm">
                  {article.tag === 'Industry Insights' ? (
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      style={{ color: article.tagColor }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      style={{ color: article.tagColor }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  )}
                  <span className="text-sm md:text-base font-medium" style={{ color: article.tagColor }}>
                    {article.tag}
                  </span>
                </div>
              </div>

              <div className="p-5 md:p-6 flex flex-col flex-1 min-h-0">
                <div className="flex-1 min-h-0">
                  <h3 className="text-xl md:text-1.8xl font-semibold text-[#2C3E50] leading-tight mb-3 line-clamp-5 min-h-[5rem]">
                    {article.title}
                  </h3>
                  <p className="text-base md:text-[16px] text-[#7C8B99] leading-snug mb-4 line-clamp-3 min-h-[4.5rem]">
                    {article.excerpt}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-[#E8F4FC]">
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-[#7C8B99] shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="text-sm md:text-base text-[#7C8B99]">{article.date}</span>
                    <span className="text-[#7C8B99]">·</span>
                    <span className="text-sm md:text-base text-[#7C8B99]">{article.time}</span>
                  </div>

                  <Link
                    href={article.url || '#'}
                    className="flex items-center gap-1.5 hover:gap-2 transition-all group"
                  >
                    <span className="text-base md:text-lg font-medium text-[#6BB6FF]">Read</span>
                    <svg
                      className="w-5 h-5 text-[#6BB6FF] transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
