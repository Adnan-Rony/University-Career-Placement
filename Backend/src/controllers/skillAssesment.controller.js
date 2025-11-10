import { SkillAssessment } from "../models/skillAssesment.model.js";


//create skill
const createSkillAssessment = async (req, res) =>{
  try {
    const skill = new SkillAssessment(req.body);
    await skill.save();
    res.status(201).json({ success: true, message: "Skill assessment created", data: skill });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}


//create assesment



export const skillAssessmentController = {
  createSkillAssessment,

};