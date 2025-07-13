import React from "react";
import { Link } from "react-router";

const CompanyCards = ({ company, index }) => {
  return (
    <div>
      <Link>
        <div
          key={index}
          className="border border-gray-100 rounded-xl shadow-sm p-4 bg-white hover:shadow-lg transition"
        >
          <div className="flex flex-col items-center mb-4">
            <img
              src="https://img.naukimg.com/logo_images/groups/v1/383748.gif"
              alt={company.name}
              className="w-10 h-10 object-contain mr-3"
            />
            <h3 className="text-lg font-semibold">{company.name}</h3>
          </div>
          <div className="text-sm flex justify-center text-gray-600 mb-2">
            ⭐ {company.rating} | {company.reviews}
          </div>
          <div className="flex justify-center  flex-wrap gap-2">
            {company.tags.map((tag, idx) => (
              <span
                key={idx}
                className="bg-gray-100 border border-gray-200 text-xs px-2 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CompanyCards;
