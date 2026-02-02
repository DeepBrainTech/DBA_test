/**
 * 文件用途：Book Free 预订入口组件（全球教育页面）
 * 依赖关系：无
 */

'use client';

// TODO: 替换为你的 Google Form 链接
const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSfAceUQq9JJ3uu-EcWlHkTQ1O1jY_uzh-fptrN7_JC9rf-dqg/viewform';

interface Benefit {
  icon: string;
  text: string;
}

const benefits: Benefit[] = [
  { icon: '📋', text: 'Personalized Report' },
  { icon: '🎯', text: 'One-on-one consultation' },
  { icon: '📊', text: 'Background Evaluation & Analysis' },
];

const stats = [
  { value: '1,234', label: 'Sessions Booked' },
  { value: '100%', label: 'Satisfaction Rate' },
  { value: '24h', label: 'Response Time' },
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
              <h3 className="text-[24px] font-semibold text-white">You'll Get:</h3>
              <div className="space-y-[16px]">
                {benefits.map((benefit, idx) => (
                  <div
                    key={idx}
                    className="bg-white/10 rounded-[16px] px-[22px] py-[21px] flex items-center gap-[16px]"
                  >
                    <span className="text-[32px] flex-shrink-0">{benefit.icon}</span>
                    <span className="text-[21px] text-white">{benefit.text}</span>
                  </div>
                ))}
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
          </div>

          {/* Right Section - Simplified Schedule Card */}
          <div className="sticky top-[80px]">
            <div className="bg-white rounded-[22px] p-[42px] shadow-xl">
              <h2 className="text-[32px] font-bold text-[#2C3E50] mb-[10px]">
                Schedule Your Consultation
              </h2>
              <p className="text-[21px] text-[#7C8B99] mb-[32px] leading-relaxed">
                Submit your details and an advisor will contact you within 24h.
              </p>

              <a
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-[10px] w-full px-[42px] h-[76px] bg-gradient-to-b from-[#9B8FD8] to-[#8A7CC7] text-white text-[21px] font-normal rounded-[22px] hover:shadow-xl transition"
              >
                Book Free Trial
                <svg className="w-[26px] h-[26px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.77} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>

              <div className="flex items-center justify-center gap-[48px] mt-[32px] pt-[32px] border-t border-[#E8F4FC]">
                {stats.map((item, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-[24px] font-semibold text-[#9B8FD8]">{item.value}</div>
                    <div className="text-[21px] text-[#7C8B99]">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Tagline */}
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
