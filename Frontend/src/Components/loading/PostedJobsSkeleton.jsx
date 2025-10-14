import React from "react";

const PostedJobsSkeleton = () => {
  return (
    <div className="overflow-x-auto bg-white p-5 md:mx-5 rounded-xl shadow-lg border border-gray-300 animate-pulse">
      <h2 className="text-xl font-semibold mb-4 text-gray-300 bg-gray-200 w-48 h-6 rounded"></h2>

      <table className="table w-full">
        <thead className="bg-gray-100 text-gray-600 text-sm">
          <tr>
            <th>Job</th>
            <th>Type</th>
            <th>Location</th>
            <th>Salary</th>
            <th>Deadline</th>
            <th>Applicants</th>
            <th>Posted</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody className="text-sm">
          {Array.from({ length: 5 }).map((_, idx) => (
            <tr key={idx} className="hover">
              {/* Job */}
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="w-10 h-10 mask mask-squircle bg-gray-200 rounded"></div>
                  </div>
                  <div>
                    <div className="h-4 bg-gray-200 rounded w-32 mb-1"></div>
                    <div className="h-3 bg-gray-100 rounded w-24"></div>
                  </div>
                </div>
              </td>

              {/* Type */}
              <td>
                <div className="w-16 h-4 bg-gray-200 rounded"></div>
              </td>

              {/* Location */}
              <td>
                <div className="w-20 h-4 bg-gray-200 rounded"></div>
              </td>

              {/* Salary */}
              <td>
                <div className="w-32 h-4 bg-gray-200 rounded mb-1"></div>
                <div className="w-20 h-3 bg-gray-100 rounded"></div>
              </td>

              {/* Deadline */}
              <td>
                <div className="w-24 h-4 bg-gray-200 rounded"></div>
              </td>

              {/* Applicants */}
              <td>
                <div className="w-12 h-4 bg-gray-200 rounded"></div>
              </td>

              {/* Posted */}
              <td>
                <div className="w-24 h-4 bg-gray-200 rounded"></div>
              </td>

              {/* Actions */}
              <td className="flex gap-2">
                <div className="w-10 h-6 bg-gray-200 rounded"></div>
                <div className="w-10 h-6 bg-gray-200 rounded"></div>
                <div className="w-10 h-6 bg-gray-200 rounded"></div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PostedJobsSkeleton;
