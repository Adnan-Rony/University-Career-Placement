import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
   
     
      position: {
        type: String,
        required: true,
      },
      category: {
        type: String,
        required: true,
      },
      jobType: {
        type: String,
        required: true,
        enum: ["Full-Time", "Part-Time", "Contract", "Internship", "Remote"], // Optional validation
      },
      experience: {
        type: String,
        required: true,
        enum: ["Entry Level", "Mid Level", "Senior Level"],
      },
      postedDate: {
        type: Date,
        required: true,
        default: Date.now,
      },
      lastDateToApply: {
        type: Date,
        required: true,
      },
      closeDate: {
        type: Date,
        required: true,
      },
      salaryFrom: {
        type: Number,
        required: true,
      },
      salaryTo: {
        type: Number,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      state: {
        type: String,
        required: true,
      },
      country: {
        type: String,
        required: true,
      },
      educationLevel: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      status: {
        type: String,
        required: true,
        enum: ["Active", "Inactive"],
        default: "Active",
      },
  
    company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CompanyCollection', //update
        
        required: true
    },
    
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    // applications: [
    //     {
    //         type: mongoose.Schema.Types.ObjectId,
    //         ref: 'Application',
    //     }
    // ]
},{timestamps:true});
export const Job = mongoose.model("Job", jobSchema);