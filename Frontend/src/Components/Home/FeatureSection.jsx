import { FaSearch, FaRegFileAlt, FaCalendarAlt,FaBriefcase, FaCertificate } from "react-icons/fa";

const features = [
  {
    icon: <FaSearch className="text-3xl text-white" />,
    title: "Smart Job Matching",
    description: "AI-powered job recommendations based on your skills and interests",
  },
  {
    icon: <FaRegFileAlt className="text-3xl text-white" />,
    title: "Resume Builder",
    description: "Create professional resumes with AI-powered suggestions and templates",
  },
  {
    icon: <FaBriefcase className="text-3xl text-white" />,
    title: "Portfolio Builder",
    description: "Showcase your work with a personalized portfolio that highlights your skills and projects",
  },
  {
    icon: <FaCertificate className="text-3xl text-white" />,
    title: "Skill Assessment",
    description: "Validate your skills with industry-standard assessments and certifications",
  },
];

export default function FeatureSection() {
  return (
    <section className="bg-base-100 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Everything You Need to Succeed
        </h2>
        <p className="text-info-content-content  mb-12 text-lg">
          Comprehensive tools and resources to help you land your dream job
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-base-100 border border-gray-200 rounded-lg shadow p-6 hover:shadow-md transition text-center"
            >
              <div className="w-12 h-12 mx-auto flex items-center justify-center bg-purple-600 rounded-md mb-4">
                {feature.icon}
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-base-content mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600 ">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
