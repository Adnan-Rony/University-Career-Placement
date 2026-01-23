import React from 'react';

export const Designertemplate = ({ resumeData }) => {
  const { about,about:{summary}, skills, experience, education, additional:additionalInfo } = resumeData;


return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-lg">

        {/* Header */}
        <header className="bg-gradient-to-r from-gray-800 to-gray-900 text-white p-8">
          <h1 className="text-4xl font-bold mb-2">
            {about?.name || "Your Name"}
          </h1>

          <h2 className="text-2xl font-light mb-4">
            {about?.profession || "Your Profession"}
          </h2>

          <p className="text-sm text-gray-300">
            {about?.address && <span>{about.address} | </span>}
            {about?.email && <span>{about.email} | </span>}
            {about?.portfolio && <span>{about.portfolio}</span>}
          </p>
        </header>

        <div className="p-8">

          {/* Summary */}
           {summary && (
            <section className="mb-8">
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-gray-800 mb-3 italic">SUMMARY</h3>
                <p className="text-gray-700 leading-relaxed">
                  {summary}
                </p>
              </div>
            </section>
          )} 

          {/* Technical Skills */}
  {skills?.length > 0 && (
  <section className="mb-8">
    <div className="bg-gray-100 p-6 rounded-lg">
      <h3 className="text-lg font-bold text-gray-800 mb-4 italic">TECHNICAL SKILLS</h3>

      <div className="grid grid-cols-3 gap-6">
        {skills.map((skill, i) => (
          <p key={i} className="text-gray-700 mb-2">
            {skill.name} ({skill.level})
          </p>
        ))}
      </div>

    </div>
  </section>
)}

          {/* Professional Experience */}
         {experience?.length > 0 && (
            <section className="mb-8">
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-gray-800 mb-4 italic">PROFESSIONAL EXPERIENCE</h3>

                {experience.map((exp, i) => (
                  <div key={i} className="mb-6">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-base font-bold text-gray-800">
                        {exp?.company || "Company Name"}
                      </h4>

                      <span className="text-sm font-semibold text-gray-700">
                        {(exp?.startYear && exp?.endYear) && `${exp.startYear} - ${exp.endYear}`}
                      </span>
                    </div>

                    {exp?.description?.length > 0 && (
                      <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                        {exp.description.map((line, idx) => (
                          <li key={idx}>{line}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Education */}
         {education?.length > 0 && (
            <section className="mb-8">
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-gray-800 mb-4 italic">EDUCATION</h3>

                {education.map((edu, i) => (
                  <div key={i} className="mb-4">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-base font-bold text-gray-800">
                        {edu?.degree || "Degree Title"}
                      </h4>

                      <span className="text-sm font-semibold text-gray-700">
                        {(edu?.startYear && edu?.endYear) && `${edu.startYear} - ${edu.endYear}`}
                      </span>
                    </div>

                    {edu?.institution && (
                      <p className="text-gray-700 mb-1">{edu.institution}</p>
                    )}

                    {edu?.details?.length > 0 && (
                      <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                        {edu.details.map((d, idx) => (
                          <li key={idx}>{d}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )} 

          {/* Additional Information */}
           {additionalInfo && (
            <section>
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-gray-800 mb-4 italic">
                  ADDITIONAL INFORMATION
                </h3>

                <ul className="space-y-2 text-gray-700">
                  {additionalInfo?.languages && (
                    <li><span className="font-semibold">Languages:</span> {additionalInfo.languages}</li>
                  )}

                  {additionalInfo?.certifications && (
                    <li><span className="font-semibold">Certifications:</span> {additionalInfo.certifications}</li>
                  )}

                  {additionalInfo?.awards && (
                    <li><span className="font-semibold">Awards/Activities:</span> {additionalInfo.awards}</li>
                  )}
                </ul>
              </div>
            </section>
          )} 
        </div>
      </div>
    </div>
  );
};

export default Designertemplate;
