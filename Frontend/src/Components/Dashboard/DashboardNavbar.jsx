import React from "react";
import { FiAlignLeft } from "react-icons/fi";

import { UserDropdown } from "../Navbar/UserDropdown";
import { useCurrentUser } from "../../hooks/useAuth";
import { Spinner } from "../loading/loader/Spinner";
export const DashboardNavbar = () => {
  const { data,isPending } = useCurrentUser();
  const user = data?.user;
  if(isPending){
    return <Spinner/>
  }
  return (
    <div
      className="navbar bg-base-100 
     shadow-sm border-1 border-gray-300 md:rounded-xl md:my-4 "
    >
      <div className="navbar-start md:p-4">
        {/* Menubar for mobile */}
        <div className="w-full">
          <label
            htmlFor="my-drawer-2"
            className="btn shadow  drawer-button lg:hidden 
     "
          >
            <FiAlignLeft />
          </label>
        </div>
        {/*  */}
      </div>
      <div className="navbar-center hidden lg:flex"></div>
      <div className="navbar-end space-x-5">
        <ul className=" font-bold flex items-center justify-center gap-3 "></ul>
        <div className="">
          <UserDropdown user={user} />
        </div>
      </div>
    </div>
  );
};
