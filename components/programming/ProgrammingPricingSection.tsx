'use client';

import Image from 'next/image';

type PricingRow = {
  subject: string;
  sessions: string;
  duration: string;
  earlyBird: string;
  regular: string;
};

const ROWS: PricingRow[] = [
  {
    subject: '3D Creation & Printing\nwith Blender',
    sessions: '12 sessions',
    duration: '1.5h./session',
    earlyBird: '$810',
    regular: '$900',
  },
  {
    subject: 'Python for Beginners',
    sessions: '12 sessions',
    duration: '1.5h./session',
    earlyBird: '$810',
    regular: '$900',
  },
  {
    subject: 'AI & Coding\nExploratory Course',
    sessions: '12 sessions',
    duration: '1.5h./session',
    earlyBird: '$810',
    regular: '$900',
  },
];

function SubjectText({ text }: { text: string }) {
  const parts = text.split('\n');
  return (
    <div className="text-[14px] leading-[20px] text-[#24324A] font-medium">
      {parts.map((p, i) => (
        <div key={i}>{p}</div>
      ))}
    </div>
  );
}

export default function ProgrammingPricingSection() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto w-[1400px] py-[70px] font-outfit">
        {/* Top pill */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-[10px] rounded-[999px] bg-[#ECF7FF] px-[18px] py-[8px]">
            <span className="text-[16px] leading-[16px]">💎</span>
            <span className="text-[14px] font-medium text-[#2AAED6]">Pricing</span>
          </div>
        </div>

        {/* Title */}
        <h2 className="mt-[18px] text-center text-[44px] leading-[58px] font-bold text-[#1F2937]">
          Winter and Spring Program
        </h2>
        <p className="mt-[10px] text-center text-[16px] leading-[24px] text-[#7A8A9A]">
          2025-2026 School Year
        </p>

        {/* Table card */}
        <div className="mt-[36px] rounded-[26px] bg-[#F6F8FB] px-[44px] py-[34px] shadow-[0_10px_26px_rgba(0,0,0,0.05)]">
          <h3 className="text-center text-[22px] leading-[30px] font-semibold text-[#1F2937]">
            Coding &amp; Technology Programs
          </h3>

          {/* header row */}
          <div className="mt-[26px] grid grid-cols-[1.25fr_0.7fr_1fr_0.7fr] items-end gap-x-[22px] px-[6px]">
            <div className="text-[13px] font-semibold text-[#7A8A9A]">Subject</div>
            <div className="text-[13px] font-semibold text-[#7A8A9A]">Sessions</div>
            <div className="text-center text-[13px] font-semibold text-[#2AAED6]">
              Early Bird Tuition
              <div className="text-[12px] font-medium text-[#2AAED6]/90">(Before 1/16)</div>
            </div>
            <div className="text-[13px] font-semibold text-[#7A8A9A]">Regular Tuition</div>
          </div>

          <div className="mt-[10px] h-[1px] w-full bg-[#DDE6F3]" />

          {/* rows */}
          <div className="mt-[6px]">
            {ROWS.map((r, idx) => (
              <div key={idx}>
                <div className="grid grid-cols-[1.25fr_0.7fr_1fr_0.7fr] items-center gap-x-[22px] py-[18px] px-[6px]">
                  <div>
                    <SubjectText text={r.subject} />
                  </div>

                  <div className="text-[13px] leading-[18px] text-[#24324A]">
                    <div className="font-medium">{r.sessions}</div>
                    <div className="mt-[6px] text-[#7A8A9A]">{r.duration}</div>
                  </div>

                  {/* early bird pill */}
                  <div className="flex justify-center">
                    <div className="min-w-[130px] rounded-[12px] bg-[#E7F6FF] px-[18px] py-[10px] text-center text-[13px] font-semibold text-[#2AAED6]">
                      {r.earlyBird}
                    </div>
                  </div>

                  <div className="text-[13px] font-semibold text-[#24324A]">{r.regular}</div>
                </div>

                {idx !== ROWS.length - 1 && <div className="h-[1px] w-full bg-[#E6EEF8]" />}
              </div>
            ))}
          </div>
        </div>

        {/* Limited time offer */}
        <div className="mt-[34px] rounded-[26px] bg-gradient-to-b from-[#4ECDC4]/10 to-[#45B7D1]/10 px-[44px] py-[28px] shadow-[0_10px_26px_rgba(0,0,0,0.05)]">
          <div className="flex items-center justify-between gap-[24px]">
            <div>
              <div className="flex items-center gap-[10px] text-[20px] font-semibold text-[#1F2937]">
                <span className="text-[18px]">⏱️</span>
                <span>Limited Time Offer!</span>
              </div>

              <div className="mt-[14px] text-[14px] leading-[22px] text-[#6B7280]">
                <div>5% off your second course (any course)</div>
                <div>5% additional discount for onsite registration</div>
              </div>
            </div>

            <button
              className="
                h-[54px] px-[28px]
                rounded-[999px]
                bg-[#2AAED6]
                text-white text-[14px] font-semibold
                shadow-[0_10px_22px_rgba(42,174,214,0.25)]
                hover:translate-y-[-1px] hover:shadow-[0_14px_26px_rgba(42,174,214,0.28)]
                transition
                inline-flex items-center gap-[12px]
                flex-shrink-0
              "
            >
              Enroll Now <span className="text-[18px] leading-[18px]">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}