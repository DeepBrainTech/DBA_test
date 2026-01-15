'use client';

import Image from 'next/image';

export default function PreAMCProgram() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full mb-6">
            <span className="text-2xl">💡</span>
            <span className="text-green-700 font-medium">Our Programs</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            PRE-AMC Math<br />Enrichment Program
          </h2>
          <p className="text-gray-600 text-lg">
            Designed for students in Grades 4-6 or equivalent level
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" strokeWidth="2"/>
                <circle cx="12" cy="12" r="6" strokeWidth="2"/>
                <circle cx="12" cy="12" r="2" strokeWidth="2"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Learning Objectives</h3>
            <p className="text-gray-600 leading-relaxed">
              Covers Pre-algebra, Number Theory, Algebra, Geometry, and Combinatorics for math competitions.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Small Group Format</h3>
            <p className="text-gray-600 leading-relaxed">
              Classes utilize a small-group structure to ensure personalized interaction and feedback.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 01-2 2z"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Critical Thinking</h3>
            <p className="text-gray-600 leading-relaxed">
              Integrates competition-style problems to strengthen logical reasoning and spatial thinking skills.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Instructors</h3>
            <p className="text-gray-600 leading-relaxed">
              Led by Princeton PhDs and Harvard Faculty with extensive experience in teaching and mentoring.
            </p>
          </div>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-8 mb-12">
          <div className="text-4xl mb-4">"</div>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            This class is designed to spark curiosity, build logical reasoning, and develop problem-solving skills, while laying a strong foundation for future math competitions like MATHCOUNTS, MOEMS, and AMC.
          </p>
          <p className="text-gray-500 font-medium">DeepBrain Academy Math Coaching Team</p>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-sm mb-12">
          <div className="flex items-center gap-3 mb-6">
            <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <h3 className="text-2xl font-bold text-gray-900">Class Time</h3>
          </div>
          <div className="space-y-2 mb-6">
            <p className="text-gray-700">Saturday 3:00-4:30 pm ET (Englewood, NJ & online)</p>
            <p className="text-gray-700">Friday 3:45-5:15 pm ET (Tenafly, NJ & online)</p>
          </div>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
              <Image
                src="/math/scan.png"
                alt="WeChat QR Code"
                width={96}
                height={96}
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Scan to join our</p>
              <p className="font-semibold text-gray-900">WeChat Community</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-3 bg-white border-2 border-green-500 text-green-600 rounded-lg font-semibold hover:bg-green-50 transition-colors flex items-center justify-center gap-2">
              Watch Intro Class
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
              </svg>
            </button>
            <button className="px-8 py-3 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition-colors flex items-center justify-center gap-2">
              Register Now
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
