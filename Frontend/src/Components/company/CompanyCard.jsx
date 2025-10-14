import React from "react";
import { CiBookmark } from "react-icons/ci";
import { Link } from "react-router";
import { MdOutlineLocationOn } from 'react-icons/md';

const CompanyCard = ({ companies }) => {
  return (
    <div className="grid lg:grid-cols-3 gap-4 md:grid-cols-3 sm:grid-cols-1 max-w-screen-xl mx-auto">
      {companies?.map((company) => (
        <Link to={`/companydetails/${company._id}`}>
          <div className="group border border-gray-200 p-5 rounded-xl text-center shadow-md w-64 mx-auto bg-white transition hover:shadow-lg relative">
            {/* Featured badge */}
            <div className="absolute top-3 left-3">
              <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-0.5 rounded-full">
                Featured
              </span>
            </div>

            {/* Optional Bookmark icon */}
            <div className="absolute top-3 right-3 cursor-pointer">
              <CiBookmark className="text-xl" />
            </div>

            {/* Logo */}
            <img
              src={company?.logo}
              alt="Company Logo"
              className="w-14 h-14 rounded-full mx-auto mb-3 object-contain"
            />

            {/* Company name */}
            <h3 className="text-lg font-semibold">{company?.name}</h3>

            {/* Location */}
            <p className="text-sm text-gray-500 flex items-center justify-center mt-1 gap-1">
               <MdOutlineLocationOn className="text-xl " />
              {company?.location || "Unknown"}
            </p>

            {/* Category */}
            <p className="text-sm text-gray-500 mt-1">{company?.industry}</p>

            {/* Open jobs button */}
            <button className="mt-4 bg-blue-100 text-blue-600 text-sm px-4 py-1.5 rounded-full font-medium transition hover:bg-blue-200">
              Open Jobs – {company?.openings || "0"}
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CompanyCard;
