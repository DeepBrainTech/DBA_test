/**
 * 文件用途：Courses 页面 Fall Course Pricing 区块（PDF 预览 + 折扣 + CTA）
 * 依赖关系：依赖 types/courses 的 CoursesPricingData；PDF 放在 public/courses/Fall_Pricing.pdf
 * 注意事项：预览/打开/下载共用带版本号的地址，避免换文件后 iframe 仍显示旧 PDF
 */

import type { CoursesPricingData } from '@/types/courses';

interface PricingSectionProps {
  data: CoursesPricingData;
}

export default function PricingSection({ data }: PricingSectionProps) {
  const pdfFileName = data.pdfUrl.split('/').pop() ?? 'Fall_Pricing.pdf';
  // 查询参数在 hash 前，强制预览和下载走同一份新文件
  const pdfHref = `${data.pdfUrl}?v=${encodeURIComponent(data.pdfVersion)}`;
  const pdfPreviewSrc = `${pdfHref}#toolbar=0`;

  return (
    <section
      id="pricing"
      className="w-full bg-[#FBF9F4] pb-16 md:pb-24"
      aria-label="Fall Course Pricing"
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

        <div className="w-full overflow-hidden rounded-[28px] border border-[rgba(89,156,237,0.2)] bg-white shadow-sm">
          <div className="flex flex-col gap-3 border-b border-[rgba(89,156,237,0.15)] bg-[rgba(89,156,237,0.06)] px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:py-4">
            <p className="font-outfit text-base font-medium text-[#2C3E50] md:text-lg">
              {pdfFileName}
            </p>
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <a
                href={pdfHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 items-center justify-center rounded-[23px] border border-[#599CED] bg-white px-5 font-outfit text-sm font-semibold text-[#599CED] no-underline transition-colors hover:bg-[rgba(89,156,237,0.08)] md:text-base"
              >
                Open
              </a>
              <a
                href={pdfHref}
                download={pdfFileName}
                className="inline-flex h-10 items-center justify-center rounded-[23px] bg-[#599CED] px-5 font-outfit text-sm font-semibold text-white no-underline transition-colors hover:bg-[#4788D9] md:text-base"
              >
                Download
              </a>
            </div>
          </div>

          {/* Desktop / tablet: inline PDF preview */}
          <div className="relative hidden min-h-[520px] bg-[#F8FAFC] md:block lg:min-h-[640px]">
            <iframe
              key={pdfPreviewSrc}
              title="Fall Course Pricing PDF preview"
              src={pdfPreviewSrc}
              className="absolute inset-0 h-full w-full border-0"
            />
          </div>

          {/* Mobile: preview often unreliable — show open/download prompt */}
          <div className="flex flex-col items-center gap-4 px-6 py-10 text-center md:hidden">
            <div
              className="flex size-14 items-center justify-center rounded-2xl bg-[rgba(89,156,237,0.12)]"
              aria-hidden
            >
              <svg
                className="size-7 text-[#599CED]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.75}
                  d="M7 3h7l5 5v13a1 1 0 01-1 1H7a1 1 0 01-1-1V4a1 1 0 011-1z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.75}
                  d="M14 3v5h5M9 13h6M9 17h6"
                />
              </svg>
            </div>
            <p className="max-w-sm font-outfit text-base text-[#7C8B99]">
              Tap Open to preview the pricing table, or Download to save{' '}
              {pdfFileName}.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href={pdfHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center rounded-[23px] border border-[#599CED] bg-white px-6 font-outfit text-base font-semibold text-[#599CED] no-underline"
              >
                Open
              </a>
              <a
                href={pdfHref}
                download={pdfFileName}
                className="inline-flex h-11 items-center justify-center rounded-[23px] bg-[#599CED] px-6 font-outfit text-base font-semibold text-white no-underline"
              >
                Download
              </a>
            </div>
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
