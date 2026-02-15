'use client';

export default function UnlockPotential() {
  return (
    <section id="book-free" className="bg-gradient-to-br from-[#4CAF50] via-[#66BB6A] to-[#81C784] py-20 relative">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Limited-time Offer Tag */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex items-center gap-2 px-6 py-2.5 bg-white/20 backdrop-blur-sm rounded-full text-white">
            <span className="text-[20px]">⚡</span>
            <span className="text-[16px] font-normal">Limited-time Offer</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left Section */}
          <div className="space-y-8">
            <h2 className="text-[36px] font-bold text-white leading-[1.3]">
              Unlock Your Child&apos;s Math Potential
            </h2>
            <p className="text-[17px] text-white/90 leading-[1.6]">
              Don&apos;t let your child&apos;s talent go unnoticed. Join us to give your child a competitive edge in mathematics!
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-[24px] h-[24px] bg-white/30 rounded-[6px] flex items-center justify-center flex-shrink-0">
                  <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
                <span className="text-[17px] text-white">Free Assessment Test</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-[24px] h-[24px] bg-white/30 rounded-[6px] flex items-center justify-center flex-shrink-0">
                  <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
                <span className="text-[17px] text-white">Free Trial Class</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-[24px] h-[24px] bg-white/30 rounded-[6px] flex items-center justify-center flex-shrink-0">
                  <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
                <span className="text-[17px] text-white">Personalized Learning Plan</span>
              </div>
            </div>

            <div className="flex items-center gap-5 flex-wrap">
              <div className="flex items-center gap-1.5">
                <span className="text-[24px]">🔒</span>
                <span className="text-[15px] text-white/80">Secure Information</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-[24px]">⚡</span>
                <span className="text-[15px] text-white/80">Fast Response Time</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-[24px]">🛡</span>
                <span className="text-[15px] text-white/80">Risk-free Guarantee</span>
              </div>
            </div>
          </div>

          {/* Right Section - Consultation Card */}
          <div className="sticky top-20">
            <div className="bg-white rounded-[20px] p-8 shadow-xl">
              <h3 className="text-[26px] font-bold text-[#2C3E50] mb-2">
                Schedule Your Consultation
              </h3>
              <p className="text-[16px] text-[#7C8B99] mb-8">
                Submit your information, and we will contact you within 24 hours.
              </p>

              <a
                href="https://forms.gle/2mMzKoQkXHa2CVHe6"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-[#4CAF50] border-2 border-[#4CAF50] text-white text-[17px] font-semibold rounded-full hover:shadow-xl transition mb-6"
              >
                Book Free Trial →
              </a>

              <div className="flex items-center justify-center gap-8 pt-6 border-t border-[#E8F4FC]">
                <div className="text-center">
                  <div className="text-[20px] font-semibold text-[#4CAF50]">2,456</div>
                  <div className="text-[14px] text-[#7C8B99]">Sessions Booked</div>
                </div>
                <div className="text-center">
                  <div className="text-[20px] font-semibold text-[#4CAF50]">100%</div>
                  <div className="text-[14px] text-[#7C8B99]">Satisfaction Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-[20px] font-semibold text-[#4CAF50]">24h</div>
                  <div className="text-[14px] text-[#7C8B99]">Response Time</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Message */}
        <div className="flex items-center justify-center gap-6 mt-16">
          <div className="bg-white/20 rounded-[20px] w-[80px] h-[80px] flex items-center justify-center flex-shrink-0">
            <span className="text-[48px]">🧠</span>
          </div>
          <div className="bg-white/20 rounded-[24px] rounded-bl-[6px] px-10 py-6 flex-1 max-w-[900px]">
            <p className="text-[18px] text-white leading-[1.6]">
              Join us and make mathematics your child&apos;s competitive edge! Every great mathematician started with a simple problem. 💪
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
