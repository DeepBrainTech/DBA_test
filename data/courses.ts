/**
 * 文件用途：提供 Courses 页面静态数据源
 * 依赖关系：依赖 types/courses.ts，被 app/courses/page.tsx 导入
 */

import type { CoursesPageData } from '@/types/courses';

export const coursesPageData: CoursesPageData = {
  hero: {
    title: '2026 Summer Courses',
    subtitle: 'Cultivating Curiosity, Creativity, and Real-World Problem Solving.',
    backgroundImage: '/courses/hero/cover.png',
    features: [
      { label: 'Theory + Practice' },
      { label: 'University Exposure' },
      { label: 'Expert Mentorship' },
      { label: 'Portfolio Building' },
    ],
  },
  learningStrategies: {
    title: 'Learning Strategies',
    badgeIcon: '⚙️',
    introQuote: {
      text: 'Welcome to the DeepBrain Academy Learning Program, a premier learning destination where young minds are inspired to explore, create, and innovate. We are more than just a tutoring center; we are a comprehensive learning institution dedicated to blending strong academic foundations with advanced strategic thinking. Our mission is to prepare students for the challenges of tomorrow by cultivating essential future-ready skills in an engaging and collaborative environment.\n\nThis summer, we invite your child to embark on an unforgettable journey of discovery. Whether they are diving into our STEM Innovation track to build functional prototypes or honing their strategic thinking skills in our AI & Strategy camp, they will gain invaluable knowledge and experience. Join us and become part of a vibrant community of over 1,000 students who have benefited from our expert instruction and unique educational philosophy.',
      attribution: 'DeepBrain Academy Coaching Team',
    },
    heading: 'Beyond Traditional Learning',
    subtitle:
      'In the era of AI, we prepare students to lead by cultivating essential future-ready skills.',
    strategies: [
      {
        title: 'Identify',
        description:
          'Spot real-world problems and define the critical questions that drive innovation.',
        icon: 'identify.svg',
      },
      {
        title: 'Innovate',
        description:
          'Cross-disciplinary thinking across Math, Physics, Biology, and the Arts.',
        icon: 'innovate.svg',
      },
      {
        title: 'Prototype',
        description:
          'Hands-on creation, prototyping, and testing of creative solutions.',
        icon: 'prototype.svg',
      },
      {
        title: 'Present',
        description:
          'Presenting ideas with confidence, clarity, and persuasive impact.',
        icon: 'present.svg',
      },
    ],
    comparisonSection: {
      title: 'Tailored Programs for Every Learner',
      columnHeaders: {
        feature: 'Feature',
        trackA: 'Track A: STEM Innovation',
        trackB: 'Track B: AI & Strategy',
      },
      rows: [
        { feature: 'Target Grades', trackA: 'Grades 7 – 10', trackB: 'Grades 1 – 8' },
        {
          feature: 'Core Focus',
          trackA: 'Project-Based STEAM Exploration',
          trackB: 'Logic, Focus, & Structured Thinking',
        },
        {
          feature: 'Key Subjects',
          trackA: 'Physics, Robotics, Bionics, Math, Music',
          trackB: 'Chess, Go, Coding, Math, Chinese, AI',
        },
        {
          feature: 'Duration',
          trackA: '2 – 4 Weeks',
          trackB: '1 – 6 Weeks (Flexible Enrollment)',
        },
      ],
    },
  },
  timetable: {
    sectionTitle: 'Course Timetable',
    tableTitle: 'Summer Class Timetable',
    scheduleRows: [
  {
    time: '9:00 AM\n-\n10:30 AM',
    days: {
      Mon: [
        { name: 'Physics Foundation', cat: 'Physics' },
        { name: 'AoPS Prealgebra', cat: 'Math' },
        { name: 'BCA Writing', cat: 'Language' },
        { name: 'Chinese', cat: 'Language' },
      ],
      Tue: [
        { name: 'AP Physics 1', cat: 'Physics' },
        { name: 'SAT Math', cat: 'Math' },
        { name: 'BCA Writing', cat: 'Language' },
        { name: 'Chess Strategy', cat: 'Chess' },
      ],
      Wed: [
        { name: 'Physics Bowl*', cat: 'Physics' },
        { name: 'Upper Elementary Math', cat: 'Math' },
        { name: 'Chinese', cat: 'Language' },
      ],
      Thu: [
        { name: 'Physics Foundation', cat: 'Physics' },
        { name: 'AoPS Prealgebra', cat: 'Math' },
        { name: 'BCA Writing', cat: 'Language' },
        { name: 'Chinese', cat: 'Language' },
      ],
      Fri: [
        { name: 'AP Physics 1', cat: 'Physics' },
        { name: 'SAT Math', cat: 'Math' },
        { name: 'BCA Writing', cat: 'Language' },
        { name: 'Go Strategy', cat: 'Chess' },
      ],
      Sat: [{ name: 'Upper Elementary Math', cat: 'Math' }],
      Sun: [{ name: 'Physics Bowl*', cat: 'Physics' }],
    },
  },
  {
    time: '10:45 AM\n-\n12:15 PM',
    days: {
      Mon: [
        { name: 'BCA Math', cat: 'Math' },
        { name: 'AoPS Introduction\nto Algebra', cat: 'Math' },
      ],
      Tue: [
        { name: 'AP Physics 2', cat: 'Physics' },
        { name: 'AMC 8*', cat: 'Math' },
        { name: 'AoPS\nIntermediate\nAlgebra', cat: 'Math' },
      ],
      Wed: [
        { name: 'Calculus BC', cat: 'Math' },
        { name: 'AoPS PreAlgebra', cat: 'Math' },
      ],
      Thu: [
        { name: 'BCA Math', cat: 'Math' },
        { name: 'AMC 10*', cat: 'Math' },
        { name: 'AoPS Introduction\nto Algebra', cat: 'Math' },
      ],
      Fri: [
        { name: 'AP Physics 2', cat: 'Physics' },
        { name: 'Mental Math', cat: 'Math' },
        { name: 'AoPS\nIntermediate\nAlgebra', cat: 'Math' },
      ],
      Sat: [
        { name: 'Calculus BC', cat: 'Math' },
        { name: 'AoPS PreAlgebra', cat: 'Math' },
      ],
      Sun: [{ name: 'Calculus BC', cat: 'Math' }],
    },
  },
  {
    time: '1:00 PM\n-\n2:30 PM',
    days: {
      Mon: [
        { name: 'Precalculus', cat: 'Math' },
        { name: 'SAT Reading &\nWriting', cat: 'Language' },
        { name: 'AI Beginner', cat: 'AI' },
        { name: 'Chess Strategy', cat: 'Chess' },
      ],
      Tue: [
        { name: 'SAT Reading &\nWriting', cat: 'Language' },
        { name: 'Chinese', cat: 'Language' },
        { name: 'Fog of War Chess\n& AI Thinking', cat: 'Chess' },
      ],
      Wed: [
        { name: 'F=MA Physics\nContest*', cat: 'Physics' },
        { name: 'AI Intermediate', cat: 'AI' },
        { name: 'Chess Strategy', cat: 'Chess' },
      ],
      Thu: [
        { name: 'Precalculus', cat: 'Math' },
        { name: 'SAT Reading &\nWriting', cat: 'Language' },
        { name: 'Chinese', cat: 'Language' },
        { name: 'Go Strategy', cat: 'Chess' },
      ],
      Fri: [
        { name: 'AP Physics C', cat: 'Physics' },
        { name: 'SAT Reading &\nWriting', cat: 'Language' },
        { name: 'Chinese', cat: 'Language' },
        { name: 'Fog of War Chess\n& AI Thinking', cat: 'Chess' },
      ],
      Sat: [
        { name: 'F=MA Physics\nContest*', cat: 'Physics' },
        { name: 'SAT Math', cat: 'Math' },
      ],
      Sun: [
        { name: 'Precalculus', cat: 'Math' },
        { name: 'SAT Math', cat: 'Math' },
      ],
    },
  },
  {
    time: '2:45 PM\n-\n4:15 PM',
    days: {
      Mon: [
        { name: 'BCA Math', cat: 'Math' },
        { name: 'Chinese', cat: 'Language' },
        { name: 'AI Beginner\nProject', cat: 'AI' },
        { name: 'Go Strategy', cat: 'Chess' },
      ],
      Tue: [
        { name: 'Algebra 2', cat: 'Math' },
        { name: 'AMC 10*', cat: 'Math' },
      ],
      Wed: [
        { name: 'Chinese', cat: 'Language' },
        { name: 'AI Intermediate\nProject', cat: 'AI' },
        { name: 'Go Strategy', cat: 'Chess' },
      ],
      Thu: [
        { name: 'BCA Math', cat: 'Math' },
        { name: 'Chess Strategy', cat: 'Chess' },
      ],
      Fri: [
        { name: 'Algebra 2', cat: 'Math' },
        { name: 'AMC 8*', cat: 'Math' },
      ],
      Sat: [],
      Sun: [{ name: 'Linear Algebra', cat: 'Math' }],
    },
  },
  {
    time: '4:30 PM\n-\n6:00 PM',
    days: {
      Mon: [
        { name: 'AoPS PreAlgebra', cat: 'Math' },
        { name: 'SparkEdu Math', cat: 'Math' },
      ],
      Tue: [{ name: 'AoPS Introduction\nto Algebra', cat: 'Math' }],
      Wed: [
        { name: 'Calculus AB', cat: 'Math' },
        { name: 'SparkEdu Math', cat: 'Math' },
      ],
      Thu: [{ name: 'AoPS PreAlgebra', cat: 'Math' }],
      Fri: [{ name: 'AoPS Introduction\nto Algebra', cat: 'Math' }],
      Sat: [{ name: 'Calculus AB', cat: 'Math' }],
      Sun: [{ name: 'Calculus AB', cat: 'Math' }],
    },
  },
  {
    time: '6:15 PM\n-\n7:45 PM',
    days: {
      Mon: [{ name: 'AoPS Geometry', cat: 'Math' }],
      Tue: [{ name: 'Multivariable\nCalculus', cat: 'Math' }],
      Wed: [],
      Thu: [{ name: 'AoPS Geometry', cat: 'Math' }],
      Fri: [{ name: 'Multivariable\nCalculus', cat: 'Math' }],
      Sat: [{ name: 'Linear Algebra', cat: 'Math' }],
      Sun: [{ name: 'Multivariable\nCalculus', cat: 'Math' }],
    },
  },
],
  },
  courseInformation: {
    sectionTitle: 'Course Information',
    categories: ['All', 'Physics', 'Math', 'Chess', 'Languages', 'AI'],
    courses: [
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
],
  },
  bookFreeTrial: {
    badgeText: 'Limited offer',
    title: 'Empowering the next generation of thinkers and creators.',
    subtitle:
      'Book a free consultation with our advisor now to enjoy an early bird discount!',
    ensureTitle: 'We ensure:',
    ensureItems: [
      { icon: '🧑‍🏫', text: 'Small group instruction with supervision' },
      { icon: '📚', text: 'Course Materials' },
      { icon: '🔬', text: 'Strict laboratory safety protocols' },
      { icon: '💼', text: 'Weekly parent updates' },
    ],
    trustItems: [
      { icon: '🔒', label: 'Secure Information' },
      { icon: '⚡', label: 'Fast Response Time' },
      { icon: '💯', label: 'Risk-free Guarantee' },
    ],
    cardTitle: 'Schedule Your Consultation',
    cardSubtitle:
      'Submit your details and an advisor will contact you within 24h.',
    ctaLabel: 'Book Free Trial',
    stats: [
      { value: '1,234', label: 'Sessions Booked' },
      { value: '100%', label: 'Satisfaction Rate' },
      { value: '24h', label: 'Response Time' },
    ],
    bottomQuote:
      'In the era of AI, we prepare students to lead by cultivating essential future-ready skills. 💻',
  },
};
