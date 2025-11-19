import React from 'react'
import { ThreeDots } from 'react-loader-spinner'

export const Spinner = () => {
  return (
   <div className="flex items-center justify-center min-h-screen bg-white/30 backdrop-blur-sm">
      <div className="animate-fadeIn">
        <ThreeDots
          visible={true}
          height="80"
          width="80"
          color="#8b5cf6"
          radius="9"
          ariaLabel="three-dots-loading"
        />
      </div>
    </div>
  )
}
