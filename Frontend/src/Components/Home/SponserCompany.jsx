import React, { useState } from "react";
import CompanyCards from "./CompanyCards.jsx";
import { useFetchCompanies } from "../../hooks/useCompany.js";
import CompaniesCards from "../company/CompaniesCard.jsx";
import { Link } from "react-router";
import CompanyCardSkeleton from "../loading/SponserCompanyCardSkeleton.jsx";
import CompanyDetails from "../../Pages/company/CompanyDetails.jsx";

const SponserCompany = () => {
  const { data, isLoading, isError } = useFetchCompanies();

  const companies = Array.isArray(data?.companies) ? data.companies : [];

  const industries = [
    "All",
    ...new Set(companies.map((c) => c.industry).filter(Boolean)),
  ];

  const [activeIndustry, setActiveIndustry] = useState("All");

  const filteredCompanies =
    activeIndustry === "All"
      ? companies
      : companies.filter((c) => c.industry === activeIndustry);

  return (
    <section className="container mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-6">
        Sponsored Companies
      </h2>

      {/* Error Message */}
      {isError && (
        <p className="text-center text-red-500 font-medium mb-6">
          Failed to load companies. Please try again later.
        </p>
      )}

      {/* Loading State */}
      {isLoading ? (
        <CompanyCardSkeleton count={8} />
      ) : (
        <>
          {/* Industry Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {industries.map((industry, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndustry(industry)}
                className={`px-4 py-1 border rounded-full text-sm transition ${
                  activeIndustry === industry
                    ? "bg-gradient-to-r from-[#7405de] to-[#a626ec] text-white"
                    : "hover:bg-blue-100"
                }`}
              >
                {industry}
              </button>
            ))}
          </div>

          {/* Company Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCompanies.length > 0 ? (
              filteredCompanies
                .slice(0, 8)
                .map((company, index) => (
                  <CompaniesCards key={index} company={company} />
                ))
            ) : (
              <p className="col-span-full text-center text-gray-500">
                No companies found in this category.
              </p>
            )}
          </div>

          {/* View All Button */}
          <div className="text-center mt-10">
            <Link
              to="/allcompanies"
              className="px-6 py-2 bg-gradient-to-r from-[#7405de] to-[#a626ec] text-white rounded-full hover:brightness-110 transition"
            >
              View All Companies
            </Link>
          </div>
        </>
      )}
    </section>
  );
};

export default SponserCompany;
