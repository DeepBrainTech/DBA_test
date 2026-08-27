/**
 * 文件用途：暑期 Course Information 备份（页面当前使用秋季数据）
 * 注意事项：恢复暑期展示时可将此数据写回 coursesPageData.courseInformation
 * 分类键已映射到现行 Science / Language / ProgrammingAI，便于类型兼容
 */

import type { CourseInformationData } from '@/types/courses';

export const summerCourseInformationData: CourseInformationData = {
    sectionTitle: 'Course Information',
    categories: ['All', 'Science', 'Math', 'Chess', 'Language', 'ProgrammingAI'],
    courses: [
  // Physics
  {
    cat: 'Science',
    name: 'Physics Foundation',
    desc: [
      'Bridges the gap between everyday intuition and formal physics thinking.',
      'Develops mathematical reasoning skills alongside physical concepts.',
      'Introduces motion, forces, energy, and waves in an accessible, engaging way.',
    ],
  },
  {
    cat: 'Science',
    name: 'AP Physics 1',
    desc: [
      'Emphasis on conceptual understanding alongside mathematical problem solving.',
      'Prepares students for both the AP exam and future physics coursework.',
      'Extensive practice with AP-style multiple choice and free-response questions.',
    ],
  },
  {
    cat: 'Science',
    name: 'AP Physics 2',
    desc: [
      'Covers a wide and fascinating range of physics topics at a rigorous AP level.',
      'Connects physical phenomena to real-world technology and scientific research.',
      'Ideal for students interested in science, medicine, or engineering.',
    ],
  },
  {
    cat: 'Science',
    name: 'AP Physics C',
    desc: [
      'Combines calculus and physics to model real systems with precision.',
      'Covers both AP Physics C: Mechanics and Electricity & Magnetism.',
      'Builds the problem-solving depth expected at top engineering and science programs.',
    ],
  },
  {
    cat: 'Science',
    name: 'Physics Bowl*',
    desc: [
      'Targeted preparation for the Physics Bowl exam format and question types.',
      'Covers advanced topics beyond standard AP curricula.',
      'Strong competition performance strengthens college applications in STEM.',
    ],
  },
  {
    cat: 'Science',
    name: 'F=MA Physics Contest*',
    desc: [
      'Deep, flexible mastery of Newtonian mechanics beyond AP-level expectations.',
      'Mathematical sophistication in applying calculus and vectors to physical systems.',
      'Problem-solving strategies for unfamiliar, multi-layered physics scenarios.',
    ],
  },
  
  // Math
  {
    cat: 'Math',
    name: 'AoPS Prealgebra',
    desc: [
      'Emphasizes reasoning, explanation, and problem-solving strategy.',
      'Uses challenging problems to develop persistence and mathematical creativity.',
      'Builds the habits students need before AoPS Introduction to Algebra.',
    ],
  },
  {
    cat: 'Math',
    name: 'AoPS Introduction to Algebra',
    desc: [
      'Trains students to see algebra as a language of structure and patterns.',
      'Builds flexibility across equations, graphs, and verbal problem statements.',
      'Introduces contest-style thinking while maintaining strong academic fundamentals.',
    ],
  },
  {
    cat: 'Math',
    name: 'AoPS Intermediate Algebra',
    desc: [
      'Goes deeper than a traditional Algebra 2 course.',
      'Strengthens both technical fluency and proof-like reasoning.',
      'Uses challenging problems to prepare students for higher-level math and contests.',
    ],
  },
  {
    cat: 'Math',
    name: 'AoPS Geometry',
    desc: [
      'Builds the proof skills often missing from standard school geometry.',
      'Encourages students to find multiple solution paths.',
      'Connects visual reasoning with algebraic and logical thinking.',
    ],
  },
  {
    cat: 'Math',
    name: 'Upper Elementary Math',
    desc: [
      'Builds a smooth transition from elementary math to Prealgebra.',
      'Encourages students to use diagrams, tables, and equations to solve problems.',
      'Develops accuracy, patience, and confidence with non-routine questions.',
    ],
  },
  {
    cat: 'Math',
    name: 'Mental Math',
    desc: [
      'Makes arithmetic feel strategic instead of mechanical.',
      'Builds confidence through short, engaging, repeated practice.',
      'Strengthens the foundation needed for word problems, prealgebra, and contest math.',
    ],
  },
  {
    cat: 'Math',
    name: 'AMC 8*',
    desc: [
      'Focuses on the thinking behind AMC 8 problems, not just answer-getting.',
      'Helps students learn when to compute, draw, estimate, or look for structure.',
      'Builds a foundation for AMC 10 and higher-level contest math.',
    ],
  },
  {
    cat: 'Math',
    name: 'AMC 10*',
    desc: [
      'Teaches students how to move beyond brute force.',
      'Builds speed without sacrificing mathematical depth.',
      'Provides a structured bridge from AMC 8 to AMC 10/12 and AIME preparation.',
    ],
  },
  {
    cat: 'Math',
    name: 'AMC 12*',
    desc: [
      'Strengthens advanced problem-solving across algebra, geometry, counting, and number theory.',
      'Trains students to solve challenging multi-step and non-routine problems efficiently.',
      'Builds speed, accuracy, and mathematical creativity for AMC 12 and AIME preparation.',
    ],
  },
  {
    cat: 'Math',
    name: 'BCA Math',
    desc: [
      'Covers the math skills and reasoning habits needed for competitive school admissions.',
      'Helps students read complex questions carefully and organize work under time pressure.',
      'Encourages flexible thinking when a problem does not match a familiar template.',
    ],
  },
  {
    cat: 'Math',
    name: 'Precalculus',
    desc: [
      'Connects algebraic formulas with graphs, tables, and real-world descriptions.',
      'Strengthens the exact skills students need before AP Calculus.',
      'Emphasizes problem-solving strategies rather than memorized templates.',
    ],
  },
  {
    cat: 'Math',
    name: 'Calculus AB',
    desc: [
      'Uses multiple representations: graphs, equations, tables, and verbal descriptions.',
      'Trains students to justify conclusions with clear mathematical reasoning.',
      'Includes targeted AP-style practice for both multiple-choice and free-response questions.',
    ],
  },
  {
    cat: 'Math',
    name: 'Calculus BC',
    desc: [
      'Balances conceptual depth with AP exam strategy.',
      'Helps students distinguish AB review from BC-only topics.',
      'Builds precision in notation, solution structure, and mathematical justification.',
    ],
  },
  {
    cat: 'Math',
    name: 'Multivariable Calculus',
    desc: [
      'Connects abstract calculus ideas to real STEM applications.',
      'Develops geometric visualization and advanced problem-solving habits.',
      'Gives students early exposure to the pace and style of college mathematics.',
    ],
  },
  {
    cat: 'Math',
    name: 'Linear Algebra',
    desc: [
      'Builds both computational skill and abstract mathematical thinking.',
      'Shows how linear algebra supports machine learning, modeling, and high-level STEM work.',
      'Introduces students to proof-style reasoning in an accessible way.',
    ],
  },
  {
    cat: 'Math',
    name: 'Algebra 1',
    desc: [
      'Focuses on both algebraic fluency and conceptual understanding.',
      'Trains students to connect equations, graphs, patterns, and real-world situations.',
      'Builds accuracy, confidence, and problem-solving habits for higher-level math.',
    ],
  },
  {
    cat: 'Math',
    name: 'Algebra 2',
    desc: [
      'Focuses on both computation and conceptual understanding.',
      'Trains students to recognize function behavior from equations, graphs, and tables.',
      'Includes challenging problems inspired by honors coursework and contest-style algebra.',
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
  {
    cat: 'Math',
    name: 'ISEE Math',
    desc: [
      'Focuses on both core math skills and ISEE test-taking strategy.',
      'Trains students to recognize question patterns in Quantitative Reasoning and Mathematics Achievement sections.',
      'Builds accuracy, pacing, and confidence through targeted practice and guided correction.',
    ],
  },
  {
    cat: 'Math',
    name: 'Geometry',
    desc: [
      'Strengthens spatial reasoning and proof skills.',
      'Trains students to connect geometric formulas, visual representations, and logical proofs.',
      'Builds accuracy and confidence with multi-step geometry problems.',
    ],
  },
  {
    cat: 'Math',
    name: 'SAT Math',
    desc: [
      'Focuses on high-yield SAT math patterns and common traps.',
      'Helps students translate word problems into equations quickly.',
      'Builds test confidence through repeated timed practice and review.',
    ],
  },
  {
    cat: 'Math',
    name: 'PSAT Math',
    desc: [
      'Strengthens algebra, geometry, data analysis, and problem-solving skills.',
      'Trains students to recognize question patterns and solve efficiently.',
      'Builds pacing, accuracy, and confidence through targeted practice.',
    ],
  },
  {
    cat: 'Math',
    name: 'GRE Math',
    desc: [
      'Strengthens arithmetic, algebra, geometry, and data analysis skills.',
      'Trains students to solve quantitative comparison and word problems efficiently.',
      'Builds pacing, accuracy, and confidence through targeted practice.',
    ],
  },
  {
    cat: 'Math',
    name: 'ACT Math',
    desc: [
      'Strengthens algebra, geometry, functions, trigonometry, and data analysis skills.',
      'Trains students to solve ACT question types efficiently.',
      'Builds speed, accuracy, and confidence through timed practice and detailed solution review.',
    ],
  },
  {
    cat: 'Math',
    name: 'GMAT Math',
    desc: [
      'Strengthens arithmetic, algebra, number properties, and data interpretation skills.',
      'Trains students to solve word problems and quantitative questions with efficient strategies.',
      'Builds accuracy, pacing, and confidence through targeted practice and detailed review.',
    ],
  },
  {
    cat: 'Math',
    name: 'College Algebra',
    desc: [
      'Strengthens functions, equations, graphs, and algebraic expressions.',
      'Trains students to analyze polynomial, rational, exponential, and logarithmic relationships.',
      'Builds accuracy, reasoning, and confidence with multi-step algebra problems.',
    ],
  },
  {
    cat: 'Math',
    name: 'Calculus',
    desc: [
      'Strengthens limits, derivatives, integrals, and applications.',
      'Trains students to connect formulas, graphs, and real-world change.',
      'Builds problem-solving skills for AP Calculus and STEM courses.',
    ],
  },
  {
    cat: 'Math',
    name: 'Advanced Calculus',
    desc: [
      'Strengthens advanced calculus concepts and problem-solving skills.',
      'Trains students to connect derivatives, integrals, series, and applications.',
      'Builds mathematical reasoning for college-level STEM study.',
    ],
  },
  {
    cat: 'Math',
    name: 'Integral Calculus',
    desc: [
      'Strengthens antiderivatives, definite integrals, and accumulation.',
      'Trains students to use integration techniques and analyze area between curves.',
      'Connects integrals to motion, volume, and real-world applications.',
    ],
  },
  {
    cat: 'Math',
    name: 'Trigonometry',
    desc: [
      'Strengthens sine, cosine, tangent, and unit circle skills.',
      'Trains students to solve triangle, graphing, identity, and equation problems.',
      'Connects trigonometry to physics, motion, and real-world measurement.',
    ],
  },
  {
    cat: 'Math',
    name: 'Competition Math',
    desc: [
      'Strengthens problem-solving in algebra, geometry, counting, and number theory.',
      'Trains students to approach unfamiliar problems with efficient strategies.',
      'Builds logical reasoning, creativity, and confidence for math competitions.',
    ],
  },
  {
    cat: 'Math',
    name: 'Differential Equations',
    desc: [
      'Strengthens first- and second-order differential equation skills.',
      'Trains students to model motion, growth, and changing systems.',
      'Connects calculus to physics, engineering, and real-world applications.',
    ],
  },
  {
    cat: 'Math',
    name: 'Real Analysis',
    desc: [
      'Strengthens limits, continuity, sequences, and functions.',
      'Trains students to read, write, and structure mathematical proofs.',
      'Builds precise reasoning for college-level mathematics.',
    ],
  },
  {
    cat: 'Math',
    name: 'Number Theory',
    desc: [
      'Strengthens divisibility, primes, remainders, and modular arithmetic.',
      'Trains students to solve contest-style number theory problems.',
      'Builds logical reasoning and proof-writing skills.',
    ],
  },

  // Board Games (Chess & Go)
  {
    cat: 'Chess',
    name: 'Chess Beginner',
    desc: [
      'Uses beginner-friendly puzzles and mini-games before full games.',
      'Builds focus, patience, memory, and turn-based thinking.',
      'Helps students feel comfortable on the chessboard before introducing tactics.',
    ],
  },
  {
    cat: 'Chess',
    name: 'Chess Advanced',
    desc: [
      'Turns rule knowledge into confident, playable chess.',
      'Introduces the idea that every move should have a reason.',
      'Builds the discipline needed for longer games and future tournament preparation.',
    ],
  },
  {
    cat: 'Chess',
    name: 'Go Beginner',
    desc: [
      'Builds the reading and pattern-recognition skills at the heart of Go.',
      'Teaches students to balance territory, influence, and group safety.',
      'Introduces structured problem solving through tsumego and game review.',
    ],
  },
  {
    cat: 'Chess',
    name: 'Go Advanced',
    desc: [
      'Combines tsumego, local fighting drills, and full-game review.',
      'Helps students stop playing only locally and begin seeing the whole board.',
      'Builds practical habits for stronger 9x9, 13x13, and 19x19 games.',
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
    cat: 'Language',
    name: 'BCA Writing',
    desc: [
      'Develop clear, organized writing for competitive school entrance exams.',
      'Practice planning, structure, grammar, and persuasive expression.',
      'Build confidence through timed writing prompts and revision feedback.',
    ],
  },
  {
    cat: 'Language',
    name: 'SAT Reading & Writing',
    desc: [
      'Strengthen grammar, vocabulary-in-context, reading comprehension, and editing skills.',
      'Learn strategies for evidence-based reading and concise writing questions.',
      'Prepare for the digital SAT with targeted practice and review.',
    ],
  },
  {
    cat: 'Language',
    name: 'Chinese',
    desc: [
      'Strengthen Chinese listening, speaking, reading, and writing skills.',
      'Build vocabulary, grammar, pronunciation, and cultural understanding.',
      'Support school learning, heritage language growth, and confident communication.',
    ],
  },
  {
    cat: 'Language',
    name: 'PSAT English',
    desc: [
      'Strengthens reading, grammar, and vocabulary skills for PSAT preparation.',
      'Trains students to analyze passages, use evidence, and avoid common mistakes.',
      'Improves pacing and accuracy with guided drills and test-style practice.',
    ],
  },
  {
    cat: 'Language',
    name: 'ISEE English',
    desc: [
      'Strengthens vocabulary, reading comprehension, grammar, and writing skills.',
      'Trains students to approach synonyms, sentence completion, passages, and essay prompts.',
      'Builds confidence in reading strategy, vocabulary use, and organized writing.',
    ],
  },
  {
    cat: 'Language',
    name: 'Interactive English',
    desc: [
      'Strengthens speaking, listening, reading, and vocabulary skills through active practice.',
      'Trains students to communicate through discussions, role-play, storytelling, and presentations.',
      'Builds fluency, clear expression, and confidence in everyday English use.',
    ],
  },
  {
    cat: 'Language',
    name: 'Vocabulary & Reading',
    desc: [
      'Strengthens vocabulary and reading comprehension through guided practice.',
      'Trains students to identify main ideas, details, tone, purpose, and inferences.',
      'Builds confidence using context clues, word roots, and academic vocabulary.',
    ],
  },
  {
    cat: 'Language',
    name: 'Spanish Beginner',
    desc: [
      'Builds Spanish vocabulary, pronunciation, grammar, and sentence skills.',
      'Trains students to communicate through conversation, games, and role-play.',
      'Develops confidence for future Spanish classes and everyday communication.',
    ],
  },
  {
    cat: 'Language',
    name: 'Spanish Intermediate',
    desc: [
      'Strengthens Spanish speaking, listening, reading, and writing skills.',
      'Trains students to use verb conjugations and sentence structures in conversation.',
      'Builds fluency and confidence for future Spanish learning.',
    ],
  },

  // AI
  {
    cat: 'ProgrammingAI',
    name: 'AI Beginner',
    desc: [
      'Introduce core AI ideas such as machine learning, prompts, data, and model behavior.',
      'Build beginner-friendly projects using accessible tools and guided activities.',
      'Help students understand how AI works and how to use it responsibly.',
    ],
  },
  {
    cat: 'ProgrammingAI',
    name: 'AI Intermediate',
    desc: [
      'Explore deeper AI concepts: data preparation, model training, evaluation, and applications.',
      'Build stronger technical skills through hands-on projects and structured experiments.',
      'Prepare students for advanced AI, coding, and research-based learning.',
    ],
  },
  {
    cat: 'ProgrammingAI',
    name: 'Coding',
    desc: [
      'Builds core programming skills through hands-on projects and coding challenges.',
      'Trains students to think logically, debug code, and break problems into clear steps.',
      'Develops computational thinking for future STEM learning.',
    ],
  },
],
};

