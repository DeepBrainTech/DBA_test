const express = require('express');
const multer  = require('multer');
const router  = express.Router();
const pool    = require('../db');
const { sendMail } = require('../email');

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: (_req, file, cb) => {
    const allowed = ['application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    cb(null, allowed.includes(file.mimetype));
  },
});

const REQUIRED_FIELDS = [
  'full_name', 'email', 'phone', 'location',
  'subjects', 'curriculum_experience', 'teaching_format', 'about',
];

router.post('/', upload.single('cv_file'), async (req, res) => {
  const body = req.body;
  const file = req.file;

  const missing = REQUIRED_FIELDS.filter((f) => !body[f]?.toString().trim());
  if (missing.length > 0) {
    return res.status(400).json({ error: `Missing required fields: ${missing.join(', ')}` });
  }

  if (!file && !body.cv_link?.trim()) {
    return res.status(400).json({ error: 'Please provide a CV / Resume (upload or link).' });
  }

  const {
    full_name, email, phone, location, subjects, curriculum_experience,
    teaching_format, years_experience, education_background, cv_link, about,
  } = body;

  const cvLink     = file ? null : (cv_link || null);
  const cvFileB64  = file ? file.buffer.toString('base64') : null;
  const cvFileName = file ? file.originalname : null;

  try {
    await pool.query(
      `INSERT INTO tutor_applications
         (full_name, email, phone, location, subjects, curriculum_experience,
          teaching_format, years_experience, education_background,
          cv_link, cv_file_base64, cv_file_name, about)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13)`,
      [
        full_name, email, phone, location, subjects, curriculum_experience,
        teaching_format, years_experience || null, education_background || null,
        cvLink, cvFileB64, cvFileName, about,
      ]
    );

    // Confirmation email to tutor
    await sendMail({
      to: email,
      subject: 'Your Application — DeepBrain Academy',
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;color:#1a2e4a">
          <div style="background:#274777;padding:28px 32px;border-radius:12px 12px 0 0">
            <h1 style="color:#fff;margin:0;font-size:22px">DeepBrain Academy</h1>
          </div>
          <div style="padding:32px;background:#f8fbff;border-radius:0 0 12px 12px;border:1px solid #dde8f5">
            <h2 style="color:#274777;margin-top:0">Thank you for applying, ${full_name}!</h2>
            <p style="color:#4a5e7a;line-height:1.7">
              We've received your application to join the DeepBrain Academy tutor network.
              Our academic team reviews every application carefully and will follow up
              via email within <strong>3–5 business days</strong>.
            </p>
            <div style="background:#fff;border:1px solid #dde8f5;border-radius:10px;padding:20px 24px;margin:24px 0">
              <p style="margin:0 0 8px;font-weight:bold;color:#274777">Application Summary</p>
              <table style="width:100%;border-collapse:collapse;font-size:14px;color:#4a5e7a">
                <tr><td style="padding:6px 0;width:40%"><strong>Subjects</strong></td><td>${subjects}</td></tr>
                <tr><td style="padding:6px 0"><strong>Teaching Format</strong></td><td>${teaching_format}</td></tr>
                <tr><td style="padding:6px 0"><strong>Location</strong></td><td>${location}</td></tr>
                ${years_experience ? `<tr><td style="padding:6px 0"><strong>Experience</strong></td><td>${years_experience}</td></tr>` : ''}
                <tr><td style="padding:6px 0"><strong>CV / Resume</strong></td><td>${cvFileName || cvLink || 'Provided'}</td></tr>
              </table>
            </div>
            <p style="color:#4a5e7a;line-height:1.7">
              Questions? Reach us at
              <a href="mailto:info@deepbrainacademy.org" style="color:#274777">info@deepbrainacademy.org</a>
              or <strong>914-488-4460</strong>.
            </p>
            <p style="color:#8a9ab5;font-size:13px;margin-top:32px">— The DeepBrain Academy Team</p>
          </div>
        </div>
      `,
    });

    // Notification email to admin
    await sendMail({
      to: process.env.ADMIN_EMAIL,
      subject: `New Tutor Application: ${full_name} (${subjects})`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;color:#1a2e4a">
          <div style="background:#274777;padding:20px 24px;border-radius:12px 12px 0 0">
            <h2 style="color:#fff;margin:0;font-size:18px">New Tutor Application</h2>
          </div>
          <div style="padding:24px;background:#f8fbff;border:1px solid #dde8f5;border-radius:0 0 12px 12px">
            <table style="width:100%;border-collapse:collapse;font-size:14px;color:#2c4060">
              <tr style="border-bottom:1px solid #eee"><td style="padding:10px 0;width:38%"><strong>Full Name</strong></td><td>${full_name}</td></tr>
              <tr style="border-bottom:1px solid #eee"><td style="padding:10px 0"><strong>Email</strong></td><td><a href="mailto:${email}">${email}</a></td></tr>
              <tr style="border-bottom:1px solid #eee"><td style="padding:10px 0"><strong>Phone</strong></td><td>${phone}</td></tr>
              <tr style="border-bottom:1px solid #eee"><td style="padding:10px 0"><strong>Location</strong></td><td>${location}</td></tr>
              <tr style="border-bottom:1px solid #eee"><td style="padding:10px 0"><strong>Subjects</strong></td><td>${subjects}</td></tr>
              <tr style="border-bottom:1px solid #eee"><td style="padding:10px 0"><strong>Curriculum</strong></td><td>${curriculum_experience}</td></tr>
              <tr style="border-bottom:1px solid #eee"><td style="padding:10px 0"><strong>Format</strong></td><td>${teaching_format}</td></tr>
              <tr style="border-bottom:1px solid #eee"><td style="padding:10px 0"><strong>Experience</strong></td><td>${years_experience || '—'}</td></tr>
              <tr style="border-bottom:1px solid #eee"><td style="padding:10px 0"><strong>Education</strong></td><td>${education_background || '—'}</td></tr>
              <tr style="border-bottom:1px solid #eee"><td style="padding:10px 0"><strong>CV / Resume</strong></td><td>${cvFileName ? `File: ${cvFileName}` : (cvLink || '—')}</td></tr>
              <tr><td style="padding:10px 0;vertical-align:top"><strong>About</strong></td><td style="line-height:1.6">${about}</td></tr>
            </table>
          </div>
        </div>
      `,
    });

    res.status(201).json({
      message: 'Your application has been received. Our team will review it and contact you shortly!',
    });
  } catch (err) {
    console.error('tutor-applications error:', err);
    res.status(500).json({ error: 'Server error. Please try again later.' });
  }
});

module.exports = router;
