'use client';

import React from 'react';

export default function ScheduleConsultation() {
  const [formData, setFormData] = React.useState({
    studentName: '',
    targetCountry: '',
    applicationStage: '',
    contactNumber: '',
    wechat: ''
  });

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const googleFormUrl = 'https://forms.gle/2mMzKoQkXHa2CVHe6';
    window.open(googleFormUrl, '_blank');
  };

  return (
    <section className="py-24 bg-gradient-to-br from-green-50 via-white to-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full mb-6">
              <span className="text-2xl">✨</span>
              <span className="text-green-700 font-semibold">Ready to Get Started?</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Schedule Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-600">Free Consultation</span>
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Our expert advisors are ready to discuss your child's learning goals and create a personalized learning plan tailored to their needs.
            </p>

            <div className="space-y-4 mb-10">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">24-Hour Response</p>
                  <p className="text-sm text-gray-600">We'll contact you within 24 hours</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Personalized Plan</p>
                  <p className="text-sm text-gray-600">Customized learning strategy for your child</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">100% Confidential</p>
                  <p className="text-sm text-gray-600">Your information is secure and private</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white rounded-xl p-4 border border-gray-200">
                <div className="text-2xl font-bold text-green-600">1.2K+</div>
                <div className="text-xs text-gray-600 mt-1">Happy Families</div>
              </div>
              <div className="bg-white rounded-xl p-4 border border-gray-200">
                <div className="text-2xl font-bold text-green-600">100%</div>
                <div className="text-xs text-gray-600 mt-1">Satisfaction</div>
              </div>
              <div className="bg-white rounded-xl p-4 border border-gray-200">
                <div className="text-2xl font-bold text-green-600">15+</div>
                <div className="text-xs text-gray-600 mt-1">Years Experience</div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white rounded-3xl shadow-2xl p-10 border border-gray-100 sticky top-20">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Book Your Free Trial</h3>
                <p className="text-gray-600 text-sm">No credit card required. Just one click away.</p>
              </div>

              <form className="space-y-6" onSubmit={handleFormSubmit}>
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl font-bold text-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-2xl transform hover:scale-105 active:scale-95"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                  </svg>
                  Book Free Trial Now
                </button>

                <div className="space-y-3 pt-4 border-t border-gray-200">
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span className="text-sm text-gray-700">Free assessment included</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span className="text-sm text-gray-700">Expert guidance included</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span className="text-sm text-gray-700">Your data is secure</span>
                  </div>
                </div>
              </form>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <p className="text-xs text-gray-500 text-center mb-4">Trusted by families worldwide</p>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-yellow-400">★★★★★</span>
                  <span className="text-sm text-gray-600">4.9/5 from 500+ reviews</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
