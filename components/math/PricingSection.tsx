'use client';

export default function PricingSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full mb-6">
            <span className="text-2xl">💎</span>
            <span className="text-blue-700 font-medium">Pricing</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-2">Winter and Spring Program</h2>
          <p className="text-gray-600">2025-2026 School Year</p>
        </div>

        <div className="space-y-12">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">SAT/ACT Math Programs</h3>
            
            <div className="bg-gray-100 rounded-2xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="text-left py-6 px-8 font-bold text-gray-800">Subject</th>
                      <th className="text-left py-6 px-8 font-bold text-gray-800">Sessions</th>
                      <th className="text-center py-6 px-8 font-bold text-purple-600">Early Bird Tuition<br/><span className="text-sm text-purple-500">(Before 1/16)</span></th>
                      <th className="text-left py-6 px-8 font-bold text-gray-800">Hourly Rate</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-300">
                    <tr className="bg-white hover:bg-gray-50 transition-colors">
                      <td className="py-6 px-8 text-gray-900 font-medium">SAT Math Score<br/>Breakthrough Intensive</td>
                      <td className="py-6 px-8 text-gray-700">14h intensive program<br/>32h extended program</td>
                      <td className="py-6 px-8 text-center">
                        <div className="text-purple-600 font-semibold text-lg">$850</div>
                        <div className="text-purple-600 font-semibold text-lg">$1820</div>
                      </td>
                      <td className="py-6 px-8 text-gray-700">$1020<br/>$2024</td>
                    </tr>
                    <tr className="bg-white hover:bg-gray-50 transition-colors">
                      <td className="py-6 px-8 text-gray-900 font-medium">ACT Math Score<br/>Breakthrough Intensive</td>
                      <td className="py-6 px-8 text-gray-700">14h intensive program<br/>32h extended program</td>
                      <td className="py-6 px-8 text-center">
                        <div className="text-purple-600 font-semibold text-lg">$850</div>
                        <div className="text-purple-600 font-semibold text-lg">$1820</div>
                      </td>
                      <td className="py-6 px-8 text-gray-700">$1020<br/>$2024</td>
                    </tr>
                    <tr className="bg-white hover:bg-gray-50 transition-colors">
                      <td className="py-6 px-8 text-gray-900 font-medium">SAT/ACT Math 1-on-1<br/>Elite Tutoring</td>
                      <td className="py-6 px-8 text-gray-700">Flexible Scheduling</td>
                      <td className="py-6 px-8 text-center text-purple-600 font-semibold text-lg">Call for details</td>
                      <td className="py-6 px-8 text-gray-700">$100-215/h</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
