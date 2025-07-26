import { CiBookmark, CiCalendar } from "react-icons/ci";
import { GiMoneyStack } from "react-icons/gi";
import { MdOutlineLocationOn } from "react-icons/md";
import { RxTimer } from "react-icons/rx";
import { Link } from "react-router-dom";

import ApplyJob from "../DetailsJob/ApplyJob.jsx";

const SingleJobCard = ({ job, setActiveJobId, activeJobId, handleApply }) => {
  return (
    <div>
      <div
        key={job._id}
        className="bg-white border border-gray-200 p-4 sm:p-5 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 w-full space-y-4"
      >
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center gap-4">
            <img
              src={job?.company?.logo || 'https://img.icons8.com/?size=100&id=V1IkfkcRwvRl&format=png&color=000000'}
              alt="company logo"
              className="w-14 h-14 rounded-md object-cover"
            />
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                {job.title}
              </h3>
              <p className="text-sm text-gray-500">
                {job?.companyName || "Company"}
              </p>
            </div>
          </div>
          <button className="self-start sm:self-auto text-gray-400 hover:text-gray-600 transition">
            <CiBookmark className="text-2xl" />
          </button>
        </div>

        {/* Info Badges */}
        <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-3 text-sm text-gray-600">
          <span className="flex items-center gap-1 bg-purple-100 text-purple-700 px-3 py-1 rounded-full font-medium capitalize">
            {job?.jobType}
          </span>

          <span className="flex items-center gap-1">
            <MdOutlineLocationOn className="text-lg text-gray-500" />
            {job?.city}, {job?.location}, {job?.country}
          </span>

          <span className="flex items-center gap-1">
            <RxTimer className="text-lg text-gray-500" />
            {new Date(job?.createdAt).toLocaleDateString()}
          </span>

          <span className="flex items-center gap-1">
            <GiMoneyStack className="text-lg text-gray-500" />
            <span className="font-semibold text-gray-800">
              {job.salaryRange?.min} - {job.salaryRange?.max} BDT
            </span>
          </span>
        </div>

        {/* Deadline */}
        <div>
          <p className="text-sm font-medium text-gray-600 flex items-center gap-2">
            <CiCalendar className="text-lg" />
            Deadline:
            <span className="text-gray-800 font-semibold">
              {new Date(job?.deadline).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </p>
        </div>

        <hr className="text-gray-100" />

        {/* Actions */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
          <Link to={`/job/details/${job._id}`} className="w-full sm:w-auto">
            <button className="w-full sm:w-auto text-sm font-medium border border-purple-600 text-purple-600 py-2 px-4 rounded-md hover:bg-purple-600 hover:text-white transition-all duration-200">
              Learn More
            </button>
          </Link>

          <button
            onClick={() => setActiveJobId(job._id)}
            className="w-full sm:w-auto text-sm font-medium bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-all duration-200"
          >
            Apply Now
          </button>
        </div>

        {activeJobId === job._id && (
          <ApplyJob
            isOpen={true}
            onClose={() => setActiveJobId(null)}
            onSubmit={handleApply}
            jobId={job._id}
          />
        )}
      </div>
    </div>
  );
};

export default SingleJobCard;
