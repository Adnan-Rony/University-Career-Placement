import express from 'express';
import { createOrUpdatePortfolio, getMyPortfolio } from '../controllers/portfolio.controller.js';
import { verifyToken } from '../middlewares/VerifyToken.js';
import { requireJobSeeker } from '../middlewares/requirejobseeker.js';


const router = express.Router();


router.post("/create",verifyToken, createOrUpdatePortfolio); 
router.get("/my",verifyToken, getMyPortfolio);     














export default router;