import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
{
  name: { type: String, required: true, trim: true },

   email: { type: String, required: true, unique: true, lowercase: true, trim: true },
   phone:{type:String},

 password: { type: String, required: true, minlength: 6 },

  role: {
    type: String,
    enum: ['job-seeker', 'employer', 'admin'],
    default: 'job-seeker',
  },

 bio: { type: String },

  skills: [{ type: String }],

  experience: { type: String },

  resume: { type: String },

}, { timestamps: true });

userSchema.index({ role: 1 });

export const User = mongoose.model("User", userSchema);
