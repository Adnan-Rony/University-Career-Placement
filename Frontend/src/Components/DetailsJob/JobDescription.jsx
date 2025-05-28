import React from 'react';

const JobDescription = () => {
    return (
        <div>
             <div className="flex-1 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition text-gray-700">
                        <h2 className="text-lg font-semibold mb-4">Job Description</h2>
                        <p className="mb-6 text-sm md:text-base leading-relaxed md:leading-loose">
                          As a Product Designer, you will work within a Product Delivery
                          Team fused with UX, engineering, product and data talent. You will
                          help the team design beautiful interfaces that solve business
                          challenges for our clients.
                        </p>
            
                        <h3 className="font-semibold mb-3">Key Responsibilities</h3>
                        <ul className="list-disc list-inside space-y-3 text-sm md:text-base">
                          <li>Be involved in every step of the product design cycle</li>
                          <li>Work with BAs, product managers and tech teams</li>
                          <li>Maintain quality of the design process</li>
                          <li>Estimate design tickets during planning</li>
                          <li>Contribute to sketching sessions and iterate on UI</li>
                          <li>Ensure design choices are data-driven</li>
                          <li>Design pixel-perfect responsive UIs</li>
                        </ul>
                      </div>
        </div>
    );
};

export default JobDescription;