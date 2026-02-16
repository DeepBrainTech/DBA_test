import React from 'react';

export default function MathTeachingPhilosophy() {
  const cards = [
    {
      number: 1,
      icon: (
        <svg className="w-6 h-6 text-[#4CAF50]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
      iconBg: 'bg-[#E8F5E9]',
      title: '"Visualizing Concepts"',
      description: 'By breaking down abstract Math problems, students can truly understand rather than just memorize. Through charts, animations, and real-life examples, complex concepts are made clear and easy to grasp.',
      tags: ['Mind maps', 'Process Demo', 'Multiple Solutions'],
      tagBg: 'bg-[#E8F5E9]',
      tagText: 'text-[#4CAF50]',
    },
    {
      number: 2,
      icon: (
        <svg className="w-6 h-6 text-[#2196F3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      iconBg: 'bg-[#E3F2FD]',
      title: 'Interactive Small Classes',
      description: 'We limit the number of students per class (no more than 8), ensuring that every student receives attention. With real-time questions and interactions, teachers can promptly identify and address individual questions.',
      tags: ['High Teacher-Student ratio', 'Live class', '1 on 1'],
      tagBg: 'bg-[#E3F2FD]',
      tagText: 'text-[#2196F3]',
    },
    {
      number: 3,
      icon: (
        <svg className="w-6 h-6 text-[#FF9800]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      iconBg: 'bg-[#FFF3E0]',
      title: 'World-Class Coaching Team',
      description: 'Classes are taught personally by award-winning competition coaches, who share first-hand experience and techniques. They not only teach problem-solving but also how to maintain peak performance under pressure.',
      tags: ['Top Coaches', 'Expert Mentorship', 'Test Strategies'],
      tagBg: 'bg-[#FFF3E0]',
      tagText: 'text-[#FF9800]',
    },
    {
      number: 4,
      icon: (
        <svg className="w-6 h-6 text-[#9C27B0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      iconBg: 'bg-[#F3E5F5]',
      title: 'Curated Problem Bank',
      description: 'Master the AMC Exam. Our updated bank features thousands of precisely structured, recent problems across all core topics and difficulty levels. Every question includes a detailed, expert-written solution to teach critical thinking for competition success.',
      tags: ['Structured practice', 'Progress Tracking', 'AMC Exam'],
      tagBg: 'bg-[#F3E5F5]',
      tagText: 'text-[#9C27B0]',
    },
  ];

  return (
    <section id="math-teaching" className="py-[100px] bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-[60px]">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#E8F5E9] px-6 py-3 mb-6">
            <span className="text-[#4CAF50] text-base">📐</span>
            <span className="text-[#4CAF50] text-sm font-medium">Teaching Features</span>
          </div>

          <h2 className="text-[44px] leading-tight font-bold text-[#2C3E50] mb-4">
            Math Teaching Philosophy
          </h2>
          <p className="max-w-[820px] text-[16px] leading-relaxed text-[#2C3E50]/60">
            Our unique teaching methodology makes complex mathematical concepts easy to understand.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card) => (
            <div key={card.number} className="relative bg-[#FBF9F4] rounded-[20px] p-8">
              <div className={`w-[48px] h-[48px] ${card.iconBg} rounded-[12px] flex items-center justify-center mb-5`}>
                {card.icon}
              </div>
              <h3 className="text-[18px] font-bold text-[#2C3E50] mb-3">{card.title}</h3>
              <p className="text-[14px] leading-[1.6] text-[#2C3E50]/60 mb-5">{card.description}</p>
              <div className="flex flex-wrap gap-2">
                {card.tags.map((tag, i) => (
                  <span key={i} className={`px-3 py-1.5 ${card.tagBg} ${card.tagText} rounded-full text-[12px] font-medium`}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
