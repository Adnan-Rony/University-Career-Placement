import mongoose from "mongoose";
import { Application } from "../models/application.model.js";
import { User } from "../models/user.model.js";
import { Attempt } from "../models/skillAssesment.model.js";
import { Job } from "../models/job.model.js";

 const UserStatistics = async (req, res) => {
  const userId = req.user.id;
  console.log(userId);
  const user = await User.findById(userId).select("name picture");
  // ------------------ Applications ------------------
  const totalApplications = await Application.countDocuments({
    applicant: userId,
  });

  const pendingApplications = await Application.countDocuments({
    applicant: userId,
    status: "Pending",
  });

  const acceptedApplications = await Application.countDocuments({
    applicant: userId,
    status: "Accepted",
  });

  const rejectedApplications = await Application.countDocuments({
    applicant: userId,
    status: "Rejected",
  });

  // ------------------ Skill Assessments ------------------

  const totalAttempts = await Attempt.countDocuments({ user_id: userId });
  const completedAttempts = await Attempt.countDocuments({
    user_id: userId,
    status: "completed",
  });

  const avgResult = await Attempt.aggregate([
    {
      $match: {
        user_id: new mongoose.Types.ObjectId(userId),
        status: "completed",
      },
    },
    { $group: { _id: null, averagePercentage: { $avg: "$percentage" } } },
  ]);

  const averagePercentage = avgResult[0]?.averagePercentage || 0;

  return res.status(200).json({
    message: "User Statistics Fetch SuccessFully",
    user,
    totalApplications,
    pendingApplications,
    acceptedApplications,
    rejectedApplications,
    skillStats: {
      totalAttempts,
      completedAttempts,
      averagePercentage,
    },
  });
};

const EmployerStatistics=async(req,res)=>{
try {

const employerId = req.user.id;
const totalJobcount = await Job.countDocuments({ postedBy: employerId });
const totalApplicants = await Application.aggregate([
  {
    $lookup: {
      from: "jobs",
      localField: "job",
      foreignField: "_id",
      as: "jobDetails"
    }
  },
  { $unwind: "$jobDetails" },
  { $match: { "jobDetails.postedBy": new mongoose.Types.ObjectId(employerId) } },
  { $count: "total" }
]);


const jobsOverTime=await Job.aggregate([
   {
      $match:{
         postedBy:new mongoose.Types.ObjectId(employerId)
      }
   },
   {
      $group:{
         _id:{
            $dateToString:{format:"%Y-%m",date:"$createdAt"}
         },
         totalJobs: { $sum: 1 }
      }
   },
   {
      $sort:{_id:1}
   }
])

const appStats = await Application.aggregate([
  {
    $lookup: {
      from: "jobs",             
      localField: "job",          
      foreignField: "_id",         
      as: "jobDetails"
    }
  },
  { $unwind: "$jobDetails" },     
  {
    $match: {
      "jobDetails.postedBy": new mongoose.Types.ObjectId(employerId)
    }
  },
  {
    $group: {
      _id: "$status",
      count: { $sum: 1 }
    }
  }
]);


   return res.status(200).json({
      success:true,
      totalJobcount,totalApplicants,jobsOverTime,appStats,
   })
} catch (error) {
   
}
}



export const Statistics={
   UserStatistics,
   EmployerStatistics
}
