const express = require('express');
const router  = express.Router();
const pool    = require('../db');
const { sendMail } = require('../email');

const REQUIRED_FIELDS = ['name', 'email', 'phone', 'grade', 'subject', 'learning_goal', 'preferred_format'];

router.post('/', async (req, res) => {
  const missing = REQUIRED_FIELDS.filter((f) => !req.body[f]?.toString().trim());
  if (missing.length > 0) {
    return res.status(400).json({ error: `Missing required fields: ${missing.join(', ')}` });
  }

  const { name, email, phone, grade, subject, learning_goal, preferred_format, preferred_schedule, notes } = req.body;

  try {
    await pool.query(
      `INSERT INTO student_tutor_requests
         (name, email, phone, grade, subject, learning_goal, preferred_format, preferred_schedule, notes)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)`,
      [name, email, phone, grade, subject, learning_goal, preferred_format, preferred_schedule || null, notes || null]
    );

    // Confirmation email to student/parent
    await sendMail({
      to: email,
      subject: 'Your Tutoring Request — DeepBrain Academy',
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;color:#1a2e4a">
          <div style="background:#274777;padding:28px 32px;border-radius:12px 12px 0 0">
            <h1 style="color:#fff;margin:0;font-size:22px">DeepBrain Academy</h1>
          </div>
          <div style="padding:32px;background:#f8fbff;border-radius:0 0 12px 12px;border:1px solid #dde8f5">
            <h2 style="color:#274777;margin-top:0">We've received your request, ${name}!</h2>
            <p style="color:#4a5e7a;line-height:1.7">
              Thank you for reaching out to DeepBrain Academy. Our team will review your request
              and get back to you within <strong>24 hours</strong>.
            </p>
            <div style="background:#fff;border:1px solid #dde8f5;border-radius:10px;padding:20px 24px;margin:24px 0">
              <p style="margin:0 0 8px;font-weight:bold;color:#274777">Your Request Summary</p>
              <table style="width:100%;border-collapse:collapse;font-size:14px;color:#4a5e7a">
                <tr><td style="padding:6px 0;width:40%"><strong>Student Grade</strong></td><td>${grade}</td></tr>
                <tr><td style="padding:6px 0"><strong>Subject</strong></td><td>${subject}</td></tr>
                <tr><td style="padding:6px 0"><strong>Learning Goal</strong></td><td>${learning_goal}</td></tr>
                <tr><td style="padding:6px 0"><strong>Format</strong></td><td>${preferred_format}</td></tr>
                ${preferred_schedule ? `<tr><td style="padding:6px 0"><strong>Schedule</strong></td><td>${preferred_schedule}</td></tr>` : ''}
              </table>
            </div>
            <p style="color:#4a5e7a;line-height:1.7">
              If you have any questions in the meantime, feel free to reach us at
              <a href="mailto:info@deepbrainacademy.org" style="color:#274777">info@deepbrainacademy.org</a>
              or call <strong>914-488-4460</strong>.
            </p>
            <p style="color:#8a9ab5;font-size:13px;margin-top:32px">— The DeepBrain Academy Team</p>
          </div>
        </div>
      `,
    });

    // Notification email to admin
    await sendMail({
      to: process.env.ADMIN_EMAIL,
      subject: `New Tutoring Request: ${name} (${subject})`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;color:#1a2e4a">
          <div style="background:#274777;padding:20px 24px;border-radius:12px 12px 0 0">
            <h2 style="color:#fff;margin:0;font-size:18px">New Tutoring Request</h2>
          </div>
          <div style="padding:24px;background:#f8fbff;border:1px solid #dde8f5;border-radius:0 0 12px 12px">
            <table style="width:100%;border-collapse:collapse;font-size:14px;color:#2c4060">
              <tr style="border-bottom:1px solid #eee"><td style="padding:10px 0;width:38%"><strong>Name</strong></td><td>${name}</td></tr>
              <tr style="border-bottom:1px solid #eee"><td style="padding:10px 0"><strong>Email</strong></td><td><a href="mailto:${email}">${email}</a></td></tr>
              <tr style="border-bottom:1px solid #eee"><td style="padding:10px 0"><strong>Phone</strong></td><td>${phone}</td></tr>
              <tr style="border-bottom:1px solid #eee"><td style="padding:10px 0"><strong>Grade</strong></td><td>${grade}</td></tr>
              <tr style="border-bottom:1px solid #eee"><td style="padding:10px 0"><strong>Subject</strong></td><td>${subject}</td></tr>
              <tr style="border-bottom:1px solid #eee"><td style="padding:10px 0"><strong>Learning Goal</strong></td><td>${learning_goal}</td></tr>
              <tr style="border-bottom:1px solid #eee"><td style="padding:10px 0"><strong>Format</strong></td><td>${preferred_format}</td></tr>
              <tr style="border-bottom:1px solid #eee"><td style="padding:10px 0"><strong>Schedule</strong></td><td>${preferred_schedule || '—'}</td></tr>
              <tr><td style="padding:10px 0"><strong>Notes</strong></td><td>${notes || '—'}</td></tr>
            </table>
          </div>
        </div>
      `,
    });

    res.status(201).json({ message: 'Your request has been submitted. We will be in touch within 24 hours!' });
  } catch (err) {
    console.error('tutor-requests error:', err);
    res.status(500).json({ error: 'Server error. Please try again later.' });
  }
});

module.exports = router;
