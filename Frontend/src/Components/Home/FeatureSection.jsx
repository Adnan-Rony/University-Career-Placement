import {
  FaSearch,
  FaRegFileAlt,
  FaBriefcase,
  FaCertificate,
} from "react-icons/fa";
import { Heading } from "../Shared/Heading";

const features = [
  {
    icon: <FaSearch className="text-4xl text-white" />,
    title: "Smart Job Matching",
    description:
      "AI-powered job recommendations based on your skills and interests",
  },
  {
    icon: <FaRegFileAlt className="text-4xl text-white" />,
    title: "Resume Builder",
    description:
      "Create professional resumes with AI-powered suggestions and templates",
  },
  {
    icon: <FaBriefcase className="text-4xl text-white" />,
    title: "Portfolio Builder",
    description:
      "Showcase your work with a personalized portfolio that highlights your skills and projects",
  },
  {
    icon: <FaCertificate className="text-4xl text-white" />,
    title: "Skill Assessment",
    description:
      "Validate your skills with industry-standard assessments and certifications",
  },
];

export default function FeatureSection() {
  return (
    <section className="bg-base-100 py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-base-100 to-base-200 opacity-50"></div>
      <div className="container mx-auto px-6 text-center relative z-10">
        <Heading
          title="Everything You Need to Succeed"
          subtitle="Comprehensive tools and resources to help you land your dream job"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-base-100 border border-base-300 rounded-xl shadow-lg p-8 hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out text-center"
            >
              <div className="w-16 h-16 mx-auto flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full mb-6 shadow-md">
                {feature.icon}
              </div>
              <h3 className="font-bold text-xl text-gray-900 dark:text-base-content mb-3">
                {feature.title}
              </h3>
              <p className="text-base text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}