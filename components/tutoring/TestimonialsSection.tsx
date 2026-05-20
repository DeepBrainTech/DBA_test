const testimonials = [
  {
    name: 'Emma L.',
    tag: 'SAT Prep · Grade 11',
    score: '1180 → 1490',
    label: 'SAT Score',
    quote:
      'My DBA tutor pinpointed exactly where I was losing points — reading comprehension and time management. After 3 months of weekly sessions, I improved over 300 points. I got into my first-choice school.',
  },
  {
    name: 'Parent of Michael T.',
    tag: 'AP Calculus · Grade 12',
    score: 'C+ → A−',
    label: 'AP Calculus Grade',
    quote:
      'My son had been struggling all semester. Within 6 weeks of 1-on-1 sessions, his grade turned around completely. The tutor didn\'t just drill problems — he helped Michael actually understand the concepts.',
  },
  {
    name: 'Sophia W.',
    tag: 'Math Competition · Grade 9',
    score: 'Top 5%',
    label: 'AMC 10 Result',
    quote:
      'I went from barely passing practice AMC tests to placing in the top 5% nationally. The structured prep and personalized problem sets made a huge difference. I\'m now preparing for AIME.',
  },
  {
    name: 'Parent of Jason K.',
    tag: 'Reading & Writing · Grade 5',
    score: '+2 Grade Levels',
    label: 'Reading Level',
    quote:
      'Our son was falling behind in reading comprehension. After 8 weeks with his DBA tutor, his reading level jumped by two full grade levels. His confidence in class has completely changed.',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="w-full bg-[#F0F6FF] py-20 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-[#274777] font-semibold text-sm tracking-widest uppercase mb-3">
            Student Results
          </p>
          <h2 className="font-outfit text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a2e4a]">
            Real Students. Real Progress.
          </h2>
          <p className="mt-4 text-[#5a7090] text-lg max-w-[520px] mx-auto">
            Here's what families have experienced with DeepBrain Academy tutors.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl border border-[#e8eef6] p-7 shadow-[0_4px_24px_rgba(39,71,119,0.06)] flex flex-col gap-5"
            >
              {/* Score badge */}
              <div className="flex items-center gap-4">
                <div className="flex flex-col items-center justify-center bg-[#274777] text-white rounded-xl px-4 py-3 min-w-[90px]">
                  <span className="font-outfit font-bold text-lg leading-tight">{t.score}</span>
                  <span className="text-[10px] text-white/70 mt-0.5">{t.label}</span>
                </div>
                <div>
                  <p className="font-semibold text-[#1a2e4a] text-base">{t.name}</p>
                  <p className="text-[#5a7090] text-sm">{t.tag}</p>
                </div>
              </div>

              {/* Quote */}
              <p className="text-[#4a5e7a] text-base leading-relaxed">
                "{t.quote}"
              </p>

              {/* Stars */}
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-[#F5A623]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
