import React, { useState } from "react";
import { UseMyCompanyApplications } from "../../../../../../hooks/useApplication.js";
import { FaFilePdf } from "react-icons/fa";
import EmployerApplicationsSkeleton from "../../../../../loading/AppliedJobsSkeleton.jsx";

import ScheduleInterviewForm from "../../EmployerInterview/ScheduleInterviewForm.jsx";
import Modal from "../../../../../Dashboard/Modal.jsx";

const EmployerApplication = () => {
  const {
    data: applicationsData,
    isLoading,
    refetch,
  } = UseMyCompanyApplications();
  const applications = applicationsData?.applications || [];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedApp, setSelectedApp] = useState(null);

  if (isLoading) {
    return <EmployerApplicationsSkeleton />;
  }

  if (applications.length === 0) {
    return (
      <div className="text-center py-20 text-gray-500">
        No applications submitted yet.
      </div>
    );
  }

  const openModal = (app) => {
    setSelectedApp(app);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedApp(null);
    setIsModalOpen(false);
    refetch(); // refresh data after modal closes
  };

  return (
    <div className="overflow-x-auto bg-white p-6 md:px-5 rounded-xl shadow-lg border border-gray-200">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">
        All Applications
      </h2>

      <table className="min-w-full bg-white border border-gray-200  rounded-lg overflow-hidden">
        <thead className="bg-gray-100 text-gray-700 text-sm font-semibold uppercase tracking-wide">
          <tr>
            <th className="px-6 py-4 text-left">Applicant</th>
            <th className="px-6 py-4 text-left">Job Title</th>
            <th className="px-6 py-4 text-left">Company</th>
            <th className="px-6 py-4 text-left">Applied Date</th>
            <th className="px-6 py-4 text-left">Status</th>
            <th className="px-6 py-4 text-left">Interview Date</th>
            <th className="px-6 py-4 text-left">Action</th>
            <th className="px-6 py-4 text-left">Resume/CV</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {applications.map((app) => (
            <tr key={app._id} className="hover:bg-gray-50 transition-all">
              <td className="px-6 py-4">
                <div className="space-y-1">
                  <p className="font-semibold text-gray-900">
                    {app.applicant.name}
                  </p>
                  <p className="text-xs text-gray-500">{app.applicant.email}</p>
                </div>
              </td>

              <td className="px-6 py-4 text-gray-800 font-medium">
                {app.job.title}
              </td>

              <td className="px-6 py-4 text-gray-700">
                {app.job.company.name}
              </td>

              <td className="px-6 py-4 text-gray-600">
                {new Date(app.createdAt).toLocaleDateString()}
              </td>

              <td className="px-6 py-4">
                <span
                  className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${
                    app?.interview?.status === "Scheduled"
                      ? "bg-yellow-100 text-yellow-700"
                      : app?.interview?.status === "Completed"
                      ? "bg-green-100 text-green-700"
                      : app?.interview?.status === "Cancelled"
                      ? "bg-red-100 text-red-600"
                      : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {app?.interview?.status || "Not Scheduled"}
                </span>
              </td>

              <td className="px-6 py-4 text-gray-600">
                {app?.interview?.scheduledAt ? (
                  new Date(app.interview?.scheduledAt).toLocaleString()
                ) : (
                  <span className="text-sm text-gray-400 italic">
                    Not scheduled
                  </span>
                )}
              </td>

              <td className="px-6 py-4">
                <button
                  onClick={() => openModal(app)}
                  className="bg-gradient-to-r from-[#7405de] to-[#a626ec] text-white text-xs px-4 py-2 rounded-full transition"
                >
                  Set Interview
                </button>
              </td>

              <td className="px-6 py-4">
                <a
                  href={app.resume}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-blue-600 hover:underline text-sm"
                >
                  <FaFilePdf className="text-red-500" />
                  <span>View</span>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {selectedApp?.applicant?._id && selectedApp?.job?._id ? (
          <ScheduleInterviewForm
            candidateId={selectedApp.applicant._id}
            jobId={selectedApp.job._id}
            onSuccess={closeModal}
          />
        ) : (
          <p className="text-sm text-gray-500">Loading form...</p>
        )}
      </Modal>
    </div>
  );
};

export default EmployerApplication;
