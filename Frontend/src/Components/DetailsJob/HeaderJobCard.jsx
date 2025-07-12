import {
  CiClock1,
  CiCalendarDate,
  CiHeart,
} from "react-icons/ci";
import { GiMoneyStack } from "react-icons/gi";
import { MdOutlineLocationOn } from "react-icons/md";
import { IoBusiness } from "react-icons/io5";
import { FaDollarSign } from "react-icons/fa6";
import moment from "moment";
import { useState } from "react";
import ApplyJob from "./ApplyJob.jsx";

const HeaderJobCard = ({ job }) => {
  const [showModal, setShowModal] = useState(false);

  const handleApply = (applicationData) => {
    console.log("Application submitted", applicationData);
    setShowModal(false);
  };

  return (
    <div className="w-full bg-gradient-to-r from-[#f7f1fb] to-[#f6effb] py-10 px-4 md:px-0">
      <div className="max-w-7xl  mx-auto bg-white border border-gray-200 rounded-2xl shadow-md p-6 md:p-10 space-y-6">
        {/* Header section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex flex-col gap-2 w-full">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex gap-2 flex-wrap">
                <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wide">
                  {job?.jobType}
                </span>
                <span className="flex items-center gap-1 text-gray-600 text-sm">
                  <CiClock1 className="text-lg" />
                  Posted:{" "}
                  {new Date(job?.createdAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>
              <button className="text-purple-600 hover:text-red-500 transition">
                <CiHeart className="text-2xl" />
              </button>
            </div>

            <h1 className="text-2xl md:text-3xl font-semibold text-gray-900">
              {job.title}
            </h1>

            <p className="flex items-center gap-2 text-gray-700 font-medium">
              <IoBusiness className="text-lg" />
              {job?.company?.name}
            </p>
          </div>
        </div>

        {/* Job Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600 mt-2">
          <div className="flex items-center gap-2">
            <MdOutlineLocationOn className="text-xl text-purple-500" />
            {job?.location?.city}, {job?.location?.state}, {job?.location?.country}
          </div>
          <div className="flex items-center gap-2">
            <FaDollarSign className="text-lg text-green-500" />
            ${job?.salaryRange?.min} - ${job?.salaryRange?.max}
          </div>
          <div className="flex items-center gap-2">
            <CiCalendarDate className="text-xl text-blue-500" />
            Deadline: {moment(job?.deadline).format("MMMM D, YYYY")}
          </div>
        </div>

        {/* Action Button */}
        <div>
          <button
            onClick={() => setShowModal(true)}
            className="w-full md:w-auto bg-purple-600 hover:bg-purple-700 text-white font-medium px-6 py-3 rounded-lg transition"
          >
            Apply for this Job
          </button>
        </div>

        {/* Apply Modal */}
        <ApplyJob
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          onSubmit={handleApply}
          jobId={job._id}
        />
      </div>
    </div>
  );
};

export default HeaderJobCard;
