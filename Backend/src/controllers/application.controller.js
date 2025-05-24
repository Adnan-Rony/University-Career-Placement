import { Application } from "../models/application.model.js";



export const applyToJob = async (req, res) => {
  try {
    const { jobId, resume, coverLetter } = req.body;

    const existingApplication = await Application.findOne({
      job: jobId,
      applicant: req.user.id,
    });

    if (existingApplication) {
      return res.status(400).json({
        success: false,
        message: "You have already applied to this job",
      });
    }

    const application = new Application({
      job: jobId,
      applicant: req.user.id,   // corrected from student to applicant
      resume,
      coverLetter,
    });

    await application.save();

    res.status(201).json({
      success: true,            // fixed typo
      message: "Application submitted successfully.",
    });
  } catch (err) {
    console.error("Apply error:", err);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};
