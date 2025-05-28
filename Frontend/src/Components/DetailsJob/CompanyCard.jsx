import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";

const CompanyCard = ({ job }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Company Info Card */}
      <div className="p-6 rounded-lg shadow-md hover:shadow-lg text-gray-700 bg-gradient-to-r from-indigo-50 to-blue-50">
        <div className="flex items-center justify-start gap-6">
          <img
            src={job?.company?.logo || "https://via.placeholder.com/50"}
            alt="Company Logo"
            className="w-12 h-12 rounded-md object-cover"
          />

          <div>
            <p className="font-semibold">{job?.company?.name}</p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="text-blue-500  "
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
            <p>{job?.postedBy?.email}</p>
          </div>
          <div className="flex justify-between items-center">
            <p>Location:</p>
            <p>{job?.company?.location || "N/A"}</p>
          </div>
          <div className="flex justify-between items-center">
            <p>Phone:</p>
            <p>017474730447</p>
          </div>
        </div>

        <a
          href={job?.company?.website}
          target="_blank"
          rel="noopener noreferrer"
          className="btn w-full bg-blue-500 text-white text-center block px-4 py-2 rounded-md hover:bg-blue-600 transition"
        >
          {job?.company?.website}
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

            {/* Company Header */}
            <div className="flex items-center gap-4 mb-6">
              <img
                src="https://superio-appdir.vercel.app/_next/image?url=%2Fimages%2Fresource%2Fcompany-logo%2F1-5.png&w=256&q=75"
                alt="Company Logo"
                className="w-14 h-14 rounded-md object-cover border border-gray-200"
              />
              <div>
                <h2 className="text-xl font-bold text-gray-800">
                  Company Profile
                </h2>
                <p className="text-sm text-gray-500">{job?.company?.name}</p>
              </div>
            </div>

            {/* Company Details */}
            <div className="space-y-4 text-sm text-gray-700">
              <div  className="flex gap-4 item-center">
                <p className="font-medium">Industry:</p>
                <p>{job?.company?.industry || "N/A"}</p>
              </div>
              <div className="flex justify-normal gap-9 item-center">
                <p className="font-medium">Email:</p>
                <p>{job?.postedBy?.email}</p>
              </div>
              <div className="flex gap-6">
                <p className="font-medium">Website:</p>
                <p>
                  <a
                    href={job?.company?.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline hover:text-blue-700"
                  >
                    {job?.company?.website}
                  </a>
                </p>
              </div>
              <div  className="flex gap-6 item-center">
                <p className="font-medium">Location:</p>
                <p>{job?.company?.location || "N/A"}</p>
                
              </div>

              <div>
                <p className="font-medium">Description:</p>
                <p className="my-2">{job?.company?.description || "N/A"}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CompanyCard;
