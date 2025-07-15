import React, { useState, useEffect } from "react";
import { UseSearchJobs } from "../../hooks/useJobs.js";
import { useNavigate } from "react-router";

const SearchBar = () => {
  const [input, setInput] = useState("");
  const [location, setLocation] = useState("");
  const [debouncedInput, setDebouncedInput] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const delay = setTimeout(() => {
      setDebouncedInput(input);
    }, 400);

    return () => clearTimeout(delay);
  }, [input]);

  const { data, isLoading } = UseSearchJobs(debouncedInput, location);

  const handleSelect = (jobId) => {
    setInput("");
    setLocation("");
    navigate(`job/details/${jobId}`);
  };

  return (
    <div className="relative">
      <div className="bg-white p-2 rounded-lg shadow-md flex flex-col lg:flex-row items-center gap-3">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Job title, Keyword..."
          className="w-full lg:w-1/2 p-3  rounded-lg outline-none"
        />
        <input
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          type="text"
          placeholder="Location"
          className="w-full lg:w-1/4 p-3  rounded-lg outline-none"
        />
        <button
          onClick={() =>
            navigate(`/job/search-results?title=${input}&location=${location}`)
          }
          className="bg-gradient-to-r from-[#7405de] to-[#a626ec] text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700"
        >
          Find Job
        </button>
      </div>

      {debouncedInput.trim() && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white shadow-lg border border-gray-200 rounded-md z-50 max-h-60 overflow-y-auto">
          {isLoading ? (
            <p className="p-3 text-gray-500">Loading...</p>
          ) : Array.isArray(data) && data.length > 0 ? (
            data.map((job) => (
              <button
                key={job._id}
                onClick={() => handleSelect(job._id)}
                className="w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-700 text-sm md:text-base"
              >
                {job.title}
              </button>
            ))
          ) : (
            <p className="p-3 text-gray-500 text-sm">No jobs found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
