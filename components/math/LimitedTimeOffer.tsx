'use client';

export default function LimitedTimeOffer() {
  return (
    <section className="pb-[80px] bg-white">
      <div className="max-w-[1920px] mx-auto px-14">
        <div className="bg-gradient-to-r from-[#E8F5E9] to-[#F0F4FF] rounded-[27px] p-[40px] flex items-center justify-between gap-[40px]">
          <div className="flex-1">
            <div className="flex items-center gap-[13px] mb-[20px]">
              <span className="text-[32px]">⏰</span>
              <h3 className="text-[40px] font-bold text-[#2C3E50]">
                Limited Time Offer!
              </h3>
            </div>
            <div className="space-y-[13px]">
              <div className="flex items-start gap-[10px]">
                <div className="w-[6px] h-[6px] rounded-full bg-[#66BB6A] mt-[10px] flex-shrink-0"></div>
                <p className="text-[20px] text-[#2C3E50] leading-[1.3]">
                  5% off your second course (any course)
                </p>
              </div>
              <div className="flex items-start gap-[10px]">
                <div className="w-[6px] h-[6px] rounded-full bg-[#66BB6A] mt-[10px] flex-shrink-0"></div>
                <p className="text-[20px] text-[#2C3E50] leading-[1.3]">
                  5% additional discount for onsite registration
                </p>
              </div>
            </div>
          </div>

          <div className="flex-shrink-0">
            <a
              href="https://forms.gle/2mMzKoQkXHa2CVHe6"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-[13px] px-[53px] h-[95px] bg-[#4CAF50] text-white text-[28px] font-semibold rounded-[40px] hover:bg-[#43A047] hover:shadow-xl transition"
            >
              Enroll Now
              <svg className="w-[33px] h-[33px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.77} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
