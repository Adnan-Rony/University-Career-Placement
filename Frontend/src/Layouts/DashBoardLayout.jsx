import React from 'react'
import { Link, Outlet } from 'react-router'

export const DashBoardLayout = () => {
  return (
    <div className='mx-auto w-11/12'>
  <Link to={'/'}>
  <button className='btn my-4 btn-primary'>Back To Home</button></Link>
      <Outlet></Outlet>
    </div>
  )
}
