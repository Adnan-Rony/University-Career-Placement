import React from "react";
import { Link, Outlet } from "react-router";
import { DashboardNavbar } from "../Dashboard/DashboardNavbar";
import { FaBriefcase, FaGraduationCap, FaHome } from "react-icons/fa";
import { AdminSidebar } from "./Sidebars/AdminSidebar";
import { EmployerSidebar } from "./Sidebars/EmployerSidebar";
import { JobSeekerSidebar } from "./Sidebars/JobSeekerSidebar";
import { useCurrentUser } from "../../hooks/useAuth";
export const DrawerLayout = () => {
  const { data } = useCurrentUser();

  const user = data?.user;
  const role = user?.role;
  console.log(role);

  const RenderSidebars = () => {
    switch (role) {
      case "admin":
        return <AdminSidebar />;
      case "employer":
        return <EmployerSidebar />;
      case "jobseeker":
      default:
        return <JobSeekerSidebar />;
    }
  };

  return (
    <div>
      <div className="drawer lg:drawer-open bg-[#f9f9f9] ">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div
          className="drawer-content flex flex-col  container space-y-4
         mx-auto "
        >
          <div>
            <DashboardNavbar />
          </div>
          <div className=" ">
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
            className="menu  bg-gradient-to-r from-[#f7f1fb] to-[#f6effb]
    text-base-content min-h-full w-60 p-4 space-y-3 text-base border-r border-gray-200 "
          >
            {/* Sidebar content here */}
            <li>
              <Link to={"/"} className="">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 flex items-center justify-center bg-purple-700 text-white rounded-md">
                    <FaGraduationCap />
                  </div>
                  <h2 className="font-bold text-black text-lg">JobPortal</h2>
                </div>
              </Link>
            </li>

            {RenderSidebars()}

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
