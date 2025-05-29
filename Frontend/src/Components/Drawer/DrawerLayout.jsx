import React from "react";
import { Link, Outlet } from "react-router";
import { DashboardNavbar } from "../Dashboard/DashboardNavbar";
import { FiAlignLeft } from "react-icons/fi";
import { FaBriefcase, FaHome } from "react-icons/fa";
import { FaUserPen } from "react-icons/fa6";
import { MdDashboard } from "react-icons/md";
export const DrawerLayout = () => {
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col  container space-y-4
         mx-auto ">
        <div>
            <DashboardNavbar />
        </div>
          <div className="border-1 border-gray-300 rounded-2xl ">
            <Outlet />
          </div>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>

          <ul
            className="menu bg-base-300 
    text-base-content min-h-full w-60 p-4 space-y-3 text-base font-medium"
          >
            {/* Sidebar content here */}
            <li>
              <div className="">
                <h1 className="text-2xl font-extrabold text-nowrap mb-2">
                  Job
                  <span className="text-r-primary"> Portal</span>
                </h1>
                <sub className="text-black/50">Dashboard</sub>
              </div>
            </li>

            <li>
              <Link>
                <MdDashboard/> User Dashboard
              </Link>
            </li>

            <li>
              <Link to={"employer/post-job"}>
                <FaBriefcase /> Post a Job
              </Link>
            </li>

            <li>
              <Link>
                <FaUserPen /> Profile
              </Link>
            </li>

            <hr />

            <li>
              <Link to={"/"}>
                <FaHome /> Back To Home
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
