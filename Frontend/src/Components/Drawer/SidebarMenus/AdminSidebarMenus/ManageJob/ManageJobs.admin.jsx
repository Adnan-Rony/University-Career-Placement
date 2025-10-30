import React from "react";
import { UseJobsForAdmin } from "../../../../../hooks/useJobs";
import DashboardManageCompanySkeleton from "../../../../loading/DashboardManageCompanySkeleton";

export const ManageJobs = () => {
  const { data: jobs, isPending } = UseJobsForAdmin();
  console.log(jobs);
 
  if (isPending) {
    return <DashboardManageCompanySkeleton />;
  }

  return (
    <div>
     
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Job Title</th>
              <th>Industry</th>
              <th>Status</th>
              <th>Posted On</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {jobs && jobs.length > 0 ? (
              jobs.map((job, index) => (
                <tr key={job._id} className="hover">
                  <th>{index + 1}</th>
                  <td>
                    <div>
                      <div className="font-bold">{job.title}</div>
                      <div className="text-sm opacity-50">
                        {job.company?.name || "N/A"}
                      </div>
                    </div>
                  </td>
                  <td>{job.industry || "—"}</td>
                  <td>
                    <span
                      className={`badge capitalize ${
                        job.status === "approved"
                          ? "badge-success"
                          : job.status === "pending"
                          ? "badge-warning"
                          : "badge-error"
                      }`}
                    >
                      {job.status}
                    </span>
                  </td>
                  <td>{new Date(job.createdAt).toLocaleDateString()}</td>
                  <td className="flex gap-2">
                    <button className="px-3 py-1 text-sm font-medium text-blue-700 bg-blue-100 rounded hover:bg-blue-200">
                      View
                    </button>
                    <button className="px-3 py-1 text-sm font-medium text-green-700 bg-green-100 rounded hover:bg-green-200">
                      Approve
                    </button>
                    <button className="px-3 py-1 text-sm font-medium text-red-700 bg-red-100 rounded hover:bg-red-200">
                      Reject
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center text-gray-500 py-4">
                  No jobs found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
