import { SkillAssessment, SkillAssessmentQuestions } from "../models/skillAssesment.model.js";


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
const createassesment=async(req, res)=>{
  try{
const body=req.body;
  const assessment = await SkillAssessmentQuestions.create(req.body);
      res.status(201).json({ success: true, data: assessment });
  }catch(error){
    res.status(500).json({
      success:false,
      message:"error.message"
    })
    
  }

}
    // Find all assessments with this skill_id
const getAssessmentsBySkill = async (req, res) => {
  try {
    const { skillId } = req.params;


    const assessments = await SkillAssessmentQuestions.find({ skill_id: skillId });

    if (!assessments || assessments.length === 0) {
      return res.status(404).json({ success: false, message: "No assessments found for this skill" });
    }

    res.status(200).json({ success: true, data: assessments });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const skillAssessmentController = {
  createSkillAssessment,createassesment,
  getAssessmentsBySkill

};