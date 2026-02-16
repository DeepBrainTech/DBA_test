'use client';

import Image from 'next/image';

export default function PreAMCProgram() {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" strokeWidth="2"/>
          <circle cx="12" cy="12" r="6" strokeWidth="2"/>
          <circle cx="12" cy="12" r="2" strokeWidth="2"/>
        </svg>
      ),
      iconBg: 'bg-green-100',
      title: 'Learning Objectives',
      description: 'Foundations of pre-algebra with number theory, principle of inclusion-exclusion, etc.',
    },
    {
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
        </svg>
      ),
      iconBg: 'bg-blue-100',
      title: 'Small Group Format',
      description: 'Small-group format with personalized interaction and feedback',
    },
    {
      icon: (
        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 01-2 2z"/>
        </svg>
      ),
      iconBg: 'bg-green-100',
      title: 'Strategic Logic',
      description: 'Integrates competition-style problems to strengthen logical reasoning and spatial thinking',
    },
    {
      icon: (
        <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
        </svg>
      ),
      iconBg: 'bg-gray-100',
      title: 'Merit Scholarship',
      description: 'Up to $200 Scholarship',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="rounded-[30px] border-2 border-dashed border-[#9C27B0]/30 bg-[#FAF5FF] p-10 mb-12">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#E8F5E9] px-6 py-3 mb-6">
              <span className="text-2xl">💡</span>
              <span className="text-[#4CAF50] text-sm font-medium">Our Programs</span>
            </div>
            <h2 className="text-[36px] font-bold text-[#2C3E50] mb-3">
              PRE-AMC Math Enrichment Program
            </h2>
            <p className="text-[16px] text-[#2C3E50]/65">
              Designed for students in Grades 4-6 or equivalent level
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, idx) => (
              <div key={idx} className="rounded-[20px] bg-white px-6 py-8 text-center">
                <div className={`mx-auto mb-6 flex h-[86px] w-[86px] items-center justify-center rounded-[18px] ${feature.iconBg}`}>
                  {feature.icon}
                </div>
                <h3 className="text-[18px] font-bold text-[#2C3E50] mb-2">
                  {feature.title}
                </h3>
                <p className="text-[14px] leading-[1.5] text-[#2C3E50]/60">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[30px] bg-[#FBF9F4] px-10 py-10 mb-12">
          <p className="text-center text-[15px] leading-[1.7] text-[#2C3E50]/65 max-w-[900px] mx-auto">
            This class is designed to spark curiosity, build logical reasoning, and develop problem-solving skills, while laying a strong foundation for future math competitions like MATHCOUNTS, MOEMS, and AMC.
          </p>
          <p className="text-center text-[13px] text-[#2C3E50]/50 mt-5 font-medium">
            DeepBrain Academy Math Coaching Team
          </p>
        </div>

        <div className="rounded-[30px] border-2 border-dashed border-[#4CAF50]/30 bg-[#F5FFF5] px-10 py-8 mb-10">
          <div className="flex flex-col md:flex-row gap-8 md:justify-between md:items-start">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[20px]">⏰</span>
                <h4 className="text-[24px] font-semibold text-[#2C3E50]">Class Time</h4>
              </div>
              <div className="space-y-1.5">
                <p className="text-[16px] text-[#2C3E50]/70">Saturday 3:00-4:30 pm ET (Englewood, NJ & online)</p>
                <p className="text-[16px] text-[#2C3E50]/70">Friday 3:45-5:15 pm ET (Tenafly, NJ & online)</p>
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

        <div className="flex justify-center gap-5">
          <a
            href="https://forms.gle/2mMzKoQkXHa2CVHe6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#4CAF50] bg-white px-8 py-3.5 text-[16px] font-semibold text-[#4CAF50] hover:bg-[#E8F5E9] transition"
          >
            Watch Intro Class
            <span>→</span>
          </a>
          <a
            href="https://forms.gle/2mMzKoQkXHa2CVHe6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#4CAF50] px-8 py-3.5 text-[16px] font-semibold text-white shadow-lg hover:bg-[#43A047] transition"
          >
            Register Now
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
