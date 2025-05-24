import mongoose from "mongoose";

const companySchema = new mongoose.Schema({
    
name:     { type: String, required: true, trim: true },
  location: { type: String, required: true, trim: true },
  industry: { type: String, required: true, trim: true },
  description: { type: String, required: true,  },
  website:  { type: String, trim: true },
  logo:     { type: String },
  createdBy:{ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
},
    
      { timestamps: true }
    )
    companySchema.index({ industry: 1 });
export const Company = mongoose.model("CompanyCollection", companySchema);