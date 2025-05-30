import mongoose from "mongoose";

const companySchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },

  industry: {
    type: String,
    enum: [
      "Information Technology",
      "Healthcare",
      "Education",
      "Finance & Banking",
      "Manufacturing",
      "Construction",
      "Transportation & Logistics",
      "Retail & E-commerce",
      "Telecommunications",
      "Media & Entertainment",
      "Energy & Utilities",
      "Agriculture",
      "Real Estate",
      "Government & Public Sector",
      "Hospitality & Tourism",
      "Legal Services",
      "Non-Profit / NGOs",
      "Aerospace & Defense",
      "Automotive",
      "Biotechnology & Pharmaceuticals",
      "Software",
      "others"
    ],
    required: true,
    trim: true,
  },

  establishment: { type: String, trim: true },
employees: {
  type: String,
  enum: ["1-25", "26-50", "51-100", "100-500"],
  required: true,
  trim: true,
},


  country: { type: String, trim: true },
  location: { type: String, trim: true },
  city: { type: String, trim: true },

  contactPersonName: { type: String, required: true, trim: true },
  contactPersonDesignation: { type: String, required: true, trim: true },
  contactPersonEmail: { type: String, required: true, trim: true },
  contactPersonMobile: { type: String, required: true, trim: true },

  facebookUrl: { type: String, trim: true },
  twitterUrl: { type: String, trim: true },
  linkedinUrl: { type: String, trim: true },
  websiteUrl: { type: String, trim: true },

  description: { type: String, required: true, trim: true },

  logo: { type: String },
  cover: { type: String },

  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
},
{
  timestamps: true,
});

companySchema.index({ industry: 1 });

export const Company = mongoose.model("Company", companySchema);
