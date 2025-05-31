import React from 'react'
import { IoBusiness } from 'react-icons/io5'
import { MdDashboard, MdPlaylistAddCircle } from 'react-icons/md'
import { Link } from 'react-router'

export const EmployerSidebar = () => {
  return (
    <div>
      <li>
        <Link to="employerDashboard" className="flex items-center gap-2">
          <MdDashboard />Employer Dashboard
        </Link>
      </li>
      <li>
        <Link to="manageCompany" className="flex items-center gap-2">
        <IoBusiness /> Manage Company
        </Link>
      </li>
      <li>
        <Link to="employer/post-job" className="flex items-center gap-2">
        <IoBusiness /> Post A Job
        </Link>
      </li>
      <li>
        <Link to="employer/postedJobs" className="flex items-center gap-2">
      <MdPlaylistAddCircle /> Posted Jobs
        </Link>
      </li>
    </div>
  )
}
