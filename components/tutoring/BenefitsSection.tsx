'use client';

import { scrollToElement } from '@/lib/scroll';

const studentBenefits = [
  {
    icon: '👤',
    title: '1-on-1 Personalized Support',
    desc: 'Every session is built around your child\'s specific goals, learning pace, and current challenges.',
  },
  {
    icon: '📅',
    title: 'Flexible Scheduling',
    desc: 'Choose from weekday evenings, weekends, or custom time slots — online or in-person.',
  },
  {
    icon: '✅',
    title: 'Expert-Vetted Tutors',
    desc: 'Every instructor is reviewed for subject expertise and teaching quality before joining our network.',
  },
  {
    icon: '📈',
    title: 'Measurable Progress',
    desc: 'Regular check-ins and progress updates so you always know how your student is improving.',
  },
  {
    icon: '💬',
    title: 'Free Initial Consultation',
    desc: 'No commitment. Start with a free conversation about your child\'s needs and academic goals.',
  },
  {
    icon: '📚',
    title: 'Wide Subject Coverage',
    desc: 'Math, science, SAT/ACT prep, competition math, language learning, and more.',
  },
];

const tutorBenefits = [
  {
    icon: '💰',
    title: 'Competitive Pay',
    desc: 'Fair, transparent compensation that reflects your subject expertise and teaching experience.',
  },
  {
    icon: '🕐',
    title: 'Flexible Hours',
    desc: 'Teach on your own schedule. Set your availability and take sessions that work for you.',
  },
  {
    icon: '🎓',
    title: 'Training & Development',
    desc: 'Access to DBA\'s teaching resources, curriculum materials, and ongoing professional development.',
  },
  {
    icon: '🌐',
    title: 'Online & In-Person',
    desc: 'Teach virtually from anywhere or in-person locally — whichever format suits you best.',
  },
  {
    icon: '🤝',
    title: 'Supportive Community',
    desc: 'Join a network of passionate educators and collaborate with a team that values great teaching.',
  },
  {
    icon: '⚡',
    title: 'Simple Onboarding',
    desc: 'We handle student coordination and scheduling. You focus on what you do best — teaching.',
  },
];

export default function BenefitsSection() {
  return (
    <section className="w-full bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-[#274777] font-semibold text-sm tracking-widest uppercase mb-3">
            Why DBA
          </p>
          <h2 className="font-outfit text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a2e4a]">
            Built for Students. Built for Tutors.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Student Benefits */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-[#274777] flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="font-outfit text-2xl font-bold text-[#1a2e4a]">For Students & Parents</h3>
            </div>

            <div className="flex flex-col gap-4">
              {studentBenefits.map((b) => (
                <div key={b.title} className="flex items-start gap-4 p-4 rounded-xl hover:bg-[#F0F6FF] transition-colors">
                  <span className="text-2xl shrink-0 mt-0.5">{b.icon}</span>
                  <div>
                    <p className="font-semibold text-[#1a2e4a] text-base">{b.title}</p>
                    <p className="text-[#5a7090] text-sm mt-0.5 leading-relaxed">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => scrollToElement('student-form')}
              className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-[#274777] hover:bg-[#1e3a6e] text-white font-semibold rounded-xl transition-all duration-200 text-base"
            >
              Book a Free Consultation
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>

          {/* Divider */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-[#e8eef6]" />

          {/* Tutor Benefits */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-[#274777] flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-outfit text-2xl font-bold text-[#1a2e4a]">For Tutors</h3>
            </div>

            <div className="flex flex-col gap-4">
              {tutorBenefits.map((b) => (
                <div key={b.title} className="flex items-start gap-4 p-4 rounded-xl hover:bg-[#F0F6FF] transition-colors">
                  <span className="text-2xl shrink-0 mt-0.5">{b.icon}</span>
                  <div>
                    <p className="font-semibold text-[#1a2e4a] text-base">{b.title}</p>
                    <p className="text-[#5a7090] text-sm mt-0.5 leading-relaxed">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => scrollToElement('tutor-form')}
              className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-[#274777] hover:bg-[#1e3a6e] text-white font-semibold rounded-xl transition-all duration-200 text-base"
            >
              Apply as a Tutor
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
