import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";

const CompanyCard = ({ job }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Company Info Card */}
      <div className="p-6 rounded-lg shadow-md hover:shadow-lg text-gray-700 border border-gray-200">
        <div className="flex items-center justify-start gap-6">
          <img
            src={job?.company?.logo }
            alt="Company Logo"
            className="w-12 h-12 rounded-md object-cover"
          />

          <div>
            <p className="font-semibold">{job?.company?.name}</p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="text-r-accent "
            >
              View Company Profile
            </button>
          </div>
        </div>

        <div className="my-4 space-y-2 text-sm">
          <div className="flex justify-between items-center">
            <p>Primary Industry:</p>
            <p>{job?.company?.industry || "N/A"}</p>
          </div>
          <div className="flex justify-between items-center">
            <p>Email:</p>
            <p>{job?.company?.contactPersonEmail}</p>
          </div>
          <div className="flex justify-between items-center">
            <p>Location:</p>
            <p>
              {job?.company?.city},{job?.company?.location}{" "}
            </p>
          </div>
          <div className="flex justify-between items-center">
            <p>Phone:</p>
            <p>{job?.company?.contactPersonMobile}</p>
          </div>
        </div>

        <a
          href={job?.company?.website}
          target="_blank"
          rel="noopener noreferrer"
          className="btn w-full  text-white text-center block px-4 py-2 rounded-md  transition bg-r-primary hover:bg-r-accent"
        >
          {job?.company?.websiteUrl}
        </a>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0  bg-opacity-80 backdrop-blur-sm z-50 flex items-center justify-center px-4">
          <div className="bg-white w-full max-w-2xl rounded-2xl shadow-xl p-6 relative border border-blue-100">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-xl"
            >
              <RxCross1 />
            </button>

            {/* Header */}
            <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
              <img
                src={job?.company?.logo}
                alt="Company Logo"
                className="w-20 h-20 rounded-md object-cover border border-gray-200"
              />
              <div className="text-center sm:text-left">
                <h2 className="text-2xl font-bold text-gray-800">
                  {job?.company?.name}
                </h2>
                <p className="text-sm text-gray-500">
                  {job?.company?.industry}
                </p>
              </div>
            </div>

            {/* Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700">
              <div>
                <p className="font-medium">Establishment:</p>
                <p>{job?.company?.establishment || "N/A"}</p>
              </div>
              <div>
                <p className="font-medium">Industry:</p>
                <p>{job?.company?.industry || "N/A"}</p>
              </div>
              <div>
                <p className="font-medium">Country:</p>
                <p>{job?.company?.country || "N/A"}</p>
              </div>
              {/* <div>
                <p className="font-medium">City:</p>
                <p>{job?.company?.city || "N/A"}</p>
              </div> */}
              <div>
                <p className="font-medium">Location:</p>
                <p>{job?.company?.city || "N/A"},{job?.company?.location || "N/A"}</p>
              </div>

              <div>
                <p className="font-medium">Contact Person:</p>
                <p>
                  {job?.company?.contactPersonName || "N/A"} (
                  {job?.company?.contactPersonDesignation})
                </p>
              </div>
              <div>
                <p className="font-medium">Employees:</p>
                <p>{job?.company?.employees || "N/A"}</p>
              </div>
              <div>
                <p className="font-medium">Contact Email:</p>
                <p>{job?.company?.contactPersonEmail || "N/A"}</p>
              </div>
              <div>
                <p className="font-medium">Contact Mobile:</p>
                <p>{job?.company?.contactPersonMobile || "N/A"}</p>
              </div>

              <div>
                <p className="font-medium">Website:</p>
                <a
                  href={job?.company?.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline hover:text-blue-700"
                >
                  {job?.company?.websiteUrl || "N/A"}
                </a>
              </div>

              <div>
                <p className="font-medium">Facebook:</p>
                <a
                  href={job?.company?.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline hover:text-blue-700"
                >
                  {job?.company?.facebookUrl || "N/A"}
                </a>
              </div>

              <div>
                <p className="font-medium">Twitter:</p>
                <a
                  href={job?.company?.twitterUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline hover:text-blue-700"
                >
                  {job?.company?.twitterUrl || "N/A"}
                </a>
              </div>

              <div>
                <p className="font-medium">LinkedIn:</p>
                <a
                  href={job?.company?.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline hover:text-blue-700"
                >
                  {job?.company?.linkedinUrl || "N/A"}
                </a>
              </div>
            </div>

            {/* Description */}
            <div className="mt-6">
              <p className="font-medium mb-1">Description:</p>
              <p className="text-gray-600">
                {job?.company?.description || "N/A"}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CompanyCard;
