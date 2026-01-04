/**
 * 文件用途：新闻/教育洞察区块组件
 * 依赖关系：依赖 types/program.ts 中的 NewsArticle 类型和 Next.js Image 组件
 * 注意事项：展示3篇最新文章
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
    <section className="py-[133px] bg-[#FBF9F4]">
      <div className="max-w-[1920px] mx-auto px-14">
        <div className="text-center mb-[53px]">
          <div className="inline-flex items-center gap-[27px] px-[27px] py-[13px] bg-[#E8F4FC] rounded-[33px] mb-[27px]">
            <span className="text-[40px]">📚</span>
            <span className="text-[26.5px] text-[#6BB6FF]">Latest News</span>
          </div>
          <h2 className="text-[53px] font-bold text-[#2C3E50] mb-[27px] leading-[1.3]">
            Educational Insights
          </h2>
          <p className="text-[26.5px] text-[#7C8B99]">
            Sharing educational philosophies, learning methods, and industry trends
          </p>
        </div>

        <div className="grid grid-cols-3 gap-[40px]">
          {articles.map((article, idx) => (
            <div key={idx} className="bg-white rounded-[40px] overflow-hidden shadow-md hover:shadow-xl transition flex flex-col h-full">
              <div className="relative h-[318px] bg-white">
                {/* Cover Image */}
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                  loading="lazy"
                />

                {/* Tag */}
                <div className="absolute top-[27px] left-[27px] px-[27px] h-[60px] bg-white/95 rounded-[20px] flex items-center gap-[13px]">
                  <div className="w-[27px] h-[27px] rounded-full" style={{ backgroundColor: article.tagColor }}></div>
                  <span className="text-[23px]" style={{ color: article.tagColor }}>{article.tag}</span>
                </div>
              </div>
              
              <div className="p-[40px] flex flex-col h-full">
                <div className="flex-1">
                  <h3 className="text-[40px] font-normal text-[#2C3E50] leading-[1.05] mb-[20px] min-h-[130px]">
                    {article.title}
                  </h3>
                  <p className="text-[26.5px] text-[#7C8B99] leading-[1.6] mb-[32px]">
                    {article.excerpt}
                  </p>
                </div>
                
                <div className="flex items-center justify-between pt-[32px] border-t border-[#E8F4FC]">
                  <div className="flex items-center gap-[13px]">
                    <svg className="w-[23px] h-[23px] text-[#7C8B99]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-[20px] text-[#7C8B99]">{article.date}</span>
                    <span className="text-[20px] text-[#7C8B99]">•</span>
                    <span className="text-[20px] text-[#7C8B99]">{article.time}</span>
                  </div>
                  
                  <button className="flex items-center gap-[7px] hover:gap-[13px] transition-all">
                    <span className="text-[23px] text-[#6BB6FF]">Read</span>
                    <svg className="w-[27px] h-[27px] text-[#6BB6FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
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

