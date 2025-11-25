import { useState, useMemo } from "react";
import { UseJobs } from "../../hooks/useJobs.js";

import SingleJobCard from "../../Components/jobs/SingleJobCard.jsx";
import AllJobsSkeleton from "../../Components/loading/AllJobsSkeleton.jsx";
import NotFound from "../../Components/jobs/NotFound.jsx";

const JOBS_PER_PAGE = 4;

const JobsShowAll = () => {
  const { data, isPending, error } = UseJobs();
  const jobs = data?.jobs || [];

  // 🧩 Filter state
  const [filters, setFilters] = useState({
    keyword: "",
    location: "",
    category: "",
    jobType: "",
    datePosted: "All",
  });

  const [activeJobId, setActiveJobId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  // 🧠 Extract unique industries & job types
  const industries = useMemo(
    () =>
      Array.from(
        new Set(jobs.map((job) => job.industry).filter(Boolean))
      ),
    [jobs]
  );

  const jobTypes = useMemo(
    () => Array.from(new Set(jobs.map((job) => job.jobType).filter(Boolean))),
    [jobs]
  );

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
        job.industry?.toLowerCase().includes(filters.category.toLowerCase());

      const jobTypeMatch =
        filters.jobType === "" ||
        job.jobType?.toLowerCase().includes(filters.jobType.toLowerCase());

      const dateMatch = (() => {
        if (filters.datePosted === "All") return true;
        const postedDate = new Date(job.createdAt);
        const now = new Date();
        const diffInHours = (now - postedDate) / (1000 * 60 * 60);
        if (filters.datePosted === "Last Hour") return diffInHours <= 1;
        if (filters.datePosted === "Last 24 Hours") return diffInHours <= 24;
        return true;
      })();

      return (
        keywordMatch &&
        locationMatch &&
        categoryMatch &&
        jobTypeMatch &&
        dateMatch
      );
    });
  }, [jobs, filters]);

  // 🧮 Pagination logic
  const totalPages = Math.ceil(filteredJobs.length / JOBS_PER_PAGE);
  const startIndex = (currentPage - 1) * JOBS_PER_PAGE;
  const currentJobs = filteredJobs.slice(startIndex, startIndex + JOBS_PER_PAGE);

  const handleApply = (applicationData) => {
    console.log("Application submitted", applicationData);
    setActiveJobId(null);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    setActiveJobId(null);
  };

  const handleClearFilters = () => {
    setFilters({
      keyword: "",
      location: "",
      category: "",
      jobType: "",
      datePosted: "All",
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Sidebar Filters */}
      <aside className="bg-gray-50 p-6 rounded-xl shadow-md md:sticky top-6 space-y-6 overflow-y-auto md:h-screen">
        {/* Keyword */}
        <div>
          <label className="block text-sm font-semibold mb-2">
            Search by Keywords
          </label>
          <input
            type="text"
            value={filters.keyword}
            onChange={(e) =>
              setFilters((prev) => ({ ...prev, keyword: e.target.value }))
            }
            placeholder="Job title, keywords..."
            className="w-full border border-gray-300 p-3 rounded-lg focus:border-purple-600 focus:ring-1 focus:ring-purple-600 transition"
          />
        </div>

        {/* Job Type */}
        <div>
          <label className="block text-sm font-semibold mb-2">Job Type</label>
          <select
            value={filters.jobType}
            onChange={(e) =>
              setFilters((prev) => ({ ...prev, jobType: e.target.value }))
            }
            className="w-full border border-gray-300 p-3 rounded-lg focus:border-purple-600 focus:ring-1 focus:ring-purple-600 transition"
          >
            <option value="">Choose a job type</option>
            {jobTypes.map((type) => (
              <option key={type} value={type} className="capitalize">
                {type}
              </option>
            ))}
          </select>
        </div>

        {/* Location */}
        <div>
          <label className="block text-sm font-semibold mb-2">Location</label>
          <input
            type="text"
            value={filters.location}
            onChange={(e) =>
              setFilters((prev) => ({ ...prev, location: e.target.value }))
            }
            placeholder="City or location"
            className="w-full border border-gray-300 p-3  rounded-lg focus:border-purple-600 focus:ring-1 focus:ring-purple-600 transition"
          />
        </div>

        {/* Category / Industry */}
        <div>
          <label className="block text-sm font-semibold mb-2">Category</label>
          <select
            value={filters.category}
            onChange={(e) =>
              setFilters((prev) => ({ ...prev, category: e.target.value }))
            }
            className="w-full border border-gray-300 p-3  rounded-lg focus:border-purple-600 focus:ring-1 focus:ring-purple-600 transition"
          >
            <option className="px-4" value="">Choose a category</option>
            {industries.map((industry) => (
              <option key={industry} value={industry}>
                {industry}
              </option>
            ))}
          </select>
        </div>

        {/* Date Posted */}
        <div>
          <label className="block text-sm font-semibold mb-2">Date Posted</label>
          <div className="space-y-2 text-sm text-gray-700">
            {["All", "Last Hour", "Last 24 Hours"].map((option) => (
              <label key={option} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="date"
                  value={option}
                  checked={filters.datePosted === option}
                  onChange={(e) =>
                    setFilters((prev) => ({ ...prev, datePosted: e.target.value }))
                  }
                  className="accent-purple-600"
                />
                {option}
              </label>
            ))}
          </div>
        </div>

        {/* Clear Filters */}
        <button
          onClick={handleClearFilters}
          className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-lg transition"
        >
          Clear Filters
        </button>
      </aside>

      {/* Job List */}
      <div className="lg:col-span-2 space-y-6">
        {isPending && <AllJobsSkeleton />}
        {error && <div className="text-red-500">Something went wrong loading jobs!</div>}

        {!isPending && !error && currentJobs.length === 0 && <NotFound />}

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
          <div className="flex justify-center mt-6 gap-2 flex-wrap">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 border rounded disabled:opacity-50"
            >
              Prev
            </button>

            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => handlePageChange(i + 1)}
                className={`px-4 py-2 border rounded ${
                  currentPage === i + 1
                    ? "bg-purple-600 text-white"
                    : "text-gray-700 hover:bg-gray-200"
                }`}
              >
                {i + 1}
              </button>
            ))}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-4 py-2 border rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobsShowAll;
