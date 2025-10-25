import mongoose from "mongoose";
import { Job } from "./job.model.js";

const companySchema = new mongoose.Schema(
  {
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
        "others",
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
    trusted: {
      type: String,
      trim: true,
      enum: ["verified", "notverified"],
      default: "notverified",
    },

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
    badges: {
      type: String,
      enum: ["trusted", "top-recuiter", "regular-recuiter"],
      default: "regular-recuiter",
    },

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
companySchema.pre(
  "deleteOne",
  { document: true, query: false },
  async function (next) {
    try {
      await Job.deleteMany({ company: this._id });
      next();
    } catch (err) {
      next(err);
    }
  }
);
companySchema.index({ industry: 1 });

export const Company = mongoose.model("Company", companySchema);
