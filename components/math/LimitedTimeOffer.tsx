'use client';

import Image from 'next/image';

export default function LimitedTimeOffer() {
  return (
    <section className="pb-20 bg-white">
      <div className="mx-auto w-full max-w-[1344px] px-9">
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
              className="min-w-[150px] h-12 md:h-14 pl-18 pr-6 py-3 md:pl-20 md:pr-7 md:py-3.5 rounded-3xl bg-[#7EC97E] inline-flex flex-col justify-center items-center shadow-[0px_4.65px_6.97px_-4.65px_rgba(0,0,0,0.10)] shadow-[0px_11.62px_17.42px_-3.48px_rgba(0,0,0,0.10)] hover:bg-[#6BBD6B] transition-colors no-underline"
              aria-label="Enroll Now"
            >
              <div className="inline-flex items-center justify-center gap-6 md:gap-7">
                <span className="font-outfit text-white text-lg md:text-xl font-bold leading-7">
                  Enroll Now
                </span>
                <Image
                  src="/summer_camp/trackA/registernow.svg"
                  alt=""
                  width={24}
                  height={24}
                  className="shrink-0 w-6 h-6"
                  aria-hidden
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
