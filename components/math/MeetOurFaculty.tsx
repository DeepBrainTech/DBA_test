import React from 'react';
import Image from 'next/image';

interface FacultyMember {
  name: string;
  title: string;
  titleBg: string;
  titleText: string;
  image: string;
  achievements: string[];
  quote: string;
}

interface StatItem {
  icon: string;
  iconBg: string;
  value: string;
  label: string;
  color: string;
}

export default function MeetOurFaculty() {
  const faculty: FacultyMember[] = [
    {
      name: 'Chris Chen',
      title: 'Assistant Professor of Harvard University',
      titleBg: 'bg-[#E3F2FD]',
      titleText: 'text-[#42A5F5]',
      image: '/math/chris-chen.png',
      achievements: [
        'Founder of Cognitive Enhancement Methods and Tools',
        'Cultivating Top Talent with an Olympiad-Inspired Mindset',
        'Distinguished background in Math Olympiads'
      ],
      quote: "To reveal simplicity behind nature's profound beauty and harmony is a great joy."
    },
    {
      name: 'Yanming Zhang',
      title: 'AP Calculus, AP Physics Teacher',
      titleBg: 'bg-[#E8F5E9]',
      titleText: 'text-[#66BB6A]',
      image: '/math/yanming-zhang.png',
      achievements: [
        'Experienced Educator in Advanced STEM and Test Preparation',
        'The Best Math and Science Coach and Mentor in the USA and the World'
      ],
      quote: 'In every problem, there is a hidden pattern waiting for the curious mind to discover it.'
    },
    {
      name: 'Chenxiao Tian',
      title: 'Math Tutor',
      titleBg: 'bg-[#E8F5E9]',
      titleText: 'text-[#66BB6A]',
      image: '/math/chenxiao-tian.png',
      achievements: [
        'PhD in Mathematics and Statistics',
        'Published papers on Mathematics and Data Science',
        'Current PhD student at Princeton University'
      ],
      quote: 'Great thinking starts with asking the right questions.'
    }
  ];

  const stats: StatItem[] = [
    { icon: '👥', iconBg: 'bg-[#EAF6EE]', value: '1,000+', label: 'Students Taught', color: 'text-[#66BB6A]' },
    { icon: '⭐', iconBg: 'bg-[#FFF1E4]', value: '100%', label: 'Parent Satisfaction', color: 'text-[#FFB74D]' },
    { icon: '🏆', iconBg: 'bg-[#F1EEFF]', value: '50+', label: 'Award Winners', color: 'text-[#9C27B0]' },
    { icon: '🛡️', iconBg: 'bg-[#EAF3FF]', value: '20+ years', label: 'Teaching Experience', color: 'text-[#42A5F5]' },
  ];

  return (
    <section className="py-[133px] bg-[#FBF9F4]">
      <div className="max-w-[1920px] mx-auto px-14">
        <div className="text-center mb-[80px]">
          <div className="inline-flex items-center gap-[20px] px-[30px] py-[15px] bg-white rounded-[33px] mb-[27px]">
            <span className="text-[32px]">�️</span>
            <span className="text-[24px] text-[#66BB6A] font-medium">Our Instructors</span>
          </div>
          <h2 className="text-[53px] font-bold text-[#2C3E50] mb-[27px] leading-[1.3]">
            Meet Our Faculty
          </h2>
          <p className="text-[26.5px] text-[#7C8B99] max-w-[1200px] mx-auto">
            Featuring international competition winners and PhD graduates from top universities, we provide expert, results-driven guidance.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-[40px] mb-[100px]">
          {faculty.map((member, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[27px] border border-[#E8F4FC] overflow-hidden hover:shadow-lg transition"
            >
              <div className="relative h-[400px] bg-gradient-to-br from-[#F5F5F5] to-[#E0E0E0]">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                  priority={idx === 0}
                />
                <div className="absolute top-[20px] left-[20px] bg-white/90 backdrop-blur-sm px-[20px] py-[10px] rounded-[20px] flex items-center gap-[8px]">
                  <span className="text-[16px]">🏆</span>
                  <span className="text-[16px] text-[#66BB6A] font-medium">Expert</span>
                </div>
              </div>

              <div className="p-[40px]">
                <h3 className="text-[40px] font-semibold text-[#2C3E50] mb-[8px]">
                  {member.name}
                </h3>
                <p className={`inline-block text-[14px] ${member.titleBg} ${member.titleText} px-3 py-1 rounded-md mb-[27px]`}>
                  {member.title}
                </p>

                <div className="space-y-[13px] mb-[27px]">
                  {member.achievements.map((achievement, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-[10px]">
                      <div className="w-[6px] h-[6px] rounded-full bg-[#66BB6A] mt-[8px] flex-shrink-0"></div>
                      <p className="text-[20px] text-[#5C6B7A] leading-[1.3]">
                        {achievement}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="border-t border-[#E8F4FC] pt-[27px]">
                  <div className="flex items-start gap-[10px]">
                    <span className="text-[27px] text-[#66BB6A] leading-none flex-shrink-0">&ldquo;</span>
                    <p className="text-[20px] text-[#2C3E50] italic leading-[1.3]">
                      {member.quote}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-4 gap-[40px]">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white rounded-[27px] p-[40px] text-center hover:shadow-lg transition">
              <div className={`w-[100px] h-[100px] ${stat.iconBg} rounded-[27px] flex items-center justify-center text-[50px] mx-auto mb-[20px]`}>
                {stat.icon}
              </div>
              <div className={`text-[53px] font-bold ${stat.color} mb-[13px]`}>
                {stat.value}
              </div>
              <div className="text-[20px] text-[#7C8B99]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
