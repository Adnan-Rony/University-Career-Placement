import express from "express";
import { skillAssessmentController } 
from "../controllers/skillAssesment.controller.js";

const router = express.Router();


router.post("/",skillAssessmentController.createSkillAssessment);
export default router  