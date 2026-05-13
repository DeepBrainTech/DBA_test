'use client';

import { scrollToElement } from '@/lib/scroll';

const subjects = [
  'AP Courses', 'SAT / ACT Prep', 'Math Competitions',
  'School Subjects', 'Science', 'Language Learning',
];

export default function StudentSection() {
  return (
    <section className="w-full bg-[#F0F6FF] py-20 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: text */}
          <div>
            <p className="text-[#274777] font-semibold text-sm tracking-widest uppercase mb-4">
              For Students & Parents
            </p>
            <h2 className="font-outfit text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a2e4a] leading-tight mb-6">
              Find the Right Tutor for Your Child
            </h2>
            <p className="text-[#5a7090] text-lg leading-relaxed mb-8">
              Whether your student needs support in AP courses, SAT/ACT prep,
              math competitions, school subjects, or long-term academic
              development, DeepBrain Academy connects you with the best
              instructors in the field.
            </p>

            <div className="flex flex-wrap gap-2 mb-10">
              {subjects.map((s) => (
                <span
                  key={s}
                  className="px-4 py-1.5 bg-white border border-[#cddcf0] text-[#274777] text-sm font-medium rounded-full"
                >
                  {s}
                </span>
              ))}
            </div>

            <button
              onClick={() => scrollToElement('student-form')}
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#274777] hover:bg-[#1e3a6e] text-white font-semibold text-lg rounded-2xl transition-all duration-200 shadow-[0_6px_24px_rgba(39,71,119,0.25)] hover:shadow-[0_8px_32px_rgba(39,71,119,0.35)] hover:-translate-y-0.5"
            >
              Book a Free Consultation
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>

          {/* Right: decorative card */}
          <div className="relative hidden lg:block">
            <div className="absolute -top-8 -right-8 w-64 h-64 bg-[#274777]/5 rounded-full" />
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-[#5DB8FF]/10 rounded-full" />
            <div className="relative bg-white rounded-3xl p-8 shadow-[0_12px_48px_rgba(39,71,119,0.12)]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-[#EEF4FF] flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#274777]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <span className="font-outfit font-semibold text-[#1a2e4a] text-lg">How It Works</span>
              </div>
              {[
                { step: '1', text: 'Submit your consultation request' },
                { step: '2', text: 'Our team reviews your student\'s needs' },
                { step: '3', text: 'We identify the best-fit tutor' },
                { step: '4', text: 'Schedule your first session' },
              ].map((item) => (
                <div key={item.step} className="flex items-start gap-4 mb-5 last:mb-0">
                  <div className="w-8 h-8 rounded-full bg-[#274777] text-white text-sm font-bold flex items-center justify-center shrink-0">
                    {item.step}
                  </div>
                  <p className="text-[#5a7090] text-base pt-1">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
