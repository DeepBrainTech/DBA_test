'use client';

import Image from 'next/image';

export default function MathArtPlayDay() {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full mb-6">
            <span className="text-2xl">🎨</span>
            <span className="text-green-700 font-medium">Play Day</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Math Art Play Day</h2>
          <p className="text-gray-600 mb-2">Chess × Go × Math × Art × Sudoku</p>
          <p className="text-gray-600">Day Workshop For Young Thinkers</p>
        </div>

        <div className="bg-white rounded-2xl p-10 shadow-lg mb-12 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Sharpen your mind through play!</h3>
          <p className="text-gray-700 text-lg leading-relaxed text-center">
            Join us for a day of strategic games and math/logic puzzles that build focus, creativity, and problem-solving skills - all while having fun with friends.
          </p>
        </div>

        <div className="bg-gray-50 rounded-2xl p-10 mb-8 max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-6">
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <h3 className="text-xl font-bold text-gray-900">Schedule</h3>
          </div>
          <div className="space-y-3 text-gray-700 mb-8">
            <p className="font-semibold text-lg">9:00 AM - 3:30 PM</p>
            <p><strong>2025:</strong> Dec 19, 26-31</p>
            <p><strong>2026:</strong> Jan 2, 19; Feb 16-18; Mar 20; Apr 3, 6-10; May 25; Jun 19, 23-24</p>
          </div>

          <div className="flex items-center gap-2 mb-6">
            <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
            <h3 className="text-xl font-bold text-gray-900">Location</h3>
          </div>
          <div className="space-y-2 text-gray-700 mb-8">
            <p>120 County Rd, Suite 100-101, Tenafly, NJ</p>
            <p>560 Sylvan Avenue, First Floor, Suite 1055, Englewood Cliffs, NJ 07632</p>
          </div>

          <div className="flex items-center gap-4 mb-8">
            <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
              <Image
                src="/math/scan.png"
                alt="WeChat QR Code"
                width={80}
                height={80}
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-sm text-gray-600">Scan to join our</p>
              <p className="font-semibold text-gray-900">WeChat Community</p>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <button className="px-8 py-3 bg-white border-2 border-green-500 text-green-600 rounded-lg font-semibold hover:bg-green-50 transition-colors flex items-center justify-center gap-2">
              Watch Intro Class
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
              </svg>
            </button>
            <button className="px-8 py-3 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition-colors flex items-center justify-center gap-2">
              Register Now
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
