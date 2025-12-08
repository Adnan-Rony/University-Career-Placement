import mongoose from "mongoose";

const educationSchema = new mongoose.Schema({
  degree: String,
  institution: String,
  startYear: String,
  endYear: String,
  grade: String,
});
const experienceSchema = new mongoose.Schema({
  company: String,
  position: String,
  startYear: String,
  endYear: String,
  description: [String],
});

const skillSchema = new mongoose.Schema({
  name: String,
  level: {
    type: String,
    enum: ["Beginner", "Intermediate", "Advanced","Expert"],
    default: "Intermediate",
  },
});

const additionalSchema = new mongoose.Schema({
  languages: String,
  certifications: String,
  awards: String,
});

const aboutSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  location: String,
  linkedin: String,
  portfolio: String,
  summary: String,
});
const projectSchema=new mongoose.Schema({
    title:String,
    description:String,
    link:String
})
const resumeBuilderSchema=new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "User",
        required:true
    },
    templateId: { type: String, required: true },
    templateTitle: { type: String },
    about: aboutSchema,
    education: [educationSchema],
    experience: [experienceSchema],
    skills: [skillSchema],
    projects: [projectSchema],
    additional: additionalSchema,

})

export const resumeModel= mongoose.model("Resume", resumeBuilderSchema);