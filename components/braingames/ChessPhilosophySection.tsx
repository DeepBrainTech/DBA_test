/**
 * 文件用途：Brain Games 教育理念 Section
 * 依赖关系：依赖 types/braingames.ts
 * 注意事项：按钮格式与字体字号与 summer_camp LearningStrategies 一致
 */

import Image from "next/image";
import type { ChessPhilosophyData } from "@/types/braingames";

export default function ChessPhilosophySection({
    data,
}: {
    data: ChessPhilosophyData;
}) {
    return (
        <section id="educational-value" className="bg-white">
            <div className="mx-auto max-w-[1344px] px-9 py-24 flex flex-col gap-16">
                {/* 顶部：badge + 主标题 + 副标题（与 summer_camp LearningStrategies 一致） */}
                <div className="w-full flex flex-col items-center text-center gap-8">
                    <div className="inline-flex items-center gap-3 rounded-3xl bg-[#F4A460]/10 px-5 py-3.5">
                        <Image
                            src="/braingames/educational/icon.png"
                            alt=""
                            width={30}
                            height={30}
                            className="w-5 h-5 md:w-7 md:h-8 object-contain shrink-0"
                            aria-hidden
                        />
                        <span className="text-[#F4A460] text-lg md:text-xl font-normal font-['Outfit'] leading-7">
                            {data.badgeText}
                        </span>
                    </div>
                    <h2 className="text-center text-slate-700 text-3xl md:text-4xl font-bold font-['Outfit'] leading-tight">
                        {data.heading}
                    </h2>
                    <p className="max-w-[892px] text-slate-500 text-base md:text-lg font-normal font-['Outfit'] leading-relaxed text-center">
                        {data.subheading}
                    </p>
                </div>

                {/* 4 张理念卡（字号与 summer_camp StrategyCard 一致） */}
                <div className="w-full grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
                    {data.cards.map((c) => (
                        <div
                            key={c.id}
                            className="rounded-3xl bg-[#FBF9F4] px-6 pt-9 pb-8 text-center flex flex-col items-center"
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
                            <h3 className="mt-5 w-full text-center text-slate-700 text-xl md:text-2xl font-semibold font-['Outfit'] leading-tight">
                                {c.title}
                            </h3>
                            <p className="mt-4 w-full max-w-[18rem] text-center text-slate-500 text-base md:text-lg font-normal font-['Outfit'] leading-snug">
                                {c.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* 引用 / 说明面板（字号与 summer_camp 区块一致） */}
                <div className="w-full rounded-3xl bg-linear-to-r from-[#F4A4601A] to-[#E894511A] px-6 py-10 md:px-14 md:py-14">
                    <div className="relative">
                        <div className="leading-none opacity-20 text-[#F4A460] text-5xl md:text-6xl font-normal font-['Outfit']" aria-hidden>
                            &quot;
                        </div>
                        <h3 className="text-center text-slate-700 text-xl md:text-2xl font-semibold font-['Outfit'] leading-tight mt-2">
                            {data.quoteHeading}
                        </h3>
                        <p className="mx-auto mt-5 max-w-[925px] text-center text-slate-500 text-base md:text-lg font-normal font-['Outfit'] leading-relaxed">
                            {data.quoteBody}
                        </p>
                        <div className="mx-auto mt-12 grid max-w-[980px] grid-cols-1 gap-6 md:grid-cols-3">
                            {data.quotePills.map((p) => (
                                <div
                                    key={p.id}
                                    className="rounded-2xl bg-white px-6 py-5 md:px-8 md:py-6 text-center"
                                >
                                    <div className="text-[#F4A460] text-base md:text-lg font-semibold font-['Outfit'] leading-7">
                                        {p.title}
                                    </div>
                                    <div className="mt-2 text-slate-500 text-base font-normal font-['Outfit'] leading-relaxed whitespace-nowrap">
                                        {p.description}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-10 text-center">
                            <div className="text-slate-700 text-base font-normal font-['Outfit'] leading-7">
                                {data.footerLine1}
                            </div>
                            <div className="mt-1 text-slate-500 text-base font-normal font-['Outfit'] leading-7">
                                {data.footerLine2}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
