import React from "react";
import { IoBusiness } from "react-icons/io5";
import { MdDashboard, MdPlaylistAddCircle } from "react-icons/md";
import { Link } from "react-router";

export const EmployerSidebar = () => {
  return (
    <div>
      <li>
        <Link to="employerDashboard" className="flex items-center gap-2">
          <MdDashboard />
          Employer Dashboard
        </Link>
      </li>

      {/* <li>
        <Link to="employer/managecompany" className="flex items-center gap-2">
          <IoBusiness /> Manage Company
        </Link>
      </li> */}
      <li>
        <Link to="employer/create-job" className="flex items-center gap-2">
          <IoBusiness /> Create job
        </Link>
      </li>
      <li>
        <Link to="employer/postedJobs" className="flex items-center gap-2">
          <MdPlaylistAddCircle /> Posted Jobs
        </Link>
      </li>
      <li>
        <Link to="employer/applications" className="flex items-center gap-2">
          <MdPlaylistAddCircle /> Applied Jobs
        </Link>
      </li>
      <li>
        <Link to="employer/alljobs" className="flex items-center gap-2">
          <MdPlaylistAddCircle /> Finds Jobs
        </Link>
      </li>
      <li>
        <Link to="employer/interview" className="flex items-center gap-2">
          <MdPlaylistAddCircle /> Interviews
        </Link>
      </li>
    </div>
  );
};
