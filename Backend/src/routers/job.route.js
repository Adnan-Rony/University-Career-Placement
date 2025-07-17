
import express from 'express';
import { createJob, deleteJob, getAllJobs, getJobById, getMyJobs, getRecommendedJobs, searchJobs, updateJob } from '../controllers/job.controller.js';
import { verifyToken } from '../middlewares/VerifyToken.js';
import { requireEmployer } from './../middlewares/requireEmployer.js';

const router = express.Router();
router.get("/", getAllJobs);         // Get all jobs, no filters
router.get("/my-jobs",verifyToken,requireEmployer, getMyJobs);         // Get all jobs, no filters
router.get("/search", searchJobs);  // Search jobs with filters
router.post("/", verifyToken, requireEmployer, createJob);
router.get('/recommendations/:jobId', getRecommendedJobs)
router.get("/:id", getJobById);
router.put("/:id", verifyToken, requireEmployer, updateJob);
router.delete("/:id", verifyToken, requireEmployer, deleteJob);


export default router;