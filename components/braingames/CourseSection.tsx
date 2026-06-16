/**
 * 文件用途：Brain Games 课程展示 Section
 * 依赖关系：依赖 types/braingames.ts
 * 注意事项：布局结构与 Educational Value（ChessPhilosophySection）一致：badge+标题+副标题、四张卡、WeChat/CTA 区
 */

import Image from "next/image";
import type { Course } from "@/types/braingames";

interface CourseSectionProps {
    course: Course;
}

export default function CourseSection({ course }: CourseSectionProps) {
    return (
        <section className={`py-12 sm:py-16 lg:py-24 ${course.sectionBgClassName ?? 'bg-white'}`}>
            <div className="mx-auto max-w-[1344px] px-4 sm:px-6 lg:px-9 flex flex-col gap-8 sm:gap-12 lg:gap-16">
                {/* 顶部 */}
                <div className="w-full flex flex-col items-center text-center gap-4 sm:gap-6 lg:gap-8">
                    <div className="inline-flex items-center gap-2 sm:gap-3 rounded-2xl lg:rounded-3xl bg-[#F4A460]/10 px-4 sm:px-5 py-2.5 sm:py-3.5">
                        {course.badgeIcon ? (
                            <Image
                                src={course.badgeIcon}
                                alt=""
                                width={30}
                                height={30}
                                className="w-5 h-5 md:w-7 md:h-8 object-contain shrink-0"
                                aria-hidden
                            />
                        ) : (
                            <span className="text-[#2C3E50] text-base sm:text-lg" aria-hidden>{course.ctaIcon ?? "♟"}</span>
                        )}
                        <span className="text-[#F4A460] text-base sm:text-lg md:text-xl font-normal font-outfit">
                            {course.tag}
                        </span>
                    </div>
                    <h2 className="text-center text-slate-700 text-2xl sm:text-3xl md:text-4xl font-bold font-outfit leading-tight">
                        {course.title}
                    </h2>
                    <p className="max-w-[892px] text-slate-500 text-sm sm:text-base md:text-lg font-normal font-outfit leading-relaxed text-center">
                        {course.subtitle}
                    </p>
                </div>

                {/* 4 张课程卡：移动端横向滚动 */}
                <div className="lg:hidden w-full overflow-x-auto pb-4 -mx-2 px-2">
                    <div className="flex gap-4 w-max">
                        {course.cards.map((c) => (
                            <div
                                key={c.id}
                                className={`w-[240px] sm:w-[280px] flex-shrink-0 rounded-2xl lg:rounded-3xl px-4 sm:px-6 pt-6 sm:pt-9 pb-5 sm:pb-8 text-center flex flex-col items-center ${course.cardBgClassName ?? 'bg-[#FBF9F4]'}`}
                            >
                                <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 shrink-0 rounded-2xl lg:rounded-3xl bg-[#F4A460]/10 flex justify-center items-center">
                                    <Image
                                        src={c.iconSrc}
                                        alt=""
                                        width={40}
                                        height={40}
                                        className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 object-contain"
                                    />
                                </div>
                                <h3 className="mt-3 sm:mt-4 lg:mt-5 w-full text-center text-slate-700 text-lg sm:text-xl md:text-2xl font-semibold font-outfit leading-tight">
                                    {c.title}
                                </h3>
                                <p className="mt-2 sm:mt-3 lg:mt-4 w-full text-center text-slate-500 text-sm sm:text-base md:text-lg font-normal font-outfit leading-snug">
                                    {c.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="hidden lg:grid w-full grid-cols-4 gap-8">
                    {course.cards.map((c) => (
                        <div
                            key={c.id}
                            className={`rounded-3xl px-6 pt-9 pb-8 text-center flex flex-col items-center ${course.cardBgClassName ?? 'bg-[#FBF9F4]'}`}
                        >
                            <div className="w-20 h-20 shrink-0 rounded-3xl bg-[#F4A460]/10 flex justify-center items-center">
                                <Image
                                    src={c.iconSrc}
                                    alt=""
                                    width={40}
                                    height={40}
                                    className="object-contain"
                                />
                            </div>
                            <h3 className="mt-5 w-full text-center text-slate-700 text-xl md:text-2xl font-semibold font-outfit leading-tight">
                                {c.title}
                            </h3>
                            <p className="mt-4 w-full max-w-[13rem] text-center text-slate-500 text-base md:text-lg font-normal font-outfit leading-snug">
                                {c.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* WeChat / CTA 面板 */}
                <div className={`w-full rounded-2xl lg:rounded-3xl px-4 sm:px-6 md:px-14 py-6 sm:py-8 md:py-10 lg:py-12 ${course.ctaPanelBgClassName ?? 'bg-[#FBF2E8]'}`}>
                    <div className="flex flex-col md:flex-row gap-6 sm:gap-8 lg:gap-10 md:justify-between md:items-center">
                        <div className="max-w-[720px]">
                            <div className="flex items-center gap-2 sm:gap-3">
                                {course.ctaIconSrc ? (
                                    <Image
                                        src={course.ctaIconSrc}
                                        alt=""
                                        width={28}
                                        height={28}
                                        className="w-6 h-6 sm:w-7 sm:h-7 shrink-0 object-contain"
                                        aria-hidden
                                    />
                                ) : (
                                    <span className="text-lg sm:text-xl lg:text-[22px] text-[#2C3E50]">
                                        {course.ctaIcon ?? "♟"}
                                    </span>
                                )}
                                <h4 className="text-slate-700 text-lg sm:text-xl md:text-2xl font-bold font-outfit leading-tight">
                                    {course.ctaText}
                                </h4>
                            </div>
                            <p className="mt-3 sm:mt-4 lg:mt-5 max-w-[28rem] text-slate-500 text-sm sm:text-base md:text-lg font-normal font-outfit leading-relaxed">
                                {course.ctaDescription ??
                                    "Equip your child to face life's challenges with confidence through the timeless wisdom of chess."}
                            </p>
                        </div>
                        <div className="flex flex-col items-start shrink-0 md:mr-8 lg:mr-16">
                            <div className="h-20 w-20 sm:h-24 sm:w-24 lg:h-[110px] lg:w-[110px] overflow-hidden rounded-lg bg-white shrink-0">
                                <Image
                                    src={course.qrImage}
                                    alt="WeChat QR Code"
                                    width={110}
                                    height={110}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <p className="mt-2 sm:mt-3 text-left text-slate-500 text-sm sm:text-base font-normal font-outfit">
                                <span className="block">Scan to join our</span>
                                <span className="block">WeChat Community</span>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Register 按钮 */}
                <div className="flex justify-center">
                    <a
                        href="https://forms.gle/2mMzKoQkXHa2CVHe6"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto inline-flex justify-center items-center gap-3 sm:gap-4 lg:gap-6 md:gap-7 min-w-[140px] sm:min-w-[150px] h-11 sm:h-12 md:h-14 px-6 sm:px-8 lg:pl-20 lg:pr-7 py-2.5 sm:py-3 md:py-3.5 bg-[#F4A460] rounded-xl sm:rounded-2xl lg:rounded-3xl text-white text-base sm:text-lg lg:text-xl font-bold font-outfit shadow-md hover:bg-rose-500 transition-colors no-underline"
                    >
                        Register Now
                        <Image src="/braingames/FeaturedProgram-chess/registernow.svg" alt="" width={24} height={24} className="shrink-0 w-5 h-5 sm:w-6 sm:h-6" aria-hidden />
                    </a>
                </div>
            </div>
        </section>
    );
}
