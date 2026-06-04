'use client';

import React, { useState } from 'react';

type Category = 'All' | 'Physics' | 'Math' | 'Chess' | 'Languages' | 'AI';

const CATEGORIES: Category[] = ['All', 'Physics', 'Math', 'Chess', 'Languages', 'AI'];

const CATEGORY_COLORS: Record<Category, string> = {
  All: 'bg-[#2C3E50]',
  Physics: 'bg-[#EF6B83]',
  Math: 'bg-[#4ADE80]',
  'Chess': 'bg-[#FDBA74]',
  Languages: 'bg-[#A78BFA]',
  AI: 'bg-[#60A5FA]',
};

const CATEGORY_TEXT_COLORS: Record<Category, string> = {
  All: 'text-[#2C3E50]',
  Physics: 'text-[#EF6B83]',
  Math: 'text-[#4ADE80]',
  'Chess': 'text-[#FDBA74]',
  Languages: 'text-[#A78BFA]',
  AI: 'text-[#60A5FA]',
};

const DEFAULT_DESC = [
  'Explore core concepts and practical applications.',
  'Develop strategic thinking and problem-solving skills.',
  'Prepare for advanced studies and competitive challenges.',
];

const COURSE_DATA: { cat: Category; name: string; desc: string[] }[] = [
  // Physics
  {
    cat: 'Physics',
    name: 'Physics Foundation',
    desc: [
      'Build core physics intuition through motion, forces, energy, waves, and simple circuits.',
      'Strengthen math skills needed for middle school physics problem solving.',
      'Prepare students for advanced physics courses with clear concepts and guided practice.',
    ],
  },
  {
    cat: 'Physics',
    name: 'AP Physics 1',
    desc: [
      'Learn mechanics, energy, momentum, waves, and basic circuits.',
      'Develop problem-solving habits using equations, diagrams, and real-world examples.',
      'Prepare for school exams and future AP-level physics study.',
    ],
  },
  {
    cat: 'Physics',
    name: 'AP Physics 2',
    desc: [
      'Study fluids, thermodynamics, electricity, magnetism, optics, and modern physics.',
      'Connect formulas with physical meaning through conceptual and quantitative practice.',
      'Build readiness for advanced physics coursework and AP exam-style questions.',
    ],
  },
  {
    cat: 'Physics',
    name: 'AP Physics C',
    desc: [
      'Master calculus-based mechanics, electricity, and magnetism.',
      'Practice advanced problem solving with free-response and multiple-choice formats.',
      'Prepare for AP Physics C exams and rigorous STEM coursework.',
    ],
  },
  {
    cat: 'Physics',
    name: 'Physics Bowl',
    desc: [
      'Train for fast-paced physics contest questions across mechanics, waves, electricity, and modern physics.',
      'Improve accuracy, speed, and test strategy through timed practice.',
      'Build contest confidence with targeted review and challenge problems.',
    ],
  },
  {
    cat: 'Physics',
    name: 'F=MA Physics Contest',
    desc: [
      'Focus on mechanics topics commonly tested in the F=MA competition.',
      'Strengthen algebra-based physics reasoning and multi-step problem solving.',
      'Practice contest strategies for speed, precision, and pattern recognition.',
    ],
  },
  
  // Math
  {
    cat: 'Math',
    name: 'AoPS Prealgebra',
    desc: [
      'Build a strong foundation in arithmetic, fractions, ratios, equations, and problem solving.',
      'Learn AoPS-style reasoning through challenging and creative math problems.',
      'Prepare for Algebra, contest math, and advanced middle school math tracks.',
    ],
  },
  {
    cat: 'Math',
    name: 'AoPS Introduction to Algebra',
    desc: [
      'Develop core algebra skills through variables, equations, inequalities, functions, and word problems.',
      'Learn rigorous problem-solving methods used in AoPS and contest math.',
      'Build readiness for higher algebra, geometry, and AMC-level challenges.',
    ],
  },
  {
    cat: 'Math',
    name: 'AoPS Intermediate Algebra',
    desc: [
      'Study advanced algebra topics including polynomials, complex numbers, sequences, and inequalities.',
      'Strengthen proof-based reasoning and creative problem-solving skills.',
      'Prepare for advanced math competitions and higher-level coursework.',
    ],
  },
  {
    cat: 'Math',
    name: 'AoPS Geometry',
    desc: [
      'Learn geometry through angles, triangles, circles, polygons, area, similarity, and proofs.',
      'Build logical reasoning with diagrams, theorems, and structured arguments.',
      'Prepare for contest math, school geometry, and advanced problem solving.',
    ],
  },
  {
    cat: 'Math',
    name: 'Upper Elementary Math',
    desc: [
      'Strengthen number sense, fractions, decimals, word problems, and geometry basics.',
      'Build confidence through step-by-step problem solving and math discussion.',
      'Prepare students for middle school math and early contest opportunities.',
    ],
  },
  {
    cat: 'Math',
    name: 'Mental Math',
    desc: [
      'Improve calculation speed, accuracy, and number flexibility.',
      'Learn practical strategies for addition, subtraction, multiplication, division, and estimation.',
      'Build confidence for schoolwork, contests, and daily math problem solving.',
    ],
  },
  {
    cat: 'Math',
    name: 'AMC 8*',
    desc: [
      'Prepare for AMC 8 topics including arithmetic, algebra, geometry, counting, and probability.',
      'Learn creative strategies for solving non-routine contest problems.',
      'Build speed, accuracy, and confidence through timed practice.',
    ],
  },
  {
    cat: 'Math',
    name: 'AMC 10*',
    desc: [
      'Study advanced contest topics in algebra, geometry, number theory, counting, and probability.',
      'Develop flexible problem-solving strategies for challenging AMC 10 questions.',
      'Prepare for higher-level competitions through practice, review, and timed training.',
    ],
  },
  {
    cat: 'Math',
    name: 'SAT Math',
    desc: [
      'Review algebra, advanced math, problem solving, data analysis, and geometry.',
      'Learn efficient strategies for both calculator and no-calculator-style questions.',
      'Build speed, accuracy, and confidence for the SAT Math section.',
    ],
  },
  {
    cat: 'Math',
    name: 'BCA Math',
    desc: [
      'Build the math skills needed for Bergen County Academies entrance preparation.',
      'Practice algebra, geometry, logic, and word problems with exam-style questions.',
      'Strengthen speed, accuracy, and confidence for competitive school admissions.',
    ],
  },
  {
    cat: 'Math',
    name: 'Precalculus',
    desc: [
      'Study functions, trigonometry, complex numbers, sequences, and analytic geometry.',
      'Build the algebra and graphing skills needed for calculus.',
      'Prepare for school success, AP Calculus, and higher-level math courses.',
    ],
  },
  {
    cat: 'Math',
    name: 'Calculus AB',
    desc: [
      'Learn limits, derivatives, integrals, and their applications.',
      'Practice AP-style multiple-choice and free-response problems.',
      'Build a strong foundation for college-level calculus and STEM courses.',
    ],
  },
  {
    cat: 'Math',
    name: 'Calculus BC',
    desc: [
      'Study advanced integration, sequences, series, parametric equations, and polar functions.',
      'Strengthen problem-solving skills for challenging AP Calculus BC questions.',
      'Prepare for college-level math with rigorous practice and review.',
    ],
  },
  {
    cat: 'Math',
    name: 'Multivariable Calculus',
    desc: [
      'Explore vectors, partial derivatives, multiple integrals, and vector fields.',
      'Connect 3D geometry with calculus concepts and applications.',
      'Prepare for advanced STEM courses in math, physics, engineering, and computer science.',
    ],
  },
  {
    cat: 'Math',
    name: 'Linear Algebra',
    desc: [
      'Study vectors, matrices, systems of equations, eigenvalues, and transformations.',
      'Build the mathematical foundation for data science, AI, physics, and engineering.',
      'Practice both computational techniques and conceptual reasoning.',
    ],
  },
  {
    cat: 'Math',
    name: 'Algebra 2',
    desc: [
      'Strengthen skills with functions, polynomials, rational expressions, logarithms, and trigonometry.',
      'Build problem-solving fluency for school exams and advanced math placement.',
      'Prepare for Precalculus, SAT Math, and higher-level coursework.',
    ],
  },
  {
    cat: 'Math',
    name: 'SparkEdu Math',
    desc: [
      'Build math interest through engaging lessons, visual thinking, and interactive problem solving.',
      'Practice number sense, shapes, logic, patterns, and word problems through age-appropriate activities.',
      'Help students develop clear reasoning, confidence, and strong math learning habits.',
    ],
  },

  // Board Games (Chess & Go)
  {
    cat: 'Chess',
    name: 'Chess Strategy',
    desc: [
      'Learn basic chess tactics, piece coordination, openings, and checkmate patterns.',
      'Build planning skills through age-appropriate puzzles and guided games.',
      'Develop focus, patience, and strategic thinking through chess practice.',
    ],
  },
  {
    cat: 'Chess',
    name: 'Go Strategy',
    desc: [
      'Learn basic Go rules, territory, captures, shapes, and simple tactics.',
      'Build pattern recognition and planning through guided board practice.',
      'Develop patience, concentration, and strategic thinking through Go games.',
    ],
  },
  {
    cat: 'Chess',
    name: 'Fog of War Chess & AI Thinking',
    desc: [
      'Explore chess strategy through hidden-information gameplay and decision making.',
      'Learn how uncertainty, prediction, and planning connect to AI thinking.',
      'Build flexible reasoning skills through games, analysis, and creative challenges.',
    ],
  },

  // Languages
  {
    cat: 'Languages',
    name: 'BCA Writing',
    desc: [
      'Develop clear, organized writing for competitive school entrance exams.',
      'Practice planning, structure, grammar, and persuasive expression.',
      'Build confidence through timed writing prompts and revision feedback.',
    ],
  },
  {
    cat: 'Languages',
    name: 'SAT Reading & Writing',
    desc: [
      'Strengthen grammar, vocabulary-in-context, reading comprehension, and editing skills.',
      'Learn strategies for evidence-based reading and concise writing questions.',
      'Prepare for the digital SAT with targeted practice and review.',
    ],
  },
  {
    cat: 'Languages',
    name: 'Chinese',
    desc: [
      'Strengthen Chinese listening, speaking, reading, and writing skills.',
      'Build vocabulary, grammar, pronunciation, and cultural understanding.',
      'Support school learning, heritage language growth, and confident communication.',
    ],
  },

  // AI
  {
    cat: 'AI',
    name: 'AI Beginner',
    desc: [
      'Introduce core AI ideas such as machine learning, prompts, data, and model behavior.',
      'Build beginner-friendly projects using accessible tools and guided activities.',
      'Help students understand how AI works and how to use it responsibly.',
    ],
  },
  {
    cat: 'AI',
    name: 'AI Intermediate',
    desc: [
      'Explore deeper AI concepts: data preparation, model training, evaluation, and applications.',
      'Build stronger technical skills through hands-on projects and structured experiments.',
      'Prepare students for advanced AI, coding, and research-based learning.',
    ],
  },
  {
    cat: 'AI',
    name: 'AI Beginner Project',
    desc: [
      'Apply beginner AI concepts through hands-on projects.',
      'Practice prompt design, testing, and presentation skills.',
      'Build a completed AI vibe-coding project that students can explain and showcase.',
    ],
  },
  {
    cat: 'AI',
    name: 'AI Intermediate Project',
    desc: [
      'Create a more advanced AI project using structured design, testing, and refinement.',
      'Strengthen skills in AI agent building, model evaluation, and practical application.',
      'Produce a AI agent application suitable for portfolios, presentations, or further study.',
    ],
  },
];

export default function CourseInformation() {
  const [activeTab, setActiveTab] = useState<Category>('All');

  // 过滤当前展示的课程
  const displayedCourses = activeTab === 'All' 
    ? COURSE_DATA 
    : COURSE_DATA.filter((c) => c.cat === activeTab);

  return (
    <div className="w-full bg-[#FBF9F4] pb-16 md:pb-24">
      <div className="w-full max-w-[min(1400px,95vw)] mx-auto px-4 lg:px-9 flex flex-col items-center gap-8">
        
        {/* Section Title */}
        <div className="w-full flex flex-col items-center text-center gap-4">
          <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold font-['Outfit'] text-slate-800">
            Course Information
          </h2>
        </div>

        {/* Container */}
        <div className="w-full bg-[#E5E7EB]/50 rounded-3xl p-4 md:p-6 lg:p-8 flex flex-col gap-6 md:gap-8">
          
          {/* Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4">
            {CATEGORIES.map((cat) => {
              const isActive = activeTab === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`
                    px-5 py-2.5 md:px-8 md:py-3 rounded-full font-['Outfit'] font-bold text-sm md:text-base transition-all duration-300
                    ${CATEGORY_COLORS[cat]}
                    ${isActive ? 'text-white opacity-100 shadow-md' : 'text-white opacity-40 hover:opacity-70'}
                  `}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Course List Content */}
          <div className="w-full h-[600px] md:h-[700px] lg:h-[800px]">
            {activeTab === 'All' ? (
              /* All Tab - Small Tags Layout */
              <div className="flex flex-wrap justify-center content-start gap-3 md:gap-4 h-full overflow-y-auto custom-scrollbar pr-2 pb-4">
                {displayedCourses.map((course, idx) => (
                  <div 
                    key={idx} 
                    className="bg-[#FCFBF8] border border-slate-100 shadow-sm rounded-xl px-4 py-3 flex items-center gap-3 h-fit"
                  >
                    <span className={`text-xs md:text-sm font-['Outfit'] font-medium ${CATEGORY_TEXT_COLORS[course.cat]}`}>
                          {course.cat}
                    </span>
                    <span className="text-sm md:text-base font-['Outfit'] font-bold text-slate-800">
                      {course.name}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              /* Specific Category Tab - Full Cards Layout with 3x3 max height scrolling */
              <div className="w-full h-full overflow-y-auto pr-2 custom-scrollbar pb-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                  {displayedCourses.map((course, idx) => (
                    <div 
                      key={idx} 
                      className="bg-[#FCFBF8] border border-slate-100 shadow-sm rounded-2xl p-5 md:p-6 flex flex-col gap-4 h-auto min-h-[220px]"
                    >
                      <div className="flex items-center gap-2">
                        <span className={`text-sm font-['Outfit'] font-medium ${CATEGORY_TEXT_COLORS[course.cat]}`}>
                          {course.cat}
                        </span>
                        <span className="text-lg md:text-xl font-['Outfit'] font-bold text-slate-800">
                          {course.name}
                        </span>
                      </div>
                      <ul className="list-disc pl-5 text-sm md:text-[15px] font-['Outfit'] text-slate-500 space-y-2 leading-relaxed">
                        {course.desc.map((d, i) => (
                          <li key={i}>{d}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

        </div>
        {/* Register Now Button */}
        <div className="w-full flex justify-center mt-4">
          <button
            type="button"
            onClick={() => {
              const element = document.getElementById('book-free-trial');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="group relative inline-flex h-12 md:h-14 items-center justify-center gap-2 rounded-full bg-[#EF6B83] px-8 md:px-10 text-base md:text-lg font-bold font-['Outfit'] text-white shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl hover:bg-[#E55A72]"
          >
            <span>Register Now</span>
            <svg
              className="h-5 w-5 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        </div>

      </div>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #CBD5E1;
          border-radius: 20px;
        }
      `}</style>
    </div>
  );
}
