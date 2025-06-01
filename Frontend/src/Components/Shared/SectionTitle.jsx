import React from 'react'

export const SectionTitle = ({title,subtitle}) => {
  return (
      <div className=' mb-6'>
        <h1 className='lg:text-3xl text-xl font-semibold'>{title}</h1>
        <h3 className='text-r-accent font-semibold mt-4 md:mt-4 sm:mt-3'>{subtitle}</h3>
    </div>
  )
}
