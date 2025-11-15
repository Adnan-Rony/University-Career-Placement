import express from "express";
import { skillAssessmentController } from "../controllers/skillAssesment.controller.js";

const router = express.Router();

router.post("/", skillAssessmentController.createSkillAssessment);
router.get("/", skillAssessmentController.getSkills);
router.post("/createassesment", skillAssessmentController.createassesment);
router.get("/skills/:skillId", skillAssessmentController.getAssessmentsBySkill);
router.post(
  "/assessments/:assessmentId/start",
  skillAssessmentController.startAttempt
);
router.get(
  "/attempts/:attemptId/questions",
  skillAssessmentController.getQuestionsForAttempt
);
router.post(
  "/attempts/:attemptId/answers",
  skillAssessmentController.submitAnswers
);
router.post(
  "/attempts/:attemptId/submit",
  skillAssessmentController.submitAssessment
);
export default router;
