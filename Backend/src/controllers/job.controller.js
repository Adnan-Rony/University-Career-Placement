import { Job } from "../models/job.model.js";
import { Company } from "../models/company.model.js";


export const createJob = async (req, res) => {
  try {
    const {
      title, description, company, location, salaryRange,
      jobType, deadline, skillsRequired,image,vacancy
    } = req.body;

    const employerId = req.user.id; 


    // Validate that the employer owns the company
    const companyExists = await Company.findOne({ _id: company, createdBy: employerId });
    if (!companyExists) {
      return res.status(403).json({ success: false, message: "You do not own this company." });
    }

    const newJob = new Job({
      title,
      description,
      company,
      postedBy: employerId,
      location,
      salaryRange,
      jobType,
      vacancy,
      deadline,
      image,
      skillsRequired
    });

    await newJob.save();
    res.status(201).json({ success: true, message: "Job created successfully", job: newJob });
  } catch (error) {
    console.error("Create Job Error:", error);
    res.status(500).json({ success: false, message: "Failed to create job" });
  }
};

export const getAllJobs = async (req, res) => {
  try {
    const { companyName, jobTitle } = req.query;

    let jobs = await Job.find()
      .populate('company' )
      .populate('postedBy', 'email');

    if (companyName) {
      const lowerCompany = companyName.toLowerCase();
      jobs = jobs.filter(job =>
        job.company?.name?.toLowerCase().includes(lowerCompany)
      );
    }

    if (jobTitle) {
      const lowerTitle = jobTitle.toLowerCase();
      jobs = jobs.filter(job =>
        job.title.toLowerCase().includes(lowerTitle)
      );
    }

    res.status(200).json({ success: true, jobs });
  } catch (error) {
    console.error('Get Jobs Error:', error);
    res.status(500).json({ success: false, message: 'Failed to fetch jobs' });
  }
};

export const getJobById = async (req, res) => {
  
  try {
    const job = await Job.findById(req.params.id)
      .populate('company')
      .populate('postedBy', 'email');

    if (!job) {
      return res.status(404).json({ success: false, message: "Job not found" });
    }

    res.status(200).json({ success: true, job });
  } catch (error) {
    console.error("Get Job Error:", error);
    res.status(500).json({ success: false, message: "Failed to get job" });
  }
};

export const updateJob = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);

    if (!job) {
      return res.status(404).json({ success: false, message: "Job not found" });
    }

    // Check ownership - only poster can update
    if (job.postedBy.toString() !== req.user.id) {
      return res.status(403).json({ success: false, message: "Not authorized to update this job" });
    }

    // Update allowed fields
    const allowedUpdates = ['title', 'description', 'location', 'salaryRange', 'jobType', 'deadline', 'skillsRequired','image','vacancy'];
    allowedUpdates.forEach(field => {
      if (req.body[field] !== undefined) {
        job[field] = req.body[field];
      }
    });

    await job.save();

    res.status(200).json({ success: true, message: "Job updated successfully", job });
  } catch (error) {
    console.error("Update Job Error:", error);
    res.status(500).json({ success: false, message: "Failed to update job" });
  }
};

export const deleteJob = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);

    if (!job) {
      return res.status(404).json({ success: false, message: "Job not found" });
    }

    // Check ownership - only poster can delete
    if (job.postedBy.toString() !== req.user.id) {
      return res.status(403).json({ success: false, message: "Not authorized to delete this job" });
    }
 


  await job.deleteOne();


    res.status(200).json({ success: true, message: "Job deleted successfully" });
  } catch (error) {
    console.error("Delete Job Error:", error);
    res.status(500).json({ success: false, message: "Failed to delete job" });
  }
};


export const searchJobs = async (req, res) => {
  try {
    const { title, companyName, location, jobType, skills } = req.query;
    let query = {};

    if (title) {
      query.title = { $regex: title, $options: "i" };
    }

    if (jobType) {
      query.jobType = jobType;
    }

    if (location) {
      const locationRegex = { $regex: location, $options: "i" };
      query.$or = [
        ...(query.$or || []),
        { "location.city": locationRegex },
        { "location.state": locationRegex },
        { "location.country": locationRegex },
      ];
    }

    if (skills) {
      const skillsArray = skills.split(",").map((s) => s.trim());
      query.skillsRequired = { $all: skillsArray };
    }

    let jobs = await Job.find(query)
      .populate("company", "name logo")
      .populate("postedBy", "email");

    if (companyName) {
      jobs = jobs.filter((job) =>
        job.company?.name.toLowerCase().includes(companyName.toLowerCase())
      );
    }

    res.status(200).json({ success: true, jobs });
  } catch (error) {
    console.error("Search Jobs Error:", error);
    res.status(500).json({ success: false, message: "Failed to search jobs" });
  }
};




export const getRecommendedJobs = async (req, res) => {
  try {
    const { jobId } = req.params;

    const currentJob = await Job.findById(jobId).populate('company');
    if (!currentJob) {
      return res.status(404).json({ success: false, message: 'Job not found' });
    }

    const titleKeywords = currentJob.title.split(' ').slice(0, 2).join(' '); // Use first two words

    const recommendedJobs = await Job.find({
      _id: { $ne: jobId },
      $or: [
        { company: currentJob.company._id },
        { title: { $regex: titleKeywords, $options: 'i' } },
        { industry: currentJob.industry || { $exists: false } }, // Fallback if industry is missing
      ],
    })
      .limit(5)
      .sort({ createdAt: -1 })
      .populate('company')
      .populate('postedBy', 'email');

    res.status(200).json({ success: true, data: recommendedJobs });
  } catch (error) {
    console.error('Get Recommended Jobs Error:', error);
    res.status(500).json({ success: false, message: 'Failed to fetch recommended jobs', error: error.message });
  }
};





