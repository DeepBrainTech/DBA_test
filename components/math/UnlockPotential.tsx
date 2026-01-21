'use client';

export default function UnlockPotential() {
  return (
    <section className="py-24 bg-gradient-to-b from-green-50 via-green-100 to-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 bg-green-200 px-4 py-2 rounded-full mb-6">
            <span className="text-2xl">✨</span>
            <span className="text-green-700 font-medium">Limited offer</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Unlock Your Child's Math Potential
          </h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            Don't let your child's talent go unnoticed. Join us to give your child a competitive edge in mathematics!
          </p>

          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-green-300 rounded flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/>
                </svg>
              </div>
              <span className="text-gray-800 font-medium">Free Assessment Test</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-green-300 rounded flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/>
                </svg>
              </div>
              <span className="text-gray-800 font-medium">Free Trial Class</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-green-300 rounded flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/>
                </svg>
              </div>
              <span className="text-gray-800 font-medium">Personalized Learning Plan</span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6 mb-10">
            <div className="flex flex-col items-center text-center">
              <span className="text-3xl mb-2">🔒</span>
              <span className="text-gray-800 text-sm font-medium">Secure Information</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-3xl mb-2">⚡</span>
              <span className="text-gray-800 text-sm font-medium">Fast Response Time</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-3xl mb-2">📚</span>
              <span className="text-gray-800 text-sm font-medium">Risk-free Guarantee</span>
            </div>
          </div>

          <div className="bg-green-200/50 rounded-2xl p-8 backdrop-blur-sm">
            <div className="flex items-start gap-4">
              <span className="text-5xl flex-shrink-0">🧠</span>
              <p className="text-gray-800 text-base italic pt-1 leading-relaxed">
                Every great mathematician started with a simple problem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
