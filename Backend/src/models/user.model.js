import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["student", "recruiter", "admin"],
      required: true,
    },
    profilePhoto: {
      type: String,
      default: "",
    },
    studentProfile: {
      bio: { type: String },
      skills: [{ type: String }],
      resume: { type: String }, // URL to resume file
      resumeOriginalName: { type: String },
    },
    recruiterProfile: {
      company: { type: mongoose.Schema.Types.ObjectId, ref: "Company" }, // Only for recruiters
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
