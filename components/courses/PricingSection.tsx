/**
 * 文件用途：Courses 页面 Summer Courses Pricing 区块
 * 依赖关系：依赖 types/courses 的 CoursesPricingData
 */

import type { CoursesPricingData } from '@/types/courses';

interface PricingSectionProps {
  data: CoursesPricingData;
}

function TuitionPills({ tuitions }: { tuitions: string[] }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 lg:gap-6">
      {tuitions.map((tuition) => (
        <span
          key={tuition}
          className="inline-flex min-h-[36px] items-center justify-center rounded-full bg-[rgba(89,156,237,0.1)] px-4 py-1.5 font-outfit text-base text-[#599CED] md:text-lg lg:min-w-[160px] lg:px-5"
        >
          {tuition}
        </span>
      ))}
    </div>
  );
}

export default function PricingSection({ data }: PricingSectionProps) {
  return (
    <section
      id="pricing"
      className="w-full bg-[#FBF9F4] pb-16 md:pb-24"
      aria-label="Summer Courses Pricing"
    >
      <div className="mx-auto flex w-full max-w-[min(1270px,95vw)] flex-col items-center gap-12 px-4 sm:px-8 md:gap-16 lg:gap-[72px] lg:px-9">
        <header className="flex w-full flex-col items-center text-center">
          <div className="inline-flex items-center gap-2.5 rounded-[23px] bg-[rgba(89,156,237,0.1)] px-5 py-2.5">
            <span className="text-[28px] leading-none" aria-hidden>
              {data.badgeIcon}
            </span>
            <span className="font-outfit text-xl text-[#599CED]">{data.badgeText}</span>
          </div>
          <h2 className="mt-6 font-outfit text-3xl font-bold leading-tight text-[#2C3E50] md:text-4xl lg:text-[44px]">
            {data.title}
          </h2>
        </header>

        <div
          className="w-full rounded-[28px] px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10"
          style={{
            background:
              'linear-gradient(123deg, rgba(155, 143, 216, 0.05) 0%, rgba(107, 182, 255, 0.05) 100%)',
          }}
        >
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[rgba(89,156,237,0.2)]">
                  <th className="py-2.5 text-left font-outfit text-lg font-bold text-[#7C8B99] lg:text-xl">
                    {data.tableHeaders.enrollmentOption}
                  </th>
                  <th className="py-2.5 text-center font-outfit text-lg font-bold text-[#7C8B99] lg:text-xl">
                    {data.tableHeaders.tuition}
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.rows.map((row) => (
                  <tr
                    key={row.enrollmentOption}
                    className="border-b border-[rgba(89,156,237,0.2)] last:border-b-0"
                  >
                    <td className="py-2.5 pr-4 font-outfit text-base text-[#2C3E50] lg:py-3 lg:text-xl">
                      {row.enrollmentOption}
                    </td>
                    <td className="py-2.5 lg:py-3">
                      <TuitionPills tuitions={row.tuitions} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="md:hidden space-y-2.5">
            {data.rows.map((row) => (
              <div
                key={row.enrollmentOption}
                className="rounded-2xl border border-[rgba(89,156,237,0.15)] bg-white/60 p-3"
              >
                <p className="mb-2 font-outfit text-base font-medium text-[#2C3E50]">
                  {row.enrollmentOption}
                </p>
                <TuitionPills tuitions={row.tuitions} />
              </div>
            ))}
          </div>
        </div>

        <div className="w-full rounded-[28px] bg-gradient-to-r from-[rgba(201,180,126,0.1)] to-[rgba(107,171,255,0.1)] px-5 py-8 sm:px-8 sm:py-10 md:px-12 md:py-12">
          <h3 className="mb-6 font-outfit text-2xl font-semibold text-[#2C3E50] md:mb-8 md:text-[28px]">
            <span aria-hidden>⏱️ </span>
            {data.discountsTitle}
          </h3>
          <div className="divide-y divide-[#CAD6DE]">
            {data.discounts.map((item) => (
              <div
                key={item.label}
                className="flex flex-col gap-2 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-6 md:py-3.5"
              >
                <p className="font-outfit text-base text-[#2C3E50] md:text-xl">
                  {item.label}
                </p>
                <p className="shrink-0 font-outfit text-base font-semibold text-[#599CED] sm:text-center md:text-xl">
                  {item.discount}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex w-full justify-center">
          <a
            href={data.ctaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex h-12 items-center justify-center gap-2 rounded-[23px] bg-[#599CED] px-8 font-outfit text-lg font-bold text-white no-underline shadow-lg transition-all hover:-translate-y-0.5 hover:bg-[#4788D9] hover:shadow-xl md:h-14 md:px-10 md:text-[22px]"
            aria-label={data.ctaLabel}
          >
            <span>{data.ctaLabel}</span>
            <svg
              className="h-5 w-5 transition-transform group-hover:translate-x-1 md:h-6 md:w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
