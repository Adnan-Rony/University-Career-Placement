import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
   
  title: { type: String, required: true },
  description: { type: String },
  company: { type: mongoose.Schema.Types.ObjectId, ref: 'Company', required: true },
  postedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  location: {
    city: { type: String },
    state: { type: String },
    country: { type: String },
  },
  salaryRange: {
    min: { type: Number },
    max: { type: Number },
  },
  jobType: {
    type: String,
    enum: ['full-time', 'part-time', 'internship', 'contract'],
    required: true,
  },
   deadline: { type: Date },
  skillsRequired: [{ type: String }],
}, {
  timestamps: true,
  versionKey: false,
});

jobSchema.index({ title: 'text', jobType: 1 });
export const Job = mongoose.model("Job", jobSchema);