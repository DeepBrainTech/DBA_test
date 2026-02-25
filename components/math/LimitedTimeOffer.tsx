'use client';

import Image from 'next/image';

export default function LimitedTimeOffer() {
  return (
    <section className="pb-12 sm:pb-16 lg:pb-20 bg-white">
      <div className="mx-auto w-full max-w-[1344px] px-4 sm:px-6 lg:px-9">
        <div className="bg-gradient-to-r from-[#E8F5E9] to-[#F0F4FF] rounded-xl sm:rounded-2xl lg:rounded-[24px] p-4 sm:p-6 lg:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6 lg:gap-8">
          <div className="flex-1">
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4 lg:mb-5">
              <span className="text-xl sm:text-2xl lg:text-[28px]">⏰</span>
              <h3 className="text-xl sm:text-2xl lg:text-[32px] font-bold text-[#2C3E50]">
                Limited Time Offer!
              </h3>
            </div>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#66BB6A] mt-2 flex-shrink-0"></div>
                <p className="text-sm sm:text-base lg:text-[17px] text-[#2C3E50] leading-relaxed">
                  5% off your second course (any course)
                </p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#66BB6A] mt-2 flex-shrink-0"></div>
                <p className="text-sm sm:text-base lg:text-[17px] text-[#2C3E50] leading-relaxed">
                  5% additional discount for onsite registration
                </p>
              </div>
            </div>
          </div>

          <div className="flex-shrink-0 w-full sm:w-auto">
            <a
              href="https://forms.gle/2mMzKoQkXHa2CVHe6"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto min-w-[140px] sm:min-w-[150px] h-11 sm:h-12 md:h-14 px-6 sm:px-8 lg:pl-20 lg:pr-7 py-2.5 sm:py-3 md:py-3.5 rounded-xl sm:rounded-2xl lg:rounded-3xl bg-[#7EC97E] inline-flex justify-center items-center gap-3 sm:gap-4 lg:gap-6 md:gap-7 shadow-md hover:bg-[#6BBD6B] transition-colors no-underline"
              aria-label="Enroll Now"
            >
              <span className="font-outfit text-white text-base sm:text-lg md:text-xl font-bold">
                Enroll Now
              </span>
              <Image
                src="/summer_camp/trackA/registernow.svg"
                alt=""
                width={24}
                height={24}
                className="shrink-0 w-5 h-5 sm:w-6 sm:h-6"
                aria-hidden
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
