import React from "react";

const StudentTemp1 = ({ resumeData }) => {
  const {
    about,
    education,
    skills,
    projects,
    objective,
    additionalInfo,
  } = resumeData;

  return (
    <div className="my-12 max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-purple-200">
      {/* Header */}
      <div className="text-center border-b pb-4 mb-4">
        <h1 className="text-3xl font-bold text-gray-800">
          {about?.name || "Your Name"}
        </h1>
        <p className="text-gray-600">
          {(about?.email || "youremail@example.com")} | {(about?.phone || "000-000-0000")}
        </p>
      </div>

      {/* Objective */}
      <section className="mb-4">
        <h2 className="text-lg font-semibold text-purple-700 border-b mb-2">
          Objective
        </h2>
        <p className="text-gray-700">
          {about?.summary || "Write your objective here..."}
        </p>
      </section>

      {/* Education */}
      <section className="mb-4">
        <h2 className="text-lg font-semibold text-purple-700 border-b mb-2">
          Education
        </h2>

        {education?.length > 0 ? (
          education.map((edu, i) => (
            <div key={i} className="mb-2">
              <p className="font-semibold">
                {edu.degree || "Degree"} – {edu.institution || "Institution"}
              </p>
              <p className="text-gray-600 text-sm">
                {(edu.startYear || "YYYY")} - {(edu.endYear || "YYYY")}
              </p>
            </div>
          ))
        ) : (
          <p className="text-gray-600">No education added yet</p>
        )}
      </section>

      {/* Skills */}
      <section className="mb-4">
        <h2 className="text-lg font-semibold text-purple-700 border-b mb-2">
          Skills
        </h2>
        <ul className="list-disc list-inside text-gray-700">
          {skills?.length > 0 ? (
            skills.map((skill, i) => <li key={i}>{skill.name}</li>)
          ) : (
            <li>No skills added yet</li>
          )}
        </ul>
      </section>

      {/* Projects */}
      <section className="mb-4">
        <h2 className="text-lg font-semibold text-purple-700 border-b mb-2">
          Projects
        </h2>
        {projects?.length > 0 ? (
          projects.map((proj, i) => (
            <div key={i} className="mb-2">
              <p className="font-semibold">{proj.title}</p>
              <p className="text-gray-700 text-sm">{proj.description}</p>
            </div>
          ))
        ) : (
          <p>No projects added yet</p>
        )}
      </section>

      {/* Extra */}
      {
        additionalInfo &&    <section>
        <h2 className="text-lg font-semibold text-purple-700 border-b mb-2">
          Additional Information
        </h2>
        <p className="text-gray-700">
          {additionalInfo || "No additional information provided"}
        </p>
      </section>
      }
    
    </div>
  );
};

export default StudentTemp1;
