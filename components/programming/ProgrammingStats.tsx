'use client';

import Image from 'next/image';

type StatItem = {
  icon: string; // 可以用 emoji，也可以换成 svg
  value: string;
  label: string;
};

const STATS: StatItem[] = [
  { icon: '🚀', value: '100%', label: 'Project-Based Learning' },
  { icon: '👥', value: '1:3+', label: 'Teacher–Student Ratio' },
  { icon: '💡', value: '500+', label: 'Student Projects Completed' },
  { icon: '🏆', value: '50+', label: 'Competition Awards' },
];

function StatCard({ icon, value, label }: StatItem) {
  return (
    <div
      className="
        w-full max-w-[300px] h-[170px]
        rounded-[22px]
        bg-gradient-to-b from-[#4ECDC4]/10 to-[#45B7D1]/10
        flex flex-col items-center justify-center
        text-center
        shadow-[0_8px_22px_rgba(0,0,0,0.06)]
        font-outfit
        hover:-translate-y-1 transition-transform duration-300
      "
    >
      {/* icon */}
      <div className="text-[22px] leading-[22px] mb-[10px]">{icon}</div>

      {/* value */}
      <div className="text-[34px] leading-[42px] font-semibold text-[#2AAED6]">
        {value}
      </div>

      {/* label */}
      <div className="mt-[10px] text-[16px] leading-[24px] text-[#6B7280]">
        {label}
      </div>
    </div>
  );
}

export default function ProgrammingStats() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto w-[1400px] py-[60px]">
        <div className="flex items-center justify-center gap-[40px]">
          {STATS.map((s) => (
            <StatCard key={s.label} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}