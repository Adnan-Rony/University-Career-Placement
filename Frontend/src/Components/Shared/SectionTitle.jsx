import React from 'react'

export const SectionTitle = ({title,subtitle}) => {
  return (
    <div className='text-center mb-10'>
        <h1 className=' text-4xl font-bold '>{title}</h1>
        <h3 className='text-black/80 text-center font-semibold mt-5'>{subtitle}</h3>
    </div>
  )
}
