import { Bookmark } from "lucide-react";
import { UseRelatedJobs } from "../../hooks/useJobs.js";
import { CiClock1, CiSaveUp2, CiCalendar } from "react-icons/ci";
import { GiMoneyStack } from "react-icons/gi";
import { MdOutlineLocationOn } from "react-icons/md";
import { Link } from "react-router";

export default function RelatedJobs({ jobId }) {
  const { data, isLoading, error } = UseRelatedJobs(jobId);

  // console.log("Related Jobs API Response:", data);

  const jobs = Array.isArray(data) ? data : []; // Ensure data is an array

  if (isLoading) return <p>Loading related jobs...</p>;
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
      <h2 className="text-2xl font-semibold mb-2">Related Jobs</h2>
      <p className="text-sm text-gray-500 mb-6">
        {jobs.length} jobs found — based on this job.
      </p>

      <div className="space-y-4">
        {jobs.length > 0 ? (
          jobs.map((job) => (
            <div
              key={job._id}
              className="flex items-start justify-between p-5 bg-white border-gray-200 rounded-xl shadow-sm hover:shadow-md transition"
            >

              <Link to={`/job/details/${job._id}`}>
                <div className="flex gap-4">
                <img
                  src={job.company?.logo || "/default-logo.png"}
                  alt={job.company?.name || "Company Logo"}
                  className="w-12 h-12 rounded-md object-contain"
                />
                <div>
                  <h3 className="font-semibold text-lg">
                    {job.title || "Untitled Job"}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mt-1 flex-wrap">
                    <span className="flex items-center gap-1">
                      <i className="fas fa-briefcase" />{" "}
                      {job.company?.name || "Unknown Company"}
                    </span>
                    <span className="flex items-center gap-1">
                      <CiClock1 className="text-xl" />
                      {new Date(job?.createdAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                    <span className="flex items-center gap-1">
                      <MdOutlineLocationOn />
                      {job.location?.city || "Location not specified"}
                    </span>

                    <span className="flex items-center gap-1">
                      <GiMoneyStack />
                      {job.salaryRange
                        ? `${job.salaryRange.min} - ${job.salaryRange.max}`
                        : "Negotiable"}
                    </span>
                  </div>
                </div>
              </div>
              </Link>
            


              <button className="text-gray-400 hover:text-blue-600">
                <Bookmark className="w-5 h-5" />
              </button>
            </div>
          ))
        ) : (
          <p>No related jobs found.</p>
        )}
      </div>
    </div>
  );
}
