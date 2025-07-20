import mongoose from "mongoose";



const jobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  vacancy: { type: String, required: true },
  description: String,
  company: { type: mongoose.Schema.Types.ObjectId, ref: "Company", required: true },
  postedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  country: { type: String, trim: true },
  location: { type: String, trim: true },
  city: { type: String, trim: true },
  image:{type:String},
  

  jobType: {
    type: String,
    enum: ["full-time", "part-time", "internship", "contract"],
    required: true,
  },
  deadline: Date,
  skillsRequired: [String],
  
   industry: {
    type: String,
    enum: [
      "Information Technology",
      "Healthcare",
      "Education",
      "Finance & Banking",
      "Manufacturing",
      "Construction",
      "Transportation & Logistics",
      "Retail & E-commerce",
      "Telecommunications",
      "Media & Entertainment",
      "Energy & Utilities",
      "Agriculture",
      "Real Estate",
      "Government & Public Sector",
      "Hospitality & Tourism",
      "Legal Services",
      "Non-Profit / NGOs",
      "Aerospace & Defense",
      "Automotive",
      "Biotechnology & Pharmaceuticals",
      "Software",
      "others"
    ],
    required: true,
    trim: true,
  },

  salaryRange: {
    min: Number,
    max: Number,
  },
  salaryType: {
    type: String,
    enum: ["Monthly", "Yearly", "Hourly", "Negotiable"],
    default: "Monthly",
  },
  currency: { 
    type: String,
    enum: ["USD",  "INR", "BDT", "Other"],
     default: "BDT" 
  
  },
  isNegotiable: { type: Boolean, default: false },

  jobLevel: {
    type: String,
    enum: ["Entry", "Mid", "Senior", "Executive", "Top Level", "Other"],
  },
  
  jobShift: {
    type: String,
    enum: ["Day", "Night", "Flexible", "Rotational", "Remote"],
  },

  gender: {
    type: String,
    enum: ["Male", "Female", "Any"],
    default: "Any",
  },

  minEducationLevel: { type: String },
  preferredEducationLevel: { type: String },

  totalExperience: { type: Number },
  minExperience: { type: Number },
  maxExperience: { type: Number },

  minAge: { type: Number },
  maxAge: { type: Number },

  jobRequirements: { type: String },



}, {
  timestamps: true,
});

jobSchema.index({ title: "text", jobType: 1 });

export const Job = mongoose.model("Job", jobSchema);
