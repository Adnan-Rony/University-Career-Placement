import React from "react";

const JobDescription = ({job}) => {
    const description = job?.description || "";
  const requirements = job?.jobRequirements || "";
  const requirementList = requirements
    .split(".")           
    .map(item => item.trim())
    .filter(item => item.length > 0);
  return (
    <div>
      <div className="flex-1    p-6 rounded-lg   text-gray-700">
        <h2 className="text-lg font-bold mb-4">Job Description</h2>

        <p className="mb-6 text-sm md:text-base leading-relaxed md:leading-loose">
      {description}
        </p>

        <h3 className="font-bold mb-3">Key Responsibilities</h3>
        <ul className="list-disc list-inside space-y-3 text-sm md:text-base">
          {requirementList.map((req, index) => (
            <li key={index}>{req}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default JobDescription;
