'use client';

export default function LimitedTimeOffer() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-3xl shadow-lg p-10 text-center border-4 border-blue-200">
          <div className="flex items-center justify-center gap-2 mb-6">
            <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <h3 className="text-3xl font-bold text-gray-900">Limited Time Offer!</h3>
          </div>
          <p className="text-gray-700 text-lg mb-3">5% off your second course (any course)</p>
          <p className="text-gray-700 text-lg mb-8">5% additional discount for onsite registration</p>
          <button className="px-12 py-3 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition-colors flex items-center justify-center gap-2 mx-auto shadow-md">
            Enroll Now
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
