import React from "react";
import { Link } from "react-router";

const CompaniesCards = ({ company }) => {
  return (
   <div>
    <Link to={`/companydetails/${company._id}`}>
     <div className="bg-base-100 p-5 rounded-lg shadow hover:shadow-md transition space-y-3 border border-gray-100">
      {/* Logo & Name */}
      <div className="flex items-center gap-4">
        <img
          src={company.logo}
          alt={company.name}
          className="w-14 h-14 rounded object-contain "
          onError={(e) => (e.target.src = "/fallback-logo.png")} // fallback
        />
        <div>
          <h3 className="text-lg font-semibold">{company.name}</h3>
          <p className="text-sm text-gray-500 capitalize">{company.location}</p>
        </div>
      </div>

      {/* Industry */}
      <div>
        <span className="inline-block bg-purple-100 text-purple-700 text-xs px-2 py-1 rounded-full">
          {company.industry}
        </span>
      </div>

      

      {/* Badges & Trusted */}
      <div className="flex items-center justify-between text-sm mt-2">
        <span className="text-gray-500 capitalize">
          Badge:{" "}
          <strong className="text-gray-700">{company.badges || "None"}</strong>
        </span>
   
      </div>
    </div>
    </Link>
   </div>
  );
};

export default CompaniesCards;
