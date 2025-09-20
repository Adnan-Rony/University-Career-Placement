import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    phone: { type: String },
    password: { type: String, required: false },
    role: {
      type: String,
      enum: ['job-seeker', 'employer', 'admin'],
      default: 'job-seeker',
    },
   
    primaryRole:{type:String},
    location :{type:String},
    bio: { type: String },
    picture: { type: String },
    skills: [{ type: String }],
    
    yearsExperience: { type: String },

   


    resume: { type: String },

    education: [
      {
        
        college: String,
        degreeType: String,
        startYear: String,
        endYear: String,
        
      },
    ],

    socialLinks: {
      linkedin: String,
      github: String,
      portfolio: String,
      twitter: String,
    },
   workExperience:[
    {
      company:{
        type:String
      },
      title:{
        type:String
      },
      startDate:{
        type:Date
      },
      endDate:{
        type:Date
      },
      description:{
        type:String
      }
    }
   ],



    certifications: [
      {
        title: String,
        issuer: String,
        date: String,
        credentialUrl: String,
      },
    ],

    languages: [String],

    projects: [
      {
        title: String,
        description: String,
        link: String,
        technologies: [String],
      },
    ],

    address: {
      city: String,
      state: String,
      country: String,
      zipCode: String,
    },

    dob: Date,
    gender: {
      type: String,
      enum: ['male', 'female', 'other'],
    },

    isProfileComplete: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

userSchema.index({ role: 1 });

export const User = mongoose.model("User", userSchema);
