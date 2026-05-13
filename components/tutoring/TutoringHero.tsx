'use client';

import { scrollToElement } from '@/lib/scroll';

export default function TutoringHero() {
  return (
    <section
      className="relative -mt-[106px] w-full overflow-hidden"
      style={{ minHeight: '88vh' }}
    >
      {/* Pastel blob background */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at  8% 82%, rgba(255,175,185,0.55) 0%, transparent 42%),
            radial-gradient(ellipse at 54% 28%, rgba(210,185,248,0.42) 0%, transparent 48%),
            radial-gradient(ellipse at 94% 10%, rgba(148,224,224,0.52) 0%, transparent 42%),
            radial-gradient(ellipse at 78% 84%, rgba(178,210,255,0.32) 0%, transparent 38%),
            #f8f8f8
          `,
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 pt-[150px] pb-20 sm:pb-24 lg:pb-32 text-center">

        <h1 className="font-outfit text-4xl sm:text-5xl lg:text-6xl xl:text-[68px] font-bold text-[#111] leading-tight lg:leading-[1.15] max-w-[900px] mx-auto">
          Personalized Tutoring,{' '}
          <span className="whitespace-nowrap">
            <span className="text-[#274777]">Curated by</span>{' '}
            DeepBrain Academy
          </span>
        </h1>

        <p className="mt-6 text-[#4a5568] text-lg sm:text-xl lg:text-2xl leading-relaxed max-w-[740px] mx-auto font-outfit">
          Connect with our hand-picked instructors across math, science, test
          prep, language learning, and academic enrichment. Every tutor in our
          network is carefully selected for subject expertise, teaching quality,
          and a proven track record of helping students succeed.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => scrollToElement('student-form')}
            className="w-full sm:w-auto px-8 py-4 bg-[#111] hover:bg-[#2a2a2a] text-white font-semibold text-lg rounded-2xl transition-all duration-200 shadow-[0_8px_28px_rgba(0,0,0,0.18)] hover:shadow-[0_10px_36px_rgba(0,0,0,0.24)] hover:-translate-y-0.5"
          >
            Find My Tutor
          </button>
          <button
            onClick={() => scrollToElement('tutor-form')}
            className="w-full sm:w-auto px-8 py-4 bg-white/70 backdrop-blur-sm hover:bg-white text-[#111] font-semibold text-lg rounded-2xl border border-black/15 hover:border-black/30 transition-all duration-200 hover:-translate-y-0.5 shadow-sm"
          >
            Apply as a Tutor
          </button>
        </div>

        {/* Trust indicators */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {['Carefully Reviewed Tutors', 'Top-Tier Instructors', 'Online & In-Person Available'].map((text) => (
            <div key={text} className="flex items-center gap-2 text-[#555]">
              <span className="w-5 h-5 rounded-full bg-black/8 flex items-center justify-center text-[10px] text-[#111] font-bold">✓</span>
              <span className="text-sm sm:text-base font-medium">{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
