import React from 'react'
import { FiAlignLeft } from 'react-icons/fi'
import { MdNotifications, MdOutlineMarkChatUnread, MdOutlineNotificationsActive, MdOutlineNotificationsNone } from 'react-icons/md'

export const DashboardNavbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm border-1 border-gray-300 rounded-xl my-4">
  <div className="navbar-start">

    <label className="input border-0 hidden md:block bg-base-300">
 
  <input type="search" className="grow" placeholder="Search" />
 
</label>


{/* Menubar for mobile */}
  <div className=' w-full'>
      <label htmlFor="my-drawer-2" 
     className="btn shadow  drawer-button lg:hidden 
     ">
      <FiAlignLeft />
     </label>
    </div>
    {/*  */}
  </div>
  <div className="navbar-center hidden lg:flex">
    {/* <ul className="menu menu-horizontal px-1">
      <li><a>Item 1</a></li>
    
      <li><a>Item 3</a></li>
    </ul> */}
  </div>
  <div className="navbar-end space-x-5">

<ul className=' font-bold flex items-center justify-center gap-3 '>
<li>
<MdOutlineMarkChatUnread className='text-2xl '/>
  
  
  </li>
<li>
  <MdOutlineNotificationsActive className='text-2xl'/>
  
  
  </li>
</ul>
<div className="w-12 h-12  ">
   <img className='w-full h-full rounded-xl'  src="https://img.daisyui.com/images/profile/demo/yellingwoman@192.webp" />
</div>

 
  </div>
</div>
  )
}
