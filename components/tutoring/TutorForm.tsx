'use client';

import { useState, FormEvent, useRef } from 'react';

const API_URL = process.env.NEXT_PUBLIC_API_URL || '';

interface FormState {
  full_name: string;
  email: string;
  phone: string;
  location: string;
  subjects: string;
  curriculum_experience: string;
  teaching_format: string;
  years_experience: string;
  education_background: string;
  about: string;
}

const INITIAL: FormState = {
  full_name: '', email: '', phone: '', location: '', subjects: '',
  curriculum_experience: '', teaching_format: '', years_experience: '',
  education_background: '', about: '',
};

export default function TutorForm() {
  const [form, setForm]       = useState<FormState>(INITIAL);
  const [cvMode, setCvMode]   = useState<'upload' | 'link'>('link');
  const [cvFile, setCvFile]   = useState<File | null>(null);
  const [cvLink, setCvLink]   = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError]     = useState('');
  const fileInputRef          = useRef<HTMLInputElement>(null);

  const set = (field: keyof FormState, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0] ?? null;
    setCvFile(file);
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    // CV validation: must have either a file or a link
    if (cvMode === 'upload' && !cvFile) {
      setError('Please upload your CV / Resume file.');
      return;
    }
    if (cvMode === 'link' && !cvLink.trim()) {
      setError('Please provide a link to your CV / Resume.');
      return;
    }

    setLoading(true);
    setSuccess('');
    setError('');

    try {
      // Always use FormData so we can attach a file when needed
      const fd = new FormData();
      for (const [key, val] of Object.entries(form)) {
        fd.append(key, val);
      }
      if (cvMode === 'upload' && cvFile) {
        fd.append('cv_file', cvFile);
      } else {
        fd.append('cv_link', cvLink);
      }

      const res = await fetch(`${API_URL}/api/tutor-applications`, {
        method: 'POST',
        body: fd,  // browser sets Content-Type: multipart/form-data automatically
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Submission failed.');
      setSuccess(data.message);
      setForm(INITIAL);
      setCvFile(null);
      setCvLink('');
      if (fileInputRef.current) fileInputRef.current.value = '';
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="tutor-form" className="w-full bg-white py-20 lg:py-28 scroll-mt-8">
      <div className="mx-auto max-w-[800px] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#274777]/10 mb-4">
            <span className="text-[#274777] font-semibold text-sm">For Instructors</span>
          </div>
          <h2 className="font-outfit text-3xl sm:text-4xl font-bold text-[#1a2e4a]">
            Apply as a Tutor
          </h2>
          <p className="mt-3 text-[#5a7090] text-lg">
            Tell us about yourself. Our academic team reviews every application carefully.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-3xl border border-[#e8eef6] shadow-[0_12px_48px_rgba(39,71,119,0.08)] p-8 sm:p-10 flex flex-col gap-6"
        >
          {/* Row 1 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Field label="Full Name *">
              <input type="text" required placeholder="Your full name"
                value={form.full_name} onChange={(e) => set('full_name', e.target.value)}
                className={inputCls} />
            </Field>
            <Field label="Email Address *">
              <input type="email" required placeholder="you@example.com"
                value={form.email} onChange={(e) => set('email', e.target.value)}
                className={inputCls} />
            </Field>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Field label="Phone Number *">
              <input type="tel" required placeholder="+1 (555) 000-0000"
                value={form.phone} onChange={(e) => set('phone', e.target.value)}
                className={inputCls} />
            </Field>
            <Field label="Location / Time Zone *">
              <input type="text" required placeholder="e.g. Tenafly, NJ / EST"
                value={form.location} onChange={(e) => set('location', e.target.value)}
                className={inputCls} />
            </Field>
          </div>

          <Field label="Subjects You Can Teach *">
            <input type="text" required placeholder="e.g. AP Calculus, SAT Math, Physics, Python"
              value={form.subjects} onChange={(e) => set('subjects', e.target.value)}
              className={inputCls} />
          </Field>

          <Field label="Curriculum Experience *">
            <input type="text" required placeholder="e.g. US Common Core, IB, AP, AMC/AIME competition prep"
              value={form.curriculum_experience} onChange={(e) => set('curriculum_experience', e.target.value)}
              className={inputCls} />
          </Field>

          {/* Row 3 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Field label="Teaching Format *">
              <div className="flex gap-4 pt-1">
                {(['Online', 'In-person', 'Both'] as const).map((opt) => (
                  <label key={opt} className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="teaching_format" value={opt}
                      checked={form.teaching_format === opt}
                      onChange={() => set('teaching_format', opt)}
                      className="accent-[#274777] w-4 h-4" />
                    <span className="text-[#2c4060] text-sm">{opt}</span>
                  </label>
                ))}
              </div>
            </Field>
            <Field label="Years of Teaching Experience">
              <select value={form.years_experience}
                onChange={(e) => set('years_experience', e.target.value)}
                className={selectCls}>
                <option value="">Select…</option>
                {['Less than 1 year', '1–2 years', '3–5 years', '6–10 years', '10+ years'].map((y) => (
                  <option key={y} value={y}>{y}</option>
                ))}
              </select>
            </Field>
          </div>

          <Field label="Education Background">
            <input type="text" placeholder="e.g. B.S. Mathematics, MIT; M.Ed. Columbia University"
              value={form.education_background}
              onChange={(e) => set('education_background', e.target.value)}
              className={inputCls} />
          </Field>

          {/* CV / Resume — upload OR link, REQUIRED */}
          <Field label="CV / Resume *">
            {/* Mode toggle */}
            <div className="flex rounded-xl border border-[#d0dcea] overflow-hidden mb-3 w-fit">
              {(['upload', 'link'] as const).map((mode) => (
                <button
                  key={mode}
                  type="button"
                  onClick={() => { setCvMode(mode); setCvFile(null); setCvLink(''); if (fileInputRef.current) fileInputRef.current.value = ''; }}
                  className={`px-5 py-2 text-sm font-semibold transition-colors ${
                    cvMode === mode
                      ? 'bg-[#274777] text-white'
                      : 'bg-[#f8fbff] text-[#5a7090] hover:bg-[#eef4ff]'
                  }`}
                >
                  {mode === 'upload' ? '⬆ Upload File' : '🔗 Paste a Link'}
                </button>
              ))}
            </div>

            {cvMode === 'upload' ? (
              <div>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className="hidden"
                  id="cv-file-input"
                />
                <label
                  htmlFor="cv-file-input"
                  className="flex items-center gap-3 px-4 py-3 rounded-xl border-2 border-dashed border-[#d0dcea] bg-[#f8fbff] cursor-pointer hover:border-[#274777]/50 hover:bg-[#eef4ff] transition group"
                >
                  <svg className="w-5 h-5 text-[#274777] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                  <span className="text-sm text-[#5a7090] group-hover:text-[#274777] transition">
                    {cvFile
                      ? <span className="text-[#274777] font-medium">✓ {cvFile.name}</span>
                      : 'Click to upload PDF, DOC, or DOCX (max 5 MB)'}
                  </span>
                </label>
              </div>
            ) : (
              <input
                type="url"
                placeholder="https://drive.google.com/…  or LinkedIn / Dropbox URL"
                value={cvLink}
                onChange={(e) => setCvLink(e.target.value)}
                className={inputCls}
              />
            )}
          </Field>

          <Field label="About You / Teaching Experience *">
            <textarea required rows={5}
              placeholder="Tell us about your teaching philosophy, memorable student successes, how you adapt to different learners, and why you want to join DBA..."
              value={form.about} onChange={(e) => set('about', e.target.value)}
              className={textareaCls} />
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

          <button type="submit" disabled={loading}
            className="w-full py-4 bg-[#274777] hover:bg-[#1e3a6e] disabled:bg-[#274777]/60 text-white font-semibold text-lg rounded-2xl transition-all duration-200 flex items-center justify-center gap-3 shadow-[0_6px_24px_rgba(39,71,119,0.25)]"
          >
            {loading ? (
              <>
                <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                </svg>
                Submitting Application…
              </>
            ) : 'Submit My Application'}
          </button>

          <p className="text-center text-[#8a9ab5] text-sm">
            All applications are reviewed by our team. We'll follow up via email within 3–5 business days.
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
