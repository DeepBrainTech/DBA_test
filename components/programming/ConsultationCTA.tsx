'use client';

import Image from 'next/image';

type Benefit = {
  title: string;
  icon: string; // emoji 或图片路径
};

const BENEFITS: Benefit[] = [
  { icon: '📋', title: 'Personalized Report' },
  { icon: '🎯', title: 'One-on-one consultation' },
  { icon: '📊', title: 'Background Evaluation & Analysis' },
];

type Stat = {
  value: string;
  label: string;
};

const STATS: Stat[] = [
  { value: '2,456', label: 'Sessions Booked' },
  { value: '100%', label: 'Satisfaction Rate' },
  { value: '24h', label: 'Response Time' },
];

export default function ConsultationCTA() {
  return (
    <section className="w-full">
      {/* 背景渐变 */}
      <div className="bg-gradient-to-b from-[#44D1C6] via-[#35C6BD] to-[#1DA89E]">
        <div className="mx-auto w-[1400px] px-[60px] py-[64px] font-outfit">
          {/* top badge */}
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-[10px] rounded-[999px] bg-white/20 px-[18px] py-[8px] text-white shadow-[0_10px_30px_rgba(0,0,0,0.08)] backdrop-blur">
              <span className="text-[14px]">✨</span>
              <span className="text-[13px] font-medium">Limited-time Offer</span>
            </div>
          </div>

          {/* main grid */}
          <div className="mt-[34px] grid grid-cols-2 gap-[42px] items-start">
            {/* LEFT */}
            <div className="text-white">
              <h2 className="text-[40px] leading-[48px] font-semibold">
                Your path to a dream school
                <br />
                deserves a strategic partner.
              </h2>

              <p className="mt-[14px] text-white/85 text-[14px] leading-[22px] max-w-[520px]">
                Book a free consultation with our advisor now.
              </p>

              <div className="mt-[26px] text-[14px] font-semibold">You’ll Get:</div>

              <div className="mt-[14px] flex flex-col gap-[12px] w-[520px]">
                {BENEFITS.map((b) => (
                  <div
                    key={b.title}
                    className="h-[50px] rounded-[12px] bg-white/14 backdrop-blur flex items-center gap-[14px] px-[16px] shadow-[0_10px_26px_rgba(0,0,0,0.10)]"
                  >
                    <div className="h-[34px] w-[34px] rounded-[10px] bg-white/20 flex items-center justify-center">
                      <span className="text-[16px]">{b.icon}</span>
                    </div>
                    <div className="text-[13px] text-white/95">{b.title}</div>
                  </div>
                ))}
              </div>

              {/* small assurances row */}
              <div className="mt-[18px] flex items-center gap-[18px] text-[12px] text-white/85">
                <span className="inline-flex items-center gap-[8px]">
                  <span>🔒</span> Secure Information
                </span>
                <span className="inline-flex items-center gap-[8px]">
                  <span>⚡</span> Fast Response Time
                </span>
                <span className="inline-flex items-center gap-[8px]">
                  <span>💯</span> Risk-free Guarantee
                </span>
              </div>
            </div>

            {/* RIGHT CARD */}
            <div className="flex justify-end">
              <div className="w-[520px] rounded-[18px] bg-white shadow-[0_30px_80px_rgba(0,0,0,0.22)] px-[34px] py-[28px]">
                <div className="text-[#1F2937] text-[18px] font-semibold">
                  Schedule Your Consultation
                </div>
                <div className="mt-[6px] text-[12px] leading-[18px] text-[#6B7280]">
                  Submit your details and an advisor will contact you within 24h.
                </div>

                <button
                  className="
                    mt-[18px] w-full h-[44px]
                    rounded-[12px]
                    bg-gradient-to-r from-[#2FBFB6] to-[#23B1A8]
                    text-white text-[13px] font-semibold
                    shadow-[0_14px_30px_rgba(35,177,168,0.28)]
                    hover:translate-y-[-1px] hover:shadow-[0_18px_36px_rgba(35,177,168,0.33)]
                    transition
                    inline-flex items-center justify-center gap-[10px]
                  "
                >
                  Book Free Trial <span className="text-[16px] leading-[16px]">→</span>
                </button>

                <div className="mt-[18px] h-[1px] w-full bg-[#E5E7EB]" />

                <div className="mt-[18px] grid grid-cols-3 gap-[10px] text-center">
                  {STATS.map((s) => (
                    <div key={s.label}>
                      <div className="text-[#2FBFB6] font-semibold text-[14px]">
                        {s.value}
                      </div>
                      <div className="mt-[4px] text-[11px] text-[#6B7280]">
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* bottom message bar */}
          <div className="mt-[40px]">
            <div className="mx-auto w-[900px] rounded-[14px] bg-white/14 backdrop-blur px-[18px] py-[14px] flex items-center gap-[14px] shadow-[0_10px_26px_rgba(0,0,0,0.10)]">
              <div className="h-[40px] w-[40px] rounded-[12px] bg-white/20 flex items-center justify-center">
                <span className="text-[16px]">🧠</span>
              </div>
              <div className="text-[12px] leading-[18px] text-white/90">
                Behind every acceptance letter is planning, guidance, and partnership. Start your
                journey here — let’s turn your dream into reality. <span className="ml-4">🚀</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}