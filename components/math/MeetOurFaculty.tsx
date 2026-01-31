import React from 'react';
import Image from 'next/image';

interface Stat {
  icon: string;
  value: string;
  label: string;
  color: string;
}

interface FacultyMember {
  name: string;
  title: string;
  titleColor?: string;
  image: string;
  badge?: string;
  badgeColor?: string;
  achievements: string[];
  quote: string;
  stats?: Stat[];
}

export default function MeetOurFaculty() {
  const faculty: FacultyMember[] = [
    {
      name: 'Chris Chen',
      title: 'Assistant Professor of Harvard University',
      image: '/math/chris-chen.png',
      badge: 'Expert',
      badgeColor: 'bg-[#FFE8E8] text-[#FF6B6B]',
      achievements: [
        'Founder of Cognitive Enhancement Methods and Tools',
        'Cultivating Top Talent with an Olympiad-Inspired Mindset',
        'Distinguished background in Math Olympiads'
      ],
      quote: 'To reveal simplicity behind nature\'s profound beauty and harmony is a great joy.'
    },
    {
      name: 'Yanming Zhang',
      title: 'AP Calculus, AP Physics Teacher',
      titleColor: 'text-[#81C784]',
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
      titleColor: 'text-[#81C784]',
      image: '/math/chenxiao-tian.png',
      achievements: [
        'PhD in Mathematics and Statistics',
        'Published papers on Mathematics and Data Science',
        'Current PhD student at Princeton University'
      ],
      quote: 'Great thinking starts with asking the right questions.'
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-2 mb-6 justify-center">
          <span className="text-2xl">👨‍🏫</span>
          <span className="text-[#8B7355] font-medium">Our Instructors</span>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#2C2C2C] mb-4">
          Meet Our Faculty
        </h2>
        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
          Featuring international competition winners and PhD graduates from top universities, we provide expert, results-driven guidance.
        </p>

        <div className="space-y-12">
          {faculty.map((member, index) => (
            <div key={index} className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-[400px] md:h-auto">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                  {member.badge && (
                    <div className={`absolute top-6 left-6 ${member.badgeColor} px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2`}>
                      <span>🏆</span>
                      <span>{member.badge}</span>
                    </div>
                  )}
                </div>

                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold text-[#2C2C2C] mb-2">
                    {member.name}
                  </h3>
                  <p className={`${member.titleColor || 'text-[#81C784]'} font-medium mb-6`}>
                    {member.title}
                  </p>

                  <ul className="space-y-3 mb-6">
                    {member.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-700">
                        <span className="text-[#81C784] mt-1">●</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="bg-[#F5F5F5] rounded-2xl p-6 mb-6 italic text-gray-700 border-l-4 border-[#81C784]">
                    "{member.quote}"
                  </div>

                  {member.stats && Array.isArray(member.stats) && (
                    <div className="grid grid-cols-2 gap-4">
                      {member.stats.map((stat: any, i: number) => (
                        <div key={i} className="bg-[#FAFAFA] rounded-xl p-4 text-center">
                          <div className="text-3xl mb-2">{stat.icon}</div>
                          <div className={`text-2xl font-bold ${stat.color} mb-1`}>
                            {stat.value}
                          </div>
                          <div className="text-sm text-gray-600">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-[#E8F5E9] to-[#F0F4FF] rounded-3xl p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-3">👥</div>
              <div className="text-3xl font-bold text-[#81C784] mb-2">1,000+</div>
              <div className="text-gray-700 font-medium">Students Taught</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">⭐</div>
              <div className="text-3xl font-bold text-[#FFB74D] mb-2">100%</div>
              <div className="text-gray-700 font-medium">Parent Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🏆</div>
              <div className="text-3xl font-bold text-[#9C27B0] mb-2">50+</div>
              <div className="text-gray-700 font-medium">Award Winners</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🎓</div>
              <div className="text-3xl font-bold text-[#42A5F5] mb-2">20+ years</div>
              <div className="text-gray-700 font-medium">Teaching Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
