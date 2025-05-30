import React from "react";
import { CiBookmark, CiLocationOn } from "react-icons/ci";
import { SectionTitle } from "../Shared/SectionTitle";
import { UseJobs } from "../../hooks/useJobs.js";
import { Link } from "react-router";

export const Featured = () => {
  const { data, isPending, error } = UseJobs();
  const jobs = data?.jobs || [];
const  companyLogo='https://res.cloudinary.com/dto6ulc5n/image/upload/v1742758272/icons8-redragon-96_oyy58g.png'

  if (isPending)
    return (
      <div className="flex justify-center items-center h-96 ">
        <span className="loading loading-dots loading-xl"></span>
      </div>
    );

  if (error) return <h2>Error: {error.message}</h2>;

  return (
    <div className="container mx-auto mt-12">
      <SectionTitle
        title={"Featured Job"}
        subtitle={" Choose jobs from the top employers and apply for the same"}
      ></SectionTitle>

      <div
        className="grid grid-cols-1 md:grid-cols-2 md:gap-8 lg:grid-cols-3 
    lg:gap-20 mb-8 "
      >
        {jobs.map((job) => (
          <div
            key={job._id}
            className="bg-white shadow-md rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition duration-300"
          >
            <div className="p-6">
              {/* Header: Title & Bookmark */}
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-800">
                  {job?.title}
                </h2>
                <CiBookmark className="text-xl text-gray-500 cursor-pointer hover:text-gray-700" />
              </div>

              {/* Job Type & Salary */}
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-purple-100 text-purple-700 text-xs font-medium px-3 py-1 rounded-full">
                  {job?.jobType}
                </span>
                {job?.salary && (
                  <span className="text-sm text-gray-600 font-medium">
                    💰 Salary: {job?.salary}
                  </span>
                )}
              </div>

              {/* Company Info */}
              <div className="flex items-center gap-4 mb-5">
                <img
                  src={job?.company?.logo || companyLogo}
                  alt="Company Logo"
                  className="w-12 h-12 object-cover rounded-xl "
                />
                <div>
                  <p className="font-semibold text-gray-800">
                    {job?.company?.name || "Unknown Company"}
                  </p>
                  <div className="flex items-center gap-1 text-sm text-gray-600">
                    <CiLocationOn className="text-lg" />
                    <span>
                      {job?.location?.city}, {job?.location?.state},{" "}
                      {job?.location?.country}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-3">
                <Link to={`/job/details/${job._id}`}>
                <button className="text-sm font-medium border border-r-primary text-r-primary py-2 px-3 rounded-lg hover:bg-r-primary hover:text-white transition">
                  Learn More
                </button>
                </Link>
                <button className="text-sm font-medium bg-r-primary text-white py-2 px-3 rounded-lg hover:bg-r-accent transition">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
