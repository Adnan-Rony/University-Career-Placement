import React from "react";
import { useCurrentUser } from "../../../../../../../hooks/useAuth";
import { Github, Linkedin, Globe, FileText } from "lucide-react";

export const ProfileSummary = () => {
  const { data } = useCurrentUser();
  const infos = data?.user;

  const {
    name,
    picture,
    location,
    socialLinks,
    bio,
    education,
    workExperience,
  } = infos || {};

  return (
    <div className="mx-4 my-6 p-6 bg-white border border-gray-200 rounded-xl shadow-sm">
      {/* Header Section */}
      <section className="flex flex-col sm:flex-row justify-between items-start gap-4 pb-6 border-b border-gray-200">
        <div className="flex gap-4 items-center">
          <figure className="h-16 w-16 flex-shrink-0">
            <img
              className="w-full h-full object-cover rounded-full border-2 border-gray-300"
              src={picture}
              alt={`${name}'s profile`}
            />
          </figure>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{name}</h1>
            <p className="text-gray-500 mt-0.5">{location}</p>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex gap-3">
          {socialLinks?.github && (
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Visit GitHub profile"
            >
              <Github className="w-5 h-5" />
            </a>
          )}
          {socialLinks?.linkedin && (
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Visit LinkedIn profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          )}
          {socialLinks?.portfolio && (
            <a
              href={socialLinks.portfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Visit portfolio website"
            >
              <Globe className="w-5 h-5" />
            </a>
          )}
          {socialLinks?.resume && (
            <a
              href={socialLinks.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="View resume"
            >
              <FileText className="w-5 h-5" />
            </a>
          )}
        </div>
      </section>

      {/* About Me */}
      {bio && (
        <section className="py-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 mb-3">About Me</h2>
          <p className="text-gray-700 leading-relaxed">{bio}</p>
        </section>
      )}

      {/* Education */}
      {education && education.length > 0 && (
        <section className="py-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Education</h2>
          <div className="space-y-4">
            {education.map((edu, index) => (
              <div key={index} className="pl-4 border-l-2 border-purple-500">
                <h3 className="text-base font-semibold text-gray-900 capitalize">
                  {edu.degreeType}
                </h3>
                <p className="text-purple-700 font-medium mt-1">{edu.college}</p>
                <p className="text-sm text-gray-600 mt-1">
                  {edu.startYear} - {edu.endYear}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Work Experience */}
      {workExperience && workExperience.length > 0 && (
        <section className="py-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Work Experience
          </h2>
          <div className="space-y-5">
            {workExperience.map((exp, index) => (
              <div key={index} className="pl-4 border-l-2 border-purple-500">
                <h3 className="text-base font-semibold text-gray-900">{exp.company}</h3>
                <p className="text-purple-700 font-medium mt-1">{exp.title}</p>
                {exp.description && (
                  <p className="text-sm text-gray-700 mt-2 leading-relaxed">
                    {exp.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};