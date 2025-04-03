import mongoose from "mongoose";

const companySchema = new mongoose.Schema({
    
        name: { type: String, required: true },
        location: { type: String, required: true },
        industry: { type: String, required: true },
        website: { type: String },
        
        userId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User", // The user who created the company
          required: true,
        },
      },
      { timestamps: true }
    )
export const Company = mongoose.model("CompanyCollection", companySchema);