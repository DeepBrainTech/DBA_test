const express = require('express');
const router = express.Router();
const pool = require('../db');

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
    res.status(201).json({ message: 'Your request has been submitted. We will be in touch within 24 hours!' });
  } catch (err) {
    console.error('tutor-requests error:', err);
    res.status(500).json({ error: 'Server error. Please try again later.' });
  }
});

module.exports = router;
