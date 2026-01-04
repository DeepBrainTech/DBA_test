/**
 * 文件用途：家长评价区块组件
 * 依赖关系：依赖 Next.js Image 组件
 * 注意事项：包含评价卡片、轮播控制和统计数据
 */

'use client';

import Image from 'next/image';

/**
 * 家长评价组件
 */
export default function ParentsVoices() {
  return (
    <section className="py-[133px] bg-white">
      <div className="max-w-[1920px] mx-auto px-14">
        <div className="text-center mb-[53px]">
          <div className="inline-flex items-center gap-[27px] px-[27px] py-[13px] bg-white rounded-[33px] mb-[27px] shadow-sm">
            <span className="text-[40px]">💬</span>
            <span className="text-[26.5px] text-[#6BB6FF]">Parents' Voices</span>
          </div>
          <h2 className="text-[53px] font-bold text-[#2C3E50] mb-[27px] leading-[1.3]">
            Listen to what they said
          </h2>
          <p className="text-[26.5px] text-[#7C8B99]">
            Authentic learning experiences, endorsed by parents and children.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-[67px]">
          {/* Image */}
          <div className="relative">
            <div className="relative w-[864px] h-[399px] rounded-[40px] overflow-hidden shadow-[0px_41px_83px_-20px_rgba(0,0,0,0.25)]">
              <Image
                src="/Image (成功案例).svg"
                alt="Success Story"
                fill
                loading="lazy"
                className="object-cover"
              />
            </div>
            
            {/* Quote Icon Overlay */}
            <div className="absolute -top-[20px] -left-[20px] w-[132px] h-[132px] bg-gradient-to-b from-[#6BB6FF] to-[#4A9FEF] rounded-[33px] shadow-xl flex items-center justify-center z-10">
              <Image src="/quote.svg" alt="Quote" width={60} height={60} />
            </div>
          </div>

          {/* Testimonial */}
          <div>
            <div className="bg-white rounded-[40px] shadow-[0px_7px_10px_-7px_rgba(0,0,0,0.1),0px_17px_25px_-5px_rgba(0,0,0,0.1)] p-[53px] mb-[40px] relative overflow-hidden">
              <p className="text-[26.5px] text-[#2C3E50] leading-[1.6] mb-[40px]">
                "One year of Math Olympiad here transformed my son. He shifted from resisting to actively loving math. The teachers are patient and make complex concepts easy to understand."
              </p>
              
              <div className="inline-flex items-center gap-[27px] px-[27px] h-[73px] bg-[rgba(126,201,126,0.13)] rounded-[27px] mb-[40px]">
                <span className="text-[33px]">🎉</span>
                <span className="text-[23px] text-[#7EC97E] font-medium">Math score improved by 36 points</span>
              </div>

              <div className="flex items-center gap-[27px] pt-[40px] border-t border-[#E8F4FC]">
                <div className="w-[93px] h-[93px] bg-gradient-to-br from-[#A8D5FF] to-[#6BB6FF] rounded-[23px] flex items-center justify-center text-[40px]">
                  👩
                </div>
                <div>
                  <h4 className="text-[30px] font-semibold text-[#2C3E50]">Mrs. Sun</h4>
                  <p className="text-[26.5px] text-[#7C8B99]">Parent of our student</p>
                  <p className="text-[26.5px] text-[#7C8B99]">Hackensack, NJ</p>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-[10px] bg-[#7EC97E] rounded-b-[40px]"></div>
            </div>

            {/* Carousel Controls */}
            <div className="flex items-center justify-between">
              <button className="w-[79px] h-[79px] bg-white rounded-[20px] shadow-md flex items-center justify-center hover:shadow-lg transition">
                <svg className="w-[40px] h-[40px] text-[#6BB6FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3.3} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <div className="flex gap-[13px]">
                <div className="w-[40px] h-[7px] bg-[#6BB6FF] rounded-full"></div>
                <div className="w-[13px] h-[7px] bg-[#E8F4FC] rounded-full"></div>
                <div className="w-[13px] h-[7px] bg-[#E8F4FC] rounded-full"></div>
              </div>
              
              <button className="w-[79px] h-[79px] bg-white rounded-[20px] shadow-md flex items-center justify-center hover:shadow-lg transition">
                <svg className="w-[40px] h-[40px] text-[#6BB6FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3.3} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-4 gap-[40px] mt-[80px]">
          {[
            { value: '98%', label: 'Parent Referral Rate' },
            { value: '95%', label: 'Renewal Rate' },
            { value: '4.9/5.0', label: 'Satisfaction Rate' },
            { value: '⭐⭐⭐⭐⭐', label: 'Recommendation Rate' }
          ].map((stat, idx) => (
            <div key={idx} className="bg-white rounded-[27px] p-[40px] text-center shadow-sm hover:shadow-lg transition">
              <h4 className="text-[30px] font-semibold text-[#6BB6FF] mb-[13px]">{stat.value}</h4>
              <p className="text-[26.5px] text-[#7C8B99]">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

