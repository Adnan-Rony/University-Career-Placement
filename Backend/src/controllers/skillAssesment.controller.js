import {
  SkillAssessment,
  SkillAssessmentQuestions,
  Attempt,
} from "../models/skillAssesment.model.js";

//create skill
const createSkillAssessment = async (req, res) => {
  try {
    const skill = new SkillAssessment(req.body);
    await skill.save();
    res.status(201).json({
      success: true,
      message: "Skill assessment created",
      data: skill,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
// GET all skill assessments
const getSkills = async (req, res) => {
  try {
    const skills = await SkillAssessment.find();
    res.status(200).json({
      success: true,
      data: skills,
      message: "Skill assesmment fetched succesfully",
    });
  } catch (error) {}
};

//create assesment
const createassesment = async (req, res) => {
  try {
    const body = req.body;
    const assessment = await SkillAssessmentQuestions.create(req.body);
    res.status(201).json({ success: true, data: assessment });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "error.message",
    });
  }
};
// Find all assessments with skill_id
const getAssessmentsBySkill = async (req, res) => {
  try {
    const { skillId } = req.params;

    const assessments = await SkillAssessmentQuestions.find(
      {
        skill_id: skillId,
      },
      {
        _id: 1,
        skill_id: 1,
        title: 1,
        description: 1,
        duration_seconds: 1,
      }
    );

    if (!assessments || assessments.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No assessments found for this skill",
      });
    }

    res.status(200).json({ success: true, data: assessments });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
//Start Attempt for tesr
const startAttempt = async (req, res) => {
  try {
    const { assessmentId } = req.params;
    const { userId } = req.body;
    if (!userId) {
      return res
        .status(400)
        .json({ success: false, message: "User ID is required" });
    }

    const assessment = await SkillAssessmentQuestions.findById(assessmentId);
    if (!assessment) {
      return res
        .status(404)
        .json({ success: false, message: "Assessment not found" });
    }

    // Create new attempt
    const attempt = new Attempt({
      user_id: userId,
      assessment_id: assessment._id,
      start_time: new Date(),
      status: "in_progress",
      answers: [],
    });

    await attempt.save();

    res.status(201).json({
      success: true,
      attemptId: attempt._id,
      message: "Attempt started successfully",
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const getQuestionsForAttempt = async (req, res) => {
  try {
    const { attemptId } = req.params;

    // Find the attempt
    const attempt = await Attempt.findById(attemptId);
    if (!attempt) {
      return res
        .status(404)
        .json({ success: false, message: "Attempt not found" });
    }

    // Fetch assessment questions
    const assessment = await SkillAssessmentQuestions.findById(
      attempt.assessment_id
    ).select("title questions");

    if (!assessment) {
      return res
        .status(404)
        .json({ success: false, message: "Assessment not found" });
    }

    res.status(200).json({
      success: true,
      attemptId: attempt._id,
      assessmentId: assessment._id,
      title: assessment.title,
      questions: assessment.questions,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
//

const submitAnswers = async (req, res) => {
  try {
    const { attemptId } = req.params;
    const { answers } = req.body;
  } catch (error) {}
};

const submitAssessment = async (req, res) => {
  try {
    
  } catch (error) {
    
  }
}

export const skillAssessmentController = {
  createSkillAssessment,
  createassesment,
  getSkills,
  getAssessmentsBySkill,
  startAttempt,
  getQuestionsForAttempt,
  submitAnswers,
  submitAssessment
};
