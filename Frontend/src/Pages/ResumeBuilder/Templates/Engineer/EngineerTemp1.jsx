import React from "react";

export const EngineerTemp1 = ({ data }) => {
  return (
    <div className="my-12 p-6 border bg-white rounded shadow-md max-w-3xl mx-auto">
      {/* Name & Contact */}
      <h1 className="text-3xl font-bold">{data.name}</h1>
      <p className="text-gray-600">{data.email} | {data.phone}</p>

      {/* Summary */}
      <section className="mt-6">
        <h2 className="text-xl font-semibold border-b pb-1">Summary</h2>
        <p className="mt-2 text-gray-700">{data.objective}</p>
      </section>

      {/* Work Experience */}
      <section className="mt-6">
        <h2 className="text-xl font-semibold border-b pb-1">Work Experience</h2>
        {data.experience && data.experience.length > 0 ? (
          <ul className="mt-2 space-y-3">
            {data.experience.slice(0, 3).map((exp, index) => (
              <li key={index}>
                <h3 className="font-semibold">{exp.title}, {exp.company}</h3>
                <p className="text-sm text-gray-500">
                  {exp.start} - {exp.end}
                </p>
                <p className="text-gray-700">{exp.description}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No experience added</p>
        )}
      </section>

      {/* Education */}
      <section className="mt-6">
        <h2 className="text-xl font-semibold border-b pb-1">Education</h2>
        {data.education && data.education.length > 0 ? (
          <ul className="mt-2 space-y-2">
            {data.education.slice(0, 2).map((edu, index) => (
              <li key={index}>
                <p className="font-semibold">{edu.degree}</p>
                <p className="text-sm text-gray-500">
                  {edu.institution} ({edu.year})
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No education info</p>
        )}
      </section>

      {/* Additional Info */}
      <section className="mt-6">
        <h2 className="text-xl font-semibold border-b pb-1">Additional Information</h2>
        <div className="grid grid-cols-2 gap-4 mt-2 text-gray-700">
          {/* Skills */}
          <div>
            <h3 className="font-semibold">Skills</h3>
            <p>{data.skills?.join(", ") || "N/A"}</p>
          </div>
          {/* Languages */}
          <div>
            <h3 className="font-semibold">Languages</h3>
            <p>{data.languages?.join(", ") || "N/A"}</p>
          </div>
          {/* Certificates */}
          <div>
            <h3 className="font-semibold">Certificates</h3>
            {data.certifications?.length > 0 ? (
              <ul className="list-disc ml-5">
                {data.certifications.map((cert, idx) => (
                  <li key={idx}>{cert.name} ({cert.year})</li>
                ))}
              </ul>
            ) : (
              <p>N/A</p>
            )}
          </div>
          {/* Awards */}
          <div>
            <h3 className="font-semibold">Awards</h3>
            {data.awards?.length > 0 ? (
              <ul className="list-disc ml-5">
                {data.awards.map((award, idx) => (
                  <li key={idx}>{award.title} - {award.year}</li>
                ))}
              </ul>
            ) : (
              <p>N/A</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
