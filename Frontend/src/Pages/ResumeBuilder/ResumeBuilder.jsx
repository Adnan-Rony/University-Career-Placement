
import { Link } from "react-router-dom";
import { FileText, Sparkles, Download, Zap, Check } from "lucide-react";
import resume1 from "../../assets/resume/resume1.png";
import { ResumeHeroSection } from "./ResumeUi/ResumeHome/ResumeHeroSection";

export const ResumeBuilder = () => {
  const features = [
    "Professional templates",
    "ATS-friendly formats",
    "Easy customization",
    "Download instantly"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      {/* Hero Section */}
     <ResumeHeroSection/>

      {/* Features Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {[
            {
              icon: FileText,
              title: "Professional Templates",
              description: "Choose from a variety of ATS-friendly templates designed by experts",
              color: "purple"
            },
            {
              icon: Zap,
              title: "Lightning Fast",
              description: "Create your resume in minutes with our intuitive drag-and-drop builder",
              color: "blue"
            },
            {
              icon: Download,
              title: "Download Instantly",
              description: "Export your resume in PDF or Word format with a single click",
              color: "green"
            }
          ].map((feature, index) => (
            <div 
              key={index}
              className="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl border border-gray-100 transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-14 h-14 bg-gradient-to-br from-${feature.color}-100 to-${feature.color}-200 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <feature.icon className={`text-${feature.color}-600`} size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 sm:p-12 text-center text-white shadow-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Build Your Resume?
          </h2>
          <p className="text-lg sm:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of job seekers who have successfully landed their dream jobs with our resume builder.
          </p>
          <Link 
            to="/resumebuilder/selectoption"
            className="inline-flex items-center gap-2 bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
          >
            <FileText size={20} />
            <span>Get Started for Free</span>
          </Link>
        </div>
      </div>
    </div>
  );
};