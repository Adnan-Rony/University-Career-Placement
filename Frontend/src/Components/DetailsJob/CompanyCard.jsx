import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";

const CompanyCard = ({ job }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Main Card */}
      <div className="p-6 rounded-xl shadow-sm hover:shadow-md bg-white text-gray-800 border border-gray-200">
        <div className="flex items-center gap-4">
          <img
            src={job?.company?.logo}
            alt="Company Logo"
            className="w-14 h-14 rounded-lg object-cover border"
          />
          <div>
            <h2 className="font-semibold text-lg">{job?.company?.name}</h2>
            <button
              onClick={() => setIsModalOpen(true)}
              className="text-sm text-purple-600 hover:text-purple-800 underline mt-1"
            >
              View Company Profile
            </button>
          </div>
        </div>

        <div className="mt-4 space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-500">Industry:</span>
            <span>{job?.company?.industry || "N/A"}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Email:</span>
            <span>{job?.company?.contactPersonEmail || "N/A"}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Location:</span>
            <span>
              {job?.company?.city}, {job?.company?.location}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Phone:</span>
            <span>{job?.company?.contactPersonMobile || "N/A"}</span>
          </div>
        </div>

        {job?.company?.websiteUrl && (
          <a
            href={job?.company?.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 block text-center w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg transition"
          >
            Visit Website
          </a>
        )}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-40 backdrop-blur-sm flex items-center justify-center px-4">
          <div className="bg-white w-full max-w-3xl rounded-2xl shadow-lg p-6 relative overflow-y-auto max-h-[90vh]">
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-red-500 text-xl"
            >
              <RxCross1 />
            </button>

            {/* Header */}
            <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
              <img
                src={job?.company?.logo}
                alt="Company Logo"
                className="w-20 h-20 object-cover rounded-lg border"
              />
              <div className="text-center sm:text-left">
                <h2 className="text-2xl font-bold">{job?.company?.name}</h2>
                <p className="text-sm text-gray-500">{job?.company?.industry}</p>
              </div>
            </div>

            {/* Info Grid */}
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
              <div>
                <p className="font-medium">Location:</p>
                <p>{job?.company?.city || "N/A"}, {job?.company?.location || "N/A"}</p>
              </div>
              <div>
                <p className="font-medium">Contact Person:</p>
                <p>
                  {job?.company?.contactPersonName || "N/A"} (
                  {job?.company?.contactPersonDesignation || "N/A"})
                </p>
              </div>
              <div>
                <p className="font-medium">Employees:</p>
                <p>{job?.company?.employees || "N/A"}</p>
              </div>
              <div>
                <p className="font-medium">Email:</p>
                <p>{job?.company?.contactPersonEmail || "N/A"}</p>
              </div>
              <div>
                <p className="font-medium">Phone:</p>
                <p>{job?.company?.contactPersonMobile || "N/A"}</p>
              </div>
              <div>
                <p className="font-medium">Website:</p>
                <a
                  href={job?.company?.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
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
                  className="text-blue-600 hover:underline"
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
                  className="text-blue-600 hover:underline"
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
                  className="text-blue-600 hover:underline"
                >
                  {job?.company?.linkedinUrl || "N/A"}
                </a>
              </div>
            </div>

            {/* Description */}
            {job?.company?.description && (
              <div className="mt-6">
                <p className="font-medium mb-1">About Company:</p>
                <p className="text-gray-600">{job?.company?.description}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default CompanyCard;
