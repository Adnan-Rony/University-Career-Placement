import { Application } from "../models/application.model.js";
import { sendEmail } from "../utils/mailer.js";



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


//For Employer
export const getApplicationsForJob = async (req, res) => {
  try {
    const { jobId } = req.params;

    const applications = await Application.find({ job: jobId })
      .populate("applicant", "name email")
      .populate("job" )
      .populate("company" );

    res.status(200).json({ success: true, applications });
    
  } catch (err) {
    console.error("Error fetching applications:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};


//job seeker
export const getMyApplications = async (req, res) => {
  
  try {
    const applications = await Application.find({ applicant: req.user.id })
      .populate("job",)
      .populate("applicant", "name email")
      
    

    res.status(200).json({ success: true, applications });
  } catch (err) {
    console.error("Error fetching user applications:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};



export const updateApplicationStatus = async (req, res) => {
  try {
    const { applicationId } = req.params;
    const { status } = req.body;

    const validStatuses = ["Pending", "Accepted", "Rejected"];
    if (!validStatuses.includes(status)) {
      return res.status(400).json({ success: false, message: 'Invalid status value' });
    }

 
    const application = await Application.findById(applicationId).populate('applicant', 'name email');
    if (!application) {
      return res.status(404).json({ success: false, message: 'Application not found' });
    }

    application.status = status;
    await application.save();

  
    await sendEmail(
      application.applicant.email,
      "Your Application Status Has Been Updated",
      `Hi ${application.applicant.name},\n\nYour application status has been updated to: ${status}.\n\nBest of luck!\nUniversity Job Hub`
    );

    console.log("Email user:", process.env.EMAIL_USER);
    console.log("Email pass exists:", !!process.env.EMAIL_PASS);

    // Optionally return updated application
    const updatedApplication = await Application.findById(applicationId)
      .populate('applicant', 'name email')
      .populate('job');

    res.status(200).json({ success: true, application: updatedApplication });
  } catch (err) {
    console.error('Error updating application status:', err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};





