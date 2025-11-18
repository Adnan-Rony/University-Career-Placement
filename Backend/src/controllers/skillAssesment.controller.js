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

//For development pupose
const getAllatempts = async (req, res) => {
  try {
    const allattempts = await Attempt.find();

    if (!allattempts || allattempts.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No attempts found.",
        data: [],
      });
    }

    return res.status(200).json({
      success: true,
      total_Attempts: allattempts.length,
      data: allattempts,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server error while retrieving attempts.",
      error: error.message,
    });
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
    const body = req.body;

    const { attemptId } = req.params;
    const { answers } = req.body; // Expected: [{ question_id, selected_options: [] }]

    console.log(attemptId, answers);
    if (!answers || !Array.isArray(answers)) {
      return res.status(400).json({
        success: false,
        message: "Answers array is required",
      });
    }

    //find attempt
    const attempt = await Attempt.findById(attemptId);
    if (!attempt) {
      return res.status(404).json({
        success: false,
        message: "Attempt not found",
      });
    }

    if (attempt.status !== "in_progress") {
      return res.status(400).json({
        success: false,
        message: "Attempt is already completed or expired",
      });
    }
    const assessment = await SkillAssessmentQuestions.findById(
      attempt.assessment_id
    );
    // Get the assessment to access questions and correct answers
    if (!assessment) {
      return res.status(404).json({
        success: false,
        message: "Assessment not found",
      });
    }
    // ---- MAIN LOOP: process each submitted answer ----
    for (const answer of answers) {
      const { question_id, selected_options } = answer;

      // Find the question in assessment
      const question = assessment.questions.id(question_id);
      if (!question) continue; // Skip invalid question IDs

      // Check if this question already has an answer in the attempt
      const existingAnswerIndex = attempt.answers.findIndex(
        (a) => a.question_id.toString() === question_id.toString()
      );

      // Calculate points
      let points_scored = 0;
      if (["MCQ", "Multiple", "TrueFalse"].includes(question.type)) {
        const correctOptions = question.options
          .filter((opt) => opt.is_correct)
          .map((opt) => opt.text);

        if (question.type === "MCQ" || question.type === "TrueFalse") {
          if (
            selected_options.length === 1 &&
            correctOptions.includes(selected_options[0])
          ) {
            points_scored = question.points;
          }
        } else if (question.type === "Multiple") {
          const selectedSet = new Set(selected_options);
          const correctSet = new Set(correctOptions);

          if (
            selectedSet.size === correctSet.size &&
            [...selectedSet].every((opt) => correctSet.has(opt))
          ) {
            points_scored = question.points;
          }
        }
      }

      // Prepare answer object
      const answerData = {
        question_id,
        selected_options,
        points_scored,
      };

      // Update existing answer or push new
      if (existingAnswerIndex !== -1) {
        attempt.answers[existingAnswerIndex] = answerData;
      } else {
        attempt.answers.push(answerData);
      }
    }

    await attempt.save();
    res.status(200).json({
      success: true,
      message: "Answers submitted successfully",
      data: {
        attemptId: attempt._id,
        answersCount: attempt.answers.length,
      },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

//Submit or complete the assesment
const submitAssessment = async (req, res) => {
  try {
    const { attemptId } = req.params;
    const attempt = await Attempt.findById(attemptId);
    if (!attempt) {
      return res.status(400).json({
        success: false,
        message: "Attempt not found",
      });
    }
    // Check if attempt is already completed
    if (attempt.status === "completed") {
      return res.status(400).json({
        success: false,
        message: "Attempt is already completed",
      });
    }

    // Get the assessment
    const assessment = await SkillAssessmentQuestions.findById(
      attempt.assessment_id
    );
    if (!assessment) {
      return res.status(404).json({
        success: false,
        message: "Assessment not found",
      });
    }

    const totalScore = attempt.answers.reduce(
      (sum, answer) => sum + (answer.points_scored || 0),
      0
    );
    const maxScore = assessment.questions.reduce(
      (sum, question) => sum + question.points,
      0
    );
    // Calculate percentage
    const percentage = maxScore > 0 ? (totalScore / maxScore) * 100 : 0;

    //All Answers
    const detailedResults = assessment.questions.map((question) => {
      const userAnswer = attempt.answers.find(
        (ans) => ans.question_id.toString() === question._id.toString()
      );

      const correctOptions = question.options
        .filter((opt) => opt.is_correct)
        .map((opt) => opt.text);
      let isCorrect = false;

      if (userAnswer) {
        if (question.type === "MCQ" || question.type == "TrueFalse") {
          isCorrect =
            userAnswer.selected_options.length === 1 &&
            correctOptions.includes(userAnswer.selected_options[0]);
        }
      }
      return {
        question_id: question._id,
        question_text: question.text,
        question_type: question.type,
        points: question.points,
        user_answer: userAnswer ? userAnswer.selected_options : [],
        correct_answer: correctOptions,
        is_correct: isCorrect,
        points_scored: userAnswer ? userAnswer.points_scored : 0,
        explanation: question.explanation || null,
        options: question.options.map((opt) => ({
          text: opt.text,
          is_correct: opt.is_correct,
        })),
      };
    });
    attempt.status = "completed";
    attempt.end_time = new Date();
    attempt.total_score = totalScore;
    attempt.max_score = maxScore;
    attempt.percentage = percentage;
    await attempt.save();

    res.status(200).json({
      success: true,
      message: "Assessment completed successfully",
      data: {
        attemptId: attempt._id,
        status: attempt.status,
        totalScore,
        maxScore,
        percentage: percentage.toFixed(2),
        answeredQuestions: attempt.answers.length,
        totalQuestions: assessment.questions.length,
        timeTaken: Math.floor((attempt.end_time - attempt.start_time) / 1000),
        results: detailedResults,
      },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const skillAssessmentController = {
  createSkillAssessment,
  createassesment,
  getSkills,
  getAssessmentsBySkill,
  startAttempt,
  getAllatempts,
  getQuestionsForAttempt,
  submitAnswers,
  submitAssessment,
};
