import React from "react";

 const StudentTemp1 = ({ data }) => {
  return (
    <div className="my-12 max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border">
      {/* Header */}
      <div className="text-center border-b pb-4 mb-4">
        <h1 className="text-3xl font-bold text-gray-800">{data.name}</h1>
        <p className="text-gray-600">{data.email} | {data.phone}</p>
      </div>

      {/* Objective */}
      <section className="mb-4">
        <h2 className="text-lg font-semibold text-purple-700 border-b mb-2">
          Objective
        </h2>
        <p className="text-gray-700">{data.objective}</p>
      </section>

      {/* Education */}
      <section className="mb-4">
        <h2 className="text-lg font-semibold text-purple-700 border-b mb-2">
          Education
        </h2>
        {data.education.map((edu, i) => (
          <div key={i} className="mb-2">
            <p className="font-semibold">{edu.degree} – {edu.institution}</p>
            <p className="text-gray-600 text-sm">{edu.year}</p>
          </div>
        ))}
      </section>

      {/* Skills */}
      <section className="mb-4">
        <h2 className="text-lg font-semibold text-purple-700 border-b mb-2">
          Skills
        </h2>
        <ul className="list-disc list-inside text-gray-700">
          {data.skills.map((skill, i) => <li key={i}>{skill}</li>)}
        </ul>
      </section>

      {/* Projects */}
      <section className="mb-4">
        <h2 className="text-lg font-semibold text-purple-700 border-b mb-2">
          Projects
        </h2>
        {data.projects.map((proj, i) => (
          <div key={i} className="mb-2">
            <p className="font-semibold">{proj.title}</p>
            <p className="text-gray-700 text-sm">{proj.description}</p>
          </div>
        ))}
      </section>

      {/* Extra */}
      <section>
        <h2 className="text-lg font-semibold text-purple-700 border-b mb-2">
          Additional Information
        </h2>
        <p className="text-gray-700">{data.additionalInfo}</p>
      </section>
    </div>
  );
};


export default StudentTemp1