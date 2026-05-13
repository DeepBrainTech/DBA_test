require('dotenv').config();
const pool = require('./db');

async function migrate() {
  const client = await pool.connect();
  try {
    await client.query(`
      CREATE TABLE IF NOT EXISTS student_tutor_requests (
        id          SERIAL PRIMARY KEY,
        name        TEXT    NOT NULL,
        email       TEXT    NOT NULL,
        phone       TEXT    NOT NULL,
        grade       TEXT    NOT NULL,
        subject     TEXT    NOT NULL,
        learning_goal       TEXT NOT NULL,
        preferred_format    TEXT NOT NULL,
        preferred_schedule  TEXT,
        notes               TEXT,
        status      TEXT    NOT NULL DEFAULT 'new',
        created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
      );
    `);

    await client.query(`
      CREATE TABLE IF NOT EXISTS tutor_applications (
        id                   SERIAL PRIMARY KEY,
        full_name            TEXT NOT NULL,
        email                TEXT NOT NULL,
        phone                TEXT NOT NULL,
        location             TEXT NOT NULL,
        subjects             TEXT NOT NULL,
        curriculum_experience TEXT NOT NULL,
        teaching_format      TEXT NOT NULL,
        years_experience     TEXT,
        education_background TEXT,
        cv_link              TEXT,
        cv_file_base64       TEXT,
        cv_file_name         TEXT,
        about                TEXT NOT NULL,
        status               TEXT NOT NULL DEFAULT 'new',
        created_at           TIMESTAMPTZ NOT NULL DEFAULT NOW()
      );
    `);

    console.log('Migration complete.');
  } finally {
    client.release();
    await pool.end();
  }
}

migrate().catch((err) => {
  console.error('Migration failed:', err);
  process.exit(1);
});
