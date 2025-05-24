import mongoose from "mongoose";


const applicationSchema = new mongoose.Schema({

  job: { type: mongoose.Schema.Types.ObjectId, ref: 'Job', required: true },
  applicant: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  coverLetter: { type: String },
  resume: { type: String },
  status: { type: String, enum: ["Pending", "Accepted", "Rejected"], default: "Pending" },
}, {
  timestamps: true,
 
});

applicationSchema.index({ job: 1, applicant: 1 }, { unique: true }); 

export const Application  = mongoose.model("Application", applicationSchema);