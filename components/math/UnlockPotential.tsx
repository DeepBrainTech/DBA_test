'use client';

export default function UnlockPotential() {
  return (
    <section id="book-free" className="bg-gradient-to-br from-[#4CAF50] via-[#66BB6A] to-[#81C784] py-[80px] relative">
      <div className="max-w-[1920px] mx-auto px-14">
        {/* Limited-time Offer Tag */}
        <div className="flex justify-center mb-[40px]">
          <div className="inline-flex items-center gap-[10px] px-[32px] py-[12px] bg-white/20 backdrop-blur-sm rounded-[32px] text-white">
            <span className="text-[26px]">⚡</span>
            <span className="text-[21px] font-normal">Limited-time Offer</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-[60px] items-start">
          {/* Left Section */}
          <div className="space-y-[32px]">
            <h2 className="text-[42px] font-bold text-white leading-[1.3]">
              Unlock Your Child&apos;s Math Potential
            </h2>
            <p className="text-[21px] text-white/90 leading-[1.6]">
              Don&apos;t let your child&apos;s talent go unnoticed.  Join us to give your child a competitive edge in mathematics!
            </p>

            <div className="space-y-[16px]">
              <div className="flex items-center gap-[16px]">
                <div className="w-[28px] h-[28px] bg-white/30 rounded-[6px] flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
                <span className="text-[21px] text-white">Free Assessment Test</span>
              </div>
              <div className="flex items-center gap-[16px]">
                <div className="w-[28px] h-[28px] bg-white/30 rounded-[6px] flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
                <span className="text-[21px] text-white">Free Trial Class</span>
              </div>
              <div className="flex items-center gap-[16px]">
                <div className="w-[28px] h-[28px] bg-white/30 rounded-[6px] flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
                <span className="text-[21px] text-white">Personalized Learning Plan</span>
              </div>
            </div>

            <div className="flex items-center gap-[22px] flex-wrap">
              <div className="flex items-center gap-[4px]">
                <span className="text-[32px]">🔒</span>
                <span className="text-[18px] text-white/80">Secure Information</span>
              </div>
              <div className="flex items-center gap-[4px]">
                <span className="text-[32px]">⚡</span>
                <span className="text-[18px] text-white/80">Fast Response Time</span>
              </div>
              <div className="flex items-center gap-[4px]">
                <span className="text-[32px]">�</span>
                <span className="text-[18px] text-white/80">Risk-free Guarantee</span>
              </div>
            </div>
          </div>

          {/* Right Section - Consultation Card */}
          <div className="sticky top-[80px]">
            <div className="bg-white rounded-[22px] p-[42px] shadow-xl">
              <h3 className="text-[32px] font-bold text-[#2C3E50] mb-[10px]">
                Schedule Your Consultation
              </h3>
              <p className="text-[21px] text-[#7C8B99] mb-[42px]">
                Submit your information, and we will contact you within 24 hours.
              </p>

              <a
                href="https://forms.gle/2mMzKoQkXHa2CVHe6"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-[10px] px-[42px] h-[76px] bg-[#4CAF50] border-2 border-[#4CAF50] text-white text-[21px] font-normal rounded-[22px] hover:shadow-xl transition mb-[32px]"
              >
                Book Free Trial →
              </a>

              <div className="flex items-center justify-center gap-[48px] pt-[32px] border-t border-[#E8F4FC]">
                <div className="text-center">
                  <div className="text-[24px] font-semibold text-[#4CAF50]">2,456</div>
                  <div className="text-[21px] text-[#7C8B99]">Sessions Booked</div>
                </div>
                <div className="text-center">
                  <div className="text-[24px] font-semibold text-[#4CAF50]">100%</div>
                  <div className="text-[21px] text-[#7C8B99]">Satisfaction Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-[24px] font-semibold text-[#4CAF50]">24h</div>
                  <div className="text-[21px] text-[#7C8B99]">Response Time</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Message */}
        <div className="flex items-center justify-center gap-[27px] mt-[80px]">
          <div className="bg-white/20 rounded-[27px] w-[106px] h-[106px] flex items-center justify-center flex-shrink-0">
            <span className="text-[60px]">🧠</span>
          </div>
          <div className="bg-white/20 rounded-[33px] rounded-bl-[7px] px-[53px] py-[27px] flex-1 max-w-[1115px]">
            <p className="text-[26px] text-white leading-[42px]">
              Join us and make mathematics your child&apos;s competitive edge! Every great mathematician started with a simple problem. 💪
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
