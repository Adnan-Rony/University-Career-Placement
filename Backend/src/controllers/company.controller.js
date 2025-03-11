

import { Company } from "../models/company.model.js";

// Register a Company
export const registerCompany = async (req, res) => {
    try {
        const { companyName } = req.body;
        if (!companyName) {
            return res.status(400).json({
                message: "Company name is required.",
                success: false
            });
        }
        let company = await Company.findOne({ name: companyName });
        if (company) {
            return res.status(400).json({
                message: "You can't register same company.",
                success: false
            })
        };
        company = await Company.create({
            name: companyName,
            userId: req.id
        });

        return res.status(201).json({
            message: "Company registered successfully.",
            company,
            success: true
        })
    } catch (error) {
        console.log(error);
    }
}

// Get All Companies by Logged-in User
export const getCompany = async (req, res) => {
    try {
        const userId = req.id; // logged in user id
        const companies = await Company.find({ userId });
        if (!companies) {
            return res.status(404).json({
                message: "Companies not found.",
                success: false
            })
        }
        return res.status(200).json({
            companies,
            success:true
        })
    } catch (error) {
        console.log(error);
    }
}

// Get a Company by ID
export const getCompanyById = async (req, res) => {
    try {
        const companyId = req.params.id;
        const company = await Company.findById(companyId);

        if (!company) {
            return res.status(404).json({
                message: "Company not found.",
                success: false
            });
        }

        return res.status(200).json({
            company,
            success: true
        });
    } catch (error) {
        res.status(500).json({
            message: "Error fetching company.",
            success: false,
            error: error.message
        });
    }
};

// Update Company Information
export const updateCompany = async (req, res) => {
    try {
        const { name, description, website, location } = req.body;
        const file = req.file;

        let updateData = { name, description, website, location };

        // Handle logo upload if a file is provided
        // if (file) {
        //     const fileUri = getDataUri(file);
        //     const cloudResponse = await cloudinary.uploader.upload(fileUri.content);
        //     updateData.logo = cloudResponse.secure_url;
        // }

        const company = await Company.findByIdAndUpdate(req.params.id, updateData, { new: true });

        if (!company) {
            return res.status(404).json({
                message: "Company not found.",
                success: false
            });
        }

        return res.status(200).json({
            message: "Company updated successfully.",
            company,
            success: true
        });
    } catch (error) {
        res.status(500).json({
            message: "Error updating company.",
            success: false,
            error: error.message
        });
    }
};

// Delete a Company
export const deleteCompany = async (req, res) => {
    try {
        const company = await Company.findByIdAndDelete(req.params.id);

        if (!company) {
            return res.status(404).json({
                message: "Company not found.",
                success: false
            });
        }

        return res.status(200).json({
            message: "Company deleted successfully.",
            success: true
        });
    } catch (error) {
        res.status(500).json({
            message: "Error deleting company.",
            success: false,
            error: error.message
        });
    }
};
