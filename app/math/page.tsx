'use client';

import Image from 'next/image';
import Link from 'next/link';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import React from 'react';

export default function MathPage() {
  const [formData, setFormData] = React.useState({
    studentName: '',
    targetCountry: '',
    applicationStage: '',
    contactNumber: '',
    wechat: ''
  });

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const googleFormUrl = 'https://forms.gle/2mMzKoQkXHa2CVHe6';
    window.open(googleFormUrl, '_blank');
  };

  const cards = [
    {
      icon: '📚',
      title: 'Comprehensive Resources',
      href: '/math/resources',
    },
    {
      icon: '🏛️',
      title: 'Top Universities',
      href: '/math/universities',
    },
    {
      icon: '⭐',
      title: 'Ivy League Faculty',
      href: '/math/faculty',
    },
    {
      icon: '📊',
      title: 'Admissions Pathways',
      href: '/math/admissions',
    },
  ];

  return (
    <>
      <Navigation />
      <div className="relative min-h-screen w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/math/math_background.jpg"
            alt="Math background"
            fill
            className="object-cover"
            priority
          />
          {/* Blurred overlay */}
          <div className="absolute inset-0">
            <Image
              src="/math/background.png"
              alt="Blurred overlay"
              fill
              className="object-cover blur-sm opacity-60"
            />
          </div>
          <div className="absolute inset-0 bg-white/10"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 pt-[106px]">
          {/* Title Section */}
          <div className="text-center mb-12">
            <h1 className="text-8xl font-bold text-black mb-4">Math</h1>
            <p className="text-3xl font-bold text-black">Small Board, Big Vision.</p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl w-full mt-16">
            {cards.map((card, index) => (
              <div
                key={index}
                className="group"
              >
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 hover:bg-white transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl transform hover:scale-105">
                  <div className="text-5xl mb-4">{card.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                    {card.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* PRE-AMC Math Enrichment Program Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          {/* Header */}
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

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Learning Objectives */}
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

            {/* Small Group Format */}
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

            {/* Critical Thinking */}
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

            {/* Expert Instructors */}
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

          {/* Course Description */}
          <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-8 mb-12">
            <div className="text-4xl mb-4">"</div>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              This class is designed to spark curiosity, build logical reasoning, and develop problem-solving skills, while laying a strong foundation for future math competitions like MATHCOUNTS, MOEMS, and AMC.
            </p>
            <p className="text-gray-500 font-medium">DeepBrain Academy Math Coaching Team</p>
          </div>

          {/* Class Time */}
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

      {/* 7 Steps Learning Method */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 bg-green-50 px-6 py-3 rounded-full mb-8">
              <span className="text-3xl">🌱</span>
              <span className="text-green-700 font-semibold text-lg">7 Steps Learning Method</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">AMC 8/10 Math program</h2>
            <span className="inline-block mt-4 px-6 py-2 bg-green-100 text-green-700 rounded-full text-base font-semibold">
              Course Overview
            </span>
          </div>

          <div className="space-y-5">
            {/* Step 1 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg hover:border-red-200 transition-all duration-300">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Structured Curriculum</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">Comprehensive education in core math areas</p>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg hover:border-blue-200 transition-all duration-300">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Weekly Problem Sets</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">Regular practice with real exam questions</p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg hover:border-green-200 transition-all duration-300">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Interactive Challenges</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">Engaging in group activities to enhance learning</p>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg hover:border-pink-200 transition-all duration-300">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 01-2 2z"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Logic Drills</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">Focused exercises centered on logic problems</p>
                </div>
              </div>
            </div>

            {/* Step 5 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg hover:border-purple-200 transition-all duration-300">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Concept Review</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">Creating concise summaries for effective review</p>
                </div>
              </div>
            </div>

            {/* Step 6 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg hover:border-red-200 transition-all duration-300">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Full Mock Exams</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">Simulating real exam conditions for Preparation</p>
                </div>
              </div>
            </div>

            {/* Step 7 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg hover:border-gray-300 transition-all duration-300">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-gray-200 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Correction & Review</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">Analyzing mistakes to improve performance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full mb-6">
              <span className="text-2xl">💎</span>
              <span className="text-blue-700 font-medium">Pricing</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-2">Winter and Spring Program</h2>
            <p className="text-gray-600">2025-2026 School Year</p>
          </div>

          <div className="space-y-12">
            {/* SAT/ACT Math Programs */}
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">SAT/ACT Math Programs</h3>
              
              <div className="bg-gray-100 rounded-2xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gray-200">
                        <th className="text-left py-6 px-8 font-bold text-gray-800">Subject</th>
                        <th className="text-left py-6 px-8 font-bold text-gray-800">Sessions</th>
                        <th className="text-center py-6 px-8 font-bold text-purple-600">Early Bird Tuition<br/><span className="text-sm text-purple-500">(Before 1/16)</span></th>
                        <th className="text-left py-6 px-8 font-bold text-gray-800">Hourly Rate</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-300">
                      <tr className="bg-white hover:bg-gray-50 transition-colors">
                        <td className="py-6 px-8 text-gray-900 font-medium">SAT Math Score<br/>Breakthrough Intensive</td>
                        <td className="py-6 px-8 text-gray-700">14h intensive program<br/>32h extended program</td>
                        <td className="py-6 px-8 text-center">
                          <div className="text-purple-600 font-semibold text-lg">$850</div>
                          <div className="text-purple-600 font-semibold text-lg">$1820</div>
                        </td>
                        <td className="py-6 px-8 text-gray-700">$1020<br/>$2024</td>
                      </tr>
                      <tr className="bg-white hover:bg-gray-50 transition-colors">
                        <td className="py-6 px-8 text-gray-900 font-medium">ACT Math Score<br/>Breakthrough Intensive</td>
                        <td className="py-6 px-8 text-gray-700">14h intensive program<br/>32h extended program</td>
                        <td className="py-6 px-8 text-center">
                          <div className="text-purple-600 font-semibold text-lg">$850</div>
                          <div className="text-purple-600 font-semibold text-lg">$1820</div>
                        </td>
                        <td className="py-6 px-8 text-gray-700">$1020<br/>$2024</td>
                      </tr>
                      <tr className="bg-white hover:bg-gray-50 transition-colors">
                        <td className="py-6 px-8 text-gray-900 font-medium">SAT/ACT Math 1-on-1<br/>Elite Tutoring</td>
                        <td className="py-6 px-8 text-gray-700">Flexible Scheduling</td>
                        <td className="py-6 px-8 text-center text-purple-600 font-semibold text-lg">Call for details</td>
                        <td className="py-6 px-8 text-gray-700">$100-215/h</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Limited Time Offer */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white rounded-3xl shadow-lg p-10 text-center border-4 border-blue-200">
            <div className="flex items-center justify-center gap-2 mb-6">
              <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <h3 className="text-3xl font-bold text-gray-900">Limited Time Offer!</h3>
            </div>
            <p className="text-gray-700 text-lg mb-3">5% off your second course (any course)</p>
            <p className="text-gray-700 text-lg mb-8">5% additional discount for onsite registration</p>
            <button className="px-12 py-3 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition-colors flex items-center justify-center gap-2 mx-auto shadow-md">
              Enroll Now
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Math Art Play Day */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full mb-6">
              <span className="text-2xl">🎨</span>
              <span className="text-green-700 font-medium">Play Day</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Math Art Play Day</h2>
            <p className="text-gray-600 mb-2">Chess × Go × Math × Art × Sudoku</p>
            <p className="text-gray-600">Day Workshop For Young Thinkers</p>
          </div>

          <div className="bg-white rounded-2xl p-10 shadow-lg mb-12 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Sharpen your mind through play!</h3>
            <p className="text-gray-700 text-lg leading-relaxed text-center">
              Join us for a day of strategic games and math/logic puzzles that build focus, creativity, and problem-solving skills - all while having fun with friends.
            </p>
          </div>

          {/* Schedule */}
          <div className="bg-gray-50 rounded-2xl p-10 mb-8 max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-6">
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <h3 className="text-xl font-bold text-gray-900">Schedule</h3>
            </div>
            <div className="space-y-3 text-gray-700 mb-8">
              <p className="font-semibold text-lg">9:00 AM - 3:30 PM</p>
              <p><strong>2025:</strong> Dec 19, 26-31</p>
              <p><strong>2026:</strong> Jan 2, 19; Feb 16-18; Mar 20; Apr 3, 6-10; May 25; Jun 19, 23-24</p>
            </div>

            <div className="flex items-center gap-2 mb-6">
              <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
              <h3 className="text-xl font-bold text-gray-900">Location</h3>
            </div>
            <div className="space-y-2 text-gray-700 mb-8">
              <p>120 County Rd, Suite 100-101, Tenafly, NJ</p>
              <p>560 Sylvan Avenue, First Floor, Suite 1055, Englewood Cliffs, NJ 07632</p>
            </div>

            <div className="flex items-center gap-4 mb-8">
              <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                <Image
                  src="/math/scan.png"
                  alt="WeChat QR Code"
                  width={80}
                  height={80}
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-sm text-gray-600">Scan to join our</p>
                <p className="font-semibold text-gray-900">WeChat Community</p>
              </div>
            </div>

            <div className="flex flex-col gap-3">
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
      <section className="py-24 bg-gradient-to-b from-green-50 via-green-100 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 bg-green-200 px-4 py-2 rounded-full mb-6">
              <span className="text-2xl">✨</span>
              <span className="text-green-700 font-medium">Limited offer</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Unlock Your Child's Math Potential
            </h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              Don't let your child's talent go unnoticed. Join us to give your child a competitive edge in mathematics!
            </p>

            {/* Benefits List */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-green-300 rounded flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
                <span className="text-gray-800 font-medium">Free Assessment Test</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-green-300 rounded flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
                <span className="text-gray-800 font-medium">Free Trial Class</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-green-300 rounded flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
                <span className="text-gray-800 font-medium">Personalized Learning Plan</span>
              </div>
            </div>

            {/* Additional Benefits */}
            <div className="grid grid-cols-3 gap-6 mb-10">
              <div className="flex flex-col items-center text-center">
                <span className="text-3xl mb-2">🔒</span>
                <span className="text-gray-800 text-sm font-medium">Secure Information</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <span className="text-3xl mb-2">⚡</span>
                <span className="text-gray-800 text-sm font-medium">Fast Response Time</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <span className="text-3xl mb-2">📚</span>
                <span className="text-gray-800 text-sm font-medium">Risk-free Guarantee</span>
              </div>
            </div>

            {/* Quote */}
            <div className="bg-green-200/50 rounded-2xl p-8 backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <span className="text-5xl flex-shrink-0">🧠</span>
                <p className="text-gray-800 text-base italic pt-1 leading-relaxed">
                  Every great mathematician started with a simple problem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Your Consultation */}
      <section className="py-24 bg-gradient-to-br from-green-50 via-white to-blue-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full mb-6">
                <span className="text-2xl">✨</span>
                <span className="text-green-700 font-semibold">Ready to Get Started?</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Schedule Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-600">Free Consultation</span>
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Our expert advisors are ready to discuss your child's learning goals and create a personalized learning plan tailored to their needs.
              </p>

              {/* Benefits List */}
              <div className="space-y-4 mb-10">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">24-Hour Response</p>
                    <p className="text-sm text-gray-600">We'll contact you within 24 hours</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Personalized Plan</p>
                    <p className="text-sm text-gray-600">Customized learning strategy for your child</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">100% Confidential</p>
                    <p className="text-sm text-gray-600">Your information is secure and private</p>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white rounded-xl p-4 border border-gray-200">
                  <div className="text-2xl font-bold text-green-600">1.2K+</div>
                  <div className="text-xs text-gray-600 mt-1">Happy Families</div>
                </div>
                <div className="bg-white rounded-xl p-4 border border-gray-200">
                  <div className="text-2xl font-bold text-green-600">100%</div>
                  <div className="text-xs text-gray-600 mt-1">Satisfaction</div>
                </div>
                <div className="bg-white rounded-xl p-4 border border-gray-200">
                  <div className="text-2xl font-bold text-green-600">15+</div>
                  <div className="text-xs text-gray-600 mt-1">Years Experience</div>
                </div>
              </div>
            </div>

            {/* Right CTA Card */}
            <div>
              <div className="bg-white rounded-3xl shadow-2xl p-10 border border-gray-100 sticky top-20">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Book Your Free Trial</h3>
                  <p className="text-gray-600 text-sm">No credit card required. Just one click away.</p>
                </div>

                <form className="space-y-6" onSubmit={handleFormSubmit}>
                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl font-bold text-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-2xl transform hover:scale-105 active:scale-95"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                    </svg>
                    Book Free Trial Now
                  </button>

                  <div className="space-y-3 pt-4 border-t border-gray-200">
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      <span className="text-sm text-gray-700">Free assessment included</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      <span className="text-sm text-gray-700">Expert guidance included</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      <span className="text-sm text-gray-700">Your data is secure</span>
                    </div>
                  </div>
                </form>

                <div className="mt-8 pt-8 border-t border-gray-200">
                  <p className="text-xs text-gray-500 text-center mb-4">Trusted by families worldwide</p>
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-yellow-400">★★★★★</span>
                    <span className="text-sm text-gray-600">4.9/5 from 500+ reviews</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}