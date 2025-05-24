import express from "express";
import { verifyToken } from './../middlewares/VerifyToken.js';
import { applyToJob } from "../controllers/application.controller.js";
import { requireJobSeeker } from "../middlewares/requirejobseeker.js";

const router = express.Router();

router.post("/apply", verifyToken,requireJobSeeker ,applyToJob);


export default router;