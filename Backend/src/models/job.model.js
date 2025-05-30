import mongoose from "mongoose";



const jobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  vacancy: { type: String, required: true },
  description: String,
  company: { type: mongoose.Schema.Types.ObjectId, ref: "Company", required: true },
  postedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  location: {
    city: String,
    state: String,
    country: String,
  },
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
}, {
  timestamps: true,
});

jobSchema.index({ title: "text", jobType: 1 });

export const Job = mongoose.model("Job", jobSchema);
