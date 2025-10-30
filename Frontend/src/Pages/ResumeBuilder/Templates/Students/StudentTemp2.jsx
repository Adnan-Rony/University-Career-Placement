import React from "react";

export const StudentTemp2 = ({resumeData}) => {
 console.log("prevbie",resumeData);
 const { about, education, experience, skills, projects } = resumeData;
 
  return (
 <div className="min-h-screen bg-white p-6 max-w-5xl border-2">
      <div className="h-20 bg-orange-500"></div>

      {/* Header */}
      <div className="flex justify-between my-6 gap-6">
        <div className="text-white mb-6">
          <h1 className="text-4xl font-extrabold text-blue-600 my-2">
            {about?.name || "Your Name"}
          </h1>
          <p className="text-xl text-black">{about?.profession || "Student"}</p>
        </div>

        <div className="flex flex-col text-blue-800">
          <p className="font-semibold">
            <a href={about?.linkedin || "#"} target="_blank">
              LinkedIn
            </a>
          </p>
          <p className="font-semibold">{about?.phone || "000-000-0000"}</p>
          <p className="font-semibold">
            <a href={`mailto:${about?.email || "#"}`}>
              {about?.email || "youremail@example.com"}
            </a>
          </p>
          <p>
            <a href={about?.portfolio || "#"} target="_blank">
              Portfolio
            </a>
          </p>
        </div>
      </div>

      {/* Experience */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-blue-800">Experience</h2>
        <div className="ml-4 space-y-4 my-4">
          {experience?.length > 0
            ? experience.map((exp, i) => (
                <div key={i}>
                  <h3 className="text-xl font-semibold">
                    {exp.position || "Position"}
                  </h3>
                  <p className="font-medium">{exp.company || "Company Name"}</p>
                  <p className="text-gray-600 font-medium">
                    {exp.startYear || "YYYY"} - {exp.endYear || "YYYY"}
                  </p>
                  {exp.description?.length > 0 && (
                    <ul className="list-disc list-inside text-gray-700">
                      {exp.description.map((desc, idx) => (
                        <li key={idx}>{desc}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))
            : <p className="text-gray-600">No experience added yet</p>}
        </div>
      </section>

      <div className="flex">
        {/* Education */}
        <section className="w-1/2 mr-4">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">Education</h2>
          <div className="ml-4 space-y-4">
            {education?.length > 0
              ? education.map((edu, i) => (
                  <div key={i}>
                    <h3 className="text-xl font-semibold">{edu.degree}</h3>
                    <p className="text-gray-600">
                      {edu.institution}, {edu.startYear} - {edu.endYear}
                    </p>
                    {edu.grade && <p>Grade: {edu.grade}</p>}
                  </div>
                ))
              : <p className="text-gray-600">No education added yet</p>}
          </div>
        </section>

        {/* Skills */}
        <section className="w-1/2">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">Skills</h2>
          <ul className="list-disc list-inside text-gray-700">
            {skills?.length > 0
              ? skills.map((skill, i) => <li key={i}>{skill.name}</li>)
              : <li>No skills added yet</li>}
          </ul>
        </section>
      </div>

      {/* Projects */}
      <section className="mt-6">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">Projects</h2>
        <ul className="list-disc list-inside text-gray-700">
          {projects?.length > 0
            ? projects.map((proj, i) => (
                <li key={i}>
                  {proj.title} - {proj.description}
                </li>
              ))
            : <li>No projects added yet</li>}
        </ul>
      </section>
    </div>
  );
};
