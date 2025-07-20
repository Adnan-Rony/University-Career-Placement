import { UseJobs } from "../../hooks/useJobs.js";

import { useState } from "react";
import AllJobsSkeleton from "../loading/AllJobsSkeleton.jsx";
import SingleJobCard from "./SingleJobCard.jsx";

const JOBS_PER_PAGE = 4;
const AllJobsCards = () => {
  const { data, isPending, error } = UseJobs();
  const [activeJobId, setActiveJobId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
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
        <SingleJobCard
          job={job}
          setActiveJobId={setActiveJobId}
          activeJobId={activeJobId}
          handleApply={handleApply}
        ></SingleJobCard>
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
