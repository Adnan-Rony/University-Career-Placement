import { CiBookmark, CiCalendar } from "react-icons/ci";
import { GiMoneyStack } from "react-icons/gi";
import { MdOutlineLocationOn } from "react-icons/md";
import { RxTimer } from "react-icons/rx";
import { Link } from "react-router"; // ← make sure this is from react-router-dom if using React Router v6
import { UseJobs } from "../../hooks/useJobs.js";

import img from "../../assets/company.PNG";
import ApplyJob from "../DetailsJob/ApplyJob.jsx";
import { useState } from "react";
import AllJobsSkeleton from "../loading/AllJobsSkeleton.jsx";

const AllJobsCards = () => {
  const { data, isPending, error } = UseJobs();
  const [activeJobId, setActiveJobId] = useState(null); 

  const jobs = data?.jobs || [];

  const handleApply = (applicationData) => {
    console.log("Application submitted", applicationData);
    setActiveJobId(null); 
  };

  if (isPending) return <AllJobsSkeleton />;
  if (error) return <h2>Error: {error.message}</h2>;

  return (
    <div className="space-y-4">
      {jobs.map((job) => (
        <div
          key={job._id}
          className="bg-white p-5 rounded-lg shadow hover:shadow-md transition w-full space-y-2"
        >
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
              <img
                src={job?.logo || img}
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
              <MdOutlineLocationOn className="text-xl" />
              {job?.location?.city}, {job?.location?.state}, {job?.location?.country}
            </span>
            <span className="flex items-center gap-1">
              <RxTimer className="text-xl" />
              {new Date(job?.createdAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <span className="flex items-center gap-1">
              <GiMoneyStack className="text-xl" />
              {job.salaryRange.min} - {job.salaryRange.max}
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
                Learn More
              </button>
            </Link>
            <div>
              <button
                onClick={() => setActiveJobId(job._id)}
                className="text-sm font-medium bg-r-primary text-white py-2 px-3 rounded-lg hover:bg-r-accent transition"
              >
                Apply Now
              </button>

              
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
        </div>
      ))}
    </div>
  );
};

export default AllJobsCards;
