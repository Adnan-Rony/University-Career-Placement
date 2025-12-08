import React from 'react'
import { Link } from "react-router-dom";
import { FileText, Sparkles, Download, Zap, Check } from "lucide-react";

import resume1 from "../../../../assets/resume/resume1.png"
import banner from "../../../../assets/resume/resume-banner.jpg"
import { useCurrentUser } from '../../../../hooks/useAuth';
import { useUserResumes } from '../../../../hooks/useResume';
export const ResumeHeroSection = () => {

   const {data:userdata}=useCurrentUser()
      const userId=userdata?.user._id
  
      const {data:myresume,isPending}=useUserResumes(userId)
      console.log(myresume);
      const features = [
    "Professional templates",
    "ATS-friendly formats",
    "Easy customization",
    "Download instantly"
  ];
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles size={16} />
              <span>Free Resume Builder</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Build Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                Professional Resume
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              Create a standout resume in minutes with our easy-to-use builder. 
              Choose from professional templates and land your dream job.
            </p>

            {/* Features List */}
            <div className="grid grid-cols-2 gap-3 mb-8 max-w-md mx-auto lg:mx-0">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-gray-700">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <Check size={14} className="text-green-600" />
                  </div>
                  <span className="text-sm sm:text-base">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link 
                to="/resumebuilder/selectoption"
                className="group relative inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
              >
                <FileText size={20} />
                <span>Create Resume Now</span>
                <Zap size={16} className="absolute -top-1 -right-1 text-yellow-300 animate-pulse" />
              </Link>
{
  myresume &&  <Link
  to={'/resumebuilder/selectoption'}
  className="inline-flex items-center justify-center gap-2 bg-white text-gray-700 px-8 py-4 rounded-lg font-semibold text-lg border-2 border-gray-200 hover:border-purple-300 hover:bg-purple-50 transition-all duration-200">
                <Download size={20} />
                <span>Edit Existing Resume</span>
              </Link>
}
              {/* 
                
                <button className="inline-flex items-center justify-center gap-2 bg-white text-gray-700 px-8 py-4 rounded-lg font-semibold text-lg border-2 border-gray-200 hover:border-purple-300 hover:bg-purple-50 transition-all duration-200">
                <Download size={20} />
                <span>View Samples</span>
              </button>
              
              */}
            </div>

            {/* Social Proof */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 border-2 border-white"></div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 border-2 border-white"></div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-emerald-400 border-2 border-white"></div>
                  </div>
                  <span className="font-medium">10k+ resumes created</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-yellow-500">★★★★★</span>
                  <span className="font-medium ml-1">4.9/5 rating</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 w-full max-w-md lg:max-w-xl">
            <div className="relative">
              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-purple-200 rounded-full blur-3xl opacity-60"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-200 rounded-full blur-3xl opacity-60"></div>
              
              {/* Resume Preview Card */}
              <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200 transform hover:scale-105 transition-transform duration-300">
                <div className="aspect-[8.5/11]">
                  <img 
                    src={banner}
                    className="w-full h-full border-2 border-purple-600  object-cover
                    
                    "
                    alt="Professional resume template preview" 
                  />
                </div>
                
                
                {/* Floating Badge */}
                <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                  ATS Friendly
                </div>
              </div>

              {/* Floating Stats Cards */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 border border-gray-100 hidden sm:block">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                    <FileText className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">15+</p>
                    <p className="text-xs text-gray-600">Templates</p>
                  </div>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-lg p-4 border border-gray-100 hidden lg:block">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                    <Zap className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">5 min</p>
                    <p className="text-xs text-gray-600">Quick Build</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
