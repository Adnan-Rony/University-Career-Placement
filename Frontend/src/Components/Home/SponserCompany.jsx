import React, { useState } from "react";
import CompanyCards from "./CompanyCards.jsx";

const SponserCompany = () => {
  const companies = [
    {
      name: "DTCC",
      logo: "/logos/dtcc.png",
      rating: 4.2,
      reviews: "88 reviews",
      tags: ["Financial Services", "Corporate", "B2B", "FinTech / Payments"],
      industry: "Finance & Banking",
    },
    {
      name: "Opentext",
      logo: "/logos/opentext.png",
      rating: 3.6,
      reviews: "1.1K+ reviews",
      tags: ["Software Product", "Analytics / KPO / Research"],
      industry: "Software",
    },
    {
      name: "NetApp",
      logo: "/logos/netapp.png",
      rating: 3.8,
      reviews: "388 reviews",
      tags: ["Software Product", "IT Services & Consulting"],
      industry: "Information Technology",
    },
    {
      name: "Sopra Steria",
      logo: "/logos/sopra.png",
      rating: 3.8,
      reviews: "1.9K+ reviews",
      tags: ["IT Services & Consulting", "Foreign MNC", "Conglomerate"],
      industry: "Information Technology",
    },
    {
      name: "Siemens",
      logo: "/logos/siemens.png",
      rating: 4.0,
      reviews: "5.1K+ reviews",
      tags: ["Software Product", "Electronics Manufacturing"],
      industry: "Manufacturing",
    },
    {
      name: "VIBGYOR Group Of Schools",
      logo: "/logos/vibgyor.png",
      rating: 3.5,
      reviews: "1.2K+ reviews",
      tags: ["B2C", "Private", "Corporate", "Education / Training"],
      industry: "Education",
    },
    {
      name: "Tata Technologies",
      logo: "/logos/tata.png",
      rating: 3.6,
      reviews: "2.8K+ reviews",
      tags: ["IT Services & Consulting", "Conglomerate", "Foreign MNC"],
      industry: "Information Technology",
    },
    {
      name: "HSBC",
      logo: "/logos/hsbc.png",
      rating: 3.9,
      reviews: "5.3K+ reviews",
      tags: ["Financial Services", "IT Services & Consulting"],
      industry: "Finance & Banking",
    },
  ];

  const industries = ["All", ...new Set(companies.map((c) => c.industry))];
  const [activeIndustry, setActiveIndustry] = useState("All");

  const filteredCompanies =
    activeIndustry === "All"
      ? companies
      : companies.filter((c) => c.industry === activeIndustry);

  return (
    <section className="container mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-6">
        Sponsored companies
      </h2>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {industries.map((industry, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndustry(industry)}
            className={`px-4 py-1 border rounded-full text-sm transition ${
              activeIndustry === industry
                ? "bg-r-primary text-white "
                : "hover:bg-blue-100"
            }`}
          >
            {industry}
          </button>
        ))}
      </div>

      {/* Company Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredCompanies.length > 0 ? (
          filteredCompanies.map((company, index) => (
            <CompanyCards key={index} index={index} company={company} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No companies found in this category.
          </p>
        )}
      </div>

      {/* View all button */}
      <div className="text-center mt-10">
        <button className="px-6 py-2 bg-r-primary text-white rounded-full hover:bg-r-primary transition">
          View all companies
        </button>
      </div>
    </section>
  );
};

export default SponserCompany;
