
import mongoose, { mongo } from "mongoose";

const skillAssessmentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    category: { type: String, required: true, trim: true },
    description: { type: String, default: "" },
    difficulty: {
      type: String,
      enum: ["Beginner", "Intermediate", "Advanced"],
      default: "Beginner",
    },
    icon_url: { type: String },
    is_active: { type: Boolean, default: true },
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);

const questionSchema = new mongoose.Schema({
  text: { type: String, required: true },
  type: { type: String, enum: ["MCQ", "Multiple", "TrueFalse", "Coding"], default: "MCQ" },
  points: { type: Number, default: 1 },

  explanation: { type: String },
  options: [
    {
      text: { type: String, required: true },
      is_correct: { type: Boolean, required: true },
    },
  ],
});
const assessmentSchema = new mongoose.Schema(
  {
    skill_id: { type: mongoose.Schema.Types.ObjectId, ref: "Skill", required: true },
    title: { type: String, required: true },
    description: { type: String },
    duration_seconds: { type: Number, default: 900 }, // 15 minutes
    total_questions: { type: Number, default: 15 },
    is_active: { type: Boolean, default: true },
    questions: [questionSchema],
  },
  { timestamps: true }
);


const attemptSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  assessment_id: { type: mongoose.Schema.Types.ObjectId, ref: "QuestionAns", required: true },
  start_time: { type: Date, default: Date.now },
  status: { type: String, default: "in_progress" },
  answers: [
    {
      question_id: { type: mongoose.Schema.Types.ObjectId },
      selected_options: [String],
      points_scored: Number,
    }
  ]
});

export const Attempt = mongoose.model("Attempt", attemptSchema);

export const SkillAssessmentQuestions=mongoose.model("QuestionAns",assessmentSchema)

export const SkillAssessment = mongoose.model(
  "SkillAssessment",
  skillAssessmentSchema
);
