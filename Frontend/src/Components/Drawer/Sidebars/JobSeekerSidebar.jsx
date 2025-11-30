import React from "react";
import { FaBriefcase } from "react-icons/fa";
import { FaUserPen } from "react-icons/fa6";
import { MdDashboard, MdManageAccounts } from "react-icons/md";
import { Link } from "react-router";
import { CgProfile } from "react-icons/cg";
export const JobSeekerSidebar = () => {
  return (
    <div className="space-y-2">
      <li>
        <Link to={"jobseekerDashboard"}>
          <MdDashboard /> JobSeeker Dashboard
        </Link>
      </li>

      <li>
        <Link to={"jobseekerProfile"}>
          <CgProfile /> Profile
        </Link>
      </li>
      <li>
        <Link to={"jobseekerAppliedJob"}>
          <FaUserPen /> Applied Jobs
        </Link>
      </li>
      <li>
        <Link to={"jobseekerMyPortfolio"}>
        <MdManageAccounts />
          Manage Portfolio
        </Link>
      </li>

      {/* <li>
              <Link to={'jobseekerMyPortfolio'}>
                <FaUserPen /> My Portfolio
              </Link>
            </li> */}
    </div>
  );
};
