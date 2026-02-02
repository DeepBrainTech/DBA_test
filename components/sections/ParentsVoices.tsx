/**
 * 文件用途：家长评价区块组件
 * 依赖关系：无
 * 注意事项：2x2 评价卡片网格、轮播控制、底部统计
 */

'use client';

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
    avatar: '🙌',
  },
  {
    quote:
      'The tutor session was great. I needed assistance with Intro to Evolution Hw at a college level. Yanming was able to structure the problems down to beginner lever in order to help me understand. I strongly recommend his tutoring sessions even if it for just an hour a day. He was on time and we met in a location close to home.',
    name: 'Yolanda L.',
    role: 'Student',
    location: 'Jersey City, NJ',
    avatar: '🙌',
  },
  {
    quote:
      'Professor Zhang is passionate and humorous, and most importantly is dedicated to his students. gives his students a tremendous advantage by conveying a deep understanding of the material, far beyond what is taught in the classroom. We are extremely fortunate and blessed that he has helped us succeed academically. I give him the highest recommendation, without reservation.',
    name: 'B. L.',
    role: 'Neurosurgery Resident at NYU',
    location: 'New York, NY',
    avatar: '🙌',
  },
  {
    quote:
      'Yanming helped me self study for AP calculus AB and helped me through AP Physics I. I like his ability to break down concepts and problems into understandable parts, and ended up doing well on both exams.',
    achievement: { emoji: '🌿', text: 'Admitted by Stanford University' },
    name: 'Adam Z.',
    role: 'Student',
    location: 'Englewood Cliff, NJ',
    avatar: '🙌',
  },
];

const stats = [
  { value: '98%', label: 'Referral Rate' },
  { value: '95%', label: 'Renewal Rate' },
  { value: '5.0/5.0', label: 'Satisfaction Rate' },
  { value: '⭐⭐⭐⭐⭐', label: 'Recommendation Rate' },
];

const PAGINATION_DOTS = 6;

export default function ParentsVoices() {
  return (
    <section className="py-[113px] bg-white">
      <div className="max-w-[1920px] mx-auto px-12">
        {/* Header */}
        <div className="text-center mb-[45px]">
          <div className="inline-flex items-center gap-[23px] px-[23px] py-[11px] bg-white rounded-[28px] mb-[23px] shadow-sm border border-[#E8F4FC]">
            <span className="text-[34px]">💬</span>
            <span className="text-[22.5px] text-[#6BB6FF]">Testimonials</span>
          </div>
          <h2 className="text-[45px] font-bold text-[#2C3E50] mb-[23px] leading-[1.3]">
            Hear from Our Community
          </h2>
          <p className="text-[22.5px] text-[#7C8B99]">
            Trusted by parents, loved by students.
          </p>
        </div>

        {/* 2x2 Testimonial Grid */}
        <div className="grid grid-cols-2 gap-[23px] mb-[34px]">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[23px] p-[34px] shadow-[0px_6px_8px_-6px_rgba(0,0,0,0.1),0px_14px_21px_-4px_rgba(0,0,0,0.1)] hover:shadow-lg transition flex flex-col"
            >
              <p className="text-[22.5px] text-[#2C3E50] leading-[1.6] mb-[23px] flex-1">
                &quot;{t.quote}&quot;
              </p>
              {t.achievement && (
                <div className="inline-flex items-center gap-[11px] px-[23px] py-[11px] bg-[rgba(126,201,126,0.13)] rounded-[23px] mb-[23px] w-fit">
                  <span className="text-[24px]">{t.achievement.emoji}</span>
                  <span className="text-[20px] text-[#7EC97E] font-medium">
                    {t.achievement.text}
                  </span>
                </div>
              )}
              <div className="flex items-center gap-[23px] pt-[17px] border-t border-[#E8F4FC]">
                <div className="w-[56px] h-[56px] bg-gradient-to-br from-[#A8D5FF] to-[#6BB6FF] rounded-[17px] flex items-center justify-center text-[27px] flex-shrink-0">
                  {t.avatar}
                </div>
                <div>
                  <h4 className="text-[22px] font-semibold text-[#2C3E50] mb-[3px]">
                    {t.name}
                  </h4>
                  <p className="text-[19px] text-[#7C8B99]">{t.role}</p>
                  <p className="text-[19px] text-[#7C8B99]">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Controls */}
        <div className="flex items-center justify-center gap-[34px] mb-[68px]">
          <button
            type="button"
            className="w-[51px] h-[51px] bg-[#6BB6FF] hover:bg-[#4A9FEF] rounded-[17px] flex items-center justify-center text-white shadow-md hover:shadow-lg transition"
            aria-label="Previous testimonials"
          >
            <svg className="w-[24px] h-[24px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div className="flex gap-[8px] items-center">
            {Array.from({ length: PAGINATION_DOTS }).map((_, i) => (
              <div
                key={i}
                className={`h-[8px] rounded-full transition ${
                  i === 0 ? 'bg-[#6BB6FF] w-[20px]' : 'bg-[#E8F4FC] w-[8px]'
                }`}
              />
            ))}
          </div>
          <button
            type="button"
            className="w-[51px] h-[51px] bg-[#6BB6FF] hover:bg-[#4A9FEF] rounded-[17px] flex items-center justify-center text-white shadow-md hover:shadow-lg transition"
            aria-label="Next testimonials"
          >
            <svg className="w-[24px] h-[24px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-4 gap-[34px]">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[23px] p-[34px] text-center shadow-sm hover:shadow-lg transition"
            >
              <h4 className="text-[25.5px] font-semibold text-[#6BB6FF] mb-[11px]">
                {stat.value}
              </h4>
              <p className="text-[22.5px] text-[#7C8B99]">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
