/**
 * 文件用途：Book Free 预订表单组件（全球教育页面）
 * 依赖关系：无
 * 注意事项：包含营销内容和预订表单
 */

'use client';

import { scrollToElement } from '@/lib/scroll';

interface Benefit {
  icon: string;
  text: string;
}

const benefits: Benefit[] = [
  {
    icon: '📋',
    text: 'Personalized Report'
  },
  {
    icon: '🎯',
    text: 'One-on-one consultation'
  },
  {
    icon: '📊',
    text: 'Background Evaluation & Analysis'
  },
  {
    icon: '🎁',
    text: 'Exclusive Application Resource Kit.'
  }
];

export default function BookFreeSection() {
  return (
    <section id="book-free" className="bg-gradient-to-b from-[#B7AAFB] to-[#9A8ED7] py-[80px] relative">
      <div className="max-w-[1920px] mx-auto px-14">
        <div className="grid grid-cols-2 gap-[60px] items-start">
          {/* Left Section - Marketing Content */}
          <div className="space-y-[32px]">
            {/* Limited-time Offer Tag */}
            <div className="flex justify-center">
              <div className="inline-flex items-center gap-[10px] px-[32px] py-[12px] bg-white/20 backdrop-blur-sm rounded-[32px] text-white">
                <span className="text-[26px]">⚡</span>
                <span className="text-[21px] font-normal">Limited-time Offer</span>
              </div>
            </div>

            {/* Main Heading */}
            <h2 className="text-[42px] font-bold text-white leading-[1.3]">
              Your journey to a top school deserves a true strategic partner.
            </h2>

            {/* Subtitle */}
            <p className="text-[21px] text-white/90 leading-[1.6]">
              Book a consultation with our chief advisor now.
            </p>

            {/* You'll Get Section */}
            <div className="space-y-[16px]">
              <h3 className="text-[24px] font-semibold text-white">
                You'll Get:
              </h3>
              <div className="space-y-[16px]">
                {benefits.map((benefit, idx) => (
                  <div
                    key={idx}
                    className="bg-white/10 rounded-[16px] px-[22px] py-[21px] flex items-center gap-[16px]"
                  >
                    <span className="text-[32px] flex-shrink-0">{benefit.icon}</span>
                    <span className="text-[21px] text-white">
                      {benefit.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Reserved Count */}
            <div className="bg-white/20 rounded-[16px] px-[22px] py-[16px] flex items-center gap-[16px]">
              <span className="text-[32px]">⏰</span>
              <div>
                <span className="text-[21px] text-white font-bold">2,456</span>
                <span className="text-[21px] text-white ml-[8px]">Reserved</span>
              </div>
            </div>

            {/* Guarantees/Features */}
            <div className="flex items-center gap-[22px] flex-wrap">
              <div className="flex items-center gap-[4px]">
                <span className="text-[32px]">🔒</span>
                <span className="text-[18px] text-white/80">Secure Information</span>
              </div>
              <div className="flex items-center gap-[4px]">
                <span className="text-[32px]">⚡</span>
                <span className="text-[18px] text-white/80">Fast Responding</span>
              </div>
              <div className="flex items-center gap-[4px]">
                <span className="text-[32px]">💯</span>
                <span className="text-[18px] text-white/80">Risk-free Guarantee</span>
              </div>
            </div>

            {/* Bottom Message - will be positioned at the bottom */}
          </div>

          {/* Right Section - Booking Form */}
          <div className="sticky top-[80px]">
            <div className="bg-white rounded-[22px] p-[42px] shadow-xl">
              {/* Form Title */}
              <h3 className="text-[32px] font-bold text-[#2C3E50] mb-[10px]">
                Book Free Now
              </h3>

              {/* Form Subtitle */}
              <p className="text-[21px] text-[#7C8B99] mb-[42px]">
                Submit info, advisor contacts you within 24h.
              </p>

              {/* Form Fields */}
              <form className="space-y-[22px]">
                <div>
                  <label className="block text-[18px] font-normal text-[#2C3E50] mb-[10px]">
                    Student Name <span className="text-[#F4A460]">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Student Name"
                    className="w-full px-[22px] py-[16px] bg-[#FBF9F4] border-2 border-transparent rounded-[16px] text-[21px] text-[#7C8B99] focus:outline-none focus:ring-2 focus:ring-[#9B8FD8] focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-[18px] font-normal text-[#2C3E50] mb-[10px]">
                    Target Country/City <span className="text-[#F4A460]">*</span>
                  </label>
                  <select className="w-full px-[22px] py-[16px] bg-[#FBF9F4] border-2 border-transparent rounded-[16px] text-[21px] text-[#7C8B99] focus:outline-none focus:ring-2 focus:ring-[#9B8FD8] focus:border-transparent">
                    <option value="">Please select target country/region</option>
                    <option value="us">United States</option>
                    <option value="uk">United Kingdom</option>
                    <option value="ca">Canada</option>
                    <option value="au">Australia</option>
                    <option value="sg">Singapore</option>
                    <option value="hk">Hong Kong</option>
                    <option value="eu">Europe</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[18px] font-normal text-[#2C3E50] mb-[10px]">
                    Application Stage <span className="text-[#F4A460]">*</span>
                  </label>
                  <select className="w-full px-[22px] py-[16px] bg-[#FBF9F4] border-2 border-transparent rounded-[16px] text-[21px] text-[#7C8B99] focus:outline-none focus:ring-2 focus:ring-[#9B8FD8] focus:border-transparent">
                    <option value="">Please select application stage</option>
                    <option value="high-school">High School</option>
                    <option value="undergraduate">Undergraduate</option>
                    <option value="master">Master</option>
                    <option value="phd">PhD</option>
                    <option value="summer">Summer School/Exchange</option>
                    <option value="undecided">Undecided</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[18px] font-normal text-[#2C3E50] mb-[10px]">
                    Contact Number <span className="text-[#F4A460]">*</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="Enter Guardian's Phone Number"
                    className="w-full px-[22px] py-[16px] bg-[#FBF9F4] border-2 border-transparent rounded-[16px] text-[21px] text-[#7C8B99] focus:outline-none focus:ring-2 focus:ring-[#9B8FD8] focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-[18px] font-normal text-[#2C3E50] mb-[10px]">
                    Wechat <span className="text-[18px] text-[#7C8B99] ml-[8px]">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    className="w-full px-[22px] py-[16px] bg-[#FBF9F4] border-2 border-transparent rounded-[16px] text-[21px] text-[#7C8B99] focus:outline-none focus:ring-2 focus:ring-[#9B8FD8] focus:border-transparent"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-[10px] px-[42px] h-[76px] bg-gradient-to-b from-[#9B8FD8] to-[#8A7CC7] text-white text-[21px] font-normal rounded-[22px] hover:shadow-xl transition"
                >
                  Book Free Now
                  <svg className="w-[26px] h-[26px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.77} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>

                {/* Privacy Statement */}
                <p className="text-[19px] text-[#7C8B99] text-center leading-[25px]">
                  Your data is private and secure.<br />
                  Submit & agree to receive course info.
                </p>

                {/* Statistics */}
                <div className="flex items-center justify-center gap-[48px] pt-[32px] border-t border-[#E8F4FC]">
                  <div className="text-center">
                    <div className="text-[24px] font-semibold text-[#9B8FD8]">2,456</div>
                    <div className="text-[21px] text-[#7C8B99]">Reserved</div>
                  </div>
                  <div className="text-center">
                    <div className="text-[24px] font-semibold text-[#9B8FD8]">99%</div>
                    <div className="text-[21px] text-[#7C8B99]">Satisfied</div>
                  </div>
                  <div className="text-center">
                    <div className="text-[24px] font-semibold text-[#9B8FD8]">3</div>
                    <div className="text-[21px] text-[#7C8B99]">spots left</div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Message - Positioned at bottom */}
        <div className="flex items-center justify-center gap-[27px] mt-[80px]">
          <div className="bg-white/20 rounded-[27px] w-[106px] h-[106px] flex items-center justify-center flex-shrink-0">
            <span className="text-[60px]">💭</span>
          </div>
          <div className="bg-white/20 rounded-[33px] rounded-bl-[7px] px-[53px] py-[27px] flex-1 max-w-[1115px]">
            <p className="text-[26px] text-white leading-[42px]">
              Behind every acceptance: planning, guidance, and partnership. Start your journey here—let's make it possible! 🚀
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
