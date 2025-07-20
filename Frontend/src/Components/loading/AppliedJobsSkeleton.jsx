import React from "react";

const EmployerApplicationsSkeleton = () => {
  return (
    <div className="overflow-x-auto bg-white p-6 rounded-xl shadow-lg border border-gray-200 animate-pulse">
      <h2 className="text-2xl font-semibold mb-6 text-gray-300 bg-gray-200 w-48 h-6 rounded"></h2>

      <table className="min-w-full table-auto text-sm text-left">
        <thead className="bg-gray-100 text-gray-600 uppercase text-xs font-semibold">
          <tr>
            {["Applicant", "Job Title", "Company", "Applied Date", "Status", "Resume/CV"].map((col, idx) => (
              <th key={idx} className="px-4 py-3">{col}</th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {Array.from({ length: 5 }).map((_, index) => (
            <tr key={index} className="hover:bg-gray-50">
              {Array.from({ length: 6 }).map((_, colIdx) => (
                <td key={colIdx} className="px-4 py-3">
                  <div className="h-4 bg-gray-200 rounded w-full max-w-[150px]"></div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployerApplicationsSkeleton;
