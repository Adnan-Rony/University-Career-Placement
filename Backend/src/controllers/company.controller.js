
import { Company } from './../models/company.model.js';






export const createCompany = async (req, res) => {
  try {
    console.log("Request Body:", req.body);
    // Check user authentication and role
    if (!req.user || !req.user.id) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }
    if (req.user.role !== "employer") {
      return res.status(403).json({
        success: false,
        message: "Only employers can create a company profile",
      });
    }

    // Destructure all expected fields from req.body
    const {
      name,
      location,
      industry,
      websiteUrl,
      logo,
      description,
      establishment,
      employees,
      country,
      contactPersonName,
      contactPersonDesignation,
      contactPersonEmail,
      contactPersonMobile,
      facebookUrl,
      twitterUrl,
      city,
      cover,
      trusted,
      badges,
      linkedinUrl,
    } = req.body;

    // Create new company document with all fields
    const newCompany = new Company({
      name,
      location,
      industry,
      websiteUrl,
      logo,
      description,
      establishment,
      employees,
      country,
      contactPersonName,
      contactPersonDesignation,
      contactPersonEmail,
      contactPersonMobile,
      facebookUrl,
      twitterUrl,
      linkedinUrl,
      city,
      cover,
       trusted,
      badges,
      createdBy: req.user.id,
     
    });

    await newCompany.save();


    return res.status(201).json({
      success: true,
      message: "Company profile created successfully",
      company: newCompany,
    });
  } catch (error) {
    console.error("Company creation error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to create company",
      error: error.message,
    });
  }
};


// Get all companies (public)
export const getAllCompanies = async (req, res) => {
  try {
    const companies = await Company.find().populate('createdBy', 'name email');
    res.status(200).json({ success: true, companies });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Server error.' });
  }
}


// Get a single company by ID (public)
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

// Update a company (only the creator can update it)
export const updateCompany = async (req, res) => {
  console.log('req.user:', req.user);
  console.log('req.cookies:', req.cookies);

  try {
    const { id } = req.params;

    const company = await Company.findById(id);
    if (!company) {
      return res.status(404).json({ success: false, message: 'Company not found.' });
    }

    // Ensure the logged-in user is the creator
    if (company.createdBy.toString() !== req.user.id) {
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



// Delete a company (owner only)
export const deleteCompany = async (req, res) => {
  try {
    const company = await Company.findById(req.params.id);
    if (!company) {
      return res.status(404).json({ success: false, message: 'Company not found.' });
    }

    // Compare ObjectIds safely
    if (!company.createdBy.equals(req.user.id)) {
      return res.status(403).json({ success: false, message: 'Not authorized.' });
    }

    await company.deleteOne(); // Or company.remove(), both work
    res.status(200).json({ success: true, message: 'Company deleted.' });
  } catch (err) {
    console.error('Delete error:', err);
    res.status(500).json({ success: false, message: 'Server error.' });
  }
};


export const getMyCompany = async (req, res) => {
  try {
    // Ensure user is authenticated
    if (!req.user || !req.user.id) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }

    // Ensure user is an employer
    if (req.user.role !== 'employer') {
      return res.status(403).json({ success: false, message: "Only employers can view their company profile" });
    }

    const company = await Company.find({ createdBy: req.user.id });

    if (!company) {
      return res.status(404).json({ success: false, message: "No company profile found for this user" });
    }

    res.status(200).json({
      success: true,
      company,
    });

  } catch (error) {
    console.error("Error fetching company profile:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch company profile",
      error: error.message,
    });
  }
};

