import React from "react";

const CompaniesCards = ({ company }) => {
  return (
    <div className="bg-white p-5 rounded-lg shadow hover:shadow-md transition space-y-3 border border-gray-100">
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
          <p className="text-sm text-gray-500">{company.location}</p>
        </div>
      </div>

      {/* Industry */}
      <div>
        <span className="inline-block bg-purple-100 text-purple-700 text-xs px-2 py-1 rounded-full">
          {company.industry}
        </span>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-600 line-clamp-3">
        {company.description}
      </p>

      {/* Badges & Trusted */}
      <div className="flex items-center justify-between text-sm mt-2">
        <span className="text-gray-500 capitalize">
          Badge:{" "}
          <strong className="text-gray-800">{company.badges || "None"}</strong>
        </span>
        <span
          className={`text-xs px-2 py-1 rounded-full ${
            company.trusted === "verified"
              ? "bg-green-100 text-green-600"
              : "bg-yellow-100 text-yellow-700"
          }`}
        >
          {company.trusted === "verified" ? "Verified" : "Not Verified"}
        </span>
      </div>
    </div>
  );
};

export default CompaniesCards;
