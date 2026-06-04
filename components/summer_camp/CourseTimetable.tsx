'use client';

import React from 'react';

const COLORS = {
  Physics: 'bg-[#EF6B83]',
  Math: 'bg-[#4ADE80]',
  Chess: 'bg-[#FDBA74]',
  Language: 'bg-[#A78BFA]',
  AI: 'bg-[#60A5FA]',
};

type Category = keyof typeof COLORS;

interface Course {
  name: string;
  cat: Category;
}

const SCHEDULE_DATA: {
  time: string;
  days: { [key: string]: Course[] };
}[] = [
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
];

const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const DAY_LABELS: Record<string, string> = {
  Mon: 'Monday',
  Tue: 'Tuesday',
  Wed: 'Wednesday',
  Thu: 'Thursday',
  Fri: 'Friday',
  Sat: 'Saturday',
  Sun: 'Sunday',
};

export default function CourseTimetable() {
  return (
    <div className="w-full bg-[#FBF9F4] mt-8 md:mt-12 pb-16">
      <div className="w-full max-w-[min(1400px,95vw)] mx-auto px-4 lg:px-9 flex flex-col justify-start items-center gap-8 sm:gap-12 lg:gap-16 pt-8 md:pt-12">
        
        {/* Header Section */}
        <div className="flex flex-col items-center gap-4">
          <div className="inline-flex items-center justify-center gap-2 rounded-full bg-rose-400/10 px-5 py-2">
            <span className="text-xl" aria-hidden>⏰</span>
            <span className="text-rose-400 font-medium font-['Outfit']">Schedule</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold font-['Outfit'] text-slate-800 text-center">
            Course Timetable
          </h2>
        </div>

        {/* Timetable Card */}
        <div className="w-full bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-slate-100 overflow-hidden flex flex-col items-center">
          
          <h3 className="text-2xl md:text-3xl font-bold text-slate-800 font-['Outfit'] text-center mb-6">
            Summer Class Timetable
          </h3>

          {/* Legend */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-8 text-sm md:text-base font-['Outfit'] text-slate-500 font-medium">
            {(Object.keys(COLORS) as Category[]).map((cat) => (
              <div key={cat} className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${COLORS[cat]}`} />
                <span>{cat}</span>
              </div>
            ))}
            <div className="flex items-center ml-2">
              <span>*Contest</span>
            </div>
          </div>

          {/* Table Container */}
          <div className="w-full overflow-x-auto pb-4" style={{ WebkitOverflowScrolling: 'touch' }}>
            <div className="min-w-[1000px] w-full flex flex-col border border-slate-200 rounded-t-xl overflow-hidden">
              
              {/* Header Row */}
              <div className="grid grid-cols-[120px_1fr_1fr_1fr_1fr_1fr_1fr_1fr] bg-[#2C3E50] text-white">
                <div className="py-4 px-2 text-center text-sm md:text-base font-bold font-['Outfit']"></div>
                {DAYS.map((day) => (
                  <div key={day} className="py-4 px-2 text-center text-sm md:text-base font-bold font-['Outfit']">
                    {DAY_LABELS[day]}
                  </div>
                ))}
              </div>

              {/* Data Rows */}
              {SCHEDULE_DATA.map((row, idx) => (
                <div 
                  key={idx} 
                  className={`grid grid-cols-[120px_1fr_1fr_1fr_1fr_1fr_1fr_1fr] border-b border-slate-200 relative ${
                    idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'
                  }`}
                >
                  
                  {/* Time Column */}
                  <div className="py-6 px-2 flex items-center justify-center text-center font-['Outfit'] font-medium text-slate-500 text-sm border-r border-slate-200 whitespace-pre-wrap">
                    {row.time}
                  </div>

                  {/* Day Columns */}
                  {DAYS.map((day, dIdx) => (
                    <div key={day} className={`p-3 flex flex-col gap-3 ${dIdx !== DAYS.length - 1 ? 'border-r border-slate-200' : ''}`}>
                      {row.days[day]?.map((course, cIdx) => (
                        <div key={cIdx} className="flex items-start gap-2">
                          <div className={`w-2.5 h-2.5 rounded-full mt-1.5 shrink-0 ${COLORS[course.cat]}`} />
                          <span className="font-['Outfit'] text-sm font-medium text-slate-700 leading-snug whitespace-pre-wrap">
                            {course.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
