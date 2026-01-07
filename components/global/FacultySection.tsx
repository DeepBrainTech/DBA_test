/**
 * 文件用途：Meet Our Faculty 组件
 * 依赖关系：无
 * 注意事项：展示教师团队和统计数据
 */

import Image from 'next/image';

interface FacultyMember {
  name: string;
  title: string;
  imagePlaceholder: string;
  highlights: string[];
  quote: string;
}

interface StatItem {
  icon: string;
  iconBg: string;
  value: string;
  label: string;
  color: string;
}

const facultyMembers: FacultyMember[] = [
  {
    name: 'Yanming Zhang',
    title: 'GRE, SAT, ACT Tutor',
    imagePlaceholder: '/faculty/placeholder1.jpg',
    highlights: [
      'Experienced Educator in Advanced STEM and Test Preparation',
      'The Best Math and Science Coach and Mentor in the USA and the World'
    ],
    quote: 'In every problem, there is a hidden pattern waiting for the curious mind to discover it.'
  },
  {
    name: 'Yu Tian',
    title: 'College Admissions Counselor',
    imagePlaceholder: '/faculty/placeholder2.jpg',
    highlights: [
      'Expertise in U.S. higher education pathways',
      'Experienced in supporting diverse students.',
      'Provides personalized, data-informed academic guidance.'
    ],
    quote: 'Translating data for human insight, designing education for social equity.'
  },
  {
    name: 'Xi Lin',
    title: 'Language Acquisition Specialist',
    imagePlaceholder: '/faculty/placeholder3.jpg',
    highlights: [
      'M.A. in Education from Columbia University',
      'Creator of English-learning products and communities',
      'Experienced in global education advising and application essay coaching'
    ],
    quote: 'You won\'t feel ready, so start anyway.'
  }
];

const stats: StatItem[] = [
  {
    icon: '👥',
    iconBg: 'bg-[#E8F5E9]',
    value: '2,000+',
    label: 'Students Taught',
    color: 'text-[#66BB6A]'
  },
  {
    icon: '⭐',
    iconBg: 'bg-[#FFF3E0]',
    value: '100%',
    label: 'Parent Satisfaction',
    color: 'text-[#FFA726]'
  },
  {
    icon: '🏆',
    iconBg: 'bg-[#F3E5F5]',
    value: '80+',
    label: 'Award winners',
    color: 'text-[#AB47BC]'
  },
  {
    icon: '🛡️',
    iconBg: 'bg-[#E3F2FD]',
    value: '20+ years',
    label: 'Teaching Experience',
    color: 'text-[#42A5F5]'
  }
];

export default function FacultySection() {
  return (
    <section className="py-[133px] bg-[#FBF9F4]">
      <div className="max-w-[1920px] mx-auto px-14">
        {/* Header */}
        <div className="text-center mb-[80px]">
          <div className="inline-flex items-center gap-[20px] px-[30px] py-[15px] bg-[#F3F0FF] rounded-[33px] mb-[27px]">
            <span className="text-[32px]">👨‍🏫</span>
            <span className="text-[24px] text-[#9B8FD8] font-medium">Our Faculty</span>
          </div>
          <h2 className="text-[53px] font-bold text-[#2C3E50] mb-[27px] leading-[1.3]">
            Meet Our Faculty
          </h2>
          <p className="text-[26.5px] text-[#7C8B99] max-w-[1200px] mx-auto">
            Featuring international competition winners and PhD graduates from top universities, we provide expert, results-driven guidance.
          </p>
        </div>

        {/* Faculty Cards */}
        <div className="grid grid-cols-3 gap-[40px] mb-[100px]">
          {facultyMembers.map((member, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-[27px] border border-[#E8F4FC] overflow-hidden hover:shadow-lg transition"
            >
              {/* Image */}
              <div className="relative h-[400px] bg-gradient-to-br from-[#F5F5F5] to-[#E0E0E0]">
                {/* Placeholder for image */}
                <div className="absolute inset-0 flex items-center justify-center text-[#999] text-[20px]">
                  Image Placeholder
                </div>
                {/* Expert Badge */}
                <div className="absolute top-[20px] left-[20px] bg-white/90 backdrop-blur-sm px-[20px] py-[10px] rounded-[20px] flex items-center gap-[8px]">
                  <span className="text-[16px]">🏆</span>
                  <span className="text-[16px] text-[#9B8FD8] font-medium">Expert</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-[40px]">
                {/* Name & Title */}
                <h3 className="text-[40px] font-semibold text-[#2C3E50] mb-[8px]">
                  {member.name}
                </h3>
                <p className="text-[18px] text-[#9B8FD8] mb-[27px]">
                  {member.title}
                </p>

                {/* Highlights */}
                <div className="space-y-[13px] mb-[27px]">
                  {member.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-[10px]">
                      <div className="w-[6px] h-[6px] rounded-full bg-[#9B8FD8] mt-[8px] flex-shrink-0"></div>
                      <p className="text-[20px] text-[#5C6B7A] leading-[1.3]">
                        {highlight}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Quote */}
                <div className="border-t border-[#E8F4FC] pt-[27px]">
                  <div className="flex items-start gap-[10px]">
                    <span className="text-[27px] text-[#9B8FD8] leading-none flex-shrink-0">"</span>
                    <p className="text-[20px] text-[#2C3E50] italic leading-[1.3]">
                      {member.quote}
                    </p>
                    <span className="text-[27px] text-[#9B8FD8] leading-none self-end flex-shrink-0">"</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
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

