'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Outfit } from 'next/font/google';

const outfit = Outfit({ subsets: ['latin'] });

export default function Home() {
  const scrollToContent = () => {
    const trustBadgesSection = document.getElementById('trust-badges');
    if (trustBadgesSection) {
      trustBadgesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const programs = [
    {
      icon: '📊',
      iconSrc: '/Key%20Programs/Math.svg',
      title: 'Math',
      subtitle: 'Build Logic · Spark Interest',
      description: 'Fun, structured learning that builds math thinking and problem-solving from basics to competitions.',
      features: ['Step-by-step curriculum', 'Mind map practice', 'Contest problem review', '1 on 1 support'],
      color: '#7EC97E',
      bgGradient: 'from-[rgba(126,201,126,0.1)] to-[rgba(107,184,107,0.1)]'
    },
    {
      icon: '♟️',
      iconSrc: '/Key%20Programs/Chess.svg',
      title: 'Chess',
      subtitle: 'Build Strategy · Perspective',
      description: 'Structured coaching from beginner to advanced levels develops strategic thinking and resilience.',
      features: ['Beginner to rank courses', 'Practice matches', 'Master game analysis', 'Online & offline competition'],
      color: '#F4A460',
      bgGradient: 'from-[rgba(244,164,96,0.1)] to-[rgba(232,148,81,0.1)]'
    },
    {
      icon: '🌍',
      iconSrc: '/Key%20Programs/Global_Education.svg',
      title: 'Global Education',
      subtitle: 'Plan Ahead · Go Global',
      description: 'One-step support for applications, language skills, and profile enhancement.',
      features: ['Personalized plans', 'Elite school guidance', 'Language improvement', 'Profile building'],
      color: '#9B8FD8',
      bgGradient: 'from-[rgba(155,143,216,0.1)] to-[rgba(138,126,199,0.1)]'
    },
    {
      icon: '💻',
      iconSrc: '/Key%20Programs/Programming.svg',
      title: 'Programming',
      subtitle: 'Learn to code · Develop the brain',
      description: "Don't just let children play games; teach them how to create games",
      features: ['Extensive programming experience', 'Learning Path Planning', 'Creative Projects', 'competition awards'],
      color: '#4ECDC4',
      bgGradient: 'from-[rgba(78,205,196,0.1)] to-[rgba(69,183,209,0.1)]'
    }
  ];

  return (
    <div className={`min-h-screen bg-[#FBF9F4] ${outfit.className}`}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
        <div className="max-w-[1920px] mx-auto px-14">
          <div className="flex items-center justify-between h-[133px]">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-5">
              <div className="w-20 h-20 bg-gradient-to-b from-[#A8D5FF] to-[#6BB6FF] rounded-[20px] flex items-center justify-center">
                <span className="text-[40px]">🧠</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[20px] font-medium text-[#274777] tracking-[25%]">DEEP BRAIN ACADEMY</span>
                <span className="text-[13px] font-medium text-[rgba(19,28,72,0.5)] tracking-[38%]">DEEPER-SHARPER-BRIGHTER</span>
              </div>
            </Link>

            {/* Nav Links - Figma order */}
            <div className="flex items-center gap-[48px] text-[26px] text-[#333]">
              <Link href="/" className="font-bold hover:text-[#6BB6FF] transition">Home</Link>
              <Link href="/global-education" className="hover:text-[#6BB6FF] transition">Global Education</Link>
              <Link href="#" className="hover:text-[#6BB6FF] transition">Math</Link>
              <Link href="#" className="hover:text-[#6BB6FF] transition">Chess</Link>
              <Link href="#" className="hover:text-[#6BB6FF] transition">Programming</Link>
              <Link href="#" className="hover:text-[#6BB6FF] transition">About Us</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen pt-[133px] bg-gradient-to-b from-[#E8F4FC] to-[#FBF9F4] overflow-hidden flex flex-col">
        {/* Background Decorations */}
        <div className="absolute top-[200px] right-[100px] w-[133px] h-[133px] bg-[#FFD4A3] rounded-full opacity-20 blur-[133px]"></div>
        
        <div className="max-w-[1920px] mx-auto px-14 py-[60px] flex-1 flex items-center">
          <div className="grid grid-cols-2 gap-[100px] w-full items-center">
            {/* Left Content */}
            <div>
              <h1 className="text-[66px] font-bold text-[#2C3E50] leading-[1.2] mb-[30px]">
                Inspiring Minds
              </h1>
              <h2 className="text-[36px] font-bold text-[#2C3E50] leading-[1.6] mb-[30px]">
                Math Olympiad • Chess • Global Education
              </h2>
              <div className="flex items-center gap-[20px] mb-[30px]">
                <span className="text-[24px] text-[#7EC97E]">Fun Learning.</span>
                <span className="text-[24px] text-[#F4A460]">Expert Guidance.</span>
                <span className="text-[24px] text-[#9B8FD8]">Holistic Growth.</span>
              </div>
              <p className="text-[24px] text-[#7C8B99] leading-[1.6] mb-[40px] max-w-[741px]">
                We offer math thinking, chess, and global education support for ages 6-18, helping children learn with joy and grow through challenges.
              </p>
              
              {/* Buttons */}
              <div className="flex gap-[27px]">
                <button className="flex items-center justify-center gap-[13px] px-[53px] h-[95px] bg-gradient-to-b from-[#7EC97E] to-[#6BB87B] text-white text-[28px] rounded-[40px] hover:shadow-xl transition">
                  Free Trial
                  <svg className="w-[33px] h-[33px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.77} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
                <button className="flex items-center justify-center gap-[13px] px-[53px] h-[95px] bg-white text-[#6BB6FF] text-[28px] rounded-[40px] hover:shadow-lg transition">
                  <svg className="w-[33px] h-[33px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.77} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.77} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Watch Video
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="relative w-[867px] h-[587px] bg-white rounded-[40px] shadow-[0px_13px_17px_-10px_rgba(0,0,0,0.1),0px_33px_41px_-8px_rgba(0,0,0,0.1)]">
                <div className="absolute inset-[13px] rounded-[33px] overflow-hidden">
                  <Image
                    src="/Image (儿童学习场景).svg"
                    alt="Learning Scene"
                    fill
                    priority
                    quality={75}
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>
              {/* Star decorations */}
              <div className="absolute -top-10 right-0 text-[60px]">⭐</div>
              <div className="absolute bottom-20 -left-10 text-[50px] opacity-80">✨</div>
            </div>
          </div>
        </div>

        {/* Scroll Down Arrow */}
        <div className="absolute bottom-[40px] left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <button 
            onClick={scrollToContent}
            className="w-[60px] h-[60px] bg-[#6BB6FF] hover:bg-[#4A9FEF] rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110"
            aria-label="Scroll down"
          >
            <svg className="w-[30px] h-[30px] text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </section>

      {/* Trust Badges */}
      <section id="trust-badges" className="py-[106px] bg-white scroll-mt-[133px]">
        <div className="max-w-[1920px] mx-auto px-14">
          <div className="grid grid-cols-4 gap-[40px]">
            {[
              { emoji: '👨‍🎓', title: '2,000+', desc: 'Past Students', color: '#7EC97E' },
              { emoji: '😊', title: '100%', desc: 'Parent Satisfaction', color: '#F4A460' },
              { emoji: '🏆', title: '200+', desc: 'Award winners', color: '#9B8FD8' },
              { emoji: '📚', title: '20 years', desc: 'Teaching Experience', color: '#6BB6FF' }
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-[33px] p-[40px] border border-gray-100 hover:shadow-xl transition">
                <div className="w-[107px] h-[107px] bg-gradient-to-br from-[rgba(107,182,255,0.2)] to-[rgba(74,159,239,0.2)] rounded-[27px] flex items-center justify-center text-[53px] mb-[27px]">
                  {item.emoji}
                </div>
                <h3 className="text-[40px] font-semibold mb-[13px]" style={{ color: item.color }}>
                  {item.title}
                </h3>
                <p className="text-[26.5px] text-[#7C8B99]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Programs with Auto-scroll Animation */}
      <section className="py-[133px] bg-white">
        <div className="max-w-[1920px] mx-auto px-14">
          <div className="text-center mb-[53px]">
            <div className="inline-flex items-center gap-[27px] px-[27px] py-[13px] bg-white rounded-[33px] mb-[27px] shadow-sm">
              <span className="text-[40px]">🎯</span>
              <span className="text-[26.5px] text-[#6BB6FF]">Core Courses</span>
            </div>
            <h2 className="text-[53px] font-bold text-[#2C3E50] mb-[27px] leading-[1.3]">
              Key Programs
            </h2>
            <p className="text-[26.5px] text-[#7C8B99]">
              Focusing on children's intellectual development and international education, laying a solid foundation for children's future.
            </p>
          </div>

          {/* Programs Grid */}
          <div className="grid grid-cols-4 gap-[48px]">
            {programs.map((program, idx) => (
              <div key={idx} className={`relative bg-gradient-to-br ${program.bgGradient} rounded-[36px] p-[48px] shadow-lg hover:shadow-xl transition flex flex-col h-full`}>
                <div className="absolute top-8 right-8 w-[60px] h-[60px] bg-white/40 rounded-[18px] flex items-center justify-center text-[30px] font-bold" style={{ color: program.color }}>
                  {idx + 1}
                </div>
                  
                  <div className={`w-[96px] h-[96px] rounded-[24px] flex items-center justify-center text-[48px] mb-[27px]`} style={{ backgroundColor: `${program.color}15` }}>
                    <Image
                      src={program.iconSrc}
                      alt={`${program.title} icon`}
                      width={60}
                      height={60}
                    />
                  </div>
                  
                  {/* Top content block with fixed min height to align bullet start (slightly tighter) */}
                  <div className="flex flex-col gap-[12px] min-h-[300px] mb-[18px]">
                    <h3 className="text-[36px] font-semibold text-[#2C3E50]">
                      {program.title}
                    </h3>
                    {/* Keep subtitle + description same height to align bullet start */}
                    <div className="min-h-[170px] flex flex-col gap-[12px]">
                      <p className="text-[22px]" style={{ color: program.color }}>
                        {program.subtitle}
                      </p>
                      <p className="text-[24px] text-[#7C8B99] leading-[1.6]">
                        {program.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-[12px] mb-[32px]">
                    {program.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-[12px]">
                        <div className="w-[9px] h-[9px] mt-[11px] rounded-full" style={{ backgroundColor: program.color }}></div>
                        <span className="text-[21px] text-[#2C3E50] leading-[1.5]">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button className="mt-auto w-full h-[74px] bg-white rounded-[24px] flex items-center justify-center gap-[12px] hover:shadow-lg transition">
                    <span className="text-[24px]" style={{ color: program.color }}>Learn More</span>
                    <svg className="w-[27px] h-[27px]" style={{ color: program.color }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.25} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
        </div>
      </section>

      {/* Why DeepBrain Academy */}
      <section className="py-[133px] bg-white">
        <div className="max-w-[1920px] mx-auto px-14">
          {/* Top Section - Title左 + Image右 */}
          <div className="flex gap-[80px] items-start mb-[80px]">
            {/* Left - Title */}
            <div className="flex-1">
              <div className="inline-flex items-center gap-[27px] px-[27px] py-[13px] bg-[#E8F4FC] rounded-[33px] mb-[27px]">
                <span className="text-[40px]">💎</span>
                <span className="text-[26.5px] text-[#6BB6FF]">Pros</span>
              </div>
              <h2 className="text-[53px] font-bold text-[#2C3E50] mb-[27px] leading-[1.3]">
                Why DeepBrain Academy?
              </h2>
              <p className="text-[26.5px] text-[#7C8B99] leading-[1.6]">
                herefore we are committed to providing the highest quality and most personalized educational services.
              </p>
            </div>

            {/* Right - Image with Overlay */}
            <div className="w-[850px] flex-shrink-0 relative">
              {/* Image Container - 按Figma比例 850.97 x 429.45 */}
              <div className="relative w-full h-[429px] rounded-[40px] overflow-hidden shadow-[0px_41px_83px_-20px_rgba(0,0,0,0.25)]">
                <Image
                  src="/Image (学习场景).svg"
                  alt="Learning Scene"
                  fill
                  loading="lazy"
                  className="object-cover"
                />
              </div>
              
              {/* Stats Overlay - 紧凑版，右下角 */}
              <div className="absolute bottom-[-40px] right-[-20px] bg-gradient-to-b from-[#7EC97E] to-[#6BB87B] rounded-[27px] shadow-xl p-[30px] w-[200px] z-10">
                <p className="text-[18px] text-white/90 mb-[6px] leading-[1.3]">We Served</p>
                <h3 className="text-[36px] font-semibold text-white mb-[6px] leading-[1.1]">10,000+</h3>
                <p className="text-[16px] text-white/90 leading-[1.3]">Trusted choice for families</p>
              </div>

              {/* Decorations */}
              <div className="absolute -left-[30px] -top-[60px] w-[159px] h-[159px] bg-[#FFD4A3] rounded-full opacity-20 blur-[133px]"></div>
            </div>
          </div>

          {/* Bottom Section - Four Cards横跨全宽 */}
          <div className="grid grid-cols-2 gap-[40px]">
            {[
              { icon: '🎮', title: 'Engaging Learning Way', desc: 'Gamified learning allow children to acquire knowledge in a fun way and maintain their enthusiasm in the long run.', stat: '95%', label: 'Class Participation' },
              { icon: '👨‍🏫', title: 'Professional Coaching Team', desc: 'Experienced Tutors from top universities with strong international teaching backgrounds.', stat: '10ys+', label: 'Average teaching experience' },
              { icon: '👥', title: 'Personalized Support', desc: 'Small class let us to support each child\'s unique pace and provide tailored guidance.', stat: '1:6', label: 'Student-Teacher Ratio' },
              { icon: '📈', title: 'Visible Achievement', desc: 'A structure evaluation system with regular progress feedback ensures visible growth.', stat: 'Weekly', label: 'Study Report' }
            ].map((item, idx) => (
              <div key={idx} className="bg-[#FBF9F4] rounded-[33px] p-[40px] hover:shadow-lg transition flex items-start gap-[26px]">
                {/* Icon on the left */}
                <div className="w-[80px] h-[80px] bg-gradient-to-br from-[rgba(107,182,255,0.2)] to-[rgba(74,159,239,0.2)] rounded-[23px] flex items-center justify-center text-[40px] flex-shrink-0">
                  {item.icon}
                </div>
                
                {/* Content on the right */}
                <div className="flex-1 flex flex-col min-w-0">
                  <h4 className="text-[28px] font-semibold text-[#2C3E50] mb-[13px] leading-[1.3]">
                    {item.title}
                  </h4>
                  <p className="text-[24px] text-[#7C8B99] leading-[1.5] mb-[16px]">
                    {item.desc}
                  </p>
                  <div className="flex items-center gap-[13px] mt-auto">
                    <span className="text-[26px] font-semibold text-[#6BB6FF]">{item.stat}</span>
                    <span className="text-[20px] text-[#7C8B99]">{item.label}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Honor Wall */}
      <section className="py-[133px] bg-gradient-to-b from-white to-[#E8F4FC]">
        <div className="max-w-[1920px] mx-auto px-14">
          <div className="text-center mb-[53px]">
            <div className="inline-flex items-center gap-[27px] px-[27px] py-[13px] bg-white rounded-[33px] mb-[27px] shadow-sm">
              <span className="text-[40px]">🏆</span>
              <span className="text-[26.5px] text-[#6BB6FF]">Achievements</span>
            </div>
            <h2 className="text-[53px] font-bold text-[#2C3E50] mb-[27px] leading-[1.3]">
              Honor Wall
            </h2>
            <p className="text-[26.5px] text-[#7C8B99]">
              Behind every award lies the culmination of the student's hard work.
            </p>
          </div>

          {/* Student Achievements Grid */}
          <div className="bg-white rounded-[40px] shadow-lg p-[53px]">
            <div className="flex items-center justify-between mb-[53px]">
              <h3 className="text-[40px] font-semibold text-[#2C3E50]">Where Our Students Go</h3>
              <button className="text-[26.5px] text-[#6BB6FF] hover:underline">See All →</button>
            </div>
            
            <div className="grid grid-cols-2 gap-[27px]">
              {[
                { emoji: '👦', school: 'Harvard University · Early Action', name: 'Ethan L.', level: 'Undergraduate', year: 'Class of 2029' },
                { emoji: '👧', school: 'Duke University', name: 'Sophia W.', level: 'Undergraduate', year: 'Class of 2029' },
                { emoji: '👦', school: 'Yale University', name: 'Benjamin C.', level: 'Undergraduate', year: 'Class of 2029' },
                { emoji: '👦', school: 'Columbia University · Rabi Scholarship', name: 'Benjamin C.', level: 'Undergraduate', year: 'Class of 2029' },
                { emoji: '👦', school: 'Brown University', name: 'Benjamin C.', level: 'Undergraduate', year: 'Class of 2029' },
                { emoji: '👧', school: 'Dartmouth College', name: 'Charlotte Z.', level: 'Undergraduate', year: 'Class of 2029' },
                { emoji: '👧', school: 'Cornell University · Presidential Scholarship', name: 'Charlotte Z.', level: 'Undergraduate', year: 'Class of 2029' },
                { emoji: '👧', school: 'Williams College', name: 'Evelyn Z.', level: 'Undergraduate', year: 'Class of 2029' }
              ].map((student, idx) => (
                <div key={idx} className="bg-white rounded-[27px] p-[40px] border border-gray-100 flex items-center gap-[27px] hover:shadow-lg transition">
                  <div className="w-[93px] h-[93px] bg-gradient-to-br from-[rgba(255,215,0,0.2)] to-[rgba(255,165,0,0.2)] rounded-[23px] flex items-center justify-center text-[40px] flex-shrink-0">
                    {student.emoji}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-[30px] font-semibold text-[#2C3E50] mb-[7px]">
                      {student.school}
                    </h4>
                    <p className="text-[26.5px] text-[#7C8B99] mb-[7px]">{student.name}</p>
                    <div className="flex gap-[13px]">
                      <span className="text-[23px] text-[#7C8B99]">{student.level}</span>
                      <span className="text-[23px] text-[#7C8B99]">{student.year}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mascot Message */}
          <div className="flex items-center justify-center gap-[27px] mt-[80px]">
            <div className="w-[107px] h-[107px] bg-gradient-to-br from-[#A8D5FF] to-[#6BB6FF] rounded-[27px] flex items-center justify-center text-[50px] flex-shrink-0">
              🐧
            </div>
            <div className="bg-white rounded-[33px] rounded-tl-none p-[40px] shadow-lg">
              <p className="text-[26.5px] text-[#2C3E50]">
                You could be the next! Keep going! 💪
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Parents' Voices */}
      <section className="py-[133px] bg-white">
        <div className="max-w-[1920px] mx-auto px-14">
          <div className="text-center mb-[53px]">
            <div className="inline-flex items-center gap-[27px] px-[27px] py-[13px] bg-white rounded-[33px] mb-[27px] shadow-sm">
              <span className="text-[40px]">💬</span>
              <span className="text-[26.5px] text-[#6BB6FF]">Parents' Voices</span>
            </div>
            <h2 className="text-[53px] font-bold text-[#2C3E50] mb-[27px] leading-[1.3]">
              Listen to what they said
            </h2>
            <p className="text-[26.5px] text-[#7C8B99]">
              Authentic learning experiences, endorsed by parents and children.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-[67px]">
            {/* Image */}
            <div className="relative">
              <div className="relative w-[864px] h-[399px] rounded-[40px] overflow-hidden shadow-[0px_41px_83px_-20px_rgba(0,0,0,0.25)]">
                <Image
                  src="/Image (成功案例).svg"
                  alt="Success Story"
                  fill
                  loading="lazy"
                  className="object-cover"
                />
              </div>
              
              {/* Quote Icon Overlay */}
              {/* Quote icon moves to top-left (Figma position) */}
              <div className="absolute -top-[20px] -left-[20px] w-[132px] h-[132px] bg-gradient-to-b from-[#6BB6FF] to-[#4A9FEF] rounded-[33px] shadow-xl flex items-center justify-center z-10">
                <Image src="/quote.svg" alt="Quote" width={60} height={60} />
              </div>
            </div>

            {/* Testimonial */}
            <div>
              <div className="bg-white rounded-[40px] shadow-[0px_7px_10px_-7px_rgba(0,0,0,0.1),0px_17px_25px_-5px_rgba(0,0,0,0.1)] p-[53px] mb-[40px] relative overflow-hidden">
                <p className="text-[26.5px] text-[#2C3E50] leading-[1.6] mb-[40px]">
                  "One year of Math Olympiad here transformed my son. He shifted from resisting to actively loving math. The teachers are patient and make complex concepts easy to understand."
                </p>
                
                <div className="inline-flex items-center gap-[27px] px-[27px] h-[73px] bg-[rgba(126,201,126,0.13)] rounded-[27px] mb-[40px]">
                  <span className="text-[33px]">🎉</span>
                  <span className="text-[23px] text-[#7EC97E] font-medium">Math score improved by 36 points</span>
                </div>

                <div className="flex items-center gap-[27px] pt-[40px] border-t border-[#E8F4FC]">
                  <div className="w-[93px] h-[93px] bg-gradient-to-br from-[#A8D5FF] to-[#6BB6FF] rounded-[23px] flex items-center justify-center text-[40px]">
                    👩
                  </div>
                  <div>
                    <h4 className="text-[30px] font-semibold text-[#2C3E50]">Mrs. Sun</h4>
                    <p className="text-[26.5px] text-[#7C8B99]">Parent of our student</p>
                    <p className="text-[26.5px] text-[#7C8B99]">Hackensack, NJ</p>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-[10px] bg-[#7EC97E] rounded-b-[40px]"></div>
              </div>

              {/* Carousel Controls */}
              <div className="flex items-center justify-between">
                <button className="w-[79px] h-[79px] bg-white rounded-[20px] shadow-md flex items-center justify-center hover:shadow-lg transition">
                  <svg className="w-[40px] h-[40px] text-[#6BB6FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3.3} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                <div className="flex gap-[13px]">
                  <div className="w-[40px] h-[7px] bg-[#6BB6FF] rounded-full"></div>
                  <div className="w-[13px] h-[7px] bg-[#E8F4FC] rounded-full"></div>
                  <div className="w-[13px] h-[7px] bg-[#E8F4FC] rounded-full"></div>
                </div>
                
                <button className="w-[79px] h-[79px] bg-white rounded-[20px] shadow-md flex items-center justify-center hover:shadow-lg transition">
                  <svg className="w-[40px] h-[40px] text-[#6BB6FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3.3} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Stats */}
          <div className="grid grid-cols-4 gap-[40px] mt-[80px]">
            {[
              { value: '98%', label: 'Parent Referral Rate' },
              { value: '95%', label: 'Renewal Rate' },
              { value: '4.9/5.0', label: 'Satisfaction Rate' },
              { value: '⭐⭐⭐⭐⭐', label: 'Recommendation Rate' }
            ].map((stat, idx) => (
              <div key={idx} className="bg-white rounded-[27px] p-[40px] text-center shadow-sm hover:shadow-lg transition">
                <h4 className="text-[30px] font-semibold text-[#6BB6FF] mb-[13px]">{stat.value}</h4>
                <p className="text-[26.5px] text-[#7C8B99]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-[133px] bg-[#FBF9F4]">
        <div className="max-w-[1920px] mx-auto px-14">
          <div className="text-center mb-[53px]">
            <div className="inline-flex items-center gap-[27px] px-[27px] py-[13px] bg-[#E8F4FC] rounded-[33px] mb-[27px]">
              <span className="text-[40px]">📚</span>
              <span className="text-[26.5px] text-[#6BB6FF]">Latest News</span>
            </div>
            <h2 className="text-[53px] font-bold text-[#2C3E50] mb-[27px] leading-[1.3]">
              Educational Insights
            </h2>
            <p className="text-[26.5px] text-[#7C8B99]">
              Sharing educational philosophies, learning methods, and industry trends
            </p>
          </div>

          <div className="grid grid-cols-3 gap-[40px]">
            {[
              { 
                tag: 'Industry Insights', 
                tagColor: '#7EC97E', 
                title: 'Top 5 Trends in Children\'s Education 2024: Personalized Learning', 
                excerpt: 'AI is transforming traditional teaching, making personalized learning paths possible for every child...', 
                date: '2024.11.20', 
                time: '5 min',
                image: '/education_1.svg'
              },
              { 
                tag: 'Course Update', 
                tagColor: '#F4A460', 
                title: 'New Math thinking Course V3.0: More fun, More Effective', 
                excerpt: 'After six months of testing, our Math Olympiad course is upgraded with more interactive and gamified features...', 
                date: '2024.11.15', 
                time: '3 min',
                image: '/education_2.svg'
              },
              { 
                tag: 'Learning methods', 
                tagColor: '#9B8FD8', 
                title: 'How to Build Your Child\'s Interest in Chess: 5 Tips', 
                excerpt: 'Chess strengthens logic, patience and focus. Here are practical tips parents can use at home...', 
                date: '2024.11.10', 
                time: '4 min',
                image: '/education_3.svg'
              }
            ].map((article, idx) => (
              <div key={idx} className="bg-white rounded-[40px] overflow-hidden shadow-md hover:shadow-xl transition flex flex-col h-full">
                <div className="relative h-[318px] bg-white">
                  {/* Cover Image (no overlay) */}
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover"
                    loading="lazy"
                  />

                  {/* Tag */}
                  <div className="absolute top-[27px] left-[27px] px-[27px] h-[60px] bg-white/95 rounded-[20px] flex items-center gap-[13px]">
                    <div className="w-[27px] h-[27px] rounded-full" style={{ backgroundColor: article.tagColor }}></div>
                    <span className="text-[23px]" style={{ color: article.tagColor }}>{article.tag}</span>
                  </div>
                </div>
                
                <div className="p-[40px] flex flex-col h-full">
                  <div className="flex-1">
                    <h3 className="text-[40px] font-normal text-[#2C3E50] leading-[1.05] mb-[20px] min-h-[130px]">
                      {article.title}
                    </h3>
                    <p className="text-[26.5px] text-[#7C8B99] leading-[1.6] mb-[32px]">
                      {article.excerpt}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between pt-[32px] border-t border-[#E8F4FC]">
                    <div className="flex items-center gap-[13px]">
                      <svg className="w-[23px] h-[23px] text-[#7C8B99]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="text-[20px] text-[#7C8B99]">{article.date}</span>
                      <span className="text-[20px] text-[#7C8B99]">•</span>
                      <span className="text-[20px] text-[#7C8B99]">{article.time}</span>
                    </div>
                    
                    <button className="flex items-center gap-[7px] hover:gap-[13px] transition-all">
                      <span className="text-[23px] text-[#6BB6FF]">Read</span>
                      <svg className="w-[27px] h-[27px] text-[#6BB6FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2C3E50] text-white py-[106px]">
        <div className="max-w-[1920px] mx-auto px-14">
          <div className="grid grid-cols-6 gap-[60px] mb-[80px]">
            {/* Company Info */}
            <div className="col-span-2">
              <div className="flex items-center gap-5 mb-[40px]">
                <div className="w-20 h-20 bg-gradient-to-b from-[#A8D5FF] to-[#6BB6FF] rounded-[20px] flex items-center justify-center">
                  <span className="text-[40px]">🧠</span>
                </div>
              </div>
              <p className="text-[22px] text-[#C8CFD6] leading-[1.6] mb-[40px]">
                We provide courses in Olympiad Math, Programming, Chess, and Global Education Planning to help children aged 6–18 learn happily, train their critical thinking, and build challenging skills.
              </p>
              <div className="space-y-[20px]">
                <div className="flex items-center gap-[20px]">
                  <svg className="w-[27px] h-[27px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-[22px] text-white">914-488-4460</span>
                </div>
                <div className="flex items-center gap-[20px]">
                  <svg className="w-[27px] h-[27px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-[22px] text-white">chris@deepbraintechnology.com</span>
                </div>
                <div className="flex items-center gap-[20px]">
                  <svg className="w-[27px] h-[27px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-[22px] text-white">92 Massasoit St, Waltham, MA 02453</span>
                </div>
              </div>
            </div>

            {/* Course Center */}
            <div>
              <h4 className="text-[27px] font-semibold mb-[27px]">Course Center</h4>
              <div className="space-y-[20px]">
                <a href="#" className="block text-[20px] text-[#A8B5C3] hover:text-white transition">Olympiad Math</a>
                <a href="#" className="block text-[20px] text-[#A8B5C3] hover:text-white transition">Chess</a>
                <a href="#" className="block text-[20px] text-[#A8B5C3] hover:text-white transition">Global Education</a>
                <a href="#" className="block text-[20px] text-[#A8B5C3] hover:text-white transition">Programming</a>
              </div>
            </div>

            {/* About Us */}
            <div>
              <h4 className="text-[27px] font-semibold mb-[27px]">About Us</h4>
              <div className="space-y-[20px]">
                <a href="#" className="block text-[20px] text-[#A8B5C3] hover:text-white transition">Our Company</a>
                <a href="#" className="block text-[20px] text-[#A8B5C3] hover:text-white transition">Our Team</a>
                <a href="#" className="block text-[20px] text-[#A8B5C3] hover:text-white transition">Contact Us</a>
                <a href="#" className="block text-[20px] text-[#A8B5C3] hover:text-white transition">Careers</a>
              </div>
            </div>

            {/* Help Center */}
            <div>
              <h4 className="text-[27px] font-semibold mb-[27px]">Help Center</h4>
              <div className="space-y-[20px]">
                <a href="#" className="block text-[20px] text-[#A8B5C3] hover:text-white transition">FAQ</a>
                <a href="#" className="block text-[20px] text-[#A8B5C3] hover:text-white transition">Refund Policy</a>
                <a href="#" className="block text-[20px] text-[#A8B5C3] hover:text-white transition">Privacy Policy</a>
                <a href="#" className="block text-[20px] text-[#A8B5C3] hover:text-white transition">Terms of Service</a>
              </div>
            </div>

            {/* Resource Center + 小红书 */}
            <div>
              <h4 className="text-[27px] font-semibold mb-[27px]">Resource Center</h4>
              <div className="space-y-[20px] mb-[40px]">
                <a href="#" className="block text-[20px] text-[#A8B5C3] hover:text-white transition">Learning Materials</a>
                <a href="#" className="block text-[20px] text-[#A8B5C3] hover:text-white transition">Educational Blogs</a>
                <a href="#" className="block text-[20px] text-[#A8B5C3] hover:text-white transition">Successful Cases</a>
                <a href="#" className="block text-[20px] text-[#A8B5C3] hover:text-white transition">Events</a>
              </div>
              
              {/* 小红书二维码 */}
              <div className="pt-[40px] border-t border-[#3D4F63]">
                <p className="text-[23px] text-[#A8B5C3] mb-[20px]">Follow Us</p>
                <div className="w-[240px] h-[240px] bg-[#3D4F63] rounded-[30px] flex items-center justify-center">
                  <Image src="/xhs.svg" alt="小红书" width={180} height={180} />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex items-center justify-between pt-[40px] border-t border-[#3D4F63]">
            <p className="text-[23px] text-[#A8B5C3]">© 2025 DeepBrain Academy. All rights reserved.</p>
            <div className="flex items-center gap-[40px]">
              <a href="#" className="text-[20px] text-[#A8B5C3] hover:text-white transition">Privacy Policy</a>
              <a href="#" className="text-[20px] text-[#A8B5C3] hover:text-white transition">Terms of Use</a>
              <a href="#" className="text-[20px] text-[#A8B5C3] hover:text-white transition">Site Map</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
