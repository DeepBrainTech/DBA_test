'use client';

import { scrollToElement } from '@/lib/scroll';

const qualities = [
  'Strong subject-matter expertise',
  'Clear and patient communication style',
  'Genuine commitment to student progress',
  'Ability to adapt teaching to individual needs',
];

export default function TutorSection() {
  return (
    <section className="w-full bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: decorative card (shown first on desktop) */}
          <div className="relative hidden lg:block order-1">
            <div className="absolute -top-8 -left-8 w-56 h-56 bg-[#274777]/5 rounded-full" />
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-[#5DB8FF]/10 rounded-full" />
            <div className="relative bg-[#F0F6FF] rounded-3xl p-8">
              <p className="font-outfit font-semibold text-[#274777] text-base mb-6 uppercase tracking-wider text-sm">
                What We Look For
              </p>
              <div className="flex flex-col gap-4">
                {qualities.map((q) => (
                  <div key={q} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#274777] flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-[#2c4060] text-base">{q}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-[#dde8f5]">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#274777]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-[#1a2e4a] text-base">Selective Process</p>
                    <p className="text-[#5a7090] text-sm">Applications are reviewed by our academic team</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: text */}
          <div className="order-2">
            <p className="text-[#274777] font-semibold text-sm tracking-widest uppercase mb-4">
              For Tutors
            </p>
            <h2 className="font-outfit text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a2e4a] leading-tight mb-6">
              Join Our Selective Teaching Community
            </h2>
            <p className="text-[#5a7090] text-lg leading-relaxed mb-10">
              We welcome passionate instructors with strong subject expertise,
              clear communication skills, and a commitment to helping students
              grow. If you take teaching seriously and want to be part of a
              curated academic community, we'd love to hear from you.
            </p>

            <button
              onClick={() => scrollToElement('tutor-form')}
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#274777] hover:bg-[#1e3a6e] text-white font-semibold text-lg rounded-2xl transition-all duration-200 shadow-[0_6px_24px_rgba(39,71,119,0.25)] hover:shadow-[0_8px_32px_rgba(39,71,119,0.35)] hover:-translate-y-0.5"
            >
              Apply as a Tutor
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>

            <p className="text-[#8a9ab5] text-sm mt-2">
              CV / Resume required · PDF, DOC, or DOCX · Max 5 MB
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
