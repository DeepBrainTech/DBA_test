'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Outfit } from 'next/font/google';

const outfit = Outfit({ subsets: ['latin'] });

export default function GlobalEducation() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const scrollToContent = () => {
    const nextSection = document.getElementById('challenges');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const features = [
    {
      icon: '🎓',
      title: 'Top Resources'
    },
    {
      icon: '🏛️',
      title: 'Prestigious Institutions'
    },
    {
      icon: '🏅',
      title: 'Ivy League Mentors'
    },
    {
      icon: '📈',
      title: 'Direct Admissions Pathways'
    }
  ];

  const challenges = [
    {
      icon: '/global/facing1.svg',
      iconBg: '#E8E3FF',
      iconColor: '#9B8FD8',
      title: 'Lacking Clear Direction',
      description: 'Choosing a major? Picking a school? Planning your career path?',
      items: [
        'Undecided on a major.',
        'Unsure which universities to target.',
        'Undefined career goals.'
      ]
    },
    {
      icon: '/global/facing2.svg',
      iconBg: '#E3F2FD',
      iconColor: '#6BB6FF',
      title: 'Building a Standout Profile',
      description: 'Average profile? Stand out anyway.',
      items: [
        'Limited Extracurricular Activities',
        'Lack of impactful extracurriculars',
        'Average Testing Scores'
      ]
    },
    {
      icon: '/global/facing3.svg',
      iconBg: '#FFE8D6',
      iconColor: '#F4A460',
      title: 'Weak Personal Statement',
      description: 'Story lacks impact.',
      items: [
        'Struggling to tell your story',
        'Essays lack originality and personal touch',
        'Struggling with native English nuances'
      ]
    },
    {
      icon: '/global/facing4.svg',
      iconBg: '#E8F5E9',
      iconColor: '#7EC97E',
      title: 'Navigating the Maze',
      description: 'Complex procedures, confusing requirements, high stress.',
      items: [
        'Unclear application process',
        'Key deadlines are easily missed',
        'Tight deadline'
      ]
    }
  ];

  const serviceSteps = [
    {
      step: '1',
      icon: '🔍',
      title: 'Analyze & Plan',
      duration: '1-2 mo.',
      description: 'Full profile review, clear goals, custom strategy.',
      color: '#9B8FD8',
      bgColor: '#F3F0FF',
      side: 'left',
      items: [
        'Comprehensive Evaluation',
        'Career Path Exploration',
        'Target School Selection',
        'Strategic Timeline Creation'
      ]
    },
    {
      step: '2',
      icon: '💡',
      title: 'Portfolio Development',
      duration: '6-12 mo.',
      description: 'Build standout strengths.',
      color: '#6BB6FF',
      bgColor: '#E8F4FC',
      side: 'right',
      items: [
        'Academic Guidance',
        'Impactful Opportunities',
        'Top Summer Schools',
        'Extracurricular Strategy'
      ]
    },
    {
      step: '3',
      icon: '📝',
      title: 'Strategic Application Prep',
      duration: '2-4 mo before application',
      description: 'Refining school lists and crafting standout essays.',
      color: '#F4A460',
      bgColor: '#FFF3E8',
      side: 'left',
      items: [
        'School & Major Selection',
        'Essay Ideation & Storytelling',
        'Essay Refinement',
        'Recommendation Letter'
      ]
    },
    {
      step: '4',
      icon: '✈️',
      title: 'Apply & Submit',
      duration: 'Application Season',
      description: 'Expert application walkthrough & mock interviews.',
      color: '#7EC97E',
      bgColor: '#E8F5E9',
      side: 'right',
      items: [
        'Application Support',
        'School Communication',
        'Mock Interviews & Feedback',
        'Status Tracking'
      ]
    },
    {
      step: '5',
      icon: '🎓',
      title: 'Post-Acceptance Transition',
      duration: 'Offer Received',
      description: 'Make the best choice, start strong abroad.',
      color: '#B19CD9',
      bgColor: '#F3F0FF',
      side: 'left',
      items: [
        'Decision Counseling & Analysis',
        'Visa Document Preparation',
        'Pre-Departure Guidance',
        'Alumni Networking'
      ]
    }
  ];

  return (
    <div className={`min-h-screen bg-[#FBF9F4] ${outfit.className}`}>
      {/* Hero Section with Background - Full Height including Nav */}
      <section className="relative min-h-screen overflow-hidden flex flex-col">
        {/* Background Image - Covers Nav + Hero */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/global/cover.svg"
            alt="Global Education Background"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Navigation - Transparent overlay */}
        <nav className="relative z-50">
          <div className="max-w-[1920px] mx-auto px-14">
            <div className="flex items-center justify-between h-[130px]">
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

              {/* Nav Links */}
              <div className="flex items-center gap-[48px] text-[26px] text-[#333]">
                <Link href="/" className="hover:text-[#6BB6FF] transition">Home</Link>
                <Link href="/global-education" className="font-bold text-[#6BB6FF] transition">Global Education</Link>
                <Link href="#" className="hover:text-[#6BB6FF] transition">Math</Link>
                <Link href="#" className="hover:text-[#6BB6FF] transition">Chess</Link>
                <Link href="#" className="hover:text-[#6BB6FF] transition">Programming</Link>
                <Link href="#" className="hover:text-[#6BB6FF] transition">About Us</Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 max-w-[1920px] mx-auto px-[81px] py-[120px] flex-1 flex flex-col items-center justify-center text-center">
          {/* Main Title */}
          <h1 className="text-[80px] font-bold text-[#333] leading-[140px] mb-[30px]">
            Global Education
          </h1>
          
          <p className="text-[32px] text-black leading-[46px] mb-[80px] max-w-[800px] font-medium">
            A customized journey from aspiration to admission.
          </p>
          
          {/* Feature Cards - Horizontal Layout matching Figma */}
          <div className="flex items-start gap-[26px] mb-[80px] w-full max-w-[1759px]">
            {features.map((feature, idx) => (
              <div 
                key={idx} 
                className="bg-white/80 backdrop-blur-sm border border-[#E8F4FC] rounded-[20px] px-[27px] py-[20px] hover:shadow-lg transition cursor-pointer flex items-center gap-[20px] flex-1 h-[94px]"
              >
                <div className="text-[33px] leading-[46px] flex-shrink-0">
                  {feature.icon}
                </div>
                <h3 className="text-[23px] text-[#2C3E50] font-normal text-left leading-[33px]">
                  {feature.title}
                </h3>
              </div>
            ))}
          </div>

          {/* Begin Your Journey Button */}
          <button 
            onClick={scrollToContent}
            className="px-[60px] h-[90px] bg-gradient-to-b from-[#9B8FD8] to-[#8A7CC7] text-white text-[26px] rounded-[40px] hover:shadow-xl transition font-medium"
          >
            Begin Your Journey
          </button>
        </div>
      </section>

      {/* Facing these hurdles? Section */}
      <section id="challenges" className="py-[133px] bg-white scroll-mt-[133px]">
        <div className="max-w-[1920px] mx-auto px-14">
          <div className="text-center mb-[80px]">
            <div className="inline-flex items-center gap-[20px] px-[30px] py-[15px] bg-[#F3F0FF] rounded-[33px] mb-[27px]">
              <span className="text-[32px]">🤔</span>
              <span className="text-[24px] text-[#9B8FD8] font-medium">Common Challenges</span>
            </div>
            <h2 className="text-[53px] font-bold text-[#2C3E50] mb-[27px] leading-[1.3]">
              Facing these hurdles?
            </h2>
            <p className="text-[26.5px] text-[#7C8B99]">
              You aren’t alone in the application process.
            </p>
          </div>

          {/* Challenges Grid */}
          <div className="grid grid-cols-2 gap-[40px] mb-[80px]">
            {challenges.map((challenge, idx) => (
              <div key={idx} className="bg-[#FBF9F4] rounded-[33px] p-[48px] hover:shadow-lg transition">
                <div className="flex items-start gap-[27px] mb-[27px]">
                  <div 
                    className="w-[80px] h-[80px] rounded-[20px] flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: challenge.iconBg }}
                  >
                    <Image 
                      src={challenge.icon} 
                      alt={challenge.title}
                      width={40}
                      height={40}
                      className="w-[40px] h-[40px]"
                    />
                  </div>
                  <div>
                    <h3 className="text-[32px] font-semibold text-[#2C3E50] mb-[13px]">
                      {challenge.title}
                    </h3>
                    <p className="text-[22px] text-[#7C8B99] leading-[1.6]">
                      {challenge.description}
                    </p>
                  </div>
                </div>
                
                <div className="space-y-[13px] ml-[107px]">
                  {challenge.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="flex items-start gap-[13px]">
                      <div 
                        className="w-[8px] h-[8px] mt-[10px] rounded-full" 
                        style={{ backgroundColor: challenge.iconColor }}
                      ></div>
                      <span className="text-[20px] text-[#5C6B7A] leading-[1.5]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* We Get It Section */}
          <div className="bg-gradient-to-br from-[#F3F0FF] to-[#E8F4FC] rounded-[40px] p-[60px] text-center">
            <h3 className="text-[40px] font-bold text-[#2C3E50] mb-[20px]">
              We Get It.
            </h3>
            <p className="text-[24px] text-[#7C8B99] mb-[13px]">
              Applications aren't just academic—they're life-changing. Anxiety is normal. But there's the good news:
            </p>
            <p className="text-[26px] font-semibold text-[#9B8FD8]">
              2,000+ families guided. You're not alone.
            </p>
          </div>
        </div>
      </section>

      {/* Service Map Section */}
      <section className="py-[133px] bg-[#FBF9F4]">
        <div className="max-w-[1920px] mx-auto px-14">
          <div className="text-center mb-[80px]">
            <div className="inline-flex items-center gap-[20px] px-[30px] py-[15px] bg-[#E8F4FC] rounded-[33px] mb-[27px]">
              <span className="text-[32px]">🗺️</span>
              <span className="text-[24px] text-[#6BB6FF] font-medium">Your Roadmap</span>
            </div>
            <h2 className="text-[53px] font-bold text-[#2C3E50] mb-[20px] leading-[1.3]">
              From Potential to Extraordinary
            </h2>
            <p className="text-[26.5px] text-[#7C8B99]">
              A complete, systematic, and transparent service process.
            </p>
          </div>

          {/* Service Steps - Timeline Layout */}
          <div className="max-w-[1400px] mx-auto relative mb-[80px]">
            {/* Center Line - Light tan/orange color */}
            <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-[#FFE5D0] transform -translate-x-1/2"></div>

            {/* Steps */}
            <div className="space-y-[100px]">
              {serviceSteps.map((step, idx) => (
                <div key={idx} className="relative">
                  {/* Step Number Circle */}
                  <div 
                    className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[100px] h-[100px] rounded-full flex items-center justify-center text-[40px] font-bold text-white shadow-lg z-10"
                    style={{ backgroundColor: step.color }}
                  >
                    {step.step}
                  </div>

                  {/* Content Card */}
                  <div className="grid grid-cols-2 gap-[180px] items-center">
                    {step.side === 'left' ? (
                      <>
                        {/* Left Side - Card */}
                        <div 
                          className="rounded-[27px] p-[40px]"
                          style={{ backgroundColor: step.bgColor }}
                        >
                          {/* Icon & Title */}
                          <div className="flex items-start gap-[20px] mb-[20px]">
                            <div 
                              className="w-[66px] h-[66px] rounded-[16px] flex items-center justify-center text-[32px] flex-shrink-0"
                              style={{ backgroundColor: 'rgba(255,255,255,0.6)' }}
                            >
                              {step.icon}
                            </div>
                            <div>
                              <h3 className="text-[32px] font-semibold text-[#2C3E50] mb-[8px]">
                                {step.title}
                              </h3>
                              <p className="text-[18px]" style={{ color: step.color }}>
                                {step.duration}
                              </p>
                            </div>
                          </div>

                          {/* Description */}
                          <p className="text-[20px] text-[#7C8B99] leading-[1.6] mb-[27px]">
                            {step.description}
                          </p>

                          {/* Bullet Points - 2 columns */}
                          <div className="grid grid-cols-2 gap-x-[40px] gap-y-[13px]">
                            {step.items.map((item, itemIdx) => (
                              <div 
                                key={itemIdx} 
                                className="flex items-center gap-[10px]"
                              >
                                <div 
                                  className="w-[8px] h-[8px] rounded-full flex-shrink-0"
                                  style={{ backgroundColor: step.color }}
                                ></div>
                                <span className="text-[17px] text-[#2C3E50]">
                                  {item}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                        {/* Right Side - Empty */}
                        <div></div>
                      </>
                    ) : (
                      <>
                        {/* Left Side - Empty */}
                        <div></div>
                        {/* Right Side - Card */}
                        <div 
                          className="rounded-[27px] p-[40px]"
                          style={{ backgroundColor: step.bgColor }}
                        >
                          {/* Icon & Title */}
                          <div className="flex items-start gap-[20px] mb-[20px]">
                            <div 
                              className="w-[66px] h-[66px] rounded-[16px] flex items-center justify-center text-[32px] flex-shrink-0"
                              style={{ backgroundColor: 'rgba(255,255,255,0.6)' }}
                            >
                              {step.icon}
                            </div>
                            <div>
                              <h3 className="text-[32px] font-semibold text-[#2C3E50] mb-[8px]">
                                {step.title}
                              </h3>
                              <p className="text-[18px]" style={{ color: step.color }}>
                                {step.duration}
                              </p>
                            </div>
                          </div>

                          {/* Description */}
                          <p className="text-[20px] text-[#7C8B99] leading-[1.6] mb-[27px]">
                            {step.description}
                          </p>

                          {/* Bullet Points - 2 columns */}
                          <div className="grid grid-cols-2 gap-x-[40px] gap-y-[13px]">
                            {step.items.map((item, itemIdx) => (
                              <div 
                                key={itemIdx} 
                                className="flex items-center gap-[10px]"
                              >
                                <div 
                                  className="w-[8px] h-[8px] rounded-full flex-shrink-0"
                                  style={{ backgroundColor: step.color }}
                                ></div>
                                <span className="text-[17px] text-[#2C3E50]">
                                  {item}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Transparent Service Section */}
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-[60px]">
              <h3 className="text-[40px] font-bold text-[#2C3E50] mb-[20px]">
                Transparent Service
              </h3>
              <p className="text-[20px] text-[#7C8B99] leading-[1.6] max-w-[900px] mx-auto">
                Monitor progress, access documents, and review history any time via our "Growth Portfolio" system—transforming the application process into a transparent, guided journey.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-[40px]">
              <div className="text-center">
                <div className="w-[80px] h-[80px] bg-gradient-to-br from-[#6BB6FF]/20 to-[#4A9FEF]/20 rounded-[20px] flex items-center justify-center text-[40px] mx-auto mb-[20px]">
                  📊
                </div>
                <h4 className="text-[24px] font-semibold text-[#2C3E50]">
                  Progress Tracking
                </h4>
              </div>

              <div className="text-center">
                <div className="w-[80px] h-[80px] bg-gradient-to-br from-[#7EC97E]/20 to-[#6BB87B]/20 rounded-[20px] flex items-center justify-center text-[40px] mx-auto mb-[20px]">
                  ☁️
                </div>
                <h4 className="text-[24px] font-semibold text-[#2C3E50]">
                  Cloud Doc Storage
                </h4>
              </div>

              <div className="text-center">
                <div className="w-[80px] h-[80px] bg-gradient-to-br from-[#F4A460]/20 to-[#E89451]/20 rounded-[20px] flex items-center justify-center text-[40px] mx-auto mb-[20px]">
                  💬
                </div>
                <h4 className="text-[24px] font-semibold text-[#2C3E50]">
                  24/7 Chat
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Advantages Section */}
      <section className="py-[133px] bg-white">
        <div className="max-w-[1920px] mx-auto px-[53px]">
          {/* Header */}
          <div className="text-center mb-[106px]">
            <div className="inline-flex items-center gap-[27px] px-[27px] py-[13px] bg-[#F3F0FF] rounded-[33px] mb-[27px]">
              <span className="text-[40px]">💎</span>
              <span className="text-[27px] text-[#9B8FD8] font-normal">Our Advantages</span>
            </div>
            <h2 className="text-[53px] font-bold text-[#2C3E50] mb-[27px] leading-[1.3]">
              How top applicants stand out?
            </h2>
            <p className="text-[27px] text-[#7C8B99]">
              Not all agencies offer these core strengths.
            </p>
          </div>

          {/* Advantages Grid - 2x2 */}
          <div className="grid grid-cols-2 gap-[53px] mb-[106px]">
            {/* Former Admissions Team */}
            <div className="bg-[#FBF9F4] rounded-[40px] p-[53px] relative overflow-hidden">
              <div className="absolute top-[-66px] right-[150px] w-[266px] h-[266px] bg-[#9B8FD8] opacity-5 rounded-full blur-[66px]"></div>
              <div className="relative z-10">
                <div className="w-[106px] h-[106px] bg-[rgba(155,143,216,0.13)] rounded-[27px] flex items-center justify-center mb-[53px]">
                  <span className="text-[53px]">👥</span>
                </div>
                <h3 className="text-[40px] font-semibold text-[#2C3E50] mb-[27px]">
                  Former Admissions Team
                </h3>
                <p className="text-[27px] text-[#7C8B99] leading-[1.6] mb-[27px]">
                  Gain insider insight with ex-admissions officers from Ivy League, Oxford, Cambridge, and more.
                </p>
                <div className="grid grid-cols-2 gap-[20px]">
                  <div className="bg-white rounded-[20px] px-[20px] py-[13px] text-center">
                    <p className="text-[27px] text-[#2C3E50]">Former admissions</p>
                  </div>
                  <div className="bg-white rounded-[20px] px-[20px] py-[13px] text-center">
                    <p className="text-[27px] text-[#2C3E50]">Decode admissions logic</p>
                  </div>
                  <div className="bg-white rounded-[20px] px-[20px] py-[13px] text-center">
                    <p className="text-[27px] text-[#2C3E50]">Insider insights</p>
                  </div>
                  <div className="bg-white rounded-[20px] px-[20px] py-[13px] text-center">
                    <p className="text-[27px] text-[#2C3E50]">Target ket factors</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Growth Portfolio System */}
            <div className="bg-[#FBF9F4] rounded-[40px] p-[53px] relative overflow-hidden">
              <div className="absolute top-[-66px] right-[150px] w-[266px] h-[266px] bg-[#6BB6FF] opacity-5 rounded-full blur-[66px]"></div>
              <div className="relative z-10">
                <div className="w-[106px] h-[106px] bg-[rgba(107,182,255,0.13)] rounded-[27px] flex items-center justify-center mb-[53px]">
                  <span className="text-[53px]">💼</span>
                </div>
                <h3 className="text-[40px] font-semibold text-[#2C3E50] mb-[27px]">
                  "Growth Portfolio" System
                </h3>
                <p className="text-[27px] text-[#7C8B99] leading-[1.6] mb-[27px]">
                  Dedicated platform: real-time tracking of applications and deadlines — keeping students and parents informed.
                </p>
                <div className="grid grid-cols-2 gap-[20px]">
                  <div className="bg-white rounded-[20px] px-[20px] py-[13px] text-center">
                    <p className="text-[27px] text-[#2C3E50]">Cloud storage</p>
                  </div>
                  <div className="bg-white rounded-[20px] px-[20px] py-[13px] text-center">
                    <p className="text-[27px] text-[#2C3E50]">Process tracking</p>
                  </div>
                  <div className="bg-white rounded-[20px] px-[20px] py-[13px] text-center">
                    <p className="text-[27px] text-[#2C3E50]">Mobile end</p>
                  </div>
                  <div className="bg-white rounded-[20px] px-[20px] py-[13px] text-center">
                    <p className="text-[27px] text-[#2C3E50]">History tracking</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Major-Specific Mentor Matching */}
            <div className="bg-[#FBF9F4] rounded-[40px] p-[53px] relative overflow-hidden">
              <div className="absolute top-[-66px] right-[150px] w-[266px] h-[266px] bg-[#F4A460] opacity-5 rounded-full blur-[66px]"></div>
              <div className="relative z-10">
                <div className="w-[106px] h-[106px] bg-[rgba(244,164,96,0.13)] rounded-[27px] flex items-center justify-center mb-[53px]">
                  <span className="text-[53px]">🎓</span>
                </div>
                <h3 className="text-[40px] font-semibold text-[#2C3E50] mb-[27px]">
                  Major-Specific Mentor Matching
                </h3>
                <p className="text-[27px] text-[#7C8B99] leading-[1.6] mb-[27px]">
                  Connect with current top students in your target programs for genuine insider insights, major advice, and campus guidance.
                </p>
                <div className="grid grid-cols-2 gap-[20px]">
                  <div className="bg-white rounded-[20px] px-[20px] py-[13px] text-center">
                    <p className="text-[27px] text-[#2C3E50]">Top university mentors</p>
                  </div>
                  <div className="bg-white rounded-[20px] px-[20px] py-[13px] text-center">
                    <p className="text-[27px] text-[#2C3E50]">One-on-one sharing</p>
                  </div>
                  <div className="bg-white rounded-[20px] px-[20px] py-[13px] text-center">
                    <p className="text-[27px] text-[#2C3E50]">School Life Sharing</p>
                  </div>
                  <div className="bg-white rounded-[20px] px-[20px] py-[13px] text-center">
                    <p className="text-[27px] text-[#2C3E50]">Analyze major courses</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Data-driven School Selection */}
            <div className="bg-[#FBF9F4] rounded-[40px] p-[53px] relative overflow-hidden">
              <div className="absolute top-[-66px] right-[150px] w-[266px] h-[266px] bg-[#7EC97E] opacity-5 rounded-full blur-[66px]"></div>
              <div className="relative z-10">
                <div className="w-[106px] h-[106px] bg-[rgba(126,201,126,0.13)] rounded-[27px] flex items-center justify-center mb-[53px]">
                  <span className="text-[53px]">📊</span>
                </div>
                <h3 className="text-[40px] font-semibold text-[#2C3E50] mb-[27px]">
                  Data-driven School Selection
                </h3>
                <p className="text-[27px] text-[#7C8B99] leading-[1.6] mb-[27px]">
                  AI-powered school matching and risk analysis—smarter applications, higher success.
                </p>
                <div className="grid grid-cols-2 gap-[20px]">
                  <div className="bg-white rounded-[20px] px-[20px] py-[13px] text-center">
                    <p className="text-[27px] text-[#2C3E50]">Admission database</p>
                  </div>
                  <div className="bg-white rounded-[20px] px-[20px] py-[13px] text-center">
                    <p className="text-[27px] text-[#2C3E50]">AI algorithm</p>
                  </div>
                  <div className="bg-white rounded-[20px] px-[20px] py-[13px] text-center">
                    <p className="text-[27px] text-[#2C3E50]">Risk evaluation</p>
                  </div>
                  <div className="bg-white rounded-[20px] px-[20px] py-[13px] text-center">
                    <p className="text-[27px] text-[#2C3E50]">Dynamic strategy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Comparison Table */}
          <div className="rounded-[40px] bg-gradient-to-br from-[rgba(155,143,216,0.05)] to-[rgba(107,182,255,0.05)] p-[53px]">
            <h3 className="text-[40px] font-semibold text-[#2C3E50] text-center mb-[53px]">
              Us vs. Traditional Agencies
            </h3>
            
            <div className="overflow-hidden">
              {/* Table Header */}
              <div className="grid grid-cols-12 gap-[20px] border-b-[3px] border-[#E8F4FC] pb-[27px] mb-[27px]">
                <div className="col-span-3">
                  <p className="text-[27px] font-bold text-[#7C8B99]">Services</p>
                </div>
                <div className="col-span-6 text-center">
                  <p className="text-[27px] font-bold text-[#9B8FD8]">DeepBrain Academy</p>
                </div>
                <div className="col-span-3 text-center">
                  <p className="text-[27px] font-bold text-[#7C8B99]">Traditional Agencies</p>
                </div>
              </div>

              {/* Table Rows */}
              <div className="space-y-[27px]">
                {/* Row 1 */}
                <div className="grid grid-cols-12 gap-[20px] border-b border-[#E8F4FC] pb-[27px]">
                  <div className="col-span-3">
                    <p className="text-[23px] text-[#2C3E50]">Mentor background</p>
                  </div>
                  <div className="col-span-6 flex justify-center">
                    <div className="bg-[rgba(155,143,216,0.1)] rounded-[20px] px-[27px] py-[13px] inline-flex items-center gap-[13px]">
                      <span className="text-[23px] text-[#9B8FD8]">✓</span>
                      <p className="text-[23px] text-[#9B8FD8]">Former Admissions Team</p>
                    </div>
                  </div>
                  <div className="col-span-3 text-center">
                    <p className="text-[23px] text-[#7C8B99]">General Advisors</p>
                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-12 gap-[20px] border-b border-[#E8F4FC] pb-[27px]">
                  <div className="col-span-3">
                    <p className="text-[23px] text-[#2C3E50]">Service transparency</p>
                  </div>
                  <div className="col-span-6 flex justify-center">
                    <div className="bg-[rgba(155,143,216,0.1)] rounded-[20px] px-[27px] py-[13px] inline-flex items-center gap-[13px]">
                      <span className="text-[23px] text-[#9B8FD8]">✓</span>
                      <p className="text-[23px] text-[#9B8FD8]">End-to-end Visualized System</p>
                    </div>
                  </div>
                  <div className="col-span-3 text-center">
                    <p className="text-[23px] text-[#7C8B99]">Progress Lack of Transparency</p>
                  </div>
                </div>

                {/* Row 3 */}
                <div className="grid grid-cols-12 gap-[20px] border-b border-[#E8F4FC] pb-[27px]">
                  <div className="col-span-3">
                    <p className="text-[23px] text-[#2C3E50]">Essay Originality</p>
                  </div>
                  <div className="col-span-6 flex justify-center">
                    <div className="bg-[rgba(155,143,216,0.1)] rounded-[20px] px-[27px] py-[13px] inline-flex items-center gap-[13px]">
                      <span className="text-[23px] text-[#9B8FD8]">✓</span>
                      <p className="text-[23px] text-[#9B8FD8]">100% original</p>
                    </div>
                  </div>
                  <div className="col-span-3 text-center">
                    <p className="text-[23px] text-[#7C8B99]">Template-Based Reuse</p>
                  </div>
                </div>

                {/* Row 4 */}
                <div className="grid grid-cols-12 gap-[20px] border-b border-[#E8F4FC] pb-[27px]">
                  <div className="col-span-3">
                    <p className="text-[23px] text-[#2C3E50]">Data Support</p>
                  </div>
                  <div className="col-span-6 flex justify-center">
                    <div className="bg-[rgba(155,143,216,0.1)] rounded-[20px] px-[27px] py-[13px] inline-flex items-center gap-[13px]">
                      <span className="text-[23px] text-[#9B8FD8]">✓</span>
                      <p className="text-[23px] text-[#9B8FD8]">Admission database</p>
                    </div>
                  </div>
                  <div className="col-span-3 text-center">
                    <p className="text-[23px] text-[#7C8B99]">Reliance on Experiential Judgment</p>
                  </div>
                </div>

                {/* Row 5 */}
                <div className="grid grid-cols-12 gap-[20px] pb-[27px]">
                  <div className="col-span-3">
                    <p className="text-[23px] text-[#2C3E50]">Follow-up Services</p>
                  </div>
                  <div className="col-span-6 flex justify-center">
                    <div className="bg-[rgba(155,143,216,0.1)] rounded-[20px] px-[27px] py-[13px] inline-flex items-center gap-[13px]">
                      <span className="text-[23px] text-[#9B8FD8]">✓</span>
                      <p className="text-[23px] text-[#9B8FD8]">Post-Acceptance Guidance</p>
                    </div>
                  </div>
                  <div className="col-span-3 text-center">
                    <p className="text-[23px] text-[#7C8B99]">Services End Upon Admission</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-[133px] bg-gradient-to-b from-[#E8F4FC] to-white">
        <div className="max-w-[1920px] mx-auto px-14">
          <div className="bg-gradient-to-br from-[#9B8FD8] to-[#8A7CC7] rounded-[40px] p-[80px] text-center text-white shadow-xl">
            <h2 className="text-[53px] font-bold mb-[27px]">
              Ready to Start Your Global Education Journey?
            </h2>
            <p className="text-[28px] mb-[53px] opacity-90 max-w-[900px] mx-auto">
              Book a free consultation with our expert team and discover how we can help you achieve your educational goals.
            </p>
            <div className="flex items-center justify-center gap-[27px]">
              <button className="flex items-center justify-center gap-[13px] px-[53px] h-[95px] bg-white text-[#9B8FD8] text-[28px] rounded-[40px] hover:shadow-xl transition font-semibold">
                Schedule Consultation
                <svg className="w-[33px] h-[33px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.77} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
              <button className="flex items-center justify-center gap-[13px] px-[53px] h-[95px] bg-transparent border-2 border-white text-white text-[28px] rounded-[40px] hover:bg-white/10 transition">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Same as homepage */}
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
                <Link href="#" className="block text-[20px] text-[#A8B5C3] hover:text-white transition">Olympiad Math</Link>
                <Link href="#" className="block text-[20px] text-[#A8B5C3] hover:text-white transition">Chess</Link>
                <Link href="/global-education" className="block text-[20px] text-[#A8B5C3] hover:text-white transition">Global Education</Link>
                <Link href="#" className="block text-[20px] text-[#A8B5C3] hover:text-white transition">Programming</Link>
              </div>
            </div>

            {/* About Us */}
            <div>
              <h4 className="text-[27px] font-semibold mb-[27px]">About Us</h4>
              <div className="space-y-[20px]">
                <Link href="#" className="block text-[20px] text-[#A8B5C3] hover:text-white transition">Our Company</Link>
                <Link href="#" className="block text-[20px] text-[#A8B5C3] hover:text-white transition">Our Team</Link>
                <Link href="#" className="block text-[20px] text-[#A8B5C3] hover:text-white transition">Contact Us</Link>
                <Link href="#" className="block text-[20px] text-[#A8B5C3] hover:text-white transition">Careers</Link>
              </div>
            </div>

            {/* Help Center */}
            <div>
              <h4 className="text-[27px] font-semibold mb-[27px]">Help Center</h4>
              <div className="space-y-[20px]">
                <Link href="#" className="block text-[20px] text-[#A8B5C3] hover:text-white transition">FAQ</Link>
                <Link href="#" className="block text-[20px] text-[#A8B5C3] hover:text-white transition">Refund Policy</Link>
                <Link href="#" className="block text-[20px] text-[#A8B5C3] hover:text-white transition">Privacy Policy</Link>
                <Link href="#" className="block text-[20px] text-[#A8B5C3] hover:text-white transition">Terms of Service</Link>
              </div>
            </div>

            {/* Resource Center */}
            <div>
              <h4 className="text-[27px] font-semibold mb-[27px]">Resource Center</h4>
              <div className="space-y-[20px]">
                <Link href="#" className="block text-[20px] text-[#A8B5C3] hover:text-white transition">Learning Materials</Link>
                <Link href="#" className="block text-[20px] text-[#A8B5C3] hover:text-white transition">Educational Blogs</Link>
                <Link href="#" className="block text-[20px] text-[#A8B5C3] hover:text-white transition">Successful Cases</Link>
                <Link href="#" className="block text-[20px] text-[#A8B5C3] hover:text-white transition">Events</Link>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex items-center justify-between pt-[40px] border-t border-[#3D4F63]">
            <p className="text-[23px] text-[#A8B5C3]">© 2025 DeepBrain Academy. All rights reserved.</p>
            <div className="flex items-center gap-[40px]">
              <Link href="#" className="text-[20px] text-[#A8B5C3] hover:text-white transition">Privacy Policy</Link>
              <Link href="#" className="text-[20px] text-[#A8B5C3] hover:text-white transition">Terms of Use</Link>
              <Link href="#" className="text-[20px] text-[#A8B5C3] hover:text-white transition">Site Map</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
