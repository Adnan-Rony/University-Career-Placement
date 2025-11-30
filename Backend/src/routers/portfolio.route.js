import express from 'express';
import { createOrUpdatePortfolio, getMyPortfolio, getPortfolioBySlug } from '../controllers/portfolio.controller.js';
import { verifyToken } from '../middlewares/VerifyToken.js';
import { requireJobSeeker } from '../middlewares/requirejobseeker.js';


const router = express.Router();


router.post("/create",verifyToken, createOrUpdatePortfolio); 
router.get("/my",verifyToken, getMyPortfolio);     
router.get("/my",getMyPortfolio);     
router.get("/public/:slug",getPortfolioBySlug);     














export default router;