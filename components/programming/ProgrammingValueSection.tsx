/**
 * 文件用途：Programming 页面 Value of Coding 组件
 * 依赖关系：next/image；ValueCard
 * 注意事项：左侧为 Admissions Advantage，右侧为 Career Outlook
 */

import Image from 'next/image';
import ValueCard, { ValueListItemData } from './ValueCard';

/** Admissions Advantage 数据 */
const admissionsItems: ValueListItemData[] = [
  {
    title: 'Elite Competitions (USACO)',
    description:
      'A critical asset for engineering school applications. Platinum status is often weighed as heavily as an Ivy-League hook.',
  },
  {
    title: 'Personal Project Portfolio',
    description:
      'Showcases tangible problem-solving abilities—essential material for supplemental essays and interviews.',
  },
  {
    title: 'GitHub Open-Source Profile',
    description:
      'Demonstrates technical proficiency and collaboration skills, highlighting a passion for technology to admissions officers.',
  },
  {
    title: 'AP Computer Science',
    description:
      'Earns college credit while signaling academic readiness for rigorous STEM coursework.',
  },
];

/** Career Outlook 数据 */
const careerItems: ValueListItemData[] = [
  {
    title: 'AI & Machine Learning',
    description: (
      <>
        AI Engineers command starting salaries of <strong>$150k+</strong>, with{' '}
        <strong>35%</strong> job growth projected over the next decade.
      </>
    ),
  },
  {
    title: 'FinTech & Quantitative Finance',
    description: (
      <>
        Candidates with dual backgrounds in finance and coding command a{' '}
        <strong>50%</strong> salary premium.
      </>
    ),
  },
  {
    title: 'Bioinformatics',
    description:
      'Coding now powers the life sciences, driving innovation in gene sequencing and drug discovery.',
  },
  {
    title: 'The Cross-Disciplinary Edge',
    description: (
      <>
        Coding is the core skill for maximizing efficiency in any industry. Median CS
        Graduate Salary (U.S.): <strong>$120k+</strong>
      </>
    ),
  },
];

export default function ProgrammingValueSection() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-[1344px] mx-auto px-9">
        {/* Header - 与 Featured Course 部分一致 */}
        <div className="w-full flex flex-col items-center text-center gap-8 mb-12">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 rounded-3xl bg-[#FBF9F4] px-5 py-3.5 shadow-sm">
            <Image
              src="/programming/value_of_coding/icon.png"
              alt=""
              width={24}
              height={24}
              className="w-6 h-6 object-contain"
              aria-hidden
            />
            <span className="text-[#4ECDC4] text-lg md:text-xl font-normal font-['Outfit'] leading-7">
              Value of Coding
            </span>
          </div>

          {/* 主标题 */}
          <h2 className="text-center text-slate-700 text-2xl md:text-3xl font-semibold font-['Outfit'] leading-tight">
            Unlock Your Future
          </h2>

          {/* 副标题 */}
          <p className="max-w-4xl text-slate-500 text-base md:text-2xl font-normal font-['Outfit'] leading-relaxed text-center">
            A high-yield investment in your child&apos;s education, securing advantages in
            both college admissions and future careers.
          </p>
        </div>

        {/* 两列卡片 */}
        <div className="flex flex-col lg:flex-row gap-8">
          <ValueCard
            iconSrc="/programming/value_of_coding/1.png"
            iconBgColor="bg-[#4ECDC4]/10"
            title="Admissions Advantage"
            subtitle='The "Gold Standard" for Top University Applications'
            items={admissionsItems}
            dotColor="bg-[#4ECDC4]"
            footerBgColor="bg-[#4ECDC4]/5"
            footerTextColor="text-[#4ECDC4]"
            footerIcon="📊"
            footerContent={
              <>
                Applicants with strong coding backgrounds enjoy a <strong>2.5x</strong> higher
                acceptance rate at top institutions.
              </>
            }
          />
          <ValueCard
            iconSrc="/programming/value_of_coding/2.png"
            iconBgColor="bg-sky-400/10"
            title="Career Outlook"
            subtitle="Future-Proof Your Career with High-Demand Skills"
            items={careerItems}
            dotColor="bg-sky-400"
            footerBgColor="bg-sky-400/5"
            footerTextColor="text-sky-400"
            footerIcon="💰"
            footerContent="Median CS graduate salary: $120k+ (U.S.)"
          />
        </div>
      </div>
    </section>
  );
}
