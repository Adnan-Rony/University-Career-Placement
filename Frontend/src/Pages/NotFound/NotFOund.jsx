import React from 'react'
import lottie from "../../../public/404lottie.json"
import Lottie from 'lottie-react'
import { Link } from 'react-router'

export const NotFOund = () => {
  return (
    <div className=' '>
        <div className="max-w-7xl mt-8 mx-auto ">
            <Lottie animationData={lottie}/>
            <div className="flex justify-center">
            <Link to={'/'}>
            <button className="btn bg-r-accent text-white">
                Back To Home
            </button>
            </Link>
            </div>
          
        </div>
    </div>
  )
}
