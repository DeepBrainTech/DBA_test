'use client';

import { useState, FormEvent } from 'react';

const API_URL = process.env.NEXT_PUBLIC_API_URL || '';

interface FormState {
  name: string;
  email: string;
  phone: string;
  grade: string;
  subject: string;
  learning_goal: string;
  preferred_format: string;
  preferred_schedule: string;
  notes: string;
}

const INITIAL: FormState = {
  name: '', email: '', phone: '', grade: '', subject: '',
  learning_goal: '', preferred_format: '', preferred_schedule: '', notes: '',
};

const GRADES = [
  'Kindergarten', 'Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5',
  'Grade 6', 'Grade 7', 'Grade 8', 'Grade 9 (Freshman)',
  'Grade 10 (Sophomore)', 'Grade 11 (Junior)', 'Grade 12 (Senior)',
  'College / Adult',
];

const SUBJECTS = [
  'Math (Elementary)', 'Pre-Algebra / Algebra', 'Geometry', 'Pre-Calculus / Calculus',
  'AP Math / Competition Math', 'Physics', 'Chemistry', 'Biology',
  'SAT / ACT Prep', 'English / Writing', 'Language Learning', 'Computer Science',
  'Other',
];

export default function StudentForm() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const set = (field: keyof FormState, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setSuccess('');
    setError('');

    try {
      const res = await fetch(`${API_URL}/api/tutor-requests`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Submission failed.');
      setSuccess(data.message);
      setForm(INITIAL);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="student-form" className="w-full bg-[#F0F6FF] py-20 lg:py-28 scroll-mt-8">
      <div className="mx-auto max-w-[800px] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#274777]/10 mb-4">
            <span className="text-[#274777] font-semibold text-sm">For Students & Parents</span>
          </div>
          <h2 className="font-outfit text-3xl sm:text-4xl font-bold text-[#1a2e4a]">
            Request a Tutor
          </h2>
          <p className="mt-3 text-[#5a7090] text-lg">
            Fill in the details below and our team will reach out within 24 hours.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-3xl shadow-[0_12px_48px_rgba(39,71,119,0.10)] p-8 sm:p-10 flex flex-col gap-6"
        >
          {/* Row 1 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Field label="Parent / Student Name *">
              <input
                type="text"
                required
                placeholder="e.g. Sarah Johnson"
                value={form.name}
                onChange={(e) => set('name', e.target.value)}
                className={inputCls}
              />
            </Field>
            <Field label="Email Address *">
              <input
                type="email"
                required
                placeholder="you@example.com"
                value={form.email}
                onChange={(e) => set('email', e.target.value)}
                className={inputCls}
              />
            </Field>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Field label="Phone Number *">
              <input
                type="tel"
                required
                placeholder="+1 (555) 000-0000"
                value={form.phone}
                onChange={(e) => set('phone', e.target.value)}
                className={inputCls}
              />
            </Field>
            <Field label="Student Grade *">
              <select
                required
                value={form.grade}
                onChange={(e) => set('grade', e.target.value)}
                className={selectCls}
              >
                <option value="">Select grade…</option>
                {GRADES.map((g) => <option key={g} value={g}>{g}</option>)}
              </select>
            </Field>
          </div>

          {/* Row 3 */}
          <Field label="Subject of Interest *">
            <select
              required
              value={form.subject}
              onChange={(e) => set('subject', e.target.value)}
              className={selectCls}
            >
              <option value="">Select subject…</option>
              {SUBJECTS.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
          </Field>

          <Field label="Learning Goal *">
            <textarea
              required
              rows={3}
              placeholder="e.g. Improve algebra grade from C to A, prepare for AMC 10, build confidence in reading..."
              value={form.learning_goal}
              onChange={(e) => set('learning_goal', e.target.value)}
              className={textareaCls}
            />
          </Field>

          {/* Row 4 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Field label="Preferred Format *">
              <div className="flex gap-3">
                {(['Online', 'In-person', 'Either'] as const).map((opt) => (
                  <label key={opt} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="preferred_format"
                      value={opt}
                      checked={form.preferred_format === opt}
                      onChange={() => set('preferred_format', opt)}
                      className="accent-[#274777] w-4 h-4"
                    />
                    <span className="text-[#2c4060] text-sm">{opt}</span>
                  </label>
                ))}
              </div>
            </Field>
            <Field label="Preferred Schedule">
              <input
                type="text"
                placeholder="e.g. Weekday evenings, Saturdays"
                value={form.preferred_schedule}
                onChange={(e) => set('preferred_schedule', e.target.value)}
                className={inputCls}
              />
            </Field>
          </div>

          <Field label="Notes / Current Challenges">
            <textarea
              rows={3}
              placeholder="Anything helpful for us to know about the student's current challenges or situation..."
              value={form.notes}
              onChange={(e) => set('notes', e.target.value)}
              className={textareaCls}
            />
          </Field>

          {/* Feedback */}
          {success && (
            <div className="flex items-start gap-3 p-4 bg-green-50 border border-green-200 rounded-xl text-green-800 text-sm">
              <svg className="w-5 h-5 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {success}
            </div>
          )}
          {error && (
            <div className="flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm">
              <svg className="w-5 h-5 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 bg-[#274777] hover:bg-[#1e3a6e] disabled:bg-[#274777]/60 text-white font-semibold text-lg rounded-2xl transition-all duration-200 flex items-center justify-center gap-3 shadow-[0_6px_24px_rgba(39,71,119,0.25)]"
          >
            {loading ? (
              <>
                <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                </svg>
                Submitting…
              </>
            ) : (
              'Book a Free Consultation'
            )}
          </button>

          <p className="text-center text-[#8a9ab5] text-sm">
            We respect your privacy. Your information will only be used to connect you with a DBA tutor.
          </p>
        </form>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[#2c4060] text-sm font-semibold">{label}</label>
      {children}
    </div>
  );
}

const inputCls =
  'w-full px-4 py-3 rounded-xl border border-[#d0dcea] bg-[#f8fbff] text-[#1a2e4a] placeholder:text-[#a0b0c8] text-base focus:outline-none focus:ring-2 focus:ring-[#274777]/30 focus:border-[#274777] transition';

const selectCls =
  'w-full px-4 py-3 rounded-xl border border-[#d0dcea] bg-[#f8fbff] text-[#1a2e4a] text-base focus:outline-none focus:ring-2 focus:ring-[#274777]/30 focus:border-[#274777] transition appearance-none';

const textareaCls =
  'w-full px-4 py-3 rounded-xl border border-[#d0dcea] bg-[#f8fbff] text-[#1a2e4a] placeholder:text-[#a0b0c8] text-base focus:outline-none focus:ring-2 focus:ring-[#274777]/30 focus:border-[#274777] transition resize-none';
