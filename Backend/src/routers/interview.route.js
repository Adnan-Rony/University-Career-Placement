import express from 'express';
import { getEmployerInterviews, scheduleInterview, updateInterviewStatus } from '../controllers/interviewController.js';
import { verifyToken } from '../middlewares/VerifyToken.js';
import { requireEmployer } from '../middlewares/requireEmployer.js';

const router = express.Router();

router.post('/schedule', verifyToken, scheduleInterview);
router.get('/employer', verifyToken,requireEmployer, getEmployerInterviews);
router.put('/:id/status', verifyToken, updateInterviewStatus);


export default router;