const express = require('express');
const multer  = require('multer');
const router  = express.Router();
const pool    = require('../db');

// Store file in memory (up to 5 MB)
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

  // CV must be provided via file OR link
  if (!file && !body.cv_link?.trim()) {
    return res.status(400).json({ error: 'Please provide a CV / Resume (upload or link).' });
  }

  const {
    full_name, email, phone, location, subjects, curriculum_experience,
    teaching_format, years_experience, education_background, cv_link, about,
  } = body;

  const cvLink      = file ? null : (cv_link || null);
  const cvFileB64   = file ? file.buffer.toString('base64') : null;
  const cvFileName  = file ? file.originalname : null;

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
    res.status(201).json({
      message: 'Your application has been received. Our team will review it and contact you shortly!',
    });
  } catch (err) {
    console.error('tutor-applications error:', err);
    res.status(500).json({ error: 'Server error. Please try again later.' });
  }
});

module.exports = router;
