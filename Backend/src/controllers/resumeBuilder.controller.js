import { resumeModel } from "../models/resumebuilder.model.js";


//  Create Resume
 const createResume = async (req, res) => {
  try {
    const userId =  req.body.userId; 
    if (!userId) {
      return res.status(400).json({ success: false, message: "User ID is required" });
    }

    const resume = new resumeModel({
      userId,
      ...req.body,
    });

    await resume.save();

    res.status(201).json({
      success: true,
      message: "Resume created successfully",
      data: resume,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
// Get all resumes for a user
export const getUserResumes = async (req, res) =>{
  try {
    const { userId } = req.params;

    if (!userId) {
      return res.status(400).json({ success: false, message: "User ID is required" });
    }

    const resumes = await resumeModel
      .find({ userId })
      .sort({ createdAt: -1 }) 
      .populate("userId", "name email");

    res.status(200).json({
      success: true,
      count: resumes.length,
      data: resumes,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}
// Delete resume by ID
export const deleteResume = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ success: false, message: "Resume ID is required" });
    }

    const resume = await resumeModel.findByIdAndDelete(id);

    if (!resume) {
      return res.status(404).json({ success: false, message: "Resume not found" });
    }

    res.status(200).json({
      success: true,
      message: "Resume deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const resumebuilderController={
    createResume,getUserResumes,deleteResume 
}