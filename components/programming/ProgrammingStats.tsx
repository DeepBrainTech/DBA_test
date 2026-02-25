'use client';

import Image from 'next/image';

type StatItem = {
  icon: string;
  value: string;
  label: string;
};

const STATS: StatItem[] = [
  { icon: '/programming/learn_to_code/8.png', value: '100%', label: 'Project-Based Learning' },
  { icon: '/programming/learn_to_code/9.png', value: '1:3+', label: 'Teacher–Student Ratio' },
  { icon: '/programming/learn_to_code/10.png', value: '500+', label: 'Student Projects Completed' },
  { icon: '/programming/learn_to_code/11.png', value: '50+', label: 'Competition Awards' },
];

function StatCard({ icon, value, label }: StatItem) {
  return (
    <div
      className="
        py-4 sm:py-6 px-3 sm:px-4
        rounded-xl sm:rounded-2xl
        bg-gradient-to-b from-[#FFFFFF] to-[#E0F7FA]
        flex flex-col items-center justify-center
        text-center
        shadow-md
        font-outfit
        hover:-translate-y-1 transition-transform duration-300
      "
    >
      {/* icon */}
      <div className="mb-2 sm:mb-3">
        <Image
          src={icon}
          alt=""
          width={28}
          height={28}
          className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 object-contain"
          aria-hidden
        />
      </div>

      {/* value */}
      <div className="text-lg sm:text-2xl lg:text-3xl font-semibold text-[#2AAED6]">
        {value}
      </div>

      {/* label */}
      <div className="mt-1 sm:mt-2 text-xs sm:text-sm text-gray-500 text-center">
        {label}
      </div>
    </div>
  );
}

export default function ProgrammingStats() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1344px] px-4 sm:px-6 lg:px-9 pt-6 sm:pt-8 pb-12 sm:pb-16 lg:pb-24">
        {/* 移动端2x2网格，平板/桌面4列 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          {STATS.map((s) => (
            <StatCard key={s.label} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}