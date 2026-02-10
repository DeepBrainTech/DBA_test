/**
 * 文件用途：新闻/教育洞察区块组件
 * 依赖关系：依赖 types/program.ts 中的 NewsArticle 类型和 Next.js Image 组件
 * 注意事项：展示3篇最新文章，整体尺寸缩小15%
 */

import Image from 'next/image';
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
    <section className="py-[113px] bg-gradient-to-b from-[#E8F4FC] to-white">
      <div className="max-w-[1920px] mx-auto px-12">
        <div className="text-center mb-[45px]">
          <div className="inline-flex items-center gap-[23px] px-[23px] py-[11px] bg-white rounded-[28px] mb-[23px] shadow-sm border border-[#E8F4FC]">
            <span className="text-[34px]">📚</span>
            <span className="text-[22.5px] text-[#6BB6FF]">Blog</span>
          </div>
          <h2 className="text-[45px] font-bold text-[#2C3E50] mb-[23px] leading-[1.3]">
            Educational Insights
          </h2>
          <p className="text-[22.5px] text-[#7C8B99]">
            Sharing educational philosophies, learning methods, and industry trends
          </p>
        </div>

        <div className="grid grid-cols-3 gap-[34px]">
          {articles.map((article, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[34px] overflow-hidden shadow-md hover:shadow-xl transition flex flex-col h-full"
            >
              <div className="relative h-[270px] bg-white">
                {/* Cover Image */}
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover rounded-t-[34px]"
                  loading="lazy"
                />

                {/* Tag Overlay */}
                <div className="absolute top-[23px] left-[23px] px-[23px] py-[10px] bg-white/95 backdrop-blur-sm rounded-[17px] flex items-center gap-[11px] shadow-sm">
                  {article.tag === 'Industry Insights' ? (
                    <svg
                      className="w-[18px] h-[18px]"
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
                      className="w-[18px] h-[18px]"
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
                  <span className="text-[19.5px] font-medium" style={{ color: article.tagColor }}>
                    {article.tag}
                  </span>
                </div>
              </div>

              <div className="p-[34px] flex flex-col h-full">
                <div className="flex-1">
                  <h3 className="text-[34px] font-normal text-[#2C3E50] leading-[1.05] mb-[17px] min-h-[110px]">
                    {article.title}
                  </h3>
                  <p className="text-[22.5px] text-[#7C8B99] leading-[1.6] mb-[27px]">
                    {article.excerpt}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-[27px] border-t border-[#E8F4FC]">
                  <div className="flex items-center gap-[11px]">
                    <svg
                      className="w-[19.5px] h-[19.5px] text-[#7C8B99]"
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
                    <span className="text-[17px] text-[#7C8B99]">{article.date}</span>
                    <span className="text-[17px] text-[#7C8B99]">·</span>
                    <span className="text-[17px] text-[#7C8B99]">{article.time}</span>
                  </div>

                  <button className="flex items-center gap-[6px] hover:gap-[11px] transition-all group">
                    <span className="text-[19.5px] text-[#6BB6FF] font-medium">Read</span>
                    <svg
                      className="w-[23px] h-[23px] text-[#6BB6FF] transition-transform group-hover:translate-x-1"
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
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
