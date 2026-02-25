'use client';

import Image from 'next/image';

type Faculty = {
  name: string;
  role: string;
  image: string;
  tags: string[];
  desc: string;
  quote: string;
  highlights: string[];
};

const FACULTY: Faculty[] = [
  {
    name: 'Alex Yang',
    role: 'Lead Instructor',
    image: '/programming/Alex.jpg',
    tags: ['AI/ML Software Developer', 'UCSD', 'Tech Team Lead'],
    desc: 'An AI/ML Software Developer specializing in building scalable, efficiency-focused predictive analytics systems and automated tools.',
    quote: 'I believe everyone has the potential to thrive; once you find your own point of view, everything opens up.',
    highlights: [
      'AI Tools & Predictive Analytics',
      'Scalable Python Development & Full-Stack Projects',
      'Engineering Fundamentals & Leadership',
    ],
  },
  {
    name: 'Chenxiao Tian',
    role: 'Senior Instructor',
    image: '/programming/Chenxiao.jpg',
    tags: ['Princeton University', 'HFT & FinTech Developer', 'Researcher'],
    desc: 'A Princeton PhD student and AI/ML Engineer focused on building scalable recommendation systems and low-latency FinTech infrastructure.',
    quote: 'Great thinking starts with asking the right questions.',
    highlights: [
      'Algorithmic Design & Optimization',
      'Applied Statistics & Modeling',
      'Software Architecture & Team Leadership',
    ],
  },
  {
    name: 'Bryan Wang',
    role: 'Senior Instructor',
    image: '/programming/Bryan.jpg',
    tags: ['AI & Coding Instructor', 'Creative Technologist', 'Data Visualization'],
    desc: 'A versatile programming educator with expertise in Python, robotics, 3D design, and applied data analysis.',
    quote: 'Empowering beginners to create, code, and innovate with confidence.',
    highlights: [
      'Simplifies technical concepts with real-world examples',
      'Building strong fundamentals through hands-on lessons',
      'Fosters creativity and problem-solving in every project',
    ],
  },
];
const STATS = [
  { icon: '</>', value: '5+ years', label: 'Teaching Experience' },
  { icon: '🏆', value: '20+', label: 'International Medals' },
  { icon: '🐙', value: '50k+', label: 'Open-Source Commits' },
  { icon: '✨', value: '100%', label: 'Top-Tier University\nBackgrounds' },
];

function FacultyCard(f: Faculty) {
  return (
    <div className="w-[430px] rounded-[28px] bg-white shadow-[0_12px_30px_rgba(0,0,0,0.06)] overflow-hidden font-outfit">
      {/* 顶部图片（关键：object-cover 才会像 Figma） */}
      <div className="relative w-full h-[280px]">
        <Image
          src={f.image}
          alt={f.name}
          fill
          className="object-cover"
        />

        {/* Expert badge */}
        <div className="absolute top-[16px] left-[16px] bg-white/90 backdrop-blur px-[12px] py-[6px] rounded-full text-[12px] text-[#2AAED6] font-medium shadow">
          Expert
        </div>
      </div>

      {/* 内容区 */}
      <div className="px-[26px] py-[24px]">
        <h3 className="text-[24px] font-semibold text-[#1F2937]">
          {f.name}
        </h3>
        <div className="mt-[4px] text-[14px] text-[#2AAED6] font-medium">
          {f.role}
        </div>

        {/* tags */}
        <div className="mt-[14px] flex flex-wrap gap-[8px]">
          {f.tags.map((tag) => (
            <span
              key={tag}
              className="text-[12px] px-[12px] py-[6px] rounded-full bg-[#E7F6F6] text-[#2AAED6]"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* description */}
        <p className="mt-[16px] text-[14px] leading-[24px] text-[#6B7280]">
          {f.desc}
        </p>

        {/* quote box */}
        <div className="mt-[16px] rounded-[16px] bg-[#F3FAFA] px-[16px] py-[14px] text-[13px] text-[#4B5563]">
          “{f.quote}”
        </div>

        {/* highlights */}
        <div className="mt-[18px]">
          <div className="text-[16px] font-semibold text-[#1F2937]">
            Teaching Highlights
          </div>
          <ul className="mt-[10px] space-y-[6px]">
            {f.highlights.map((h) => (
              <li key={h} className="flex items-start gap-[8px] text-[13px] text-[#6B7280]">
                <span className="mt-[6px] h-[6px] w-[6px] rounded-full bg-[#2AAED6]" />
                {h}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
function StatItem({
  icon,
  value,
  label,
}: {
  icon: string;
  value: string;
  label: string;
}) {
  return (
    <div className="w-[260px] flex flex-col items-center text-center font-outfit">
      <div className="h-[78px] w-[78px] rounded-[18px] bg-[#E7F6F6] flex items-center justify-center text-[#2AAED6] shadow-[0_8px_20px_rgba(0,0,0,0.05)]">
        <span className="text-[22px] leading-[22px]">{icon}</span>
      </div>

      <div className="mt-[16px] text-[26px] font-semibold text-[#2AAED6]">
        {value}
      </div>

      <div className="mt-[6px] whitespace-pre-line text-[14px] leading-[20px] text-[#6B7280]">
        {label}
      </div>
    </div>
  );
}

export default function ProgrammingFacultySection() {
  return (
    <section className="w-full bg-[#FBF8F3]">
      <div className="mx-auto w-[1400px] py-[80px] font-outfit">
        {/* top pill */}
        <div className="flex justify-center">
          <div className="rounded-full bg-white px-[18px] py-[8px] text-[13px] text-[#2AAED6] shadow">
            ✨ Top Faculty
          </div>
        </div>

        {/* title */}
        <h2 className="mt-[18px] text-center text-[42px] font-semibold text-[#1F2937]">
          Meet Our Faculty
        </h2>

        <p className="mt-[10px] text-center text-[18px] text-[#6B7280] max-w-[820px] mx-auto">
          Our team comprises Olympiad medalists, Silicon Valley engineers, academic researchers, and forward-thinking educators.
        </p>

        {/* cards */}
        <div className="mt-[50px] flex justify-between">
          {FACULTY.map((f) => (
            <FacultyCard key={f.name} {...f} />
          ))}
        </div>
        {/* stats strip */}
        <div className="mt-[52px] rounded-[26px] bg-[#F3FAF3] px-[60px] py-[42px]">
          <div className="flex justify-between">
            {STATS.map((s) => (
              <StatItem key={s.value} {...s} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}