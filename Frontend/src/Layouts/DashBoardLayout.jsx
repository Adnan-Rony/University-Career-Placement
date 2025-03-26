import React from 'react'
import { Outlet } from 'react-router'

export const DashBoardLayout = () => {
  return (
    <div className='mx-auto w-11/12'>
      <Outlet></Outlet>
    </div>
  )
}
