'use client';

import { scrollToElement } from '@/lib/scroll';

const benefits = [
  'Competitive pay that reflects your subject expertise and experience',
  'Flexible hours — teach on your own schedule, online or in-person',
  'Access to DBA\'s curriculum materials and professional development resources',
  'Ongoing training and support from our academic team',
  'Simple onboarding — we handle student coordination and scheduling',
  'Join a community of dedicated educators committed to student success',
];

export default function TutorSection() {
  return (
    <section className="w-full bg-[#F0F6FF] py-20 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Left: benefits */}
          <div className="bg-white rounded-2xl p-8 shadow-[0_4px_24px_rgba(39,71,119,0.06)]">
            <p className="font-semibold text-[#274777] text-sm uppercase tracking-wider mb-6">
              What You Get
            </p>
            <ul className="flex flex-col gap-4">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="mt-1 w-5 h-5 rounded-full bg-[#274777] flex items-center justify-center shrink-0">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-[#2c4060] text-base leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: text + CTA */}
          <div>
            <p className="text-[#274777] font-semibold text-sm tracking-widest uppercase mb-4">
              For Tutors
            </p>
            <h2 className="font-outfit text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#1a2e4a] leading-tight mb-5">
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

            <p className="text-[#8a9ab5] text-sm mt-3">
              CV / Resume required · PDF, DOC, or DOCX · Max 5 MB
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
