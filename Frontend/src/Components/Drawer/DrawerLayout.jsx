import React from "react";
import { Link, Outlet } from "react-router";
import { DashboardNavbar } from "../Dashboard/DashboardNavbar";
import { FaBriefcase, FaHome } from "react-icons/fa";
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
      <div className="drawer lg:drawer-open bg-linear-to-t from-purple-50 to-purple-100">
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
            className="menu bg-base-300 
    text-base-content min-h-full w-60 p-4 space-y-3 text-base border-r border-gray-200 "
          >
            {/* Sidebar content here */}
            <li>
              <Link to={'/'} className="">
                <h1 className="text-2xl font-extrabold text-nowrap mb-2">
                  Job
                  <span className="text-r-primary"> Portal</span>
                </h1>
                <sub className="text-black/50">Dashboard</sub>
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
