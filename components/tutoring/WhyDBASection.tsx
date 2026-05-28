const cards = [
  {
    icon: (
      <svg className="w-8 h-8 text-[#274777]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
        />
      </svg>
    ),
    title: 'Carefully Reviewed Tutors',
    description:
      'Every instructor in our network goes through a structured review process. We assess subject expertise, teaching communication, and commitment to student growth before approving anyone to tutor.',
  },
  {
    icon: (
      <svg className="w-8 h-8 text-[#274777]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
    title: 'Exceptional Teaching Quality',
    description:
      'Every instructor in our network is held to a high standard. We look for strong subject mastery, clear communication, and a genuine ability to help students build confidence and achieve real results.',
  },
  {
    icon: (
      <svg className="w-8 h-8 text-[#274777]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    title: 'Flexible Online & In-Person Options',
    description:
      'Whether your family prefers the convenience of virtual sessions or the engagement of in-person meetings, we support both formats — with tutors available across time zones and local to the Tenafly, NJ area.',
  },
];

export default function WhyDBASection() {
  return (
    <section className="w-full bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-[#5DB8FF] font-semibold text-sm tracking-widest uppercase mb-3">
            Why Choose DBA
          </p>
          <h2 className="font-outfit text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a2e4a] leading-tight">
            The DBA Difference
          </h2>
          <p className="mt-4 text-[#5a7090] text-lg max-w-[560px] mx-auto">
            A curated experience, not a marketplace. We prioritize quality and fit at every step.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card) => (
            <div
              key={card.title}
              className="flex flex-col gap-5 p-8 rounded-2xl border border-[#e8eef6] bg-white shadow-[0_4px_24px_rgba(39,71,119,0.06)] hover:shadow-[0_8px_40px_rgba(39,71,119,0.12)] transition-shadow duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-[#EEF4FF] flex items-center justify-center shrink-0">
                {card.icon}
              </div>
              <div>
                <h3 className="font-outfit text-xl font-semibold text-[#1a2e4a] mb-2">
                  {card.title}
                </h3>
                <p className="text-[#5a7090] text-base leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
