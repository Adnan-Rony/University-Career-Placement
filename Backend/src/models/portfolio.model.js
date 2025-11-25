import mongoose from "mongoose";

const skillSchema = new mongoose.Schema({
  name: String,
  level: {
    type: String,
    enum: ["Beginner", "Intermediate", "Advanced"],
    default: "Beginner",
  },
  skillImageUrl: String,
});

const projectSchema = new mongoose.Schema({
  title: String,
  image: String,
  description: String,
  githubUrl: String,
  liveUrl: String,
  techStack: String,
});

const educationSchema = new mongoose.Schema({
  college: String,
  degree: String,
  startYear: String,
  endYear: String,
});

const experienceSchema = new mongoose.Schema({
  company: String,
  role: String,
  startDate: Date,
  endDate: Date,
  description: String,
});

const certificationSchema = new mongoose.Schema({
  title: String,
  issuer: String,
  issueDate: String,
  certificateUrl: String,
});

const blogSchema = new mongoose.Schema({
  title: String,
  link: String,
  description: String,
});

const socialLinkSchema = new mongoose.Schema({
  github: String,
  linkedin: String,
  leetcode: String,
  portfolio: String,
});

const basicInfoSchema = new mongoose.Schema({
  name: String,
  title: String,
  bio: String,
  about: String,
  email: String,
  phone: String,
  location: String,
  picture: String,
});

const portfolioSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    basicInfo: basicInfoSchema,
    skills: [skillSchema],
    projects: [projectSchema],
    education: [educationSchema],
    experience: [experienceSchema],
    certifications: [certificationSchema],
    blogs: [blogSchema],
    socialLinks: socialLinkSchema,
  },
  {
    timestamps: true,
  }
);

export const Portfolio = mongoose.model("Portfolio", portfolioSchema);
