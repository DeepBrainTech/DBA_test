/**
 * 文件用途：Test Prep Success Stories 区块 — 两张成绩卡 + 进步对比与 testimonial
 * 依赖关系：next/image、types/test_prep；截图资源来自 public/test_prep/success_stories/
 */

import Image from 'next/image';

import type { TestPrepPageData } from '@/types/test_prep';

interface SuccessStoriesProps {
  data: TestPrepPageData['successStories'];
}

function StoryCard({
  title,
  titleSuffix,
  scoreImage,
  studentInitial,
  studentName,
  grade,
}: TestPrepPageData['successStories']['stories'][number]) {
  return (
    <article className="flex flex-col rounded-[40px] bg-[#FBF9F4] px-6 py-8 sm:px-8 sm:py-10 md:px-10 md:py-10">
      <h3 className="font-outfit text-2xl sm:text-3xl md:text-[40px] font-semibold leading-tight text-[#2C3E50]">
        {title}
        {titleSuffix ? (
          <span className="ml-2 text-xl sm:text-2xl md:text-2xl font-normal text-[#7C8B99]">
            {titleSuffix}
          </span>
        ) : null}
      </h3>
      <div className="relative mt-8 sm:mt-10 w-full overflow-hidden rounded-[20px] bg-white/60">
        <Image
          src={scoreImage}
          alt={`${title} score report`}
          width={534}
          height={281}
          className="h-auto w-full"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className="mt-8 sm:mt-10 flex items-center gap-5">
        <div
          className="flex size-14 sm:size-16 shrink-0 items-center justify-center rounded-2xl bg-[#E2DEEC] font-outfit text-2xl sm:text-[26px] text-white"
          aria-hidden
        >
          {studentInitial}
        </div>
        <div>
          <p className="font-outfit text-xl sm:text-2xl md:text-[26px] text-[#2C3E50]">{studentName}</p>
          <p className="font-outfit text-xl sm:text-2xl md:text-[26px] text-[#7C8B99]">{grade}</p>
        </div>
      </div>
    </article>
  );
}

export default function SuccessStories({ data }: SuccessStoriesProps) {
  const { progressStory } = data;

  return (
    <section
      id="success-stories"
      className="w-full bg-white px-4 sm:px-8 lg:px-9 pt-16 md:pt-20 lg:pt-[93px] pb-8 md:pb-10 lg:pb-12"
      aria-label="Success Stories"
    >
      <div className="mx-auto flex w-full max-w-[min(1270px,95vw)] flex-col items-center gap-12 md:gap-16 lg:gap-[72px]">
        <header className="flex w-full flex-col items-center text-center">
          <div className="inline-flex items-center gap-1.5 rounded-[23px] bg-[rgba(107,122,239,0.1)] px-5 py-2.5">
            <span className="text-[28px] leading-none" aria-hidden>
              {data.badgeIcon}
            </span>
            <span className="font-outfit text-xl text-[#6B7AEF]">{data.badgeText}</span>
          </div>
          <h2 className="mt-6 font-outfit text-3xl md:text-4xl lg:text-[44px] font-bold leading-tight text-[#2C3E50]">
            {data.title}
          </h2>
        </header>

        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 md:gap-10">
          {data.stories.map((story) => (
            <StoryCard key={story.studentName} {...story} />
          ))}
        </div>

        <div className="relative w-full rounded-[40px] bg-[rgba(107,122,239,0.1)] px-4 py-12 sm:px-8 sm:py-16 md:px-8 md:py-20">
          <span
            className="pointer-events-none absolute left-4 top-3 font-outfit text-[80px] sm:left-8 sm:text-[100px] leading-none text-[rgba(107,122,239,0.1)]"
            aria-hidden
          >
            &ldquo;
          </span>
          <span
            className="pointer-events-none absolute bottom-6 right-4 font-outfit text-[80px] sm:right-8 sm:text-[100px] leading-none text-[rgba(107,122,239,0.1)]"
            aria-hidden
          >
            &rdquo;
          </span>

          <div className="relative z-10 mx-auto flex w-full max-w-[1208px] flex-col gap-10 sm:gap-[60px]">
            <div className="flex w-full flex-col items-center gap-10 xl:flex-row xl:items-center xl:justify-center xl:gap-[60px]">
              <div className="flex w-full max-w-[480px] shrink-0 flex-col items-center gap-5">
                <Image
                  src={progressStory.firstTestImage}
                  alt="First SAT test score report — total score 1210"
                  width={480}
                  height={289}
                  className="h-auto w-full rounded-[20px]"
                  sizes="480px"
                />
                <p className="font-outfit text-lg sm:text-xl font-medium text-[#6B7AEF]">First Test</p>
              </div>

              <div className="flex shrink-0 flex-col items-center gap-6">
                <p className="font-outfit text-2xl sm:text-[32px] font-semibold text-[#FF2E2E]">
                  {progressStory.pointsGain}
                </p>
                <svg
                  className="h-6 w-32 text-[#6B7AEF]"
                  viewBox="0 0 128 24"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M0 12H110M110 12L98 4M110 12L98 20"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="rounded-[14px] bg-[rgba(107,122,239,0.08)] px-4 py-2 font-outfit text-lg sm:text-xl text-[#6B7AEF]">
                  {progressStory.duration}
                </span>
              </div>

              <div className="flex w-full max-w-[480px] shrink-0 flex-col items-center gap-5">
                <Image
                  src={progressStory.secondTestImage}
                  alt="Second SAT test score report — total score 1420"
                  width={480}
                  height={289}
                  className="h-auto w-full rounded-[20px]"
                  sizes="480px"
                />
                <p className="font-outfit text-lg sm:text-xl font-medium text-[#6B7AEF]">Second Test</p>
              </div>
            </div>

            <p className="mx-auto max-w-[819px] text-center font-outfit text-base sm:text-lg md:text-xl leading-[1.5] text-[#2C3E50]">
              &ldquo;{progressStory.quote}&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
