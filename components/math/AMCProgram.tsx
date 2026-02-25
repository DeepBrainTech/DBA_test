/**
 * 文件用途：AMC 8/10 课程完整区块，含 Our Programs 标题+四卡、7 Steps Learning Method、双 CTA（与 PRE-AMC 样式一致）
 * 依赖关系：PreAMCProgram、next/image、lucide-react、data 由页面通过 props 传入
 */

import Image from 'next/image';
import Link from 'next/link';

import { ArrowRight } from 'lucide-react';

import PreAMCProgram from '@/components/math/PreAMCProgram';
import type { PreAMCProgramData, SevenStepsMethodData } from '@/types/math';

const CTA_URL = 'https://forms.gle/2mMzKoQkXHa2CVHe6';

/** 单张步骤卡 */
function SevenStepCard({
  icon,
  iconSrc,
  title,
  description,
}: {
  icon: string;
  iconSrc?: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col gap-1.5 sm:gap-2 rounded-2xl lg:rounded-3xl bg-[#7EC97E10] px-4 sm:px-6 lg:pl-10 lg:pr-7 py-3 sm:py-4 lg:pt-5 lg:pb-5">
      <div className="flex items-center gap-2 sm:gap-3">
        {iconSrc != null ? (
          <div className="relative w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 shrink-0">
            <Image src={iconSrc} alt="" fill className="object-contain" sizes="2.25rem" aria-hidden />
          </div>
        ) : (
          <span className="font-outfit text-lg sm:text-xl lg:text-2xl font-semibold text-slate-700" aria-hidden>
            {icon}
          </span>
        )}
        <h4 className="font-outfit text-base sm:text-lg lg:text-xl font-semibold text-slate-700">{title}</h4>
      </div>
      <div className="flex items-start gap-1.5 sm:gap-2">
        <span className="font-outfit text-base sm:text-lg lg:text-xl text-green-400" aria-hidden>
          ▸
        </span>
        <p className="font-outfit text-sm sm:text-base lg:text-lg xl:text-xl text-slate-500">{description}</p>
      </div>
    </div>
  );
}

/** 步骤之间的向下箭头（Vector.svg），上下等距居中于两步骤之间 */
function StepConnector() {
  return (
    <div className="flex flex-shrink-0 items-center justify-center py-5" aria-hidden>
      <Image src="/math/amc/Vector.svg" alt="" width={28} height={17} className="object-contain" />
    </div>
  );
}

interface AMCProgramProps {
  /** AMC 8/10 课程数据（Our Programs 标题 + 四张卡） */
  data: PreAMCProgramData;
  /** 7 Steps Learning Method 区块数据 */
  sevenStepsData: SevenStepsMethodData;
}

export default function AMCProgram({ data, sevenStepsData }: AMCProgramProps) {
  const steps = sevenStepsData.steps;
  const stepsLeft = steps.slice(0, 4);
  const stepsRight = steps.slice(4, 7);
  const ctaUrl = sevenStepsData.ctaUrl ?? CTA_URL;
  return (
    <>
      {/* AMC 8/10 区块整体背景与下方 7 Steps 一致，便于视觉统一 */}
      <PreAMCProgram data={data} sectionClassName="bg-[#FBF9F4]" />

      <section className="bg-[#FBF9F4] py-20">
        <div className="mx-auto w-full max-w-[1650px] px-6 md:px-10 lg:px-14">
          {/* 7 Steps Learning Method：2xl 以下为两行（标题行 + 步骤两列网格），2xl 及以上左侧标题 + 右侧两列步骤，避免笔记本溢出 */}
          <div className="mb-12 self-stretch rounded-[39.83px] bg-white p-8 shadow-sm md:p-10 2xl:px-16 2xl:py-12">
            <div className="flex flex-col gap-10 2xl:flex-row 2xl:items-stretch">
              {/* 左侧/上方：图标 + 标题 + 副标题 + CTA；2xl 以下单独占一行 */}
              <div className="flex flex-shrink-0 flex-col 2xl:w-[280px] min-[1600px]:w-[320px]">
                <div className="relative mb-6 h-20 w-20 overflow-hidden rounded-[33px] bg-green-400/10 md:h-24 md:w-24">
                  <Image
                    src="/math/amc/Icon.png"
                    alt=""
                    fill
                    className="object-contain p-2"
                    sizes="6rem"
                    aria-hidden
                  />
                </div>
                <h3 className="font-outfit text-xl sm:text-2xl lg:text-3xl font-semibold leading-tight text-slate-700">
                  {sevenStepsData.title}
                </h3>
                <p className="mt-3 font-outfit text-xl text-slate-500 md:text-2xl">
                  {sevenStepsData.subtitle}
                </p>
                <div className="mt-6">
                  <Link
                    href={ctaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-[20px] bg-green-400 px-5 py-1.5 font-outfit text-xl text-white transition hover:bg-green-500"
                  >
                    {sevenStepsData.ctaLabel}
                  </Link>
                </div>
              </div>

              {/* 步骤区：2xl 以下两列网格，2xl 及以上两列（左 4 右 3）+ 连接符 */}
              <div className="flex min-w-0 flex-1 flex-col gap-4 2xl:flex-row 2xl:gap-0">
                {/* 2xl 以下：7 张卡两列网格，笔记本不溢出 */}
                <div className="grid grid-cols-2 gap-4 2xl:hidden">
                  {steps.map((step, idx) => (
                    <SevenStepCard
                      key={idx}
                      icon={step.icon}
                      iconSrc={step.iconSrc}
                      title={step.title}
                      description={step.description}
                    />
                  ))}
                </div>
                {/* 2xl 及以上：左列 4 步 + 右列 3 步，连接符单独占位、上下等距居中 */}
                <div className="hidden min-w-0 flex-1 flex-col gap-0 sm:pr-2 2xl:flex">
                  {stepsLeft.flatMap((step, idx) => [
                    <SevenStepCard
                      key={`left-${idx}`}
                      icon={step.icon}
                      iconSrc={step.iconSrc}
                      title={step.title}
                      description={step.description}
                    />,
                    ...(idx < stepsLeft.length - 1 ? [<StepConnector key={`left-conn-${idx}`} />] : []),
                  ])}
                </div>
                <div className="hidden min-w-0 flex-1 flex-col gap-0 pt-6 sm:pl-2 sm:pt-20 2xl:flex">
                  {stepsRight.flatMap((step, idx) => [
                    <SevenStepCard
                      key={`right-${idx}`}
                      icon={step.icon}
                      iconSrc={step.iconSrc}
                      title={step.title}
                      description={step.description}
                    />,
                    ...(idx < stepsRight.length - 1 ? [<StepConnector key={`right-conn-${idx}`} />] : []),
                  ])}
                </div>
              </div>
            </div>
          </div>

          {/* 双 CTA */}
          <div className="flex w-full flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
            <Link
              href={CTA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl sm:rounded-2xl lg:rounded-3xl bg-white px-6 sm:px-8 py-3 sm:py-4 font-outfit text-base sm:text-lg lg:text-xl font-bold text-[#7EC97E] shadow-md transition hover:bg-green-50"
            >
              Free Assessment
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" strokeWidth={2.5} />
            </Link>
            <Link
              href={CTA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl sm:rounded-2xl lg:rounded-[33px] bg-[#7EC97E] px-6 sm:px-8 py-3 sm:py-4 font-outfit text-base sm:text-lg lg:text-xl font-bold text-white shadow-md transition hover:bg-green-500"
            >
              Register Now
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" strokeWidth={2.5} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
