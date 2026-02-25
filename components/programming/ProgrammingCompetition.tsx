'use client';

import Image from 'next/image';

type IdeaCard = {
  title: string;
  desc: string;
  iconSrc: string;
  iconBg: string; // tailwind color class like bg-[#E7F6F6]
};

const IDEA_CARDS: IdeaCard[] = [
  {
    title: 'Brain Games',
    desc: 'Quick, fun challenges that build focus, memory, and mental agility.',
    iconSrc: '/programming/brain.png',
    iconBg: 'bg-[#E7F6F6]',
  },
  {
    title: 'Reimagined Classics',
    desc: 'Rebuilding classic games with new rules, smarter challenges, and fresh purposes.',
    iconSrc: '/programming/Reimagined.png',
    iconBg: 'bg-[#EAF3FF]',
  },
  {
    title: 'AI learning tools',
    desc: 'Design the AI that powers smarter play and bolder AI-empowered learning tools.',
    iconSrc: '/programming/learning.png',
    iconBg: 'bg-[#FFF1E6]',
  },
  {
    title: 'New Ideas',
    desc: 'Bring a brand-new game idea from your imagination into the world.',
    iconSrc: '/programming/ideas.svg',
    iconBg: 'bg-[#F1EFFF]',
  },
];


function Pill({
  iconSrc,
  text,
}: {
  iconSrc?: string;
  text: string;
}) {
  return (
    <div className="inline-flex items-center gap-[10px] rounded-[999px] bg-white px-[16px] py-[8px] shadow-[0_6px_18px_rgba(0,0,0,0.06)]">
      {iconSrc ? (
        <Image src={iconSrc} alt="" width={18} height={18} className="h-[18px] w-[18px]" />
      ) : (
        <span className="text-[16px] leading-[16px]">🏆</span>
      )}
      <span className="text-[12px] text-[#2AAED6] font-medium font-outfit">{text}</span>
    </div>
  );
}

function IdeaCardItem({ title, desc, iconSrc, iconBg }: IdeaCard) {
  return (
    <div className="w-[310px] rounded-[22px] bg-white shadow-[0_12px_28px_rgba(0,0,0,0.06)] px-[28px] py-[26px] font-outfit">
      <div className={`h-[70px] w-[70px] rounded-[18px] ${iconBg} flex items-center justify-center`}>
        <Image src={iconSrc} alt={title} width={28} height={28} className="h-[28px] w-[28px]" />
      </div>

      <div className="mt-[18px] text-[16px] font-semibold text-[#1F2937]">{title}</div>
      <p className="mt-[10px] text-[13px] leading-[20px] text-[#7A8A9A]">{desc}</p>
    </div>
  );
}

export default function ProgrammingCompetition() {
  return (
    <section className="w-full bg-[#FBF8F3]">
      <div className="mx-auto w-[1400px] py-[70px] font-outfit">
        {/* top pill */}
        <div className="flex justify-center">
          <Pill text="Competition" />
        </div>

        {/* title */}
        <h2 className="mt-[18px] text-center text-[44px] leading-[56px] font-bold text-[#1F2937]">
          Coding Creativity Competition
        </h2>

        {/* subtitle */}
        <p className="mt-[10px] text-center text-[14px] leading-[22px] text-[#7A8A9A]">
          Where creativity, AI, and innovation meet. Create the next viral one.
        </p>

        {/* 4 idea cards */}
        <div className="mt-[34px] flex items-start justify-between">
          {IDEA_CARDS.map((c) => (
            <IdeaCardItem key={c.title} {...c} />
          ))}
        </div>

        {/* AI + Effort */}
        <div className="mt-[48px] text-center">
          <div className="text-[13px] font-semibold text-[#1F2937]">AI + Effort</div>
          <p className="mt-[10px] mx-auto max-w-[720px] text-[12px] leading-[20px] text-[#7A8A9A]">
            AI is a tool, not a teammate. Use it wisely to enhance—not replace—your own creative effort.
          </p>
        </div>

        {/* Division box */}
        <div className="mt-[34px] rounded-[22px] bg-white shadow-[0_12px_28px_rgba(0,0,0,0.06)] px-[70px] py-[36px]">
          <div className="text-center text-[12px] font-semibold text-[#1F2937]">Division</div>

          <div className="mt-[18px] text-center text-[12px] leading-[22px] text-[#6B7280]">
            <div>Middle School [GL 6-8]</div>
            <div>High School [GL 9-12]</div>
            <div>College & Above</div>

            <div className="mt-[16px]">Solo or Team (4 ppl max)</div>
            <div>No experience required.</div>
            <div>Curiosity &gt; Expertise</div>
          </div>
        </div>

        {/* Timeline + Prize big panel */}
        <div className="mt-[34px] rounded-[26px] bg-[#F3FAF3] px-[44px] py-[40px] shadow-[0_12px_28px_rgba(0,0,0,0.06)]">
          <div className="flex items-start justify-between gap-[24px]">
            {/* left column */}
            <div className="flex-1">
              {/* Timeline */}
              <div className="flex items-center gap-[10px] text-[#1F2937] font-semibold">
                <span className="text-[16px]">⏱️</span>
                <span className="text-[14px]">Timeline</span>
              </div>
              <div className="mt-[12px] space-y-[6px] text-[12px] text-[#7A8A9A]">
                <div><span className="font-semibold text-[#6B7280]">12/26</span> – Submission Deadline</div>
                <div><span className="font-semibold text-[#6B7280]">12/30</span> – Winners Announced</div>
                <div><span className="font-semibold text-[#6B7280]">1/1–1/5</span> – Presentations</div>
                <div><span className="font-semibold text-[#6B7280]">1/6</span> – Special Awards</div>
              </div>

              {/* Prize */}
              <div className="mt-[26px] flex items-center gap-[10px] text-[#1F2937] font-semibold">
                <span className="text-[16px]">🏆</span>
                <span className="text-[14px]">Prize</span>
              </div>
              <div className="mt-[12px] space-y-[6px] text-[12px] text-[#7A8A9A]">
                <div>1st Place: <span className="font-semibold text-[#6B7280]">$500</span></div>
                <div>2nd Place: <span className="font-semibold text-[#6B7280]">$200</span></div>
                <div>3rd Place: <span className="font-semibold text-[#6B7280]">$100</span></div>
              </div>

              <p className="mt-[18px] text-[11px] leading-[18px] text-[#7A8A9A]">
                Top winners receive: Spotlight features, expert feedback, and a showcase for educators & tech professionals.
              </p>
            </div>

            {/* right QR */}
            <div className="w-[210px] flex-shrink-0 flex flex-col items-center">
              <div className="h-[120px] w-[120px] rounded-[10px] bg-white flex items-center justify-center shadow-[0_10px_24px_rgba(0,0,0,0.06)]">
                <Image
                  src="/programming/qrcode.png"
                  alt="Participate Now QR"
                  width={96}
                  height={96}
                  className="h-[96px] w-[96px]"
                />
              </div>
              <div className="mt-[10px] text-[10px] text-[#6B7280]">Participate Now</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-[34px] flex justify-center">
          <button
            className="
              h-[44px] px-[34px]
              rounded-[999px]
              bg-[#2AAED6]
              text-white text-[13px] font-semibold
              shadow-[0_10px_22px_rgba(42,174,214,0.25)]
              hover:translate-y-[-1px] hover:shadow-[0_14px_26px_rgba(42,174,214,0.28)]
              transition
              inline-flex items-center gap-[10px]
            "
          >
            Participate Now <span className="text-[16px] leading-[16px]">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}