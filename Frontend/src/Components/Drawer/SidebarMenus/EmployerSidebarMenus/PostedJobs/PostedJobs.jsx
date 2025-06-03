import React from 'react'
import { UseJobs } from '../../../../../hooks/useJobs'

export const PostedJobs = () => {
    const { data: allJobs } = UseJobs(); 
  const jobs = allJobs?.jobs || [];    
    console.log(jobs);



  return (
   <div className="overflow-x-auto bg-white p-5 rounded-xl shadow-lg border border-gray-300">
      <h2 className="text-xl font-semibold mb-4">Posted Jobs</h2>

      {jobs.length === 0 ? (
        <div className="text-center text-gray-500 py-10">
          No jobs have been posted yet.
        </div>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>Job Title</th>
              <th>Status</th>
              <th>Applicants</th>
              <th>Posted Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job) => (
              <tr key={job._id}>
                {/* Job title + logo + company */}
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={job.image} alt="Job image" />
                      </div>
                    </div>
                    <div>
                      <div className="font-semibold">{job.title}</div>
                      <div className="text-sm text-gray-500">{job.company.name}</div>
                    </div>
                  </div>
                </td>

                {/* Status */}
                <td>
                  <span className={`badge `}>
                   N/A
                  </span>
                </td>

                {/* Applicants (You can replace with real count) */}
                <td>
                  <span className="badge badge-outline">0</span>
                </td>

                {/* Posted Date */}
                <td>N/A</td>

                {/* Actions */}
                <td className="flex gap-2">
                   <button className="btn btn-sm bg-r-primary text-white hover:bg-r-primary/90 border-none">
    View
  </button>
  <button className="btn btn-sm bg-r-warning text-black border border-r-primary">
    Edit
  </button>
  <button className="btn btn-sm bg-red-600 text-white hover:bg-red-500">
    Delete
  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}
