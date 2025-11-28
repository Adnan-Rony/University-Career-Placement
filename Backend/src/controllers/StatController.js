import mongoose from "mongoose";
import { Application } from "../models/application.model.js";
import { User } from "../models/user.model.js";
import { Attempt } from "../models/skillAssesment.model.js";

export const UserStatistics = async (req, res) => {
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
    message: "working",
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
