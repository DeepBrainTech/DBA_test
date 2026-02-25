'use client';

import Image from 'next/image';

type Phase = {
  phase: string;
  title: string;
  weeks: string;
  icon: string;
  iconType?: 'emoji' | 'image';

  objectives: string;
  curriculum: string[];
  outcomes: string;
};

const PHASES: Phase[] = [
  {
    phase: 'Phase 1',
    title: 'Foundations of AI & Python',
    weeks: 'Week 1-2',
    icon: '/programming/foundations.svg',
    iconType: 'image',
    objectives:
      'Introduce the basic concepts of how machines learn and establish foundational coding skills in Python.',
    curriculum: ['Computer Logic', 'Python Basics', 'Machine Learning', 'Data Patterns'],
    outcomes:
      'Students will write simple Python scripts using variables and math, and explain the core difference between rule-based programming and machine learning.',
  },
  {
    phase: 'Phase 2',
    title: 'Perception & Language',
    weeks: 'Week 3-4',
    icon: '/programming/perception.svg',
    iconType: 'image',
    objectives:
      'Explore how AI processes complex data like images and human language through Computer Vision and Natural Language Processing.',
    curriculum: ['Image Pixels', 'Python Functions', 'Text Tokenization', 'NLP Pipeline'],
    outcomes:
      'Students will build custom Python functions and describe how AI systems “see” images and “understand” text to generate human-like responses.',
  },
  {
    phase: 'Phase 3',
    title: 'Logic, Interaction & Ethics',
    weeks: 'Week 5-8',
    icon: '/programming/interaction.svg',
    iconType: 'image',
    objectives:
      'Apply coding logic to build interactive agents and engage in critical discussions regarding AI’s impact on society.',
    curriculum: ['Decision Logic', 'Game AI', 'Robot Sensing', 'AI Ethics'],
    outcomes:
      'Students will use loops and conditional logic to create simple chatbots or game strategies while evaluating the fairness and privacy of modern AI.',
  },
];

function PhaseRow(p: Phase) {
  const leftIcon = (
    <div className="h-[58px] w-[58px] rounded-[16px] bg-[#E7F6F6] flex items-center justify-center">
      {p.iconType === 'image' ? (
        <Image src={p.icon} alt={p.title} width={28} height={28} className="h-[28px] w-[28px]" />
      ) : (
        <span className="text-[22px] leading-[22px]">{p.icon}</span>
      )}
    </div>
  );

  return (
    <div
      className="
        w-full
        rounded-[33px]
        bg-white
        px-[40px]
        py-[34px]
        font-outfit
        shadow-[0_10px_30px_rgba(0,0,0,0.04)]
      "
    >
      <div className="flex items-start gap-[34px]">
        {/* 左侧栏 */}
        <div className="w-[320px] flex-shrink-0">
          <div className="inline-flex items-center justify-center rounded-[999px] bg-[#2AAED6] text-white text-[14px] px-[18px] py-[8px] shadow-[0_10px_22px_rgba(42,174,214,0.25)]">
            {p.phase}
          </div>

          <div className="mt-[18px]">{leftIcon}</div>

          <div className="mt-[18px] text-[22px] leading-[30px] font-semibold text-[#1F2937]">
            {p.title}
          </div>

          <div className="mt-[8px] text-[16px] leading-[22px] text-[#6B7280]">
            {p.weeks}
          </div>
        </div>

        {/* 中间内容 */}
        <div className="flex-1">
          {/* Objectives box */}
          <div className="rounded-[18px] bg-[#FBF8F3] px-[26px] py-[20px]">
            <div className="flex items-center gap-[10px] text-[18px] font-semibold text-[#1F2937]">
              <span>🎯</span>
              <span>Objectives</span>
            </div>

            <p className="mt-[10px] text-[16px] leading-[26px] text-[#6B7280] max-w-[820px]">
              {p.objectives}
            </p>
          </div>

          {/* Curriculum Focus */}
          <div className="mt-[18px]">
            <div className="flex items-center gap-[10px] text-[18px] font-semibold text-[#1F2937]">
              <span>📚</span>
              <span>Curriculum Focus</span>
            </div>

            <div className="mt-[14px] grid grid-cols-2 gap-x-[60px] gap-y-[14px] text-[16px] text-[#6B7280]">
              {p.curriculum.map((item) => (
                <div key={item} className="flex items-center gap-[12px]">
                  <span className="h-[7px] w-[7px] rounded-full bg-[#2AAED6]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 右侧 Key Outcomes */}
        <div className="w-[360px] flex-shrink-0">
          <div className="h-full rounded-[18px] border border-[#2AAED6] bg-white px-[22px] py-[20px]">
            <div className="text-[18px] font-semibold text-[#1F2937]">Key Outcomes</div>

            <p className="mt-[14px] text-[16px] leading-[26px] text-[#2AAED6]">
              {p.outcomes}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProgrammingCourseRoadmap() {
  return (
    <section className="w-full bg-[#FBF8F3]">
      <div className="mx-auto max-w-[1813.5px] px-[81px] py-[90px] font-outfit">
        {/* top pill */}
        <div className="flex justify-center">
          <div
            className="
              relative
              h-[69px] w-[310px]
              rounded-[33.19px] bg-white
              shadow-[0px_1.6594641px_4.98px_rgba(0,0,0,0.1),_0px_1.6594641px_3.32px_-1.66px_rgba(0,0,0,0.1)]
              flex items-center justify-center
              gap-[12px]
              text-[26.55px] leading-[42.48px]
              text-[#4ECDC4]
            "
          >
            <Image
            src="/programming/featureCourse.svg"
            alt="Featured Course"
            width={33.2}
            height={33.2}
            className="h-[33.2px] w-[33.2px]"
            />
            <span className="relative top-[-1px]">Featured Course</span>
          </div>
        </div>

        <h2 className="mt-[26.39px] text-center text-[53.1px] leading-[69.03px] font-bold text-[#2C3E50]">
          AI &amp; Coding Exploratory Course
        </h2>


        <p className="mt-[26.39px] text-center text-[26.55px] leading-[42.48px] text-[#7A8A9A]">
          Python • AI Basics • Computer Vision • NLP • Chatbots • Game AI • Robotics
        </p>

        {/* phases */}
        <div className="mt-[40px] flex flex-col gap-[30px]">
          {PHASES.map((p) => (
            <div key={p.phase}>{PhaseRow(p)}</div>
          ))}
        </div>

        {/* course info */}
        <div className="mt-[40px] rounded-[22px] bg-gradient-to-b from-[#4ECDC4]/10 to-[#45B7D1]/10 px-[34px] py-[26px] shadow-[0_10px_26px_rgba(0,0,0,0.05)]">
          <div className="flex items-center gap-[10px] text-[18px] font-semibold text-[#1F2937]">
            <span>⚙️</span>
            <span>Course Info</span>
          </div>

          <div className="mt-[14px] text-[16px] leading-[28px] text-[#6B7280]">
            <div>Instructor: Alex Yang</div>
            <div>For: Students Grade 6-8</div>
            <div>Need: Laptop + Browser/Zoom</div>
            <div>8-Week Hands-On Program</div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-[54px] flex justify-center">
          <button
            className="
              h-[56px] px-[44px]
              rounded-[999px]
              bg-[#2AAED6]
              text-white text-[18px] font-semibold
              shadow-[0_14px_30px_rgba(42,174,214,0.25)]
              hover:translate-y-[-1px] hover:shadow-[0_18px_36px_rgba(42,174,214,0.28)]
              transition
              inline-flex items-center gap-[12px]
            "
          >
            Register Now <span className="text-[20px] leading-[20px]">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}