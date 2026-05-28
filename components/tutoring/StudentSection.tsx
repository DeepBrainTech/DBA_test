'use client';

import { scrollToElement } from '@/lib/scroll';

const benefits = [
  '1-on-1 personalized instruction tailored to your child\'s pace and goals',
  'Flexible scheduling — weekdays, evenings, and weekends',
  'Online and in-person sessions available',
  'Broad subject coverage: math, science, SAT/ACT, competition prep, and more',
  'Measurable progress with regular updates and feedback',
  'Free initial consultation — no commitment required',
];

const subjects = [
  'AP Courses', 'SAT / ACT Prep', 'Math Competitions',
  'School Subjects', 'Science', 'Language Learning',
];

export default function StudentSection() {
  return (
    <section className="w-full bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Left: text + CTA */}
          <div>
            <p className="text-[#274777] font-semibold text-sm tracking-widest uppercase mb-4">
              For Students & Parents
            </p>
            <h2 className="font-outfit text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#1a2e4a] leading-tight mb-5">
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
                  className="px-4 py-1.5 bg-[#F0F6FF] border border-[#cddcf0] text-[#274777] text-sm font-medium rounded-full"
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

          {/* Right: benefits */}
          <div className="bg-[#F0F6FF] rounded-2xl p-8">
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

        </div>
      </div>
    </section>
  );
}
