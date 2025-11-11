import express from "express";
import { skillAssessmentController } 
from "../controllers/skillAssesment.controller.js";

const router = express.Router();


router.post("/",skillAssessmentController.createSkillAssessment);
router.post("/createassesment",skillAssessmentController.createassesment);
router.get('/assessments/:skillId',skillAssessmentController.getAssessmentsBySkill)
export default router  