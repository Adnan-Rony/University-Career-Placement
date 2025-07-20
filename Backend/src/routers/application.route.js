import express from "express";
import { verifyToken } from './../middlewares/VerifyToken.js';
import { applyToJob, getAllApplicationsForEmployer, getApplicationsForJob, getMyApplications, updateApplicationStatus } from "../controllers/application.controller.js";
import { requireJobSeeker } from "../middlewares/requirejobseeker.js";
import { requireEmployer } from './../middlewares/requireEmployer.js';

const router = express.Router();

router.post("/apply", verifyToken, requireJobSeeker, applyToJob);

router.get("/my", verifyToken, requireJobSeeker, getMyApplications);

router.get("/all-applications", verifyToken,requireEmployer, getAllApplicationsForEmployer);

router.get("/job/:jobId", verifyToken, requireEmployer, getApplicationsForJob);

router.put("/:applicationId", verifyToken, requireEmployer, updateApplicationStatus);







export default router;