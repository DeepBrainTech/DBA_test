'use client';

import Image from 'next/image';

export default function MathArtPlayDay() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="rounded-[30px] border-2 border-dashed border-[#42A5F5]/30 bg-[#F5FAFF] p-10 mb-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#FFF4E6] px-6 py-3 mb-6">
              <span className="text-2xl">🎨</span>
              <span className="text-[#F4A460] text-sm font-medium">Play Day</span>
            </div>
            <h2 className="text-[32px] font-bold text-[#2C3E50] mb-3">
              Math Art Play Day
            </h2>
            <p className="text-[15px] text-[#2C3E50]/65">
              Chess × Go × Math × Art × Sudoku
            </p>
            <p className="mt-1 text-[13px] text-[#2C3E50]/45">
              Day Workshop For Young Thinkers
            </p>
          </div>
        </div>

        {/* Description */}
        <div className="rounded-[30px] border-2 border-dashed border-[#42A5F5]/30 bg-[#F5FAFF] p-10 mb-10">
          <div className="text-center max-w-[800px] mx-auto">
            <h3 className="text-[20px] font-bold text-[#2C3E50] mb-3">Sharpen your mind through play!</h3>
            <p className="text-[15px] text-[#2C3E50]/65 leading-[1.6]">
              Join us for a day of strategic games and math/logic puzzles that build focus, creativity, and problem-solving skills - all while having fun with friends.
            </p>
          </div>
        </div>

        {/* Schedule & Location */}
        <div className="rounded-[30px] border-2 border-dashed border-[#42A5F5]/30 bg-[#F5FAFF] p-10 mb-10">
          <div className="flex flex-col md:flex-row gap-8 md:justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[20px]">⏰</span>
                <h4 className="text-[20px] font-bold text-[#2C3E50]">Schedule</h4>
              </div>
              <div className="space-y-1.5 text-[15px] text-[#2C3E50]/70 mb-6">
                <p className="font-semibold text-[16px] text-[#2C3E50]">9:00 AM - 3:30 PM</p>
                <p>2025: Dec 19, 26-31</p>
                <p>2026: Jan 2, 19; Feb 16-18; Mar 20; Apr 3, 6-10; May 25; Jun 19, 23-24</p>
              </div>

              <div className="flex items-center gap-3 mb-4">
                <span className="text-[20px]">📍</span>
                <h4 className="text-[20px] font-bold text-[#2C3E50]">Location</h4>
              </div>
              <div className="space-y-1.5 text-[15px] text-[#2C3E50]/70">
                <p>120 County Rd, Suite 100-101, Tenafly, NJ</p>
                <p>560 Sylvan Avenue, First Floor, Suite 1055, Englewood Cliffs, NJ 07632</p>
              </div>
            </div>

            <div className="flex flex-col items-end">
              <div className="relative h-[100px] w-[100px] overflow-hidden rounded-md bg-white">
                <Image
                  src="/math/scan.jpg"
                  alt="WeChat QR Code"
                  width={100}
                  height={100}
                  className="object-contain"
                />
              </div>
              <p className="mt-2 text-right text-[12px] leading-5 text-[#2C3E50]/70">
                Scan to join our<br />WeChat Community
              </p>
            </div>
          </div>
        </div>

        {/* Register Button */}
        <div className="flex justify-center">
          <a
            href="https://forms.gle/2mMzKoQkXHa2CVHe6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#4CAF50] px-10 py-4 text-[16px] font-semibold text-white shadow-lg hover:bg-[#43A047] transition"
          >
            Register Now
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
