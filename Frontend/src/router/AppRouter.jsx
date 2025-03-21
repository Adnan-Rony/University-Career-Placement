import React from 'react'
import { Route, Routes } from 'react-router'
import { MainLayouts } from '../Layouts/MainLayouts'
import { Home } from '../Pages/Home'
import { SignIn } from '../Features/Authentication/SignIn'
import { SignUp } from '../Features/Authentication/SignUp'

export const AppRouter = () => {
  return (
    <div>
        <Routes>
            <Route element={<MainLayouts/>}>
            <Route path='/' element={<Home/>}> </Route>
            <Route path='/SignIn' element={<SignIn></SignIn>}> </Route>
            <Route path='/SignUp' element={<SignUp></SignUp>}> </Route>
            </Route>
        </Routes>
    </div>
  )
}
