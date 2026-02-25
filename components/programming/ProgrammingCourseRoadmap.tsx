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
    icon: '/programming/featured_course/1.png',
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
    icon: '/programming/featured_course/2.png',
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
    icon: '/programming/featured_course/3.png',
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
    <div className="h-20 w-20 rounded-2xl bg-[#E7F6F6] flex items-center justify-center">
      {p.iconType === 'image' ? (
        <Image src={p.icon} alt={p.title} width={40} height={40} className="h-10 w-10" />
      ) : (
        <span className="text-xl">{p.icon}</span>
      )}
    </div>
  );

  return (
    <div className="flex flex-col">
      {/* Phase 按钮 - 使用 z-10 和 mb 负值让按钮骑在容器顶部 */}
      <div className="relative z-10 ml-10 mb-[-1rem]">
        <div className="inline-flex items-center justify-center rounded-full bg-[#2AAED6] text-white text-sm px-5 py-2 shadow-md">
          {p.phase}
        </div>
      </div>

      {/* 主内容卡片 */}
      <div className="w-full rounded-3xl bg-white px-10 pt-10 pb-8 font-outfit shadow-sm">
        <div className="flex flex-col lg:flex-row items-start gap-2">
          {/* 左侧栏 */}
          <div className="w-full lg:w-72 shrink-0">
            <div>{leftIcon}</div>

            <div className="mt-4 text-xl font-semibold text-gray-800">
              {p.title}
            </div>

            <div className="mt-2 text-base text-gray-500">
              {p.weeks}
            </div>
          </div>

          {/* 中间内容 */}
          <div className="flex-1">
            {/* Objectives box */}
            <div className="rounded-2xl bg-[#FBF8F3] px-6 py-5">
              <div className="flex items-center gap-2.5 text-lg font-semibold text-gray-800">
                <Image
                  src="/programming/featured_course/objective.png"
                  alt=""
                  width={20}
                  height={20}
                  className="w-5 h-5 object-contain"
                  aria-hidden
                />
                <span>Objectives</span>
              </div>

              <p className="mt-2.5 text-base leading-relaxed text-gray-500">
                {p.objectives}
              </p>
            </div>

            {/* Curriculum Focus */}
            <div className="mt-4">
              <div className="flex items-center gap-2.5 text-lg font-semibold text-gray-800">
                <Image
                  src="/programming/featured_course/curriculum.png"
                  alt=""
                  width={20}
                  height={20}
                  className="w-5 h-5 object-contain"
                  aria-hidden
                />
                <span>Curriculum Focus</span>
              </div>

              <div className="mt-3 grid grid-cols-2 gap-x-12 gap-y-3 text-base text-gray-500">
                {p.curriculum.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-[#2AAED6]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 右侧 Key Outcomes */}
          <div className="w-full lg:w-60 shrink-0">
            <div className="h-full rounded-2xl border border-[#2AAED6] bg-white px-5 py-5">
              <div className="text-lg font-semibold text-gray-800">Key Outcomes</div>

              <p className="mt-3 text-base leading-relaxed text-[#2AAED6]">
                {p.outcomes}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProgrammingCourseRoadmap() {
  return (
    <section className="bg-[#FBF8F3]">
      <div className="mx-auto max-w-[1344px] px-9 py-24 font-outfit">
        {/* 顶部：badge + 主标题 + 副标题（与 ProgrammingPillars 结构一致） */}
        <div className="w-full flex flex-col items-center text-center gap-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 rounded-3xl bg-[#FFFFFF] px-5 py-3.5">
            <Image
              src="/programming/featured_course/Icon.png"
              alt=""
              width={24}
              height={24}
              className="w-6 h-6 object-contain"
              aria-hidden
            />
            <span className="text-[#4ECDC4] text-lg md:text-xl font-normal font-['Outfit'] leading-7">
              Featured Course
            </span>
          </div>
          {/* 主标题 */}
          <h2 className="text-center text-slate-700 text-3xl md:text-4xl font-bold font-['Outfit'] leading-tight">
            AI &amp; Coding Exploratory Course
          </h2>
          {/* 副标题 */}
          <p className="max-w-4xl text-slate-500 text-base md:text-lg font-normal font-['Outfit'] leading-relaxed text-center">
            Python • AI Basics • Computer Vision • NLP • Chatbots • Game AI • Robotics
          </p>
        </div>

        {/* phases */}
        <div className="mt-10 flex flex-col gap-8">
          {PHASES.map((p) => (
            <div key={p.phase}>{PhaseRow(p)}</div>
          ))}
        </div>

        {/* course info */}
        <div className="mt-10 rounded-2xl bg-gradient-to-b from-[#4ECDC4]/5 via-[#45B7D1]/5 to-[#4ECDC4]/5 px-8 py-6 shadow-sm">
          <div className="flex items-center gap-2.5 text-lg font-semibold text-gray-800">
            <span>⏱️ Course Info</span>
          </div>

          <div className="mt-3 text-base leading-7 text-gray-500 space-y-1">
            <div>For: Students Grade 6-8</div>
            <div>Need: Laptop</div>
            <div>8-Week Hands-On Program</div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-14 flex justify-center">
          <a
            href="https://forms.gle/2mMzKoQkXHa2CVHe6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex justify-center items-center gap-6 md:gap-7 min-w-[150px] h-12 md:h-14 pl-16 pr-6 py-3 md:pl-20 md:pr-7 md:py-3.5 bg-[#2AAED6] rounded-3xl text-white text-xl font-bold font-['Outfit'] leading-7 shadow-md hover:bg-[#45B7D1] transition-colors no-underline"
          >
            Register Now
            <Image src="/programming/arrow.png" alt="" width={24} height={24} className="shrink-0 w-6 h-6" aria-hidden />
          </a>
        </div>
      </div>
    </section>
  );
}