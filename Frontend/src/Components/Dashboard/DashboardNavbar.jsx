import React from "react";
import { FiAlignLeft } from "react-icons/fi";
import {
  MdNotifications,
  MdOutlineMarkChatUnread,
  MdOutlineNotificationsActive,
  MdOutlineNotificationsNone,
} from "react-icons/md";
import img from "../../assets/defavatar.png";
export const DashboardNavbar = () => {
  return (
    <div className="navbar bg-base-100 
     shadow-sm border-1 border-gray-300 md:rounded-xl md:my-4 ">
      <div className="navbar-start md:p-4">
     

        {/* Menubar for mobile */}
        <div className=" w-full">
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
      <div className="navbar-center hidden lg:flex">
      </div>
      <div className="navbar-end space-x-5">
        <ul className=" font-bold flex items-center justify-center gap-3 ">
          <li>
            <MdOutlineMarkChatUnread className="text-2xl " />
          </li>
          <li>
            <MdOutlineNotificationsActive className="text-2xl" />
          </li>
        </ul>
        <div className="w-9 h-9  md:w-12 md:h-12  ">
          <img className="w-full h-full rounded-xl" src={img} />
        </div>
      </div>
    </div>
  );
};
