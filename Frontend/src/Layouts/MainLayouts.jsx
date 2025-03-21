import React from 'react'
import { Outlet } from 'react-router'
import { Navbar } from '../Components/Navbar'


export const MainLayouts = () => {
  return (
    <div>
        <header className='w-11/12 mx-auto'>
            <Navbar></Navbar>
        </header>

      <main className='w-11/12 mx-auto'>
      <Outlet>

       
      </Outlet>
      </main>
    </div>
  )
}
