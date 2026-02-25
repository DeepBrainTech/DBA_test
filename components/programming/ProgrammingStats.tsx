'use client';

import Image from 'next/image';

type StatItem = {
  icon: string; // 可以用 emoji，也可以换成 svg
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
        flex-1 min-w-0 py-6 px-4
        rounded-2xl
        bg-gradient-to-b from-[#FFFFFF] to-[#E0F7FA]
        flex flex-col items-center justify-center
        text-center
        shadow-md
        font-outfit
        hover:-translate-y-1 transition-transform duration-300
      "
    >
      {/* icon */}
      <div className="mb-3">
        <Image
          src={icon}
          alt=""
          width={28}
          height={28}
          className="w-7 h-7 object-contain"
          aria-hidden
        />
      </div>

      {/* value */}
      <div className="text-2xl md:text-3xl font-semibold text-[#2AAED6]">
        {value}
      </div>

      {/* label - whitespace-nowrap 确保不换行 */}
      <div className="mt-2 text-sm text-gray-500 whitespace-nowrap">
        {label}
      </div>
    </div>
  );
}

export default function ProgrammingStats() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1344px] px-9 pt-8 pb-24">
        <div className="flex flex-nowrap items-center justify-center gap-6">
          {STATS.map((s) => (
            <StatCard key={s.label} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}