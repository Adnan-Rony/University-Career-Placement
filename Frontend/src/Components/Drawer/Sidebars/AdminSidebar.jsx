import React from 'react'
import { FaBriefcase, FaChartBar, FaCogs, FaSignOutAlt, FaUsers } from 'react-icons/fa'
import { IoBusiness } from 'react-icons/io5'
import { MdDashboard } from 'react-icons/md'
import { Link } from 'react-router'

export const AdminSidebar = () => {
  return (
     <div className="space-y-2">
      <li>
        <Link to="adminDashboard" className="flex items-center gap-2">
          <MdDashboard />Admin Dashboard
        </Link>
      </li>
      <li>
        <Link to="manageCompany" className="flex items-center gap-2">
        <IoBusiness /> Manage Company
        </Link>
      </li>
      <li>
        <Link to="manageUsers" className="flex items-center gap-2">
          <FaUsers /> Manage Users
        </Link>
      </li>
          <li>
        <Link to="manageJobs" className="flex items-center gap-2">
          <FaBriefcase /> Manage Jobs
        </Link>
      </li>
      {/* 
  
      <li>
        <Link to="" className="flex items-center gap-2">
          <FaChartBar /> Reports
        </Link>
      </li>
      <li>
        <Link to="" className="flex items-center gap-2">
          <FaCogs /> Settings
        </Link>
      </li> */}
      <li>
        <Link to="" className="flex items-center gap-2 text-red-600">
          <FaSignOutAlt /> Logout
        </Link>
      </li>
    </div>
  )
}
