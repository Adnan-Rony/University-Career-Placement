import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firebaseUID: { type: String, required: true, unique: true }, // Firebase UID
    email: { type: String, required: true, unique: true },
    fullname: { type: String, required: true },
    role: { 
        type: String, 
        required: true, 
        enum: ["student", "recruiter", "admin"], // Allowed roles
        default: "student" // Default role is 'student'
    },
}, { timestamps: true });

export const UserNew = mongoose.model("UserNew", userSchema);
