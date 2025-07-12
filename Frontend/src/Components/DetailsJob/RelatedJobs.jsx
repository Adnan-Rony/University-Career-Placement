import { Bookmark } from "lucide-react";
import { CiBookmark, CiCalendar, CiClock1 } from "react-icons/ci";
import { GiMoneyStack } from "react-icons/gi";
import { MdOutlineLocationOn } from "react-icons/md";
import { UseRelatedJobs } from "../../hooks/useJobs.js";
import img from "../../assets/company.png";
import { Link } from "react-router";
import AllJobsCards from "../jobs/AllJobsCards.jsx";
import { RxTimer } from "react-icons/rx";
import ReletedJobsSkeleton from "../loading/ReletedJobsSkeleton.jsx";

export default function RelatedJobs({ jobId }) {
  const { data, isLoading, error } = UseRelatedJobs(jobId);

  // console.log("Related Jobs API Response:", data);

  const jobs = Array.isArray(data) ? data : []; // Ensure data is an array

  if (isLoading)
    return (
      <p>
        <ReletedJobsSkeleton></ReletedJobsSkeleton>
      </p>
    );
  if (error) {
    console.error("RelatedJobs Error:", error);
    return (
      <p>
        Error loading related jobs: {error.message || "Unable to fetch jobs"}
      </p>
    );
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-2">Related Jobs ( <span className="text-sm font-normal"> {jobs.length} jobs found — based on this job.</span>) </h2>
      <p className="text-sm text-gray-500 mb-6">
       
      </p>

      <div className="space-y-4">
        {jobs.length > 0 ? (
          jobs.map((job) => (
            <div
              key={job._id}
              className="bg-white p-5 rounded-lg shadow hover:shadow-md transition w-full space-y-2"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <img
                    src={job?.company?.logo || img}
                    alt="company logo"
                    className="w-14 h-14 rounded-md object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">{job.title}</h3>
                  </div>
                </div>
                <button className="text-gray-400 hover:text-gray-600">
                  <CiBookmark className="text-xl" />
                </button>
              </div>

              <div className="mt-4 flex flex-wrap gap-2 text-sm text-gray-600">
                <span className="flex items-center gap-1 bg-purple-100 text-purple-700 text-x font-medium px-3 py-1 rounded-full">
                  {job?.jobType}
                </span>
                <span className="flex items-center gap-1">
                  <MdOutlineLocationOn className="text-2xl" />
                  {job?.location?.city}, {job?.location?.state},{" "}
                  {job?.location?.country}
                </span>
                <span className="flex items-center gap-1">
                  <RxTimer className="text-2xl" />
                  {new Date(job?.createdAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
                <span className="flex items-center gap-1">
                  <GiMoneyStack className="text-2xl" />
                  {job.salaryRange.min} - {job.salaryRange.max}$
                </span>
              </div>

              <div className="pt-2">
                <p className="flex items-center gap-2 font-semibold">
                  <CiCalendar className="text-xl" />
                  DeadLine:{" "}
                  {new Date(job?.deadline).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>

              <hr className="text-gray-200 my-4" />

              <div className="flex items-center justify-between gap-2">
                <Link to={`/job/details/${job._id}`}>
                  <button className="text-sm font-medium border border-r-primary text-r-primary py-2 px-3 rounded-lg hover:bg-r-primary hover:text-white transition">
                    Show Details
                  </button>
                </Link>
                <div></div>
              </div>
            </div>
          ))
        ) : (
          <p>No related jobs found.</p>
        )}
      </div>
    </div>
  );
}
