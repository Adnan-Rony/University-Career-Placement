import { CiBookmark, CiCalendar } from "react-icons/ci";
import { GiMoneyStack } from "react-icons/gi";
import { MdOutlineLocationOn } from "react-icons/md";
import { RxTimer } from "react-icons/rx";
import { Link } from "react-router-dom"; // ✅ make sure it's react-router-dom
import { UseJobs } from "../../hooks/useJobs.js";

import img from "../../assets/company.PNG";
import ApplyJob from "../DetailsJob/ApplyJob.jsx";
import { useState } from "react";
import AllJobsSkeleton from "../loading/AllJobsSkeleton.jsx";

const JOBS_PER_PAGE = 4; // 👈 Customize how many jobs to show per page

const AllJobsCards = () => {
  const { data, isPending, error } = UseJobs();
  const [activeJobId, setActiveJobId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1); // 👈 Page state

  const jobs = data?.jobs || [];

  // Calculate pagination values
  const totalPages = Math.ceil(jobs.length / JOBS_PER_PAGE);
  const startIndex = (currentPage - 1) * JOBS_PER_PAGE;
  const currentJobs = jobs.slice(startIndex, startIndex + JOBS_PER_PAGE);

  const handleApply = (applicationData) => {
    console.log("Application submitted", applicationData);
    setActiveJobId(null);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    setActiveJobId(null); // reset modal when page changes
  };

  if (isPending) return <AllJobsSkeleton />;
  if (error) return <div>Something went wrong loading jobs!</div>;

  return (
    <div className="space-y-4">
      {/* Job Cards */}
      {currentJobs.map((job) => (
        <div
          key={job._id}
          className="bg-white border border-gray-200 p-3 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 w-full space-y-4"
        >
          {/* Header: Logo + Title + Bookmark */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-4">
              <img
                src={job?.company?.logo || img}
                alt="company logo"
                className="w-14 h-14 rounded-md object-cover "
              />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {job.title}
                </h3>
                <p className="text-sm text-gray-500">
                  {job?.companyName || "Company"}
                </p>
              </div>
            </div>
            <button className="text-gray-400 hover:text-gray-600 transition">
              <CiBookmark className="text-2xl" />
            </button>
          </div>

          {/* Info Badges */}
          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600">
            <span className="flex items-center gap-1 bg-purple-100 text-purple-700 px-3 py-1 rounded-full font-medium capitalize">
              {job?.jobType}
            </span>

            <span className="flex items-center gap-1">
              <MdOutlineLocationOn className="text-lg text-gray-500" />
              {job?.city}, {job?.location}, {job?.country}
            </span>

            <span className="flex items-center gap-1">
              <RxTimer className="text-lg text-gray-500" />
              {new Date(job?.createdAt).toLocaleDateString()}
            </span>

            <span className="flex items-center gap-1">
              <GiMoneyStack className="text-lg text-gray-500" />
              <span className="font-semibold text-gray-800">
                {job.salaryRange?.min} - {job.salaryRange?.max} BDT
              </span>
            </span>
          </div>

          {/* Deadline */}
          <div>
            <p className="text-sm font-medium text-gray-600 flex items-center gap-2">
              <CiCalendar className="text-lg" />
              Deadline:
              <span className="text-gray-800 font-semibold">
                {new Date(job?.deadline).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </p>
          </div>

          <hr className="text-gray-100" />

          {/* Actions */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
            <Link to={`/job/details/${job._id}`} className="w-full sm:w-auto">
              <button className="w-full sm:w-auto text-sm font-medium border border-purple-600 text-purple-600 py-2 px-4 rounded-md hover:bg-purple-600 hover:text-white transition-all duration-200">
                Learn More
              </button>
            </Link>
            <button
              onClick={() => setActiveJobId(job._id)}
              className="w-full sm:w-auto text-sm font-medium bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-all duration-200"
            >
              Apply Now
            </button>

            {activeJobId === job._id && (
              <ApplyJob
                isOpen={true}
                onClose={() => setActiveJobId(null)}
                onSubmit={handleApply}
                jobId={job._id}
              />
            )}
          </div>
        </div>
      ))}

      {/* Pagination Controls */}
      <div className="flex justify-center mt-6 gap-2">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-3 py-1 border rounded disabled:opacity-50"
        >
          Prev
        </button>

        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => handlePageChange(i + 1)}
            className={`px-3 py-1 border rounded ${
              currentPage === i + 1
                ? "bg-purple-600 text-white"
                : "text-gray-700"
            }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-3 py-1 border rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AllJobsCards;
