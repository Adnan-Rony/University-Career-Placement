import React from "react";
import { UseMyCompanyApplications } from "../../../../../../hooks/useApplication.js";
import { FaFilePdf } from "react-icons/fa";
import EmployerApplicationsSkeleton from "../../../../../loading/AppliedJobsSkeleton.jsx";

const EmployerApplication = () => {
  const { data: applicationsData, isLoading } = UseMyCompanyApplications();
  const applications = applicationsData?.applications || [];

  if (isLoading) {
    return (
      <EmployerApplicationsSkeleton/>
    );
  }

  if (applications.length === 0) {
    return (
      <div className="text-center py-20 text-gray-500">
        No applications submitted yet.
      </div>
    );
  }

  return (
    <div className="overflow-x-auto bg-white p-6 md:px-5 rounded-xl shadow-lg border border-gray-200">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">
        All Applications
      </h2>

      <table className="min-w-full table-auto text-sm text-left text-gray-700">
        <thead className="bg-gray-100 text-gray-600 uppercase text-xs font-semibold">
          <tr>
            <th className="px-4 py-3">Applicant</th>
            <th className="px-4 py-3">Job Title</th>
            <th className="px-4 py-3">Company</th>
            <th className="px-4 py-3">Applied Date</th>
            <th className="px-4 py-3">Status</th>
            <th className="px-4 py-3">Resume/CV</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {applications.map((app) => (
            <tr key={app._id} className="hover:bg-gray-50">
              {/* Applicant Info */}
              <td className="px-4 py-3">
                <div>
                  <p className="font-medium text-gray-900">
                    {app.applicant.name}
                  </p>
                  <p className="text-gray-500 text-xs">{app.applicant.email}</p>
                </div>
              </td>

              {/* Job Title */}
              <td className="px-4 py-3 font-medium">{app.job.title}</td>

              {/* Company */}
              <td className="px-4 py-3">{app.job.company.name}</td>

              {/* Applied Date */}
              <td className="px-4 py-3">
                {new Date(app.createdAt).toLocaleDateString()}
              </td>

              {/* Status */}
              <td className="px-4 py-3">
                <span
                  className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${
                    app.status === "Pending"
                      ? "bg-yellow-100 text-yellow-700"
                      : app.status === "Accepted"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {app.status}
                </span>
              </td>

              {/* Resume */}
              <td className="px-4 py-3">
                <a
                  href={app.resume}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 text-blue-600 hover:underline"
                >
                  <FaFilePdf className="text-red-500" /> View
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployerApplication;
