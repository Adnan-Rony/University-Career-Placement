import { useMemo, useState, useEffect } from "react";
import { useFetchCompanies } from "../../hooks/useCompany.js";

import CardCompanySkeleton from "../../Components/loading/CardCompanySkeleton.jsx";
import CompanyCard from "../../Components/company/CompanyCard.jsx";

const COMPANY_PER_PAGE = 9;

const AllCompany = () => {
  const { data, isLoading, isError } = useFetchCompanies();
  const [currentPage, setCurrentPage] = useState(1);

  const [filters, setFilters] = useState({
    keyword: "",
    location: "",
    industry: "",
  });

  const companies = data?.companies || [];

  // Filter companies based on search inputs
  const filteredCompany = useMemo(() => {
    return companies.filter((company) => {
      const keywordMatch =
        filters.keyword === "" ||
        company.name?.toLowerCase().includes(filters.keyword.toLowerCase());

      const locationMatch =
        filters.location === "" ||
        company.location?.toLowerCase().includes(filters.location.toLowerCase());

      const industryMatch =
        filters.industry === "" ||
        company.industry?.toLowerCase().includes(filters.industry.toLowerCase());

      return keywordMatch && locationMatch && industryMatch;
    });
  }, [filters, companies]);

  // Reset to page 1 whenever filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [filters]);

  const totalPages = Math.ceil(filteredCompany.length / COMPANY_PER_PAGE);
  const startIndex = (currentPage - 1) * COMPANY_PER_PAGE;
  const currentCompany = filteredCompany.slice(startIndex, startIndex + COMPANY_PER_PAGE);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const industries = Array.from(
    new Set(companies.map((company) => company.industry).filter(Boolean))
  );

  if (isError) return <p className="text-red-600 text-center mt-10">Something went wrong: {isError.message}</p>;

  return (
    <div className="mx-auto max-w-screen-xl">
      <div className="container mx-auto px-4 py-4 grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Filter Sidebar */}
        <aside className="bg-white p-5 rounded-lg shadow-sm space-y-6 h-screen sticky top-4 overflow-y-auto">
          {/* Keyword Filter */}
          <div>
            <label className="block text-sm font-semibold mb-1">
              Search by Keywords
            </label>
            <input
              type="text"
              placeholder="Company name..."
              className="w-full border p-2 rounded"
              value={filters.keyword}
              onChange={(e) =>
                setFilters((prev) => ({ ...prev, keyword: e.target.value }))
              }
            />
          </div>

          {/* Location Filter */}
          <div>
            <label className="block text-sm font-semibold mb-1">Location</label>
            <input
              type="text"
              placeholder="City or location"
              className="w-full border p-2 rounded"
              value={filters.location}
              onChange={(e) =>
                setFilters((prev) => ({ ...prev, location: e.target.value }))
              }
            />
          </div>

          {/* Industry Filter */}
          <div>
            <label className="block text-sm font-semibold mb-1">Industry</label>
            <select
              className="w-full border p-2 rounded"
              value={filters.industry}
              onChange={(e) =>
                setFilters((prev) => ({ ...prev, industry: e.target.value }))
              }
            >
              <option value="">Choose an industry</option>
              {industries.map((industry) => (
                <option key={industry} value={industry}>
                  {industry}
                </option>
              ))}
            </select>
          </div>
        </aside>

        {/* Company Cards Section */}
        <div className="bg-white lg:col-span-2 px-4 space-y-3">
          {isLoading ? (
            <CardCompanySkeleton count={9} />
          ) : (
            <>
              <CompanyCard companies={currentCompany} />
              {filteredCompany.length === 0 && (
                <div className="text-center py-10 text-gray-500 font-semibold">
                  No companies found matching your filters.
                </div>
              )}
            </>
          )}

          {/* Pagination */}
          {!isLoading && !isError && currentCompany.length > 0 && (
            <div className="flex justify-center mt-6 gap-2 ">
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

export default AllCompany;
