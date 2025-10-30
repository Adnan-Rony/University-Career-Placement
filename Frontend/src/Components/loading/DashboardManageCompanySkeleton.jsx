import React from "react";

const DashboardManageCompanySkeleton = () => {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {[...Array(10)].map((_, index) => (
            <tr key={index}>
              <th>
                <label>
                  <div className="skeleton h-4 w-4 rounded"></div>
                </label>
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="skeleton mask mask-squircle h-12 w-12" />
                  </div>
                  <div>
                    <div className="skeleton h-4 w-32 mb-1 rounded"></div>
                    <div className="skeleton h-3 w-20 rounded"></div>
                  </div>
                </div>
              </td>
              <td>
                <div className="flex flex-col gap-1">
                  <div className="skeleton h-4 w-24 rounded"></div>
                  <div className="skeleton h-3 w-20 rounded"></div>
                </div>
              </td>
              <td>
                <div className="skeleton h-8 w-24 rounded"></div>
              </td>
              <td>
                <div className="skeleton h-8 w-8 rounded-full"></div>
              </td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DashboardManageCompanySkeleton;
