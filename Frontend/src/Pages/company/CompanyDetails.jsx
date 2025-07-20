import React from "react";
import { useParams } from "react-router";
import { UseFetchSingleCompanyById } from "../../hooks/useCompany.js";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import img from "../../assets/9e9db9eaddef1a9ae953bd5fe0346933.jpg";
import CompanyDetailsSkeleton from "../../Components/loading/CompanyDetailsSkeleton.jsx";

const CompanyDetails = () => {
  const { id } = useParams();
  const { data: company,isLoading } = UseFetchSingleCompanyById(id);

 if (isLoading || !company) return <CompanyDetailsSkeleton />;

  return (
    <div className="bg-gray-50 min-h-screen container mx-auto px-4 sm:px-6 lg:px-8">
      {/* Banner */}
      <div className="relative h-72 sm:h-80 lg:h-[22rem] bg-gray-200">
        <img
          src={company.cover || img}
        //   alt={company.name}
          className="w-full h-full object-cover"
        />
        {/* <div className="absolute inset-0 bg-black bg-opacity-40" /> */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          {/* <h1 className="text-white text-3xl sm:text-4xl font-bold drop-shadow">
            {company.name}
          </h1> */}
        </div>

        {/* Profile Picture */}
        <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 sm:left-20 sm:translate-x-0">
          <img
            src={company.logo}
            alt={company.name}
            className="w-32 h-32 object-cover border-4 border-white rounded-full shadow-lg bg-white"
          />
        </div>
      </div>

      {/* Details Section */}
      <div className="mt-24 max-w-6xl mx-auto px-4 py-10 bg-white rounded-lg shadow-sm space-y-8">
        {/* Quick Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-800">
          <Info label="Industry" value={company.industry} />
          <Info label="Location" value={company.location} />
          <Info label="Employees" value={company.employees} />
          <Info label="Established" value={company.establishment} />
          <Info label="Email" value={company.contactPersonEmail} />
          <Info
            label="Website"
            value={
              <a
                href={company.websiteUrl}
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 hover:underline"
              >
                {company.websiteUrl}
              </a>
            }
          />
        </div>

        {/* Contact Person Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-gray-800">
          <Info label="Contact Name" value={company.contactPersonName} />
          <Info label="Designation" value={company.contactPersonDesignation} />
          <Info label="Email" value={company.contactPersonEmail} />
          <Info label="Phone" value={company.contactPersonMobile} />
        </div>

        

        {/* About Section */}
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            About the Company
          </h2>
          <p className="text-gray-700 leading-relaxed">{company.description}</p>
        </div>
        {/* Social Icons */}
        <div className="flex items-center gap-4 mt-2 text-gray-600">
          {company.facebookUrl && (
            <a href={company.facebookUrl} target="_blank" rel="noreferrer">
              <FaFacebook className="w-6 h-6 hover:text-blue-600 transition" />
            </a>
          )}
          {company.twitterUrl && (
            <a href={company.twitterUrl} target="_blank" rel="noreferrer">
              <FaTwitter className="w-6 h-6 hover:text-blue-500 transition" />
            </a>
          )}
          {company.linkedinUrl && (
            <a href={company.linkedinUrl} target="_blank" rel="noreferrer">
              <IoLogoLinkedin className="w-6 h-6 hover:text-blue-700 transition" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

// Reusable info item
const Info = ({ label, value }) => (
  <div>
    <p className="text-sm text-gray-500 font-medium">{label}</p>
    <p className="text-base font-semibold mt-1 break-words">{value || "—"}</p>
  </div>
);

export default CompanyDetails;
