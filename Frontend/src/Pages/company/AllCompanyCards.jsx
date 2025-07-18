import React from "react";
import { useFetchCompanies } from "../../hooks/useCompany.js";
import { CiMapPin } from "react-icons/ci";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import img from "./../../assets/download.png";

import CardCompanySkeleton from "../../Components/loading/CardCompanySkeleton.jsx";
import { Link } from "react-router";

const AllCompanyCards = () => {
  const { data, isLoading, isError } = useFetchCompanies();

  if (isLoading)
    return (
      <p>
        <CardCompanySkeleton />
      </p>
    );

  if (isError) return <p>Something went wrong: {isError.message}</p>;
  const companies = data?.companies || [];

  return (
    <div className="space-y-4">
      <div className="my-4 grid lg:grid-cols-3 gap-4 md:grid-cols-3 sm:grid-cols-1 max-w-screen-xl mx-auto">
        {companies?.map((company) => (
      
          <Link to={`/companydetails/${company._id}`}>
            <div className="group border border-gray-200 p-5 rounded-md text-center shadow w-56 mx-auto transition">
              <img
                src={company?.logo}
                alt="Company Logo"
                className="w-16 h-16 mx-auto mb-3 object-contain"
              />
              <h3 className="text-lg font-semibold">{company?.name}.</h3>
              <p className="text-sm text-gray-500 mt-1">({company.location})</p>
              <button className="mt-4 bg-gray-900 group-hover:bg-r-accent text-white text-sm px-4 py-1.5 rounded-md font-semibold transition">
                3 OPENING
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllCompanyCards;
