import { useState, useMemo } from "react";
import { UseJobs } from "../../hooks/useJobs.js";

import SingleJobCard from "../../Components/jobs/SingleJobCard.jsx";
import AllJobsSkeleton from "../../Components/loading/AllJobsSkeleton.jsx";
import NotFound from "../../Components/jobs/NotFound.jsx";

const JOBS_PER_PAGE = 4;

const JobsShowAll = () => {
  const { data, isPending, error } = UseJobs();
  const jobs = data?.jobs || [];

  const [filters, setFilters] = useState({
    keyword: "",
    location: "",
    category: "",
    jobType: "",
    datePosted: "All",
  });

  const [activeJobId, setActiveJobId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  // 🔍 Filter logic
  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const keywordMatch =
        filters.keyword === "" ||
        job.title?.toLowerCase().includes(filters.keyword.toLowerCase());

      const locationMatch =
        filters.location === "" ||
        job.location?.toLowerCase().includes(filters.location.toLowerCase()) ||
        job.city?.toLowerCase().includes(filters.location.toLowerCase());

      const categoryMatch =
        filters.category === "" ||
        job.company?.industry?.toLowerCase() === filters.category.toLowerCase();

      const jobTypeMatch =
        filters.jobType === "" ||
        job.jobType?.toLowerCase().includes() === filters.jobType.toLowerCase();

      const dateMatch = (() => {
        if (filters.datePosted === "All") return true;
        const postedDate = new Date(job.createdAt);
        const now = new Date();
        const diffInMs = now - postedDate;
        const diffInHours = diffInMs / (1000 * 60 * 60);
        if (filters.datePosted === "Last Hour") return diffInHours <= 1;
        if (filters.datePosted === "Last 24 Hours") return diffInHours <= 24;
        return true;
      })();

      return keywordMatch && locationMatch && categoryMatch && dateMatch && jobTypeMatch;
    });
  }, [jobs, filters]);

  // Pagination logic
  const totalPages = Math.ceil(filteredJobs.length / JOBS_PER_PAGE);
  const startIndex = (currentPage - 1) * JOBS_PER_PAGE;
  const currentJobs = filteredJobs.slice(
    startIndex,
    startIndex + JOBS_PER_PAGE
  );

  const handleApply = (applicationData) => {
    console.log("Application submitted", applicationData);
    setActiveJobId(null);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    setActiveJobId(null);
  };

  // Industries for category dropdown
  const industries = Array.from(
    new Set(jobs.map((job) => job.company?.industry).filter(Boolean))
  );
  const jobTypes = Array.from(
    new Set(jobs.map((job) => job.jobType).filter(Boolean))
  );

  return (
    <div className="mx-auto container">
      <div className="container mx-auto px-4 py-2 grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Filter Sidebar */}
        <aside className="bg-white p-5 rounded-lg shadow-sm space-y-6 h-screen sticky top-4 overflow-y-auto">
          {/* Keyword */}
          <div>
            <label className="block text-sm font-semibold mb-1">
              Search by Keywords
            </label>
            <input
              type="text"
              value={filters.keyword}
              onChange={(e) =>
                setFilters((prev) => ({ ...prev, keyword: e.target.value }))
              }
              placeholder="Job title, keywords..."
              className="w-full border p-2 rounded"
            />
          </div>

           <div>
            <label className="block text-sm font-semibold mb-1">job Type</label>
            <select
              value={filters.jobType}
              onChange={(e) =>
                setFilters((prev) => ({ ...prev, jobType: e.target.value }))
              }
              className="w-full border p-2 rounded"
            >
              <option value="">Choose a job Type</option>
              {jobTypes.map((jobtype) => (
                <option key={jobtype} value={jobtype}>
                  {jobtype}
                </option>
              ))}
            </select>
          </div>

          {/* Location */}
          <div>
            <label className="block text-sm font-semibold mb-1">Location</label>
            <input
              type="text"
              value={filters.location}
              onChange={(e) =>
                setFilters((prev) => ({ ...prev, location: e.target.value }))
              }
              placeholder="City or location"
              className="w-full border p-2 rounded"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-semibold mb-1">Category</label>
            <select
              value={filters.category}
              onChange={(e) =>
                setFilters((prev) => ({ ...prev, category: e.target.value }))
              }
              className="w-full border p-2 rounded"
            >
              <option value="">Choose a category</option>
              {industries.map((industry) => (
                <option key={industry} value={industry}>
                  {industry}
                </option>
              ))}
            </select>
          </div>

          {/* Date Posted */}
          <div>
            <label className="block text-sm font-semibold mb-1">
              Date Posted
            </label>
            <div className="space-y-1 text-sm text-gray-700">
              {["All", "Last Hour", "Last 24 Hours"].map((option) => (
                <label key={option} className="block">
                  <input
                    type="radio"
                    name="date"
                    value={option}
                    checked={filters.datePosted === option}
                    onChange={(e) =>
                      setFilters((prev) => ({
                        ...prev,
                        datePosted: e.target.value,
                      }))
                    }
                    className="mr-2"
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>
        </aside>

      
        <div className="lg:col-span-2 px-4 py-2 space-y-4">
          {isPending && <AllJobsSkeleton />}
          {error && <div>Something went wrong loading jobs!</div>}

          {!isPending && !error && currentJobs.length === 0 && (
            <div>
              <NotFound />
            </div>
          )}

          {!isPending &&
            !error &&
            currentJobs.length > 0 &&
            currentJobs.map((job) => (
              <SingleJobCard
                key={job._id}
                job={job}
                activeJobId={activeJobId}
                setActiveJobId={setActiveJobId}
                handleApply={handleApply}
              />
            ))}

          {/* Pagination */}
          {!isPending && !error && currentJobs.length > 0 && (
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
          )}
        </div>
      </div>
    </div>
  );
};

export default JobsShowAll;
