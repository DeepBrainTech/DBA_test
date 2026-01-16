import Image from "next/image";
import type { ChessPhilosophyData } from "@/types/chess";

export default function ChessPhilosophySection({
    data,
}: {
    data: ChessPhilosophyData;
}) {
    return (
        <section className="bg-white">
            <div className="mx-auto max-w-[1200px] px-6 py-24">
                {/* Top header */}
                <div className="flex flex-col items-center text-center">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 rounded-full bg-[#FFF4E6] px-6 py-3">
                        <span className="text-[#2C3E50] text-base">♟</span>
                        <span className="text-[#F4A460] text-sm font-medium">
                            {data.badgeText}
                        </span>
                    </div>

                    <h2 className="mt-6 text-[44px] leading-tight font-bold text-[#2C3E50] md:text-[56px]">
                        {data.heading}
                    </h2>

                    <p className="mt-4 max-w-[820px] text-[16px] leading-relaxed text-[#2C3E50]/60 md:text-[18px]">
                        {data.subheading}
                    </p>
                </div>

                {/* 4 cards */}
                <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {data.cards.map((c) => (
                        <div
                            key={c.id}
                            className="rounded-[26px] bg-[#FBF9F4] px-10 py-12 text-center"
                        >
                            {/* icon bubble */}
                            <div className="mx-auto mb-8 flex h-[86px] w-[86px] items-center justify-center rounded-[18px] bg-[#F3EBDD]">
                                <Image
                                    src={c.iconSrc}
                                    alt={c.title}
                                    width={36}
                                    height={36}
                                    className="opacity-80"
                                />
                            </div>

                            <h3 className="text-[18px] font-bold text-[#2C3E50] md:text-[20px]">
                                {c.title}
                            </h3>
                            <p className="mt-3 text-[14px] leading-relaxed text-[#2C3E50]/55">
                                {c.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Quote / callout panel */}
                <div className="mt-20 rounded-[30px] bg-[#FBF2E8] px-8 py-14 md:px-14">
                    <div className="relative">
                        {/* decorative quote mark */}
                        <div className="absolute -left-2 -top-3 text-[#F4A460]/35 text-3xl">
                            “
                        </div>

                        <h3 className="text-center text-[22px] font-bold text-[#2C3E50] md:text-[28px]">
                            {data.quoteHeading}
                        </h3>

                        <p className="mx-auto mt-5 max-w-[900px] text-center text-[14px] leading-relaxed text-[#2C3E50]/60 md:text-[16px]">
                            {data.quoteBody}
                        </p>

                        {/* 3 mini cards */}
                        <div className="mx-auto mt-12 grid max-w-[980px] grid-cols-1 gap-6 md:grid-cols-3">
                            {data.quotePills.map((p) => (
                                <div
                                    key={p.id}
                                    className="rounded-[18px] bg-white px-8 py-6 text-center"
                                >
                                    <div className="text-[16px] font-semibold text-[#F4A460]">
                                        {p.title}
                                    </div>
                                    <div className="mt-2 text-[14px] text-[#2C3E50]/60">
                                        {p.description}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* footer lines */}
                        <div className="mt-10 text-center">
                            <div className="text-[13px] font-medium text-[#2C3E50]/75">
                                {data.footerLine1}
                            </div>
                            <div className="mt-1 text-[13px] text-[#2C3E50]/55">
                                {data.footerLine2}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
