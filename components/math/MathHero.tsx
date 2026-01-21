'use client';

import Image from 'next/image';

export default function MathHero() {
  const cards = [
    {
      icon: '📚',
      title: 'Comprehensive Resources',
      href: '/math/resources',
    },
    {
      icon: '🏛️',
      title: 'Top Universities',
      href: '/math/universities',
    },
    {
      icon: '⭐',
      title: 'Ivy League Faculty',
      href: '/math/faculty',
    },
    {
      icon: '📊',
      title: 'Admissions Pathways',
      href: '/math/admissions',
    },
  ];

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/math/math_background.jpg"
          alt="Math background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0">
          <Image
            src="/math/background.png"
            alt="Blurred overlay"
            fill
            className="object-cover blur-sm opacity-60"
          />
        </div>
        <div className="absolute inset-0 bg-white/10"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 pt-[106px]">
        <div className="text-center mb-12">
          <h1 className="text-8xl font-bold text-black mb-4">Math</h1>
          <p className="text-3xl font-bold text-black">Small Board, Big Vision.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl w-full mt-16">
          {cards.map((card, index) => (
            <div
              key={index}
              className="group"
            >
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 hover:bg-white transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl transform hover:scale-105">
                <div className="text-5xl mb-4">{card.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                  {card.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
