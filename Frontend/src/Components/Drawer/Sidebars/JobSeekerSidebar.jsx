import React from 'react'
import { FaBriefcase } from 'react-icons/fa'
import { FaUserPen } from 'react-icons/fa6'
import { MdDashboard } from 'react-icons/md'
import { Link } from 'react-router'

export const JobSeekerSidebar = () => {
  return (
    <div className='space-y-2'>
         <li>
              <Link to={'jobseekerDashboard'}>
                <MdDashboard/> JobSeeker Dashboard
              </Link>
            </li>

            

            <li>
              <Link>
                <FaUserPen /> Profile
              </Link>
            </li>
             
    </div>
  )
}
