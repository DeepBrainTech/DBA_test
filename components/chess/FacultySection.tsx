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
        name: 'Chris Chen',
        title: 'Assistant Professor at Harvard University',
        imagePlaceholder: '/chess/chris-chen.jpg',
        highlights: [
            'The inventor of Quantum Go',
            'Top 20 Worldwide in Fog of War Chess',
            'Specializes in using chess for cognitive enhancement and neurological health.'
        ],
        quote:
            "To reveal simplicity behind nature’s profound beauty and harmony is a great joy."
    },
    {
        name: 'Jerry Wang',
        title: 'National Grade 2 Athlete (Go)',
        imagePlaceholder: '/chess/jerry-wang.jpg',
        highlights: [
            'Master of deep strategy and complex logical deduction',
            'Full-Stack Software Engineer',
            'M.S. from Brown University'
        ],
        quote: 'To find the solution, first see the principle.'
    },
    {
        name: 'Sherrie Ye',
        title: 'CWA 5-Dan',
        imagePlaceholder: '/chess/sherrie-ye.jpg',
        highlights: [
            '10+ years of experience in Go, multiple years of teaching and training experience',
            'Leverages Go to foster cognitive development and learning pathways.'
        ],
        quote:
            'Using Go to help students develop strategic thinking and cultivate transferable thinking skills that extend beyond the game.'
    }
];


const stats: StatItem[] = [
    {
        icon: '👥',
        iconBg: 'bg-[#EAF6EE]',
        value: '3,000+',
        label: 'Students Taught',
        color: 'text-[#7EC97E]'
    },
    {
        icon: '⭐',
        iconBg: 'bg-[#FFF1E4]',
        value: '98%',
        label: 'Parent Satisfaction',
        color: 'text-[#F4A460]'
    },
    {
        icon: '🏆',
        iconBg: 'bg-[#F1EEFF]',
        value: '200+',
        label: 'Rank Advancements',
        color: 'text-[#F4A460]'
    },
    {
        icon: '🛡️',
        iconBg: 'bg-[#EAF3FF]',
        value: '15+ years',
        label: 'Teaching Experience',
        color: 'text-[#6BB6FF]'
    }
];


export default function FacultySection() {
  return (
    <section className="py-[133px] bg-[#FBF9F4]">
      <div className="max-w-[1920px] mx-auto px-14">
        {/* Header */}
        <div className="text-center mb-[80px]">
          <div className="inline-flex items-center gap-[20px] px-[30px] py-[15px] bg-[#FFFFFF] rounded-[33px] mb-[27px]">
            <span className="text-[32px]">🗒️</span>
            <span className="text-[24px] text-[#F4A460] font-medium">Our Instructors</span>
          </div>
          <h2 className="text-[53px] font-bold text-[#2C3E50] mb-[27px] leading-[1.3]">
            Meet Our Faculty
          </h2>
          <p className="text-[26.5px] text-[#7C8B99] max-w-[1200px] mx-auto">
            Play chess with professionals and the inventor of Quantum Go
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
                <Image
                src={member.imagePlaceholder}
                alt={member.name}
                fill
                className="object-cover"
                priority={idx === 0}
                />
                {/* Expert Badge */}
                <div className="absolute top-[20px] left-[20px] bg-white/90 backdrop-blur-sm px-[20px] py-[10px] rounded-[20px] flex items-center gap-[8px]">
                  <span className="text-[16px]">🏆</span>
                  <span className="text-[16px] text-[#F4A460] font-medium">Expert</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-[40px]">
                {/* Name & Title */}
                <h3 className="text-[40px] font-semibold text-[#2C3E50] mb-[8px]">
                  {member.name}
                </h3>
                <p className="text-[18px] text-[#F4A460] mb-[27px]">
                  {member.title}
                </p>

                {/* Highlights */}
                <div className="space-y-[13px] mb-[27px]">
                  {member.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-[10px]">
                      <div className="w-[6px] h-[6px] rounded-full bg-[#F4A460] mt-[8px] flex-shrink-0"></div>
                      <p className="text-[20px] text-[#5C6B7A] leading-[1.3]">
                        {highlight}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Quote */}
                <div className="border-t border-[#E8F4FC] pt-[27px]">
                  <div className="flex items-start gap-[10px]">
                    <span className="text-[27px] text-[#F4A460] leading-none flex-shrink-0">"</span>
                    <p className="text-[20px] text-[#2C3E50] italic leading-[1.3]">
                      {member.quote}
                    </p>
                    <span className="text-[27px] text-[#F4A460] leading-none self-end flex-shrink-0">"</span>
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

