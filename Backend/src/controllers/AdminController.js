import { Application } from "../models/application.model.js";
import { Company } from "../models/company.model.js";
import { Job } from "../models/job.model.js";
import { User } from "../models/user.model.js";

  //user

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select('-password'); // Never expose passwords

    res.status(200).json({
      success: true,
      message: 'All users fetched successfully.',
      users,
    });
  } catch (error) {
    console.error('Get all users error:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

export const deleteUserById = async (req, res) => {
  try {
    const userId = req.params.id;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found.",
      });
    }

    await user.deleteOne();

    res.status(200).json({
      success: true,
      message: "User deleted successfully.",
    });
  } catch (error) {
    console.error("Delete user error:", error);
    res.status(500).json({
      success: false,
      message: "Server error.",
    });
  }
};

export const deleteJobByAdmin = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);

    if (!job) {
      return res.status(404).json({ success: false, message: "Job not found" });
    }

    // Allow if user is the poster OR is admin
    if (job.postedBy.toString() !== req.user.id && req.user.role !== 'admin') {
      return res.status(403).json({ success: false, message: "Not authorized to delete this job" });
    }

    await job.deleteOne();

    res.status(200).json({ success: true, message: "Job deleted successfully" });
  } catch (error) {
    console.error("Delete Job Error:", error);
    res.status(500).json({ success: false, message: "Failed to delete job" });
  }
};

//companies
export const getAllCompanies = async (req, res) => {
  try {
    const companies = await Company.find().populate('createdBy', 'name email');
    res.status(200).json({ success: true, companies });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Server error.' });
  }
}


export const getCompanyById = async (req, res) => {
  try {
    const company = await Company.findById(req.params.id)
      .populate('createdBy', 'name email');
    if (!company) {
      return res.status(404).json({ success: false, message: 'Company not found.' });
    }
    res.status(200).json({ success: true, company });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Server error.' });
  }
};

export const updateCompanyByAdmin = async (req, res) => {
  console.log('req.user:', req.user);
  console.log('req.cookies:', req.cookies);

  try {
    const { id } = req.params;

    const company = await Company.findById(id);
    if (!company) {
      return res.status(404).json({ success: false, message: 'Company not found.' });
    }

    // Only allow update if user is admin or the creator of the company
    const isAdmin = req.user.role === 'admin';
    const isCreator = company.createdBy.toString() === req.user.id;

    if (!isAdmin && !isCreator) {
      return res.status(403).json({ success: false, message: 'Not authorized to update this company.' });
    }

    // Allowed fields to update
    const allowedUpdates = [
      'name',
      'location',
      'industry',
      'websiteurl',
      'logo',
      'city',
      'description',
      'establishment',
      'employees',
      'country',
      'Contact_Person_Name',
      'Contact_Person_Designation',
      'Contact_Person_email',
      'Contact_Person_mobile',
      'facebookurl',
      'twittweurl',
      'linkdinurl',
      'cover',
      'trusted',
      'badges',
    ];

    allowedUpdates.forEach((field) => {
      if (req.body[field] !== undefined) {
        company[field] = req.body[field];
      }
    });

    await company.save();

    res.status(200).json({
      success: true,
      message: 'Company updated successfully.',
      company,
    });

  } catch (err) {
    console.error('Update error:', err);
    res.status(500).json({ success: false, message: 'Server error.' });
  }
};


export const deleteCompany = async (req, res) => {
  try {
    const company = await Company.findById(req.params.id);
    if (!company) {
      return res.status(404).json({ success: false, message: 'Company not found.' });
    }

    // Allow deletion if user is the creator OR is an admin
    const isOwner = company.createdBy.equals(req.user.id);
    const isAdmin = req.user.role === 'admin';

    if (!isOwner && !isAdmin) {
      return res.status(403).json({ success: false, message: 'Not authorized.' });
    }

    await company.deleteOne(); // This will also delete its jobs via middleware
    res.status(200).json({ success: true, message: 'Company and its jobs deleted.' });
  } catch (err) {
    console.error('Delete error:', err);
    res.status(500).json({ success: false, message: 'Server error.' });
  }
};


//application

export const getAllAppliedJobs = async (req, res) => {
  try {
    // ✅ Only admin can access
    if (req.user.role !== "admin") {
      return res.status(403).json({
        success: false,
        message: "Access denied. Admins only.",
      });
    }

    const applications = await Application.find()
      .populate("applicant", "name email")
      .populate({
        path: "job",
        populate: {
          path: "company", // Nested populate for company inside job
        },
      });

    res.status(200).json({
      success: true,
      applications,
    });
  } catch (err) {
    console.error("Error fetching all applied jobs:", err);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};






