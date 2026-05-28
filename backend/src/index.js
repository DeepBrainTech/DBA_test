require('dotenv').config();
const express = require('express');
const cors = require('cors');

const tutorRequestsRouter = require('./routes/tutorRequests');
const tutorApplicationsRouter = require('./routes/tutorApplications');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({
  origin: process.env.FRONTEND_URL || '*',
  methods: ['GET', 'POST'],
}));
app.use(express.json());

app.get('/health', (_req, res) => res.json({ status: 'ok' }));

app.use('/api/tutor-requests', tutorRequestsRouter);
app.use('/api/tutor-applications', tutorApplicationsRouter);

app.listen(PORT, () => {
  console.log(`DBA backend listening on port ${PORT}`);
});
