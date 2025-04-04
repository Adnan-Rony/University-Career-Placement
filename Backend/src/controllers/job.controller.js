import { Job } from "../models/job.model.js";

// admin post a job
// export const postJob = async (req, res) => {
//     try {
//         const {  company,companyImage, position,category,jobType,experience,postedDate,lastDateToApply,closeDate, salaryFrom,salaryTo,city,state,country,educationLevel,description,} = req.body;
//         const userId = req.id;

//         if (!company || !description || !requirements || !salary || !location || !jobType || !experience || !position || !companyId) {
//             return res.status(400).json({
//                 message: "Somethin is missing.",
//                 success: false
//             })
//         };
//         const job = await Job.create({
//             company,
//             companyImage,
//             description,
//             requirements: requirements.split(","),
//             salary: Number(salary),
//             location,
//             jobType,
//             companyImage,
//             experienceLevel: experience,
//             position,
//             company: companyId,
//             created_by: userId
//         });
//         return res.status(201).json({
//             message: "New job created successfully.",
//             job,
//             success: true
//         });
//     } catch (error) {
//         console.log(error);
//     }
// }

export const postJob = async (req, res) => {
    try {
        const {  company,companyImage, position,category,jobType,experience,postedDate,lastDateToApply,closeDate, salaryFrom,salaryTo,city,state,country,educationLevel,description} = req.body;
        const userId = req.id;

        if (!company || !companyImage || !position || !description) {
            return res.status(400).json({
                message: "Somethin is missing.",
                success: false
            })
        };
        const job = await Job.create({
            company,companyImage, position,category,jobType,experience,postedDate,lastDateToApply,closeDate, salaryFrom,salaryTo,city,state,country,educationLevel,description
        });
        return res.status(201).json({
            message: "New job created successfully.",
            job,
            success: true
        });
    } catch (error) {
        console.log(error);
    }
}




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
