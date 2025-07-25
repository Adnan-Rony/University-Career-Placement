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
  salaryRange: {
    min: Number,
    max: Number,
  },

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
}, {
  timestamps: true,
});

jobSchema.index({ title: "text", jobType: 1 });

export const Job = mongoose.model("Job", jobSchema);
