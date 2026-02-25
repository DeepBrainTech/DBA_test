/**
 * 文件用途：家长评价区块组件
 * 依赖关系：Next.js Image 组件（区块标签图标）
 * 注意事项：2x2 评价卡片网格、轮播控制、底部统计
 */

'use client';

import Image from 'next/image';
import { useState } from 'react';

interface Testimonial {
  quote: string;
  achievement?: { emoji: string; text: string };
  name: string;
  role: string;
  location: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      'Yanming Zhang is a very nice person and professional tutor who can tutor 60 subjects. He has helped my daughter to ace physics tests in a few lessons and got a 36 in ACT IN A MONTH. Thanks, yanming! You are the best in USA.',
    achievement: { emoji: '🎉', text: '36 points in ACT in a month' },
    name: 'XH J.',
    role: 'Parent of our student',
    location: 'Hackensack, NJ',
    avatar: '👧',
  },
  {
    quote:
      'The tutor session was great. I needed assistance with Intro to Evolution Hw at a college level. Yanming was able to structure the problems down to beginner lever in order to help me understand. I strongly recommend his tutoring sessions even if it for just an hour a day. He was on time and we met in a location close to home.',
    name: 'Yolanda L.',
    role: 'Student',
    location: 'Jersey City, NJ',
    avatar: '👦',
  },
  {
    quote:
      'Professor Zhang is passionate and humorous, and most importantly is dedicated to his students. gives his students a tremendous advantage by conveying a deep understanding of the material, far beyond what is taught in the classroom. We are extremely fortunate and blessed that he has helped us succeed academically. I give him the highest recommendation, without reservation.',
    name: 'B. L.',
    role: 'Neurosurgery Resident at NYU',
    location: 'New York, NY',
    avatar: '👧',
  },
  {
    quote:
      'Yanming helped me self study for AP calculus AB and helped me through AP Physics I. I like his ability to break down concepts and problems into understandable parts, and ended up doing well on both exams.',
    achievement: { emoji: '🌿', text: 'Admitted by Stanford University' },
    name: 'Adam Z.',
    role: 'Student',
    location: 'Englewood Cliff, NJ',
    avatar: '👧',
  },
  // 第二页评价
  {
    quote:
      'Yan has been amazing for my son. He helped improve his ACT score and has really boosted my children\'s confidence in math. I couldn\'t be happier with the progress.',
    name: 'Tekisha N.',
    role: 'Parent of our students',
    location: 'Tenafly, NJ',
    avatar: '🙌',
  },
  {
    quote:
      'I am so grateful for the tutor who helped my son get an A in Chemistry 3 in just three weeks. The support and teaching were exactly what he needed.',
    name: 'Zarina H.',
    role: 'Parent of our student',
    location: 'Jersey City, NJ',
    avatar: '🙌',
  },
  {
    quote:
      'Professor Zhang is a superb and thoughtful tutor. I highly recommend him for GRE Quant preparation. He made the material clear and helped me feel confident going into the exam.',
    name: 'Alyssa M.',
    role: 'Student',
    location: 'New York, NY',
    avatar: '🙌',
  },
];

const stats = [
  { value: '98%', label: 'Referral Rate' },
  { value: '95%', label: 'Renewal Rate' },
  { value: '5.0/5.0', label: 'Satisfaction Rate' },
  { value: '⭐⭐⭐⭐⭐', label: 'Recommendation Rate' },
];

/** 每页展示的卡片数量（第一页 4 张，第二页 3 张） */
const CARDS_PER_PAGE = 4;
const TOTAL_PAGES = Math.ceil(testimonials.length / CARDS_PER_PAGE);

export default function ParentsVoices() {
  const [currentPage, setCurrentPage] = useState(0);
  const start = currentPage * CARDS_PER_PAGE;
  const visibleTestimonials = testimonials.slice(start, start + CARDS_PER_PAGE);

  const goPrev = () => setCurrentPage((p) => Math.max(0, p - 1));
  const goNext = () => setCurrentPage((p) => Math.min(TOTAL_PAGES - 1, p + 1));

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-[#FBF9F4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        {/* 标签与主标题 */}
        <div className="text-center mb-6 sm:mb-8 md:mb-10">
          <div className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 bg-white rounded-full mb-3 sm:mb-4 shadow-sm">
            <Image src="/home/section-icons/testimonials.png" alt="Testimonials" width={32} height={32} className="w-6 h-6 sm:w-8 sm:h-8 shrink-0" />
            <span className="text-base sm:text-lg md:text-xl text-[#6BB6FF]">Testimonials</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2C3E50] mb-2 sm:mb-3 leading-tight">
            Hear from Our Community
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#7C8B99] max-w-2xl mx-auto">
            Trusted by parents, loved by students.
          </p>
        </div>

        {/* 移动端横向滚动 */}
        <div className="md:hidden overflow-x-auto pb-4 -mx-2 px-2 mb-6">
          <div className="flex gap-4 w-max">
            {visibleTestimonials.map((t, idx) => (
              <div
                key={idx}
                className="w-[280px] sm:w-[320px] flex-shrink-0 bg-white rounded-xl p-4 shadow-sm hover:shadow-lg transition flex flex-col border-t-4 border-[#7EC97E]"
              >
                <p className="text-sm sm:text-base text-[#2C3E50] leading-snug mb-3 flex-1 line-clamp-4">
                  &quot;{t.quote}&quot;
                </p>
                {t.achievement && (
                  <div className="inline-flex items-center gap-2 px-2 py-1.5 bg-[rgba(126,201,126,0.13)] rounded-lg mb-3 w-fit">
                    <span className="text-lg">{t.achievement.emoji}</span>
                    <span className="text-sm text-[#7EC97E] font-medium">
                      {t.achievement.text}
                    </span>
                  </div>
                )}
                <div className="flex items-center gap-3 pt-3 border-t border-[#E8F4FC]">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#A8D5FF] to-[#6BB6FF] rounded-xl flex items-center justify-center text-xl sm:text-2xl flex-shrink-0">
                    {t.avatar}
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-base sm:text-lg font-semibold text-[#2C3E50] truncate">
                      {t.name}
                    </h4>
                    <p className="text-sm text-[#7C8B99] truncate">{t.role}</p>
                    <p className="text-sm text-[#7C8B99] truncate">{t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 平板/桌面端 2x2 网格 */}
        <div className="hidden md:grid grid-cols-2 grid-rows-2 gap-4 md:gap-5 mb-6 md:mb-8 max-w-6xl mx-auto h-[680px]">
          {visibleTestimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-4 md:p-5 shadow-sm hover:shadow-lg transition flex flex-col border-t-4 border-[#7EC97E] min-h-0"
            >
              <p className="text-base md:text-lg text-[#2C3E50] leading-snug mb-4 flex-1 min-h-0 overflow-y-auto">
                &quot;{t.quote}&quot;
              </p>
              {t.achievement && (
                <div className="inline-flex items-center gap-2 px-3 py-2 bg-[rgba(126,201,126,0.13)] rounded-xl mb-4 w-fit">
                  <span className="text-xl">{t.achievement.emoji}</span>
                  <span className="text-base text-[#7EC97E] font-medium">
                    {t.achievement.text}
                  </span>
                </div>
              )}
              <div className="flex items-center gap-4 pt-4 border-t border-[#E8F4FC]">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-[#A8D5FF] to-[#6BB6FF] rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                  {t.avatar}
                </div>
                <div>
                  <h4 className="text-lg md:text-xl font-semibold text-[#2C3E50] mb-0.5">
                    {t.name}
                  </h4>
                  <p className="text-base text-[#7C8B99]">{t.role}</p>
                  <p className="text-base text-[#7C8B99]">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Controls */}
        <div className="flex items-center justify-center gap-4 sm:gap-6 mb-8 sm:mb-10 md:mb-12">
          <button
            type="button"
            onClick={goPrev}
            disabled={currentPage === 0}
            className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 bg-[#6BB6FF] hover:bg-[#4A9FEF] disabled:opacity-50 disabled:cursor-not-allowed rounded-xl flex items-center justify-center text-white shadow-md hover:shadow-lg transition"
            aria-label="Previous testimonials"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div className="flex gap-2 items-center">
            {Array.from({ length: TOTAL_PAGES }).map((_, i) => (
              <div
                key={i}
                className={`h-1.5 rounded-full transition ${
                  i === currentPage ? 'bg-[#6BB6FF] w-5' : 'bg-[#E8F4FC] w-1.5'
                }`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={goNext}
            disabled={currentPage === TOTAL_PAGES - 1}
            className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 bg-[#6BB6FF] hover:bg-[#4A9FEF] disabled:opacity-50 disabled:cursor-not-allowed rounded-xl flex items-center justify-center text-white shadow-md hover:shadow-lg transition"
            aria-label="Next testimonials"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Bottom Stats：移动端 2x2 网格，桌面端 4 列 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-6xl mx-auto">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-3 md:p-4 text-center shadow-sm hover:shadow-lg transition"
            >
              <h4 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#6BB6FF] mb-1 sm:mb-2">
                {stat.value}
              </h4>
              <p className="text-sm sm:text-base text-[#7C8B99]">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
