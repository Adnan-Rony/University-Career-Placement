import React from "react";
import { UseInterviewSheddule } from "../../../../../hooks/useInterview.js";
import { format } from "date-fns";
import { AlertCircle } from "lucide-react";
import PostedJobsSkeleton from "../../../../loading/PostedJobsSkeleton.jsx";

const EmployerShowAllApplication = () => {
  const { data, isLoading, isError, error } = UseInterviewSheddule();
  const interviews = data?.interviews || [];

  if (isLoading) return <PostedJobsSkeleton />;

  if (isError) {
    return (
      <div className="text-red-600 flex items-center gap-2 p-4 bg-red-100 border border-red-300 rounded-md shadow-sm">
        <AlertCircle className="w-5 h-5" />
        {error?.response?.data?.message || "Failed to load interviews"}
      </div>
    );
  }

  return (
    <div className="bg-white shadow-xl rounded-xl p-6 mt-8 overflow-x-auto border border-gray-200">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        📅 Scheduled Interviews
      </h2>

      {interviews.length === 0 ? (
        <p className="text-gray-500">No interviews scheduled yet.</p>
      ) : (
        <div className="w-full">
          <table className="min-w-full text-sm table-auto">
            <thead className="bg-gray-100 text-gray-700 sticky top-0 z-10">
              <tr>
                <th className="px-5 py-3 text-left">👤 Candidate</th>
                <th className="px-5 py-3 text-left">✉️ Email</th>
                <th className="px-5 py-3 text-left">💼 Job Title</th>
                <th className="px-5 py-3 text-left">📅 Scheduled At</th>
                <th className="px-5 py-3 text-left">📡 Mode</th>
                <th className="px-5 py-3 text-left">🔗 Location / Link</th>
                <th className="px-5 py-3 text-left">📌 Status</th>
              </tr>
            </thead>
            <tbody>
              {interviews.map((item) => (
                <tr
                  key={item._id}
                  className="border-t border-gray-200 hover:bg-gray-50 transition duration-200"
                >
                  <td className="px-5 py-4 font-medium text-gray-900">
                    {item.candidateId?.name}
                  </td>
                  <td className="px-5 py-4 text-gray-600">
                    {item.candidateId?.email}
                  </td>
                  <td className="px-5 py-4 text-gray-700">
                    {item.jobId?.title}
                  </td>
                  <td className="px-5 py-4 text-gray-600">
                    {format(new Date(item.scheduledAt), "PPpp")}
                  </td>
                  <td className="px-5 py-4 text-gray-700 capitalize">
                    {item.mode}
                  </td>
                  <td className="px-5 py-4 break-words text-blue-600">
                    {item.locationOrLink || "-"}
                  </td>
                  <td className="px-5 py-4">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                        item.status === "Scheduled"
                          ? "bg-yellow-100 text-yellow-800"
                          : item.status === "Completed"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-600"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default EmployerShowAllApplication;
