import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useResumeContext } from "../../../Context/ResumeProvider";

import { User, Mail, Phone, MapPin, Linkedin, Globe, FileText, MailIcon } from "lucide-react";
import { useUserResumes } from "../../../hooks/useResume";

export default function ResumeAboutForm() {
const { setSubmit, updateAbout, setTriggerSubmit,resumeData } = useResumeContext();
  const {
    register,
    handleSubmit,
reset,
    formState: { errors },
  } = useForm(

);
  
  const formRef = useRef(null);


  const onSubmit = (data) => {

    updateAbout(data);
    setSubmit(false);
   
  };
useEffect(() => {
  if (resumeData?.about) {
    reset({
      name: resumeData.about.name || "",
      email: resumeData.about.email || "",
      phone: resumeData.about.phone || "",
      location: resumeData.about.location || "",
      linkedin: resumeData.about.linkedin || "",
      portfolio: resumeData.about.portfolio || "",
      summary: resumeData.about.summary || "",
    });
  }
}, [resumeData, reset]);
  // for auto submitting
  useEffect(() => {
    setTriggerSubmit(() => handleSubmit(onSubmit)); 
  }, []);
console.log(resumeData?.about.name);
  return (
  <div className="max-w-5xl mx-auto p-2 sm:p-6">
      <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600
         to-indigo-700 px-6 py-5">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <FileText className="w-6 h-6" /> Personal Information
          </h2>
          <p className="text-blue-100 mt-1 text-sm">
            Fill in your professional details
          </p>
        </div>

        {/* Form */}
        <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className="p-6 sm:p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <div className="flex flex-col space-y-1">
              <label className="text-sm font-medium text-gray-700 flex items-center gap-1">
                <User className="w-4 h-4 text-gray-500" /> Full Name
              </label>
              <input 
              
                className={`px-4 py-2.5 border rounded-lg w-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                  errors.name ? "border-red-300 bg-red-50" : "border-gray-300 bg-white hover:border-gray-400"
                }`}
                {...register("name", { required: "Please enter your full name." })}
              />
              {errors.name && (
                <span className="text-sm text-red-500">{errors.name.message}</span>
              )}
            </div>

            {/* Email */}
            <div className="flex flex-col space-y-1">
              <label className="text-sm font-medium text-gray-700 flex items-center gap-1">
                <Mail className="w-4 h-4 text-gray-500" /> Email Address
              </label>
              <input
                type="email"
                className={`px-4 py-2.5 border rounded-lg w-full transition-all 
                  duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                  errors.email ? "border-red-300 bg-red-50" : "border-gray-300 bg-white hover:border-gray-400"
                }`}
                {...register("email", {
                  required: "Please provide your email address.",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email address.",
                  },
                })}
              />
              {errors.email && (
                <span className="text-sm text-red-500">{errors.email.message}</span>
              )}
            </div>

            {/* Phone */}
            <div className="flex flex-col space-y-1">
              <label className="text-sm font-medium text-gray-700 flex items-center gap-1">
                <Phone className="w-4 h-4 text-gray-500" /> Phone Number
              </label>
              <input
                className={`px-4 py-2.5 border rounded-lg w-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                  errors.phone ? "border-red-300 bg-red-50" : "border-gray-300 bg-white hover:border-gray-400"
                }`}
                {...register("phone", {
                  required: false,
                  pattern: {
                    value: /^[0-9+\-\s]{7,15}$/,
                    message: "Enter a valid phone number.",
                  },
                })}
              />
              {errors.phone && (
                <span className="text-sm text-red-500">{errors.phone.message}</span>
              )}
            </div>

            {/* Location */}
            <div className="flex flex-col space-y-1">
              <label className="text-sm font-medium text-gray-700 flex items-center gap-1">
                <MapPin className="w-4 h-4 text-gray-500" /> Location
              </label>
              <input
                className={`px-4 py-2.5 border rounded-lg w-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                  errors.location ? "border-red-300 bg-red-50" : "border-gray-300 bg-white hover:border-gray-400"
                }`}
                {...register("location", { required: "Please mention your current location." })}
              />
              {errors.location && (
                <span className="text-sm text-red-500">{errors.location.message}</span>
              )}
            </div>

            {/* LinkedIn */}
            <div className="flex flex-col space-y-1">
              <label className="text-sm font-medium text-gray-700 flex items-center gap-1">
                <Linkedin className="w-4 h-4 text-gray-500" /> LinkedIn Profile
              </label>
              <input
                className={`px-4 py-2.5 border rounded-lg w-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                  errors.linkedin ? "border-red-300 bg-red-50" : "border-gray-300 bg-white hover:border-gray-400"
                }`}
                {...register("linkedin", { required: "Please share your LinkedIn profile link." })}
              />
              {errors.linkedin && (
                <span className="text-sm text-red-500">{errors.linkedin.message}</span>
              )}
            </div>

            {/* Portfolio */}
            <div className="flex flex-col space-y-1">
              <label className="text-sm font-medium text-gray-700 flex items-center gap-1">
                <Globe className="w-4 h-4 text-gray-500" /> Portfolio (Optional)
              </label>
              <input
                className="px-4 py-2.5 border rounded-lg w-full border-gray-300 bg-white hover:border-gray-400"
                {...register("portfolio")}
              />
            </div>
          </div>

          {/* Professional Summary */}
          <div className="flex flex-col space-y-2">
            <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
              <FileText className="w-4 h-4 text-gray-500" /> Professional Summary
            </label>
            <textarea
              className={`px-4 py-3 border rounded-lg w-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none ${
                errors.summary ? "border-red-300 bg-red-50" : "border-gray-300 bg-white hover:border-gray-400"
              }`}
              rows="5"
              placeholder="Write a brief summary of your professional background and key achievements..."
              {...register("summary", { required: "Please write a short professional summary." })}
            />
            {errors.summary && (
              <span className="text-sm text-red-500">{errors.summary.message}</span>
            )}
          </div>

          {/* Tip */}
          <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg text-sm text-purple-800">
            <strong>Tip:</strong> Make sure all information is accurate and up-to-date. This will be used to generate your professional resume.
          </div>
        </form>
      </div>
    </div>
  );
}
