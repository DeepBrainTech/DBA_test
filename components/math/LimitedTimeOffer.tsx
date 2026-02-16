'use client';

export default function LimitedTimeOffer() {
  return (
    <section className="pb-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="bg-gradient-to-r from-[#E8F5E9] to-[#F0F4FF] rounded-[24px] p-8 flex items-center justify-between gap-8">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-[28px]">⏰</span>
              <h3 className="text-[32px] font-bold text-[#2C3E50]">
                Limited Time Offer!
              </h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <div className="w-[5px] h-[5px] rounded-full bg-[#66BB6A] mt-[8px] flex-shrink-0"></div>
                <p className="text-[17px] text-[#2C3E50] leading-[1.4]">
                  5% off your second course (any course)
                </p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-[5px] h-[5px] rounded-full bg-[#66BB6A] mt-[8px] flex-shrink-0"></div>
                <p className="text-[17px] text-[#2C3E50] leading-[1.4]">
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
              className="flex items-center justify-center gap-3 px-10 py-5 bg-[#4CAF50] text-white text-[20px] font-semibold rounded-full hover:bg-[#43A047] hover:shadow-xl transition"
            >
              Enroll Now
              <svg className="w-[24px] h-[24px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
