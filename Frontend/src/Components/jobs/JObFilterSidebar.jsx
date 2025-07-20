import React from "react";

const JObFilterSidebar = ({ filters, setFilters, jobs }) => {
  // Get unique industries from job data
  const industries = Array.from(
    new Set(jobs.map((job) => job.company?.industry).filter(Boolean))
  );

  return (
    <aside className="bg-white p-5 rounded-lg shadow-sm space-y-6 h-screen sticky top-4 overflow-y-auto">
      {/* Keyword Search */}
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

      {/* Location Search */}
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

      {/* Category Dropdown */}
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
        <label className="block text-sm font-semibold mb-1">Date Posted</label>
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
  );
};

export default JObFilterSidebar;
