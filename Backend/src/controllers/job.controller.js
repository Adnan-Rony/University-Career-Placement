import { Job } from "../models/job.model.js";
import { Company } from "../models/company.model.js";




export const postJob = async (req, res) => {
    try {
        const { company, companyImage, position, category, jobType, experience, postedDate, lastDateToApply, closeDate, salaryFrom, salaryTo, city, state, country, educationLevel, description } = req.body;
        const userId = req.id;

        if (!company || !position || !description || !category || !jobType || !experience || !postedDate || !lastDateToApply || !closeDate || !salaryFrom || !salaryTo || !city || !state || !country) {
            return res.status(400).json({
                message: "Something is missing.",
                success: false
            });
        }

        // Check if the company exists and belongs to the user
        const existingCompany = await Company.findOne({ _id: company, userId });
        if (!existingCompany) {
            return res.status(400).json({
                message: "Invalid company or you do not have permission to post a job for this company.",
                success: false
            });
        }

        // Create the job
        const job = await Job.create({
            company, // Must be an ObjectId
            companyImage,
            position,
            category,
            jobType,
            experience,
            postedDate,
            lastDateToApply,
            closeDate,
            salaryFrom,
            salaryTo,
            city,
            state,
            country,
            educationLevel,
            description,
            userId, // Save the user who posted the job
        });

        return res.status(201).json({
            message: "New job created successfully.",
            job,
            success: true
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Internal server error.",
            success: false
        });
    }}

















//student apply for all jobs
export const getAllJobs = async (req, res) => {
    try {
        const keyword = req.query.keyword || "";
        const page = parseInt(req.query.page) || 1;  // Default page = 1
        const limit = parseInt(req.query.limit) || 6; // Default limit = 6

        const query = {
            $or: [
                { title: { $regex: keyword, $options: "i" } },
                { description: { $regex: keyword, $options: "i" } },
            ],
        };

        const jobs = await Job.find(query)
            .populate({ path: "company" })
            .sort({ createdAt: -1 })
            .skip((page - 1) * limit) // Pagination logic
            .limit(limit); // Limit results

        const totalJobs = await Job.countDocuments(query); // Total jobs count

        return res.status(200).json({
            jobs,
            totalPages: Math.ceil(totalJobs / limit),
            currentPage: page,
            success: true,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error", success: false });
    }
};


//student get  jobs which student are application
export const getJobById = async (req, res) => {
    try {
        const jobId = req.params.id;
        const job = await Job.findById(jobId).populate({
            path:"applications"
        });
        if (!job) {
            return res.status(404).json({
                message: "Jobs not found.",
                success: false
            })
        };
        return res.status(200).json({ job, success: true });
    } catch (error) {
        console.log(error);
    }
}

//admin job get 
export const getAdminJobs = async (req, res) => {
    try {
        const adminId = req.id;
        const jobs = await Job.find({ created_by: adminId }).populate({
            path:'company',
            createdAt:-1
        });
        if (!jobs) {
            return res.status(404).json({
                message: "Jobs not found.",
                success: false
            })
        };
        return res.status(200).json({
            jobs,
            success: true
        })
    } catch (error) {
        console.log(error);
    }
}
