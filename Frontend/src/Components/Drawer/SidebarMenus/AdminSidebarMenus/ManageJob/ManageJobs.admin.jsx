import React from "react";
import { UseJobsForAdmin } from "../../../../../hooks/useJobs";
import DashboardManageCompanySkeleton from "../../../../loading/DashboardManageCompanySkeleton";
import { UseupdateJobStatus } from "../../../../../hooks/useAdmin";
import { Action } from "./Action";

export const ManageJobs = () => {
  const { data: jobs, isPending } = UseJobsForAdmin();
  console.log(jobs);
 const {mutate}=UseupdateJobStatus()

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
              
                  <Action id={job._id}/>
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
