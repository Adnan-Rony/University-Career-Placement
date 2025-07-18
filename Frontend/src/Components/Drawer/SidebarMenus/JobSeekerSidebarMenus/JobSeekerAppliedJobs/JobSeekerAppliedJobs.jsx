import React, { useEffect, useState } from "react";
import PostedJobsSkeleton from "../../../../loading/PostedJobsSkeleton.jsx";
import { UseJobSeekerApplications } from "../../../../../hooks/useApplication.js";
import { formatDistanceToNowStrict, format } from "date-fns";
import { Link } from "react-router";

const JobSeekerAppliedJobs = () => {
  const { data, isLoading } = UseJobSeekerApplications();
  const jobs = data?.applications || [];

  const [now, setNow] = useState(new Date());

  // Update current time every minute for live countdown
  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  if (isLoading) return <PostedJobsSkeleton />;

  return (
    <div>
      <div className="overflow-x-auto bg-white p-5 md:mx-5 rounded-xl shadow-lg border border-gray-300">
        <h2 className="text-xl font-semibold mb-4">Applied Jobs</h2>

        {jobs.length === 0 ? (
          <div className="text-center text-gray-500 py-10">
            You haven’t applied to any jobs yet.
          </div>
        ) : (
          <table className="table w-full">
            <thead className="bg-gray-100 text-gray-700 text-sm">
              <tr>
                <th>Job</th>
                <th>Type</th>
                <th>Location</th>
                <th>Salary</th>
                <th>Deadline</th>
                <th>Status</th>
                <th>Interview</th>
                <th>Posted</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {jobs.map((application) => {
                const job = application.job;
                const interview = application.interview;
                const interviewTime = interview?.scheduledAt
                  ? new Date(interview.scheduledAt)
                  : null;
                const showJoinButton =
                  interview?.mode === "Online" &&
                  interviewTime &&
                  interviewTime > now;

                return (
                  <tr key={job._id} className="hover">
                    {/* Job Info */}
                    <td>
                      <div className="flex items-center gap-3">
                        <div>
                          <div className="font-medium text-gray-800">
                            {job?.title}
                          </div>
                          <div className="text-xs text-gray-500">
                            {job?.company?.name || "Company"}
                          </div>
                        </div>
                      </div>
                    </td>

                    {/* Type */}
                    <td>
                      <span className="badge bg-blue-100 text-blue-700 capitalize">
                        {job?.jobType || "N/A"}
                      </span>
                    </td>

                    {/* Location */}
                    <td>{job?.location || "Remote"}</td>

                    {/* Salary */}
                    <td>
                      <div className="font-medium">
                        {job?.currency}{" "}
                        {job?.salaryRange?.min?.toLocaleString()} -{" "}
                        {job?.salaryRange?.max?.toLocaleString()}
                      </div>
                      <div className="text-xs text-gray-500">
                        {job?.salaryType}{" "}
                        {job?.isNegotiable && (
                          <span className="badge badge-ghost text-green-600 border-green-300">
                            Negotiable
                          </span>
                        )}
                      </div>
                    </td>

                    {/* Deadline */}
                    <td>{format(new Date(job?.deadline), "dd MMM yyyy")}</td>

                    {/* Status */}
                    <td>
                      <span className="badge badge-outline">
                        {application.status || "Pending"}
                      </span>
                    </td>

                    {/* Interview Info */}
                    <td>
                      {interview ? (
                        <div className="space-y-1">
                          <div className="text-sm text-gray-700">
                            {format(interviewTime, "dd MMM yyyy, hh:mm a")}
                          </div>

                          {showJoinButton && (
                            <a
                              href={interview?.locationOrLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn btn-xs bg-green-100 text-green-700 border border-green-300 mt-1"
                            >
                              Join Meeting
                            </a>
                          )}
                        </div>
                      ) : (
                        <span className="text-gray-400 text-xs">
                          Not Scheduled
                        </span>
                      )}
                    </td>

                    {/* Posted */}
                    <td>{format(new Date(job?.createdAt), "dd MMM yyyy")}</td>

                    {/* Actions */}
                    <td className="flex flex-col gap-2">
                      <Link
                        to={`/job/details/${job._id}`}
                        className="btn btn-xs bg-r-primary text-white hover:bg-r-primary/90 border-none"
                      >
                        View
                      </Link>

                      {/* {interview && (
                        <div className="flex gap-1">
                          <button className="btn btn-xs border border-blue-300 text-blue-600 bg-blue-50 hover:bg-blue-100">
                            Confirm
                          </button>
                          <button className="btn btn-xs border border-yellow-300 text-yellow-600 bg-yellow-50 hover:bg-yellow-100">
                            Reschedule
                          </button>
                        </div>
                      )} */}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default JobSeekerAppliedJobs;
